---
title: "Don't Trust Client Side Analytics"
slug: "dont-trust-client-side-analytics"
tags: ["Analytics", "Trust", "Data"]
description: "Although tools like Google Analytics are nice, they don't do a great job of providing the whole picture"
aliases: []
date: 2020-03-10T22:19:30Z
author: "Ethan Hampton"
draft: false
---

The moral of this story is don't trust client side analytics.

I enable uBlock Origin (a tracking/ad blocker) on ethohampton.com. Seriously, on my own website. I don't even have ads that I might need to block. Why, you might ask?

<!--more-->
First off, I used to try to make money off of this content (through ads) until I realized that there was little point. I wouldn't make anything significant and if I even generate enough views to make any cold hard cash, it wouldn't be professional. So I can say that ethohampton.com does not contain any ads and never will (leaving the option open for referral based stuff, but that is highly unlikely). Thus the lack of ads.

The actual reason comes down to the fact that Google Analytics was tracking my every move and apparently I differ in usage from a normal user (checking the same page over and over again to see if a CSS error is fixed isn't really normal). This way my actions won't affect my raw analytical data. And thus my point. I made the conscious decision to block my website from tracking me but I also block literally hundreds of websites a month through by default blocking. And it isn't only me.

My data screws up the metrics only because I don't receive enough traffic to hide behind the averages. But it is worth noting that [over 26% of Internet users block ads as of 2016](https://www.iab.com/insights/ad-blocking-blocks-ads-win-back/) (which is now 4 years ago, crazy), so if using some sort of client side tracking, it is safe to assume that it is ignoring 25% or more of your users.

I do some consulting for an e-commerce business and thus I have access to their website analytics. They aren't accurate. Now I don't know this for sure, and to increase accuracy it would take a lot more time and money, which is why I haven't mentioned anything actionable to them about it, but it is important to remember. They also are in an industry that tends to draw a lot of older web users. This will skew their statistics more in their favor which is a good thing but also underlines the importance of knowing your audience. 

The only data you can fully trust is data that is coming directly from resources you have full control over. The data for how many requests your web server received (assuming it is reporting correctly) can be fully trusted. You may, in that case, also run into things like bots and spammers, but clever filtering can get you a lot further then having to account for unknowns in data you never had control over in the first place.

Very rarely should you just be able to trust the data that is given to you. For example, [the 2020 US Census will purposely change data to protect user privacy](https://www2.census.gov/about/policies/2019-11-paper-differential-privacy.pdf). This is the sort of change in data that they have control over, how ever as they also say in security, as soon as it is client side you can't trust it. This isn't to say you can't pull some value from it, but you also need to recognize where your inaccuracies lie and how that affects your data.