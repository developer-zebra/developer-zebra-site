---
title: SAP ITSmobile for Android 
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---

## Overview
This guide provides instructions for modifying an EB app for Android to work with ITSmobile, the SAP middleware system built around its Internet Transaction Server (ITS). ITSmobile provides browser-based access to SAP's ERP, SRM and other enterprise apps made with the company's proprietary dynpro language. Enterprise Browser apps can be built or adapted to work with ITSmobile, and thereby to access SAP back-end enterprise apps. Doing so requires familiarity with editing the `Config.xml` and the HTML file(s) of EB apps. 

#### EB 2.0 for SAP

Enterprise Browser 2.0 (and newer) includes an installation package (`EnterpriseBrowser_SAP_signed_v2.0.1.0.apk`) with 
a `Config.xml` file designed for organizations that are running SAP ITS mobile app(s) on Zebra Android devices. The standard `Config.xml` file also is included in the package, and can be activated using steps in the [config-switching section](#sapvsstandardebpackage) below. 

When migrating SAP apps from Windows Mobile/CE to Android, the most common problems relate to page-fitting and the absence of hardware function keys. To address these issues, organizations often maintain separate applications for different device-screen sizes and build HTML-based buttons to replace the missing hardware keys. 

Enterprise Browser 2.0 helps address these and other migration issues. 

-----

## SAP Package Features

### Sound support

SAP ITSmobile applications can be configured to play a sound to indicate the success or failure of a transaction, and the EB SAP package can be configured also to play these sounds. If different sounds are desired, [DOM injection](../dominjectionandroid) can be used to play sounds stored on the device.

### SAP Keyboards

EB 2.0 includes SAP-specific keyboard layouts that leverage EB's custom [ButtonBar features](../customize). This helps to compensate for hardware keys missing from Android devices. **The SAP keyboard by default displays a numeric layout** whenever the focus of an app is on an input field. The default layout is easily changed by editing the `showKeyboard`/`hideKeyboard` JavaScript function in the `sapkeyboard.js` API.

**A function key layout** allows SAP users to press function keys from the Software Input Panel (SIP) on demand, eliminating the need to modify the SAP application to include HTML buttons to emulate function keys. Each key on an EB keyboard can easily be configured to issue a keystroke or to run a script. For more information, see the [ButtonBar Parameter guide](../customize/button). 

Logic in the `/android_sap/Sapkeyboard.js` file reads the SAP keyboard config paramaters from the `Config.xml` file and registers for `onfocus` and `keydown` events to control keyboard pop-up behavior. **It's important to ensure that the functions below are called *<u>after</u>* showing or hiding a keyboard**.

    //call to redraw the WebView when keyboard pops up:
    metaReceiver.resizeWebviewOnButtonbarShown(); 
 
    //call to redraw WebView when keyboard is hidden:
     metaReceiver.restoreWebviewOnButtonbarHidden(); 

-----

## Configuration Parameters

Enterprise Browser 2.0 (and newer) introduces configuration parameters that provide more control over the behavior of SAP apps.

### SAP Keyboard Parameters

Keyboard visibility and custom key layouts can be controlled through parameters in the `Config.xml` file. See the [Config.xml reference](../configreference) for details. 

#### To show the SAP keyboard on every page:
    <KeyboardVisibility value="alwaysOn"/>

#### To show keyboard on demand when an input field is in focus:
    :::xml
    <KeyboardConfiguration>
        <KeyboardVisibility value="onDemand"/>
          <ondemand>
            <onFocus value="1"/>
          </ondemand>  
    </KeyboardConfiguration> 
<br>

#### Display the keyboard whenever the F10 key is pressed:
    :::xml
    <KeyboardConfiguration>
        <KeyboardVisibility value="onDemand"/>
          <ondemand>
            <onHardwarekeypress value="1"/>
            <HardwarekeyValue value="140"/>
          </ondemand>   
    </KeyboardConfiguration>
<br>

#### Display the keyboard with F10 key <i><u>OR</i></u> when input field is focused:
    :::xml
    <KeyboardConfiguration>
    <KeyboardVisibility value="onDemand"/>
          <ondemand>
              <onHardwarekeypress value="1"/>
               <HardwarekeyValue value="140"/>
                        <onFocus value="1"/>
                     </ondemand>    
    </KeyboardConfiguration>
<br>

#### Make the page re-sizable on keyboard pop-up to avoid visibility concerns:
    :::xml
    <SIP>
      <ResizeOnButtonbar value="1"/>        
    </SIP>
<br>

#### Set the page as re-sizable while reserving a minimum safe height for the keyboard:
    :::xml
    <SIP>
      <ResizeOnButtonbar value="1"/>
      <ButtonBarMaxHeight value="default"/> 
    </SIP>
<br>

##### Notes: 
* **If the default SAP keyboard layout is preferred**, Zebra recommends using the "default" value for the `ButtonBarMaxHeight` parameter (as above). If a custom layout is to be used, the value should be specified (in pixels) to match the layout height.
* **To disable the SAP custom keyboard on the MC93** device running Android 8.O Oreo, update the `sapconfigreader.js` file on the device as follows: 

        :::JavaScript
        // Replace line 66 in the "sapconfigreader.js" file with the JavaScript code below:
        //
        if(-1 != deviceModel.indexOf("mc92") || -1 != deviceModel.indexOf("mc33") || -1 != deviceModel.indexOf("mc67") || -1 != deviceModel.indexOf("tc20k") || -1 != deviceMo

Location of the `sapconfigreader.js` on the device:

* `\[InternalStorage]\Android\data\com.symbol.enterprisebrowser\android_sap`

-----

### Page Fitting

Like all pixel-based UI elements, SAP ITSmobile UI elements look smaller on high-resolution displays than on low-res ones. A page designed to fill the screen of a 640x480 display will occupy only a portion of a modern high-res display. To compensate, apps running on Enterprise Browser 2.0 (and newer) can use the ViewPort parameter, which reads device-specific display settings into the app at runtime. 

####Example
    :::xml
    <ViewPort>
      <UseWideViewPort value="1"/>
      <ViewPortWidth value="device-width"/>
      <ViewPortInitialScale value="1.0"/>
    </ViewPort>
<br>

**Supported meta tags**:

* **UseWideViewPort -** Value of "1" applies subsequent meta tags (default=0). 
* **ViewPortWidth -** Sets the width of the page.
* **ViewPortInitialScale -** Sets the zoom level of the page when the app starts.

**Possible values**: 

* **UseWideViewPort**
   * 1 (enabled), meta tags (below) are applied
   * **0 (disabled), meta tags are NOT applied (default)**
* **ViewPortWidth** [more info](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Viewport_width_and_screen_width)
   * Accepts [HTML5-spec viewport settings](https://www.w3.org/TR/css-device-adapt-1/)
   * Number of CSS pixels (i.e. 600) at 100% scale
   * **device-width -** sets page width to match that of device
* **ViewPortInitialScale** [more info](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Viewport_width_and_screen_width)
   * Accepts [HTML5-spec viewport settings](https://www.w3.org/TR/css-device-adapt-1/)
   * Number corresponding to fixed initial magnification value (i.e. "1.5" = 1.5x zoom)
   * **maximum-scale -** caps the magnification value ("=1.0"=no zoom-in) 
   * **minimum-scale -** sets a base magnification value ("=1.0"=no zoom-out)
   * **user-scalable -** Controls whether user is allowed to zoom (=yes, =no)

<!-- ViewPort settings above are replicated in the config reference -->

> **Note**: Settings above impact all pages.

#### Force-fit to Screen Width
It's possible that some ITSmobile pages are wider than the viewport (visible area) area of the device, resulting in the need to scroll the screen to see all page elements and a less than ideal user experience. This problem is addressed with the &lt;SapForceFitToScreen&gt; parameter, which arranges horizontally aligned HTML elements vertically. When enabled, ITSmobile pages are forced to render elements within the visible horizontal region, or screen width. 

**NOTE**: This parameter applies only to SAP ITSmobile apps, and might effect CSS styling. **Parameter is disabled by default**. 

#### Confine page to screen width: 
    :::xml
    <SapForceFitToScreen value="1"/>

##### For additional page fitting options, see the [DOM injection guide](../dominjectionandroid). 

-----

### Customize Page UI Elements

EB 2.0 provides configuration parameters for controlling the size of UI elements on SAP pages. **These settings impact all pages**.

#### Increase button height: 

    :::xml
    <SapCustomization> 
        <SapButtonHeight value="30px"/>
    </SapCustomization>
<br>

#### Adjust font size:

    :::xml
    <SapCustomization>    
      <SapButtonFontSize value="10px"/>      
    </SapCustomization>
<br>

#### Adjust a read-only text field:

    :::xml
    <SapCustomization>     
      <MobileEditDisabledWidth value="20px"/> 
    </SapCustomization>
<br>

-----
<!-- 
### Modify Page at Client Side

Modify Page at Client Side by running script

Enterprise Browser 2.0 support running a client-side script designed by user to customize the page. 

using the DOM injection pagecontent parameter. 

#### Execute on a Specific Page

An enterprise user may require to run some scripts or associate some Enterprise Browser actions such as (HOME, quit) when a SAP page loaded contains a text that is matching with user provided input.

For example, SAP user wants to redirect to HOME page when an error 400 is occurred. User can mention this information under a "tags" file referenced in the app's `Config.xml` file as below. 

Entry in config.xml; this entry already exist in Enterprise Browser SAP package Config.xml

    :::xml
    <FileLocations>
      <pageactionxmlfile  value="file://%INSTALLDIR%/android_sap/mySAPtags.xml"/>
    </FileLocations>

Entry in PageAction.xml; this entry already exist inside Enterprise Browser SAP package

    :::xml
    <pageActionGroup>
        <pageAction1>
            <pageIdentification value="400 Session timed out" />
            <Action value="Home" />
        </pageAction1>
    </pageActionGroup>

Similarly one can add an entry inside PageAction.xml to run a script at device side to alter the DOM or to execute some Enterprise Browser APIs as below. 

A sample for zooming a particular page (which contains a text ‘Change Password’ ) to 200% is given as below:

    :::xml
    <pageAction2> 
        <pageIdentification value=”Change Password" />
        <Action value="runscript-zoomScript" />
    </pageAction2>

When user prefer to run a script, script should be added inside customscript.xml file. Enterprise Browser for SAP contains a CustomScript.xml placed under android_sap folder inside installed directory on the device.

Below is the entry inside `CustomScript.xml`: 

    :::xml
    <CustomScripts>          
              <zoomscript>
               EB.WebView.zoomPage= 2.0;
             </zoomscript>
    </CustomScripts>

To know more about PageAction based on page contents, please visit {eddy to add link to PageAction documentation}
-->

## Android Keyboard and DataWedge

The SAP package disables the Android keyboard by default, which also might prevent DataWedge from outputting acquired data as keystrokes. If DataWedge keystroke output is desired, [enable Enterprise Keyboard](/enterprise-keyboard/latest/guide/setup/#manualactivation) on the device instead.  

Enterprise Browser supports disabling default SIP provided by Android platforms. Disable it by setting the `Config.xml` file attribute as below: 

    :::xml
    <IME>
      <DisableAllIME value ="1"/>
    </IME>


#### Prevent all keyboard pop-ups: 

    :::xml
    <IME>
      <DisableAllIME value ="1"/>
    </IME>
    <SIP>
      <ResizeOnButtonbar value="1"/>        
    </SIP>

    :::xml
    <KeyboardConfiguration>
    <KeyboardVisibility value="onDemand"/>
      <ondemand>
          <onHardwarekeypress value="1"/>
          <HardwarekeyValue value="140"/>
      </ondemand>   
    </KeyboardConfiguration>

The first section of the `Config.xml` code above prevents the keyboard from automatically popping up when the focus moves to an input field and sets the page as "resizable" so it can adapt when a keyboard pops up. The second section causes the keyboard to appear when the F10 key is pressed (on certain devices). 

**More information**: 
* **[Config.xml Reference Guide](../configreference)**. 
* **[DataWedge Intents Guide](../dwintents)**

-----

## Ending SAP Session 

It's important to terminate the SAP session when quitting an Enterprise Browser app that accesses ITSmobile. EB 2.0 implements a `Config.xml` tag for this purpose. The SAP package by default is set to terminate an SAP session whenever Enterprise Browser is closed. 

#### Default setting on SAP package:
    :::xml
    <DeleteCookiesOnLaunch value="1"/>
<br>

#### Default setting on non-SAP package:
    :::xml
    <DeleteCookiesOnLaunch value="0"/>
<br>

-----

## Locking Screen Orientation

EB 2.0 (and newer) can lock an EB app to a specific screen orientation (portrait or landscape). The SAP package by default sets the parameter to "Auto," which locks the app in the "natural" orientation of device (landscape on CC5000, ET55, VC80 and WT6000; portrait on all others). **Screen "auto-rotation" is disabled when this parameter is used**. [More info](../configreference/#screenorientation). 

#### Set screen orientation to "natural" for device:
    :::xml
    <ScreenOrientation>
      <LockOrientation value= "Auto"/>
    </ScreenOrientation>

-----

## KeyDown Actions

EB 2.0 (and newer) allows hardware keys of certain Zebra devices to be remapped to perform predefined actions or execute JavaScript code blocks residing on the device or on a server. Hardware keys are remapped in the KeyActions section of the `KeyCodeMapping
.xml` file. See the [Keycode Mapping Guide](../keycapture) for more information. 

#### Press F8 key to quit the app:
    :::xml
    <KeyActions> 
        <KEYACTION  keyvalue="138" action="quit" />
    </KeyActions>
<br>

#### Execute JavaScript on KeyDown event
    :::xml
    <KeyActions> 
       <KEYACTION  keyvalue="139" action="runscript- zoomscript" />
    </KeyActions> 
<br>

-----

## DOM Namespace

Enterprise Browser can inject one or more of its [JavaScript APIs](../../api) into a running ITSmobile app, providing access to virtually any feature available to any other EB app. 

See the [EB Config Reference](../configreference/#jslibraries) for details. 

<!-- 
To disable EB namespace on your, user can simply disable below config.xml entry 

    :::xml
      <InjectEBLibraries>
          <JSLibraries value="0"/>
      </InjectEBLibraries>

Note: EB team recommends to enable the EB namespace in your DOM. Some of the SAP package functionality such as SAP keyboard may not function properly if this config tag is disabled.

Note: On regular package EB namespace will not be enabled by default. On regular package, default config.xml will have a value as below

    :::xml
      <InjectEBLibraries>
         <JSLibraries value="0"/>
      </InjectEBLibraries>
 -->
-----

## Hide SystemBar
Enterprise Browser allows the System bar (also known as the Navigation bar, which contains HOME, BACK and RECENT buttons) to be hidden, maximizing screen space for apps and helping to prevent the app user from accidentally exiting. By default, the System bar is is hidden in the SAP bundle and displayed in the standard package. The parameter is configured in the app's `Config.xml` file. See the [EB Config Reference](../configreference/#hidesystembar) for details. 

-----

## Speech Recognition

EB 2.0 (and newer) supports the injection of speech commands into legacy SAP applications using text-to-speech (TTS) technology, allowing apps to speak to app users. Apps also can accept speech inputs via automatic speech recognition (ASR) and execute certain commands on a page, all without modifying the underlying server application. By default, TTS and ASR are disabled in the SAP package. See the [Voice Guide](../voice) for details. 

-----

## SAP vs. Standard EB Package

The SAP and standard Enterprise Browser `.apk` files are identical; the differences between the two packages are contained only in their `Config.xml` files. For organizations with mixed deployments, **Zebra recommends deploying the SAP package to all devices and pushing the standard `Config.xml` file to the EB installation directory of devices that require it**. This is because the SAP installation delivers both SAP ***and*** standard versions of the `Config.xml` to the device. 

##### Install directory:
`/Android/data/com.symbol.EnterpriseBrowser/`

##### SAP config file location:
`/Android/data/com.symbol.EnterpriseBrowser/android_sap/Config.xml`

##### Standard config file location:
`/Android/data/com.symbol.EnterpriseBrowser/android_regular/Config.xml`
<br>

**To convert to the standard package** from SAP:
* Copy the `Config.xml` from `android_regular` to the EB install directory. 

**To convert to SAP** from the standard package: 
* Copy the `Config.xml` from `android_sap`  to the install directory.

**Note**: The `/Android/data/com.symbol.EnterpriseBrowser/` folder can be replaced with the `/%INSTALLDIR%/` substitution variable. 

<!-- 

FINISH THIS FRIDAY

## `TO BE REVISED`  
 -->

<!-- 

### SAP Package Scripts

The SAP package contains pre-defined scripts that use DOM injection on each pageload event of WebView. 

All dominjected files are mentioned inside mysaptags.txt file present inside android_sap folder. If user needs to inject custom script files then user may need to modify the mysaptags.txt file.

Default mysaptags.txt has the below javascript files those are intended to run SAP package smoothly. User can modify the script based on their need. Thus, Enterprise Browser SAP package becomes more handy for the users.

    :::xml
    <script type='text/javascript' src='file://%INSTALLDIR%/android_sap/sapkeyboard.js' pages='*' /> 
    <script type='text/javascript' src='file://%INSTALLDIR%/android_sap/sapbgsound.js' pages='*' /> 
    <script type='text/javascript' src='file://%INSTALLDIR%/android_sap/sapcustomview.js' pages='*' />
    <script type='text/javascript' src='file://%INSTALLDIR%/android_sap/sapconfigreader.js' pages='*' />

User can see the mentioned javascript files under `android_sap` folder of installed directory. 
`Sapconfigreader.js`

`Sapconfigreader.js` file is the entry point to all other javascript files. It has the logic to read the Enterprise Browser Config.xml. It reads the information related to keyboard and forcetofitscreen then invokes the associated functions defined in `sapkeyboard.js` and `sapcustomview.js` files respectively.

Sapconfigreader.js makes a call to Rho.Configreadwrite.readFromOriginalConfig and stores the required config.xml attributes values on to session storage over callback method.

Once the session store is initialized further dominjection will read config.xml value from the session store.
Once local attributes are initialized, it then makes a call to `performPostInitializationSapTask`. The function called here are defined in `sapkeyboard.js` and `sapcustomview.js` files respectively.

`initSapKeyBoard` function defined inside `sapkeyboard.js` file will be invoked for devices those doesn’t have a physical keyboard on the device. (eg:TC51, TC70x,WT6000, TC8000 etc). 

For devices with physical keyboard MC92, MC33, MC67, MC32, TC20K, we have added a check in the `performPostInitializationSapTask` function to prevent the calls to `initSapKeyBoard`.

Calling `initSapKeyBoard` will initialize the SAP button bar keyboard layouts. 

Button Bar layouts are not required for if physical keyboard is present.

Calling ForceFitContentsToScreen will force webview to place any elements present horizontally outside the visible region to vertically. This will ensure no elements are present beyond the screen width.

`Sapkeyboard.js`

This has the logic to show/hide keyboard based on the config.xml attributes values. Showkeyboard always set numeric keyboard as the preferred layout whenever a keyboard is poped-up.

It uses Enterprise Browser KeyCapture module to capture a keyevent to show/hide the keyboard if user had configured `Config.xml` file to show/hide keyboard ondemand when `onhardwarekeypress` is enabled.

A function `ddFocusEventListner` which is present inside `sapkeyboard.js` can be tweaked by user to filter the input elements those should be considered for handling focus/blur event. These event handler makes a call to show/hide keyboard functions.

User can modify the logic based on their need.

`Sapbgsound.js`

This javascript file search for bgsound tag and it replaces with the audio tag to play the SAP notification sounds. Bgsound tag which is IE specific tag is not supported by Android webview by default. This javascript file help in playing the sound. User can further modify this script to play any custom local sound files without modifying server application using Enterprise Browser utility APIs.

`Sapcustomview.js`

This contains the logic to force fit the content to the screen width. It simply finds all the div elements and remove the styles from it. User can further modify the script to have better user experience by modifying element styles.

### Summary

Enterprise Browser for SAP gives a better user experience for SAP customers. It avoids the need for modifying server application for lacking physical keyboard or any concern related to page fitting on the device.
Install the `EnterpriseBrowser_SAP_signed_v2.0.1.0.apk` on your device, pull the `Config.xml` file from the installed directory to change the startpage to the application URL.

User can also enable &lt;SapForceFitToScreen value="1"/&gt; to force fit the HTML elements to screen width of the device there by disabling a need for scrolling horizontally.

If user decided to receive scanned data from datawedge via keystroke, user need to ensure that Enterprise keyboard is installed (if not present as part of bsp) and enabled on the device. 

To quit the application user can press F8 button as configured (modifiable) in keycodemapping.xml. User can modify the value based on their need.

Similarly, pressing F10 can toggle SAP keyboard visibility. 

### Remarks

To use sapkeyboard smoothly, we have disabled the presence of regular sip by setting &lt;DisableAllIME value ="1"/&gt;. However on Kit Kat devices, DisableAllIME feature is not supported. 
Hence on KK devices, user may see both regular sip and sapkeyboard popping up on setting focus to an input field. This may result in `sapkeyboard` not functioning properly. To avoid this problem, Enterprise browser team recommends users to install Enterprise Keyboard (if not present as part of BSP) and to set Enterprise keyboard as the default keyboard on the device.

User can install Enterprise Keyboard from
http://techdocs.zebra.com/enterprise-keyboard/1-8/download/
-->
-----

#### See Also

* [Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](../keycapture/#mappingproprietaryfunctionkeycodes)
* [Migration Guides](../migration)
* [DOM Injection guide](../dom)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)