---
title: PowerPrecision Console Install & Setup
layout: guide.html
product: PowerPrecision Console
productversion: '2.0'
---
## Overview

As part of Zebra DNA Visibility Console (ZDVC) starting with PowerPrecision Console (PPC) v2.0, PPC runs on a supported Windows-based server. PPC client runs on supported [Zebra devices](../about#devicerequirements). This section provides system requirements and instructions for install and setup for the solution.

Solution components:
* **ZDVC server** - PPC monitors battery health, state of charge, battery status, and other information from deployed devices. 
* **Web portal** - centralized dashboard for monitoring device presence, device tracking, battery status, and trigger actions based on battery depletion.
* **PPC client** - reports battery and device information to server

Before installing, ensure to prepare additional steps for system setup:
 * **Install SSL certificate** (procured by a signed Certificate Authority) - configured on server for secure HTTPS communication
 * **Open specific incoming and outgoing ports** - for server communication through the firewall, based on ports specified during server installation
 * **Add DNS (Domain Name Server) Entry** - an entry is added to the DNS to map the server IP address to the domain 

> Important: An SSL Certificate is required from a third party certificate authority (CA), such as Verisign or Thawte. Any self-signed certificate or one issued by a non-third party CA will not work. The .pfx certificate must contain the complete certificate chain, including intermediate certificates.

##System Requirements
This section provides the server and device requirements. PPC supports a maximum of 10,000 devices and 20,000 batteries per installation based on the hardware requirements.

###Server Requirements
1. Windows Operating Systems supported:
   * Windows® Server 2012, 64-bit processor
   * Windows® Server 2016, 64-bit processor

2. Browsers supported (connect over https):  
   * Chrome Browser version 63 or higher
   * Internet Explorer 11
   * Microsoft Edge for Windows 10
   * Safari for Mac version 9 or higher

3. Software Required (included in server installation):
   * Java runtime
   * Node.js version 6.11
   * PostgreSQL 9.6.3-3 or higher
   * PowerPrecision Console software (server and client) 

4. Network Access Requirements:
   * If required, open incoming and outgoing ports for communication between server and mobile devices through the server firewall. The default ports used are: 
        * Data Port 8080 for PPC client to register and upload battery data 
        * Web Portal Port 8443 for accessing PPC web portal  
   * If required, perform DNS setup to add server IP address to the DNS server. 

5. Hardware Requirements: 
   * Minimum CPU cores: 8  
   * Minimum memory (RAM): 4 GB  
   * Minimum available hard drive space: 300 GB 

  Recommended hardware requirements based on number of devices and batteries:
   <table class="facelift" align="center" style="width:70%" border="1" padding="5px">
   <tr bgcolor="#dce8ef">
      <th>Number of Devices</th>
      <th>Number of Batteries</th>
      <th style="text-align:center">RAM</th>
      <th style="text-align:center">CPU Cores</th>
      <th style="text-align:center">Hard Drive Space</th>
    </tr>
    <tr>
      <td>Up to 1,000 devices</td>
      <td style="text-align:center">Up to 2,000 batteries</td>
      <td style="text-align:center">4 GB</td>
      <td style="text-align:center">8 cores</td>
      <td style="text-align:center">300 GB</td>
    </tr>
    <tr>
      <td>1,000 to 5,000 devices</td>
      <td style="text-align:center">2,000 to 10,000 batteries</td>
      <td style="text-align:center">8 GB</td>
      <td style="text-align:center">8 cores</td>
      <td style="text-align:center">600 GB</td>
    </tr>
    <tr>
      <td>Up to 10,000 devices</td>
      <td style="text-align:center">Up to 20,000 batteries</td>
      <td style="text-align:center">16 GB</td>
      <td style="text-align:center">16 cores</td>
      <td style="text-align:center">750 GB</td>
    </tr>
   </table>

###Device Requirements
See [Device Requirements](../about/#devicerequirements).

##Server Install & Setup
For existing PPC installations, uninstall PPC and ensure all PPC folders are removed. Then proceed to a new ZDVC Server installation.

For new installations, download ZDVC Server from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/power-precision-console.html). Install ZDVC server on the supported system that meets the specified requirements. After server installation, further network and certificate setup is required to allow communication between the server and devices via DNS and firewall. Instructions for server installation and setup:

###Server Prerequisites
The following are the prerequisites required for the server: <br>
1. **DNS (Domain Name Server) Setup.** ZDVC server runs in a domain, for example _name.company.com_. An entry with the hostname and corresponding IP address is required in the DNS server for name resolution. The DNS server and ZDVC server are required to be on the same network. Contact your local IT Administrator to configure the domain to IP address mapping. 

2. **SSL Certificate.** ZDVC requires an SSL certificate for secure communications. The certificate must be in .pfx format and set with a password. See [Server Certificate Procurement](./#servercertificateprocurement) for details.

3. **Open Inbound/Outbound Ports on the Firewall.** The appropriate ports are required to be opened for inbound/outbound network traffic flow through the firewall for communication between the server and devices. The UI and Backend Server ports are specified during server install. The method to open the ports depends on the firewall software used by the network administrator. 

	* UI Port: inbound and outbound (e.g. port 8080)  
	* Backend Server Port: inbound (e.g. port 8443)
<br>

###Server Installation
Double-click on the ZDVC installer and follow the steps to proceed with installation until the server has been successfully installed.

###Server Setup
Steps for ZDVC server setup after installation: <br>
1. **Run ZDVC Server Software.** Start the server services by launching the desktop shortcut icon "START_ZDVC_SERVICE". 
2. **View the web portal.** Open a supported browser. Enter the default server URL: `https://name.company.com:8443/zdvc`, where "name.company.com:8443" is replaced with the appropriate domain and port number.
3. **Select app to launch.** As part of ZDVC, the server consists of multiple solution offerings. Select "PowerPrecision Console" then enter the login credentials to login.
4. **Server certificate validation.** Use an SSL Tool (such as [ssltools.com](http://ssltools.com/)) to aid in diagnostics and validate the certificate chain.<br>
A. Open [ssltools.com](http://ssltools.com/) in the browser.<br>
B. Enter the Web UI URL, for example `https://name.company.com:8443/zdvc`<br>
C. Click the Scan button. A successful result returns green checks for each step. _See Figure 1 below._ <br>
D. Enter the backend URL for your server, for example `https://name.company.com:8080/zdvc` <br>
E. Click the Scan button. A successful result returns green checks for each step:
![img](SSLTools.JPG)
_Figure 1. SSLTools.com results_

###Server Certificate Procurement
Procedure to procure the server certificate, if needed:
1. **Intermediate Root Certificate Generation and CSR (Certificate Signing Request) Signing from CA.** Procedure to generate a CSR to send to a CA for signing, configuring a custom intermediate root certificate for SSL: <br>
A. Download [OpenSSL](https://www.openssl.org/source/) for Windows. Follow the instructions stated to download the file based on your Windows configuration.<br>
B. Install the downloaded OpenSSL EXE/MSI.<br>
C. Add a new "openSSL" environment variable to the Windows system and set the value to the location where openSSL is installed (e.g. "C:\Program Files\OpenSSL-Win64\bin\").<br>
D. Create a folder named "CSR_Request".  Open the command prompt to this folder path.<br>
E. Run the following command to generate a private key and CSR file: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openSSL req -newkey rsa:2048 -nodes -keyout zdvc_private_key.key -out zdvc_cert_sign_req.csr`<br>
 Where "zdvc_cert_sign_req.csr" and "zdvc_private_key.key" can be replaced with custom file names.<br>
F. Enter in the required fields when prompted:

   * **Country Name** - Enter the two-letter code without punctuation for country, for example: US or CA.
   * **State or Province** - Enter the full state or province name without abbreviation, for example: California.
   * **Locality or City** - Enter the city or town name without abbreviation, for example: Berkeley or Saint Louis.
   * **Company** - Enter the company. If the company or department contains a special characteres such as "&" or "@" the symbol must be spelled out or omitted in order to enroll successfully. 
   * **Organizational Unit** - Enter the name of the department or organization unit making the request. This is optional, to skip, press Enter on the keyboard.
   * **Common Name** - Enter the Host and Domain Name, following the same format as these examplese: "www.zebra.com" or "zebra.com". **Note:** Symantec certificates can only be used on web servers using the Common Name specified during enrollment. For example, a certificate for the domain "zebra.com" will receive a warning if accessing a site named "www.zebra.com" or "secure.zebra.com" since "www.zebra.com" and "secure.zebra.com" are different from "zebra.com." <br>

 G. Enter the challenge password when prompted. _This is the password needed when generating the certificate in .pfx format._<br>
 H. A .csr file is created in the "CSR_Request" folder. Submit this file to the CA to have it signed. <br>
 I. Obtain the certificate bundle from the CA in .pkcs format and certificate in .p7b format (which includes the public key).

2. **Generate SSL Certificate.** An SSL certificate is required for secured connections based on the intermediate root certificate from step 2. Zebra recommends the certificate to be procured in .p7b format and the certificate private key to be a .key file. If the certificates are in different format, use a SSL certificate converter tool to convert to the proper format.  <br>
A. Create an empty directory named "generated_certs" to contain the .pfx certificate.<br>
B. Copy the following certificate files to "generated_certs" folder: primary certificate (e.g. "ssl_certificate.p7b"), private key (e.g. "zdvc_private_key.key"), and intermediate CA certificate (e.g. "IntermediateCA.cer").  _The intermediate CA certificate is optional - use if required in the certificate chain._  <br>
C. Open a command prompt. Execute the following command to generate "ssl_certificate.cer":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs7 -print_certs -in ssl_certificate.p7b -out ssl_certificate.cer`
<br>
D. At the command prompt, execute the following command:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`openssl pkcs12 -export -in ssl_certificate.cer -inkey zdvc_private_key.key -out ssl_certificate.pfx -certfile IntermediateCA.cer`
	<br>
	Where "-certfile IntermediateCA.cer" is optional.
<br>
E. When prompted, enter the certificate password to export "ssl_certificate.pfx". This is the challenge password specified in step 2.G. above.<br>
F. Copy the SSL certificate "ssl_certificate.pfx" with domain name “name.company.com” to a designated folder.
<br>

<!--

3. **Server SSL Certificate.** An SSL certificate is required for secured connections. 
Steps to generate the certificate:<br>
A. Zebra recommends the certificate to be procured in .p7b format and the certificate private key to be a .key file. If the certificates are in different format, use a SSL certificate converter tool to convert to the proper format.<br>
B. Download [OpenSSL](https://www.openssl.org/source/) tool and install on the server.<br>
C. Create an empty directory named "generated_certs" to contain the .pfx certificate.<br>
D. Copy the following certificate files to "generated_certs" folder: primary certificate (e.g. "ssl_certificate.p7b"), private key (e.g. "ppc_private_key.key"), and intermediate CA certificate (e.g. "IntermediateCA.cer").  _The intermediate CA certificate is optional - use if required in the certificate chain._  <br>
E. Open a command prompt. Execute the following command to generate "ssl_certificate.cer":<br>
 		`openssl pkcs7 -print_certs -in ssl_certificate.p7b -out ssl_certificate.cer`
<br>
F. At the command prompt, execute the following command:<br>
		`openssl pkcs12 -export -in ssl_certificate.cer -inkey ppc_private_key.key -out ssl_certificate.pfx -certfile IntermediateCA.cer`
	<br>
	Where "-certfile IntermediateCA.cer" is optional.
<br>
G. When prompted, enter the certificate password to export "ssl_certificate.pfx".<br>
H. Copy the SSL certificate "ssl_certificate.pfx" with domain name “name.company.com” to the following folders:
   * Zebra Technologies\PowerPrecision Console\Server\PowerPrecision Console Server
   * Zebra Technologies\PowerPrecision Console\Server\WebUI
<br>

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
	For PORT_HTTPS, this is optional and required only if port 8443 is not used by default for HTTPS. Specify the alternative port used for HTTPS.

	In default folder “\Power Precision Console\Server\PowerPrecisionConsoleServer\config”, open “application.properties.”  Set the following properties:  

		server.dns=<name.company.com> 
		server.idDesc=<store location> 
		server.port=<8080> 

		# SSL certificates 
		server.ssl.key-store:<ssl_certificate.pfx>  
		server.ssl.key-store-password:<password>

		# export data
		data.export.Path=<C:\\ppcData\\>

	Replace all values in the angled brackets <> to the appropriate value or string and remove the brackets. 
	
	The "export data" section specifies the file path for data to be exported from an automatic data backup or [manual report export](../mgmt). Only the hard drive letter is configurable, ie. D:\\ppcData\\, and write permissions are required for the specified hard drive. A monthly data backup is automatically generated on a daily basis starting one month after install. Historical data is accumulated for the month and exported in .CSV format.

	In the "SSL certificates" section, if a hashtag exists in the password line, it must be removed to uncomment out the password line. Enter in the appropriate SSL password following the colon.

	Note: If port 8080 is not available on the server, any other available port can be used in replacement. Some network policies might block incoming and outgoing ports - it is required to open the configured ports in the network firewall as described in the next section “Open inbound/outbound ports on the firewall” 

5. **Open Inbound/Outbound Ports on the Firewall.** The appropriate ports are required to be opened for inbound/outbound network traffic flow through the firewall for communication between the server and devices, specified in the .env file. The method to open the ports depends on the firewall software used by the network administrator. By default the ports are:   

	* Inbound ports: TCP ports 8080 and 8443
	* Outbound port: TCP port 8080
<br>
6. **Run the PPC Server Software.** Start the server services by launching the desktop shortcut icon "START_PPC_SERVICE". Open the supported browser. Enter the default server URL: **https://name.company.com:8443/ppcui**

	Where "name.company.com" is replaced with the appropriate information.

	Default login credentials (case-sensitive) for _super admin_ user are: 

	* User: SAdmin 
	* Password: admin 

   Zebra recommends to change the password immediately for the _super admin_ user to avoid unauthorized access. Tap on "SAdmin" user at the top right of the Admin View and select "Change password".
7. **Server certificate validation.** Use an SSL Tool (such as [ssltools.com](http://ssltools.com/)) to aid in diagnostics and validate the certificate chain.<br>
A. Open [ssltools.com](http://ssltools.com/) in the browser.<br>
B. Enter the Web UI URL, for example `https://name.company.com:8443/ppcui`<br>
C. Click the Scan button. A successful result returns green checks for each step. _See Figure 1 below._ <br>
D. Enter the backend URL for your server, for example `https://name.company.com:8080/ppcdata` <br>
E. Click the Scan button. A successful result returns green checks for each step:
![img](SSLTools.JPG)
_Figure 1. SSLTools.com results_

-->

##Client Install & Setup
Install PPC client on the supported Zebra devices to register the device, upload device battery data and display end-of-life (EOL) battery alerts. The device must be connected to the same network as the server. The server address needs to be configured on the PPC client to communicate with the PPC Server. PPC client install and setup can be accomplished either manually or remotely with Zebra's [StageNow](/stagenow/latest/about) or an EMM (Enterprise Mobility Management).

###Installation
Steps for client installation:
1. Download PPC Client from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/power-precision-console.html). Extract the files and folders.
2. Install PowerPrecisionConsole.apk. 
   * For Android Marshmallow and Nougat devices, install the .APK located in folder PPCClient\Client\M_N.
   * For Android Oreo devices, install the .APK located in folder PPCClient\Client\O.
3. When prompted, enable the “Apps that can draw over other apps” overlay permission. 
4. For remote configuration using StageNow or an EMM (using XML or Managed Config), install PPCClientMgr.apk located in PPCClient\PluginCSP

###Configuration
Configure the server address and port either manually or remotely. For information on using CSP for remote configuration deployment, refer to [MX documentation](/mx/overview).

####Manual Configuration
Steps for manual configuration:
1. Open PowerPrecision Console Client.
2. If prompted, enable the “Apps that can draw over other apps” overlay permission. 
3. Tap the hamburger menu at the top right, then tap Settings. 
4. Tap Server URL. Enter in the server URL, for example: **name.company.com:8080/zdvc/ppc** 
<br>
Where "name.company.com:8080" is replaced with the appropriate domain name and port number. <br>
**Note: The URL must _not_ contain "https://".**
5. Tap OK to save the changes and return to the main screen.
PPC Client registers with the server and uploads battery data.

####Remote Configuration Deployment
Steps for remote configuration with StageNow and CSP Plug-in, with the option of deployment through Enterprise Mobile Management (EMM):
<!-- 1. Install PPCCspMgr.apk, distributed as part of the PPC software. Open PPCCspMgr app.-->
1. Download PPC Client software from [Zebra Support and Downloads](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/power-precision-console.html). Extract the files.
2. Compress two files distributed as part of the PPC Client software into a single .zip file: 
	* com.zebra.ppcclientmgr.dsd 
	* PPCClientMgr.apk (PPC Client CSP Manager Plug-in)

3. Open StageNow. 
4. Import the CSP Plugin Library. <br>
A. In the StageNow home screen, click “CSP Library” from the left menu. <br>
B. Upload the .zip file to the CSP Library by clicking “Choose File” then browsing to the .zip file, or by dragging and dropping the .zip file.<br> 
C. Once successfully uploaded, the CSP Library is listed in the Plugin tab.<br>
![img](SN_CSPLib.JPG)
_Figure 2. Import plugin into CSP Library_
5. Create a new setting.<br>
A. In the StageNow home screen, click “All Settings” from the left menu. Click “Create Setting” button at the top right. <br>
![img](SN_Settings.JPG)
_Figure 3. Import into CSP Library_ <br>
B. For the “Setting Type”, select “com.zebra.ppclientmgr." Enter a name for the setting. Enter the server URL e.g. `ppc.zebra.com:8080/ppcdata`. Select the desired option to determine whether or not to allow the end user to edit the setting. Select the MX version for the device.  <br>
![img](SN_CreateSettings.JPG)
_Figure 4. Create New Setting_ <br>
C. Tap Save. The new setting is listed in the Settings screen.
6. Create profile.<br>
A. In the StageNow home screen, click “Create New Profile” from the left menu.  <br>
B. Make sure the proper MX version is selected.<br>
C. Select “XpertMode." Click Create.<br>
D. Enter the profile name. Click Start.<br>
E. In the Settings list, click the add (+) sign next to “com.zebra.ppcclientmgr”. This adds to the Config tab on the right side. Click on Add button.<br>
![img](SN_Profile_AddSetting.JPG)
_Figure 5. Add CSP to profile_ <br>
F. In the StageNow Config section, click “Re-use Saved Setting” tab. The screen is populated with the information from the setting created in step 5. 
![img](SN_Profile_SNConfig.JPG)
_Figure 6. Re-use saved setting_ <br>
G. Click Continue. <br>
H. In the Review section, review the settings and make modifications if needed. Click “Complete Profile." <br>
I. In the Publish section, select the desired barcode type. 
![img](SN_Publish.JPG)
_Figure 7. Generate StageNow barcode_ <br>
J. Click Test. A window opens with the generated StageNow barcode in .pdf format.<br>
7. For EMM Staging, continue to section "Steps for EMM Staging" below.
8. Open the StageNow client on the device.
9. Scan the barcode with the StageNow client to configure the PPC Client. <br>

For more information refer to [StageNow download](https://www.zebra.com/us/en/support-downloads/software/utilities/stagenow.html) and [StageNow documentation](http://techdocs.zebra.com/stagenow). 
<br>
<br>

**Steps for EMM Staging (optional):**
1. Follow the steps above for "Remote Configuration Deployment with StageNow and CSP Plugin" up to step 6.
2. Select the "Export option for EMM" to export the .xml file.  Save the .xml file.
![img](SN_ExportMDM.JPG)
_Figure 8. Export for EMM_
3. Push the .xml settings via EMM to the device for PPC Client configuration.

<!--
####Remote Configuration Deployment Without StageNow
Steps for remote configuration deployment with CSP and EMM:
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
6. PPC Client configuration is complete. It registers with the server and uploads battery data.
-->
<br>
-----

## See Also

* [About PowerPrecision Console](../about)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)
