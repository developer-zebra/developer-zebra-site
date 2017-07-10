---
title: Custom JavaScript Definition Guide
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---
## Overview

Custom JavaScript XML file is used for defining custom javascript code block based on the user requirement. User can define multiple javascript code clock which can contains definition for different usecases. User can also use [Enterprise Browser API's](../../api/) inside the javascript code block.  

This feature is currently being used by [Custom On-screen Buttons/Keyboard Feature](../customize) only. User can use this feature (i.e. Custom JavaScript Feature) to define javascript code block when user wants to associate any button action to be associated with any javascript execution.  

Refer Enterprise Browser [customxmlfile](../configreference/#customxmlfile) config tag for changing the custom script xml file.

### Sample Custom JavaScript XML File Snippet
**Inside custom xml file (say _CustomScript.xml_ file):**
* * *
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
Below mentioned code is the head node and all other tags should be inside this parent node.

**Inside custom script xml file (say CutomScript.xml file):**
* * *
    <CustomScripts>
    .......
    </CustomScripts>

All javascript code block is defined inside head node as shown below.

**Inside custom script xml file (say CutomScript.xml file):**
* * *
    <CustomScripts>
    	<script1>
    		...
    	</script1>
    	<script2>
    		...
    	</script2>
    	<script3>
    		...
    	</script3>
    	<script4>
    		...
    	</script4>	
    </CustomScripts>

Here **`<script1>...</script1> to <script4>...</script4>`** are script name which consists the javascript code block.

Examples:
1. Custom JavaScript XML file which is associted with a JavaScript code block.

    **Inside custom script xml file (say _CutomScript.xml_ file):**
    * * *
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

    Here **`<CustomScripts>`** is the head node which contains script name as **`<deviceinfoscript>`** which internally contains the javascript definition. **Note:** The above example is using Enterprise Browser [System](../../api/system) API.
    
2. Custom JavaScript XML file which is associted with multiple JavaScript code block.

    **Inside custom script xml file (say _CutomScript.xml_ file):**
    * * *
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

    Here **`<CustomScripts>`** is the head node which contains multiple javascript definition i.e. **`<keycheckingscript>...</keycheckingscript>`** and **`<deviceinfoscript>...</deviceinfoscript>`**.
