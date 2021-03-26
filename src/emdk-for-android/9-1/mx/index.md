---
title: Profile Feature Reference
publish: false
layout: list-content.html
contentlist:
  - heading: Application Management
    description: Manage application white-listing and browser settings.
    visible: true
    items:
      - title: App Manager
        url: appmgr
        icon: /mx/icons/app_manager.png
        description: The AppMgr allows you manage the set of user applications that are installed on the device.
      - title: App Gallery Manager
        url: appgallerymgr
        icon: /mx/icons/mx.png
        description: The AppGalleryMgr allows configuration of AppGallery client settings on the device.
      - title: Browser Manager
        url: browsermgr
        description: The Browser Manager allows you to configure browser settings like the default home page.
        icon: /mx/icons/browsermgr.png
  - heading: Data Capture
    description: Use profiles to obtain barcode and MSR data into your application.
    visible: true
    items:
      - title: Activity Selection
        description: "Select the application's activity where data capture is active."
        url: data-capture/activity
        icon: /mx/icons/activity.png
      - title: Barcode
        description: Set and configure barcode as the input source.
        url: data-capture/barcode
        icon: /mx/icons/barcode.png
      - title: Intent Output
        description: Output the data captured as an intent.
        icon: /mx/icons/intent.png
        url: data-capture/intent
      - title: IP Output
        description: Output the data captured over IP communications.
        icon: /mx/icons/ip.png
        url: data-capture/IP
      - title: Keystroke
        description: Output data captured as keystrokes.
        icon: /mx/icons/keystroke.png
        url: data-capture/keystroke
      - title: Magstripe
        description: Set and configure mag stripe as the input source
        icon: /mx/icons/msr.png
        url: data-capture/msr
  - heading: Device Configuration
    description: Configure Device Settings
    visible: true
    items:
      - title: Analytics
        url: analytics
        description: 'The AnalyticsMgr allows you enable or disable collection of data, in the form of groups of metrics, by the Analytics Engine'
        icon: /mx/icons/analyticsmgr.png
      - title: Audio Manager
        url: audiomgr
        description: 'The AudioVolUIMgr allows you to add, delete, and replace Audio Profiles and to select the current Audio Profile that will be in effect on the device.'
        icon: /mx/icons/audio.png
      - title: Battery Manager
        url: batterymgr
        description: The BatteryMgr allows you to configure the thresholds that will be used to determine when a battery needs to be decommissioned.
        icon: /mx/icons/battery_threshold.png
      - title: Clock Manager
        url: clock
        description: 'The Clock Manager allows you to set the Date, Time, and Time Zone or to configure the device to automatically acquire it via NTP.'
        icon: /mx/icons/clock.png
      - title: Component Manager
        url: componentmgr
        description: 'The ComponentMgr allows you to configure the state and usage of specific subsystems on the device, such as Ethernet.'
        icon: /mx/icons/ethernet.png
      - title: Display Manager
        url: displaymgr
        description: The DisplayMgr allows you to control the display screen on the device.
        icon: /mx/icons/displaymgr.png
      - title: Power Manager
        url: powermgr
        description: 'The PowerMgr allows you to perform power-related actions on the device, such as putting it into Sleep mode.'
        icon: /mx/icons/power_manager.png
      - title: Touch Manager
        url: touchmgr
        description: The TouchMgr allows you configure the Touch Mode on your device (ex. Finger or Stylus)
        icon: /mx/icons/touchmgr.png
      - title: Remote Scanner Manger
        url: remotescannermgr
        description: ' '
        icon: /mx/icons/barcode.png
  - heading: MX Core Framework
    description: Access core framework features and how XML settings are managed.
    visible: true
    items:
      - title: Persistence Manager
        url: persistence
        description: The PersistMgr allows you to manage the Request XML Documents that are persistent on a device.
        icon: /mx/icons/persistmgr.png
      - title: XML Manager
        url: xml
        description: The XmlMgr allows you to specify the Error Handling Mode the MXMS should use when processing a Request XML document.
        icon: /mx/icons/xmlmgr.png
  - heading: Security Features
    visible: true
    description: Manage security settings for the device and access to applications.
    items:
      - title: Access Manager
        url: accessmgr
        description: The AccessMgr enables the configuration of a device to control which user or applications can be used on a given device as well as what those applications can do.
        icon: /mx/icons/accessmgr.png
      - title: Camera Manager
        url: cameramgr
        description: 'The CameraMgr allows you to control what cameras, if any, will be allowed to be used.'
        icon: /mx/icons/cameramgr.png
      - title: Certificate Manager
        url: certmgr
        description: The CertMgr allows you to manage certificates and the Android Keystore on a device.
        icon: /mx/icons/certificate.png
      - title: Dev Admin
        url: devadmin
        description: The DevAdmin allows you to perform certain device administration tasks directly like Screen-Lock timeout interval.
        icon: /mx/icons/devadmin.png
      - title: Encrypt Manager
        url: encryptmgr
        description: 'The EncryptMgr allows you to manage the Key Storage Database, activate or deactivate Full Storage Card Encryption, and create or delete EFSes.'
        icon: /mx/icons/encryptmgr.png
      - title: SD Card Manager
        url: sdcardmgr
        description: The SdCardMgr allows you to control whether one specific External Storage on the device can be used.
        icon: /mx/icons/sdcardmgr.png
      - title: Threat Manager
        description: The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.
        url: threatmgr
        icon: /mx/icons/threatmgr.png
      - title: USB Manager
        url: usbmgr
        description: The UsbMgr allows you to control which USB functions can be used on the device.
        icon: /mx/icons/usbmgr.png
  - heading: UI Settings
    description: Control device settings behavior and remap keys.
    visible: true
    items:
      - title: KeyMap Manager
        url: keymappingmgr
        description: The KeyMappingMgr allows you to modify what behavior a given key will exhibit when pressed.
        icon: /mx/icons/key_mapping.png
      - title: Power Key Manager
        url: powerkeymgr
        description: The PowerKeyMgrallows you to control whether the user will be allowed to use certain menu options that are supported on the Power Key Menu.
        icon: /mx/icons/powerkeymgr.png
      - title: Settings Manager
        url: settingsmgr
        description: The SettingsMgr allows you to control access to items on the System Settings Menu.
        icon: /mx/icons/settingsmgr.png
      - title: UI Manager
        url: uimgr
        description: 'The UiMgr Feature Type allows you to manage a miscellaneous set of UI configurations, like Clipboard behavior.'
        icon: /mx/icons/uimgr.png
  - heading: Network
    description: Manage wireless settings like WiFi and GPRS for your device.
    visible: true
    items:
      - title: Bluetooth Manager
        url: bluetoothmgr
        description: The BluetoothMgr allows you to control whether a device will be allowed to pair with Bluetooth devices such as headsets and printers that come into range.
        icon: /mx/icons/wirelessmgr.png
      - title: Cellular Manager
        url: cellularmgr
        description: "The CellularMgr allows you to control how a device's Cellular data connection is used."
        icon: /mx/icons/cellularmgr.png
      - title: DHCP Manager
        url: dhcp
        description: The DhcpOptionMgr allows you to configure DHCP Options.
        icon: /mx/icons/DHCP.png
      - title: GPRS Manager
        url: gprsmgr
        description: The GprsMgr allows you to manage APN settings for the devices GPRS network.
        icon: /mx/icons/gprsmgr.png
      - title: Hosts Manager
        url: hostsmgr
        description: 'The HostsMgr allows the device to be assigned a Host Name by which the device can be identified by admins, applications and other devices on local and DNS-enabled IP networks.'
        icon: /mx/icons/wifi.png
      - title: NFC Manager
        url: nfcmgr
        description: 'The NfcMgr allows for control and configuration of the NFC radio and its settings.'
        icon: /mx/icons/wifi.png
      - title: WiFi Manager
        url: wifi
        description: "The Wi-Fi feature type allows you to manage a device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks."
        icon: /mx/icons/wifi.png
      - title: Wireless Manager
        url: wirelessmgr
        description: 'The WirelessMgr allows you to turn various wireless radios On or Off, like Bluetooth, GPRS, NFC, etc.'
        icon: /mx/icons/wirelessmgr.png
product: EMDK For Android
productversion: '9.0'
---

















