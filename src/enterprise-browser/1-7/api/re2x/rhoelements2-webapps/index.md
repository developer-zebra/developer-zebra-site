---
title: RhoElements-Enabling Your Web App
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

If you have an existing application that is running from a web server, it is very easy to extend this application and provide RhoElements functionality. Beyond the standard HTML5 features that may be utilized, RhoElements provides a very easy way for you to add device capabilities to your web application through JavaScript for HTML Meta tags. Let's say for example you have a form on one of your pages and you want to enable bar code scanning for ease of data entry. This can be accomplished by adding a few lines of JavaScript to your pages. You do not need to build and compile a RhoElements application using RhoStudio. You simply need to enable your web app by installing a RhoElements runtime application on the device and configuring it to point to your web server.

To enable your web app for RhoElements, perform these steps.

1. [Install the RhoElements Runtime](#installing-the-rhoelements-runtime).
2. [Write your web app](#writing-your-rhoElements-web-app) (HTML, CSS, and JavaScript). Call the RhoElements JavaScript APIs for mobile device functionality.
3. Install your web app on your mobile device.
4. Edit the RhoElements config.xml file to point to your web app start page.

In order for RhoElements to start with your web app, you need to configure RhoElements so that it knows which URL to start with. This can be accomplished in multiple ways.

* [Creating a shortcut](#creating-shortcuts-for-your-web-app) that changes the default URL that is loaded to your web app URL.
* Modifying the <StartPage> parameter in the default [config.xml file](#understanding-rhoelements-configuration-parameters) to point to your web app URL.

## Installing the RhoElements Runtime


**NOTE: If you do not plan on [building native apps](rhoelements2-native), then you do not need to install any of the prerequisites, such as other mobile development platforms or the Java Development Kit. However, to obtain the individual mobile platform RhoElements runtimes for your web app, you must minimally install RhoMobile Suite.**


After you [install Zebra RhoMobile Suite](/rhoelements/rhoelements2-webapps.md/rhomobile-install), you will have access to a set of executables -- the RhoElements runtimes -- for Windows Mobile, Windows CE and Android. You will need to install the RhoElements Runtime on each device that will be used for your application.

* On Windows, you can find the RhoElements Runtimes in the Start Menu, under Zebra RhoMobile Suite.
* On Macintosh, they are located in the Zebra RhoMobile Suite Installer for Mac, in the RhoElements2 Shared Runtime folder.

On Windows Mobile/CE devices, install the RhoElements Runtime.cab to \Program Files\RhoElements using ActiveSync or Windows Mobile Device Center. On Android, install the RhoElements Runtime.apk using the Android SDK.

Once installed, you will have access to the RhoElements config.xml file. 

**NOTE: When installing a newer version of the runtime on Windows the existing config.xml will be overwritten with the default one. You should redeploy your customized config.xml along with an upgrade of the runtime. On Android, the config.xml is not overwritten on upgrades of the runtime.**

## Writing Your RhoElements Web App

This section will take you step by step through creating your first web-based scanning application for your Zebra mobile device using RhoElements. The tutorial is based on the ubiquitous "Hello World" application but instead of simply displaying this message, it will enable the scanner on the mobile device and display a message when a barcode is decoded. Once you have completed this tutorial you should be familiar with the RhoElements language "EMML" and how this applies to the other features of RhoElements such as the Signature Capture or Gesture modules.

### Hello Scan

1) Using your favorite text editor, create a blank text
document and save it as HelloScan.html.

2) Create the basic framework of a web page as shown below
adding an &lt;html&gt;, &lt;head&gt;, &lt;title&gt; and &lt;body&gt;
section. 

NOTE: Although RhoElements does not have a title bar due to it providing you with the maximum screen real estate for your application, the title will appear in any dialog boxes (alerts, etc.) that are displayed.

	<html>
	   <head>
		  <title>Hello Scan</title>
	   </head>
	   <body>
	   </body>
	</html>

3) Now add some text to the &lt;body&gt; section so that we can see something on the screen when we start Hello Scan.

	<html>
	   <head>
		  <title>Hello Scan</title>
	   </head>
	   <body>
		  <b><h2>This is my first RhoElements application!</h2></b>

		  <b><p>Please scan a barcode...</p></b>
	   </body>
	</html>

4) We are now going to add a couple of &lt;meta&gt; tags that will contain the EMML to [enable the scanner and call a JavaScript function](scanner) when a barcode is decoded. Add this tag to the head section of your code. The second tag will simply display a button on the screen over the top of your web content which will allow you to quit the browser when clicked, this is extremely useful during development but is probably something you would want to remove for production.

	<html>
		<head>
		<title>Hello Scan</title>
			<meta http-equiv="scanner"
				content="DecodeEvent:url('JavaScript:doScanDecode(%json);'); enabled" />
			<meta http-equiv="quitbutton" content="visibility:visible;" />
		</head>
		<body>
			<h2>This is my first RhoElements application!</h2>
			
			<p>Please scan a barcode...</p>
		</body>
	</html>

When this tag is parsed, two actions will be performed: firstly, the decode event will be setup to call the doScanDecode function, and then the scanner will be enabled. The parameters and their values and methods are written as they would be in CSS, with parameters and values separated by a colon ":" and pairs separated by semi-colons ";". When setting up the decode event, you will see that we have chosen to retrieve the parameters vis JSON object.

The [Retrieval Events](RetrievalEvents) help section explains how to specify the returned parameters to be sequential or returned as a JSON object.

NOTE: It is not entirely necessary to add the code to call the JavaScript; without the code, this RhoElements will output any decoded barcodes as keyboard presses as if the code has been typed on the device keypad. However, this has its drawbacks. For example, if the user has clicked out of the focus of a text box, the decoded barcode will simply be lost causing confusion to the user. Also, by handling the decoded barcode in JavaScript, you can perform validation on the code before proceeding after which you can update a label on the screen, call an Ajax function, or simply populate a text box as best suits your application design.

5) We must now write the JavaScript function doScanDecode. Here we will check that the event is a decoded barcode (there are other event types when used in conjunction with the Bluetooth scanners), then we will display a message on the screen.

	<html>
		<head>
		<title>Hello Scan</title>
			<meta http-equiv="scanner"
				content="DecodeEvent:url('JavaScript:doScanDecode(%json);'); enabled" />
			<meta http-equiv="quitbutton" content="visibility:visible;" />
			<script>
				function doScanDecode(jdata)
				{
					if(jdata.event != 'Decode')
						return;
					var divEl = document.getElementById('divOutput');
					divEl.innerHTML = 'Hello ' + jdata.data + '<br/>From: ' + jdata.source;
				}
			</script>
		</head>
		<body>
			<h2>This is my first RhoElements application!</h2>
			<p>Please scan a barcode...</p>
			<div id='divOutput'></div>
		</body>
	</html>

In the decode event, you will see that we retrieve from the JSON object the parameters for the data decoded, the source of the code, and the event type. If you take a look at the scanner section of the help file, you will see the parameters listed.

We could have simply displayed the message in a JavaScript alert box; however this can cause problems if the user continues to scan more barcodes whilst the alert box is visible.

Your first application is now complete. For the purpose of this tutorial, we will copy the file to the device; however, if you have a web server at hand and you have configured the device to communicate on the network, you could equally view the page from there.

## Setting RhoElements to Start With Your Application

This section assumes you have created your application on a Zebra Windows Mobile or CE device; you can create on an Android device also.

1. Copy the file HelloScan.html to the root folder of your device using ActiveSync or Windows Mobile Device Center.
2. Find the file "\Program Files\RhoElements\config\Config.xml" on your Zebra Windows Mobile/CE device and copy it to your PC.
3. Open config.xml in your PC's text editor.
4. Find the "Application" entry in the config.xml file and change its startPage parameter to "file://\helloscan.html".
5. Copy the config.xml file on your PC back to your mobile device.
6. Start RhoElements using the icon in the Programs Group.

NOTE: If you are using a localized variant of the operating system, you may need to edit the default config.xml and plugin.xml shipped with RhoElements to account for the localized folder names on the system, e.g. The Italian build of the OS uses \Programmi\ rather than \Program Files\.

## Understanding RhoElements Configuration Parameters

It is recommended that you get familiar with the [Configuration Parameters](ConfigurationSettings) in the configuration file config.xml, both for developing/debugging as well as deployment. 

The location of the configuration file loaded by RhoElements is dependent on the mobile device.

* When running on the Android Enterprise Tablet, the configuration file is read from `/Android/data/com.motorolasolutions.rhoelements/Config.xml`.
* When running on all other devices, RhoElements will attempt to launch the configuration file 'Config.xml' located in the folder 'Config' off the installation root.

If you wish to keep all default parameters and just change the starting url, then it is recommended that you simply create a shortcut as described below. 

If you wish to modify other parameters in the config.xml, you should replace the config.xml file after the RhoElements Runtime is installed. Locate the config.xml file, copy it to your desktop for modification, and then you can use this file along with your distribution of the RhoElements Runtime. This file will need to be overwritten after the installation of the runtime.

## Creating Shortcuts for Your Web App

You can create a shortcut file to have the RhoElements Runtime launch with your web app.

### Creating Shortcuts on Windows Mobile/CE

You can setup Windows Mobile shortcut files to launch the RhoElements runtime with different startup options that will override the default settings. You set these parameters in a shortcut (.lnk) file for Windows Mobile/CE; you must create this shortcut file. You can use a text editor such as Notepad on Windows CE, or use the File menu in Platform Builder (New Project or File, Text File type). Edit the file for command line parameters and save it to \Windows\Start Menu. This will put the shortcut at the top level in your Start Menu.

The RhoElements runtime installation path on Windows CE/Mobile devices is `\Program Files\RhoElements` and the path to the executable is `\Program Files\RhoElements\RhoElements.exe`.

The shortcut file supports the following command line parameters.

`/C:` specifies the location of the configuration file for the RhoElements v1.0 application. This will override all default configuration settings. If the full file name contains spaces, surround URL with single or double quotes, e.g.:

        /C:file://\application\config.xml
        /C:'file://\Program Files\application\Config.xml'
        /C:"file://\Program Files\My Application\config.xml"
        
`/S:` specifies the start page of the RhoElements v1.0 application. Other configuration parameters will be used from the default config.xml file. If the full file name contains spaces, surround URL with single or double quotes, e.g.:

        /S:file://\HTML\index.html
        /S:'file://\RE App\index.html'
        /S:"file://\Program Files\MyApp\index.html"
        /S:http://www.motorola.com

If neither the `/S` nor `/C` parameters are specified in the shortcut file, then the default values for the location of the configuration file and the start page of the RhoElements application will be used. 

NOTE: Urls that contain query string parameters (?name=value) can not be used within a shortcut on Windows Mobile / CE. This is a limitation on Windows Mobile/CE for creating shortcuts.

The format in the .lnk file is:

	<line-length>#<runtime-exe> <command-line-parameter> <app-folder>

For example, this code in the .lnk file will change the startup page to be a local HTML file.

	70#"\Program Files\Rhoelements\rhoelements.exe" /S:file://\helloscan.html

### Creating Shortcuts on Android Enterprise Tablet

The Zebra Technologies Enterprise Tablet (ET1) has been customized so that android shortcuts can be created very easily. Once RhoElements is installed on the ET1:

1. Navigate the ET1 to the home page by pressing the Home button on the device.
2. Press and hold until you see the 'Add to Home screen' popup menu display.
3. Select 'Shortcuts'.
4. Scroll down and select 'RhoElements'.
5. Enter change the 'config.xml path' or enter a 'Application Url'.
6. Enter a 'Shortcut name' and then press 'Ok'.

The shortcut will be placed on the ET1 home screen. At this time there is no way to provision an ET1 with this shortcut file, as you can with Windows Mobile.
<!-- PLACEHOLDER SCREEN SHOTS NEEDED -->

## Running Multiple Web Apps

If you have multiple web apps that you would like to point RhoElements Runtime to, you can create multiple shortcuts as described above. FOr example, one startup file could be:

	68#\Program Files\Rhoelements\rhoelements.exe /S:file://\helloscan.html

And another could be:

	66#\Program Files\Rhoelements\rhoelements.exe /S:file://\helloscan.html

NOTE: The last application will launch using the same runtime container. Only one application will be running at a time. When launching the second application the runtime simply changes the starting URL.
	
## Customizing the RhoElements Runtime

The RhoElements Runtime is a prebuilt Rhodes application that launches in full screen mode and loads the configuration parameters as described above. If you would like to modify the behavior of the RhoElements runtime, such as change the startup screen or icon, then load the Rhodes project from which you can build a RhoElements Runtime into RhoStudio.

**NOTE: The RhoElements Runtime is only available for [Zebra Technologies devices](rhoelements-introduction#_motdevices).**

### Building Custom RhoElements Runtime for Windows Mobile/CE

On the command line on your Windows PC, navigate to this folder:

	<RhoMobile Suite Install Folder>\Rhoelements2

To build, run this command.

        rake device:wm:production

The resulting `cab` file can be found at `<RhoMobile Suite Install Folder>\RhoElements2\bin\target\<platform_id>\RhoElements2.cab`.

### Building Custom RhoElements Runtime for Android

On the Macintosh, the RhoElements Runtime project is located in the Zebra RhoMobile Suite Installer for Mac, in the RhoElements2 folder. 

Copy the RhoElements2 project folder to your Macintosh at a location where you can run your RhoElements/Ruby rake commands. One way you can do this is to import this project into RhoStudio.

To build for Android, run this command from the RhoElements2 directory on your Windows PC (`<RhoMobile Suite Install Folder>\RhoElements2`) or the location where you imported the RhoElements2 project from the RhoMobile Suite Installer for Mac.

        rake device:android:production

The resulting `apk` file can be found in the RhoElements2 project `\bin\target folder`, such as at `<RhoMobile Suite Install Folder>\RhoElements2\bin\target\RhoElements2.apk`.

### Deploying The Customized Runtime 

To install your customized Runtime application on your specific device, go to the [build instructions](/rhoelements/rhoelements2-webapps.md/rhodes/build) for your platform and use the instructions to deploy an application on your device.

NOTE: The runtime application <b>must</b> be installed to the primary disk partition on the Windows CE/Mobile device, i.e. it has to be installed to `\Program Files\RhoElements2` only.
On Windows Mobile, the `Device` option must be selected when the installer asks for the location to install.
On Windows CE, the default path (`\Program Files\RhoElements`) must be selected.

## Logging a RhoElements WebApp Application

The RhoElements WebApp (hybrid) application log file is configured in the configuration file [Config.xml](ConfigurationSettings).

The location of the log file of a RhoElements WebApp (hybrid) application is defined by the following rules (in the order of priority):

1. If the `Value` attribute of `Configuration` > `Logger` > `LogProtocol` tag in the configuration file equals "FILE" or "HTTP", then the path to the log file is taken from the `Configuration` > `Logger` > `LogURI` tag.

    - Windows Mobile/CE: In case of "FILE" protocol, the file name part of `value` attribute of `LogURI` tag is ignored and `rholog.txt` is used as a file name.
    - Android: In case of "FILE" protocol, the file name specified with the `value` attribute of `LogURI` tag is used.
    - In case of "HTTP" protocol, log messages are sent to the host and the port specified with the `value` attribute of `LogURI` and `LogPort` tags via POST HTTP-requests.

2. If the start page parameter is a local file, then this file folder is used to store the log file.
The file name part of the start page parameter is ignored and `rholog.txt` is used as the file name.
This rule is not applied to Android.

3. Otherwise the log file has the name `rholog.txt` and is placed at this location:
 * Windows Mobile/CE: `rho` folder of the Runtime installation folder.
 * Android: `rhodata` folder of the Runtime installation folder (accessible at emulator or rooted device only).

## RhoElements Web Server
If you are planning on having local HTML files reside on the device and you are not building a [native RhoElements application](rhoelements2-native), you should consider enabling a local web server on the device. The benefits of this are that JavaScript running on the device is able to communicate with a remote server via e.g. Ajax without cross-domain security issues.
	
### Setting up the web server
By default the local web server is switched off, you will need to manually enable and configure the server using the RhoElements configuration file.  See the [Configuration Settings help page](ConfigurationSettings) for the server options, specifically those under the &lt;WebServer&gt; hierarchy.

**NOTE: This option is only available for Windows Mobile/CE. As an alternative you should consider building a native application. RhoElements [native applications](rhoelements2-native) have a built in web server that runs on all platforms. The HTML files could be placed in the /public folder of the native application folder and the application would use the [Webview API](/rhoelements/rhoelements2-webapps.md/rhodesapi/webview-api) to load the initial starting html page.**

Using the following example configuration:
<ul>
<li>Enabled: 1</li>
<li>Port: 8080</li>
<li>WebFolder: \myWeb</li>
<li>Public: 0</li>
</ul>	

Navigating to <b>file://\myWeb\index.htm</b> will load the page from the file system.<p>

Navigating to <b>http://localhost:8080/index.htm</b> will load the same page via the local web server.

## Device Uninstallation

To uninstall RhoElements on the Windows Mobile device:
<ol>
<li>
Connect your device to your PC via the USB cable and wait for Microsoft ActiveSync or Windows Mobile Device Center to connect.
</li>
<li>
From ActiveSync or Windows Mobile Device Center, select the "Add/Remove Programs" dialog normally found in the Tools menu.
</li>
<li>
Uncheck the text box beside Zebra RhoElements x.x.x.x Runtime and click "OK".
</li>
<li>
RhoElements will now uninstall from your device.
</li>
</ol>
Any user generated files and folders and any log files in the \Program Files\RhoElements directory will not be deleted.

## Conclusion and Best Practice

By completing this tutorial you will now be familiar with EMML and having realized how simple it is to produce applications using RhoElements for Zebra mobile devices.

Here are a few points to remember or consider when designing and writing your application:
<ul>
<li>
It's always best to start your application with a page that resides on the device so that there is always somewhere for the device to go should there be a problem with the network connection, from this page you can transfer automatically or manually to the online version of your application, assuming you are not writing a fully offline application.
</li>
<li>In asynchronous events, such as the decodeevent of the scanner module, avoid displaying alert boxes.</li>
<li>It is often better to design your application to make use of technologies like Ajax and JSON in favor of many page navigations as this will provide you with better performance.	</li>
<li>EMML Profiles can be employed to improve readability and performance.</li>
<li>Make use of &lt;div&gt; and &lt;span&gt; tags instead of using complex tables as complex tables take time to calculate and position.</li>
<li>
<B>Avoid using framesets</B>, and make use of &lt;div&gt; and &lt;span&gt; tags. A single page is faster to process and it is not possible to guarantee which frames' tags will be parsed first; also any JavaScript callbacks will always be sent to the parent frameset page.  iFrames can be used, but you should use JavaScript to instantiate your EMML over the meta tags.
</li>
<li>The possible values for each module parameter are given in this help file alongside the parameter its self.  RhoElements behavior when processing out of range values is undefined, however it is safe to assume RhoElements will handle the value in a graceful manner.</li>
</ul>


## Common Mistakes

When writing your RhoElements application, be sure to avoid the following common mistakes:</p>
<ul>
<li>JavaScript uses the '\' as an escape character, so to specify a path with backslashes you will need to use '\\'.  When specifying a path in EMML (meta tags) only a single '\' is necessary.
</li>
<li>In common with all mobile computers, accessing secure sites (https) requires the date and time to be set correctly on the device.  Take care after cold booting as this will reset the system clock.</li>
<li>EMML is not case sensitive when used in meta tags; however, take care when using JavaScript objects because JavaScript is case sensitive.</li>
</ul>


