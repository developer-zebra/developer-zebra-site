---
title: DataWedge Setup
layout: guide.html
product: DataWedge
productversion: '7.5'
---

## Overview
**Profiles and Plug-ins** form the basis of most DataWedge functionality. Profiles include all the information about how DataWedge should behave when providing scanning services for a particular application. Much of that information comes from Plug-ins, which determine how the data will be input, processed and output.

Each Profile generally contains four elements: 
* **An Input Plug-in -** to determine how data will be acquired (i.e. a barcode scanner)
* **A Process Plug-in -** to specify how the acquired data should be manipulated 
* **An Output Plug-in -** to control the passing of data to an application
* **An associated application -** (or activity) with which to link DataWedge actions

When associated with an app, DataWedge can be invoked to scan and acquire the data, format or append it in a specified way, and pass it to the associated app when the app comes to the foreground. DataWedge also includes Profile0, which works with any unassociated application that comes to the foreground. Profile0 contains baseline settings that can be tailored to suit individual needs. This allows DataWedge to be used out of the box with little or no setup. 
 
**Important:** 
* **Control of barcode scanning hardware is exclusive**. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. For more information, see the section on **[disabling DataWedge](../settings/#disabledatawedge)**. 
* **Delay in scanning after a device reboot**. DataWedge requires a brief period of time to initialize after device reboot due to waiting for a response to be received from the initialization of the scanning subsystem, causing scanning to be inactive from DataWedge during this time frame.

**Related Guides**:

* **[Profile Overview](../overview) -** DataWedge architecture and defaults
* **[Profiles/Plug-Ins listing](../profiles) -** links to all DataWedge Plug-ins

-----

## Getting Started
The basic steps for creating a Profile and associating it with an app on the device are shown below. For most scenarios, a version of this process must be used for every app that will call on DataWedge for scanning services. For a detailed look at this process, see the [Managing Profiles](../createprofile) page.  

**To enable DataWedge scanning services for an app**:

1. **Install the app** that will use DataWedge for scanning. 
2. **Start DataWedge** app and navigate to the Profiles list (if not shown by default).  
3. Tap on the Profiles screen's "hamburger" menu and **select -> New profile**. 
4. **Enter a name for the Profile and tap OK**. The new Profile appears in the Profiles list. 
5. Tap on the new profile.
6. **Select Associated Apps** from the Applications section.
7. In the Hamburger menu, **select -> New app/activity**. A list of installed apps appears. 
8. Select your app's package name (scrolling down, if necessary).
9. **Tap the asterisk** (*) to associate all of your app's activities with DataWedge. 
10. Tap the device's Back button until the new Profile's Settings screen appears.
11. Confirm that the "Profile enabled" checkbox is checked. 
12. As needed, **confirm that the Barcode Input and Keystroke Output checkboxes are checked**. 

Test and adjust input, processing (data formatting) and output parameters as necessary. 

The app will now use DataWedge for barcode data acquisition. 

-----

**Related Guides**: 

* **[Create a Profile guide](../createprofile) -** the instructions above plus details and screenshots
* **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins
* **[Profiles/Plug-Ins listing](../profiles) -** links and details for all DataWedge Plug-ins
* **[DataWedge APIs](../api) -** access DataWedge programmatically 
