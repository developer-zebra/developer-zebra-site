# Threat

## About Threat

### Overview

The Threat Manager setting type allows your application to control what security threats a device actively monitors for and how to respond.


### Main Functionality

* Enable/Disable Threat Detection
* Perform Counter Measures when a Threat is Detected

##Parameter Notes

### Enable/Disable Threat Detection
This feature enables or disables threat detection on a device.

### Detectable Threats
* Max Password Attempts - The user attempts to log in with with the wrong password.
* MDM Client Removal - The MDM client is removed from the device.

  * MDM Client Package Name - Provide the package name of the MDM client to observe (system app only).

* Externally Detected - An intent is received that signifies a custom threat.
* Exchange Active Sync Command - While syncing with Exchange, a threat event occurs.
* Device is Rooted - Device detects that it is rooted.

### Counter Measures
* Format SdCard - Formats the external SD card. All existing data on card is lost.
* Factory Reset - Forces the device to factory reset, returning the device to the original configuration. 
* Wipe Secure Storage Keys - Removes Secure Storage Keys.
* Lock Device - Locks the device, requiring the user to perform any device unlock procedure configured for the device.
* Uninstall Application - Silently removes an application from the device. Provide the package name of the application to uninstall. 
* Unsolicited Alert - Sends an explicit intent to an application. Provide an alert message, and the package and class name of the application to notify.
* Signal Occurrence of Threat - Select whether to signal the occurrence of an externally detected threat.
  * Send threat message - Provide a message send, stating the custom threat that occurred. 


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ThreatMgr&os=All&embed=true"></iframe> 
