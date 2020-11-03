---
title: Licensing
layout: guide.html
product: Device Tracker
productversion: "4.0"
---

## Overview

Commercial deployment to devices requires an End-User License (also known as an "Activation ID" or AID) issued by Zebra Technologies for each device. Licensing with Device Tracker is a simple, seamless process integrated with the normal operation of Device Tracker without the need for additional user intervention. 

<p>Device Tracker uses the floating license model, in which licenses are shared among devices from a license pool. If a license is available, the Device Tracker server allocates a license to the device. When a license is no longer needed, the license is released from the device and returned to the license pool to make available to other devices. Available license types:</p>

* **Trial license** (90-day evaluation period)
* **Term-based license**:
        * 1-year term
        * 3-year term
        * 5-year term

<p>This guide explains the process of obtaining a Device Tracker license(s) for commercial use and applying the license(s) to individual devices. </p>


## I. Contact a Reseller

The first step in obtaining a license is to engage with Zebra or a Zebra reseller. 

1. [Visit Zebra's Device Tracker product page](https://www.zebra.com/us/en/products/software/mobile-computers/device-tracker.html) and select one of the methods for contacting Zebra directly or engaging with a reseller or partner. 
2. Alternatively, select one of the following Zebra resources:

        * **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web
        * **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties
        * **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** info for contacting Zebra's existing global partner network
        * **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region
        * **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

## II. Access Licensing System

After a licensing agreement is purchased from Zebra or a Zebra reseller, an email is sent to the requester containing user credentials for accessing the Zebra Enterprise Software Licensing system. 
<p>Visit the <a href="https://www.zebra.com/us/en/support-downloads/software-licensing.html">Zebra licensing support page</a>. Register and log into the portal to:</p>

* **Order licenses**
* **Check status** of existing orders

<p>After licenses are processed, the Device Tracker web portal is updated with the license information. This update occurs once a day. The administrator can perform a <a href="../setup/#viewlicenseinformation">data refresh</a> in the web portal to retrieve the latest license information immediately. 
<br>

## III. Assign Licenses

Assigning licenses is seamless and integrated into the device registration process with the Device Tracker server. Licenses are allocated based on device enrollment with the server on a first-come, first-served basis. 

<p>As part of the device registration process, after a device is staged with the server configuration it communicates with the Device Tracker server. If a license is available, the server allocates a license to the device. If multiple licenses are available, the license is allocated based on the earlier expiration date. After the device is licensed, Device Tracker is operational on the device. If the device is not licensed, a message is displayed indicating that the license is not available.
</p>
<p>
After reaching the expiration date, the license is automatically de-allocated from the device and a message is displayed on the device indicating the license has expired. If there are any available licenses, it is automatically allocated to the device for continued, uninterrupted operation. The newly allocated license is reflected in the Device Tracker web portal.  
</p>

-----

## License Transfer

Device Tracker supports the transfer of licenses from one device to another by returning the active license to the license pool and reallocating it to a new device. The active license can be released from the device by [decommissioning the device](../use/#decommissionrecommissiondevice) or by [deleting the device](../setup/#deletedevicedata). After the device is decommissioned, a message appears indicating the device it not licensed. To license the new device, after it communicates with the Device Tracker server it is allocated with the newly released license.

## License Removal

Device Tracker licenses can be removed by [decommissioning the device](../use/#decommissionrecommissiondevice) or by [deleting the device](../setup/#deletedevicedata) from Device Tracker. When a device is decommissioned or deleted, the license is automatically removed from the device, as reflected in the Device Tracker web portal.   

## Use Cases

Use cases to consider:

## Important Notes

Important information pertaining to Device Tracker licensing:
* An enterprise reset or factory reset maintains the enrollment time stamp for the device. This comes into effect when reallocating licenses to the device.

<!-- -->
-----

## Related Guides

* [Zebra Licensing](https://www.zebra.com/us/en/support-downloads/software-licensing.html)
