---
title: InterfaceConfig
---

The InterfaceConfig class provides access to configure the payment device information required to interface with the payment device. 
 The InterfaceConfig.deviceName and PaymentDeviceConfig.macAddress must be set i.e. InterfaceConfig object must be set before calling enable().

##Public Fields

###deviceName

Payment device name. To enable the payment device, either the payment device name or its must MAC address must be provided before calling the enable method.
 Providing device name involves Bluetooth device discovery to get the specified Bluetooth device.
 Establishing connection with payment device using MAC address will be quicker than device name.
 This requires the manual pairing of the payment device before calling enable method.
 This device name or MAC address must be set before calling the enable method.

**Type:**

java.lang.String

###macAddress

Payment device mac address. To enable the payment device, either the payment device name or its must address must be provided before calling the enable method.
 Providing device name involves Bluetooth device discovery to get the specified Bluetooth device.
 Establishing connection with payment device using MAC address will be quicker than device name.
 This requires the manual pairing of the payment device before calling enable method.
 This device name or MAC address must be set before calling the enable method.

**Type:**

java.lang.String


