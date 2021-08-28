---
title: "Simple Is Better (Mostly)"
slug: "simple-is-better"
tags: ["website", "programming", "content", "life", "junior"]
description: "Simple solutions for simple problems create the best solutions"
aliases: []
date: 2021-08-28T14:49:56-07:00
author: "Ethan Hampton"
draft: false
---
Simple solutions for simple problems often create the best solutions. When you have control over the entire situation, then there is very little point in adding unneeded complexity.
<!--more-->
For example, I recently brought the templates and themes for this website into the same repository as the actual content. If I was a business then it would make sense to keep them separate. Now it's much easier for me to keep track of all the content.

Or, in order to create and publish this post, I only need 3 commands (and some writing). `hugo new posts/2021/Simple-Is-Better.md` to create the file, then I open and edit. Once I'm done, I just have to add it to the repository with `git commit -am"Simple is better"` and update the site with `git push`. That's all I need to publish a blog post because of the automation I have set up. That system makes me more likely to write stuff like this when the inspiration strikes me.

For more complex problems, the target shouldn't be simplicity but rather friction reduction. Building a monorepo of C++ code isn't always easy, with scripts and build tools the solution isn't simple but it makes it easy to get exactly what you want. My current workplace does this and it means programmers spend less time teaching electrical engineers how to build/compile complex debugging tools.

Looking back, many of the things that I have built over the years have been complex in some capacity. And more often than not, the complex things have failed. Simple solutions are the kind that I need to work on the most. In job interviews when I'm asked about a weakness, I'll often respond that when given a task with potential to grow in scope I will avoid the simple solutions. Sometimes it pays off but especially at the start, keeping simple is the best path forward. Keep it simple stupid!