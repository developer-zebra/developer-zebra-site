---
title: MXMS XML Overview
layout: guide.html
product: MDM Toolkit
productversion: '2.0'
---

## XML Schema

MXMS utilizes XML that conforms to the PROV DTD and more specifically to the Microsoft-defined dialect, which is defined by the MSPROV DTD. PROV DTD is the XML schema used by the OMA CP (Open Mobile Alliance Client Provisioning) Standard. Use of this XML schema means that XML that can be consumed by MXMS will be familiar to MDM Vendors that are already familiar with OMA CP and/or the PROV DTD. Use of this XML schema also means that MXMS can be more easily leveraged by existing MDMs that are based on or can already leverage OMA CP.

## XML Elements

### Characteristics

A characteristic is an element that appears in an XML document or DSD and that is used to define hierarchical organization of parms and characteristics. 

Top-Level Characteristics (TLCs) must appear at the outermost level of a document (XML or DSD). Every XML document must contain at least one TLC and every DSD must contain **exactly one** TLC. There is a one to one mapping between TLCs and DSDs/CSPs. The type of a TLC specified in the XML or DSD exactly matches the CSP name. A Request TLC appears in a Request XML Document to specify one or more Set Configuration and/or Perform Action Behaviors. A Result TLC provides information about the success or failure of the behavior(s) requested by the corresponding Request TLC.

Sub-Group Characteristic (SGCs) may appear in TLCs/SGCs. A TLC may have any number (including zero) of SGCs and an SGC may have any number (including zero) of SGCs. A Request SGC provides information about a behavior to be performed by its enclosing Result TLC. A Result SGC provides information about the behavior performed for its enclosing Result SGC.


### Parms

A parm is an element that appears in a Request XML document or a Result XML document and that is used to hold a single data item. Every parm must have a name that is unique within a given TLC (even across different SGCs within that TLC). A given parm can appear only once within a given TLC. It may appear more than once within an XML document as long as that XML document contains multiple TLCs and that parm appears only once within each TLC.

A parm is the desired configuration and a desired action selector or action parameter value when it is a part of a Request XML document for a Set Configuration behavior. 

If the processing of a parm in a Request XML document by a CSP is successful, then the Result XML document will contain a Parm element, which typically will have the same value. The Parm element may have a different value in the Result XML document if the CSP determined that the value requested was not supported but was "close enough" to a supported value that substituting the closest supported value was reasonable. In such a case, the value actually used will be returned in the parm in the Result XML document instead of the value requested.


## Request and Result XML Documents

To request the MXMS to perform some behavior(s), a Request XML must be created and submitted to MXMS by a requesting application. A Request XML Document consists of one or more TLCs that define the behavior(s) requested by that Request XML Document. The MXMS breaks the Request XML Document into its component Request Top Level Characteristic (TLC) and delivers each Request TLC, in the order it appears in the Request XML Document, to a corresponding CSP.

Request TLCs in Request XML Documents can be used to perform three primary types of behaviors:

1. Set Configuration - Almost every CSP supports a Request TLC that can be used to set or modify the configuration of the subsystem that is managed by that CSP
2. Perform Action - Some CSPs support Request TLCs that can be used to perform discrete actions upon the subsystem managed by that CSP. This is opposed to behaviors that involve changing the configuration of the subsystem. For example, an action that could be performed through a CSP is rebooting the device. 

A CSP processes a Request TLC and returns a Result TLC or TLC Error based on the results of processing that TLC. The MXMS aggregates Request TLCs and TLC Errors into a Result XML document in the same order as the corresponding Request TLCs in the Request XML document. The MXMS returns the Result XML document to the requesting application to communicate the results of the attempt to perform the behavior(s) requested in the Request XML Document.

A characteristic (either a TLC or SGC) in a Request XML document will result in one of the following in the Result XML document:

* The request characteristic in the Request XML document was performed successfully by the corresponding CSP. This means that the characteristic in the Result XML document will be in the same format as the characteristic in the Request XML document.
* The request characteristic was rejected by the corresponding CSP. This means that this characteristic will be a Characteristic-Error in the Result XML document.
* The request characteristic was ignored by MXMS and not sent to the corresponding CSP. This means that neither a result characteristic nor a Characteristic-Error will appear in the corresponding location in the Result XML.

A parm in a Request XML document will result in one of the following in the Result XML Document:

* The request parm was accepted by the corresponding CSP, in which case, the value of that parm will be used by the CSP when performing the requested behavior. This means that the parm value in the Result XML document will be identical to the corresponding parm value in the Request XML, which indicates that the value was used successfully.
* The request parm can be rejected by the corresponding CSP, in which case the parm value will not be used to perform a requested behavior. The CSP might consider this parm value to be critical and will return a Parm-Error element in the corresponding location in the Result XML document. Otherwise, the CSP might consider the parm value to be non-critical (i.e. merely a "suggestion") and will use a different value to perform the behavior. The CSP will then return the value that was actually used in the corresponding location of the Result XML document instead of the value specified in the Request XML document.

## DSDs and Conditional Elements

A primary purpose of a DSD is to provide the information required to present a viable Data-Driven UI to create XML that can be consumed by the CSP corresponding to that DSD.

In many cases, a CSP will support multiple use-cases, sub-use-cases, modes, options, or functions. In order to effectively describe such cases, the XML sent to a CSP may need to be conditional in nature. For example, the presence of one parm or characteristic may be optional depending on the value selected or entered for a prior parm. To reliably generate such conditional XML, the Data-Driven UI must reflect the conditional nature of the XML and hence the DSD can utilize the PresentIf attribute.

A PresentIf attribute that is specified for a Characteristic or Parm element includes a Boolean expression that must be evaluated to determine whether that characteristic or parm should be "presented" within the Data-Driven UI. If a characteristic or parm is not presented, then no UI will be displayed based on those elements and they will not be present in the XML that is generated. This enables flexibility in the DSD, permitting definition of complex relationships.

### Pivotal Parms

Use the PresentIf attribute in Characteristic or Parm elements within a DSD causes certain Parm elements to become "Pivotal" with respect to the UI that will be displayed and the XML that will be generated.

A Pivotal Parm is simply a parm where the value selected or entered determines which SGCs and/or parms will be presented by the UI and included in the generated XML. 

When using Data-Driven UI to generate XML, the Data-Driven UI will enforce the PresentIf attributes defined in the DSD and the generated XML will automatically be compliant to the DSD and therefore will be consumable by the corresponding CSP.

But when generating XML programmatically, it can be of critical importance to know about Pivotal Parms since failure to properly account for them can lead to the generation of XML does not conform to the DSD and hence cannot be successfully consumed by the corresponding CSP. In many cases, the existence of Pivotal Parms will indicate that the CSP can be used to accomplish multiple logical use cases, where each use case is achieved by taking a given path through the DSD by making certain selections for one or more Pivotal Parms.

## CSPs and Enterprise and Factory Resets

Configuration performed by all CSPs is stored such that it is intentionally lost on every Enterprise Reset and Factory Reset. This means that the CSPs and the subsystems they manage intentionally do not store configuration in a manner that would cause it to be persistent across an Enterprise or Factory Reset. By definition, it is NOT possible to make any configuration persistent across Factory Reset since Factory Reset must always return a device to its Factory Default state and hence must discard all configuration that has been applied.

However, it is possible to make Set Configuration behaviors effectively persistent across an Enterprise Reset by using the PersistMgr. This is done by appending a PersistMgr TLC to the Request XML document. The PersistMgr CSP will then store the entire Request XML document in a special secure location that will survive an Enterprise Reset. Following Enterprise Reset, the PersistMgr CSP will automatically resubmit all saved Request XML documents, thus effectively restoring their effects. 

A PersistMgr TLC can specify whether the containing Request XML document should always be saved or only if it was initially applied without TLC errors. Each Request XML document to be made persistent using the PersistMgr CSP must be given a unique name to identify it, which can then be used to later enumerate and/or remove saved Request XML documents. A PersistMgr TLC can specify the order in which various Request XML Documents should be reapplied following an Enterprise Reset. More information about the PersistMgr can be found in the CSP reference section.
