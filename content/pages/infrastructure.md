+++
author = "Ethan Hampton"
date = "2021-02-06T16:24:10+0000"
description = "The infrastructure I use on a regular basis"
draft = false
slug = "infrastructure"
tags = ["Infrastructure", "Work", "Computer Science", "Software Engineer", "DevOps"]
title = "Infrastructure"
+++


# My Personal Infrastructure

Below is a list of the infrastructure (both digital and physical) I use on a regular basis.

As a result of my current infrastructure setup, a critical failure on part of Cloudflare, Azure or Google would cripple my online presence. This is something I am actively working to defend against by slowly moving to infrastructure that I have direct control over. Cloud services are incredibly convenient which has slowed that transition.

**List Last Updated: 13-Jul-2025**

## Hardware:

- DIY Ryzen 9 7900X, 32GB RAM, Radeon RX 7600, Alienware curved monitor, running Pop!_OS 22.04 LTS
- Dell XPS 7590 (Intel i7-9750H, 16GB RAM, 4k OLED display) running Pop!_OS 22.04 LTS
- Samsung Galaxy S23 Ultra (Android)
- Logitech M570 Mouse
- Yamaha P125 Piano Keyboard
- Yubikey 5C NFC (for two-factor authentication)
- Garmin Forerunner Smart Watch
- Various external hard drives

## Cloud Services:

- Backblaze - Used for backup and long term archival storage
- Azure - Hosts most infrastructure for Ethan M. Hampton Technology Consulting
- Cloudflare - Provides DDoS protection and other helpful services
- Google - Email, other random document storage, calendar, some domain registration, etc.

## Other online tools/services:

- Bitwarden - The best password manager. I use the premium version
- TickTick - A fantastic task manger and todo list service. I use the premium version
- GitHub - Git repository management for most all my projects
- NPR - National Public Radio is a awesome neutral source for news
- New York Times - Great for general news and reading
- HackerNews - Good for tech related news and info
- Instagram - Never post, always view (and like)
- WhatsApp - Primary messaging app while studying abroad, used to keep in touch with folks from that part of my life
- OpenStreetMaps - I contribute regularly and use CoMaps as my primary map application on mobile
- Discord - Lurking on the OSU CS server and a few relating to personal interests
- Wikipedia - I monitor several low traffic pages I care about, great for general research
- Nebula - Support creators directly instead of using YouTube
- Dropout - Support creators directly instead of using YouTube
- YouTube - I try to keep this to educational content, I like creators who focus on quality over quantity
- Spotify - Used to swear I'd never use it, but I started and never looked back
- Signal - Secure and private messages
- Phoronix - Linux news and updates

## Local applications and tools:

- Firefox - Exactly what I need, without the sketchiness of browser lock-in that is Chrome
- VS Code - Primary IDE
- Ghostwriter - A simple markdown editor, which I use quite frequently (I'm using it to write this)
- Obsidian - A more featured markdown editor, I manage a lot of private notes and writing in my Obsidian vault
- Terminator - Easy to configure and use terminal emulator
- Audacity - Simple audio projects
- Blender - Very flexible 3D rendering, 2D rendering, video editing, special effects application
- GIMP - Image editing
- Inkscape - Vector image editing
- Kdenlive - Video editing
- DigiKam - Photo library management 
- Thunderbird - Local email browser
- TexStudio - My preferred LaTeX editor
- Wireshark - Packet capturing and other useful analysis
- Gnome Tweaks - Better settings for the GNOME desktop environment

### Browser Extensions:

- Bitwarden
- Facebook Container
- Feedbro
- HTTPS Everywhere
- "New Tab - Moment"
- Reddit Enhancement Suite
- uBlock Origin
- Firefox Translation

### GNOME Shell Extensions:

- corecoding/Vitals
- Removable Drive Menu

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
- Golang back-end
- Currently don't have any database preference
- Redis for caching
- `esbuild` as front-end bundling tool
- Svelte for front-end development
