let startTime;
let enabled = false;
let updateInterval = 100;
let updateTimer;
document.addEventListener("DOMContentLoaded", function (event) {
    update();

    document.getElementById("start").addEventListener("click", function (event) {
        //only reset start time if not comming from a pause
        if(!enabled){
            startTime = new Date().getTime();
        }
        enabled = true;
        updateTimer = setInterval(update,updateInterval);

        //should store the time in cookie
        Cookies.set("startTime", startTime);
    });
    
    document.getElementById("stop").addEventListener("click", function (event) {
        enabled = false;
        clearInterval(updateTimer);
        update();//resets timer
    });

    document.getElementById("retrive").addEventListener("click", function (event) {
        //retrive time from cookie, don't start timer though, but do enable it and refresh once
        startTime = Cookies.get("startTime");
        enabled = true;
        update();
    });
})

function update() {
    if(enabled){
        //update timer
        let ms = new Date().getTime() - startTime;
        let hours = Math.floor(ms / 3600000);
        ms = ms % 3600000;

        let minutes = Math.floor(ms / 60000);
        ms = ms % 60000;

        let seconds = Math.floor(ms / 1000);
        ms = ms % 1000;

        document.getElementById("hour").innerHTML = pad(hours, 2);
        document.getElementById("minute").innerHTML = pad(minutes, 2);
        document.getElementById("second").innerHTML = pad(seconds, 2);
        document.getElementById("millisecond").innerHTML = Math.floor(ms/100);

        if(hours == 0) {
            let divs = document.getElementsByClassName("hour");
			for (let i = 0; i < divs.length; i++) {
			  divs[i].style.display = 'none';
			}
			divs = document.getElementsByClassName("ms");
            for (let i = 0; i < divs.length; i++) {
			  divs[i].style.display = 'inline';
			}
        } else {
            let divs = document.getElementsByClassName("ms");
			for (let i = 0; i < divs.length; i++) {
			  divs[i].style.display = 'none';
			}
            divs = document.getElementsByClassName("hour");
			for (let i = 0; i < divs.length; i++) {
			  divs[i].style.display = 'inline';
			}
        }
    }else{
        //reset timer
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
        document.getElementById("millisecond").innerHTML = "0";
    }
}

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }
