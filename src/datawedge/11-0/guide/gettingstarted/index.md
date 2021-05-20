---
title: Get Started
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## Overview

DataWedge allows any application on Zebra devices to capture data from barcode, MSR, RFID and other input sources, to process the data and to output it as keystrokes, from intents, or over a network connection. DataWedge actions and settings can be controlled using DataWedge profiles from the UI (aka the “zero-code” approach) or controlled programmatically. When an application screen is displayed in the foreground, DataWedge automatically detects which profile the app or activity is associated to and applies the configuration from the profile. There are 2 approaches to capture data:

- **No-code** - No coding is required. Create [profiles](../profiles) through the DataWedge UI to control scanning behavior. Once an app/activity is associated to the profile and the output is set to Keystroke, data can be captured into any editable text field within the app. Options are available to define how the data is captured (input) and processed. A default profile, Profile0, enables data capture into the text field of any application.
- **Application development** - Develop data capture apps based on one of the following approaches:
  - **Minimal code** - Basic method to retrieve data from generic Android intents with the use of a broadcast receiver without the need for finer control of scanning activity or data processing. Refer to [basic intent sample app](../samples/basicintent1).
  - **[DataWedge APIs](../api)** - Use intents to control DataWedge settings and specify how the data is captured, processed, and delivered to the app without concern of the underlying hardware.

DataWedge APIs are often used in preference to Zebra’s EMDK. Developing EMDK apps require a thorough knowledge of scanning APIs - designing and coding EMDK apps can be time consuming due to its higher level of difficulty. DataWedge offers a simpler interface, better API ease-of-use, and flexibility. DataWedge data may be retrieved from any application regardless of the underlying application technology (e.g. Java, Xamarin, Cordova). DataWedge and EMDK provide similar features and control over data capture. See [DataWedge vs EMDK Comparison table](/help/#datawedgevsemdkcomparison) for more information.

**Important: Control of barcode scanning hardware is exclusive.** When DataWedge is active, Scanner and Barcode APIs used in apps (such as an EMDK app), become inoperative. Likewise, when an app controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. For more information, see the section on **[disabling DataWedge](../settings/#disabledatawedge)**.

---

## Main Functionality

DataWedge provides the following primary functions and options (feature availability may vary by version - refer to [Version History](./#recentversionhistory)):

#### Data Capture

- Scan and process all [major barcode decoders](../input/barcode/#decoderselection), including: Code39, Code128, Datamatrix, DotCode, EAN13, OCR A, OCR B, PDF417, QRCode, UPCA, and UPCE
- Use existing apps to [acquire barcodes](../input/barcode), images, mag-stripe and other data
- Set DataWedge to [acquire scanned data for one or multiple apps](../gettingstarted)
- Read RFID (radio-frequency identification) tags with [RFID Input](../input/rfid)
- Use voice capture to acquire data with [Voice Input](../input/voice)
- Use a [magnetic stripe reader (MSR)](../input/msr) to capture data
- Acquire multiple types of data in a single scan [using SimulScan](../input/simulscan)
- Designate device screen areas as scan triggers using [Data Capture Plus](../input/dcp)
- [Create Profiles](../overview) to implement DataWedge features for individual apps
- Configure DataWedge to [automatically scan with external Zebra peripherals](../input/barcode/#autoswitchtodefaultonevent):
  - [USB SSI scanners](../input/barcode/#usbssiscanners)
  - [Bluetooth scanners](../input/barcode/#bluetoothscanners)
  - [Serial scanners](../input/serial)

#### Data Processing

- [Enable/Disable decoding](../input/barcode/#decoderselection) of individual symbologies to improve speed
- [Set parameters](../input/barcode) for individual barcodes, scanners and readers
- Format output according to [simple](../process/bdf/) or [custom](../process/adf/) rules
- Use [Plug-ins](../profiles) for data input, output and processing
- [Create custom string handling](../process/adf/#settingcriteria) and other processing criteria

#### Deployment

- [Import and export settings](../settings)
- Remotely configure and [mass-deploy settings](../settings/#massdeployment) via MDM
- [Restore settings](../settings/#restoredefaults) to factory defaults
- [Apply changes remotely](../settings/#autoimport) to update devices in the field
- [Generate reports](../settings/#reporting)

**Note**: Availability and operation of DataWedge features varies by device and operating system (which determine the DataWedge version installed on the device).

---

## DataWedge Features

**[Profiles and Plug-ins](../profiles)** form the basis of most DataWedge functionality. Profiles include all the information about how DataWedge should behave when providing scanning services for a particular application. Much of that information comes from Plug-ins, which determine how the data will be input, processed and output.

Each Profile generally contains four elements:

- **An Input Plug-in -** to determine how data will be acquired (i.e. a barcode scanner)
- **A Process Plug-in -** to specify how the acquired data should be manipulated
- **An Output Plug-in -** to control the passing of data to an application
- **An associated application -** (or activity) with which to link DataWedge actions

<!-- When associated with an app, DataWedge can be invoked to scan and acquire the data, format or append it in a specified way, and pass it to the associated app when the app comes to the foreground. DataWedge also includes Profile0, which works with any unassociated application that comes to the foreground. Profile0 contains baseline settings that can be tailored to suit individual needs. This allows DataWedge to be used out of the box with little or no setup.
-->

Each app that uses DataWedge is associated with a [DataWedge profile](../profiles), which contains options that determine how the data is to be acquired (input), processed (data formatting), and delivered to the receiving app (output). These options are referred to as plugins (e.g. barcode input plugin). DataWedge continually monitors the foreground application - when it detects a change to the foreground app, it activates the appropriate profile associated with the app (if one exists). If the app is not associated with any profile, _Profile0_ is the default generic profile that takes effect. A profile can be exported so the same DataWedge configurations can be deployed across multiple devices.

For example, "App A" might require a TAB to be sent after each dataset is passed from DataWedge, "App B" might require the ENTER key to be pressed instead. Through Profiles, DataWedge can be configured to process the same set of captured data according to the requirements of any number of individual applications. Alternatively, a single Profile can be created and associated with many applications, acquiring and processing data in the same way for all.

**[DataWedge Plugins](../profiles)** are specified in profiles and determine how the data is captured (input), processed (formatted) and delivered to the app (output). Furthermore, optional profile specific configuration settings are categorized as _Utilities_, which can be associated with apps or controlled at runtime.

- **Input plugins -** specify how the data is captured:
- **[Barcode](../input/barcode) –** specify the device scanning hardware, decoders, decoder parameters, reader parameters, and scan parameters applied on the captured data prior to sending the data for processing. The supported hardware can include the integrated built-in devices (such as 1D scanner, 2D scanner, and camera), or externally connected devices (such as barcode scanner, Bluetooth scanner, and USB SSI Scanner).
- **[MSR (magnetic stripe reader)](../input/msr) -** acquire data from an MSR card, such as a credit or debit card, on supported hardware.
- **[RFID (radio-frequency identification)](../input/rfid/) -** acquire data from an RFID tag with the integrated RFID reader built-in some Zebra mobile computers.
- **[Serial port](../input/serial) -** acquire data from a peripheral device connected via serial port.
- **[Voice](../input/voice/)-** acquire data via speech recognition. Configurations include: define a start/end phrase, send a tab/enter command, limit data to alpha or numeric characters, spoken data validation, and working offline.

- **Processing plugins -** specify how to format the captured data prior to passing it to the output plugin:
- **[Basic Data Formatting (BDF)](../process/bdf) -** format data with basic pre-defined options prior to passing it to the output plug-in. Options available: add data prefix, add data suffix, send data to foreground app, send data in hex format, append TAB key, and append ENTER key. This can be useful when scanning data to automatically move to the next text field by appending a TAB key.
- **[Advanced Data Formatting (ADF)](../process/adf) -** format data based on custom rules with specific criteria prior to passing it to the output plugin. This can be useful in cases such as triggering an action to pad data with zeros only if the middle 3 digits of an acquired 9 digit Code-128 barcode matches the same 3 digits specified in the rule.

- **Output plugins –** specify how data is delivered:
- **[Keystroke](../output/keystroke) –** acquired data is sent to the associated application as a series of keystrokes into an editable field. It can be used to add scanning capabilities to an app without adding any code, furthermore it is also fully configurable via the DataWedge Intent API.
- **[Intent](../output/intent/) –** data acquired is programmatically sent to the associated foreground app/activity using the Android intent mechanism. This is useful when data simply needs to be sent to the app screen without allowing the user to edit it. Register for the DataWedge intent to receive the captured data.
- **[Internet Protocol (IP)](../output/ip) –** acquired data is sent through a network to a host via specified IP address and port using TCP or UDP. This can be useful to scan data to a PC such as in healthcare environments.

- **Utilities -** optional tools to use:
- **[Data Capture Plus (DCP)](../input/dcp) –** enables specified areas of the device screen to behave as a virtual scan trigger when tapped, simulating a hardware trigger press. It can be configured in full-screen mode or as a floating scan button placed on the right, left, or both sides of the screen.
  - **[Enterprise Keyboard Configuration](../utilities/ekb) –** enables the use of custom Enterprise Keyboard layouts within an associated app without modifying the app. Uses a desktop tool, [Enterprise Keyboard Designer](/ekd), to generate the Enterprise Keyboard layout.

**[DataWedge Settings](../settings) -** provide configurations to general, non-profile related DataWedge options. It includes actions such as ignore disabled profiles, disabled app list, import/export profile, and reporting.

**[Auto Import](../settings/#autoimport) –** provides the ability to automatically load pre-configured profiles or configuration files in DataWedge. This can be used for device remote deployment using tools such as third-party Enterprise Mobility Management (EMM) systems. DataWedge monitors a particular folder for the profile or configuration file. If a profile or configuration file is found, it imports the file to replace any existing configuration or profile.

**[Mass Deployment](../settings/#massdeployment) -** DataWedge profiles and settings can be deployed to multiple devices either manually or with an EMM (Enterprise Mobility Management) software. The exported config file or profile can be automatically imported when placed in the `/enterprise/device/settings/datawedge/autoimport` directory.

**[Create a Profile and Associate App with Profile](../createprofile) -** By associating an app with the profile, the app calls on DataWedge to acquire data. Data capture input, processing, and output can be controlled through the profile.

<!--  The basic steps for creating a Profile and associating an app with the profile on the device are shown below. For most scenarios, a version of this process must be used for every app that will call on DataWedge for scanning services. To enable DataWedge scanning services for an app:-->
<!--
1. **Install the app** that will use DataWedge for scanning.
2. **Start DataWedge** app and navigate to the Profiles list (if not shown by default).
3. Tap on the Profiles screen's "hamburger" menu and select **New profile**.
4. **Enter a name for the Profile and tap OK**. The new Profile appears in the Profiles list.
5. Tap on the new profile.
6. Select **Associated Apps** from the Applications section.
7. In the Hamburger menu, select **New app/activity**. A list of installed apps appears.
8. Select your app's package name (scrolling down, if necessary).
9. Tap the asterisk (*) to associate all of your app's activities with DataWedge.
10. Tap the device's Back button until the new Profile's Settings screen appears.
11. Confirm that the "Profile enabled" checkbox is checked.
12. As needed, **confirm that Barcode Input and Keystroke Output are enabled**. <br>

The app now uses DataWedge for barcode data acquisition. Test and adjust input, processing (data formatting) and output parameters as necessary.
-->

---

## Best Practices

See [Best Practices](../programmers-guides/dw-programming).

---

<!--
## Sample Apps

As of writing, the following [DataWedge sample applications](../samples) are available:
* [Getting Started with DataWedge on Zebra Devices](https://developer.zebra.com/blog/getting-started-datawedge-zebra-devices) - a guide to develop an application to capture barcode data written in Java, Kotlin, and Xamarin
* [Tutorial on how to receive scanned barcode data](../samples/tutorial-ReceiveScannedData/) - a walk-through on how to receive scanned barcode data through an Android intent
* [Basic scanning app](../samples/basicintent1) – uses an Android intent without DataWedge intent APIs
* [Scanning app](../samples/barcode1) - includes ability to perform the following using DataWedge intent APIs:
 * Select decoders
 * Create a profile
 * Register for scanner status notifications
 * Receive barcode data
 * Use a software scan trigger
* [MultiActivity](../samples/multiactivity1) - demonstrates how to scan across multiple activities using different profiles based on the app activity in the foreground
* [Profile Switch](../samples/profileswitch1) - demonstrates how to switch profiles dynamically based on the text field in focus within the app
* [Signature capture app](../samples/signaturecapture) – uses [Decoder Signature](../input/barcode/#decodersignature) to capture an area within a document, such as a signature, enclosed by a specific pattern and save this to an image

-------
-->

Related information:

- [DataWedge Profiles](../profiles) - links and details for all DataWedge Plug-ins
- [DataWedge Profile Architecture](../overview) – explains how DataWedge uses Profiles and Plug-ins
- [Create a DataWedge Profile](../createprofile)
- [Using DataWedge APIs](../api/overview) - explains how to use DataWedge intent APIs
- [Using Intents](../output/intent) - a brief primer on intents and how to configure DataWedge
- [DataWedge APIs](../api) - lists and describes the DataWedge intent APIs
