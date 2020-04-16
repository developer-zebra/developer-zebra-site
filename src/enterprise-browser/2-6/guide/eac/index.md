---
title: Enterprise Application Configurator
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
---

## Overview

Enterprise Application Configurator (EAC) is a companion utility for Enterprise Browser that simplifies [DOM injection](../dominjectionandroid), which can add capabilities to a running EB app without changing the source code. This tool can map EB fields or buttons to Zebra devices such as scanners, printers and keyboards and or can voice-enable fields for spoken input and/or output. 

EAC is a browser-based solution that presents an easy-to-use GUI for creating DIM injection configuration files and does not require changes to the EB app's source code or access to a target’s application server. EAC is designed to help companies that use SAP ITSmobile and similar solutions easily modify legacy apps. 

### Requirements

* Computer running Windows 8 or Windows 10 with Google Chrome installed
* Zebra device that supports Enterprise Browser<br>
**<u>See [Zebra Support Portal EB page](https://www.zebra.com/us/en/support-downloads/software/developer-tools/enterprise-browser.html)</u>** for supported devices
* EB 2.6 (or later) installed on device
* Computer and device on the same IP subnet
* `AppConfigurationUtility.apk` screen streaming service `([download]()) LINK TO COME `

> **NOTE: EAC does not support apps that employ shortcuts or [multi-session tabs](../multisession)**.  

---

## Step 1 - Install and Set up

##### To set up Enterprise Application Configurator: 

1. Push the `AppConfigurationUtility.apk` file to the device, **launch and tap "START NOW"** to grant permission to capture the screen. 
2. **Add the node below code to the app's** `Config.xml` **file** just before the &lt;Applications&gt; node:<br>

		:::xml
		<DOMInjectionUtility>				     
			<appConfigEnabled value="1"/>
		</DOMInjectionUtility>

		<Applications>
			<Application>
			...

3. **Push the modified** `Config.xml` **file to the device** in the following location:<br>
  `/sdcard/Android/data/com.symbol.enterprisebrowser/` <br>
4. **Launch Enterprise Browser** on the device. 
5. **Pull down the Notification bar on the device** to obtain the IP address for the screen stream:<br>
 <img alt="" style="height:350px" src="eb26-01.png"/>
 _Click image to enlarge; ESC to exit_.
 <br>
6. **On the Windows computer running Chrome, enter the IP address and port number** obtained in Step 5 into a new browser window. **Note: Only Google Chrome is supported**. After a moment, a splash page appears with a section similar to the image below. **Enter the EB app type**:<br>  
 <img alt="" style="height:100px" src="eb26_09.png"/>
 _Click image to enlarge; ESC to exit_.
 <br>
7. After a moment, the browser window displays the EB app and the configurator similar to the image below: 
 <img alt="" style="height:450px" src="eb26-02.png"/>
 _Click image to enlarge; ESC to exit_.
 <br>

##### The tool is now ready to accept field mappings for the EB app.  

-----

## II. Map App to Functions 
DOM injection works by inserting CSS, JavaScript and/or meta tags into a running app, enhancing the app with the functionality contained within the inserted code. EAC converts the field and/or key mappings made through its GUI into the necessary CSS, JavaScript and/or meta tags to be inserted, saving it in a file. Once that file is pushed to the target device, the desired functionality is available the next time the EB app is launched. 

EAC is ready to use when its two-panel display appears in the workstation's browser similar to the image below. The process begins by clicking on a field in the left-hand app window and assigning it an input or output function on the right. Selections are saved automatically. Clicking the "DOWNLOAD" stores all settings into the file for deployment to the device(s). 

<img alt="" style="height:219px" src="eb26-02.png"/>
_Click image to enlarge; ESC to exit_.
<br>


8.	Now you are ready to map zebra values adds by using this tool.
9.	Select one of the options from the radio box (details are in next page) and start the training.
10.	Later you can download the configuration file, after you are done with training.
11.	This configuration file can be pushed on number of devices at the below location to be consumed it by EnterpriseBrowser. (/sdcard/Android/data/com.symbol.enterprisebrowser/).

***Note: This file should not be renamed. It should be exactly `appconfiguration.txt`***.

10.	In order to take this training effect, we need to push below modified tag (value=”2” means production) in config.xml (`<appConfigEnabled value=”2”/>`) and relaunch EnterpriseBrowser application.

Note: `AppconfigurationUtility.apk` must be installed only on device, we are going to use for      training. Once training is completed and configuration file is generated. This must be uninstalled.


### Using the Tool



The basic work of this tool is, to enable zebra values adds like, scanner, printer, voice-input or voice-outputs in a webpage without doing the server-side modification in the page. This tool provides an interactive webpage to add those functionalities on any field on the page.

As we want to achieve this without doing any modification to server-side. We will train elements of the pages using this tool. 

So, to use this tool, we need to understand two major things

* For any EB app running on browser, either the
 * The URL is unique (e.g. https://abc.com/contacts) or 
 * URL is not unique but just session ids are getting appended on URLs (e.g. sap URLs).

If URL is unique, we need to select the No training on the tool.

If URL is not unique, we need to Yes(refer image on previous page)

Steps to run the tool:

1.	Run the EnterpriseBrowser on the device and make sure inside Config.xml below code is enabled. If value is other than 1, it will not work.

		:::xml
		<appConfigEnabled value=”1”/>

2.	Select appropriate configuration  type in the desktop tool.
3.	Now you can see the live screen of the tool. Interaction will also be enabled now on the device screen area. But still it will not enable the configurations section on the right.
4.	Next step is to focus on any input field or button , and now it will enable the tool to map that field with zebra capabilities.
5.	Keep on mapping the field as per need and , when done, you can download the configuration file.(appconfiguration.txt) 

<img alt="" style="height:219px" src="eb26_10.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="" style="height:219px" src="eb26-03.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<img alt="" style="height:219px" src="eb26-04.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<img alt="" style="height:219px" src="eb26-05.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<img alt="" style="height:219px" src="eb26-06.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<img alt="" style="height:219px" src="eb26-07.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<img alt="" style="height:219px" src="eb26-08.png"/>
_Click image to enlarge; ESC to exit_.
<br>
