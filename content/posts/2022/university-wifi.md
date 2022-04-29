---
title: "Ubuntu 22.04 Can't Connect to University WiFi"
slug: "ubuntu-2204-legacy-wifi-authentication"
tags: ["Ubuntu", "Work", "Programming", "Linux"]
description: "Solving the unsafe legacy renegotiation disabled error on Ubuntu 22.04 and Pop!_OS 22.04"
aliases: []
date: 2022-04-26T12:57:00-07:00
author: "Ethan Hampton"
draft: false
---
I recently updated to Pop!_OS 20.04 and was unable to connect to the wifi networks at my university. The root cause was the upgrade to OpenSSL 3 (which was long overdue). The below information demonstrates how I was able to fix the issue.
<!--more-->

The actual error I was seeing was `unsafe legacy renegotiation disabled` from wpa_supplicant and OpenSSL. The actual error log:

```
$ sudo journalctl -eu wpa_supplicant
wpa_supplicant[744]: wlp59s0: SME: Trying to authenticate with 6c:c4:9f:9f:bb:b1 (SSID='eduroam' freq=5700 MHz)
wpa_supplicant[744]: wlp59s0: Trying to associate with 6c:c4:9f:9f:bb:b1 (SSID='eduroam' freq=5700 MHz)
wpa_supplicant[744]: wlp59s0: Associated with 6c:c4:9f:9f:bb:b1
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-EAP-STARTED EAP authentication started
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-EAP-PROPOSED-METHOD vendor=0 method=26 -> NAK
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-EAP-PROPOSED-METHOD vendor=0 method=25
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-EAP-METHOD EAP vendor 0 method 25 (PEAP) selected
wpa_supplicant[744]: SSL: SSL3 alert: write (local SSL3 detected an error):fatal:handshake failure
wpa_supplicant[744]: OpenSSL: openssl_handshake - SSL_connect error:0A000152:SSL routines::unsafe legacy renegotiation disabled
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-EAP-FAILURE EAP authentication failed
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-DISCONNECTED bssid=6c:c4:9f:9f:bb:b1 reason=23
wpa_supplicant[744]: wlp59s0: CTRL-EVENT-SSID-TEMP-DISABLED id=0 ssid="eduroam" auth_failures=1 duration=10 reason=AUTH_FAILED
wpa_supplicant[744]: BSSID 6c:c4:9f:9f:bb:b1 ignore list count incremented to 2, ignoring for 10 seconds
```

A few searches revealed that this had come up as people were [updating to Fedora 36 as well](https://ask.fedoraproject.org/t/cannot-connect-to-wpa2-enterprise-university-wifi-eduroam-on-fedora-36/20288/5). Unfortunately this wasn't helpful because the OpenSSL config location and setup differs a bit between distributions. Update (28-Apr-2022): [Fedora 36 lists this as a blocker for release](https://bugzilla.redhat.com/show_bug.cgi?id=2072070) (that linked thread goes into more detail about the origins of the problem).

At last I found a [relevant mailing list message](https://www.mail-archive.com/desktop-packages%40lists.launchpad.net/msg680651.html) that solved the issue. The  easy way to solve this is to edit the file at `/etc/ssl/openssl.cnf` to support the legacy renegotiation

## Solution for Ubuntu 22.04 (or Pop!_OS 22.04):

Edit the config with  
`$ sudoedit /etc/ssl/openssl.cnf`

Add the following after the `[openssl_init]` and `providers = provider_sect` lines:
```diff
  [openssl_init]
  providers = provider_sect
+ ssl_conf = ssl_sect
+   
+ [ssl_sect]
+ system_default = system_default_sect
+   
+ [system_default_sect]
+ Options = UnsafeLegacyRenegotiation	
```

Then we need to restart the service so the changes take effect:  
`$ sudo systemctl restart wpa_supplicant.service`

## Longer Term

Ideally the organization providing the network will update their system so this isn't necessary (the default was changed for a reason). Until then, this hack should work just fine.

If you are hesitant to change the default config, you can follow the instructions in the [mailing list instead](https://www.mail-archive.com/desktop-packages%40lists.launchpad.net/msg680651.html) which create a copy of the config only for use when connecting to wifi.