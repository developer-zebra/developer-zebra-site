---
title: RFID Input
layout: guide.html
product: DataWedge
productversion: '7.3'
---

## Overview

**Radio-frequency identification (RFID) Input** acquires data from RFID tags using RFID radio integrated Zebra mobile computers. Currently this feature is available in MC3300R only. The type of RFID tags that can be read is dependent on what is supported by the RFID reader on the device. RFID is another input source to DataWedge - data delivery is similar to other input sources such as Barcode and MSR (Magnetic-stripe Reader). The data acquired is processed and formatted according to the [Basic Data Formatting (BDF)](../../process/bdf) and [Advanced Data Formatting (ADF)](../../process/adf) options located in the **Keystroke output** section of the profile. 

> **Important:** For instructions on initial setup, refer to "Setting Up the MC300R" section of the [MC3300R Integrator Guide](https://www.zebra.com/content/dam/zebra_new_ia/en-us/manuals/mobile-computers/mc33/mc3300R-ig-en.pdf).

## RFID Input
**RFID Input** from the DataWedge profile provides options to toggle RFID input, specify the trigger mode and configure RFID reader settings.

<img style="height:350px" src="./rfid-input.jpg"/>
<br>

**Enabled -** enable/disable RFID tag reading <br>
**Reader selection -** display the name of the internal RFID reader<br>
**Hardware trigger -** enable/disable hardware trigger to activate RFID reading. If enabled, set the **Trigger mode**.<br>
**Configure reader settings:**<br>
* **Filter duplicate tags –** enable/disable feature to display data read only once instead of duplicating the same data from multiple readings. 
* **Tag read duration –** amount of time (in ms) for events to propagate to the application. If the trigger is released before the timeout elapses, data is returned to the application upon trigger release. Data returned to the application is limited to the capacity of the Android bundle payload – any data read beyond that capacity is discarded.
* **Antenna transmit power –** amount of signal power to be transmitted by the RFID reader. The higher the value, the further it is able to read the RFID tag. The range is 5 to 30 dBm. 
* **Memory bank –** configure the memory bank to read. The integrated circuit (IC) on some tags have different bit allocations between the memory banks to allow for more user memory or a longer EPC (electronic product code) number. Refer to the tag specifications to determine the memory bank type needed. Supported values: 
  * **None (default) -** no memory bank to read. 
  * **Reserved -** stores the access and kill password of the tag, 32 bits each. The kill password permanently disables the tag. The access password is set to lock and unlock the write capabilities of the tag. Therefore this is writeable if a password is specified. Can typically be used if an application contains sensitive data. 
  * **EPC -** stores the EPC code with a minimum of 96 bits of memory.  
  * **User -** (optional) extended memory to store more information. This can have various sizes, usually 512 bits and up to 8K of memory.  Can be used for additional data that is not suitable or does not fit into the EPC memory, such as temperature or expiration date. 
  * **TID (tag identification) -** stores the unique tag identifier from the manufacturer, which typically cannot be changed. 

**Trigger mode –** select the mode to activate the RFID reader. Supported values: 
  * **Immediate (default) –** tag reading takes place based on when the trigger is pressed.
  * **Continuous-** continually reads tags after pressing the trigger once. Press the trigger again to terminate tag reading. 

**Feedback –** configure audio or visual feedback from an RFID tag read. Options: 
  * **Beeper -** audio feedback
  * **LED -** visual feedback

##Key mapping
MC3300R device consists of multiple triggers, all utilized for Barcode and SimulScan features by default. In order to use a hardware trigger for an RFID action, it needs to be mapped to RFID. Steps to follow:

**Manual Instructions**
1. Open Android Settings. 
2. Tap Key Programmer.
3. Tap SYMBOL_RFID. 

**CSP (Configuration Service Provider) Instructions:**
<br>
With CSP, use StageNow to update key mapping during device staging. Refer to [KeyMapping Manager](/stagenow/latest/csp/keymap) for more information.

## Data
Important notes regarding RFID data reading:
* By default, a newline character is added after each tag read. 
* If applicable, a data set from multiple data reads can be returned if multiple tags are read simultaneously. 
* If receiving data via **Keystroke output**, it requires **Inter character delay** to be set to 50 ms. 

<img style="height:350px" src="./profile-rwdemo.jpg"/>
<br>

##RWDemo
**RWDemo** demonstrates RFID features in DataWedge. This application is pre-installed on supported Zebra RFID devices, such as MC33R, and creates a DataWedge profile associated with RWDemo when launched. 

------

**Related guides**:

* [Advanced Data Formatting](../../process/adf)
* [Basic Data Formatting](../../process/bdf) 
* [Intent Output](../../output/intent) 
* [Keystroke Output](../../output/keystroke)
* [Profiles/Plug-ins](../../profiles)
* [DataWedge APIs](../../api) 

