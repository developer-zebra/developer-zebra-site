---
title: Configuration
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---

##Overview
This section covers configuration settings for PowerPrecision Console (PPC) on the server and client.

##Server Configuration
In the [Admin View](../admin), click on the **Server Settings** tab. The server address is displayed. The store location can be edited to enter in location identification. 

##Client Configuration
In the Admin View, navigate to the **Client Settings** tab.

![img](client_settings.jpg)
_Figure 1. Client Settings_

These are global settings to configure PPC Client behavior.

* [**State of Health Thresholds**](../mgmt/#whatissoh) 
 * **Automatic EOL** – When enabled, the EOL request is automatically sent to the PPC client when the battery reaches the specified **End of Life Threshold** values.    
 * **Threshold values**<sup>[1]</sup> - Specifies the threshold values for each color-coded SOH battery state in the dashboard. By default the thresholds are:
	  * End of Life Threshold: 80 (minimum value: 75)
	  * Warning Threshold: 85 (maximum value: 90)
<br>
These default thresholds correlate to the color-coded SOH as follows: 
 <br>
 	**Green** – up to approximately 90% battery life capacity remaining  
 	**Amber** – up to approximately 75% battery life capacity remaining 
<br>
	**Red** – less than approximately 75% battery life capacity remaining 
<br>

* **Data Collection Triggers** - Determines what device information is collected and when to send the information to the server. Select the desired events to trigger data collection on the device and the amount of time elapsed in between each trigger event. When an event is triggered, it is logged in the device history. The minimal time period that can be selected is 1 hour. 

* **EOL Alerts** - When enabled, sends an EOL alert notifying the user to prepare for battery decommissioning based on the time trigger options: Show Alert On Next Boot, Show Alert On Next Battery Swap, Show Alert At [specified time]. 
<br>
	**Max Snooze Count** – specify the maximum number of times to snooze until decommissioning is required
<br>
	**Show Alert On Next Boot** – display the EOL message upon next device boot
<br>
	**Show Alert On Next Battery Swap** – display the EOL message upon next battery swap
<br>
	**Show Alert At** – specify a daily time to display the EOL message  
<br>

##Manage Users
Create additional users to access the server. After logging in as the administrator, click on the admin name at the top right of the Admin View and select Manage Users.  

To add a user:
1. Click on the Action button.
2. Select Add User.
3. Enter in the required fields.  Select the Access Type based on role: 
	* **Admin** - administrative privileges with ability to create user accounts, perform action on batteries, and view data
	* **Manager** - ability to perform action on batteries, but cannot create users or perform any user management
	* **User** - ability to view data
4. Click Save.
5. Click OK when the confirmation message appears.

<br>
<sup>[1]</sup>**Threshold Value in PPC and Battery Manager** - Battery Manager is a built-in application with the “Percentage decommission threshold” set to 90% by default. This is the same default value for “End of Life Threshold” on PPC. To avoid multiple warning notifications being sent to the end-user with the same message when the battery reaches the percent threshold, we recommend the admin to set the “Percentage Decommission Threshold” value in Battery Manager to 5% less than the “End of Life Threshold” value set on the PPC server. This can be accomplished using an EMM such as [StageNow](/stagenow/latest/about) or Zebra's [Battery Manager CSP](/mx/batterymgr). 
<br>
-----

## See Also

* [About PowerPrecision Console](../about)
* [PowerPrecision Console Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Troubleshooting & FAQ](../troubleshooting)