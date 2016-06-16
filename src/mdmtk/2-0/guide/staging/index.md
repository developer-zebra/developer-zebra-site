#Staging a Device

##Overview

Staging a device refers to the process of taking a device out of the box and setting it up to be managed by MDM.

MXMS is required to be installed on the device in order for it to be managed by the MDM. Therefore, there are three states that a device can be in when it is taken out of the box which would determine if action needs to be taken to meet this requirement:

1. The device does not have the MXMS installed
	* All Jellybean devices do not have the MXMS installed on them out of the box. Therefore, the 4.4 version of the MXMS will need to be installed.
2. The device has an old version of MXMS installed
	* The MDM Toolkit targets the MXMS version 4.4, so MXMS will need to be upgraded to this version if the device has an older version
3. The device has the the 4.4 version of MXMS
	* Since this is the latest version of MXMS, no upgrades to MXMS would be required on these devices.
	
There are two ways that MXMS can be installed and updated on a device. These options are through the use of StageNow or sideloading. StageNow can be used to stage devices that may or may not have MXMS installed on them. This tool can create barcodes that can be scanned with the RD Client to stage the device. This method is recommened over using the sideloading option since this would require many manual steps to be performed. For more information on how to use StageNow to install and update MXMS and also to stage a device to persist the MDM Managability settings, please see the [MDM Persistence page.](../guide/MDM/persistence)

When the device is successfully staged, the device will show up on the MDM console and it will be able to be managed. Certain devices may also display a screen saying the connection was successful. After the device is connected, the MDM agent will send its status to the server on a periodic basis.