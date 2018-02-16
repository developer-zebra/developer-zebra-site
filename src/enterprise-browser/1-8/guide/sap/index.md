---
title: SAP ITSmobile Usage Guide
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
---
## Overview
This guide provides instructions for modifying an EB app for ITSmobile, the SAP middleware system built around its Internet Transaction Server (ITS). ITSmobile provides browser-based access to SAP's ERP, SRM and other enterprise app apps made with the company's proprietary dynpro language. Enterprise Browser apps can be built or adapted to work with ITSmobile, and hence to access SAP back-end enterprise apps. Doing so requires familiarity with editing the `Config.xml` and HTML file(s) of EB apps. 

**Related Guides**: 

* [Enterprise Browser Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [PocketBrowser and RhoElements Migration Guides](../)
* [DOM Injection guide](../DOMinjection)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)

-----

## Basic Steps 
The basic steps for accessing ITSmobile from an Enterprise Browser app are shown below with descriptions of (or links to) the detailed procedures for each. 

### Set the Start Page
Enterprise Browser must be set to start with the SAP ITSmobile application. Specify the URL of the SAP ITSmobile application in the [StartPage](../configreference/#startpage) parameter of the EB app's `Config.xml` file. 

### Enable JavaScript APIs
If the app uses Enterprise Browser APIs, the [API modules](../apioverview) must be present on the device and referenced from every HTML page that calls them. If the HTML is not available or cannot be edited, **APIs also can be accessed through meta tags** (see DefaultMetaTags section, below), which does not require changes to the HTML files. 

### Handle KeyEvents
Enterprise Browser can handle events triggered by keypresses either by using the KeyCapture common API or the `onkeyup / onkeydown / onkeypress` JavaScript APIs. Zebra generally recommends the KeyCapture method of capturing hardware keys because of several known limitations in the JavaScript APIs on devices running Windows Mobile with the IE rendering engine. For situations in which JavaScript is the only choice, consider swithing to the Zebra Webkit engine, if possible. 

KeyCapture API functionality varies based on the device and its operating system and rendering engine. Use the following table to determine available functionality.  

<table>
<tr>
<th>SCENARIO</th>
<th>Windows Mobile, Zebra Webkit</th>
<th>Windows Mobile, IE engine</th> 
<th>Windows CE, Zebra Webkit</th>
<th>Windows CE, IE engine</th>
<th>Android, stock webkit</th>
</tr>  
<tr>
<td>EB KeyCapture API (EB namespace)</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
</tr>
<tr>
<td>JavaScript Object, backward compatibility API</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
</tr>
<tr>
<td>ActiveX Object, backward compatibility API</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
</tr>
<tr>
<td>HTML onkeyup/onkeydown Events</td>
<td>YES</td>
<td>NO</td>
<td>YES</td>
<td>YES</td>
<td>YES</td>
</tr>
</table>
<br>

### Using KeyCapture API
The KeyCapture API can be invoked directly from one of the app's HTML pages or through a meta tag, which us useful if the HTML is not available or cannot be edited. Both methods are shown below. 

#### Invoke API directly

Most JavaScript-based key handling for SAP ITSmobile applications is handled by the `mobile.js` file, which is hard to extract and modify from an SAP server and is subject to limitations and JavaScript issues of the IE rendering engine referenced above. **To overcome those issues, try the following technique**:

1. Configure KeyCapture functionality in the `config.xml` file as below:


          :::xml

          <DefaultMetaTags>
            <MetaTag VALUE="KeyCapture~KeyValue:All;Dispatch:True;KeyEvent:url('javascript:fireKeyEvent(%json);');" /> 
          </DefaultMetaTags>

2. Add the following JavaScript method as described in the [DOM Injection guide](../DOMinjection). The same `fireKeyEvent` method has been configured in the `Config.xml` under the `DefaultMetaTags` attribute.


          :::javascript

          //Add the fireKeyEvent in the HTML page for handling in WM device with IE Engine
          function fireKeyEvent(event)
          {
            var getData = processKeyEvent(event);
          }

<br>
**KeyEvents also can be handled using any of the methods below**:

* **To capture keys via JavaScript Object** using backward compatibility API:


          :::javascript

          keyCapture.keyValue = 'All'; //Here keyCapture is 2.2 KeyCapture JavaScript Object.


* **To capture keys via Meta Tags** using backward compatibility API:


          :::xml

          <META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('javascript:MyCallBack(%json);')">


* **To capture keys via ActiveX Object** using backward compatibility API:

          :::javascript

          var mygeneric = new ActiveXObject("PocketBrowser.Generic");
          var temp = "KeyValue:All;Dispatch:True;KeyEvent:url('javascript:MyCallBack('%s');')";
          mygeneric.InvokeMETAFunction("KeyCapture", temp);


* **To capture keys via Enterprise Browser KeyCapture API**:


          :::javascript

          EB.KeyCapture.captureKey(true,"ALL", MyCallBack);


* **To capture keys via JavaScript onkeydown event attribute**:


        :::html

        <html>
          <head>

          <script>
          function jsKeyEvent(event)
          {
            alert(event.keyCode);
          }

          </script>

          </head>

          <body onkeydown="jsKeyEvent(event);"></body>

        </html>

        
<br>
####Invoke API through DefaultMetaTags 

Invoking an API using DefaultMetaTags adds functionality without modifying the original HTML. The disadvantage is scalability; any functionality added by meta tags is available only on device(s) that contain the tags.

**To apply DefaultMetaTags**:


            :::xml

            <DefaultMetaTags>
              <MetaTag VALUE="KeyCapture~KeyValue:All;Dispatch:True;KeyEvent:url('javascript:fireKeyEvent(%json);');" />
            </DefaultMetaTags>


It's important to note that the functionality added by meta tags is available to all of the app's HTML pages. This is unlike direct API access, which requires a reference to the API from every HTML page that calls any of the API's functions. 

What's more, a series of meta tags can be included once to interact with an API from anywhere in the HTML. For example, the following code in an app's `Config.xml` file would use the Signal API to display the network signal icon in the app. This way it will be available in all HTML pages but can be controlled from one location (the `Config.xml` file):

          :::xml

          <DefaultMetaTags>
            <MetaTag value="Signal~left:10;top:200;color:#663300;"/>
          </DefaultMetaTags>


### Function Keys

Function Keys can be configured to perform custom tasks on the device, and are captured in the same way as other keys. However, Function Keys are sometimes predefined by the operating system to perform certain default behaviors. For example, some Zebra devices reserve the F6 and F7 keys to control the speaker volume. In such cases, those keys cannot be captured by Enterprise Browser. **For Windows Mobile/CE, also see important [interaction notes](../configreference/#remarks)**.

#### Windows Keys on Android
On devices with a hardware keyboard, Android apps made with Enterprise 1.2 or later might benefit by using the [&lt;isWindowKey&gt;](../configreference/#iswindowskey) tag in the `Config.xml` file. This tag makes Android F1-F12 keys return the key codes of a Windows Mobile device, enabling apps to support Android and Windows devices with a single code base. This feature is available only on Enterprise Browser 1.2 and higher, and supports PocketBrowser 2.x/3.x and RhoElements 2.x KeyCapture APIs.

-----

## UI Rendering
UI rendering varies by the rendering engine present in the device. Rendering also can be effected by web page layout and design, font selection and other factors. Many of the styles available today are not supported by the default IE rendering engine, and pages rendered on WM/CE devices using the IE engine will render differently than devices with the Zebra Webkit engine. When designing web pages for Enterprise Browser, **Zebra recommends adhering to [Responsive Web Design](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/?hl=en) practices whenever possible**.

To simply the usage of applications running on Enterprise Browser, users can now configure hardware function keys to perform ZoomIn and ZoomOut operations without having to make changes to the application.

**Note: The function keys used for ZoomIn and/or ZoomOut operations are not accessible via any Key Capture API**. <!--Configuration for Zoom IN & Zoom OUT feature is supported in WM/CE platform. WHAT DOES THIS MEAN?-->

-----

## Authentication 

### Using Webkit engine
Zebra recommends configuring SAP credentials through the [&lt;Authentication&gt; parameter](../configreference/#authentication) in the app's `Config.xml` file, which supports digest and basic authentication techniques. The syntax is shown below: 

          :::xml

          <Authentication>
            <Username VALUE="userName"/>
            <Password VALUE="passWord"/>
          </Authentication>

**Note for Windows Mobile with Webkit engine**: If a credential is entered incorrectly using the Authentication parameter, some devices will not present another opportunity to log in, showing only the "Login Failed" page until the device is restarted. 

### Using IE engine
To avoid a perpetual "login failure" message, disable the license confirmation screen in the app's `Config.xml` file by placing a "0" in the &lt;ShowLicenseConfirmation&gt; tag, as below:

          :::xml

          <ShowLicenseConfirmation value="0"/> 

To avoid rebooting the device after every failed log-in attempt, Zebra recommends adding Quit, Back and Reload buttons to login pages.

-----

## Optimizing Performance

If an app is performing poorly, the following techniques might help improve it.

* If the scanner is required by multiple pages of an SAP app, Zebra recommends [keeping the scanner enabled](../configreference/#disablescannerduringnavigation) when navigating from one page to another (it's disabled during navigation by default). The scanner should be disabled only when quitting the app or when reaching a page after which it will no longer be used. 

* Avoid pre-loading unwanted capabilities that are not required in SAP environment. Some common pre-loads are listed below. If they're not needed by the app, enter a "0" in their tag in the `Config.xml` (shown below) to disable them:

            :::xml
          <PreloadLegacyODAX value="0"/>
          <PreloadLegacyNoSIP value="0"/>
          <PreloadLegacyAirBeam value="0"/>
          <PreloadLegacyAPD value="0"/>
<br>
* Zebra recommends disabling the Hourglass "page loading" icon (shown below) to improve performance during page navigation:

            :::xml
          <HourglassEnabled value="0"/>
<br>
* Zebra recommends disabling screen orientation (shown below) to avoid issues while scanning:

            :::xml
          <ScreenOrientation value="0"/>
<br>
* Zebra recommends loading only the API modules required by the app, and adopting as many additional [Optimization techniques](../optimization) as possible.

-----

## Handling Service Interruptions

As with any app that relies on the internet, ITSmobile apps should be designed to gracefully handle occasional service interruptions and navigation failures. Enterprise Browser is designed to automatically display a [bad link page](../configreference/#badlinkuri) if the user encounters a link that no longer exists or if navigation is taking too long. 

One technique that page designers might consider is to add "Quit," "Back" and "Reload" buttons to pages so users never feel stuck. For ITSmobile apps, Zebra recommends that the Reload button direct the app back to the SAP authentication page.

-----

## User Agent

For cases in which a page loads properly on one device and not on another, UserAgent values might be the cause, particularly when migrating an app from WM/CE to Android or vice versa. To check for this issue, follow the steps below. 

**&#49;. Identify the browser and platform** of the properly loading page from these possible combinations: 

* Enterprise Browser on Windows Mobile/CE
* Enterprise Browser on Android 
* Internet Explorer on Windows Mobile/CE
* Stock Android Browser on Android
* Google Chrome browser on Android
* Desktop browser (IE/Chrome/Mozilla/Opera) 

**&#50;. In the working browser, enter the URL below** to display the UserAgent values: 

[https://www.whatismybrowser.com/detect/what-is-my-user-agent](https://www.whatismybrowser.com/detect/what-is-my-user-agent)

**&#50;a. Alternatively, execute the JavaScript commands below** at the browser's JavaScript console on the working device to retrieve its UserAgent values from the sample HTML page:

    :::xml
    var userAgentValue = navigator.userAgent.toString();
    alert(userAgentValue); //Note: alert is not recommended

    //Example UserAgent values:

    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"

**&#51;. Copy the** `Config.xml` **from to non-working device** to the local development host, open the file in a text editor and locate the UserAgent tag. 

The `Config.xml` file is located: 

* **On Android**: `/Android/data/com.symbol.enterprisebrowser`
* **On Windows Mobile/CE**: `\Program Files\EnterpriseBrowser\Config`

**&#52;. Transfer the UserAgent values of the working device to the non-working device** using one of the methods below. The method used will depend on the formatting of the UserAgent data retrieved from the working device. 

#### Method 1 

If the retrieved data is formatted as below:

    "Mozilla/5.0 (Linux; Android 4.4.3; TC700H Build/01-23257-K-15-04-00-MV) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36".

Copy all the data within the quotes and paste it into the UserAgent config tag inside quotes as shown below:

    <UserAgent value="Mozilla/5.0 (Linux; Android 4.4.3; TC700H Build/01-23257-K-15-04-00-MV) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36"/>


#### Method 2 

If the retrieved data is formatted as below:

    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Windows Phone 6.5.3.5)"

### TO BE CONTINUED...
Then, one can append only the necessary portion of the string in the existing UserAgent value which can resolve the page loading issue using the UserAgent config tag available inside EB Config.xml as shown in the below example.

Example:

If the UserAgent value is "Mozilla/5.0 (Linux; Android 4.4.3; TC700H Build/01-23257-K-15-04-00-MV) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36".

And just by adding can MSIE 6.0 can resolve the issue then once can add details in the below manner:

<UserAgent value ="MSIE 6.0; Mozilla/5.0 (Linux; Android 4.4.3; TC700H Build/01-23257-K-15-04-00-MV) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36"/>

5. Once the UserAgent value is modified in Enterprise Browser Config.xml. Place the same inside EnterpriseBrowser installed directory in the device and restart the Enterprise Browser.

6. SAP page should now be loading properly if there are no further issues other than UserAgent.

-----

## Function Key Mapping

Function Key Mapping SAP Guide

(Regarding WorkAbout Pro 4 WEH(WM) and Omnii XT15 WEH(WM) Device - Function Key Usage Notes to be added)

As SAP application is highly dependent on function keys. But on few WM devices as mentioned above when user presses any function key, it returns a proprietary set of Unicode values via Windows character messages rather than the values expected from Windows keydown/keyup messages.

For example, pressing the F1 key returns the hexadecimal value E001 (57345 decimal) rather than the hex value 0x70 (112 decimal) as generally expected. This can lead to compatibility issues for Enterprise Browser apps when running on such WM devices.

Therefore, we need to add a note for such scenario mentioning that this can be handled by Function Key Mapping.

Please to refer Enterprise Browser Function Key Mapping Guide i.e. http://techdocs.zebra.com/enterprise-browser/1-7/guide/keycapture/#mappingproprietaryfunctionkeycodes

-----

**Related Guides**: 

* [Enterprise Browser Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [PocketBrowser and RhoElements Migration Guides](../)
* [DOM Injection guide](../DOMinjection)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)

