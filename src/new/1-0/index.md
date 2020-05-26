---
title: TechDocs Highlights
layout: whatsnew.html
product: 'Features and new releases'
productversion: 
features:
 - image-location: right
   title: Zebra's Solutions
   description: Apps built for Zebra's Android mobile computing devices to help corporate end-users increase productivity in the workplace and improve efficiency of their workflows. Apps built for Zebra's Android mobile computing devices to help corporate end-users increase productivity in the workplace and improve efficiency of their workflows. Apps built for Zebra's Android mobile computing devices to help corporate end-users increase productivity in the workplace and improve efficiency of their workflows.
   url: /solutions
   image: ../scan.jpeg
   sections: 
    - title: Learn more
      url: /solutions
 - image-location: left
   title: DataWedge
   description: An app for Zebra Android and Windows devices that provides barcode scanning and processing services for virtually any other app on the device.
   url: /datawedge
   video: 'https://www.youtube.com/embed/Hp_Z24WSrUg'
   sections: 
    - title: Learn more
      url: /datawedge
 - image-location: right
   title: EMDK
   description: EMDK for Android extends the Android Studio IDE for Mac OS and Windows with tools for easily creating powerful line-of-business applications for Zebra Android devices. EMDK for Android includes class libraries, sample apps and source code that enables developers to easily build apps that take full advantage of the power of Zebra devices.
   url: /emdk-for-android
   image: ../scan.jpeg
   sections: 
    - title: Learn more
      url: /emdk-for-android
 - image-location: left
   title: Device Tracker
   description: Device Tracker is a centralized solution that tracks and finds misplaced devices within a facility. As part of Zebra DNA Visibility Console, it leverages existing WiFi network infrastructure and uses both Bluetooth Low Energy (BLE) and audio to aid in locating devices, preventing device inventory shrinkage. 
   url: /devicetracker
   video: '../DTRK Cert Setup - Step 1.mp4'
   sections: 
    - title: Learn more
      url: /devicetracker
---
## DataWedge
New in [DataWedge 8.0](../../datawedge):
* Added [Dutch Postal 3S](../../datawedge/7-6/guide/input/barcode) and [Finnish Postal 4S](../../datawedge/7-6/guide/input/barcode) decoder support.
  * Set [Finnish Postal 4S](../../datawedge/latest/guide/api/setconfig/#scannerinputparameters) and [Dutch Postal 3S](../../datawedge/latest/guide/api/setconfig/#scannerinputparameters) with SetConfig API.
* New [Report Decoded Barcodes](../../datawedge/latest/guide/input/barcode/#multibarcodeparams) option for MultiBarcode decoding. 
* **RFID input is disabled in [Profile0](../../datawedge/latest/guide/overview#profile0),** DataWedge's default generic profile. Previously it was enabled by default.
* Improved look and feel of user interface. Refer to [Settings](../../datawedge/latest/guide/settings) and [DWDemo](../../datawedge/latest/guide/samples/dwdemo).

## Enterprise Browser
New in [Enterprise Browser 8.0](../../enterprise-browser):
* Client – Device app collects and sends battery and device information to server.
* Server – Part of Zebra DNA Visibility Console, which collects and analyzes device battery data.
* Web portal - Part of Zebra DNA Visibility Console, which provides a centralized dashboard for monitoring battery status information, sends notifications and generates reports.

## EMDK for Android
New in EMDK for [Android 8.0](../..emdk-for-android/).

See [Install & Setup](../setup) for System Requirements.

1. Supported Devices:
  <table class="facelift" align="center" style="width:70%" border="1" padding="5px">
    <tr bgcolor="#dce8ef">
      <th>Device</th>
      <th style="text-align:center">Android 6.x <br>(Marshmallow)</th>
      <th style="text-align:center">Android 7.x <br>(Nougat)</th>
      <th style="text-align:center">Android 8.x <br>(Oreo)</th>
    </tr>
    <tr>
      <td>TC70X/TC75X</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC51/TC56 </td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC52/TC57</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>TC72/TC77</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>MC3300 </td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
    <tr>
      <td>PS20</td>
      <td></td>
      <td></td>
      <td style="text-align:center">&#x25cf;</td>
    </tr>
  </table>
  
2. Supported Battery Types: [Zebra PowerPrecision Plus](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html), [Zebra PowerPrecision](https://www.zebra.com/us/en/products/accessories/powerprecision-battery-solutions.html)  (limited support and [additional setup required](../mgmt/#powerprecisionbatteries))  <br>
Refer to [PowerPrecision and Battery Management Fact Sheet](https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Software/Mobility%20Software/powerprecision/fact-sheets/data-capture-dna-power-precision-fact-sheet-en-us.pdf) for more information.
3. Zebra Data Services agent is required to be running on the mobile computer. This agent collects battery health data from the device and sends it to the PPC server. 
4. The PPC server is installed and running.
<br>
<br>

## EMDK for Xamarin
New in EMDK for [Xamarin 8.0](../..emdk-for-xamarin/):
* Client – Device app collects and sends battery and device information to server.
* Server – Part of Zebra DNA Visibility Console, which collects and analyzes device battery data.
* Web portal - Part of Zebra DNA Visibility Console, which provides a centralized dashboard for monitoring battery status information, sends notifications and generates reports.

-----

## See Also

* [PowerPrecision Console Install & Setup](../setup)


