---
title: Configuration
layout: guide.html
product: DEX Scan & Pair
productversion: '1.5'
---

## Overview
This section discusses configuration settings and reporting for Diagnostic Tool.

##Configuration Files
Each subsystem test can be enabled/disabled by setting the corresponding flag in `/SelfDiagnostics/SelfDiagnosticSettings.txt` file on the device. Set to "0" to disable, "1" to enable. The format of selfdiagnosticsettings.txt follows:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;battery=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bluetooth=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gps=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wwan=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wlan=1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;system=1  
<br>
##Settings 
Accessible by tapping on the hamburger menu at the top right of the main screen then selecting **Settings**. Enable/disable the subsystem (Battery, GPS, System, WLAN, WWAN, Bluetooth) tests to be conducted then tap **Save**. Optionally, tap the **Restore Defaults** button to restore the default selection based on the device. 

##Report 
A snapshot report of the last test executed is located on the device in file path `\SelfDiagnostics\SelfDiagnosticLogs.ini`. All information collected during the test is logged in this file. The time stamp is provided under section DiagnosticResults. Test properties are listed in the respective subsystem: System, Bluetooth, WLAN, GPS, WWAN, and Battery. 


<br>
<br>
<br>

## See Also

* [About Diagnostic Tool](../about)
* [Usage Guide](../usage)
* [Test Criteria](../criteria)


