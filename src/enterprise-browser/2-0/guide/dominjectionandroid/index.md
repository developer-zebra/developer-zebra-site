---
title: DOM Injection for Android
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
---
## Overview

Apps made with Enterprise Browser 1.3 and higher are able to perform DOM injection, the ability insert CSS, JavaScript and/or meta tags into the DOM without modifying the underlying application. This permits features, capabilities and even the look of one or more server-based Enterprise Browser app pages to be modified at runtime using DOM elements referenced from in a text file stored on the device. 

DOM injection is enabled by default in EB 1.3 and higher apps, and is **activated by the &lt;CustomDOMElements&gt; tag in the &lt;Application&gt; section** of the app's `Config.xml` file. This tag must contain a fully qualified path to the device-resident "tags" file, which is required for DOM injection. This file defines the DOM element(s) to be injected and the names of the pages to receive injections whenever they're displayed. **Injected CSS and JavaScript can be local, server-based or in combination**. Meta tags must be specified and fully contained within the tags file. No special licensing is required. 

### What is "the DOM"?
In the context of modern web programming, **the "DOM" refers to HTML5 as it appears when running**. While the code of an HTML5 app might define certain variables, those variables contain no values until the app is executed. Therefore, it's accurate to think of the DOM as an HTML5 app that's in use, and of DOM injection as changes made to a running app that take effect immediately. 

The DOM injection tags file (i.e. `mytags.txt`) follows a syntax similar to that of ordinary HTML tags for including scripts, style sheets and meta data. Parts of the tags as they apply to DOM injection are explained below.

### Substitution

Android apps made with **EB 2.0 (and higher) can use [substitution variables](../configreference/#substitutionvariables)** such as those for the device's "primary directory" (%PRIMARYDIR%) and an app's "install directory" (%INSTALLDIR%) in place of fully qualified (absolute) path names. This can help make coding easier and less error prone while simplifying enterprise deployment across varied devices. **Zebra recommends using substitution variables rather than absolute paths whenever possible**.

**EB 2.0 and higher also supports [page-based actions](../pageactions)**, which can execute JavaScript code and/or predefined commands based on the contents of a page. In some instances, this feature can be used as a substitute for DOM injection with similar effect. 

#### DOM injection is supported by: 

* **Android apps that use the stock webkit**
* **Windows Mobile/CE apps using the Zebra Webkit**
* **Windows CE apps using the IE engine**

**_DOM injection is NOT supported on Windows Mobile devices using the IE engine_**. 

#### Supports injection of:

* JavaScript or CSS files stored locally on the device
* JavaScript or CSS files stored on a server 
* Meta tags described in the `tags` file (stored on the device)
* Local files specified using absolute paths or [EB substitution variables](../configreference/#substitutionvariables) (i.e. `%INSTALLDIR%`)
* Elements (JavaScript, CSS and/or meta tags) on all navigated pages
* Elements on specified pages
* Elements on pages that contain a specified string
* Elements on pages based on a URL

> **Zebra recommends using substitution variables rather than absolute paths whenever possible**.

### Requirements

To use DOM injection, **ALL of the following must be true**:

* The app being injected was made with Enterprise Browser 1.3 (or higher)
* A `tags` file containing elements to be injected has been created and pushed to the target device
* The path to the `tags` file is specified in the app's `Config.xml` file (see [Step 2](#step2updateconfigxml))
* The target device is running one of the following: 
	* Android with stock webkit 
	* Windows Mobile/CE device with Zebra Webkit
	* Windows CE with IE engine

-----

## Step 1- Prepare the "tags" file

**Create a text file** to contain the desired DOM-injection elements, which are defined using the tagging syntax below. This becomes the list of elements (i.e. JavaScript, CSS and/or meta tags) to be injected into the DOM and specifies the pages to receive the injections. 

### 'Pages' tag

This attribute decides where the given tags to be injected. If wildcard character (&#42;) is used, the given file or meta tag will be injected on all navigated pages

<-below shows an example of injecting a javascript file from installed directory using substitution variable on all navigated pages->

	<script type='text/javascript' src='file://%INSTALLDIR%/enroll.js' pages='*' />

User can also mention specific relative url on which it can be injected (applicable only for server pages). In this case, files or meta tags will be injected only on those specific urls. Relative path here refers to the path component of a URL to the specific page (path to the page after domain name).

<-below shows an example of injecting a javascript file from installed directory using substitution variable on a specific page->
If the complete url to the page is
http://192.168.10.1:9999/mypages/page2.html 
then the tag inside the ‘tags’ file would be as follows

	<script type='text/javascript' src='file://%INSTALLDIR%/enroll.js' pages='/mypages/page2.html' />

User can also mention multiple relative urls if needed. In such cases files or meta tags will be injected only to those pages. In such cases user should ensure that the pages should be separated by semi column (;)


<-below shows an example of injecting a javascript file from installed directory using substitution variable on multiple pages->

	<script type='text/javascript' src='file://%INSTALLDIR%/enroll.js' pages='/mypages/page2.html; /mypages/page5.html ' />

### 'Pagecontent' tag

Supported in Enterprise Browser 2.0 (and higher), this tag is used for injecting DOM files on navigated pages only when a specific string is present.

If user not willing to inject files or meta tags on specific pages and if he couldn’t find unique URI path to those pages, then Enterprise Browser team recommends the user to take advantage of this attribute.
Setting this attribute value will make Enterprise Browser to search for a specific string on the navigated pages before injecting the required files or meta tags. If Enterprise Browser finds the user given ‘pagecontent’ sting value on any navigated pages, it then inject the files or meta tags.

<-below example inject enroll.js file to the page which has a string ‘Enter your Group ID’ ->

	<script type='text/javascript' src='file://%INSTALLDIR%/enroll.js' pagecontent='Enter your Group ID' pages='*' />

User responsibility includes finding a unique string on the pages to fill the ‘pagecontent’ attribute value
<-below example inject mystyle.css file to the page which has a string ‘'Enter your User Name ->

	<link rel='stylesheet' type='text/css' href='file://%INSTALLDIR%/mystyle.css'  pagecontent='Enter your User Name' pages='*' />

User can also give a HTML element as given below

	<script type='text/javascript' src='file://%INSTALLDIR%/previous.js' pagecontent='<input class="clr-button branded-highlight-bg branded-highlight-item" data-ats-id="Previous-button" name="Previous" onclick="" style="margin-right:5px;" type="button" value="Previous">' pages='*' />

Note: when giving big values ensure space and quotes are not creating any syntax error. In above example page content takes attribute value with single quote and user should ensure its value should not have single quote repeated. Enterprise Browser team recommends to use smaller unique values to avoid syntax error. No multiline values are supported.

In the samples below, notice a syntax similar to that of ordinary HTML tags for including scripts, style sheets and meta data. Parts of the tags as they apply to DOM injection are explained in further detail below. 

> **Zebra recommends using substitution variables rather than absolute paths whenever possible**.

#### Inject a JavaScript file on all pages using absolute path:

	<script type='text/javascript' src='file:///storage/emulated/0/Android/data/com.symbol.enterprisebrowser/mytest.js' pages='*'/>
<br>

#### Inject a CSS file on all pages using absolute path:

	<link rel='stylesheet' type='text/css' href='file:///storage/emulated/0/Android/data/com.symbol.enterprisebrowser/mystyle.css'  pages='*' />
<br>

#### Inject a JavaScript file from "installed" directory using substitution variable:

	<script type='text/javascript' src='file://%INSTALLDIR%/enroll.js' pages='*' />
<br>

#### Inject a CSS file from the root directory using substitution variable:
	<link rel='stylesheet' type='text/css' href='file://%PRIMARYDIR%/mystyle.css'  pages='*' />
<br>

#### Inject a JavaScript file from a server into all pages:
	<script type='text/javascript' src='http://192.168.10.1:8081/test.js' pages='*'/>
<br>

#### Inject a meta tag to refresh all pages every 30 seconds:

	<meta http-equiv="refresh" content="30" pages='*' />
<br>

#### Enable the scanner on all pages
	<meta HTTP-Equiv="scanner" Content="Enable" pages='*'/> 
<br>

Attributes of DOM Injection tags: 

**Note that the "pages" attribute specifies the file name of the page into which the element defined in the tag will be injected**. 

**The following rules apply**: 

* <u>**All tags in the "`tags`" file *must* contain the injection-specific "pages" attribute**</u>.
* The `.html` file extension is assumed; specify the extension only if different.
* For local files, actions work from the directory relative to the installation root; include qualified path or substitution variable (**recommended**) only if different. 
* For server-based CSS or JavaScript files, actions work relative to the app's start page; include qualified URL if different.
* Wildcard (&#42;) characters are accepted to inject all files in a relative or specified directory.
* **URLs are supported for server-based CSS and JavaScript files only**.
* All meta tag data must be contained completely within the `tags` file.
* If using server-based JavaScript, see JavaScript injection section (below) for dependency cautions.
* An optional **pagecontent attribute** can be used to add a page-specific string for triggering injection.
* Attribute values must not be left blank to avoid unpredictable results.
* All tags must have beginning (&lt;) and ending (/&gt;) angle brackets.
* Do not combine multiple DOM tags on the same line inside the `tags` file.
* Local pages support only the `pages='*’` syntax. To inject tags to a specific local page, use `pages='*'` in combination with the `‘pagecontent’` attribute.

##### When all tags are completed, store the tags file on the device and take note of the file name and path.

-----

### Step 2- Update Config.xml

The `tags` file created in Step 1 must reside on the device. 

 * **Specify the path to the tags file** by adding a line like the one below in the `<Application>` section in the app's `Config.xml` file:  

		:::xml
		<Application>
		...
			<CustomDOMElements value="file://%INSTALLDIR%\rho\apps\app\mytags.txt"/>
		...
		</Application>


For information about how to configure the `Config.xml` file, see the [Config.xml Reference Guide](../configreference). **Note**: The &lt;CustomDOMElements&gt; tag cannot be configured using the [On-device Config Editor utility](../OndeviceConfig).  

> **The value inside the &lt;CustomDOMElements&gt; tag is empty by default. DOM injection cannot function unless a path to the tags file on the device is specified**. 

-----

## JavaScript Injection
JavaScript can be injected either through file protocol or by using an absolute path, [substitution variable](../configreference/#substitutionvariables), or server path relative to the EB app's start page. **Different rules apply to injection of local and server-based JavaScript, and might affect the app if dependencies exist between the JavaScript modules in use**. 

#### Inject Local JavaScript
When using the file protocol, the JavaScript file(s) must be resident on the target device and have path(s) specified in the `src` attribute of the script tag using the `file://` designation. For example, the following lines inject four JavaScript files into all pages of the app-relative directory:

	:::xml 
	<script type='text/javascript' src='file:///storage/emulated/0/Android/data/com.symbol.enterprisebrowser/mytest.js' pages='*'/>

	<script type="text/javascript" src=" http://192.168.19.2:9090/scripts/test.js" pages="/dominjection/index.html" />

**Notes**
* Local JavaScript files are injected consecutively in the order in which they are listed in the tags file.
* Each JavaScript file is loaded completely before the next file begins to load. 
* DOM injections occur every time a page is loaded, **so changes to JavaScript files injected in this way can be put into effect simply by refreshing the relevant page**.

#### Inject Server-based JavaScript
* Here, the same four JavaScript files are injected from a server: 

		:::xml
		<script type='text/javascript' src='http:\\192.168.1.1:8081\elements.js' pages='*' /> 
		<script type='text/javascript' src='http:\\192.168.1.1:8081\jquery.js' pages='*' /> 
		<script type='text/javascript' src='http:\\192.168.1.1:8081\jquery-1.11.3.js' pages='*' />
		<script type='text/javascript' src='http:\\192.168.1.1:8081\test.js' pages='*' />  

With server-based injection, Enterprise Browser commands the engine to inject JavaScript to the DOM asynchronously, which (for example) might cause `jquery.js` to be loaded before `element.js`. Therefore, **if JavaScript files are interdependent, additional steps might be required to avoid failure due to a dependency issue** (see below). 

In another example, the tags file below is used to inject the `rhoapi-modules.js` and `test.js` files into the page `/dominjection/index.html`. 


		:::xml
		<script type="text/javascript" src="http://192.168.19.2:9090/scripts/rhoapi-modules.js" pages="/dominjection/index.html" />
 
    	<script type="text/javascript" src="./test.js" pages="/dominjection/index.html" />

If an attribute contained in the rhoapi-modules file--for example the Rho namespace--is required by `test.js`, an error might occur if `test.js` is injected first. To guard against this, it might be useful for `test.js` to include some logic like the JavaScript below so that it waits until its dependent JavaScript (`rhoapi-modules.js`) is loaded.

Sample JavaScript to delay loading: 


		:::javascript
		(function() {
 
        // Poll for jQuery to come into existence
        var checkReady = function(callback) {
            if (window.EB) {
                callback(EB);
            }
            else {
                window.setTimeout(function() { checkReady(callback); }, 100); //check here
            }
        };
        // Start polling...
        checkReady(function(EB) {
          alert(EB.Application.appName); //use EB api here
        });
    })();

## Sample Tags File

In the sample `mytags.txt` file referenced below, notice a syntax similar to that of ordinary HTML tags for including scripts, style sheets and meta data. Parts of the tags as they apply to DOM injection are explained in the JavaScript comments and in further detail below. 

	:::xml
	<!--Sample tags file -->
	<!--FILENAME: 'mytags.txt' -->
	<!--DESC: 'tags' file for DOM Injection -->

	<!--JavaScript section-->

	<!--inject mytest.js into pages p1 and p2 only-->
	<script type='text/javascript' src='./mytest.js' pages='p1;p2'/>

	<!--inject mytest.js into all pages-->
	<script type='text/javascript' src='./mytest.js' pages='*'/>

	<!--inject a server-based JavaScript (into all pages)-->
	<script type='text/javascript' src='http://192.168.10.1:8081/test.js' pages='*'/>

	<!--inject a local JavaScript file (into p1 into p2)-->
	<script type='text/javascript' src='file://\programfiles\enterprisebrowser\rho\apps\app\test.js' pages='p1;p2'/>
	
	<!--MetaTags section-->

	<!--refresh pages p1 and p2 every 30 seconds-->
	<meta http-equiv="refresh" content="30" pages='p1;p2'/> 

	<!--refresh all pages every 30 seconds-->
	<meta http-equiv="refresh" content="30" pages='*'/>
	
	<!--enable the scanner on all pages-->
	<meta HTTP-Equiv="scanner" Content="Enable" pages='*'/>	
	
	<!--StyleSheets section-->

	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='p1;p2'/>
	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'/>
	<!--link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'-->	
	<link rel="stylesheet" type="text/css" href="file://\programfiles\enterprisebrowser\rho\apps\app\mystyle.css" pages='p1;p2'>




