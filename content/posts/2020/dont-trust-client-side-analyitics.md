---
title: "Don't Trust Client Side Analytics"
slug: "dont-trust-client-side-analytics"
tags: ["Analytics", "Trust", "Data", "Scale", "Work", "Website"]
description: "Although tools like Google Analytics are nice, they don't do a great job of providing the whole picture"
aliases: []
date: 2020-03-10T22:19:30Z
author: "Ethan Hampton"
draft: false
---

The moral of this story is don't trust client side analytics.

I enable uBlock Origin (a tracking/ad blocker) on ethohampton.com. Seriously, on my own website. I don't even have ads that I might need to block. So why, you might ask don't I have my own domain on my unblocked list?

<!--more-->

My reasoning comes down to the fact that Google Analytics was tracking my every move and apparently I differ in usage from a normal user (checking the same page over and over again to see if a CSS error is fixed isn't really normal). I had issues this this in the past when it was originally on my unblocked list but I removed the exception. This way my actions don't affect my raw analytical data. And thus my point. I made the conscious decision to block my website from tracking me but I also block literally hundreds of websites a month through by default blocking. And it isn't only me.

My data screws up the metrics only because I don't receive enough traffic to hide behind the averages. But it is worth noting that [over 26% of Internet users block ads as of 2016](https://www.iab.com/insights/ad-blocking-blocks-ads-win-back/) (which is now 4 years ago, crazy), so if using some sort of client side tracking, it is safe to assume that it is ignoring 25% or more of your users.

Without an ad blocker of some sort, much of the web becomes unusable for a variety of reasons. Often, ads consume more bandwidth then the actual content of the pages they are loading on resulting in draining through laptop battery usage and excessive CPU load that slows everything else down. Additionally, companies like Google, Facebook and a ton of lesser known but equally scare firms use ads and trackers to figure out your preferences. That's a quick overview of why I block ads pretty much everywhere although sites like Wikipedia, DuckDuckGo, and a few other good eggs I do in fact allow to show me ads to help support them. If there are so many disadvantages to ads for a user and it is so easy to install an ad blocker, it quickly becomes clear why some many people are deciding to head in that direction.

I do some consulting for an e-commerce business and because of this I have access to their website analytics. They aren't accurate. Now I can't say this for sure because I don't know every single user who visits their site. 
Regardless, to increase accuracy it would take a lot more time and money that doesn't really matter for what we are using it for anyway. They are in an industry that tends to draw a lot of older web users. This will skew their statistics more in their favor which is a good thing but also underlines the importance of knowing your audience. Unlike the US Census Office (more on that later), they don't need to get perfect data, they just need to know enough data to make business decisions such as how to spend money advertising and how well their social media channels are working.

The only data you can fully trust is data that is coming directly from resources you have full control over. The data for how many requests your web server received (assuming it is reporting correctly) can be fully trusted. You may, in that case, also run into things like bots and spammers, but clever filtering can get you a lot further then having to account for unknowns in data you never had control over in the first place.

This is the sort of situation where the US Census needs to be very close to perfect accuracy. The people they count (and don't manage to count) have a very real impact on politics for the next 10 years. This is why they [reviewed 100% of US addresses in 2019](https://www.census.gov/content/dam/Census/library/factsheets/2019/dec/address-canvassing-by-the-number.pdf). This allows them to be super accurate when sending out letters inviting people to submit their information online. Additionally, they can determine which sections of the nation need to be [counted in person or with a written form](https://www.census.gov/content/dam/Census/library/factsheets/2019/dec/how-census-invites-everyone.pdf). They are essentially using verified "client side" analytics because they go back and check things that don't look right. Finally, for the 2020 Census they have true data privacy. Previously, using Census data you could determine the identity of around 18% of Americans. Due to privacy laws regarding the census, this couldn't be the case for the 2020 Census. As a result, [the 2020 US Census will purposely change data to protect user privacy](https://www2.census.gov/about/policies/2019-11-paper-differential-privacy.pdf). We can trust their data without worry because they put so much effort into correcting it. I can't say the same about the data from website visitors.

I am telling you this because you aren't the US Census Bureau and don't need "perfect" data. In fact, if you have perfect data then you should probably change it to protect user privacy then send me an email detailing how you did it ([etho@ethohampton.com](mailto:etho@ethohampton.com)). Even though your data isn't perfect, it is very important to realize what biases may exist within that data and make sure that you are taking steps to counteract them. Such as not trusting client side analytics data. 
For my own website, I can probably estimate 20-30% more people visit then what I am recording although because I have a low number of visitors regardless, this could be way off. For the e-commerce business, I would feel comfortable saying they receive 10-20% more visits then are being recorded but since the outcome of those visits aren't being recorded either, there isn't a big change needed in their decisions. I think the 80/20 rule (20% of data for 80% of decisions) applies here. I intend to be more aware of my biases regarding client side data moving forward and you should too.