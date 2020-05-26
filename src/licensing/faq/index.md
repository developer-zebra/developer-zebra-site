---
title: Frequently Asked Questions
layout: guide.html
product: Zebra Licensing
menu:
  items:
    - title: About
      url: /licensing/about
    - title: Process
      url: /licensing/process
    - title: FAQ
      url: /licensing/faq
    - icon: fa fa-search
      url: /licensing/search
---

###Q: What licensing service is used by Zebra?

**A: Zebra uses Flexera for licensing**.

<!-- 

* `com.symbol.dataanalytics.apk` | Main analytics engine (2 MB)
* `com.symbol.dataanalytics.dca.apk` | Data collection plug-in (0.2 MB)

-----

###Q: What is the server address and port number used by ZDS?

**A: ZDS uses the following server**:

* Server address: `http://analytics.zebra.com`
* Server Port: `443`

-----

###Q: To simplify firewall setup, can Zebra confirm that the data collection server always uses a single IP address?

**A: Yes, the data collection server at analytics.zebra.com uses only `104.198.59.61` on server port 443**.

-----

###Q: How frequently does the ZDS Agent upload device data to the cloud?

**A: The default upload frequency is once every 24 hours**.

-----

###Q: Is the 24-hour period the same for every device? 

**A: No, the upload cycle is different for each device. It begins when the device is first powered up and cannot be changed or configured to vary by connection or network type. The first upload occurs approximately 24 hours after first boot. Upload times are designed to vary randomly by three minutes (plus or minus) to help spread inbound server traffic throuhgout the period. To view the latest upload time for a device, see [Check ZDS Status](../process/#checkzdsstatus) in the Setup guide**. 

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

###Q: What is the ZDS device footprint?

**A: ZDS requires about 2.2 MB of device storage**.

-----

###Q: Does ZDS self-update?

**A: Yes, ZDS updates its components every 3-4 months**.

-----

###Q: Can updates of the ZDS agent be disabled?

**A: Not directly, but ZDS updates can be prevented by using an enterprise mobile management (EMM) system to lock device apps to a specific ZDS version. However, <u>Zebra recommends keeping ZDS updates enabled</u> to ensure the highest levels of security, stablity, feature enhancement and bug fixes**. 

-----

###Q: Can any ZDS parameters can be changed? 

**A: Yes, ZDS allows changes to the following parameters**: 

* Data collection (On/Off)
* Upload frequency (default = once every 24 hrs.)
* Data collection for certain individual events

-----

###Q: How can the current ZDS parameters be changed? 

**A: The ZDS settings on a device can be changed in two ways**: 
* Through the device UI (see [Setup section](../process) for more info). 
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
 -->