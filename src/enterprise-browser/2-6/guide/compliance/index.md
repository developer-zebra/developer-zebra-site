---
title: TLS/SSL Security Compliance
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---
## Overview

Devices running Android 4.4 KitKat and higher use a Chromium-based WebView component, which uses the same rendering engine as Chrome for Android. A device's TLS compliance therefore depends on the version of Chrome installed on the device. **Compatibility with TLS 1.3 on the Android WebView requires Chrome version 72 or higher**.

Chrome for Android and the WebView are based on some of the same code. This included common JavaScript and rendering engines, which should provide consistent rendering between Chrome and the WebView, and most features that work in Chrome for Android also should work in the new WebView. However, **Chrome for Android supports features that are NOT enabled in the WebView, and Enterprise Browser supports many features not supported by Chrome**.


<!-- 1/13/20- Per eng (TUT-36026) replaced original content (below) with a version of the description from https://developer.chrome.com/multidevice/webview/overview
Compliance of Enterprise Browser with Secure Sockets Layer (SSL) and the newer Transport Layer Security (TLS) protocols is determined by the operating system running on the device and the WebView that's in use. The highest security compliance currently supported by Enterprise Browser on devices running Android or Windows Mobile/CE is TLS 1.2.

SSL and TLS (which replaced SSL 3.0 in 1999) are transport protocols that encrypt network communications, and are most often used to protect web browsing, email, instant messaging and other web-based apps. See the [Certificates guide](../certificates) for information about using TLS to secure communications between one or more servers and Enterprise Browser clients attempting to connect. 

 -->

 -----

### Android
The WebView engines vary from one Zebra Android device to another, and the level of TLS/SSL support depends on WebView version present in the device. The chart below shows which versions of Android support (or will support) the various levels of TLS and/or SSL. 

![img](eb_tls_support.png)
_Enterprise Browser currently supports Android versions up to Android 5.x Lollipop and TLS up to v1.2_.
<br>

-----

### Windows Mobile/CE 
On all Zebra devices running Windows Mobile/CE that use the Webkit Engine, Enterprise Browser supports TLS v1.2. On devices that use the IE Engine, TLS/SSL support depends on the IE version present in the device. To determine security compliance, see below.

### Verify Compliance

To determine the security compliance on a device, use Enterprise Browser to navigate to one of the URLs below:

* [How's My SSL?](https://www.howsmyssl.com)
* [SSL Labs](https://www.ssllabs.com/ssltest/viewMyClient.html)

