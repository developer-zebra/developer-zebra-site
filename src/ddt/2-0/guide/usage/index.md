---
title: Using Diagnostic Tool
layout: guide.html
product: Diagnostic Tool
productversion: '2.0'
---

## Overview
Diagnostic Tool supports two modes of operation:
1. **Admin mode -** The administrator can access the app settings and modify test configurations.
2. **User mode -** The user is restricted to only run the tests; there is no access to the app settings nor test configurations. This is the default mode.

## Launch the App
Run Diagnostic Tool using one of the following methods: 
1. **Manually using the User Interface** - The user launches Diagnostic Tool and runs the tests manually. See [User Interface](#userinterface) section below. 
2. **Remotely with an EMM (Enterprise Mobility Management) system** - Launch Diagnostic Tool in the background and generate a log using intent `android.intent.SES.Runtests`. Generate log file `/sdcard/SelfDiagnostics/SelfDiagnosticLogs.ini` using one of the following commands based on the Android version: <br>
 a. For **Android Nougat 7.0 or earlier** use command: 
 `adb shell am broadcast -a “android.intent.SES.RunTests”`. 
 Results:
 <img style="height:70px" src="intent1.png"/>
 b. For **Android Oreo 8.0 or later** use command: 
 `adb shell am broadcast -a android.intent.SES.RunTests -p com.symbol.androiddiagnostics`. 
 Results:
 <img style="height:70px" src="intent2.png"/> 


## User Interface
When launching the app for the first time, the main screen displays the tests available to run:

<img style="height:400px" src="mainscreen.png"/>

_Main screen_
<br/>
If tests have already been conducted, the test name is followed by the date when the last test was conducted.
<br />
<br />

Tap **Run Tests** from the main screen to execute all the tests. Test execution is based on the tests selected in the **Configure Tests** screen. Once the test is initiated, the user is prompted to perform additional actions during test execution of the following: Scanner Test, Button Test, Touch Screen Test, and Audio Test.  It is recommended for all tests to be performed while the device is in normal use, i.e. not docked in a cradle or connected via USB to a computer. Once testing is complete, the results are displayed:
<br />
&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testpassed.png"/><b>Pass -</b> Test executed and passed. Result passed test criteria.  

&nbsp;&nbsp;&nbsp;<img align="left" style="height:25px" src="testfailed.png"/><b>Fail -</b>Test executed and did not meet the test criteria.  
 
&nbsp;&nbsp;&nbsp;<img align="left" style="height:20px" src="testinfo.png"/><b>Information -</b>Data retrieved and displayed.
<br /><br />
Alternatively, individual tests can be performed by tapping on the individual test category and then tapping <b>Run Tests</b>.

### Scanner Test
The user is prompted to scan a barcode. Results:
* **Scanner Test –** displays barcode data
* **Label Type –** displays barcode type or decoder scanned

### Button Test
The user is prompted to press the hard buttons on the device: scan trigger (left or right), push-to-talk, volume up, and volume down. Results:
* **Button Test –** _test successful_, _test failed_, or _test timed-out_

### Touch Screen Test
The user is prompted to touch each grid box on the screen
* **Touch Screen Test –** _test successful_, _test failed_, or _test timed-out_

### Bluetooth Tests
Checks whether the Bluetooth radio is operable and returns Bluetooth related information.  Results:
* **Name –** displays the Bluetooth name
* **Radio Power Cycle –** _test successful_ or _test failed_. The state of the radio is preserved prior to this test.
* **Functional/Non-functional –** _functional_ or _non-functional_
* **Discoverable/Connectable -** _connectable_, _discoverable_, or _none_

### Wifi Tests
Checks for operation of the WiFi radio and returns WiFi related information.  Results:
* **MAC Address –** _valid_ or _invalid_
* **Ping Tests –** displays _ping failed_ or the time (in ms or sec) it takes to ping the specified address if successful. Failure occurs if the WiFi is not connected to any network. The state of the radio is preserved prior to this test. If test is successful, the following values are displayed:
     * **strength –** displays signal strength
     * **essid –** displays ESSID
     * **ip –** displays IP address
     * **bssid –** _valid_ or _invalid_
     * **speed –** displays connection speed
* **Radio Power Cycle –** _test successful_ or _test failed_

### Battery Tests
Checks the battery status and returns battery related information.  Results:
* **Part number –** displays the part number
* **Serial number –** displays the serial number
* **Model number –** displays the model number
* **Decommission status –** displays the health of the battery as:
     * **Normal –** the battery is in a normal state of health
     * **Decommissioned –** the battery has reached the threshold designated, currently 400 charge cycles, indicating that the battery should be replaced with a new one soon.
     * **Status unknown –** indicates a problem retrieving the battery health information
* **Voltage –** displays the voltage
* **Current –** displays the current
* **Temperature –** displays the temperature

### WWAN Tests
Checks the operation of the WWAN radio and returns related WWAN information.  Results:
* **Sim State –** Airplane mode must be disabled and mobile data must be enabled to pass.  Displays one of the following values:
     * **Present –** sim card is present
     * **Absent –** sim card is not present
* **Voice State -** displays one of the following values:
     * **Voice in service**
     * **Voice out of service**
     * **Voice Emergency only**
     * **Voice power off**
     * **Unknown voice**
* **Data State –** displays one of the following values:
     * **Data connected**
     * **Data disconnected**
     * **Data connecting**
     * **Data suspended**
     * **Unknown data**
* **WAN Type –** displays the network type, such as: _LTE, 2G, 3G, 4G,_ or _Not Available_
* **Signal Strength –** displays one of the following:
     * **Not applicable -** SIM card absent
     * **Unknown –** device could be in airplane mode
     * **Signal strength -** in dBm
* **Phone Number –** _valid_ or _invalid_, depending on whether or not the phone number is exposed by the service provider.
* **Device ID –** _valid_ or _invalid_, depending on whether or not the device ID is exposed

### Audio Test
Checks for operation of the device microphone and speaker.  Results:
* **Audio Test –** _test successful_ or _test failed_

<br>
<br>
<br>

------

## See Also

* [About Diagnostic Tool](../about)
* [Test Criteria](../criteria)
* [Configuration](../configuration)

