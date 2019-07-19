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
_Click images to enlarge_

**Key applications of the EC30** include basic barcode scanning, assisted selling and WLAN-based voice and data communications. Employees equipped with the EC30 can query product information, manage inventory, communicate with fellow staff members via PTT or other VoIP apps, receive and track tasks and much more.

#### App Compatibility
The EC30 is built on the same platform as Zebra's TC52 and TC57 mobile computing devices; applications written for Zebra's TC-series should run on the EC30. However, the EC30's 3-inch display is about half the size of most others, so apps often require adjustments to ensure a pleasant user experience. 

Zebra recommends reading Google's [screen compatibility overview](https://developer.android.com/guide/practices/screens_support) and guidelines for adapting apps to [support different screen sizes](https://developer.android.com/training/multiscreen/screensizes). These and other useful links can be found in the [Also See](#alsosee) section at the bottom of this document.

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
* **Screen dimensions**: 1.5 inches (37 mm) x 2.6 inches (67 mm)
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

According to [research published in 2017](https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php) by [UX Matters](https://www.uxmatters.com/about-us/#mission-anchor), a large majority of people use only a thumb for input, and fewer than half hold the phone with one hand. Research also showed that device-holding position can vary for an individual depending on needs of the app, size, shape and orientation of the device and the type and context of the input required. 

<img alt="image" style="height:250px" src="how_devices_are_held.png"/>
_**Image source**: UXmatters.com_
<br>

### Hand-holding Modes
* **75% use one thumb** to tap the screen.
* **Fewer than 50% use one hand** to hold the device.
* **36% use two hands** to hold device for greater reach and stability.
* **10% cradle device in one hand** and tap a finger of the other hand.
* **Holding position varies** based on device size and orientation, app context, input requirements and other factors.
* **Holding position can change multiple times** during any app interaction.     

### Tap Accuracy
UX Matters found that people prefer to tap on and view content in the center of the screen. Tap accuracy varies widely depending on screen location, something to keep in mind when positioning an app's touch zones. 

<img alt="image" style="height:250px" src="accuracy_grid.png"/>
_**Image source**: UXmatters.com_

-----

## Making New Apps

**Zebra recommends using Google Material Design** `LINK NEEDED` as a foundation for starting new apps. The guidelines listed below also might be helpful as a starting point when building UI screens from scratch. 

> **What's a 'dp?'** <br>
Modern UI tools use the term "density-dependent pixel" (dp) when referring to pixel-based screen spacing relative to a 160 dpi screen. This allows for the wide variety of screen densities available today. For example, 1dp (pronounced "one dip") is equal to one pixel on a 160 dpi screen and two pixels on a 320 dpi screen. 

### User Interactions 
When planning the app's Artboard, the following specs and guidelines might be helpful. 

* **Native resolution** of the EC30 is 480 x 854 pixels (WxH). 
* **In Sketch `DEFINITION OR LINK NEEDED`**, Zebra recommends using a resolution of 240 x 427 pixels. 
* **For margins and spacing**, most measurements should align to an 8dp grid. For iconography, typography and other small components, use a 4dp grid. To avoid an "overcrowded" UI, set padding at 10&ndash;16dp. 
* **Font size** for body copy should be 14pt, (Body 2 **`please define`**) and 12pt for captions. **No text should be smaller than 12pt**.  
* **Touch Zones** such as buttons should in most cases be set to 60dp (in at least one dimension) for most screen regions, and 80dp in areas close to screen edges. However, this recommendation is flexible since using the 80dp spec for a button bar across the bottom of the EC30 screen could contain only three buttons. **Touch zones should be no less than 48dp**. 
* **Produce paper prototypes** to simulate an EC30 screen and visualize the app's UI design. The EC30 screen measures about 1.5 inches (37 mm) x 2.6 inches (67 mm).  to check the UI design. Be mindful about cramping more information and functions. Less is better for EC30.
* **For Layouts** it's usually better to implement a ConstraintLayout, which perform better and are more user friendly than relative layouts and scrollable view ports. 

-----

## Porting Existing Apps 
Apps created for Zebra's TC-series devices can be expected to execute perfectly well on the EC30. However, UIs designed for the 5+ inch TC-series displays often present usability issues when displayed on the EC30's 3-inch screen. These can include truncated screens or controls, buttons too small to touch and/or text too small to read.Zebra recommends starting with the steps below when migrating apps to the EC30. 

### Quick Steps
`INFO or CONFIRMATION NEEDED` 
1. **Install and launch the app to be migrated** on an EC30 device. 
2. **Operate the app through all use cases** and paths.
3. **Identify and list UI issues**. 
4. **Modify the app's UI** to address the issues.   
5. **Repeat Steps 1&ndash;4** until all UI issues are resolved.

### Compatibility
Keep in mind that apps designed for TC-series devices might contain functionality&ndash;WWAN communications, for example&ndash;not supported on the EC30. To avoid app malfunctions, such features should be removed from the EC30-migrated version. 

TC-series apps also might implement use cases or journeys that don't apply to the EC30. It's therefore a good idea to carefully consider the EC30-specific use cases and prioritize the top features and/or content of the EC30 version of the app.

### Info Density, Task Flow
While a UX might be improved by displaying all info, app functions and user inputs on a single screen, the EC30's small screen make that unlikely. It's therefore advisable to implement the most important functions and information for each user task on sequential screens and "tuck away" supplementary information in a menu, "info" button or other access control. 

<!-- ##### Break Up Existing Task Flow
With a device that has a bigger size screen, users may be able to finish their task within a single screen that can capture all the needed users’ inputs. For EC30, such single screen may be needed to break down as a series of screens to ensure usability and capture all necessary inputs to complete the same task. 
 -->

### Small-screen Tips
Part of an app's UX might live outside of the app itself. Try to take a holistic view regarding how the EC30 app interacts with other devices or software components. For example, by implementing scan-to-login, an EC30 app could eliminate the need to use the soft input panel for logging in. 

#####UX Simplification Tips:

* **Implement scan-to-login** to avoid typing user names and passwords
* **Set app to auto-launch** to quicken the start-of-workday process 
* **Consider enabling [Android accessibility](https://support.google.com/accessibility/android/answer/6006564?hl=en) features**:
 * **Voice Access** allows control with spoken commands
 * **TalkBack** combines touch with spoken input 
 * **Select to Speak** allows user to select when spoken output occurs
 * **Magnification** can temporarily zoom areas of the screen


### Alternative Layouts
Since it's likely that the EC30-targeted app is being ported from a device with higher resolution than the EC30's 480 x 854 pixels, it's probably better to create all new UI layouts than to squeeze existing ones onto a smaller screen. 

#### Force Landscape
If text entry is required by an EC30 app, it's often better to force the device to landscape mode and present the landscape-oriented SIP. 

<img alt="image" style="height:250px" src="force_landscape.png"/>
_Click image to enlarge_

To force landscape-mode text entry, ensure the activity class implements the following listeners for touch and editor actions: 

* `View.OnClickListener`
* `View.OnTouchListener`
* `TextView.OnEditorActionListenerhighlighted`

Set all the three listeners for all the text fields in the UI and set a hint for them. Also, be sure to override `onClick()`, `onTouch()` and `onEditorAction()` methods. 

`^^^^ MORE INFO NEEDED FOR ABOVE...? ^^^^`  

"Code Sample Can be provided for this." 
`-->> SAMPLE CODE NEEDED <-- `

### Input Alternatives

To avoid manual text input through the SIP, implement drop-down "spinner" menus or "left-right navigators" whenever possible. Use the `setItemList` API to provide the list of items and the `getSelectedItem` API to get the text for the selected item text. `MORE INFO NEEDED?`

<img alt="image" style="height:250px" src="spinner_LR_nav.png"/>
_Click image to enlarge_

#### Drop-down Spinner
    <com.zebra.dropdown.DropDown 
        android:id="@+id/cdp1" 
        android:layout_width="300dp" 
        android:layout_height="40dp" 
        android:layout_marginTop="30dp" 
        android:layout_marginLeft="10dp" 
        app:dd_gravity="CENTER" 
        app:layout_constraintLeft_toLeftOf="parent" 
        app:layout_constraintTop_toTopOf="parent"
    /> 

#### Left-Right Navigator
    <com.zebra.selectionview.CustomSelectionView 
        android:id="@+id/csv1" 
        android:layout_width="300dp" 
        android:layout_height="40dp" 
        android:layout_marginTop="30dp" 
        android:layout_marginLeft="10dp" 
        app:csv_gravity="CENTER" 
        app:layout_constraintLeft_toLeftOf="parent" 
        app:layout_constraintTop_toBottomOf="@+id/cdp1"
    /> 

### Embedded Tools

The EC30 implements embedded tools to simplify changes to display size and font scaling. Accessed through the "Power-off" menu, the tools are designed to aid developers and users to easily improve the UX for their individual use. 

<img alt="image" style="height:250px" src="embedded_apps.png"/>
_Click image to enlarge_

For organizations that wish to prevent user access to these settings, the tools are enabled only when developer options are also enabled on the device. 

### Remove Small-screen Restriction

`PLEASE CHECK AND CONFIRM THE FOLLOWING:` 

The EC30 falls to the category of small-screen devices, and a migrated app will fail to launch if the “smallScreens” attribute in its Android manifest file is to "false." To prevent this issue in the migrated app, the smallScreens attribute must be "true" in the app's manifest:

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

-----

## Power Management

The EC30's 1200 mAh Li-Ion PowerPrecision+ battery is rated to provide a full 10 hours of continuous operation. However, battery performance varies greatly depending on device settings, especially those of the display panel and backlight. **To maximize operation of EC30 devices while on battery power, Zebra recommends the following power-management best practices**.

#####To Prolong Battery Life:

* Set screen brightness to minimum level for use
* Set a short screen timeout interval (10-15 seconds)
* Set the device to wake after pressing scan trigger or PTT button
* Optimize all EC30 apps for Doze and App Standby
* Observe [Doze Restrictions](https://developer.android.com/training/monitoring-device-state/doze-standby)
* Ensure apps are managing activities during the Doze maintenance window
* Do not disable Doze mode through MX
* Do not "whitelist" an app for battery optimization (prevents Doze mode)
* Test app to ensure proper operation when entering/exiting Doze mode 

-----

## Also See

* [Google Material Design](https://material.io/) | Google app design tool
* [Screen compatibility overview](https://developer.android.com/guide/practices/screens_support) | Google development community 
* [Support different screen sizes](https://developer.android.com/training/multiscreen/screensizes) | Google development community 
* [Support different pixel densities](https://developer.android.com/training/multiscreen/screendensities) | Google development community
* [Optimize for battery life](https://developer.android.com/topic/performance/power/) | Google development community
* [Keeping an app running when it wants to sleep](https://developer.zebra.com/community/home/blog/2018/10/26/keeping-your-application-running-when-the-device-wants-to-sleep) | Zebra engineering

