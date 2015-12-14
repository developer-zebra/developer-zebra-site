# USB

## About USB

### Overview

The USB Manager setting type manages USB configurations of the device.

### Main Functionality

* Enable/Disable USB Module Usage
* Enable/Disable External USB Storage
* Enable/Disable ADB (Android Debug Bridge) Over USB
* Enable/Disable Device Storage Access over USB
* Enable/Disable the Ability to Access the Device Using USM (USB Mass Storage) Mode
* Enable/Disable the Ability to Access the Device Using MTP (Media Transfer Protocol) Mode
* Enable/Disable the Ability to Access the Device Using PTP (Picture Transfer Protocol) Mode

##Parameter Notes
### USB Module Usage
This feature allows the use of external USB modules such as a bar code scanner module. Disabling this feature disables the use of any USB module attached to the device.

### USB External Storage Usage
This feature allows the device to access data from an external USB mass storage device such as a flash drive through an OTG cable. Disabling this prevents access to an attached USB mass storage device.

### ADB over USB
This feature allows ADB (Android Debug Bridge) access to a device from an external workstation via USB. Disabling this prevents ADB connections to a device.

### Device Storage Access over USB
This feature allows access to device storage via protocols such as USM, MTP and PTP. Disabling this restricts any access to device storage via USB.

### USB Mass Storage Mode
Enable USM protocol to allow an external workstation to mount device storage, which disables device access to that storage until unmounted. Device Storage Access over USB must first be enabled.

### Media Transfer Protocol Mode
Enable MTP protocol to allow an external workstation to access device storage without blocking device access to that storage. Device Storage Access over USB must first be enabled.

### Picture Transfer Protocol Mode
Enable PTP protocol to allow an external workstation to access device storage without blocking device access to that storage. Device Storage Access over USB must first be enabled.


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UsbMgr&os=All&embed=true"></iframe> 
