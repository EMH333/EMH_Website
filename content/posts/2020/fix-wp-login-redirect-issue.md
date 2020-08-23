---
title: "Fix WordPress Login Infinite Redirect Issue"
slug: "fix-wp-login-infinite-redirect"
tags: ["wordpress", "blog", "cloudflare", "website", "redirect"]
description: "How to fix WordPress https website infinite redirect when visiting wp-login.php"
aliases: []
date: 2020-08-23T14:42:36-07:00
author: "Ethan Hampton"
draft: false
---

When changing the base URL of a WordPress site to use https, sometimes when visiting the login page (`https://example.com/wp-login.php`) the site will refuse to load. I have run into this issue several times and this will show how to solve it.

<!--more-->

The issue is caused by a reverse-proxy or load-balancer that sits in between the website and the end user. For example, I use Cloudflare and the flow looks like this:

User <--> Cloudflare <--> Server

If you have Cloudflare set to do https to the user but "flexible" to the server (and you don't have https on the server) then from the server's perspective it will look like the user is connecting insecurely even if they are secure through Cloudflare. From there the server will attempt to redirect to the secure site even though they are already there resulting in an infinite redirect loop. 

Note that this isn't the recommended way to do things because it is insecure between Cloudflare and the server but sometimes there isn't a choice. 

## Actually solve the issue

Luckily Cloudflare sends a header specifying if the user is using https to their edge so we can piggyback on that to get rid of the issue. All that is needed is these few lines in the `wp-config.php` of the website.

```php
define('FORCE_SSL_ADMIN', true);
// HTTP_X_FORWARDED_PROTO might
// contain a list (e.g. http,https) so check for https
if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false)
	$_SERVER['HTTPS']='on';
```

This code forces the admin pages to use HTTPS (good security, yay) and then check to see if the X-Forwarded-Proto header contains "https". If it does then we set the variable telling the server we are using https to 'on' which means WordPress doesn't have to redirect. It's that simple!

If using Nginx and it still isn't working because your reverse-proxy/load-balance server doesn't forward that header then add "`add_header X-FORWARDED-PROTO https;`" to your configuration and it should be good to go.

If problems still occurs, email me at [etho@ethohampton.com](mailto:etho@ethohampton.com) and I can help consult on the solution.