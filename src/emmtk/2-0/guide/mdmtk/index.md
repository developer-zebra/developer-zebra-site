---
title: MDM Toolkit (obsolete)
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

# `OBSOLETE`

This document is obsolete. It is published as a courtesy for organizations using the processes for legacy devices. 

**_Information subject to change without notice_**. 

-----

## Overview

The MDM Toolkit provides a walk-through and sample application for the common tasks and components required for an MDM client to interface with the Zebra MX Management System (MXMS) for staging Zebra Android devices. This toolkit does not describe the means to generate XML required to exchange data with the MXMS. Zebra does not recommend generating or editing XML code by hand. All XML should be generated only by using the Zebra StageNow tool and its Export a Profile to an MDM feature. Once generated, XML is passed into the MDM client via some transport mechanism and submitted to the MXMS for processing. An XML response is passed from MXMS to the client with the processing results (success or failure) with information about errors (if any) in XML syntax or the requested operation. 

[Download the MDM Toolkit 1.0.1](Zebra_MDMTK_v1-0-1.pdf) (.pdf) file. 

-----

## See Also

* [About EMM Toolkit](../about)
* [How to enroll an EMM agent](../enrollaedo)
