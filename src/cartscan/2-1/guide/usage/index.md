---
title: Using CartScan
layout: guide.html
product: CartScan
productversion: '2.1'
---

## Overview

CartScan uses Bluetooth to turn a [supported Zebra mobile device](../about/#supporteddevices) into a wireless barcode scanner, sending collected data as keystrokes to a nearby computer running a line-of-business application. CartScan was initially developed for healthcare workers, but has applications in the warehouse, transportation and logistics, and numerous other industries. 

### Connecting PC to Mobile Device

**NOTE**: If the mobile device was not previously paired with the PC, see the [Setup guide](../setup/#3enablebluetoothpairdevices).

**To connect the mobile device to target PC**:

1. On the target PC, launch CartScanPCWedge.
2. On the mobile device, launch the CartScan app.
3. Using the mobile device, scan the barcode displayed on the CartScanPCWedge screen. Once scanned, the mobile device attempts to establish the connection to the PC.

<img alt="" style="height:350px" src="figure_22.png"/>
_Connecting screen and instructions on PC_
<br>

### Using CartScan

**To use CartScan**:

With the mobile device connected to the target PC:

1. On the target PC, **launch the "line-of-business" app** intended to receive the scanned data.
2. **Place the cursor in the target input field** of the LOB app into which scanned data should be deposited.
3. On the mobile device, **select the Profile** to be used for the scanning workflow.
<img alt="" style="height:350px" src="figure_23.png"/>
_Profile selection_
<br>
4. Scan the desired workflow barcode(s) using the mobile device. <br>Scanned data appears in the "Scanned Data" field:
<img alt="" style="height:350px" src="figure_24.png"/>
<br>
**NOTE**: When a barcode is successfully decoded by the mobile device, the scanner beeps and/or vibrates (if enabled). **A beep does not reflect successful transmission of the scanned data to the PC**.
5. **Confirm successful transmission of scanned data** to the PC by looking for a green check mark under "Transmit Status" as seen above. 
6. **Repeat Steps 4 and 5** until all data is acquired. [See Notes](#notes), below. 

## Notes

* If the mobile device goes out of range of the PC or loses connection due to a timeout, a message similar to the one pictured below appears indicating that the mobile device is disconnected from the PC:
<img alt="" style="height:350px" src="figure_25.png"/>
_Mobile Device is Disconnected from PC_
<br>
* On the PC, the user should periodically confirm that the scanned data is delivered properly to the target application. If the cursor was moved out of the target app, another application appeared in the foreground, or Windows caused the PC to lock, the data will not populate into the intended input field. 
* If a barcode is scanned without an active connection to the PC, an alert dialog displays and data is not transmitted to the PC. A red “x” indicates the failure. The scanner still beeps or vibrates (if enabled) and the scan data appears in the Mobile Device Scanned Data field only, but not on the PC.
* The disconnect message may not appear immediately. To re-connect, see Re-Establishing the Bluetooth Connection on page 35.


Confirm that the mobile device is still connected to the target PC and the cursor is advancing to the desired fields. 



Figure 26	

<img alt="" style="height:350px" src="figure_26.png"/>
_Device Connection Error_
<br>

	
IMPORTANT:  When workflow scanning is complete, close the CartScan application on the mobile device.



Using CartScan PC Wedge

When CartScanPCWedge launches, the UI screen only displays the Bluetooth connection barcode, the status of the connection, and instructions to pair and connect a mobile device with the PC. When CartScanPCWedge is minimized the UI is no longer visible, even though the application is still running. To restore the UI, click the CartScan icon from the system tray.

The system administrator can enable and disable CartScan (disconnecting the mobile device from the PC), display the pairing barcode to connect (or reconnect) with a mobile device, view the app version and Bluetooth MAC address, and exit the app (and stop the service).

Figure 27	CartScan PC Wedge System Tray

<img alt="" style="height:350px" src="figure_27.png"/>
_CartScan PC Wedge System Tray_
<br>



Click to display CartScan PC Wedge options


BT MAC:	Displays the Bluetooth MAC address of the PC.
Pairing Barcode:	Displays the CartScan UI and instructions for pairing and/or connection.
Enable/Disable CartScan:Starts/stops the CartScan PC Wedge service. When disabled, the CartScan icon turns red.
Disconnect From Device: Drops the Bluetooth connection with the mobile device.
Exit CartScan:	Exits the CartScan PC Wedge application. To re-launch, double-click the
CartScanPCwedge.exe icon on the desktop or Start menu.
About:	Shows CartScan PC Wedge version information.


Re-Establishing the Bluetooth Connection

To re-establish the Bluetooth connection:

On the PC, select the CartScan PC Wedge icon on the system tray (see Figure 27).
Select Pairing Barcode to display the barcode and pairing instructions.

Follow the instructions to connect the mobile device, displayed below the barcode.

Overview
This chapter provides best practices and troubleshooting for the Zebra CartScan and CartScan PC Wedge applications.


## Best Practices for the End User
End users should have the proper training material and guidelines to understand how CartScan operates. Below is a list of suggested end user best practices.

Always check the status of the connection before scanning workflow based data as the connection may be dropped due to a variety of reasons such as:

CartScan session timeout expired.
Bluetooth connection issue (for example, the mobile device is out of range to PC, interference, etc.).
Another user disconnected CartScan from the target PC. If the connection dropped, it is necessary to re-scan the Bluetooth Connectivity barcode displayed on the CartScanPCWedge to re-connect to the PC.
The end user should start the CartScan PC Wedge application on the target PC and place the cursor in the target input field where scanned data is deposited. Scanned data is populated into the target field selected so it is important for the end user to ensure that the selection is made properly.
A Bluetooth-connected mobile device can travel about 25 feet from the PC to which it is connected before the connection drops. The end user should confirm:
That they are still connected before they begin to scan
That the scan was transmitted when the scan is complete.
After a scanning operation is conducted using CartScan, the end user should confirm that the scan data was correctly populated into the target input field before moving on.
After connecting CartScan to a PC, the end user should be mindful that no other users interact with the PC. For example, the end user should ensure the cursor is not moved to another input location until the scanning task is complete or the CartScan connection was severed by the CartScan user.


## Troubleshooting

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
 style='margin-left:59.7pt;border-collapse:collapse'>
 <tr style='height:20.05pt'>
  <td width=218 valign=top style='width:163.5pt;border:solid black 1.0pt;
  background:#007BB0;padding:0in 0in 0in 0in;height:20.05pt'>
  <p class=TableParagraph align=center style='text-align:center;line-height:
  15.45pt'><b><span style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;
  color:white'>Problem</span></b></p>
  </td>
  <td width=237 valign=top style='width:177.8pt;border:solid black 1.0pt;
  border-left:none;background:#007BB0;padding:0in 0in 0in 0in;height:20.05pt'>
  <p class=TableParagraph style='margin-left:48.8pt;line-height:15.45pt'><b><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;color:white;
  letter-spacing:-.05pt'>Possible</span></b><b><span style='font-size:10.0pt;
  font-family:"Arial Unicode MS",sans-serif;color:white;letter-spacing:-.8pt'> </span></b><b><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;color:white;
  letter-spacing:-.05pt'>Causes</span></b></p>
  </td>
  <td width=215 valign=top style='width:161.2pt;border:solid black 1.0pt;
  border-left:none;background:#007BB0;padding:0in 0in 0in 0in;height:20.05pt'>
  <p class=TableParagraph style='margin-left:35.55pt;line-height:15.45pt'><b><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;color:white;
  letter-spacing:-.05pt'>Possible</span></b><b><span style='font-size:10.0pt;
  font-family:"Arial Unicode MS",sans-serif;color:white;letter-spacing:-.9pt'> </span></b><b><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;color:white;
  letter-spacing:-.05pt'>Solutions</span></b></p>
  </td>
 </tr>
 <tr style='height:20.0pt'>
  <td width=670 colspan=3 valign=top style='width:502.5pt;border:solid black 1.0pt;
  border-top:none;padding:0in 0in 0in 0in;height:20.0pt'>
  <p class=TableParagraph style='margin-left:4.65pt;line-height:15.4pt'><b><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif'>Mobile<span
  style='letter-spacing:-.65pt'> </span><a name="_bookmark120"></a>Device</span></b></p>
  </td>
 </tr>
 <tr style='height:32.0pt'>
  <td width=218 valign=top style='width:163.5pt;border:solid black 1.0pt;
  border-top:none;padding:0in 0in 0in 0in;height:32.0pt'>
  <p class=TableParagraph style='margin-top:2.5pt;margin-right:44.15pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>Unable</span><span style='font-size:10.0pt;line-height:
  68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.3pt'> </span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif'>to<span
  style='letter-spacing:-.25pt'> </span>scan<span style='letter-spacing:-.25pt'>
  </span>a<span style='letter-spacing:-.3pt'> </span><span style='letter-spacing:
  -.05pt'>barcode</span><span style='letter-spacing:1.1pt'> </span>symbology.</span></p>
  </td>
  <td width=237 valign=top style='width:177.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:32.0pt'>
  <p class=TableParagraph style='margin-left:4.65pt;line-height:15.4pt'><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;letter-spacing:
  -.05pt'>Invalid</span><span style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.7pt'> </span><span style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>barcode.</span></p>
  </td>
  <td width=215 valign=top style='width:161.2pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:32.0pt'>
  <p class=TableParagraph style='margin-left:4.65pt;line-height:15.4pt'><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif'>Check<span
  style='letter-spacing:-.5pt'> </span>the<span style='letter-spacing:-.4pt'> </span><span
  style='letter-spacing:-.05pt'>barcode.</span></span></p>
  </td>
 </tr>
 <tr style='height:44.0pt'>
  <td width=218 valign=top style='width:163.5pt;border:solid black 1.0pt;
  border-top:none;padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.6pt;margin-right:7.1pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;text-align:justify;
  line-height:67%'><span style='font-size:10.0pt;line-height:67%;font-family:
  "Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>After</span><span
  style='font-size:10.0pt;line-height:67%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.65pt'> </span><span style='font-size:10.0pt;line-height:
  67%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>scanning</span><span
  style='font-size:10.0pt;line-height:67%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.6pt'> </span><span style='font-size:10.0pt;line-height:67%;
  font-family:"Arial Unicode MS",sans-serif'>a<span style='letter-spacing:-.6pt'>
  </span><span style='letter-spacing:-.05pt'>barcode</span><span
  style='letter-spacing:-.65pt'> </span><span style='letter-spacing:-.05pt'>there</span><span
  style='letter-spacing:-.65pt'> </span><span style='letter-spacing:-.05pt'>are</span><span
  style='letter-spacing:1.15pt'> </span><span style='letter-spacing:-.05pt'>unexpected</span><span
  style='letter-spacing:-.65pt'> </span><span style='letter-spacing:-.05pt'>characters</span><span
  style='letter-spacing:-.65pt'> </span>in<span style='letter-spacing:-.65pt'> </span><span
  style='letter-spacing:-.05pt'>the</span><span style='letter-spacing:-.6pt'> </span><span
  style='letter-spacing:-.05pt'>input</span><span style='letter-spacing:1.05pt'>
  </span>field<span style='letter-spacing:-.2pt'> </span>on<span
  style='letter-spacing:-.25pt'> </span><span style='letter-spacing:-.05pt'>the</span><span
  style='letter-spacing:-.15pt'> </span>PC.</span></p>
  </td>
  <td width=237 valign=top style='width:177.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.6pt;margin-right:21.9pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:67%'><span
  style='font-size:10.0pt;line-height:67%;font-family:"Arial Unicode MS",sans-serif'>A<span
  style='letter-spacing:-.25pt'> </span>prefix<span style='letter-spacing:-.25pt'>
  </span>and/or<span style='letter-spacing:-.3pt'> </span>suffix<span
  style='letter-spacing:-.25pt'> </span>was<span style='letter-spacing:-.3pt'> </span>possibly<span
  style='letter-spacing:1.05pt'> </span><span style='letter-spacing:-.05pt'>added.</span></span></p>
  </td>
  <td width=215 valign=top style='width:161.2pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.6pt;margin-right:15.8pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;text-align:justify;
  line-height:67%'><span style='font-size:10.0pt;line-height:67%;font-family:
  "Arial Unicode MS",sans-serif'>Check<span style='letter-spacing:-.25pt'> </span>the<span
  style='letter-spacing:-.2pt'> </span>Profile<span style='letter-spacing:-.2pt'>
  </span><span style='letter-spacing:-.05pt'>on</span><span style='letter-spacing:
  -.2pt'> </span>the<span style='letter-spacing:-.2pt'> </span><span
  style='letter-spacing:-.05pt'>mobile</span><span style='letter-spacing:1.35pt'>
  </span>device<span style='letter-spacing:-.25pt'> </span><span
  style='letter-spacing:-.05pt'>to</span><span style='letter-spacing:-.25pt'> </span>confirm<span
  style='letter-spacing:-.25pt'> </span>it<span style='letter-spacing:-.25pt'> </span>contains<span
  style='letter-spacing:-.2pt'> </span>the<span style='letter-spacing:1.15pt'> </span><span
  style='letter-spacing:-.05pt'>intended</span><span style='letter-spacing:
  -.6pt'> </span><span style='letter-spacing:-.05pt'>prefix/suffix</span><span
  style='letter-spacing:-.55pt'> </span><span style='letter-spacing:-.05pt'>data.</span></span></p>
  </td>
 </tr>
 <tr style='height:60.0pt'>
  <td width=218 valign=top style='width:163.5pt;border:solid black 1.0pt;
  border-top:none;padding:0in 0in 0in 0in;height:60.0pt'>
  <p class=TableParagraph style='margin-top:2.6pt;margin-right:10.85pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:67%'><span
  style='font-size:10.0pt;line-height:67%;font-family:"Arial Unicode MS",sans-serif'>After<span
  style='letter-spacing:-.3pt'> </span>scanning<span style='letter-spacing:
  -.25pt'> </span>a<span style='letter-spacing:-.25pt'> </span>barcode<span
  style='letter-spacing:-.3pt'> </span>no<span style='letter-spacing:-.25pt'> </span>data<span
  style='letter-spacing:1.1pt'> </span><span style='letter-spacing:-.05pt'>appears</span><span
  style='letter-spacing:-.25pt'> </span>in<span style='letter-spacing:-.2pt'> </span><span
  style='letter-spacing:-.05pt'>the</span><span style='letter-spacing:-.2pt'> </span><span
  style='letter-spacing:-.05pt'>input</span><span style='letter-spacing:-.2pt'>
  </span><span style='letter-spacing:-.05pt'>field</span><span
  style='letter-spacing:-.2pt'> </span>on<span style='letter-spacing:-.2pt'> </span>the<span
  style='letter-spacing:1.55pt'> </span>PC.</span></p>
  </td>
  <td width=237 valign=top style='width:177.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:60.0pt'>
  <p class=TableParagraph style='margin-top:2.6pt;margin-right:43.45pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>Bluetooth</span><span style='font-size:10.0pt;
  line-height:68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:
  -.45pt'> </span><span style='font-size:10.0pt;line-height:68%;font-family:
  "Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>connection</span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.4pt'> </span><span style='font-size:10.0pt;line-height:68%;
  font-family:"Arial Unicode MS",sans-serif'>may<span style='letter-spacing:
  -.4pt'> </span>be<span style='letter-spacing:1.55pt'> </span><span
  style='letter-spacing:-.05pt'>severed.</span></span></p>
  <p class=TableParagraph style='margin-top:3.95pt;margin-right:17.4pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif'>Mobile<span
  style='letter-spacing:-.2pt'> </span>device<span style='letter-spacing:-.2pt'>
  </span>is<span style='letter-spacing:-.2pt'> </span>out<span
  style='letter-spacing:-.2pt'> </span>of<span style='letter-spacing:-.15pt'> </span>range<span
  style='letter-spacing:-.2pt'> </span>of<span style='letter-spacing:-.15pt'> </span>the<span
  style='letter-spacing:1.05pt'> </span>PC.</span></p>
  </td>
  <td width=215 valign=top style='width:161.2pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:60.0pt'>
  <p class=TableParagraph style='margin-left:4.65pt;line-height:14.65pt'><span
  style='font-size:10.0pt;font-family:"Arial Unicode MS",sans-serif'>Check<span
  style='letter-spacing:-.45pt'> </span><span style='letter-spacing:-.05pt'>the</span><span
  style='letter-spacing:-.45pt'> </span><span style='letter-spacing:-.05pt'>Bluetooth</span><span
  style='letter-spacing:-.45pt'> </span><span style='letter-spacing:-.05pt'>connection.</span></span></p>
  <p class=TableParagraph style='margin-top:3.9pt;margin-right:30.35pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif'>Confirm<span
  style='letter-spacing:-.3pt'> </span>the<span style='letter-spacing:-.3pt'> </span>mobile<span
  style='letter-spacing:-.3pt'> </span>device<span style='letter-spacing:-.25pt'>
  </span>is within<span style='letter-spacing:-.25pt'> </span><span
  style='letter-spacing:-.05pt'>range</span><span style='letter-spacing:-.2pt'>
  </span>of<span style='letter-spacing:-.25pt'> </span><span style='letter-spacing:
  -.05pt'>the</span><span style='letter-spacing:-.15pt'> </span>PC.</span></p>
  </td>
 </tr>
 <tr style='height:44.0pt'>
  <td width=218 valign=top style='width:163.5pt;border:solid black 1.0pt;
  border-top:none;padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.5pt;margin-right:18.65pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>Barcodes</span><span style='font-size:10.0pt;
  line-height:68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:
  -.35pt'> </span><span style='font-size:10.0pt;line-height:68%;font-family:
  "Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>are</span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.3pt'> </span><span style='font-size:10.0pt;line-height:68%;
  font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>not</span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.35pt'> </span><span style='font-size:10.0pt;line-height:
  68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>transmitted</span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.3pt'> </span><span style='font-size:10.0pt;line-height:68%;
  font-family:"Arial Unicode MS",sans-serif'>to<span style='letter-spacing:
  1.65pt'> </span>the<span style='letter-spacing:-.35pt'> </span>PC.</span></p>
  </td>
  <td width=237 valign=top style='width:177.8pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.5pt;margin-right:43.45pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>Bluetooth</span><span style='font-size:10.0pt;
  line-height:68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:
  -.45pt'> </span><span style='font-size:10.0pt;line-height:68%;font-family:
  "Arial Unicode MS",sans-serif;letter-spacing:-.05pt'>connection</span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.4pt'> </span><span style='font-size:10.0pt;line-height:68%;
  font-family:"Arial Unicode MS",sans-serif'>may<span style='letter-spacing:
  -.4pt'> </span>be<span style='letter-spacing:1.55pt'> </span><span
  style='letter-spacing:-.05pt'>severed.</span></span></p>
  </td>
  <td width=215 valign=top style='width:161.2pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  padding:0in 0in 0in 0in;height:44.0pt'>
  <p class=TableParagraph style='margin-top:2.5pt;margin-right:9.15pt;
  margin-bottom:0in;margin-left:4.65pt;margin-bottom:.0001pt;line-height:68%'><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>The</span><span style='font-size:10.0pt;line-height:
  68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.25pt'> </span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif;
  letter-spacing:-.05pt'>end</span><span style='font-size:10.0pt;line-height:
  68%;font-family:"Arial Unicode MS",sans-serif;letter-spacing:-.2pt'> </span><span
  style='font-size:10.0pt;line-height:68%;font-family:"Arial Unicode MS",sans-serif'>user<span
  style='letter-spacing:-.25pt'> </span><span style='letter-spacing:-.05pt'>must</span><span
  style='letter-spacing:-.2pt'> </span><span style='letter-spacing:-.05pt'>scan</span><span
  style='letter-spacing:-.15pt'> </span>the<span style='letter-spacing:1.05pt'>
  </span><span style='letter-spacing:-.05pt'>Pairing</span><span
  style='letter-spacing:-.5pt'> </span><span style='letter-spacing:-.05pt'>and</span><span
  style='letter-spacing:-.45pt'> </span><span style='letter-spacing:-.05pt'>Connectivity</span><span
  style='letter-spacing:-.45pt'> </span><span style='letter-spacing:-.05pt'>barcode</span><span
  style='letter-spacing:2.55pt'> </span>again<span style='letter-spacing:-.25pt'>
  </span>to<span style='letter-spacing:-.25pt'> </span>re-connect<span
  style='letter-spacing:-.25pt'> </span>to<span style='letter-spacing:-.25pt'> </span>the<span
  style='letter-spacing:-.2pt'> </span>PC.</span></p>
  </td>
 </tr>
</table>