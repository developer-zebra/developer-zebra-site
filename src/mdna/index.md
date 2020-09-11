---
title: Mobility DNA
subtitle: EXPERIENCE A NEW BREED OF MOBILITY
image: image-hero.jpg
copy: What’s in the body of an enterprise mobile computer matters. That’s why Zebra engineered Mobility DNA, the genetic code that gives Zebra mobile computers distinct enterprise capabilities. Its unique software ecosystem transforms Android--the world’s most popular consumer operating system--into an enterprise-ready force. Now the pains common to other enterprise mobility platforms disappear, making application management simpler, integration problem-free and operations a powerhouse of productivity.
layout: whatsnew.html
product: Mobility DNA
productversion: 
main-heading: More New Mobility DNA Features
features-heading: Latest Mobility DNA Features
features:
 - image-location: right
   title: Mobility DNA Overview
   description: Apps built for Zebra's Android mobile computing devices are designed to allow corporate end-users to increase productivity in the workplace and improve efficiency of workflows.
   url: https://www.zebra.com/us/en/products/software/mobile-computers/mobility-dna.html
   video: https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/Software/Mobility%20Software/mobility-dna/videos/mobility-dna-video.mp4/_jcr_content/renditions/original
   video_type: html5
   video_thumb: video_thumb.jpg
   button_text: Learn More
 - image-location: left
   title: DataWedge Wake-up & Scan
   subtitle: New in Datawedge 8.1
   description: With the new "Wake-up and Scan" feature, barcodes are instantly captured with the single press of the scan button. This improves user productivity by eliminating delays normally seen when a device emerges from a power-saving state.
   url: /datawedge/8-1/guide/about/
   video: vkc-W4N6HP8
   video_type: youtube
   button_text: Learn More
 - image-location: right
   title: Disable Apps by Icon and App name
   subtitle: New in Enterprise Home Screen
   description: Admins will now find it easier and faster to disable applications using Enterprise Home Screen's new feature that allows them to select applications by their name or icon instead of having to select applications by their package name.
   url: /ehs/4-0/guide/about/
   video: c3iaTgk0708
   video_type: youtube
   button_text: Learn More
 - image-location: left
   title: MX 10.1 latest features
   description: MX 10.0 delivers access to silent app permissions for sensitive features, detailed battery info for users, and control over screen orientation changes by apps.
   url: /mx
   button_text: Learn More
   video: BzLDGvai0us
   video_type: youtube
   
---
<style>
h2 a {
    font-size: 16px;
}
.team-member {
    margin-bottom: 5%;
}
hr {
    padding-bottom: 3%;
}
.btn-zebra {
  background-color: #00a7ff;
  border: 2px solid #00a7ff;
  color: #fff;
  padding: 5px 10px;
  width: auto;
  display: inline-block;
  font-size: 14px;
  box-sizing: border-box;
  text-align: center;
  transition: all .2s ease;
  text-transform: capitalize;
  box-shadow: 0 2px 3px 1px rgba(0,0,0,0.2);
}

.btn-zebra:hover, .btn-zebra:active, .btn-zebra:active {
  text-decoration: none;
  background-color: #66caff;
  color: #fff;
  border: 2px solid #66caff;
}

.main-head {
  color: #000;
  font-size: 32px;
  line-height: 1.5;
  letter-spacing: .025em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 0 10px;
}

.section-head {
  color: #000;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: .025em;
  text-transform: uppercase;
  font-weight: 400;
}

#mainContent {
  padding-bottom: 40px;
}

.full-width {
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.triangle-rt {
  width: 0;
  height: 0;
  border-top: 0 solid transparent;
  position: absolute;
}
.triangle-lb {
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  border-left: 0 solid transparent;
  position: absolute;
}

.stripe-heading{
  background: #e5e5e5;
  /* width: 100vw; */
  /* left: -94px; */
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>

## New in DataWedge 8.x [(View More)](/datawedge/8-1/guide/about)

* [Secure access to DataWedge Intent APIs](/datawedge/8-1/guide/programmers-guides/secure-intent-apis) to prevent unauthorized use of the APIs.
* New [Trigger Wakeup and Scan](/datawedge/8-1/guide/input/barcode#readerparams) Reader Parameter to trigger scanning when device is in a suspended/screen-off state. New corresponding [SetConfig API parameter](/datawedge/8-1/guide/api/setconfig/#otherscannerinputparameters).
* Updated licensing screen.
* **Support for Unique Device Identification (UDI) barcodes** has been temporarily suspended for devices running Android 10 and later. UDI support will be restored via a LifeGuard patch for Android 10 to be released in Q3 2020.
* New secure Intent Output with [Component Information](/datawedge/8-1/guide/output/intent/#intentoutputsetup) and new corresponding [SetConfig API parameter](/datawedge/8-1/guide/api/setconfig/#intentoutputparameters).
* New option to use [DataWedge content provider](/datawedge/8-1/guide/output/intent/#intentoutputsetup) in Intent Output to scan large data, such as images, with new corresponding [SetConfig API parameter](/datawedge/8-1/guide/api/setconfig/#intentoutputparameters) and [Use Content Provider Programmer's Guide](/datawedge/8-1/guide/programmers-guides/content-provider).
* New [NextGen SimulScan Configuration](/datawedge/8-1/guide/input/barcode/#nextgensimulscanconfiguration) replacing legacy SimulScan features, license required for [Zebra Professional-series devices](/datawedge/8-1/guide/licensing).
* Import [NextGen SimulScan Templates](/datawedge/8-1/guide/admin) for document capture.
* New [Press and Continue](/datawedge/8-1/guide/input/barcode/#readerparams) Aim Type for Barcode Input and corresponding new [SetConfig API parameter](/datawedge/8-1/guide/api/setconfig/#otherscannerinputparameters).
* New [Inventory State](/datawedge/8-1/guide/input/rfid/#rfidinput) and [Hardware Key](/datawedge/8-1/guide/input/rfid/#rfidinput) RFID input options.


-----

## New in Enterprise Browser v3.0 [(View More)](/enterprise-browser/3-0/guide/about)

### New Features 

#### Term-based Licensing
* Enterprise Browser 3.0 and later now supports term-based (subscription) licensing with one-, three- and five-year terms available for purchase. A 90-day trial term also is available (a 30-day evaluation term comes preinstalled with every EB 3.0 download). [More info](/enterprise-browser/3-0/guide/licensing/#iiaccesslicensingsystem).  
* **Perpetual licenses remain in effect**. Read more [about perpetual licenses](/enterprise-browser/3-0/guide/licensing/#iiaccesslicensingsystem).
* **Perpetual and evaluation licenses currently in place for EB 2.x can be applied to EB 3.x** when installed.
* **The Zebra PS20** includes Enterprise Browser 2.x preinstalled with a license that never expires.  
* **Upgrading to Enterprise Browser 3.0 on the PS20** requires purchase of a new EB license. To upgrade, EB 3.x must be downloaded and installed separately and an EB 2.x or 3.x license applied.

#### Common Criteria
Some Zebra devices are compatible with Common Criteria for IT Security Evaluation, a standard for certifying the security of computing devices and systems. When in the so-called "CC state" of heightened security, Zebra mobile and touch computers are prevented from access certain features, including the ability to read from or write to external storage. [Learn more](/cc). 

### Device Support

Support for the following devices has been added: 

* **Zebra devices running Android 10**
* **Zebra PS20 running Android 9.x Pie and Android 10** 

**See the [full list of supported devices](https://www.zebra.com/us/en/support-downloads/software/developer-tools/enterprise-browser.html)**. <i class="fa fa-external-link" aria-hidden="true"></i>


-----

## New in EHS 4.0 [(View More)](/ehs/4-0/guide/about/)

* **Now supports Zebra devices running Android 10** as well as Android 9.x Pie and 8.x Oreo. 
* **To enhance device and network security, EHS by default now hides potentially sensitive wireless device info** in User Mode.<br>Optionally, an administrator can **[display wireless settings](/ehs/4-0/guide/settings/#wirelessinformation)**, if desired.
* **[Recently Launched Apps](/ehs/4-0/guide/settings/#recentappsaccess) can now be shown or hidden** from the User as desired by an administrator. 

### Supported Devices

**EHS 4.0 adds support for the following devices running Android 10**:

* **MC33x**
* **PS20**
* **TC21**
* **TC26**
* **TC52**

#### [See all supported devices](https://www.zebra.com/us/en/support-downloads/software/utilities/enterprise-home-screen.html) <i class="fa fa-external-link" aria-hidden="true"></i>

-----

## New in Enterprise Keyboard v3.9 [(View More)](/enterprise-keyboard/3-9/guide/about/)

### New Features 

* **New RepeatKeys feature** causes a specified keyCode to be repeated when long-pressing the key. 
* **New Macros feature** can combine multiple keyCodes, presses or Actions into a single key-press Action. 

* **Enterprise Keyboard Designer now includes [predeveloped sample layouts](https://techdocs.zebra.com/ekd/latest/samples/)**, which can be downloaded and deployed immediately or customized to suit the needs of an enterprise.

>**NOTE: New features in EKB 3.9 must be implemented using Enterprise Keyboard Designer 1.9 or later**.
> For more information about new EKB 3.9 features, please refer to the [Enterprise Keyboard Designer usage guide](http://techdocs.zebra.com/ekd/latest/guide/usage). 

### MDNA Enterprise License 
**Beginning with EKB 3.9, an MDNA Enterprise license is now required** to use Enterprise Keyboard on  Zebra Professional-series devices, including the TC21 and TC26. These devices arrive with a non-functional EKB “dummy” client, which must be replaced with the functional EKB v3.9 (or later) client after [purchasing a Zebra MDNA Enterprise license](/licensing/process). When unlicensed, EKB displays a “license required” prompt (see below) whenever app focus comes to a text input box. **Learn more [about MDNA licensing](/licensing)**. 

### Device Support

* **Now supports Zenra devices running Android 10**
* **Beginning with v3.9, EKB no longer supports devices running Android 7.x Nougat**. 
* **Android Multi-user mode is no longer supported**. [More info](/enterprise-keyboard/3-9/guide/setup/#multiusermode). 

Please see the **[supported device list](https://www.zebra.com/us/en/support-downloads/software/productivity-apps/enterprise-keyboard.html)** for more information. 

-----

## New in Enterprise Keyboard Designer v1.9 [(View More)](/ekd/1-9/guide/about/)

* **[Undo feature](/ekd/1-9/guide/usage/#iicreatelayouts)** reverses each of the last 10 actions  
* **[Deploy button](/ekd/1-9/guide/usage/#vdeploylayouts)** automatically exports the custom key-layout definition file (an encrypted file) to a USB-connected device  
* **[RepeatKeys function](./ekd/1-9/guide/usage/#repeatkeys)** sends multiple keycodes by long-pressing a key 
* **[Macros feature](/ekd/1-9/guide/usage/#macros)** can combine multiple keycodes, presses or actions into a single key Action 
* **New [predeveloped sample layouts](/ekd/1-9//samples/)** can be downloaded and deployed immediately or customized to suit the needs of an enterprise

### MDNA Enterprise License 
**Beginning with EKB 3.9, an MDNA Enterprise license is now required** to use Enterprise Keyboard on  Zebra Professional-series devices, including the TC21 and TC26. These devices arrive with a non-functional EKB “dummy” client, which must be replaced with the functional EKB v3.9 (or later) client after [purchasing a Zebra MDNA Enterprise license](/licensing/process). When unlicensed, EKB displays a “license required” prompt (see below) whenever app focus comes to a text input box. **Learn more [about MDNA licensing](/licensing)**. 

-----

## New in EMDK For Android 8.x [(View More)](/emdk-for-android/8-0/guide/about)

> **`IMPORTANT:`** Support for Unique Device Identifier (UDI) barcodes has been temporarily suspended in EMDK for Android 8.0 and EMDK for Xamarin 7.0 for devices running Android 10 and later. **UDI support will be restored in these products via LifeGuard patch for Android 10 to be released in Q3 2020**.

* **A Mobility DNA Enterprise license is now required** for use of multi-barcode scanning and image/document capture features on Zebra Professional-series devices. 
* **A new [MDNA Licensing Guide](/emdk-for-android/8-0/licensing)** describes the scenarios under which apps behave when attempting to access licensing features without a license and how to remedy. 

**Now supports MX 9.3**, which adds the following features and enhancements:
* **Enhanced [App Manager](/emdk-for-android/8-0/mx/appmgr)** now allows an admin to control background data usage on a per-application basis. 
* **Enhanced [Bluetooth Manager](/emdk-for-android/8-0/mx/bluetoothmgr)** now allows silent pairing using a Bluetooth MAC address or PIN. 
* **Enhanced [GPRS Manager](/emdk-for-android/8-0/mx/gprsmgr)** APN parameters now support IPv4, IPv6 and the IPv4/IPv6 "dual-stack" protocol.  
* **Enhanced [Keymapping Manager](/emdk-for-android/8-0/mx/keymappingmgr)** now supports the "grey" key and W1 and W2 buttons.  

-----

## New in StageNow v4.2 [(View More)](/stagenow/4-2/about/)

### Device Support 

> **StageNow supports all Zebra devices running Android 4.x KitKat and later with MX 4.3 or higher**.

**StageNow v4.2 has been validated on devices with the following operating systems and MX versions**: 

* **Android 10**
* Android 9.x Pie
* Android 8.x Oreo
* Android 7.x Nougat
* **MX 10.0**
* MX 9.x
* MX 8.x
* MX 7.x

**Bold text** indicates recent addition

### New Features

**Introduces a [Zero Touch Wizard](/stagenow/4-2/Profiles/zerotouch)**, which assists in creating Profiles for connecting a ”factory-fresh" device to the internet through the Android Setup Wizard. This allows the device to contact Google’s Zero-Touch servers for enrollment into the chosen Enterprise Mobile Management system with no user interaction. 

**Also new, settings entered in the Zero Touch Wizard can be persisted on the device** following an Enterprise Reset, further automating subsequent enrollments. 

**A new [Staging Guides landing page](/stagenow/4-2/stagingguides)** and menu tab helps users locate guides quickly.  

**Supports MX 10.0**: which adds the following major features and enhancements: 
* **Enhanced [Power Manager](/stagenow/4-2/csp/power)** now allows a Profile to: 
 * OS Upgrade via streaming (full-package upgrade only using http or https; supported on Android 10 and later)
 * OS Downgrade via streaming (full-package downgrade only using http or https; supported on Android 10 and later)
* **Enhanced [Access Manager](/stagenow/4-2/csp/access)** now allows an admin to: 
 * Auto-grant permissions to an app to prevent permission "pop-up" to appear on device
 * Designate a CSP as "Protected" from unauthorized use 
 * Designate a Function Group (features selected from different CSPs) as "Protected" from unauthorized use

