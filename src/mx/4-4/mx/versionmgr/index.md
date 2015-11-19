---
title: MX Manager
description: The MX Manager allows you to acquire the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself.
---

## About MX

### Overview

The MX Feature Type allows you to acquire the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself. Of these two versions, the most likely to be useful is the version of the MXMF, since it is most likely to affect overall capabilities. While the MXMF does not handle the actual details of processing XML (that is left to the CSPs that implement the Feature Types), the MXMF is responsible for some general XML parsing and validation, routing XML to appropriate CSPs, and error handling. As such, over time, bug fixes in the MXMF might be made and knowing the MXMF version might be useful to determine how a given XML Request might be handled. The version of the MX CSP would likely only be relevant in the unlikely event that a bug was fixed related to actually returning the MXMF version.

### Main Functionality

* Query the MXMF version number
* Query the MX CSP version number


##Parameter Notes
###Version
Parm name: Version

Description:

>This value returned for this parm is the version number of the MX CSP, which implements the MX Feature Type. As noted earlier, this parm does not tell you what version of the MXMF is present on a device. This parm is present in the Result XML when the Request XML contains a parm-query for this parm.

###MXMF Version
Parm name: MXMFVersion

Description:

>This value returned for this parm is the version number of the MXMF, which is the main processing point for all XML Requests. As noted earlier, this parm tells you what version of the MXMF is present on a device. This parm is present in the Result XML when the Request XML contains top-level characteristic-query for the MX Feature Type.

## Queries
###MX Feature Type Version Query

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX">
			<parm-query name="Version"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX" version="4.4">
			<parm name="Version" value="4.4.3.6"/>
		</characteristic>
	</wap-provisioningdoc>

###MXMF Version Query

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="MX"/>
	</wap-provisioningdoc>
	
Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX" version="4.4">
			<parm name="MXMFVersion" value="4.4.3.6"/>
		</characteristic>
	</wap-provisioningdoc>
	
## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=MX&os=JB&embed=true"></iframe> 