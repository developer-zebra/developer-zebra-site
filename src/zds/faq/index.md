---
title: Frequently Asked Questions
layout: guide.html
product: ZDS
menu:
  items:
    - title: About
      url: /zds/about
    - title: Setup
      url: /zds/setup
    - title: FAQ
      url: /zds/faq
    - icon: fa fa-search
      url: /zds/search
---

###Q: What is the application name of the ZDS agent on the device?

**A: The current ZDS agent is implemented as two files**:

* **Zebra Data Service** | Main analytics engine (2 MB)
* **Zebra Data Service Plugin** | Data collection plug-in (0.2 MB)

**`IMPORTANT:` Both components must be running and enabled for proper data-collection operations**.

-----

###Q: What are the server address(es) and port number(s) used by ZDS?

**A: ZDS uses the following servers**:

**<u>ZDS Server #1</u>**:
* **URL**: `https://analytics.zebra.com`
* **IP Address**: `104.198.59.61`
* **Port**: `443`

**<u>ZDS Server #2&#42;</u>**:
* **URL**: ` https://device-https.savannacore.zebra.com`
* **IP Address**: `34.68.84.87`
* **Port**: `443`
&#42; This server uses Certificate-based Mutual Authentication

> **NOTE: Devices running Android 10 and later require connectivity with <u>both</u> servers**.

-----

<!-- 5/6/21- changed but not published. To undo, also remove IP addresses from above. 

###Q: Can Zebra provide the ZDS server's IP address to help facilitate firewall setup?

**A: Yes, the IP address of Zebra's primary data collection server (#2) is**: 

* `34.68.84.87` 
* Port 443

5/7/21- added 5/6 per eng, then removed 5/7 per eng: 
* **Access to Server 2 requires a valid security certificate**, which is built into the Common Transport Layer app. The server is not generally reachable through a browser.

----- 
-->
###Q: How frequently does the ZDS Agent upload device data to the server?

**A: The default upload frequency is once every 24 hours**.

-----

###Q: Is the 24-hour period the same for every device? 

**A: No, the upload cycle is different for each device. It begins when the device is first powered up and cannot be changed or configured to vary by connection or network type. The first upload occurs approximately 24 hours after first boot. Upload times are designed to vary randomly by three minutes (plus or minus) to help spread inbound server traffic throuhgout the period. To view the latest upload time for a device, see [Check ZDS Status](../setup/#checkzdsstatus) in the Setup guide**. 

-----

###Q: How much collected data is stored on the device each day?

**A: ZDS stores a maximum of 70 KB on the device each day**.

-----

###Q: How much data is sent back during each upload?

**A: ZDS sends a maximum of 2 MB of (compressed) data with each upload**.

-----

###Q: After data is uploaded from a device, where can it be viewed? 

**A: ZDS data can be viewed on the [Zebra Foresight](https://www.zebra.com/us/en/services/visibilityiq/foresight.html) server**.  

-----

###Q: What is the size of the ZDS update download?

**A: The size of ZDS components can vary, but its maximum download size is about 10MB&#42; in total. The system consists of the following components**: 

* ZDS Client and Plug-in components (combined size: 2.2&ndash;4MB)
* Zebra Common Transport Layer (about 4MB)
* Zebra Life Guard Enablement (LGE) Client (about 2MB)

&#42;<i><font size="2" color="grey">Not all components are downloaded with every update.</font></i>

-----

###Q: Does ZDS self-update?

**A: Yes, Zebra updates one or more ZDS components every 3-4 months**.

-----

### Q: How often does ZDS check for available updates?

**A: ZDS polls Zebra servers for updates once every 24 hours and every time the device reboots**.

-----

###Q: Can updates of the ZDS agent be disabled?

**A: Not directly, but ZDS updates can be prevented by using an enterprise mobile management (EMM) system to lock device apps to a specific ZDS version. However, <u>Zebra recommends keeping ZDS updates enabled</u> to ensure the highest levels of security, stability, feature enhancement and bug fixes**. 

-----

###Q: Can any ZDS parameters can be changed? 

**A: Yes, ZDS allows changes to the following parameters**: 

* Data collection (On/Off)
* Upload frequency (default = once every 24 hrs.)
* Data collection for certain individual events

-----

###Q: How can the current ZDS parameters be changed? 

**A: The ZDS settings on a device can be changed in two ways**: 
* Through the device UI (see [Setup section](../setup)). 
* By scanning a barcode that contains changes to the [Analytics Manager CSP](/mx/analyticsmgr). 

**Contact [Zebra support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html) for more information about changing ZDS parameters**. 

-----

###Q: Where does the ZDS device-settings barcode come from? 

**A: The barcode for changing ZDS settings on a device is generated using Zebra StageNow. [Learn more](/stagenow)**. 

-----

###Q: What data is collected from the device? 

**A: ZDS collects data about device hardware, app info and usage, network communications, location and many other parameters. See the About ZDS page for a complete [list of data collected](../about/#datacollected)**. 

-----

###Q: Which Zebra devices are supported? 

**A: Most Zebra devices support data collection. See the About ZDS page for the full list of [supported devices](../about/#supporteddevices)**. 

-----

###Q: Why can't I see the EULA screen on my device? 

**A: Some older versions of the ZDS agent did not display the end-user license agreement screen. To view the EULA, update ZDS to the latest version. Contact [Zebra support](https://www.zebra.com/us/en/about-zebra/contact-zebra/contact-tech-support.html) for more information**. 

-----
