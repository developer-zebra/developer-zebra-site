---
title: PowerPrecision Console Install & Setup
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---
## Overview

PowerPrecision Console (PPC) server can be downloaded and installed on a Windows-based server or desktop. The PPC client can be installed and setup on the supported Zebra devices. After server installation, further network setup is required to allow communication between the server and devices via DNS and firewall configurations. The server and devices must be on the same network. Connect through specified HTTPS ports, by default ports 8080 and 8443.

> See [System Requirements](../about/#systemrequirements)

##Server Install & Setup
Instructions for server installation and setup:

1. **Server Installation.** Double-click on the .EXE and follow the steps to complete installation.

2. **DNS (Domain Name Server) Setup.** The PPC server runs in a domain, for example name.company.com.  To run PPC, an entry in the DNS server is required to add the server IP address.  The DNS server and PPC server are required to be on the same network.  Contact your local IT Administrator to configure the domain to IP address mapping. 

3. **Server SSL Certificate.** An SSL certificate is required for secured connections. 
Steps to generate the certificate:<br>
A. Zebra recommends the certificate to be procured in .p7b format and the certificate private key to be a .key file. If the certificates are in different format, use a SSL certificate converter tool to convert to the proper format.<br>
B. Download [OpenSSL](https://www.openssl.org/source/) tool and install on the server.<br>
C. Create an empty directory named "genereated_certs" to contain the .pfx certificate.<br>
D. Copy the certificate files to "genereated_certs" folder: primary certificate "ssl_certificate.p7b", intermediate CA certificate "IntermediateCA.cer" and private key "ppc_private_key.key".<br>
E. Open a command prompt. Execute the following command to generate "ssl_certificate.cer":<br>
 		`openssl pkcs7 -print_certs -in ssl_certificate.p7b -out ssl_certificate.cer`
<br>
F. At the command prompt, execute the following command:<br>
		`openssl pkcs12 -export -in ssl_certificate.cer -inkey ppc_private_key.key -out ssl_certificate.pfx -certfile IntermediateCA.cer`
<br>
G. When prompted, enter the certificate password to export "ssl_certificate.pfx".<br>
H. Copy the SSL certificate "ssl_certificate.pfx" with domain name “name.company.com” to the following folders:
   * Zebra Technologies/PowerPrecision Console/Server/PowerPrecision Console Server
   * Zebra Technologies/PowerPrecision Console/Server/WebUI
<br>
We recommend to use an SSL Tool (such as [ssltools.com](http://ssltools.com/)) to aid in diagnostics and validate the certificate chain.

4. **Server Setup.** From default folder “\Power Precision Console\Release\Server\WebUI”, open the .env file.  Set the following variables: 

		SERVER=”https://name.company.com:8080/ppcdata" 
		PORT=”8080”
		SSL_CERT = <ssl_certificate.pfx>
		SSL_CERT_PASSWORD = <*****>
		PORT_HTPS=<port_number> 

	Replace all values in the angled brackets <> to the appropriate value or string and remove the brackets. 

	For SERVER, replace “name.company.com” and the port number 8080 with the appropriate server name and port number (if changed). <br>
	For PORT, change this to the appropriate desired value if necessary. This value must match the "server.port" value specified in "application.properties" file, discussed in the next step.<br>
	For SSL_CERT, replace the string with the name of the SSL certificate.<br>
	For SSL_CERT_PASSWORD, replace the string with the SSL certificate password.<br>
	For PORT_HTTPS, this is required only if port 8443 is not used by default for HTTPS. Specify the alternative port used for HTTPS.
	Note: The angled brackets <> contain sample values and need to be removed.

	In default folder “\Power Precision Console\Server\PowerPrecisionConsoleServer\config”, open “application.properties.”  Set the following properties:  

		server.dns=<name.company.com> 
		server.idDesc=<store location> 
		server.port=<8080> 

		# SSL certificates 
		server.ssl.key-store:<ssl_certificate.pfx>  
		server.ssl.key-store-password:<password>

	Replace all values in the angled brackets <> to the appropriate value or string and remove the brackets. If it exists, remove the hashtag to uncomment out the password line. Enter in the appropriate SSL password following the colon.

	Note: If port 8080 is not available on the server, any other available port can be used in replacement. Some network policies might block incoming and outgoing ports - it is required to open the configured ports in the network firewall as described in the next section “Open inbound/outbound ports on the firewall” 

5. **Open Inbound/Outbound Ports on the Firewall.** The appropriate ports are required to be opened for inbound/outbound network traffic flow through the firewall for communication between the server and devices.   

	* Inbound ports: Open the port specified in the .env file, by default TCP ports 8080 and 8443. 
	* Outbound port: Open notification port as specified in .env file, by default TCP port 8080.
Contact your local IT Administrator to open the ports through the firewall.
6. **Run the PPC Server Software.** Start the server services by launching the desktop shortcut icon "START_PPC_SERVICE". Open the supported browser. Enter the default server URL: **https://name.company.com:8443/ppcui**

	Where "name.company.com" is replaced with the appropriate domain name.

	Default login credentials (case-sensitive) are: 

	* User: SAdmin 
	* Password: admin 

Zebra recommends to change the password immediately for this super admin user to avoid unauthorized access. Tap on "SAdmin" user at the top right of the Admin View and select "Change password".

##Client Install & Setup
The PowerPrecision Console client must be installed and configured on the supported mobile device to register the device, upload device battery data and display end-of-life (EOL) battery alerts. The server address needs to be configured to communicate with the PPC Server. PPC Client install and setup can be accomplished either manually or remotely by using an EMM (Enterprise Mobility Management) such as Zebra's [StageNow](/stagenow/latest/about).

###Installation
1. Connect the device to a Wi-Fi network on the same network as the PPC Server.
2. Copy the PPC Client .APK install file (distributed as part of PPC) to the device and install. Different versions of the .APK are available based on Android versions Marshmallow, Nougat, and Oreo. The respective .APK version is located in subfolders M, N, and O corresponding with each Android flavor.
3. When prompted, enable the “Apps that can draw over other apps” overlay permission. 

###Configuration
Configure the server address and port either manually or remotely.

####Manual Configuration
1. Open PowerPrecision Console Client.
2. If prompted, enable the “Apps that can draw over other apps” overlay permission. 
3. Tap the hamburger menu at the top right, then tap Settings. 
4. Tap Server URL. Enter in the server URL, for example: **name.company.com:8080/ppcdata** 
<br>
Where "name.company.com:8080" is replaced with the appropriate domain name and port number.
Note: the URL must not contain "https://".
5. Tap OK to save the changes and return to the main screen.
PPC Client registers with the server and uploads battery data.

####Remote Configuration Deployment with StageNow and CSP Plugin
Refer to [MX documentation](/mx/overview) for information on using CSP and [StageNow documentation](/stagenow/latest/settingconfig/) on creating a Settings profile. 
Follow the steps below to perform remote configuration with StageNow, CSP, and EMM:
1. Install PPCCspMgr.apk, distributed as part of the PPC software. Open PPCCspMgr app.
2. Compress two files distributed as part of the PPC Console software into a single .zip file: 
	* com.zebra.ppcclientmgr.dsd 
	* PPCClientMgr.apk (PPC Client CSP Manager)
3. Upload the .zip file to the CSP Library section under Plugin CSP in StageNow.
4. Create a new setting from the “All Settings” Page.
5. Re-use the saved setting and click Continue. The Publish Page displays a generated barcode.
6. Open the StageNow client on the device.
7. Scan the barcode with the StageNow client to configure the PPC Client.

EMM Staging:
1. Follow the steps above for "Remote Configuration Deployment with StageNow and CSP Plugin" until step 5.
2. Select the "Export option for EMM" to export the .XML file.
3. Push the .XML file to the device.
4. Push the settings via EMM to configure the PPC Client.

####Remote Configuration Deployment With CSP and EMM
Follow the steps below to perform remote configuration deployment with CSP and EMM:
1. In "PPCConfig.xml" distributed as part of the PPC Console software, edit ServerURL parameter with the appropriate server address and set the "AllowEditing" value to either true or false to control whether the user is permitted to edit the server URL:
	<parm name="ServerURL" value="name.company.com:8080/ppcdata  />
	<parm name="AllowEditing" value="false">
2. Save changes.
3. Push "PPCConfig.xml" to folder /sdcard.
4. In the EMM, send the intent to the PPC Client to configure settings based on the following information: <br>
	**Intent Type:** StartService <br> 
	**Package Name:** com.zebra.ppcclient<br>
	**Class Name:** ConfigService<br>
	**Extras:** SET_CONFIG_FILE: /sdcard/PPCConfig.xml file
5. Configure the EMM to receive the configuration response by registering for the intent:<br>
	**Intent Type:** Broadcast <br>
	**Action Name:** com.zebra.ppcclient.RESPONSE<br>
	**Extras:** <br>
	STATUS: Success or Failed<br>
	ERROR_MESSAGE: Error Message
PPC Client configuration is complete. It registers with the server and uploads battery data.

<br>
-----

## See Also

* [About PowerPrecision Console](../about)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)
