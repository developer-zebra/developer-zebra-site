---
title: Profiles and Plug-ins
description: Each app that uses DataWedge must be associated with a Profile, which contains Plug-ins for determining how the data will be acquired, processed, and delivered to the app. For more information, see the Getting Started page. 
layout: list-apis.html
automenu:
  items:
    - title: Get Started
      items:
        - title: Intro to Profiles and Plug-ins
          url: ../guide/overview

content-items:
  - type: section
    level: 4
    title: Getting Started
    text: Profiles are central to all DataWedge functionality. This overview explains how Profiles work, and their relationship with Plug-ins and applications that use DataWedge. 
    url: /datawedge/6-31/guide/overview
  - type: section
    level: 4
    title: Input Plug-ins
    text: Determine which device peripheral (imager, mag-stripe reader, scanner, etc.) will acquire the data, which barcode symbologies to use, etc.
    url: /datawedge/6-31/guide/input
  - type: section
    level: 4
    title: Data Processing
    text: Processing plug-ins contain rules about how acquired data should be read, appended, truncated, converted, etc. 
    url: /datawedge/6-31/guide/process
  - type: section
    level: 4
    title: Output Plug-ins
    text: Determine whether to send data to the app as keystrokes, an intent, over IP, etc.  
    url: /datawedge/6-31/guide/output
product: DataWedge
productversion: '6.3'
---

<!--
---
title: Enterprise Browser - Supported APIs 
description: Zebra recommends the use of Enterprise Browser APIs whenever possible. To run legacy apps through Enterprise Browser or to access functionality not implemented in EB, the APIs of PocketBrowser 2.x and 3.x, RhoElements 2.x and the RhoMobile 4.2 Shared Runtime can be used within certain boundaries. Some of those legacy APIs are published here. See the API Usage and Migration Guides for more information, and individual API reference pages (linked below) for each API's usage details and specific restrictions, if any.
layout: list-apis.html
automenu:
  items:
    - title: Overview
      items:
        - title: API Usage Guide
          url: ../guide/apioverview
        - title: Compatibility Matrix
          url: ../guide/compatibility
        - title: Migration Guides
          url: ../guide
    - title: Enterprise Browser APIs
      items:
        - title: APD
          url: re2x/apd
        - title: Application
          url: Application
    - title: RhoElements 2.x APIs
      items:
        - title: AddressBar
          url: re2x/addressbar
        - title: Airbeam
          url: re2x/airbeam
product: Enterprise Browser
productversion: '1.6'
-->
