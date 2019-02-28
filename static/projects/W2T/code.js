addEventListener("load", register);

var canvas, context;

var r = 255,
    g = 255,
    b = 255;

var tweak = 5;

backgroundToggle = false;

function register() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    $(canvas).on("click",function (e) {
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);

        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        var pixelRedIndex = ((canvasY - 1) * (imageData.width * 4)) + ((canvasX - 1) * 4);
        var pixelcolor = "rgba(" + pixels[pixelRedIndex] + ", " + pixels[pixelRedIndex + 1] + ", " + pixels[pixelRedIndex + 2] + ", " + pixels[pixelRedIndex + 3] + ")";

        //Set removal color
        r = pixels[pixelRedIndex];
        g = pixels[pixelRedIndex + 1];
        b = pixels[pixelRedIndex + 2];

        $("#block").css("backgroundColor", pixelcolor);
    });
}

function makeBase() {
    base_image = new Image();
    base_image.src = document.getElementById('imgUrl').value
    base_image.crossOrigin = "anonymous"; // This enables CORS
    base_image.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(base_image, 0, 0, this.width, this.height);
    }
    gtag('event', 'click', {
      'event_category': "Make Base Image",
      'event_label': document.getElementById('imgUrl').value,
    });

}

function resetColor() {
    r = 255;
    g = 255;
    b = 255;
}

function erase() {
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);

    var data = imageData.data;

    for (var y = 0; y < canvasHeight; ++y) {
        for (var x = 0; x < canvasWidth; ++x) {
            var index = (y * canvasWidth + x) * 4;

            if ((data[index] < r + tweak && data[index + 1] < g + tweak && data[index + 2] < b + tweak) &&
                (data[index] > r - tweak && data[index + 1] > g - tweak && data[index + 2] > b - tweak)) { //must be the right color
                index = (y * canvasWidth + x) * 4; //RGBA
                data[index] = 0; //Red
                data[index + 1] = 0; //Green
                data[index + 2] = 0; //Blue
                data[index + 3] = 0; //Alpha
            }
        }
    }

    context.putImageData(imageData, 0, 0);

    gtag('event', 'click', {
      'event_category': "Erase Image",
    });
}

function exportCanvas() {
    fileName = "test.png"

    var canvasElement = canvas;

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
    gtag('event', 'click', {
      'event_category': "Download Image",
    });
}



function cropImageFromCanvas() {
    var w = canvas.width,
        h = canvas.height,
        pix = {
            x: [],
            y: []
        },
        imageData = context.getImageData(0, 0, canvas.width, canvas.height),
        x, y, index;

    var data = imageData.data;

    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            index = (y * w + x) * 4;
            if (data[index + 3] > 1) {

                pix.x.push(x);
                pix.y.push(y);

            }
        }
    }
    pix.x.sort(function (a, b) {
        return a - b
    });
    pix.y.sort(function (a, b) {
        return a - b
    });
    var n = pix.x.length - 1;

    w = pix.x[n] - pix.x[0] + 1;
    h = pix.y[n] - pix.y[0] + 1;
    var cut = context.getImageData(pix.x[0], pix.y[0], w, h);

    canvas.width = w;
    canvas.height = h;
    context.putImageData(cut, 0, 0);

    gtag('event', 'click', {
      'event_category': "Crop Image",
    });
}

function toggleBackground() {
    if (backgroundToggle) {
        $(canvas).css("backgroundColor", "grey");
        backgroundToggle = false
    } else {
        $(canvas).css("backgroundColor", "white");
        backgroundToggle = true;
    }
}
