---
title: "How I Leaked Database Credentials"
slug: "i-leaked-db-credentials"
tags: ["Security", "CLI", "SSH", "Linux", "Programming", "Website", "Work"]
description: "How I accidentally exposed live database credentials to the public Internet and how I went about fixing it"
aliases: []
date: 2020-07-28T2:40:00Z
author: "Ethan Hampton"
draft: false
---

Running a server can be difficult and it is very easy to leak important credentials. Much easier than you want it to be. I ended up leaking a dangerous file from one of the WordPress websites I manage, named 'wp-config.php.save' to the public internet. It contained passwords to the site database, cookie keys and cookie salts. This created a couple issues, namely the fact that anyone who could access the database server could have had full write permissions. There are a couple reasons why I don't think this happened, and most of them are due to great default protection by Azure, so I got extremely lucky. I am going to dive in to the events leading up to the incident and then what I did to resolve it.

<!--more-->

 **To be clear, this event happened Q1 2020 and to the best of my knowledge all issues have been resolved**

## The Actual Event
It started when I was running some routine maintenance on two of the websites that I maintain, nothing out of the ordinary. I was doing this because one of the websites was getting a whole bunch of invalid login requests to the 'admin' user. This isn't anything out of the ordinary for the public Internet but I was getting alerts every hour or so and it was getting annoying. I don't have an 'admin' user on any website I maintain for this exact reason, so I can just block all people who try to log in with that username. Simple enough of a fix. I made the change blocking those requests and updated a few things before moving on to the next website.

The new website was the one hosted on my own server (on Azure) and so I had set up the Nginx configuration myself as well. I realized that I had not installed any sort of advanced security protection on the site. This isn't strictly necessary but it makes it a lot easier from a piece of mind perspective. I decided that I should do this and so installed the necessary plugins. 

Once everything was installed, the plugin recommended that I run a simple security scan to make sure everything was configured correctly. I put it in low resource mode and hit go. It took about 10 minutes (I shouldn't have used low resource mode) and found two issues. This wasn't a crazy deal to me since if they were minor I probably wasn't going to fix them. It turns out that was not the case. The errors were warning me that `websiteurl.com/wp-config.php.save` and `websiteurl.com/.users.ini` were both being leaked and potentially contained sensitive information. 

It took me more time than I would like to admit to realize just how critical this was and although I had a midterm later that day, I knew I needed to fix this yesterday if this was in fact a confirmed issue. I entered the URLs in my browser and sure enough, it prompted me to download the file, which I did. That put me into a bit of panic so I began debugging. First priority was to fix it (stop the flow of sensitive information) then I could figure out how it happened and if anything was affected (prevent it from happening again).

I was using Nginx, so all I needed to do was add a rule blocking those URLs from access in order to stop the leak. This turned out to be pretty simple and I managed to deploy a patch and reload Nginx in maybe 7 minutes from discovery. When I tried the URL again, it still asked me to download it, so my fix hadn't worked. I continued to make changes and deploy them, but some point I realized that caching may mean my changes weren't being reflected. I hide many of my websites behind Cloudflare for a variety of reasons but because of this, static files get cached upstream so I needed to clear their cache manually. I did that and the issue still wasn't solved. Next, I looked at my browser's network tab on the developer console and realized that it also cached the request. Once I forced the browser to ignore the cache for a bit, I was good to go and the root issue was solved.

## Logs
Next, I needed to make sure I was the only one who accessed those files. If that wasn't the case, I might have a bigger problem on my hands. I promptly downloaded all the access logs that I could in order to see if the pages had been accessed. I then uncompressed them and ran a search for `index.php.save` using `grep`. This was the only file leaked that actually contained sensitive information. Turns out there were only 4 requests for the file. 2 were me and the other 2 were the scanning system. This helped convince me that the impact wouldn't be as large. The one note here is that the system only kept logs for 14 days. This hampered my ability to insure that the file was actually never accessed by someone other then myself.

## Impact
The actual impact is pretty small all things considered. The reasons for this are as follows:

1) Azure provides a very sane firewall by default. If someone were to have found the file, they wouldn't be able to access the database because the database port is blocked, and SSH access is only allowed from IPs I know I will be using (school and home). This exploit would need to be used in conjunction with others to even get close to database access (and even then I believe the user can only work in 1 specific database and doesn't have write or read to others).

2) The actual server IP is hidden behind Cloudflare. This isn't to say it couldn't be found, but it would take a bit more work and creates more complexity for bad actors.

3) No requests were made in the last 14 days from bad actors for that URL. This is a really good thing because generally if there were requests in the last 14 days, there would have been requests before then, but this isn't an example of that. I can't promise that no one else downloaded the file but the odds are pretty good.

4) WordPress uses industry standard hashing for stuff like passwords. I didn't reuse my password for the website so it doesn't impact me, but other people might have. WordPress uses good security so even if they did reuse passwords, AND bad actors managed to gain access, it would still be difficult to do anything with the information.

## Analysis 
So with any incident report, it is important to go into an analysis of what happened and what I can do to make sure it never happens again. Along those lines:

- I need to make sure I install automated security scanning earlier in the process of running a website. The thing that caught the issue many months after the initial problem would also have done so when it first appeared. 
- Logs take up so little space that there is no reason to keep them around for longer. Yes, if you are running a large website or someone is dead set on attacking you this can be an issue but for the most part, they take up a very small amount of space, especially taking into consideration compression. Yes, I am ignoring GDPR and other privacy laws that I am in favor of here but that is a different issue (and one I hope to address in another article).
- When there is an issue, caching can easily come up as an issue that gets in the way of resolution of the wider event. This reminds me of something I heard, "there are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors"
- I need to be aware of all the things that go on behind the scenes that keeps things running. This is the stuff like log rotate and other automated services that keep my server safe and secure


## Action Items
So what did I do/am going to do about these issues? Well for starters, I increased the logging for all sites on that server to 30 days. I will continue to monitor disk usage and adjust if needed. ~~Additionally, I will be doing a full security audit of all my web properties in the next week or so to make sure I am not missing anything else. This sort of thing doesn't take more then a few hours and is well worth it.~~ I have completed the audit and things look good! Finally, I will continue to educate myself about the goings on of my server and the steps I can take to improve them. As a software engineer, you are constantly learning and making mistakes. I need to accept this was one of them. I am very lucky this happened at a small scale and had little impact. Even for a website getting a few views a day (like my own) it could have been a much bigger problem. 

Thank you for reading and hopefully you can learn as much from my mistake as I have. 