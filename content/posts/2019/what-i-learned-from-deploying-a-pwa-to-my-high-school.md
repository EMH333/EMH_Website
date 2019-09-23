+++
author = "Ethan Hampton"
date = ""
description = ""
draft = true
slug = "high-school-pwa-deployment"
tags = []
title = "What I learned from deploying a PWA to my high school"

+++
It was the end of my junior year of high school and I was tired of trying to figure out if it was an "A" or "B" day according to my high schools A/B block schedule. Plus, it was approaching finals time and no one was really sure what finals periods were went. I decided that I should look into making some sort of app that could help me and other students determine what classes they should be going to that day.

## The Tech

I eventually started building everything and it kind of happened naturally without a lot of planning. I know I am fortunate in that regard. As a high school student, I didn't want to spent the time and money to develop an app because it would cost at least $125 in start up costs to distribute the app for the first year and I didn't have a Mac easily accessible for iOS development. I explored other options that would have allowed me to use my Ubuntu machine to develop iOS apps but it wasn't worth the time or effort.

I found a couple different articles explaining the concept of a progressive web app and they showed how it could be installed similar to a normal app and used offline. The real incentive was support for additional PWA features in iOS 11.3 ([see this article for additional information](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)). As most of my classmates used iPhones, if I was going to release something, I had to make sure it would work well for the vast majority of students. I wasn't really worried about Android because they seemed to be on the front of PWA development and had all the features I needed (I don't actually care about keeping state).

The nice thing about the problem I had was that it was simple to solve with minimal infrastructure. Everything could be client side and there were no user accounts needed or any sort of server side operation other than to serve the files. Although I wasn't a total JavaScript pro, I knew that everything would be simple enough that I could Google it or look it up on Stack Overflow.

Eventually I decided on my stack. HTML, SCSS and JavaScript using [Gulp](https://gulpjs.com/) as my build system, [Picnic CSS](https://picnicss.com/) as a CSS library and [Umbrella JS](https://umbrellajs.com/) as my jQuery replacement. I probably didn't need Umbrella but it actually saved a lot of time and was so small a dependency that I didn't mind having it. I didn't really understand the concept of React or Vue at the time and felt that they would be too complex for my needs. I am really glad I made that decision because it has given me a ton of flexibility to grow in a direction comfortable with the scale I am operating at.

The idea of a progressive web app is that you have a `manifest.json` file that includes details such as how to display the app (fullscreen, with a browser bar, standalone), what the theme color is, what icons you want to use, the start URL of the app and what the actual name of the app is. Additionally, you can include a service worker which is essentially a programmable proxy for your website that allows you to cache files offline. The nice thing about this is that it updates when you use the website so it can update content in an intuitive way for me and users don't even notice because if they are online, it just grabs fresh copies of the pages and files like any other website and then caches those for the next request. In order for the website to work offline, you do need a service worker but if for whatever reason the browser doesn't support it or it is disabled, the website can still function normally.

The interface for the app is very minimal with a maximum of 4 pages available to the user at any time (Home, What time classes switch, About, and finals schedule). It also makes it very easy to use by displaying the information the app actually is meant to provide front and center when you first load it up. I am definitely not a designer but I think that what I ended up on works pretty well and serves its purpose.

## The Launch

I essentially shot myself in the foot by releasing the app and the end of a school year however I actually ending up treating it as a soft launch because I didn't really try to advertise. I did tweet about it and my school picked it up and one of the vice principals asked for my help to install it which hinted at the largest problem my app faces.

No one knows what Progressive Web Apps are. I initially didn't have any sort of install prompt or anything indicating how to install the app for iOS and given that students at my school were not known for their tech knowledge that prevented a lot of students from understanding how to install the app. I think that is one of the biggest things that I took away from this whole experience is that people who are not familiar with front-end web development don't realize that you can install web applications on your phone (and computer). With a little bit of work I added an iOS install prompt and that seemed to help installations a bit (quite a lot).

I got a little bit of recognition from people and a lot of it was positive. There were a couple of bugs that were easy to fix and they helped improve the overall user experience really well. 