---
title: Persistence Manager
description: The PersistMgr allows you to manage the Request XML Documents that are persistent on a device.
---

## About PersistMgr

### Overview

In the context of the MDM Tool Kit and its Feature Types, Persistence is defined as the ability of some configuration performed by a Request XML Document, containing XML created in accordance with one or more Feature Types, to persist across an Enterprise Reset or an OS Update that results in an Enterprise Reset.

On Zebra Android devices, an Enterprise Reset is the same as a Factory Reset with the exception that the /enterprise partition is preserved (whereas it would be destroyed on a Factory Reset). The purpose of an Enterprise Reset is to return the device to an Enterprise-defined default state, generally as determined by the contents of the /enterprise partition. When using the MDM Tool Kit, an MDM Agent can control the Enterprise-defined default state, and hence what will persist across an Enterprise Reset. This is done by directly controlling which MDM-deployed content is stored in the /enterprise folder, so it will survive an Enterprise Reset, and by controlling which Request XML Documents are persistent.

The PersistMgr Feature Type allows you to manage the Request XML Documents that are persistent on a device. There are several common use cases for the PersistMgr Feature Type:

* Making an Request XML Document Persistent

	This is the most common use case. When submitting an Request XML Document to the MXMF for processing, if a PersistMgr Feature Type is included, the entire Request XML Document can be saved by the PersistMgr to its protected folder under /enterprise. Following an Enterprise Reset, the PersistMgr will resubmit to the MXMS all Request XML Documents that were Persistent at the time the Enterprise Reset occurred. Using the PersistMgr Feature Type, you assign a name and version to the Request XML Document to identify it and an order to control when it is resubmitted, relative to other Request XML Documents that are Persistent. In addition, you can specify whether the Request XML Document should be made Persistent only if there are no errors when it was originally submitted or always, regardless of whether or not there were any errors when it was submitted.

	For example, let's assume that you download an APK file to a Persistent location, such as /enterprise/usr/mymdm. Then a Request XML Document is submitted that causes the APK file to be installed and launched. If the Request XML Document that installed and launched the APK file also used the PersistMgr Feature Type to make itself Persistent, then that APK file will become part of the Enterprise-defined default state, and hence would persist across an Enterprise Reset, by virtue of being automatically re-installed and re-launched following the Enterprise Reset.

* Making a Persistent Request XML Document Non-persistent

	This use case is used when a Request XML Document was previously made Persistent and you don't want it to be Persistent anymore. If an APK file was made Persistent as described in the prior use case, and you wanted to uninstall that APK file from the device, you might also want that APK file to cease being Persistent on that device. If you simply uninstalled the APK file and did nothing to make it Non-persistent, then the APK file would reappear after the next Enterprise Reset.

	By using the PersistMgr Feature Type, you can direct PersistMgr to remove the Request XML Document for a specific name that you previously directed it to save to its protected folder under /enterprise. After a subsequent Enterprise Reset, since that Request XML Document will no longer be present, PersistMgr will no longer resubmit it and hence the APK file will cease to be Persistent. In such a case, you might also choose to remove the APK file from its Persistent location to complete the clean-up and return the device to its state prior to the original installation of the APK.

* Querying which Request XML Documents are Persistent.

	This is a less common use case, but one which may be of special interest to MDMs. By using the PersistMgr Feature Type, you can query the names, versions, and order for all Request XML Document that are currently save by PersistMgr in its protected folder under /enterprise. This can be especially useful to determine whether a particular bit of configuration has been made Persistent on a device and, if so, which version. It can also be useful for troubleshooting interactions between multiple Request XML Documents that are Persistent or to get their names so they can be made Non-persistent, if needed.

* Enabling or Disabling a Persistent Request XML Document

	This is a less common use case, but one which may be of interest to some MDMs. By using the PersistMgr Feature Type, you can Disable a Persistent Request XML Document or Enable it once it has been Disabled. When a Request XML Document is made Persistent, it is initially Enabled. When a Persistent Request XML Document is Enabled, it is resubmitted to MXMS automatically by PersistMgr, following an Enterprise Reset. If a Persistent Request XML Document is Disabled, it will remain Persistent, but it will not be resubmitted by PersistMgr following an Enterprise Reset.

	Disabling a Persistent Request XML Document may be a convenient way to temporarily make a Request XML Document Non-persistent without requiring its removal and re-application. It may also be useful when troubleshooting Persistence issues by selecting Disabling and Enabling Request XML Documents and Enterprise Resetting, until the cause of a conflict is discovered.

### Main Functionality

* Make a Request XML Document Persistent
* Make an existing Persistent Request XML Document Non-persistent
* Enable or Disable a Persistent Request XML Document
* Query which Request XML Documents are currently Persistent

##Parameter Notes
###Persist Action
Pivotal parm: Yes

Description: 

>This parm allows you specify whether to make a Request XML Document Persistent, make a Persistent Request XML Document Non-persistent, or Enable or Disable a Persistent Request XML Document.

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
	<td><p>This value will cause the Request XML Document in which this PersistMgr Feature is contained to be made Persistent. You must specify a Persist As Name and a Persist As Version to identify the Request XML Document. You may also specify a Persist As Order to control when the newly Persisted Request XML Document will be resubmitted relative to other Persistent Request XML Documents.</p><p>There can be at most one Request XML Document Persistent at any one time with a particular Persist As Name. If a Request XML Document is already Persistent with the specified Persist As Name, then it will be replaced by the newly Persisted Request XML Document.</p></td>
  </tr>
  <tr>
    <td>Remove the specified persistent profile</td>
    <td>"2"</td>
	<td><p>This value will cause the Persistent Request XML Document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be made Non-persistent.</p><p>The combination of the specified values for Persist As Name, Persist As Version and Persist As Order must match an existing Persistent Request XML Document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
  <tr>
    <td>Enable the specified persistent profile</td>
    <td>"3"</td>
	<td><p>This value will cause the Persistent Request XML Document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be Enabled.</p><p>The combination of the specified values for Persist As Name, Persist As Version, and Persist As Order must match an existing Persistent Request XML Document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
  <tr>
    <td>Disable the specified persistent profile</td>
    <td>"4"</td>
	<td><p>This value will cause the Persistent Request XML Document, identified by the specified Persist As Name, Persist As Version, and optionally Persist As Order, to be Disabled.</p><p>The combination of the specified values for Persist As Name, Persist As Version and Persist As Order must match an existing Persistent Request XML Document, otherwise an error will be returned in the Result XML.</p></td>
  </tr>
</table>
</div>	

####Persist As Name
Pivotal parm: No

Parm name: PersistAsName

Description: 

>This parm allows you to specify the name to be assigned to a Request XML Document when it is made Persistent and/or to identify a currently existing Persistent Request XML Document that should be operated upon. When identifying a currently existing Persistent Request XML Document, this value is used in conjunction with the values of Persist As Version and Persist As Order (if specified).

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Persist As Version
Pivotal parm: No

Parm name: PersistAsVersion

Description: 

>This parm allows you to specify a version number to be assigned to a Request XML Document when it is made Persistent and/or to help identify a currently existing Persistent Request XML Document that should be operated upon.

>When making a Request XML Document Persistent, this parm will be used to assign a version number to the new Persisted Request XML Document Persistent. If a Persistent Request XML Document already existed with the same Persist As Name, then it will always be replaced by the new Request XML Document.

>When making an existing Persistent Request XML Document Non-persistent or when Enabling or Disabling an existing Persistent Request XML Document, this parm will be used in conjunction with the values of Persist As Name and Persist As Order (if specified). Only if the values of specified parms match will the be operated upon.

Parm value input rules: 

* String which must contain an integer value from 1 to 10.

####Persist As Order
Pivotal parm: No

Parm name: PersistAsOrder

Description: 

>This parm allows you to specify an order in which Request XML Document will be resubmitted relative to other Request XML Documents that are Persistent.

>When making a Request XML Document Persistent, this parm will be used to assign an order to the new Persisted Request XML Document Persistent. If a Persistent Request XML Document already existed with the same Persist As Name, then it will always be replaced by the new Request XML Document.

>When making an existing Persistent Request XML Document Non-persistent or when Enabling or Disabling an existing Persistent Request XML Document, this parm will be used, if it is not empty (length greater than zero) and present in the XML, in conjunction with the values of Persist As Name and Persist As Version. Only if the values of specified parms match will the existing Persistent Request XML Document be operated upon.

>**Note:** When PersistMgr resubmits Persistent Request XML Documents to MXMS after an Enterprise Reset, it always submits those with a lower (numerically less) order before those with a higher (numerically greater) order. PersistMgr will use a value of 99, which is the highest supported order, to resubmit those Persistent Request XML Documents. If two Persistent Request XML Documents have the same effective order, PersistMgr will resubmit them in alphabetical order based on their Persist As Name values.

Parm value input rules: 

* Integer value with a minimum value of 1 and a maximum value of 99

####Persist If Error?
Settable if: Persist Action is "Add current XML as a persistent profile"

Pivotal parm: No

Parm name: PersistIfError

Description: 

>This parm allows you to specify whether the Request XML Document in which this PersistMgr Feature is contained should be made Persistent even if errors occur while submitting it.

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
	<td>This value will cause the Request XML Document in which this PersistMgr Feature is contained to be made Persistent even if top-level characteristic errors are reported in the Result XML returned when the Request XML Document is submitted.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value will cause the Request XML Document in which this PersistMgr Feature is contained to not be made Persistent if any top-level characteristic errors are reported in the Result XML returned when the Request XML Document is submitted.</td>
  </tr>
</table>
</div>	

##Example XML
### Make a Request XML Document Persistent

This Request XML Document below uses PersistMgr to make itself Persistent.

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

The Request XML Document below uses PersistMgr to make the Request XML Document that was made Persistent in the previous example, stop being Persistent.

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

The Request XML Document below uses PersistMgr to Enable the Request XML Document that was made Persistent in a previous example.

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

The Request XML Document below uses PersistMgr to Disable the Request XML Document that was made Persistent in a previous example.

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

>**Note:** The following queries are supported in by the PersistMgr Feature Type. However, they have not been indicated in the PersistMgr DSD. Therefore, the following queries cannot be generated with the DSD tool and will need to be created manually.

###Get the List of All of the Persistent Request XML Documents

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

###Get the Values for a Specified Persistent Request XML Document

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
	
###Get Persist As Version Value of a Specified Persistent Request XML Document

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

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PersistMgr&os=JB&embed=true"></iframe> 