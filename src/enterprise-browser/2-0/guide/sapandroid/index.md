---
title: SAP ITSmobile for Android 
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---

## `TO BE REVISED` 

## Overview
This guide provides instructions for modifying an EB app for Android to work with ITSmobile, the SAP middleware system built around its Internet Transaction Server (ITS). ITSmobile provides browser-based access to SAP's ERP, SRM and other enterprise apps made with the company's proprietary dynpro language. Enterprise Browser apps can be built or adapted to work with ITSmobile, and thereby to access SAP back-end enterprise apps. Doing so requires familiarity with editing the `Config.xml` and the HTML file(s) of EB apps. 

#### EB 2.0 for SAP

Enterprise Browser 2.0 (and higher) includes a package (`EnterpriseBrowser_SAP_signed_v2.0.1.0.apk`) with 
ready-to-use configuration files for easily running SAP ITS mobile app(s) on Zebra Android devices. The package can be converted to the standard EB edition using steps in the [conversion section](#converttostancaedeb) below. 

When migrating SAP apps from Windows Mobile/CE to Android, the most common problems relate to page-fitting and the absence of hardware function keys. To address these issues, organizations often maintain separate applications for different device-screen sized and build HTML-based buttons to replace the missing hardware keys. 

Enterprise Browser 2.0 helps address these and other migration issues. 

-----

## SAP Package Features

### Sound support

SAP ITSmobile applications can be configured to play a sound to indicate the success or failure of a transaction, and the EB SAP package can be configured also to play these sounds. If different sounds are desired, [DOM injection](../dominjectionandroid) can be used to play sounds stored on the device.

### SAP Keyboards

EB 2.0 includes SAP-specific keyboard layouts that leverage EB's custom [ButtonBar features](../customize). This helps to compensate for hardware keys missing from Android devices. 

**The SAPkeyboard by default displays a numeric layout** whenever the focus of an app is on an input field. The default layout is easily changed by editing the `showKeyboard`/`hideKeyboard` JavaScript function in the `sapkeyboard.js`.

**A function key layout** allows SAP users to press function keys from the Software Input Panel (SIP) on demand, eliminating the need to modify the SAP application to include HTML buttons to emulate function keys. Each key on an EB keyboard can easily be configured to issue a keystroke or to run a script. For more information, see the [ButtonBar Parameter guide](../customize/button). 


The `/android_sap/Sapkeyboard.js` file reads the SAP Keyboard config params from the config.xml and register for a onfocus event and a keydown event to control the keyboard popup behavior.

One should ensure that APIs below are called after showing a keyboard or after hiding a keyboard.

    metaReceiver.resizeWebviewOnButtonbarShown(); 
    //must call to do webview redraw on keyboard popup
 
 
    metaReceiver.restoreWebviewOnButtonbarHidden(); 
    //must call to do webview redraw on keyboard hide


### Configuration Parameters

Enterprise Browser for SAP features can be configured to behave differently based on the newly introduced configuration parameters


### SAP Keyboard Parameters

It is Enterprise Browser users responsibility to configure some of the Config.xml parameters to decide on
When to show the keyboard . 

Do user wants to show keyboard always on every pages. If yes set

    <KeyboardVisibility value="alwaysOn"/>

Do user wants to show keyboard on demand when input field is focused. If yes set

    :::xml
    <KeyboardConfiguration>
        <KeyboardVisibility value="onDemand"/>
          <ondemand>
            <onFocus value="1"/>
          </ondemand>  
    </KeyboardConfiguration> 

Do user wants to toggle keyboard on demand when F10 key is pressed

    :::xml
    <KeyboardConfiguration>
        <KeyboardVisibility value="onDemand"/>
          <ondemand>
            <onHardwarekeypress value="1"/>
            <HardwarekeyValue value="140"/>
          </ondemand>   
    </KeyboardConfiguration>

Do user wants to show keyboard when F10 key pressed or when input field is focused

    :::xml
    <KeyboardConfiguration>
    <KeyboardVisibility value="onDemand"/>
          <ondemand>
              <onHardwarekeypress value="1"/>
               <HardwarekeyValue value="140"/>
                        <onFocus value="1"/>
                     </ondemand>    
    </KeyboardConfiguration>

Whether page should be resizable on keyboard popup to avoid visibility concerns; if yes user can set

    :::xml
    <SIP>
      <ResizeOnButtonbar value="1"/>        
    </SIP>

Whether user wants to set page resizable and to reserve a minimum safe height for the keyboard can cover the screen. If yes set probable value for `ButtonBarMaxHeight` as below:

    :::xml
    <SIP>
      <ResizeOnButtonbar value="1"/>
      <ButtonBarMaxHeight value="480"/> 
    </SIP>


### Page Fitting

Apart from regular Dom Injection technique that was provided with earlier version of Enterprise Browser for page customization at client side, Enterprise Browser for SAP also provides some more additional features for SAP page fittings

#### Autofitting a page using viewport

SAP ITS UI elements are designed using pixels hence on a high resolution device, the page elements looks smaller. It has been observed that most of the standard SAP pages where shrunk when loaded on a standard/Enterprise Browser and was rendered on a corner of the browser. 

Enterprise Browser 2.0 has now introduced following configuration to control the viewport of the page.

    :::xml
    <ViewPort>
      <UseWideViewPort value="1"/>
      <ViewPortWidth value="device-width"/>
      <ViewPortInitialScale value="1.0"/>
    </ViewPort>

The ViewPortWidth =device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
The ViewPortInitialScale =1.0 part sets the initial zoom level when the page is first loaded by the browser.

Note: Such changes will have impact on all pages

Forcing Page Elements to Fit To the Screen Width
Sap has some pages those are wider and goes beyond the viewport (visible area) area of the device. Having few input elements beyond horizontal visible region may result in user submitting form without filling data. Also it is not easy for the user to make out from a page that it has got some elements beyond the screen and it needs horizontal scrolling that is annoying to user.

To avoid this problem. Enterprise Browser SAP package has introduced a new configuration attribute named SapForceFitToScreen that rearrange the horizontally aligned HTML elements vertically. 

When enabled, the page will not have any elements beyond the horizontal visible region. This enables the feature to force fit the content to the screen width. 

    :::xml
    <SapForceFitToScreen value="1"/>

Note: This attribute is only applicable for SAP application. Using this feature may effect some of the CSS styling hence this feature is not enabled by default on the package. 

#### Page UI Elements (customization)

Enterprise Browser 2.0 provides few additional configuration parameters that lets user to control the size of UI elements on SAP pages. 

If user want to increase height of buttons in SAP pages, he can control it using the config parameter below: 

    :::xml
    <SapCustomization> 
        <SapButtonHeight value="30px"/>
    </SapCustomization>

If user wants to increase or reduce the font size for SAP page buttons, he can control it using the config parameter below:

    :::xml
    <SapCustomization>    
      <SapButtonFontSize value="10px"/>      
    </SapCustomization>

If user wants to increase or reduce read-only text field, user can control it by modifying config parameter below:

    :::xml
    <SapCustomization>     
      <MobileEditDisabledWidth value="20px"/> 
    </SapCustomization>

**Note**: Such changes impact on all pages.

-----

### Modify Page at Client Side

Modify Page at Client Side by running script

Enterprise Browser 2.0 support running a client-side script designed by user to customize the page. Refer SAP Page Action

#### Page Actions

An enterprise user may require to run some scripts or associate some Enterprise Browser actions such as (HOME, quit) when a SAP page loaded contains a text that is matching with user provided input.

For example, SAP user wants to redirect to HOME page when an error 400 is occurred. User can mention this information under a pageaction.xml and can associate it with Enterprise Browser Config.xml as below
Entry in config.xml; this entry already exist in Enterprise Browser SAP package Config.xml

    :::xml
    <FileLocations>
      <pageactionxmlfile  value="file://%INSTALLDIR%/android_sap/PageAction.xml"/>
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

Disabling AOSP Keyboard

Enterprise Browser supports disabling default SIP provided by Android platforms. Disable it by setting the `Config.xml` file attribute as below: 

    :::xml
    <IME>
      <DisableAllIME value ="1"/>
    </IME>

The Enterprise Browser SAP package disables the AOSP keyboard by default. Disabling the AOSP keyboard keeps DataWedge from working via keystrokes. To overcome this issue, Enterprise Browser recommends to enable Enterprise Keyboard as well on the device. Having Enterprise Keyboard enabled on the device allows DataWedge to continue working via keystrokes.

Note: if user doesn’t want to use any keyboard, then recommended way is to use below config.xml entries

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

Using above config.xml attributes ensures no keyboard popup on input field focus. It will popup if user presses a F10 key. (key value can be reconfigured as per user need)

"EB for SAP"

> deploy SAP apk to all devices, and swap `Config.xml` with that in android_folder 

Note: On regular package default sip will be always enabled and it config.xml will have a value as below
<DisableAllIME value ="0"/>

### Using DataWedge

There is a detailed documentation available at {eddy to add link} for configuring DataWedge for Enterprise Browser.

To accept DataWedge scanned data on Enterprise Browser, user needs to enable below tag in Config.xml

    :::xml
    <usedwforscanning  value="1"/>

Above parameter is enabled by default on SAP package. 
Note: On regular package datawedge will not be enabled by default on config.xml and it will have a value as below

    :::xml
    <usedwforscanning  value="0"/>

### Ending SAP Session 

It had been a common ask from Enterprise Browser customers that to terminate a session when Enterprise Browser is closed.

Below Config.xml attribute is set by default in an SAP package to terminate an SAP-session whenever Enterprise Browser is closed and relaunched. Each launch will take user to a login screen.

    :::xml
    <DeleteCookiesOnLaunch value="1"/>

Note: On regular package cookies will not be by default. Default Config.xml on regular package will have a value as below

    :::xml
    <DeleteCookiesOnLaunch value="0"/>


### Lock Orientation

Enterprise Browser 2.0 supports a new config parameter to lock the Enterprise Browser application on a preconfigured orientation.

By default Enterprise Browser SAP package sets this parameter to Auto as shown below

    :::xml
    <ScreenOrientation>
      <LockOrientation value= "Auto"/>
    </ScreenOrientation>

Setting value to auto will lock Enterprise Browser to Landscape on VC80, CC5000, ET5X and WT40 and portrait on all other device. When locked, autorotation will be disabled.

To know more about this configuration parameter, please visit {eddy to add link to lockorientation confi.xml attribute}

### Key Down Actions

Enterprise Browser 2.0 allows users to associate an action such as HOME, QUIT etc or running a script at client-side when hardware keys are pressed.
For example, on a MC33 device F8 is pressed to quit the application. 
Enterprise Browser SAP package includes a keycodemapping.xml under android_sap folder by default which has an entry to quit Enterprise Browser when F8 is pressed

    :::xml
    <KeyActions> 
        // press F8 to quit Application
        <KEYACTION  keyvalue="138" action="quit" />
    </KeyActions>

    // User also can invoke a javascript on keydown events as below
    <KeyActions> 
       <KEYACTION  keyvalue="139" action="runscript- zoomscript" />
    </KeyActions> 

When user prefer to run a script, script should be added inside customscript.xml file. Enterprise Browser for SAP contains a CustomScript.xml placed under android_sap folder inside installed directory on the device.
Below is the entry inside CustomScript.xml

    :::xml
    <CustomScripts>          
      <zoomscript>
          EB.WebView.zoomPage= 2.0;
      </zoomscript>
    </CustomScripts>

Note: user can also press F8 from SAP keyboard to quit the application


### EB Namespace On DOM

Enterprise Browser provides feature-rich javascript APIs for enterprise needs. To know more about feature rich Enterprise Browser APIs, please visit {eddy to add link to EP apis}
These feature rich APIs are by default available on your DOM when Enterprise Browser for SAP package is installed.
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

Hiding SystemBar
Sap package by default hides the system bar (navigation bar) when launched. This will help user to get more screen space to render the page. Also it will block end-user to minimize or going back from enterprise browser. This feature will give better result when used with Enterprise Home Screen.

Sap package allows user to quit application when F8 is pressed. User can press F10 key to popup the SAP keyboard on a default package to press F8 button if hardware key is not present on the device.

User can enable the system bar on SAP package by setting the below config.xml entry

    :::xml
    <HideSystemBar value ="0"/>

Note: On regular package system bar will be enabled by default. On regular package, default config.xml will have a value as below
<HideSystemBar value ="0"/>

Text to Speech and Android Speech Recognition

Enterprise Browser 2.0 support injecting speech commands to Legacy SAP applications. This will allow application to speak to customer without modifying their server application.
Similarly application can accept speech inputs to execute some commands on the page without modifying the server application.

By default TTS and ASR are disabled on SAP package. User can enable and inject speech commands by following below documentation.

{eddy to add link to TTS and ASR}


### Converting SAP Package

If customer would like to perform a mixed deployment where he needs to use SAP package on some devices and regular packages on some devices, then we recommend to deploy SAP package on all devices and just replace the Config.xml in the installed directory. 

Note: Default Config.xml inside installed directory of a SAP package is intended for SAP ITS mobile application. However the package contains two folders named android_regular and android_SAP respectively and each contain a associated Config.xml.

To convert SAP package to regular, copy Config.xml from android_regular folder to installed directory. Similarly, to revert back, copy Config.xml from android_sap folder to installed directory.

### SAP Package Scripts

Sap package bundles contains predefined scripts those are ran whenever user is navigated to a page.
These scripts are dominjected on each pageload event of webview. Let us see what are the different scripts it contains.

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

-----

#### See Also

* [Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](/keycapture/#mappingproprietaryfunctionkeycodes)
* [Migration Guides](../migration)
* [DOM Injection guide](../dom)
* [SAP ITSmobile wiki page](https://wiki.scn.sap.com/wiki/display/HOME/ITSmobile)
