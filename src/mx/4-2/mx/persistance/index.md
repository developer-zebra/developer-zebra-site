---
title: Persistence Manager
description: The PersistMgr administers the 'Request XML' documents persistent on a device.
---

## About PersistMgr

### Overview

The PersistMgr administers the 'Request XML' Documents persistent on a device.

In the context of the MDM Tool Kit, Persistence is defined as the ability of some configuration performed by a Request XML document (which contains XML created in accordance with one or more CSP features) to persist across an Enterprise Reset or an OS Update that results in an Enterprise Reset.

On Zebra Android devices, an Enterprise Reset is the same as a Factory Reset with the exception that the /enterprise partition is preserved (whereas it would be destroyed on a Factory Reset). The purpose of an Enterprise Reset is to return the device to an Enterprise-defined default state, generally as determined by the contents of the /enterprise partition. When using the MDM Tool Kit, an MDM Agent can control the Enterprise-defined default state, and hence what will persist across an Enterprise Reset. This is done by directly controlling which MDM-deployed content is stored in the /enterprise folder, so it will survive an Enterprise Reset, and by controlling which Request XML documents are persistent.

There are several common use cases for the PersistMgr:

* Making a Request XML document Persistent

	This is the most common use case. When submitting a Request XML document to the MXMF for processing, if a PersistMgr is included, the entire Request XML document can be saved by the PersistMgr to its protected folder under /enterprise. Following an Enterprise Reset, the PersistMgr will resubmit to the MXMS all Request XML documents that were Persistent at the time the Enterprise Reset occurred. Using the PersistMgr, you assign a name and version to the Request XML document to identify it and an order to control when it is resubmitted, relative to other Request XML documents that are Persistent. In addition, you can specify whether the Request XML document should be made Persistent only if there are no errors when it was originally submitted or always, regardless of whether or not there were any errors when it was submitted.

	For example, let's assume that you download an APK file to a Persistent location, such as /enterprise/usr/mymdm. Then a Request XML document is submitted that causes the APK file to be installed and launched. If the Request XML document that installed and launched the APK file also used the PersistMgr to make itself Persistent, then that APK file will become part of the Enterprise-defined default state, and hence would persist across an Enterprise Reset by virtue of being automatically re-installed and re-launched following the Enterprise Reset.

* Making a Persistent Request XML document Non-persistent

	This use case is used when a Request XML document was previously made Persistent and you don't want it to be Persistent anymore. If an APK file was made Persistent as described in the prior use case, and you wanted to uninstall that APK file from the device, you might also want that APK file to cease being Persistent on that device. If you simply uninstalled the APK file and did nothing to make it Non-persistent, then the APK file would reappear after the next Enterprise Reset.

	PersistMgr can be directed to remove the Request XML document for a specific name that was previously directed to save to its protected folder under /enterprise.  Since that Request XML document will no longer be present after a subsequent Enterprise Reset, PersistMgr will no longer resubmit it and hence the APK file will cease to be Persistent. In such a case, you might also choose to remove the APK file from its Persistent location to complete the clean-up and return the device to its state prior to the original installation of the APK.

* Querying which Request XML documents are Persistent.

	This is a less common use case, but one which may be of special interest to MDMs. By using the PersistMgr, you can query the names, versions, and order for all Request XML document that are currently saved by PersistMgr in its protected folder under /enterprise. This can be especially useful to determine whether a particular part of a configuration has been made Persistent on a device and, if so, which version. It also can be useful for troubleshooting interactions between multiple Request XML documents that are Persistent or to get their names so they can be made Non-persistent, if needed.

* Enabling or Disabling a Persistent Request XML document

	This is a less common use case, but one which may be of interest to some MDMs. By using the PersistMgr, you can Disable a Persistent Request XML document or Enable it once it has been Disabled. When a Request XML document is made Persistent, it is initially Enabled. When a Persistent Request XML document is Enabled, it is resubmitted to MXMS automatically by PersistMgr, following an Enterprise Reset. If a Persistent Request XML document is Disabled, it will remain Persistent, but it will not be resubmitted by PersistMgr following an Enterprise Reset.

	Disabling a Persistent Request XML document may be a convenient way to temporarily make a Request XML document Non-persistent without requiring its removal and re-application. It may also be useful when troubleshooting Persistence issues by selecting Disabling and Enabling Request XML documents and Enterprise Resetting, until the cause of a conflict is discovered.

### Main Functionality

* Make a Request XML document Persistent
* Make an existing Persistent Request XML document Non-persistent
* Enable or Disable a Persistent Request XML document
* Query which Request XML documents are currently Persistent

##Parameter Notes
###Persist Action
Pivotal parm: Yes

Description: 

>This parm allows you specify whether to make a Request XML document Persistent, make a Persistent Request XML document Non-persistent, or Enable or Disable a Persistent Request XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add current XML as a persistent profile</td>
    <td>"1"</td>
	<td><p>This value will cause the Request XML document in which this PersistMgr Feature is contained to be made Persistent. You must specify a Persist As Name and a Persist As Version to identify the Request XML document. You may also specify a Persist As Order to control when the newly Persisted Request XML document will be resubmitted relative to other Persistent Request XML documents.</p><p>There can be at most one Request XML document Persistent at any one time with a particular Persist As Name. If a Request XML document is already Persistent with the specified Persist As Name, then it will be replaced by the newly Persisted Request XML document.</p></td>
  </tr>
  <tr>
    <td>Remove the specified persistent profile</td>
    <td>"2"</td>
	<td><p>This value will cause the Persistent Request XML document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be made Non-persistent.</p><p>The combination of the specified values for Persist As Name, Persist As Version and Persist As Order must match an existing Persistent Request XML document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
  <tr>
    <td>Enable the specified persistent profile</td>
    <td>"3"</td>
	<td><p>This value will cause the Persistent Request XML document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be Enabled.</p><p>The combination of the specified values for Persist As Name, Persist As Version, and Persist As Order must match an existing Persistent Request XML document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
  <tr>
    <td>Disable the specified persistent profile</td>
    <td>"4"</td>
	<td><p>This value will cause the Persistent Request XML document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be Disabled.</p><p>The combination of the specified values for Persist As Name, Persist As Version and Persist As Order must match an existing Persistent Request XML document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
</table>
</div>	

####Persist As Name
Pivotal parm: No

Parm name: PersistAsName

Description: 

>This parm allows you to specify the name to be assigned to a Request XML document when it is made Persistent and/or to identify a currently existing Persistent Request XML document that should be operated upon. When identifying a currently existing Persistent Request XML document, this value is used in conjunction with the values of Persist As Version and Persist As Order (if specified).

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Persist As Version
Pivotal parm: No

Parm name: PersistAsVersion

Description: 

>This parm allows you to specify a version number to be assigned to a Request XML document when it is made Persistent and/or to help identify a currently existing Persistent Request XML document that should be operated upon.

>When making a Request XML document Persistent, this parm will be used to assign a version number to the new Persisted Request XML document Persistent. If a Persistent Request XML document already existed with the same Persist As Name, then it will always be replaced by the new Request XML document.

>When making an existing Persistent Request XML document Non-persistent or when Enabling or Disabling an existing Persistent Request XML document, this parm will be used in conjunction with the values of Persist As Name and Persist As Order (if specified). Only if the values of specified parms match will the be operated upon.

Parm value input rules: 

* String which must contain an integer value from 1 to 10.

####Persist As Order
Pivotal parm: No

Parm name: PersistAsOrder

Description: 

>This parm allows you to specify an order in which Request XML document will be resubmitted relative to other Request XML documents that are Persistent.

>When making a Request XML document Persistent, this parm will be used to assign an order to the new Persisted Request XML document Persistent. If a Persistent Request XML document already existed with the same Persist As Name, then it will always be replaced by the new Request XML document.

>When making an existing Persistent Request XML document Non-persistent or when Enabling or Disabling an existing Persistent Request XML document, this parm will be used, if it is not empty (length greater than zero) and present in the XML, in conjunction with the values of Persist As Name and Persist As Version. Only if the values of specified parms match will the existing Persistent Request XML document be operated upon.

>**Note:** When PersistMgr resubmits Persistent Request XML documents to MXMS after an Enterprise Reset, it always submits those with a lower (numerically less) order before those with a higher (numerically greater) order. PersistMgr will use a value of 99, which is the highest supported order, to resubmit those Persistent Request XML documents. If two Persistent Request XML documents have the same effective order, PersistMgr will resubmit them in alphabetical order based on their Persist As Name values.

Parm value input rules: 

* Integer value with a minimum value of 1 and a maximum value of 99

####Persist If Error?
Settable if: Persist Action is "Add current XML as a persistent profile"

Pivotal parm: No

Parm name: PersistIfError

Description: 

>This parm allows you to specify whether the Request XML document in which this PersistMgr Feature is contained should be made Persistent even if errors occur while submitting it.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"true"</td>
	<td>This value will cause the Request XML document in which this PersistMgr Feature is contained to be made Persistent even if top-level characteristic errors are reported in the Result XML returned when the Request XML document is submitted.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value will cause the Request XML document in which this PersistMgr Feature is contained to not be made Persistent if any top-level characteristic errors are reported in the Result XML returned when the Request XML document is submitted.</td>
  </tr>
</table>
</div>	

##Example XML
### Make a Request XML document Persistent

This Request XML document below uses PersistMgr to make itself Persistent.

    :::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2">
			<parm name="AutoTime" value="true" /> 
			<characteristic type="AutoTimeDetails">
				<parm name="NTPServer" value="http://time.test.com" /> 
				<parm name="SyncInterval" value="00:30:00" /> 
			</characteristic>
		</characteristic>
		<characteristic type="PersistMgr">
			<parm name="PersistAction" value="1" /> 
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile" /> 
				<parm name="PersistAsVersion" value="1" /> 
				<parm name="PersistAsOrder" value="3"/>
				<parm name="PersistIfError" value="false" /> 
			</characteristic>
		</characteristic>
	  </wap-provisioningdoc>

### Remove a Persistent Profile

The Request XML document below uses PersistMgr to make the Request XML document that was made Persistent in the previous example, stop being Persistent.

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="2"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Enable a Persistent Profile

The Request XML document below uses PersistMgr to Enable the Request XML document that was made Persistent in a previous example.

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="3"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Disable a Persistent Profile

The Request XML document below uses PersistMgr to Disable the Request XML document that was made Persistent in a previous example.

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="4"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
##Queries

>**Note:** The following queries are supported in by the PersistMgr. However, they have not been indicated in the PersistMgr DSD. Therefore, the following queries cannot be generated with the DSD tool and will need to be created manually.

###Get the List of All of the Persistent Request XML documents

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="PersistMgr"/>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr">
			<parm name="PersistAction" value="1"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="App-profile"/>
				<parm name="PersistAsVersion" value="02"/>
				<parm name="PersistAsOrder" value="1"/>
				<parm name="PersistIfError" value="true"/>
				<parm name="ProfileMethod" value="3"/>
			</characteristic>
		</characteristic>
		<characteristic type="PersistMgr">
			<parm name="PersistAction" value="1"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="01"/>
				<parm name="PersistAsOrder" value="3"/>
				<parm name="PersistIfError" value="false"/>
				<parm name="ProfileMethod" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
>**Note:** The "ProfileMethod" is included in the Result XML Document. This parm is for a future feature and is not used in the 4.4 version of the PersistMgr.

###Get the Values for a Specified Persistent Request XML document

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr">
			<characteristic-query type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
			</characteristic-query>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr">
			<parm name="PersistAction" value="1"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="01"/>
				<parm name="PersistAsOrder" value="3"/>
				<parm name="PersistIfError" value="false"/>
				<parm name="ProfileMethod" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

>**Note:** The "ProfileMethod" is included in the Result XML Document. This parm is for a future feature and is not used in the 4.4 version of the PersistMgr.
	
###Get Persist As Version Value of a Specified Persistent Request XML document

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr">
			 <characteristic type="persist-details">
				  <parm name="PersistAsName" value="Clock-profile" /> 
				  <parm-query name="PersistAsVersion"/> 
			  </characteristic>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.4">
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="01"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

