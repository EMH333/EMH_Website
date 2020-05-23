---
title: "Well That's Neat!"
slug: "thats-neat"
tags: ["Golang", "Programming", "Website", "Content", "Blog", "Create"]
description: "Announcing a new sidebar feature of my blog that shows a list of links I find really interesting and think other people would too"
date: 2020-05-23T12:36:42-07:00
author: "Ethan Hampton"
draft: false
---
I just finished deploying the first dynamic part of my new website! You will notice now there is a new section on the sidebar that displays a random assortment of links from around the web. This is my "Neat things" list. 

<!--more-->

The actual idea for this came up a while ago but I never had the time to deploy it. It always felt like it would be too hard or complicated while not providing much benefit. In this past week though, I took some time and decided to just give it a shot. Turns out it was worth it and although the infrastructure and concept is super simple, the execution turned out pretty well.

## Some Behind The Scenes

The Neat application is a Golang server hiding behind a Ngnix proxy on my own private cloud hosted server. There is some JavaScript code that runs n your browser to fetch from `https://neat.ethohampton.com/json` which returns a list of the URLs and their descriptions. The nice thing about this is that it updates dynamically, additionally if a browser doesn't support `fetch()` (looking at you IE11) then it just won't show up, and if a user disables JavaScript then they won't see any errors either. If you want to see the code for the actual application, you can [find it on Github](https://github.com/EMH333/Neat).

If I want to add a link, I go to a "secret" URL and enter the description, URL and a password. I didn't actually use any hashing or complicated things here because I will be the only one who ever uses it and I have quite a long random password generated. If it were to become compromised, the worst someone could do is spam my website with a whole bunch of links to adult content. Yes I know this is terrible security and I should never use this in production. Links are striped of XSS ability on client side. Additionally, there is a cron job running to update and rebuild the binary once a day so I don't really have to do a ton to update it either. 

I also designed the application with flexibility in mind so perhaps at some point it will post to a Twitter account when I add a link (by then I will definitely use a secure password system). I also could add some sort of link analytics using [my own DIY link shortener](https://github.com/EMH333/Shortener). The next thing on my list is to have a dedicated site that lists all the links I have added before instead of the most recent 5 as seen on the sidebar. There are a lot of possibilities!

## Conclusion

Why the name Neat? Well two reasons, first, there are some seriously **neat** things on the Internet that I want to highlight and this project does this. Second, even though I am not of legal drinking age, a neat drink is one served with no ice and at room temperature (so essentially the most straightforward drink you could order), which is essentially what this project is, super simple and doesn't have a ton of frill. 

I hope to put links here that highlight just how cool the Internet is and show projects that need more attention. I won't be adding links to things like the Google homepage or popular projects like React but will strive to highlight the projects or conversations that interest me. Thanks for reading and I hope you find some of my finds useful!