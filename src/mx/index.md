---
title: MX Feature Reference
publish: false
layout: list-content.html
menu:
  items:
    - title: MX Overview
      url: /mx/overview
    - title: MX Features
      url: /mx
    - title: Feature Compatibility
      url: /mx/compatibility
    - title: Choosing a MX Version
      url: /mx/choosing-a-version
    - title: Checking Device MX Version
      url: /mx/mx-version-on-device
contentlist:
  - heading: Application Management
    description: Manage application white-listing and browser settings.
    visible: true
    items: 
      - title: App Manager
        url: /mx/5-0/app-management/appmgr
        icon: /mx/icons/app_manager.png
        description: The AppMgr allows you manage the set of user applications that are installed on the device.
        urls:
          - title: "4.2"
            url: /mx/4-2/app-management/appmgr
          - title: "4.4"
            url: /mx/4-4/app-management/appmgr
          - title: "5.0"
            url: /mx/5-0/app-management/appmgr
      - title: Browser Manager
        url: /mx/4-4/app-management/browsermgr
        description: The Browser Manager allows you to configure browser settings like the default home page.
        icon: /mx/icons/browsermgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/app-management/browsermgr
          - title: "5.0"
            url: /mx/5-0/app-management/browsermgr
  - heading: Device Configuration
    description: Manage various device configuration settings like power, usb, clock and display behavior.
    visible: true
    items: 
      - title: Analytics
        url: /mx/5-0/device-configuration/analytics
        description: The AnalyticsMgr allows you enable or disable collection of data, in the form of groups of metrics, by the Analytics Engine
        icon: /mx/icons/analyticsmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/device-configuration/analytics
          - title: "5.0"
            url: /mx/5-0/device-configuration/analytics
      - title: Audio Manager
        url: /mx/5-0/device-configuration/audiomgr
        description: The AudioVolUIMgr allows you to add, delete, and replace Audio Profiles and to select the current Audio Profile that will be in effect on the device.
        icon: /mx/icons/audio.png
        urls:
          - title: "4.4"
            url: /mx/4-4/device-configuration/audiomgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/audiomgr
      - title: Battery Manager
        url: /mx/5-0/device-configuration/batterymgr
        description: The BatteryMgr allows you to configure the thresholds that will be used to determine when a battery needs to be decommissioned.
        icon: /mx/icons/battery_threshold.png
        urls:
          - title: "4.4"
            url: /mx/4-4/device-configuration/batterymgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/batterymgr
      - title: Clock Manager
        url: /mx/5-0/device-configuration/clock
        description: The Clock Manager allows you to set the Date, Time, and Time Zone or to configure the device to automatically acquire it via NTP.
        icon: /mx/icons/clock.png
        urls:
          - title: "4.2"
            url: /mx/4-2/device-configuration/clock
          - title: "4.4"
            url: /mx/4-4/device-configuration/clock
          - title: "5.0"
            url: /mx/5-0/device-configuration/clock
      - title: Component Manager
        url: /mx/5-0/device-configuration/componentmgr
        description: The ComponentMgr allows you to configure the state and usage of specific subsystems on the device, such as Ethernet.
        icon: /mx/icons/ethernet.png
        urls:
          - title: "4.4"
            url: /mx/4-4/device-configuration/componentmgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/componentmgr
      - title: Display Manager
        url: /mx/5-0/device-configuration/displaymgr
        description: The DisplayMgr allows you to control the display screen on the device.
        icon: /mx/icons/displaymgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/device-configuration/displaymgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/displaymgr
      - title: Power Manager
        url: /mx/5-0/device-configuration/powermgr
        description: The PowerMgr allows you to perform power-related actions on the device, such as putting it into Sleep mode.
        icon: /mx/icons/power_manager.png
        urls:
          - title: "4.2"
            url: /mx/4-2/device-configuration/powermgr
          - title: "4.4"
            url: /mx/4-4/device-configuration/powermgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/powermgr
      - title: Touch Manager
        url: /mx/5-0/device-configuration/touchmgr
        description: The TouchMgr allows you configure the Touch Mode on your device (ex. Finger or Stylus)
        icon: /mx/icons/touchmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/device-configuration/touchmgr
          - title: "4.4"
            url: /mx/4-4/device-configuration/touchmgr
          - title: "5.0"
            url: /mx/5-0/device-configuration/touchmgr  
  - heading: MX Core Framework
    description: Access core framework features and how XML settings are managed.
    visible: true
    items: 
      - title: CSP Manager
        url: /mx/5-0/mx/xml
        description: The CspMgr allows you to query the system to determine the set of CSPs that are present on a given device.
        icon: /mx/icons/csp.png
        urls:
          - title: "4.2"
            url: /mx/4-2/cspmgr/xml
          - title: "4.4"
            url: /mx/4-4/cspmgr/xml
          - title: "5.0"
            url: /mx/5-0/cspmgr/xml
      - title: MX Manager
        url: /mx/5-0/mx/xml
        description: The MX Manager allows you to acquire the version numbers of the MX Management Framework (MXMF) and of the MX CSP itself.
        icon: /mx/icons/mx.png
        urls:
          - title: "4.2"
            url: /mx/4-2/versionmgr/xml
          - title: "4.4"
            url: /mx/4-4/versionmgr/xml
          - title: "5.0"
            url: /mx/5-0/versionmgr/xml
      - title: Persistance Manager
        url: /mx/5-0/mx/persistance
        description: The PersistMgr allows you to manage the Request XML Documents that are persistent on a device.
        icon: /mx/icons/persistmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/mx/persistance
          - title: "4.4"
            url: /mx/4-4/mx/persistance
          - title: "5.0"
            url: /mx/5-0/mx/persistance
      - title: XML Manager
        url: /mx/5-0/mx/xml
        description: The XmlMgr allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document.
        icon: /mx/icons/xmlmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/mx/xml
          - title: "4.4"
            url: /mx/4-4/mx/xml
          - title: "5.0"
            url: /mx/5-0/mx/xml
  - heading: Security Features
    visible: true
    description: Manage security settings for the device and access to applications.
    items: 
      - title: Access Manager
        url: /mx/4-4/security/accessmgr
        description: The AccessMgr enables the configuration of a device to control which user or applications can be used on a given device as well as what those applications can do.
        icon: /mx/icons/accessmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/security/accessmgr
          - title: "4.4"
            url: /mx/4-4/security/accessmgr
          - title: "5.0"
            url: /mx/5-0/security/accessmgr
      - title: Camera Manager
        url: /mx/4-4/security/cameramgr
        description: The CameraMgr allows you to control what cameras, if any, will be allowed to be used.
        icon: /mx/icons/cameramgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/cameramgr
          - title: "5.0"
            url: /mx/5-0/security/cameramgr
      - title: Certificate Manager
        url: /mx/4-4/security/certmgr
        description: The CertMgr allows you to manage certificates and the Android Keystore on a device.
        icon: /mx/icons/certificate.png
        urls:
          - title: "4.2"
            url: /mx/4-2/security/certmgr
          - title: "4.4"
            url: /mx/4-4/security/certmgr
          - title: "5.0"
            url: /mx/5-0/security/certmgr
      - title: Dev Admin
        url: /mx/4-4/security/devadmin
        description: The DevAdmin allows you to perform certain device administration tasks directly like Screen-Lock timeout interval.
        icon: /mx/icons/devadmin.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/devadmin
          - title: "5.0"
            url: /mx/5-0/security/devadmin
      - title: Encrypt Manager
        url: /mx/4-4/security/encryptmgr
        description: The EncryptMgr allows you to manage the Key Storage Database, activate or deactivate Full Storage Card Encryption, and create or delete EFSes.
        icon: /mx/icons/encryptmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/encryptmgr
          - title: "5.0"
            url: /mx/5-0/security/encryptmgr
      - title: SD Card Manager
        url: /mx/4-4/security/sdcardmgr
        description: The SdCardMgr allows you to control whether one specific External Storage on the device can be used.
        icon: /mx/icons/sdcardmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/sdcardmgr
          - title: "5.0"
            url: /mx/5-0/security/sdcardmgr
      - title: Threat Manager
        description: The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.
        url: /mx/4-4/security/threatmgr
        icon: /mx/icons/threatmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/threatmgr
          - title: "5.0"
            url: /mx/5-0/security/threatmgr
      - title: USB Manager
        url: /mx/4-4/security/usbmgr
        description: The UsbMgr allows you to control which USB functions can be used on the device.
        icon: /mx/icons/usbmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/security/usbmgr
          - title: "5.0"
            url: /mx/5-0/security/usbmgr
  - heading: UI Settings
    description: Control device settings behavior and remap keys.
    visible: true
    items: 
      - title: KeyMap Manager
        url: /mx/5-0/ui-settings/keymappingmgr
        description: The KeyMappingMgr allows you to modify what behavior a given key will exhibit when pressed.
        icon: /mx/icons/key_mapping.png
        urls:
          - title: "4.4"
            url: /mx/4-4/ui-settings/keymappingmgr
          - title: "5.0"
            url: /mx/5-0/ui-settings/keymappingmgr
      - title: Power Key Manager
        url: /mx/5-0/ui-settings/powerkeymgr
        description: The PowerKeyMgrallows you to control whether the user will be allowed to use certain menu options that are supported on the Power Key Menu.
        icon: /mx/icons/powerkeymgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/ui-settings/powerkeymgr
          - title: "5.0"
            url: /mx/5-0/ui-settings/powerkeymgr
      - title: Settings Manager
        url: /mx/5-0/ui-settings/settings
        description: The SettingsMgr allows you to control access to items on the System Settings Menu.
        icon: /mx/icons/settingsmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/ui-settings/settings
          - title: "5.0"
            url: /mx/5-0/ui-settings/settings
      - title: UI Manager
        url: /mx/5-0/ui-settings/uimgr
        description: The UiMgr Feature Type allows you to manage a miscellaneous set of UI configurations, like Clipboard behavior.
        icon: /mx/icons/uimgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/ui-settings/uimgr
          - title: "5.0"
            url: /mx/5-0/ui-settings/uimgr
  - heading: Wireless
    description: Manage wireless settings like WiFi and GPRS for your device.
    visible: true
    items: 
      - title: Cellular Manager
        url: /mx/5-0/wireless/cellularmgr
        description: The CellularMgr allows you to control how a device's Cellular data connection is used.
        icon: /mx/icons/cellularmgr.png
        urls:
          - title: "4.4"
            url: /mx/4-4/wireless/cellularmgr
          - title: "5.0"
            url: /mx/5-0/wireless/cellularmgr
      - title: DHCP Manager
        url: /mx/5-0/wireless/dhcp
        description: The DhcpOptionMgr allows you to configure DHCP Options.
        icon: /mx/icons/DHCP.png
        urls:
          - title: "4.4"
            url: /mx/4-4/wireless/dhcp
          - title: "5.0"
            url: /mx/5-0/wireless/dhcp
      - title: GPRS Manager
        url: /mx/5-0/wireless/gprsmgr
        description: The GprsMgr allows you to manage APN settings for the devices GPRS network.
        icon: /mx/icons/gprsmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/wireless/gprsmgr
          - title: "4.4"
            url: /mx/4-4/wireless/gprsmgr
          - title: "5.0"
            url: /mx/5-0/wireless/gprsmgr
      - title: WiFi Manager
        url: /mx/5-0/wireless/wifi
        description: The Wi-Fi feature type allows you to manage a device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.
        icon: /mx/icons/wifi.png
        urls:
          - title: "4.2"
            url: /mx/4-2/wireless/wifi
          - title: "4.4"
            url: /mx/4-4/wireless/wifi
          - title: "5.0"
            url: /mx/5-0/wireless/wifi
      - title: Wireless Manager
        url: /mx/5-0/wireless/wirelessmgr
        description: The WirelessMgr allows you to turn various wireless radios On or Off, like Bluetooth, GPRS, NFC, etc.
        icon: /mx/icons/wirelessmgr.png
        urls:
          - title: "4.2"
            url: /mx/4-2/wireless/wirelessmgr
          - title: "4.4"
            url: /mx/4-4/wireless/wirelessmgr
          - title: "5.0"
            url: /mx/5-0/wireless/wirelessmgr
              
---