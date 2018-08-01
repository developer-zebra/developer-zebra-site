---
title: EMM Toolkit Roadmap
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## `DRAFT`

**_Information subject to change without notice_**. 

-----

## Overview

This guide is intended for EMM vendors and other Zebra partners that offer solutions designed to administer and manage Zebra devices in an enterprise. It describes the time line for changes to the mechanisms by which Zebra devices are managed.

### Background
Tier-1 EMM solution providers currently administer Zebra devices through a signed agent, an Android app running on the device that accepts XML passed directly from the Zebra StageNow administrative tool. Other EMM vendors adapt their solutions using the legacy [MDM Toolkit](../mdmtk). Through these mechanisms, EMM vendors are able to access Zebra's proprietary MX Management System, which configures Zebra devices through standard Android APIs when possible, or through OSX, Zebra's proprietary Android extension layer. 

As the Android OS evolved over time, many capabilities once available only through Zebra-proprietary layers have now been implemented as Android APIs or through Managed Configurations, both of which are based on published standards (better to call them "publicly available specifications"??). 

DA vs. DO 

-----

Allan's stuff: 
The EMMTK is a Zebra product that is designed to provide EMM Vendors with everything they need to develop an EMM Agent that can access all functionality needed to implement a “complete” EMM Solution for managing Zebra Android devices. 

Early versions of the EMMTK primarily focused on providing documentation, sample code, tools, and technologies required to leverage MX as a Privilege Escalation method to augment the functionality of an EMM Agent that was either totally unprivileged or that was using another Privilege Escalation, such as DA. 

Multiple EMM Vendors successfully used the EMMTK to enable development of a Zebra-proprietary EMM Agent that provided the in-device support for a “complete” EMM Solution for managing Zebra Android devices. 

Note that some EMM Vendors chose to augment a DA EMM Agent and others chose to augment a non-DPC unprivileged application. 

Upcoming versions of the EMMTK are de-emphasizing the use of MX and instead focusing on migrating towards using the Android Device Administration API available to a DO, augmented using the Zebra implementation of OemConfig, via Managed Configurations. 


Allan's DA-to-DO intro
This section will provide theory and practical guidelines and techniques to assist an EMM Vendor in migrating from an existing “DA” solution, based on the use of standard Android functions augmented via Zebra MX functions via XML submitted directly to MX using the mechanism documented in the Zebra EMM Tool Kit, to a new “DO” solution based on standard Android Enterprise Device Owner (AEDO) APIs augmented by Zebra OemConfig Managed Configurations. 

The primary reason for an EMM embarking on such a migration is to move from the current situation, where an EMM Vendor had to develop and maintain one or more OEM-proprietary EMM Agents to support devices from each OEM to a more standards-based approach where a single generic EMM Agent could be used to manage devices from all OEMs. 

“ZMC” = Managed Configurations exposed by the Zebra OEM Configuration Application (OemConfig) 

To facilitate the migration to DA mode and the removal of all Zebra-proprietary logic from an EMM Agent, an alternative to MX was required. While MX accomplished the goal of providing EMM Agents with access to privileged and proprietary functionality, the proprietary nature of the MX interface is inherently incompatible with the goal of enabling an EMM Vendor to develop and maintain a single generic EMM Agent that could work on all Android devices from all OEMs, or at least all devices running a suitably recent version of Android. 

Luckily, the Android Device Administration APIs provide a generic extension mechanism called Managed Configurations (also previously known as Application Restrictions). 

As the original name “Application Restrictions” would suggest, this mechanism was originally conceived as a way for Android device applications to expose restrictions that could be imposed on them from outside, such as by an EMM. For example, the Chrome Web Browser for Android exposed the ability for an EMM to change key behavioral aspects, such as whether to show the address bar and whether to store passwords. 

Over time, Android recognized that applications might expose more than just restrictions, hence the name was changed to Managed Configurations, although the functionality was not altered. 

Zebra recognized that that Managed Configurations represented an extension mechanism that could be used for more than just configuration of applications, specifically that configuration of a device could be accomplished indirectly via a configurable application. 

Zebra defined a special application, called OemConfig that publishes Managed Configurations that control the behavior of the device rather than just the behavior of the application itself. 

Zebra reviewed this approach with Google and with several key EMM Vendors and this approach has now been approved and is being promoted by Google as the recommended approach for use by OEMs to publish extended functionality and for use by EMMs to utilize extended functionality published by OEMs. 

### Tier 1 Agents

All Tier 1 EMMs will need to begin migrating to a more modern approach since Zebra will began phasing out support for Signed Agents in Nougat and will have discontinued all such support as of Oreo. 

Already signed EMM Agents can continue to be used to manage Zebra devices running Android versions that support Signed Agents. 

Already signed EMM Agents cannot effectively used to manage Zebra devices running Android versions that do not support Signed Agents since they will be unable to gain access to the privileged functionality they require. 

Zebra may at some point decline to sign new versions of EMM Agents that were previously signed for use on older devices. 

Tier 1 EMMs should migrate from a Signed Agent to an alternate Privilege Escalation Method based on the versions of Android they wish to support. 

To migrate a Signed EMM Agent to a single EMM Agent that could be used to manage all Zebra Android devices running Kit Kat through Oreo, the method Unsigned DA EMM Agent Augmented by MX, described below, would likely be preferable in most cases. 

Once such an Agent was available, the EMM Vendor would be well positioned to support current and past Zebra Android devices and to begin migration to the new standards-based approach that will be required to manage future Zebra Android devices. 

### Tier 2 Agents

Tier 2 EMM Vendors that already support complete solutions for managing Zebra Android devices have already developed a DA EMM Agent and augmented it using MX to provide the additional privileged functionality. Such EMM Vendors will be well positioned to support current and past Zebra Android devices and to begin migration to the new standards-based approach that will be required to manage future Zebra Android devices. 

if a Tier 2 EMM Vendor already supports a complete solution for managing Zebra Android devices based on a non-DPC EMM Agent that is augmented using MX to provide the additional privileged functionality, they can continue to use that approach to support management of all Zebra Android devices through Oreo. 

Since such an approach will no longer work from Android P onwards, migration to the new standards-based approach will be required to continue to manage future Zebra Android devices. 

Starting from a non-DPC EMM Agent will likely complicate the migration process to a DO EMM Agent and hence should not be left to the last minute.  Once available, the new DO EMM Agent could be used to manage Zebra Android devices as far back as Android Nougat, if appropriate. 

### Future Solutions

#### EMM Solutions for Managing Current and Future Zebra Android Devices 

Successful EMM Solutions for managing Current and Future Zebra Android devices running Android Nougat (7.x) and above are recommended to follow one of the following approaches: 

Unsigned DO EMM Agent Augmented by ZMC 

This is the most preferred approach for the following reasons: 

It is based on standard interfaces rather than Zebra-proprietary interfaces (e.g. MX). 

It allows an EMM Agent to be completely generic and standard, with ZERO Zebra-specific code. 

It allows the same EMM Agent to be used to managed devices from all OEMs. 

It will support all Zebra Android devices running Nougat or higher, albeit with more functionality in later versions. 

It provides a means for an EMM to provide immediate support to customers for new ZMC features as they are added to devices by Zebra, without the need for any changes to the EMM Agent or EMM Server. 

Once an EMM has successfully invested the one-time cost to migrate to this approach, they should be immune to the need for significant additional changes moving forward. 

This approach does have a few downsides: 

It cannot be effectively used to support Zebra Android devices running Marshmallow and below. 

It requires the most changes to migrate to this approach from any Agent using another approach. 

#### Unsigned DO or DA EMM Agent Augmented by MX 

This approach has a few advantages that may make it attractive as an interim solution: 

It allows the same Agent to be used to manage Zebra Android devices running Oreo and below, although use on Oreo is discouraged. 

It may require fewer changes to migrate to this approach from an Agent using another approach. 

This approach has the following significant downside: 

It will not be usable to manage Zebra Android devices running P and above and therefore should only be considered as a temporary stopgap measure. 

-----

Administrative mechanisms and processes generally include:​

* An EMM administrator using an EMM Console to request an administrative task be performed to a managed device or set of devices​.
* The EMM server transmits a command in an EMM-defined format to the EMM agent on each affected device using an EMM-defined protocol​.
* The EMM device agent receives and decodes the command and uses a suitable admin mechanism on the Zebra device to produce the required effect. 



-----

### Migration Timetable

<table style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th style="text-align:center">Phase</th>
    <th style="text-align:center">Description</th> 
    <th style="text-align:center">Prerequisite(s)</th>
    <th style="text-align:center">Pros</th>
    <th style="text-align:center">Cons</th>
    <th style="text-align:center">Requirement(s)</th>
    <th style="text-align:center">Migration<br>Milestones</th>
  </tr>
  <tr>
    <td>Past</td>
    <td>Signed Tier 1 EMM Agent<br>Direct access to Privileged APIs​</td>
    <td>Zebra-signed agent</td>
    <td>Supported on all Zebra devices<br>Supports Android JB&ndash;M<br>Accesses all Privileged Android functions regardless of EMMTK​ support</td>
    <td>Tier 1 EMMs​ only<br>Deprecated in Android N<br>NA on TC20/TC25<br>Discontinued in Android O</td>
    <td style="text-align:center">Tier 1 EMMs <strong><u>MUST</u></strong> to migrate from signed agents​</td>
    <td style="text-align:center"><strong><u>MUST</u></strong> migrate by Android O<br><strong><u>MUST</u></strong> migrate for TC20/TC25<br><strong><u>SHOULD</u></strong> migrate by end of Android N </td>
  </tr>
  <tr>
    <td>Present</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>Near Future</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>Android P and beyond</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>
  <tr>
    <td>TC72/TC77</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center">&#x25cf;</td>
  </tr>

</table>

<!-- 
**_after_** they've been brought under management by an EMM system. 

 -->


<!-- 
<img alt="image" style="height:350px" src="active_edge_01.png"/>
_caption_
<br>
 -->
-----

## new major section

-----

### Section sub-section

-----

## See Also

* [About ActiveEdge](../about)
* [Administrative Guide](../setup)
