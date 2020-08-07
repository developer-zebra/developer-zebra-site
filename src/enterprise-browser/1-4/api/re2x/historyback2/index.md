---
title: 'History:Back Navigation'
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The History:Back Navigation instructs RhoElements to navigate to the previously visited address.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">History:Back (Navigation) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;a href="history:back"&gt;</p></td></tr></table>








##Remarks


###Interaction with Browser's History Stack
The browser component on Windows Mobile has no history stack other than that provided by RhoElements, so this History:Back tag is the only way to navigate to a previous page (as well as the Back Button). Windows CE's browser component has its own history stack accessed via JavaScript's history.go(n), this is not compatible with RhoElements's history and the History:Back tag should be used in preference.




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Immediate - This method is actioned immediately.</td></tr></table>


##HTML/JavaScript Examples

The following example shows how to navigate to the previous address using an anchor tag:

	<a href="history:back">Back to Previous Page</a>
	
The following example shows how to navigate to the previous address using JavaScript:

	<script>
	   function goBack()
	   {
	      document.location = 'history:back';
	   }
	</script>
	





