---
title: DataWedge Profiles
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
A DataWedge Profile contains information about how DataWedge should behave with one or more associated applications, and provides a means to allow different apps that might be acquiring the same data to do different things with it. For example, while "App A" might require that a TAB be sent after each dataset is passed from DataWedge, "App B" might require the ENTER key to be pressed instead. Through Profiles, DataWedge can be configured to process the same set of captured data according to the requirements of any number of individual applications. Alternatively, a **single** Profile can be created and associated with **many applications**, acquiring and processing data in exactly the same way for all. 

Any number of Profiles can be created to suit all the needs of an enterprise. DataWedge also includes several pre-configured Profiles to support general needs or for specific apps that are built into every device. Some of these, such as Profile0, are visible to the user and can be edited as needed. Others contain fixed parameters and are not visible or configurable. 

#### Visible Profiles
* **Profile0 -** a generic that takes effect for any unassociated foreground app. 
* **Launcher -** used when the Launcher screen is in the foreground.
* **DWDemo -** used with DWDemo, the [DataWedge Demo app](../demo) app. When DWDemo comes to the foreground, data captured with DataWedge is handed to the DWDemo application.
* **User-defined -** always visible and available for editing. 

#### Hidden Profiles
* **RD Client -** provides support for Zebra's Rapid Deploy app and third-party MDM solutions.
* **MSP Agent -** provides support for Zebra's legacy Mobility Services Platform (MSP).
* **MspUserAttribute -** provides additional support for MSP.
* **Camera -** disables scanning when the default camera application is in the foreground.
* **RhoElements -** disables scanning when RhoElements is in the foreground.

### Profile0
Profile0 is a generic Profile that automatically takes effect for any app that comes to the foreground that has not been associated with DataWedge. This can be useful for quickly acquiring data using an app that has just been installed, for example, or when using an app that has not yet been configured by an administrator for use with DataWedge. All parameters of Profile0 can be edited except its association. <!-- **Note: Profile0 cannot be used with IPWedge**.10/18/16- removed per Tharindu -->

**Profile0 also can be disabled within a Profile**. This provides a measure of security by restricting output to applications or servers to which DataWedge has been specifically associated. 

## Plug-ins
Plug-ins extend DataWedge functionality to support device hardware, peripherals, data processing and transport. Plug-ins are used to configure how data will be acquired by DataWedge, manipulated or altered for an app, and output to an app or server.

**Input Plug-ins specify**:
* Barcode scanners (laser, imager, camera, bluetooth scanner)
* Magnetic Stripe Readers (MSR)
* SimulScan hardware

**Process Plug-ins specify**: 
* Basic data formatting (append with keystrokes, prefix, suffix, etc.)
* Advanced data formatting (rules-based data manipulation)

**Output Plug-ins specify**:
* Keystrokes (emulates manual keyboard input)
* Intent (programmatic hand-off of data)
* IP Output (sending data to a server over IP)

-----

## Create a Profile
The basic steps for creating a Profile and associating it with an app on the device are shown below. For most scenarios, a version of this process must be used for every app that will call on DataWedge for scanning services. For a detailed look at this process, see the [Create a Profile](../createprofile) page.  

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

The app will now use DataWedge to acquire barcode data. 

For a detailed look at this process, see the [Create a Profile](../createprofile) page.  

-----

**Related Guides**: 

* **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins
* **[Profiles/Plug-Ins listing](../profiles) -** links and details for all DataWedge Plug-ins
* **[DataWedge APIs](../api) -** access DataWedge programmatically 

