---
title: NoSIP Preexisting JavaScript Object
productversion: '2.6'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The NoSIP Preexisting JavaScript Object contains methods which can be used to control the Soft Input Panel (on screen keyboard). If you have configured 'PreloadLegacyNoSIP' to be '1' the JavaScript object 'nosip' will be inserted automatically into your page's DOM by RhoElements. These methods should be used in conjunction with the SIP module to provide full control over the SIP
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">NoSIP (Preexisting JavaScript Object) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>nosip.ShowSIP(true);</p></td></tr></table>




##Methods

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="40%" /><col width="40%" /><col width="20%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Parameters</th><th class="tableHeading">Returns</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>ShowSIP<br /></b>Shows or Hides the SIP.</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>Name: </b>bShowSIP, 
<b>Values: </b>Boolean<br /><b>Description: </b>Set to true to show the SIP, set to false to hide the SIP.<P /></td><td style="text-align:left;" valign="top" class="clsSyntaxCells clsOddRow">N/A</td></tr></table>




##Remarks


###Backwards Compatibility
The NoSIP Preexisting JavaScript Object provides backwards compatibility with code written for PocketBrowser and also supports the syntax below. Because RhoElements inserts the object 'nosip' on the page automatically when 'PreloadLegacyNoSIP' is configured to be '1' you can not create your own objects by this name, see below:

<pre>

&lt;script&gt;
  //  Old PocketBrowser syntax supported by NoSIP
  var myObj = new ActiveXObject("NoSIP.NSEdit"); 
  
  //  Note: var nosip = new ... will fail because the object already exists on the page.
  myObj.ShowSIP(true);
&lt;/script&gt;
</pre>


###Backwards Compatibility with PocketBrowser NoSIP visual control
PocketBrowser provides the ability to create a 'NoSIP' control on the page, displayed as a text box which, when clicked, does not display the SIP. Full control over the SIP is provided in RhoElements; code which used the NoSIP visual control will need to be rewritten as a standard text input. The SIP can be disabled by following the instructions under the Configuration Setting SIP\\EnableSIP.




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Immediate - These methods are actioned immediately.</td></tr></table>


##HTML/JavaScript Examples

The Following example will show or hide the SIP, depending on how the function is called:

	<script>
	function fnControlSIP(bShowSIP)
	{
		nosip.ShowSIP(bShowSIP);
		if (bShowSIP)
			msg.innerHTML = "The SIP is Shown";
		else
			msg.innerHTML = "The SIP is Hidden";
	}
	</script>
	





