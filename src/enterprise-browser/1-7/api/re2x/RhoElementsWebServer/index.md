---
title: RhoElements Web Server
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---
RhoElements can be configured to run a proprietry local web server on the device. The benefits of this are that JavaScript running on the device is able to communicate with a remote server via e.g. Ajax without cross-domain security issues. 

##Setting up the web server 

By default the local web server is switched off, you will need to manually enable and configure the server using the RhoElements configuration file. See the Configuration Settings help page for the server options, specifically those under the <WebServer> hierarchy.

Using the following example configuration: 
<UL>
<LI>Enabled: 1 </LI>
<LI>Port: 8080 </LI>
<LI>WebFolder: \myWeb</LI>
<LI>Public: 0</LI>
</UL>

Navigating to file://\myWeb\index.htm will load the page from the file system.

Navigating to http://localhost:8080/index.htm will load the same page via the local web server.



