---
title: EC30 Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

##Overview

The Zebra EC30 Enterprise Companion is an ultra-compact, fully functional mobile computing device that's small enough to fit in the palm of a hand, worn on the wrist or strung around the neck like a smart badge. Industrial applications include retail, health care, warehousing, field service and maintenance, hospitality and many others. 

<img alt="image" style="height:250px" src="ec30_multi.png"/>
<img alt="image" style="height:250px" src="ec30_multi2.png"/>

**Key applications of the EC30** include basic barcode scanning, assisted selling and WLAN-based voice and data communications. Employees equipped with the EC30 can query product information, manage inventory, communicate with fellow staff members via PTT or other VoIP apps, receive and track tasks and much more.

#### App Compatibility
The EC30 is built on the same platform as Zebra's TC52 and TC57 mobile computing devices; applications written for Zebra's TC-series should run on the EC30. However, the EC30's 3-inch display is about half the size of most others, so apps often require adjustments to ensure a pleasant user experience. 

#### Deviations from TC-Series Devices

* **Split screen functionality disabled** due to smaller screen size
* **Capacitive navigation buttons are off-screen** to maximize screen space for apps
* **Height-adjusted soft input panel** (SIP) in portrait and landscape modes
* **4.7 mm minimum touch zone** (6 mm recommended)

-----

## EC30 Specifications

### Hardware
* **Outer dimensions**: `INFO NEEDED` L x W  about 1/2-inch thick
* **Weight**: Less than 4 oz. 
* **Display size**: 3.0 inches (diagonal) 
* **Max. resolution**: 480 x 854 pixels (FWVGA)
* **Screen density**: 320 dpi (xhdpi)
* **Battery**: 1200 mAh Li-Ion PowerPrecision+ 
* **Battery life**: Up to 10 hours continuous operation
* **Modalities**: Pocket, neck lanyard, vest clip, arm- or belt-mounted
* **Sensors**: 3-axis accelerometer, gyroscope, e-compass
* **Radios**: Bluetooth 5.0, Wi-Fi 802.11 `a,b,n,ac? INFO NEEDED` 
* **Scanner**: SE2100 1D/2D barcode scanner
* **Audio**: 3.5-inch audio jack, built-in speaker
* **Mechanical buttons**: Power, PTT, volume up/down, scan `INFO NEEDED?` 
* **Capacitive buttons**: BACK, RECENT, HOME 
* **Programmable buttons**: Scan, PTT, BACK, RECENT
* **Charging**: USB-C port, cradle (optional)

### Software

* **Operating System**: Android 8.1 (Oreo), upgradeable
* **[Mobility DNA](https://www.zebra.com/us/en/products/software/mobile-computers/mobility-dna.html)** including MX 9.2 and PTT Express
* **Google Mobile Services** (except China non-GMS model EC300K-2SA2ACN)
* **Supports [intent-based APIs](../../intents/cradle)** for Locking SmartCradle
* **`INFO NEEDED?`**

-----

## UX/UI Considerations

<!-- 
3.0 Inch Diagonal
Screen Size 480 x 854 (FWVGA)
320 DPI (xhdpi) – Typical Mobile Phones use this DPI with higher screen resolution than this.
Most Common for 480 x 854 resolution is 240 DPI
320 DPI has the best end user experience for EC30
Physical Navigation buttons provides additional Screen Real Estate.   

Spilt screen functionality disabled due to small screen size.
Height adjusted SIP for optimized screen real estate for both portrait and landscape
6 mm recommended touch zone (4.7 mm minimum)
-->
Old but well-cited research (hoober piece)
(see uxmatters.com and/or Steven Hoober for stats and stuff)
https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php



### Making New Apps

Leverage
Use Google Material Design as a foundation, follow the Material Design interaction paradigms.
Artboard
In Sketch, use 240 W x 427 H. (EC30 screen resolution is FWVGA 480x854 px.) 
Margins & Spacing
Most measurements should align to an 8dp grid. Smaller components, such as iconography and typography, can align to a 4dp grid. In certain cases, it is encouraged to increase padding to 10dp, even 16dp to achieve a less crowded feeling. 
Typography
Size 14 (Body 2) is appropriate for body copy. The smallest font size is Size 12 (Caption) 
Touch Zone
80dp (at least on one dimension) is ideal, especially if the touch zone is close to the screen edges. 60dp is recommended for general purpose. 48dp would be the minimum size limit. For example, a bottom action bar would contain only 3 icons across the EC30 screen bottom if following the ideal size (80dp) recommendation. 

Keeping Things Comfortable
Produce some paper prototypes to stimulate EC30 screen (AA physical dimension is 37 x 67mm) to check the UI design. Be mindful about cramping more information and functions. Less is better for EC30.
Layouts
Better to follow ConstraintLayout (more robust than relative layout) and scrollable views
Density independent pixels (dp)
Use dip/dp values for element sizes and should not use px.



### Porting Existing Apps 
Apps created for Zebra's TC-series devices can be expected to execute perfectly well on the EC30. However, UIs designed for the 5+ inch TC-series displays often present usability issues when displayed on the EC30's 3-inch screen. These can include truncated screens or controls, buttons too small to touch and/or text too small to read.Zebra recommends starting with the steps below when migrating apps to the EC30. 

#### Start Here `INFO NEEDED` 
1. Install the app to be migrated on an EC30 device and launch it. 
2. Operate the app through all use cases and paths.
3. Identify and list UI issues. 
4. Modify the app's UI to address the issues.   
5. Repeat Steps 1&ndash;4 until all UI issues are resolved.


##### 
Also note that apps designed for TC-series devices might contain functionality not supported on the EC30, such as WWAN communication. To avoid app malfunctions, such features should be removed from the EC30-migrated version 

Feature and/or Content Prioritization
App designed for TC series may contain more features that may not be the core use case for EC30. Therefore, consider re-prioritize the top features and/or content of your app for EC30.

##### Information Density, Task Flow
While a UX might be improved by displaying all info, app functions and user inputs on a single screen, the EC30's small screen make that unlikely. It's therefore advisable to implement the most important functions and information for each user task on sequential screens and "tuck away" supplementary information in a menu, "info" button or other access control. 

<!-- ##### Break Up Existing Task Flow
With a device that has a bigger size screen, users may be able to finish their task within a single screen that can capture all the needed users’ inputs. For EC30, such single screen may be needed to break down as a series of screens to ensure usability and capture all necessary inputs to complete the same task. 
 -->

##### Think Beyond One App
Part of an EC30 app's UX might live outside of the app itself. It is necessary to take a holistic view on how your application interacts with other EC30 either hardware or software components. For example, you may deploy scan-to-login method to eliminate the need for users to use the touch keyboard to enter a complex password. You may want to provision EC30 to auto-launch your application to simplify the start-of-a-workday process. You may want to turn on certain Android built-in accessibility features by default to enhance usability.
Alternative Layouts
Better to use alternative layouts if the app being ported from a higher resolution device to EC30. consider changing Image resources as higher resolution resource may not fit properly

### Forcing Landscape
(image from slide 9)

Force landscape text entry to provide better keyboard interaction to the user
Make sure activity class implements following listners for touch and editor actions
View.OnClickListener
View.OnTouchListener
TextView.OnEditorActionListenerhighlighted
Override onClick(), onTouch() and onEditorAction() APIs. 
Set all the three listeners for all the text fields on the UI and set hint for them.
Code Sample Can be provided for this.

### Drop-down Menus

(slide 10)

Import custom drop downs to your project and use them in your layout.
Use setItemList API to Provide the list of items
Use getSelectedItem API to get the selected item text.

(code samples are image files)

also, left and right nav combo, spinner...?

### Embedded Tools

(image on slide 11)

To aid in development we have provided a App, launched by invoking the power menu, to change screen DPI value and font scaling

Plan is to enable this feature when developer options are selected at releasing. This will prevent regular usage.

### Small-screen Restrictions

EC30 falls to small screen device category.
This prevents some application running on this device as some feature rich applications sets the “smallScreens” attribute to false. 
Make sure this property is set to true in the manifest file of your application.


    <supports-screens 
                      android:resizeable=["true"| "false"]
                      android:smallScreens=["true" | "false"]
                      android:normalScreens=["true" | "false"]
                      android:largeScreens=["true" | "false"]
                      android:xlargeScreens=["true" | "false"]
                      android:anyDensity=["true" | "false"]
                      android:requiresSmallestWidthDp="integer"
                      android:compatibleWidthLimitDp="integer"
                      android:largestWidthLimitDp="integer“
    /> 


## Power Management

EC30 has a 1200 mAh battery.
Proper Power Management is critical to preserving the battery life for a full shift
Applications should be fully optimized for Doze Mode and App Standby.
Pay attention to Doze Restrictions (https://developer.android.com/training/monitoring-device-state/doze-standby)
Make sure Apps are efficiently managing activities during doze maintenance window
Do not disable Doze mode through MX
Avoid whitelisting an app for battery optimization.
Test your app for Doze mode 

Major source battery drain is the display hence set bit aggressive screen timeouts such as 10-15 seconds
Use Scan Trigger or PTT wake up keys to quickly wakeup the device.
Set brightness of the screen appropriately to avoid unnecessary battery drain.

-----

## Also See

https://material.io/
https://developer.android.com/guide/practices/screens_support
https://developer.android.com/training/multiscreen/screensizes
https://developer.android.com/training/multiscreen/screendensities

https://developer.zebra.com/community/home/blog/2018/10/26/keeping-your-application-running-when-the-device-wants-to-sleep
https://developer.android.com/topic/performance/power/



