---
title: Install & Setup
layout: guide.html
product: Device Tracker
productversion: '3.0'
---
## Overview

This section discusses installation and configuration of Device Tracker. The client app (APK file) and web portal URL are supplied by Zebra. Zebra’s [StageNow](/stagenow/latest/about) tool or an EMM can be used for Device Tracker software deployment to the mobile devices.  

**Installation and configuration on the device:**

1.	**Install client APK file.**    
2.	**Disable battery optimization,** to permit the client app to continue running in the background during doze mode (Android’s power-saving feature triggered when the device is in a prolonged suspended state).
3.	**Allow overlay permission _(optional)_.**  If the Check-out feature is required to prevent users from accessing the device prior to scanning their unique user barcode, automatically allow the overlay permission for device check-out without manual intervention. See Check-out section for more information.
4.	**Deploy server settings** to communicate with the cloud server.  


Steps 1 to 3 can be accomplished by creating a StageNow installation profile and step 4 by creating a StageNow configuration profile. See the Appendix for step-by-step instructions on creating each profile.
<br><br>

**Configuration of the Device Tracker solution:**

* **Create/Manage admin and manager logins –** Administrators use the web portal to: 
    * Add/Delete administrators
    * Add/Delete site managers
    * Reset passwords
* **Configure access points -** Register access point location to identify which AP the device is connected to and aid in locating the device.
    * Assign friendly name to access point based on the AP physical location on site
    * Assign site location – to identify which site the AP belongs
* **Configure devices -** Register device information to identify the devices. 
    * Assign friendly name
    * Assign a site location 

<br>

**Configure the Check-out feature _(optional)_:**

* **Enable/Disable check-out –** Administrators toggle the check-out feature in the web portal, enforcing users to scan their user barcode at the beginning and end of their work shift to check-out and check-in their device.
* **Add/Modify barcode prefix** for the barcode used during check-out. This adds the restriction to only accept scanned barcodes that begin with the specified prefix.
* Generate user barcodes for check-out, if needed.
<br>
<br>

## Device Deployment
The device must be connected to the network during deployment. Use one of the following methods based on the desired tool for device deployment:
* **StageNow:** Open StageNow client on the device and scan the barcodes generated from the installation and configuration profiles. See Appendix. 
* **EMM:** Export each StageNow XML file from the StageNow installation and configuration profiles (see Appendix). Do not edit the XML file - it can cause unexpected behavior.  Send the XML using one of the following methods based on the mode: 
     * Device Owner mode – use OEMConfig to configure the app.
     * Device Administrator mode – use MX to configure the app.


When installation and configuration is complete, reboot the device. Once the app is started on Android O or higher devices, a Device Tracker notification message is displayed in the device notification drawer. This notification cannot be dismissed, indicating that Device Tracker is running in the background. 
<br><br>

## Site, Access Point and Device Data
Administrators register site names, access points, and device information with friendly names to aid in identifying, tracking and locating devices. Sample AP and device CSV files are supplied by Zebra for the administrator to populate with the appropriate data. Copy the populated CSV files to the mobile device for the data to be imported through the client app. Importing data either modifies or adds entries to the existing database. The data fields are:  

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
    <td style="text-align:left">Yes</td>
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
The device data fields are required in the device .CSV file whether adding or deleting devices. In each .CSV file, keep the header information intact and replace the sample data with the appropriate data desired. It is particularly important for the AP location friendly name to be easily understood for users to determine the location within the facility when finding a device.

Sample AP .CSV file content:<br>

        "SiteName","BSSID","AssetName","LocationFriendlyName"
        "New York","14:a7:2b:24:cc:a5",,"First Floor Reception Area"
<br>
Sample Device .CSV file content:<br>

        ModelNumber,SerialNumber,DeviceFriendlyName,SiteName
        TC51,17009522509812,Inventory1,Chicago
        TC51,17009522509813,Inventory2,Los Angeles

<br>

### Import Site and AP Data
When adding or modifying site and AP data, it is particularly important for the AP friendly name to be easily understood by users to aid in finding the location where the device is connected.  
<br>
To import site/AP data from the AP .CSV file:

1.	Copy the .CSV file from the PC to the device root `\Internal shared storage` folder. 
2.	In the client app, login as the admin.  In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.**  Enter the Administrator credentials and tap **Login.**
3.	Tap the top right options menu and select **Settings,** which is now visible.  
4.	Tap **Access Point/Site/Device Registration.**
5.	Under the section **Import Access Point CSV File,** tap **Browse File.**  Browse and select the appropriate .CSV file.
6.	Under the section **Import Access Point CSV File,** tap **Upload CSV.**  
7.	The AP data import is complete.  Results are displayed in the **Status** section at the bottom of the screen.  
<br>

### Import Device Data
To add/modify device data, import the device .CSV file:

1.	Copy the CSV file from the PC to the device root `\Internal shared storage` folder. 
2.	In the client app, login as the admin.  In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.**  Enter the Administrator credentials and tap **Login.**
3.	Tap the top right options menu and select **Settings,** which is now visible.
4.	Tap **Access Point/Site/Device Registration.**
5.	Under the section **Import Device CSV File,** tap **Browse File.**  Browse and select the appropriate .CSV file.
6.	Under the section **Import Device CSV File,** tap **Upload CSV.**  
7.	The device data import is complete.  Results are displayed in the **Status** section at the bottom of the screen.  
<br>

### Delete Device Data
To delete device data, import the device .CSV file containing the specific data to delete:
1.	Copy the .CSV file from the PC to the device root `\Internal shared storage` folder. 
2.	In the client app, login as the admin.  In the main screen, tap on the options menu at the top right and select **Admin/Manager Login.** Enter the Administrator credentials and tap **Login.**
3.	Tap the top right options menu and select **Settings,** which is now visible.
4.	Tap **Access Point/Site/Device Registration.**
5.	Under the section **Import Delete Device CSV File,** tap **Browse File.**  Browse and select the appropriate .CSV file.
6.	Under the section **Import Delete Device CSV File,** tap **Upload CSV.**  
7.	The specified device data is removed from the system.  Results are displayed in the **Status** section at the bottom of the screen.  
8. Reboot the device for which the data is being deleted. After reboot, the device is listed in the **Unassigned Devices** category in the dashboard.
<br>

## Web Portal
The web portal provides administrators the capabilities to: 
* create and manage users
* reset passwords
* enable check-out/check-in

In a browser, enter the URL shared by Zebra services to access the web portal. For first-time use, login with the super administrator (SuperAdmin) credentials provided by Zebra.
<br>

### Add User
To add a user:

1.	From the web console, tap **Manage Users** in the left menu.
2.	Select the role of the new user: Admin or Manager
3.	Enter the information prompted, including the email and password.
4.	Tap **Add User.**
5.	The new user is added to the **All Users** list.
<br>

### Delete User
To delete a user:

1.	From the web console, tap **Manage Users** in the left menu.
2.	From the list of users, locate the user to delete and click on the _delete icon_ next to the user.
3.	Click **OK** in the confirmation message.
<br>

### Search for User
User names can be searched by email address. The entire email address must be entered.  Action can be taken on the user after the search is performed, e.g. delete user.

To search for a user:

1.	From the web console, tap **Manager Users** in the left menu.
2.	Enter the email address to search for in the search field located below the **Add User** button from the top right of the page. Press the enter key.
3.	The search results are displayed.
<br>

### Reset Password
The password can be reset through the web portal or the client app if the administrator or manager forgot the password. 

Steps to reset the password in the web portal:

1.	From the web console login page, click **Forgot your password.**
2.	Enter your email address then click **Reset Password.**
3.	A message appears indicating a password reset email is sent.  
4.	Open the email and click on the link.
5.	Enter in the new password.
6.	The password is reset with the new password.
<br><br>


## Device Check-out

Device Check-out is an _optional_ feature that maintains user accountability and traces device use. When enabled, a unique barcode is required for each user to scan at the start of their work shift. User operation in the check-out screen is limited to only scanning barcodes. The check-out screen is in kiosk mode, preventing the user from accessing the device until check-out is performed. 

* **Check-out:** At the start of a work shift, the user checks-out the device by scanning their unique barcode. This associates the user with the device, as seen in the device card and device details screen.
* **Check-in:** At the end of a work shift, the user checks-in the device by placing it on a powered cradle or logging out through the top-right menu from the main device screen. After check-in, the user is no longer associated with the device.  


The Check-out/Check-in feature displays an overlay on top of the screen to enforce the user to scan their unique barcode, maintaining user accountability of the device. If any other app also uses a screen overlay, the check-out/check-in feature may conflict with the other app. For example, this feature cannot be used with Zebra’s MotionWorks Proximity application.
<br>

### Enable Check-out/Check-in
To toggle check-out:
1.	From the web portal, tap **Settings** in the left menu.
2.	Toggle **Checkin/Checkout** to enable the feature.
<br>
If enabled, Checkout appears as a category in the administrator and manager dashboard.
<br>

### Set Check-out Barcode Prefix
When Check-out is enabled, by default no prefix is defined allowing all barcodes to be accepted. The administrator can configure a prefix in the form of a character string, adding a restriction to accept only barcodes that begin with the specified prefix. If a barcode scanned does not contain the prefix, check-out is not successful.
<br><br>
When generating a barcode with the prefix, the specified prefix is followed by the username identifier. The following is a sample barcode containing prefix “NGDTRK-” and username “JohnDoe”: 
<img style="height:80px" src="barcode-prefix.png"/>
_Sample barcode with prefix and username: "NGDTRK-JohnDoe"_
<br><br>
To set the barcode prefix:

1.	**Enable Checkin/Checkout the web portal.** This exposes the Prefix field in the Application Configuration screen.
2.	**Enter the desired text for the prefix.** If all barcodes should be accepted with no prefix, keep the entry blank.
<br>
Only barcodes that begin with the specified prefix can initiate the checkout.
<br>
<br>

<!-- -->
-----

## See Also

* [Device Management](../mgmt)
* [Device Tracking](../use) 
