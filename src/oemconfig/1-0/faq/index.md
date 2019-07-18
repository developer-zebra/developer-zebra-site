---
title: Frequently Asked Questions
layout: guide.html
product: OEMConfig
productversion: '1.0'
menu:
  items:
    - title: About
      url: /oemconfig/1-0/about
    - title: FAQs
      url: /oemconfig/1-0/faq
    - title: Managed Configurations
      url: /oemconfig/1-0/mc
    - icon: fa fa-search
      url: /oemconfig/1-0/search
---

## Overview

Zebra OEMConfig is an approach to performing administrative tasks on Zebra Android devices using Android Managed Configurations. To configure a feature for which no Android Enterprise API is available, Managed Configurations is the only method available that's based on publicly available specifications developed by Google and the Android community. Below are some common questions related to OEMConfig, Managed Configurations and the schemas that drive them. 

Also see the [Glossary of terms](../glossary).

-----

**Q: What is OEMConfig?**

A: OEMConfig is a Google-sanctioned, standards-based approach for an OEM to extend the capabilities of an Android Enterprise (AE) Device Owner (DO) Device Policy Controller (DPC) running on an Android device by using a OEM-provided application that exposes Managed Configurations as means to access OEM-specific and privileged functions that are not provided via standard Android Enterprise APIs, such as the DevicePolicyManager. 

-----

**Q: What is Zebra OEMConfig?**

A: Zebra OEMConfig is Zebra’s OEM-specific application that conforms to the OEMConfig model and provides access to Zebra-specific and privileged functions via Managed Configurations that are exposed by the Zebra OEMConfig application, which is built-into Zebra Android devices. 

-----

**Q: What are Managed Configurations?** 

A: Managed Configurations are a standard feature of Android Enterprise whereby any application that is installed on an Android device can choose to expose a set of name/value pairs that can be used to configure selected aspects of that application. 

-----

**Q: What is a Managed Configuration Schema**? 

A: A Managed Configuration Schema is a means by which an application that chooses to expose Managed Configurations to define the set of Managed Configurations that it supports. The Managed Configuration Schema allows an entity, such as an Enterprise Mobility Management system (EMM) to: 

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

A: Yes and no. Android Enterprise defines that Managed Configuration Schemas built-into Android applications can be very flexible, but applications that are published to the Google Play Store are constrained to use only a very limited subset of the complexity allows by Android Enterprise for Managed Configuration Schemas. This was done to limit the complexity of Managed Configurations exposed by most applications to reduce the effort for EMMs to implement basic application configuration. With Google’s approval. OEMConfig applications provided by approved OEMs can get approval to upload OEMConfig applications to the Google Play Store that use more of the Managed Configuration Schemas capabilities defined as part of Android Enterprise that are supported by other non-OEMConfig applications. Thus, OEMConfig Schemas are generally richer and more sophisticated than the Managed Configuration Schemas of other applications, even though both conform to the rules defined by Android Enterprise for Managed Configuration Schemas. 

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

A: Not really. The beauty of Managed Configurations is that they allow discoverability of the configurable aspects of applications that expose them. OEMConfig is no exception. Hence any EMM that supports Managed Configurations and that supports the richer Managed Configuration Schemas allowed to be exposed by OEMConfig applications should be able to configure all the aspects exposed by the OEMConfig Schema of any OEM, include Zebra, without having code specifically tailored to any OEM. 

-----

**Q: Are there any features of Zebra OEMConfig that may require an EMM to provide special Zebra-specific customization for me to be able to utilize those features via that EMM**? 

A: Yes and no. There are some Zebra OEMConfig features that would require an EMM to enhance their solution to be able to offer support full support for those feature. But those enhancements are not actually Zebra-specific. If an EMM wishes to gain the full benefit of all Zebra OEMConfig features, they would need to enhance their solution in ways that leverage additional standard Android APIs to provide functionality that enhances the functionality of Zebra OEMConfig. Having added such features, the EMM would in no way be Zebra-proprietary and likely could leverage those features in many ways unrelated to Zebra OEMConfig as well as being able to use those same features to enhance the functionality of OEMConfig implementations from other OEMs. Whether a given EMM will elect to invest in providing such features depends on their own determination of the business value they offer. 

-----

**Q: Where does an OEMConfig Schema come from**? 

A: Fundamentally, an OEMConfig Schema, like any Managed Configuration Schema for any application, is built-into the APK of the application by referencing it from the Manifest when the APK file is built. Hence the APK file is the primary source of the Schema. APIs exist in the device to acquire the Schema for any application that exposes Managed Configurations, hence an application, including an EMM Agent could acquire an OEMConfig Schema on-device and send it to the EMM Server. What that is possible, it is probably not the most common case, since then the EMM Server would need to receive and collate one or more Schemas from every single managed device. 

More commonly, an OEMConfig APK is published to the Google Play Store. The advantage of doing this is an EMM Server can then make a server-to-server call to the Google Play Store, using the Google Play EMM API to acquire the Schema for that OEMConfig APK. This is especially beneficial since the EMM can use logic identical to that used for non-OEMConfig Schemas to access the OEMConfig Schema for any OEMConfig application from any OEM, so long as it knows the Android Package Name of that OEMConfig application. 

Since an OEMConfig Schema, like any other Managed Configuration is just a file, it could also be obtained in various other ways, such as downloading it from an OEM web site, obtaining it from, an on-line repository, etc. The possibilities are nearly endless. Ultimately, it is the decision of a given EMM vendor which methods of Schema acquisition make the most sense to provide based on the use cases of the users of that EMM. 

-----

**Q: Where does the Zebra OEMConfig Schema come from**? 

A: Zebra publishes the Zebra OEMConfig Schema to the Google Play Store with the Android Package Name `com.zebra.oemconfig`. This means that any EMM vendor that has registered with Google to gain access to the Google Play EMM API can acquire the Zebra OEMConfig Schema from the Google Play Store. Zebra also may elect to post the Zebra OEMConfig Schema on its web site and provide it through its online repository from which OS Update and Patch images can be acquired. 

-----

**Q: Do OEMConfig Schemas have versions**? 

A: Yes and no. Since the primary source of an OEMConfig Schema is the APK for the corresponding OEMConfig application that exposes that Schema, and since APKs have versions, you could say that by inference any OEMConfig Schema can be considered to have the version of the APK file that publishes it. The versioning applied by an OEM to an OEMConfig application may or may not provide any particularly useful information about the nature of the OEMConfig Schema exposed by that application. So, it would probably be a mistake to make any assumptions about the relationships between two OEMConfig Schemas obtained from different versions of OEMConfig APKs from the same OEM that have the same Android Package Name. 

-----

**Q: Do Zebra OEMConfig Schemas have versions**? 

A: Yes. Zebra has recognized that the Zebra OEMConfig Schema will evolve over time and that EMMs will likely want to have a way to differentiate various versions of Zebra OEMConfig Schemas that may be supported on various Zebra Android device and that may support different sets of capabilities. Zebra has therefore chosen to include a “hidden” Managed Configuration within every Zebra OEMConfig Schema that identifies the version of that Schema. This allows an EMM or Administrator that chooses to do so to differentiate versions of Schemas and better organize their use. 

-----

**Q: Can multiple versions of OEMConfig Schemas from the same OEM be obtained from the Google Play Store**? 

A: Not really. The Google Play Store only allows one version of a given APK, identified by a given Package Name to be uploaded at a time. If a newer version is uploaded, then it replaces the older version. This means that only the “latest and greatest” version of OEMConfig Schema for a given Package Name can be acquired from the Google Play Store using the Google Play EMM API at any given time. While an OEM could post a new version of an OEMConfig application to the Google Play Store with a different Package Name, this might create confusion for customers since they would not know which Package Name to use for a given device from that OEM, unless the OEM created some clear way to identify that, such as by including device models in the Package Name or some other similar method. 

-----