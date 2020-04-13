---
title: Backward Compatibility
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---

## Overview 

Enterprise Browser 2.0 (and higher) for Android supports the HTML5 ViewPort metatag and changes the way licensing is implemented. Apps running on older versions of EB might render improperly or display unexpected client certificate requests when launched with EB 2.0. The latest version of EB contains new tags for addressing these issues. Their usage is explained below. 

See the [Config.xml reference](../configreference) for more information about this file.  

-----

### Licensing

**Beginning with Enterprise Browser 2.0, the process for applying device licenses has changed. <u>Upgrading to EB 2.0 requires that all licenses be converted to the new model**</u>. Licensed apps running on EB 1.8 (and older) are unaffected; existing licenses remain valid. 

See the [Licensing Guide](../licensing) for details. 

-----

### Barcode API

When setting multiple barcode properties using the `enable()` method, barcode manager might not process those properties in the same order as entered. **If order is important** and barcode properties are constant across the app (not changed by individual pages), **Zebra recommends using** `EB.Barcode.setProperties` **to set properties in the preferred order**. If necessary, the `enable()` method can be used later to configure properties for an individual page.

See the [enable() method](../../api/barcode/#enablespanclasstextinfohashspanpropertymap) of the Barcode API for details and sample code. 

-----

### ViewPort Tag

For EB apps that use the [HTML5 Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp) tag, developers should set the &lt;UseWideViewPort&gt; tag in the app's `Config.xml` as shown below to avoid rendering issues.

	:::xml 
	<UseWideViewPort value="1"/>

See the [ViewPort section](../configreference/#viewport) of the `Config.xml` reference for complete usage details. 

-----

### Verify Client Certificate

Support for Transport Layer Security (TLS) in EB 2.0 (and higher) might cause apps migrated to EB 2.0 to display a PIN request when launched or when navigating to app pages hosted on a server. To force EB to ignore such requests, set the &lt;VerifyClientCertificate&gt; tag in the app's `Config.xml` to "0" as shown below. 

	:::xml
	<VerifyClientCertificate value="0"/>

**NOTE: Setting this tag to "0" might result in SSL protocol errors**. See the [Verify Client Certificate section](../configreference/#verifyclientcertificate) of the `Config.xml` reference for details. 

-----

Related guides: 

* [Migration Overview](../migration)
* [Configuration Reference](../configreference)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)