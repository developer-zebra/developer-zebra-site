---
title: MX Manager
description: The MX Manager acquires the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself.
---

## About MX

### Overview
The MX Manager acquires the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself.

Useful for most scenarios is the MXMF version number since it is the most likely to affect overall capabilities. While the MXMF does not handle the actual details of processing XML (that is left to the CSPs that implement the features), the MXMF is responsible for some general XML parsing and validation, routing XML to appropriate CSPs, and handling errors. As such, bug fixes in the MXMF made over time might increase the value of the MXMF version number for determining how a given XML Request might be handled. The version of the MX CSP would likely be relevant only in the unlikely event that a bug was fixed related to returning the MXMF version.

### Main Functionality

* Query the MXMF version number
* Query the MX CSP version number


##Parameter Notes
###Version
Parm name: Version

Description:

>This value returned for this parm is the version number of the MX CSP, which implements MX. As noted earlier, this parm does not tell you what version of the MXMF is present on a device. This parm is present in the Result XML when the Request XML contains a parm-query for this parm.

###MXMF Version
Parm name: MXMFVersion

Description:

>This value returned for this parm is the version number of the MXMF, which is the main processing point for all XML Requests. As noted earlier, this parm tells you what version of the MXMF is present on a device. This parm is present in the Result XML when the Request XML contains top-level characteristic-query for MX.

## Queries
###MX Version Query

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
	
