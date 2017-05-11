---
title: Mag-Stripe Reader Input
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
**Magnetic Stripe Reader (MSR) Input** is used when acquiring data by swiping a card. This plug-in acquires data from an MSR reader integrated within a device (such as the MC40) or from an attached Scan/MSR Module, after which the raw data from the reader can be processed or formatted as required using [Basic](../../process/bdf) or [Advanced Data Formatting](../../process/adf).

**DataWedge also provides beep sounds and other feedback to alert the user of scanning results. See the [Scan Params](../barcode/#scanparams) section for more information**. 

## Enable MSR Input
To enable input from a mag-stripe reader, add a check to the MSR Input Enabled checkbox in the Profile:    
<img style="height:350px" src="msr_input.png"/>
_Shows MSR input enabled in the "DWDemo" Profile_
<br>

------

**Related guides**:

* [Profiles/Plug-ins](../../profiles)
* [Input Parameters](../barcode/#decoderselection)
* [DataWedge APIs](../../api) 

