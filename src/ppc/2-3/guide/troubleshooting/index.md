---
title: Troubleshooting & FAQ
layout: guide.html
product: PowerPrecision Console
productversion: '2.3.1'
---
## Overview

This section covers troubleshooting steps and Frequently Asked Questions.


##Troubleshooting
This section discusses common issues that can occur and possible solutions. Server log files, located in default folder `\Program Files (x86)\Zebra Technologies\ZDVC\Backend Server\log`, can help diagnose issues encountered. 

###Issues related to server certificate
Possible issues or causes:
* **Error "Unable to write 'random state'" occurs when generating the SSL certificate with OpenSSL.** The command prompt may need to be launched in "Run As Administrator" mode.
* **"Warning: Can't open config file [folder_path]/openssl.cnf" occurs when generating the SSL certificate with OpenSSL.** An OpenSSL variable may need to be set in the Windows system with the following command:
`set OPENSSL_CONF=c:\[folder_path]\openssl.cnf`<br>
where [folder_path] is the path to the OpenSSL directory.
* **Error related to passphrase or certificate password.** Verify the certificate password is entered correctly during installation. Perform the server installation again to enter the correct certificate password.

###Cannot start server
It is possible the certificate password entered during server installation does not match the actual certificate. Perform the server installation again to enter the correct certificate password.

###Cannot login or connect to server
Possible causes:
* **No communication between the server and web portal.** Verify there is communication between the server and web portal by checking whether an endpoint is accessible through the browser. This is accomplished by appending a single endpoint to the server URL. For example: `https://hostname.company.com:8080/zdvc/dtrk/admindevops/getDeviceStatisticsSummary`, where endpoint `/zdvc/dtrk/admindevops/getDeviceStatisticsSummary` is appended to server URL `https://hostname.company.com:8080`.<br>
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

* **Incorrect server ports.** The ports specified during [server installation](../setup#serverinstallation) must match the ports specified in files **.env** (from default folder: `/Program Files/Zebra Technologies/ZDVC/WebUI`) and **application.properties** (from default folder: `/Program Files/Zebra Technologies/ZDVC/BackendServer/config`). 
<br>
<br>

###Server information is outdated
If updated information is not seen in the server [Admin View](../admin), refresh the web page in the browser.
<br>
<br>
###Device does not connect to server

Possible causes:
* Ensure the the **Server URL, Server Auth UserName** and **Server Auth Password** are entered correctly. The **Server URL** can be obtained from the **Server Settings** tab in the  [admin view](../admin) in the format: `hostname.company.com:8080/zdvc`, where "hostname.company.com" and the port number "8080" is replaced with the appropriate information.
* Network issues could be preventing communication from the device to the server. Verify network connectivity.
<br>
<br>
###Device client app is unresponsive
There could be a network delay in contacting the server. Wait for some time to elapse and then retry. Otherwise check for network issues.
<br>
<br>
##FAQ
Frequently Asked Questions:

###Can I use a self-signed certificate?
Starting with PowerPrecision Console 2.3.1, support for self-signed certificates was added to help simplify deployment of product demos and trials. An SSL certificate is still required for secure communications.
<br>


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
