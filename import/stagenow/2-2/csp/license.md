# License

## About License

### Overview

The License Manager setting type allows you to apply licenses.

### Name
The name field identifies this particular setting parameter in order to manage just part of the profile programmatically using the EMDK API. This is useful if you have multiple types of the same setting and want to update only one of them without updating the whole profile.

### Main Functionality

* Apply a license embedded in XML
* Apply a license that exists on a device's file system
* Remove a license

## Parameter Notes

### Apply a license that has been embedded in XML
This profile setting allows your application to apply a license (Base64 encoded binary blob) that is embedded in an XML file. Provide a path to the license blob, and the profile editor encodes and embeds the license to the profile XML.

Optionally, verify the license against a standard setting name or enter a custom setting name.

### Apply a license that exists on a devices file system
This profile setting allows your application to apply a license (Base64 encoded binary blob) that resides on a device's file system. Provide a path to the binary blob on the device's file system.

Optionally, verify the license against a standard setting name or enter a custom setting name.

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
		<td>Install a license</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>Remove a license</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
	<tr>
		<td>Determine if license installed</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
		<td>X</td>
	</tr>
</table>