---
title: Battery Management
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
---

This section provides information on battery management for PowerPrecision Console (PPC).

## What is SOH?
SOH (state-of-health) uses various electrical parameters related to monitoring, tracking and estimating the battery deterioration rate to calculate the gauge for SOH. Given the nature of the battery manufacturing industry where individual battery cells inherently behave differently in each manufactured battery, SOH is only an approximate measurement. [Client Settings](../admin/#clientconfiguration) from the Admin UI provide default thresholds to serve as a guideline based on historical data from our customers, but there is no "one value fits all". We encourage the SOH threshold values to be adjusted based on various factors in battery performance from customer experience in different shifts, locations and environments.

## Battery Enrollment
Once the PPC Client is installed on the device and [configured with the server URL](../setup/#clientinstall&setup), it automatically enrolls the battery to the server. Batteries send data to the server based on the time interval and data trigger events selected in the Data Collection Triggers section from the Admin UI [Client Settings](../config/clientconfiguration) tab. The [Admin View](../admin) automatically categorizes the batteries into “good” (green), “nearing end-of-life” (amber) and “end-of-life” (red) SOH categories based on the SOH thresholds defined in the Client Settings. 

##Manually Add Batteries
In the [Admin View](../admin), use the **Add Battery** tab to manually add a battery. This can be useful to add extra batteries that have no corresonding device or in situations where lack of network connectivity prevents the battery from registering with the server. Once the battery can be registered, the record will be updated with the battery.  
Note: Batteries cannot be manually removed once added. 

##Power Precision Batteries
PowerPrecision batteries provide more limited battery information compared to PowerPrecision+ batteries.   are not displayed by default on the Admin UI. 
Steps are required to display PowerPrecision batteries:
 1.  On the PPC Server, open the .env file (by default in folder: \PowerPrecision Console\Release\Server\WebUI). Change the property 
 <br>
**PP_BATTERY_SUPPORT = "false"**
 <br>
 to 
 <br>
**PP_BATTERY_SUPPORT = "true"**
 2. Open application.properties file (by default in folder: \PowerPrecision Console\Release\Server\PowerPrecisionConsoleServer\config). Change the property 		<br>
**pp.battery.support=false**
 <br>
 to 
 <br>
**property pp.battery.support=true**
 3. Restart the server.
 4. PowerPrecision batteries are displayed in the Admin View and "Charge Cycles" column is added to the Admin View.

##Battery History
View battery history by navigating to the **Active** tab from the [Admin View](../admin) and clicking on any battery listed. Complete battery information and history is displayed such as SOH, SOC, voltage, temperature, battery type, EOL snooze, trigger event, last updated and more. The chart displays SOH and SOC over time. It may be customized to display only SOH or SOC, including SOC.

##Export Report
To export a report of all data, in the [Admin View](../admin) click on the Export Data icon on the top right.  Select CSV to download all data in .csv file format.  

<br>

-----

## See Also

* [About PowerPrecision Console](../about)
* [PowerPrecision Console Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)