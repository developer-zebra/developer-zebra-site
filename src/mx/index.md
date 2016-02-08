---
title: MX Feature Reference
publish: false
layout: list-content.html
menu:
  items:
    - title: Overview
      url: /mx
    - title: Architecture
      url: /mx/overview
    - title: Feature Version Matrix
      url: /mx/features
    - title: Feature Compatibility
      url: /mx/compatibility
    - title: Choosing a MX Version
      url: /mx/choosing-a-version
    - title: Checking Device MX Version
      url: /mx/mx-version-on-device
    - title: Access Manager
      url: /mx/accessmgr
    - title: Analytics Manager
      url: /mx/analyticsmgr
    - title: App Manager
      url: /mx/appmgr
    - title: Audio Volume Manager
      url: /mx/audiovoluimgr
    - title: Batch Manager
      url: /mx/batchmgr
    - title: Battery Manager
      url: /mx/batterymgr
    - title: Browser Manager
      url: /mx/browsermgr
    - title: Camera Manager
      url: /mx/cameramgr
    - title: Cellular Manager
      url: /mx/cellularmgr
    - title: Certificate Manager
      url: /mx/certmgr
    - title: Clock
      url: /mx/clock
    - title: Component Manager
      url: /mx/componentmgr
    - title: Condition Manager
      url: /mx/conditionmgr
    - title: DevAdmin Manager
      url: /mx/devadminmgr
    - title: DHCP Options Manager
      url: /mx/dhcpoptionmgr
    - title: Display Manager
      url: /mx/displaymgr
    - title: Encrypt Manager
      url: /mx/encryptmgr
    - title: File Manager
      url: /mx/filemgr
    - title: GPRS Manager
      url: /mx/gprsmgr
    - title: Intent
      url: /mx/intent
    - title: Key Mapping Manager
      url: /mx/keymappingmgr
    - title: License Manager
      url: /mx/licensemgr
    - title: Persist Manager
      url: /mx/persistmgr
    - title: Power Key Manager
      url: /mx/powerkeymgr
    - title: Power Manager
      url: /mx/powermgr
    - title: Scan Mode Manager
      url: /mx/scanmodemgr
    - title: SD Card Manager
      url: /mx/sdcardmgr
    - title: Settings Manager
      url: /mx/settingsmgr
    - title: Status Manager
      url: /mx/statusmgr
    - title: Threat Manager
      url: /mx/threatmgr
    - title: Touch Manager
      url: /mx/touchmgr
    - title: UI Manager
      url: /mx/uimgr
    - title: USB Manager
      url: /mx/usbsmgr
    - title: WiFi
      url: /mx/wifi
    - title: Wireless Manager
      url: /mx/wirelessmgr
    - title: XML Manager
      url: /mx/xmlmgr
contentlist:
  - heading: Application Management
    description: Manage application white-listing and browser settings.
    visible: true
    items: 
      - title: App Manager
        url: /mx/appmgr
        icon: /mx/icons/app_manager.png
        description: The AppMgr allows you manage the set of user applications that are installed on the device.
      - title: Browser Manager
        url: /mx/browsermgr
        description: The Browser Manager allows you to configure browser settings like the default home page.
        icon: /mx/icons/browsermgr.png
  - heading: Device Configuration
    description: Manage various device configuration settings like power, usb, clock and display behavior.
    visible: true
    items: 
      - title: Analytics
        url: /mx/analyticsmgr
        description: The AnalyticsMgr allows you enable or disable collection of data, in the form of groups of metrics, by the Analytics Engine
        icon: /mx/icons/analyticsmgr.png
      - title: Audio Manager
        url: /mx/audiovoluimgr
        description: The AudioVolUIMgr allows you to add, delete, and replace Audio Profiles and to select the current Audio Profile that will be in effect on the device.
        icon: /mx/icons/audio.png
      - title: Battery Manager
        url: /mx/batterymgr
        description: The BatteryMgr allows you to configure the thresholds that will be used to determine when a battery needs to be decommissioned.
        icon: /mx/icons/battery_threshold.png
      - title: Clock Manager
        url: /mx/clock
        description: The Clock Manager allows you to set the Date, Time, and Time Zone or to configure the device to automatically acquire it via NTP.
        icon: /mx/icons/clock.png
      - title: Component Manager
        url: /mx/componentmgr
        description: The ComponentMgr allows you to configure the state and usage of specific subsystems on the device, such as Ethernet.
        icon: /mx/icons/ethernet.png
      - title: Display Manager
        url: /mx/displaymgr
        description: The DisplayMgr allows you to control the display screen on the device.
        icon: /mx/icons/displaymgr.png
      - title: Power Manager
        url: /mx/powermgr
        description: The PowerMgr allows you to perform power-related actions on the device, such as putting it into Sleep mode.
        icon: /mx/icons/power_manager.png
      - title: Touch Manager
        url: /mx/touchmgr
        description: The TouchMgr allows you configure the Touch Mode on your device (ex. Finger or Stylus)
        icon: /mx/icons/touchmgr.png
  - heading: MX Core Framework
    description: Access core framework features and how XML settings are managed.
    visible: true
    items: 
      - title: CSP Manager
        url: /mx/cspmgr
        description: The CspMgr allows you to query the system to determine the set of CSPs that are present on a given device.
        icon: /mx/icons/csp.png
      - title: MX Manager
        url: /mx/mxmgr
        description: The MX Manager allows you to acquire the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself.
        icon: /mx/icons/mx.png
      - title: Persistance Manager
        url: /mx/persistmgr
        description: The PersistMgr allows you to manage the Request XML Documents that are persistent on a device.
        icon: /mx/icons/persistmgr.png
      - title: XML Manager
        url: /mx/xml
        description: The XmlMgr allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document.
        icon: /mx/icons/xmlmgr.png
  - heading: Security Features
    visible: true
    description: Manage security settings for the device and access to applications.
    items: 
      - title: Access Manager
        url: /mx/accessmgr
        description: The AccessMgr enables the configuration of a device to control which user or applications can be used on a given device as well as what those applications can do.
        icon: /mx/icons/accessmgr.png
      - title: Camera Manager
        url: /mx/cameramgr
        description: The CameraMgr allows you to control what cameras, if any, will be allowed to be used.
        icon: /mx/icons/cameramgr.png
      - title: Certificate Manager
        url: /mx/certmgr
        description: The CertMgr allows you to manage certificates and the Android Keystore on a device.
        icon: /mx/icons/certificate.png
      - title: Dev Admin
        url: /mx/devadmin
        description: The DevAdmin allows you to perform certain device administration tasks directly like Screen-Lock timeout interval.
        icon: /mx/icons/devadmin.png
      - title: Encrypt Manager
        url: /mx/encryptmgr
        description: The EncryptMgr allows you to manage the Key Storage Database, activate or deactivate Full Storage Card Encryption, and create or delete EFSes.
        icon: /mx/icons/encryptmgr.png
      - title: SD Card Manager
        url: /mx/sdcardmgr
        description: The SdCardMgr allows you to control whether one specific External Storage on the device can be used.
        icon: /mx/icons/sdcardmgr.png
      - title: Threat Manager
        description: The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.
        url: /mx/threatmgr
        icon: /mx/icons/threatmgr.png
      - title: USB Manager
        url: /mx/usbmgr
        description: The UsbMgr allows you to control which USB functions can be used on the device.
        icon: /mx/icons/usbmgr.png
  - heading: UI Settings
    description: Control device settings behavior and remap keys.
    visible: true
    items: 
      - title: KeyMap Manager
        url: /mx/keymappingmgr
        description: The KeyMappingMgr allows you to modify what behavior a given key will exhibit when pressed.
        icon: /mx/icons/key_mapping.png
      - title: Power Key Manager
        url: /mx/powerkeymgr
        description: The PowerKeyMgrallows you to control whether the user will be allowed to use certain menu options that are supported on the Power Key Menu.
        icon: /mx/icons/powerkeymgr.png
      - title: Settings Manager
        url: /mx/settingsmgr
        description: The SettingsMgr allows you to control access to items on the System Settings Menu.
        icon: /mx/icons/settingsmgr.png
      - title: UI Manager
        url: /mx/uimgr
        description: The UiMgr Feature Type allows you to manage a miscellaneous set of UI configurations, like Clipboard behavior.
        icon: /mx/icons/uimgr.png
  - heading: Wireless
    description: Manage wireless settings like WiFi and GPRS for your device.
    visible: true
    items: 
      - title: Cellular Manager
        url: /mx/cellularmgr
        description: The CellularMgr allows you to control how a device's Cellular data connection is used.
        icon: /mx/icons/cellularmgr.png
      - title: DHCP Manager
        url: /mx/dhcpoptionmgr
        description: The DhcpOptionMgr allows you to configure DHCP Options.
        icon: /mx/icons/DHCP.png
      - title: GPRS Manager
        url: /mx/gprsmgr
        description: The GprsMgr allows you to manage APN settings for the devices GPRS network.
        icon: /mx/icons/gprsmgr.png
      - title: WiFi Manager
        url: /mx/wifi
        description: The Wi-Fi feature type allows you to manage a device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.
        icon: /mx/icons/wifi.png
      - title: Wireless Manager
        url: /mx/wirelessmgr
        description: The WirelessMgr allows you to turn various wireless radios On or Off, like Bluetooth, GPRS, NFC, etc.
        icon: /mx/icons/wirelessmgr.png
              
---