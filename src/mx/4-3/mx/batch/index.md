---
title: Batch
description: The Batch setting type is used to execute one Profile (which may contain any number of settings) from within another Profile.
publish: true
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


##Parameter Notes
### Batch File Type
Pivotal parm: Yes

Parm name: BatchFileType

Description: 

>Specify the type of file to be processed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>XML File/td>
    <td>1</td>
	<td>The batch file is encoded as XML.</td>
  </tr>
  <tr>
    <td>Binary File</td>
    <td>2</td>
	<td><p>The batch file is encoded as binary.</p>
  </tr>
</table>
</div>	

####Batch File Access Method
Pivotal parm: Yes

Parm name: BatchFileAccessMethod

Description: 

> Specify whether the batch file will be available on the device file system or embedded in the XML.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>File in Device File System/td>
    <td>2</td>
	<td>When choosing **Device File System**, enter a path and file name on the device where the XML or binary file to be processed will be located.</td>
  </tr>
  <tr>
    <td>File Embedded in XML</td>
    <td>3</td>
	<td><p>When choosing **Embedded in XML**, select an XML or binary file in the workstation file system. This file is encoded and placed into the Batch setting.</p>
  </tr>
</table>
</div>	

####File Path
Settable if: File Access method is file system

Pivotal parm: No

Parm name: XmlFilePathAndName

Description: 

>Enter a path and file name on the device where the XML or binary file to be processed will be located.

####File Data
Settable if: File Access method is embedded in XML

Pivotal parm: No

Parm name: XmlFileData

Description: 

>Select an XML or binary file in the workstation file system. This file is encoded and placed into the Batch setting.

### Require Specific Encodings
Settable if: File Access method is batch file type is binary.

Pivotal parm: No

Parm name: BinFileRequireEncodings

Description: 

>Specify the type of file to be processed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>0</td>
	<td>Binary file does not require encoding.</td>
  </tr>
  <tr>
    <td>True</td>
    <td>1</td>
	<td>Binary file requires to be encoded.</td>
  </tr>
</table>
</div>

#### Require Opaque
Settable if: File Access method is batch file type is binary and require encoding is set.

Pivotal parm: No

Parm name: RequireOpaque

Description: 

>Cannot be examined, only the StageNow Client can decrypt with a private key.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>0</td>
	<td></td>
  </tr>
  <tr>
    <td>True</td>
    <td>1</td>
	<td>Cannot be examined, only the StageNow Client can decrypt with a private key.</td>
  </tr>
</table>
</div>

#### Require Immutable
Settable if: File Access method is batch file type is binary and require encoding is set.

Pivotal parm: No

Parm name: RequireImmutable

Description: 

>Cannot be modifed, but anyone can decrypt with a public key. Future, not supported in StageNow V2.0.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>0</td>
	<td></td>
  </tr>
  <tr>
    <td>True</td>
    <td>1</td>
	<td>Cannot be modifed, but anyone can decrypt with a public key. Future, not supported in StageNow V2.0.</td>
  </tr>
</table>
</div>

#### Require Private
Settable if: File Access method is batch file type is binary and require encoding is set.

Pivotal parm: No

Parm name: RequirePrivate

Description: 

> Determines whether private encryption is required.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>False</td>
    <td>0</td>
	<td></td>
  </tr>
  <tr>
    <td>True</td>
    <td>1</td>
	<td>Determines whether private encryption is required.</td>
  </tr>
</table>
</div>

### Security Password
Settable if: File Access method is batch file type is binary and require encoding is set.

Pivotal parm: No

Parm name: BinFilePassword

Description: 

> Provide the security password (empty = none) to decrypt the binary batch file.

