---
title: ZWC Deployment
layout: guide.html
product: Zebra Workstation Connect
productversion: '1.0'
menu:
  items:
    - title: About
      url: /zwc/about
    - title: Setup
      url: /zwc/setup
    - title: Deploy
      url: /zwc/emm
    - title: APIs
      url: /zwc/api
    - title: FAQ
      url: /zwc/faq
    - icon: fa fa-search
      url: /zwc/search
---

The Zebra Workstation Connect solution supports setup and configuration through a company's own enterprise mobility management (EMM) solution. This works through the use of Android Managed Configurations. 

EMM support for remote configuration of ZWC via Android Managed Configurations: 

The Zebra Workstation Connect Launcher APK is posted on Google Play Store, and it supports full production deployment, configuration, and activation using standard EMMs. EMM can configure ZWC Via Android Managed Configurations. 

Here the screen shots are taken with respect to an internal Zebra test app and in real EMM set up, the UI driven by the App Restriction schema would differ. 

 

Admin configurable features in ZWC 

Screen Orientation 

ZWC offers a method for admin to Control the Orientation on Secondary Screen. Configurable options include; 

Landscape (no rotation) 

Portrait (90 degrees left) 

Landscape Inverted (180 degrees) 

Portrait Inverted (270 degrees) 

 

Screen Resolution 

ZWC offers a method for admin to Control the Resolution on Secondary Screen. 

-The supported Resolutions may be limited by the capabilities of the attached External Monitor. 
-In Mirror Mode, the supported Resolutions may be limited to the Resolutions supported by the Mobile Device Screen, since both must be set to match. 
-When using DisplayLink, the supported Resolutions may be limited by the capabilities of the DisplayLink chip, the DisplayLink APK and/or how they are used. 
-When using Alternate Display Mode, the supported Resolutions may be limited by the chipset (e.g. SD660) 

Common notes for Resolution and Orientation: 

Recommend to Administrators NOT to use Administrator configuration of Orientation and Resolution of External Monitor when using Mirror Mode to avoid inconsistent/unexpected behavior. 

Recommend to Administrators NOT to switch back to Mirror Mode from Desktop Mode. 

 

Configure Status icons 

ZWC supports configuration by the Administrator of which icons are shown on the Status Area of the Taskbar in Desktop Mode. In ZWC, by default the following Status icons are displayed on the taskbar. 

Battery, Bluetooth, Cellular, Ethernet, VPN, Wi-Fi 

Admin can select whether to show/hide each status icon on the taskbar 

 

Configure Desktop Wallpaper [ NOT PART OF CURRENT RELEASE] 

Set Desktop Wallpaper: The Administrator can change the Wallpaper to use for Desktop Mode to any supported image file stored on the device, including any downloaded to the device by the Administrator. Enter the device path and file name of the image file to set as desktop wallpaper (Limitations with image file size and resolutions if any, to be documented) 

Reset Wallpaper to default OOB wallpaper: The Administrator can restore the Wallpaper to use for Desktop Mode to the default without having to download the default image file to the device.  Wallpaper file path need to be left blank to use the default wallpaper (restore to default) 

Allow/disallow User control: ZWC supports configuration by the Administrator of whether the Device User is allowed to set the Wallpaper to use for Desktop Mode. 

 

 

 
Configure Desktop shortcuts 

Admin configurable options: 

add/change shortcuts or delete all /specific shortcuts:  Specify app shortcuts by entering valid package name and activity name for each shortcut (both are mandatory). Leave blank for no icons (I.e. to have no shortcuts on the desktop launcher) 

Sort shortcuts either alphabetically or by date added. 

 

 
 
Configure Automatic App Disposition  

ZWC supports configuration by the Administrator of Criteria that will be used to determine automatic handling of Apps when the device is docked into/undocked from a supported Cradle and/or Dock. 

 
 

 

 

 

Adding Criteria for Auto App Disposition: 

Step1: specify the package name of the app.  

Step 2: specify the docking criteria for the app by giving the Action and the Window state. 

Action: Select action of the application out of Stop, Launch Move. Application would launch/move to device as a foreground app. 

Window state: Select how application would look like when launched or moved. Only applies to the Launch and Move actions. 

 

Step 3: specify the Undocking criteria for the app by giving only the Action. Here window state is not required to specify because for any app defined here the window state would be Maximize by default, since default undocking criteria for all other admin unspecified apps would remain as Minimize. 

ZWC Managed config support – common notes: 

When a new managed config is applied to the device, its settings will get affected only in the next docking. 

Device operator can over-write admin configured managed config settings (eg: app shortcuts) and those device operator changes will remain over next dockings as well. 

Managed config settings will persist across ZWC uninstall and reinstall as well. 

Perform Enterprise-Reset or Factory-Reset to clear the managed configs. 