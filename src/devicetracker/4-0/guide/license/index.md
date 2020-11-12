---
title: Licensing
layout: guide.html
product: Device Tracker
productversion: "4.0"
---

## Overview

Device Tracker requires an end-user license issued by Zebra Technologies. Licensing with Device Tracker is a simple, seamless process integrated with the normal operation of Device Tracker without the need for additional user intervention. 

<p>Device Tracker uses the floating license model, in which licenses are shared among devices from a combined license pool regardless of expiration date. If a license is available, the Device Tracker server allocates a license to the device. When a license is no longer needed, the license is released from the device and returned to the license pool to make available to other devices.</p>

Available license types:

* **Trial license** (90-day evaluation period)
* **Term-based license**:
        * 1-year term
        * 3-year term
        * 5-year term

<p>This guide explains the process of obtaining a Device Tracker license(s) for commercial use, applying the license(s) to individual devices, monitoring licenses from the Device Tracker web portal and taking action on licenses.</p>

-----

## I. Contact a Reseller

The first step in obtaining a license is to engage with Zebra or a Zebra reseller. 

1. [Visit Zebra's Device Tracker product page](https://www.zebra.com/us/en/products/software/mobile-computers/device-tracker.html) and select one of the methods for contacting Zebra directly or engaging with a reseller or partner. 
2. Alternatively, select one of the following Zebra resources:

        * **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
        * **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
        * **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** information for contacting Zebra's existing global partner network
        * **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
        * **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country
<br>

## II. Access Licensing System

After a licensing agreement is purchased from Zebra or a Zebra reseller, an email is sent to the requester containing user credentials for accessing the Zebra Enterprise Software Licensing system. 
<p>Visit the <a href="https://www.zebra.com/us/en/support-downloads/software-licensing.html">Zebra licensing support page</a>. Register and log into the portal to:</p>

* **Order licenses**
* **Check status** of existing orders

<p>After licenses are processed, the license information <!--from the Zebra license portal--> is synchronized with the <a href="../setup/#webportal">Device Tracker web portal</a> every 24 hours. The administrator can perform a manual synchronization in the Device Tracker web portal to <a href="../setup/#viewlicenseinformation">refresh the license data</a> on-demand. The administrator monitors available licenses through the <a href="../setup/#webportal">Device Tracker web portal</a> to view licenses available, licenses consumed and total licenses. </p> 

## III. Automatic License Assignment

Assigning licenses is seamless and integrated into the device registration process with the Device Tracker server. Licenses are allocated to devices based on enrollment with the server on a first-come, first-served basis. 

<p>As part of the device registration process, after a device is staged with the server configuration, it communicates with the Device Tracker server. If a license is available, the server allocates a license to the device. After the device is licensed, Device Tracker is operational on the device. Otherwise, a message is displayed on the device indicating that a license is not available.
</p>

-----

## License Transfer

Device Tracker supports the transfer of licenses from one device to another by returning the active license to the license pool and reallocating it to a new device. The active license can be released from the device by [decommissioning the device](../use/#decommissionrecommissiondevice) or by [deleting the device](../setup/#deletedevice). After the device is decommissioned or deleted, a message appears indicating the device it not licensed. To license the new device, after it communicates with the Device Tracker server it is allocated with the newly released license. The new license allocation is reflected in the <a href="../setup/#webportal">Device Tracker web portal</a>. 

## Automatic License Renewal

After reaching the expiration date, the license is automatically deallocated from the device and a message is displayed on the device indicating the license has expired. If any licenses are available, the Device Tracker server automatically allocates a license to the device for continued, uninterrupted operation. The newly allocated license is reflected in the <a href="../setup/#webportal">Device Tracker web portal</a>. 

## Recommission Devices

<p>For devices being <a href="../use/#recommissionadevice">recommissioned</a> to place back into service as an active device, if a license is available, the server allocates a license to the device. After the device is licensed, Device Tracker is operational on the device and the allocated license is reflected in the <a href="../setup/#webportal">Device Tracker web portal</a>. If a license is not available, the device remains in the decommissioned state and a <a  href="../use/#addeditanote">note</a> is automatically added indicating there is no license available. This note overwrites any pre-existing note. When a license is available, the admin or manager must recommission the device to allocate the license and manually delete the note.</p>


## License Removal

Device Tracker licenses can be removed by [decommissioning the device](../use/#decommissionrecommissiondevice) or by [deleting the device](../setup/#deletedevice) from Device Tracker. When a device is decommissioned or deleted, the license is automatically removed from the device, as reflected in the <a href="../setup/#webportal">Device Tracker web portal</a>. Device Tracker is no longer operational on the device until it is relicensed.  

## Important Notes

Important information pertaining to Device Tracker licensing:
* The <a href="../setup/#webportal">Device Tracker web portal</a> provides the total license count. The <a href="../mgmt/#dashboard">device dashboard</a> provides the total number of devices being tracked. The difference between these two totals result to the number of devices that have no license.
* License allocation and deallocation is based on enrollment to the Device Tracker server, regardless of the <a href="../mgmt/#dashboard">connection state</a> (disconnected or connected) seen from the device dashboard. 
* [Never Connected](../mgmt/#dashboard) devices are not licensed.


<!-- -->
-----

## Related Guides

* [Zebra Licensing](https://www.zebra.com/us/en/support-downloads/software-licensing.html)
