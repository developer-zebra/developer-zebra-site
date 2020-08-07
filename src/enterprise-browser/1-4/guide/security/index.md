---
title: Security Features
productversion: '1.6'
product: Enterprise Browser
layout: guide.html
---

##Overview 

Enterprise Browser offers numerous security features implemented in various ways and through different interfaces. Below is a summary of EB security features with links to the relevant documentation for each. 

-----

### Basic/Digest Authentication
Enterprise Browser supports pages that are password-protected with basic and digest authentication. The tags for this feature are located in the [&lt;authentication&gt;](../configreference/#authentication) node of the EB app's `config.xml` file.   

-----

### Client and Server Certificates 
Enterprise Browser supports access to web sites that are protected with client- or server-side certificates. This is documented in the [&lt;Certificates guide&gt;](../certificates). 

-----

### Compliance with TLS 1.2, SSL3
Enterprise Browser supports Secure Sockets Layer (SSL) and the newer Transport Layer Security (TLS) protocols, detailed in the [EB Compliance Guide](../compliance). 

-----

### Exit Password
Enterprise Browser can configure any EB application to require a password before allowing the app to exit. This feature is implemented with the [&lt;ExitPasswordEnabled&gt; tag](../configreference/#exitpasswordenabled) of the app's `config.xml` file. 

-----

### Settings Lock-out
An EB app can prevent a user from accessing the Settings panel on a device by using the [&lt;SettingsPageProtectionEnabled&gt; tag](../configreference/#settingspageprotectionenabled) in the EB app's `config.xml` file  

-----

Related guides: 

* [Configuration Reference](../configreference)
* [Enterprise Browser APIs](../../api)
* [API Compatibility Matrix](../compatibility)