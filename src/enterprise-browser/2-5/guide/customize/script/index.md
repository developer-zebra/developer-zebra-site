---
title: Custom JavaScript Guide
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---

## Overview

Apps made with Enterprise Browser 1.7 (and higher) for Android can be accompanied by a series 1-50 (40 more added in Enterprise Browser 1.8) custom on-screen buttons or keys that can perform virtually any function available to the device, including launching an app or activity, scanning a barcode, sending an intent or executing a JavaScript code snippet. 

The number of buttons or keys and the appearance, layout, on-screen position, functions and all other attributes are controlled through a file called `button.xml`. **If one or more of the buttons is to execute JavaScript, the code is contained in a second file called** `CustomScript.xml`. Both files are stored on the device, and their paths are specified in corresponding tags in the app's `Config.xml` file. ButtonBars can be shown and hidden programmatically as required by an app's pages through methods implemented in one of 50 [ButtonBar APIs](../../../api/re2x/ButtonBar) currently supported. See [Customize Enterprise Browser](../) for details. 

### The JavaScript File
The custom JavaScript XML file (called `CustomScript.xml` by default) contains a JavaScript code block based on user requirements. Depending on the use case, multiple code blocks can be defined within this single file and can optionally call [Enterprise Browser APIs](../../../api) as well. 

To specify or change the name and/or location of the `CustomScript.xml` file, see the [&lt;customxmlfile&gt; tag](../../configreference/#customxmlfile) in the `Config.xml` reference.

-----

### Sample Custom JavaScript XML File Snippet

##### In the `CustomScript.xml` file:

        :::xml

        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<deviceinfoscript>
        		var deviceInfo="DeviceName:- " + EB.System.deviceName + "\n"+
        			"Platform:- " + EB.System.platform + "\n"+
        			"OS Vesrion:- " + EB.System.osVersion+ "\n" +
        			"OEM Vesrion:- " + EB.System.oemInfo + "\n"+
        			"RealScreenHeight:- " + EB.System.realScreenHeight+ "\n"+
        			"RealScreenWidth:- " + EB.System.realScreenWidth+ "\n"+
        			"UUID:- "+EB.System.uuid;
        		alert(deviceInfo);  
        	</deviceinfoscript>
        	<camerascript>
        		var imageElement = document.createElement('img');
        		imageElement.setAttribute("id", "imageElement1");
        		imageElement.setAttribute("height", "200");
        		imageElement.setAttribute("width", "200");
        		document.getElementsByTagName('body')[0].insertBefore(imageElement,document.getElementsByTagName('body')[0].firstChild );
        		var br1 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br1,document.getElementsByTagName('body')[0].firstChild);
        		var br2 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br2,document.getElementsByTagName('body')[0].firstChild);
        		var br3 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br3,document.getElementsByTagName('body')[0].firstChild);
        		var br4 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br4,document.getElementsByTagName('body')[0].firstChild);
        		function picture_taken_callback(params)
        		{
        			document.getElementById('imageElement1').src = params.imageUri ; 
        		}
        		EB.Camera.takePicture({'outputFormat': 'dataUri'}, picture_taken_callback);
        	</camerascript>
        	<barcodescript>
        		function scancallback(params)
        		{
        			document.getElementById("text").value=params.barcode;
        		}	
        		EB.Barcode.take({},scancallback);
        	</barcodescript>
        	<signaturescript>
        		var sigimageElement = document.createElement('img');
        		sigimageElement.setAttribute("id", "sigimageElement1");
        		sigimageElement.setAttribute("height", "150");
        		sigimageElement.setAttribute("width", "200");
        		document.getElementsByTagName('body')[0].insertBefore(sigimageElement,document.getElementsByTagName('body')[0].firstChild );
        		var br1 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br1,document.getElementsByTagName('body')[0].firstChild);
        		var br2 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br2,document.getElementsByTagName('body')[0].firstChild);
        		var br3 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br3,document.getElementsByTagName('body')[0].firstChild);
        		var br4 = document.createElement("br");
        		document.getElementsByTagName('body')[0].insertBefore(br4,document.getElementsByTagName('body')[0].firstChild);
        		function signature_callback(params){
        			document.getElementById('sigimageElement1').src = params.imageUri ; 
        		}	
        		EB.Signature.takeFullScreen({'outputFormat': 'dataUri'}, signature_callback);
        	</signaturescript>
        </CustomScripts>

---

## Nodes

The code below shows the HEAD node, the parent tag set inside of which should be all other tags.

##### In the `CustomScript.xml` file:


        :::xml
        <CustomScripts>
        ...
        </CustomScripts>


All JavaScript-code block tags are defined inside the HEAD node as shown below.

##### In the `CustomScript.xml` file:

        :::xml
        <CustomScripts>

        	<script1>
        	   //JavaScript code block 1 here
        	</script1>

        	<script2>
               //JavaScript code block 2 here
        	</script2>

        	<script3>
               //JavaScript code block 3 here
        	</script3>

        	<script4>
               //JavaScript code block 4 here
        	</script4>	

        </CustomScripts>

The example above shows tags for four (4) scripts (named script1 through script4), each of which can contain a different JavaScript code block associated with a specific button.

-----

### Example Code

#### Display Device Info
The example below shows the &lt;CustomScripts&gt; HEAD node containing a script named **deviceinfoscript**, which internally contains the JavaScript definition. **Note that this example uses the [Enterprise Browser System API](../../../api/system)**.

##### In the `CustomScript.xml` file:

        :::xml
        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<deviceinfoscript>
        		var deviceInfo="DeviceName:- " + EB.System.deviceName + "\n"+
        			"Platform:- " + EB.System.platform + "\n"+
        			"OS Vesrion:- " + EB.System.osVersion+ "\n" +
        			"OEM Vesrion:- " + EB.System.oemInfo + "\n"+
        			"RealScreenHeight:- " + EB.System.realScreenHeight+ "\n"+
        			"RealScreenWidth:- " + EB.System.realScreenWidth+ "\n"+
        			"UUID:- "+EB.System.uuid;
        		alert(deviceInfo);  
        	</deviceinfoscript>
        </CustomScripts>

-----

#### Add a Second Script

The sample code below is the same as that above with a second JavaScript code block (named **keycheckingscript**) added before it. Additional JavaScript blocks can be added and associated with buttons as required by the use case.

##### In the `CustomScript.xml` file:

        :::xml
        <?xml version = "1.0"?>
        <!--  Enterprise Browser Custom Script definition file -->
        <CustomScripts>
        	<keycheckingscript>
        		function jsKeyEvent(event)
        		{		
        			var keyValue = event.keyCode;		
        			alert("Key Pressed = " + keyValue);
        		}
        	</keycheckingscript>
        	<deviceinfoscript>
        		var deviceInfo="DeviceName:- " + EB.System.deviceName + "\n"+
        			"Platform:- " + EB.System.platform + "\n"+
        			"OS Vesrion:- " + EB.System.osVersion+ "\n" +
        			"OEM Vesrion:- " + EB.System.oemInfo + "\n"+
        			"RealScreenHeight:- " + EB.System.realScreenHeight+ "\n"+
        			"RealScreenWidth:- " + EB.System.realScreenWidth+ "\n"+
        			"UUID:- "+EB.System.uuid;
        		alert(deviceInfo);  
        	</deviceinfoscript>
        </CustomScripts>

-----

**Related Guides**:

* **[Custom Button Parameter Guide](../button)**
* **[Customize Enterprise Browser](../)**
* **[&lt;customxmlfile&gt; tag](../../configreference/#customxmlfile)** in the `Config.xml` reference
