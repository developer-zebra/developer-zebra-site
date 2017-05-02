---
title: MSR Input Plug-in
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
The **Magnetic Stripe Reader (MSR) Input Plug-in** is used when acquiring data by swiping a card. This plug-in reads data from an MSR reader integrated within a device (such as the MC40) or from an attached Scan/MSR Module, after which the raw data from the reader can be processed or formatted as required using a Process Plug-in.

**DataWedge also provides beep sounds and other feedback to alert the user of scanning results. See the [Input Parameters](../decoders/#scanparams) section for more information**. 
sure
## Enable MSR Input
To enable input from a mag-stripe reader, add a check to the MSR Input Enabled checkbox in the Profile:    
<img style="height:350px" src="msr_input.png"/>
_MSR input is enabled in the "DWDemo" Profile_
<br>

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

