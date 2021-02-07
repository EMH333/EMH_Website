+++
author = "Ethan Hampton"
date = "2021-02-06T16:24:10+0000"
description = "The infrastructure I use on a regular basis"
draft = false
slug = "infrastructure"
tags = ["Infrastructure","Work", "Computer Science", "Software Engineer"]
title = "Infrastructure"
+++


# My Personal Infrastructure

Below is a list of the infrastructure (both digital and physical) I use on a regular basis.

Last updated: 06-Feb-2021

## Hardware:

- Dell XPS 7590 (Intel i7-9750H, 16GB RAM, 4k OLED display) running Pop!_OS 20.10
- OnePlus 7 Pro 256GB running Android 10
- A basic 1080p Dell monitor
- Logitech M570 Mouse
- Various external hard drives

## Cloud Services:  

- Backblaze - Used for backup and long term archival storage
- Azure - Hosts most infrastructure for Ethan M. Hampton Technology Consulting
- Unnamed web host service - Currently hosts website, to be migrated to Azure at a later date
- Cloudflare - Provides DDoS protection and other helpful services
- Google - Email, other random document storage, calendar, some domain registration, etc.

## Other online tools/services:

- Bitwarden - The best password manager. I use the premium version
- TickTick - A fantastic task manger and todo list service. I use the premium version
- GitHub - Git repository management for most all my projects
- Google News - Stay up to date on general news
- New York Times - College provides free subscription, great for general news and reading
- HackerNews - Good for tech related news and info
- Twitter - I try to keep this tech related + some personal stuff
- Instagram - Never post, always view (and like)
- Snapchat - This used to be (and maybe still is) the de facto messaging app for college students
- Discord - Group projects, OSU CS server and a few relating to personal interests
- Wikipedia - I watch several low traffic pages I care about, great for general research
- DEV - dev.to is a good development/computer science community, very friendly
- Netflix - I watch more than I should, but less than I could
- Nebula - Support digital creators instead of using YouTube
- YouTube - I try to keep this to educational content, I like creators who focus on quality over quantity
- Spotify - Used to swear I'd never use it, but I started and never looked back
- Signal - Secure and private messages

## Local applications and tools:

- Firefox - Exactly what I need, without the sketchiness of browser lock-in that is Chrome
- Jetbrains IDE suite - Free for students and provides significant assistance when I want it
- VS Code - For JavaScript, Golang and other related development
- Ghostwriter - A simple markdown editor, which I use quite frequently (I'm using it to write this)
- Terminator - Easy to configure and use terminal emulator
- Audacity - Simply audio projects
- Blender - Very flexible 3D rendering, 2D rendering, video editing, special effects application
- GIMP - Image editing
- Inkscape - Vector image editing
- SimpleScreenRecorder - Easy to use screen recorder software
- Thunderbird - Local email browser
- TexStudio - My preferred LaTeX editor
- Wireshark - Packet capturing and other useful analysis
- Gnome Tweaks - Better settings for the GNOME desktop environment

### Browser Extensions:

- Bitwarden
- Decentraleyes
- Facebook Container
- Feedbro
- HTTPS Everywhere
- "New Tab - Moment"
- Reddit Enhancement Suite
- Tab Manager Plus for Firefox
- uBlock Origin

### GNOME Shell Extensions:

- CPU Power Manager
- corecoding/Vitals
- Removable Drive Menu
- Sound input & output device chooser

## CLI Programs/Tools:

- `emh` - My custom command line tool that deals with what I do every day. For example, configure settings on computer startup, update apt packages, connect NFS mount to school system, SSH into various external systems, create custom aliases for commands I never remember, run backups to different locations, easily create consistent journal entries, etc.
- Hugo - A static site generator, what this website runs on
- `bat` - a better version of `cat`
- `vim` - OSU OSL convinced me to give it a try, and although I'm pretty terrible, it does what I need it to
- `nvm` - NodeJS version manager. Very helpful given how quickly the JS world seems to move
- `git-lfs` - Large file support for git. Used to manage images on this website and other larger files
- `esbuild` - The best JS/TS bundling tool, dare I say ever
- Plenty of others I am forgetting

## Preferred Tech Stack
I'm hesitant to list this, as it is likely to change frequently but I'll give it a shot

- Hosted on a virtual machine (could be containerized), served via Nginx
- Cloudflare as CDN/inline protection
- Golang/Kotlin back-end
- Currently don't have any database preference
- I recently discovered Redis, oh boy, how wonderful
- `esbuild` as front-end bundling tool
- Svelte for front-end development