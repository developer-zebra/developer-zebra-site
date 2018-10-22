---
title: AppSwitcher Module
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The AppSwitcher Module is used to show or hide the application switcher.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">appSwitcher (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="AppSwitcher" content="Visibility:Visible"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="AppSwitcher-Visibility" contents="Visible"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">AppSwitcher JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'appSwitcher'</b> will exist on the current page and can be used to interact directly with the appSwitcher.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set appSwitcher parameters via JavaScript use the following syntax: appswitcher.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>appSwitcher</b>.visibility = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple <a href="/rhoelements/EMMLOverview">EMML</a> parameters / events on a single line use the following syntax: appswitcher.setEMML("[Your EMML Tags]");
<P />
e.g. <b>appSwitcher</b>.setEMML("visibility:<i>value</i>");							
</td></tr></table>

<table class="re-table"><tr><th class="tableHeading">AppSwitcher Ruby Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the Ruby Object <b>'AppSwitcher'</b> will exist on the current page and can be used to interact directly with the AppSwitcher. All Methods, Parameters and Events are the same as JavaScript, however, notice <b>'AppSwitcher'</b> needs to start with an uppercase letter. Another difference in Ruby is that methods do not end in <b>'()'</b></td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set AppSwitcher parameters via Ruby use the following syntax: AppSwitcher.parameter = 'value' remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>AppSwitcher</b>.visibility = 'value'
</td></tr><tr><td class="clsSyntaxCells clsOddRow" /></tr></table>




##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>visibility:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Either 'visible' or 'hidden'.</td><td class="clsSyntaxCells clsOddRow">
                    Setting the visibility to 'visible' will show the application switcher.  Setting the visibility to 'hidden' will hide the application switcher.  Developers can design their own custom application switchers, see the Remarks section for information on how to do this.
                </td><td class="clsSyntaxCells clsOddRow">The visibility of the switcher will remain unchanged if given an invalid parameter.</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">N/A or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">Windows CE, Windows Mobile, Windows Mobile SE</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">PocketBrowser 3.0 onwards running a multiple instance compatable browser.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">This tag is page specific and is actioned immediately.</td></tr></table>


##HTML/JavaScript Examples

The following example closes the current application and brings up the application switcher:

	<META HTTP-Equiv="AppInstance" Content="CloseCurrent">
	<META HTTP-Equiv="AppSwitcher" Content="Visibility:Visible">
	
The following example shows the application switcher for 5 seconds when this page is loaded :

	<HTML>
	<HEAD>
	<META HTTP-Equiv="AppSwitcher" Content="Visibility:Visible">
	</HEAD>
	
	<BODY onLoad="HideAppSwitcherTimer();">
	
	<SCRIPT LANGUAGE="JavaScript">
	function HideAppSwitcherTimer()
	{
		setTimeout("onHideAppSwither()", 5000);
	}
	function onHideAppSwitcher()
	{
		appSwitcher.visibility = hidden;
	}
	</SCRIPT>
	</BODY>
	</HTML>
	





