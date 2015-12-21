---
title: File Manager
description: The File Manager setting type allows your application to manage files on the device. For example you can download a file from an ftp server and it save on the device.
publish: true
---

## About File Manager

### Overview

The File Manager setting type allows your application to manage files on the device. For example you can download a file from an ftp server and it save on the device.

### Main Functionality

* Copy a file from a location on a server (identified by a URI) to a location on the device (identified by a path and file name) 
* Copy a file from data embedded in the XML object to a location on the device (identified by a path and file name) 
* Transfer a file from one location on a device (identified by a path and file name) to another location on the same device (identified by a path and file name)
* Delete a file from the device
* Copy a folder or archive file containing multiple files to the device


##Parameter Notes
### File Action
Pivotal parm: Yes

Parm name: FileAction

Description: 

>Specify action to perform on file.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Transfer\Copy File/td>
    <td>1</td>
	<td>A file to be transfered or copied to the device </td>
  </tr>
  <tr>
    <td>Delete File</td>
    <td>2</td>
	<td><p>Delete a file from a device.</p>
  </tr>
</table>
</div>	

###Target Access Method
Settable if: File Action is transfer\copy

Pivotal parm: No

Parm name: TargetAccessMethod


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
	<td>The destination will be a file in the device file system.</td>
  </tr>
  
</table>
</div>	

####Target Path and File name
Settable if: File Action is transfer\copy

Pivotal parm: No

Parm name: TargetPathAndFileName

Description: 

>Enter a path and file name on the device where the file will be copied or transferred to.

### Source Access Method
Pivotal parm: Yes

Parm name: FileAction

Description: 

>Specify where the source of te transfer\copy will be located.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>File on remote server/td>
    <td>1</td>
	<td>The source file will be located on a remote server. </td>
  </tr>
  <tr>
    <td>File on device file system</td>
    <td>2</td>
	<td><p>The source file will be located on the device.</p>
  </tr>
  <tr>
    <td>File embedded in XML</td>
    <td>3</td>
	<td><p>The source file will be embedded in the xml.</p>
  </tr>
</table>
</div>	


#### Source File URI
Settable if: File Action is transfer\copy and source is remote server

Pivotal parm: No

Parm name: SourceURI

Description: 

>Enter a URI of the location of the file on the server.

#### Source Path and File 
Settable if: File Action is transfer\copy and source is on device

Pivotal parm: No

Parm name: SourcePathAndFileName

Description: 

>Enter the path and file name of the source file location on the device.

#### Embedded File Type 
Settable if: File Action is transfer\copy and source is embedded

Pivotal parm: No

Parm name: SourceType

Description: 

>Choose what type of file is being embedded

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>General Data File</td>
    <td>1</td>
	<td>The embedded source file will be of any extension type. </td>
  </tr>
  <tr>
    <td>Android Application</td>
    <td>2</td>
	<td>The embedded source file will be an Android application .APK. </td>
  </tr>
  <tr>
    <td>Android OS Update</td>
    <td>3</td>
	<td><p>The embedded source file will be an Android OS Update in the form of a ZIP file.</p>
  </tr>
</table>
</div>	
