---
title: ScanMode Manager
description: The ScanMode Manager sets the Scan Mode to Normal, Scan 1, or Scan 2.
publish: true
---

## About AppMgr

### Overview

The ScanMode Manager sets the Scan Mode to Normal, Scan 1, or Scan 2.

##Parameter Notes
### Scan Mode Action
Pivotal parm: No

Parm name: ScanModeAction

Description: 

>Specify the scan mode.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Normal Mode/td>
    <td>Normal Mode</td>
	<td>The batch file is encoded as XML.</td>
  </tr>
  <tr>
    <td>Scan 1 (Power is side key)</td>
    <td>Scan 1 (Power is side key)</td>
	<td><p>Scan 1 (Power is side key).</p>
  </tr>
  <tr>
    <td>Scan 2 (Power is front key)</td>
    <td>Scan 2 (Power is front key)</td>
	<td><p>Scan 2 (Power is front key).</p>
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

