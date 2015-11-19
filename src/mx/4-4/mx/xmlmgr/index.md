---
title: XML Manager
description: The XmlMgr allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document.
---

## About XmlMgr

### Overview

The MXMS processes a Request XML document which contains one or more Features, where each Feature is of one of the defined Feature Types. Each Feature is represented by a top-level characteristic tag in the Request XML document, whose type matches the Feature Type. For example, a Feature of Feature Type "XmlMgr" in XML would begin with:

	:::XML
	<characteristic type="XmlMgr" ...

The MXMS executes Features, by passing them to the corresponding CSPs, in the order they appear in the Request XML document, by passing the characteristic to the corresponding CSP. When a Feature is executed by a CSP, the CSP returns Result XML. A characteristic tag is returned by the CSP to indicate that the Feature succeeded. A characteristic-error tag is returned by the CSP  to indicate that the Feature failed. The MXMS aggregates the Result XML returned by the CSPs in the order the Features are executed, to create the final Result XML.

For the purposes of discussing MXMS Error-Handling, any Feature that can be executed at all is considered a success and any Feature that cannot be executed at all is considered a failure. Errors are handled by the MXMS based on the Error Handling Mode that is in effect. The MXMS has a Default Error Handling Mode that is always in effect at the beginning of each new Request XML document that is processed. The Error Handling Mode can be left as the default or can be changed one or more times within a single Request XML document.

When the Default Error-Handling Mode, "Execute all to end", is in effect, the MXMS executes all Features, whether they succeed or fail, until the end of the XML is reached. The MXMS then returns the Result XML which will contain the same number of characteristic tags plus characteristic-errors tags as there were characteristic tags in the Request XML document. This Error-Handling Mode basically tries to execute everything and reports what happens at the end. This mode is the default because it is good for most general situations. But if one Feature depends on another, this mode can cause a "domino effect" where one failure causes a whole sequence of failures.

The MXMS supports an additional Error-Handling Mode, "Execute until error, then stop", where it stops executing Features on the first failure and returns Result XML that contains only the characteristic tags for the Features that succeeded plus the characteristic-error tag for the Feature that failed. This mode can be beneficial when Features are dependent on each other since it avoids the "domino effect" where one failure causes a whole sequence of failures and also allows execution to be terminating sooner, without attempting Features that are doomed to fail.

The XmlMgr Feature Type allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document. If no XmlMgr Features are present in a Request XML document, then the entire document is processed using the Default Error Handling Mode. If an XmlMgr Feature is present in a Request XML document, then the Error Handling Mode specified by that XmlMgr Feature will be used by the MXMS when executing subsequent Features up until the next XmlMgr Feature or the end of the Request XML document, whichever comes first.

### Main Functionality
 
* Specify the XML processing mode to use
	* Execute all Features and return all successes and failures
	* Execute Features until first error, then stop and return all successes and first failure
	* Execute Features until first error, then skip to next "Catch" or end
	* Stop skipping and resume execution of Features


##Parameter Notes
### XML Processing Mode
Pivotal parm: No

Parm name: ProcessingMode

Description: 

>This parm allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Execute all to end</td>
    <td>"1"</td>
	<td><p>This value will set the Error Handling Mode such that the MXMS will attempt to execute all Features that appear in the Request XML document, in the order they appear without respect to success or failure of each Feature.</p><p>The Result XML will then return all successes and all failures, in the order the execution of the Features were attempted.</p></td>
  </tr>
  <tr>
    <td>Execute until error, then stop</td>
    <td>"2"</td>
	<td><p>This value will set the Error Handling Mode such that the MXMS will attempt to execute Features that appear in the Request XML document, in the order they appear so long as those Features succeed, but will stop on the first failure and ignore the remaining Features in the Request XML.</p><p>The Result XML will then return all successes and the first failure, in the order the execution of the Features were attempted.</p></td>
  </tr>
  <tr>
    <td>Try until error, then Skip to Catch</td>
    <td>"3"</td>
	<td><p>This value will set the Error Handling Mode such that the MXMS will attempt to execute Features that appear in the Request XML document, in the order they appear so long as those Features succeed, but will stop on the first failure and begin skipping Features.</p><p>Features will be skipped until an XmlMgr Feature is encountered where parm ProcessingMode has the value "4" ("Catch error, Execute remainder") or the end of the Request XML document is reached. If a "Catch" is reached, then the MXMS will continue execution of subsequent Features with the Error Handling Mode set to "1" ("Execute all to end").</p><p>The Result XML will then return all successes and the first failure, in the order the execution of the Features were attempted.</p></td>
  </tr>
  <tr>
    <td>Catch error, Execute remainder</td>
    <td>"4"</td>
	<td>This value indicates the location of a "Catch" point as described above.</td>
  </tr>
</table>
</div>	

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=XmlMgr&os=JB&embed=true"></iframe> 