---
title: "Create Your Own CLI"
slug: "Create-Your-Own-CLI"
tags: ["programming","bash","CLI","junior", "linux", "ubuntu"]
description: "Create your own command line interface for commonly used commands"
aliases: []
date: 2019-07-09T21:36:43-07:00
author: "Ethan Hampton"
draft: false
---
It bothered me for a while that I had to type `sudo apt update` and then `sudo apt upgrade` in order to update my Ubuntu Linux system.
It just felt like there had to be an easier way to figure out what to update and just upgrade it with one command in an easy to use way. 

Eventually I realized I could just write my own bash script and execute it from the command line. This post will go into a bit of detail about how I did that.
<!--more-->
## Actually Run From Command Line
In order to actually run my command, I had to figure out some of the basics. So, I created a script as a proof of concept:

```bash
#!/bin/bash

echo "Ethan Hampton's command line tool!"
```

It took a bit of searching to figure out where to place it but eventually I discovered I could put it in my home directory in the "bin" folder (`$HOME/bin`)
and by default Ubuntu would allow me to run that from the command line. 

I typed '`emh`' into the command line (that is what I titled the file), and it outputed '`Ethan Hamptons command line tool`'. Just like I wanted! I should mention I titled the program
"emh" because those are my initials and they are easy to remember plus they are short.

Now on to the fun stuff! I had to figure out how to do something along the lines of '`emh update`' which is the command I wanted to run in order to update my system. It turns out that
bash makes it super simple to look at additional command line arguments. The resulting code looked like:

```bash
#!/bin/bash

echo "Ethan Hampton's command line tool!"

if [[ $1 = 'update' ]] 
then
	echo "Now update System"
fi
```

Now all I had to do was get it to actually update the system when I typed '`emh update`'. Which is actually as simple as replacing that echo command with:
```bash
echo "Updating System, please enter sudo password:"
sudo apt update
sudo apt upgrade
```

I also have some additional 'run' functionality with `emh.json` files but I will cover that in another post once the code for that is public. You can add additional features or commands
if you like simply by creating another if statement and putting the commands you want to run in there. 
It is worth noting I could have created aliases or done some other stuff to do this same thing but I wanted to give this a shot. I know this isn't best practice code either but I had 
to start somewhere and it works for my use case. I will do a refactor if needed.

Thanks for following along and hopefully this helped someone work on their own personal command line interface!
