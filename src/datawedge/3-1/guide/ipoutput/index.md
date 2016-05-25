---
title: DataWedge IP 
layout: guide.html
product: DataWedge
productversion: '3.1'
---

IPWedge

IPWedge is a PC application that can be easily configured to retrieve data sent over a network by the DataWedge IP Output Plug-in on a Symbol device.

If you intend to use IP output in conjunction with IPWedge, download the IPWedge installation package from Symbol’s Enterprise Mobility support site at http://support.symbol.com/support/product/DEV_SW_TOOLS.html to the host PC.

LINK TO IPWedge
https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=datawedge%20ip



DATAWEDGE ANDROID IP OUTPUT USER GUIDE

INTRODUCTION

IP output allows DataWedge to send captured data to a host computer via a network connection. Captured data can be sent over an IP network to a specified IP address and port using either TCP or UDP transport protocols.

PREREQUISITES

This section describes the prerequisites required in order to use IP output.

If you intend to use IP output in conjunction with IPWedge, download the IPWedge installation package from [Zebra’s Enterprise Mobility support portal ](http://portal.zebra.com) to the host PC.


DataWedge IP output has the following prerequisites.

For the remote PC
Microsoft Windows XP, Vista or Windows 7 /8

Microsoft .NET Framework 3.5 Service Pack 1

IPWedge v1.0 or later, or a Client Application that listens on a specific port and IP address for either TCP or UDP data.

For the mobile device
Android 4.1 Jelly Bean.

Symbol DataWedge for Android v1.5 or later.

USAGE

This section provides information on how to configure IP output using the DataWedge configuration user interface. To use IP output in a particular DataWedge profile (ex. Profile 0), scroll downward on profile page until the IP output can be seen (see figure 1).

IP output
Figure 1. IP output
Using IP output with IPWedge
IPWedge is a PC application that can be easily configured to retrieve data sent over network by DataWedge IP output on a Zebra device. Please see the IPWedge user manual on how to install & configure in a PC.

In order to get IP output to send captured data to a remote computer that is installed with IPWedge configure following items as Figure 1.

Check the Enabled check box. (This is unchecked by default).

Make sure Remote Wedge option is enabled (This is checked by default).

Click on Protocol option. There will be pop dialog to choose either TCP or UDP (see Figure 2). Choose the same protocol selected for IPWedge PC application. (TCP is the default selection).

Protocol selection
Figure 2. Protocol selection
Click on IP Address option. There will be pop dialog to enter IP address of PC computer you wish to send data to. (see Figure 3.) Enter the IP address of the PC using numeric key pad.

IP address entry
Figure 3. IP address entry
Click on Port option. The Pop dialog in figure 4 appears. The default port supported for both IP Output plug-in and IPWedge is 58627, but Enter same port number that’s selected for IPWedge PC application.

Port number entry
Figure 4. Port number entry
Configure Advanced Data Formatting and Basic Data Formatting Plug-in if any required modification to be done to captured data before sending to remote PC. Please help section ADF and BDF when configuring them.

Using IP Output Plug-in without IPWedge
IP output plug-in can be used to send captured data from DataWedge application to remote device or PC without IPWedge. At the data receiving end, the PC or Mobile device should have a client application, that listens to TCP or UDP data comes from configured port and IP address in IP Output plug-in. In order to get IP output plug-in configured to send captured data to a remote computer or device, follow these steps.

Check the Enabled check box. (This is unchecked by default).

Make sure Remote Wedge option is disabled (This is checked by default).

Click on Protocol option. There will be pop dialog to choose either TCP or UDP (see Figure 2). Choose the same protocol configured for client application on device or PC. (TCP is the default selection).

Click on IP Address option. There will be pop dialog to enter IP address of PC computer you wish to send data to. (See Figure 3.) Enter the IP address of the device or PC using numeric key pad.

Click on Port option. The Pop-up dialog in figure 4 appears. The default port supported for both IP Output plug-in is 58627, but Enter same port number that’s confiured for application on device or PC.

Configure Advanced Data Formatting and Basic Data Formatting Plug-in if any required modification to be done Captured data before sending to remote PC. Please help section ADF and BDF when configuring them.