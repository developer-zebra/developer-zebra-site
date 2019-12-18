---
title: Configuration
layout: guide.html
product: Diagnostic Tool
productversion: '2.0'
---

## Overview
This section discusses configuration settings and reporting for Diagnostic Tool.

<!--
## Configuration Files
Each subsystem test can be enabled/disabled by setting the corresponding flag in `/SelfDiagnostics/SelfDiagnosticSettings.txt` file on the device. Set to "0" to disable, "1" to enable. The format of selfdiagnosticsettings.txt follows:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;battery=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bluetooth=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gps=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wwan=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wlan=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;system=1  
<br>
-->

## Settings 
The application settings is only available in admin mode. Access settings by tapping on the options menu at the top right of the main screen then select **Settings**.  
* **File path:**
     * **Configuration import path -** specifies the file name and path for the configuration file.
     * **Log output and configuration export path -** specifies the folder path for the log files and exported configuration file.
* **Status log -** editable text field to specify the status log file name.
* **History log -** editable text field to specify the history log.
* **Log File Max Size (MB) -** editable text field to specify the maximum file size for the log files.
* **Import -** imports a configuration file located in the configuration import path. 
* **Export -** exports the configurations set in the **Configure Tests** screen

## Configure Tests
Enable/disable the subsystem tests to be conducted: Scanner, Button, Touch Screen, Bluetooth, Wifi, Battery, WWAN, Audio.


## Report 
A snapshot report of the last test executed is located on the device in file path `\SelfDiagnostics\SelfDiagnosticLogs.ini`. All information collected during the test is logged in this file. The time stamp is provided under section DiagnosticResults. Test properties are listed in the respective subsystem: System, Bluetooth, WLAN, GPS, WWAN, and Battery. 


<br>
<br>
<br>

## See Also

* [About Diagnostic Tool](../about)
* [Usage Guide](../usage)
* [Test Criteria](../criteria)


