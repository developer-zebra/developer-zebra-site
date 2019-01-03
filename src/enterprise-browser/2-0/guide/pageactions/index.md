---
title: Page-based Actions
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---
## Overview

Apps running on EB 2.0 (and higher) can perform page-based actions, which execute JavaScript code or predefined commands whenever certain conditions are found on a page. For example, if a user encounters a "page not found" message, the app can be instructed to navigate to a login page. 

Page-based actions and the conditions that trigger them are defined in the `PageAction.xml` file, which is created and stored on the device in advance. An [example](#example) of that file is shown below. 

-----

### Supported Commands

##### Case-sensitive:
* **redirectTo-[url] -** Navigates to the specified URL. <br>
Example: `redirectTo-http://MyCompany.com/mobile/MyApp/startup` 
* **runscript-[codeBlockName] -** Executes the specified JavaScript code block as defined in the `CustomScript.xml` file. <br>
Example: `runscript-clearcookiescript` executes a user-defined JavaScript code block in the “cleaarcookiescript” section of the `CustomScript.xml` file. [About the CustomScript file](../customize/script). 

##### Not case-sensitive:
* **home -** Navigates to the "Home" page defined in the [StartPage](../configreference/#startpage) tag of the app's `Config.xml` file. 
* **back -** Navigates to the previous page in the EB app's history.
* **doubleBack -** Navigates two pages back in the EB app's history.
* **quit -** Exits the EB app, executing any exit commands or actions defined in the `Config.xml` file.

### File Location
The location of the `PageAction.xml` file on the device can be specified in the &lt;keycodemappingxmlfile&gt; tag of the app's `Config.xml` file using a fully qualified path (or substitution variable) and file name. This allows separate folders to be created for storing the actions of different apps. If no path is specified, the default path of `file://%INSTALLDIR%/PageAction.xml` is used. 

See the [Config.xml reference](../configreference/#pageactionxmlfile) for more information. 

-----

### Example

		:::xml
	<pageActionGroup>
	   <pageAction1>
	        <pageIdentification value="400 Session timed out" />
	        <Action value="redirectTo-http://MyCompany.com/mobile/MyApp/startup" />
	    </pageAction1>

	    <pageAction2> 
	        <pageIdentification value="Component" />
	        <Action value="Home" />   
	    </pageAction2>

	    <pageAction3> 
	         <pageIdentification value="Blocked" />
	        <Action value="Back" />
	    </pageAction3>

	 	  <pageAction4> 
	 		 <pageIdentification value="Delivery&nbsp;Number" />
	        <Action value="Quit" />    
	   </pageAction4>
	</pageActionGroup>

-----

### See Also

* [Config.xml Reference](../configreference)
* [Enterprise Browser APIs](../apioverview)
* [Function Key Mapping Guide](/keycapture/#mappingproprietaryfunctionkeycodes)
* [DOM Injection guide](../dom)







