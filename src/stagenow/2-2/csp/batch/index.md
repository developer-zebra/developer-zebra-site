---
title:  Batch
---

## About Batch

### Overview

The Batch setting type is used to execute one Profile (which may contain any number of settings) from within another Profile.  This can be viewed as sort of a subroutine call.  In StageNow, a Batch setting is used internally (without explicit reference by the staging administrator) to generate bar codes and NFC tags and to implement execution of the Deployment Section read from a Deployment Server.

A Batch setting can also be used explicitly by a staging administrator to leverage the functionality of one Profile from within another Profile.  This could be used to create reusable 'components' as Profiles that could then be used from other Profiles by embedding or referencing them from a Batch setting.  For example, one staging administrator may create and test a Profile, demonstrate and prove that it provides some functionality.  This Profile could then be exported as XML or saved as Binary (e.g. for programming into an NFG tag).  The Profile (as XML or Binary) could then be embedded into a Batch setting.  That Batch setting could then be used (via Re-use Saved Setting) by a staging administrator in another Profile to perform the entire functionality of the embedded Profile at the point in the created Profile where the Batch setting is placed.  The staging administrator using the Batch setting would have no visibility to the Profile that is embedded in that Batch setting but would
nonetheless be able to exploit the functionality of that embedded Profile.

A Batch setting can also refer to a file in the device file system that contains a Profile (as either XML or binary) instead of embedding the Profile into the Batch setting.  Such usage would require the 'batch file' (the file containing the Profile) to be present in the device file system before the Batch setting that references it is executed in order for the proper result to occur.  Such a 'batch file' might be transferred to the device using a File setting or through some other 'out of band' method.  The Deployment Section functionality of StageNow is implemented internally and automatically using a combination of File and Batch settings without the need for the staging administrator to explicitly create either a File setting or a Batch setting.  But a staging administrator COULD use such settings to construct more advanced or customized staging deployment scenarios.


### Main Functionality

* Process a file in the device file system that contains a Profile
* Process a Profile that is embedded within the Batch setting
* Process Profiles that are XML or binary
* Process Profiles that are optionally encrypted

## Batch File Type
* XML - the Profile is encoded as XML
* Binary - the Profile is encoded as binary

## Access Method
When choosing **Device File System**, enter a path and file name on the device where the XML or binary file to be processed will be located.

When choosing **Embedded in XML**, select an XML or binary file in the workstation file system. This file is encoded and placed into the Batch setting.


##Encryption methods
* Opaque - Cannot be examined, only the StageNow Client can decrypt with a private key.
* Immutable - Cannot be modifed, but anyone can decrypt with a public key. Future, not supported in StageNow V2.0.


## Feature Compatibility

<table>
	<tr>
		<th>Parameters</th>
		<th>MC32</th>
		<th>MC40</th>
		<th>MC67</th>
		<th>TC55</th>
		<th>TC70</th>

	</tr>

	<tr>
		<td>Execute Server XML</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>Execute Server Binary</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>Embedded Binary</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>Embedded XML</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
</table>
