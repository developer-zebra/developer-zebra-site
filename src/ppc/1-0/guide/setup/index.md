---
title: PowerPrecision Console Install & Setup
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---
## Overview

PowerPrecision Console (PPC) server can be downloaded and installed on a Windows-based server or desktop. The PPC client is installed and setup on the supported Zebra devices. After server installation, further network setup is required to allow communication between the server and devices via DNS and firewall configurations. The server and devices must be on the same network. Connect through specified HTTPS ports, by default ports 8080 and 8443.

> See [System Requirements](../about/#systemrequirements)

##Server Install & Setup
Instructions for server installation and setup:

1. **Server Installation.** Double-click on the .EXE and follow the steps to complete installation.

2. **DNS (Domain Name Server) Setup.** The PPC server runs in a domain, for example name.company.com.  To run PPC, an entry in the DNS server is required to add the server IP address.  The DNS server and PPC server are required to be on the same network.  Contact your local IT Administrator to configure this mapping. 

3. **Server SSL Certificate.** After install, it is required to create an SSL certificate (.pfx) for the installed server with the domain name. Once generated, copy this certificate in the following default locations: 
	* \PowerPrecision Console\Release\Server\PowerPrecisionConsoleServer 
<br>
We recommend to use an SSL Tool (such as [ssltools.com](http://ssltools.com/)) to aid in diagnostics and validate the certificate chain.

4. **Server Setup.** From default folder “\Power Precision Console\Release\Server\WebUI”, open the .env file.  Set the following variables: 

		SERVER=”https://name.store.com:8080/ppcdata" 
		PORT=”8080”
		SSL_CERT = <ssl_certificate.pfx>
		SSL_CERT_PASSWORD = <*****>
		PORT_HTPS=<port_number> 

	For SERVER, replace “name.store.com” and the port number 8080 with the appropriate server name and port number (if changed). <br>
	For PORT, change this to the appropriate desired value if necessary. This value must match the "server.port" value specified in "application.properties" file.<br>
	For SSL_CERT, replace the string with the name of the SSL certificate.<br>
	For SSL_CERT_PASSWORD, replace the string with the SSL certificate password.<br>
	For PORT_HTTPS, this is required only if port 8443 is not used by default for HTTPS. Specify the alternative port used for HTTPS.

	In default folder “\Power Precision Console\Release\Server\PowerPrecisionConsoleServer\config”, open “application.properties.”  Set the following values:  

		server.dns=<name.store.com> 
		server.url=<http://localhost:8080/ppc>
		server.idDesc=<store location string> 
		server.port=<8080> 

		# SSL certificates 
		server.ssl.key-store: <ssl_certificate.pfx>  
		#server.ssl.key-store-password: 

	Replace all values in the angled brackets <> to the appropriate value or string.  Remove the hashtag to uncomment out the password line if a password is required.  Enter in the appropriate password following the colon.

	Note: If port 8080 is not available on the server, any other available port can be used in replacement.  Some network policies might block incoming and outgoing ports - it is required to open the configured ports in the network firewall as described in the next section “Open inbound/outbound ports on the firewall” 

5. **Open Inbound/Outbound Ports on the Firewall.** The appropriate ports need to be opened for inbound/outbound network traffic flow through the firewall for communication between the server and devices.   

	* Inbound ports: Open the port specified in the .env file, by default TCP ports 8080 and 8443. 
	* Outbound port: Open notification port as specified in .env file, by default TCP port 8080.

6. **Running the PPC Server Software.** Start the server services by launching the desktop shortcut icon "START_PPC_SERVICE". Open the supported browser. Enter the default server URL: https://name.company.com:8443/ppcui  

	Where "name.company.com" is replaced with the appropriate domain name.

	Default login credentials are: 

	* User: SAdmin 
	* Password: admin 

##Client Install & Setup
The PowerPrecision Console client must be installed and configured on the supported mobile device to register the device, upload device battery data and display end-of-life (EOL) battery alerts. The server address needs to be configured to communicate with the PPC Server. PPC Client install and setup can be accomplished either manually or remotely by using an EMM (Enterprise Mobility Management) such as Zebra's [StageNow](/stagenow/latest/about).

###Installation
**Manual and Remote Installation**
1. Connect to a Wi-Fi network in the same network as the PPC Server.
2. Copy the PPC Client .APK install file to the device.
3. Launch the .APK to install. 
4. When prompted, enable the “Apps that can draw over other apps” permission. 

###Configuration
Configure the server address and port.

**Manual Configuration** 
1. Open PowerPrecision Console Client.
![img](client_launch.png)
2. Tap the hamburger menu at the top right, then tap Settings. 
3. Tap Server URL.  
![img](serverURL.png)
4. Enter in the server URL, for example: name.company.com:8080/ppcdata
Where "name.company.com:8080" is replaced with the appropriate domain name and port number.
Note: the URL must not contain "https://".
5. Tap the back button to save the changes and return to the main screen.
6. PPC Client registers with the server and uploads battery data.

**Remote Configuration with StageNow, CSP and EMM**
<br>
Refer to [MX documentation](../../../mx/overview) for information on using CSP and [StageNow documentation](../stagenow/latest/settingconfig/) on creating a Settings profile. Follow the steps below:
1. Compress two files in .zip format distributed as part of the PPC Console software: 
	* DSD file 
	* PPC Client CSP Manager APK (PPCCspMgr.apk)
2. Upload the .zip file to the CSP Library section under Plugin CSP in StageNow.
3. Create a new setting from the “All Settings” Page.
4. Re-use the saved setting and click Continue. The Publish Page displays a generated barcode.
5. Open the StageNow client on the device.
6. Scan the barcode with the StageNow client to configure the PPC Client.

EMM Staging:
1. Follow the steps above for "StageNow with CSP Plugin" until step 3.
2. Select the Export option for EMM to export the .xml file.
3. Push the .xml file to the device.
4. Push the settings via EMM to configure the PPC Client.

**Remote Configuration with CSP and EMM** 
<br>
Follow the steps below:
1. In "PPCConfig.xml" distributed as part of the PPC Console software, edit ServerURL parameter with the appropriate server address and set the "AllowEditing" value to either true or false:
	<parm name="ServerURL" value="name.company.com:8080/ppcdata  />
	<parm name="AllowEditing" value="false">
2. Save changes.
3. Push "PPCConfig.xml" to folder /sdcard on the device.
4. Install PPCCspMgr.apk distributed as part of the PPC software.
5. Open PPCCspMgr app.
6. In PPCCspMgr, send the intent to the PPC Client to configure the settings based on the following information:
		**Intent Type:** StartService 
		**Package Name:** com.symbol.PowerPrecisionConsole
		**Class Name:** ConfigService
		**Extras:** SET_CONFIG_FILE: /sdcard/PPCConfig.xml file
7. Configure the EMM to receive the configuration response by registering for the intent:
		**Intent Type:** Broadcast 
		**Action Name:** com.symbol.PowerPrecisionConsole
		**Extras:**
		STATUS: Success or Failed
		ERROR_MESSAGE: Error Message
8. PPC Client registers with the server and uploads battery data.

<br>
-----

## See Also

* [About PowerPrecision Console](../about)
* [PowerPrecision Console Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)
