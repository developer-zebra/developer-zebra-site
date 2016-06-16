# XML Responses

When submitting a Request XML document, knowing what happened will require at least some minimal parsing of the Result XML document. The required parsing can be simplified by taking advantage of the following aspects of MXMS XML: 

* All three types of behaviors (Set Configuration, Perform Action, and Query Configuration) have the same format for their Result XML documents
* The presence of TLC errors and the (absence of) XML equivalence can be used to quickly separate successes from failures
* If an operation was performed, but not exactly as requested, Parm Value Extraction can be used to compare requested and resulting values to determine any deviation
* When an XML query is issued, Parm Value Extraction can be used to extract key values that were the primary purpose of the XML query 

This document will describe how to handle response from MXMS:

* Success Response
* Error Responses

## Parm Value Extraction

A simple and quite useful method for simplifying the extraction of relevant information from an XML Result document is Parm Value Extraction. It is simply the process of searching an XML document for a parm with a given name and extracting the value associated with it. Parm Value Extraction is most commonly applied to Non-Pivotal Parms since they are the mostly likely to contain useful information. This is because Pivotal Parms are typically "canned" as part of an XML Template used to create an Request XML document and are simply replicated into the Result XML document. It is an important aspect of the XML used by MXMS that a given parm can only appear once within a given TLC since this can make it much easier to extract of the value of a given named parm from within a Result XML document.

## Success Response

### XML Equivalence

Two XML documents are equivalent if they represent the same data even if they do not have identical text. Two XML documents are equivalent if they differ only in white space, for example:

	:::XML
	<characteristic type="Wi-Fi" version="2.1" >
	
vs.

	:::XML
	<characteristic type="Wi-Fi"                       version="2.1" >

Two XML documents may be equivalent if they differ only in order and order is not relevant, for example:

	:::XML
	<characteristic  version="2.1" type="Wi-Fi" >
	
vs.

	:::XML
	<characteristic  type="Wi-Fi" version="2.1" >	

Equivalence is a key concept when taken together with the reflexive nature of Set Configuration and Perform Action behaviors. "Total Success" is indicated by Request and Result XML documents being equivalent since it means that what was done was exactly what was requested.

Therefore, the following XML Documents demonstrate the Result XML Document that would be returned after successfully setting the device's clock.

Request XML Document Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
            <parm name="Date" value="2014-01-19"/>
            <parm name="Time" value="17:00:00"/>
        </characteristic>
    </wap-provisioningdoc>

Result XML Document Returned

	:::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="false"/>
            <parm name="TimeZone" value="GMT-5"/>
            <parm name="Date" value="2014-01-19"/>
            <parm name="Time" value="17:00:00"/>
        </characteristic>
    </wap-provisioningdoc>


## Error Response

If a Result XML document is equivalent to the corresponding Request XML document, then it indicates a "total success" and that all of the behavior(s) that were requested were performed exactly as specified. However, if a Result XML Document contains any TLC errors, then the behaviors requested by the TLCs in the corresponding Request XML document were not performed at all. 

To find out which behaviors were not performed and why, the TLC errors in the Result XML document will need to be examined. 

If a Result XML document contains no TLC errors but is not equivalent to the corresponding Request XML document, then some of the behaviors requested by the corresponding Request XML document were either not performed or were performed but not exactly as specified. 

To find out which behaviors were not executed, examine the SGC errors or Parm-Errors, which are described below, in the Result XML document. To find out which behaviors were executed, but not exactly as specified, examine the values of parms in the Result XML document and see how they differ from the requested values in the Request XML document.

### Characteristic-Error

A Characteristic-Error is an element that appears in a Result XML document that is used to indicate a failure when processing a corresponding characteristic in a Request XML document. 

#### Top-Level Characteristic-Error

Top-Level Characteristic-Errors (TLC Errors) are those that appear at the outermost level of a Result XML document. A Result XML document may contain zero or more TLC errors. If a Result XML document contains a TLC error, it indicates that the corresponding characteristic in the Request XML document was completely rejected. This means that none of the behaviors requested by that TLC were performed by the CSP. 

##### **Framework Error**
The MXMS typically passes the submitted XML directly to the CSP, but may return errors if a CSP is not found or if the XML is malformed in general. 

The following XML Documents demonstrate what a Result XML Document with a Framework Error would look like:

Request XML Document Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="SomeCSP" version="4.3">
            <parm name="SomeParm" value="false"/>
        </characteristic>
    </wap-provisioningdoc>

Result XML Document Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic-error type="SomeCSP" version="4.3" desc=" has not registered with MX Framework yet">
            <parm name="SomeParm" value="false"/>
        </characteristic-error>
    </wap-provisioningdoc>
	
##### **CSP Error**
A CSP is considered a 'top-level characteristic' within the context of the XML. An error indicated at this level is considered a major error by the CSP and typically means that none of the parms were processed.

The following XML Documents demonstrate what a Result XML Document with a CSP Error would look like:

Request XML Document Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="100" >
            <parm name="AutoTime" value="true"/>
        </characteristic>
    </wap-provisioningdoc>

Result XML Document Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic-error type="Clock" version="100" desc="The DSD version is higher than current supported DSD 4.3">
            <parm name="AutoTime" value="true"/>
        </characteristic-error>
    </wap-provisioningdoc>

####Sub-Group Characteristic-Error

Sub-Group Characteristic-Errors (SGC Errors) are those that appear within TLCs/SGCs. If a TLC or SGC in a Result XML document contains an SGC error, it indicates that the Behavior requested by the corresponding SGC was rejected. This means a that portion of the behavior requested by the enclosing TLC was not performed by the CSP. Any behaviors requested outside of the SGC may have been applied even though the SGC contained an error.

>Note: The [XmlMgr Feature Type](../guide/csp/xml) enables you to control how MXMS will handle top-level characteristic errors. Consult the XML CSP reference in this guide for more information.

The following XML Documents demonstrate what a Result XML Document with an SGC Error would look like:

Request XML Document Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3" >
            <parm name="AutoTime" value="true"/>
            <characteristic type="AutoTimeDetails">
                <parm name="somParm" value="00:30:00"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

Result XML Document Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="AutoTime" value="true"/>
            <characteristic-error type="AutoTimeDetails" desc="unsupported">
                <parm-error name="someParm" value="00:30:00" desc="Param type is not supported"/>
            </characteristic-error>
        </characteristic>
    </wap-provisioningdoc>
	
### Characteristic-Query-Error

A Characteristic-Query-Error is an element that appears in a Result XML document that is used to indicate that a failure occurred when processing a corresponding Characteristic-Query element in a Request XML document. This could occur because the TLC or SGC being queried does not support Characteristic-Query. This could also occur because the SGC being queried requires a query index and none was supplied or the query index parm supplied did not have a value that selected a valid configuration to query.

### Parm-Error

A Parm-Error is an element that appears in a Result XML document that is used to indicate a failure when processing a corresponding parm in a Request XML document.

If the processing of a parm in a Request XML document by a CSP is unsuccessful, then the Result XML document will contain a Parm-Error element instead of a Parm element. The Parm-Error element will contain the same name and value as the failed Parm element plus a description explaining the reason for the failure. If a Result XML document contains a Parm-Error element, then it indicates that the behavior requested by the Request XML document could not be completely achieved.

The following XML Documents demonstrate what a Result XML Document with an Parm-Error would look like:

Request XML Document Submitted

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm name="SomeParm" value="false"/>
        </characteristic>
    </wap-provisioningdoc>

Result XML Document Returned

    :::xml
    <wap-provisioningdoc>
        <characteristic type="Clock" version="4.3">
            <parm-error name="SomeParm" value="false" desc="Param type is not supported"/>
        </characteristic>
    </wap-provisioningdoc>

### Parm-Query-Error

A Parm-Query-Error is an element that appears in a Result XML document that is used to indicate that a failure occurred when processing a corresponding Parm-Query element in a Request XML document. 

If the processing of a Parm-Query in a Request XML document by a CSP is unsuccessful, then the Result XML document will contain a Parm-Query-Error element instead of a Parm element. The Parm-Query-Error element will contain the same name as the failed Parm-Query element plus a description explaining the reason for the failure.
