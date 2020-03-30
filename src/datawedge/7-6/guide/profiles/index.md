---
title: DataWedge Profiles
description: DataWedge functionality is based on Profiles. Each Profile contains options, also known as plug-ins, for determining how the data is acquired (input), processed (data formatting) and delivered to the app (output). A single Profile can be associated with one or more activities or apps.  However, an activity or app can be associated only to a single Profile. In addition to the core functionality with Input, Processing, and Output, optional Profile specific configuration settings are categorized under Utilities, which can be associated with apps or controlled at runtime. Details about functionality and usage of each of the Input, Processing, Output and Utilities options can be found in the links below. By default, Profile0 is provided as a generic Profile that can take effect for foreground apps that have not yet been associated to any Profiles. This provides the ability to quickly acquire data prior to taking action on setting any configurations. For more information about how Profiles work, see the Architecture Overview page.
layout: list-apis.html
product: DataWedge
productversion: '7.6'
automenu:
  items:
    - title: About Profiles
      items:
        - title: Architecture Overview
          url: ../overview
        - title: Managing Profiles
          url: ../createprofile
    - title: Input
      items:
        - title: Barcode
          url: ../input/barcode
        - title: Mag-stripe Reader (MSR) 
          url: ../input/msr
        - title: Radio-frequency Identification (RFID) 
          url: ../input/rfid
        - title: Serial/USB Port
          url: ../input/serial
        - title: SimulScan
          url: ../input/simulscan
        - title: Voice
          url: ../input/voice
    - title: Processing
      items:
        - title: Advanced Data Formatting (ADF)
          url: ../process/adf
        - title: Basic Data Formatting (BDF) 
          url: ../process/bdf
    - title: Output
      items:
        - title: Intent
          url: ../output/intent
        - title: Internet Protocol (IP)
          url: ../output/ip
        - title: Keystroke
          url: ../output/keystroke

    - title: Utilities
      items:
        - title: Data Capture Plus (DCP)
          url: ../input/dcp
        - title: Enterprise Keyboard Configuration
          url: ../utilities/ekb

---

<table class="facelift" align="center" style="width:80%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th >Plugin</th>
    <th>Type</th>
    <th>Main Options (not all-inclusive)</th>
  </tr>

  <tr>
    <td rowspan="5">Input</td>
    <td>Barcode</td>
	  <td>Select scanner: camera, 1D or 2D imager, Bluetooth scanner, etc.<br>Enable/disable hardware trigger<br>Select decoders<br>Decoder params (configure options for each decoder)<br>Reader params (configure options for the scanner selected)<br>Scan params (configure scanner specific decoding feedback)</td>
  </tr>
  
  <tr>
    <td>Magnetic Stripe Reader</td>
	  <td>(Data output is acquired through intents, which DataWedge automatically parses and places into specific tags to be handled by the app)</td>
  </tr>

  <tr>
    <td>RFID</td>
	  <td>Enable/disable hardware trigger<br>Configure reader settings</td>
  </tr>

  <tr>
    <td>Serial/USB</td>
	  <td>Serial port configuration</td>
  </tr>

  <tr>
    <td>Voice</td>
	  <td>Data capture start option: start phrase or PTT button<br>Specify data capture start phrase<br>Specify data capture end phrase<br>Set timeout for data capture<br>Configure voice commands<br>Configure data type returned: alpha, numeric, any<br>Offline speech recognition<br>Validation window (validate captured data allowing to edit if needed)</td>
  </tr>

  <tr>
    <td rowspan="2">Process</td>
    <td>Basic Data Formatting</td>
	  <td>Add prefix<br>Add suffix<br>Send as hex<br>Append TAB key<br>Append ENTER key<br>Create custom rule with specific criteria and actions to process acquired data</td>
  </tr>

  <tr>
    <td>Advanced Data Formatting</td>
	  <td>Create custom rule with specific criteria and actions to process acquired data</td>
  </tr>

  <tr>
    <td rowspan="3">Output</td>
    <td>Keystroke</td>
	  <td>Inject action key in place of the character: None, Tab, Line feed, Carriage return<br>Send keystrokes as key events<br>Send certain key events as a string<br>Set key event delay</td>
  </tr>

  <tr>
    <td>Intent</td>
	  <td>Intent action<br>Intent category<br>Intent delivery</td>
  </tr>

  <tr>
    <td>Intent Protocol</td>
	  <td>Enable/disable Remote Wedge<br>Set protocol: TCP or UDP<br>IP address<br>Port number</td>
  </tr>

</table>
<br />
<br />
<img src="./datawedge_plugins.png" />