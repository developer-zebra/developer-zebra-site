---
title: Using Secure Storage Manager
layout: guide.html
product: Secure Storage Manager
productversion: '1.0'
---

## Overview

To configure an app to use Secure Storage Manager (SSM), insert the appropriate line(s) in the client app’s manifest file: 

### Insert / Update / Delete Data

        <uses-permission android:name="com.zebra.securestoragemanager.securecontentprovider.PERMISSION.WRITE"/>

### Query Data

        <uses-permission android:name="com.zebra.securestoragemanager.securecontentprovider.PERMISSION.READ"/>

### Retrieve Data

Set the content URI to SSM Content Provider:

        "content://com.zebra.securestoragemanager.securecontentprovider/data"



-----

Related Guides:

* [About SSM](../about)
* [Content Provider Interface APIs](../api)