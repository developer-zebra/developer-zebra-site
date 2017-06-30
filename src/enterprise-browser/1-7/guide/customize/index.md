---
title: Customize Enterprise Browser
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---
##Overview

Button XML File

Custom XML File

### buttonxmlfile
**Applies only to Android devices running KitKat and higher**. Specifies the location of `button.xml`, an optional file containing configuration settings to customize the on-screen buttons on the device.  **Note**: This tag is not included in the default `Config.xml` file. If added as shown below, Enterprise Browser will extract the `button.xml` file (if present) from the EB installation folder. 

For more information, see the [Customize EB Functions](../customize) guide.

**Possible Values**:

* Fully qualified path and file name
* Substitution variable representing the fully qualified path 
* Supports any valid internal or external storage device
* **Default path: "file://%INSTALLDIR%/button.xml" (Enterprise Browser installation folder)**

#### Example

	:::xml
	<Configuration>
		<Applications>
		    ...
		    <Application> 
		      ...
		      <buttonxmlfile value="file://%INSTALLDIR%/button.xml"/>
		      ...
		     </Application>
		     ...
		</Applications>
	</Configuration>


### customxmlfile
**Applies only to Android devices running KitKat and higher**. Specifies the location of `CustomScript.xml`, an optional file containing custom JavaScript snippets to be called by custom on-screen buttons or other app functions. **Note**: This tag is not included in the default `Config.xml` file. If added as shown below, Enterprise Browser will extract the `CustomScript.xml` file (if present) from the EB installation folder. 

For more information, see the [Customize EB Functions](../customize) guide. 

**Possible Values**:

* Fully qualified path and file name
* Substitution variable representing the fully qualified path 
* Supports any valid internal or external storage device
* **Default path: "file://%INSTALLDIR%/CustomScript.xml" (Enterprise Browser installation folder)**

#### Example

	:::xml
	<Configuration>
		<Applications>
		    ...
		    <Application> 
		      ...
		      <customxmlfile value="file://%INSTALLDIR%/CustomScript.xml"/>
		      ...
		     </Application>
		     ...
		</Applications>
	</Configuration>
