---
title: ButtonBar47 Module
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview

The ButtonBar47 Module is used to show/hide a particular ButtonBar. **To control the size, position, actions and other button attributes, see the [ButtonBar Usage guide](../../../../guide/customize)**.


## Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">buttonBar47 (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="ButtonBar47" content="[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ButtonBar47 JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'buttonBar47'</b> will exist on the current page and can be used to interact directly with the buttonBar47.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke ButtonBar47 methods via JavaScript use the following syntax: ButtonBar47.method();
<P />e.g. <b>buttonBar47</b>.show();
<P />e.g. <b>buttonBar47</b>.hide();
</td></tr></table>

## Methods

Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>show</b></td><td class="clsSyntaxCells clsOddRow">Show this ButtonBar.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>hide</b></td><td class="clsSyntaxCells clsOddRow">Hide this ButtonBar.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


## Parameters

Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">'visible' or 'hidden'</td><td class="clsSyntaxCells clsOddRow">Sets the visibility of the button Bar.</td><td class="clsSyntaxCells clsOddRow">Hidden.</td></tr></table>	


## Remarks

### Screen Orientation

When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so one has to create and show a different ButtonBar with different coordinates to fit in particular screen orienetation mode(Portrait or Landscape) by detecting the ScreenOrientationEvent.


## Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">EnterpriseBrowser Version</th><td class="clsSyntaxCell clsEvenRow">1.8.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All Android devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module will persist when navigating to a new page.</td></tr></table>


## HTML/JavaScript Examples

The following example demonstrates how to show the buttonBar via injecting metatag in a page.

	<META HTTP-Equiv="ButtonBar47" Content="Visibility:Visible">
	<META HTTP-Equiv="ButtonBar47" Content="Visibility:Hidden">
	
Alternatively you can also show a particular ButtonBar on all pages of your application using DefaultMetaTags tag in Config.xml without changing your server application code. Please include the following in the DefaultMetaTags section in Config.xml.

	<DefaultMetaTags>
		<MetaTag value="ButtonBar47~visibility:visible;"/>
	</DefaultMetaTags>
	
The following example demonstrates how to show/hide the ButtonBar via JavaScriptable objects.

	<script>
		function showbuttonbar()
		{
			buttonBar47.show();
		}

		function hidebuttonbar()
		{
			buttonBar47.hide();
		}
	</script>




