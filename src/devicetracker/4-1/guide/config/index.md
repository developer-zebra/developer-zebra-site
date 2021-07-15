---
title: Configuration
layout: guide.html
product: Device Tracker
productversion: "4.1"
---

## Overview

This section discusses configuration of Device Tracker:

* **[Create/Manage admin and manager logins](#webportal) –** Administrators use the web portal to:
    * Add/Delete administrators
    * Add/Delete site managers
    * Reset passwords
* **[Register access points](#siteaccesspointanddevicedata) -** Register access point location to identify which AP the device is connected to and aid in locating the device.
    * Assign friendly name to access point based on the AP physical location on site
    * Assign site location – to identify which site the AP belongs
* **[Register devices](#siteaccesspointanddevicedata) -** Register device information to identify the devices.
    * Assign friendly name
    * Assign a site location
* **[Enable/Disable secondary BLE beacon](#secondaryble) -** Allow devices with a secondary BLE beacon to be located when the device loses power.
<br>

<p><b>Configure the Check-out feature <i>(optional)</i>:</b></p>

* **[Enable/Disable check-out](#devicecheckout) –** Administrators toggle the check-out feature in the web portal, enforcing users to scan their user barcode at the beginning of their work shift to check-out their device. This associates the device to the particular user.
* **[Add/Modify barcode prefix](#devicecheckout)** for the barcode used during check-out. This adds the restriction to only accept scanned barcodes that begin with the specified prefix.
* Generate user barcodes for check-out, if needed.

-----

## Site, Access Point and Device Data

Administrators register site names, access points, and device information with friendly names to aid in identifying, tracking and locating devices. Sample AP and device CSV files are supplied by Zebra for the administrator to populate with the appropriate data. Copy the populated CSV files to the mobile device for the data to be imported through the client app. Importing data either modifies or adds entries to the existing database, unless deleting a device. The data fields are:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">CSV File</th>
    <th style="text-align:center">Data</th>
    <th style="text-align:center">Description</th>
    <th style="text-align:center">Required</th>
  </tr>
  <tr>
    <td style="text-align:center" rowspan="4">AP</td>
    <td style="text-align:center">SiteName</td>
    <td style="text-align:left">Site name or location</td>
    <td style="text-align:left">Yes</td>
  </tr>
  <tr>
    <td style="text-align:center">BSSID</td>
    <td style="text-align:left">Access point MAC address</td>
    <td style="text-align:left">Yes</td>
  </tr>
  <tr>
    <td style="text-align:center">AssetName</td>
    <td style="text-align:left">Name used by IT admin for drawings, labeling of hardware, etc. <br><i>(For future use only – does not have any impact whether or not it is in use.)<i></td>
    <td style="text-align:left">Optional</td>
  </tr>
  <tr>
    <td style="text-align:center">LocationFriendlyName</td>
    <td style="text-align:left">Access point location friendly name, useful to identify general device location</td>
    <td style="text-align:left">Optional</td>
  </tr>

  <tr>
    <td style="text-align:center" rowspan="4">Device</td>
    <td style="text-align:center">ModelNumber</td>
    <td style="text-align:left">Device model</td>
    <td style="text-align:left">Yes</td>
  </tr>
  <tr>
    <td style="text-align:center">SerialNumber</td>
    <td style="text-align:left">Device serial number</td>
    <td style="text-align:left">Yes</td>
  </tr>
  <tr>
    <td style="text-align:center">DeviceFriendlyName</td>
    <td style="text-align:left">Name used to identify device</td>
    <td style="text-align:left">Optional</td>
  </tr>
  <tr>
    <td style="text-align:center">SiteName</td>
    <td style="text-align:left">Site name or location where the device is assigned, useful when finding a device</td>
    <td style="text-align:left">Optional</td>
  </tr>
</table>
<br>
The device data fields are required in the device .CSV file whether adding or deleting devices. In each .CSV file, keep the header information intact and replace the sample data with the appropriate data desired. It is particularly important for the AP location friendly name to be easily understood for users to determine the location within the facility when finding a device. Special characters, such as '.', '#', '$', '[', or ']', are not supported. The .CSV file cannot be UTF-8 encoded, otherwise an error can occur; it must be saved in a normal comma separated values format.<br><br>
Sample Import AP .CSV file content:
<pre class="prettify">
    <code>
        SiteName,BSSID,AssetName,LocationFriendlyName
        New York,14:a7:2b:24:cc:a5,,First Floor Reception Area
    </code>
</pre>
Sample Import Device .CSV file content:
<pre class="prettify">
    <code>
        ModelNumber,SerialNumber,DeviceFriendlyName,SiteName
        TC51,17009522509812,Inventory1,Chicago
        TC51,17009522509813,Inventory2,Los Angeles
    </code>
</pre>
Sample Delete Device .CSV file content:
<pre class="prettify">
    <code>
        ModelNumber,SerialNumber
        TC51,17009522509812
        TC51,17009522509813
    </code>
</pre>
<br>

### Import Site and AP Data

Import site and AP data to register the information with the server. When adding or modifying site and AP data, it is particularly important for the AP friendly name to be easily understood by users to aid in finding the location where the device is connected. A maximum of 20,000 records can be imported at one time. 

<p>To import site/AP data from the AP .CSV file:</p>

1. Copy the .CSV file from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Access Point CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Access Point CSV File,** tap **Upload CSV.**
7. The AP data import is complete. Results are displayed in the **Status** section at the bottom of the screen.  <br>

### Import Device Data

Import device data to register the device information along with a friendly name to aid in device identification. A maximum of 20,000 rcords can be imported at one time.

<p>To add/modify device data, import the device .CSV file:</p>

1. Copy the CSV file from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Device CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Device CSV File,** tap **Upload CSV.**
7. The device data import is complete. Results are displayed in the **Status** section at the bottom of the screen.  
<p>New devices imported are initially in the <b>Never Connected</b> state until the Device Tracker app is installed on the devices, configured and communicating with the server.</p>

### Delete Device

Deleting a device removes device data from the Device Tracker solution after uninstalling the client app.<!--and places it under **Unassigned Devices** in the device dashboard--> When a device is deleted, the license is deallocated and released to the license pool. A maximum of 5,000 records can be removed at one time.

<p><b>Prerequisite:</b> Prior to deleting a device, uninstall the Device Tracker application on the device.</p>

<p>To delete a device, import the device .CSV file containing the specific data to delete:</p>

1. Copy the .CSV file from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Delete Device CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Delete Device CSV File,** tap **Upload CSV.**
7. The specified device data is removed from the system. Results are displayed in the **Status** section at the bottom of the screen.

-----

## Secondary BLE

For devices with secondary BLE beaconing capability, Device Tracker can locate the device if it loses power due to critically low battery or is manually powered off. Locationing is based on signals transmitted from the secondary BLE beacon. Attempts to locate the device must occur soon after the device loses power, prior to loss of power of the secondary BLE beacon. In this circumstance, the **Play Sound** feature is disabled during device search since it cannot function due to the loss of device power.

<p>See <a href="../setup/#bleprofile">BLE Profile</a> to enable the secondary BLE beacon.</p>

The <a href="../mgmt/#devicedetails">Secondary BLE state</a> is viewed from the **Device Details** screen.


-----

## Web Portal

In the web portal, administrators can:

* create and manage users
* reset passwords
* view license information
* enable check-in/check-out (optional)
<br>
<p>In a supported browser, enter the URL shared by Zebra to access the web portal. For first-time use, login with the super administrator (SuperAdmin) credentials provided by Zebra.</p>

Supported browsers:
* Chrome
* Edge
* Safari (v14.0 and later)

<img style="height:250px" src="web-portal.png"/>

_Device Tracker web portal_

### Add User

To add a user:

1. From the web portal, tap **Manage Users** in the left menu.
2. Select the role of the new user: Admin or Manager
3. Enter the information prompted, including the email and password.
4. Tap **Add User.**
5. The new user is added to the **All Users** list.
<br>

### Delete User

To delete a user:

1. From the web portal, tap **Manage Users** in the left menu.
2. From the list of users, locate the user to delete and click on the _delete icon_ next to the user.
3. Click **OK** in the confirmation message.
<br>

### Search for User

User names can be searched by email address. The entire email address must be entered. Action can be taken on the user after the search is performed, e.g. delete user.

<p>To search for a user:</p>

1. From the web portal, tap **Manager Users** in the left menu.
2. Enter the email address to search for in the search field located below the **Add User** button from the top right of the page. Press the enter key.
3. The search results are displayed.
<br>

### Reset Password

The password can be reset through the web portal or the client app if the administrator or manager forgot the password.

<p>Steps to reset the password in the web portal:</p>

1. From the web portal login page, click **Forgot your password.**
2. Enter your email address then click **Reset Password.**
3. A message appears indicating a password reset email is sent.
4. Open the email and click on the link.
5. Enter in the new password.
6. The password is reset with the new password.
<br>

### View License Information

[Licenses](../license) are required for Device Tracker operation on devices. Licenses are combined into a single license pool regardless of expiration date. When a device registers to the Device Tracker server, if a license available, it is allocated to the device from the license pool. 
<p>To view license information:</p>

1. From the web portal, tap **License Summary** in the left menu.
2. The following information is provided based on unexpired licenses:
    * **Total licenses -** quantity of licenses that have been purchased
        * **Total licenses available -** quantity of licenses that are available and can be allocated to devices
        * **Total licenses consumed -** quantity of licenses allocated to devices
    * **List of licenses purchased** with corresponding quantity and expiration date. This data is static and removed from the list after the expiration date is surpassed.
    * **Sync Licenses** button to refresh license data on-demand and synchronize with the Zebra Enterprise Software Licensing system. The license information is updated once each day.
    * **Time stamp** of the last occurrence when the license information was synchronized with the license server.

<img style="height:250px" src="license.png"/>

_License Summary in Device Tracker web portal_


-----

## Device Check-out

Device check-out/check-in is an _optional_ feature that maintains user accountability and traces device use. When enabled, a unique barcode is required for each user to scan at the start of their work shift. User operation in the check-out screen is limited to only scanning barcodes. The check-out screen is in kiosk mode, preventing the user from accessing the device until check-out is performed.

* **Check-out:** At the start of a work shift, the user checks-out the device by scanning their unique barcode. This associates the user with the device, as seen in the device card and device details screen.
* **Check-in:** At the end of a work shift, the user checks-in the device by placing it on a powered cradle or logging out through the top-right menu from the main device screen. After check-in, the user is no longer associated with the device.
<br>
<p>The check-out/check-in feature displays an overlay on top of the screen to enforce the user to scan their unique barcode, maintaining user accountability of the device. If any other app also uses a screen overlay, the check-out/check-in feature may conflict with the other app. For example, this feature cannot be used with Zebra’s MotionWorks Proximity application.</p>

### Enable check-out/check-in

To toggle check-out:

1. From the web portal, tap **Settings** in the left menu.
2. Toggle **Checkin/Checkout** to enable the feature.
<p>If enabled, Checkout appears as a device state in the administrator and manager dashboard listing the devices that are checked-out.</p>

### Set Check-out Barcode Prefix

When check-out is enabled, by default no prefix is defined allowing all barcodes to be accepted. The administrator can configure a prefix in the form of a character string, adding a restriction to accept only barcodes that begin with the specified prefix. If a barcode scanned does not contain the prefix, check-out is not successful.
<br>
When generating a barcode with the prefix, the specified prefix is followed by the username identifier. The following is a sample barcode containing prefix “NGDTRK-” and username “JohnDoe”:
<img style="height:80px" src="barcode-prefix.png"/>
_Sample barcode with prefix and username: "NGDTRK-JohnDoe"_
<br><br>
To set the barcode prefix:

1. **Enable Checkin/Checkout the web portal.** This exposes the Prefix field in the Application Configuration screen.
2. **Enter the desired text for the prefix.** If all barcodes should be accepted with no prefix, keep the entry blank.
   <br>
   Only barcodes that begin with the specified prefix can initiate the checkout.


-----

## Diagnostics

For diagnostic purposes, logging can be enabled in Device Tracker to capture application and system information to Android logcat. [RxLogger](/rxlogger) is a built-in tool on Zebra Android devices that collects data and event logs from logcat and stores them in a single location. If issues are encountered, a Zebra representative may request for the log files to be collected and supplied. <br<br>
There are 2 methods to capture logging: StageNow or EMM.

### StageNow

To use StageNow to capture logging:

1. Open StageNow on the device.
2. Scan the barcode to enable Device Tracker logging and start RxLogger log capture:
   <img style="height:150px" src="start-rxlogger.png"/>

3. Reproduce the issue.
4. Scan the barcode to disable Device Tracker logging and stop RxLogger log capture:
   <img style="height:150px" src="stop-rxlogger.png"/>

<p>Logs are located in the RxLogger folder (default location: /sdcard/RxLogger).</p>
<br>

### EMM

To use EMM to capture logging, refer to the following XML content:

* To enable logging:


        <wap-provisioningdoc>
            <characteristic version="1.0" type="com.zebra.devicetracker">
                <parm name="EnableLog" value="1" />
            </characteristic>
        </wap-provisioningdoc>


* To disable logging:


        <wap-provisioningdoc>
            <characteristic version="1.0" type="com.zebra.devicetracker">
                <parm name="EnableLog" value="0" />
            </characteristic>
        </wap-provisioningdoc>


Send the desired XML content to the EMM using either [OEMConfig](/oemconfig) or [MX](/mx/overview) to configure the app.
<br><br>


-----

## See Also

* [User Roles](../roles)
* [Install](../setup)
* [Device Management](../mgmt)
* [Device Tracking](../use)