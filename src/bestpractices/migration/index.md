---
title: Android Version Migration
layout: guide.html
product: Best Practices
productversion: 
---

## Overview
Every new Android version brings improvements to security, usability and performance. For developers, it’s important to understand how an app will behave when running on a newer version of Android. Behavioural changes generally fall into two main categories:

* Those affecting only apps that update the target API level 
* Those affecting all apps running on the new version

To help ease the migration to newer versions of Android, Google and Zebra the resources described in this guide. Links are provided to each. 

## Upgrading Android

### Developer Resources from Google

For transitioning from an older API level to a newer one, Google’s guidance on “meeting the Google Play target API level requirement” is an easy-to-read, bulleted guide that helps ensure that you won’t miss any of the main points. Google’s guidance on behaviour changes for all apps isn’t found in a single list, but instead is distributed in the change details published with each new Android version. 

#### Google's Change Details:
* [Android 10](https://developer.android.com/about/versions/10)
* [Android 9.x Pie](https://developer.android.com/about/versions/pie)
* [Android 8.x Oreo](https://developer.android.com/about/versions/oreo)
* [Android 7.x Nougat](https://developer.android.com/about/versions/nougat)
* [Android 6.x Marshmallow](https://developer.android.com/about/versions/marshmallow)
* [Android 5.x Lollipop](https://developer.android.com/about/versions/lollipop)

Since changes are cumulative, reading each of these in turn could offer a more complete picture of the changes to consider when moving from one version of Android to the next. Google’s documentation is comprehensive, but is often aimed at developers targeting consumer use cases. This can sometimes make it hard to identify which features are most pertinent to Zebra developers targeting enterprise devices. 

### Developer Resources from Zebra

For each new release of Android, Zebra publishes tailored guidance highlighting changes in the release of most interest to enterprise apps and use cases. The main points of each guidance article are bulleted below; links are provided to the comprehensive information in each.  

Android 10 (article coming soon):
* Scoped storage
* User control over background location
* Permissions with legacy applications
* Warnings for apps targeting older Android versions
* Restrictions on non-SDK interfaces
* Changes to the Google Play Store
* Starting activities from the background
* Access to device identifiers (link to OEMinfo)
* Settings panels
* Move to AndroidX
* Smart replies

[Android 9.x Pie](https://developer.zebra.com/blog/what%E2%80%99s-new-android-pie-and-impact-zebra-developers): 
* Standby buckets & adaptive battery
* Restricted applications
* Battery saver improvements
* Lock-down enhancements
* Ephemeral users
* Over-the-air updates
* Notification enhancements
* Privacy & permissions
* Restrictions on use of non-SDK interfaces
* Changes to the Google Play Store

[Android 8.x Oreo](https://developer.zebra.com/blog/what%E2%80%99s-new-android-oreo-and-impact-zebra-developers):
* Background service limitations
* Limitations on receiving implicit broadcasts
* Reduced update frequency of location APIs for background apps
* Notification enhancements
* Pinning shortcuts & widgets
* Companion device pairing
* Changes to the Google Play Store

[Android 7.x Nougat](https://developer.zebra.com/blog/what%E2%80%99s-new-android-%E2%80%98n%E2%80%99-and-impact-zebra-developers):
* Multi-window support
* Notification enhancements
* Doze Light / Doze on the go
* Chrome update also updates the WebView
* App shortcuts

[Android 6.x Marshmallow](https://developer.zebra.com/community/home/blog/2017/01/20/what-s-new-for-android-m-and-the-impact-on-zebra-developers):
* Runtime permissions
* Doze mode & app standby
* Copy / Paste & sharing features
* Access to device identifiers
* NFC
* Adoptable Storage
* Encryption
* Factory Reset Protection
* Notification shade & quick settings
* Notification long press

## Conclusion
The Android device that runs your apps will be updated regularly, so it’s important that enterprise developers keep themselves informed as to how the changes coming with each new Android version will affect application application performance and behavior. While Zebra helps simplify the physical update process through its [LifeGuard security update program](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html), Zebra’s engineering department continues to provide guidance and best practices to help developers keep their apps behaving properly.
