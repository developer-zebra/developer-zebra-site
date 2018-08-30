---
title: EMMTK Glossary
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## `DRAFT`

**_Information subject to change without notice_**. 

-----

### AEDO
Android Enterprise Device Owner

### Android Enterprise (AE)
Android Enterprise (formerly "Android for Work") is a set of APIs for configuring and managing Android devices and apps. [More](https://www.android.com/enterprise/management/). 

### Android for Work (AFW)
See Android Enterprise. 

### `BundleTools.java`
Java source code (file) developed by Zebra Technologies that converts JSON Managed Configuration objects into bundles and used to perform device-configuration actions. [Download BundleTools](). 

### DA
See Device Administrator.

### Deprecated 
A product or feature that is supported but no longer being advanced, usually to be replaced by something else. Zebra discourages use of deprecated features in favor of their replacement. Deprecation of a feature that previously had Full Support might result in Partial Support for that feature while it is being phased out. 

### Device Administrator (DA)
A method of Privilege Escalation on an Android device available since Android 2.2.x (Froyo) API Level 8; expanded in later versions. Being designated as a DA grants an app the right to use selected methods of the Android Device Administration API, exposed primarily via methods of the Android DevicePolicyManager class. However, Android Device Administration API methods that can be used by a DA provide minimal functionality, and alone do not enable the development of a viable EMM solution. 

For more information, please refer to Zebra's [DA-to-DO Agent Migration Guide](https://zebra.sharepoint.com/:w:/r/sites/converge/emc-android-platform-architect-review-board/_layouts/15/doc2.aspx?sourcedoc=%7B08423a04-d00d-4015-a4b1-4420ce38749f%7D&action=edit&wdPid=1cdba535) (<< `TEMPORARY SHAREPOINT LINK FOR ZEBRAS ONLY`).

### Device Owner (DO)
A device designation generally used to implement device management as part of a “Corporately Owned Special Use” (COSU) device deployment. The DO is granted broad control over many aspects of the device through the Android Device Administration APIs. A device can have only one DO at a time. 

A DA-eligible app that meets certain additional requirements can be promoted to DO through a special enrollment process that requires the Device User to opt-in and that must generally be performed early during the initialization process of the device. 

For more information, please refer to Zebra's [DA-to-DO Agent Migration Guide](https://zebra.sharepoint.com/:w:/r/sites/converge/emc-android-platform-architect-review-board/_layouts/15/doc2.aspx?sourcedoc=%7B08423a04-d00d-4015-a4b1-4420ce38749f%7D&action=edit&wdPid=1cdba535) (<< `TEMPORARY SHAREPOINT LINK FOR ZEBRAS ONLY`).

### Device Policy Controller (DPC)
An app that implements a sub-class of the Android [DeviceAdminReceiver](https://developer.android.com/reference/android/app/admin/DeviceAdminReceiver) class, the base class for implementing a device administration component. 

### Discontinued 
A previously deprecated feature that is no longer available or supported.

### DO
See Device Owner.

### DPC
See Device Policy Controller.

### EMM
See Enterprise Mobility Management.

### EMMTK 
See EMM Toolkit.

### EMM Toolkit 
A Zebra product designed to provide EMM vendors with everything needed to develop an EMM agent and other components required to implement a “complete” EMM solution for managing Zebra Android devices. 

### Enterprise Mobility Management
The infrastructure and processes used&ndash;usually by corporations and other business entities&ndash;to manage mobile devices, wireless networks, and other mobile computing services.

### MX 
See Management Extensions.

### Managed Configurations
A method for Android apps to expose configuration options and accept settings. Through a specially designed configurable application called [OemConfig](#oemconfig), Zebra has developed a method of leveraging the extension mechanism defined in Managed Configurations (formerly “Application Restrictions”) to configure the settings of a device. 

### Management Extensions (MX)
The Zebra-proprietary Privilege Escalation method designed to enable an unprivileged EMM agent to access all “missing” functions needed to enable an EMM vendor to implement a “complete” EMM solution for managing Zebra Android devices. MX was developed in parallel with the Android Device Administrator, and predates the availability of the Profile Owner and Device Owner Privilege Escalation methods. 

### `McTool.jar`
A Java app developed by Zebra Technologies that presents a data-driven user interface from the contents of a schema. [Download McTool]().

##MDM
Mobile Device Management. See EMM. 

### OemConfig
A Google-recommended approach developed by Zebra Technologies that configures Zebra devices using Android Managed Configurations when no Android Enterprise API is available. 

### PO
See Profile Owner.

### Privilege Escalation
A means by which an app can be granted the functionality provided by privileged APIs (to which it would otherwise be denied). The original Android Privilege Escalation method granted direct access through signing (by the device OEM) using the device platform key. Zebra signed EMM agents for a small group of EMM vendors, but the process was time-consuming and costly, and did not scale well. Zebra added MX as a Privilege Escalation method, and exposed and documented its use by EMM vendors through the Zebra EMM Toolkit (EMMTK). Profile Owner and Device Owner Privilege Escalation methods were added later. 

### Privileged
Term applied to functions available only to apps with permission. Many of the functions traditionally required to implement an EMM are considered privileged by Android and hence the APIs required to perform those functions cannot be called by an unprivileged app. Lack of access to such functions generally would result in a lack of critical functionality and a non-viable EMM solution. 

### Profile Owner 
Profile Owner is a standard Android Privilege Escalation method introduced in Android 5.0 (Lollipop) API level 21. Building on the capabilities of a DA, PO adds an expanded set of Android Device Administration APIs. An app that is eligible to become a DA and that meets certain additional requirements can be promoted to PO through a special enrollment process. A PO is generally used to implement a Work Profile as part of a “Bring Your Own Device” (BYOD) deployment scenario. A Work Profile contains the “Work” part of the device, which is managed by a PO selected by the Enterprise. It is segregated from the “Personal” part of the device, which cannot be seen or managed by the Enterprise. 

For more information, please refer to Zebra's [DA-to-DO Agent Migration Guide](https://zebra.sharepoint.com/:w:/r/sites/converge/emc-android-platform-architect-review-board/_layouts/15/doc2.aspx?sourcedoc=%7B08423a04-d00d-4015-a4b1-4420ce38749f%7D&action=edit&wdPid=1cdba535) (<< `TEMPORARY SHAREPOINT LINK FOR ZEBRAS ONLY`).

### Schema
A document that defines functions available for interrogation and/or configuration using Managed Configuration mechanisms. Schemas and Managed Configurations conform to Google-defined specifications. 

### `schema.json`
The document that defines functions of Zebra devices available for interrogation and/or configuration using Managed Configuration mechanisms. [Download the Zebra Schema]().

### Support, Full 
A feature generally recommended for use, and that come with no significant limitations or restrictions. 

### Support, Partial 
A feature supported and generally recommended for use, but that might offer limited functionality or have restrictions relating to how or on which devices it can be used. 

### ZMC 
Zebra Managed Configurations 
See Managed Configurations


-----

## See Also

* [About EMM Toolkit](../about)
* [Other EMMTK Guides](../../guide)
