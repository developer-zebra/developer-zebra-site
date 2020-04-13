---
title: RhoElements Configuration Settings
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

Configuration of RhoElements is managed through an XML file.  Not every setting has a default so if the configuration file cannot be found, RhoElements will <b>not</b> start; an example configuration file is provided as part of the installation and will contain sensible defaults, this page explains the meanings of each of the settings and their possible values.

##Configuration File Location
The location of the configuration file loaded by RhoElements is dependent on a number of factors:

<ul>
	<li/>When running on the Enterprise Tablet the configuration file is read from /Android/data/com.motorolasolutions.rhoelements/Config.xml.
	<li/>When running on all other devices RhoElements will attempt to launch the configuration file 'Config.xml' located in the folder 'Config' off the installation root.
	<li/>You can change which configuration file is loaded using the /C: configuration option
</ul>

For persistent installations on cold boot the Config.xml file is copied from \Application\RhoElements\Config\Config.xml to \Program Files\RhoElements\Config\Config.xml; bear this in mind if you want your configuration to persist across cold boot and you can also modify this behavior by changing \Application\RhoElements.cpy.

##Configuration XML File Format
The following is an example of a typical configuration file, many of the attributes will be self explanatory but are explained in detail below.</p>
	<Configuration>
	  <DebugButtons>
		<DebugButtonsEnabled VALUE="0" />
	  </DebugButtons>
	  <Logger>
		<LogProtocol  VALUE="FILE"/>
		<LogPort      VALUE="80"/>
		<LogURI       VALUE="file://\Program Files\RhoElements\Log.txt"/>
		<LogError     VALUE="1"/>
		<LogWarning   VALUE="1"/>
		<LogInfo      VALUE="1"/>
		<LogUser      VALUE="1"/>
		<LogMemory    VALUE="1"/>
		<LogMemPeriod VALUE="5000"/>
		<LogMaxSize   VALUE="10"/>
	  </Logger>
	  <FileLocations>
		<RegEXFile  VALUE="\Program Files\RhoElements\Config\RegEx.xml"/>
		<PluginFile VALUE="\Program Files\RhoElements\Config\Plugin.xml"/>
	  </FileLocations>
	  <Screen>
		<FullScreen VALUE="1"/>
	  </Screen>
	  <WebServer>
		<Enabled   VALUE="1"/>
		<Port      VALUE="8080"/>
		<WebFolder VALUE="\www"/>
		<Public    VALUE="0"/>
	  </WebServer>
	  <DeviceKeys>
		<FunctionKeysCapturable   VALUE="0"/>
		<EnableFunctionKey_F1     VALUE="0"/>
		<EnableFunctionKey_F2     VALUE="0"/>
		<EnableFunctionKey_F3     VALUE="0"/>
		<EnableFunctionKey_F4     VALUE="0"/>
		<EnableFunctionKey_F5     VALUE="0"/>
		<EnableFunctionKey_F6     VALUE="0"/>
		<EnableFunctionKey_F7     VALUE="0"/>
		<EnableFunctionKey_F8     VALUE="0"/>
		<EnableFunctionKey_F9     VALUE="0"/>
		<EnableFunctionKey_F10    VALUE="0"/>
		<EnableFunctionKey_F11    VALUE="0"/>
		<EnableFunctionKey_F12    VALUE="0"/>
		<EnableApplicationKey_A1  VALUE="0"/>	
		<EnableApplicationKey_A2  VALUE="0"/>	
		<EnableApplicationKey_A3  VALUE="0"/>	
		<EnableApplicationKey_A4  VALUE="0"/>	
		<EnableApplicationKey_A5  VALUE="0"/>	
		<EnableApplicationKey_A6  VALUE="0"/>	
		<EnableApplicationKey_A7  VALUE="0"/>	
		<EnableApplicationKey_A8  VALUE="0"/>	
	  </DeviceKeys>
	  <Navigation>
		<NavTimeout VALUE="45000"/>
	  </Navigation>
	  <ScreenOrientation>
		<AutoRotate VALUE="0"/>
	  </ScreenOrientation>
	  <Geolocation>
		<GeolocationEnabled VALUE="0"/>
	  </Geolocation>
	  <UserData>
	  </UserData>  
	  <Applications>
		<Application>
		  <General>
			<Name                  VALUE="Menu"/>
			<StartPage             VALUE="file://\Program Files\RhoElements\HTML\Menu.htm" name="Menu"/>
			<UseRegularExpressions VALUE="0"/>
		</General>
		  <HTTP_Proxy  VALUE="http://myproxy.com:1050"/> 
		  <WebDB>
			<WebStorageDBPath VALUE="file://\Program Files\RhoElements"/>
			<WebSQLDBQuota    VALUE="5000000"/>
			<WebSQLDBPath     VALUE="file://\Program Files\RhoElements"/>
		  </WebDB>
		  <ApplicationCache>
			<ApplicationCachePath   VALUE="file://\Program Files\RhoElements"/>
			<ApplicationCacheQuota  VALUE="5000000"/>
		  </ApplicationCache>
		  <NPAPI>
			<NPAPIDirectory         VALUE="file://\Program Files\RhoElements\NPAPI\"/>
			<Preloads>
			  <PreloadLegacyGeneric VALUE="1"/>
			  <PreloadLegacyODAX    VALUE="1"/>
			  <PreloadLegacyNoSIP   VALUE="1"/>
			  <PreloadLegacyAirBeam VALUE="1"/>
			  <PreloadLegacyAPD     VALUE="1"/>
			  <PreloadJSObjects     VALUE="1"/>
			</Preloads>
		  </NPAPI>	  
		  <Preloads>
			<Preload VALUE="Scanner"/>
			<Preload VALUE="Hourglass"/>
		  </Preloads>
		  <Scrolling>
			<ScrollTechnique VALUE="FingerScroll"/>
		  </Scrolling>
		  <Authentication>
			<Username VALUE="user"/>
			<Password VALUE="pass"/>
		  </Authentication>
		  <HTMLStyles>
			<FitToScreenEnabled    VALUE="1" />
			<FontFamily            VALUE="Tahoma" />
			<FontDirectory         VALUE="file://\Windows" />
		  </HTMLStyles>
		  <SIP>
			<ResizeOnSIP  VALUE="0"/>
			<EnableSIP    VALUE="1"/>
		  </SIP>
		  <System>
			<LowBatteryScan	VALUE="0"/>
		  </System>  
		  <Scanner>
			<DisableScannerDuringNavigation	VALUE="1"/>
		  </Scanner>  
		  <Sound>
			<DecodeVolume           VALUE="5"/>
			<DecodeFrequency        VALUE="0xBB8"/>
			<InvalidDecodeFrequency VALUE="0x9C4"/>
			<DecodeDuration         VALUE="250"/>
			<ScanDecodeWav          VALUE=""/>
			<ScanInvalidWav         VALUE=""/>
			<ImagerCaptureWav       VALUE=""/>
		  </Sound>
		  <GUI>
			<SignalRefresh      VALUE="5000"/>
			<BatteryRefresh     VALUE="5000"/>
			<HourglassEnabled   VALUE="1" />
			<HourglassLeft      VALUE="" />
			<HourglassTop       VALUE="" />
		  </GUI>
		  <Navigation>
			<BadLinkURI               VALUE=""/>
			<UserAgent                VALUE="Mozilla/5.0 (%p) AppleWebKit/%w (KHTML, like Gecko) MotorolaWebKit/%e Mobile Safari/%w" />
			<ViewportEnabled          VALUE="0"/>
			<ViewportWidth            VALUE="640"/>
    	<CaFile                   VALUE="%INSTALLDIR%\server.pem"/>
    	<CaPath                   VALUE=""/>
    	<VerifyPeerCertificate    VALUE="1"/>
    	<NetworkCookieDatabase    VALUE="file://\Program Files\RhoElements\cookies.db" />
    	<Cache                    VALUE="5MB" />
			</Navigation>
		  <DeviceKeys>
			<EnableCtrlKey_C          VALUE="0"/>
			<EnableCtrlKey_V          VALUE="0"/>
			<EnableBacklightSlider    VALUE="0"/>
			<EnableVolumeSlider       VALUE="0"/>
		  </DeviceKeys>
		  <DefaultMetaTags>
			<MetaTag VALUE="SignatureCapture~left:30;top:130;height:100;bgcolor:#663300;width:200;border:visible;visibility:visible;" />
			<MetaTag VALUE="Signal~left:10;top:200;color:#663300;"/>
		  </DefaultMetaTags>
		</Application>
	  </Applications>
	</Configuration>

##Description of Settings
<table class="table table-striped table-bordered table-condensed">
<tr>
<th >Group\\XML Tag</th>
<th >Configuration Identifier<a href="#_configIndentifiers" style="color: white;">*</a></th>
<th >Description</th>
<th  width="12%">Possible Values</th>
</tr>
<tr>
<td >DebugButtons\\<BR>DebugButtonsEnabled</td>
<td >DEBUGBUTTONSENABLED</td>
<td >When enabled automatically shows a set of controls useful for development and debugging purposes.  Among others the <a href="/rhoelements/backbutton">back button</a>, <a href="/rhoelements/quitbutton">quit button</a> and <a href="/rhoelements/addressbar">address bar</a> are shown.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Logger\\LogProtocol</td>
<td >LOGPROTOCOL</td>
<td >Sets the protocol over which the logging data will be sent</td>
<td >"File" or "HTTP"</td>
</tr>
<tr>
<td class="clsEvenRow">Logger\\LogPort</td>
<td class="clsEvenRow">LOGPORT</td>
<td class="clsEvenRow">The port over which the logging data will be sent (ignored for File protocol)</td>
<td class="clsEvenRow">Any valid HTTP port</td>
</tr>
<tr>
<td >Logger\\LogURI</td>
<td >LOGURI</td>
<td >The URL or File name & path to which logged data should be sent</td>
<td >Any valid URL or fully qualified file name</td>
</tr>
<tr>
<td class="clsEvenRow">Logger\\LogError</td>
<td class="clsEvenRow">LOGERROR</td>
<td class="clsEvenRow">Enables or Disables the logging of ERROR messages, generated by RhoElements</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Logger\\LogWarning</td>
<td >LOGWARNING</td>
<td >Enables or Disables the logging of WARNING messages, generated by RhoElements</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">Logger\\<BR>LogInfo</td>
<td class="clsEvenRow">LOGINFO</td>
<td class="clsEvenRow">Enables or Disables the logging of INFORMATION messages, generated by RhoElements</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Logger\\LogUser</td>
<td >LOGUSER</td>
<td >Enables or Disables the logging of messages from the user application.  Data can be logged from JavaScript using the <a href="/rhoelements/generic">generic.log</a> function and will appear in the same file as RhoElements logged data.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">Logger\\LogMemory</td>
<td class="clsEvenRow">LOGMEMORY</td>
<td class="clsEvenRow">Enables or Disables the logging of memory usage in the system. Not applicable to the Enterprise Tablet.</td>  
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Logger\\LogMemPeriod</td>
<td >LOGMEMPERIOD</td>
<td >Specifies the time interval at which memory logs will be generated periodically. Not applicable to the Enterprise Tablet</td>
<td >Time in milliseconds</td>
</tr>
<tr>
<td class="clsEvenRow">Logger\\LogMaxSize</td>
<td class="clsEvenRow">LOGMAXSIZE</td>
<td class="clsEvenRow">The maximum size the log file should be allowed to reach, once the maximum size is reached no more logs will be saved.</td>
<td class="clsEvenRow">File size in kilobytes</td>
</tr>
<tr>
<td >FileLocations\\RegExFile</td>
<td >REGEXFILE</td>
<td >In order to enable backward compatibility with pages written in EMML 1.0 regular expressions are used to convert to EMML1.1 meta tags.  This setting defines the location of the XML file which contains the conversions to be used.  This setting is only applicable to Windows</td>
<td >Fully qualified path to file defining the regular expressions.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td class="clsEvenRow">FileLocations\\PluginFile</td>
<td class="clsEvenRow">PLUGINFILE</td>
<td class="clsEvenRow">Not applicable to the Enterprise Tablet:<br>RhoElements has a plugin based architecture so functionality can be tailored to the individual application, lessening the memory footprint on the device.  It is necessary for RhoElements to have a mapping between modules, plugins and the physical location of the Plugin DLL on the device; this mapping is stored in the Plug-in file and the location of that file is defined by this setting.</td>
<td class="clsEvenRow">Fully qualified path to file defining the plugins.<a href="#_caseSensitivity">&dagger;</a></td>
</tr> 
<tr>
<td >Screen\\FullScreen</td>
<td >FULLSCREEN</td>
<td >Sets RhoElements to fullscreen mode, locking out the OS to the user unless specifically minimised using the <a href="/rhoelements/Application">Application</a> tag.  Some Windows Mobile devices feature a customized Zebra user interface; in this case access is provided to the status bar at the top of the screen.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">WebServer\\Enabled</td>
<td class="clsEvenRow">WEBSENABLED</td>
<td class="clsEvenRow">Enables or Disables an internal web server to run locally on the device.  If running multiple applications with internal web servers consideration should be made over whether a single server should be used or multiple servers running on different ports.</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >WebServer\\Port</td>
<td >WEBSPORT</td>
<td >By default should be left at 8080, This specifies the IP port the Web Server is running on.</td>
<td >8080</td>
</tr>
<tr>
<td class="clsEvenRow">WebServer\\WebFolder</td>
<td class="clsEvenRow">WEBSFOLDER</td>
<td class="clsEvenRow">Specifies a folder on the device where the web application is stored, Index.html is the default page if no other page is requested</td>
<td class="clsEvenRow">Fully qualified path to folder containing web application.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >WebServer\\Public</td>
<td >WEBSPUBLIC</td>
<td >Enables or Disables access to the local WebServer from an external device, it is recommended that the setting is only used for debugging purposes.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">DeviceKeys\\<BR>FunctionKeysCapturable</td>
<td class="clsEvenRow">FUNCTIONKEYSCAPTURABLE</td>
<td class="clsEvenRow">This parameter is specific to Windows Mobile and Windows CE:<P>When disabled (default) this parameter will allow enabled Function keys to have their default Windows system behavior (e.g. F6/F7 controls the volume on some devices whilst F3/F4 represent the Red / Green phone keys).  When enabled, function keys will be capturable by the <a href="/rhoelements/keycapture">Key Capture module</a>.<P>The interaction between FunctionKeysCapturable and EnableFunctionKey_X is shown at <a href="#_fnbehavior">the end of this document</a>.  This setting is not specific to the current application and will be applied globally on the device.</td>
<td class="clsEvenRow">0 - F keys not capturable<BR>1 - F keys capturable</td>
</tr> 
<tr>
<td >DeviceKeys\\<BR>EnableFunctionKey_X</td>
<td >ENABLEFUNCTIONKEY_FX</td>
<td >By default all function keys are disabled (e.g. F1, F2) but this setting is used to specify which function keys should be enabled.  For each key you wish to enable define a EnableFunctionKey_X tag but replace 'X' with the key being enabled, so for example to enable F1 specify EnableFunctionKey_F1.  The maximum function key you can enable is F24.  In order to use this configuration setting you must preload the KeyCapture module<p>On the Enterprise tablet, this tag can be used to enable the 'P' keys. For compatibility with other devices the 'P' keys are referred to as 'F' keys in the config file. Therefore in order to enable P2 key on the enterprise tablet, the tag EnableFunctionKey_F2 should be set to 1.  For Windows Mobile / CE this setting is not specific to the current application and will be applied globally on the device, <b>only being unset when a device warm boot is performed.</b></p>
<p>On MC40, F1 is mapped to the Volume Down button, F2 to the Volume UP button and F3 to the Search button.</p>
<P>The interaction between FunctionKeysCapturable and EnableFunctionKey_X is shown at <a href="#_fnbehavior">the end of this document</a>  
</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr> 
<tr>
<td class="clsEvenRow">DeviceKeys\\<BR>EnableApplicationKey_X</td>
<td class="clsEvenRow">Not Configurable</td>
<td class="clsEvenRow">This parameter is specific to Windows Mobile and Windows CE:<br>Some devices have keys to access specific applications on the device, e.g. Calendar, Outlook etc, all of which are disabled by default.  This setting is used to specify which application keys should be enabled, numbered A1 to A16.  For each key you wish to enable define a EnableApplicationKey_X tag but replace 'X' with the key being enabled, e.g. EnableApplicationKey_A1.  Note that the mapping of keys to applications is device specific so A1 may have two functions on two different devices.  In order to use this configuration setting you must preload the KeyCapture module<P>This setting is not specific to the current application and will be applied globally on the device, <b>Once set, this will persist across multiple RhoElements executions and can only be unset by performing a device warm boot.</b></td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Navigation\\NavTimeout</td>
<td >NAVTIMEOUT</td>
<td >Number of milliseconds before the browser times out and navigates to the page specified in the badlink setting.  If it is determined that the destination is unreachable regardless of wait time, the badlink may be loaded before NAVTIMEOUT.  This is the time taken to establish communication with the server, not the time taken to fully load the page.<br><br>Note that the navigation timeout will not be invoked when navigating to the start page, best practise is to store your first page locally to avoid connectivity issues at start up, you can then redirect to an online page if desired.</td></td></td>
<td >Timeout in Milliseconds, maximum value is 45000</td>
</tr>
<tr>
<td class="clsEvenRow">ScreenOrientation\\AutoRotate</td>
<td class="clsEvenRow">AUTOROTATE</td>
<td class="clsEvenRow">When disabled the orientation of the screen will not change as the device is rotated and vice versa.  This is a screen rotation lock.</td></td></td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >UserData</td>
<td >N/A</td>
<td >Used to persist data when using Read/WriteUserSetting.</td></td></td>
<td >Any valid user setting.</td>
</tr>
<tr>
<td class="clsEvenRow">General\\Name</td>
<td class="clsEvenRow">Not Configurable</td>
<td class="clsEvenRow">The name of the application</td>
<td class="clsEvenRow">ASCII text</td>
</tr>
<tr>
<td >General\\StartPage</td>
<td >STARTPAGE</td>
<td >Defines the start page of the RhoElements application, the first page to be displayed when RhoElements is launched.  This should be a local file to avoid connectivity issues on start up.</td>
<td >Fully qualified path to start page.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >General\\UseRegularExpressions</td>
<td >USEREGULAREXPRESSIONS</td>
<td >In order to be backwardly compatible with PocketBrowser syntax for controlling device capabilities RhoElements uses a Regular Expression engine to apply a series of transformations to each meta tag or JavaScript call being processed, as defined in RegEx.xml.  If you are developing applications without the need to be backwardly compatible with PocketBrowser syntax you can disable regular expressions, this can give an improvment of application performance, depending on how the application is structured.  This setting is only applicable to RhoMobile Suite version 2.2 and above on Windows devices.</td>
<td >0 - Do Not Use Regular Expressions<br>1 - Use Regular Expressions</a></td>
</tr>
<tr>
<td class="clsEvenRow">HTTP_Proxy</td>
<td class="clsEvenRow">HTTPPROXY</td>
<td class="clsEvenRow">Specifies the HTTP Proxy settings to use in the format URL:port.  Note that this setting only applies to the Zebra WebKit engine, proxy settings for the Internet Explorer engine are picked up from the Windows connection manager.  Leave this field blank to not use a proxy.</td>
<td class="clsEvenRow">URL:PortNo</td>
</tr>
<tr>
<td >HTTPS_Proxy</td>
<td >N/A</td>
<td >Specifies the HTTPS Proxy settings to use in the format URL:port.  Note that this setting only applies to the Zebra WebKit engine, proxy settings for the Internet Explorer engine are picked up from the Windows connection manager.  Leave this field blank to not use a proxy. Not supported on Windows Mobile/Windows CE, use HTTP_Proxy instead.</td>
<td >URL:PortNo</td>
</tr>
<tr>
<td class="clsEvenRow">WebDB\\WebStorageDBPath</td>
<td class="clsEvenRow">WEBSTORAGEDBPATH</td>
<td class="clsEvenRow">Path to an existing directory to store Web Storage databases</td>
<td class="clsEvenRow">Fully qualified local path.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >WebDB\\WebSQLDBQuota</td>
<td >WEBSQLDBQUOTA</td>
<td >Web SQL database maximum quota per database</td>
<td >Size in bytes</td>
</tr>
<tr>
<td class="clsEvenRow">WebDB\\WebSQLDBPath</td>
<td class="clsEvenRow">WEBSQLDBPATH</td>
<td class="clsEvenRow">Path to an existing directory to store Web SQL databases</td>
<td class="clsEvenRow">Fully qualified local path.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >ApplicationCache\\ApplicationCacheQuota</td>
<td >APPLICATIONCACHEQUOTA</td>
<td >Application Cache data maximum quota per application</td>
<td >Size in bytes</td>
</tr>
<tr>
<td class="clsEvenRow">ApplicationCache\\ApplicationCachePath</td>
<td class="clsEvenRow">APPLICATIONCACHEPATH</td>
<td class="clsEvenRow">Path to an existing directory to store Application Cache data</td>
<td class="clsEvenRow">Fully qualified local path.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >NPAPI\\NPAPIDirectory</td>
<td >NPAPIDIRECTORY</td>
<td >Not applicable to the Enterprise Tablet:<br>Path to an existing directory where the NPAPI Plugins are stored</td>
<td >Fully qualified local path.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td class="clsEvenRow">NPAPI\\Preloads\\PreloadLegacyGeneric</td>
<td class="clsEvenRow">PRELOADLEGACYGENERIC</td>
<td class="clsEvenRow">Whether or not to preload the NPAPI plugin to mimic the Generic ActiveX object in WebKit. On the Enterprise Tablet this plugin is automatically loaded when the JSObjects plugin is preloaded.</td>
<td class="clsEvenRow">0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td >NPAPI\\Preloads\\PreloadLegacyODAX</td>
<td >PRELOADLEGACYODAX</td>
<td >Not applicable to the Enterprise Tablet:<br>Whether or not to preload the NPAPI plugin to mimic the ODAX ActiveX object in WebKit</td>
<td >0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td class="clsEvenRow">NPAPI\\Preloads\\PreloadLegacyNoSIP</td>
<td class="clsEvenRow">PRELOADLEGACYNOSIP</td>
<td class="clsEvenRow">Whether or not to preload the NPAPI plugin to mimic the NoSIP ActiveX object in WebKit</td>
<td class="clsEvenRow">0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td >NPAPI\\Preloads\\PreloadLegacyAirBeam</td>
<td >PRELOADLEGACYAIRBEAM</td>
<td >Not applicable to the Enterprise Tablet:<br>Whether or not to preload the NPAPI plugin to mimic the AirBeam ActiveX object in WebKit</td>
<td >0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td class="clsEvenRow">NPAPI\\Preloads\\PreloadLegacyAPD</td>
<td class="clsEvenRow">PRELOADLEGACYAPD</td>
<td class="clsEvenRow">Whether or not to preload the NPAPI plugin to mimic the APD ActiveX object in WebKit</td>
<td class="clsEvenRow">0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td >NPAPI\\Preloads\\PreloadJSObjects</td>
<td >PRELOADLEGACYJSOBJECTS</td>
<td >Whether or not to preload the NPAPI plugin to provide native JavaScript objects for each of the modules</td>
<td >0 - Do Not Preload<br>1 - Preload</td>
</tr>
<tr>
<td class="clsEvenRow">Preloads\\Preload</td>
<td class="clsEvenRow">PRELOAD</td>
<td class="clsEvenRow">By default plugins will be loaded into memory when needed, e.g. when Scanner-Enabled is called the Scanner plugin DLL will be loaded into memory which takes a finite amount of time when it is first performed.  To prevent the user noticing any lag when using their application modules can be loaded in the background when RhoElements first starts.  Specify a Preload tag for each module you wish to load at RhoElements startup, note that multiple modules may be defined in the same DLL but you still need to list all modules to preload here to see maximum benefit.<p>On low memory devices it is recommended to preload all your required modules to avoid your program running out of memory during execution.</p>
<p>Preloads are not applicable to the enterprise tablet, as plugins are integral to RhoElements on this platform.</p></td>
<td class="clsEvenRow">Module name</td>
</tr>
<tr>
<td >Scrolling\\ScrollTechnique</td>
<td >SCROLLTECHNIQUE</td>
<td >Specifies the technique used to scroll about the page:<br/><b>FingerScroll</b> - You can scroll around the page using finger swiping.<br/><b>Scrollbars</b> - When the size of the page is larger than the screen scrollbars will be presented which can be used to scroll the page (Not available on Android)<br/><b>None</b> - No scrollbars will be displayed and the page will not respond to finger swipes.<br/><b>NOTE:</b> FingerScroll may interfere with drawing on a Canvas element</td>
<td >See description</td>
</tr>
<tr>
<td class="clsEvenRow">Authentication\\Username</td>
<td class="clsEvenRow">AUTHUSER_GLOBAL</td>
<td class="clsEvenRow">Specifies the username to be provided automatically when RhoElements is instructed to navigate to any page which requires basic or digest HTTP authentication.<P/>If this setting is absent from the configuration file a popup dialog will be displayed prompting the user to enter their own credentials.  Leaving the value blank will provide a username of "".  RhoElements will only permit the user to enter incorrect credentials twice before presenting the HTTP 401 Unauthorized page, the user application should be designed to handle this scenario.</td>
<td class="clsEvenRow">ASCII text</td>
</tr>
<tr>
<td >Authentication\\Password</td>
<td >AUTHPASS_GLOBAL</td>
<td >Specifies the password to be provided automatically when RhoElements is instructed to navigate to any page which requires basic or digest HTTP authentication.<P/>If this setting is absent from the configuration file a popup dialog will be displayed prompting the user to enter their own credentials.  Leaving the value blank will provide a password of "".  RhoElements will only permit the user to enter incorrect credentials twice before presenting the HTTP 401 Unauthorized page, the user application should be designed to handle this scenario.</td>
<td >ASCII text</td>
</tr>
<tr>
<td >HTMLStyles\\FontFamily</td>
<td >FONTFAMILY</td>
<td >Specifies the default font to use when rendering text in web pages.  The specified font should be a TrueType font present on the device. On Windows the default font has been set to 'Tahoma' as this is present on all Zebra WM / CE devices, note that Tahoma has no italic or oblique variants. On the Enterprise Tablet the default is Droid Sans Fallback. The font specified must be stored in \Windows for Windows WM / CE devices, or /system/fonts for Enterprise Tablet.</td>
<td >Font name</td>
</tr>
<tr>
<td class="clsEvenRow">HTMLStyles\\FontDirectory</td>
<td class="clsEvenRow">FONTDIRECTORY</td>
<td class="clsEvenRow">Specifies the font directory where true type fonts can be found.  On Windows the default font directory is \Windows on all Zebra WM / CE devices.  Not applicable to the Enterprise Tablet.</td>
<td class="clsEvenRow">\Windows</td>
</tr>
<tr>
<td >SIP\\ResizeOnSIP</td>
<td >RESIZEONSIP</td>
<td >When enabled the browser window will resize to accommodate the SIP when displayed.  If the SIP has been moved to the top half of the screen the browser window will reduce in size from the top.  In order to use this configuration setting you must preload the SIP module.  (Windows Mobile Only.  This option is not compatible with CE or Finger Scrolling, the SIP will always appear at the bottom of the screen)</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">SIP\\EnableSIP</td>
<td class="clsEvenRow">Not Configurable</td>
<td class="clsEvenRow">Disables or Enables the SIP.  (Android Only, on Windows the Left & Top parameters of the SIP module can be used to position the SIP off the screen.)</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >System\\LowBatteryScan</td>
<td >LOWBATTERYSCAN</td>
<td >Windows Mobile and CE only.  Set to 0 to disable scanning when the battery is low or set to 1 to enable it.  Once disabled the scanner can be enabled again by calling scanner.enable().</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Scanner\\DisableScannerDuringNavigation</td>
<td >DISABLESCANNERDURINGNAV</td>
<td >By default if you have enabled the Scanner on a page (either through meta tags or JavaScript) and navigate to a new page, the Scanner will automatically be disabled. To override this behavior, set this option to 0. Once enabled, the Scanner will remain so in the foreground application until specifically disabled.</td>
<td >0 - The Scanner will remain enabled during page navigation<BR>1 - The Scanner will disable during a page navigation</td>
</tr>
<tr>
<td class="clsEvenRow">Sound\\DecodeVolume</td>
<td class="clsEvenRow">DECODEVOLUME</td>
<td class="clsEvenRow">The volume of the device beeper when a barcode is scanned</td>
<td class="clsEvenRow">0 to 5 with 5 being the loudest</td>
</tr>
<tr>
<td >Sound\\DecodeFrequency</td>
<td >DECODEFREQUENCY</td>
<td >The frequency of the device beeper when a barcode is successfully decoded.  This should be within the range of the beeper</td>
<td >0 to 0xFFFF</td>
</tr>
<tr>
<td class="clsEvenRow">Sound\\InvalidDecodeFrequency</td>
<td class="clsEvenRow">INVALIDDECODEFREQUENCY</td>
<td class="clsEvenRow">The frequency of the device beeper when a barcode is scanned but not successfully decoded.  This should be within the range of the beeper. Not applicable to the Enterprise Tablet.</td>
<td class="clsEvenRow">0 to 0xFFFF</td>
</tr>
<tr>
<td >Sound\\DecodeDuration</td>
<td >DECODEDURATION</td>
<td >The duration of the device beeper when a barcode is scanned</td>
<td >Milliseconds</td>
</tr>
<tr>
<td class="clsEvenRow">Sound\\ScanDecodeWav</td>
<td class="clsEvenRow">SCANDECODEWAV</td>
<td class="clsEvenRow">Wave file to be played when the scanner successfully decodes a barcode.  This setting overrides the scanner beeper.</td>
<td class="clsEvenRow">File name and path stored locally on the device.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >Sound\\ScanInvalidWav</td>
<td >SCANINVALIDWAV</td>
<td >Wave file to be played when a barcode is scanned but not successfully decoded.  This setting overrides the scanner beeper. Not applicable to the Enterprise Tablet.</td>
<td >File name and path stored locally on the device.</td>
</tr>
<tr>
<td class="clsEvenRow">Sound\\ImagerCaptureWav</td>
<td class="clsEvenRow">IMAGERCAPTUREWAV</td>
<td class="clsEvenRow">Wave file to be played when the Imager captures an image</td>
<td class="clsEvenRow">File name and path stored locally on the device.</td>
</tr>
<tr>
<td >GUI\\SignalRefresh</td>
<td >SIGNALREFRESH</td>
<td >Specifies the refresh rate of the signal display, see the <a href="/rhoelements/signal">Signal</a> meta tag for more information.</td>
<td >Refresh rate in milliseconds</td>
</tr>
<tr>
<td class="clsEvenRow">GUI\\BatteryRefresh</td>
<td class="clsEvenRow">BATTERYREFRESH</td>
<td class="clsEvenRow">Specifies the refresh rate of the battery display, see the <a href="/rhoelements/battery">Battery</a> meta tag for more information. Not applicable to the Enterprise Tablet<a href="#_batteryRefresh">* (see remark)</a></td>
<td class="clsEvenRow">Refresh rate in milliseconds</td>
</tr>
<tr>
<td >GUI\\HourglassEnabled</td>
<td >HOURGLASSENABLED</td>
<td >By default an <a href="/rhoelements/hourglass">Hourglass</a> will be displayed whilst navigating between pages, this setting can be used to disable that behavior.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">GUI\\HourglassLeft</td>
<td class="clsEvenRow">HOURGLASSLEFT</td>
<td class="clsEvenRow">By default an <a href="/rhoelements/hourglass">Hourglass</a> will be displayed whilst navigating between pages, this setting can be used to adjust its horizontal position.  If not specified the hourglass will appear in the center of the screen.</td>
<td class="clsEvenRow">Pixels</td>
</tr>
<tr>
<td >GUI\\HourglassTop</td>
<td >HOURGLASSTOP</td>
<td >By default an <a href="/rhoelements/hourglass">Hourglass</a> will be displayed whilst navigating between pages, this setting can be used to adjust its vertical position.  If not specified the hourglass will appear in the center of the screen.</td>
<td >Pixels</td>
</tr>
<tr>
<td class="clsEvenRow">Navigation\\BadLinkURI</td>
<td class="clsEvenRow">BADLINKURI</td>
<td class="clsEvenRow">Navigates to the specified badlink uri when one of the following occurs:<br>
<ul>
<li>There is an error attempting to navigate to the page, e.g. the device has no network connection.
<li>The timeout occurs when navigating to the page.  You can adjust the value of the timeout using the NavTimeout setting.
<li>The user presses the stop button.
</ul>
The browser will automatically append the querystring value "badlink" containing the url of the page which could not be reached and "stop=true" if the page was loaded because the user pressed the stop button.  The page specified in the badlink setting should be an offline file using the file:// protocol, this way the browser can always access the file.  
</td>
<td class="clsEvenRow">File name and path stored locally on the device.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >Navigation\\UserAgent</td>
<td >USERAGENT</td>
<td >When visiting a web server the WebKit browser will report its self as the specified user agent.  Use the following substitution variables:<br>
<ul>
<li>%p - platform name ("Windows CE " + version number)
<li>%w - WebKit version number
<li>%e - MotorolaWebKit version number.
</ul>
Use the UserAgent setting to spoof your device to the server, e.g. to view content designed for the desktop on your mobile screen.<br/>
From RhoElements 2.1 onwards the default value was changed to work out of the box with a greater number of server configurations, prior to RhoElements 2.1 the default user agent was: "Mozilla/5.0 (%p) AppleWebKit/%w (KHTML, like Gecko) MotorolaWebKit/%e Safari/%w"
</td>
<td >String</td>
</tr>
<tr>
<td class="clsEvenRow">Navigation\\ViewportEnabled</td>
<td class="clsEvenRow">VIEWPORTENABLED</td>
<td class="clsEvenRow">Whether to enable or disable viewport meta tag processing (default is enabled)</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >Navigation\\ViewportWidth</td>
<td >VIEWPORTWIDTH</td>
<td >Default viewport width to use for pages that do not have a viewport meta tag (uses 1:1 scaling if not specified)</td>
<td >Number</td>
</tr>
<tr>
<td>Navigation\\CaFile</td>
<td>CAFILE</td>
<td>A file of CA certificates in PEM format.  See <a href="http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html" target="_blank">http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html</a>. This setting is supported on Windows Mobile / CE and Android.</td>
<td>Local File name on the device.</td>
</tr>
<tr>
<td>Navigation\\CaPath</td>
<td>CAPATH</td>
<td>A directory containing CA certificates in PEM format (one certificate per file).  The OpenSSL c_rehash utility must be used to generate appropriately named links to the certificate files.  See <a href="http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html" target="_blank">http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html</a> for more information. This setting is supported on Windows Mobile / CE and Android.</td>
<td>Local File path on the device.</td>
</tr>
<tr>
<td>Navigation\\VerifyPeerCertificate</td>
<td>VERIFYPEERCERTIFICATE</td>
<td>Verify the server certificate against the internal certificates.  It is strongly recommended not to set this to 0 in deployment situations, but it can be useful during development.  A value of 0 is equivalent to automatically clicking 'OK' on a web browser's dialog querying an untrusted certificate.</td>
<td>Boolean</td>
</tr>
<tr>
<td >Navigation\\NetworkCookieDatabase</td>
<td >NETWORKCOOKIEDATABASE</td>
<td >If you want your cookies to persist across device boots then specify a file name here for the database used to hold the cookies.  If the specified file does not already exist then one will be created.  The cookies will be loaded in from this file and saved back to it when RhoElements exits, unless the file is read only in which case it will not be overwritten.  If not specified cookies will not persist.</td>
<td >Fully qualified local path.<a href="#_caseSensitivity">&dagger;</a></td>
</tr>
<tr>
<td >Navigation\\Cache</td>
<td >NAVIGATIONCACHE</td>
<td >The browser cache size, in whole MBs.  This setting is only applicable to RhoMobile Suite version 2.2 and above.</td>
<td >Whole MBs, eg. 5MB</td>
</tr>
<tr>
<td class="clsEvenRow">DeviceKeys\\<BR>EnableCtrlKey_X</td>
<td class="clsEvenRow">Not Configurable</td>
<td class="clsEvenRow">CE Only:<BR>By default all CTRL+Key combinations are disabled (e.g. CTRL+C to copy text; CTRL+V to paste text).  This setting is used to specify which CTRL+Key combinations should be enabled.  For each combination you wish to enable define a EnableCtrlKey_X tag but replace 'X' with the key being enabled, so for example to enable text copying specify EnableCtrlKey_C as enabled or to enable text pasting specify EnableCtrlKey_V as enabled.</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >DeviceKeys\\<BR>EnableVolumeSlider</td>
<td >ENABLEVOLUMESLIDER</td>
<td >Specific to the MC2100:<BR>Allows or prevents the key combination Orange+F1 from bringing up a slider to adjust the volume.  This setting is not application specific and will be applied globally on the device.</td>
<td >0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td class="clsEvenRow">DeviceKeys\\<BR>EnableBacklightSlider</td>
<td class="clsEvenRow">ENABLEBACKLIGHTSLIDER</td>
<td class="clsEvenRow">Specific to the MC2100:<BR>Allows or prevents the key combination Orange+F2 from bringing up a slider to adjust the backlight.  This setting is not application specific and will be applied globally on the device.</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
<tr>
<td >DefaultMetaTags\\MetaTag</td>
<td >DEFAULTMETATAG</td>
<td >All RhoElements Meta Tags can be set by default in the configuration, meaning if a common tag is required by the application it need not be present on every HTML page. Set a default tag in by specifying the tag's module, followed by a tilde character and then the properties of the module you wish to set, specified in EMML 1.1.  If the meta tag is present in both the configuration and a loaded page then the page will take priority. Logically only persistent tags can be set in the configuration, a tag's persistence being stated in the 'additional information' section in the help file.</td>
<td >[Module]~[Contents expressed in EMML1.1]</td>
</tr>
<tr>
<td class="clsEvenRow">Geolocation\\GeolocationEnabled</td>
<td class="clsEvenRow">Not Configurable</td>
<td class="clsEvenRow">Enables/disables HTML5 Geolocation. When enabled on a device supporting geolocation and under GPS/network coverage, the geolocation data is returned to the defined JavaScript callback. When disabled the defined JavaScript error callback is called notifying that the permission to using Geolocation is disabled.</td>
<td class="clsEvenRow">0 - Disabled<BR>1 - Enabled</td>
</tr>
</table>
<a name="_configIndentifiers">*</a> The configuration identifiers are used in the ReadConfigSetting and Write Config Setting methods of <a href="/rhoelements/generic">Generic</a> 


##Substitution Variables
The following substitution variables are available in the configuration file
<table class="facelift" style="width:100%" border="1" padding="5px"> 
<tr>
<th >Substitution Variable</th>
<th >Expanded Value</th>
</tr>
<tr>
<td >%INSTALLDIR%</td>
<td >The directory into which RhoElements.exe has been installed</td>
</tr>
</table>
		
##Optimizing The Runtime

RhoElements will be installed to the device with all default functionality enabled out of the box, including the barcode scanner.  This section describes how you can customize the RhoElements runtime to only load the functionality your application requires and specify when you want to load it.

Consider an application which opens the [Card Reader](cardreader) on the first page:
	<META HTTP-Equiv="CardReader" Content="Open" />

There are two circumstances to consider:

1) The Card Reader module is Preloaded in Config.xml See [Configuration Settings](ConfigurationSettings) for details of how to preload modules
In this case RhoElements opens the card reader more or less immediately with no noticeable delay to the user.

2) The Card Reader module was not Preloaded
In this case the Card Reader module (contained in the plugin PB_CardReader_PLG.dll) is loaded into memory and initialized, this in turn will initialize the hardware which could cause a noticeable delay depending on the device in use and the exact hardware.

The benefits of preloading plugins are obvious.  The benefits of not preloading plugins are that RhoElements will run with a smaller memory footprint until the additional functionality is required and the start up time will be reduced.

###Plugin.xml
Plugin.xml contains a mapping between the plugin DLL names, the modules contained within each plugin and any alias' assigned to the modules.  Plugin.xml <b>does not</b> specify which plugins to load, modules will only be loaded when they are needed or when they are preloaded.  It is recommended you do not edit this file, doing so may cause RhoElements to be unable to locate plugins on the device, rendering the modules within the missing plugins non-functional.	

###Necessary Modules
In order for RhoElements to function correctly it is necessary to preload some modules, this section details what those modules are and why they are necessary.  By default after a standard installation the Config.xml copied to the device will preload the necessary modules.

####Hourglass
When you navigate between pages you would expect to be shown an illustration of a rotating cursor.  If the [Hourglass](hourglass) module is not preloaded this cursor will not be shown.  

Note that the hourglass will be shown during page transitions if it is loaded by another means, e.g. calling:
	<META HTTP-Equiv="Hourglass" Content="Visibility:Visible" />

NOTE: Hourglass and SIP modules are located in the same Plugin (PB_DeviceApplication_PLG.dll)

####Key Capture
The following [Configuration Settings](ConfigurationSettings) require the Key Capture module to be preloaded in order to take effect:
<ul>
<LI>EnableFunctionKey_FX</LI>
<LI>EnableApplicationKey_AX</LI>
<LI>EnableCtrlKey_X</LI>
</ul>

####SIP
The following [Configuration Settings](ConfigurationSettings) require the SIP module to be preloaded in order to take effect:
<ul>
<LI>ResizeOnSIP</LI>
</ul>

NOTE: Hourglass and SIP modules are located in the same Plugin (PB_DeviceApplication_PLG.dll)

####Special Case - License Screen

The licensing screen utilizes the Scanner module to ease the input of licensing barcodes.  Developers should be aware that using unlicensed devices can cause the scanner to be loaded, increasing the memory footprint of RhoElements.  Licensed versions of RhoElements will just show a start up splash screen and will <b>not</b> load the scanner unnecessarily.

###Recommended Modules
It is recommended that the JavaScript objects are preloaded if they are being used in a RhoElements application. This is accomplished by changing the NPAPI section of the Config.xml
	<NPAPI>
		<NPAPIDirectory VALUE="file://\Program Files\RhoElements\NPAPI\"/>
		<Preloads>
			<PreloadLegacyGeneric VALUE="0"/>
			<PreloadLegacyODAX    VALUE="0"/>
			<PreloadLegacyNoSIP   VALUE="0"/>
			<PreloadLegacyAirBeam VALUE="0"/>
			<PreloadLegacyAPD     VALUE="0"/>
			<PreloadJSObjects     VALUE="1"/>
		</Preloads>
	</NPAPI>
NOTE: Some JavaScript libraries may incorrectly think that RhoElements supports traditional ActiveX. By only loading the JS objects described above may resolve this issue.		

###Plugin Dependencies
Some plugins depend on other plugins to function properly, this section details the relationships between plugins and how the absence of one will affect the other.  If the required plugin is not preloaded RhoElements will load it at runtime; to produce the best user experience it is recommended to preload all required plugins.  If the required plugin can not be loaded (e.g. the DLL is missing from the device or Plugin.xml) the dependent plugin will function with reduced capabilities.

####File Transfer
The [File Transfer Plugin](filetransfer) (PB_FileTransfer_PLG.dll) is critical to the proper working of multiple plugins. 

[Signature Capture](SignatureCapture) (PB_Signature_PLG.dll) requires File Transfer to transmit the signature bitmap file to a remote server via its 'Capture' method, without File Transfer the file will not be transferred and the signature bitmap will remain stored in the root of the device (by default).

The buttons and command areas (PB_Controls_PLG.dll) require File Transfer if you specify a remote image for the 'ImageUp' or 'ImageDown' parameters.  If the file transfer plugin can not be loaded the default image will be shown on the button / command area.  The following modules are affected in PB_Controls_PLG: [Back Button](backbutton), [Forward Button](forwardbutton), [Go Button](gobutton), [Home Button](HomeButton), [Minimize Button](minimizebutton), [Quit Button](quitbutton), [Reload Button](reloadbutton), [SIP Button](sipbutton), [Stop Button](stopbutton), [Bottom Command Area](bottomcommandarea), [Top Command Area](topcommandarea)

The [Imager](imager) Plugin (PB_ImageCapture_PLG.dll) requires File Transfer if you transmit the captured image to a remote server via the 'Capture' method.  Without File Transfer the file will not be transferred and the image will be stored by default in the root of the device, overwritten by each subsequent capture.

##Remarks
###<a name="_caseSensitivity">&dagger;</a>Case Sensitivity
The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.
###<a name="_batteryRefresh">*</a>Battery Polling on the Enterprise Tablet
On the Enterprise Tablet the battery notification is asynchronous. For this reason, BatteryRefresh is not supported on the Enterprise Tablet. The effect of this is that a batteryEvent is fired only when the battery level changes. This has been done to save battery power compared to polling.
###<a name="_fnbehavior"></a>Interaction between FunctionKeysCapturable and EnableFunctionKey configuration settings
On Windows Mobile and Windows CE devices full control is given to the developer over how their application handles function keys.  Because of the limitations of the operating system <b>any settings applied will persist until the device is next warm booted</b>.  Which function keys have default operating system behavior will vary from device to device, e.g. on the MC75a F3 and F4 represent the red and green phone keys and on many devices the volume keys are also mapped as Function keys.  Not all function keys will have default operating system behavior.

<b><i>Unblocking function keys may expose the underlying operating system, particularly the red and green phone keys will give access to the start menu and programs.</i></b>

The table below shows the behavior of RhoElements when Function Keys are pressed given the possible configuration settings:
<P>
<table border=1 width="100%" class="re-table">
<tr><th></th><th>Function Keys Capturable = TRUE</th><th>Function Keys Capturable = FALSE</th></tr>
<tr><th>Enable Function Key = TRUE</th>     
<td valign="top"><ul>
<li>All Function Keys <b>can</b> be captured by the <a href="/rhoelements/keycapture">Key Capture Module</a>
<li>Function Key will <b>not</b> have its default Operating system behavior
</ul>
</td>
<td valign="top"><ul>
<li>Function Keys with default OS behavior <b>can not</b> be captured by the <a href="/rhoelements/keycapture">Key Capture Module</a>
<li>Function Keys without default OS behavior <b>can</b> be captured by the <a href="/rhoelements/keycapture">Key Capture Module</a>
<li>Function Key <b>will</b> have its default Operating system behavior (if any)
</ul>
</td>
</tr>
<tr><th>Enable Function Key = FALSE</th>
<td valign="top"><ul>
<li>All Function Keys <b>can</b> be captured by the <a href="/rhoelements/keycapture">Key Capture Module</a>
<li>Function Key will <b>not</b> have its default Operating system behavior
</ul>
</td>
<td valign="top"><ul>
<li>All Function Keys <b>can not</b> be captured by the <a href="/rhoelements/keycapture">Key Capture Module</a>
<li>Function Key will <b>not</b> have its default Operating system behavior (if any)</td>
</ul>
</tr>			
</table>


	



