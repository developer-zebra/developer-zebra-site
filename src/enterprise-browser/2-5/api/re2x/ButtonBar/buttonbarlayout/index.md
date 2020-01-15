---
title: ButtonBar Layout
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview

A ButtonBar Layout is a collection of ButtonBars arranged in a single view. Layouts can be created using the ButtonBar Tool, a desktop utility for Windows. This API module is used to show/hide specified layouts created through the tool.

`IMPORTANT:` 
* This API works only with layouts created with the [ButtonBar Tool](../../../../guide/buttonbar).
* To control the size, position, actions and other button attributes, see the [ButtonBar Usage guide](../../../../guide/customize).

<!-- 
In the tool after you create a project, if you go to the menu you will be able to add new layouts, specifying names for individual layouts. The layout name given here should be used while enabling or disabling the Layout using this new plug-in. In the below doc wherever ‘LayoutName’ is mentioned it means the name given for the Layout while creating in tool.
-->

-----

## Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">buttonBarLayout (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="buttonBarLayout" content="[parameter]"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">ButtonBarLayout JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'buttonBarLayout'</b> will exist on the current page and can be used to interact directly with the buttonBarLayout.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke buttonBarLayout methods via JavaScript use the following syntax: ButtonBarLayout.property;
<P />e.g. <b>buttonBarLayout</b>.enabled= "LayoutName";
<P />e.g. <b>buttonBarLayout</b>.disabled= "LayoutName";
</td></tr></table>


<h2> Properties </h2>

Items listed in this section indicate methods or in some cases parameters that can be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>enabled</b></td><td class="clsSyntaxCells clsOddRow">Show the Layout with this name</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>disabled</b></td><td class="clsSyntaxCells clsOddRow">Hide the layout with this name</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


<H2> Parameters</H2>

Items listed in this section indicate parameters or attributes that can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" />
<tr><th class="tableHeading">Name</th>
<th class="tableHeading">Possible Values</th>
<th class="tableHeading">Description</th>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><b> 
enabled:[Value]</b></td>
<td class="clsSyntaxCells clsOddRow">‘Layoutname’</td>
<td class="clsSyntaxCells clsOddRow">Shows the layout with the specified name</td>
</tr>
<tr>
<td class="clsSyntaxCells clsOddRow"><b> 
disabled:[Value]</b></td>
<td class="clsSyntaxCells clsOddRow">‘Layoutname’</td>
<td class="clsSyntaxCells clsOddRow">Shows the layout with the specified name</td>
</tr>
</table>	


## Remarks

### Screen Orientation

When the screen orientation changes, using either the ScreenOrientation tag or by rotating a device with hardware support, the buttons themselves do not move. In some cases, this results in layouts that appear partially off the screen or are not in the expected position. If so, Zebra recommends creating different layouts for portrait and landscape modes and switching to the appropriate layout by detecting the orientation with ScreenOrientationEvent.

## Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> 
<tr>
<th class="tableHeading">EnterpriseBrowser Version</th>
<td class="clsSyntaxCell clsEvenRow">2.0 or later</td>
</tr>
<tr><th class="tableHeading">Supported devices</th>
<td class="clsSyntaxCell clsOddRow">All supported Android devices</td></tr>
<tr><th class="tableHeading">Minimum Requirements</th>
<td class="clsSyntaxCell clsOddRow">None</td></tr>
<tr><th class="tableHeading">Persistence</th>
<td class="clsSyntaxCell clsEvenRow">Persistent - Changes to this module persist when navigating to a new page</td>
</tr>
</table>


## HTML/JavaScript Examples

The following example demonstrates how to show the Layouts created through the ButtonBar Layout tool by injecting metatags into a page.

	<META HTTP-Equiv="buttonBarLayout" Content="Disabled:qwertylayout">
	<META HTTP-Equiv="buttonBarLayout" Content="Enabled:qwertylayout">
	
Alternatively a particular Layout can be shown on all pages of the application using the DefaultMetaTags tag in the `Config.xml` file without changing the server application code. Please include the following in the DefaultMetaTags section in the `Config.xml`.

	<DefaultMetaTags>
    	<MetaTag value=" buttonBarLayout~ enabled:numericlayout;"/>
    	<MetaTag value=" buttonBarLayout~ disabled:numericlayout;"/>
	</DefaultMetaTags>
	
The following example demonstrates how to show/hide the ButtonBar via JavaScriptable objects.

	<script>
    	function showbuttonbar()
    	{
        	buttonBarLayout.enabled= "LayoutName";
    	}
 
    	function hidebuttonbar()
    	{
        	buttonBarLayout.disabled= "LayoutName";
    	}
	</script>

