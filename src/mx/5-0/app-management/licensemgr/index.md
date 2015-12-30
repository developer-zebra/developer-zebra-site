---
title: License Manager
description: The LicenseMgr administers the set of Software Licenses present on a device.
---

## About LicenseMgr

### Overview

The LicenseMgr administers the set of Software Licenses present on a device, thereby allowing an app to control the usability of Software Components that require licensing.

Software Licensing is a mechanism supported by Zebra Android devices that allows select Software Components to require a suitable Software License to be present on a device in order for those Software Components to be useable on that device. If a Software Component does not require licensing, then the presence or absence of any Software Licenses will have no impact on that Software Component. If a Software Component requires licensing, then the absence of a suitable Software License on a device will limit the full functionality of that Software Component. If a Software Component requires licensing, then applying a suitable Software License to that device will make that Software Component usable on that device. Subsequently removing that Software License from that device will limit the full functionality of that Software Component.

Software Licenses are acquired from a Zebra Software License Server, are issued as Software License Files, and are associated to specific Software Components through the use of Licensed Feature Names. A given Software License File can be used only to enable use of its associated Licensed Feature Name. A given Software Component could have multiple capabilities, use of each of which could be controlled through separate Licensed Feature Names. Or, a given Software Component could have all of its capabilities controlled through a single Licensed Feature Name.

Software Licenses acquired from a Zebra Software License Server may be Individual Device Licenses, with each Software License File tied to a specific device serial number. In such cases, it is necessary to apply the right Software License File to each matching device. Software Licenses acquired from a Zebra Software License Server may also be Enterprise Licenses, issued to all devices owned by a customer instead of to specifically identified devices. In such cases, the same Software License File can be applied to each device owned by that customer.

### Main Functionality

* Apply or remove a Software License from a device

##Parameter Notes
###Specify license action to perform
Pivotal parm: Yes

Description: 

>This parm allows you to specify whether a Software License should be applied or removed from the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This value (or the absence of this parm from the XML) will not cause any changes to the set of Software Licenses that are present on the device.</td>
  </tr>
  <tr>
    <td>Apply</td>
    <td>"apply"</td>
	<td>This value will cause a Software License to be applied to the device. Applying a suitable Software License onto a device for a Software Component that requires licensing will make the controlled capability of the associated Software Component usable on that device.</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>"remove"</td>
	<td><p>This value will cause a Software License to be removed from the device. Removing a required Software License from a device for a Software Component that requires licensing make the controlled capability of the associated Software Component unusable on that device.</p><p><b>Note:</b> This will only delete the licence from the private store. The actual license file will still exist on the device and will need to be deleted.</p></td>
  </tr>
</table>
</div>	

####Specify verification method to use
Settable if: The "Specify license action to perform" is "Apply"

Pivotal parm: Yes

Description: 

>This parm allows you to specify whether and how the Licensed Feature Name contained within the specified Software License File should be verified.

>**Note:** Verification of the Licensed Feature Name contained within a Software License File is highly recommended since it can help prevent mistakes. When a Software License File is acquired from a Zebra Software License Server, it must be stored in a file and then used via the LicenseMgr. The file name to which a Software License File is stored may or may not reflect the Licensed Feature whose use will be enabled by that Software License File. If you intend to apply a Software License for a given Licensed Feature and mistakenly use the wrong Software License File, no error will result so long as the Software License File is contains a valid Software License. But if the Licensed Feature Name contained with the Software License File is not what you intended, then applying that Software License will not result in enabling the use of the Software Component that you intended. By specifying the Licensed Feature Name and indicating that it should be verified, you can catch such a condition. In the event of a mismatch, an error will be returned in the Result XML.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not verify feature name</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any verification of the Licensed Feature Name contained within the specified Software License File.</td>
  </tr>
  <tr>
    <td>Verify against a standard feature name</td>
    <td>"1"</td>
	<td>This value will cause the Licensed Feature Name contained within the specified Software License File to be verified as matching a specified Standard Licensed Feature Name.</td>
  </tr>
  <tr>
    <td>Verify against a custom feature name</td>
    <td>"2"</td>
	<td>This value will cause the Licensed Feature Name contained within the specified Software License File to be verified as matching a specified Custom Licensed Feature Name.</td>
  </tr>
</table>
</div>	

#####**Specify standard feature name**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify verification method to use" is "Verify against a standard feature name"

Pivotal parm: No

Parm name: VerifyStandardFeatureName

Description: 

>This parm allows you to specify the Standard Licensed Feature Name against which you want to verify the Software License File.

>**Note:** At present, there is only one defined Standard Licensed Feature Name, for SimulScan. Selecting it will avoid the need to enter the exact value of the Licensed Feature Name for SimulScan. In the future, as new Standard Licensed Feature Names are added, the list will be expanded to make those Licensed Feature Names easier to verify. If you acquire a Software License File that is associated with some other Licensed Feature Name, use "Verify against a custom feature name" instead so you can enter the specific Licensed Feature Name for the Software License File you acquired.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>SimulScan OCR/OMR</td>
    <td>"SIMULDC1_0_0"</td>
	<td>This value will cause Licensed Feature Name contained within the Software License File to be verified as matching the Standard Licensed Feature Name of the SimulScan Software Component.</td>
  </tr>
</table>
</div>	

#####**Enter custom feature name**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify verification method to use" is "Verify against a custom feature name"

Pivotal parm: No

Parm name: VerifyCustomFeatureName

Description: 

>This parm allows you to enter a Custom Licensed Feature Name, which must match exactly the Licensed Feature Name contained within the Software License File acquired from Zebra Software License Server.

>**Note:** You must use this option to verify any Licensed Feature Name that is not contained within the list of Standard Licensed Feature Names. Be careful to enter the exact Licensed Feature Name as acquired from the Zebra Software License Server with identical case and without any additional whitespace or other characters.

Parm value input rules: 

* String with a valid Custom Licensed Feature Name that was contained within a Software License File acquired from the Zebra Software License Server.

####Specify licensing method
Settable if: The "Specify license action to perform" is "Apply"

Pivotal parm: Yes

Description: 

>This parm allows you to specify the method that will be used to supply the Software License.

>**Note:** Regardless of the method used to supply the Software License File (Embed or Reference), the supplied Software License File must contain valid contents that were acquired from the Zebra Software License Server. An attempt to apply a Software License File that contains invalid contents will result in an error in the Result XML. In addition, if the Software License File was an Individual Device License, then the device serial number embedded in the Software License File must match the serial number of the device onto which it is being applied. An attempt to apply a Software License File that contains an Individual Device License whose serial number does not match the serial number of the device to which it is being applied will result in an error in the Result XML

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Embed the license blob from the license file into the XML</td>
    <td>"embed"</td>
	<td><p>This value indicates that the contents of the Software License File will be embedded (Base64 encoded) into the Request XML.</p><p>To use this option, the contents of the Software License File acquired from the Zebra Software License Server, which are already Base64 encoded, must be Base64 encoded a second time by the MDM Agent before it is added into this Request XML document.</p><p><b>Note:</b> This option has the advantage of making the Request XML self-contained, although it does make the total data size somewhat larger due to the Base64 encoding the Software License File contents.</p></td>
  </tr>
  <tr>
    <td>Reference a license file already on the mobile device</td>
    <td>"reference"</td>
	<td><p>This value indicates that a Software License File, which must be present in the device file system, will be referenced by its path and file name.</p><b>Note:</b> This option requires that the Software License File be transferred to the device file system before the Request XML is submitted and requires that the exact path and file name of the Software License File in the device file system be specified. Also, if the license should be applied after an Enterprise Reset, the license file should be stored in a persistent location so that it is not deleted after the reset.</p></td>
  </tr>
</table>
</div>	

#####**License file**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify licensing method" is "Embed the license blob from the license file into the XML"

Pivotal parm: No

Parm name: LicenseBlob

Description: 

>This parm allows you to specify the Software License File whose contents should be embedded in the XML. The contents will be Base64 encoded, and hence will result in increasing the size of the contents by 33%. The Software License encoded within the Request XML will be extracted and applied to the device.

Parm value input rules: 

* String with a minimum size of 2 characters (minimum required to hold 1 byte of content)
* The data must be Base64 encoded (4 characters hold 3 bytes of content)

#####**Specify file name and path to the license file**
Settable if: The "Specify license action to perform" is "Apply" *AND* "Specify licensing method" is "Reference a license file already on the mobile device"

Pivotal parm: No

Parm name: LicensePathAndFileName

Description: 

>This parm allows you to specify the path and file name of a Software License File, which must exist in the device file system. The Software License File must contain the exact contents acquired from the Zebra Software License Server. The Software License contained within the Software License File will be applied to the device.

Parm value input rules: 

* String with a minimum size of 1 character
* Must be a valid path and file name identifying a valid Software License File that exists in the device file system

####Specify selection method to use
Settable if: The "Specify license action to perform" is "Remove"

Pivotal parm: Yes

Description: 

>This parm allows you to specify the method that will be used to specify the Licensed Feature Name that identifies the Software License to be removed from the device.

>**Note:** To be certain that the right Software License is removed from the device, be sure to specify the exact same Licensed Feature Name that was contained within the Software License File when the Software License was applied to the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Select using a standard feature name</td>
    <td>"1"</td>
	<td>This value indicates that a Standard Licensed Feature Name will be specified to identify the Software License to be removed from the device.</td>
  </tr>
  <tr>
    <td>Select using a custom feature name</td>
    <td>"2"</td>
	<td>This value indicates that a Custom Licensed Feature Name will be specified to identify the Software License to be removed from the device.</td>
  </tr>
</table>
</div>	

#####**Specify standard feature name**
Settable if: The "Specify license action to perform" is "Remove" *AND* "Specify selection method to use" is "Select using a standard feature name"

Pivotal parm: No

Parm name: SelectStandardFeatureName

Description: 

>This parm allows you to specify the desired Standard Licensed Feature Name that identifies the Software License to be removed from the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>SimulScan OCR/OMR</td>
    <td>"SIMULDC1_0_0"</td>
	<td>This value will cause the Software License for the SimulScan Software Component to be removed from the device.</td>
  </tr>
</table>
</div>	

#####**Enter custom feature name**
Settable if: The "Specify license action to perform" is "Remove" *AND* "Specify selection method to use" is "Select using a custom feature name"

Pivotal parm: No

Parm name: SelectCustomFeatureName

Description: 

>This parm allows you to specify a Custom Licensed Feature Name that identifies the Software License to be removed from the device.

>**Note:** Be careful to enter the exact Licensed Feature Name as acquired from the Zebra Software License Server with identical case and without any additional whitespace or other characters.

Parm value input rules: 

* String with a valid Custom Licensed Feature Name that was contained within a Software License File acquired from the Zebra Software License Server.

## Queries

###Get All Applied Software License Info

####Request XML

		:::XML
		<wap-provisioningdoc>
			<characteristic-query type="LicenseMgr"/>
		</wap-provisioningdoc>

####Success Result XML
		
		:::XML
		<wap-provisioningdoc>
			<characteristic type="LicenseMgr" version="4.3" >
				<characteristic type="ExistingLicense">
					<parm name="SelectCustomFeatureName" value="SIMULDC1_0_0"/>
					<parm name="CompanyName" value="CompanyName1"/>
					<parm name="LicenseType" value="serial"/>
				</characteristic>
			</characteristic>
		</wap-provisioningdoc>

>**Note:** For the above query Request XML requests information on all Software Licenses that are applied on the device. The Success Result XML shown presupposes that only a single Software License for SimulScan was previously applied to the device. If additional Software Licenses were applied, then additional information would be returned in the Success Result XML. The same Request XML submitted on a device with no Software Licenses applied would return the following Failure Result XML to indicate that there are no Software Licenses applied and hence none that can be queried:
		
####Failure Result XML
		
		:::XML
		<wap-provisioningdoc>
			<characteristic type="LicenseMgr" version="4.3" >
				<characteristic-error type="ExistingLicense" desc="Feature is not licensed" />
			</characteristic>
		</wap-provisioningdoc>
		
###Get Specific Software License Info

####Request XML
		
		:::XML
		<wap-provisioningdoc>
			<characteristic type="LicenseMgr" >
				<characteristic-query type="ExistingLicense">
					 <parm name="SelectStandardFeatureName" value="SIMULDC1_0_0"/>
				</characteristic-query>
			</characteristic>
		</wap-provisioningdoc>

>**Note:** For the above query Request XML, we are explicitly requesting to query just the Software License for the SimulScan Software Component. If that Software License is applied, the Success Result XML will be the same as that shown above for Get All Applied Software Licenses since both queries return only that one Software License. If that Software License is not applied, the Failure Result XML will be the same as that shown above for Get All Applied Software Licenses since both queries indicate that no Software License can be queried. If additional Software Licenses were applied, then this query would return the same Success Result XML since the query requested information about only one specific Software License. In such a case the Success Result XML would be different than that shown above for Get All Applied Software Licenses.

