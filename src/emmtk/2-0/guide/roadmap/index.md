---
title: EMM Toolkit Roadmap
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

This guide is intended for EMM vendors and other Zebra partners that offer solutions designed to administer and manage Zebra devices in an enterprise. It describes the time line for changes to the mechanisms by which Zebra devices are managed.

### Background
Tier-1 EMM solution providers currently administer Zebra devices through a signed agent, an Android app running on the device that accepts XML passed directly from the Zebra StageNow administrative tool. Other EMM vendors adapt their solutions using the legacy [MDM Toolkit](../mdmtk). Through these mechanisms, EMM vendors are able to access Zebra's proprietary MX Management System, which configures Zebra devices through standard Android APIs when possible, or through OSX, Zebra's proprietary Android extension layer. 

As the Android OS evolved over time, many capabilities once available only through Zebra-proprietary layers have now been implemented as Android APIs or through Managed Configurations, both of which are based on publicly available specifications. 

<!-- 
**_after_** they've been brought under management by an EMM system. 

 -->


<!-- 
<img alt="image" style="height:350px" src="active_edge_01.png"/>
_caption_
<br>
 -->

-----
## See Also

* [About EMM Toolkit](../about) | General information
* [FAQ](../faq) | Frequently asked questions about EMM Toolkit 
* [Staging Service APIs](../api) | Interface specs for cloud-based staging
* [Other EMMTK Guides](../../guide) | A complete list of all guides in the EMM Toolkit
* **[Build a DDUI from the Zebra OemConfig Schema (.pdf)](../../downloads/Zebra_EMMTK_Building_DDUI_from_OemConfig_Schema_091418.pdf)** | Breakdown of DDUI creation with Zebra OemConfig
* **[DA-to-DO Agent Porting Guide (.pdf)](../../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf)** | Detailed porting information and guidance
