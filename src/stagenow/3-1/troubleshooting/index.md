---
title: StageNow Troubleshooting
layout: guide.html
product: StageNow
productversion: '3.0'
---

This section discusses errors that can occur in the StageNow Tool, and possible solutions. 

## Wi-Fi Hotspot Troubleshooting
The following error can occur when turning on the Wi-Fi hotspot in the StageNow Tool. 
 
![img](../images/TroubleWifi_Error.jpg)

Following are actions you can take to resolve the issue.

### Disable and Re-enable the Wi-Fi Adapter

1. Right-click on the Network icon on the bottom right corner of the Windows host and select Open Network and Sharing Center to open the following screen.

   ![img](../images/TroubleWifi_NWSharingCenter.jpg)

2. On the left pane, select Change adapter settings.

   ![img](../images/TroubleWifi_ChangeSettings.jpg)

3. Open a command prompt and enter "netsh wlan show drivers" to find the Wi-Fi driver adapter name.

   ![img](../images/TroubleWifi_CommandPrompt.jpg)

4. Right-click on the network adapter in the Network Connections window and select Disable. 

5. Right-click again and select Enable. After a few minutes, try using the StageNow Tool.


### Add Unsupported Wi-Fi Hotspot


   Note: Results that deviate from the following can be considered a Windows driver/software issue regarding the Wi-Fi hotspot. 


1. Open a command prompt as an Administrator.

2. Enter "netsh wlan show drivers" and locate the result message outlined in green below.

   ![img](../images/TroubleWifi_ShowDrivers.jpg)

   The following message appears if the system does not support the Wi-Fi hotspot.

   ![img](../images/TroubleWifi_NoHotspotMessage.jpg)

3. Enter the following command in the command prompt: 
"netsh wlan set hostednetwork mode=allow ssid=<HotspotName> key= <HotspotPassword>""

   Note: HotspotName is the name of Wi-Fi hotspot.

   HotspotPassword is the Wi-Fi hotspot password and must be at least 5 characters.

   The following result appears after successful creation of the Wi-Fi hotspot.
 
   ![img](../images/TroubleWifi_HotspotCreateMessage.jpg)

4. Enter "netsh wlan start hostednetwork" to start the hotspot. 
 
   ![img](../images/TroubleWifi_StartHotspot.jpg)

5. Enter "netsh wlan stop hostednetwork" to stop the hotspot. 
 
   ![img](../images/TroubleWifi_StopHotspot.jpg)

