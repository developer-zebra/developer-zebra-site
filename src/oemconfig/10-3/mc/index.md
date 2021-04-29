---
title: Zebra Managed Configurations
layout: guide.html
product: OEMConfig
productversion: '10.3'
menu:
  items:
    - title: About
      url: /oemconfig/10-3/about
    - title: Setup
      url: /oemconfig/10-3/setup
    - title: FAQs
      url: /oemconfig/10-3/faq
    - title: Managed Configurations
      url: /oemconfig/10-3/mc
    - icon: fa fa-search
      url: /oemconfig/10-3/search

---

<a id="steps.step.displayStep">


-----


## Display Configuration

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a>
</font>
</span> <br><br>


Use this *Sub-group* to configure Timeout, Blanking Mode, Stay Awake, Signal, Polarity, Debounce Delay, Deprecated Rotation Mode, Rotation Mode, Set Display Size, Set Font Size, Backlight Adaptive Brightness, and Brightness.


**Detail Information:**

- Key = displayStep

- Type = bundle


<a id="steps.step.displayStep.displayTimeout">

### Timeout

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select the amount of inactivity, in seconds, after which the device will timeout and automatically turn the Display Screen off.


A given device may not support all available values. In the event that a selected value is not supported on a given device, the smallest larger value that is supported will be used or, if no larger value is supported, the largest smaller value that is supported will be used.


**Detail Information:**

- Key = displayTimeout

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;15 seconds&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 seconds&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 minute&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 minutes&nbsp;</small></i></b></td><td><small>&nbsp;120&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5 minutes&nbsp;</small></i></b></td><td><small>&nbsp;300&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;10 minutes&nbsp;</small></i></b></td><td><small>&nbsp;600&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 minutes&nbsp;</small></i></b></td><td><small>&nbsp;1800&nbsp;</small></td></tr></table>


**Support Information:**

- Supported from: MX 4.3.


<a id="steps.step.displayStep.displayBlankingMode">

### Blanking Mode

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select whether the Display will automatically Blank (display nothing) on a device.


When a Device User is operating a vehicle with a vehicle-mounted device, it is often advisable, for safety or regulatory reasons, to prevent the Device User from interacting with the device or being distracted by the Display of the device, while the vehicle is in motion. *Display Blanking Mode* provides the ability to configure the device such that the Display Screen will automatically be Blanked (display nothing) when an electrical signal (such as one attached to the accelerator) is detected that indicates that the vehicle is in motion.


At present, *Display Blanking Mode* is supported only on VC8x and similarly equipped vehicle-mounted Zebra mobile computers running Android.


- If the value ***Never Blank*** is selected, *Display Blanking Mode* will be turned off and hence automatic Display Blanking will never occur.


- If the value ***Blank When Triggered by Signal*** is selected, *Display Blanking Mode* will be turned on and hence the Display will be automatically Blanked and you must also specify all of the following:


    - **Signal** - to specify the signal that will be used to activate automatic Display Blanking.


    - **Polarity** - to specify the polarity of the signal specified via **Signal** that will be used to activate automatic Blanking.


    - **Debounce Delay** - to specify the time that will be used to debounce the signal specified via **Signal**.


**Detail Information:**

- Key = displayBlankingMode

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never Blank&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blank When Triggered by Signal&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 7.1.


<a id="steps.step.displayStep.displayStayAwake">

### Stay Awake

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select whether the Display will *Stay Awake* (prevent automatic time out that turns the Display Screen off) when the device is connected to external power.


When a Device User is operating a vehicle with a vehicle-mounted device, the device may be continuously receiving power from the vehicle power supply, rather than running off its own internal battery. The Display Screen timeout, configured via **Timeout**, which is generally used to increase battery life, may add little value in such situations. It may therefore be desirable to configure the device to *Stay Awake* and thus prevent it from timing out and turning the Display Screen off, so long as the device is connected to external power.
- If the value ***Off*** is selected, the Display will NOT *Stay Awake* and hence the device will time out and automatically turn the Display Screen off, when the Display Screen timeout, configured via **Timeout** expires, even if the device is connected to external power.
- If the value ***On*** is selected, the Display will *Stay Awake* and hence the device will not time out and will not automatically turn the Display Screen off, so long as the device is connected to external power, even if the Display Screen timeout, configured via **Timeout** expires.


**Detail Information:**

- Key = displayStayAwake

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 7.2.


<a id="steps.step.displayStep.displayBlankingModeSignal">

### Signal

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Input 1*** is selected, on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 1 will be used to trigger automatic Display Blanking.
- If the value ***Input 2*** is selected, on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 2 will be used to trigger automatic Display Blanking.


A common configuration to support *Display Blanking Mode* would be to connect the Request to Send (RTS) output signal of the selected Serial Port to the Clear To Send (CTS) input signal on the same serial port, via a switch, such as one activated by the vehicle accelerator. When the switch is activated, the output RTS output signal would be fed back into the CTS input signal and detected to trigger automatic Display Blanking.


**Detail Information:**

- Key = displayBlankingModeSignal

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Input 1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Input 2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 7.1.


<a id="steps.step.displayStep.displayBlankingModeSignalPolarity">

### Polarity

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select the Polarity of the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Blank screen when signal goes inactive (OFF)*** is selected, the automatic Display Blanking will occur when the specified signal is detected as going inactive (OFF). This choice would be used in specialized configurations where the signal to be used to trigger automatic Display Blanking has reverse polarity.
- If the value ***Blank screen when signal goes active (ON)*** is selected, the automatic Display Blanking will occur when the specified signal is detected as going active (ON). This is the most common choice for the common configuration of connecting RTS and CTS via a switch.


**Detail Information:**

- Key = displayBlankingModeSignalPolarity

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Blank screen when signal goes inactive (OFF)&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blank screen when signal goes active (ON)&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 7.1.


<a id="steps.step.displayStep.displayBlankingModeSignalDebounceDelay">

### Debounce Delay

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Enter the Debounce Delay that will be used for the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.


The value specified should be in milliseconds and will be used as a delay following a change in signal state for changing the state of Display Blanking. This is useful to avoid spurious or repetitive changes in Display Blanking state as a result of bounce or chatter on the signal used to trigger automatic Display Blanking. The value specified should be in the range of 250 milliseconds (one quarter of a second) to 32767 milliseconds (more than 32 seconds), which should be adequate to handle most situations.


**Detail Information:**

- Key = displayBlankingModeSignalDebounceDelay

- Type = integer


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 7.1.


<a id="steps.step.displayStep.setMirrorAutorotate">

### Deprecated Rotation Mode

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select whether the content presented on the device display will be automatically rotated, based on the accelerometer, to match the physical orientation of the device.


*This managed configuration is deprecated.*

*It is recommended to use* **Rotation Mode** *instead to control device display rotation.*


**Detail Information:**

- Key = setMirrorAutorotate

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Lock to Current&nbsp;</small></i></b></td><td><small>&nbsp;Manual&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Automatic&nbsp;</small></i></b></td><td><small>&nbsp;Auto&nbsp;</small></td></tr></table>


**Support Information:**

- Supported on Operating System(s): Pie.


- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 10.1.


<a id="steps.step.displayStep.displayRotationMode">

### Rotation Mode

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select whether the content presented on the device display will be automatically rotated, based on the accelerometer, to match the physical orientation of the device.


- If ***Lock to Current*** is selected, the content presented on the device display will remain locked in whatever orientation it was in at the time this setting was changed from ***Automatic*** to ***Lock to Current***.


- If ***Automatic*** is selected, the content presented on the device display will be automatically rotated, based on the accelerometer, to match the physical orientation of the device.


Notes:


- No method is currently provided to set the orientation when a device is locked or being locked. Locking results are unpredictable if performed in conditions under which the physical orientation of the device is not known (e.g. while the device is in use). For best results, locking should be performed when the device is in a known orientation (such as when docked or in a charging cradle).


- The ***Lock to Current*** setting can be overridden by an application that's coded to do so. This can be useful if the app functions only in a particular orientation or if that orientation provides a better user experience.


**Detail Information:**

- Key = displayRotationMode

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Lock to Current&nbsp;</small></i></b></td><td><small>&nbsp;Manual&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Automatic&nbsp;</small></i></b></td><td><small>&nbsp;Auto&nbsp;</small></td></tr></table>


**Support Information:**

- Supported from: MX 10.1.


<a id="steps.step.displayStep.setDisplaySize">

### Set Display Size

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select the system display size to one of several pre-defined sizes.


**Detail Information:**

- Key = setDisplaySize

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Small&nbsp;</small></i></b></td><td><small>&nbsp;SMALL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;DEFAULT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Large&nbsp;</small></i></b></td><td><small>&nbsp;LARGE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Larger&nbsp;</small></i></b></td><td><small>&nbsp;LARGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Largest&nbsp;</small></i></b></td><td><small>&nbsp;LARGEST&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 9.2.


<a id="steps.step.displayStep.setFontSize">

### Set Font Size

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select the system font size


**Detail Information:**

- Key = setFontSize

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Small&nbsp;</small></i></b></td><td><small>&nbsp;0.85&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;1.0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Large&nbsp;</small></i></b></td><td><small>&nbsp;1.15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Largest&nbsp;</small></i></b></td><td><small>&nbsp;1.3&nbsp;</small></td></tr></table>


**Support Information:**

- NOT supported on Device(s): TC20 and TC25.


- Supported from: MX 9.2.


<a id="steps.step.displayStep.displayBacklightAdaptiveBrightness">

### Backlight Adaptive Brightness

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Select whether the screen brightness will be set automatically based on the environment. This setting is equivalent to the adaptive brightness check box found in the settings app.


**Detail Information:**

- Key = displayBacklightAdaptiveBrightness

- Type = string

<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>


**Support Information:**

- Supported from: MX 10.2.


<a id="steps.step.displayStep.displayBacklightBrightness">

### Brightness

<span class="breadcrumbs">
<font size="2">
&nbsp;&nbsp;
<a href="#steps">Transaction Steps</a> &nbsp;>&nbsp;
<a href="#steps.step">Transaction Step</a> &nbsp;>&nbsp;
<a href="#steps.step.displayStep">Display Configuration</a>
</font>
</span> <br><br>


Enter the Backlight Brightness when the value ***Off*** is selected for **Backlight Adaptive Brightness**.


**Detail Information:**

- Key = displayBacklightBrightness

- Type = integer

