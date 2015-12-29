---
title: GPRS Manager
description: The GprsMgr administers Access Point Name (APN) settings for the GPRS network used by the device.
---
## About GprsMgr

### Overview

The GprsMgr administers Access Point Name (APN) settings for the GPRS network used by the device.

Devices equipped with Wireless Wide Area Networks (WWAN or Cellular Data) modems can support one or more of the following WWAN technology types:

* GPRS (General Packet Radio Service) is a modulation method used to enable data communications over GSM (Global System for Mobile Communications) cellular networks. For the purposes of this discussion, the key characteristic of GPRS networks is the presence of a SIM (Subscriber Identity Module) Card to securely store the mobile subscriber identity (IMSI) number and its related key, which are used to identify and authenticate subscribers. Inserting a SIM Card allows basic cellular service (including voice and text messaging over a GSM network) to be established. However, cellular data service may require additional configuration that cannot be performed based solely on the information provided by the SIM Card.
* CDMA (Code Division Multiple Access) is a modulation method used in many mobile phone standards such as cdmaOne, CDMA2000 (the 3G evolution of cdmaOne), and WCDMA. For the purposes of this discussion, the key characteristic of CDMA networks is the lack of a SIM Card. Lacking a SIM Card often meant that cellular service has to be activated through a manual process between the device user and the cellular provider. During this activation process, all services (voice, text messaging, and cellular data) were generally configured.
* LTE (Long-Term Evolution or 4G) is a modulation method that is a lends itself to the extension of both CDMA and GPRS into 4G. For the purposes of this discussion, the key characteristic of LTE networks is the presence of a SIM (Subscriber Identity Module) Card to securely store the mobile subscriber identity (IMSI) number and its related key, which are used to identify and authenticate subscribers. In addition, LTE SIM Cards contain additional information that generally allow cellular data service to be activated with the additional configuration that was often required for GPRS.

As noted above, devices that are operating on GSM networks, and that need to use GPRS cellular data over those networks, may need to perform additional configuration by providing information that cannot be obtained from the SIM Card. This required configuration is usually referred to as the APN (Access Point Name), although this is a bit of a misnomer since the configuration actually requires more than just the name of the Access Point. An APN identifies the packet data network (PDN) that a mobile data user wants to communicate with and may also define the type of service available. Configuring use of an APN by a device generally requires configuring the actual name of the Access Point as well as username and password information required to connect via that Access Point.

A GPRS-equipped Android device must generally have a suitable APN defined for each GPRS cellular data network that will be used. If only one GPRS cellular data network will be used, then only one APN will need to be defined. But if multiple GPRS cellular data network will need to be used (e.g. to support roaming amongst multiple geographical locations), then multiple APNs would need to be defined.

The GprsMgr allows you to Add or Remove APNs from the set of defined APNs and set which APN is the default APN to which the device will automatically connect.

### Main Functionality

* Add/Update or Remove APN
* Remove all APNs
* Set Default APN


##Parameter Notes
### APN Action
Pivotal parm: Yes

Description: 

>This parm allows you to choose the APN action that should be performed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add/replace named APN</td>
    <td>"1"</td>
	<td>This value will cause an APN to be added or replaced.</td>
  </tr>
  <tr>
    <td>Remove existing named APN</td>
    <td>"2"</td>
	<td>This value will cause a specified APN to be removed.</td>
  </tr>
  <tr>
    <td>Remove all existing APNs</td>
    <td>"3"</td>
	<td>This value will cause all existing APNs to be removed.</td>
  </tr>
</table>
</div>	

####GPRS Carrier 
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: Yes

Description: 

>This parm allows you to specify whether the APN to be defined should be a standard pre-defined APN of a well-known GPRS carrier or if the APN should be configured by specifying custom information.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>ATT</td>
    <td>"1"</td>
	<td><p>This value indicates that AT&T is the GPRS carrier and that the standard public APN used by AT&T should be used.</p><p><b>Note:</b> If you want to use an AT&T APN other than the standard AT&T public APN, then you should choose "Custom" and supply the values for the desired AT&T APN that must be obtained from AT&T.</p></td>
  </tr>
  <tr>
    <td>T-Mobile</td>
    <td>"2"</td>
	<td><p>This value indicates that T-Mobile is the GPRS carrier and that the standard public APN used by T-Mobile should be used.</p><p><b>Note:</b> If you want to use a T-Mobile APN other than the standard T-Mobile public APN, then you should choose "Custom" and supply the values for the desired T-Mobile APN that must be obtained from T-Mobile.</p></td>
  </tr>
  <tr>
    <td>Custom</td>
    <td>"0"</td>
	<td>This value indicates that the APN is not one of the pre-defined carrier APNs and should be configured by providing custom values provided by the GPRS carrier.
</td>
  </tr>
</table>
</div>	

####APN Name
Settable if: The APN Action is "Add/replace named APN" or "Remove existing named APN"

Pivotal parm: No

Parm name: ApnName

Description: 

>This parm allows you to specify the name by which the APN will be known in the device. Each APN defined in a device must have a unique name. Once an APN with a given name has been added, that name can be used to Remove that APN definition from the device or to Replace the definition of that APN with a new definition.

>**Note:** This parm does not specify the Access Point Name on the network, it only specifies the name by which the APN will be known and referred to locally on the device. The actual name of the APN on the network is specified in the parm described below under Access Point.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Replace If Exists?
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: No

Parm name: ReplaceIfExisting

Description: 

>This parm allows you to specify whether an APN of the same name that is already defined on the device should be replaced by the APN being added, if an APN with the same name already exists on the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value will cause an APN of the specified name to be replaced if it already is defined. This means that the existing APN will be Removed and replaced with the new APN.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"0"</td>
	<td>This value will not cause an APN to be replaced if it exists already. This means that if an existing APN has the same name as the new APN, the new APN will not be added and an error will be returned in the Result XML.</td>
  </tr>
</table>
</div>	

####Make Default APN?
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: No

Parm name: MakeDefault

Description: 

>This parm allows you to specify whether the new APN being added should be made the new default (preferred) APN. When connecting automatically, the system will connect to the default APN if possible, before considering other APNs.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value will cause the new APN to be set as the new default APN.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"0"</td>
	<td>This value will not cause any change to the current default APN.</td>
  </tr>
</table>
</div>	

####Access Point
Settable if: The APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

Pivotal parm: No

Parm name: CustomAccessPoint

Description: 

>This parm allows you to specify the name by which the desired APN is known on the network. The value is generally obtained from the GPRS carrier that provides the APN (e.g. "wap.cingular" is the name of an APN that is commonly used by AT&T). This is only relevant when the value chosen for GPRS Carrier was "Custom" since otherwise the APN values for the pre-defined APN will be provided automatically based on the selected GPRS carrier.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####User Name
Settable if: The APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

Pivotal parm: No

Parm name: CustomUserName

Description: 

>This parm value allows you to specify the User Name that will be used to authenticate to the APN being added.  The value is generally obtained from the GPRS carrier that provides the APN (e.g. "WAP.CINGULARGPRS.COM" is the User Name used to authenticate to an APN that is commonly used by AT&T). This is only relevant when the value chosen for GPRS Carrier was "Custom" since otherwise the APN values for the pre-defined APN will be provided automatically based on the selected GPRS carrier.

>**Note:** If an empty (length of 0) value is specified, then no User Name will be used. This should only generally only be done if the GPRS carrier indicates that authentication using a User Name is not required for a given APN.

Parm value input rules: 

* String with a minimum size of 0 characters and a maximum size of 255 characters

####Password
Settable if: The APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

Pivotal parm: No

Parm name: CustomPassword

Description: 

>This parm value allows you to specify the Password that will be used to authenticate to the APN being added. The value is generally obtained from the GPRS carrier that provides the APN (e.g. "CINGULAR1" is the User Name used to authenticate to an APN that is commonly used by AT&T). This is only relevant when the value chosen for GPRS Carrier was "Custom" since otherwise the APN values for the pre-defined APN will be provided automatically based on the selected GPRS carrier.

>**Note:** If an empty (length of 0) value is specified, then no Password will be used. This should only generally only be done if the GPRS carrier indicates that authentication using a password is not required for a given APN.

Parm value input rules: 

* String with a minimum size of 0 characters and a maximum size of 255 characters

##Example XML
###Add AT&T GPRS APN

	:::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
		<parm name="GprsAction" value="1"/>
		<parm name="GprsCarrier" value="1"/>
			<characteristic type="gprs-details">
				<parm name="ApnName" value="myATT"/>
				<parm name="ReplaceIfExisting" value="1"/>
				<parm name="MakeDefault" value="1"/>
			</characteristic>
			<characteristic type="att-details">
				<parm name="AttAccessPoint" value="wap.cingular"/>
				<parm name="AttUserName" value="WAP@CINGULARGPRS.COM"/>
				<parm name="AttPassword" value="CINGULAR1"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Add T-Mobile GPRS APN

	:::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
		<parm name="GprsAction" value="1"/>
		<parm name="GprsCarrier" value="2"/>
			<characteristic type="gprs-details">
				<parm name="ApnName" value="myTMobile"/>
				<parm name="ReplaceIfExisting" value="0"/>
				<parm name="MakeDefault" value="1"/>
			</characteristic>
			<characteristic type="tmobile-details">
				<parm name="TmobileAccessPoint" value="internet3.voicestream.com"/>
				<parm name="TmobileUserName" value=""/>
				<parm name="TmobilePassword" value=""/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>
	
###Add Custom GPRS APN

	:::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
		<parm name="GprsAction" value="1"/>
		<parm name="GprsCarrier" value="0"/>
			<characteristic type="gprs-details">
				<parm name="ApnName" value="myCustom"/>
				<parm name="ReplaceIfExisting" value="1"/>
				<parm name="MakeDefault" value="1"/>
			</characteristic>
			<characteristic type="custom-details">
				<parm name="CustomAccessPoint" value="apn"/>
				<parm name="CustomUserName" value="user"/>
				<parm name="CustomPassword" value="pass"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>	
	
###Remove Existing Named APN

	:::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
			<parm name="GprsAction" value="2"/>
			<characteristic type="gprs-details">
				<parm name="ApnName" value="myTMobile"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Remove All Existing APNs

	:::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
			<parm name="GprsAction" value="3"/>
		</characteristic>
	</wap-provisioningdoc>

