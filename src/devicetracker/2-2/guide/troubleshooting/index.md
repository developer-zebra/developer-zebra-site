---
title: Troubleshooting & FAQ
layout: guide.html
product: Device Tracker
productversion: '2.2'
---
## Overview

This section covers troubleshooting steps as well as Frequently Asked Questions.


##Troubleshooting
This section discusses common issues that can occur and possible solutions. Server log files can help identify any server errors or exceptions, located in default folder `\Program Files (x86)\Zebra Technologies\ZDVC\Backend Server\log`. 

###Cannot login or connect to server
Possible causes:
* **No communication between the server and web portal.** Verify there is communication between the server and web portal by checking whether an endpoint is accessible through the browser. This is accomplished by appending a single endpoint to the server URL. For example: `https://hostname.company.com:8081/zdvc/dtrk/admindevops/getDeviceStatisticsSummary`, where endpoint `/zdvc/dtrk/admindevops/getDeviceStatisticsSummary` is appended to server URL `https://hostname.company.com:8081`.<br>
Sample result string:
<br>
<br>
<i>
    {"neverConnected":43,"outOfService":8,"connected":16,"disconnected":276,"normal":254,"toBeFound":6,"findInProgress":14,"deviceFound":14,
    "charging":84,"batteryLow":37,"devicesTracked":335,"cannotFindDevice":2}
</i>
<br>
<br>
If the endpoint is not accessible, there is no communication between the server and web portal.  Verify that the server is running. It is possible that the certificate is invalid. 

* **Incorrect server ports.** The ports specified during [server installation](../setup#serverinstallation) must match the ports specified in files **.env** (from default folder: /Program Files/Zebra Technologies/ZDVC/WebUI) and **application.properties** (from default folder: /Program Files/Zebra Technologies/ZDVC/BackendServer/config). 


###Cannot import .csv file containing access point or device data
Make sure to have write permissions to the ZDVC folder and subfolders.
<br>
<br>
##FAQ
Frequently Asked Questions:
###How do I delete entries?
Currently there is no ability to delete device entries from the [admin view](../admin). Device records can be set to **[out of service](../admin)**, preventing them from being displayed the main dashboard. Alternatively, a [tag can be added](../admin#organizedevices) to the device to aid in categorization.

###Can I use a self-signed certificate?
An SSL Certificate is required from a third-party certificate authority (CA), such as Verisign or Thawte. Any self-signed certificate or one issued by a non third-party CA will not work. The .pfx certificate must contain the complete certificate chain, including intermediate certificates.

###What are the login credentials required to use Device Tracker?
**Web portal:** To access the web portal, enter the server URL in the browser based on your [installation](../setup#serverinstallation), for example: `https://hostname.company.com:8443/zdvc`, where "hostname.company.com:8443" is replaced with the appropriate domain and port number. The default super administrator user name is **SAdmin**. The password is the **SuperAdmin and DB Password** entered during [server installation](../setup#serverinstallation). [Additional users can be added](../admin#manageusers) based on Admin, Manager, and User roles.

**Client devices:** Devices must be configured with the Server URL, Server Auth Key, and Server Auth Password set during [server installation](../setup#serverinstallation).
<br>
-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Admin View](../admin)
* [Device Tracking](../mgmt)
* [Configuration](../config)
