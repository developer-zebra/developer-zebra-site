---
title: EMMTK Glossary
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

### AEDO
Android Enterprise Device Owner

### Android Enterprise (AE)
Android Enterprise (formerly "Android for Work") is a set of APIs for configuring and managing Android devices and apps. [More](https://www.android.com/enterprise/management/). 

### Android for Work (AFW)
See Android Enterprise. 

### APK
Abbreviation for Android Package, the file format used for packaging and distributing Android applications. When referring to the APK file extension, TechDocs usually presents the term as .apk or `.apk`.

### Bundle Array
A series of Android bundles that determines the order to apply subsets of Managed Configurations. Allows full enforcement of order dependency when required.

### `BundleTools.java`
Java source code (file) developed by Zebra Technologies that converts JSON Managed Configuration objects into bundles that are used to perform device-configuration actions. [Download BundleTools](../../downloads). 

### DA
See Device Administrator.

### Deprecated 
A product or feature that is supported but no longer being advanced, usually to be replaced by something else. Zebra discourages use of deprecated features in favor of their replacement. Deprecation of a feature that previously had Full Support might result in Partial Support for that feature while it is being phased out. 

### Device Administrator (DA)
A method of Privilege Escalation on an Android device available since Android 2.2.x (Froyo) API Level 8; expanded in later versions. Being designated as a DA grants an app the right to use selected methods of the Android Device Administration API, exposed primarily via methods of the Android DevicePolicyManager class. However, Android Device Administration API methods that can be used by a DA provide minimal functionality, and alone do not enable the development of a viable EMM solution. 

For more information, please refer to Zebra's [Agent Porting Guide](../../downloads).

### Device Owner (DO)
A device designation generally used to implement device management as part of a “Corporately Owned Special Use” (COSU) device deployment. The DO is granted broad control over many aspects of the device through the Android Device Administration APIs. A device can have only one DO at a time. 

A DA-eligible app that meets certain additional requirements can be promoted to DO through a special enrollment process that requires the Device User to opt-in and that must generally be performed early during the initialization process of the device. 

For more information, please refer to Zebra's [Agent Porting Guide](../../downloads).

### Device Policy Controller (DPC)
An app that implements a sub-class of the Android DeviceAdminReceiver class, the base class for implementing a device administration component. [More info](https://developer.android.com/reference/android/app/admin/DeviceAdminReceiver). 

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

### Managed Configuration
A method for Android apps to expose configuration options and accept settings. Through a specially designed configurable application called [OEMConfig](#oemconfig), Zebra has developed a method of leveraging the extension mechanism defined in Managed Configurations (formerly “Application Restrictions”) to configure the settings of a device. 

### Management Extensions (MX)
Zebra-proprietary Privilege Escalation method designed to enable an unprivileged EMM agent to access all “missing” functions needed to enable an EMM vendor to implement a “complete” EMM solution for managing Zebra Android devices. MX was developed in parallel with the Android Device Administrator, and predates the availability of the Profile Owner and Device Owner Privilege Escalation methods. 

### `MC Tool.jar`
A Java app developed by Zebra Technologies that presents a data-driven user interface from the contents of a schema. [Download MC Tool](../../downloads).

### MDM
Mobile Device Management. See EMM. 

### OEMConfig
OEMConfig is a Google-sanctioned, standards-based approach for an OEM to extend the capabilities of an Android Enterprise Device Owner Device Policy Controller running on an Android device. It's implemented by an OEM-provided application that exposes Managed Configurations as means to access device-specific and privileged functions that are not accessible using standard Android Enterprise APIs, such as the DevicePolicyManager. 

### OEMConfig, Zebra
Zebra OEMConfig is an implementation of the Google-sanctioned approach developed by Zebra Technologies that configures Zebra devices using Android Managed Configurations. Zebra OEMConfig is available at the Google Play Store and is used to administer devices when no Android Enterprise API is available. 

### PO
See Profile Owner.

### Privilege Escalation
A means by which an app can be granted the functionality provided by privileged APIs (to which it would otherwise be denied). The original Android Privilege Escalation method granted direct access through signing (by the device OEM) using the device platform key. Zebra signed EMM agents for a small group of EMM vendors, but the process was time-consuming and costly, and did not scale well. Zebra added MX as a Privilege Escalation method, and exposed and documented its use by EMM vendors through the Zebra EMM Toolkit (EMMTK). Profile Owner and Device Owner Privilege Escalation methods were added later. 

### Privileged
Term applied to functions available only to apps with permission. Many of the functions traditionally required to implement an EMM are considered privileged by Android and hence the APIs required to perform those functions cannot be called by an unprivileged app. Lack of access to such functions generally would result in a lack of critical functionality and a non-viable EMM solution. 

### Profile Owner 
Profile Owner is a standard Android Privilege Escalation method introduced in Android 5.0 (Lollipop) API level 21. Building on the capabilities of a DA, PO adds an expanded set of Android Device Administration APIs. An app that is eligible to become a DA and that meets certain additional requirements can be promoted to PO through a special enrollment process. A PO is generally used to implement a Work Profile as part of a “Bring Your Own Device” (BYOD) deployment scenario. A Work Profile contains the “Work” part of the device, which is managed by a PO selected by the Enterprise. It is segregated from the “Personal” part of the device, which cannot be seen or managed by the Enterprise. 

For more information, please refer to Zebra's [Agent Porting Guide](../../downloads).

### Schema
A document that defines functions available for interrogation and/or configuration using Managed Configuration mechanisms. Schemas and Managed Configurations conform to Google-defined specifications. 

### Schema Package Name
A Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Package Name of the Package that implements that Schema. For example, the Zebra Schema is published by the OEMConfig package. Therefore, if the Schema is obtained from that package through the Android system, the package name of that package is already known and this Managed Configuration is not required. However, if the Schema is obtained in some other way, such as by download or direct import, this Managed Configuration can be used as a confirmation mechanism and/or to determine the package to which Managed Configurations created using this Schema should be sent.

### Schema Contract Version
A Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Contract Version being used by that Schema. The Contract Version is expressed in the form _&lt;major&gt;.&lt;minor&gt;_ (i.e. "1.5"). 

* The value of _&lt;major&gt;_ changes when there is significant change in the Managed Configurations supported by OEMConfig, such as when a change of Android version enables major new functionality.
* The value of _&lt;minor&gt;_ changes when there is some less significant change in the Managed Configurations supported by OEMConfig, such as when one or a few additional Managed Configurations are added.
* Neither value changes if modifications to the Schema do not affect the Managed Configurations supported by OEMConfig, such as for cosmetic changes.
* See the Managed Configuration **Schema UI Revision** for more information about cosmetic changes that do not affect the Contract Version.

### Schema UI Revision
Allows an EMM solution or other tool consuming the OEMConfig Schema to determine the UI Revision of the Schema being used. The UI Revision is expressed in the form of a simple integer value (i.e. "3"). 

* The value changes when there are changes to the Schema do not affect the Managed Configurations supported by OEMConfig, but affect only the UI that might be generated based on that Schema.
* Examples of cosmetic changes that might be indicated using this Managed Configuration include changes in the _Title_ or _Description_ of Managed Configurations or changes to the textual values displayed for a pull-down list of choices.
* See **Schema Contract Version** for more information about changes that affect the Contract Version.

### Schema Variant

Allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Variant of that Schema being used. The Schema Variant is expressed in the form of an identifying string and could have a variety of possible values. 

* By definition, all Schemas that have the same values for the Managed Configurations **Schema Package Name** and **Schema Contract Version** should be considered to implement subsets of the Master Schema associated by those two values.
* The Master Schema can be identified by a Schema Variant value of ***Master***.
* All other Schema Variant values indicates various subsets of that Master Schema and those values are generally chosen to identify the class of Zebra Android devices that implement that subset of Managed Configurations. For example:
 * The Schema Variant value ***Value Tier N*** might indicate the subset of Managed Configurations supported on Value Tier Zebra Android devices running Android Nougat.
 * The Schema Variant value ***Premium N-V1*** might indicate the subset of Managed Configurations supported on Premium Zebra Android devices running Android Nougat and that implement the V1 feature set.

### `schema.json`
The document that defines functions of Zebra devices available for interrogation and/or configuration using Managed Configuration mechanisms. [Download the Zebra Schema](../../downloads).

### Support, Full 
A feature generally recommended for use, and that come with no significant limitations or restrictions. 

### Support, Partial 
A feature supported and generally recommended for use, but that might offer limited functionality or have restrictions relating to how or on which devices it can be used. 

### ZMC 
Zebra Managed Configurations. See Managed Configurations. 

-----

## See Also

* [About EMM Toolkit](../about) | General information
* [FAQ](../faq) | Frequently asked questions about EMM Toolkit 
* [Other EMMTK Guides](../../guide) | A complete list of all guides in the EMM Toolkit
* **[Build a DDUI from the Zebra OEMConfig Schema (.pdf)](../../downloads/Zebra_EMMTK_Building_DDUI_from_OEMConfig_Schema_091418.pdf)** | Breakdown of DDUI creation with Zebra OEMConfig
* **[Agent Porting Guide (.pdf)](../../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf)** | Detailed porting information and guidance
