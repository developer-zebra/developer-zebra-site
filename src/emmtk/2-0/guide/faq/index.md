---
title: Frequently Asked Questions
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

Zebra OEMConfig is an approach to performing administrative tasks on Zebra Android devices using Android Managed Configurations. To configure a feature for which no Android Enterprise API is available, Managed Configurations is the only method available that's based on publicly available specifications developed by Google and the Android community. Below are some common questions related to OEMConfig, Managed Configurations and the schemas that drive them. 

Also see the [Glossary of terms](../glossary).

-----

**Q: What is OEMConfig?**

**A: OEMConfig is a Google-sanctioned, standards-based approach for an OEM to extend the capabilities of an Android Enterprise (AE) Device Owner (DO) Device Policy Controller (DPC)** running on an Android device by using a OEM-provided application. This app exposes Managed Configurations as means to access OEM-specific and privileged functions that are not provided via standard Android Enterprise APIs, such as the DevicePolicyManager. 

-----

**Q: What is Zebra OEMConfig?**

**A: Zebra OEMConfig is Zebra’s OEM-specific application** that conforms to the OEMConfig model. It provides access to Zebra-specific and privileged functions via Managed Configurations that are exposed by the Zebra OEMConfig application. 

-----

**Q: What are Managed Configurations?** 

A: Managed Configurations are a standard feature of Android Enterprise whereby any application that is installed on an Android device can choose to expose a set of name/value pairs that can be used to configure selected aspects of that application. 

-----

**Q: What is a Managed Configuration Schema**? 

**A: A Managed Configuration Schema is a means by which an application that chooses to expose Managed Configurations defines the set of Managed Configurations that it supports**. The Managed Configuration Schema allows an entity, such as an Enterprise Mobility Management system (EMM) to: 

1. Determine whether the application does or does not expose any Managed Configurations, so the EMM knows if any configuration of the application is possible. 
2. Identify the set of Managed Configurations that are exposed by the application, so the EMM knows what configurations can be controlled for the application. 
3. Provides sufficient information to generate and display a data-driven UI that allows the EMM to support configuration of the application without requiring the EMM to have any a-priori knowledge of the application nor to put any application-specific code into their solution. 

-----

**Q: What is an OEMConfig Schema**? 

A: An OEMConfig Schema is the Managed Configuration Schema that defines the Managed Configurations exposed by an OEMConfig application running on a device manufactured by the corresponding OEM. 

-----

**Q: What is the Zebra OEMConfig Schema**? 

A: The Zebra OEMConfig Schema is the OEMConfig Schema that defines the Managed Configurations exposed by the Zebra OEMConfig application, which is built-into Zebra Android devices. 

-----

**Q: Are OEMConfig Schemas different from the Managed Configuration Schemas of other applications**? 

**A: Yes and no**. Android Enterprise defines that Managed Configuration Schemas built-into Android applications can be very flexible, but applications that are published to the Google Play Store are constrained to use only a very limited subset of the complexity allowed by Android Enterprise for Managed Configuration Schemas. This was done to limit the complexity of Managed Configurations exposed by most applications to reduce the effort for EMMs to implement basic application configuration. With Google’s approval. OEMConfig applications provided by approved OEMs can get approval to upload OEMConfig applications to the Google Play Store that use more of the Managed Configuration Schemas capabilities defined as part of Android Enterprise than are supported by other non-OEMConfig applications. Thus, OEMConfig Schemas are generally richer and more sophisticated than the Managed Configuration Schemas of other applications, even though both conform to the rules defined by Android Enterprise for Managed Configuration Schemas. 

-----

**Q: Are OEMConfig Managed Configurations used for different purposes than the Managed Configurations exposed by other applications**? 

Yes. In most cases, OEMConfig Managed Configurations are used to configure OEM-specific device-oriented settings rather than application-oriented settings. As such, configuration performed using OEMConfig Managed Configurations will often have a more global, cross-application impact, rather than a localized, application-local impact 

-----

**Q: Is the Zebra OEMConfig Schema different than the OEMConfig Schemas of other OEMs**? 

A: Every OEM is free to define their OEMConfig Schema in whatever way they need to suit the needs for configuring their device. Since Zebra devices have their own proprietary OEM-specific value-add features, the Zebra OEMConfig Schema exposes Managed Configurations that are tailored to the needs of configuring those features. 

-----

**Q: Does an EMM need to handle OEMConfig Schemas differently than the Managed Configuration Schemas of other applications**? 

A: Yes. An EMM that wants to support OEMConfig must support the richer set of Managed Configuration Schema elements that OEMConfig application can expose. If an EMM only supports the more restricted set allowed to be used by non-OEMConfig applications, then that EMM will likely not be able to support configuration using OEMConfig applications from any OEM. 

-----

**Q: Does my EMM need to have custom-support for Zebra for me to be able to utilize Zebra OEMConfig via that EMM**? 

A: Not really. The beauty of Managed Configurations is that they allow discoverability of the configurable aspects of applications that expose them. OEMConfig is no exception. Hence any EMM that supports Managed Configurations and that supports the richer Managed Configuration Schemas allowed to be exposed by OEMConfig applications should be able to configure all the aspects exposed by the OEMConfig Schema of any OEM, including Zebra, without having code specifically tailored to any OEM. 

-----

**Q: Are there any features of Zebra OEMConfig that may require an EMM to provide special Zebra-specific customization for me to be able to utilize those features via that EMM**? 

**A: Yes and no**. There are some Zebra OEMConfig features that would require an EMM to enhance their solution to offer full support for those features. But those enhancements would not be Zebra-specific. If an EMM wishes to gain the full benefit of all Zebra OEMConfig features, they would need to enhance their solution in various ways. Whether a given EMM will elect to invest in providing such features depends on their own determination of the business value they offer. 

-----

**Q: Where does an OEMConfig Schema come from**? 

**A: Fundamentally, an OEMConfig Schema, like any Managed Configuration Schema for any application, is built into the APK of the application by referencing it** from the Manifest when the APK file is built. Hence the APK file is the primary source of the Schema. APIs exist in the device to acquire the Schema for any application that exposes Managed Configurations, hence an application (including an EMM Agent) could acquire an OEMConfig Schema on-device and send it to the EMM Server. While that is possible, it is probably not the most common case since the EMM Server would then need to receive and collate one or more Schemas from every single managed device. 

More commonly, an OEMConfig APK is published to the Google Play Store. The advantage of doing this is that an EMM Server can then make a server-to-server call to the Google Play Store, using the Google Play EMM API to acquire the Schema for that OEMConfig APK. This is especially beneficial since the EMM can use logic identical to that used for non-OEMConfig Schemas to access the OEMConfig Schema for any OEMConfig application from any OEM, so long as it knows the Android Package Name of that OEMConfig application. 

Since an OEMConfig Schema (like any other Managed Configuration) is just a file, it could also be obtained in various other ways, such as downloading it from an OEM web site, an on-line repository, etc. Ultimately, it is the decision of a given EMM vendor which methods of Schema acquisition make the most sense to provide based on the use cases of the users of that EMM. 

-----

**Q: Where does the Zebra OEMConfig Schema come from**? 

**A: Zebra publishes the Zebra OEMConfig Schema to the Google Play Store** with the Android Package Name `com.zebra.oemconfig.common`. This means that any EMM vendor that has registered with Google to gain access to the Google Play EMM API can acquire the Zebra OEMConfig Schema from the Google Play Store. Zebra also might elect to post the Zebra OEMConfig Schema on its own web site and provide it through its online repository from which OS Update and Patch images can be acquired. 

-----

**Q: Do OEMConfig Schemas have versions**? 

**A: Yes and no**. Since the primary source of an OEMConfig Schema is the APK for the corresponding OEMConfig application that exposes that Schema, and since APKs have versions, you could say by inference that any OEMConfig Schema can be considered to have the version of the APK file that publishes it. The versioning applied by an OEM to an OEMConfig application may or may not provide any particularly useful information about the nature of the OEMConfig Schema exposed by that application. It would probably be a mistake to make any assumptions about the relationships between two OEMConfig Schemas obtained from different versions of OEMConfig APKs from the same OEM that have the same Android Package Name. 

-----

**Q: Do Zebra OEMConfig Schemas have versions**? 

**A: Yes**. Zebra has recognized that the Zebra OEMConfig Schema will evolve over time and that EMMs will likely want to have a way to differentiate various versions of Zebra OEMConfig Schemas that may be supported on various Zebra Android device and that may support different sets of capabilities. Zebra has therefore chosen to include a “hidden” Managed Configuration within every Zebra OEMConfig Schema that identifies the version of that Schema. This allows an EMM or Administrator that chooses to do so to differentiate versions of Schemas and better organize their use. 

-----

**Q: Can multiple versions of OEMConfig Schemas from the same OEM be obtained from the Google Play Store**? 

**A: Not really**. The Google Play Store only allows one version of a given APK, identified by a given Package Name to be uploaded at a time. If a newer version is uploaded, it replaces the older version. This means that only the “latest and greatest” version of OEMConfig Schema for a given Package Name can be acquired from the Google Play Store using the Google Play EMM API at any given time. While an OEM could post a new version of an OEMConfig application to the Google Play Store with a different Package Name, this might create confusion for customers since they would not know which Package Name to use for a given device from that OEM, unless the OEM created some clear way to identify that, such as by including device models in the Package Name or some other similar method. 

-----

**Q: How does an EMM deal with different versions of OEMConfig Schemas published by a given OEM**? 

A: As noted above, if an EMM acquires OEMConfig Schemas from the Google Play Store using the Google Play EMM API, this it will not be able to acquire more than one version of the OEMConfig Schemas for any one Package Name at any given time. But over time, the EMM may have acquired various versions of OEMConfig Schemas from the Google Play Store for a given Package Name and, if it kept copies of them, may be faced with a situation where it has multiple versions of OEMConfig Schema to choose from for a given OEMConfig application Package Name. Similarly, if the EMM is using some other method to acquire OEMConfig Schemas, such as acquiring them from devices, it might easily end up with multiple versions of OEMConfig Schema to choose from for a given OEMConfig application Package Name. 

In such situations, the most likely sources of differences between different versions of OEMConfig Schema an EMM may acquire for a given OEMConfig application Package Name would be the addition of new features and/or the discontinuation of features as device evolve over time. Each version of an OEMConfig Schema defines the set of Managed Configurations exposed by a corresponding version of OEMConfig application. For best results, when creating a set of Managed Configurations to be applied to any given device, a version of OEMConfig Schema that is compatible with the version of OEMConfig application that is present on that device should be used. Using an incompatible OEMConfig Schema version could lead to failures because of attempting to use Managed Configurations that are not supported on that device. 

-----

**Q: Is there a way for an EMM to know which of a set of Managed Configurations have been successfully applied to a given application on a given Android device**? 

A: No. The Android Managed Configurations model was originally intended for use in performing simple configurations of application-specific settings. If an unsupported Managed Configuration is applied to an application that does not support that Managed Configuration, or if the Managed Configuration cannot be supported for some other reason (such as an unsupported value), the application generally ignores that Managed Configuration. The Android Managed Configurations model also does not provide any feedback mechanism to report errors, so an EMM applying unsupported Managed Configurations to an application on a device would have no way of those which were supported and handled successfully from those which were ignored. 

-----

**Q: Is there a way for an EMM to know which of a set of Managed Configurations created according to the Zebra OEMConfig Schema have been successfully applied to the Zebra OEMConfig application on a given Zebra Android device**? 

A: Yes. The Zebra OEMConfig application provides a means by which an EMM can request to be notified when a processing of a set Managed Configurations (called a Transaction) by Zebra OEMConfig has completed, along with information about any failures that occurred during the processing of that set of Managed Configurations. An EMM that elects to leverage this mechanism can more easily use a single “latest and greatest” Schema version to configure a mixed population of devices since it can, if it chooses, determine what worked and what didn’t work on each device. 

-----

**Q: Is there a way for an EMM to know when a set of Managed Configurations have been successfully applied to a given application on a given Android device**? 

A: No. As noted above, the Android Managed Configurations model also does not provide any feedback mechanism and hence provides no way for an application that exposes Managed Configurations to indicate when the processing for a submitted set of Managed Configurations has completed. In fact, submitting a new set of Managed Configurations to a given application before a prior set have been processed could result in the prior set never being processed. When configuring application settings for many applications, such a situation may be relatively benign. But when configuring device settings using OEMConfig, such a situation could lead to non-deterministic results. 

-----

**Q: Is there a way for an EMM to know when a set of Managed Configurations created according to the Zebra OEMConfig Schema have been successfully applied to the Zebra OEMConfig application on a given Zebra Android device**? 

A: Yes. As noted above, the Zebra OEMConfig application provides a means by which an EMM can request to be notified when a processing of a set Managed Configurations (called a Transaction) by Zebra OEMConfig has completed. An EMM that elects to leverage this mechanism can ensure that a new set of Managed Configurations is not applied until processing of any previous set is fully complete, thus ensuring fully deterministic results. 

-----

**Q: Is there a way for an EMM to control the order in which multiple Managed Configurations within a set of Managed Configurations applied to a given application on a given device are processed**? 

A: No. The Android Managed Configurations model does not inherently provide any means to specify ordering amongst Managed Configurations within a set. When configuring application settings, order dependency is unlikely to be a huge concern. But when configuring device settings using OEMConfig, the inability to define and enforce order dependency may be a serious limitation. 

-----

**Q: Is there a way for an EMM to control the order in which a set of Managed Configurations <!-- created according to the Zebra OEMConfig Schema -->are processed by the Zebra OEMConfig application on a given Zebra Android device**? 

A: Yes. The Zebra OEMConfig Schema organizes Managed Configurations into Transactions and sub-divides each Transaction into a series of Steps using a Bundle Array. This allows a set of Managed Configurations created according to the Zebra OEMConfig Schema to explicitly define an order in which Zebra OEMConfig should apply subsets of Managed Configurations and allows full enforcement of order dependency when required. 

-----

**Q: What is Schema Package Name?**

A: The Schema Package Name is a Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Package Name of the Package that implements that Schema. For example, the Zebra Schema is published by the OEMConfig package. Therefore, if the Schema is obtained from that package through the Android system, the package name of that package is already known and this Managed Configuration would not be required. However, if the Schema is obtained in some other way, such as by download or direct import, this Managed Configuration can be used to confirm the schema name and/or to determine the package to which Managed Configurations created using this Schema should be sent.

-----

**Q: What is Schema Contract Version?**

A: The Schema Contract Version is a Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Contract Version being used by that Schema. The Contract Version is expressed in the form _&lt;major&gt;.&lt;minor&gt;_ (i.e. "1.5"). [More info](../glossary/#schemacontractversion). 

-----

**Q: What is Schema UI Revision?**

A: The Schema UI Revision is a Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the UI Revision of the Schema being used. [More info](../glossary/#schemauirevision). 

-----

**Q: What is Schema Variant?**

A: The Schema Variant is a Managed Configuration that allows an EMM solution or other tool consuming the OEMConfig Schema to determine the Variant of that Schema being used. The Schema Variant is expressed in the form of an identifying string and could have a variety of possible values. [More info](../glossary/#schemavariant).

-----

## See Also

* **[EMMTK Glossary](../glossary)** | Defines terms used in the EMM Toolkit
* **[AEDO Porting](../port)** | EMM agent porting options 
* **[Persistence Best Practices](../persistence)** | Zebra-recommended processes for EMMs
* **[Staging Service APIs](../api)** | Interfacing with StageNow from an EMM console
* **[Build a DDUI from the Zebra OEMConfig Schema (.pdf)](../../downloads/Zebra_EMMTK_Building_DDUI_from_OEMConfig_Schema_091418.pdf)** | Breakdown of DDUI creation with Zebra OEMConfig
* **[DA-to-DO Agent Porting Guide (.pdf)](../../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf)** | Detailed porting information and guidance


