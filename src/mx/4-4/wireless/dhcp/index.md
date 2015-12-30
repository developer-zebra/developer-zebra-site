---
title: DHCP Manager
description: The DhcpOptionMgr allows an app to configure DHCP options.
---
## About DhcpOptionMgr

### Overview
The DhcpOptionMgr allows an app to configure DHCP options.

The Dynamic Host Configuration Protocol (DHCP) is a standardized network protocol used on Internet Protocol (IP) networks for dynamically distributing network configuration parameters, such as IP addresses for interfaces and services, thus reducing the need for a network administrator or a user to configure these settings manually.

When using DHCP on a device, a DHCP Client on the device sends a DHCP Request to a DHCP Server and receives back a DHCP Acknowledgment. A DHCP Request sent by a device can contain information about the device or the DHCP Client or can contain additional requests for additional from the DHCP Server. A DHCP Acknowledgment sent by the DHCP Server contains the IP Address assigned to the device by the DHCP Server, along with any additional information requested by the device in the DHCP Request.

DHCP Options are variable length strings that are identified by DHCP Options Numbers that can be included in a DHCP Request or a DHCP Acknowledgment to convey information between a DHCP Client and a DHCP Server. From the point of view of the device where the DHCP Client is running, a DHCP Option can support a mode of Write (if the DHCP Client sends the option to the DHCP Server in the DHCP Request) or Read (if the DHCP Client receives information from the DHCP Server in the DHCP Acknowledgment). DHCP can support a wide variety of DHCP Options, including custom options that can be defined by equipment vendors or end customers.

### Main Functionality

* Enable or Disable the use of DHCP Options listed as configurable in the following table:

<div class="dhcp-table">
 <table>
	<tr>
		<th>DHCP Option Number</th>
		<th>DHCP Option Name</th>
		<th>Default State</th>
		<th>Configurable?</th>
		<th>Supported Mode(s)</th>
	</tr>
  <tr>
    <td>1</td>
    <td>Subnet Mask</td>
	<td>On</td>
    <td>No</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Routers</td>
	<td>On</td>
    <td>No</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Domain Name Servers</td>
	<td>On</td>
    <td>No</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Host Name</td>
	<td>On</td>
    <td>Yes</td>
	<td>Write</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Domain Name</td>
	<td>On</td>
    <td>No</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Broadcast Address</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>42</td>
    <td>NTP Server</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>51</td>
    <td>Lease Time</td>
	<td>On</td>
    <td>No</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>66</td>
    <td>TFTP Server Name</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>67</td>
    <td>Boot File Name</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>77</td>
    <td>User Class</td>
	<td>On</td>
    <td>Yes</td>
	<td>Write</td>
  </tr>
  <tr>
    <td>119</td>
    <td>Domain Search List</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
  <tr>
    <td>150</td>
    <td>TFTP Server Address</td>
	<td>Off</td>
    <td>Yes</td>
	<td>Read</td>
  </tr>
</table>
</div>	

>**Note:**  DHCP Options that are shown as not configurable in the above table are supported on Zebra Android devices, but are always enabled and their operation cannot be altered in any way using the DhcpOptionMgr.


##Parameter Notes
###Host Name
Pivotal parm: Yes

Description: 

>This parm allows you to control whether a Host Name will be sent by the DHCP Client to the DHCP Server via the Host Name DHCP Option. The Host Name is generally used by a DHCP Server to identify a device on the network and/or to track the devices to which IP Addresses have been assigned.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the specified Host Name Option to be sent by the DHCP Client to the DHCP Server in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent a Host Name from being to be sent by the DHCP Client to the DHCP Server.</td>
  </tr>
</table>
</div>	

####Host Name Option value
Settable if: Host Name is "Enable"

Pivotal parm: No

Parm name: HostNameValue

Description: 

>This parm allows you to specify the Host Name that will be sent by the DHCP Client to the DHCP Server in the DHCP Request.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 91 characters

###User Class
Pivotal parm: Yes

Description: 

>This parm allows you to control whether a User Class will be sent by the DHCP Client to the DHCP Server via the User Class DHCP Option. The User Class is generally used by a DHCP Server to select the proper pool of IP Addresses from which to acquire the IP Address to assign to the device. It may also be used by the DHCP Server to determine which additional information should be returned to the device in the DHCP Acknowledgment.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the specified User Class to be sent by the DHCP Client to the DHCP Server in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent a User Class from being to be sent by the DHCP Client to the DHCP Server.</td>
  </tr>
</table>
</div>	

####User Class value
Settable if: User Class is "Enable"

Pivotal parm: No

Parm name: UserClassValue

Description: 

>This parm allows you to specify the User Class value that will be sent by the DHCP Client to the DHCP Server in the DHCP Request.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 91 characters

###Broadcast Address
Pivotal parm: No

Parm name: BroadcastAddrState

Description: 

>The Broadcast Address for a network is the IP Address for which all devices on that network are enabled to receive messages.  A message sent to the Broadcast Address for a network can therefore be received by all devices on that network, rather than a specific device.

>This parm allows you to control whether a request for the Broadcast Address will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the Broadcast Address for the network to the device in the DHCP Acknowledgment.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the Broadcast Address to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the Broadcast Address from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

###NTP Server
Pivotal parm: No

Parm name: NTPServerState

Description: 

>An NTP (Network Time Protocol) Server is a Server that is capable of providing the current Date and Time to a device. A device must generally know the name or address of an NTP Server in order to query that server to acquire the Date and Time.

>This parm allows you to control whether a request for a NTP Server Address will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the NTP Server Address to the device in the DHCP Acknowledgment.

>**Note:** The DHCP Client does not automatically use the value returned by this DHCP Option to configure the device to acquire the Date and Time from the returned NTP Server. To configure a device to acquire the Date and Time from the NTP Server, the value of the returned NTP Server Address would need to be obtained using the DhcpOptionMgr and then used to configure AutoTime via the Clock.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the NTP Server Address to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the NTP Server Address from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

###TFTP Server Name
Pivotal parm: No

Parm name: TFTPSerNameState

Description: 

>A TFTP (Trivial File Transport Protocol) Server provides simple means for a remote client to get or put a file. A primary use of TFTP is configuring a device when it first joins a network. TFTP is used because it is very simple to implement but must be used with caution because it lacks security and other more advanced file transfer features.

>This parm allows you to control whether a request for a TFTP Server Name will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the TFTP Server Name to the device in the DHCP Acknowledgment.

>**Note:** The DHCP Client does not automatically use the TFTP Server Name to perform any file transfers or configuration. To configure a device using TFTP, the TFTP Server Name would need to be acquired using the DhcpOptionMgr and then provided to a TFTP Client that could perform the transfer of one or more files and then perform any desired configuration using those files.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the TFTP Server Name to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the TFTP Server Name from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

###Boot File Name
Pivotal parm: No

Parm name: BootFileState

Description: 

>A Boot File is a file that is typically used to configure a device when it first joins a network. A common usage scenario is to pull a Boot File of a given name from a TFTP Server and then use that Boot File to configure the device.

>This parm allows you to control whether a request for a Boot File name will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the Boot File name to the device in the DHCP Acknowledgment.

>**Note:** The DHCP Client does not automatically use the Boot File name to perform any file transfers or configuration. To configure a device, a Boot File name and a TFTP Server Name would both be need to be acquired using the DhcpOptionMgr and then provided to a TFTP Client that could perform the transfer of the Boot File and then perform any desired configuration using that file.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the Boot File name to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the Boot File name from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

###Domain Search
Pivotal parm: No

Parm name: DomainSearchState

Description: 

>The Domain Name System (DNS) is a hierarchical distributed naming system that associates domain names to the IP Addresses.  When seeking to resolve a name, one or more Domain Name Servers may need to be contacted, in a prioritized order until the name can be successfully resolved. The Domain Search list for a network is an ordered list of DNS server addresses that should be used to resolve names on that network.

>This parm allows you to control whether a request for the Domain Search list will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the Domain Search list for the network to the device in the DHCP Acknowledgment.

>**Note:** The DHCP Client does not automatically use the Domain Search List to configure the DNS Client to resolve names based on the list. This may be a future enhancement, when the DNS Client provides a way to configure it to use such a list. In the meantime, if name resolution needs to be performed based on this list, it would have to be implemented at an application level. An application would need to acquire the Domain Search List using the DhcpOptionMgr and then utilize the information provided in that list to drive an explicit process of requesting name resolution from the DNS Servers for the listed domains

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the Domain Search list to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the Domain Search list from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

###TFTP Server Address
Pivotal parm: No

Parm name: TFTPSerAddrState

Description: 

>The TFTP Server Address DHCP Option (Option 150) is basically a Cisco-proprietary version of the standard TFTP Server Name DHCP Option (Option Number 150).

>This parm allows you to control whether a request for a TFTP Server Address will be sent by the DHCP Client to the DHCP Server in the DHCP Request. When requested, the DHCP Server will return the TFTP Server Address to the device in the DHCP Acknowledgment.

>**Note:** The DHCP Client does not automatically use the TFTP Server Address to perform any file transfers or configuration.  To configure a device using TFTP, the TFTP Server Address would need to be acquired using the DhcpOptionMgr and then provided to a TFTP Client that could perform the transfer of one or more files and then perform any desired configuration using those files.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to how this DHCP Option is configured.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause this DHCP Option to be turned on and hence will cause the TFTP Server Address to be requested by the DHCP Client in the DHCP Request.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause this DHCP Option to be turned off and hence will prevent the TFTP Server Address from being requested by the DHCP Client in the DHCP Request.</td>
  </tr>
</table>
</div>

