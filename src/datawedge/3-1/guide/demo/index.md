---
title: DataWedge Advanced Settings
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## DW Demo

DWDemo icon
Figure 22. DWDemo icon
DWDemo is demonstration application to show how data gets captured to an application with DataWedge. DWDemo application has a profile called "DWDemo". If user launches DWDemo application from the Launcher screen, barcode scanning will get enabled. Pressing the trigger, or pressing the Scan button on the DWDemo will allow to scan a barcode. The decoded data will be displayed in the screen. DWDemo also can be used to try our MSR. Swiping a card with a magnetic stripe will display the card data in the DWDemo screen.

DWDemo has provided options to change some of the scanner settings from the DWDemo, and it can also have option to open the complete DWDemo profile configuration and do the necessary changes.

DWDemo Screen
Figure 23. DWDemo Screen
Programming Notes

Overriding Trigger Key in an Application
To override the trigger key in an application, create a profile for the application that disables the Barcode input. In the application, use standard APIs, such as onKeyDown() to listen for the KEYCODE_BUTTON_L1 and KEYCODE_BUTTON_R1 presses.

Capture Data and Taking a Photo in the Same Application
To be able to capture bar code data and take a photo in the same application:

Add two Activities in your application for barcode scanning and picture taking actions respectively. Create a DataWedge profile associated to the picture taking Activity in your application and disable scanning and use standard Android SDK APIs to control the Camera.

The default DataWedge profile takes care of the scanning when other activities in your application comes foreground. You might want to create another DataWedge profile that caters to any specific scanning needs, and associate it to the barcode scanning activity of your application.

Disable DataWedge on mobile computer and Mass Deploy
To disable DataWedge and deploy onto multiple mobile computers:

Touch  Home > DataWedge >  Menu > Settings.

Unselect the DataWedge enabled check box.

Export the DataWedge configuration. See Export Configuration File above for instructions.

See Configuration File Management above for instructions for using the auto import feature.





