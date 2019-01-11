---
title: Admin View
layout: guide.html
product: Device Tracker
productversion: '1.0'
---

## Overview
This section discusses the operations available for an administrator, providing a centralized view for device tracking when locating misplaced devices. 

As part of Zebra’s DNA Visibility Console, there are multiple apps available.  At the login screen, select “Device Tracker”, then sign in. To navigate to other apps, click on the app menu icon at the top to the right of the "Device Tracker" title and select the desired app.

## Using the Web Console

Device Tracker provides a centralized dashboard displaying an inventory of deployed Zebra devices, along with information on the current or last-known area of presence from connected Access Point (AP) information. The top dashboard is lined with tiles that provide the total number of devices for each respective category and filter the devices based on that category with a click on the tile. The columns on the dashboard can be sorted by clicking on the double triangle to the right of the column name. Subsequent clicks sort the column in ascending order (triangle points upward) or descending order (triangle points downward). A tabbed menu is displayed at the top of the dashboard above the tiles providing access to different views: Active, Out of Service, and Settings. 

![img](DTRK_dashboard.jpg)
_Figure 1. Admin Dashboard_

Device Tracker tiles: 

* **Total Tracked** - Displays total number of devices being tracked.  

* Tracking status tiles:
 * **To Be Found** – Filters devices that need to be found and action has not been taken yet.
 * **Being Found** – Filters devices which action has been taken to find the misplaced device.
 * **Found** – Filters devices which a search was conducted and the device was tracked and found.
 * **Cannot Find** – Filters devices which a search was conducted but the device could not be found.

* Connection state tiles:
 * **Connected** – Filters devices connected to the network.
 * **Not Connected** – Filters devices that have surpassed the Disconnect Threshold Time in the Settings tab, designating the device as disconnected from the network and therefore cannot be found. 

* Battery status tiles:
 * **Low Battery** – Filters devices that have surpassed the [Low Power Alert Threshold](../config) value defined in the Settings tab and are therefore in low battery state. Low Battery devices require attention to be charged before the battery becomes depleted, preventing loss of device tracking.
     * **On Charge** – Filters devices that are powered and in the charge state. 

A search can be conducted based on device information from the table columns: Status, Connection State, AP Name, Battery State, Device Name, Device Model, Device Serial #, and Tags. In the Active tab, click the magnifying glass to produce a drop down menu and select the data to search. Depending on the data being searched, a prompt may appear to select data to refine the search. If required, enter in the text to search when prompted.

Notes: 
* If no icon is displayed in the battery status column, it indicates that the device battery is not being charged and there is sufficient device battery charge.
* When the checkbox in the table header is ticked on the dashboard, it selects all batteries listed in the page. 
* At the bottom left of the dashboard, select the "rows per page" drop-down and choose the value to increase the number of batteries displayed in the dashboard.

##Device Action
Action can be taken on any selected device(s) in the Active tab.  Once the device is selected from the dashboard, the Action menu is accessible with the following options:
* **Set device: To be found** – Marks the device to be found.  This initiates the tracking process. The Device Tracker client displays the marked device in the “Devices to be found” screen. A user can tap on the device listed then tap “Go” to begin searching for the marked device. 
* **Set device to: Out of service** – Removes the device from the device pool and places it into the **Out of Service** tab. This can be used when a device is undergoing repair or is deprecated and no longer in use so must be removed from the device pool.
* **Set device to: Active** - This option is available if a device is found
* **Manage Tags** – Refer to [Organize Devices](./#organizedevices) section below.  
* **Clear Selections** – Unselects any selected devices in the dashboard.

##Organize Devices
Device tags provide the capability to identify and group devices for organizational purposes based on a common tag name. This name can be any desired form of identification such as location, department or job function. Device tagging is performed in the Active tab.

**Add Tag** – add or append a tag to any pre-existing list of tags for each device
1. Select the device to tag. Tick the checkbox for the device row.
2. In the Action menu at the top left of the table, select “Manage Tags”.
3. Enter a tag name in the text field. Press Enter key.
4. Click Save next to the entry field.
5. Click Add in the pop-up message.
6. Click OK in the confirmation message. The selected device is now tagged with the designated text and the tag name is displayed in the Tags column on the dashboard.
The selected device is now tagged with the designated text and the tag name is displayed in the Tags column on the dashboard.

**Override Tag** - remove any pre-existing tag(s) and replace with the new tag
1. Select the device to tag. Tick the checkbox for the device row.
2. In the Action menu at the top left of the table, select “Manage Tags”.
3. Enter a tag name in the text field. Press Enter key.
4. Click Save next to the entry field.
5. Click Override in the pop-up message.
6. Click OK in the confirmation message. 
The selected device is now tagged only with the designated text and the tag name is displayed in the Tags column on the dashboard.

**Delete Tag** - delete the specified tag 
1.	Select the device to tag. Tick the checkbox for the device row.
2.	In the Action menu at the top left of the table, select “Manage Tags”.
3.	Enter a tag name in the text field. Press Enter key.
4.	Click Save next to the entry field.
5.	Click Delete in the pop-up message.
6.	Click OK in the confirmation message. 
The tag is removed from the selected device and the tag name is no longer displayed in the Tags column on the dashboard.

**Search Tag** - search for devices with the specified tag name
1.	Click on the magnifying glass at the top left above the table. Select Tags.
2.	Enter the tag to search in the field and click the Search button. While typing, existing tag names may appear – the desired tag can be selected.

##Export Data
An device report can be generated for inventory and tracking. In the **Active** tab, tap on the Export Data icon at the top right of the table and click on CSV to export the device information in .csv file format.

##Manage Users
Create additional users to access the server. After logging in as the administrator, click on the admin name at the top right of the Admin View and select **Manage Users**.

To add a user:

1. Click on the **Action** button.
2. Select **Add User**.
3. Enter in the required fields. Select the Access Type based on role:
     * Admin - administrative privileges with ability to create user accounts, perform actions, and view data
     * Manager - ability to perform actions, but cannot create users nor perform any user management
     * User - ability to view data
4. Click Save.
5. Click OK when the confirmation message appears.

<br>
<br>

-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Device Management](../mgmt)
* [Configuration](../config)