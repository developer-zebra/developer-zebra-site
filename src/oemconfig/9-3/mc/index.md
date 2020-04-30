﻿---
title: Zebra Managed Configurations
layout: guide.html
product: OEMConfig
productversion: '9.3'
menu:
  items:
    - title: About
      url: /oemconfig/9-3/about
    - title: Setup
      url: /oemconfig/9-3/setup
    - title: FAQs
      url: /oemconfig/9-3/faq
    - title: Managed Configurations
      url: /oemconfig/9-3/mc
    - icon: fa fa-search
      url: /oemconfig/9-3/search
---

<b><font size="6" color="black"> Terms in this Guide</font></b>

## Concepts


**Define -** Used when referring to the definition in the OEMConfig schema that determines what the administrator is *permitted* to do as opposed to what an admin might *elect* to do. For example, within a *Step*, an admin is *permitted* to include one of every defined *Managed Configuration Group* but in most cases would only *elect* to include only one or a few.




**Include -** Used when referring to a decision by an administrator to *elect* to perform some Action or configuration as opposed to what the administrator is *permitted* to do, but may or may not *elect* to do. For example, an admin would be *permitted* to include one of everything, but likely would *elect* to include only one or a few.




**Instance -** A SINGLE occurrence or use of something (such as a *Step*, MC, *Group*, *Sub-group*, or *Sub-array*). An Instance might refer to the inclusion of a *Step* in a *Transaction*; an MC or *Group* in a *Step*; an MC, *Sub-group*, or *Sub-array* in a *Group*; or a *Sub-group* as an element of a *Sub-array*.






## Elements






**Transaction -** An ordered list of *Steps*, each of which specifies one or more Actions to be performed or settings to be configured on a Zebra device. *Steps* are executed in the exact order specified within the *Transaction*, but the order of execution within a *Step* is controlled by the system. The recommended means of controlling the order of execution, if required, is to use separate *Steps* within a *Transaction*.




**Step -** A collection of Actions to be performed or settings to be configured at a specific point within a Transaction. Within a *Step*, some MCs are defined directly (such as for entering an **Explanation** or selecting an **Error Mode**), but most are organized into *Managed Configuration Groups*. An instance of a *Step* can include no more than one instance of any MC or *Group* that is defined for a *Step*. Within a *Step*, all included MCs and *Groups*, and anything included within any *Groups*, are executed in an order determined by the system to afford the greatest likelihood of success. For example, the system might execute a Bluetooth configuration after an Action to enable Bluetooth because configuring Bluetooth might fail if attempted when Bluetooth was disabled.




**Group -** See *Managed Configuration Group*.




**Managed Configuration Group -** A collection of MCs, *Sub-groups*, or *Sub-arrays* that are defined to control some aspect of the device (such as **Analytics Configuration** or **Audio Configuration**). A *Group* can include no more than one instance of any MC, *Sub-group*, or *Sub-array* that is defined for that *Group*.




**Sub-group -** A collection of MCs, *Sub-groups*, or *Sub-arrays* that are defined as *permitted* to control some sub-aspect of the device (such as **Send to Cloud Detail** in **Bug Reporting Configuration**). A *Sub-group* can include no more than one instance of any MC, *Sub-group*, or *Sub-array* defined for that *Sub-group*.




**Sub-array -** An ordered list of instances of a SINGLE *Sub-group*, each of which can contain anything that is defined for that *Sub-group*. The only time the same MC, *Sub-group*, or *Sub-array* can be included more than once into the same *Step* is when it appears within different elements of a *Sub-array*. For example, the **Key Mapping Configuration* *Group* defines a *Sub-array* **Add Mapping Behaviors** that can be used to configure multiple behaviors for a single key in different modifier states (orange, green, blue, etc.). A single *Step* can include multiple instances of the MCs defined for the **Behaviors** *Sub-group*, by including them in different elements in the **Add Mapping Behaviors** *Sub-array*.






### Type Styling






- ***Bold Italic type*** indicates ***values*** of a Managed Configuration such as ***On*** or ***Enable***.
- **Bold type** indicates the name of an MC, *Group*, *Sub-group*, or *Sub-array*, such as the **Audio Configuration** *Group* or the **State** Managed Configuration.*
- *Italic type* indicates *defined terms*, such as *Transaction* and *Step*.
**NOTE: *Defined terms are Capitalized to differentiate from italics used for *emphasis*.






<b><font size="6" color="black"> Transaction Overview</font></b>






This section of the OEMConfig documentation describes all supported Managed Configurations (MCs), which can be used to define an ordered list of *Steps* for defining one or more Actions to be performed or settings to be configured on a Zebra device as part of an overall *Transaction*. Before attempting to configure a *Transaction*, it's important to understand the concept of Managed Configuration *Groups*, *Sub-groups*, *Sub-arrays*. A *Transaction* can contain one or many of these elements, and can be nested multiple levels deep.






## Transaction Steps






Specify an ordered list of *Transaction Steps* that define the Actions or configurations that you wish to perform on a device as part of an overall *Transaction*.




**Detail Information:**


- Key = steps


- Type = bundle_array




-----
## Transaction Step






Specify a single *Transaction Step* that defines one or more Actions or configurations that you wish to perform on a device at a specific point in an an overall *Transaction*.




**Detail Information:**


- Key = step


- Type = bundle




### Explanation






Enter an optional *Explanation* that describes the purpose or intended behavior of a *Transaction Step*.








Since a *Transaction* may include many *Transaction Steps* and each *Transaction Step* could include one or more configurations, describing the *Transaction Step* can be beneficial when later reviewing the *Transaction* and/or when editing a *Transaction*, and especially when reordering the *Transaction Steps* within the *Transaction*.




**Detail Information:**


- Key = stepExplanation


- Type = string




### Error Mode






Select an *Error Mode* that determines how errors that occur during the execution of a *Transaction Step* should be handled.




Since a *Transaction* may include multiple *Transaction Steps*, there may be cases where one *Transaction Step* within a *Transaction* is dependent on configuration performed by one or more preceding *Transaction Steps* in the same *Transaction*. In such cases, it may be desirable to terminate a *Transaction* if the processing of a *Transaction Step* results in an error to avoid propagating the results of that error into subsequent *Transaction Steps*.




By default, execution will continue with the next *Transaction Step* once execution of the current *Transaction Step* is completed. A decision to override this default behavior can be made independently for each *Transaction Step* within a *Transaction* by supplying an *Error Mode* value:
- If the value ***Continue*** is selected, the default behavior will be used and hence any errors that occur during the execution of the current *Transaction Step* will NOT terminate execution of subsequent *Transaction Steps* in the same *Transaction*. Execution will thus always continue with the next *Transaction Step* once execution of the current *Transaction Step* is completed.
- If the value ***Stop*** is selected, the default behavior will be overridden and hence any errors that occur during the execution of the current *Transaction Step* will terminate execution of subsequent *Transaction Steps* in the same *Transaction*. Execution will continue with the next *Transaction Step* only if execution of the current *Transaction Step* completes with NO errors.




**Detail Information:**


- Key = stepErrorMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Stop&nbsp;</small></i></b></td><td><small>&nbsp;Stop&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Continue&nbsp;</small></i></b></td><td><small>&nbsp;Continue&nbsp;</small></td></tr></table>




<b><font size="6" color="black"> Managed Configuration Groups</font></b>






A *Step* can include one or more of the following *Managed Configuration Groups*.






-----
## Analytics Configuration






Use this *Group* to configure the Analytics Client in a device.




**Detail Information:**


- Key = analyticsStep


- Type = bundle




### State






Select whether the Analytics Client on a device is turned on (enabled) or turned off (disabled).




The Analytics Client is turned on (enabled) by default on all devices:
- If the value ***Off*** is selected, the Analytics Client will be turned off (disabled), and hence it will not collect any machine data during the operation of the device and will not deliver any machine data regardless of whether connectivity is available.
- If the value ***On*** is selected, the Analytics Client will be turned on (enabled), and hence it will automatically collect machine data during the operation of the device and deliver it, when connectivity is available, to the Zebra Analytics Cloud Server.




On some devices, the ability to turn off (disable) the Analytics Client may not be supported.




**Detail Information:**


- Key = analyticsState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.3.




### User Control of State






Select whether the the Device User will be allowed to control whether the Analytics Client on a device is turned on (enabled) or turned off (disabled).




The Analytics Client is turned on (enabled) by default on all devices:
- If the value ***Off*** is selected, the Device User will not be allowed to change whether the Analytics Client is turned off (disabled) or on (enabled), and hence whether it will collect or deliver any machine data during the operation of the device.
- If the value ***On*** is selected, the Device User will be allowed to change whether the Analytics Client is turned off (disabled) or on (enabled), and hence whether it will collect or deliver any machine data during the operation of the device.




**Detail Information:**


- Key = analyticsUserControlState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.2.




-----
## App Feature Configuration






Use this *Group* to configure *Application Features* on a device.




**Detail Information:**


- Key = appFeatureStep


- Type = bundle




**Support Information:**


- Supported on Operating System(s): Pie and Oreo.




- Supported from: MX 9.3.




### App Feature State






Select whether a specified *Application Feature* should be On or Off.
- If the value ***Off*** is selected, the *Application Feature* will be turned Off.
- If the value ***On*** is selected, the *Application Feature* will be turned On.




You must also specify **App Feature Name** to provide the *Feature Name* that identifies the *Application Feature* to be turned On or Off and **App Feature Package Name** to specify the *Android Package Name* that identifies the application for which the *Application Feature* will be turned On or Off.




**Detail Information:**


- Key = appFeatureState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported on Operating System(s): Pie and Oreo.




- Supported from: MX 9.3.




### App Feature Name






Select the *Feature Name* that identifies the application for which an *Application Feature* will be turned On or Off when **App Feature State** is specified. You must also specify **App Feature Package Name** to identify the application for which the specified *Application Feature* will be turned On or Off.




**Detail Information:**


- Key = appFeatureName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Background Data&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported on Operating System(s): Pie and Oreo.




- Supported from: MX 9.3.




### App Feature Package Name






Select the *Android Package Name* that identifies the application for which an *Application Feature* will be turned On or Off when **App Feature State** is specified. You must also specify **App Feature Name** to specify the *Feature Name* that identifies the *Application Feature* that will be turned On or Off for the specified application.




**Detail Information:**


- Key = appFeaturePackageName


- Type = string




**Support Information:**


- Supported on Operating System(s): Pie and Oreo.




- Supported from: MX 9.3.




-----
## AppGallery Configuration






This *Group* is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryStep


- Type = bundle




### State






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.0.




### Push Notifications






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryPushNotifications


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.0.




### Credential Type






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryCredentialType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Custom&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.0.




### Custom User Name






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryCredentialTypeCustomUserName


- Type = string




**Support Information:**


- Supported from: MX 6.0.




### Custom Password






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryCredentialTypeCustomPassword


- Type = string




**Support Information:**


- Supported from: MX 6.0.




### Custom Organization Key






This Managed Configuration is deprecated and will be discontinued in a subsequent version.




**Detail Information:**


- Key = appgalleryCredentialTypeCustomOrganizationKey


- Type = string




**Support Information:**


- Supported from: MX 6.0.




-----
## Audio Configuration






Use this *Group* to configure the audio settings on a device.




**Detail Information:**


- Key = audioStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.2.




### Play AC Detect Sound






Select whether a notification sound will be played when the device is connected to AC power.
- If the value ***Off*** is selected, no sound will be played when AC power is connected.
- If the value ***On*** is selected, a chime will play when AC power is connected.




**Detail Information:**


- Key = audioPlayACConnectChime


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Replication Action






Select the audio replication behavior of of a device.




- If the value ***Replicate headset audio on built-in speaker*** is selected, audio routed to the headset will also be routed to the built-in speaker. This might be desirable in a situation where the Device User may walk away from a vehicle mounted device and leave his headset in the vehicle while performing some task nearby. If an audible alert is also routed to the built-in speaker, the Device User might still hear it.




- If the value ***Do not replicate headset audio on built-in speaker*** is selected, audio routed to the headset will also be routed to the built-in speaker. This might be desirable in a situation where the device is being used in an area where routing audio to the built-in speaker could be disruptive to others in the area.




**Detail Information:**


- Key = audioReplicationAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Replicate headset audio on built-in speaker&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Do not replicate headset audio on built-in speaker&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.2.




### Mute/Vibrate






Select the mute and vibrate behavior of a device.




- If the value ***Mute without Vibrate*** is selected, the volume will be muted (made silent) and the device will NOT vibrate, permitting neither audible nor tactile alerts.




- If the value ***Mute with Vibrate*** is selected, the volume will be muted (made silent) and the device will vibrate, permitting tactile but NOT audible alerts.




- If the value ***Unmute without Vibrate*** is selected, the volume will be unmuted (made audible) and the device will NOT vibrate, permitting audible but not tactile alerts.




**Detail Information:**


- Key = audioStepMuteVibrate


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Mute without Vibrate&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Mute with Vibrate&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unmute without Vibrate&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




-----
## Auto Trigger Configuration






Use this *Group* to configure whether and how *Automatic Triggering* will occur on a device.




Automatic triggering allows a Device User to initiate trigger-activated functions simply by bringing an object within proximity of the device sensor as opposed to requiring the Device User to manually initiate such functions.




**Detail Information:**


- Key = autoTriggerStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### State






Select whether and how automatic triggering should occur on a device.




- If the value ***Off*** is selected, automatic triggering will never occur and the Device User will be required to manually initiate trigger-activated functions.




- If the value ***Auto On*** is selected, automatic triggering may occur automatically if the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.




- If the value ***Always On*** is selected, automatic triggering can always occur automatically , whether the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.




**Detail Information:**


- Key = autoTriggerState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Auto On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Always On&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Range






Select the range at which automatic triggering will detect the presence of an object and initiate automatic triggering.




- If the value ***Near*** is selected, automatic triggering will occur only when an object is brought within near proximity to the device sensor. This may be desirable if the device is being worn in a holster and hence it is convenient to bring objects very close to the device sensor.




- If the value ***Far*** is selected, automatic triggering will occur when an object is brought within less near proximity to the device sensor. This may be desirable if the device is located in a stand or holder and hence it is less convenient to have to bring objects very close to the device sensor.




**Detail Information:**


- Key = autoTriggerRange


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Near&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Far&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




-----
## Blacklist Configuration






Use this *Group* to configure which System applications can/cannot be used on a device.


Blacklisting applies only to System applications, which are applications built into the device and are therefore always present. It has no effect on user applications, which are installed during staging or at some time after the device is put into service and DO NOT come preinstalled on the device. User apps are controlled using the Whitelist Configuration Group.


>WARNING: It is important to understand that an app COULD use the Blacklist Configuration Group to blacklist itself. If an app is blacklisted, then it is prevented from running once the Blacklist Configuration is successfully applied, even if the app being blacklisted was the app that requested the blacklisting to be performed.




**Detail Information:**


- Key = blacklistStep


- Type = bundle




### Action






Select an Action to enable or disable a single built-in System Application on a device.




All built-in System Applications are enabled by default on devices.




Allowing a built-in System Application allows it to be freely launched, either by the Device User or programmatically by other Applications.




Disallowing a built-in System Application prevents it from being launched, either by the Device User or programmatically by other Applications.




Since a built-in System Application is built-in, you cannot uninstall it from a device, even if you do not wish it to be used.




To prevent the use of a built-in System Application, you can disable it and thereby prevent its use, even though it remains installed.
- If the value ***Allow*** is selected, you must also specify **Allow System Package Name** to provide the *Android Package Name* that identifies the *Built-In System Application* to be allowed.
- If the value ***Disallow*** is selected, you must also specify **Disallow System Package Name** to provide the *Android Package Name* that identifies the *Built-In System Application* to be disallowed.




**Detail Information:**


- Key = blacklistAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;DisableApplication&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;EnableApplication&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Allow System Package Name






Enter the *Android Package Name* that identifies a *Built-In System Application* to be allowed when the Action value ***Allow*** is selected for **Action**.




**Detail Information:**


- Key = blacklistActionAllowSystemPackageName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Disallow System Package Name






Enter the *Android Package Name* that identifies a *Built-In System Application* to be disallowed when the Action value ***Disallow*** is selected for **Action**.




**Detail Information:**


- Key = blacklistActionDisallowSystemPackageName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




-----
## Bluetooth Configuration






Use this *Group* to configure Bluetooth settings on a device.




**Detail Information:**


- Key = bluetoothStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Discoverability






Select whether the device is *Discoverable* via Bluetooth.




Devices are NOT *Discoverable* via Bluetooth by default except when the Bluetooth Pairing screen of the Settings UI is active.
- If the value ***Off*** is selected, the default behavior will be in effect and the device will not be *Discoverable* via Bluetooth except when the Bluetooth Pairing screen of the Settings UI is active.
- If the value ***On*** is selected, the default behavior will be overridden and the device will be *Discoverable* via Bluetooth whenever Bluetooth is enabled (turned on).








**Detail Information:**


- Key = bluetoothDiscoverability


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### New Pairings






Select whether the device will accept new Bluetooth Pairings.




devices will accept new Bluetooth Pairings by default.
- If the value ***Disallow*** is selected, the default behavior will be overridden and the device will not accept new Bluetooth Pairings.
- If the value ***Allow*** is selected, the default behavior will be in effect and the device will accept new Bluetooth Pairings.




**Detail Information:**


- Key = bluetoothNewPairings


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Turn On/Off Silent Pairing






Select whether the device can silently perform Bluetooth pairings




Devices will silently perform Bluetooth Pairings by default.
- If the value ***Disallow*** is selected, the default behavior will be overridden and the device can not silently perform Bluetooth Pairings.
- If the value ***Allow*** is selected, the default behavior will be in effect and the device can silently perform Bluetooth Pairings.




Note that even when the device CAN silently perform Bluetooth Pairings, it WILL NOT do so unless **Action** is used to configure specific silent pairing rules that define how silent pairing should occur.




**Detail Information:**


- Key = bluetoothSilentPairingsState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Action






Select an Action to manage a list of rules that control Bluetooth *Silent Pairing*.




Bluetooth *Silent Pairing* allows new Bluetooth Pairings to be automatically completed without Device User interaction, if permitted by defined rules. By defining the right set of rules, you can allow pairings between certain types of peripheral devices and a device happen automatically. By automatically is meant that if a pairing is established by an application running on a device, or at the request of a peripheral device, that pairing can complete without Device User approval or interaction.




Since the list of rules is empty by default on devices, Bluetooth *Silent Pairing* is disabled by default, hence all new Bluetooth Pairings will occur manually and thus will require Device User interaction to complete . Once one or more rules are added, new pairings to selected peripheral devices identified by these rules will be allowed to occur automatically while all new other new pairings will continue to occur manually.
- If the value ***AddRule*** is selected:
    - You must also specify **Add Rule Name**, to provide the name of the new rule to be added or **Add Rule MAC Address**, to provide the Bluetooth MAC Address of the new rule to be added.
    - You must also specify **Add Rule Device Class** or **Add Rule Device Upper Address Part** to provide the criteria that the new rule will use to determine which new Bluetooth Pairings will be allowed.
- If the value ***RemoveRule*** is selected, you must specify at least one of the following to provide the information that will be used to determine which rule or rules, which have matching information, will be removed:
    - **Remove Rule Name**, to provide the name of the existing rule to be removed or **Remove Rule MAC Address** to provide the Bluetooth MAC Address of the existing rule to be removed
    - **Remove Rule Device Class**
    - **Remove Rule Device Upper Address Part**
- If the value ***RemoveAllRules*** is selected, you do not need to specify any additional information.




**Detail Information:**


- Key = bluetoothAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AddRule&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoveRule&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoveAllRules&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Add Rule Name






Enter a name for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***AddRule*** is selected for **Action**.








Note that you can specify **Add Rule Name** or **Add Rule MAC Address**, but not both.




**Detail Information:**


- Key = bluetoothActionAddRuleName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Add Rule MAC Address






Enter the Bluetooth MAC Address XX:XX:XX:XX:XX:XX for a new rule to be added from the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***AddRule*** is selected for **Action**.








Note that you can specify **Add Rule Name** or **Add Rule MAC Address**, but not both.




**Detail Information:**


- Key = bluetoothActionAddRuleMACAddress


- Type = string




**Support Information:**


- Supported on Operating System(s): Pie




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Add Rule Device Class






Enter the *Device Class* for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***AddRule*** is selected for **Action**.




When a *Device Class* is specified for a rule, Bluetooth *Silent Pairing* will automatically complete new Bluetooth Pairings for Bluetooth devices that have the specified *Device Class*.




**Detail Information:**


- Key = bluetoothActionAddRuleDeviceClass


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Add Rule Device Upper Address Part






Enter the *Device Upper Address Part* for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***AddRule*** is selected for **Action**.




When a *Device Upper Address Part* is specified for a rule, Bluetooth *Silent Pairing* will automatically complete new Bluetooth Pairings for Bluetooth devices that have the specified *Device Upper Address Part* in the upper part of their *Bluetooth Address*.




**Detail Information:**


- Key = bluetoothActionAddRuleUpperAddressPart


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Add Rule Pairing PIN Code






Enter the *Pairing PIN Code* for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***AddRule*** is selected for **Action**.








When a *Pairing PIN Code* is specified for a rule, and the device has a Bluetooth version prior to 2.1, Bluetooth *Silent Pairing* will automatically use the specified *Pairing PIN Code* to complete Bluetooth Silent Pairings enabled by the *Silent Pairing Rule*.










When the device has a Bluetooth version 2.1 or later, a *Pairing PIN Code* is not required to complete Bluetooth Silent Pairings enabled by the *Silent Pairing Rule*.




**Detail Information:**


- Key = bluetoothActionAddRulePIN


- Type = string




**Support Information:**


- Supported on Operating System(s): Pie




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Remove Rule Name






Enter the name that identifies an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***RemoveRule*** is selected for **Action**.








Any existing rule that has the specified name will be removed.








Note that you can specify **Remove Rule Name** or **Remove Rule MAC Address**, but not both.




**Detail Information:**


- Key = bluetoothActionRemoveRuleName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Remove Rule MAC Address






Enter the Bluetooth MAC Address XX:XX:XX:XX:XX:XX that identifies an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***RemoveRule*** is selected for **Action**.








Any existing rule that has the specified Bluetooth MAC Address will be removed.








Note that you can specify **Remove Rule Name** or **Remove Rule MAC Address**, but not both.




**Detail Information:**


- Key = bluetoothActionRemoveRuleMACAddress


- Type = string




**Support Information:**


- Supported on Operating System(s): Pie




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Remove Rule Device Class






Enter the *Device Class* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***RemoveRule*** is selected for **Action**








Any existing rule or rules that have the specified *Device Class* will be removed.




**Detail Information:**


- Key = bluetoothActionRemoveRuleDeviceClass


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Remove Rule Device Upper Address Part






Enter the *Device Upper Address Part* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* when the Action value ***RemoveRule*** is selected for **Action**.


Any existing rule or rules that have the specified *Device Upper Address Part* will be removed.




**Detail Information:**


- Key = bluetoothActionRemoveRuleUpperAddressPart


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Remove Rule Pairing PIN Code






Enter the Pairing PIN Code if remote device is prior to BT 2.1, This Feature is available from Android P onward.




**Detail Information:**


- Key = bluetoothActionRemoveRulePIN


- Type = string




**Support Information:**


- Supported on Operating System(s): Pie




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




-----
## Bug Reporting Configuration






Use this *Group* to configure Bug Reporting on a device.




**Detail Information:**


- Key = bugreportStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Extensions State






Select whether the Standard Android or Zebra Extended Bug Reporting should be used for generation of Bug Reports from a device.
- If the value ***Off*** is selected, Standard Android Bug Reporting will be used, with no Zebra Extensions or Enhancements.
- If the value ***On*** is selected, Zebra Extended Bug Reporting. You may also need to specify additional configuration with the Group to configure the desired behavior and options of Zebra Extended Bug Reporting.




**Detail Information:**


- Key = bugreportBugReportProfile


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;old&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;new&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### Intent Enable






Select whether the Zebra Extended Bug Reporting should allow a Bug Report to be initiated by an application by sending a broadcast intent with an action value of *com.symbol.mxmf.intent.START_FOR_BUG_REPORT*. This is meaningful only when Zebra Extended Bug Reporting is enabled.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting, if enabled, will not initiate a Bug Report when the defined intent is received.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, if enabled, will initiate a Bug Report when the defined intent is received.




**Detail Information:**


- Key = bugreportEnableIntent


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Screenshot Enable






Select whether the Zebra Extended Bug Reporting should be allowed to capture screenshots and attach them to Bug Reports.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting, if enabled, will not capture Bug Reports nor attach them to Bug Reports.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, if enabled, will capture Bug Reports and attach them to Bug Reports.




**Detail Information:**


- Key = bugreportEnableScreenshot


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Show In Power Key Menu






Select whether Zebra Extended Bug Reporting should display an option to initiate a Bug Report in the menu which appears after long-pressing the power key on the device.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting will NOT add an option to the menu.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, will add an option to the menu.




**Detail Information:**


- Key = bugreportEnableBRInPwrMenu


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### ANR Error Action






Select whether Zebra Extended Bug Reporting should watch for the occurrence of Application Not Responding (ANR) errors and take action when they are detected.
- If the value ***Do not capture*** is selected, Zebra Extended Bug Reporting will NOT watch for the occurrence of ANR errors, and hence will take no action if they occur.
- If the value ***Capture bug report*** is selected, Zebra Extended Bug Reporting will watch for the occurrence of ANR errors, and will automatically initiate a Bug Report each time it detects that one has occurred.
- If the value ***Capture logcat log*** is selected, Zebra Extended Bug Reporting will watch for the occurrence of ANR errors, and will automatically initiate a Logcat capture each time it detects that one has occurred.




**Detail Information:**


- Key = bugreportANRErrAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do not capture&nbsp;</small></i></b></td><td><small>&nbsp;NoCapture&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Capture bug report&nbsp;</small></i></b></td><td><small>&nbsp;CaptureBR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Capture logcat log&nbsp;</small></i></b></td><td><small>&nbsp;CaptureLogcat&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




### Unexpected Error Action






Select whether Zebra Extended Bug Reporting should watch for the occurrence of Unexpected Application Errors (UAEs) and take action when they are detected.
- If the value ***Do not capture*** is selected, Zebra Extended Bug Reporting will NOT watch for the occurrence of UAEs, and hence will take no action if they occur.
- If the value ***Capture bug report*** is selected, Zebra Extended Bug Reporting will watch for the occurrence of UAEs, and will automatically initiate a Bug Report each time it detects that one has occurred.
- If the value ***Capture logcat log*** is selected, Zebra Extended Bug Reporting will watch for the occurrence of UAEs, and will automatically initiate a Logcat capture each time it detects that one has occurred.




**Detail Information:**


- Key = bugreportUnexpectedErrAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do not capture&nbsp;</small></i></b></td><td><small>&nbsp;NoCapture&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Capture bug report&nbsp;</small></i></b></td><td><small>&nbsp;CaptureBR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Capture logcat log&nbsp;</small></i></b></td><td><small>&nbsp;CaptureLogcat&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




### Send to Cloud Detail






Use this *Sub-group* to configure whether copies of generated Bug Reports will be automatically emailed and, if so, the details of the email that should be sent.




**Detail Information:**


- Key = bugreportCloudDetails


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### State






Select whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports to the Zebra Cloud Server.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting will NOT send copies of generated Bug Reports to the Zebra Cloud Server.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, if enabled, will send copies of all generated Bug Reports to the Zebra Cloud Server.




**Detail Information:**


- Key = bugreportCloudEnable


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Time to Live






Enter a timeout value, the expiration of which will cause the sending Bug Reports to the Zebra Cloud Server to automatically cease.
- If the value ***Never Expire*** is selected, and Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server via the Group **Send to Cloud Detail**, Zebra Extended Bug Reporting will continue to send Bug Reports to the Zebra Cloud Server, until the configuration is explicitly changed again.
- If any other value is selected, at the time Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server via the Group **Send to Cloud Detail**, Zebra Extended Bug Reporting will start a timer from the specified timeout value and will cease sending Bug Reports to the Zebra Cloud Server when the timer expires, until the configuration is explicitly changed again.




**Detail Information:**


- Key = bugreportCloudTTL


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never Expire&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Day&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Week&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 Weeks&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Month&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3 Months&nbsp;</small></i></b></td><td><small>&nbsp;90&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6 Months&nbsp;</small></i></b></td><td><small>&nbsp;180&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Year&nbsp;</small></i></b></td><td><small>&nbsp;365&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Store in Device Detail






Use this *Sub-group* to configure whether copies of generated Bug Reports will be stored in the Zebra device and, if so, where in the device they will be stored.




**Detail Information:**


- Key = bugreportStorageDetails


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### State






Select whether Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting will NOT store copies of generated Bug Reports in the device.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, if enabled, will store copies of generated Bug Reports in the device.




**Detail Information:**


- Key = bugreportStorageEnable


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### File Path






Enter the path where Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device when the value ***On*** is selected for **State**.




Note that either fixed or removable storage are supported, but the specified path must be valid at the time Bug Report is generated. If no path is specified, bug reports are stored in /storage/sdcard0/BugReports/, which will always be a valid path for storage of Bug Reports on all devices.




**Detail Information:**


- Key = bugreportBugReportFilePath


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Time to Live






Enter a timeout value, the expiration of which will cause the storing of Bug Reports in the device to automatically cease.
- If the value ***Never Expire*** is selected, and when Zebra Extended Bug Reporting is configured to store Bug Reports in the device via the Group **Store in Device Detail**, Zebra Extended Bug Reporting will continue to store Bug Reports in the device until the configuration is explicitly changed again.
- If any other value is selected, at the time Zebra Extended Bug Reporting is configured to store Bug Reports in the device via the Group **Store in Device Detail**, a timer will be started for the specified timeout value and when that timer expires, Zebra Extended Bug Reporting will cease storing Bug Reports in the device, until the configuration is explicitly changed again.




**Detail Information:**


- Key = bugreportStorageTTL


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never Expire&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Day&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Week&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 Weeks&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Month&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3 Months&nbsp;</small></i></b></td><td><small>&nbsp;90&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6 Months&nbsp;</small></i></b></td><td><small>&nbsp;180&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Year&nbsp;</small></i></b></td><td><small>&nbsp;365&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Send Via Email Detail






Use this *Sub-group* to configure whether copies of generated Bug Reports will be automatically emailed and, if so, the details of the email that should be sent.




**Detail Information:**


- Key = bugreportEmailDetails


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### State






Select whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports via email.
- If the value ***Off*** is selected, Zebra Extended Bug Reporting will NOT send copies of generated Bug Reports via email.
- If the value ***On*** is selected, Zebra Extended Bug Reporting, if enabled, will send copies of generated Bug Reports via email. You should also specify additional information to provide the details of the email to be sent.




**Detail Information:**


- Key = bugreportEmailEnable


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;False&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;True&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### SMTP Host






Enter the address or host name of the SMTP (email) Server via which emails will be sent to deliver generated Bug Reports, and should be specified when the value ***On*** is selected for **State**.




Note that you must have access to an email account on the selected SMTP Server and you must specify additional configuration within the Group to configure Zebra Extended Bug Reporting to send emails via that SMTP Server. In addition, you must have access to a valid email account to use as the destination of the emails, which is NOT required to be on the same SMTP Server, and must specify details of the email address within the Group, to configure Zebra Extended Bug Reporting to send the emails to that destination.




**Detail Information:**


- Key = bugreportEmailSMTPHost


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### SMTP Port






Enter the TCP port number of the SMTP (email) Server via which emails will be sent to deliver generated Bug Reports when **SMTP Host** is specified.




**Detail Information:**


- Key = bugreportEmailSMTPPort


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Sender ID






Enter the ID of the email account that will be used as the source (from address) of emails that will be sent to deliver generated Bug Reports, and should be specified when the value ***On*** is selected for **State** and when a valid SMTP (email) Server is specified via **SMTP Host**.




Note that you must have access to a valid email account on the configured SMTP (email) Server and must specify additional information in the Group, such as **Sender Password** to enable Zebra Extended Bug Reporting to successfully send the emails using that account via that server.




**Detail Information:**


- Key = bugreportEmailSendersID


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Sender Password






Enter the password of the email account that will be used as the source (from address) of emails that will be sent to deliver generated Bug Reports, and should be specified when the value ***On*** is selected for **State** and a valid SMTP (email) Server is specified via **SMTP Host** and a valid email address is specified via **Sender ID**.




**Detail Information:**


- Key = bugreportEmailSendersPassword


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Send To Address






Enter the email address of the email account that will be used as the destination (to address) of emails that will be sent to deliver generated Bug Reports, and should be specified when the value ***On*** is selected for **State**.




**Detail Information:**


- Key = bugreportEmailSendTo


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Time to Live






Enter a timeout value, the expiration of which will cause the sending of Bug Reports via email to automatically cease.
- If the value ***Never Expire*** is selected, and Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server via the Group **Send Via Email Detail**, Zebra Extended Bug Reporting will continue to send Bug Reports via email, until the configuration is explicitly changed again.
- If any other value is selected, at the time Zebra Extended Bug Reporting is configured to send Bug Reports via email via the Group **Send Via Email Detail**, Zebra Extended Bug Reporting will start a timer from the specified timeout value and will cease sending Bug Reports via email when the timer expires, until the configuration is explicitly changed again.




**Detail Information:**


- Key = bugreportEmailTTL


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never Expire&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Day&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Week&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 Weeks&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Month&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3 Months&nbsp;</small></i></b></td><td><small>&nbsp;90&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6 Months&nbsp;</small></i></b></td><td><small>&nbsp;180&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 Year&nbsp;</small></i></b></td><td><small>&nbsp;365&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Dialog Elements






Use this *Sub-array* to customize the dialog that will be presented to the Device User to collect information that will be included in generated Bug Reports.




**Detail Information:**


- Key = bugreportDialogElements


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




#### Element Detail






Use this *Sub-group* to define a single element of a dialog the Device User will use to provide Bug Report information.




**Detail Information:**


- Key = bugreportDialogElement


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




##### Type






Select the type of a single dialog element being included in the dialog that will be presented to the Device User to collect information that will be included in generated Bug Reports.
- If the value ***ErrorNameTextBox*** is selected, a text box will be added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered. You must also specify **Error Name Text Box Text** to provide a text to be pre-populated into the text box.
- If the value ***Label*** is selected, a text label will be added to the dialog presented to the Device User. You must also specify **Label Text** to provide the text to be populated into the label.
- If the value ***TextBox*** is selected, a text box will be added to the dialog presented to the Device User in which generic text can be entered. You must also specify **Text Box Text** to provide the text to be pre-populated into the text box. The specified text will to provide guidance to the Device User about the expected value and will disappear when the user begins typing into the text box.
- If the value ***VoiceRecordButton*** is selected, a voice record button will be added to the dialog presented to the Device User. Clicking this button will allow the Device User to record a verbal explanation of the bug to be attached to the generated Bug Report.




**Detail Information:**


- Key = bugreportDialogElementType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;ErrorNameTextBox&nbsp;</small></i></b></td><td><small>&nbsp;AddErrorNameTextBox&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Label&nbsp;</small></i></b></td><td><small>&nbsp;AddLabel&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TextBox&nbsp;</small></i></b></td><td><small>&nbsp;AddTextBox&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VoiceRecordButton&nbsp;</small></i></b></td><td><small>&nbsp;AddVoiceRecordButton&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




##### Error Name Text Box Text






Enter the text to be pre-populated into a text box that will be added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered and should be specified when the value ***ErrorNameTextBox*** is selected for **Type**.




**Detail Information:**


- Key = bugreportDialogElementTypeErrorNameTextBoxText


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




##### Label Text






Enter the text of a label that will be added to the dialog presented to the Device User when the value ***Label*** is selected for **Type**.




**Detail Information:**


- Key = bugreportDialogElementTypeLabelText


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




##### Text Box Text






Enter the text that be pre-populated into a text box added to the dialog presented to the Device User into which generic text can be entered and should be specified when the value ***TextBox*** is selected for **Type**. The specified text should provide guidance to the Device User about the value they should enter and will be overwritted by the value entered into the text box.




**Detail Information:**


- Key = bugreportDialogElementTypeTextBoxText


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### Dialog Time Out






Enter the amount of inactivity time (time in milliseconds with no Device User activity), after which the dialog presented to the Device User will automatically be dismissed, causing the Bug Report to be completed as if the Device User had explicitly clicked the *Submit Button*.




**Detail Information:**


- Key = bugreportDialogTimeout


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




-----
## Camera Configuration






Use this *Group* to configure which camera(s) or other image capture devices can be used to take pictures on a device.




**Detail Information:**


- Key = cameraStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Use Of Back Camera






Select whether the Rear Facing Camera, if present on a device, can be used to take pictures.
- If the value ***Off*** is selected, no applications or services running on the device will be allowed to take pictures using the Rear Facing Camera.
- If the value ***On*** is selected, any applications or services running on the device will be allowed to take pictures using the Rear Facing Camera.




**Detail Information:**


- Key = cameraUseOfBack


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Use Of Front Camera






Select whether the Front Facing (selfie) Camera, if present on a device, can be used to take pictures.
- If the value ***Off*** is selected, no applications or services running on the device will be allowed to take pictures using the Front Facing (selfie) Camera.
- If the value ***On*** is selected, any applications or services running on the device will be allowed to take pictures using the Front Facing (selfie) Camera.




**Detail Information:**


- Key = cameraUseOfFront


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Use Of Imager






Select whether the Imager (special-purpose image capture device), if present on a device, can be used to take pictures.
- If the value ***Off*** is selected, no applications or services running on the device will be allowed to take pictures using the Imager (special-purpose image capture device) Camera.
- If the value ***On*** is selected, any applications or services running on the device will be allowed to take pictures using the Imager (special-purpose image capture device) Camera.




**Detail Information:**


- Key = cameraUseOfImager


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




-----
## Clock Configuration






Use this *Group* to configure the operation and state of the clock on a device.




**Detail Information:**


- Key = clockStep


- Type = bundle




### Time Mode






Select whether time and date configuration will be performed explicitly, through configuration, or automatically, by connecting to a Network Time Protocol (NTP) Server.




**Detail Information:**


- Key = clockTimeMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Manual&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Auto&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Manual Date






Enter the date to be set on a device when the value ***Manual*** is selected for **Time Mode**.




**Detail Information:**


- Key = clockManualDate


- Type = string




**Support Information:**


- Supported from: MX 4.1.




### Manual Time






Enter the time to be set on a device when the value ***Manual*** is selected for **Time Mode**.




**Detail Information:**


- Key = clockManualTime


- Type = string




**Support Information:**


- Supported from: MX 4.1.




### Auto NTP Server Address






Enter the address of the Network Time Protocol (NTP) Server to be used to perform automatic date and time configuration on a device when the value ***Auto*** is selected for **Time Mode**.




**Detail Information:**


- Key = clockAutoNtpServer


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Auto NTP Sync Interval






Enter the interval at which automatic date and time configuration will be performed on a device when the value ***Auto*** is selected for **Time Mode**.




**Detail Information:**


- Key = clockAutoNtpSyncInterval


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;30 minutes&nbsp;</small></i></b></td><td><small>&nbsp;00:30:00&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;60 minutes&nbsp;</small></i></b></td><td><small>&nbsp;00:60:00&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6 hours&nbsp;</small></i></b></td><td><small>&nbsp;06:00:00&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;24 hours&nbsp;</small></i></b></td><td><small>&nbsp;24:00:00&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Time Zone Mode






Select whether time zone configuration will be performed explicitly, using other configurations in the Group, or automatically, by connecting to a Network Identity and Time Zone (NITZ) source.




**Detail Information:**


- Key = clockTimeZoneMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Manual&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Auto&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.0.




### Zone






Enter the time zone to be set on a device when the value ***Manual*** is selected for **Time Zone Mode**.




**Detail Information:**


- Key = clockManualTimeZone


- Type = string




**Support Information:**


- Supported from: MX 4.1.




### Time Format






Select whether the format in which time will be displayed on the device will be in ***12*** hour (AM/PM) or ***24*** hour (military) format.




**Detail Information:**


- Key = clockTimeFormat


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;12&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;24&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.0.




-----
## DHCP Option Configuration






Use this *Group* to configure the Dynamic Host Configuration Protocol (DHCP) Client on a device.








The DHCP Client on the device sends a DHCP Request to a DHCP Server and receives back a DHCP Acknowledgment. A DHCP Request sent by a device can contain information about the device or the DHCP Client, and can contain requests for additional information from the DHCP Server. A DHCP Acknowledgment sent by the DHCP Server contains the IP Address assigned to the device by the DHCP Server along with other related information and any additional information requested by the device in the DHCP Request.




DHCP Options are variable-length strings that are identified by DHCP Options Numbers that can be included in a DHCP Request or a DHCP Acknowledgment to convey information between a DHCP Client and a DHCP Server. From the point of view of the device where the DHCP Client is running, a DHCP Option can allow the DHCP Client to *Send* information to the DHCP Server or can allow the DHCP Client to *Request* the DHCP Server to return information to the DHCP Client.




**Detail Information:**


- Key = dhcpStep


- Type = bundle




### Request Boot File Name (Option 67)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Boot File Name* and return it using *DHCP Option 67* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestBootFileName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request Broadcast Address (Option 28)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Broadcast Address* and return it using *DHCP Option 28* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestBroadcastAddress


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request NTP Server (Option 42)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *NTP Server* and return it using *DHCP Option 42* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestNtpServer


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request TFTP Server Address (Option 66)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *TFTP Server Address* and return it using *DHCP Option 66* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestTftpServerAddress


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request Vendor Encapsulated Options (Option 43)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Vendor Encapsulated Options* and return whatever is acquired using *DHCP Option 43* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestVendorEncapsulated


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.5.




### Request Domain Search List (Option 119)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Domain Search List* and return it using *DHCP Option 119* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestDomainSearchList


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request TFTP Server Names (Option 150)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *TFTP Server Name(s)* and return it using *DHCP Option 150* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestTftpServerNames


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Request Vendor Specific Option#1 (Option 186)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *First Vendor Specific Option* and return it using *DHCP Option 186* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestVendorSpecific1


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.5.




### Request Vendor Specific Option#2 (Option 188)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Second Vendor Specific Option* and return it using *DHCP Option 188* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestVendorSpecific2


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.5.




### Request Vendor Specific Option#3 (Option 230)






Select whether the DHCP Client on a device will request that the DHCP Server acquire the *Third Vendor Specific Option* and return it using *DHCP Option 230* along with the IP Address.




**Detail Information:**


- Key = dhcpRequestVendorSpecific3


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




### Send Client Identifier State (Option 61)






Select whether the DHCP Client on a device will send a *Client Identifier* to the DHCP Server using *DHCP Option 61* when requesting an IP Address.
- If the value ***Off*** is selected, you do not need to specify any additional information.
- If the value ***On*** is selected, you must also specify **Send Client Identifier State (Option 61)** to provide the value of the *Client Identifier* to be sent.




**Detail Information:**


- Key = dhcpSendClientIdentifierState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




### Send Client Identifier Value (Option 61)






Enter the *Client Identifier* that the DHCP Client on a device will send to the DHCP Server using *DHCP Option 12* when requesting an IP Address when the value ***On*** is selected for **Send Client Identifier State (Option 61)**.




**Detail Information:**


- Key = dhcpSendClientIdentifierValue


- Type = string




**Support Information:**


- Supported from: MX 6.3.




### Send Host Name State (Option 12)






Select whether the DHCP Client on a device will send a *Host Name* to the DHCP Server using *DHCP Option 12* when requesting an IP Address.
- If the value ***Off*** is selected, you do not need to specify any additional information.
- If the value ***On*** is selected, you must also specify **Send Host Name Value (Option 12)** to provide the value of the *Host Name* to be sent.




**Detail Information:**


- Key = dhcpSendHostNameState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Send Host Name Value (Option 12)






Enter the *Host Name* that the DHCP Client on a device will send to the DHCP Server using *DHCP Option 12* when requesting an IP Address when the value ***On*** is selected for **Send Host Name State (Option 12)**.




**Detail Information:**


- Key = dhcpSendHostNameValue


- Type = string




**Support Information:**


- Supported from: MX 4.4.




### Send User Class State (Option 77)






Select whether the DHCP Client on a device will send a *User Class* to the DHCP Server using *DHCP Option 77* when requesting an IP Address.
- If the value ***Off*** is selected, you do not need to specify any additional information.
- If the value ***On*** is selected, you must also specify **Send User Class Value (Option 77)** to provide the value of the *User Class* to be sent.




**Detail Information:**


- Key = dhcpSendUserClassState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.4.




### Send User Class Value (Option 77)






Enter the *User Class* that the DHCP Client on a device will send to the DHCP Server using *DHCP Option 77* when requesting an IP Address when the value ***On*** is selected for **Send User Class State (Option 77)**.




**Detail Information:**


- Key = dhcpSendUserClassValue


- Type = string




**Support Information:**


- Supported from: MX 4.4.




### Send Vendor Class State (Option 60)






Select whether the DHCP Client on a device will send a *Vendor Class* to the DHCP Server using *DHCP Option 60* when requesting an IP Address.
- If the value ***Off*** is selected, you do not need to specify any additional information.
- If the value ***On*** is selected, you must also specify **Send Vendor Class Value (Option 60)** to provide the value of the *Vendor Class* to be sent.




**Detail Information:**


- Key = dhcpSendVendorClassState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.5.




### Send Vendor Class Value (Option 60)






Enter the *Vendor Class* that the DHCP Client on a device will send to the DHCP Server using *DHCP Option 60* when requesting an IP Address when the value ***On*** is selected for **Send Vendor Class State (Option 60)**.




**Detail Information:**


- Key = dhcpSendVendorClassValue


- Type = string




**Support Information:**


- Supported from: MX 4.5.




### Send FQDN State (Option 81)






Select whether the DHCP Client on a device will send a *Fully Qualified Domain Name (FQDN)* to the DHCP Server using *DHCP Option 81* when requesting an IP Address.
- If the value ***Off*** is selected, you do not need to specify any additional information.
- If the value ***On*** is selected, you must also specify **Send FQDN Value (Option 81)** and **Send FQDN Flag (Option 81)** to provide the value of the *FQDN value* and the associated flags to be sent.




**Detail Information:**


- Key = dhcpSendFqdnState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




### Send FQDN Value (Option 81)






Enter the *Fully Qualified Domain Name (FQDN)* that will be sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address when the value ***On*** is selected for **Send FQDN State (Option 81)**. You must also specify **Send FQDN Flag (Option 81)** to provide the flags to be sent along with the *FQDN value*.




**Detail Information:**


- Key = dhcpSendFqdnValue


- Type = string




**Support Information:**


- Supported from: MX 6.3.




### Send FQDN Flag (Option 81)






Enter the flags to be sent along with the *Fully Qualified Domain Name (FQDN)* that will be sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address when the value ***On*** is selected for **Send FQDN State (Option 81)** and when **Send FQDN Value (Option 81)** is specified.




**Detail Information:**


- Key = dhcpSendFqdnFlag


- Type = string




**Support Information:**


- Supported from: MX 6.3.




### Request Custom Option Number






Enter the option number of a custom DHCP Option that the DHCP Client on a device should request from DHCP Server and return along with the IP Address when the value ***On*** is selected for **Request Custom Option State**.




**Detail Information:**


- Key = dhcpRequestCustomOptionNumber


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Request Custom Option State






Select whether the DHCP Client on a device will request that the DHCP Server acquire a custom DHCP option and return it along with the IP Address.
- If the value ***Off*** is selected, no custom DHCP Option will be requested and you do not need to specify any additional information.
- If the value ***On*** is selected, a custom DHCP Option will be requested and you must also specify **Request Custom Option Number** to provide the custom option number to be requested.




**Detail Information:**


- Key = dhcpRequestCustomOptionState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Send Custom Option Number






Enter the option number of a custom DHCP Option that the DHCP Client on a device should send when requesting an IP Address when the value ***On*** is selected for **Send Custom Option State**.




**Detail Information:**


- Key = dhcpSendCustomOptionNumber


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Send Custom Option State






Select whether the DHCP Client on a device will request that the DHCP Server send a custom DHCP option when requesting an IP Address.
- If the value ***Off*** is selected, no custom DHCP Option will be sent you do not need to specify any additional information.
- If the value ***On*** is selected, a custom DHCP Option will be sent and you must also specify **Send Custom Option Number** to provide the custom option number to be sent and **Send Custom Option Value** to provide the custom option value to be sent.




**Detail Information:**


- Key = dhcpSendCustomOptionState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Send Custom Option Value






Enter the option value for a custom DHCP Option that the DHCP Client on a device should send when requesting an IP Address when the value ***On*** is selected for **Send Custom Option State** and when **Send Custom Option Number** is specified.




**Detail Information:**


- Key = dhcpSendCustomOptionValue


- Type = string




**Support Information:**


- Supported from: MX 8.1.




-----
## DataWedge Configuration






Use this *Group* to configure DataWedge settings on a device.




**Detail Information:**


- Key = dataWedgeStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Database File






Enter the device path and file name of a DataWedge Database file (full or partial) to replace or be merged to modify the current configuration of DataWedge.




**Detail Information:**


- Key = dataWedgeDatabaseFile


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Automatic Database Import






Select whether DataWedge Database Files deployed to the DataWedge autoimport folder on the device will automatically trigger importing of the file.




**Detail Information:**


- Key = dataWedgeAutoImport


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Manual Configuration






Select whether Device Users will be allowed to manually alter the configuration of DataWedge from the DataWedge configuration UI.API.




**Detail Information:**


- Key = dataWedgeManualConfiguration


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Programmatic Import






Select whether whether applications will be allowed to programmatically import DataWedge Configuration Files using the DataWedge Intent API.




**Detail Information:**


- Key = dataWedgeApiImport


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




-----
## Device Administration Configuration






Use this *Group* to perform Device Administration functions, such as:
- Control which applications and services are allowed to submit XML for processing by the Zebra MX Management System on a device
- Submit XML for processing by the Zebra MX Management System
- Reserve (and unreserve) application User IDs
- Control which applications can override the global setting for background data




**Detail Information:**


- Key = devadminStep


- Type = bundle




### Action






Select an Action to control access to or utilize the Zebra MX Management System on a device.
- If the value ***AllowSubmitXml*** is selected, a single application or service is allowed to submit XML for processing by the Zebra MX Management System. You must also specify **Allow Submit XML Package Name** to provide the *Android Package Name* that identifies the application or service is to be allowed.
- If the value ***DisallowSubmitXml*** is selected, a single application service is disallowed from submitting XML for processing by the Zebra MX Management System. You must also specify **Disallow Submit XML Package Name** to provide the *Android Package Name* that identifies the application or service is to be disallowed.
- If the value ***SubmitXml*** is selected, you must also specify **Submit XML** to provide the XML string that will be submitted for processing by the .Zebra MX Management System.
- If the value ***ReserveUID*** is selected, you must also specify **Reserve User ID Package Name** to identify the particular package to which the User ID is reserved.
- You must also specify **Reserve User ID Package Signature** to assure that the package to which the User ID is reserved is the right one.
- If the value ***UnreserveUID*** is selected, you must also specify **Unreserve User ID Package Name** to identify the particular package to which the User ID is reserved.




**Detail Information:**


- Key = devadminAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AllowSubmitXml&nbsp;</small></i></b></td><td><small>&nbsp;AllowSubmitXml&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DisallowSubmitXml&nbsp;</small></i></b></td><td><small>&nbsp;DisallowSubmitXml&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SubmitXml&nbsp;</small></i></b></td><td><small>&nbsp;SubmitXml&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ReserveUID&nbsp;</small></i></b></td><td><small>&nbsp;ReserveUID&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UnreserveUID&nbsp;</small></i></b></td><td><small>&nbsp;UnreserveUID&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.2.




### Allow Submit XML Package Name






Enter the *Android Package Name* that identifies the application or service is to be allowed when the value ***AllowSubmitXml*** is selected for **Action**.




**Detail Information:**


- Key = devadminActionAllowSubmitXmlPackageName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Disallow Submit XML Package Name






Enter the *Android Package Name* that identifies the application or service is to be disallowed when the value ***DisallowSubmitXml*** is selected for **Action**.




**Detail Information:**


- Key = devadminActionDisallowSubmitXmlPackageName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Submit XML






Enter an XML string to be submitted for processing by the .Zebra MX Management System, when the value ***SubmitXml*** is selected for **Action**.




**Detail Information:**


- Key = devadminActionSubmitXml


- Type = string




**Support Information:**


- Supported from: MX 9.1.




### Reserve User ID Package Name






Enter the *Android Package Name* of the application needing a reserved UID, when the value ***ReserveUID*** is selected for **Action**.




**Detail Information:**


- Key = devadminActionReserveUIDPackageName


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Reserve User ID Package Signature






Enter the *Android Package Signature* of the application needing a reserved UID, when the value ***ReserveUID*** is selected for **Action**.
The value entered must be the Base 64 encoded content of the DER format certificate used to sign the application. The DER-format certificate can be obtained from the application author or can be extracted from the APK file if necessary. Base 64 encoding must be performed to ensure that the value is suitable for transmission as a Managed Configuration.




**Detail Information:**


- Key = devadminActionReserveUIDPackageSignature


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Unreserve User ID Package Name






Enter the *Android Package Name* of the application whose user ID can be released (unreserved), when the value ***UnreserveUID*** is selected for **Action**.




**Detail Information:**


- Key = devadminActionUnreserveUIDPackageName


- Type = string




**Support Information:**


- Supported from: MX 9.2.




-----
## Device Central Configuration






Use this *Group* to configure Device Central behavior on a device.




**Detail Information:**


- Key = deviceCentralStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Bluetooth On/Off Control






Select whether the Device User should be allowed to use the Device Central UI to control Bluetooth Power.




- If the value ***Disallow*** is selected, Device Central will NOT provide UI that allows the Device User to control the Bluetooth power state.




- If the value ***Allow*** is selected, Device Central will provide UI that allows the Device User to control the Bluetooth power state.




**Detail Information:**


- Key = deviceCentralBluetoothOnOffControl


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Bluetooth Pairing Control






Select whether Device Central system should allow multiple pairings to the same Device Class.
- If the value ***Single Pairing Per Device Class*** is selected, Device Central system will only allow one pairing at a time for each Bluetooth Device Class (e.g. one headset and one printer).
- If the value ***Multiple Pairings Per Device Class*** is selected, Device Central system will allow multiple pairings at a time for each Bluetooth Device Class (e.g. multiple headsets and/or multiple printers).




**Detail Information:**


- Key = deviceCentralBluetoothPairingControl


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Single Pairing Per Device Class&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Multiple Pairings Per Device Class&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Firmware Update Button






Select whether the Device User should be allowed to use the Device Central UI to initiate a Firmware Update.
- If the value ***Disallow*** is selected, Device Central will NOT provide UI that allows the Device User to initiate a Firmware Update.
- If the value ***Allow*** is selected, Device Central will provide UI that allows the Device User to initiate a Firmware Update.




**Detail Information:**


- Key = deviceCentralFirmwareUpdateButton


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




-----
## Display Configuration






Use this *Group* to configure Display Screen settings on a device.




**Detail Information:**


- Key = displayStep


- Type = bundle




### Timeout






Enter the amount of inactivity, in seconds, after which the device will timeout and automatically turn the Display Screen off.




A given device may not support all available values. In the event that a selected value is not supported on a given device, the smallest larger value that is supported will be used or, if no larger value is supported, the largest smaller value that is supported will be used.




**Detail Information:**


- Key = displayTimeout


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;15 seconds&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 seconds&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 minute&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 minutes&nbsp;</small></i></b></td><td><small>&nbsp;120&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5 minutes&nbsp;</small></i></b></td><td><small>&nbsp;300&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;10 minutes&nbsp;</small></i></b></td><td><small>&nbsp;600&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 minutes&nbsp;</small></i></b></td><td><small>&nbsp;1800&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.3.




### Blanking Mode






Select whether the Display will automatically Blank (display nothing) on a device.




When a Device User is operating a vehicle with a vehicle-mounted device, it is often advisable, for safety or regulatory reasons, to prevent the Device User from interacting with the device or being distracted by the Display of the device, while the vehicle is in motion. *Display Blanking Mode* provides the ability to configure the device such that the Display Screen will automatically be Blanked (display nothing) when an electrical signal (such as one attached to the accelerator) is detected that indicates that the vehicle is in motion.




At present, *Display Blanking Mode* is supported ONLY on the Zebra VC80x vehicle-mounted Android device.
- If the value ***Never Blank*** is selected, *Display Blanking Mode* will be turned off and hence automatic Display Blanking will never occur.
- If the value ***Blank When Triggered by Signal*** is selected, *Display Blanking Mode* will be turned on and hence the Display will be automatically Blanked and you must also specify all of the following:
- **Signal** - to specify the signal that will be used to activate automatic Display Blanking.
- **Polarity** - to specify the polarity of the signal specified via **Signal** that will be used to activate automatic Blanking.
- **Debounce Delay** - to specify the time that will be used to debounce the signal specified via **Signal**.




**Detail Information:**


- Key = displayBlankingMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never Blank&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blank When Triggered by Signal&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Stay Awake






Select whether the Display will *Stay Awake* (prevent automatic time out that turns the Display Screen off) when the device is connected to external power.




When a Device User is operating a vehicle with a vehicle-mounted device, the device may be continuously receiving power from the vehicle power supply, rather than running off its own internal battery. The Display Screen timeout, configured via **Timeout**, which is generally used to increase battery life, may add little value in such situations. It may therefore be desirable to configure the device to *Stay Awake* and thus prevent it from timing out and turning the Display Screen off, so long as the device is connected to external power.
- If the value ***Off*** is selected, the Display will NOT *Stay Awake* and hence the device will time out and automatically turn the Display Screen off, when the Display Screen timeout, configured via **Timeout** expires, even if the device is connected to external power.
- If the value ***On*** is selected, the Display will *Stay Awake* and hence the device will not time out and will not automatically turn the Display Screen off, so long as the device is connected to external power, even if the Display Screen timeout, configured via **Timeout** expires.




**Detail Information:**


- Key = displayStayAwake


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.2.




### Signal






Select the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Input 1*** is selected, on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 1 will be used to trigger automatic Display Blanking.
- If the value ***Input 2*** is selected, on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 2 will be used to trigger automatic Display Blanking.




A common configuration to support *Display Blanking Mode* would be to connect the Request to Send (RTS) output signal of the selected Serial Port to the Clear To Send (CTS) input signal on the same serial port, via a switch, such as one activated by the vehicle accelerator. When the switch is activated, the output RTS output signal would be fed back into the CTS input signal and detected to trigger automatic Display Blanking.




**Detail Information:**


- Key = displayBlankingModeSignal


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Input 1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Input 2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Polarity






Select the Polarity of the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Blank screen when signal goes inactive (OFF)*** is selected, the automatic Display Blanking will occur when the specified signal is detected as going inactive (OFF). This choice would be used in specialized configurations where the signal to be used to trigger automatic Display Blanking has reverse polarity.
- If the value ***Blank screen when signal goes active (ON)*** is selected, , the automatic Display Blanking will occur when the specified signal is detected as going active (ON). This is the most common choice for the common configuration of connecting RTS and CTS via a switch.




**Detail Information:**


- Key = displayBlankingModeSignalPolarity


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Blank screen when signal goes inactive (OFF)&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blank screen when signal goes active (ON)&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Debounce Delay






Enter the Debounce Delay that will be used for the Signal that will be used to trigger automatic Display Blanking when the value ***Blank When Triggered by Signal*** is selected for **Blanking Mode** to turn on *Display Blanking Mode*.




The value specified should be in milliseconds and will be used as a delay following a change in signal state for changing the state of Display Blanking. This is useful to avoid spurious or repetitive changes in Display Blanking state as a result of bounce or chatter on the signal used to trigger automatic Display Blanking. The value specified should be in the range of 250 milliseconds (one quarter of a second) to 32767 milliseconds (more than 32 seconds), which should be adequate to handle most situations.




**Detail Information:**


- Key = displayBlankingModeSignalDebounceDelay


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Set Display Size






Select the system display size




**Detail Information:**


- Key = setDisplaySize


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Small&nbsp;</small></i></b></td><td><small>&nbsp;SMALL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;DEFAULT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Large&nbsp;</small></i></b></td><td><small>&nbsp;LARGE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Larger&nbsp;</small></i></b></td><td><small>&nbsp;LARGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Largest&nbsp;</small></i></b></td><td><small>&nbsp;LARGEST&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Set Font Size






Select the system font size




**Detail Information:**


- Key = setFontSize


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Small&nbsp;</small></i></b></td><td><small>&nbsp;0.85&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;1.0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Large&nbsp;</small></i></b></td><td><small>&nbsp;1.15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Largest&nbsp;</small></i></b></td><td><small>&nbsp;1.3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




-----
## Enterprise Keyboard Configuration






Use this *Group* to configure the Enterprise Keyboard in a device.




**Detail Information:**


- Key = ekbStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Auto Capitalization






Select whether the Enterprise Keyboard on a device will have automatic capitalization turned on (enabled) or turned off (disabled) for the first letter of each sentence.
- If the value ***Off*** is selected, automatic capitalization will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, automatic capitalization will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbAutoCaps


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Auto Correction






Select whether the Enterprise Keyboard on a device will have automatic correction of misspelled words turned on (enabled) or turned off (disabled), wherein the space and punctuation keys initiate automatic correction of misspelled words.
- If the value ***Off*** is selected, automatic correction of misspelled words will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, automatic correction of misspelled words will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbAutoCorrection


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Block Offensive Words






Select whether the Enterprise Keyboard on a device will have automatic blocking of offensive words turned on (enabled) or turned off (disabled).
- If the value ***Off*** is selected, automatic offensive word blocking will be turned off (disabled).
- If the value ***On*** is selected, automatic offensive word blocking will be turned on (enabled).




**Detail Information:**


- Key = ekbBlockOffensiveWords


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Double Space Period






Select whether the Enterprise Keyboard on a device will have automatic sentence ending turned on (enabled) or turned off (disabled) wherein a double tap on the space key causes the entry of a period followed by two spaces.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbDoubleSpacePeriod


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Flick for Alternate Chars






Select whether the Enterprise Keyboard on a device will show alternate characters when a flick gesture is performed.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbFlickForAlternateChars


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### Key Long Press Delay






Enter the length of time (in milliseconds) that a key within the Enterprise Keyboard on a device need to be held pressed to be detected as a long press.




**Detail Information:**


- Key = ekbKeyLongPressDelay


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Navigation Mode






Select the navigation mode the Enterprise Keyboard on a device will use to provide its user experience.
- If the value ***Tab-based (new)*** is selected, the Enterprise Keyboard will use the new user experience wherein different tabs can be used to select the desired keyboard.
- If the value ***Key-based (legacy)*** is selected, the Enterprise Keyboard will use the legacy user experience wherein keys can be used to select the desired keyboard.




**Detail Information:**


- Key = ekbNavigationMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Tab-based (new)&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Key-based (legacy)&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Numeric Layout Mode






Select the numeric layout mode the Enterprise Keyboard on a device will use when it determines that a numeric keyboard should be displayed.
- If the value ***Telephone Mode*** is selected, the Enterprise Keyboard will display a numeric keyboard in telephone mode (e.g. 123, 456, 789).
- If the value ***Calculator Mode*** is selected, the Enterprise Keyboard will display a numeric keyboard in calculator mode (e.g. 789, 456, 123).




**Detail Information:**


- Key = ekbNumericLayoutMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Telephone Mode&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Calculator Mode&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### Show Alphanumeric Tab






Select whether the Enterprise Keyboard on a device will show the alphanumeric tab to allow selection of the alphanumeric keyboard.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowAlphaNumericTab


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Show Numeric Tab






Select whether the Enterprise Keyboard on a device will show the numeric tab to allow selection of the numeric keyboard.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowNumericTab


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Show Scan Tab






Select whether the Enterprise Keyboard on a device will show the scan tab to allow control of barcode scanning.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowScanTab


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Show Symbol Tab






Select whether the Enterprise Keyboard on a device will show the symbol tab to allow selection of the special symbols keyboard.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowSymbolTab


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Show Voice Input Key






Select whether the Enterprise Keyboard on a device will show a key to invoke voice input (if supported).
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowVoiceInputKey


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Preferred Tab






Select the preferred tab the Enterprise Keyboard on a device will select by default when textual data is being entered.
- If the value ***Numeric*** is selected, the Enterprise Keyboard will select the Numeric tab by default when textual data is being entered.
- If the value ***Alphanumeric*** is selected, the Enterprise Keyboard will show the Alphanumeric tab by default when textual data is being entered.
- If the value ***Symbol*** is selected, the Enterprise Keyboard will show the Symbol tab by default when textual data is being entered.
- If the value ***Scan*** is selected, the Enterprise Keyboard will show the Scan tab by default when textual data is being entered.








**Detail Information:**


- Key = ekbSelectPreferredTab


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Numeric&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Alphanumeric&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Symbol&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scan&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Suggest Contact Names






Select whether the Enterprise Keyboard on a device showing contact name suggestions while typing based on past actions will be turned on (enabled) or turned off (disabled).
- If the value ***Off*** is selected, contact name suggestions will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, contact name suggestions will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowContactNamesSuggestions


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Suggest Misspelling Corrections






Select whether the Enterprise Keyboard on a device showing suggestions for corrections of misspelled words while typing will be turned on (enabled) or turned off (disabled).
- If the value ***Off*** is selected, correction suggestions will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, correction suggestions will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbShowCorrectionSuggestions


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Popup on Keypress






Select whether the Enterprise Keyboard on a device will have key popup on each keypress turned on (enabled) or turned off (disabled) wherein a visible indication that thekey was pressed occurs.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbPopupOnKeypress


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Sound on Keypress






Select whether the Enterprise Keyboard on a device will have sound on each keypress turned on (enabled) or turned off (disabled) wherein an audible indication that the key was pressed occurs.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbSoundOnKeypress


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Mode






Select the volume mode that will be used by the Enterprise Keyboard on a device when sound occurs on each keypress.
- If the value ***System Default Volume*** is selected, the System Default Volume for keypress sounds will be used.
- If the value ***Specified Volume*** is selected, a specified volume will be used and you must also specify **Volume** to provide that volume.




**Detail Information:**


- Key = ekbSoundOnKeypressVolumeMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;System Default Volume&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Specified Volume&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Volume






Enter the volume (from 0 to 100) that will be used by the Enterprise Keyboard on a device when sound occurs on each keypress, when the value ***On*** is selected for **Sound on Keypress** and the value ***System Default Volume*** is selected for **Mode**.




**Detail Information:**


- Key = ekbSoundOnKeypressVolume


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Vibrate on Keypress






Select whether the Enterprise Keyboard on a device will have vibration on each keypress turned on (enabled) or turned off (disabled) wherein a tactile indication that the key was pressed occurs.
- If the value ***Off*** is selected, this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is selected, this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.




**Detail Information:**


- Key = ekbVibrateOnKeypress


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Mode






Enter the duration mode that will be used by the Enterprise Keyboard on a device when vibrate occurs on each keypress.
- If the value ***System Default Duration*** is selected, the System Default Duration for keypress vibrate will be used.
- If the value ***Specified Duration*** is selected, a specified duration will be used and you must also specify **Duration** to provide that duration.




**Detail Information:**


- Key = ekbVibrateOnKeypressDurationMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;System Default Duration&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Specified Duration&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Duration






Enter the duration (from 0 to 100 milliseconds) that will be used by the Enterprise Keyboard on a device when a vibrate occurs on each keypress, when the value ***On*** is selected for **Vibrate on Keypress** and the value ***System Default Duration*** is selected for **Mode**.




**Detail Information:**


- Key = ekbVibrateOnKeypressDuration


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Alpha P1






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Alpha P1 Key (located on the Alpha keyboard at Row 1, Column 1) is pressed.




Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.




**Detail Information:**


- Key = ekbRemapAlphaP1


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Numeric P1






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Numeric P1 Key (located on the Numeric keyboard at Row 1, Column 1) is pressed.








Possible values can be: - A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.












**Detail Information:**


- Key = ekbRemapNumericP1


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Numeric P2






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Numeric P2 Key (located on the Numeric keyboard at Row 2, Column 1) is pressed.








Possible values can be: - A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.












**Detail Information:**


- Key = ekbRemapNumericP2


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Numeric P3






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Numeric P3 Key (located on the Numeric keyboard at Row 3, Column 1) is pressed.








Possible values can be: - A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.












**Detail Information:**


- Key = ekbRemapNumericP3


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Numeric P4






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Numeric P4 Key (located on the Numeric keyboard at Row 4, Column 1) is pressed.








Possible values can be: - A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.












**Detail Information:**


- Key = ekbRemapNumericP4


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Remap Symbol P1






Enter a value that defines the behavior the Enterprise Keyboard on a device will perform when the Symbol P1 Key (located on the Symbol keyboard at Row 4, Column 1) is pressed.








Possible values can be: - A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***\\uXXXXXX*** (e.g. ***\\u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***\\EMOJI*** causes the remapped key to switch to the EMOJI keyboard.












**Detail Information:**


- Key = ekbRemapSymbolP1


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




-----
## Enterprise NFC Configuration






Use this *Group* to configure Enterprise NFC settings on a device.




**Detail Information:**


- Key = nfcStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Reset to Defaults






Use this *Sub-group* to reset all the Enterprise NFC settings to their factory default values on a device.




**Detail Information:**


- Key = nfcResetToDefaults


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Reset&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type A Tags






Use this *Sub-group* to configure whether Enterprise NFC should read NFC Type A Tags.




- If the value ***Do Not Read*** is selected, Enterprise NFC will NOT attempt to read NFC Type A Tags. This could increase the speed of reading other tag types in cases where Type A Tags are not used.




- If the value ***Read*** is selected, Enterprise NFC will attempt to read NFC Type A Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.




**Detail Information:**


- Key = nfcReadTypeATags


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Read&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Read&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type B Tags






Use this *Sub-group* to configure whether Enterprise NFC should read NFC Type BTags.




- If the value ***Do Not Read*** is selected, Enterprise NFC will NOT attempt to read NFC Type B Tags. This could increase the speed of reading other tag types in cases where Type B Tags are not used.




- If the value ***Read*** is selected, Enterprise NFC will attempt to read NFC Type B Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.




**Detail Information:**


- Key = nfcReadTypeBTags


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Read&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Read&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type F Tags






Use this *Sub-group* to configure whether Enterprise NFC should read NFC Type F Tags.




- If the value ***Do Not Read*** is selected, Enterprise NFC will NOT attempt to read NFC Type F Tags. This could increase the speed of reading other tag types in cases where Type F Tags are not used.




- If the value ***Read*** is selected, Enterprise NFC will attempt to read NFC Type F Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.




**Detail Information:**


- Key = nfcReadTypeFTags


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Read&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Read&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type V Tags






Use this *Sub-group* to configure whether Enterprise NFC should read NFC Type V Tags.




- If the value ***Do Not Read*** is selected, Enterprise NFC will NOT attempt to read NFC Type V Tags. This could increase the speed of reading other tag types in cases where Type V Tags are not used.




- If the value ***Read*** is selected, Enterprise NFC will attempt to read NFC Type V Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.




**Detail Information:**


- Key = nfcReadTypeVTags


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Read&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Read&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Use NFC Data Exchange Format (NDEF)






Use this *Sub-group* to configure whether Enterprise NFC should attempt to use NFC Data Exchange Format (NDEF) when reading tags.




- If the value ***Do Not Use*** is selected, Enterprise NFC will NOT attempt tp read NDEF formatted tags. This could increase the speed of reading non-NDEF tags by not spending unnecessary time trying to interpret tag data according to NDEF formatting rules.




- If the value ***Use*** is selected, Enterprise NFC will attempt to read NDEF formatted tags. This may decrease speed somewhat, compared to reading unformatted tags, but increases flexibility by allowing applications to receive tag data interpreted according to NDEF formatting rules.




**Detail Information:**


- Key = nfcUseNDEF


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Use&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Use&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Polling Mode






Use this *Sub-group* to configure the polling mode that the Enterprise NFC should use.




- If the value ***Hybrid*** is selected, Enterprise NFC will poll in a manner designed to strike a reasonable balance between polling speed and battery life.




- If the value ***Standard*** is selected, then Enterprise NFC will poll in a manner designed to maximize polling speed. This may increase battery drain but will reduce tag detection time.




- If the value ***Low Power*** is selected, Enterprise NFC will poll in a manner designed to minimize impact on battery life. This may increase the overall tag detection time, but will reduce battery drain.




**Detail Information:**


- Key = nfcPollingMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Hybrid&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Standard&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Low Power&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### CPU Boost






Use this *Sub-group* to configure whether the Enterprise NFC should Boost CPU Speed during NFC transactions.
- If the value ***Do Not Boost*** is selected, Enterprise NFC will leave the CPU Speed unmodified during NFC transactions.
- If the value ***Boost*** is selected, Enterprise NFC will Boost the CPU Speed during NFC transactions to enhance performance of those transactions.




**Detail Information:**


- Key = nfcCpuBoost


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Boost&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Boost&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type A Tag Baud Rate






Use this *Sub-group* to configure the Baud Rate that Enterprise NFC should use to communicate to Type A Tags.
- If the value ***106 kbps*** is selected, Enterprise NFC will always communicate to Type A Tags using a Baud Rate of 106 kbps.
- If the value ***212 kbps*** is selected, Enterprise NFC will communicate to Type A Tags using a Baud Rate of 106 kbps or 212 kbps, depending on the Baud Rate supported by the tag.
- If the value ***424 kbps*** is selected, Enterprise NFC will communicate to Type A Tags using a Baud Rate of 106 kbps, 212 kbps, or 424 kbps, depending on the Baud Rate supported by the tag.
- If the value ***Any*** is selected, Enterprise NFC will communicate to Type A Tags using any available (automatically selected) Baud Rate supported by the tag.




**Detail Information:**


- Key = nfcTypeABaudRate


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;106 kbps&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;212 kbps&nbsp;</small></i></b></td><td><small>&nbsp;16&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;424 kbps&nbsp;</small></i></b></td><td><small>&nbsp;32&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Any&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Type B Tag Baud Rate






Use this *Sub-group* to configure the Baud Rate that Enterprise NFC should use to communicate to Type B Tags.




- If the value ***106 kbps*** is selected, Enterprise NFC will always communicate to Type B Tags using a Baud Rate of 106 kbps.




- If the value ***212 kbps*** is selected, Enterprise NFC will communicate to Type B Tags using a Baud Rate of 106 kbps or 212 kbps, depending on the Baud Rate supported by the tag.




- If the value ***424 kbps*** is selected, Enterprise NFC will communicate to Type B Tags using a Baud Rate of 106 kbps, 212 kbps, or 424 kbps, depending on the Baud Rate supported by the tag.




- If the value ***Any*** is selected, Enterprise NFC will communicate to Type B Tags using any available (automatically selected) Baud Rate supported by the tag.




**Detail Information:**


- Key = nfcTypeBBaudRate


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;106 kbps&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;212 kbps&nbsp;</small></i></b></td><td><small>&nbsp;64&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;424 kbps&nbsp;</small></i></b></td><td><small>&nbsp;128&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Any&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Peer to Peer Mode






Use this *Sub-group* to configure whether the Enterprise NFC should use *Peer-to-Peer Mode*. This is generally used when two NFC enabled devices want to communicate with each other to exchange data.
- If the value ***Do Not Use*** is selected, Enterprise NFC will NOT use *Peer-to-Peer Mode* and hence will operate only in *Read/Write Mode*, unless it is also configured to operated in *Card Emulation Mode* by via **Card Emulation Mode**.
- If the value ***Use*** is selected, Enterprise NFC will use *Peer-to-Peer Mode* and hence will operate in both *Peer-to-Peer Mode* and *Read/Write Mode*, and and optionally also in *Card Emulation Mode*, if configured via **Card Emulation Mode**.




**Detail Information:**


- Key = nfcPeerToPeerMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Use&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Use&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Card Emulation Mode






Use this *Sub-group* to configure whether the Enterprise NFC should use *Card Emulation Mode*. This is generally used when an NFC enabled device wants to emulate a *Smart Card*.
- If the value ***Do Not Use*** is selected, Enterprise NFC will NOT use *Card Emulation Mode* and hence will operate only in *Read/Write Mode*, unless it is also configured to operated in *Peer-to-Peer Mode* by via **Peer to Peer Mode**.
- If the value ***Use*** is selected, Enterprise NFC will use *Card Emulation Mode* and hence will operate in both *Card Emulation Mode* and *Read/Write Mode* and optionally also in *Peer-to-Peer Mode*, if configured via **Peer to Peer Mode**.




**Detail Information:**


- Key = nfcCardEmulationMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Do Not Use&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Use&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Use on Lock Screen






Use this *Sub-group* to configure whether the Enterprise NFC should be allowed to be used from the Lock Screen on a device.




- If the value ***Disallow*** is selected, Enterprise NFC will NOT allow NFC operations to be performed when the device is at the lock screen.




- If the value ***Allow*** is selected, Enterprise NFC will allow NFC operations to be performed when the device is at the lock screen.




**Detail Information:**


- Key = nfcUseOnLockScreen


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;false&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;true&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




-----
## Ethernet Configuration






Use this *Group* to configure the operation of the Ethernet Adapter on a device.




**Detail Information:**


- Key = ethernetStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Power






Select the Power State of the Ethernet Adapter.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetPower


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Control by User






Select whether Ethernet Power control by the Device User will be allowed or not.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetPowerControlByUser


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Use Proxy Server






Select whether a Proxy Server should be used to access the Internet from the network accessed via the Ethernet Adapter.




When specifying that a Proxy Server is to be used, you should specify **Proxy Server**, **Port**, and **Bypass List** together whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetUseProxyServer


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Use a Proxy Server&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Do NOT Use a Proxy Server&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Proxy Server






Enter the Proxy Server used to access the Internet from the network accessed via the Ethernet Adapter.




While it is not mandatory, you should specify **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetProxyServer


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Port






Enter the Port that will be used to reach the Proxy Server to access the Internet from the network accessed via the Ethernet Adapter.




You should specify **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetProxyServerPort


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Bypass List






Enter the Proxy Server Bypass List which specifies addresses that should bypass the Proxy Server used to access the Internet from the network accessed via the Ethernet Adapter.




While it is not mandatory, you should specify **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetProxyServerBypassList


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### IP Address Type






Select how an IP Address will be assigned to the Ethernet adapter.
- If the value ***Dynamic (DHCP)*** is selected, an IP Address for the Ethernet adapter will be automatically acquired by the DHCP Client from the DHCP Server.
- If the value ***Static (Manual)*** is selected, an IP Address for the Ethernet adapter will be assigned based on the values selected for **IP Address**, **Gateway Address**, **Network Mask**, **Primary DNS**, and **Secondary DNS**, which you must also specify to provide the required values.




A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.








**Detail Information:**


- Key = ethernetIpAddrType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Dynamic (DHCP)&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Static (Manual)&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### IP Address






Enter the IP Address to be assigned to the Ethernet adapter.








A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetIpAddress


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Gateway Address






Enter the Gateway Address to be assigned to the Ethernet adapter.








A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetGatewayAddress


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Network Mask






Enter the Network Mask to be assigned to the Ethernet adapter.








A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetNetMask


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Primary DNS






Enter the Primary DNS Server Address to be assigned to the Ethernet adapter.








A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetDNS1


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Secondary DNS






Enter the Secondary DNS Server Address to be assigned to the Ethernet adapter.








A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = ethernetDNS2


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




-----
## File Management






Use this *Group* to perform File Management operations for a device.




**Detail Information:**


- Key = filesStep


- Type = bundle




**Support Information:**


- Supported from: MX 9.2.




### Download File Source URI






Enter the *Source URI* of a File on a Server to be Downloaded to the Device File System. You must also specify **Download Destination Path and File Name** to identify the Path and File Name in the *Device File System* to which the File will be stored once it has been Downloaded.




**Detail Information:**


- Key = filesDownloadSourceURI


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Download Destination Path and File Name






Enter the Destination Path and File Name of a File to be Downloaded from a Server to the *Device File System* when **Download File Source URI** is specified.




**Detail Information:**


- Key = fileDownloadDestPathAndFileName


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Delete Path and File Name






Enter the Path and optionally the File Name of a Folder or File to be Deleted from the *Device File System*.




- To Delete a Folder, specify a value that ends in a forward slash (/) character and that specifies the full Path in the *Device File System* to the Folder to be Deleted.




- To Delete a File, specify a value that ends with the File Name and Extension and that specifies the full Path in the *Device File System* to the File to be Deleted.




**Detail Information:**


- Key = fileDeletePathAndFileName


- Type = string




**Support Information:**


- Supported from: MX 9.2.




-----
## Firmware Over The Air Configuration






Use this *Group* to configure how Firmware Over The Air (FOTA) operations are performed and and to explicitly initiate such operations on a device.




**Detail Information:**


- Key = fotaStep


- Type = bundle




**Support Information:**


- Supported from: MX 9.1.




### Device User Control Mode






Select whether the Device User should be allowed to control the Mode of the LifeGuard Over The Air Client via the in-device Client UI.




**Detail Information:**


- Key = fotaUserControlMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.1.




### Mode






Select the mode used to perform Firmware Over The Air (FOTA) operations on a device.
- If the Mode value ***Manual*** is selected, Firmware Over The Air (FOTA) operations will be performed in *Manual Mode* only when **Mode Manual Action** is specified and when one or more of the following are specified: **Enterprise Reset SUW Bypass**, **OS Upgrade Suppress Reboot**, **OS Update/Upgrade/Downgrade File**, **Verify Manifest File**.
- If the Mode value ***Automatic*** is selected, Firmware Over The Air (FOTA) operations will be performed in *Automatic Mode* you do not need to specify any additional information.




**Detail Information:**


- Key = fotaMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Manual&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Automatic&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.1.




### Mode Manual Action






Select an Action to perform in *Manual Mode* to explicitly perform a Firmware Over The Air (FOTA) operation on a device when the value ***Manual*** is selected for **Mode**.
- If the value ***Enterprise Reset*** is selected, you may also specify **Enterprise Reset SUW Bypass** to control whether the Setup Wizard (SUW) will be bypassed on GMS devices following the Enterprise Reset.
- If the value ***Factory Reset*** is selected, you do not need to specify any additional information.
- If the value ***Full Device Wipe*** is selected, you do not need to specify any additional information.
- If the value ***OS Update*** is selected, you must also specify **OS Update/Upgrade/Downgrade File** to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation.




Note that the Action value ***OS Update*** can be used to perform either an Upgrade or Downgrade operation on devices with Android versions < 8.0 but can only be used to perform an Upgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade will NOT occur on devices with Android versions >= 8.0.
- If the value ***Verify Manifest*** is selected, you must also specify **Verify Manifest File** to provide the path and file name of the Manifest file (which must already be in the device file system at the specified location with the specified name) to be used to perform the verification.
- If the value ***OS Upgrade*** is selected, you must also specify **OS Update/Upgrade/Downgrade File** to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation. You may also specify **OS Upgrade Suppress Reboot** to control whether a reboot should automatically be performed following an A/B upgrade.




Note that the Action value ***OS Upgrade*** can only be used to perform an Upgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade will NOT occur.
- If the value ***OS Downgrade*** is selected, you must also specify **OS Update/Upgrade/Downgrade File** to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation.




Note that the Action value ***OS Downgrade*** can only be used to perform a Downgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do an Upgrade, the Upgrade will NOT occur.




**Detail Information:**


- Key = fotaAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Enterprise Reset&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Factory Reset&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Full Device Wipe&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OS Update&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Verify Manifest&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OS Upgrade&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OS Downgrade&nbsp;</small></i></b></td><td><small>&nbsp;11&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Enterprise Reset SUW Bypass






Select whether the Setup Wizard (SUW) will be bypassed on GMS devices when performing an Enterprise Reset, when the Action value ***Enterprise Reset*** is selected for **Mode Manual Action**.




**Detail Information:**


- Key = fotaActionEnterpriseResetSuwBypass


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Bypass&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Do NOT Bypass&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### OS Upgrade Suppress Reboot






Select whether the automatic reboot that would normally be performed following the successful completion of an A/B Upgrade should be suppressed, when the Action value ***OS Upgrade*** is selected for **Mode Manual Action**. Note that if the automatic reboot is suppressed, the reboot will still be required to activate the new OS following the A/B Upgrade, and the later performance of that reboot, at a suitable time, will become the responsibility of the EMM choosing to suppress the automatic reboot.




**Detail Information:**


- Key = fotaActionOsUpgradeSuppressReboot


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Suppress&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Do NOT Suppress&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### OS Update/Upgrade/Downgrade File






Enter the path and file name of an OS Update or Patch image file, which must already exist at the specified location in the device file system, to be used to update a device when one of the Action values ***OS Update***, ***OS Upgrade***, or ***OS Downgrade*** is selected for **Mode Manual Action**.




**Detail Information:**


- Key = fotaActionOsUpdateFile


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Verify Manifest File






Enter the path and file name of a Manifest file, which must already exist at the specified location in the device file system, to be used to verify support on a device when the Action value ***Verify Manifest*** is selected for **Mode Manual Action**.




**Detail Information:**


- Key = fotaActionVerifyManifestFile


- Type = string




**Support Information:**


- Supported from: MX 8.1.




-----
## GMS Configuration






Use this *Group* to configure Google Mobile Services (GMS) settings on a device.




**Detail Information:**


- Key = gmsStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### GMS Feature Set






Select the amount of functionality of Google Mobile Services (GMS) to enable.
- If the value ***All - Full Set of GMS Features*** is selected, the the entire set of Google Mobile Services (GMS), will be enabled for use. Note that if Google Mobile Services are allowed to be used, may collect and send data to Google.




- If the value ***Restricted - Fixed Minimal Set of GMS Features*** is selected, a limited (fixed) subset of Google Mobile Services (GMS), will be enabled for use. The subset will automatically be chosen to ensure that basic device functionality is not impaired, that all enabled Google Mobile Services operate usefully, and that no enabled Google Mobile Services send any data to Google.
- If the value ***Profiled - Selected Subset of GMS Features*** is selected, a selected subset of Google Mobile Services (GMS) features will be enabled for use.




**Detail Information:**


- Key = gmsFeatureSet


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;All - Full Set of GMS Features&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Restricted - Fixed Minimal Set of GMS Features&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Profiled - Selected Subset of GMS Features&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### GMS Profile






Select the Google Mobile Services (GMS) profile to enable.
- If the value ***Chrome Browser*** is selected, Chrome Browser will be enabled for use. - If the value ***Google Maps*** is selected, Google Maps will be enabled for use. - If the value ***Firebase Cloud Messaging*** is selected, Firebase Cloud Messaging will be enabled for use. - If the value ***Combination of Chrome and Maps and FCM*** is selected, Combination of Chrome, Maps and FCM will be enabled for use.




**Detail Information:**


- Key = gmsProfile


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Chrome Browser&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Google Maps&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Firebase Cloud Messaging&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Combination of Chrome and Maps and FCM&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




-----
## GPRS Configuration






Use this *Group* to configure the operation of the General Packet Radio Service (GPRS) subsystem on a device by controlling the configurations of GPRS Access Point Name (APNs).




**Detail Information:**


- Key = gprsStep


- Type = bundle




**Support Information:**


- Supported from: MX 8.4.




### Action






Select an Action to manage the GPRS APNs on a device:
- If the value ***AddApn*** is selected, a new APN will be added, or an existing APN will be overwritten with a new APN. You must also specify **Add APN Name** to provide the name of the new APN to be added or the name of the existing APN to be replaced. In addition, you must also specify some or all of the following to provide the APN definition:
- **Add APN Replace If Existing**
- **Add APN Make Default**
- **Add APN Access Point**
- **Add APN User Name**
- **Add APN Password**
- **Add APN Port**
- **Add APN Proxy**
- **Add APN MMS Port**
- **Add APN MMS Proxy**
- **Add APN Server**
- **Add APN MMSC**
- **Add APN Type**
- **Add APN MCC**
- **Add APN MNC**
- If the value ***RemoveApn*** is selected, an existing APN will be removed. You must also specify **Remove APN Name** to provide the name of the APN to be removed.
- If the value ***RemoveAllApns*** is selected, all existing APNs will be removed and you do not need to specify any additional information.




**Detail Information:**


- Key = gprsAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AddApn&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoveApn&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoveAllApns&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.4.




### Add APN Name






Enter the name of an APN to be added when the value ***AddApn*** is selected for **Action**.




**Detail Information:**


- Key = gprsActionAddApnName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Add APN Replace If Existing






Select what happens when an APN already exists with the APN name being added when the value ***AddApn*** is selected for **Action**.
- If the value ***Replace Existing*** is selected, if an APN with the name specified via **Add APN Name** already exists, it will be replaced by the definition of the APN being added.
- If the value ***Keep Existing*** is selected, if an APN with the name specified via **Add APN Name** already exists, it will NOT be replaced. The existing APN will be preserved and the new APN will NOT be added.




**Detail Information:**


- Key = gprsActionAddApnReplaceIfExisting


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Replace Existing&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keep Existing&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Add APN Make Default






Select whether a new APN being added should become the new default APN when the value ***AddApn*** is selected for **Action**. - If the value ***Yes*** is selected, the new APN being added will become the new default APN and will be preferred over other APNs when establishing a cellular data connection.
- If the value ***No*** is selected, the new APN will not become the new default APN and whatever APN was previously the default will remain the default.




**Detail Information:**


- Key = gprsActionAddApnMakeDefault


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Yes&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;No&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Add APN Access Point






Enter a value that uniquely identifies an APN on the network when the value ***AddApn*** is selected for **Action**.








APN Identifiers are allocated by cellular carriers to identify the networks that can be reached via various APNs. When acquiring a cellular data plan from a carrier, an APN Identifier will be provided, typically along with other information that qualifies or controls access to the network it identifies.




**Detail Information:**


- Key = gprsActionAddApnAccessPoint


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Add APN User Name






Enter a user name that can be used to authenticate to an APN when the value ***AddApn*** is selected for **Action**.








A network accessed via a given APN Identifier may or may not require authentication. If authentication is required, a user name is generally always required and a password MAY also be required.




**Detail Information:**


- Key = gprsActionAddApnUserName


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Add APN Password






Enter a password that can be used to authenticate to an APN when the value ***AddApn*** is selected for **Action**.




A network accessed via a given APN Identifier may or may not require authentication. If authentication is required, a user name is generally always required and a password MAY also be required.




**Detail Information:**


- Key = gprsActionAddApnPassword


- Type = string




**Support Information:**


- Supported from: MX 4.2.




### Add APN Port






Enter the port number of an HTTP proxy to use for all traffic over the network accessed via an APN when the value ***AddApn*** is selected for **Action**.




If a Proxy is required, a Port is also generally always required.




**Detail Information:**


- Key = gprsActionAddApnPort


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN Proxy






Enter the address or name of an HTTP proxy to use for all traffic over the network accessed via an APN when the value ***AddApn*** is selected for **Action**.
- If a Proxy is required, a Port is also generally always required.




**Detail Information:**


- Key = gprsActionAddApnProxy


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN MMS Port






Enter the port number of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed via an APN when the value ***AddApn*** is selected for **Action**.
- If an MMS Proxy is required, an MMS Port is also generally always required.




**Detail Information:**


- Key = gprsActionAddApnMmsPort


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN MMS Proxy






Enter the address or name of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed via an APN when the value ***AddApn*** is selected for **Action**.
- If an MMS Proxy is required, an MMS Port is also generally always required.




**Detail Information:**


- Key = gprsActionAddApnMmsProxy


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN Server






Enter a WAP Gateway Server address that should be used for an APN when the value ***AddApn*** is selected for **Action**.




WAP Gateways are rarely, if ever, used on or supported by modern cellular carrier networks.




**Detail Information:**


- Key = gprsActionAddApnServer


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN MMSC






Enter the Multimedia Messaging Service Center (MMSC) address required to route MMS traffic over the network accessed via an APN when the value ***AddApn*** is selected for **Action**.




**Detail Information:**


- Key = gprsActionAddApnMmsc


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN Type






Enter the Type of APN to be added when the value ***AddApn*** is selected for **Action**.








The value to specify for Type should be obtained from the cellular carrier whose network is to be accessed via the APN.




**Detail Information:**


- Key = gprsActionAddApnType


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN MCC






Enter the Mobile Country Code (MCC) of the APN to be added when the value ***AddApn*** is selected for **Action**.








The MCC generally match the SIM Card being used or the APN will not be usable.




**Detail Information:**


- Key = gprsActionAddApnMcc


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN MNC






Enter the Mobile Network Code (MNC) of the APN to be added when the value ***AddApn*** is selected for **Action**.




The MNC generally match the SIM Card being used or the APN will not be usable.




**Detail Information:**


- Key = gprsActionAddApnMnc


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Add APN Protocol






Enter the APN Protocol
- If the value ***IPv4*** is selected, IPv4 will be applied
- If the value ***IPv6*** is selected, IPv6 will be applied
- If the value ***IPv4/IPv6*** is selected, IPv4/IPv6 will be applied




**Detail Information:**


- Key = gprsActionAddApnProtocol


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;IPv4&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IPv6&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IPv4/IPv6&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.3.




### GPRS Configuration - Action Add APN Roaming Protocol






Enter the APN Roaming Protocol
- If the value ***IPv4*** is selected, IPv4 will be applied
- If the value ***IPv6*** is selected, IPv6 will be applied
- If the value ***IPv4/IPv6*** is selected, IPv4/IPv6 will be applied




**Detail Information:**


- Key = gprsActionAddApnProtocolRoaming


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;IPv4&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IPv6&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IPv4/IPv6&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.3.




### Add Authentication Type






Select the Type of Authentication to be used for APN to be added when the value ***AddApn*** is selected for **Action**.
- If the value ***None*** is selected, No Authentication Protocol will be used to authenticate for the APN.
- If the value ***PAP*** is selected, the Password Authentication Protocol (PAP) will be used to authenticate for the APN.
- If the value ***CHAP*** is selected, the Challenge Handshake Authentication Protocol (CHAP) will be used to authenticate for the APN.




**Detail Information:**


- Key = gprsActionAddApnAuthenticationType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;None&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PAP&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHAP&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.3.




### Add MVNO Type






Enter the MVNO (Mobile Virtual Network Operator) Type to be used for APN to be added when the value ***AddApn*** is selected for **Action**.
- If the value ***None*** is selected, No MVNO will be used to configured for the APN.
- If the value ***SPN*** is selected, the MVNO will be specified via an SPN (Service Provider Name) value for the APN, which you must also specify via **Add MVNO Match Data**.
- If the value ***IMSI*** is selected, the MVNO will be specified via an IMSI (International Mobile Subscriber Identity) value for the APN, which you must specify via **Add MVNO Match Data**.
- If the value ***GID*** is selected, the MVNO will be specified via an GID (Group Identifier) value for the APN, which you must specify via **Add MVNO Match Data**.
- If the value ***ICCID*** is selected, the MVNO will be specified via an GID (Integrated Circuit Card ID) value for the APN, which you must specify via **Add MVNO Match Data**.




**Detail Information:**


- Key = gprsActionAddApnMvnoType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;None&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SPN&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IMSI&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GID&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ICCID&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.4.




### Add MVNO Match Data






Enter the MVNO (Mobile Virtual Network Operator) Match Data to be used for APN to be added when the value ***AddApn*** is selected for **Action** and if a value other than ***None*** is selected for **Add MVNO Type**.




The exact value to be specified depends on the MVNO Type specified. Consult your MVNO carrier for information on the MVNO Type and MVNO Match Data value to be used.




**Detail Information:**


- Key = gprsActionAddApnMvnoMatchData


- Type = string




**Support Information:**


- Supported from: MX 8.4.




### Remove APN Name






Enter the name of an APN to be removed when the value ***RemoveApn*** is selected for **Action**.




**Detail Information:**


- Key = gprsActionRemoveApnName


- Type = string




**Support Information:**


- Supported from: MX 4.1.1.




-----
## General UI Configuration






Use this *Group* to configure General User Interface (UI) aspects of a device.




**Detail Information:**


- Key = uiStep


- Type = bundle




**Support Information:**


- Supported from: MX 9.1.




### Action






Select an Action to perform miscellaneous UI behavior on a device: - If the Action value ***Clear Clipboard*** is selected, any data currently in the clipboard of the device will be discarded, This will cause the data to no longer be available to paste.
- If the Action value ***Clear Recently Used Apps List*** is selected, the list of previously used (launched) applications will be cleared. This can be used to prevent the device user from accessing previously used applications or control their behavior or configuration from the list presented when the Recent button is pressed.
- If the Action value ***Clear Application Cache*** is selected, the cache of a specified application will be cleared. The most common use of this would be to delete cached information, such as login credentials or state, and thereby return the application to its default behavior. The use of this Action value requires that you must also specify **Clear Application Data Package** to identify the application whose cache is to be cleared.
- If the Action value ***Turn On All GMS Applications*** is selected, all GMS applications that are considered *Safe to Disable* will be enabled.
- If the Action value ***Turn Off All GMS Applications*** is selected, all GMS applications that are considered *Safe to Disable* will be disabled.




Note: Since it is possible to turn GMS Applications on or off individually, using the values ***Turn On All GMS Applications*** and ***Turn Off All GMS Applications*** will guarantee only that all GMS Applications are On or Off immediately after the requested Action is completed. Subsequent Actions could result in any mixture of GMS Applications being turned On or Off. The behavior of the system or any GMS applications under such conditions is not guaranteed.




**Detail Information:**


- Key = uiAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Clear Clipboard&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear Recently Used Apps List&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear Application Cache&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turn On All GMS Applications&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turn Off All GMS Applications&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear Application User Data&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Clear Application Data Package






Enter the *Android Package Name* for which the cache should be cleared by a Clear Application Cache Action when the value ***Clear Application Cache*** is selected for **Action**.




**Detail Information:**


- Key = uiActionClearApplicationCachePackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




###  Clear Application Data Package






Enter the *Android Package Name* for which all user data should be cleared when performing a Clear Application User Data Action when the value ***Clear Application User Data*** is selected for **Action**.




**Detail Information:**


- Key = uiActionClearApplicationUserDataPackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Allow Device User Control of Do Not Disturb Mode






Select whether the Device User will be presented with the option to control the state of Do Not Disturb Mode from the Menu presented when the power key is held down on a device.




**Detail Information:**


- Key = uiUserControlDoNotDisturbMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Hide&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Show&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### App Info Icon on Long Press on Recent App Header






Select whether a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Show*** is selected, an App Info Icon will be shown on Long Press on Recent App Header
- If the value ***Hide*** is selected, an App Info Icon will NOT be shown on Long Press on Recent App Header




**Detail Information:**


- Key = uiAppInfoOnLongPressRecentAppHeader


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Show&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Hide&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.2.




### Auto Correct






Select whether the Device User prompted for corrections to potential mistakes made during entry of data on a device.




- If the value ***Off*** is selected, the Device User will NOT be prompted to correct potential mistakes during data entry.




- If the value ***On*** is selected, the Device User will be prompted to correct potential mistakes during data entry.








**Detail Information:**


- Key = uiAutoCorrect


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Battery Charging LED






Select whether the charging system be allowed to display the battery charging state using the charging LED when a device is in operating mode.
- If the value ***Disable*** is selected, the charging system will be prevented from using the charging LED to display the battery charging state, which may reduce distractions in environments where many devices are charging.
- If the value ***Enable*** is selected, the charging system will be allowed to use the charging LED to display the battery charging state, which may make it easier to distinguish a fully charged device from a partially charged device.




**Detail Information:**


- Key = uiBatteryChargingLED


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disable&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enable&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Battery Swap UI Popup






Select whether the Device User will automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold.
- If the value ***Disable*** is selected, the Device User will NOT automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold.
- If the value ***Enable*** is selected, the Device User will automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold, perhaps helping to avoid emergency shutdown and potential loss of data as a result.




**Detail Information:**


- Key = uiBatterySwapPopup


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disable&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enable&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Display of Navigation Bar






Select whether the on-screen Navigation Bar will be displayed and hence whether it will take up screen real estate and can be used to navigate the device UI.
- If the value ***Off*** is selected, the on-screen Navigation Bar will NOT be displayed and hence whether it will NOT take up any screen real estate, and hence cannot be used to navigate the device UI.
- If the value ***On*** is selected, the on-screen Navigation Bar will be displayed and hence whether it will take up any screen real estate, and hence be used to navigate the device UI.




**Detail Information:**


- Key = uiDisplayNavigationBar


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### Launcher Package Name






Enter the *Android Package Name* of the default launcher application. This would typically be used when installing an new launcher (home screen) application as a replacement for the default Android launcher.




**Detail Information:**


- Key = uiLauncherPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### Locale






Select the *Locale* to be used on a device.




A *Locale* is typically specified by selecting a *Language* (e.g. English) and optionally a *Region* (e.g. the United States).




Values MUST specify a *Language*, and optionally a *Region*.
- When only a *Language* is to be specified, the identifier will be the name of the *Language* (e.g. CHINA).
- When both a *Language* and a *Region* are to be specified, the identifier will be the name of the *Region* followed by the name of the *Language*, separated by an underscore (e.g. CANADA_FRENCH).




**Detail Information:**


- Key = uiLocale


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;CANADA&nbsp;</small></i></b></td><td><small>&nbsp;en_CA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CANADA_FRENCH&nbsp;</small></i></b></td><td><small>&nbsp;fr_CA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHINA&nbsp;</small></i></b></td><td><small>&nbsp;zh_CN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHINESE&nbsp;</small></i></b></td><td><small>&nbsp;zh&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ENGLISH&nbsp;</small></i></b></td><td><small>&nbsp;en&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FRANCE&nbsp;</small></i></b></td><td><small>&nbsp;fr_FR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FRENCH&nbsp;</small></i></b></td><td><small>&nbsp;fr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GERMAN&nbsp;</small></i></b></td><td><small>&nbsp;de&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GERMANY&nbsp;</small></i></b></td><td><small>&nbsp;de_DE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ITALIAN&nbsp;</small></i></b></td><td><small>&nbsp;it&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ITALY&nbsp;</small></i></b></td><td><small>&nbsp;it_IT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;JAPAN&nbsp;</small></i></b></td><td><small>&nbsp;ja_JP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;JAPANESE&nbsp;</small></i></b></td><td><small>&nbsp;ja&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KOREA&nbsp;</small></i></b></td><td><small>&nbsp;ko_KR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KOREAN&nbsp;</small></i></b></td><td><small>&nbsp;ko&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PRC&nbsp;</small></i></b></td><td><small>&nbsp;zh_CN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SIMPLIFIED_CHINESE&nbsp;</small></i></b></td><td><small>&nbsp;zh_CN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TAIWAN&nbsp;</small></i></b></td><td><small>&nbsp;zh_TW&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TRADITIONAL_CHINESE&nbsp;</small></i></b></td><td><small>&nbsp;zh_TW&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UK&nbsp;</small></i></b></td><td><small>&nbsp;en_GB&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;US&nbsp;</small></i></b></td><td><small>&nbsp;en_US&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SPANISH&nbsp;</small></i></b></td><td><small>&nbsp;es_ES&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;US_SPANISH&nbsp;</small></i></b></td><td><small>&nbsp;es_US&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BRAZIL_PORTUGUESE&nbsp;</small></i></b></td><td><small>&nbsp;pt_BR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PORTUGUESE&nbsp;</small></i></b></td><td><small>&nbsp;pt_PT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AUSTRALIA_ENGLISH&nbsp;</small></i></b></td><td><small>&nbsp;en_AU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;INDIA_ENGLISH&nbsp;</small></i></b></td><td><small>&nbsp;en_IN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SWEDEN_SWEDISH&nbsp;</small></i></b></td><td><small>&nbsp;sv_SE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NORWAY_NORWEGIAN-BOKMAL&nbsp;</small></i></b></td><td><small>&nbsp;nb_NO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FINLAND_FINISH&nbsp;</small></i></b></td><td><small>&nbsp;fi_FI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DENMARK_DANISH&nbsp;</small></i></b></td><td><small>&nbsp;da_DK&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 5.1.




### Long Press on Home Key to Launch Google Assistant






Select whether a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Allow*** is selected, a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Disallow*** is selected, a Long Press on the Home Key will NOT Launch the Google Assistant.




**Detail Information:**


- Key = uiLongPressHomeLaunchesGoogleAssistant


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.2.




### Network Notification Popup






Select whether the Network Notification Popup will be presented to inform the Device User that their network may be monitored.
- If the value ***Off*** is selected, the Network Notification Popup will NOT be presented, and hence the Device User will NOT be notified that their network may be monitored, even if circumstances warrant such notification.
- If the value ***On*** is selected, the Network Notification Popup may be presented, and hence the Device User may be notified that their network may be monitored, if circumstances warrant such notification.




**Detail Information:**


- Key = uiNetworkNotificationPopup


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### On-Screen Power Button






Select whether the *On Screen Power Button* feature will be turned ON or OFF. the *On Screen Power Button* feature allows a button to be displayed which allows the Device User to turn the device off, similar to the operation of the physical power button (if any) and can be used to improve the user experience in cases where a physical power button is not present or is not convenient to use, such as when the Device User is wearing gloves.
- If the value ***Disable*** is selected, the *On Screen Power Button* feature will be turned OFF and hence the on-screen power button will NOT be displayed.
- If the value ***Enable*** is selected, the *On Screen Power Button* feature will be turned ON and hence the on-screen power button WILL be displayed.




**Detail Information:**


- Key = uiOnScreenPowerButton


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disable&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enable&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Pull Down Notification Bar






Select whether the Device User is allowed to Pull Down the Notification Bar to interact with notifications in the Notifications Panel.
- If the value ***Off*** is selected, the Device User will NOT be allowed to Pull Down the Notification Bar, and hence will not be allowed to interact with notifications in the Notifications Panel.
- If the value ***On*** is selected, the Device User will be allowed to Pull Down the Notification Bar, and hence will be allowed to interact with notifications in the Notifications Panel.




**Detail Information:**


- Key = uiPullDownNotificationBar


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Show Airplane Mode in Power Key Menu






Select whether the Device User will be presented with the option to control the state of Airplane Mode from the Menu presented when the power key is held down on a device.




**Detail Information:**


- Key = uiShowAirplaneModeInPwrKeyMenu


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Hide&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Show&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Show Pairing Popup






Select whether a New Pairing Popup will be presented when an unpaired peripheral device attempts to establish a new Bluetooth pairing with a device.
- This option has no effect on existing pairings.
- This option does not prevent new pairings that are initiated from the device to the peripheral.
- This option does not prevent new pairings from being established based on configured Silent Pairing rules.




**Detail Information:**


- Key = uiPairingPopup


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Show Passwords






Select whether passwords should be shown (displayed) when entered on the device or hidden (masked).
- If the value ***Off*** is selected, passwords will globally be hidden (masked) whenever they are being entered on the device.
- If the value ***On*** is selected, passwords will globally be shown (displayed) whenever they are being entered on the device.




**Detail Information:**


- Key = uiShowPasswords


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Show Virtual Keyboard when Physical Keyboard is Active






Select whether the Virtual Keyboard will be shown when the Physical Keyboard is Active.
- If the value ***Off*** is selected, the Virtual Keyboard will NOT be shown if the device has a Physical Keyboard that is Active. This can help avoid the annoyance and confusing of using up screen real-estate to display an on-screen keyboard when the Device User is using a Physical Keyboard to enter data.
- If the value ***On*** is selected, the Virtual Keyboard will be shown when data entry is in progress regardless of whether the device has an Active Physical Keyboard.




**Detail Information:**


- Key = uiShowVirtualKeyboard


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




### Status Bar






Select whether the Android Status Bar should be displayed.
- If the value ***Hide*** is selected, the Android Status Bar will not be displayed, which also means that the Device User will not be allowed to interact with notifications in the Notifications Panel.
- If the value ***Show*** is selected, the Android Status Bar will be displayed, which also means that the Device User might be allowed to interact with notifications in the Notifications Panel.




**Detail Information:**


- Key = uIStatusBar


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Hide&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Show&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




### Use Of Clipboard






Select whether the Device User will be allowed to utilize the clipboard on a device to cut, copy, and paste text between applications.




**Detail Information:**


- Key = uiUseOfClipboard


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.2.




### Use of Date in Notification Panel to Access Clock Application






Select whether the Date in the Notification Panel can be used to invoke the Clock Application.
- If the value ***Allow*** is selected, clicking the Date in the Notification Panel will invoke the Clock Application.
- If the value ***Disallow*** is selected, clicking the Date in the Notification Panel will NOT invoke the Clock Application.




**Detail Information:**


- Key = uiDateInNotificationAccessClock


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.2.




### Use of Home Key






Select whether the Device User will be allowed to utilize the Home Key on a device to leave the current context and return to the Home/Launcher screen.
- If the value ***Off*** is selected, the Home key will be ignored and will cause no action if it is pressed.
- If the value ***On*** is selected, the Home key will be honored and will cause device to go to the Home/Launcher screen when if it is pressed.




**Detail Information:**


- Key = uiUseOfHomeKey


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Use of Magnification Gestures






Select whether the Device User is allowed to Use Magnification Gestures.
- If the value ***Off*** is selected, the Magnification Gestures will be ignored and no action will be taken if they are used by the Device User.
- If the value ***On*** is selected, the Magnification Gestures will be honored and appropriate action will be taken if they are used by the Device User.




**Detail Information:**


- Key = uiUseOfMagnificationGestures


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.0.




### Use of Recent Apps Key






Select whether the Device User is allowed to Use the Recent Apps Key to access recently launched applications.
- If the value ***Off*** is selected, the Recent Apps Key will be ignored, and hence the Device User will not be allowed to access recently launched applications.
- If the value ***On*** is selected, the Recent Apps Key will be honored, and hence the Device User will be allowed to access recently launched applications.




**Detail Information:**


- Key = uiUseOfRecentAppsKey


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### Use of Split Screen Mode






Select whether Split Screen Mode is allowed to be used on the device.
- If the value ***Disallow*** is selected, the use of Split Screen Mode will be blocked on the device.
- If the value ***Allow*** is selected, the use of Split Screen Mode will be allowed on the device.




**Detail Information:**


- Key = uiSplitScreenMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### User Control of Multi User






Select whether Primary Device User is allowed to invoke UI to manage Multi User, including the ability to Create, Delete, and limit the actions of Secondary Users.
- If the value ***Disallow*** is selected, the Primary Device User will not be allowed to manage Secondary Users, even if the device supports multiple users.
- If the value ***Allow*** is selected, the Primary Device User will be allowed to manage Secondary Users, if the device supports multiple users.




**Detail Information:**


- Key = uiUserControlMultiUser


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Touch Mode






Select the operational mode of the Touch Panel in selected devices: - If the value ***Stylus or Finger*** is selected, the Touch Panel will be configured to optimize use with a Stylus or an ungloved Finger.
- If the value ***Glove or Finger*** is selected, the Touch Panel will be configured to optimize use with a Gloved finger or an ungloved Finger.
- If the value ***Finger Only*** is selected, the Touch Panel will be configured to optimize an ungloved Finger.
- If the value ***Stylus or Glove or Finger*** is selected, the Touch Panel will be configured to optimize use with a Stylus, a Gloved finger, or an ungloved Finger.
- If the value ***Finger and Wet*** is selected, the Touch Panel will be configured to optimize use with a finger on a wet touch panel




Not all devices support the ability to configure the Touch Panel mode and those that do may not support every mode.
- An attempt to configure the Touch Panel mode on a device that does not support it will result in an error.
- An attempt to configure a Touch Panel mode on a device that does not support that mode will result in an error.




**Detail Information:**


- Key = uiTouchMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Stylus or Finger&nbsp;</small></i></b></td><td><small>&nbsp;Stylus and Finger&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Glove or Finger&nbsp;</small></i></b></td><td><small>&nbsp;Glove and Finger&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Finger Only&nbsp;</small></i></b></td><td><small>&nbsp;Finger&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stylus or Glove or Finger&nbsp;</small></i></b></td><td><small>&nbsp;Stylus and Glove and Finger&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Finger and Wet&nbsp;</small></i></b></td><td><small>&nbsp;Finger and Wet&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Screen Protector






Select whether Touch Panel should be optimized for use with a Screen Protector. - If selected, the Touch Panel will be configured to optimize use with a screen Protector.
- If unselected, the Touch Panel will be configured to optimize use without a screen Protector.




Not all devices support the ability to configure the Touch Panel to account for the use or a screen Protector.




**Detail Information:**


- Key = uiTouchScreenProtector


- Type = boolean




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Turn on/off the Large Key Indicator feature






Select whether the *Large Key Indicator* feature, which allows a large on-screen indicator to be displayed to indicate the state physical keypad on the device (if any) and which can assist the Device User in cases where multiple key sequences are required.
- If the value ***Turn Off*** is selected, the *Large Key Indicator* feature will be turned OFF and hence the on-screen indicator will NOT be displayed.
- If the value ***Turn On*** is selected, the *Large Key Indicator* feature will be turned ON and hence the on-screen indicator WILL be displayed.




**Detail Information:**


- Key = uiSetLKI


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Turn On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turn Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.0.




### Device user control of Large Key Indicator






Select whether the Device User will be allowed to turn the *Large Key Indicator* feature ON or OFF.
- If the value ***Enable*** is selected, the Device User WILL be allowed to turn the *Large Key Indicator* feature ON or OFF.
- If the value ***Disable*** is selected, the Device User will NOT be allowed to turn the *Large Key Indicator* feature ON or OFF.




**Detail Information:**


- Key = uiUserControlLKI


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Enable&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disable&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.0.




-----
## Host Name Configuration






Use this *Group* to configure the network host name on the device.




**Detail Information:**


- Key = hostStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Device Name






Enter the name by which a device will be known on the network.




**Detail Information:**


- Key = hostDeviceName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




-----
## Key Mapping Configuration






Use this *Group* to configure how the keys on the physical keyboard (if any) of the device are mapped into key and other behaviors.




**Detail Information:**


- Key = keymapStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Action






Select an Action to affect the behaviors mapped to the keys on the physical keyboard (if any) of a device:
- If the value ***Add Mapping*** is selected, a new mapping for a single physical key is added to the mapping tables for one or more keyboard states. You must also specify **Add Mapping Key ID** to provide the physical key for which mappings are to be added or replaced. In addition, you must also specify the *Sub-array* **Add Mapping Behaviors** to define the behavior(s) to be mapped to the identified physical key. If any prior mappings were applied to specify the behaviors of the identified physical key, they will all be replaced by the new specified behaviors.
- If the value ***Reset All Mappings*** is selected, the mapping tables are reset to their defaults. This effectively removes all mappings that have previously been added and returns the behaviors of all keys to their default out-of-box state.




**Detail Information:**


- Key = keymapAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Add Mapping&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset All Mappings&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Add Mapping Key ID






Enter a value that uniquely identifies a physical key on the physical keyboard of a device for which one or more behaviors are to be specified when the value ***Add Mapping*** is selected for **Action**.




**Detail Information:**


- Key = keymapActionAddMappingKeyId


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;0&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;4&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;7&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;8&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;9&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;A&nbsp;</small></i></b></td><td><small>&nbsp;A&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;B&nbsp;</small></i></b></td><td><small>&nbsp;B&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;C&nbsp;</small></i></b></td><td><small>&nbsp;C&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;D&nbsp;</small></i></b></td><td><small>&nbsp;D&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;E&nbsp;</small></i></b></td><td><small>&nbsp;E&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F&nbsp;</small></i></b></td><td><small>&nbsp;F&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;G&nbsp;</small></i></b></td><td><small>&nbsp;G&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;H&nbsp;</small></i></b></td><td><small>&nbsp;H&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;I&nbsp;</small></i></b></td><td><small>&nbsp;I&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;J&nbsp;</small></i></b></td><td><small>&nbsp;J&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;K&nbsp;</small></i></b></td><td><small>&nbsp;K&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;L&nbsp;</small></i></b></td><td><small>&nbsp;L&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;M&nbsp;</small></i></b></td><td><small>&nbsp;M&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;N&nbsp;</small></i></b></td><td><small>&nbsp;N&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;O&nbsp;</small></i></b></td><td><small>&nbsp;O&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P&nbsp;</small></i></b></td><td><small>&nbsp;P&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Q&nbsp;</small></i></b></td><td><small>&nbsp;Q&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;R&nbsp;</small></i></b></td><td><small>&nbsp;R&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;S&nbsp;</small></i></b></td><td><small>&nbsp;S&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;T&nbsp;</small></i></b></td><td><small>&nbsp;T&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;U&nbsp;</small></i></b></td><td><small>&nbsp;U&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;V&nbsp;</small></i></b></td><td><small>&nbsp;V&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;W&nbsp;</small></i></b></td><td><small>&nbsp;W&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;X&nbsp;</small></i></b></td><td><small>&nbsp;X&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Y&nbsp;</small></i></b></td><td><small>&nbsp;Y&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Z&nbsp;</small></i></b></td><td><small>&nbsp;Z&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;. (Period)&nbsp;</small></i></b></td><td><small>&nbsp;DOT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;, (Comma)&nbsp;</small></i></b></td><td><small>&nbsp;COMMA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;* (Star)&nbsp;</small></i></b></td><td><small>&nbsp;STAR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;# (Pound)&nbsp;</small></i></b></td><td><small>&nbsp;POUND&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F1&nbsp;</small></i></b></td><td><small>&nbsp;F1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F2&nbsp;</small></i></b></td><td><small>&nbsp;F2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F3&nbsp;</small></i></b></td><td><small>&nbsp;F3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F4&nbsp;</small></i></b></td><td><small>&nbsp;F4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F5&nbsp;</small></i></b></td><td><small>&nbsp;F5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F6&nbsp;</small></i></b></td><td><small>&nbsp;F6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F7&nbsp;</small></i></b></td><td><small>&nbsp;F7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F8&nbsp;</small></i></b></td><td><small>&nbsp;F8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F9&nbsp;</small></i></b></td><td><small>&nbsp;F9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F10&nbsp;</small></i></b></td><td><small>&nbsp;F10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F11&nbsp;</small></i></b></td><td><small>&nbsp;F11&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F12&nbsp;</small></i></b></td><td><small>&nbsp;F12&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enter&nbsp;</small></i></b></td><td><small>&nbsp;ENTER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Up&nbsp;</small></i></b></td><td><small>&nbsp;UP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Down&nbsp;</small></i></b></td><td><small>&nbsp;DOWN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left&nbsp;</small></i></b></td><td><small>&nbsp;LEFT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right&nbsp;</small></i></b></td><td><small>&nbsp;RIGHT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Escape&nbsp;</small></i></b></td><td><small>&nbsp;ESC&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Backspace&nbsp;</small></i></b></td><td><small>&nbsp;BACKSPACE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Space&nbsp;</small></i></b></td><td><small>&nbsp;SPACE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Return&nbsp;</small></i></b></td><td><small>&nbsp;RETURN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear&nbsp;</small></i></b></td><td><small>&nbsp;CLR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Field Exit&nbsp;</small></i></b></td><td><small>&nbsp;FIELD_EXIT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Alt&nbsp;</small></i></b></td><td><small>&nbsp;ALT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Control&nbsp;</small></i></b></td><td><small>&nbsp;CTRL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Shift&nbsp;</small></i></b></td><td><small>&nbsp;SHIFT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blue&nbsp;</small></i></b></td><td><small>&nbsp;BLUE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Orange&nbsp;</small></i></b></td><td><small>&nbsp;ORANGE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grey&nbsp;</small></i></b></td><td><small>&nbsp;GREY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Diamond&nbsp;</small></i></b></td><td><small>&nbsp;DIAMOND&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Green Dot&nbsp;</small></i></b></td><td><small>&nbsp;GREEN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Red Dot&nbsp;</small></i></b></td><td><small>&nbsp;RED&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Volume Up&nbsp;</small></i></b></td><td><small>&nbsp;VOLUMEUP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Volume Down&nbsp;</small></i></b></td><td><small>&nbsp;VOLUMEDOWN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scan&nbsp;</small></i></b></td><td><small>&nbsp;SCAN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grip Trigger&nbsp;</small></i></b></td><td><small>&nbsp;GRIP_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grip Trigger 2&nbsp;</small></i></b></td><td><small>&nbsp;GRIP_TRIGGER_2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button L1&nbsp;</small></i></b></td><td><small>&nbsp;LEFT_TRIGGER_1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button L2&nbsp;</small></i></b></td><td><small>&nbsp;LEFT_TRIGGER_2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R1&nbsp;</small></i></b></td><td><small>&nbsp;RIGHT_TRIGGER_1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R2&nbsp;</small></i></b></td><td><small>&nbsp;RIGHT_TRIGGER_2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left Trigger&nbsp;</small></i></b></td><td><small>&nbsp;LEFT_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right Trigger&nbsp;</small></i></b></td><td><small>&nbsp;RIGHT_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Center Trigger&nbsp;</small></i></b></td><td><small>&nbsp;CENTER_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gun Trigger&nbsp;</small></i></b></td><td><small>&nbsp;GUN_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Headset Button&nbsp;</small></i></b></td><td><small>&nbsp;HEADSET_HOOK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Back&nbsp;</small></i></b></td><td><small>&nbsp;BACK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Home&nbsp;</small></i></b></td><td><small>&nbsp;HOME&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Menu&nbsp;</small></i></b></td><td><small>&nbsp;MENU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Recent&nbsp;</small></i></b></td><td><small>&nbsp;RECENT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Search&nbsp;</small></i></b></td><td><small>&nbsp;SEARCH&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard Backlight&nbsp;</small></i></b></td><td><small>&nbsp;KEYLIGHT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Display Backlight&nbsp;</small></i></b></td><td><small>&nbsp;LAMP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Power&nbsp;</small></i></b></td><td><small>&nbsp;POWER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P1 Button&nbsp;</small></i></b></td><td><small>&nbsp;P1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P2 Button&nbsp;</small></i></b></td><td><small>&nbsp;P2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P3 Button&nbsp;</small></i></b></td><td><small>&nbsp;P3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P4 Button&nbsp;</small></i></b></td><td><small>&nbsp;P4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P5 Button&nbsp;</small></i></b></td><td><small>&nbsp;P5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P6 Button&nbsp;</small></i></b></td><td><small>&nbsp;P6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;W1 Button&nbsp;</small></i></b></td><td><small>&nbsp;W1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;W2 Button&nbsp;</small></i></b></td><td><small>&nbsp;W2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Rear Button&nbsp;</small></i></b></td><td><small>&nbsp;REAR_BUTTON&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left External Trigger&nbsp;</small></i></b></td><td><small>&nbsp;LEFT_EXTERNAL_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right External Trigger&nbsp;</small></i></b></td><td><small>&nbsp;RIGHT_EXTERNAL_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Touch NAV_PAD&nbsp;</small></i></b></td><td><small>&nbsp;NAV_PAD&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 1&nbsp;</small></i></b></td><td><small>&nbsp;M1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 2&nbsp;</small></i></b></td><td><small>&nbsp;M2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 3&nbsp;</small></i></b></td><td><small>&nbsp;M3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 4&nbsp;</small></i></b></td><td><small>&nbsp;M4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 5&nbsp;</small></i></b></td><td><small>&nbsp;M5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macro 6&nbsp;</small></i></b></td><td><small>&nbsp;M6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Brightness Up&nbsp;</small></i></b></td><td><small>&nbsp;BRIGHTNESSUP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Brightness Down&nbsp;</small></i></b></td><td><small>&nbsp;BRIGHTNESSDOWN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard&nbsp;</small></i></b></td><td><small>&nbsp;KEYBOARD&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard Backlight Brightness Up&nbsp;</small></i></b></td><td><small>&nbsp;KEYLIGHTUP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard Backlight Brightness Down&nbsp;</small></i></b></td><td><small>&nbsp;KEYLIGHTDOWN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Rotate&nbsp;</small></i></b></td><td><small>&nbsp;ROTATE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;- (Minus)&nbsp;</small></i></b></td><td><small>&nbsp;MINUS&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Add Mapping Behaviors






Use this *Sub-array* to specify the set of behaviors to be performed for one or more keyboard states. for a specified physical key on a device.




**Detail Information:**


- Key = keymapActionAddMappingBehaviors


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




#### Behavior






Use this *Sub-group* to specify the behavior when a specified key is pressed in a specified state on the physical keyboard of a device.




**Detail Information:**


- Key = keymapBehavior


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Table Name






Select the name of the table into which a specific behavior will be stored. Mapping tables are associated with keyboard states and are named based on the state key on the physical keyboard of a device that causes that keyboard state to be activated or deactivated.




Note that due to variations in keyboard size and layout, not all keyboard states may be supported on all devices or on all keyboard possible on any given device. Some or all of the following may values may be supported:




- If the value ***Base*** is selected, the Base Mapping table will be selected. The Base Mapping table defines the behavior that will be performed for a physical key when it is pressed while no special keyboard state is active.




- If the value ***Blue*** is selected, the Blue Mapping table will be selected. The Blue Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Blue key has been used to activate the Blue keyboard state.




- If the value ***Orange*** is selected, the Orange Mapping table will be selected. The Orange Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Orange key has been used to activate the Orange keyboard state.




- If the value ***Grey*** is selected, the Grey Mapping table will be selected. The Grey Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Grey key has been used to activate the Grey keyboard state.




- If the value ***Shift*** is selected, the Shift Mapping table will be selected. The Shift Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Shift key has been used to activate the Shift keyboard state.




- If the value ***Control*** is selected, the Control Mapping table will be selected. The Control Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Control key has been used to activate the Control keyboard state.




**Detail Information:**


- Key = keymapBehaviorTableName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Base&nbsp;</small></i></b></td><td><small>&nbsp;Base&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blue&nbsp;</small></i></b></td><td><small>&nbsp;Blue&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Orange&nbsp;</small></i></b></td><td><small>&nbsp;Orange&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grey&nbsp;</small></i></b></td><td><small>&nbsp;Grey&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Shift&nbsp;</small></i></b></td><td><small>&nbsp;Shift&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Control&nbsp;</small></i></b></td><td><small>&nbsp;Control&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Type






Select the type of behavior that will be performed when a specified key is pressed while the keyboard state associated with the specified Mapping table is active.The following may values are supported:
- If the value ***Send Key Code*** is selected, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send a specified key code. This performs *Classic Keyboard Remapping*, where the behavior of a key is changed to be the behavior of some other key, which may or may not be present on the physical keyboard. You must also specify **Send Key Code** to provide the key code that will be sent.
- If the value ***Send Trigger*** is selected, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send a trigger signal. Trigger signals may be used to initiate various activities, such as barcode scanning, RFID reading, push to talk, etc. You must also specify **Send Trigger** to select which trigger signal will be sent,
- If the value ***Launch Application*** is selected, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to launch an application. You must also specify **Launch Application Name** to provide the *Friendly Name* of the application to be launched. Note that this is NOT the *Android Package Name*. To launch an application by its *Android Package Name*, the value ***Send Intent*** should be used.
- If the value ***Send Intent*** is selected, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send and Android Intent, which might cause any number of possible results, depending on the nature of the intent configured to be sent. You must also specify some or all of the following to define the Android Intent to be sent:
- **Type**
- **Action**
- **Category**
- **Package Name**
- **Class**
- **Data URI**
- **Flags**
- **MIME Type**
- **Extra Name**
- **Extra Value**




Sending an Android Intent provides a very flexible way to specify the behavior to be performed for a key by invoking an application or service. As such, there are many options that control the nature of the intent that will be sent. It is generally recommended to fully understand the nature of the Android Intent to be sent before attempting to configure it as a key behavior. In many cases, the application or service to be invoked will define the nature of the intent is wishes to received and that definition can be used to drive the configuration.
- If the value ***Suppress Key*** is selected, NO behavior will be performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active. This provides a method to remap a key to do nothing.
- If the value ***Reset To Default*** is selected, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active be reset back to its defaults. This will effectively remove any prior mapping of that key in that state and return the key to its standard behavior in that state.




**Detail Information:**


- Key = keymapBehaviorType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Send Key Code&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Send Trigger&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Launch Application&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Send Intent&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Suppress Key&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset To Default&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Send Key Code






Select the key code that will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is selected for **Type**.




**Detail Information:**


- Key = keymapBehaviorTypeSendKeyCode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;0&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;4&nbsp;</small></i></b></td><td><small>&nbsp;11&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5&nbsp;</small></i></b></td><td><small>&nbsp;12&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6&nbsp;</small></i></b></td><td><small>&nbsp;13&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;7&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;8&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;9&nbsp;</small></i></b></td><td><small>&nbsp;16&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;+ (Plus)&nbsp;</small></i></b></td><td><small>&nbsp;81&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;- (Minus)&nbsp;</small></i></b></td><td><small>&nbsp;69&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;= (Equals)&nbsp;</small></i></b></td><td><small>&nbsp;70&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;( (Left Bracket)&nbsp;</small></i></b></td><td><small>&nbsp;71&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;) (Right Bracket)&nbsp;</small></i></b></td><td><small>&nbsp;72&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;` (Grave)&nbsp;</small></i></b></td><td><small>&nbsp;68&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;/ (Slash)&nbsp;</small></i></b></td><td><small>&nbsp;76&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;\\\\ (Backslash)&nbsp;</small></i></b></td><td><small>&nbsp;73&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;; (Semicolon)&nbsp;</small></i></b></td><td><small>&nbsp;74&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;' (Apostrophe)&nbsp;</small></i></b></td><td><small>&nbsp;75&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;, (Comma)&nbsp;</small></i></b></td><td><small>&nbsp;55&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;. (Period)&nbsp;</small></i></b></td><td><small>&nbsp;56&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;* (Star)&nbsp;</small></i></b></td><td><small>&nbsp;17&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;# (Pound)&nbsp;</small></i></b></td><td><small>&nbsp;18&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;@ (At)&nbsp;</small></i></b></td><td><small>&nbsp;77&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;A&nbsp;</small></i></b></td><td><small>&nbsp;29&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;B&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;C&nbsp;</small></i></b></td><td><small>&nbsp;31&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;D&nbsp;</small></i></b></td><td><small>&nbsp;32&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;E&nbsp;</small></i></b></td><td><small>&nbsp;33&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F&nbsp;</small></i></b></td><td><small>&nbsp;34&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;G&nbsp;</small></i></b></td><td><small>&nbsp;35&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;H&nbsp;</small></i></b></td><td><small>&nbsp;36&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;I&nbsp;</small></i></b></td><td><small>&nbsp;37&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;J&nbsp;</small></i></b></td><td><small>&nbsp;38&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;K&nbsp;</small></i></b></td><td><small>&nbsp;39&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;L&nbsp;</small></i></b></td><td><small>&nbsp;40&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;M&nbsp;</small></i></b></td><td><small>&nbsp;41&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;N&nbsp;</small></i></b></td><td><small>&nbsp;42&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;O&nbsp;</small></i></b></td><td><small>&nbsp;43&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;P&nbsp;</small></i></b></td><td><small>&nbsp;44&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Q&nbsp;</small></i></b></td><td><small>&nbsp;45&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;R&nbsp;</small></i></b></td><td><small>&nbsp;46&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;S&nbsp;</small></i></b></td><td><small>&nbsp;47&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;T&nbsp;</small></i></b></td><td><small>&nbsp;48&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;U&nbsp;</small></i></b></td><td><small>&nbsp;49&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;V&nbsp;</small></i></b></td><td><small>&nbsp;50&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;W&nbsp;</small></i></b></td><td><small>&nbsp;51&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;X&nbsp;</small></i></b></td><td><small>&nbsp;52&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Y&nbsp;</small></i></b></td><td><small>&nbsp;53&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Z&nbsp;</small></i></b></td><td><small>&nbsp;54&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enter&nbsp;</small></i></b></td><td><small>&nbsp;66&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Tab&nbsp;</small></i></b></td><td><small>&nbsp;61&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Space&nbsp;</small></i></b></td><td><small>&nbsp;62&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Escape&nbsp;</small></i></b></td><td><small>&nbsp;111&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Delete&nbsp;</small></i></b></td><td><small>&nbsp;67&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F1&nbsp;</small></i></b></td><td><small>&nbsp;131&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F2&nbsp;</small></i></b></td><td><small>&nbsp;132&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F3&nbsp;</small></i></b></td><td><small>&nbsp;133&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F4&nbsp;</small></i></b></td><td><small>&nbsp;134&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F5&nbsp;</small></i></b></td><td><small>&nbsp;135&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F6&nbsp;</small></i></b></td><td><small>&nbsp;136&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F7&nbsp;</small></i></b></td><td><small>&nbsp;137&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F8&nbsp;</small></i></b></td><td><small>&nbsp;138&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F9&nbsp;</small></i></b></td><td><small>&nbsp;139&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F10&nbsp;</small></i></b></td><td><small>&nbsp;140&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F11&nbsp;</small></i></b></td><td><small>&nbsp;141&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;F12&nbsp;</small></i></b></td><td><small>&nbsp;142&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 0&nbsp;</small></i></b></td><td><small>&nbsp;144&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 1&nbsp;</small></i></b></td><td><small>&nbsp;145&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 2&nbsp;</small></i></b></td><td><small>&nbsp;146&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 3&nbsp;</small></i></b></td><td><small>&nbsp;147&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 4&nbsp;</small></i></b></td><td><small>&nbsp;148&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 5&nbsp;</small></i></b></td><td><small>&nbsp;149&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 6&nbsp;</small></i></b></td><td><small>&nbsp;150&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 7&nbsp;</small></i></b></td><td><small>&nbsp;151&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 8&nbsp;</small></i></b></td><td><small>&nbsp;152&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD 9&nbsp;</small></i></b></td><td><small>&nbsp;153&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD / (NUMPAD Divide)&nbsp;</small></i></b></td><td><small>&nbsp;154&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD * (NUMPAD Multiply)&nbsp;</small></i></b></td><td><small>&nbsp;155&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD - (NUMPAD Subtract)&nbsp;</small></i></b></td><td><small>&nbsp;156&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD + (NUMPAD Add)&nbsp;</small></i></b></td><td><small>&nbsp;157&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD . (NUMPAD Period)&nbsp;</small></i></b></td><td><small>&nbsp;158&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD , (NUMPAD Comma)&nbsp;</small></i></b></td><td><small>&nbsp;159&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD Enter&nbsp;</small></i></b></td><td><small>&nbsp;160&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD = (NUMPAD Equals)&nbsp;</small></i></b></td><td><small>&nbsp;161&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD { (NUMPAD Left Parenthesis)&nbsp;</small></i></b></td><td><small>&nbsp;162&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NUMPAD } (NUMPAD Right Parenthesis)&nbsp;</small></i></b></td><td><small>&nbsp;163&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DPAD Up&nbsp;</small></i></b></td><td><small>&nbsp;19&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DPAD Down&nbsp;</small></i></b></td><td><small>&nbsp;20&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DPAD Left&nbsp;</small></i></b></td><td><small>&nbsp;21&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DPAD Right&nbsp;</small></i></b></td><td><small>&nbsp;22&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DPAD Center&nbsp;</small></i></b></td><td><small>&nbsp;23&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Move Home&nbsp;</small></i></b></td><td><small>&nbsp;122&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Move End&nbsp;</small></i></b></td><td><small>&nbsp;123&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Page Up&nbsp;</small></i></b></td><td><small>&nbsp;92&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Page Down&nbsp;</small></i></b></td><td><small>&nbsp;93&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Insert&nbsp;</small></i></b></td><td><small>&nbsp;124&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Forward Delete&nbsp;</small></i></b></td><td><small>&nbsp;112&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear&nbsp;</small></i></b></td><td><small>&nbsp;28&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Lamp&nbsp;</small></i></b></td><td><small>&nbsp;10024&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Do Nothing&nbsp;</small></i></b></td><td><small>&nbsp;10026&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Blue&nbsp;</small></i></b></td><td><small>&nbsp;10027&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Orange&nbsp;</small></i></b></td><td><small>&nbsp;10028&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grey&nbsp;</small></i></b></td><td><small>&nbsp;10029&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Diamond&nbsp;</small></i></b></td><td><small>&nbsp;10039&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Alt&nbsp;</small></i></b></td><td><small>&nbsp;10030&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Control&nbsp;</small></i></b></td><td><small>&nbsp;10031&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Shift&nbsp;</small></i></b></td><td><small>&nbsp;10032&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard&nbsp;</small></i></b></td><td><small>&nbsp;10034&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Touch Calibrate&nbsp;</small></i></b></td><td><small>&nbsp;10035&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scan&nbsp;</small></i></b></td><td><small>&nbsp;10036&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Search Key&nbsp;</small></i></b></td><td><small>&nbsp;10037&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;None&nbsp;</small></i></b></td><td><small>&nbsp;10038&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KeyLight&nbsp;</small></i></b></td><td><small>&nbsp;10025&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keylight Up&nbsp;</small></i></b></td><td><small>&nbsp;10040&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keylight Down&nbsp;</small></i></b></td><td><small>&nbsp;10041&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left Shift&nbsp;</small></i></b></td><td><small>&nbsp;59&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right Shift&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left Alt&nbsp;</small></i></b></td><td><small>&nbsp;57&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right Alt&nbsp;</small></i></b></td><td><small>&nbsp;58&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left Control&nbsp;</small></i></b></td><td><small>&nbsp;113&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right Control&nbsp;</small></i></b></td><td><small>&nbsp;114&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Meta Left&nbsp;</small></i></b></td><td><small>&nbsp;117&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Meta Right&nbsp;</small></i></b></td><td><small>&nbsp;118&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Caps Lock&nbsp;</small></i></b></td><td><small>&nbsp;115&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Num Lock&nbsp;</small></i></b></td><td><small>&nbsp;143&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scroll Lock&nbsp;</small></i></b></td><td><small>&nbsp;116&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SysRq&nbsp;</small></i></b></td><td><small>&nbsp;120&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Break&nbsp;</small></i></b></td><td><small>&nbsp;121&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Function&nbsp;</small></i></b></td><td><small>&nbsp;119&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Back&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Forward&nbsp;</small></i></b></td><td><small>&nbsp;125&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Home&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Menu&nbsp;</small></i></b></td><td><small>&nbsp;82&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Settings&nbsp;</small></i></b></td><td><small>&nbsp;176&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Application Switch&nbsp;</small></i></b></td><td><small>&nbsp;187&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Calculator&nbsp;</small></i></b></td><td><small>&nbsp;210&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Explorer&nbsp;</small></i></b></td><td><small>&nbsp;64&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Envelope&nbsp;</small></i></b></td><td><small>&nbsp;65&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bookmark&nbsp;</small></i></b></td><td><small>&nbsp;174&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Music&nbsp;</small></i></b></td><td><small>&nbsp;209&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Call&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;End Call&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Microphone Mute&nbsp;</small></i></b></td><td><small>&nbsp;91&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Camera&nbsp;</small></i></b></td><td><small>&nbsp;27&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Search&nbsp;</small></i></b></td><td><small>&nbsp;84&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Contacts&nbsp;</small></i></b></td><td><small>&nbsp;207&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Calendar&nbsp;</small></i></b></td><td><small>&nbsp;208&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Volume Up&nbsp;</small></i></b></td><td><small>&nbsp;24&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Volume Down&nbsp;</small></i></b></td><td><small>&nbsp;25&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Volume Mute&nbsp;</small></i></b></td><td><small>&nbsp;164&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Brightness Up&nbsp;</small></i></b></td><td><small>&nbsp;221&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Brightness Down&nbsp;</small></i></b></td><td><small>&nbsp;220&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Power&nbsp;</small></i></b></td><td><small>&nbsp;26&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Sleep&nbsp;</small></i></b></td><td><small>&nbsp;223&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wakeup&nbsp;</small></i></b></td><td><small>&nbsp;224&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Headset&nbsp;</small></i></b></td><td><small>&nbsp;79&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Push-to-talk&nbsp;</small></i></b></td><td><small>&nbsp;228&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Camera Focus&nbsp;</small></i></b></td><td><small>&nbsp;80&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Play/Pause&nbsp;</small></i></b></td><td><small>&nbsp;85&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Stop&nbsp;</small></i></b></td><td><small>&nbsp;86&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Next&nbsp;</small></i></b></td><td><small>&nbsp;87&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Previous&nbsp;</small></i></b></td><td><small>&nbsp;88&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Rewind&nbsp;</small></i></b></td><td><small>&nbsp;89&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Fast-Forward&nbsp;</small></i></b></td><td><small>&nbsp;90&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Play&nbsp;</small></i></b></td><td><small>&nbsp;126&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Pause&nbsp;</small></i></b></td><td><small>&nbsp;127&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Close&nbsp;</small></i></b></td><td><small>&nbsp;128&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Eject&nbsp;</small></i></b></td><td><small>&nbsp;129&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Media Record&nbsp;</small></i></b></td><td><small>&nbsp;130&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button L1&nbsp;</small></i></b></td><td><small>&nbsp;102&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R1&nbsp;</small></i></b></td><td><small>&nbsp;103&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button L2&nbsp;</small></i></b></td><td><small>&nbsp;104&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R2&nbsp;</small></i></b></td><td><small>&nbsp;105&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button A&nbsp;</small></i></b></td><td><small>&nbsp;96&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button B&nbsp;</small></i></b></td><td><small>&nbsp;97&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button C&nbsp;</small></i></b></td><td><small>&nbsp;98&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button X&nbsp;</small></i></b></td><td><small>&nbsp;99&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button Y&nbsp;</small></i></b></td><td><small>&nbsp;100&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button Z&nbsp;</small></i></b></td><td><small>&nbsp;101&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Left Thumb Button&nbsp;</small></i></b></td><td><small>&nbsp;106&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Right Thumb Button&nbsp;</small></i></b></td><td><small>&nbsp;107&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Start Button&nbsp;</small></i></b></td><td><small>&nbsp;108&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Select Button&nbsp;</small></i></b></td><td><small>&nbsp;109&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Mode Button&nbsp;</small></i></b></td><td><small>&nbsp;110&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 1&nbsp;</small></i></b></td><td><small>&nbsp;188&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 2&nbsp;</small></i></b></td><td><small>&nbsp;189&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 3&nbsp;</small></i></b></td><td><small>&nbsp;190&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 4&nbsp;</small></i></b></td><td><small>&nbsp;191&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 5&nbsp;</small></i></b></td><td><small>&nbsp;192&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 6&nbsp;</small></i></b></td><td><small>&nbsp;193&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 7&nbsp;</small></i></b></td><td><small>&nbsp;194&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 8&nbsp;</small></i></b></td><td><small>&nbsp;195&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 9&nbsp;</small></i></b></td><td><small>&nbsp;196&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 10&nbsp;</small></i></b></td><td><small>&nbsp;197&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 11&nbsp;</small></i></b></td><td><small>&nbsp;198&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 12&nbsp;</small></i></b></td><td><small>&nbsp;199&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 13&nbsp;</small></i></b></td><td><small>&nbsp;200&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 14&nbsp;</small></i></b></td><td><small>&nbsp;201&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 15&nbsp;</small></i></b></td><td><small>&nbsp;202&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Gamepad Button 16&nbsp;</small></i></b></td><td><small>&nbsp;203&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Zenkaku/Hankaku&nbsp;</small></i></b></td><td><small>&nbsp;211&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Eisu&nbsp;</small></i></b></td><td><small>&nbsp;212&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Muhenkan&nbsp;</small></i></b></td><td><small>&nbsp;213&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Henkan&nbsp;</small></i></b></td><td><small>&nbsp;214&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Katakana/Hiragana&nbsp;</small></i></b></td><td><small>&nbsp;215&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ro&nbsp;</small></i></b></td><td><small>&nbsp;217&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Yen&nbsp;</small></i></b></td><td><small>&nbsp;216&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Kana&nbsp;</small></i></b></td><td><small>&nbsp;218&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard&nbsp;</small></i></b></td><td><small>&nbsp;10034&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Alt






Select how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is selected for **Type** and when **Send Key Code** is specified.
- If the value ***Off*** is selected, when the key code is sent, it will be sent with the Alt keyboard state inactive. This will ensure that the key code is NOT interpreted as an Alt key.
- If the value ***On*** is selected, when the key code is sent, it will be sent with the Alt keyboard state active. This will ensure that the key code is interpreted as an Alt key.
- If no value is specified, when the key code is sent, the Alt keyboard state will not be changed. This will cause the key to be interpreted as an Alt key or not based on the existing state.




**Detail Information:**


- Key = keymapBehaviorTypeSendKeyCodeAlt


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Ctrl






Select how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is selected for **Type** and when **Send Key Code** is specified.
- If the value ***Off*** is selected, when the key code is sent, it will be sent with the Ctrl keyboard state inactive. This will ensure that the key code is NOT interpreted as an Ctrl key.
- If the value ***On*** is selected, when the key code is sent, it will be sent with the Ctrl keyboard state active. This will ensure that the key code is interpreted as an Ctrl key.
- If no value is specified, when the key code is sent, the Ctrl keyboard state will not be changed. This will cause the key to be interpreted as an Ctrl key or not based on the existing state.




**Detail Information:**


- Key = keymapBehaviorTypeSendKeyCodeCtrl


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Fn






Select how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is selected for **Type** and when **Send Key Code** is specified.
- If the value ***Off*** is selected, when the key code is sent, it will be sent with the Fn keyboard state inactive. This will ensure that the key code is NOT interpreted as an Fn key.
- If the value ***On*** is selected, when the key code is sent, it will be sent with the Fn keyboard state active. This will ensure that the key code is interpreted as an Fn key.
- If no value is specified, when the key code is sent, the Fn keyboard state will not be changed. This will cause the key to be interpreted as an Fn key or not based on the existing state.




**Detail Information:**


- Key = keymapBehaviorTypeSendKeyCodeFn


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Shift






Select how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is selected for **Type** and when **Send Key Code** is specified.
- If the value ***Off*** is selected, when the key code is sent, it will be sent with the Shift keyboard state inactive. This will ensure that the key code is NOT interpreted as an Shift key.
- If the value ***On*** is selected, when the key code is sent, it will be sent with the Shift keyboard state active. This will ensure that the key code is interpreted as an Shift key.
- If no value is specified, when the key code is sent, the Shift keyboard state will not be changed. This will cause the key to be interpreted as an Shift key or not based on the existing state.




**Detail Information:**


- Key = keymapBehaviorTypeSendKeyCodeShift


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Send Trigger






Select the trigger signal that will be sent as the behavior for a specified key a specified state when the value ***Send Trigger*** is selected for **Type**.




Eight trigger signals are defined, but not all may be supported on all devices. All devices generally support at least ***Trigger 1*** and generally default to using this trigger signal to activate the barcode scanner. Some devices may support additional trigger signals and some devices might be reconfigured to use ***Trigger 1*** for some purpose other than barcode scanning. To determine which trigger signals are supported on a given device, consult the documentation for that specific device.




**Detail Information:**


- Key = keymapBehaviorTypeSendTrigger


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Trigger 1&nbsp;</small></i></b></td><td><small>&nbsp;10016&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 2&nbsp;</small></i></b></td><td><small>&nbsp;10017&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 3&nbsp;</small></i></b></td><td><small>&nbsp;10018&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 4&nbsp;</small></i></b></td><td><small>&nbsp;10019&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 5&nbsp;</small></i></b></td><td><small>&nbsp;10020&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 6&nbsp;</small></i></b></td><td><small>&nbsp;10021&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 7&nbsp;</small></i></b></td><td><small>&nbsp;10022&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trigger 8&nbsp;</small></i></b></td><td><small>&nbsp;10023&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Send Intent






Select when an intent should be sent as the behavior for a remapped key.




- If the value ***On Key Down*** is selected, the intent will be sent immediately when the key is first detected as being pressed.
- If the value ***On Key Up*** is selected, the intent will not be sent until the key is detected as being released after being being pressed.
- If the value ***On Both Key Up and Down*** is selected, the intent will be sent immediately when the key is first detected as being pressed and then again when the key is detected as being released.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntent


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;On Key Down&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On Key Up&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On Both Key Up and Down&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Type






Enter the method in which an Android Intent should be sent to invoke an application or service when the value ***Send Intent*** is selected for **Type**.




Depending on the application or service to be invoked, there is likely only one method that can be used successfully to invoke a desired behavior in that application or service. You will need to consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value will invoke the desired behavior. The possible values are.
- If the value ***StartActivity*** is selected, the Android Intent will be sent using the startActivity() method. This method is suitable for invoking Activities, which are components that perform user interactions. If the behavior to be invoked involves interacting with the Device User, this method will most likely be used.
- If the value ***Broadcast*** is selected, the Android Intent will be sent using the sendBroadcast() method. This method is suitable for invoking Services, which are components that implement background operations. If the behavior to be invoked does not involves interacting with the Device User, this method will most likely be used.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;StartActivity&nbsp;</small></i></b></td><td><small>&nbsp;StartActivity&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Broadcast&nbsp;</small></i></b></td><td><small>&nbsp;Broadcast&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Action






Enter the action value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is selected for **Type**.








An action value is NOT mandatory to specify for an Android Intent. But an action value is commonly used to identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports multiple functions, in which case the action value is commonly used to identify which function to perform when invoking that application or service. You will need to consult the documentation or developer of a given application or service to determine whether an action value is needed and, if so, which value will invoke the desired behavior.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentAction


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Category






Enter the category value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is selected for **Type**.








A category value is NOT mandatory to specify for an Android Intent. But a category value is commonly used to help identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports many functions, in which case many action values may be used to identify those functions and it may be useful to categorize those functions. In some cases, the same action value might be supported in more than one category. You will need to consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value will invoke the desired behavior.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentCategory


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Package Name






Enter the *Android Package Name* of the application or service to invoke when the value ***Send Intent*** is selected for **Type**.




It is not mandatory to specify the *Android Package Name* when sending an Android Intent, but is is often advisable.
- When an *Android Package Name* is specified, the intent becomes an Explicit Intent and the intent can ONLY be sent to an application or service with that *Android Package Name* and no other. This can increase security and is often used when the intent being sent requires any sensitive data. You must also specify **Class** whenever an *Android Package Name* is specified, since an Explicit Intent is always sent to an Android Component, which is identified by a *Android Package Name* and a Class within that Package.
- When no *Android Package Name* is specified, the intent becomes an Implicit Intent and the intent may be sent to any application or service that has registered its ability to handle that intent. This can increase flexibility and is often used when the intent being sent requires no sensitive data and when it may be desirable to dynamically control which application or service is ultimately invoked to handle that intent.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Class






Enter the *Android Class* that identifies an *Android Component* within an application or service to invoke when the value ***Send Intent*** is selected for **Type** and when **Package Name** is specified.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentClass


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Data URI






Enter a Uniform Resource Identifier (URI) that identifies some data, in the form of a resource on the device (e.g. a file in the device file system) or off the device (e.g. a resource available via a network) that should be utilized by the application or service invoked by the intent.








Whether the intended recipient of the intent expects a URI to be specified as part of the intent or not is up to that recipient and/or the definition of the intent that recipient is designed to consume.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentDataUri


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Flags






Enter intent flags to be set for the intent to be sent.




Intent flags control how the intent is handled by Android. Some intent flags are specific to the type of component that will be invoked by the Intent (e.g. activity vs service). Whether certain intent flags are needed to produce the desired result when the intended recipient of the intent is invoked is up to that recipient and/or the definition of the intent that recipient is designed to consume. Intent flags MUST be specified as a hexadecimal value with the appropriate bits set for any flag or flags desired. Consult the Android documentation to translate intent flag names, when needed, into their appropriate hexadecimal values.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentFlags


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### MIME Type






Enter a Multipurpose Internet Mail Extensions (MIME) type to use when processing the intent data and when **Data URI** is specified.








Normally the type would be inferred from the data itself. Setting a MIME type explicitly, disables automatic type detection and and forces handling according to the specified type.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentMimeType


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Extra Name






Enter the name of a single extra named string value to be attached to the intent to be sent.








Android allows a collection of extra named values, of various types, to be attached to an intent. Exactly one value whose data type must be string can be specified. When a name is specified, you must also specify **Extra Value** to provide the corresponding value to be attached for the string extra.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentExtraName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Extra Value






Enter the value of the *String Extra* to be attached to the intent to be sent and whose name is specified via **Extra Name**.




**Detail Information:**


- Key = keymapBehaviorTypeSendIntentExtraValue


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Launch Application Name






Enter the *Friendly Name* of an application to be launched when the value ***Launch Application*** is selected for **Type**.




Note that the application *Friendly Name* is NOT the same as *Android Package Name*. The application *Friendly Name* is generally the name by which the application is identified in in-device UI, such as the application Launcher, the application's Title Bar, and the list of application names display in the Recent Application list and the AppInfo section of the Settings UI. To launch an application based on its *Android Package Name*, the value ***Send Intent*** should be selected for **Type** instead.




**Detail Information:**


- Key = keymapBehaviorTypeLaunchApplicationName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




-----
## Power Configuration






Use this *Group* to perform power-related actions and configure power-related settings on a device.




**Detail Information:**


- Key = powerStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Power Action






Select an Action to control the Power to the device.
- If the value ***Sleep*** is selected, the device will go to Sleep (i.e. enter Suspend Mode).




- If the value ***Reboot*** is selected, the device will perform an OS Reboot (i.e. simple Reset).




**Detail Information:**


- Key = powerAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Sleep&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reboot&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### Battery Percentage Decommission Threshold






Enter the percentage of remaining battery capacity below which the battery will be deemed ready for decommissioning.




**Detail Information:**


- Key = powerBatteryThresholdPercentage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Battery Usage Decommission Threshold






Enter the amount of battery usage (e.g. charge/discharge cycles, coulombs in/out, etc.) that can occur beefore the battery will be deemed ready for decommissioning.




**Detail Information:**


- Key = powerBatteryThresholdUsage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Battery Critical Low Threshold






Enter the threshold battery level below which the battery is deemed to be critically low.
- The *Default Value* is ***4***, which causes the battery to be deemed critical low when the battery level dips below 4% remaining capacity.
- If the value ***0*** is selected, the currently configured critically low threshold will not be changed, which is functionally equivalent to not specifying value.
- If a value from ***1*** through ***25*** will cause the critically low threshold will be set to the specified value.




**Detail Information:**


- Key = powerBatteryThresholdCriticalLow


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Battery Optimization Action






Select an Action to control which applications are subject to battery optimization and which are exempt.
- If the value ***Add*** is selected, one or more applications will be made subject to battery optimizations and you must also specify **Add Package Names** to provide the *Android Package Name(s)* of the application(s) to be made subject to battery optimizations.
- If the value ***Remove*** is selected, one or more applications will be made subject to battery optimizations and you must also specify **Remove Package Names** to provide the *Android Package Name(s)* of the application(s) to be exempted from battery optimizations.




**Detail Information:**


- Key = powerBatteryOptimizationAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Add&nbsp;</small></i></b></td><td><small>&nbsp;Add&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Remove&nbsp;</small></i></b></td><td><small>&nbsp;Remove&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Add Package Names






Enter one or more *Android Package Name(s)* that identify application(s) that should be made subject to battery optimizations.
- If specified, multiple *Android Package Names* should be separated using commas.




**Detail Information:**


- Key = powerBatteryOptimizationActionAddPackageNames


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Remove Package Names






Enter one or more *Android Package Name(s)* that identify application(s) that should be exempted from battery optimizations.




If specified, multiple *Android Package Names* should be separated using commas.




**Detail Information:**


- Key = powerBatteryOptimizationActionRemovePackageNames


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.0.




### Port Action






Select an Action to control the Output Power various Ports on the device.
- If the value ***Turn Output Power OFF*** is selected, the Output Power for a specified Port will be turned off.
- If the value ***Turn Output Power ON*** is selected, the Output Power for a specified Port will be turned on.








You must also specify **Port Select** to provide the Port for which Output Power will be controlled.








**Detail Information:**


- Key = powerPortAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Turn Output Power OFF&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turn Output Power ON&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Port Select






Select the Port that will be affected by an Action to control the Output Power on the device when **Port Action** is specified.
- If the value ***Serial Port 1*** is selected, the Output Power will be turned on or off for the first device Serial Port.
- If the value ***Serial Port 2*** is selected, the Output Power will be turned on or off for the second device Serial Port.
- If the value ***USB Port 2*** is selected, the Output Power will be turned on or off for the second device USB Port.








**Detail Information:**


- Key = powerPortSelect


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Serial Port 1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Serial Port 2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;USB Port 2&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Auto Power Control






Select whether device power will be automatically controlled.
- If the value ***Off*** is selected, the device power will NOT be automatically controlled.
- If the value ***On*** is selected, the device power will be automatically controlled and you should also specify one or more of the following:
- **Auto Power Off** to specify whether/how device power will automatically be turned off.
- **Auto Power On** to specify whether/how device power will automatically be turned on.




**Detail Information:**


- Key = powerAutoPowerControl


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Auto Power Off






Select whether and how device power will be automatically turned off as part of automatic power control when **Auto Power Control** is specified.
- If the value ***Never*** is selected, the device power will NOT automatically turn off when the ignition turns off.
- If the value ***When Ignition is Turned Off*** is selected, the device power will automatically turn off whenever the ignition turns off.








**Detail Information:**


- Key = powerAutoPowerOff


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;When Ignition is Turned Off&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Timeout






Enter the timeout that will be in effect before device power is automatically turned off as part of automatic power control, when the value ***On*** is selected for **Auto Power Control** is specified and the value ***When Ignition is Turned Off*** is selected for **Auto Power Off**.




**Detail Information:**


- Key = powerAutoPowerOffTimeout


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Auto Power On






Select whether and how device power will be automatically turned on as part of automatic power control when **Auto Power Control** is specified:
- If the value ***Never*** is selected, the device power will NOT automatically turn on when the ignition turns on.
- If the value ***When Ignition is Turned On*** is selected, the device power will automatically turn on whenever the ignition turns on.








**Detail Information:**


- Key = powerAutoPowerOn


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Never&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;When Ignition is Turned On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Heater Action






Select an Action to control device heaters.




You must also specify **Heater Select** to identify the Heater to be affected.
- If the value ***Enable Heater*** is selected, the Heater will be be turned on and off as needed based on the configured ON/OFF thresholds.
- If the value ***Disable Heater*** is selected, the Heater will turned off and will stay off, regardless of the configured ON/OFF thresholds.
- If the value ***Set ON/OFF Thresholds*** is selected, the ON/OFF thresholds that will be used when the Heater is Enabled will be configured. You must also specify all of the following:
- **On Threshold** to set the threshold temperature below which the Heater will automatically be turned on.
- **Off Threshold** to set the threshold temperature above which the Heater will automatically be turned off.




**Detail Information:**


- Key = powerHeaterAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Enable Heater&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disable Heater&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Set ON/OFF Thresholds&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported on Operating System(s): Oreo and Pie.




- Supported on Device(s): VC80X and VC8300.




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Heater Select






Select the Heater to be affected by a specified Heater Action when **Heater Action** is specified:
- If the value ***Serial I/O*** is selected, the Heater that warms the Serial I/O Port of the device will be selected.
- If the value ***USB I/O*** is selected, the Heater that warms the USB I/O Port of the device will be selected.
- If the value ***Battery*** is selected, the Heater that warms the Battery of the device will be selected.
- If the value ***Touch Panel*** is selected, the Heater that warms the Touch Panel of the device will be selected.
- If the value ***Keyboard*** is selected, the Heater that warms the Keyboard of the device will be selected.
- If the value ***Scanner Window*** is selected, the Heater that warms the Scanner Window of the device will be selected.




**Detail Information:**


- Key = powerHeaterSelect


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Serial I/O&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;USB I/O&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Battery&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Touch Panel&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Keyboard&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scanner Window&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr></table>




**Support Information:**


- Supported on Operating System(s): Oreo and Pie.




- Supported on Device(s): VC80X and VC8300.




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Off Threshold






Select the temperature above which a specified Heater should automatically turn OFF, when the value below which the specified Heater should automatically turn on is selected for **Heater Action**.








**Detail Information:**


- Key = powerHeaterActionOffThreshold


- Type = integer




**Support Information:**


- Supported on Operating System(s): Oreo and Pie.




- Supported on Device(s): VC80X and VC8300.




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### On Threshold






Select the temperature below which a specified Heater should automatically turn ON, when the value below which the specified Heater should automatically turn on is selected for **Heater Action**.








**Detail Information:**


- Key = powerHeaterActionOnThreshold


- Type = integer




**Support Information:**


- Supported on Operating System(s): Oreo and Pie.




- Supported on Device(s): VC80X and VC8300.




- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### All Wake-up Sources State






Select whether all Wake-Up Sources will be enabled or not
- If the value ***Off*** is selected, the device will not have all the wake-up sources enabled - If the value ***On*** is selected, the device will have all the wake-up sources enabled.




**Detail Information:**


- Key = powerAllWakeupSourceState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Doze Mode State






Select whether Doze Mode will be globally used on the device.
- If the value ***Off*** is selected, the device will never enter Doze Mode for any applications.




- If the value ***On*** is selected, the device will will enter Doze Mode for various applications based on the normal Android rules for Doze Mode.




**Detail Information:**


- Key = powerDozeModeState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.2.




### Wake-up Source Key Identifier






Select the key identifier of the Wake-Up Source to control
- If the value ***false*** is selected, the device will use Button L1 for display wake-up - If the value ***false*** is selected, the device will use Button L2 for display wake-up - If the value ***false*** is selected, the device will use Button R1 for display wake-up - If the value ***false*** is selected, the device will use Button R2 for display wake-up - If the value ***false*** is selected, the device will use Grip (Gun) Trigger for display wake-up - If the value ***false*** is selected, the device will use Rear Button for display wake-up - If the value ***false*** is selected, the device will use Custom Button for display wake-up




**Detail Information:**


- Key = powerWakeupKeyId


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Button L1&nbsp;</small></i></b></td><td><small>&nbsp;BUTTON_L1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button L2&nbsp;</small></i></b></td><td><small>&nbsp;BUTTON_L2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R1&nbsp;</small></i></b></td><td><small>&nbsp;BUTTON_R1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Button R2&nbsp;</small></i></b></td><td><small>&nbsp;BUTTON_R2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Grip (Gun) Trigger&nbsp;</small></i></b></td><td><small>&nbsp;GUN_TRIGGER&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Rear Button&nbsp;</small></i></b></td><td><small>&nbsp;REAR_BUTTON&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Custom&nbsp;</small></i></b></td><td><small>&nbsp;Custom&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Custom






Enter the Custom name of the key identifier of the Wake-Up Source to control




**Detail Information:**


- Key = powerWakeupKeyIdCustom


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Wake-up Source to Activate the Display State






Select whether to turn on or off the ability of a Wake-up Source to activate the display
- If the value ***Off*** is selected, the device will not have all the wake-up sources enabled - If the value ***On*** is selected, the device will have all the wake-up sources enabled.




**Detail Information:**


- Key = powerWakeupDisplayState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Wake-up Method






Select the Method that will be used to implement and control device Wake-up
- If the value ***Use Hardware Signals for Wake-Up*** is selected, the device will use hardware signals for wake-up - If the value ***Use Software (Mappable Keycodes) for Wake-Up*** is selected, the device will use software (mappable keycodes) for wake-up.




**Detail Information:**


- Key = powerWakeupMethod


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Use Hardware Signals for Wake-Up&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Use Software (Mappable Keycodes) for Wake-Up&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




-----
## RFID Configuration






Use this *Group* to configure the RFID module in a device.




**Detail Information:**


- Key = rfidStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Country of Operation






Select the *Country of Operation* in which the RFID module will be used.




It is critical that the *Country of Operation* be set at least once, since the RFID module has no default *Country of Operation* and will not operate unless/until the *Country of Operation* is explicitly set, to ensure that country-specific regulator requirements are met.




In most cases, the *Country of Operation* will be set once and never changed, unless the device is physically relocated to a different country.




**Detail Information:**


- Key = rfidCountryOfOperation


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;ALBANIA&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ANDORRA&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ARGENTINA&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AUSTRALIA&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BANGLADESH&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BHUTAN&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BOLIVIA&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BOSNIA_HERZENGOVINA&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BRAZIL&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CANADA&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CAMBODIA&nbsp;</small></i></b></td><td><small>&nbsp;11&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHILE&nbsp;</small></i></b></td><td><small>&nbsp;12&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHINA&nbsp;</small></i></b></td><td><small>&nbsp;13&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;COLOMBIA&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DOMINICAN_REPUBLIC&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ECUADOR&nbsp;</small></i></b></td><td><small>&nbsp;16&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EL_SALVADOR&nbsp;</small></i></b></td><td><small>&nbsp;17&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UNITED_KINGDOM&nbsp;</small></i></b></td><td><small>&nbsp;18&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GUATEMALA&nbsp;</small></i></b></td><td><small>&nbsp;19&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GUAM&nbsp;</small></i></b></td><td><small>&nbsp;20&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HONG_KONG&nbsp;</small></i></b></td><td><small>&nbsp;21&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;INDIA&nbsp;</small></i></b></td><td><small>&nbsp;22&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;INDONESIA&nbsp;</small></i></b></td><td><small>&nbsp;23&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;JAPAN_1W_LBT&nbsp;</small></i></b></td><td><small>&nbsp;24&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;JAPAN_250MW&nbsp;</small></i></b></td><td><small>&nbsp;25&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LAOS_EU&nbsp;</small></i></b></td><td><small>&nbsp;26&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LAOS_FCC&nbsp;</small></i></b></td><td><small>&nbsp;27&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MACAU&nbsp;</small></i></b></td><td><small>&nbsp;28&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MACEDONIA&nbsp;</small></i></b></td><td><small>&nbsp;29&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MALAYSIA&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MEXICO&nbsp;</small></i></b></td><td><small>&nbsp;31&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MONACO&nbsp;</small></i></b></td><td><small>&nbsp;32&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MOTENEGRO&nbsp;</small></i></b></td><td><small>&nbsp;33&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NEW_ZEALAND_FCC&nbsp;</small></i></b></td><td><small>&nbsp;34&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NEW_ZEALAND_EU&nbsp;</small></i></b></td><td><small>&nbsp;35&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PAKISTAN&nbsp;</small></i></b></td><td><small>&nbsp;36&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PANAMA&nbsp;</small></i></b></td><td><small>&nbsp;37&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PARAGUAY&nbsp;</small></i></b></td><td><small>&nbsp;38&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PERU&nbsp;</small></i></b></td><td><small>&nbsp;39&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PHILIPPINES&nbsp;</small></i></b></td><td><small>&nbsp;40&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PUERTO_RICO&nbsp;</small></i></b></td><td><small>&nbsp;41&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RUSSIA&nbsp;</small></i></b></td><td><small>&nbsp;42&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SAUDI_ARABIA&nbsp;</small></i></b></td><td><small>&nbsp;43&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SINGAPORE&nbsp;</small></i></b></td><td><small>&nbsp;44&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SOUTH_AFRICA&nbsp;</small></i></b></td><td><small>&nbsp;45&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SOUTH_KOREA&nbsp;</small></i></b></td><td><small>&nbsp;46&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SRI_LANKA&nbsp;</small></i></b></td><td><small>&nbsp;47&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TAIWAN&nbsp;</small></i></b></td><td><small>&nbsp;48&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;THAILAND&nbsp;</small></i></b></td><td><small>&nbsp;49&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TURKEY&nbsp;</small></i></b></td><td><small>&nbsp;50&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UAE&nbsp;</small></i></b></td><td><small>&nbsp;51&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UNITED_STATES&nbsp;</small></i></b></td><td><small>&nbsp;52&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;URUGUAY&nbsp;</small></i></b></td><td><small>&nbsp;53&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VENEZUELA&nbsp;</small></i></b></td><td><small>&nbsp;54&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VIETNAM&nbsp;</small></i></b></td><td><small>&nbsp;55&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VIRGINIA_ISLAND&nbsp;</small></i></b></td><td><small>&nbsp;56&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ETSI 302.208 compliant generic&nbsp;</small></i></b></td><td><small>&nbsp;57&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FCC Part-16 compliant generic&nbsp;</small></i></b></td><td><small>&nbsp;58&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ISRAEL&nbsp;</small></i></b></td><td><small>&nbsp;59&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ALGERIA&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ARMENIA&nbsp;</small></i></b></td><td><small>&nbsp;61&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AUSTRIA&nbsp;</small></i></b></td><td><small>&nbsp;62&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AZERBAIJAN&nbsp;</small></i></b></td><td><small>&nbsp;63&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BAHRAIN&nbsp;</small></i></b></td><td><small>&nbsp;64&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BELGIUM&nbsp;</small></i></b></td><td><small>&nbsp;65&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BULGARIA&nbsp;</small></i></b></td><td><small>&nbsp;66&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;COSTA_RICA&nbsp;</small></i></b></td><td><small>&nbsp;67&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CROATIA&nbsp;</small></i></b></td><td><small>&nbsp;68&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CYPRUS&nbsp;</small></i></b></td><td><small>&nbsp;69&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CZECH_REPUBLIC&nbsp;</small></i></b></td><td><small>&nbsp;70&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DENMARK&nbsp;</small></i></b></td><td><small>&nbsp;71&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EGYPT&nbsp;</small></i></b></td><td><small>&nbsp;72&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ESTONIA&nbsp;</small></i></b></td><td><small>&nbsp;73&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FINLAND&nbsp;</small></i></b></td><td><small>&nbsp;74&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FRANCE&nbsp;</small></i></b></td><td><small>&nbsp;75&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GEORGIA&nbsp;</small></i></b></td><td><small>&nbsp;76&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GERMANY&nbsp;</small></i></b></td><td><small>&nbsp;77&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GREECE&nbsp;</small></i></b></td><td><small>&nbsp;78&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HUNGARY&nbsp;</small></i></b></td><td><small>&nbsp;79&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ICELAND&nbsp;</small></i></b></td><td><small>&nbsp;80&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;IRELAND&nbsp;</small></i></b></td><td><small>&nbsp;81&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ITALY&nbsp;</small></i></b></td><td><small>&nbsp;82&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;JORDAN&nbsp;</small></i></b></td><td><small>&nbsp;83&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KAZAKHSTAN&nbsp;</small></i></b></td><td><small>&nbsp;84&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KUWAIT&nbsp;</small></i></b></td><td><small>&nbsp;85&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LATVIA&nbsp;</small></i></b></td><td><small>&nbsp;86&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LITHUANIA&nbsp;</small></i></b></td><td><small>&nbsp;87&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LUXEMBOURG&nbsp;</small></i></b></td><td><small>&nbsp;88&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MALTA&nbsp;</small></i></b></td><td><small>&nbsp;89&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NETHERLANDS&nbsp;</small></i></b></td><td><small>&nbsp;90&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NORWAY&nbsp;</small></i></b></td><td><small>&nbsp;91&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OMAN&nbsp;</small></i></b></td><td><small>&nbsp;92&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;POLAND&nbsp;</small></i></b></td><td><small>&nbsp;93&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PORTUGAL&nbsp;</small></i></b></td><td><small>&nbsp;94&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;QATAR&nbsp;</small></i></b></td><td><small>&nbsp;95&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ROMANIA&nbsp;</small></i></b></td><td><small>&nbsp;96&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SERBIA&nbsp;</small></i></b></td><td><small>&nbsp;97&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SLOVAKIA&nbsp;</small></i></b></td><td><small>&nbsp;98&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SLOVENIA&nbsp;</small></i></b></td><td><small>&nbsp;99&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SPAIN&nbsp;</small></i></b></td><td><small>&nbsp;100&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SWEDEN&nbsp;</small></i></b></td><td><small>&nbsp;101&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SWITZERLAND&nbsp;</small></i></b></td><td><small>&nbsp;102&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TUNISIA&nbsp;</small></i></b></td><td><small>&nbsp;103&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UKRAINE&nbsp;</small></i></b></td><td><small>&nbsp;104&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Channel Mask






Enter the *Channel Mask* that determines which of the *Channels* that are allowed, based on the currently selected *Country of Operation* will be used by the RFID module.
- If no *Channel Mask* is specified, the RFID module will be free to use any or all *Channels* that are available based on the currently selected *Country of Operation*.
- If a *Channel Mask* is specified, the specified value must consist of one or more *Channel Numbers*, separated by commas if more than one is specified, which identify the *Channels* that can be used. The RFID module will limit itself to just the *Channels* that are allowed for the currently selected *Country of Operation* AND that are in the set of *Channels* specified.








Consult the product documentation for the device being used to obtain the set of allowable *Channel Numbers*.




**Detail Information:**


- Key = rfidCountryOfOperationChannelMask


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Channel Hopping






Select whether *Channel Hopping* will be performed among the *Channels* that are used by the RFID module.




**Detail Information:**


- Key = rfidCountryOfOperationChannelHopping


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Action






Select an Action to alter the behavior or configuration of the RFID module.
- If the value ***Update Firmware*** is selected, the firmware of the RFID module will be updated and you must also specify **Update Firmware File** to provide the path and file name of the file, which must exist in the device file system, containing the firmware update to be applied to the RFID module.
- If the value ***Export Settings*** is selected, the current configuration of the RFID module will be exported and stored in a file in the device file system. This file could then be extracted from the device and used for troubleshooting potential configuration issues related to the RFID module.
- If the value ***Reset Radio*** is selected, the radio of the RFID module will be reset, without changing its settings. This could be used to recover from an error or other failure of the RFID module.
- If the value ***Reset Radio to Factory Defaults*** is selected, the configuration of the RFID module will be returned to its default out-of-box state and the radio will be reset. This could be used to recover from a serious configuration error that prevents the RFID module from functioning appropriately.
- If the value ***Update Firmware and Reset Radio to Factory Defaults*** is selected, the firmware of the RFID will be updated,l the configuration of the RFID module will be returned to its default out-of-box state, and the radio will be reset. This could necessary when applying a major new firmware update, that add lots of new configuration settings, to ensure that the RFID module is configured in a known and compatible state.




**Detail Information:**


- Key = rfidAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Update Firmware&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Export Settings&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset Radio&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset Radio to Factory Defaults&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Update Firmware and Reset Radio to Factory Defaults&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Update Firmware File






Enter the path and file name of the file containing the firmware update to be applied when the value ***Update Firmware*** or the value ***Update Firmware and Reset Radio to Factory Defaults*** is selected for **Action**.




**Detail Information:**


- Key = rfidActionUpdateFirmwareFile


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Transmit Power Level






Enter the *RFID Power Level* that should be used by the RFID module.




The *RFID Power Level* should be specified in tenths of dBm in the range of ***0*** to ***300***, inclusive.


For example, to specify an *RFID Power Level* of ***29.5 dBm***, specify a value of ***295***.




**Detail Information:**


- Key = rfidTransmitPowerLevel


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Query Select






Select which RFID tags should be operated upon by the RFID module during a *Query Operation*, based on the state of the SL flag.
- If the value ***Query applies to all tags*** is selected, when the RFID module performs a *Query Operation*, it will consider all RFID tags that are currently visible to the RFID module.
- If the value ***Query applies to tags with SL de-asserted*** is selected, when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that have SL flag de-asserted (i.e tags for which the SL flag has NOT been set using the Select command).
- If the value ***Query applies to tags with SL asserted*** is selected, when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that have SL flag asserted (i.e tags for which the SL flag HAS been set using the Select command).




**Detail Information:**


- Key = rfidQuerySelect


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Query applies to all tags&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Query applies to tags with SL de-asserted&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Query applies to tags with SL asserted&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Query Session






Enter which *Session* should be used by the RFID module to access RFID tags during a *Query Operation*.




Allowable values are ***SessionS0***, ***SessionS1***, ***SessionS2***, and ***SessionS3***.




*Sessions* provide options for how to count tags. For more information on the use of *Sessions*, consult the device product documentation.




**Detail Information:**


- Key = rfidQuerySession


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;SessionS0&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SessionS1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SessionS2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SessionS3&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Query Target






Select how the A and B flags of RFID tags should be handled by the RFID module during a *Query Operation*.
- If the value ***Inventory Target Flag A*** is selected, when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in State A.
- If the value ***Inventory Target Flag B*** is selected, when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in State B.
- If the value ***AB Flip*** is selected, when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in either State A or State B and will Flip the State from A to B or B to A for the session.




**Detail Information:**


- Key = rfidQueryTarget


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Inventory Target Flag A&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Inventory Target Flag B&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AB Flip&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




-----
## Remote Scanner Management






Use this *Group* to manage a *Remote Scanner* that is connected to a device.




**Detail Information:**


- Key = remotescannerStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Action






Select an Action to control a *Remote Scanner* that isconnected to a device.
- If the value ***Apply Configuration Package(RS6000 only)*** is selected, a configuration file will be used to apply new configuration to a *Remote Scanner*. You must also specify **Config Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be configured. You must also specify **Config File** to provide the path and file name of the configuration file to be applied.
- If the value ***Update Scanner Firmware*** is selected, a firmware file will be used to update the firmware of a *Remote Scanner*. You must also specify **Update Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be updated. You must also specify **Update File** to provide the path and file name of the firmware file to be applied.
- If the value ***Reset Scanner(RS6000 only)*** is selected, a *Remote Scanner* will be reset, allowing errors to be cleared and proper operation of a*Remote Scanner* to be restored. You must also specify **Reset Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be reset.
- If the value ***Page Scanner(RS6000 only)*** is selected, a *Remote Scanner* will be paged, allowing a misplaced *Remote Scanner* to be more easily located. You must also specify **Page Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be paged.
- If the value ***Disconnect Scanner(RS6000 only)*** is selected, a *Remote Scanner* will be disconnected, terminating the connection between the device and the *Remote Scanner* and preventing its subsequent use. You must also specify **Disconnect Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be disconnected.
- If the value ***Unpair Scanner(RS6000 only)*** is selected, a *Remote Scanner* will be unpaired, terminating the pairing between the device and the *Remote Scanner* and preventing its re-connection without first repairing. You must also specify **Unpair Serial Number** to provide the *Serial Number* that identifies the *Remote Scanner* to be unpaired.




**Detail Information:**


- Key = remotescannerAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Apply Configuration Package(RS6000 only)&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Update Scanner Firmware&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Reset Scanner(RS6000 only)&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Page Scanner(RS6000 only)&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disconnect Scanner(RS6000 only)&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unpair Scanner(RS6000 only)&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### Config Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* to which configuration should be applied when the value ***Apply Configuration Package(RS6000 only)*** is selected for **Action**. You must also specify **Config File** to provide the path and file name of the configuration file to be used.




**Detail Information:**


- Key = remotescannerActionConfigSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Config File






Enter the path and file name of a configuration file, which must exist at the specified location in the device file system, from which configuration should be applied to the specified *Remote Scanner* when the value ***Apply Configuration Package(RS6000 only)*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionConfigFile


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Update Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* for which a firmware update should be performed when the value ***Update Scanner Firmware*** is selected for **Action**. You must also specify **Update File** to provide the path and file name of the firmware file to be used.




**Detail Information:**


- Key = remotescannerActionUpdateSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Update File






Enter the path and file name of a firmware file, which must exist at the specified location in the device file system, from which firmware update should be performed to the specified *Remote Scanner* when the value ***Update Scanner Firmware*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionUpdateFile


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Reset Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* to be reset when the value ***Reset Scanner(RS6000 only)*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionResetSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Page Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* to be paged when the value ***Page Scanner(RS6000 only)*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionPageSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Disconnect Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* to be disconnected when the value ***Disconnect Scanner(RS6000 only)*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionDisconnectSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Unpair Serial Number






Enter the *Serial Number* that identifies a *Remote Scanner* to be unpaired when the value ***Unpair Scanner(RS6000 only)*** is selected for **Action**.




**Detail Information:**


- Key = remotescannerActionUnpairSerialNumber


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




-----
## Security Configuration






Use this *Group* to configure security-related settings on a device.




**Detail Information:**


- Key = securityStep


- Type = bundle




### Action






Select an Action to adjust various security features on a device.
- If the value ***Add Key*** is selected, you must also specify **Add Key Name** to provide the name of the key to be added and you must also specify **Add Key Value** to provide the value of the key to be added.
- If the value ***Remove Key*** is selected, you must also specify **Remove Key Name** to provide the name of the key to be removed.
- If the value ***Remove All Keys*** is selected, you do not need to specify any additional information.
- If the value ***Encrypt SD Card*** is selected, you must also specify **Encrypt SD Card Key Name** to provide the name of the key to be used to encrypt the SD Card.
- If the value ***Wipe SD Card*** is selected, you do not need to specify any additional information.




**Detail Information:**


- Key = securityAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Add Key&nbsp;</small></i></b></td><td><small>&nbsp;AddKey&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Remove Key&nbsp;</small></i></b></td><td><small>&nbsp;RemoveKey&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Remove All Keys&nbsp;</small></i></b></td><td><small>&nbsp;RemoveAllKeys&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Encrypt SD Card&nbsp;</small></i></b></td><td><small>&nbsp;EncryptSdCard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wipe SD Card&nbsp;</small></i></b></td><td><small>&nbsp;WipeSdCard&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Add Key Name






Enter the name of a key to be added when the Action value ***Add Key*** is selected for **Action**.




You must also specify **Add Key Value** to provide the value to be added for the specified key name.








**Detail Information:**


- Key = securityActionAddKeyName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Add Key Value






Enter the value of a key to be added when the Action value ***Add Key*** is selected for **Action**.








You must also specify **Add Key Name** to provide the key name for which this value should be added.








A key value must be a string value containing exactly 64 hexadecimal characters ("0-9" and/or "A-F" characters) that encode a 256 bit binary value for an AES encryption key.








The key value can be generated in any manner desired as long as it is a 256 bit binary value and is represented as 64 hexadecimal characters, although in most cases, best practice would be to randomly generate keys to maximize their effectiveness in protecting data.




**Detail Information:**


- Key = securityActionAddKeyValue


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Remove Key Name






Enter the name of a key to be removed when the Action value ***Remove Key*** is selected for **Action**.








**Detail Information:**


- Key = securityActionRemoveKeyName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Encrypt SD Card Key Name






Enter the name of a key to be used to encrypt the SD Card when the Action value ***Encrypt SD Card*** is selected for **Action**.




**Detail Information:**


- Key = securityEncryptSDCardKeyName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Instant Screen Lock on Power Key






Select what happens when the Power Key on the device is used to turn the device off, especially whether the device will be locked, requiring it to be unlocked by entering a PIN or password, if one is specified.
- If the value ***Off*** is selected, turning the device off using the Power Key will be handled the same as when the device times out and turns itself off automatically. In such a case, if device remains off for longer than value set via **Screen Lock Timeout**, when it is turned back on, the device will be locked, requiring whatever unlock action is set via **Screen Lock Type**.
- If the value ***On*** is selected, turning the device off using the Power Key will be handled differently than when the device times out and turns itself off automatically, specifically the device will become locked immediately when the device is turned off using the Power Key. In such a case, no matter how long the device remains off, when it is turned back on, the device will be locked, requiring whatever unlock action is set via **Screen Lock Type**.




**Detail Information:**


- Key = securityPowerKeyInstantLock


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;Off&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;On&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Screen Lock Type






Select the type of lock that is used to protect the device from use by unauthorized persons.
- If the value ***None*** is selected, no lock will be applied and the device can be used by anyone.
- If the value ***Swipe*** is selected, unlocking will require only a simple swipe and the device can be used by anyone.
- If the value ***PIN*** is selected, unlocking will require entry of a PIN (personal identification number) and the device can only be unlocked by someone knowing the correct PIN value.
- If the value ***Password*** is selected, unlocking will require entry of a password and the device can only be unlocked by someone knowing the correct password value.
- If the value ***Pattern*** is selected, unlocking will require drawing a pattern on the screen using the touch panel and the device can only be unlocked by someone knowing the correct pattern.




**Detail Information:**


- Key = securityScreenLockType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;None&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Swipe&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PIN&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Password&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Pattern&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.0.




### Screen Lock Timeout






Select what happens when a device turns off as a result of a timeout.
- If the device stays off for at least the time specified, the device will be locked and an unlock will be required when the device is turned back on, if any lock was configured using **Screen Lock Type**.
- If the device stays off for less than the time specified, the device will NOT be locked and hence no unlock will be required when the device is turned back on, even if a lock was configured using **Screen Lock Type**.




**Detail Information:**


- Key = securityScreenLockTimeout


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Immediately after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5 seconds after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;15 seconds after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 seconds after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;1 minute after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2 minutes after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;120&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5 minutes after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;300&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;10 minutes after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;600&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;30 minutes after Display Timeout&nbsp;</small></i></b></td><td><small>&nbsp;1800&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.3.




-----
## Service Access Configuration






Use this *Group* to configure which *Zebra Value-Add Services* are allowed to be used on a device and, optionally, by which applications. *Zebra Value-Add Services* may be of various types, and may include:




- *Privilege Escalation APIs*, typically used by special purpose applications, such as Remote Control Clients.




- *Configuration Service Providers* (CSPs), typically used by special purpose applications, such as *Enterprise Mobility Manager* (EMM) Agents.




**Detail Information:**


- Key = serviceAccessStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.3.




### Service Binding Action






Select an Action to allow or disallow *Bindings* to *Zebra Value-Add Service*s, such as those that expose *Privilege Escalation APIs*, typically used by special purpose applications, such as Remote Control Clients.




To utilize *Zebra Value-Add Service*s that expose APIs, an application must successfully create a *Binding* to the desired Service, after which it can make API calls via that *Binding*. Since the APIs provided by such Services enable applications that call them to perform sensitive operations, they should only be used by applications that you explicitly trust to use them safely.




By default, all *Zebra Value-Add Service*s that expose APIs are configured to reject all *Bindings*. This ensures that the APIs exposed by such a Service cannot be used at all, unless you explicitly choose to allow use of specific Services.




Note that allowing *Bindings* to a *Zebra Value-Add Service* enables ALL applications to successfully initiate a *Binding* to that Service but does NOT enable ANY application to actually call the APIs exposed by that Service. To allow selected applications to call APIs on a Service for which *Bindings* are allowed, use **Service Caller Action**.




- If the value ***Allow*** is selected, *Bindings* to a specifically identified Service will be enabled, potentially allowing the APIs of that Service to be called. You must also specify **Allow Service Identifier** to identify the *Zebra Value-Add Service* to which *Bindings* should be allowed.




- If the value ***Disallow*** is selected, *Bindings* to a specifically identified Service will be disabled, preventing the APIs of that Service from being called. This is the default state for all *Zebra Value-Add Service*s that provide APIs. You must also specify **Disallow Service Identifier** to identify the *Zebra Value-Add Service* to which *Bindings* should be disallowed.




Note that every *Zebra Value-Add Service* that exposes APIs will be identified by a unique *Service Identifier*, that identifies the Service when controlling access to that Service. Consult the documentation for a given *Zebra Value-Add Service* to determine its *Service Identifier* that you will need to identify that Service when controlling access to it.




**Detail Information:**


- Key = serviceBindingAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Allow Service Identifier






Enter the *Service Identifier* of a *Zebra Value-Add Service* when the value ***Allow*** is selected for **Service Binding Action**, to identify the specific *Zebra Value-Add Service* to which *Bindings* should be allowed.




**Detail Information:**


- Key = serviceBindingActionAllowServiceIdentifer


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Disallow Service Identifier






Enter the *Service Identifier* of a *Zebra Value-Add Service* when the value ***Disallow*** is selected for **Service Binding Action**, to identify the specific *Zebra Value-Add Service* to which *Bindings* should be disallowed.




**Detail Information:**


- Key = serviceBindingActionDisallowServiceIdentifer


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Service Caller Action






Select an Action to allow or disallow a specific application to call APIs exposed by a *Zebra Value-Add Service*, via a successfully established *Binding*.




Note that the default state for all *Zebra Value-Add Services* is for ALL applications to be disallowed from calling the APIs exposed by that Service. This ensures that no applications can call the potentially sensitive APIs exposed by a Service unless you explicitly choose to allow it.




Note also that since a *Binding* to a Service is required to call any APIs exposed by that Service, *Bindings* to a *Zebra Value-Add Service* MUST be allowed in addition to allowing specific applications to call the Service. *Bindings* to a *Zebra Value-Add Service* can be allowed via **Service Binding Action**.




- If the value ***Allow*** is selected, a specifically identified application will be allowed to call APIs to a specifically identified Service. You must also specify **Allow Service Identifier** to identify the *Zebra Value-Add Service* to which API calls should be allowed and you must also specify **Allow Caller Package** and **Allow Caller Signature** to identify the application to be allowed to make API calls to the identified Service.




- If the value ***Disallow*** is selected, a specifically identified application will be disallowed from calling APIs to a specifically identified Service. This is the default state for every *Zebra Value-Add Service* and for every potential calling application. You must also specify **Disallow Service Identifier** to identify the *Zebra Value-Add Service* to which API calls should be disallowed and you must also specify **Disallow Caller Package** and **Disallow Caller Signature** to identify the application to be disallowed from making API calls to the identified Service.




**Detail Information:**


- Key = serviceCallerAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Allow Service Identifier






Enter the *Service Identifier* of a *Zebra Value-Add Service* when the value ***Allow*** is selected for **Service Caller Action**, to identify the specific *Zebra Value-Add Service* to which API calls should be allowed.




**Detail Information:**


- Key = serviceCallerActionAllowServiceIdentifer


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Allow Caller Package






Enter the *Android Package Name* of an application that should be allowed to call APIs exposed by a *Zebra Value-Add Service* when the value ***Allow*** is selected for **Service Caller Action**, to identify the specific application that should be allowed to make calls to the Service identified by a specified *Service Identifier*.




**Detail Information:**


- Key = serviceCallerActionAllowCallerPackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Allow Caller Signature






Enter the *Android Package Signature* of an application that should be allowed to call APIs exposed by a *Zebra Value-Add Service* when the value ***Allow*** is selected for **Service Caller Action**, to provide the *Android Package Signature* of a specified application that should be allowed to make calls to the Service identified by a specified *Service Identifier*.




Note that the use of a *Android Package Signature* is MANDATORY and ensures that the application being allowed to make API calls to the specified Service is genuine and has not been spoofed. This prevents anyone from creating an impostor application with the same *Android Package Name*, but signed differently and then trying to make calls to the APIs of the Service as if they were the genuine application.




**Detail Information:**


- Key = serviceCallerActionAllowCallerSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Disallow Service Identifier






Enter the *Service Identifier* of a *Zebra Value-Add Service* when the value ***Disallow*** is selected for **Service Caller Action**, to identify the specific *Zebra Value-Add Service* to which API calls should be disallowed.




**Detail Information:**


- Key = serviceCallerActionDisallowServiceIdentifer


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Disallow Caller Package






Enter the *Android Package Name* of an application that should be disallowed from calling APIs exposed by a *Zebra Value-Add Service* when the value ***Disallow*** is selected for **Service Caller Action**, to identify the specific application that should be disallowed from making calls to the Service identified by a specified *Service Identifier*.




**Detail Information:**


- Key = serviceCallerActionDisallowCallerPackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Disallow Caller Signature






Enter the *Android Package Signature* of an application that should be disallowed from calling APIs exposed by a *Zebra Value-Add Service* when the value ***Disallow*** is selected for **Service Caller Action**, to provide the *Android Package Signature* of a specified application that should be disallowed from making calls to the Service identified by a specified *Service Identifier*.




**Detail Information:**


- Key = serviceCallerActionDisallowCallerSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Use CSP Action






Select an Action to Declare a CSP to be *Protected* or *Unprotected* and/or to make an application *Approved* or *Unapproved* to use a CSP that has been declared as *Protected*.




Note that the default state for all CSPs is *Unprotected*. This means that ALL CSPs can used by ALL applications. This ensures backward compatibility wherein any applications designed to use any CSPs will continue to be allowed to do so unless you specifically choose to prevent it.




To limit access to a CSP, the CSP must first be declared to be *Protected*. Once a CSP has been declared to be *Protected*, no applications will be allowed to use that CSP until they have been explicitly been *Approved* to use that CSP.




- If the value ***Protect*** is selected, a specifically identified CSP will be declared to be *Protected* and hence will be limited to use by specifically *Approved* applications. You must also specify one of **Protect CSP Name** or **Custom** to identify the CSP to be declared *Protected*. You may also specify **Protect CSP Auto Approve** to automatically make OemConfig *Approved* to use that CSP.




- If the value ***Unprotect*** is selected, a specifically identified CSP will be declared to be *Unprotected* and hence will no longer be limited to use by specifically *Approved* applications. You must also specify one of **Unprotect CSP Name** or **Custom** to identify the CSP to be declared *Unprotected*. You may also specify **Unprotect CSP Auto Unapprove** to automatically make OemConfig *Unapproved* from using that CSP.




- If the value ***Approve*** is selected, a specifically identified application will be *Approved* to use a specifically identified *Protected* CSP. You must also specify one of **Approve CSP Name** or **Custom** to identify the CSP for which access is to be *Approved*. You must also specify **Approve Caller Package** and **Approve Caller Signature** to identify the specific application that will be *Approved* to use the specified CSP.




- If the value ***Unapprove*** is selected, a specifically identified application will *Unapproved* from using a specifically identified *Protected* CSP. You must also specify one of **Unapprove CSP Name** or **Custom** to identify the CSP for which access is to be *Unapproved*. You must also specify one of **Unapprove Caller Package** and **Unapprove Caller Signature** to identify the specific application that will be *Unapproved* from using the specified CSP.




**Detail Information:**


- Key = serviceCspAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Protect&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unprotect&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Approve&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unapprove&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Protect CSP Auto Approve






Select whether OemConfig should automatically be *Approved* to use the CSP being Declared as *Protected* when the value ***Protect*** is selected for **Use CSP Action** to Declare a CSP as *Protected*. This is a convenience to eliminate the need to separately make OemConfig *Approved* to allow it to use a CSP that has been Declared as *Protected*.
- If the value ***True*** is selected, the effect will be the same as if a **Use CSP Action** were with the value ***Approve*** to make OemConfig *Approved* to use that CSP. In most cases, it makes sense for OemConfig to be *Approved* to use any CSP that it used to declare to be *Protected*.
- If the value ***False*** is selected, the effect will be the same as if **Use CSP Action** was not used with the value ***Approve*** to make OemConfig *Approved* to use that CSP. This should be used with caution since if OemConfig is *Unapproved* from using any CSP that it has been used to declare to be *Protected*, any subsequent use of OemConfig that relies on that CSP will fail.




**Detail Information:**


- Key = serviceCspActionProtectAutoApprove


- Type = boolean




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Protect CSP Name






Select a standard CSP that will be declared as *Protected* when the value ***Protect*** is selected for **Use CSP Action**.




All standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. **Custom** could alternately be used in cases where typing in the CSP name is preferable.




**Detail Information:**


- Key = serviceCspActionProtectCspName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AccessMgr&nbsp;</small></i></b></td><td><small>&nbsp;AccessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AnalyticsMgr&nbsp;</small></i></b></td><td><small>&nbsp;AnalyticsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppGalleryMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppGalleryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioVolUIMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioVolUIMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AutoTriggerMgr&nbsp;</small></i></b></td><td><small>&nbsp;AutoTriggerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Batch&nbsp;</small></i></b></td><td><small>&nbsp;Batch&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BatteryMgr&nbsp;</small></i></b></td><td><small>&nbsp;BatteryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BluetoothMgr&nbsp;</small></i></b></td><td><small>&nbsp;BluetoothMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BrowserMgr&nbsp;</small></i></b></td><td><small>&nbsp;BrowserMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BugReportMgr&nbsp;</small></i></b></td><td><small>&nbsp;BugReportMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CameraMgr&nbsp;</small></i></b></td><td><small>&nbsp;CameraMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CellularMgr&nbsp;</small></i></b></td><td><small>&nbsp;CellularMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CertMgr&nbsp;</small></i></b></td><td><small>&nbsp;CertMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clock&nbsp;</small></i></b></td><td><small>&nbsp;Clock&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ComponentMgr&nbsp;</small></i></b></td><td><small>&nbsp;ComponentMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ConditionMgr&nbsp;</small></i></b></td><td><small>&nbsp;ConditionMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DevAdmin&nbsp;</small></i></b></td><td><small>&nbsp;DevAdmin&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DeviceCentralMgr&nbsp;</small></i></b></td><td><small>&nbsp;DeviceCentralMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DisplayMgr&nbsp;</small></i></b></td><td><small>&nbsp;DisplayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EncryptMgr&nbsp;</small></i></b></td><td><small>&nbsp;EncryptMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnterpriseKeyboard&nbsp;</small></i></b></td><td><small>&nbsp;EnterpriseKeyboard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EthernetMgr&nbsp;</small></i></b></td><td><small>&nbsp;EthernetMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FileMgr&nbsp;</small></i></b></td><td><small>&nbsp;FileMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GmsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GmsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GooglePlayMgr&nbsp;</small></i></b></td><td><small>&nbsp;GooglePlayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GprsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GprsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HostsMgr&nbsp;</small></i></b></td><td><small>&nbsp;HostsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Intent&nbsp;</small></i></b></td><td><small>&nbsp;Intent&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KeyMappingMgr&nbsp;</small></i></b></td><td><small>&nbsp;KeyMappingMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LicenseMgr&nbsp;</small></i></b></td><td><small>&nbsp;LicenseMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LifeGuardOTAManager&nbsp;</small></i></b></td><td><small>&nbsp;LifeGuardOTAManager&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NfcMgr&nbsp;</small></i></b></td><td><small>&nbsp;NfcMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersistMgr&nbsp;</small></i></b></td><td><small>&nbsp;PersistMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersonalDictionary&nbsp;</small></i></b></td><td><small>&nbsp;PersonalDictionary&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerKeyMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerKeyMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoteScannerMgr&nbsp;</small></i></b></td><td><small>&nbsp;RemoteScannerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RfidMgr&nbsp;</small></i></b></td><td><small>&nbsp;RfidMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ScanModeMgr&nbsp;</small></i></b></td><td><small>&nbsp;ScanModeMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SdCardMgr&nbsp;</small></i></b></td><td><small>&nbsp;SdCardMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SettingsMgr&nbsp;</small></i></b></td><td><small>&nbsp;SettingsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stats&nbsp;</small></i></b></td><td><small>&nbsp;Stats&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;StatusMgr&nbsp;</small></i></b></td><td><small>&nbsp;StatusMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ThreatMgr&nbsp;</small></i></b></td><td><small>&nbsp;ThreatMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TouchMgr&nbsp;</small></i></b></td><td><small>&nbsp;TouchMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UiMgr&nbsp;</small></i></b></td><td><small>&nbsp;UiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UsbMgr&nbsp;</small></i></b></td><td><small>&nbsp;UsbMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wi-Fi&nbsp;</small></i></b></td><td><small>&nbsp;Wi-Fi&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WirelessMgr&nbsp;</small></i></b></td><td><small>&nbsp;WirelessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></i></b></td><td><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;XmlMgr&nbsp;</small></i></b></td><td><small>&nbsp;XmlMgr&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Custom






Enter the name of a custom CSP that will be declared as *Protected* when the value ***Protect*** is selected for **Use CSP Action**.




Use when the CSP to be declared as *Protected* is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. Standard CSP names COULD be entered, but it would generally be preferable to use **Protect CSP Name** instead, since picking a name from a list is less error-prone than typing the name.




**Detail Information:**


- Key = serviceCspActionProtectCspNameCustom


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Unprotect CSP Auto Unapprove






Select whether OemConfig should automatically be *Unapproved* from using the CSP being Declared as *Unprotected* when the value ***Unprotect*** is selected for **Use CSP Action** to declare a CSP as *Unprotected*.




This is a convenience to eliminate the need to separately make OemConfig *Unapproved* to remove it from the list of applications that are *Approved* to use a CSP that it has been used to declare as *Unprotected*. Strictly speaking, this is not mandatory, since once a CSP has been declared as *Unprotected* the list of applications that are *Approved* to use that CSP is no longer relevant. But since the list of applications that are *Approved* to use a CSP is preserved across declaring a CSP as *Unprotected* and then later declaring that CSP as *Protected*, it is good practice to clean-up the list to avoid unexpected behavior in the future.




- If the value ***True*** is selected, the effect will be the same as if **Use CSP Action** were used with the value ***Unapprove*** to make OemConfig *Unapproved* to use that CSP. This will NOT result in OemConfig being unable to use the CSP since declaring the CSP as *Unprotected* explicitly allows ALL applications to use that CSP.




- If the value ***False*** is selected, the effect will be the same as if **Use CSP Action** were not used with the value ***Unapprove*** to make OemConfig *Unapproved* to use that CSP. This would effectively clean-up the list and could avoid unexpected behavior in the future, should the CSP later be *Protected* again.




**Detail Information:**


- Key = serviceCspActionUnprotectAutoUnapprove


- Type = boolean




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Unprotect CSP Name






Select a standard CSP that will be declared as *Unprotected* when the value ***Unprotect*** is selected for **Use CSP Action**.




All standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. **Custom** could alternately be used in cases where typing in the CSP name is preferable.




**Detail Information:**


- Key = serviceCspActionUnprotectCspName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AccessMgr&nbsp;</small></i></b></td><td><small>&nbsp;AccessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AnalyticsMgr&nbsp;</small></i></b></td><td><small>&nbsp;AnalyticsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppGalleryMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppGalleryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioVolUIMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioVolUIMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AutoTriggerMgr&nbsp;</small></i></b></td><td><small>&nbsp;AutoTriggerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Batch&nbsp;</small></i></b></td><td><small>&nbsp;Batch&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BatteryMgr&nbsp;</small></i></b></td><td><small>&nbsp;BatteryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BluetoothMgr&nbsp;</small></i></b></td><td><small>&nbsp;BluetoothMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BrowserMgr&nbsp;</small></i></b></td><td><small>&nbsp;BrowserMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BugReportMgr&nbsp;</small></i></b></td><td><small>&nbsp;BugReportMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CameraMgr&nbsp;</small></i></b></td><td><small>&nbsp;CameraMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CellularMgr&nbsp;</small></i></b></td><td><small>&nbsp;CellularMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CertMgr&nbsp;</small></i></b></td><td><small>&nbsp;CertMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clock&nbsp;</small></i></b></td><td><small>&nbsp;Clock&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ComponentMgr&nbsp;</small></i></b></td><td><small>&nbsp;ComponentMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ConditionMgr&nbsp;</small></i></b></td><td><small>&nbsp;ConditionMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DevAdmin&nbsp;</small></i></b></td><td><small>&nbsp;DevAdmin&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DeviceCentralMgr&nbsp;</small></i></b></td><td><small>&nbsp;DeviceCentralMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DisplayMgr&nbsp;</small></i></b></td><td><small>&nbsp;DisplayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EncryptMgr&nbsp;</small></i></b></td><td><small>&nbsp;EncryptMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnterpriseKeyboard&nbsp;</small></i></b></td><td><small>&nbsp;EnterpriseKeyboard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EthernetMgr&nbsp;</small></i></b></td><td><small>&nbsp;EthernetMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FileMgr&nbsp;</small></i></b></td><td><small>&nbsp;FileMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GmsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GmsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GooglePlayMgr&nbsp;</small></i></b></td><td><small>&nbsp;GooglePlayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GprsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GprsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HostsMgr&nbsp;</small></i></b></td><td><small>&nbsp;HostsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Intent&nbsp;</small></i></b></td><td><small>&nbsp;Intent&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KeyMappingMgr&nbsp;</small></i></b></td><td><small>&nbsp;KeyMappingMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LicenseMgr&nbsp;</small></i></b></td><td><small>&nbsp;LicenseMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LifeGuardOTAManager&nbsp;</small></i></b></td><td><small>&nbsp;LifeGuardOTAManager&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NfcMgr&nbsp;</small></i></b></td><td><small>&nbsp;NfcMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersistMgr&nbsp;</small></i></b></td><td><small>&nbsp;PersistMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersonalDictionary&nbsp;</small></i></b></td><td><small>&nbsp;PersonalDictionary&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerKeyMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerKeyMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoteScannerMgr&nbsp;</small></i></b></td><td><small>&nbsp;RemoteScannerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RfidMgr&nbsp;</small></i></b></td><td><small>&nbsp;RfidMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ScanModeMgr&nbsp;</small></i></b></td><td><small>&nbsp;ScanModeMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SdCardMgr&nbsp;</small></i></b></td><td><small>&nbsp;SdCardMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SettingsMgr&nbsp;</small></i></b></td><td><small>&nbsp;SettingsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stats&nbsp;</small></i></b></td><td><small>&nbsp;Stats&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;StatusMgr&nbsp;</small></i></b></td><td><small>&nbsp;StatusMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ThreatMgr&nbsp;</small></i></b></td><td><small>&nbsp;ThreatMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TouchMgr&nbsp;</small></i></b></td><td><small>&nbsp;TouchMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UiMgr&nbsp;</small></i></b></td><td><small>&nbsp;UiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UsbMgr&nbsp;</small></i></b></td><td><small>&nbsp;UsbMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wi-Fi&nbsp;</small></i></b></td><td><small>&nbsp;Wi-Fi&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WirelessMgr&nbsp;</small></i></b></td><td><small>&nbsp;WirelessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></i></b></td><td><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;XmlMgr&nbsp;</small></i></b></td><td><small>&nbsp;XmlMgr&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Custom






Enter the name of a custom CSP that will be declared as *Unprotected* when the value ***Unprotect*** is selected for **Use CSP Action**.




Use when the CSP to be declared as *Unprotected* is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. Standard CSP names COULD be entered, but it would generally be preferable to use **Unprotect CSP Name** instead, since picking a name from a list is less error-prone than typing the name.




**Detail Information:**


- Key = serviceCspActionUnprotectCspNameCustom


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Approve CSP Name






Select a standard CSP that will be *Approved* for an application when the value ***Approve*** is selected for **Use CSP Action**.




All standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. **Custom** could alternately be used in cases where typing in the CSP name is preferable.




**Detail Information:**


- Key = serviceCspActionApproveCspName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AccessMgr&nbsp;</small></i></b></td><td><small>&nbsp;AccessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AnalyticsMgr&nbsp;</small></i></b></td><td><small>&nbsp;AnalyticsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppGalleryMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppGalleryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioVolUIMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioVolUIMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AutoTriggerMgr&nbsp;</small></i></b></td><td><small>&nbsp;AutoTriggerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Batch&nbsp;</small></i></b></td><td><small>&nbsp;Batch&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BatteryMgr&nbsp;</small></i></b></td><td><small>&nbsp;BatteryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BluetoothMgr&nbsp;</small></i></b></td><td><small>&nbsp;BluetoothMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BrowserMgr&nbsp;</small></i></b></td><td><small>&nbsp;BrowserMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BugReportMgr&nbsp;</small></i></b></td><td><small>&nbsp;BugReportMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CameraMgr&nbsp;</small></i></b></td><td><small>&nbsp;CameraMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CellularMgr&nbsp;</small></i></b></td><td><small>&nbsp;CellularMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CertMgr&nbsp;</small></i></b></td><td><small>&nbsp;CertMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clock&nbsp;</small></i></b></td><td><small>&nbsp;Clock&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ComponentMgr&nbsp;</small></i></b></td><td><small>&nbsp;ComponentMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ConditionMgr&nbsp;</small></i></b></td><td><small>&nbsp;ConditionMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DevAdmin&nbsp;</small></i></b></td><td><small>&nbsp;DevAdmin&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DeviceCentralMgr&nbsp;</small></i></b></td><td><small>&nbsp;DeviceCentralMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DisplayMgr&nbsp;</small></i></b></td><td><small>&nbsp;DisplayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EncryptMgr&nbsp;</small></i></b></td><td><small>&nbsp;EncryptMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnterpriseKeyboard&nbsp;</small></i></b></td><td><small>&nbsp;EnterpriseKeyboard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EthernetMgr&nbsp;</small></i></b></td><td><small>&nbsp;EthernetMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FileMgr&nbsp;</small></i></b></td><td><small>&nbsp;FileMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GmsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GmsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GooglePlayMgr&nbsp;</small></i></b></td><td><small>&nbsp;GooglePlayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GprsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GprsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HostsMgr&nbsp;</small></i></b></td><td><small>&nbsp;HostsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Intent&nbsp;</small></i></b></td><td><small>&nbsp;Intent&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KeyMappingMgr&nbsp;</small></i></b></td><td><small>&nbsp;KeyMappingMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LicenseMgr&nbsp;</small></i></b></td><td><small>&nbsp;LicenseMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LifeGuardOTAManager&nbsp;</small></i></b></td><td><small>&nbsp;LifeGuardOTAManager&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NfcMgr&nbsp;</small></i></b></td><td><small>&nbsp;NfcMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersistMgr&nbsp;</small></i></b></td><td><small>&nbsp;PersistMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersonalDictionary&nbsp;</small></i></b></td><td><small>&nbsp;PersonalDictionary&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerKeyMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerKeyMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoteScannerMgr&nbsp;</small></i></b></td><td><small>&nbsp;RemoteScannerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RfidMgr&nbsp;</small></i></b></td><td><small>&nbsp;RfidMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ScanModeMgr&nbsp;</small></i></b></td><td><small>&nbsp;ScanModeMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SdCardMgr&nbsp;</small></i></b></td><td><small>&nbsp;SdCardMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SettingsMgr&nbsp;</small></i></b></td><td><small>&nbsp;SettingsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stats&nbsp;</small></i></b></td><td><small>&nbsp;Stats&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;StatusMgr&nbsp;</small></i></b></td><td><small>&nbsp;StatusMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ThreatMgr&nbsp;</small></i></b></td><td><small>&nbsp;ThreatMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TouchMgr&nbsp;</small></i></b></td><td><small>&nbsp;TouchMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UiMgr&nbsp;</small></i></b></td><td><small>&nbsp;UiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UsbMgr&nbsp;</small></i></b></td><td><small>&nbsp;UsbMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wi-Fi&nbsp;</small></i></b></td><td><small>&nbsp;Wi-Fi&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WirelessMgr&nbsp;</small></i></b></td><td><small>&nbsp;WirelessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></i></b></td><td><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;XmlMgr&nbsp;</small></i></b></td><td><small>&nbsp;XmlMgr&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Custom






Enter the name of a custom CSP that will be *Approved* to use a CSP when the value ***Approve*** is selected for **Use CSP Action**.




Use when the CSP to be *Approved* for an application is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. Standard CSP names COULD be entered, but it would generally be preferable to use **Approve CSP Name** instead, since picking a name from a list is less error-prone than typing the name.




**Detail Information:**


- Key = serviceCspActionApproveCspNameCustom


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Approve Caller Package






Enter the *Android Package Name* of an application that should be *Approved* to use a CSP when the value ***Approve*** is selected for **Use CSP Action**, to identify the specific application that should be *Approved* to use the CSP.




**Detail Information:**


- Key = serviceCspActionApproveCallerPackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Approve Caller Signature






Enter the *Android Package Signature* of an application that should be *Approved* to use a CSP when the value ***Approve*** is selected for **Use CSP Action**, to provide the *Android Package Signature* of the specific application that should be *Approved* to use the CSP.




**Detail Information:**


- Key = serviceCspActionApproveCallerSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Unapprove CSP Name






Select a standard CSP that will be *Unapproved* for an application when the value ***Unapprove*** is selected for **Use CSP Action**.




All standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. **Custom** could alternately be used in cases where typing in the CSP name is preferable.




**Detail Information:**


- Key = serviceCspActionUnapproveCspName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AccessMgr&nbsp;</small></i></b></td><td><small>&nbsp;AccessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AnalyticsMgr&nbsp;</small></i></b></td><td><small>&nbsp;AnalyticsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppGalleryMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppGalleryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AppMgr&nbsp;</small></i></b></td><td><small>&nbsp;AppMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AudioVolUIMgr&nbsp;</small></i></b></td><td><small>&nbsp;AudioVolUIMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AutoTriggerMgr&nbsp;</small></i></b></td><td><small>&nbsp;AutoTriggerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Batch&nbsp;</small></i></b></td><td><small>&nbsp;Batch&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BatteryMgr&nbsp;</small></i></b></td><td><small>&nbsp;BatteryMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BluetoothMgr&nbsp;</small></i></b></td><td><small>&nbsp;BluetoothMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BrowserMgr&nbsp;</small></i></b></td><td><small>&nbsp;BrowserMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BugReportMgr&nbsp;</small></i></b></td><td><small>&nbsp;BugReportMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CameraMgr&nbsp;</small></i></b></td><td><small>&nbsp;CameraMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CellularMgr&nbsp;</small></i></b></td><td><small>&nbsp;CellularMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CertMgr&nbsp;</small></i></b></td><td><small>&nbsp;CertMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clock&nbsp;</small></i></b></td><td><small>&nbsp;Clock&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ComponentMgr&nbsp;</small></i></b></td><td><small>&nbsp;ComponentMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ConditionMgr&nbsp;</small></i></b></td><td><small>&nbsp;ConditionMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DevAdmin&nbsp;</small></i></b></td><td><small>&nbsp;DevAdmin&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DeviceCentralMgr&nbsp;</small></i></b></td><td><small>&nbsp;DeviceCentralMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;DisplayMgr&nbsp;</small></i></b></td><td><small>&nbsp;DisplayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EncryptMgr&nbsp;</small></i></b></td><td><small>&nbsp;EncryptMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnterpriseKeyboard&nbsp;</small></i></b></td><td><small>&nbsp;EnterpriseKeyboard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EthernetMgr&nbsp;</small></i></b></td><td><small>&nbsp;EthernetMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FileMgr&nbsp;</small></i></b></td><td><small>&nbsp;FileMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GmsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GmsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GooglePlayMgr&nbsp;</small></i></b></td><td><small>&nbsp;GooglePlayMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GprsMgr&nbsp;</small></i></b></td><td><small>&nbsp;GprsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HostsMgr&nbsp;</small></i></b></td><td><small>&nbsp;HostsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Intent&nbsp;</small></i></b></td><td><small>&nbsp;Intent&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;KeyMappingMgr&nbsp;</small></i></b></td><td><small>&nbsp;KeyMappingMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LicenseMgr&nbsp;</small></i></b></td><td><small>&nbsp;LicenseMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LifeGuardOTAManager&nbsp;</small></i></b></td><td><small>&nbsp;LifeGuardOTAManager&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NfcMgr&nbsp;</small></i></b></td><td><small>&nbsp;NfcMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersistMgr&nbsp;</small></i></b></td><td><small>&nbsp;PersistMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PersonalDictionary&nbsp;</small></i></b></td><td><small>&nbsp;PersonalDictionary&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerKeyMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerKeyMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerMgr&nbsp;</small></i></b></td><td><small>&nbsp;PowerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RemoteScannerMgr&nbsp;</small></i></b></td><td><small>&nbsp;RemoteScannerMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;RfidMgr&nbsp;</small></i></b></td><td><small>&nbsp;RfidMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ScanModeMgr&nbsp;</small></i></b></td><td><small>&nbsp;ScanModeMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SdCardMgr&nbsp;</small></i></b></td><td><small>&nbsp;SdCardMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SettingsMgr&nbsp;</small></i></b></td><td><small>&nbsp;SettingsMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stats&nbsp;</small></i></b></td><td><small>&nbsp;Stats&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;StatusMgr&nbsp;</small></i></b></td><td><small>&nbsp;StatusMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ThreatMgr&nbsp;</small></i></b></td><td><small>&nbsp;ThreatMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;TouchMgr&nbsp;</small></i></b></td><td><small>&nbsp;TouchMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UiMgr&nbsp;</small></i></b></td><td><small>&nbsp;UiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UsbMgr&nbsp;</small></i></b></td><td><small>&nbsp;UsbMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Wi-Fi&nbsp;</small></i></b></td><td><small>&nbsp;Wi-Fi&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WirelessMgr&nbsp;</small></i></b></td><td><small>&nbsp;WirelessMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></i></b></td><td><small>&nbsp;WorryFreeWiFiMgr&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;XmlMgr&nbsp;</small></i></b></td><td><small>&nbsp;XmlMgr&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Custom






Enter the name of a custom CSP that will be *Unapproved* for an application when the value ***Unapprove*** is selected for **Use CSP Action**.




Use when the CSP to be *Unapproved* for an application is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. Standard CSP names COULD be entered, but it would generally be preferable to use **Unapprove CSP Name** instead, since picking a name from a list is less error-prone than typing the name.




**Detail Information:**


- Key = serviceCspActionUnapproveCspNameCustom


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Unapprove Caller Package






Enter the *Android Package Name* of an application that should be *Unapproved* from using a CSP when the value ***Unapprove*** is selected for **Use CSP Action**, to identify the specific application that should be *Unapproved* from using the CSP.




**Detail Information:**


- Key = serviceCspActionUnapproveCallerPackage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Unapprove Caller Signature






Enter the *Android Package Signature* of an application that should be *Unapproved* from using a CSP when the value ***Unapprove*** is selected for **Use CSP Action**, to provide the *Android Package Signature* of the specific application that should be *Unapproved* from using the CSP.




**Detail Information:**


- Key = serviceCspActionUnapproveCallerSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




-----
## Settings UI Configuration






Use this *Group* to configure the behavior of the Settings UI on a device, especially which features of the Settings UI will the Device User will be allowed to access.




**Detail Information:**


- Key = settingsStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Device User Access Quick Settings






Select whether the Device User will be allowed to access the Android Quick Settings Panel UI.




- If the value ***Off*** is selected, any attempt by the Device User to enter the Quick Settings Panel will be ignored.




- If the value ***On*** is selected, attempts by the Device User to enter the Quick Settings Panel will be honored and the Quick Settings Panel UI will be presented on request.




**Detail Information:**


- Key = settingsUserAccessToQuickSettings


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.2.




### Allow Device User Control Airplane Mode






Select whether the Device User will be allowed to change the state of Airplane Mode.
- If the value ***Off*** is selected, any attempt by the Device User to change the state of Airplane Mode will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the state of Airplane Mode will be honored.




**Detail Information:**


- Key = settingsUserControlOfAirplaneMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Device User Control App Notifications






Select whether the Device User will be allowed to configure which application notifications will be generated.
- If the value ***Off*** is selected, any attempt by the Device User to change the configuration of application notifications will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the configuration of application notifications will be honored.




**Detail Information:**


- Key = settingsUserControlAppNotifications


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.2.




### Allow Device User Control Apps






Select whether the Device User will be allowed to enter the AppInfo section of the Settings UI where applications can be controlled.
- If the value ***Off*** is selected, any attempt by the Device User to enter the AppInfo section of the Settings UI will be ignored.
- If the value ***On*** is selected, attempts by the Device User to enter the AppInfo section of the Settings will be honored.




**Detail Information:**


- Key = settingsUserControlApps


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Allow Device User Control Background Data






Select whether the Device User will be allowed to change the usage of Background WWAN data.
- If the value ***Off*** is selected, any attempt by the Device User to change the usage of Background WWAN data will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the usage of Background WWAN data will be honored.




**Detail Information:**


- Key = settingsUserControlOfBackgroundData


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Allow Device User Control Ethernet






Select whether the Device User will be allowed to change the state of the Ethernet adapter.
- If the value ***Off*** is selected, any attempt by the Device User to change the state of Ethernet adapter will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the state of Ethernet adapter will be honored.




**Detail Information:**


- Key = settingsUserControlOfEthernet


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Allow Device User Control Instant Lock






Select whether the Device User will be allowed to change whether pressing the Power key causes the device to lock instantly.
- If the value ***Off*** is selected, any attempt by the Device User to change whether pressing the Power key causes the device to lock instantly will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change whether pressing the Power key causes the device to lock instantly will be honored.




**Detail Information:**


- Key = settingsUserControlInstantLock


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Device User Control USB






Select whether the Device User will be allowed to change the state of USB.
- If the value ***Off*** is selected, any attempt by the Device User to change the state of USB will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the state of USB will be honored.




**Detail Information:**


- Key = settingsUserControlOfUsb


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.2.




### Allow Device User Control Unknown Sources






Select whether the Device User will be allowed to change whether applications can be installed from Unknown Sources.
- If the value ***Off*** is selected, any attempt by the Device User to change whether applications can be installed from Unknown Sources.
- If the value ***On*** is selected, attempts by the Device User to change whether applications can be installed from Unknown Sources.




**Detail Information:**


- Key = settingsUserControlUnknownSources


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Device User Control WLAN






Select whether the Device User will be allowed to change the configuration of the WLAN adapter.
- If the value ***Off*** is selected, any attempt by the Device User to change the configuration of the WLAN adapter will be blocked.
- If the value ***On*** is selected, attempts by the Device User to change the configuration of the WLAN adapter will be honored.




**Detail Information:**


- Key = settingsUserControlWlan


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Device User to Initiate an Enterprise Reset






Select whether the Device User will be allowed to perform an Enterprise Reset from the Settings UI.
- If the value ***Off*** is selected, any attempt by the Device User to perform an Enterprise Reset from the Settings UI will be blocked.
- If the value ***On*** is selected, attempts by the Device User to perform an Enterprise Reset from the Settings UI will be honored.




**Detail Information:**


- Key = settingsUserInitiateEnterpriseReset


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.2.




### Show Quick Settings Icon






Select whether the Device User will be allowed to invoke the Settings UI using an icon on the Quick Settings Panel.
- If the value ***Off*** is selected, any attempt by the use of the icon to invoke the Settings UI will be blocked.
- If the value ***On*** is selected, the use of the icon to invoke the Settings UI will be allowed.




**Detail Information:**


- Key = settingsShowQuickSettingsIcon


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Use Reduced Version






Select whether the Full or Reduced version of the Settings UI will be used.
- If the value ***Off*** is selected, when the Device User launches the Settings UI, the Full version,with support for all settings, will be used.
- If the value ***On*** is selected, when the Device User launches the Settings UI, the Reduced version, with support for only a few settings, will be used.




**Detail Information:**


- Key = settingsUseReducedVersion


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.1.




### Use of Notification Settings Icon






Select whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***Off*** is selected, the Device User will be blocked from using the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***On*** is selected, the Device User will be allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.




**Detail Information:**


- Key = settingsUseOfNotificationSettingsIcon


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 5.1.




### Use of Settings Slide Out Drawer






Select whether the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.
- If the value ***Off*** is selected, the Device User will be blocked from using the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.
- If the value ***On*** is selected, the Device User will be allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI




**Detail Information:**


- Key = settingsUseOfSlideOutDrawer


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Use of Tethering and Portable Hotspot






Select whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to configure and utilize Tethering and Portable Hotspot mode.
- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to configure and utilize Tethering and Portable Hotspot mode.




**Detail Information:**


- Key = settingsUseOfTetheringAndPortableHotspot


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




-----
## Threat Management Configuration






Use this *Group* to configure which threats to a device will be monitored and which countermeasures will be taken when threats are detected.




**Detail Information:**


- Key = threatStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Action






Select an Action to configure whether a given threat will be monitored.
- If the value ***Detect*** is selected, a specific threat will be configured to be monitored and, if that threat is detected, a countermeasure will be taken to mitigate that threat. You must also specify **Detect Threat Type** to provide the threat that will be monitored. In addition, you must also specify the *Sub-array* **Detect Countermeasures** to provide the set of countermeasures that will be performed if the specified threat is detected.
- If the value ***Ignore*** is selected, a specific threat will be configured to not be monitored and hence will never be detected. You must also specify **Ignore Threat Type** to provide the threat that will be ignored.




**Detail Information:**


- Key = threatAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Detect&nbsp;</small></i></b></td><td><small>&nbsp;Detect&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ignore&nbsp;</small></i></b></td><td><small>&nbsp;Ignore&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Detect Threat Type






Select the type of threat that will be monitored when the value ***Detect*** is selected for**Action**.
- If the value ***Max Password Attempts*** is selected, the Threat Management System will be configured to monitor password entry attempts and the threat will be considered to be detected if the maximum number of unsuccessful password entry attempts are made without an intervening successful password entry.
- If the value ***MDM Client Removal*** is selected, the Threat Management System will be configured to monitor the device and detect if a specific *Android Package Name* is ever uninstalled from the device. You must also specify **Action Detect Threat Type MDM Client Removal Package Name** to provide the *Android Package Name* that will be monitored. While this is typically used to detect the removal of the MDM Client, which would render a managed device unmanaged, it could be used to detect the removal of ANY application, if detection of the removal of an MDM Agent is not required.
- If the value ***Externally Detected*** is selected, the Threat Management System will be configured to listen for indication from an application on the device that can itself provide a way of detecting an signaling any threat not otherwise known to the Threat Management System. The Threat Management System will consider the threat to have been detected whenever it is signaled by the external application.
- If the value ***Exchange Active Sync Command*** is selected, the Threat Management System will be configured to handle a threat detected and signaled by a connection to an Exchange Active Sync Server via an Exchange Active Sync Client on the device.
- If the value ***Device is Rooted*** is selected, the Threat Management System will be configured to monitor the device to see if it has been rooted. Root detection mechanism seek to identify common exploits that could grant an escalated privileges to an untrusted application that might use them to compromise the security or privacy of the device.




**Detail Information:**


- Key = threatActionDetectThreatType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Max Password Attempts&nbsp;</small></i></b></td><td><small>&nbsp;MaxPasswordAttempts&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MDM Client Removal&nbsp;</small></i></b></td><td><small>&nbsp;MDMClientRemoval&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Externally Detected&nbsp;</small></i></b></td><td><small>&nbsp;ExternallyDetected&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Exchange Active Sync Command&nbsp;</small></i></b></td><td><small>&nbsp;ExchangeActiveSyncCommand&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Device is Rooted&nbsp;</small></i></b></td><td><small>&nbsp;DeviceisRooted&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Detect Countermeasures






Use this *Sub-array* to specofy the set of countermeasures that should be applied to mitigate a detected threat.




**Detail Information:**


- Key = threatActionDetectCountermeasures


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




#### Countermeasure






Use this *Sub-group* to specify a countermeasure to mitigate a detected threat.




**Detail Information:**


- Key = threatCountermeasure


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




##### Type






Select the type of a single countermeasure that will be performed to mitigate a detected threat.
- If the value ***FormatSdcard*** is selected, the countermeasure to format the removable SD Card will be performed when the associated threat is detected.
- If the value ***FactoryReset*** is selected, the countermeasure to Factory Reset the device will be performed when the associated threat is detected.
- If the value ***WipeSecureStorageKeys*** is selected, the countermeasure to Wipe all encryption keys, deployed via the Group **Security Configuration** will be performed when the associated threat is detected.
- If the value ***LockDevice*** is selected, the countermeasure to lock the device, requiring it to be unlocked by the Device User, will be performed when the associated threat is detected.
- If the value ***UninstallApplication*** is selected, the countermeasure to Uninstall an application will be performed when the associated threat is detected. You must also specify **Uninstall Package Name** to provide the *Android Package Name* of the application that will be uninstalled.
- If the value ***UnsolicitedAlert*** is selected, the countermeasure to send an unsolicited alert via an Android Intent will be performed when the associated threat is detected. You must also specify **Unsolicited Alert Package Name**, **Unsolicited Alert Class**, and **Unsolicited Alert Message** to provide the information needed to deliver the alert.




**Detail Information:**


- Key = threatCountermeasureType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;FormatSdcard&nbsp;</small></i></b></td><td><small>&nbsp;FormatSdcard&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FactoryReset&nbsp;</small></i></b></td><td><small>&nbsp;FactoryReset&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WipeSecureStorageKeys&nbsp;</small></i></b></td><td><small>&nbsp;WipeSecureStorageKeys&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;LockDevice&nbsp;</small></i></b></td><td><small>&nbsp;LockDevice&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UninstallApplication&nbsp;</small></i></b></td><td><small>&nbsp;UninstallApplication&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;UnsolicitedAlert&nbsp;</small></i></b></td><td><small>&nbsp;UnsolicitedAlert&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




##### Uninstall Package Name






Enter the *Android Package Name* of an application that will be uninstalled as a countermeasure to mitigate a threat when the value ***UninstallApplication*** is selected for **Type**.




**Detail Information:**


- Key = threatCountermeasureUninstallPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




##### Unsolicited Alert Package Name






Enter the *Android Package Name* of an application that will be sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is selected for **Type**.




**Detail Information:**


- Key = threatCountermeasureUnsolicitedAlertPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




##### Unsolicited Alert Class






Enter the Class Name of component within an application that will be sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is selected for **Type**.




**Detail Information:**


- Key = threatCountermeasureUnsolicitedAlertClass


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




##### Unsolicited Alert Message






Enter the string text message that will be sent to a component of an application via an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is selected for **Type**.




**Detail Information:**


- Key = threatCountermeasureUnsolicitedAlertMessage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Action Detect Threat Type MDM Client Removal Package Name






Enter the *Android Package Name* of the MDM Agent that will be monitored to detect a threat when the value ***MDM Client Removal*** is selected for **Detect Threat Type**.




**Detail Information:**


- Key = threatMdmClientPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Ignore Threat Type






Select the type of threat that will NOT be monitored, and hence cannot be detected, when the value ***Ignore*** is selected for**Action**.
- If the value ***Max Password Attempts*** is selected, the Threat Management System will be configured to NOT monitor password entry attempts and hence will never detect the threat of exceeding the maximum number of unsuccessful password entry attempts.
- If the value ***MDM Client Removal*** is selected, the Threat Management System will be configured to NOT monitor the device and detect if a specific *Android Package Name* is ever uninstalled from the device, and hence will never detect the threat of removal of the MDM Client.
- If the value ***Externally Detected*** is selected, the Threat Management System will be configured to NOT listen for indication from an application on the device that can signal a threat and hence no external threats will ever be detected.
- If the value ***Exchange Active Sync Command*** is selected, the Threat Management System will be configured NOT to handle a threat detected and signaled by a connection to an Exchange Active Sync Server via an Exchange Active Sync Client on the device and hence such threats will never be detected.
- If the value ***Device is Rooted*** is selected, the Threat Management System will be configured to NOT monitor the device to see if it has been rooted and hence the threat of the device being rooted will never be detected.




**Detail Information:**


- Key = threatActionIgnoreThreatType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Max Password Attempts&nbsp;</small></i></b></td><td><small>&nbsp;MaxPasswordAttempts&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MDM Client Removal&nbsp;</small></i></b></td><td><small>&nbsp;MDMClientRemoval&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Externally Detected&nbsp;</small></i></b></td><td><small>&nbsp;ExternallyDetected&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Exchange Active Sync Command&nbsp;</small></i></b></td><td><small>&nbsp;ExchangeActiveSyncCommand&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Device is Rooted&nbsp;</small></i></b></td><td><small>&nbsp;DeviceisRooted&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Periodic Scan






Select whether the Threat Management System should perform background polling to increase the accuracy and timeliness of detection of Rooted Device threat.
- If the value ***Off*** is selected, the Threat Management System will NOT perform background polling. This may increase performance and improve battery life somewhat, but will reduce the ability to detect the Rooted Device threat and or result in a delay in detection of that threat.
- If the value ***On*** is selected, the Threat Management System will perform background polling. This may reduce performance and degrade battery life somewhat, but will increase the ability to detect the Rooted Device threat and accelerate detection of that threat. You may also specify **Interval**, **Additional Folders**, and **List** to adjust the nature of the background polling, allowing trade-offs to be made in the balance pf thoroughness vs. the impact to performance and battery life. This value should generally be selected when detection of the ***Device is Rooted*** threat has been enabled, since it would have little value otherwise.




**Detail Information:**


- Key = threatPeriodicScan


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### Interval






Enter the interval between polls when the value ***On*** is selected for **Periodic Scan**.




The interval is specified in seconds between polls.
- Choosing a lower value can increase the aggressiveness of detection of rooted devices, which can reduce the time required to successfully detect that a device has been rooted, but can also reduce the impact of polling on performance and battery life. - Choose a higher value can reduce the aggressiveness of detection of rooted devices, which can increase the time required to successfully detect that a device has been rooted, but can also decrease the impact of polling on performance and battery life.




**Detail Information:**


- Key = threatPeriodicScanInterval


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### Additional Folders






Select whether additional folders will be polled when the value ***On*** is selected for **Periodic Scan**.








When background polling to detect device rooting is performed, the Threat Management System will always scan certain key folders that are considered common or likely locations where changes might occur that could signal that device has been rooted. In some cases, rooting might occur through changes made to other folders.
- If the value ***Off*** is selected, the Threat Management System will only scan the default folders.
- If the value ***On*** is selected, the Threat Management System will scan the default folders plus additional folders. You must also specify **List** to identify the list of additional folders to be scanned.




**Detail Information:**


- Key = threatPeriodicScanAdditionalFolders


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### List






Enter list of additional folders that will be polled when the value ***On*** is selected for **Periodic Scan** and the value ***On*** is selected for **Additional Folders**.




**Detail Information:**


- Key = threatPeriodicScanAdditionalFoldersList


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.1.




### Send Externally Detected Threat Message






Signal the detection of an externally detected threat. This would generally be relevant only if the ***Externally Detected*** was selected for **Detect Threat Type**, since any signaling of an externally detected threat would otherwise be ignored.




**Detail Information:**


- Key = threatSendExternallyDetectedMessage


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




-----
## Volume UI Configuration






Use this *Group* to configure the UI behavior of the Zebra Volume Control on a device.




**Detail Information:**


- Key = volumeuiStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Action






Select an Action to alter the UI behavior of the *Zebra Volume Control* on a device.




The *Zebra Volume Control* provides a configurable UI that allows the Device Users to adjust the volume of one or more *Audio Streams* on a device. The UI behavior of the *Zebra Volume Control* is configured by defining one or more *Audio UI Profiles* and controlling which *Audio UI Profile* is active. Each *Audio UI Profile* defines which *Audio Streams* can be configured and adjusts the experience of the Device User when adjusting the volumes of those *Audio Streams*. The *Zebra Volume Control* also has a *Factory Preset Audio UI Profile* that can be used to return the behavior of the *Zebra Volume Control* to it default out-of-box state.
- If the value ***Add Profile*** is selected, a new *Audio UI Profile* is added to the list of *Audio UI Profiles*. You must also specify **Add Profile Name** and **Add Profile Streams** to define the *Audio UI Profile* being added.
- If the value ***Remove Profile*** is selected, an existing *Audio UI Profile* is removed from the list of *Audio UI Profiles*. You must also specify **Remove Profile Name** to provide the name that identifies the *Audio UI Profile* to be removed.
- If the value ***Set Current Profile*** is selected, an existing *Audio UI Profile* is set to be the active *Audio UI Profile*. You must also specify **Set Current Profile Name** to provide the name that identifies the *Audio UI Profile* to be made the new active *Audio UI Profile*.
- If the value ***Apply Current Profile*** is selected, the currently active *Audio UI Profile* is applied to the current device *Volume Settings*. If the current device *Volume Settings* are outside the range of *Volume Settings* defined for the currently active *Audio UI Profile* the current device *Volume Settings* will be adjusted as needed to bring them within the range of *Volume Settings* defined for the currently active *Audio UI Profile*.
- If the value ***Set Factory Preset*** is selected, the *Factory Preset Audio UI Profile* is made the active *Audio UI Profile*, causing the behavior of the *Zebra Volume Control* to return to its default out-of-box state.




**Detail Information:**


- Key = volumeuiAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Add Profile&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Remove Profile&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Set Current Profile&nbsp;</small></i></b></td><td><small>&nbsp;01&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Apply Current Profile&nbsp;</small></i></b></td><td><small>&nbsp;02&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Set Factory Preset&nbsp;</small></i></b></td><td><small>&nbsp;03&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Add Profile Name






Enter the name of a new *Audio UI Profile* to be added when the value ***Add Profile*** is selected for **Action**.
- If an *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* will replace the existing *Audio UI Profile* with that name.
- If no *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* will be added with that name.




**Detail Information:**


- Key = volumeuiActionAddProfileName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Add Profile Streams






Use this *Sub-array* to specify the set of *Audio Streams* that will be included as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action**.




**Detail Information:**


- Key = volumeuiActionAddProfileStreams


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




#### Stream






Use this *Sub-group* to define a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Stream**.




**Detail Information:**


- Key = volumeuiStream


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Type






Ypu must select the type of a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added within each instance of the *Sub-group* **Stream** within *Sub-array* **Add Profile Streams**. You must also specify **Label**, **Icon**, **Visible**, and **Modes** to define the characteristics of the new *Audio Stream* of the specified type that will be added.
- If the value ***Music*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for playback of Music and other Media.
- If the value ***Ring*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for ringtones.
- If the value ***Notification*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for notifications.
- If the value ***System*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for system sounds.
- If the value ***Alarm*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for alarms.
- If the value ***VoiceCall*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for voice calls.
- If the value ***VVS*** is selected, the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for Decode Beep Vertical Volume Scale (VVS).




**Detail Information:**


- Key = volumeuiStreamType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Music&nbsp;</small></i></b></td><td><small>&nbsp;Music&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ring&nbsp;</small></i></b></td><td><small>&nbsp;Ring&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Notification&nbsp;</small></i></b></td><td><small>&nbsp;Notification&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;System&nbsp;</small></i></b></td><td><small>&nbsp;System&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Alarm&nbsp;</small></i></b></td><td><small>&nbsp;Alarm&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VoiceCall&nbsp;</small></i></b></td><td><small>&nbsp;VoiceCall&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;VVS&nbsp;</small></i></b></td><td><small>&nbsp;VVS&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Label






Enter the text label to be displayed for a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Stream** within the *Sub-array* **Add Profile Streams**.




The text label might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the text label to something more description of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.




If no text label is selected for an *Audio Stream*, the *Factory Preset* default text label will be used.




**Detail Information:**


- Key = volumeuiStreamLabel


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Icon






Enter the icon to be displayed for a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Stream** within the *Sub-array* **Add Profile Streams**.




The icon might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the icon to something more representative of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.




If an icon is specified, the value specified must be the full path and file name of a PNG format icon file that must already be present in the device file system. An icon size of 48x48 pixels is recommended.




If no icon is selected for an *Audio Stream*, the *Factory Preset* default icon will be used.




**Detail Information:**


- Key = volumeuiStreamIcon


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Visible






Select whether a single *Audio Stream* will be visible to the Device User within the *Zebra Volume Control* when it is included as part of a new *Audio UI Profile* being added and may be specified within each instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.




If an *Audio Stream* is made not visible for an *Audio UI Profile*, the *Zebra Volume Control* will not present ANY UI to the Device User to control the volume of that *Audio Stream*. The result is basically identical to not including the *Audio Stream* in the *Audio UI Profile*. This might be used when temporarily disabling an *Audio Stream* to avoid the need to remove and then add back in the entire definition of that *Audio Stream*.




**Detail Information:**


- Key = volumeuiStreamVisible


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Modes






Use this *Sub-array* to specify the behaviors of the UI for a single *Audio Stream* in one or more modes as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** and as part of an instance of the group **Stream** within the *Sub-array* **Add Profile Streams**.




**Detail Information:**


- Key = volumeuiStreamModes


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




###### Mode






Use this *Sub-group* to define the behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Modes** as an instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.




For each *Audio Mode* defined for an *Audio Stream*, You must also specify **Type** to provide which *Audio Mode* will be defined. You must also specify **Minimum**, **Maximum**, and **Preset** to define the lower, upper, and default (preset) volume levels for that *Audio Mode* within that *Audio Stream*.




**Detail Information:**


- Key = volumeuiMode


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




###### *Minimum*






Enter the minimum volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Modes** as an instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.








The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.




You must also specify **Maximum** and **Preset** to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.




The value specified must be less than or equal to the value entered for **Maximum** and less than or equal to the value entered for **Preset**.




**Detail Information:**


- Key = volumeuiModeMin


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




###### *Maximum*






Enter the maximum volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Modes** as an instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.








The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.




You must also specify **Minimum** and **Preset** to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.




The value specified must be greater than or equal to the value entered for **Minimum** and greater than or equal to the value entered for **Preset**.




**Detail Information:**


- Key = volumeuiModeMax


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




###### *Preset*






Enter the preset volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Modes** as an instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.








The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.




You must also specify **Minimum** and **Maximum** to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.




The value specified must be greater than or equal to the value entered for **Minimum** and less than or equal to the value entered for **Maximum**.




**Detail Information:**


- Key = volumeuiModePreset


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




###### *Type*






Select the type of behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added when the value ***Add Profile*** is selected for **Action** within the *Sub-array* **Modes** as an instance of the Group **Stream** within the *Sub-array* **Add Profile Streams**.
- If the value ***Speaker*** is selected, the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to the built-in device speaker.
- If the value ***Receiver*** is selected, the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to receiver mode.
- If the value ***WiredHeadset*** is selected, the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to a wired audio headset.
- If the value ***BluetoothHeadset*** is selected, the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to a wireless Bluetooth audio headset.








**Detail Information:**


- Key = volumeuiModeType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Speaker&nbsp;</small></i></b></td><td><small>&nbsp;Speaker&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Receiver&nbsp;</small></i></b></td><td><small>&nbsp;Receiver&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WiredHeadset&nbsp;</small></i></b></td><td><small>&nbsp;WiredHeadset&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BluetoothHeadset&nbsp;</small></i></b></td><td><small>&nbsp;BluetoothHeadset&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Remove Profile Name






Enter the name of an existing *Audio UI Profile* to be removed when the value ***Remove Profile*** is selected for **Action**.




**Detail Information:**


- Key = volumeuiActionRemoveProfileName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Set Current Profile Name






Enter the name of an existing *Audio UI Profile* to be made the current active *Audio UI Profile*when the value ***Set Current Profile*** is selected for **Action**. You must also specify **Set Current Profile Adjust Volume** to control whether the current device *Volume Settings* will be adjusted to ensure that they fall within the range of *Volume Settings* defined by the *Audio UI Profile*.




**Detail Information:**


- Key = volumeuiActionSetCurrentProfileName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Set Current Profile Adjust Volume






Select whether the current device *Volume Settings* will be adjusted to ensure that they fall within the range of *Volume Settings* defined by an *Audio UI Profile* being made the new current *Audio UI Profile* to be made the current active *Audio UI Profile*when the value ***Set Current Profile*** is selected for **Action** and **Set Current Profile Name** is specified.




**Detail Information:**


- Key = volumeuiActionSetCurrentProfileAdjustVolume


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;Off&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;On&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




-----
## Wakeup Configuration






Use this *Group* to configure Wakeups on a device.




**Detail Information:**


- Key = wakeupStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Select Wakeup Source Method






Select the Method that will be used to implement and control device Wake-up. - Hardware - Use Hardware Signals for Wake-Up - Software - Use Software (Mappable Keycodes) for Wake-Up




**Detail Information:**


- Key = selectwakeupsourceMethod


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Hardware&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Software&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### Wakeup Sources






Select whether all controllable Wakeup Sources should be turned on or off.




- If the value ***Off*** is selected, all wakeup sources that can be turned on or off will be turned off, causing the physical events corresponding to those wakeup sources to be ignored and hence NOT to cause the device to wakeup from a suspend state.




- If the value ***On*** is selected, all wakeup sources that can be turned on or off will be turned on, causing the physical events corresponding to those wakeup sources to be honored and hence to cause the device to wakeup from a suspend state.




**Detail Information:**


- Key = wakeupSources


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.0.




-----
## Whitelist Configuration






Use this *Group* to configure which user applications can be installed and run on a device.


Whitelisting applies only to user applications; it has no effect on System applications, which are applications built into the device and are therefore always present. User applications are those that DO NOT come preinstalled on the device, but are installed during staging or at some time after the device is put into service. System apps are controlled using the Blacklist Configuration Group.


>WARNING: It is important to understand that if an app uses the Whitelist Configuration Group to enable whitelisting, then that app becomes subject to whitelisting. If the app does not add itself to the "whitelist," the app is prevented from running once the configuration is successfully applied.




**Detail Information:**


- Key = whitelistStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### Mode






Select the Whitelisting Mode, which determines how the applications that can be installed and run on a device will be controlled.
- If the value ***Package Name Only*** is selected, when configuring which applications can be installed and run, only the *Android Package Name* will be used to identify the allowed applications.
- If the value ***Package Name and Signature*** is selected, when configuring which applications can be installed and run, both the *Android Package Name* and the Package Signature will be used to identify the allowed applications.




Using the value ***Package Name and Signature*** provides significantly better security than using ***Package Name Only*** since it provides much stronger protection against spoofing. If ***Package Name Only*** is used, any APK whose *Android Package Name* matches one of the allowed *Android Package Names* will be allowed to be installed and run. Since any APK can be assigned any *Android Package Name*, the potential for a rogue application circumventing the protections of Whitelisting is relatively high. If ***Package Name and Signature*** is used, the *Android Package Signature* of an application must match an allowed *Android Package Signature* in addition to the *Android Package Name* matching an allowed *Android Package Name*. Since a rogue APK cannot be signed with a given *Android Package Signature* without possessing the corresponding Private Key, the chances of successfully spoofing are greatly reduced, and effectively eliminated if Private Keys are properly controlled.




**Detail Information:**


- Key = whitelistMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Package Name Only&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Package Name and Signature&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Action






Select an Action to alter the Whitelisting configuration of a device.
- If the value ***Allow*** is selected, a single application will be allowed to be installed and run. You must also specify **Allow Package Name** to provide the *Android Package Name* of the application that will be allowed. In addition, if the value ***Package Name and Signature*** is selected for **Mode**, you must also specify **Allow Signature** to provide the *Android Package Signature* to be allowed.
- If the value ***Disallow*** is selected, a single application will be prevented from being installed and run. You must also specify **Disallow Package Name** to provide the *Android Package Name* of the application that will be disallowed.




**Detail Information:**


- Key = whitelistAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;Add&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;Delete&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Allow Package Name






Enter the *Android Package Name* of an application to be allowed when the value ***Allow*** is selected for **Action**.
- If the value ***Package Name and Signature*** is selected for **Mode**, you must also specify **Allow Signature** to provide the *Android Package Signature* to be allowed.




**Detail Information:**


- Key = whitelistActionAddPackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### Allow Signature






Enter the *Android Package Signature* of an application to be allowed when the value ***Allow*** is selected for **Action**, **Allow Package Name** is specified, and the value ***Package Name and Signature*** is selected for **Mode**.




**Detail Information:**


- Key = whitelistActionAddSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Disallow Signature






Enter the *Android Package Signature* of an application to be disallowed when the value ***Disallow*** is selected for **Action**, and when **Disallow Package Name** is specified, and when the value ***Package Name and Signature*** is selected for **Mode**.




**Detail Information:**


- Key = whitelistActionDeleteSignature


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




### Disallow Package Name






Enter the *Android Package Name* of an application to be disallowed when the value ***Disallow*** is selected for **Action**.




If the value ***Package Name and Signature*** is selected for **Mode**, you must also specify **Disallow Signature** to provide the *Android Package Signature* to be allowed.




**Detail Information:**


- Key = whitelistActionDeletePackageName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### State






Select the Whitelisting State, which determines whether the set of applications that can be installed and run on a device will be controlled.




- If the value ***Off*** is selected, Whitelisting will not be used and no restrictions will be placed on which applications can be installed and run.




- If the value ***On*** is selected, Whitelisting will be used and you should specify additional configuration in the Group to configure how the set of applications will be controlled and which applications will be allowed to be installed and run.




**Detail Information:**


- Key = whitelistState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




-----
## Wireless General Configuration






Use this *Group* to configure General Wireless settings on a device.




**Detail Information:**


- Key = wirelessStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### Antenna Selection






Use this *Sub-group* to configure which of multiple antennas should be used for wireless communications.




- If the value ***Internal*** is selected, the internal built-in antenna will be used.




- If the value ***External*** is selected, an externally connected antenna will be used.








**Detail Information:**


- Key = wirelessAntennaSelection


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Internal&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;External&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 7.1.




### GPS Power State






Use this *Sub-group* to configure whether the GPS radio state should be On or Off.
- If the value ***Off*** is selected, the GPS radio state will be turned off, preventing GPS-based location detection from being performed.
- If the value ***On*** is selected, the GPS radio state will be turned on, allowing GPS-based location detection to be performed, given satellite availability.




**Detail Information:**


- Key = wirelessGpsPowerState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.3.




-----
## Wireless LAN Configuration






Use this *Group* to configure Global settings that affect the Wireless Local Area Network (WLAN) operation on a device. (WLAN) subsystem. - Changes made using this Group will generally affect the operation of ALL WLAN Networks.
- This Group does NOT allow management of specific WLAN Profiles. To manage WLAN Profiles, consult the documentation for your specific EMM.




**Detail Information:**


- Key = wlanStep


- Type = bundle




**Support Information:**


- Supported from: MX 8.4.




### Auto Wakeup






Select whether Wi-Fi (not the device) should *Wake Up* (turn on) automatically when the presence of a previously connected network is detected.




- If the value ***Off*** is selected, automatic *Wake Up* will be turned OFF, preventing the device from detecting the presence of a previously connected network and automatically waking up to connect to it.




- If the value ***On*** is selected, automatic *Wake Up* will be turned ON, allowing the device to periodically scan for and detect the presence of a previously connected network and automatically wake up to connect to it.




**Detail Information:**


- Key = wlanAutoWakeup


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Bands






Select the frequency *Bands* on which the WLAN subsystem will operate on a device:
- If the value ***2.4GHz*** is selected, only the 2.4 Gigahertz (Ghz) *Band* (used by 802.11b and 802.11g) will be used.
- If the value ***5.0GHz*** is selected, only the 5.0 Gigahertz (Ghz) *Band* (used by 802.11a) will be used.
- If the value ***Auto*** is selected, the *Band* to be used will be determined automatically.




**Detail Information:**


- Key = wlanBands


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;2.4GHz&nbsp;</small></i></b></td><td><small>&nbsp;2.4GHz&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5.0GHz&nbsp;</small></i></b></td><td><small>&nbsp;5.0GHz&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Auto&nbsp;</small></i></b></td><td><small>&nbsp;Auto&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.1.




### Channels






Enter the channels over which the WLAN subsystem will operate on a device.




The format of the value entered must be 64 characters or less and can specify one or more channels by separating values by commas and/or specifying ranges of values by separating the lower and upper range values with a dash (-). Some examples: - 1,2,3 - 3,6,7-9,11-13




The actual channel that can specified depends on the value selected for **Bands**.
- If the value ***2.4GHz*** is selected for **Bands**, channels must be selected that are in the 2.4 Ghz band.
- If the value ***5.0GHz*** is selected for **Bands**, channels must be selected that are in the 5.0 Ghz band.
- If the value ***Auto*** is selected **Bands**, channels may be selected that are in either band.




Note that individual countries may apply their own regulations regarding the channels that are allowable. Therefore, depending on the value selected for **Country**, not all channel values that could be specified for a given band may be allowable.




**Detail Information:**


- Key = wlanChannels


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




### Country






Select the *Country* in which the WLAN subsystem will operate on a device:
- If the value ***Auto (Use 802.11d)*** is selected, the *Country* to be used will be determined automatically.
- When any other value is selected, the specified *Country* will be used.




**Detail Information:**


- Key = wlanCountry


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Auto (Use 802.11d)&nbsp;</small></i></b></td><td><small>&nbsp;AUTO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Algeria&nbsp;</small></i></b></td><td><small>&nbsp;DZ&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Anguilla&nbsp;</small></i></b></td><td><small>&nbsp;AI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Argentina&nbsp;</small></i></b></td><td><small>&nbsp;AR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Australia&nbsp;</small></i></b></td><td><small>&nbsp;AU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Austria&nbsp;</small></i></b></td><td><small>&nbsp;AT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bahamas&nbsp;</small></i></b></td><td><small>&nbsp;BS&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bahrain&nbsp;</small></i></b></td><td><small>&nbsp;BH&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Barbados&nbsp;</small></i></b></td><td><small>&nbsp;BB&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Belarus&nbsp;</small></i></b></td><td><small>&nbsp;BY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Belgium&nbsp;</small></i></b></td><td><small>&nbsp;BE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bermuda&nbsp;</small></i></b></td><td><small>&nbsp;BM&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bolivia&nbsp;</small></i></b></td><td><small>&nbsp;BO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bonaire&nbsp;</small></i></b></td><td><small>&nbsp;BQ&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bosnia and Herzegovina&nbsp;</small></i></b></td><td><small>&nbsp;BA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Brazil&nbsp;</small></i></b></td><td><small>&nbsp;BR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Bulgaria&nbsp;</small></i></b></td><td><small>&nbsp;BG&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Canada&nbsp;</small></i></b></td><td><small>&nbsp;CA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Cayman Islands&nbsp;</small></i></b></td><td><small>&nbsp;KY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Chile&nbsp;</small></i></b></td><td><small>&nbsp;CL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;China&nbsp;</small></i></b></td><td><small>&nbsp;CN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Christmas Island&nbsp;</small></i></b></td><td><small>&nbsp;CX&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Columbia&nbsp;</small></i></b></td><td><small>&nbsp;CO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Costa Rica&nbsp;</small></i></b></td><td><small>&nbsp;CR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Croatia&nbsp;</small></i></b></td><td><small>&nbsp;HR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Curacao&nbsp;</small></i></b></td><td><small>&nbsp;CW&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Cyprus&nbsp;</small></i></b></td><td><small>&nbsp;CY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Czech Republic&nbsp;</small></i></b></td><td><small>&nbsp;CA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Denmark&nbsp;</small></i></b></td><td><small>&nbsp;DK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Dominican Republic&nbsp;</small></i></b></td><td><small>&nbsp;DO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ecuador&nbsp;</small></i></b></td><td><small>&nbsp;EC&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Egypt&nbsp;</small></i></b></td><td><small>&nbsp;EG&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;El Salvador&nbsp;</small></i></b></td><td><small>&nbsp;SV&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Estonia&nbsp;</small></i></b></td><td><small>&nbsp;EE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Falkland Islands(Malvinas)&nbsp;</small></i></b></td><td><small>&nbsp;FK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Finland&nbsp;</small></i></b></td><td><small>&nbsp;FI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;France&nbsp;</small></i></b></td><td><small>&nbsp;FR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;French Guiana&nbsp;</small></i></b></td><td><small>&nbsp;GF&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Germany&nbsp;</small></i></b></td><td><small>&nbsp;DE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Greece&nbsp;</small></i></b></td><td><small>&nbsp;GR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Guadelope&nbsp;</small></i></b></td><td><small>&nbsp;GP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Guam&nbsp;</small></i></b></td><td><small>&nbsp;GU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Guatemala&nbsp;</small></i></b></td><td><small>&nbsp;GT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Guyana&nbsp;</small></i></b></td><td><small>&nbsp;GY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Haiti&nbsp;</small></i></b></td><td><small>&nbsp;HT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Honduras&nbsp;</small></i></b></td><td><small>&nbsp;HN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HongKong&nbsp;</small></i></b></td><td><small>&nbsp;HK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Hungary&nbsp;</small></i></b></td><td><small>&nbsp;HU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Iceland&nbsp;</small></i></b></td><td><small>&nbsp;IS&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;India&nbsp;</small></i></b></td><td><small>&nbsp;IN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Indonesia&nbsp;</small></i></b></td><td><small>&nbsp;ID&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ireland&nbsp;</small></i></b></td><td><small>&nbsp;IE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Israel&nbsp;</small></i></b></td><td><small>&nbsp;IL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Italy&nbsp;</small></i></b></td><td><small>&nbsp;IT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Jamaica&nbsp;</small></i></b></td><td><small>&nbsp;JM&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Japan&nbsp;</small></i></b></td><td><small>&nbsp;JP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Jordan&nbsp;</small></i></b></td><td><small>&nbsp;JO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Kazakhstan&nbsp;</small></i></b></td><td><small>&nbsp;KZ&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Kenya&nbsp;</small></i></b></td><td><small>&nbsp;KE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Korea Republic&nbsp;</small></i></b></td><td><small>&nbsp;KR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Kuwait&nbsp;</small></i></b></td><td><small>&nbsp;KW&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Latvia&nbsp;</small></i></b></td><td><small>&nbsp;LV&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Lebanon&nbsp;</small></i></b></td><td><small>&nbsp;LB&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Liechtenstein&nbsp;</small></i></b></td><td><small>&nbsp;LI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Lithuania&nbsp;</small></i></b></td><td><small>&nbsp;LT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Luxembourg&nbsp;</small></i></b></td><td><small>&nbsp;LU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Macedonia&nbsp;</small></i></b></td><td><small>&nbsp;MK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Malaysia&nbsp;</small></i></b></td><td><small>&nbsp;MY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Malta&nbsp;</small></i></b></td><td><small>&nbsp;MT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Martinique&nbsp;</small></i></b></td><td><small>&nbsp;MQ&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Mexico&nbsp;</small></i></b></td><td><small>&nbsp;MX&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Montenegro&nbsp;</small></i></b></td><td><small>&nbsp;ME&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Morocco&nbsp;</small></i></b></td><td><small>&nbsp;MA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Netherlands&nbsp;</small></i></b></td><td><small>&nbsp;AN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Netherlands&nbsp;</small></i></b></td><td><small>&nbsp;NL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;NewZeaLand&nbsp;</small></i></b></td><td><small>&nbsp;NZ&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Nicaragua&nbsp;</small></i></b></td><td><small>&nbsp;NI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Nigeria&nbsp;</small></i></b></td><td><small>&nbsp;NG&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Niue&nbsp;</small></i></b></td><td><small>&nbsp;NU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Norfolk Islands&nbsp;</small></i></b></td><td><small>&nbsp;NF&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Northern Marina Islands&nbsp;</small></i></b></td><td><small>&nbsp;MP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Norway&nbsp;</small></i></b></td><td><small>&nbsp;NO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Oman&nbsp;</small></i></b></td><td><small>&nbsp;OM&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Pakistan&nbsp;</small></i></b></td><td><small>&nbsp;PK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Panama&nbsp;</small></i></b></td><td><small>&nbsp;PA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Paraguay&nbsp;</small></i></b></td><td><small>&nbsp;PY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Peru&nbsp;</small></i></b></td><td><small>&nbsp;PE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Philippines&nbsp;</small></i></b></td><td><small>&nbsp;PH&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Poland&nbsp;</small></i></b></td><td><small>&nbsp;PL&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Portugal&nbsp;</small></i></b></td><td><small>&nbsp;PT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Puerto Rico&nbsp;</small></i></b></td><td><small>&nbsp;PR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Qatar&nbsp;</small></i></b></td><td><small>&nbsp;QA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Romania&nbsp;</small></i></b></td><td><small>&nbsp;RO&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Russian Federation&nbsp;</small></i></b></td><td><small>&nbsp;RU&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;St. Maarten&nbsp;</small></i></b></td><td><small>&nbsp;SX&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Saudi Arabia&nbsp;</small></i></b></td><td><small>&nbsp;SA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Serbia&nbsp;</small></i></b></td><td><small>&nbsp;RS&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Singapore&nbsp;</small></i></b></td><td><small>&nbsp;SG&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Slovakia&nbsp;</small></i></b></td><td><small>&nbsp;SK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Slovenia&nbsp;</small></i></b></td><td><small>&nbsp;SI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;South Africa&nbsp;</small></i></b></td><td><small>&nbsp;ZA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Spain&nbsp;</small></i></b></td><td><small>&nbsp;ES&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Sri Lanka&nbsp;</small></i></b></td><td><small>&nbsp;LK&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Sweden&nbsp;</small></i></b></td><td><small>&nbsp;SE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Switzerland&nbsp;</small></i></b></td><td><small>&nbsp;CH&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Taiwan&nbsp;</small></i></b></td><td><small>&nbsp;TW&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Thailand&nbsp;</small></i></b></td><td><small>&nbsp;TH&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Trinidad and Tobago&nbsp;</small></i></b></td><td><small>&nbsp;TT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Tunisia&nbsp;</small></i></b></td><td><small>&nbsp;TN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turkey&nbsp;</small></i></b></td><td><small>&nbsp;TR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Ukraine&nbsp;</small></i></b></td><td><small>&nbsp;UA&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;United Arab Emirates&nbsp;</small></i></b></td><td><small>&nbsp;AE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;United Kingdom&nbsp;</small></i></b></td><td><small>&nbsp;GB&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;U.S.A.&nbsp;</small></i></b></td><td><small>&nbsp;US&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Uruguay&nbsp;</small></i></b></td><td><small>&nbsp;UY&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Venezuela&nbsp;</small></i></b></td><td><small>&nbsp;VE&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Vietnam&nbsp;</small></i></b></td><td><small>&nbsp;VN&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Virgin Islands(British)&nbsp;</small></i></b></td><td><small>&nbsp;VG&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Virgin Islands(US)&nbsp;</small></i></b></td><td><small>&nbsp;VI&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.1.




### Hotspot State






Select the state of the *Hotspot Mode* of the WLAN adapter on a device.




- If the value ***Off*** is selected, the *Hotspot Mode* will be turned OFF, preventing the device from sharing its Internet connection as a WLAN Hotspot. Any other existing configuration related to *Hotspot Mode* will not be affected, allowing *Hotspot Mode* to be configured and tested, turned OFF and back ON without having to reconfigure it.




- If the value ***On*** is selected, the *Hotspot Mode* will be turned ON, allowing the device to share its Internet connection as a WLAN Hotspot, subject to appropriate configuration related to *Hotspot Mode*.




**Detail Information:**


- Key = wlanHotSpotState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Verbose Logging






Select whether the *Verbose Logging* feature of the WLAN adapter should be turned ON or OFF on a device.




- If the value ***Off*** is selected, the *Verbose Logging* will be turned OFF, preventing the device from logging additional information for debugging or troubleshooting WLAN issues.




- If the value ***On*** is selected, the *Verbose Logging* will be turned ON, allowing the device to log additional information for debugging or troubleshooting WLAN issues.




**Detail Information:**


- Key = wlanVerboseLogging


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Hotspot Options






Use this *Sub-group* to configure all settings related to *Hotspot Mode* of the WLAN adapter on a device, with the exception of the state of *Hotspot Mode*, which is configured via **Hotspot State**.








All the settings is this group can be configured independently of the state of *Hotspot Mode*, thus allowing *Hotspot Mode* to be configured before it is turned ON and allowing the configuration of *Hotspot Mode* to be established and maintained across multiple changes to the state of *Hotspot Mode*.




**Detail Information:**


- Key = wlanHotSpotOptions


- Type = bundle




**Support Information:**


- Supported from: MX 6.3.




#### SSID






Enter the Service Set Identifier (SSID) that will identify the network supported in *Hotspot Mode* of the WLAN adapter on a device.




**Detail Information:**


- Key = wlanHotSpotSSID


- Type = string




**Support Information:**


- Supported from: MX 6.3.




#### Band






Select the *Frequency Band* in which *Hotspot Mode* of the WLAN adapter will operate on a device.
- If the value ***2.4GHz*** is selected, the *Hotspot Mode* of the WLAN adapter will operate solely in the 2.4 Gigahertz (GHz) *Frequency Band* and hence only devices capable of operating in that *Frequency Band* will be capable of sharing the Internet connection of the device via *Hotspot Mode*.
- If the value ***5GHz*** is selected, the *Hotspot Mode* of the WLAN adapter will operate solely in the 5.0 Gigahertz (GHz) *Frequency Band* and hence only devices capable of operating in that *Frequency Band* will be capable of sharing the Internet connection of the device via *Hotspot Mode*.




**Detail Information:**


- Key = wlanHotSpotBand


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;2.4GHz&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5GHz&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




#### Band 2.4GHz Channel






Select the single 2.4 HGHz Channel in which *Hotspot Mode* of the WLAN adapter will operate on a device and should be specified when the value ***2.4GHz*** is selected for **Band**.




**Detail Information:**


- Key = wlanHotSpot24GHzChannel


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;3&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;4&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;7&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;8&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;9&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;10&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;11&nbsp;</small></i></b></td><td><small>&nbsp;11&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;12&nbsp;</small></i></b></td><td><small>&nbsp;12&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;13&nbsp;</small></i></b></td><td><small>&nbsp;13&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




#### 5GHz Channel






Select the single 5.0 HGHz Channel in which *Hotspot Mode* of the WLAN adapter will operate on a device when the value ***5GHz*** is selected for **Band**.




**Detail Information:**


- Key = wlanHotSpotBand5GhzChannel


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;36&nbsp;</small></i></b></td><td><small>&nbsp;36&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;40&nbsp;</small></i></b></td><td><small>&nbsp;40&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;44&nbsp;</small></i></b></td><td><small>&nbsp;44&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;48&nbsp;</small></i></b></td><td><small>&nbsp;48&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;52&nbsp;</small></i></b></td><td><small>&nbsp;52&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;56&nbsp;</small></i></b></td><td><small>&nbsp;56&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;60&nbsp;</small></i></b></td><td><small>&nbsp;60&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;64&nbsp;</small></i></b></td><td><small>&nbsp;64&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;100&nbsp;</small></i></b></td><td><small>&nbsp;100&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;104&nbsp;</small></i></b></td><td><small>&nbsp;104&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;108&nbsp;</small></i></b></td><td><small>&nbsp;108&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;112&nbsp;</small></i></b></td><td><small>&nbsp;112&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;116&nbsp;</small></i></b></td><td><small>&nbsp;116&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;120&nbsp;</small></i></b></td><td><small>&nbsp;120&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;124&nbsp;</small></i></b></td><td><small>&nbsp;124&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;128&nbsp;</small></i></b></td><td><small>&nbsp;128&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;132&nbsp;</small></i></b></td><td><small>&nbsp;132&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;136&nbsp;</small></i></b></td><td><small>&nbsp;136&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;140&nbsp;</small></i></b></td><td><small>&nbsp;140&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;149&nbsp;</small></i></b></td><td><small>&nbsp;149&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;153&nbsp;</small></i></b></td><td><small>&nbsp;153&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;157&nbsp;</small></i></b></td><td><small>&nbsp;157&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;161&nbsp;</small></i></b></td><td><small>&nbsp;161&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;165&nbsp;</small></i></b></td><td><small>&nbsp;165&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




#### Security Mode






Select the *Security Mode* to be used to secure the *Hotspot Mode* of the WLAN adapter will operate on a device.
- If the value ***Open*** is selected, the WLAN adapter will apply no security for *Hotspot Mode*, thus providing no control over which devices can connect and share the Internet connection of the device via *Hotspot Mode*.
- If the value ***WPA2/PSK*** is selected, the WLAN adapter will apply Wi-Fi Protected Access Version 2 (WPA2) Pre-shared Key (PSK) security for *Hotspot Mode*, thus providing some control over which devices can connect and share the Internet connection of the device via *Hotspot Mode*. You must also specify **Security Passphrase** to provide the PSK passphrase that will be used to secure the network.




**Detail Information:**


- Key = wlanHotSpotSecurityMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Open&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WPA2/PSK&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.3.




#### Security Passphrase






Enter the PSK passphrase that will be used to secure the *Hotspot Mode* network implemented by the WLAN adapter on a device, when the value ***WPA2/PSK*** is selected for **Security Mode**.




**Detail Information:**


- Key = wlanHotSpotSecurityPassphrase


- Type = string




**Support Information:**


- Supported from: MX 6.3.




### Omnitrail






Use this *Sub-group* to configure Omnitrail settings for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanOmnitrail


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




#### State






Select whether the Omnitrail feature of the WLAN adapter is turned On or Off for a device.




**Detail Information:**


- Key = wlanOmnitrailState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




#### Interval






Enter the interval at which the Omnitrail feature of the WLAN adapter should emit a locational beacon on a device.








The value provided should be in milliseconds (ms) and should have a value in the range of 200 ms (0.2 seconds) to 5000 ms (5 seconds).




**Detail Information:**


- Key = wlanOmnitrailInterval


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




#### Options






Use this *Sub-array* to specify the set of Omnitrail options to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanOmnitrailOptions


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




##### Option Pair






Use this *Sub-group* to specify a name and value for a single Omnitrail option to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanOmnitrailOptionPair


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




###### Name






Select a standard name that identifies a single Omnitrail optOmnitrail option to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the Omnitrail option identified by the selected name.




**Detail Information:**


- Key = wlanOmnitrailOptionName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;OmniTrailChannel&nbsp;</small></i></b></td><td><small>&nbsp;OmniTrailChannel&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OmniTrailSubtype&nbsp;</small></i></b></td><td><small>&nbsp;OmniTrailSubtype&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OmniTrailPriority&nbsp;</small></i></b></td><td><small>&nbsp;OmniTrailPriority&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OmniTrailFlag&nbsp;</small></i></b></td><td><small>&nbsp;OmniTrailFlag&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OmniTrailType&nbsp;</small></i></b></td><td><small>&nbsp;OmniTrailType&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




###### Name Custom






Enter a custom name that identifies a Omnitrail option to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the Omnitrail option identified by the specified name.




**Detail Information:**


- Key = wlanOmnitrailOptionCustomName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




###### Value






Enter a value for a single Omnitrail option to be configured for the WLAN adapter on a device when **Name** or **Name Custom** are also specified to provide the name needed identity the Omnitrail option to be set.




**Detail Information:**


- Key = wlanOmnitrailOptionValue


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




#### Standard






Select an omnittrail datarate standard to be used by the WLAN adapter on a device. You must also specify **Datarate** to provide the actual datarate to be used.
- If the value ***abg*** is selected, the Omnitrail datarate standard will be set for 802.11a, 802.11b, and 802,11g.
- If the value ***11n*** is selected, the Omnitrail datarate standard will be set for 802.11n.
- If the value ***11ac*** is selected, the Omnitrail datarate standard will be set for 802.11a and 802,11c.








**Detail Information:**


- Key = wlanOmnitrailDatarateStandard


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;abg&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;11n&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;11ac&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




#### Datarate






Select an omnittrail datarate to be used by the WLAN adapter on a device when **Standard** is also specified to identify the datarate standard.
- If the value ***abg*** is selected for **Standard**, the following datarates can be selected.
- 1
- 2
- 5.5
- 6
- 9
- 11
- 12
- 18
- 24
- 36
- 48
- 54
- If the value ***11n*** is selected for **Standard**, the following datarates can be selected.
- MCS0
- MCS1
- MCS2
- MCS3
- MCS4
- MCS5
- MCS6
- MCS7
- MCS8
- MCS9
- MCS10
- MCS11
- MCS12
- MCS13
- MCS14
- MCS15
- If the value ***11ac*** is selected for **Standard**, the following datarates can be selected.
- MCS0_1
- MCS1_1
- MCS2_1
- MCS3_1
- MCS4_1
- MCS5_1
- MCS6_1
- MCS7_1
- MCS8_1
- MCS9_1
- MCS0_2
- MCS1_2
- MCS2_2
- MCS3_2
- MCS4_2
- MCS5_2
- MCS6_2
- MCS7_2
- MCS8_2
- MCS9_2




**Detail Information:**


- Key = wlanOmnitrailDatarate


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;1&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;2&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;5.5&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;6&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;9&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;11&nbsp;</small></i></b></td><td><small>&nbsp;5&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;12&nbsp;</small></i></b></td><td><small>&nbsp;6&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;18&nbsp;</small></i></b></td><td><small>&nbsp;7&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;24&nbsp;</small></i></b></td><td><small>&nbsp;8&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;36&nbsp;</small></i></b></td><td><small>&nbsp;9&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;48&nbsp;</small></i></b></td><td><small>&nbsp;10&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;54&nbsp;</small></i></b></td><td><small>&nbsp;11&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS0&nbsp;</small></i></b></td><td><small>&nbsp;12&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS1&nbsp;</small></i></b></td><td><small>&nbsp;13&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS2&nbsp;</small></i></b></td><td><small>&nbsp;14&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS3&nbsp;</small></i></b></td><td><small>&nbsp;15&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS4&nbsp;</small></i></b></td><td><small>&nbsp;16&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS5&nbsp;</small></i></b></td><td><small>&nbsp;17&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS6&nbsp;</small></i></b></td><td><small>&nbsp;18&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS7&nbsp;</small></i></b></td><td><small>&nbsp;19&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS8&nbsp;</small></i></b></td><td><small>&nbsp;20&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS9&nbsp;</small></i></b></td><td><small>&nbsp;21&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS10&nbsp;</small></i></b></td><td><small>&nbsp;22&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS11&nbsp;</small></i></b></td><td><small>&nbsp;23&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS12&nbsp;</small></i></b></td><td><small>&nbsp;24&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS13&nbsp;</small></i></b></td><td><small>&nbsp;25&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS14&nbsp;</small></i></b></td><td><small>&nbsp;26&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS15&nbsp;</small></i></b></td><td><small>&nbsp;27&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS0_1&nbsp;</small></i></b></td><td><small>&nbsp;28&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS1_1&nbsp;</small></i></b></td><td><small>&nbsp;29&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS2_1&nbsp;</small></i></b></td><td><small>&nbsp;30&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS3_1&nbsp;</small></i></b></td><td><small>&nbsp;31&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS4_1&nbsp;</small></i></b></td><td><small>&nbsp;32&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS5_1&nbsp;</small></i></b></td><td><small>&nbsp;33&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS6_1&nbsp;</small></i></b></td><td><small>&nbsp;34&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS7_1&nbsp;</small></i></b></td><td><small>&nbsp;35&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS8_1&nbsp;</small></i></b></td><td><small>&nbsp;36&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS9_1&nbsp;</small></i></b></td><td><small>&nbsp;37&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS0_2&nbsp;</small></i></b></td><td><small>&nbsp;38&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS1_2&nbsp;</small></i></b></td><td><small>&nbsp;39&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS2_2&nbsp;</small></i></b></td><td><small>&nbsp;40&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS3_2&nbsp;</small></i></b></td><td><small>&nbsp;41&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS4_2&nbsp;</small></i></b></td><td><small>&nbsp;42&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS5_2&nbsp;</small></i></b></td><td><small>&nbsp;43&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS6_2&nbsp;</small></i></b></td><td><small>&nbsp;44&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS7_2&nbsp;</small></i></b></td><td><small>&nbsp;45&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS8_2&nbsp;</small></i></b></td><td><small>&nbsp;46&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MCS9_2&nbsp;</small></i></b></td><td><small>&nbsp;47&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.0.




### Advanced Options






Use this *Sub-array* to specify the set of advanced options to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanAdvancedOptions


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




#### Option Pair






Use this *Sub-group* to specify a name and value for a single advanced option to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanAdvancedOptionPair


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




##### Name






Select a standard name that identifies a single advanced option to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the advanced option identified by the selected name.




**Detail Information:**


- Key = wlanAdvancedOptionName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;AutoTimeConfig&nbsp;</small></i></b></td><td><small>&nbsp;AutoTimeConfig&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;HFSR&nbsp;</small></i></b></td><td><small>&nbsp;HFSR&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CCKM&nbsp;</small></i></b></td><td><small>&nbsp;CCKM&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FT&nbsp;</small></i></b></td><td><small>&nbsp;FT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FTRIC&nbsp;</small></i></b></td><td><small>&nbsp;FTRIC&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;OKC&nbsp;</small></i></b></td><td><small>&nbsp;OKC&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PMKID&nbsp;</small></i></b></td><td><small>&nbsp;PMKID&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PreAuth&nbsp;</small></i></b></td><td><small>&nbsp;PreAuth&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PowerSave&nbsp;</small></i></b></td><td><small>&nbsp;PowerSave&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WLANPowerSave&nbsp;</small></i></b></td><td><small>&nbsp;WLANPowerSave&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AdvancedLogging&nbsp;</small></i></b></td><td><small>&nbsp;AdvancedLogging&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FIPS&nbsp;</small></i></b></td><td><small>&nbsp;FIPS&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnableRestrictedSettingsUI&nbsp;</small></i></b></td><td><small>&nbsp;EnableRestrictedSettingsUI&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;802.11K&nbsp;</small></i></b></td><td><small>&nbsp;802.11K&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;802.11w&nbsp;</small></i></b></td><td><small>&nbsp;802.11w&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;802.11ac&nbsp;</small></i></b></td><td><small>&nbsp;802.11ac&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;802.11n&nbsp;</small></i></b></td><td><small>&nbsp;802.11n&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;802.11v&nbsp;</small></i></b></td><td><small>&nbsp;802.11v&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;BandPreference&nbsp;</small></i></b></td><td><small>&nbsp;BandPreference&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;FTOverTheDS&nbsp;</small></i></b></td><td><small>&nbsp;FTOverTheDS&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;AggregatedFT&nbsp;</small></i></b></td><td><small>&nbsp;AggregatedFT&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ScanAssist&nbsp;</small></i></b></td><td><small>&nbsp;ScanAssist&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CHD&nbsp;</small></i></b></td><td><small>&nbsp;CHD&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;SubNetRoam&nbsp;</small></i></b></td><td><small>&nbsp;SubNetRoam&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WANCountry&nbsp;</small></i></b></td><td><small>&nbsp;WANCountry&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;PasswordProtectEncryption&nbsp;</small></i></b></td><td><small>&nbsp;PasswordProtectEncryption&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;MACRandomization&nbsp;</small></i></b></td><td><small>&nbsp;MACRandomization&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;CallAdmissionControl&nbsp;</small></i></b></td><td><small>&nbsp;CallAdmissionControl&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;EnableAmpdu&nbsp;</small></i></b></td><td><small>&nbsp;EnableAmpdu&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;GratuitousARP&nbsp;</small></i></b></td><td><small>&nbsp;GratuitousARP&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ChannelBondingMode2g&nbsp;</small></i></b></td><td><small>&nbsp;ChannelBondingMode2g&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;WLANExtendedConfig&nbsp;</small></i></b></td><td><small>&nbsp;WLANExtendedConfig&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




##### Custom Name






Enter a custom name that identifies a single advanced option to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the advanced option identified by the specified name.




**Detail Information:**


- Key = wlanAdvancedOptionCustomName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




##### Value






Enter a value for a single advanced option to be configured for the WLAN adapter on a device and should be specified when **Name** or **Custom Name** are specified to provide the name of the advanced option.




**Detail Information:**


- Key = wlanAdvancedOptionValue


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.4.




### Diagnostics Options






Use this *Sub-group* to specify one or more *Diagnostic Options* to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanDiagnosticsOptions


- Type = bundle_array




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




#### Option Pair






Use this *Sub-group* to specify a name and value for a single *Diagnostic Option* to be configured for the WLAN adapter on a device.




**Detail Information:**


- Key = wlanDiagnosticsOptionPair


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Name






Select a standard name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the *Diagnostic Option* identified by the specified name.




**Detail Information:**


- Key = wlanDiagnosticsOptionName


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;FusionAdvancedLogging&nbsp;</small></i></b></td><td><small>&nbsp;FusionAdvancedLogging&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Name Custom






Enter a custom name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a device. You must also specify **Value** to provide the value to be set for the *Diagnostic Option* identified by the specified name.




**Detail Information:**


- Key = wlanDiagnosticsOptionCustomName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




##### Value






Enter a value for a single *Diagnostic Option* to be configured for the WLAN adapter on a device. You must also specify **Name** or **Name Custom** to provide the name that identifies the *Diagnostic Option* to be set.




**Detail Information:**


- Key = wlanDiagnosticsOptionValue


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### Network Notification






Select whether the Device User will be notified about, and allowed to connect to, new WLANs that are detected.




- If the value ***Off*** is selected, the Device User will NOT be notified about, nor allowed to connect to, new WLANs that are detected.




- If the value ***On*** is selected, the Device User will be notified about, and allowed to connect to, new WLANs that are detected.




**Detail Information:**


- Key = wlanNetworkNotification


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.1.




-----
## Wireless WAN Configuration






Use this *Group* to configure Wireless Wide Area Network (WWAN) settings on a device.




**Detail Information:**


- Key = wwanStep


- Type = bundle




### Power






Select the Power State of the WWAN Adapter.




A given device may or may not support a WWAN Adapter. An attempt to configure the WWAN Adapter on a device that does not have one will result in an error.




**Detail Information:**


- Key = wwanPower


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.3.




### Background Data






Select whether WWAN data can be used by applications that are in the *Background*.
- If the value ***Disallow*** is selected, the use of WWAN data by applications that are in the *Background* will be prevented.
- If the value ***Allow*** is selected, the use of WWAN data by applications that are in the *Background* will be allowed.




**Detail Information:**


- Key = wwanBackgroundData


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 4.3.




### State






Select the Power Srate of the WWAN adapter.
- If the value ***Off*** is selected, the power to the WWAN adapter will be turned OFF, preventing all communications via the WWAN adapter and reducing battery drain.
- If the value ***On*** is selected, the power to the WWAN adapter will be turned ON, potentially allowing communications via the WWAN adapter and increasing battery drain.




**Detail Information:**


- Key = wwanDataState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### SIM Card Slot






Select the SIM Card slot that will be used by the WWAN adapter.








A given device may or may not support a WWAN Adapter. An attempt to configure the WWAN Adapter on a device that does not have one will result in an error. A given device may have a limited number of SIM Card slots. An attempt to configure the WWAN Adapter to use an unsupported SIM Card slot will result in an error. A given device may support a given SIM car slot, but that SIM car slot may not contain a SIM Card. An attempt to configure the WWAN Adapter to use a supported but unpopulated SIM Card slot will result in an error.
- If the value ***Slot 1*** is selected, the WWAN adapter will attempt to use the SIM Card slot designated as Slot 1.




- If the value ***Slot 2*** is selected, the WWAN adapter will attempt to use the SIM Card slot designated as Slot 2.




- If the value ***Slot 3*** is selected, the WWAN adapter will attempt to use the SIM Card slot designated as Slot 3.




- If the value ***Slot 4*** is selected, the WWAN adapter will attempt to use the SIM Card slot designated as Slot 4.




**Detail Information:**


- Key = wwanSimCardSlot


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Slot 1&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Slot 2&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Slot 3&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Slot 4&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 6.2.




### Data Limit State






Select whether a limit should be imposed on the amount of WWAN data used, such as to cap telecom expenses.
- If the value ***Enable and set default limit*** is selected, a default limit will be imposed on the amount of WWAN data that can be used.
- If the value ***Enable and set custom limit*** is selected, a custom limit will be imposed on the amount of WWAN data that can be used and you must also specify **Custom Limit** to provide the desired custom limit.
- If the value ***Disable*** is selected, no limit will be imposed on the amount of WWAN data that can be used.




**Detail Information:**


- Key = wwanDataLimitState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Enable and set default limit&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Enable and set custom limit&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Disable&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### Custom Limit






Enter a custom limit that should be imposed on the amount of WWAN data used, such as to cap telecom expenses, when the value ***Enable and set custom limit*** is selected for **Data Limit State**.




The custom limit should be an integer value specifying the maximum amount of WWAN data that can be used, in megabytes (MB).




**Detail Information:**


- Key = wwanDataLimitStateCustomLimit


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### Data Warning Threshold






Enter a threshold such that if the amount of WWAN data that has been used exceeds that threshold then a warning will be generated to the Device User.








The threshold should be an integer value specifying the threshold amount of WWAN data, in megabytes (MB).




**Detail Information:**


- Key = wwanDataWarningThreshold


- Type = integer




**Support Information:**


- Supported from: MX 6.3.




### User Control of Background Data






Select whether a Device User is allowed to use the in-device Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter.




- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to change whether applications running in the background are allowed to communicate using the WWAN adapter. You can use this to ensure that configurations you have made related to usage of background data cannot be overridden by the Device User.




- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to allow the Device User to override configurations related to usage of background data that you have made.




**Detail Information:**


- Key = wwanUserControlBackgroundData


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 4.4.




### User Control of Data Limit






Select whether a Device User is allowed to use the in-device Settings Menu to change limits on how much data can be communicated using the WWAN adapter.




- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to change limits on how much data can be communicated using the WWAN adapter. This can be used to ensure that configurations you have made related to to data limits cannot be overridden by the Device User.




- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to change limits on how much data can be communicated using the WWAN adapter. This can be used to allow the Device User to override configurations related to data limits that you have made.




**Detail Information:**


- Key = wwanUserControlDataLimit


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### User Control of Power






Select whether a Device User is allowed to use the in-device Settings Menu to change the *Power State* of the WWAN adapter.
- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to change the *Power State* of the WWAN adapter. This can be used to ensure that the configurations related to the *Power State* of the WWAN adapter cannot be overridden by the Device User.
- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to change the *Power State* of the WWAN adapter. This can be used to allow the Device User to override configurations related to the *Power State* of the WWAN adapter that you have made.




**Detail Information:**


- Key = wwanUserControlPower


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.3.




### User Control of Sim Socket






Select whether a Device User is allowed to use the in-device Settings Menu to select which SIM slot will be used by the WWAN adapter.
- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to select which SIM slot will be used by the WWAN adapter. This can be used to ensure that configurations related to the SIM slot selection cannot be overridden by the Device User.
- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to select which SIM slot will be used by the WWAN adapter. This can be used to allow the Device User to override configurations related to the SIM slot selection that you have made.




**Detail Information:**


- Key = wwanUserControlSimSocket


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 6.2.




### Public Land Mobile Network Lock






Select whether the WWAN adapter should be locked to a single Public Land Mobile Network Lock (PLMN).
- If the value ***Off*** is selected, the WWAN adapter will NOT be locked to a single Public Land Mobile Network Lock (PLMN) and will be free to connect to any PLMN that is compatible with the SIM Card being used.
- If the value ***On*** is selected, the WWAN adapter will be locked to a single Public Land Mobile Network Lock (PLMN) and will only be able to connect to that PLMN. You must also specify **Value** to provide the value that identifies the PLMN to which the WWAN adapter should be locked.




**Detail Information:**


- Key = wwanPlmnLock


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Value






Enter the value that identifies the Public Land Mobile Network Lock (PLMN) to which the WWAN adapter should be locked when the value ***On*** is selected for **Public Land Mobile Network Lock**. to a single Public Land Mobile Network Lock (PLMN).




The value provided to identify a PLMN must specify both the Mobile Country Code (MCC) and the Mobile Network Code (MNC). Since all MCC values are three digits and MNC values can be 2 or 3 digits, the value provided must be of the format XXXYY or XXXYYY, where XXX is the three digit MCC value and YY or YYY is the 2 or 3 digit MNC value.




**Detail Information:**


- Key = wwanPlmnLockValue


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### User Control of Public Land Mobile Network Lock






Select whether a Device User is allowed to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN).
- If the value ***Disallow*** is selected, the Device User will be blocked from using the Settings UI to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to ensure that configurations related to locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) cannot be overridden by the Device User.
- If the value ***Allow*** is selected, the Device User will be allowed to use the Settings UI to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to allow the Device User to override any configurations related to locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) that you have made.




**Detail Information:**


- Key = wwanUserControlPlmnLock


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Dual SIM Dual Standby Mode






Select whether the WWAN adapter should handle multiple SIM Card(s) in Dual SIM Dual Standby (DSDS) Mode.




- If the value ***Off*** is selected, the WWAN adapter will be configured to handle multiple SIM Card(s) in Single SIM Mode, which means that only one SIM at a time will be usable for all carrier services. To use a different SIM, the current SIM will need to be switched and ALL carrier services will switch to the new SIM.




- If the value ***On*** is selected, the WWAN adapter will be configured to handle multiple SIM Card(s) in Dual SIM Dual Standby Mode, which means that two SIM Cards, if present, can be used at the same time, but only one SIM can be chosen for each carrier service. For example, one SIM might be used for voice calls and text messages while the other SIM might be used for data. This can be beneficial if the carriers associated with those SIMs have different performance, pricing, coverage, etc. for various carrier services.




**Detail Information:**


- Key = wwanDualSimDualStandby


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.1.




### Device Administrator Advanced Features






Use this *Sub-group* to configure Device Administrator (DA) Advanced Features as part of Wireless WAN configuration.




**Detail Information:**


- Key = wwanDaAdvancedFeatures


- Type = bundle




**Support Information:**


- Supported from: MX 9.2.




#### Lock Action






Select the Lock Action to be performed.
- If the value ***Lock*** is selected, you must also specify **Lock Type**, **Lock Unlock Code**, **Lock Unlock Retry Count**, and **Lock Network List** to provide the detail information required to perform the Lock. You must also specify **Lock ICCID** if the value ***ICCID Lock*** is selected for **Lock Type**.
If the value ***Unlock*** is selected, you must also specify **Lock Type** to identify the type of prior Lock to be Unlocked and you must also specify **Lock Unlock Code** to provide the same *Unlock Code* provided when the Lock was performed.




**Detail Information:**


- Key = wwanDaLockAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Lock&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unlock&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.2.




#### Lock Type






Select the Lock Type to be used for a Lock Action to be performed.




**Detail Information:**


- Key = wwanDaLockActionLockType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Network Lock&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ICCID Lock&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.2.




#### Lock Unlock Code






Enter a string value to use as the Unlock Code for a Lock Action. The same value will need to be provided to perform a subsequent Unlock Action.




**Detail Information:**


- Key = wwanDaLockActionLockUnlockCode


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock Unlock Retry Count






Enter the integer Retry Count, from 1-99, for a Lock Action, indicating the maximum number of times a subsequent Unlock Action can be attempted unsuccessfully before disallowing Unlock.




**Detail Information:**


- Key = wwanDaLockActionLockUnlockRetryCount


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock Network List






Enter the Network List, as one or more MCC or MNC values, identifying the network(s) to which a device should be Locked. To provide multiple values, separate with commas (e.g. 1,310410,31012).




**Detail Information:**


- Key = wwanDaLockActionLockNetworkList


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock ICCID






Enter the ICCID, also known as the SIM Card identifier, identifying the ICCID/SIM Card to which a device should be Locked.




**Detail Information:**


- Key = wwanDaLockActionLockIccid


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Unlock Type






Select the the Unlock Type to be used for a Unlock Action to be performed. This should match the Lock Type of the prior Lock Action to be reversed.




**Detail Information:**


- Key = wwanDaLockActionUnlockType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Network Unlock&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;ICCID Unlock&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.2.




#### Unlock Unlock Code






Enter a string value to use as the Unlock Code for an Unlock Action. This must be the same value previously specified for the Lock Action to be reversed.




**Detail Information:**


- Key = wwanDaLockActionUnlockUnlockCode


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Mobile Network Operator Advanced Features






Use this *Sub-group* to configure Mobile Network Operator (MNO) Advanced Features as part of Wireless WAN configuration.




**Detail Information:**


- Key = wwanMnoAdvancedFeatures


- Type = bundle




**Support Information:**


- Supported from: MX 9.2.




#### Lock Action






Select the Lock Action to be performed.




- If the value ***Lock*** is selected, you must also specify **Lock Activation ID**, **Lock Control Key**, **Lock Network List**, and **Lock Unlock Retry Count** to provide the detail information required to perform the Lock.




- If the value ***Unlock*** is selected, you must also specify **Unlock Unlock Code** to provide the device-specific *Unlock Code* provided by the MNO that Locked the device and that is required to reverse the Lock.




**Detail Information:**


- Key = wwanMnoLockAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Lock&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Unlock&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 9.2.




#### Lock Activation ID






Enter the Activation ID that will grant the MNO the permission to perform a Lock Action. The Activation ID must be acquired by an MNO from Zebra and typically will be tied to a set of pre-defined device identities and will enable an MNO to Lock those devices but no others.




**Detail Information:**


- Key = wwanMnoLockActionLockActivationId


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock Control Key






Enter the Control Key that will later be used to create Unlock Codes for devices Locked using that Control Key. An MNO can later use a tool provided by Zebra to produce individual one-time-use Unlock Codes that can be used to Unlock individual devices that were previously Locked by that MNO using that Control Key.




**Detail Information:**


- Key = wwanMnoLockActionLockControlKey


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock Unlock Retry Count






Enter the integer Retry Count, from 1-99, for a Lock Action, indicating the maximum number of times a subsequent Unlock Action can be attempted unsuccessfully before disallowing Unlock.




**Detail Information:**


- Key = wwanMnoLockActionLockUnlockRetryCount


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Lock Network List






Enter the Network List, as one or more MCC or MNC values, identifying the network(s) to which a device should be Locked. To provide multiple values, separate with commas (e.g. 1,310410,31012).




**Detail Information:**


- Key = wwanMnoLockActionLockNetworkList


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Unlock Unlock Code






Enter a string value to use as the Unlock Code for an Unlock Action. This must be a device-specific value provided by the MNO that originally performed the Lock Action to be reversed.




**Detail Information:**


- Key = wwanMnoLockActionUnlockUnlockCode


- Type = string




**Support Information:**


- Supported from: MX 9.2.




### Service Technician Advanced Features






Use this *Sub-group* to configure Service Technician Advanced Features as part of Wireless WAN configuration.




**Detail Information:**


- Key = wwanSvcAdvancedFeatures


- Type = bundle




**Support Information:**


- Supported from: MX 9.2.




#### Activation ID






Enter the Activation ID that will grant the Service Technician the permission to perform a Service operation. The Activation ID must be acquired by a Service Technician from Zebra.




**Detail Information:**


- Key = wwanSvcActivationId


- Type = string




**Support Information:**


- Supported from: MX 9.2.




#### Export Lock Info






Select whether the current MNO Lock Information will be Exported and stored to a file on the SD Card of the device.




**Detail Information:**


- Key = wwanSvcExport


- Type = boolean




**Support Information:**


- Supported from: MX 9.2.




#### Wipe Lock Info






Select whether the current MNO Lock Information will be Wiped, thus forcing the device to return to an Unlocked state.




**Detail Information:**


- Key = wwanSvcWipe


- Type = boolean




**Support Information:**


- Supported from: MX 9.2.




#### Import Lock Info






Select whether MNO Lock Information will be Imported from a file stored on the SD Card of the device and used to Lock a device based on information previously Exported from the same or a different device.




**Detail Information:**


- Key = wwanSvcImport


- Type = boolean




**Support Information:**


- Supported from: MX 9.2.




-----
## Worry Free WiFi Configuration






Use this *Group* to configure the Worry Free WiFi features in a device.




**Detail Information:**


- Key = wfWiFiStep


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




### State






Select the state of the Worry Free WiFi features in a device.
- If the value ***Off*** is selected, all Worry Free WiFi features will be turned off (disabled).
- If the value ***On*** is selected, all Worry Free WiFi features will be turned on (enabled), but may or may not be usable, depending on other configuration performed.




**Detail Information:**


- Key = wfWiFiState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Global Settings






Use this *Sub-group* to configure Global Settings that control Worry Free WiFi behavior in a device.




**Detail Information:**


- Key = wfWiFiGlobalSettings


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




#### Existing Password






Enter the Existing Password to enabling changing that Password.




**Detail Information:**


- Key = wfWiFiExistingPassword


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Password Value






Enter the Password Value required by the Device User to access the in-device UI for configuring Worry Free WiFi features in a device.




**Detail Information:**


- Key = wfWiFiPassword


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### Worry Free WiFi Configuration - Global Settings Temporary Password Allow






Select whether a Temporary Password feature will be Allowed or Disallowed.
- If the value ***Disallow*** is selected, the Temporary Password feature will NOT be Allowed and you do not need to specify any additional information.
- If the value ***Allow*** is selected, the Temporary Password feature WILL be Allowed and you must also specify **Worry Free WiFi Configuration - Global Settings Temporary Password Duration** and **Worry Free WiFi Configuration - Global Settings Temporary Password Duration** to provide the Temporary Password Value and the Duration for which the Temporary Password Feature may be used.




**Detail Information:**


- Key = wfWiFiTemporaryPasswordState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




#### Worry Free WiFi Configuration - Global Settings Temporary Password Duration






Enter a duration in hours after which a Temporary Password expires and must be replaced with a new one.




**Detail Information:**


- Key = wfWiFiTemporaryPasswordDuration


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




#### Temporary Password Value






Enter a Temporary Password that can be shared with a Device User to provide temporary and limited access to configure Worry Free WiFi to collect packets and encrypt those packets without having to share the full administrative password (which provides full access and never expires).




**Detail Information:**


- Key = wfWiFiTemporaryPassword


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.2.




#### Device User Control






Select whether the Device User can access in-device UI for configuring Worry Free WiFi features in a device.
- If the value ***Disallow*** is selected, the Device User will NOT be allowed to access in-device UI for configuring Worry Free WiFi features, even if they can enter the Password configured via **Password Value**.
- If the value ***Allow*** is selected, the Device User will be allowed to access in-device UI for configuring Worry Free WiFi features, if they can enter the Password configured via **Password Value**.




**Detail Information:**


- Key = wfWiFiDeviceUserControl


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Disallow&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Allow&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Analysis Type






Select the *Analysis Type* that will be used by the Worry Free WiFi features in a device.
- If the value ***Roam*** is selected, Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to roaming.
- If the value ***Voice*** is selected, then Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to voice communications.
- If the value ***Connection*** is selected, then Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to establishing connections.




**Detail Information:**


- Key = wfWiFiAnalysisType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Roam&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Voice&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Connection&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Action






Select an Action to perform Worry Free WiFi features in a device.
- If the value ***Start*** is selected, a Worry Free WiFi *Analysis Session* will be started, terminating any Worry Free WiFi *Analysis Session* that was previously in progress. You may also need to be specify some or all of the following:
- **Start Server Analytics** to specify whether Server Analytics should be performed for the *Analysis Session*.
- **Start Activity Mode** to specify the Activity Mode for the *Analysis Session*.
- **Start Analysis SSID** to specify the network for the *Analysis Session*.
- **Start Session Name** to specify the name for the *Analysis Session*.
- **Start Logger Report Level** to specify the Logger Report Level for the *Analysis Session*.
- **Start Ping Type** to specify the Ping Type for the *Analysis Session*.
- **Start Remote Gateway Type** to specify the Remote Gateway Type for the *Analysis Session*.
- **Custom Server Address** to specify the Custom Server Address for the *Analysis Session*.
- **Start SD Card Storage** to specify how SD Card Storage will be used for the *Analysis Session*.
- If the value ***Stop*** is selected, any Worry Free WiFi *Analysis Session* that is in progress will be terminated.
- If the value ***Clear*** is selected, any data accumulated from a Worry Free WiFi *Analysis Session* will be discarded.
- If the value ***Export*** is selected, the current Worry Free WiFi configuration will be exported and stored in a file in the device file system.




**Detail Information:**


- Key = wfWiFiAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Start&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stop&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Export&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Server Analytics






Select whether Server Analytics should be performed during an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***Turn Off*** is selected, Server Analytics will NOT be performed during the *Analysis Session* that is started.
- If the value ***Turn On*** is selected, Server Analytics will be performed during the *Analysis Session* that is started.




**Detail Information:**


- Key = wfWiFiActionStartServerAnalytics


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Turn Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Turn On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Activity Mode






Select the Activity Mode for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***Foreground*** is selected, Analysis will be performed as a foreground task during the *Analysis Session* that is started.
- If the value ***Background*** is selected, Analysis will be performed as a background task during the *Analysis Session* that is started.




**Detail Information:**


- Key = wfWiFiActionStartActivityMode


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Foreground&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Background&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Analysis SSID






Enter the network that will be used for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.




Note that if an *Analysis Session* is started for a network other than the currently configured network, the currently connected network will be disconnected so the specified network can be connected for use by the *Analysis Session*.




**Detail Information:**


- Key = wfWiFiActionStartAnalysisSSID


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Session Name






Enter the name of the *Analysis Session* to be started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.








The name assigned to an *Analysis Session* can help to analyze exported data by identifying the *Analysis Session* during which the data was collected.




**Detail Information:**


- Key = wfWiFiActionStartSessionName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Logger Report Level






Select the Logger Report Level for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***Info*** is selected, all available data will be logged, including data that is informational as well as data related to warnings or errors that are detected.
- If the value ***Warning*** is selected, only data that is related to warnings or errors that are detected will be logged.
- If the value ***Error*** is selected, only data that is related to errors that are detected will be logged.




**Detail Information:**


- Key = wfWiFiActionStartLoggerReportLevel


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Info&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Warning&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Error&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Ping Type






Select the Ping Type for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***No Data*** is selected, Pings sent during the *Analysis Session* that is started will include no data.
- If the value ***Data Ping*** is selected, Pings sent during the *Analysis Session* that is started will include data.




**Detail Information:**


- Key = wfWiFiActionStartPingType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;No Data&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Data Ping&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start Remote Gateway Type






Select the Type of Remote Gateway for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***Default*** is selected, the Default Remote Gateway will be used.
- If the value ***Custom*** is selected, a custom Remote Gateway will be used and you must also specify **Custom Server Address** to provide the desired custom Gateway Server Address.




**Detail Information:**


- Key = wfWiFiActionStartRemoteGatewayType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Default&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Custom&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Custom Server Address






Enter the Custom Remote Gateway Server Address for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action** and if the value ***Custom*** is selected for **Start Remote Gateway Type**.




**Detail Information:**


- Key = wfWiFiActionStartRemoteGatewayTypeCustomServerAddress


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Start SD Card Storage






Select how SD Card Storage will be used for an *Analysis Session* started for the Worry Free WiFi feature when the value ***Start*** is selected for **Action**.
- If the value ***Only Live Data*** is selected, only the most recent data from the new *Analysis Session* will be stored in the SD Card and will replace any prior *Analysis Session* data stored.
- If the value ***Delete old Ping and Packet Data*** is selected, old Ping and Packet Data will be deleted and replaced by any new Ping and Packet Data for the new *Analysis Session*.
- If the value ***Delete old Sessions*** is selected, any data generated by any prior *Analysis Sessions* will be deleted and replace by the data from the new*Analysis Session*.




**Detail Information:**


- Key = wfWiFiActionStartSdCardStorage


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Only Live Data&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Delete old Ping and Packet Data&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Delete old Sessions&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




### Packet Capture






Use this *Sub-group* to configure Settings that control the operation of Packet Capture by the Worry Free WiFi feature in a device.




**Detail Information:**


- Key = wfWiFiPacketCapture


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### State






Select whether Packet Capture will be performed by the Worry Free WiFi feature in a device.
- If the value ***Off*** is selected, the Packet Capture will NOT be performed. This can significantly decrease the load on the device and decrease battery drain, but will provide less data that can be used for troubleshooting.
- If the value ***On*** is selected, the Packet Capture will NOT be performed. This can significantly increase the load on the device and increase battery drain, but will provide additional data that can be used for troubleshooting.




**Detail Information:**


- Key = wfWiFiPacketCaptureState


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### On File Name






Enter the file name of the file into which Packet Capture data will be stored by the Worry Free WiFi feature in a device when the value ***On*** is selected for **State**.




**Detail Information:**


- Key = wfWiFiPacketCaptureStateOnFileName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### On Max File Size






Enter the maximum size of the file into which Packet Capture data (in megabytes) will be stored by the Worry Free WiFi feature in a device when the value ***On*** is selected for **State**.




**Detail Information:**


- Key = wfWiFiPacketCaptureStateOnMaxFileSize


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### On Max Storage Size






Enter the maximum amount of Packet Capture data (in megabytes) that will be stored by the Worry Free WiFi feature in a device when the value ***On*** is selected for **State**.




**Detail Information:**


- Key = wfWiFiPacketCaptureStateOnMaxStorageSize


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 8.3.




#### Type






Select the *Package Capture Type* that will be control the type of Packets that will be captured by the Worry Free WiFi features in a device when **State** is used to enable Packet Capture.
- If the value ***Management Only*** is selected, Worry Free WiFi will only capture *Management Packets*.
- If the value ***All*** is selected, Worry Free WiFi will capture ALL Packets, including Packets that might contain sensitive data.




**Detail Information:**


- Key = wfWiFiPacketCaptureType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Management Only&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;All&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




### Coverage View






Use this *Sub-group* to configure Settings that control the operation of Coverage View by the Worry Free WiFi feature in a device.




**Detail Information:**


- Key = wfWiFiCoverageView


- Type = bundle




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Scan Feature Type






Select the *Scan Feature Type* that will control the type of Scanning that will be performed by Worry Free WiFi as part of *Coverage View* in a device.
- If the value ***Coverage View*** is selected, Worry Free WiFi will perform full scanning as required to support *Coverage View*.
- If the value ***Scan*** is selected, then Worry Free WiFi will perform more limited scanning.




**Detail Information:**


- Key = wfWiFiScanFeatureType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Coverage View&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Scan&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Action






Select an Action to perform for Coverage View.
- If the value ***Start*** is selected, a Worry Free WiFi *Analysis Session* will be started, terminating any Worry Free WiFi *Analysis Session* that was previously in progress. You may also need to specify some or all of the following:
- **Start Scan Interval** to specify the Scan Interval to use for *Coverage View*.
- **Start SSID** to specify the SSID to use for *Coverage View*.
- **Start Auto Reachability Test** to specify whether an Auto Reachability Test should be performed as part of *Coverage View*.
- **Start Auto Reachability Test** to specify whether Server Analytics should be performed as part of *Coverage View*.
- **Start Session Name** to specify the Session Name to use for *Coverage View*.




  - **Start Session Name** to specify whether SD Card Storage will be used for *Coverage View*.
- If the value ***Stop*** is selected, any Worry Free WiFi *Analysis Session* that is in progress will be terminated.
- If the value ***Clear*** is selected, any data accumulated from a Worry Free WiFi *Analysis Session* will be discarded.
- If the value ***Export*** is selected, the current Worry Free WiFi configuration will be exported and stored in a file in the device file system.




**Detail Information:**


- Key = wfWiFiCoverageViewAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Start&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Stop&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Clear&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Export&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Start SSID






Enter the SSID that identifies the network to be used for Coverage View.




**Detail Information:**


- Key = wfWiFiCoverageViewActionStartSsid


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Start Scan Interval






Enter the *Scan Interval* to be used for Coverage View.




**Detail Information:**


- Key = wfWiFiCoverageViewActionStartScanInterval


- Type = integer




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Start Auto Reachability Test






Select whether an Auto Reachability Test should be performed as part of Coverage View.
- If the value ***Off*** is selected, then Worry Free WiFi will NOT perform an Auto Reachability Test as part of Coverage View each time a Roam occurs.
- If the value ***On*** is selected, Worry Free WiFi will perform an Auto Reachability Test as part of Coverage View each time a Roam occurs.




**Detail Information:**


- Key = wfWiFiCoverageViewActionStartAutoReachabilityTest


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Start Server Analytics






Select whether Server Analytics should be performed by Worry Free WiFi as part of Coverage View when the value ***Start*** is selected for **Action**.
- If the value ***Off*** is selected, Worry Free WiFi will NOT perform Server Analytics as part of Coverage View.
- If the value ***On*** is selected, Worry Free WiFi will perform Server Analytics as part of Coverage View.




**Detail Information:**


- Key = wfWiFiCoverageViewActionStartServerAnalytics


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Off&nbsp;</small></i></b></td><td><small>&nbsp;0&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;On&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr></table>




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




#### Start Session Name






Enter a *Session Name* that should be used by Worry Free WiFi as part of Coverage View when the value ***Start*** is selected for **Action**.




**Detail Information:**


- Key = wfWiFiCoverageViewActionStartSessionName


- Type = string




**Support Information:**


- NOT supported on Device(s): TC20 and TC25.




- Supported from: MX 9.1.




-----
## Zebra Licensing Configuration






Use this *Group* to manage Zebra-issued licenses on a device.




**Detail Information:**


- Key = zebraLicenseStep


- Type = bundle




**Support Information:**


- Supported from: MX 8.1.




### License Action






Select an Action to manage Zebra-issued licenses on a device.
- If the value ***Activate License*** is selected, a license will be activated, making it usable on the device. You must also specify **Activate License Method**, **From Server AID Value**, **From Server Standard Class**, **From Server Custom Class**, **From Server Custom URL**, **From Server Custom Friendly Name**, **From Local File Path and Name**, and **From Local File Source Server Class** to define the license to be activated and how that license should be activated.
- If the value ***Return License*** is selected, a previously activated license will be returned, allowing it to be re-allocated for use on another device. You must also specify **Return License Server Type**, **Friendly Name**, and **Return License AID Value** to define the license to be returned and how that license should be returned.
- If the value ***Return All Licenses*** is selected, all licenses previously activated from a given *License Server* will be returned, allowing them to be re-allocated for use on other devices. You must also specify **Return All Licenses Server Type** and **Friendly Name** to define how the licenses were acquired and therefore to identify which licenses should be returned and how they should be returned.
- If the value ***Refresh License*** is selected, a previously activated license will be refreshed, updating anything that may have changed, such as its expiration date, capabilities, etc. You must also specify **Refresh License AID Value** to provide the license to be refreshed.
- If the value ***Delete Server*** is selected, a previously defined *Custom Server*, along with all licenses allocated via that *Custom Server*, will be deleted. You must also specify **Delete Server Friendly Name** to provide the *Friendly Name* that identifies the *Custom Server* to be deleted.




**Detail Information:**


- Key = zebraLicenseAction


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Activate License&nbsp;</small></i></b></td><td><small>&nbsp;Activate&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Return License&nbsp;</small></i></b></td><td><small>&nbsp;Return&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Return All Licenses&nbsp;</small></i></b></td><td><small>&nbsp;Reset&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Refresh License&nbsp;</small></i></b></td><td><small>&nbsp;Refresh&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Delete Server&nbsp;</small></i></b></td><td><small>&nbsp;DeleteLicenseSource&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Activate License Method






Select the method that should be used to activate a Zebra-issued license a device when the value ***Activate License*** is selected for **License Action**.
- If the value ***From Server Standard*** is selected, the license will be activated from a Standard Server and you must also specify **From Server Standard Class** to provide the class of Standard Server via which the license will be activated and you must also specify **From Server AID Value** to identify the license to be activated.
- If the value ***From Server Custom*** is chose, the license will be activated from a Custom Server and you must also specify **From Server Custom Class** to provide the class of Custom Server via which the license will be activated and you must also specify **From Server AID Value** to identify the license to be activated. You may also specify **From Server Custom URL** depending on the value selected for **From Server Custom Class**.
- If the value ***From Local File*** is selected, the license will be activated from a license file stored in the device file system and you must also specify **From Local File Path and Name** and **From Local File Source Server Class** to provide the license file and the class of Server from which the license file was acquired.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethod


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;From Server Standard&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;From Server Custom&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;From Local File&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### From Server AID Value






Enter the Activation Identifier (AID) that identifies a Zebra-issued license to be activated on a device when the value ***Activate License*** is selected for **License Action**.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromServerAidValue


- Type = string




**Support Information:**


- Supported from: MX 7.1.




### From Server Standard Class






Select the Class of Standard Server via which a Zebra-issued license will be activated on a device when the value ***Activate License*** is selected for **License Action** and the value ***From Server Standard*** is selected for **Activate License Method**.
- If the value ***Production Cloud Direct*** is selected, the license will be activated by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet. The Production Server should be used when deploying licenses to devices for production use.
- If the value ***Test Cloud Direct*** is selected, the license will be activated by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet. The Test Server should be used when tested the deployment of licenses to devices to avoid consuming actual production licenses.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromServerStandardClass


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Production Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Test Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### From Server Custom Class






Select the Class of Custom Server via which a Zebra-issued license will be activated on a device when the value ***Activate License*** is selected for **License Action** and the value ***From Server Custom*** is selected for **Activate License Method**.
- If the value ***Production Cloud Proxy*** is selected, the license will be activated by communicating to a Production *Zebra License Server* at a fixed known location on the Internet via a *Local Proxy Server*. You must also specify **From Server Custom URL** to provide the *Local Proxy Server* to be used.
- If the value ***Test Cloud Proxy*** is selected, the license will be activated by communicating to a Test *Zebra License Server* at a fixed known location on the Internet via a *Local Proxy Server*. You must also specify **From Server Custom URL** to provide the *Local Proxy Server* to be used.
- If the value ***Local Direct*** is selected, the license will be activated by communicating to a *Local License Server*. You must also specify **From Server Custom URL** to provide the *Local License Server* to be used.
- If the value ***Other*** is selected, the license will be activated by communicating to some other Server. You must also specify **From Server Custom URL** to provide the Server to be used.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromServerCustomClass


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Production Cloud Proxy&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Test Cloud Proxy&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Local Direct&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Other&nbsp;</small></i></b></td><td><small>&nbsp;4&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### From Server Custom URL






Enter the URL of a Custom Server via which a Zebra-issued license will be activated on a device when the value ***Activate License*** is selected for **License Action** and the value ***From Server Custom*** is selected for **Activate License Method**.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromServerCustomUrl


- Type = string




**Support Information:**


- Supported from: MX 7.1.




### From Server Custom Friendly Name






Enter a *Friendly Name* for a Custom Server via which a Zebra-issued license will be activated on a device when the value ***Activate License*** is selected for **License Action** and the value ***From Server Custom*** is selected for **Activate License Method**.




A *Friendly Name* is kept for each Custom Server used to acquire licenses and is used when later operating on such licenses to identify the Custom Server via which a license was acquired and hence via which it must be refreshed, returned, etc. The *Friendly Name* is also used to identify a Custom Server to be deleted.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromServerCustomFriendlyName


- Type = string




**Support Information:**


- Supported from: MX 7.1.




### From Local File Path and Name






Enter the local path and file name of a license file in the device file system from a which a Zebra-issued license will be activated on a device when the value ***Activate License*** is selected for **License Action** and the value ***From Local File*** is selected for **Activate License Method**. You must also specify **From Local File Source Server Class** to identify the class of Server from which the license file was acquired, which could impact how it is processed.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromLocalFilePathAndName


- Type = string




**Support Information:**


- Supported from: MX 7.1.




### From Local File Source Server Class






Select the class of Server from which the license file to be activated was acquired when the value ***Activate License*** is selected for **License Action** and when the value ***From Local File*** is selected for **Activate License Method** and when **From Local File Path and Name** is specified.




**Detail Information:**


- Key = zebraLicenseActionActivateLicenseMethodFromLocalFileSourceServerClass


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Production Cloud&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Test Cloud&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 7.1.




### Return License Server Type






Select the Type of Standard Server via which a Zebra-issued license was activated on a device and therefore via which it should be returned, when the value ***Return License*** is selected for **License Action**.
- If the value ***Production Cloud Direct*** is selected, the license will be assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and the license will be returned by communicating directly to the same server in the same way.
- If the value ***Test Cloud Direct*** is selected, the license will be assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and the license will be returned by communicating directly to the same server in the same way.
- If the value ***Server Friendly Name*** is selected, the license will be assumed to have been activated by by communicating to a *Custom Server*. You must also specify **Friendly Name** to provide the *Friendly Name* that identifies the *Custom Server* via which the license was acquired and hence via which it should be returned.




**Detail Information:**


- Key = zebraLicenseActionReturnLicenseServerType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Production Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Test Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Server Friendly Name&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Friendly Name






Enter the *Friendly Name* that identifies the *Custom Server* via which a Zebra-issued license was activated on a device and therefore via which it should be returned, when the value ***Return License*** is selected for **License Action** and the value ***Server Friendly Name*** was selected for **Return License Server Type**.




**Detail Information:**


- Key = zebraLicenseActionReturnLicenseServerTypeFriendlyName


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Return License AID Value






Enter the Activation Identifier (AID) that identifies a Zebra-issued license to be returned on a device when the value ***Return License*** is selected for **License Action**.




**Detail Information:**


- Key = zebraLicenseActionReturnLicenseAidValue


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Return All Licenses Server Type






Select the Type of Standard Server via which a set of Zebra-issued licenses was activated on a device and therefore via which they should be returned, when the value ***Return All Licenses*** is selected for **License Action**.
- If the value ***Production Cloud Direct*** is selected, the licenses will be assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and all such licenses will be returned by communicating directly to the same server in the same way.
- If the value ***Test Cloud Direct*** is selected, the licenses will be assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and all such licenses will be returned by communicating directly to the same server in the same way.
- If the value ***Server Friendly Name*** is selected, the licenses will be assumed to have been activated by by communicating to a *Custom Server*. You must also specify **Friendly Name** to provide the *Friendly Name* that identifies the *Custom Server* via which the licenses were acquired and hence via which all such licenses should be returned.




**Detail Information:**


- Key = zebraLicenseActionReturnAllLicensesServerType


- Type = string


<table border="1"><tr align="center"><th><small>&nbsp;UI Choice&nbsp;</small></th><th><small>&nbsp;JSON Value&nbsp;</small></th></tr align="center"><tr align="center"><td><b><i><small>&nbsp;Production Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;1&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Test Cloud Direct&nbsp;</small></i></b></td><td><small>&nbsp;2&nbsp;</small></td></tr><tr align="center"><td><b><i><small>&nbsp;Server Friendly Name&nbsp;</small></i></b></td><td><small>&nbsp;3&nbsp;</small></td></tr></table>




**Support Information:**


- Supported from: MX 8.1.




### Friendly Name






Enter the *Friendly Name* that identifies the *Custom Server* via which a set of Zebra-issued licenses was activated on a device and therefore via which they should be returned, when the value ***Return All Licenses*** is selected for **License Action** and the value ***Server Friendly Name*** was selected for **Return All Licenses Server Type**.




**Detail Information:**


- Key = zebraLicenseActionReturnAllLicensesServerTypeFriendlyName


- Type = string




**Support Information:**


- Supported from: MX 8.1.




### Refresh License AID Value






Enter the Activation Identifier (AID) that identifies a Zebra-issued license to be refreshed on a device when the value ***Refresh License*** is selected for **License Action**.




**Detail Information:**


- Key = zebraLicenseActionRefreshLicenseAidValue


- Type = string




**Support Information:**


- Supported from: MX 7.1.




### Delete Server Friendly Name






Enter the *Friendly Name* that identifies the *Custom Server* to be deleted, when the value ***Delete Server*** is selected for **License Action**.




**Detail Information:**


- Key = zebraLicenseActionDeleteServerFriendlyName


- Type = string




**Support Information:**


- Supported from: MX 8.1.