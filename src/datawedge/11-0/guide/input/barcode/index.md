---
title: Barcode Input
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## Overview

Barcode Input options within the DataWedge profile specify the device hardware to use for scanning and the decoders to be applied on the acquired data before sending it for processing. Decoders supported by DataWedge are explained below, including commonly used decoders: Code39, Code128, Datamatrix, DotCode, EAN13, OCR A, OCR B, PDF417, QRCode, UPCA, and UPCE. **DataWedge also provides audio and other feedback to alert the user of scanning results and barcode type. See the [Scanner Parameters](#scanparams) section for more information**.

Barcode Input is used to specify:

- Device cameras
- 1D and 2D and imagers
- Laser-based barcode scanners
- Bluetooth-connected scanners
- USB synchronous serial interface (SSI) scanners

**Barcode Scanner Input** reads data from the integrated barcode scanner built into the device, or attached via cable or Bluetooth connection, or implemented as a snap-on module. DataWedge supports lasers, imagers and internal cameras. The raw barcode data that's acquired is processed or formatted as using the Basic and Advanced Data Formatting Processing options that are found near the Output options.

> The parameters of this feature can be configured using the [Set Config API](../../api/setconfig).

---

## Scanner Selection

In Barcode Input, the **Scanner selection** panel determines which scanning device to use for data capture. The list of available scanners is based on devices present in (or connected to) the unit being configured.

<table>
 <tr>
  <td>
  <img style="height:350px" src="barcode_input.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
  <img style="height:350px" src="scanner_selection.png"/>
  </td>
 </tr>
</table>
<i>Scanner Selection</i>

"Auto" is the default scanner selection, automatically determining the best scanning device from the list of available devices based on the following **Auto Scanner Selection Rules**:

- If a Zebra Scan Module or Scan/MSR Module is installed, the 2D imager is selected.
- If no Scan Module is installed, the camera is selected.
- When the camera is selected, scanning is performed with the rear-facing camera.
- When 2D Imager is selected, scanning is performed using the installed Scan or Scan/MSR module.

**Multiple scanner support** provides the capability to use more than one scanner interchangeably in the same DataWedge profile without the need for manual configuration, such as when an internal scanner and an external Bluetooth scanner is required. Additionally, each scanner can be individually configured within the same profile. To add a scanner, in the **Scanner Selection** screen tap the top right menu and select **Add new scanner.** A list of available scanners is displayed.

<table>
 <tr>
  <td>
    <img style="height:350px" src="scanner_selection_menu.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
    <img style="height:350px" src="add_scanner.png"/>
  </td>
 </tr>
</table>
<i>Add new scanner</i>

Select the scanner to add from the list. The selected scanner is then added to the **Scanner Selection** list.
<img style="height:350px" src="scanner_selected.png"/>
<i>Selected scanner listed</i>

If **Scanner selection** is set to **Auto**, all scanners are removed from the list.

Long pressing on the scanner category in the **Scanner Selection** screen displays a menu with options to **Configure triggers** or **Delete.** Tap on **Configure Triggers** to display a list of triggers to configure; the options vary depending on the device in use.

<table>
 <tr>
  <td>
    <img style="height:350px" src="scanner_category_menu.jpg"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
    <img style="height:350px" src="select_trigger.jpg"/>
  </td>
 </tr>
</table>
<i>Add new scanner</i>

If an external scanner and an internal scanner is selected (regardless of the order added), the internal scanner is given all the triggers by default. The user needs to select the triggers for the external scanner as required. Once a trigger or multiple triggers are assigned to the external scanner, those triggers are removed from the internal scanner. If an external scanner is removed from the scanner selection, the internal scanner is given all the triggers again. If an attempt is made to assign a trigger that is already assigned to a different scanner category, the following message is displayed:

<img style="height:350px" src="configure_triggers_warning.jpg"/>
<i>Configure trigger warning</i>

**Note:** Use of multiple scanners with multiple Android user accounts may result to unexpected behavior.

---

### Bluetooth Scanners

DataWedge supports the following Zebra Bluetooth scanners:

- **RS507** Cordless Ring Scanner
- **RS6000** Ring Scanner
- **DS3678** Ultra-Rugged Scanner
- **LI3678** Ultra-Rugged Laser Scanner
- **DS2278** Bluetooth Scanner
- **DS8178** Bluetooth Scanner

Bluetooth scanners are supported according to the following rules:

- **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
- **After initial configuration**, a Bluetooth scanner can be enabled and disabled in the Profile, even if it is disconnected from the device. However, to configure decoders, reader parameters and other scanner settings, a Bluetooth scanner must be connected.
- **DataWedge does not automatically reconnect** to a Bluetooth scanner if that scanner is connected while DataWedge is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the "Auto" selection option.
- **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and an RS507 was enabled prior to a battery swap, DataWedge continues working with that RS507 scanner upon reconnection after a battery is swapped. If the RS507 does not reconnect after the swap, DataWedge reverts to the current default scanner.
- **Keep Enabled on Suspend -** This mode is supported on Bluetooth and pluggable scanners, and might result in faster battery drain than would otherwise be expected while in suspend mode. **Note: The Zebra computing device wakes from suspend mode when pressing the scan trigger of any supported scanner**.

### USB SSI Scanners

DataWedge supports the following Zebra USB SSI scanners:

- **DS3608** USB SSI Scanner
- **LI3608** Ultra-Rugged USB SSI Laser Scanner
- **RS4000** USB SSI Ring Scanner
- **RS5000** USB SSI Ring Scanner

**Support notes**:

- The DS3608 and LI3608 scanners are supported only on VC80 devices running Android
- Scanner must be configured using Symbol Native API (SNAPI) with Imager Interface
- SNAPI drivers are included with supported devices
- The scanner connects via USB port and cable

> **Important**: Support for decode parameters can vary depending on the scanning device selected. For device-specific support notes, please refer to the [Integrator Guide](https://www.zebra.com/us/en/sitesearch.html?q=integrator) that accompanied the unit.

---

## Hardware Trigger

This feature configures DataWedge to enable/disable use of the device hardware trigger for barcode input. The hardware trigger is enabled by default. If disabled, the scan beam does not appear when pressing the hardware trigger. However, the scan beam can still be activated by using the [Soft Scan Trigger](../../api/softscantrigger) DataWedge API intent. This feature allows application programmers to enforce the use of app-specific features when scanning barcodes and documents within their app.

<img style="height:350px" src="hardware_trigger.png"/>
<br>
Note: When the hardware trigger is disabled, it cannot be used to trigger the scan beam. If scanning is initiated by the soft scan trigger API intent, a hardware trigger press cancels the beam.

---

## Auto Switch to Default on Event

This feature configures DataWedge to select an external scanner as the default scanning device immediately upon connection and revert to a built-in scanner when the external scanner is disconnected. External scanners include those connecting by Bluetooth, serial cable or snap-on module. If enabled, SWITCH_SCANNER should not be used upon scanner connection/disconnection as it can cause unexpected behavior. **Disabled by default**. Available only when “Auto" is selected in the [Scanner selection panel](#scannerselection).

This feature is intended to help reduce scanning workflow interruptions when a Bluetooth scanner is introduced and/or it becomes disconnected by losing power or moving out of range.

For Bluetooth scanners, if the device was not previously paired, a pairing barcode is displayed prior to automatic connection.

<img style="height:350px" src="auto_switch_to_default_on_event.png"/>
*"Auto switch to default on event" is available only when "Auto" is selected*. 
<br>

**Available Options**:

- **Disabled -** No scanner switching occurs when an external scanner is connected or disconnected (default).
- **On connect -** Selects the external scanner as the default scanning device immediately upon connection.
- **On disconnect -** Reverts to a built-in scanner based on its position in an internally managed scanner list (which varies by host device). This is usually the scanner most recently used prior to the external connection (see notes below).
- **On connect/disconnect -** Selects an external scanner as the default scanning device immediately upon connection. Upon disconnection, reverts to the scanner set as the default prior to the external connection.

<!-- 5/30/18 replaced passage below with that above, per eng (TW).
* **On connect/disconnect -** Selects a Bluetooth scanner as the default scanning device immediately upon connection; reverts to a built-in scanner based on its position in an internally managed scanner list (which varies by host device). This is usually the scanner most recently used prior to the external connection (see notes below).
-->

**Notes**:

- The system selects the default scanner based on the connection state and the scanner's position in an internally managed scanner list. If the newly connected scanner is lower in the scanner list than the one currently selected as the default scanner, the newly connected scanner becomes the default scanner.
- On devices with only one built-in scanner or imager, "On disconnect" reverts to that built-in scanner or imager.

---

## Configure Scanner Settings

**Configure scanner settings** option is accessible through the DataWedge profile settings. It configures the scanner parameters specifying how the barcode is scanned, including the selected scanner (e.g. camera, 2D Imager, Bluetooth scanner, etc.), decoder, decoder parameters, reader params and scan params. Refer to the corresponding sections below on each option for further information.
<br>

<img style="height:350px" src="configure_scanner_settings.png"/>
_Profile settings_

Tap **Configure scanner settings**. A list of scanner configuration settings appears.

<img style="height:350px" src="scanner_configuration.png"/>
_Scanner configuration_

**Note:** The **Configure scanner settings** option is still accessible even when the selected scanner in **Scanner Selection** is disconnected. _In previous DataWedge versions prior to 6.8, all the scanner parameters (decoders, decoder params, etc.) are grayed-out and inaccessible._

### Scanning Modes

**Scanning Modes** is used to select the mode to scan barcodes:

- **Single -** normal mode to scan an individual barcode
- **UDI -** scan Unique Device Identification (UDI) barcodes such as GS1, HIBCC and ICCBBA
- **Disabled –** when a scanning mode, such as MultiBarcode or Document Capture, is selected in the **NG SimulScan Configuration** screen, scanning mode in this section is automatically disabled, preventing any other selection.

**Scanning Modes** exists within both **Scanner Configuration** and **NG SimulScan Configuration** sections. The availability of **Scanning Modes** options is interdependent on the option selected within each section:

- If **Single** or **UDI** is selected as the **Scanning Mode** within **Scanner Configuration,** then **Scanning Modes** is disabled within **NG SimulScan Configuration.**
- If **Document Capture** or **MultiBarcode** is selected for **Scanning Modes** within **NG SimulScan Configuration,** then **Scanning Modes** is disabled within **Scanner Configuration.**

<table>

 <tr>
  <td>
  <img style="height:350px" src="scanner_config_scanning_modes.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
  <img style="height:350px" src="scanning_modes_sc.png"/>
  </td>
 </tr>

</table>
<i>Scanner Configuration - Scanning Modes</i>

---

## NextGen SimulScan Configuration

**NextGen (NG) SimulScan Configuration** is configuration transferred from legacy SimulScan Input of DataWedge previously deprecated. NG SimulScan is a data capture solution for retrieving data from documents, forms, and labels by scanning barcodes or capturing partial or entire documents as images. Not all legacy SimulScan features are available - migration of these features into NextGen SimulScan is a continuous effort. Currently, the following features are part of NextGen SimulScan:

- **[MultiBarcode](#multibarcodeparams) -** acquires multiple, unique barcodes from a form in a single scan session and delivers the data either immediately or after the specified number of barcodes per scan is reached. Supported since DataWedge 8.0. _Unlike legacy SimulScan, a template is not required for this MultiBarcode feature, as opposed to the MultiBarcode subfeature that is part of Document Capture that does require a template._
- **[Document Capture](#documentselectiondocumentcapture) -** retrieves data from documents, forms, and labels by scanning barcodes or capturing partial or entire documents as images. Supported since DataWedge 8.0 and only available on select devices and scanners, see [Feature Matrix](../../matrix). _Document Capture, which includes MultiBarcode as a subfeature, requires a **NextGen SimulScan template**, also known as a **Document Capture template**._

<!-- [NextGen SimulScan template](../../templatebuilder), also known as [Document Capture template](../../templatebuilder)._-->

> <span style="color:red">Contact your local Zebra sales representative for assistance to create a Document Capture/NextGen SimulScan template.</span>

<p>For <a href="/licensing/about/#zebraprofessionalseriesdevices">Zebra Professional Series devices</a>, such as TC21 and TC26, NextGen SimulScan requires a <a href="/licensing">Mobility DNA Enterprise license</a>. The following message is displayed when attempting to access this feature on a device without a valid license:</p>
<img style="height:350px" src="license_required.png"/>
_License required on Zebra Professional devices_

See DataWedge [Licensing](../../licensing) for more information.

To access NextGen SimulScan Configurations:<br>

1. In the DataWedge profile, tap **Configure NG SimulScan settings**.
   <img style="height:350px" src="configure_ng_simulscan.png"/>
   _DataWedge profile displaying NG SimulScan_

2. The **NG SimulScan configuration** screen appears with options similar to **Configure scanner settings**.
   <img style="height:350px" src="ng_simulscan_configuration.png"/>
   _NextGen (NG) SimulScan configuration_

Aside from **[Scanning Modes](#scanningmodes)**, **[Document Selection](#documentselectiondocumentcapture)** and **[MultiBarcode Params](#multibarcodeparams)**, all other options are common to those displayed under **Configure scanner settings**. Refer to the corresponding sections below on each NG SimulScan Configuration option for further information.

### Scanning Modes

**Scanning Modes** selects the mode to scan barcodes:

- **[MultiBarcode](#multibarcodeparams) -** multiple barcodes read in a single scan. A template is not required.<br>
- <b><a href="#documentselectiondocumentcapture">Document Capture</a> -</b> capture fields within a document or capture the entire document as an image based on a specified template. Support for this feature depends on the hardware and operating system version. Refer to the [Feature Matrix](../../matrix) table for more information. <span style="color:red">Contact your local Zebra sales representative for assistance to create a Document Capture/NextGen SimulScan template.</span>
- **Disabled –** when a scanning mode, such as **Single** or **UDI,** is selected in the **Scanner Configuration** section, scanning mode is automatically disabled in **NG SimulScan Configuration,** preventing any other selection.

**Scanning Modes** exists within both **Scanner Configuration** and **NG SimulScan Configuration** sections. The availability of **Scanning Modes** options is interdependent on the option selected within each section:

- If **Single** or **UDI** is selected as the **Scanning Mode** within **Scanner Configuration,** then **Scanning Modes** is disabled within **NG SimulScan Configuration.**
- If **Document Capture** or **MultiBarcode** is selected for **Scanning Modes** within **NG SimulScan Configuration,** then **Scanning Modes** is disabled within **Scanner Configuration.**

<table>
 <tr>
  <td>
    <img style="height:350px" src="ng_simulscan_scanning_modes.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
    <img style="height:350px" src="scanning_modes_ngss_8.1.45.png"/>
  </td>
 </tr>

</table>
<i>NextGen (NG) SimulScan - Scanning Modes</i>

### Document Selection / Document Capture

**Document Selection** specifies the template to use for Document Capture to retrieve data from documents, forms, and labels by scanning barcodes or capturing partial or entire documents as images. A Document Capture/NextGen SimulScan Template is required to process the acquired data so it can be consumed by an application. **Document Capture** must be selected as the **[Scanning Mode](#scanningmodes-1).** There are 2 types of Document Capture templates:

- **Image Capture -** acquires mixed types of data at once (barcodes, text, images, etc.) when the document to be scanned has a fixed layout - the location and type of data in each field remain consistent whenever the form is used, and only the data changes with each new instance of the form.
- **MultiBarcode -** acquires data from forms that contain barcodes. This applies to cases where multiple barcodes are required to be captured simultaneously, or specific barcode(s) need to be read from a multitude of barcodes.

> <span style="color:red">Contact your local Zebra sales representative for assistance to create a Document Capture/NextGen SimulScan template.</span>

See [Document Capture Programmer's Guide](../../programmers-guides/ng-simulscan) for instructions on how to retrive data from a form using Document Capture.

<!--
See [Template Builder](../../templatebuilder) for instructions on how to create a Document Capture/NextGen SimulScan Template. After creating the Template, copy it to the device. -->

To select the Document Capture/NextGen SimulScan Template, in the **NG SimulScan configuration** screen tap on **Document Selection** and select a template for the document to be captured (see screen capture below). This selection is populated after [importing the template](../../admin/#importnextgensimulscantemplates). With **Document Capture**, it is _required to **[Use content providers](../../programmers-guides/content-provider/)**_ to retrieve scanned data. <!-- To add a template to the Document Selection using DataWedge Manager CSP for ease of deployment, refer to **[Import NextGen SimulScan Templates](../../admin)** and **[NG SimulScan template](/mx/datawedgemgr)**. -->

<img style="height:350px" src="document_selection.png"/>

_Document Capture template selection_

<br>
<!-- 
Video on how to deploy a Document Capture/NextGen SimulScan template to a device using StageNow: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/yrtEHadshGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
-->

<h4>The following subsections highlight a few different types of Document Capture Template<!--<a href="../../templatebuilder">Document Capture Template</a>--> options based on the defined template:</h4>
<br>

#### A) Anchor Barcode

Document Capture with Anchor Barcode captures fields within a document as images, such as an address or signature, based on the barcode in the NextGen SimulScan Template<!--[NextGen SimulScan Template](../../templatebuilder)--> that determines the position of the fields being captured. Applies to Image Capture<!--[Image Capture](../../templatebuilder/#imagecapture)--> template type. Once properly configured, scan the anchor barcode to capture the specific area as image. Different fields in the document can be captured in separate images. This is useful in situations such as delivery operations, to capture the address and signature in delivery forms as separate images for proof of delivery. <br>

Video demonstration of document capture with anchor barcode:

<iframe width="560" height="315" src="https://www.youtube.com/embed/MnsS16CnbCY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
<br>

#### B) Whole Document

Whole Document Capture acquires the entire document, or form, as an image based on the surrounding borders of the content defined in the NextGen SimulScan Template<!-- [NextGen SimulScan Template](../../templatebuilder)-->. Applies to Image Capture<!--[Image Capture](../../templatebuilder/#imagecapture)--> template type. The entire document can be captured with or without scanning a barcode. The document must have black borders surrounding all four sides or be bordered by a contrasting background, otherwise the document cannot be captured.

<!--
After the NextGen SimulScan template is imported for Document Capture, the **Document Selection** is populated with the imported template name. Based on the template request, the template is customized with one of the following options:

* Mandatory barcode template - for forms that have at least one barcode
* Optional barcode template - for forms that may or may not have a barcode
  <br>
-->
  <!--
  Two templates are available by default (if supported by the underlying scanner framework): “WholePage-MandatoryBarcode” and “WholePage-OptionalBarcode”. The mandatory barcode template is used for forms that have at least one barcode. The optional barcode template is used for forms that may or may not have a barcode.
  <img style="height:350px" src="wholepage-templates.png"/>
  _Document Capture whole page templates_
  -->

Video demonstration of whole document capture:

<iframe width="560" height="315" src="https://www.youtube.com/embed/DI8pxsTJdtI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
<br>

#### C) Signature Presence Detection

Detect the presence of a handwritten signature when scanning a document with Document Capture. This feature is useful particularly for delivery or courier services to automatically check if a signature is missing, rather than manually performing the check. The NextGen SimulScan Template<!--[NextGen SimulScan Template](../../templatebuilder)--> is required to designate the region on the form used to identify the location of the signature to detect its presence. Applies to Image Capture<!--[Image Capture](../../templatebuilder/#imagecapture)--> template type. Signature presence detection is controlled through the Content Provider. See [Content Provider programmer's guide](../../programmers-guides/content-provider/#parameters) for more information.<br>

Video demonstration of signature presence detection:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4vS5Y2q9Vkg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>

#### D) Read Specific Barcode

Read Specific Barcode decodes a particular barcode among a multitude of barcodes based on specific criteria defined in a NextGen SimulScan Template<!--[NextGen SimulScan Template](../../templatebuilder)-->. Applies to MultiBarcode<!--[MultiBarcode](../../templatebuilder/#multibarcode)--> (as part of Document Capture) template type. The criteria to capture the barcode is defined in the NextGen SimulScan Template.<!--[NextGen SimulScan Template](../../templatebuilder).--> <!--See [Template Builder](../../templatebuilder) for more information and instructions on how to create the template. -->The criteria to read specific barcodes is based on the following options selected during template creation. Any combination of these options can be used. If more than one barcode is present that matches the given criteria, then the option **Auto Group Identification**, described in the following section, can be used instead.

- **Barcode Type –** Specifies the barcode type or decoder as defined in the template.
- **Character Checking (Begins with) –** Specifies the specific character the barcode must begin with in order to decode, as defined in the template. Some common specifications:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○&nbsp;&nbsp;&nbsp;**N -** (e.g.: NXXXXXX) for advice note number<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○&nbsp;&nbsp;&nbsp;**P –** (e.g.: PXXXXXX) for part number<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○&nbsp;&nbsp;&nbsp;**Q –** (e.g.: QXXXXXX) for quantity<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○&nbsp;&nbsp;&nbsp;**V –** (e.g.: VXXXXXX) for vendor ID<br>
- **Character Checking (Contains characters at a given location in the string) –** Specifies the character(s) at a given position in the decoded string which the barcode must contain, as defined in the template.
- **Barcode Data Length –** Specifies the length of the barcode string to decode, as defined in the template.
- **Multiple Character Checking (Begins with) –** Specifies the acceptable characters for the barcode string to begin with, as specified in the template. For example, if “A” and “B” is specified, then only barcodes that begin with “A” or “B” are decoded.
- **Variable Field Presence (Mandatory + Optional Barcode) –** applies to forms that contain a combination of mandatory and optional barcodes to decode, as specified in the template. If the mandatory barcode is not present, then the decode does not take place. If the mandatory barcode is present with an optional barcode, then both are decoded. If the mandatory barcode is present without an optional barcode, then the mandatory barcode is decoded.
  <br><br>

#### E) Auto Group Identification

**Auto Group Identification** decodes barcodes from a document that share a common pattern, designating them into a unique group based on the criteria defined in the NextGen SimulScan Template<!--[NextGen SimulScan Template](../../templatebuilder)-->. Applies to MultiBarcode<!--[MultiBarcode](../../templatebuilder/#multibarcode)--> (as part of Document Capture) template type. All of the following criteria must be met for this group of barcodes in order to decode:

- Same barcode symbology
- Same first 1-2 Characters of the barcode data
- Same barcode data length

When using this option, the quantity of barcodes must be specified by using **_one_** of the following methods:

- **Barcode –** Based on the template, a separate barcode is present on the form or label specifying the quantity of barcodes to scan for each decode session. The decoded data from the Quantity barcode must meet at least one of the following criteria:<br>
  - Starts with "Q" or "q"
  - Length is 3 digits or less
- **User/System Defined -** Set the quantity of barcodes (value range: 1 to 100; default value: 5) to scan based on:
  - **DataWedge UI -** use option **Group of common barcodes dynamic quantity** under **Template params** from **NG SimulScan configuration**, as shown below.
  - **DataWedge intent API -** use [SetConfig](../../api/setconfig/#nextgensimulscanparameters) to set `common_barcode_dynamic_quantity` to the desired quantity.

<table>
 <tr>
  <td>
  <img style="height:350px" src="NGSS_config.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
  <img style="height:350px" src="template_params.png"/>
  </td>
 </tr>
</table>
<i>Set barcode quantity for Auto Group Identification</i>

Video demonstration of Specify Barcode Criteria and Automatic Group Identification features:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Kr8h-Cke6k?rel=0&amp;modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

<br>

### MultiBarcode Params

**MultiBarcode** (separate from MultiBarcode under Document Capture) acquires multiple, unique barcodes from a form in a single scan session and delivers the data either immediately or after the specified number of barcodes per scan is reached. A template is not required. In DataWedge 8.1 and earlier, this section is displayed as **Basic MultiBarcode params**.

<table>

 <tr>
  <td>
  <img style="height:350px" src="multibarcode.png"/>
  </td>
  <td> &nbsp; &nbsp; &nbsp; &nbsp;
  </td>
  <td>
  <img style="height:350px" src="multibarcode_params.png"/>
  </td>
 </tr>

</table>
<i>MultiBarcode params</i>

MultiBarcode params options:

- **Instant Reporting -** Enable/Disable instantaneous reporting of unique barcodes within a scanning session (duplicates are ignored). If enabled, it ignores the value of **Number of barcodes per scan** and immediately reports the scanned data. If disabled _(default)_, the decoded data is returned as a single entity after reaching the specified **Number of barcodes per scan**.
- **Number of barcodes per scan-** Specify the number of unique barcodes to be decoded with each scan session before sending the scanned data. This setting does not take effect if **Instant Reporting** is enabled. For example, if 5 is specified, the scanner does not send the data until 5 barcodes are scanned. _Default value: 5; value range: 2 to 100._
- **Report Decoded Barcodes -** Enable/Disable reporting of decoded barcode data in a single scan session irrespective of the specified **Number of barcodes per scan**. Consider the following behavior when **Report Decoded Barcodes** is enabled:
  - If **Continuous Read** is also enabled, it does not work.
  - If **Instant Reporting** is also enabled, **Instant Reporting** takes higher priority.

**MultiBarcode Notes:**

- **Acquired data from all barcodes is delivered as a single string** when output as keystrokes. To add separators and adjust output order, see the [Keystroke Output guide](../../output/keystroke/#multibarcodedataoutput).
- MultiBarcode supports a **maximum data size of 64 KB.**
- **Picklist behavior -** If the Picklist parameter is set to “Disabled,” the device will attempt to scan the number of barcodes specified in the MultiBarcode params screen. If the Picklist parameter is set to a value other than “Disabled," the user is expected to move the cross-hair to each barcode to be scanned. **Data is returned only after the specified number of barcodes is read**.
- **Duplicate barcodes -** If a label to be scanned contains multiple barcodes, some of which are duplicates (with the same label type and data), only one barcode from the duplicates is decoded; the remainder are ignored. If the label has two duplicate barcodes plus another two different barcodes, a maximum of three barcodes will be decoded from that form; one will be ignored as a duplicate.
- **Multiple barcode types -** Barcodes can be of multiple label types and still be acquired together. For example, if the specified quantity for a Multi-barcode scan is four, two barcodes can be label type Code 128 and the other two can be type Code 39.
- **Barcodes in view -**If the specified number of barcodes is not initially in view of the scanner, the scanner will not decode any data. If the scanner's field of view contains a number of barcodes greater than the specified quantity, the scanner will randomly decode barcode(s) until the specified number is reached. For example, if the count is set to two and eight barcodes are in the field of view, the scanner will decode the first two barcodes it sees, returning the data in random order. **Data is returned only after the specified number of barcodes is read**.
- **If both Continuous Read and Instant Reporting parameters are enabled, Instant Reporting** takes precedence over **Continuous Read,** which is ignored.

---

## Global Scanner Configuration

Global scanner configuration (All Scanners) allows users to specify a generic scanner configuration applicable for all supported scanners. Rather than specifying multiple individual configurations for each separate scanner within a given DataWedge profile, the global configuration setting is provided to configure multiple scanners in a single profile.

Global scanner configuration (All Scanners) displays all scanner parameters and values for each and every scanner even if not supported by a specific scanner. Since this list is all-inclusive, there is a possibility a particular parameter or value may not be supported on an individual scanner. In this case, an error is logged in logcat during scanning.

When global scanner configuration (All Scanners) is enabled, access is still available to settings specific to individual scanners, such as the option “Keep enabled on suspend” (which specifically applies to Bluetooth and other peripheral scanners), even if the default scanner is selected as an internal scanner for “Scanner Selection” (_See Figure 1_). When applying configurations, if any of the global settings are not applicable to the specific scanner, those settings cannot apply and will be disregarded.

When a global setting is configured and then an individual scanner is configured, both configuration options are saved. The configurations will be applied in the following order:

1. The global configuration is applied.
2. The specific scanner configuration is applied.

If reports are generated when the global scanner configuration is set, the values supported by the connected device will be returned.

### Configuration

Open a profile in DataWedge. The "Barcode input" section contains the option "Configure scanner settings".
<br>
**Note:** The “Configure scanner settings” option is still accessible even when the selected scanner in “Scanner Selection” is disconnected. _In previous DataWedge versions prior to 6.8, all the scanner parameters (decoders, decoder params, etc.) are grayed-out and inaccessible._

<img style="height:350px" src="configure_scanner_settings.png"/>
_Profile settings_

Tap "Configure scanner settings". A list of scanner configuration settings appears.

<img style="height:350px" src="configure_scanner_settings_options.png"/>
_Scanner configuration_

Tap "Select scanner to set parameters". **All Scanners** option is available to enable global scanner configuration, allowing the scanner settings to apply to all scanners.

<img style="height:350px" src="select_scanner.png"/>
_Global scanner configuration_

Select **All Scanners**. A confirmation message appears indicating that any setting changes moving forward will be applicable to all scanners as a common global configuration. **Any existing individual scanner setting will be replaced by this global setting.** The scanner does not need to be connected to the device in order to configure the settings in the global scanner configuration.

###Using Intents

Set the global scanner configuration by setting the value of parameter `configure_all_scanners` to "true" via [SET_CONFIG](../../api/setconfig) intent API.

---

## Decoder Selection

Many input methods include parameters that are configurable according to the expected scan targets and/or preferences of an organization. Enabling a narrow selection of decoders can help increase security, reduce decode errors and improve scan performance. **For example, a company that routinely receives packages encoded with Code 128 symbology might consider limiting the Code 128 decoders it implements to those of the non-EAN variety**.

Parameters for individual Decoders are modified within a Profile. Each DataWedge Profile can be assigned a unique group of Decoders and Decoder parameters (where applicable) to use with its associated application(s). This guide covers the selection of Decoders and provides details for those with configurable parameters.

**See [Decoders](../../decoders) for supported decoders and decoder parameters.**

### Default Decoders

DataWedge decodes all major barcode symbologies. Popular formats are enabled by default in all DataWedge Profiles (indicated by an \*). **To improve scanning performance, Zebra recommends disabling all Decoders not required by the app(s) associated with a given Profile**.

**Note**:

- Decoders lacking configurable parameters do not appear in the [Decoder Parameters section](#decoderparameters). Others are linked to their corresponding parameter descriptions.
- Only "Australian Postal" or "Canadian Postal" should be selected as a decoder, not both. If both are simultaneously selected as decoders, only "Canadian Postal" barcodes are decoded.
  <br>

---

<div class="table-striped">
<table rules="none"
width="100%"
frame="void"
cellspacing="0" cellpadding="4">

<col width="33%" />
<col width="33%" />
<col width="33%" />
<tbody>
<tr>
<td align="left" valign="top"><p class="table">Australian Postal</p></td>
<td align="left" valign="top"><p class="table">Aztec<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Canadian Postal</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Chinese 2of5</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#codabar">Codabar</a><sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#code11">Code 11</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Code 32<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#code39">Code 39</a><sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#code93">Code 93</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#code128">Code 128</a><sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#compositeab">Composite AB</a><sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#compositec">Composite C</a><sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Datamatrix<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#decodersignature">Decoder Signature</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#discrete2of5">Discrete 2of5</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#dotcode">DotCode</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#dutchpostal">Dutch Postal</a></p></td>
<td align="left" valign="top"><p class="table">EAN-8</a><sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">EAN-13<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Finnish Postal 4S</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#gridmatrix">Grid Matrix</a></p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Limited</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Expanded</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#gs1datamatrix">GS1 Datamatrix</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#gs1qrcode">GS1 QR Code</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#hanxin">HAN XIN</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#interleaved2of5">Interleaved 2 of 5</a></p></td>
<td align="left" valign="top"><p class="table">Japanese Postal</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#korean3of5">Korean 3of5</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MacroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MAILMARK</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#matrix2of5">Matrix 2of5</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Maxicode<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MICR E13B</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#micropdf">MicroPDF</a><sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MicroQR</p></td>
<td align="left" valign="top"><p class="table">MacroMicroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#msi">MSI</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#ocra">OCR A</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#ocrb">OCR B</a></p></td>
<td align="left" valign="top"><p class="table">PDF417<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">QR Code<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">TLC 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#trioptic39">Trioptic 39</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US Currency</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#uspostnet">USPostnet</a></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#usplanet">US Planet</a></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US Postal</p></td>
<td align="left" valign="top"><p class="table">UPC-A<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#upce0">UPC-E0</a><sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US4state FICS</p></td>
<td align="left" valign="top"><p class="table"><a href="../../decoders/#upce1">UPC E1</a></p></td>
<td align="left" valign="top"><p class="table">US4state</p></td>
</tr>
</tbody>
</table>
</div>
&#42; _Enabled by default_

**Note**: Hyperlinked decoders indicate (and link to) configurable parameters.

---

### Enable/Disable Decoders

**To enable or disable Decoders**:

&#49;. **From the Profile being edited, tap Configure scanner settings then tap Decoders** as highlighted below.<br>
A list of Decoders appears similar to the image in Step 2.  
<img style="height:350px" src="select_decoders.png"/>
<br>

&#50;. **Select/deselect the desired Decoders** by checking/unchecking the corresponding checkbox.<br>
**Note**: Reducing nonessential Decoders can improve scanning performance.
<img style="height:350px" src="decoder_selection.png"/>
<br>

### Edit Decoder Parameters

**To edit Decoder parameters**:

&#49;. **From the Profile being edited, tap Decoders.**<br>
A list of Decoders appears similar to the image in Step 2, below.
<img style="height:350px" src="decoders-selection.png"/>
<br>

&#50;. **From the Decoder list, tap a decoder to edit its parameters.** <br>
If a decoder has no parameters, a checkbox is displayed to enable/disable the decoder.
<img style="height:350px" src="decoders.png"/>
<br>

---

## Decoder Parameters

Editable parameters of individual Decoders are explained below. **Note: Decoders lacking configurable parameters do not appear in the Decoder Parameters section below**. For further instructions about creating and editing DataWedge Profiles, see "[Manage Profiles](../../createprofile)" guide.

**See [Decoders](../../decoders) for supported decoders and decoder parameters.**

### Reduced Quiet Zone

The quiet zone is the blank space on either side of a bar code that indicates where the symbology begins and ends, and is intended to prevent the reader from scanning irrelevant information. When marginless decoders are used with Reduced Quiet Zone Level reader parameters, the decoders behave according to the following table:
<img style="height:350px" src="Marginless_C128_param_table.png"/>
_**Descriptions of the 1D Quiet Zone Levels** shown above are in the [Reader Params](#readerparams) section along with important warnings_.
<br>

---

## UPC/EAN Params

The UPC/EAN Parameter allows configuration of parameters that apply to more than one UPC or EAN decoder.

<img style="height:350px" src="upc_params.png"/>
<br>

**Convert DataBar to UPC EAN -** If enabled, converts DataBar barcodes to UPC/EAN/JAN format. For this setting to work UPC/EAN/JAN symbologies must be enabled. This parameter only applies to GS1 DataBar Omnidirectional and GS1 DataBar Limited barcodes not decoded as part of a Composite barcode. It strips the leading '010' from DataBar-14 and DataBar Limited barcodes encoding a single zero as the first digit, and it reports the barcode as EAN-13. For barcodes that begin between two and five zeros, it strips the leading '0100' and reports the barcode as UPC-A. The UPC-A Preamble option that transmits the system character and country code applies to converted barcodes. Note that neither the system character nor the check digit can be stripped.

**UPC Reduced Quiet Zone -** Enable/Disable decoding UPC barcodes with reduced quiet zones, the area in front of and at the end of a barcode. Enabling this option increases the aggressiveness in decoding barcodes, resulting to increased decoding time and risk of misdecodes.

**Bookland -** When enabled, select a Bookland Format from the list below.

**Bookland Format -** When Bookland is enabled, it allows the the following selections for Bookland data:

- **Format ISBN-10 -** The scanner reports Bookland data starting with 978 in traditional 10-digit format with the special Bookland check digit for backward-compatibility. Data starting with 979 is not considered Bookland in this mode.

- **Format ISBN-13 -** The scanner reports Bookland data (starting with either 978 or 979) as EAN-13 in 13-digit format to meet the 2007 ISBN-13 protocol.

**Coupon -** Enable/Disable Coupon code decoding. UPC-A, EAN-13, and GS1-128 must be enabled to use this feature. When enabled, UPC-A barcodes starting with digit ‘5’, EAN-13 barcodes starting with digit ‘99’, and UPC-A/GS1-128 coupon codes are decoded.

**Coupon Report Mode -** Traditional coupon symbols are composed of two barcodes: UPC/EAN/JAN and Code 128. A new coupon symbol is composed of a single Data Expanded barcode. The new format offers more options for purchase values (up to $999.999) and supports complex discount offers as a second purchase requirement. An interim coupon symbol also exists that contain both types of barcodes: UPC/EAN/JAN and Databar Expanded. This format accommodates both retailers that do not recognize or use the additional information included in the new coupon symbol, as well as those who can process new coupon symbols.

- **Old Coupon Report Mode -** Reports both UPC-A/Code-128 and EAN-13/Code-128.
- **New Coupon Report Mode -** Scanning an interim format reports UPC-A/GS1-DataBar and EAN-13/GS1-DataBar.
- **Both Coupon Report Modes -** Reports both Old Coupon Format and New Coupon Format.

**EAN Zero Extend -** If enabled, adds five leading zeros to decoded EAN-8 barcodes to make them compatible in length to EAN-13 barcodes.

**Linear Decode -** Enables the linear decode property.

**Retry Count -** Retry count for auto-discriminating UPC/EAN/JAN supplementals, adjusting the number of times to decode a barcode without supplementals before transmission. The value range is 2 to 20; default value is 10. Zebra recommends a value of 5 or above when decoding a mix of UPC/EAN/JAN barcodes with and without supplementals. Supplemental Mode must be set to one of the following: Supplementals Auto, Supplementals Smart, Supplementals 378-379, Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20).

**Security Level -** The scanner offers four levels of decode security for UPC/EAN/JAN barcodes. As the quality of barcodes decreases, implementing an increased level of security will compensate and help improve decoding success. There is an inverse relationship between scanner aggressiveness and security. Zebra recommends choosing carefully the level of security necessary for any given application:

- **Level 0 -** This setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN/JAN barcodes.

- **Level 1 -** As barcode quality levels diminish, certain characters become prone to decode failures before others (i.e., 1, 2, 7, 8). If the scanner is decode failures poorly printed barcodes, and the decode failures are limited to these characters, select this security level.

- **Level 2 -** If the scanner fails to decode poorly printed barcodes, and the decode failures are not limited to characters 1, 2, 7, and 8, select this security level.

- **Level 3 -** If the scanner is still fails to decode, select this security level. Be advised, selecting this option is an extreme measure against decode failures for severely out-of-spec barcodes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is required, try to improve the quality of the barcodes.

**Supplemental2 -** Enable/disable length 2 supplementals.

**Supplemental5 -** Enable/disable length 5 supplementals.

**Supplemental Mode -** Select one of the following:

- **No Supplementals -** The scanner decodes only UPC/EAN/JAN and ignores supplemental characters.

- **Supplemental Always -** The scanner decodes only UPC/EAN/JAN symbols with supplemental characters, and ignores barcodes without supplementals.

- **Supplemental Auto -** The scanner decodes UPC/EAN/JAN symbols with supplemental characters immediately. If the symbol does not have a supplemental, the scanner must decode the barcode the number of times set via UPC/EAN/JAN Supplemental Redundancy before transmitting its data to confirm that there is no supplemental.

- **Supplemental Smart -** Enables smart supplementals. In this mode, the decoder returns the decoded value of the main block immediately unless it belongs to one of the following supplemental types: <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 378<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 379<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 977<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 978<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 979<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 414<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 419<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 434<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 439<br>

      If the barcode is preceded by one of the prefixes above, the image is searched more aggressively for a supplemental and attempts to scan it. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 378-379 -** Enables (auto-discriminate) supplemental for UPC/EAN/JAN codes starting with 378 or 379. Disables reading of supplementals for any other UPC/EAN/JAN barcode not starting with 378 or 379. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 978-979 -** Enables (auto-discriminate) supplemental for UPC/EAN/JAN codes starting with 978 or 979. Disables reading of supplementals for another UPC/EAN/JAN barcode not starting with 978 or 979. Tries to scan the supplemental if present. If the supplemental scanning fails, only then the main barcode is returned.

- **Supplemental 414-419-434-439 -** Enables (auto-discriminate) supplemental for UPC/EAN/JAN codes starting with 414, 419, 434 or 439. Disables reading of supplementals for another UPC/EAN/JAN barcode not starting with 414, 419, 434 or 439. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 977 -** Enables (auto-discriminate) supplemental for UPC/EAN/JAN codes starting with 977. Disables reading of supplementals for another UPC/EAN/JAN barcode not starting with 977. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

<!--
**Convert DataBar to UPC EAN -** If enabled, converts DataBar barcodes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled.

**UPC Reduced Quiet Zone -** Enable/disable decoding UPC barcodes with reduced quiet zones, the area in front of and at the end of a barcode. Enabling this option increases the aggressiveness in decoding barcodes, resulting to increased decoding time and risk of misdecodes.

**Bookland -** When enabled, select a Bookland Format from the list below.

**Bookland Format -** When Bookland is enabled, permits selection of an option for Bookland data:

- **Format ISBN-10 -** The scanner reports Bookland data starting with 978 in traditional 10-digit format with the special Bookland check digit for backward-compatibility. Data starting with 979 is not considered Bookland in this mode.

- **Format ISBN-13 -** The scanner reports Bookland data (starting with either 978 or 979) as EAN-13 in 13-digit format to meet the 2007 ISBN-13 protocol.

- **Convert GS1 To UPC EAN -** If this is set it converts GS1 barcodes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled. A check in the checkbox indicates that the option is enabled.

**Coupon -** Enable/Disable Coupon code decoding. To successfully decode any Coupon codes, all appropriate decoders must be enabled.

**Coupon Report Mode -** Traditional coupon symbols are composed of two barcodes: UPC/EAN and Code 128. A new coupon symbol is composed of a single Data Expanded barcode. The new format offers more options for purchase values (up to $999.999) and supports complex discount offers as a second purchase requirement. An interim coupon symbol also exists that contain both types of barcodes: UPC/EAN and Databar Expanded. This format accommodates both retailers that do not recognize or use the additional information included in the new coupon symbol, as well as those who can process new coupon symbols.

- **Old Coupon Report Mode -** Scanning an old coupon symbol reports both UPC and Code 128. Scanning an interim coupon symbol reports UPC. Scanning a new coupon symbol reports nothing (no decode).
- **New Coupon Report Mode -** Scanning an old coupon symbol reports either UPC or Code 128. Scanning an interim coupon symbol or a new coupon symbol reports Databar Expanded.
- **Both Coupon Report Modes -** Scanning an old coupon symbol reports both UPC and Code 128. Scanning an interim coupon symbol or a new coupon symbol reports Databar Expanded (default).

**EAN Zero Extend -** If enabled, adds five leading zeros to decoded EAN-8 barcodes to make them compatible in length to EAN-13 barcodes.

**Linear Decode -** Not in use. Deprecated.

**Retry Count -** Retry count for auto-discriminating for supplementals. Possible values are 2 to 20. Note that this flag is only considered if Supplemental Mode is set to one of the following values: Supplementals Auto, Supplementals Smart, Supplementals 378-379, Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20).

**Security Level -** The scanner offers four levels of decode security for UPC/EAN barcodes. As the quality of barcodes decreases, implementing an increased level of security will compensate and help improve decoding success. There is an inverse relationship between scanner aggressiveness and security. Zebra recommends choosing carefully the level of security necessary for any given application:

- **Level 0 -** This setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN barcodes.

- **Level 1 -** As barcode quality levels diminish, certain characters become prone to decode failures before others (i.e., 1, 2, 7, 8). If the scanner is decode failures poorly printed barcodes, and the decode failures are limited to these characters, select this security level.

- **Level 2 -** If the scanner fails to decode poorly printed barcodes, and the decode failures are not limited to characters 1, 2, 7, and 8, select this security level.

- **Level 3 -** If the scanner is still fails to decode, select this security level. Be advised, selecting this option is an extreme measure against decode failures for severely out-of-spec barcodes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is required, try to improve the quality of the barcodes.

**Supplemental2 -** Enable/disable length 2 supplementals.

**Supplemental5 -** Enable/disable length 5 supplementals.

**Supplemental Mode -** Select one of the following:

- **No Supplementals -** The scanner is presented with a UPC/EAN plus supplemental symbol, the scanner decodes UPC/EAN and ignores the supplemental characters.

- **Supplemental Always -** The scanner decodes only UPC/EAN symbols with supplemental characters, and ignores symbols without supplementals.

- **Supplemental Auto -** The scanner decodes UPC/EAN symbols with supplemental characters immediately. If the symbol does not have a supplemental, the scanner must decode the barcode the number of times set via UPC/EAN Supplemental Redundancy before transmitting its data to confirm that there is no supplemental.

- **Supplemental Smart -** Enables smart supplementals. In this mode, the decoder returns the decoded value of the main block immediately unless it belongs to one of the following supplemental types: <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 378<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 379<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 977<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 978<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 979<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 414<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 419<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 434<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◦ 439<br>

      If the barcode is preceded by one of the prefixes above, the image is searched more aggressively for a supplemental and attempts to scan it. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 378-379 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 378 or 379. Disables reading of supplementals for any other UPC/EAN barcode not starting with 378 or 379. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 978-979 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 978 or 979. Disables reading of supplementals for another UPC/EAN barcode not starting with 978 or 979. Tries to scan the supplemental if present. If the supplemental scanning fails, only then the main barcode is returned.

- **Supplemental 414-419-434-439 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 414, 419, 434 or 439. Disables reading of supplementals for another UPC/EAN barcode not starting with 414, 419, 434 or 439. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

- **Supplemental 977 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 977. Disables reading of supplementals for another UPC/EAN barcode not starting with 977. Tries to scan the supplemental if present. If the supplemental scanning fails, only the main barcode is returned.

-->

<!--
**Random Check Digit -** Enables random weight check digit verification.
-->

---

## Reader Params

Reader Parameters control specific configuration options for the barcode reader selected in the Profile being edited. **Not all parameters will apply to all readers**.

<img style="height:350px" src="reader_params.png"/>
<br>

**Presentation mode parameters -** Sets the sensitivity level in reaction to movement within the scanner field of view during the scanning session to automatically activate the scanner when movement is detected. Used when **Presentation Mode** is selected for **Aim Type.**

- **Sensitivity -** Sets the sensitivity level.
  - **High -** Scanning is activated with high sensivity to movement in the scanner field of view (default). Any slight movement in the field of view can activate the scanner.
  - **Medium -** Scanning is activated with medium sensivity to movement in the scanner field of view.
  - **Low -** Scanning is activated with low sensivity to movement in the scanner field of view. Fast movement in the field of view does not activate the scanner.

**1D Quiet Zone Level -** Sets the effort at which the decoder will attempt to decode "marginless" barcodes. Behavior of these levels will vary based on the marginless decoder selected. See the [Reduced Quiet Zone](#reducedquietzone) table for behaviors:

- **Level 0 -** The decoder will perform margin decoding as usual.

- **Level 1 -** The decoder will perform more aggressively.

- **Level 2 -** The decoder requires only one side end of barcode.

- **Level 3 -** The decoder can decode anything.

_**Note**: Higher marginless levels will increase decoding times and the risk of decoding errors. Zebra recommends enabling only the symbologies that require a higher marginless level and leaving all other symbologies at the default level of 1._

**Aim Mode -** Turns aim pattern on and off.

**Aim Timer -** Sets the duration (in ms) for timed aim modes. Supports a range from 0 - 60,000 ms in increments of 100 ms.

**Aim Type -** Permits selection of reader behavior when the trigger is pressed:

- **Trigger -** For each trigger press, a single barcode can be scanned.

- **Timed Hold –** Once trigger is pressed, an aiming session is started for a time specified by Aim Timer. When this time expires, a decode session is started and scan beam will be visible. The decode session will remain active until the Beam Timer expires, the trigger is released or a barcode is decoded.

- **Timed Release -** Once the trigger is pressed, an aiming session is started and will continue until the trigger is released. If the Aim Timer is expired when the trigger is released, a decode session will be started with scan beam visible for a remaining time equal to Beam Timer or a barcode is decoded.

- **Press and Release -** The scan beam starts when the trigger is pressed and released. The decode session will remain active until the Beam Timer expires or a barcode is decoded.

- **Presentation -** Automatically activates the scanner and starts scanning immediately when a barcode is presented in its field of view, without any trigger press.

- **Continuous Read -** A press and hold of the scan trigger continuously scans barcodes. Scanning stops upon releasing the trigger or when the scanner beam times out. The same barcode can be scanned multiple times. If scanning with the use of intents, for example with the [soft scan trigger](../../api/softscantrigger/), START_SCANNING intent starts continuous scanning until STOP_SCANNING intent is received or until the scanner beam times out. **Not supported with the Zebra RS507 Bluetooth Ring Scanner**.

- **Press and Sustain -** Starts the scan beam when the trigger is pressed and continues the decode session until the Beam Timer is expired, barcode is decoded or read is canceled. **Scan beam is not stopped when the trigger is released**. This avoids unexpected cancellations of a read by subsequently pressing the trigger button of the device; subsequent trigger presses while the beam is ON have no effect. **Applies to internal imager on TC20/TC25 and RS6000/RS507 Bluetooth scanners connected to TC57/TC77 and PS20 devices**.

- **Press and Continue -** The scan beam starts when the trigger is pressed. A subsequent trigger hold or release keeps the decode session active until the beam timer expires or the next trigger press and release. This avoids early wear of the trigger button and minimizes the user effort to press and hold the hard trigger button during a decode session.

**DPM Illumination Control -** Controls illumination for DPM barcodes:

- **Direct Illumination -** Scanner uses only direct (white) illumination. Recommended for use with dot peen barcodes - tilt the part 30 degrees for optimal decoding.
- **Indirect Illumination -** Scanner uses only red illumination. Recommended for use with laser etched barcodes on cylinders or curved, rough, grainy, highly reflective, or visibly machined surfaces.
- **Cycle Illumination -** Scanner cycles alternately between direct and indirect illumination. The scanner starts with the illumination used during the last successful decode.

**DPM Mode -** Mode to optimize DPM barcode decoding performance based on barcode size (Default value is Mode 2):

- **Disabled -** No special processing.
- **DPM Mode 1 -** Optimizes decoding performance for smaller DPM barcodes, typically found on electronics and medical instruments, especially on smooth surfaces. These barcodes tend to be laser etched or direct printed.
- **DPM Mode 2 -** Optimizes decoding performance for larger DPM barcodes, typically found on industrial parts, especially on rough, grainy or visibly machined surface. These barcodes tend to be dot peen or laser etched.

**Illumination Brightness -** Adjusts the brightness for the scanning session. Integer values: 0 - 10.

- **Low (0) -** Low intensity illumination during scanning session.
- **High (10) -** Maximum intensity illumination during scanning session (default).

**Illumination mode -** Turns illumination on and off.

**Inverse 1D Mode -** Permits option selection for inverse 1D barcode decoding:

- **Disabled -** Disables decoding of inverse 1D symbologies.

- **Enabled -** Enables decoding of inverse 1D symbologies only.

- **Auto -** Automatically detects and decodes positive and inverse 1D symbologies.

<!--  // Removed per [TUT-41427]
**Image Capture Mode -** Sets the barcode scanner to image capture mode:

* **None -** No image capturing.

* **Single Image Capture on Decode -** Captures an image with decoded data.

* **Image Capture Only -** Only captures and image and no barcode data will be dispatched.

_**Note:** Zebra does not recommend changing the Image Capture Mode parameter when DataWedge is used to scan barcodes; DataWedge does not process image data._ -->

**LCD Mode -** Used to Enable/Disable LCD Mode, which enhances the ability of the imager to read barcodes from LCD displays such as cellphones (applies to Scan Module only). **Use of LCD mode might lead to performance degradation and a blinking reticle prior to decoding**.

**Linear Security Level -** Sets the number of times a barcode is read to confirm an accurate decode:

- **Security Redundancy and Length -** Two times read redundancy based on redundancy flags and code length.

- **Security Short or Codabar -** Two times read redundancy if short barcode or Codabar.

- **Security All Twice -** Two times read redundancy for all barcodes.

- **Security Long and Short -** Two times read redundancy for long barcodes, three times for short barcodes.

- **Security All Thrice -** Three times read redundancy for all barcodes.

**HW Engine Low Power Timeout -** Time (in ms) of inactivity before scanner enters low-power mode.

**Picklist -** Permits selection of Picklist mode, which instructs the imager to decode only the barcode directly under the cross-hair/reticle in the viewfinder. This feature is most useful for applications in which multiple barcodes may appear in the field of view during a decode session but only one is desired for decoding.

- **Disable -** Disables Picklist mode; any barcode within the field of view can be decoded.

- **Hardware Picklist -** Picklist mode is enabled by sending a command to hardware.
  8y6
- **Software Picklist -** Picklist feature is handled in the software; no commands are sent to hardware.

_**Notes**:_

- _Performance might vary on some devices if Hardware or Software Picklist modes are set._
- _If using MultiBarcode mode, see important behavior notes below._

**Poor Quality Decode Effort -** Permits selection of enhancement modes for decoding barcodes of poor or degraded quality. Available options:

- **Effort Level 0 -** Decoding performance on regular 1D and 2D barcodes is not affected.

- **Effort Level 1 -** The scanner performance on regular 2D barcodes is impacted while decoding performance on Tesco Thailand barcode and Suppository barcode is improved.

- **Effort Level 2 -** same as Level 1.

- **Effort Level 3 -** same as Level 1.

_**Note:** Same performance from Effort Level 1 to Effort Level 3._

**Beam Timer -** Sets the maximum amount of time (in ms) that the reader remains on. Supports a range from 0 - 60,000 ms in increments of 100 ms. A value of 0 sets the reader to stay on indefinitely.

**Different Symbol Timeout -** Used to prevent the scanner from decoding another symbol within a specified time interval (applicable only when Aim Type is set to Continuous Read). A value of 0 indicates that no interval is required between two successive reads.

**Same Symbol Timeout -** Used to prevent the scanner from decoding the same symbol within a specified time interval (applicable only when Aim Type is set to Continuous Read). A value of 0 indicates that no interval is required between two successive reads.

**Trigger Wakeup and Scan -** Used to trigger scanning when a device is in a suspended/screen-off state. User needs to set the scanner trigger button as a wakeup source. When a user presses the trigger button in a suspend/screen-off state, scanning starts when the user keeps the trigger pressed.

**Digimarc Decoding -** Used to enable/disable support for Digimarc, which encodes and invisibly integrates traditional barcode data onto product packaging. **Supported with internal imager and rear camera**. Enabled by default. [More about Digimarc](https://www.digimarc.com/).

**Viewfinder Mode -** Permits selection of supported Viewfinder modes:

- **Viewfinder Enabled -** Enables only the viewfinder.

- **Static Reticle -** Enables the viewfinder and a red reticle (cross-hairs) in the center of the screen to aid in positioning the barcode for scanning. **This parameter is supported only when the Camera is used for scanning**.

**Zoom -** Required for decoding DotCode barcodes. User needs to set Camera Zoom value to 2 on the following devices: MC33, TC51/TC56, TC70x/TC75x, VC80x, TC52/TC57, TC72/TC77, PS20. If Camera Zoom is set to any value other than 2 on these devices, it can negatively impact the decoding of specific DotCode barcodes. Parameter values: 1 - 8. **Default=1**.

**Keep Pairing Info After Reboot -** Enable/disable automatic re-connection to the connected Bluetooth scanner after device reboot. Applies only to connected Bluetooth scanners.

> See **Important** notes below.

---

### Character Set Configuration

Provides options to make adjustments with the decoder character set. These options are:

- Character Set Selection
- Auto Character Set Preferred Order
- Auto Character Set Failure Option

<img style="height:350px" src="charset_config.png"/>

**Character Set Selection** - Converts the barcode data to the specified encoding type if different from the default encoding type, UTF-8. Other options are: Auto Character Set Selection, ISO-8859-1, Shift_JIS and GB18030.

<img style="height:350px" src="charset_values.png"/>
* **Auto Character Set Selection (Best Effort)** - Decodes data in the preference order of character sets specified in the "Auto Character Set Preferred Order" list. If the data cannot be decoded based on the character sets listed, "Auto Character Set Failure Option" takes into effect. _See description for each respective option for more details._

**Auto Character Set Preferred Order** - If "Auto Character Set Selection (Best Effort)" is selected, data is decoded in the specified preference order of the supported character sets listed: UTF-8 and GB2312. This is useful in cases where data can be decoded from more than one character set. The first character set listed which can decode the data successfully is chosen to decode the data - any other character set located lower in the list is not considered, even if the data could be successfully decoded using that character set. If DataWedge cannot find a character set from the preferred list to decode the data successfully, the character set selected in "Auto Character Set Failure Option" is used to decode the data.

Both the preferred character set list and its preference order is configurable. The order is rearranged by dragging the “hamburger-like” icon of the character set into the desired position. To delete a character set, long press on the item and the “Delete” option appears. To add a new character set, tap the “hamburger” menu at the top right corner - an option to add a character set, such as UTF-8 and GB2312, appears.

<img style="height:350px" src="charset_set_order.png"/>

**Auto Character Set Failure Option** - Used to decode data if the device cannot successfully decode based on the character sets listed in the "Auto Character Set Preferred Order" list. If “None” is selected, “Null” is returned as the data string.

<img style="height:350px" src="charset_failure_option.png"/>

---

## Scan Params

Scan Parameters allow for configuration of Code ID and scanner-specific decoding feedback options for the scanner selected in the Profile being edited.

**Note: Some parameters are device-dependent**.

<img style="height:350px" src="scan_params.png"/>
<br>

**Code ID Type -** Permits the selection of a Code ID character to insert between the prefix and the decoded symbol. The Code ID character identifies the code type of a scanned barcode. This information can be useful to an application when multiple barcode types are being read. Available options:

- **Code ID Type None -** Insert no prefix.

- **Code ID Type Aim -** Inserts a standards-based three-character prefix.

- **Code ID Type Symbol -** Inserts a Zebra-defined single-character prefix.

**Connection Idle Time -** Specifies the length of time (in seconds) for a peripheral Bluetooth scanner to remain connected until transitioning to standby mode to conserve battery power.

**Decode Haptic Feedback -** Enable the mobile computer to vibrate to indicate a successful decode.

**Decode Audio Feedback -** Select an audio tone to play to indicate a successful decode.

**Decode Screen Notification -** When enabled, a translucent green screen overlay appears for 1 second upon every successful decode.

**Decode Screen Notification Timer -** Defines the length of time (in milliseconds) to display the screen notification upon successful decode. Timer configuration range is 500 ms to 1500 ms. Default time is 1000 ms.

**Decode Screen Translucency Level -** Sets the translucency of the decode notification green screen. Translucency level range is 20 to 50, in increments of 5. The higher the value, the more the translucency (visibility).

**Decoding LED Notification -** When enabled, causes the Red LED to flash when the scan trigger is pressed.

**Decode Feedback LED Timer -** Defines the length of time (in ms) to flash the Green LED to indicate a successful decode.

**Beep Volume Channel -** Permits selection of the volume setting to be used when playing the Decode Audio Feedback. Available options:

- **Ringer -** Uses Ringer volume setting for audio feedback.

- **Music and Media -** Uses Music and Media volume setting for audio feedback.

- **Alarms -** Uses the Alarms volume setting for audio feedback.

- **Notification -** Uses Notification volume setting for audio feedback.

<!-- * **Decode Audio Feedback -** Select an audio tone to play to indicate a successful decode. -->

**Note**: Not all ringtones are supported as decode tones; some ringtones might be truncated when used as a decode tone. Zebra recommends testing all selected tones before deployment.

> **Important**: Support for decode parameters can vary depending on the scanning device selected. For device-specific support notes, please refer to the [Integrator Guide](https://www.zebra.com/us/en/sitesearch.html?q=integrator) that accompanied the unit.

---

## UDI Params

The Universal Device Identifier (UDI) parameter acquires multiple barcodes simultaneously.

**Support for UDI barcodes has been restored to Zebra devices running Android 10** with [BSP 10.12.13 "Update 17"](https://www.zebra.com/us/en/support-downloads/lifeguard-security.html) (or later).

Tap **Scanning Modes** within **Scanner Configuration** to enable UDI decoding:

<img style="height:350px" src="scanning_modes_sc.png"/>
_When UDI scanning mode is enabled (as above)_... 
<img style="height:350px" src="udi_params.png"/>
..._the selected UDI input parameter(s) will be used_.

**UDI Decoding Notes:**

- **UDI decoding is supported only on the devices listed above**.
- **Output of collected UDI data might require settings adjustments** of the token-separation character and/or output order. See the [Keystroke Output guide](../../output/keystroke/#udidataoutput) guide for more information.
- UDI settings can vary by geographic region. See the relevant sections of [Keystroke Output](../../output/keystroke), [Intent Output](../../output/intent) and/or [IP Output](../../output/ip) guides for more information.
- **Blood bags with barcodes that follow the ICCBBA standard** can be decoded with UDI.

---

## OCR Params

Optical character recognition (OCR) decoding is not as secure as barcode. To decrease OCR misdecodes and speed OCR reading, set an accurate OCR template and character subset, and use a check digit. Enabling OCR can slow barcode decoding. Enabling more than one OCR font could also slow OCR decoding and impact OCR decoding accuracy.

**OCR is supported on all Zebra SDM660 platform devices with built-in imagers** (such as TC52, TC57, TC72, and TC77). OCR is not supported on camera-only devices, Bluetooth scanners, SE965-based devices, nor Zebra Scanner Expansion Back (ZBack).

**Inverse OCR -** White or light words on a black or dark background. Select an option for decoding inverse OCR:

- **Regular Only -** Decode regular OCR (black on white) strings only.
- **Inverse Only -** Decode inverse OCR (white on black) strings only.
- **Auto-discriminate -** Decode both regular and inverse OCR strings.

**OCR Check Digit Modulus -** Sets the OCR module check digit calculation. The check digit is the last digit (in the right most position) in an OCR string and improves the accuracy of the collected data. The check digit is the end product of a calculation made on the incoming data. For check digit calculation, for example Modulus 10, alpha and numeric characters are assigned numeric weights. The calculation is applied to the character weights and the resulting check digit is added to the end of the data. If the incoming data does not match the check digit, the data is considered corrupt. The selected check digit option does not take effect until you set OCR Check Digit Validation.

**OCR Check Digit Multiplier -** Sets OCR check digit multipliers for the character positions. For check digit validation, each character in scanned data has an equivalent weight used in the check digit calculation.

**OCR Check Digit Validation -** Protects against scanning errors by applying a check digit validation scheme. Options:

- **None -** 0 (default)
- **Product Add Left to Right -** Each character in the scanned data is assigned a numeric value. Each digit representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, and the sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero. <br>
  _Example:_ Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456<br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16 &nbsp;&nbsp;&nbsp; 25 &nbsp;&nbsp;&nbsp; 36<br>
  Product add &nbsp;1+ &nbsp;&nbsp;&nbsp;&nbsp;6+ &nbsp;&nbsp;&nbsp; 6+ &nbsp;&nbsp;&nbsp;16+&nbsp;&nbsp; 25+ &nbsp;&nbsp;36 = 90<br>
  If the Check Digit Modulus is 10, it passes because 90 is divisible by 10 (the remainder is zero).
- **Product Add Right to Left -** Each character in the scanned data is assigned a numeric value.
  The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero.
  _Example:_ Scanned data numeric value is 132459 (check digit is 9). Check digit multiplier string is 123456.<br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;9<br>
  Product add &nbsp;6+ &nbsp;&nbsp;&nbsp;15+ &nbsp;&nbsp; 8+ &nbsp;&nbsp;&nbsp;&nbsp;12+&nbsp;&nbsp; 10+ &nbsp;&nbsp;9 = 60<br>
  If the Check Digit Modulus is 10, it passes because 60 is divisible by 10 (the remainder is 0).
- **Digit Add Left to Right -** Each character in the scanned data is assigned a numeric value.
  Each value representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.<br>
  _Example:_ Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.<br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16 &nbsp;&nbsp;&nbsp; 25 &nbsp;&nbsp;&nbsp; 36<br>
  Digit add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1+ &nbsp;&nbsp;&nbsp;6+ &nbsp;&nbsp; 6+ &nbsp;&nbsp;&nbsp;1+6+&nbsp;&nbsp; 2+5+ &nbsp;&nbsp;3+6 = 36<br>
  If the Check Digit Modulus is 12, it passes because 36 is divisible by 12 (the remainder is 0).
- **Digit Add Right to Left -** Each character in the scanned data is assigned a numeric value.
  The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.<br>
  _Example:_ Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.<br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;6<br>
  Digit add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6+ &nbsp;&nbsp;&nbsp;1+5+ &nbsp;&nbsp; 8+ &nbsp;&nbsp;1+2+&nbsp;&nbsp; 1+0+ &nbsp;&nbsp;6 = 30<br>
  The Check Digit Modulus is 10. It passes because 30 is divisible by 10 (the remainder is 0).
- **Product Add Right to Left Simple Remainder -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products except for the check digit's product is computed. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product. <br>
  _Example:_ Scanned data numeric value is 122456 (check digit is 6). Check digit multiplier string is 123456. <br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6<br>
  Product add &nbsp;6+ &nbsp;&nbsp;&nbsp;10+ &nbsp;&nbsp; 8+ &nbsp;&nbsp;&nbsp;&nbsp;12+&nbsp;&nbsp; 10 &nbsp;&nbsp; = 46&nbsp;&nbsp;6<br>
  The Check Digit Modulus is 10. It passes because 46 divided by 10 leaves a remainder of 6.
- **Digit Add Right to Left Simple Remainder -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products <i>except for the check digit's product</i> is then calculated. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product. <br>
  _Example:_ Scanned data numeric value is 122459 (check digit is 6). Check digit multiplier string is 123456. <br>
  Digit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9<br>
  Multiplier &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1<br>
  Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9<br>
  Digit add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6+ &nbsp;&nbsp;&nbsp;1+0+ &nbsp;&nbsp; 8+ &nbsp;&nbsp;&nbsp;&nbsp;1+2+&nbsp;&nbsp; 1+0+ &nbsp;&nbsp;= 19&nbsp;&nbsp;&nbsp;9<br>
  The Check Digit Modulus is 10. It passes because 19 divided by 10 leaves a remainder of 9.
- **Health Industry - HIBCC43 -** The health industry module 43 check digit standard. The check digit is the modulus 43 sum of all the character values in a given message, and is printed as the last character in a given message.

**OCR Lines -** Select the number of OCR lines to decode:

- 1 Line
- 2 Line
- 3 Line

**OCR Maximum Characters -** Select the maximum number of OCR characters (including spaces) per line to decode.

**OCR Minimum Characters -** Select the minimum number of OCR characters (not including spaces) per line to decode.

**OCR Orientation -** Select the orientation of an OCR string to be read. Setting an incorrect orientation can cause mis-decodes. Options:

- **0 degree -** to the imaging engine (default)
- **270 degree -** clockwise (or 90o counterclockwise) to the imaging engine
- **180 degree -** (upside down) to the imaging engine
- **90 degree -** clockwise to the imaging engine
- **Omnidirectional**

**OCR Quiet Zone -** Sets the field width of blank space to stop scanning during OCR reading.

**OCR Subset -** Defines a custom group of characters in place of a preset font variant. For example, if scanning only numbers and the letters A, B, and C, create a subset of just these characters to speed decoding. This applies a designated OCR Subset across all enabled OCR fonts.

**OCR Template -** Creates a template for precisely matching scanned OCR characters to a desired input format, which helps eliminate scanning errors. The template expression is formed by numbers and letters. The default is 99999999 which accepts any alphanumeric character OCR string. If there are less than 8 '9' characters, the '9' represents only digit values. Carefully constructing an OCR template eliminates scanning errors.

Minimum length - 3<br>
Maximum Length - 100 (Default - 99999999)<br>

OCR Templates and Options:

<table class="facelift" style="width:100%" border="1" padding="5px">
	<tr bgcolor="#dce8ef">
		<th>Name</th>
		<th>Description</th>
		<th>Template</th>
		<th>Valid Data/<br>Incoming Data</th>
		<th>Invalid Data/<br>Outgoing Data</th>
	</tr>
	<tr>
		<td>Required Digit (9)</td>
		<td>Only a numeric character is allowed in this position.</td>
		<td>99999</td>
		<td>12987</td>
		<td>123AB</td>
  </tr>
	<tr>
		<td>Required Alpha (A)</td>
		<td>Only an alpha character is allowed in this position. </td>
		<td>AAA</td>
		<td>ABC</td>
		<td>12F</td>
  </tr>
	<tr>
		<td>Require and Suppress (0)</td>
		<td>Any character in this position, including space or reject, is suppressed from the output. </td>
		<td>990AA</td>
		<td>12QAB</td>
		<td>12AB</td>
  </tr>
	<tr>
		<td>Optional Alphanumeric (1)</td>
		<td>This option accepts an alphanumeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
		<td>99991</td>
		<td>1234A</td>
		<td>1234&lt;</td>
  </tr>
	<tr>
		<td>Optional Alpha (2) </td>
		<td>This option accepts an alpha character if present. Optional characters are not allowed as the first character(s) in a field of like characters. </td>
		<td>AAAA2</td>
		<td>ABCDE</td>
		<td>ABCD6</td>
  </tr>
	<tr>
		<td>Alpha or Digit (3) </td>
		<td>An alphanumeric character is required in this position to validate the incoming data. </td>
		<td>33333</td>
		<td>12ABC</td>
		<td>12AB&lt;</td>
  </tr>
	<tr>
		<td>Any Including Space & Reject (4) </td>
		<td>Accepts any character in this position, including space and reject. Rejects are represented as an underscore (_) in the output. This is a good selection for troubleshooting.  </td>
		<td>99499</td>
		<td>12$34<br>34_98</td>
		<td></td>
  </tr>
	<tr>
		<td>Any except Space & Reject (5) </td>
		<td>Accepts any character in this position except a space or reject.  </td>
		<td>55999</td>
		<td>A.123<br>*Z456</td>
		<td>A BCD</td>
  </tr>
	<tr>
		<td>Optional Digit (7) </td>
		<td>Accepts a numeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
		<td>99977</td>
		<td>12345<br>789</td>
		<td>789AB</td>
  </tr>
	<tr>
		<td>Digit or Fill (8) </td>
		<td>Accepts any numeric or fill character in this position. </td>
		<td>88899</td>
		<td>12345<br>&gt;&gt;789<br>&lt;&lt;789</td>
		<td></td>
  </tr>
	<tr>
		<td>Alpha or Fill (F) </td>
		<td>Accepts any alpha or fill character in this position. </td>
		<td>AAAFF</td>
		<td>ABCXY<br> LMN&gt;&gt;<br>ABC&lt;5</td>
		<td></td>
  </tr>
	<tr>
		<td>Optional Space ( ) </td>
		<td>Accepts a space if present. Optional characters are not allowed as the first characte(s) in a field of like characters. </td>
		<td>99 99</td>
		<td>12 34<br>1234</td>
		<td>67891</td>
  </tr>
	<tr>
		<td>Optional Small Special (.) </td>
		<td>Accepts a special character if present. Optional characters are not allowed as the first character(s) in a field of like characters. Small special characters are - , and .</td>
		<td>AA.99</td>
		<td>MN.35<br>XY98</td>
		<td>XYZ12</td>
  </tr>
	<tr>
		<td colspan="5"><b>Other Template Operators -</b> These template operators assist in capturing, delimiting, and formatting scanned OCR data</td>
	</tr>
	<tr>
		<td>Literal String (" and +)</td>
		<td>Use either of these delimiting characters surrounding alphanumeric characters to define a literal string within a template that must be present in scanned OCR data. There are two characters used to delimit required literal strings; if one of the delimiter characters is present in the desired literal string, use the other delimiter. </td>
		<td>"35+BC"</td>
		<td>35+BC</td>
		<td>AB+22</td>
  </tr>
	<tr>
		<td>New Line (E)</td>
		<td>To create a template of multiple lines, add E between the template of each single line. </td>
		<td>999EAAAA</td>
		<td>321<br>BCAD</td>
		<td>XYZW<br>12</td>
  </tr>
	<tr>
		<td>String Extract (C) </td>
		<td>This operator combined with others defines a string of characters to extract from the scanned data. The string extract is structured as follows:<br><br>CbPe<br><br>Where: <br>• C is the string extract operator<br>• b is the string begin delimiter<br>• P is the category (one or more numeric or alpha characters) describing the string representation<br>• e is the string end delimiter<br><br>Values for b and e can be any scannable character. They are included in the output stream. </td>
		<td>C&gt;A&gt;</td>
		<td>XQ3&gt;ABCDE&gt;<br>-&gt;ATRU&gt;123</td>
		<td>&gt;ABCDE&gt;<br>&gt;ATRU&gt;</td>
  </tr>
	<tr>
		<td>Ignore to End of Field (D) </td>
		<td>This operator causes all characters after a template to be ignored. Use this as the last character in a template expression.  </td>
		<td>999D</td>
		<td>123-PED<br>357298</td>
		<td>123<br>357</td>
  </tr>
	<tr>
		<td>Skip Until (P1)</td>
		<td>This operator allows skipping over characters until a specific character type or a literal string is detected. It can be used in two ways:<br><br>P1ct<br><br>Where:<br>• P1 is the Skip Until operator<br>• c is the type of character that triggers the start of output<br>• t is one or more template characters<br><br>P1"s"t<br><br>Where:<br>• P1 is the Skip Until operator<br>• "s" is one or more literal string characters that trigger the start of output<br>• t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until operator, and the first character in the template should accommodate this trigger. </td>
		<td>P1"PN"AA9999</td>
		<td>123PN9876<br>X-PN3592</td>
		<td>PN9876<br>PN3592</td>
  </tr>
	<tr>
		<td>Skip Until Not (P0)</td>
		<td>This operator allows skipping over characters until a specific character type or a literal string is not matched in the output stream. It can be used in two ways:<br><br>P0ct<br><br>Where:<br>• P0 is the Skip Until Not operator<br>• c is the type of character that triggers the start of output<br>• t is one or more template characters<br><br>P0"s"t<br><br>Where:<br>• P0 is the Skip Until Not operator<br>• "s" is one or more literal string characters that trigger the start of output<br>• t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until Not operator. </td>
		<td>P0A9999</td>
		<td>BPN3456<br>X-PN3592</td>
		<td>5341<br>No output</td>
  </tr>
	<tr>
		<td>Repeat Previous (R)</td>
		<td>This operator allows a template character to repeat one or more times, allowing the capture of variable-length scanned data. The following examples capture two required alpha characters followed by one or more required digits:</td>
		<td>AA9R</td>
		<td>AB3<br>AB3<br>32RM52700</td>
		<td>PN12345<br>PN12345<br>No output</td>
  </tr>
	<tr>
		<td>Scroll Until Match (S)</td>
		<td>This operator steps through scanned data one character at a time until the data matches the template. </td>
		<td>S99999</td>
		<td>AB3<br>PN12345<br>32RM52700</td>
		<td>No output<br>12345<br>52700</td>
  </tr>
	<tr>
		<td>Multiple Templates</td>
		<td>This feature sets up multiple templates for OCR decoding. For each template in the multiple template string, use a capital letter X as a separator between the templates. <br><br>For example, set the OCR Template as 99999XAAAAA to decode OCR strings of either 12345 or ABCDE.  </td>
		<td colspan="3">Following are sample templates with descriptions of valid data for each definition. The Field Definition is followed by its description:<br><br>"M"99977&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <b>M</b> followed by three digits and two optional digits.<br>"X"997777"X"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <b>X</b> followed by two digits, four optional digits, and an X.<br>9959775599 &nbsp;&nbsp;&nbsp;&nbsp; : Two digits followed by any character, a digit, two optional digits, any two characters, and two digits.<br>A55"-"999"-"99 &nbsp;&nbsp; : A letter followed by two characters, a dash, three digits, a dash, and two digits.<br>33A"."99 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Two alphanumeric characters followed by a letter, a period, and two digits.<br>999992991&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Five digits followed by an optional alpha, two digits, and an optional alphanumeric.<br>"PN98"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Literal field - <b>PN98</b></td>
  </tr>
	</table>

---

**Related guides**:

- [Advanced Data Formatting](../../process/adf)
- [Basic Data Formatting](../../process/bdf)
- [Intent Output](../../output/intent)
- [Keystroke Output](../../output/keystroke)
- [Profiles/Plug-ins](../../profiles)
- [DataWedge APIs](../../api)
- [Licensing](../../licensing)