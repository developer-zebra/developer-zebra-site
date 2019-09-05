---
title: Troubleshooting & FAQ
layout: guide.html
product: PowerPrecision Console
productversion: '1.0'
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

<br>
<br>
##FAQ
Frequently Asked Questions:

###Can I use a self-signed certificate?
An SSL Certificate is required from a third-party certificate authority (CA), such as Verisign or Thawte. Any self-signed certificate or one issued by a non third-party CA will not work. The .pfx certificate must contain the complete certificate chain, including intermediate certificates.

###What are the login credentials required to use PowerPrecision Console?
**Web portal:** To access the web portal, enter the server URL in the browser based on your [installation](../setup#serverinstallation), for example: `https://hostname.company.com:8443/zdvc`, where "hostname.company.com:8443" is replaced with the appropriate domain and port number. The default super administrator user name is **SAdmin**. The password is the **SuperAdmin and DB Password** entered during [server installation](../setup#serverinstallation). [Additional users can be added](../admin#manageusers) based on Admin, Manager, and User roles.

**Client devices:** Devices must be configured with the Server URL, Server Auth Key, and Server Auth Password set during [server installation](../setup#serverinstallation).
<br>
-----

## See Also

* [About PowerPrecision Console](../about)
* [Install & Setup](../setup)
* [Admin View](../admin)
* [Battery Management](../mgmt)
* [EOL Management](../eol)
* [Configuration](../config)
