---
title: Configuration
layout: guide.html
product: Device Tracker
productversion: "4.2"
---

## Overview

After Device Tracker installation, the administrator must configure application behavior, and register device, access point (AP) and site information. Different roles exist that determine the functions and capabilities of each user: associate, manager, or administrator. 

<!--
can be performed as follows:

- **[Manage Users](#manageusers) -** Administrator and manager user accounts are managed as follows (no accounts are required for associates - see [User Roles](../use/#userrolesandresponsibilities)) :
    * [Add user](#adduser)
    * [Delete user](#deleteuser)
    * [Search for user](#searchforuser)
    * [Reset Password](#resetpassword)
- **[Configure Device Check-out](#configuredevicecheckout) –** _Optional:_ Administrators enable the check-out feature through the web portal to enforce users to scan their user barcode to gain access to the device, associating the device to that particular user. 
    - **Set check-out barcode prefix -** From the [web portal](../settings/#setcheck-outbarcodeprefix), specify a prefix for the barcode scanned during check-out. This adds the restriction to only accept scanned barcodes that begin with the specified prefix.
- **[Register devices](#registerdevices) -** Register device information to identify the devices.
  - **Assign a device friendly name -** helps users identify the device
  - **Assign a site location -** identifies the physical location of the device
- **[Register access points and sites](#registeraccesspointssites) -** Register the access point location to identify which AP the device is connected, which aids in locating the device.
  - **Assign a friendly name to the access point -** helps users identify the physical location of the AP in the site
  - **Assign site location –** helps users identify which site the AP belongs in
- **[Diagnostics](#diagnostics)) -** Enable/disable logging for diagnostic purposes.
-->

### Administrator Role

Administrator functions and capabilties:

* [Administrator login](../use/#administratormanagerlogin)
* Web portal:
    * [Manage Users](../config/#manageusers)
    * [Configure Device Check-out](#configuredevicecheckout) (optional)
    * [Set Barcode Prefix](#setbarcodeprefix) (optional)
    * [Monitor Licenses](../use/#licenses)
* [Import Devices](#registerdevices) 
* [Import Sites & APs](../config/#registeraccesspointssites) 
* [Delete Devices](#deletedevices) 
* [Monitor devices](../use/#monitordevices) at the corporate-level and site-level
* All Manager and Associate capabilities.
<!--
- Configuration:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../license">Monitor and take action on device licenses</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../settings/#webportal">Create/Manage administrator and manager user logins</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Import Site and AP data with friendly name (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Import device data with friendly name and site assignment (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../config/#siteaccesspointanddevicedata">Delete device data (via .CSV)</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../settings/#devicecheckout">Enable check-out/check-in feature to associate users to devices for accountability _(optional)_</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../settings/#devicecheckout">Configure prefix for check-out barcode _(optional)_</a><br>

- View:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#deviceinformation">Dashboard to view corporate-level data across all sites</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../use/#devicecheckout">Use device check-out/check-in _(optional)_</a><br>

- Includes all Manager and Associate actions
-->
### Manager Role

Manager functions and capabilities:

* [Manager login](../use/#administratormanagerlogin)
* [Monitor devices](../use/#monitordevices) at the site-level
* [Mark a device for retrieval](../use/#markdevicetofind) (To Be Found)
* [Mark a device out of service](../use/#decommissionrecommissiondevice) (decommission) with a [note](../use/#addeditnote) (e.g. WiFi issue or display broken)
* [Clear a retrieval request](../use/#disablefinding)
* [Device or Site Search](../use/#devicesitesearch) 
* All Associate capabilities

<!-- 
Managers track devices within a single site or location. The Manager role encompasses the Associate role.
<br>
Features and functions of managers:

- View:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#deviceinformation">Dashboard on device to view site-level data</a><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="../mgmt/#deviceinformation">View list of misplaced or at-risk devices for retrieval</a>
  <br>

- Actions:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Set To Find](../use/#markadevicetobefound) –** marks the device to be found; initiates the finding process<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Recommission](../use/#decommissionrecommissiondevice) –** marks the device **In Service** to place into the active device pool, the collection of devices with active server communication<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Decommission](../use/#decommissionrecommissiondevice) –** removes the device from the active device pool<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[View Details](../mgmt/#deviceinformation) –** provides device data: friendly name, device model, serial number, last connected AP, battery level, battery status, device state, site name, last reported, display on, note<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ **[Add/Edit a note](../use/#addeditnote) -** add text to capture the reason for decommissioning a device, for example: “device screen damaged”.
  <br>

- Includes all Associate actions
-->
### Associate Role

Associate functions and capabilties:

* [Device Check-out/Check-in](../use/#devicecheckout)
* [View marked devices list](../use/#finddevice) (for retrieval)
* [Find devices](../use/#finddevice) using the BLE proximity meter and audio chirp
* [Mark devices as found or cannot be found](../use/#finddevice)

<!--
Associates have the capability to find misplaced devices.
<br>
Features and functions of associates:<br>

- No login required
- [Actions:](../use) <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ View list of devices to find (**To Be Found** device list)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Locate a device using last connected AP location, visual Bluetooth proximity indicator and play sound<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Mark device as **Found** or **Cannot Find**<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ Use device check-out/check-in _(optional)_
-->
---

## Manage Users

Administrator and manager user accounts are created and managed through the web portal. Access the web portal by entering the URL provided by Zebra in a [supported browser](../setup/#webportalrequirements).

<img style="height:250px" src="web-portal.png"/>

_Device Tracker web portal_

### Add User

To add an admin or manager user account:

1. Login to the web portal as an administrator
2. In the web portal, tap **Manage Users** in the left menu.
3. Select the role of the new user: Admin or Manager
4. Enter the information prompted, including the email and password based on the following guidelines:
    * **Login ID guidelines:** 
        * Must be a valid email
        * Maximum length: 255 characters
        * Special characters allowed prior to '@': `! ~ # $ % ^ & * - _ + = {} | ' / ?`
        * Characters allowed after '@': `. -`
        * Spaces are not allowed
        * '@' character is only allowed once
        * '.' is only allowed in the middle of alphanumeric characters before and after '@'.
    * **Password guidelines:**
        * Minimum length: 6 characters
        * Any combination of letters, numbers and symbols (ASCII-standard characters) are accepted
5. Tap **Add User.**
6. The new user is added to the **All Users** list.
<br>

### Delete User

To delete an admin or manager user account (administrators only):

1. Login to the web portal as an administrator.
2. From the web portal, tap **Manage Users** in the left menu.
3. From the list of users, locate the user to delete and click on the _delete icon_ next to the user.
4. Click **OK** in the confirmation message.
<br>

### Search for User

Admins or manager user accounts can be searched by email address. The entire email address must be entered. Action can be taken on the user from the search results.

<p>To search for a user:</p>

1. Login to the web portal as an administrator or manager.
2. From the web portal, tap **Manager Users** in the left menu.
3. Enter the email address to search for in the search field located below the **Add User** button from the top right of the page. Press the enter key.
4. The search results are displayed.
<br>

### Reset Password

The password can be reset through the web portal or the client app if the administrator or manager forgot the password.

<p>Steps to reset the password in the web portal:</p>

1. From the web portal login page, click **Forgot your password.**
2. Enter your email address then click **Reset Password.**
3. A message appears indicating a password reset email is sent.
4. Open the email and click on the link.
5. Enter in the new password based on the following guidelines:
    * Minimum length: 6 characters
    * Any combination of letters, numbers and symbols (ASCII-standard characters) are accepted.
6. The password is reset with the new password.

---

## Configure Device Check-out

Device check-out is an _optional_ feature that displays an overlay on top of the screen to enforce the user to scan their unique barcode, maintaining user accountability of the device.  When enabled, user operation in the check-out screen is limited to only scanning barcodes, preventing device access until the barcode is scanned. If any other app also uses a screen overlay, the check-out/check-in feature may conflict with the other app. For example, this feature cannot be used with Zebra’s MotionWorks Proximity application. By default, no barcode prefix is defined allowing all barcodes to be accepted. Set a [barcode prefix](../config/#setbarcodeprefix) to only allow check-out if the barcode scanned begins with the specified prefix.

Check-out/Check-in scenarios:
- **Check-out:** At the start of a work shift, the user checks-out the device by scanning their unique barcode. This associates the user with the device, as seen in the device card and device details screen.
- **Check-in:** At the end of a work shift, the user checks-in the device by placing it on a powered cradle or logging out from the top-right menu of the main device screen. After check-in, the user is no longer associated with the device.

**Enable device check-out:**
Access the web portal by entering the URL provided by Zebra in a [supported browser](../setup/#webportalrequirements).
1. Login to the web portal as an administrator.
2. Tap **Settings** in the left menu.
3. Enable **Checkin/Checkout**.

When enabled, checked-out devices appear in the [dashboard](../use/#monitordevices) monitored by administrators and managers.

### Set Barcode Prefix

The administrator can configure a prefix to restrict check-out to occur only when barcodes are scanned that begin with the specified prefix in the form of a character string. If a barcode scanned does not contain the prefix, check-out is not successful.
<br>
When generating a barcode with the prefix, the specified prefix is followed by the username identifier. The following is a sample barcode containing prefix “NGDTRK-” and username “JohnDoe”:
<img style="height:80px" src="barcode-prefix.png"/>
_Sample barcode with prefix and username: "NGDTRK-JohnDoe"_
<br>

**To set the barcode prefix:**
Access the web portal by entering the URL provided by Zebra in a [supported browser](../setup/#webportalrequirements).
1. Login to the web portal as an administrator.
2. Tap **Settings** in the left menu.
3. Enable **Checkin/Checkout**. This exposes the **Prefix** field in the Application Configuration screen.
4. **Enter the desired text for the prefix.** Only barcodes that begin with the specified prefix can grant access to the device. If all barcodes should be accepted with no prefix, keep the entry blank. 

---

## Register Devices

Administrators register device information along with friendly names and site assignments to aid in identifying, tracking and locating devices. A sample device .CSV file is supplied by Zebra for the administrator to populate with the appropriate data. After making the appropriate modifications, copy the populated .CSV file to the mobile device for device data to be imported through the client app. Importing data either modifies or adds entries to the existing database, unless deleting a device. The data fields are:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">CSV File</th>
    <th style="text-align:center">Data</th>
    <th style="text-align:center">Description</th>
    <th style="text-align:center">Required</th>
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

Sample Import Device .CSV file content:
<pre class="prettify">
    <code>
        ModelNumber,SerialNumber,DeviceFriendlyName,SiteName
        TC51,17009522509812,Inventory1,Chicago
        TC51,17009522509813,Inventory2,Los Angeles
    </code>
</pre>

When modifying the .CSV file, keep the header information intact and replace the sample data with the appropriate data desired. Special characters, such as '.', '#', '$', '[', or ']', are not supported. The .CSV file cannot be UTF-8 encoded, otherwise an error can occur; it must be saved in a normal comma separated values format.

### Import Devices

Import device data to register the device information from the populated .CSV file. A maximum of 20,000 rcords can be imported at one time.

**To import the device .CSV file to add/modify device data:**

1. Copy the populated .CSV file containing device data from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Device CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Device CSV File,** tap **Upload CSV.**
7. The device data import is complete. Results are displayed in the **Status** section at the bottom of the screen.  
<p>New devices imported are initially in the <b>Never Connected</b> state until the Device Tracker app is installed on the devices, configured and communicating with the server.</p>

### Delete Devices

Deleting a device removes device data from the Device Tracker solution after uninstalling the client app.<!--and places it under **Unassigned Devices** in the device dashboard--> When a device is deleted, the license is deallocated and released to the license pool. A maximum of 5,000 records can be removed at one time.

<p><b>Prerequisite:</b> Prior to deleting a device, uninstall the Device Tracker application on the device.</p>

**To import the device .CSV file to delete a device:**

1. Copy the .CSV file containing the removed device record from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Delete Device CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Delete Device CSV File,** tap **Upload CSV.**
7. The specified device data is removed from the system. Results are displayed in the **Status** section at the bottom of the screen.

Sample Delete Device .CSV file content:
<pre class="prettify">
    <code>
        ModelNumber,SerialNumber
        TC51,17009522509812
        TC51,17009522509813
    </code>
</pre>

When modifying the .CSV file, keep the header information intact and replace the sample data with the appropriate data desired. It is particularly important for the AP location friendly name to be easily understood for users to determine the location within the facility when finding a device. Special characters, such as '.', '#', '$', '[', or ']', are not supported. The .CSV file cannot be UTF-8 encoded, otherwise an error can occur; it must be saved in a normal comma separated values format.<br>

---

## Register Access Points & Sites

Similar to registering devices, administrators register site names and access points with friendly names to aid in identifying, tracking and locating devices. A sample AP file is supplied by Zebra for the administrator to populate with the appropriate data. Copy the populated .CSV file to the mobile device for the data to be imported through the client app. Importing data either modifies or adds entries to the existing database. The data fields are:

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
</table>

Sample Import AP .CSV file content:
<pre class="prettify">
    <code>
        SiteName,BSSID,AssetName,LocationFriendlyName
        New York,14:a7:2b:24:cc:a5,,First Floor Reception Area
    </code>
</pre>

When modifying the .CSV file, keep the header information intact and replace the sample data with the appropriate data desired. It is particularly important for the AP location friendly name to be easily understood for users to determine the location within the facility when finding a device. Special characters, such as '.', '#', '$', '[', or ']', are not supported. The .CSV file cannot be UTF-8 encoded, otherwise an error can occur; it must be saved in a normal comma separated values format.

### Import Site and AP Data

Import site and AP data to register the information with the server. When adding or modifying site and AP data, it is important for the AP friendly name to be easily understood by users to aid in finding the location where the device is connected. A maximum of 20,000 records can be imported at one time.

**To import site/AP data:**

1. Copy the populated .CSV file containing site and AP data from the PC to the device root `\Internal shared storage` folder.
2. In the client app, login as the admin. In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3. Tap the top right options menu and select **Settings,** which is now visible.
4. Tap **Import Access Points/Sites/Devices.**
5. Under the section **Import Access Point CSV File,** tap **Browse File.** Browse and select the appropriate .CSV file.
6. Under the section **Import Access Point CSV File,** tap **Upload CSV.**
7. The AP data import is complete. Results are displayed in the **Status** section at the bottom of the screen. <br>

---
<!-- 
## Secondary BLE

For devices with secondary BLE beaconing capability, Device Tracker can locate the device if it loses power due to critically low battery or is manually powered off. Locationing is based on signals transmitted from the secondary BLE beacon. Attempts to locate the device must occur soon after the device loses power, prior to loss of power of the secondary BLE beacon. In this circumstance, the **Play Sound** feature is disabled during device search since it cannot function due to the loss of device power.

<p>See <a href="../setup/#secondarybleprofile">Secondary BLE Profile</a> to enable the secondary BLE beacon.</p>

The <a href="../mgmt/#devicedetails">Secondary BLE state</a> is viewed from the **Device Details** screen.


---

## Web Portal

In the web portal, administrators can:

- Enable device check-out
- Create and manage users
- Reset passwords
- View license information
<br>
<p>In a supported browser, enter the URL shared by Zebra to access the web portal. For first-time use, login with the super administrator (SuperAdmin) credentials provided by Zebra.</p>

Supported browsers:

- Chrome
- Edge
- Safari (v14.0 and later)

<img style="height:250px" src="web-portal.png"/>

_Device Tracker web portal_

### Device Check-out

Device check-out is an _optional_ feature that maintains user accountability and traces device use. When enabled, a unique barcode is required for each user to scan at the start of their work shift. User operation in the check-out screen is limited to only scanning barcodes. The check-out screen is in kiosk mode, preventing the user from accessing the device until check-out is performed.

- **Check-out:** At the start of a work shift, the user checks-out the device by scanning their unique barcode. This associates the user with the device, as seen in the device card and device details screen.
- **Check-in:** At the end of a work shift, the user checks-in the device by placing it on a powered cradle or logging out through the top-right menu from the main device screen. After check-in, the user is no longer associated with the device.
<br>
<p>The check-out/check-in feature displays an overlay on top of the screen to enforce the user to scan their unique barcode, maintaining user accountability of the device. If any other app also uses a screen overlay, the check-out/check-in feature may conflict with the other app. For example, this feature cannot be used with Zebra’s MotionWorks Proximity application.</p>

**Enable device check-out:**

1. From the web portal, tap **Settings** in the left menu.
2. Toggle **Checkin/Checkout** to enable the feature.
<p>If enabled, Checkout appears as a device state in the administrator and manager dashboard listing the devices that are checked-out.</p>

#### Set Check-out Barcode Prefix

When check-out is enabled, by default no prefix is defined allowing all barcodes to be accepted. The administrator can configure a prefix in the form of a character string, adding a restriction to accept only barcodes that begin with the specified prefix. If a barcode scanned does not contain the prefix, check-out is not successful.
<br>
When generating a barcode with the prefix, the specified prefix is followed by the username identifier. The following is a sample barcode containing prefix “NGDTRK-” and username “JohnDoe”:
<img style="height:80px" src="barcode-prefix.png"/>
_Sample barcode with prefix and username: "NGDTRK-JohnDoe"_
<br>

**To set the barcode prefix:**

1. **Enable Checkin/Checkout the web portal.** This exposes the Prefix field in the Application Configuration screen.
2. **Enter the desired text for the prefix.** If all barcodes should be accepted with no prefix, keep the entry blank.
   <br>
   Only barcodes that begin with the specified prefix can initiate the checkout.

### Add User

To add a user:

1. From the web portal, tap **Manage Users** in the left menu.
2. Select the role of the new user: Admin or Manager
3. Enter the information prompted, including the email and password based on the following guidelines:
    * **Login ID guidelines:** 
        * Must be a valid email
        * Maximum length: 255 characters
        * Special characters allowed prior to '@': `! ~ # $ % ^ & * - _ + = {} | ' / ?`
        * Characters allowed after '@': `. -`
        * Spaces are not allowed
        * '@' character is only allowed once
        * '.' is only allowed in the middle of alphanumeric characters before and after '@'.
    * **Password guidelines:**
        * Minimum length: 6 characters
        * Any combination of letters, numbers and symbols (ASCII-standard characters) are accepted

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
5. Enter in the new password based on the following guidelines:
    * Minimum length: 6 characters
    * Any combination of letters, numbers and symbols (ASCII-standard characters) are accepted.
6. The password is reset with the new password.
   <br>

### View License Information

[Licenses](../license) are required for Device Tracker operation on devices. Licenses are combined into a single license pool regardless of expiration date. When a device registers to the Device Tracker server, if a license available, it is allocated to the device from the license pool.

<p>To view license information:</p>

1. From the web portal, tap **License Summary** in the left menu.
2. The following information is provided based on unexpired licenses:
   - **Total licenses -** quantity of licenses that have been purchased
     - **Total licenses available -** quantity of licenses that are available and can be allocated to devices
     - **Total licenses consumed -** quantity of licenses allocated to devices
   - **List of licenses purchased** with corresponding quantity and expiration date. This data is static and removed from the list after the expiration date is surpassed.
   - **Sync Licenses** button to refresh license data on-demand and synchronize with the Zebra Enterprise Software Licensing system. The license information is updated once each day.
   - **Time stamp** of the last occurrence when the license information was synchronized with the license server.

<img style="height:250px" src="license.png"/>

_License Summary in Device Tracker web portal_

---

## Diagnostics

For diagnostic purposes, logging can be enabled in Device Tracker to capture application and system information to Android logcat. [RxLogger](/rxlogger) is a built-in tool on Zebra Android devices that collects data and event logs from logcat and stores them in a single location. If issues are encountered, a Zebra representative may request for the log files to be collected and supplied. There are 2 methods to capture logging: StageNow or EMM (Enterprise Mobility Management) system.

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

- To enable logging:

        <wap-provisioningdoc>
            <characteristic version="1.0" type="com.zebra.devicetracker">
                <parm name="EnableLog" value="1" />
            </characteristic>
        </wap-provisioningdoc>

- To disable logging:

        <wap-provisioningdoc>
            <characteristic version="1.0" type="com.zebra.devicetracker">
                <parm name="EnableLog" value="0" />
            </characteristic>
        </wap-provisioningdoc>

Send the desired XML content to the EMM using either [OEMConfig](/oemconfig) or [MX](/mx/overview) to configure the app.
<br><br>

---
-->

## Diagnostics

For diagnostic purposes, logging can be enabled in Device Tracker to capture application and system information to Android logcat. [RxLogger](/rxlogger) is a built-in tool on Zebra Android devices that collects data and event logs from logcat and stores them in a single location. If issues are encountered, a Zebra representative may request for the log files to be collected and supplied. <br<br>
There are 2 methods to capture logging: StageNow or EMM.

### Using StageNow

To use StageNow to capture logging:

1. Open StageNow on the device.
2. Scan the barcode to enable Device Tracker logging and start RxLogger log capture:
   <img style="height:150px" src="start-rxlogger.png"/>

3. Reproduce the issue.
4. Scan the barcode to disable Device Tracker logging and stop RxLogger log capture:
   <img style="height:150px" src="stop-rxlogger.png"/>

<p>Logs are located in the RxLogger folder (default location: /sdcard/RxLogger).</p>
 
### Using EMM

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

---
## See Also

- [About Device Tracker](../about)
- [Installation](../setup)
- [Track Devices](../use)
- [License](../license)