---
title: Backward Compatibility
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---

## Overview 

Enterprise Browser 2.0 (and higher) for Android supports the HTML5 ViewPort metatag and changes the way licensing is implemented. Apps running on older versions of EB might render improperly or display unexpected client certificate requests when launched with EB 2.0. The latest version of EB contains new tags for addressing these issues. Their usage is explained below. 

See the [Config.xml reference](../configreference) for more information about this file.  

-----

### ViewPort Tag

For EB apps that use the HTML5 ViewPort tag, developers should set the &lt;UseWideViewPort&gt; tag in the app's `Config.xml` as shown below to avoid rendering issues.

	:::xml 
	<UseWideViewPort value="1"/>

See the [Config.xml reference](../configreference/#viewport) for complete usage details. 

-----

### Verify Client Certificate

Due to licensing changes in EB 2.0 and higher, apps migrated to EB 2.0 sometimnes display a  PIN request when launched or when displaying certain app pages. Set the &lt;VerifyClientCertificate&gt; tag in the app's `Config.xml` as shown below to suppress this message. 

	:::xml
	<VerifyClientCertificate value="0"/>

 **NOTE: Setting this tag to "0" might result in SSL protocol errors**. See the [Config.xml reference](../configreference/#verifyclientcertificate) for details. 

-----

Related guides: 

* [Migration Overview](../migration)
* [Configuration Reference](../configreference)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)