# Transaction Steps Level


**Description:** 

This section describes Managed Configurations that allow an Administrator using an EMM to define an ordered list of Steps, where each Step defines specific Managed Configurations to be performed as part of an overall *Transaction*.



### Transaction Steps


**Description:** 

This Managed Configuration allows an EMM Administrator to define a sequence of *Transaction Steps*, where each *Transaction Step* will configure one or more aspects of a Zebra Android device.
Any number of *Transaction Steps* can be included within a single *Transaction* and the individual *Transactions Steps* within a *Transaction* will be executed in the order they are specified within this Managed Configuration.


**Detail Information:** 

- Key = "steps" 

- Type = bundle_array 


#### Transaction Step


**Description:** 

This Managed Configuration allows an EMM to enable an Administrator to specify a single *Transaction Step* that defines one or more Managed Configurations to be performed on a Zebra Android device as part of an overall *Transaction*.
Multiple configurations of different types can optionally be defined as part of a single *Transaction Step*, but an Administrator CANNOT control the order or execution of such configurations within a given *Transaction Step*.
- The system will execute multiple configurations within the same *Transaction Step* in an order designed to maximize the chance that all configurations can be successfully executed.
- If an Administrator needs to tightly control the order of relative execution of various configurations, they should be included into different *Transaction Steps*, at which point their order of execution can be controlled by ordering those *Transaction Steps* within the *Transaction*.
The following section **Transaction Step Level** describes the Managed Configurations that are available for an Administrator to use to define the configurations that can be perform as a part of a *Transaction Step*.


**Detail Information:** 

- Key = "step" 

- Type = bundle 


# Transaction Step Level


**Description:** 

This section describes Managed Configurations that allow an Administrator using an EMM to define the specific Managed Configuration to be performed as part of a single *Transaction Step* within a *Transaction*, to provide an *Explanation* about the *Transaction Step*, and to define how errors that occur during the processing of the *Transaction Step* will be handled.



## Explanation


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify an optional *Explanation* that describes the purpose or intended behavior of a *Transaction Step*.
Since a *Transaction* may include many *Transaction Steps* and each *Transaction Step* could include one or more configurations, describing the *Transaction Step* can be beneficial when later reviewing the *Transaction* and/or when editing a *Transaction*, and especially when reordering the *Transaction Steps* within the *Transaction*.


**Detail Information:** 

- Key = "stepExplanation" 

- Type = string 


## Error Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide an *Error Mode* that determines how errors that occur during the execution of a *Transaction Step* should be handled.
Since a *Transaction* may include multiple *Transaction Steps*, there may be cases where one *Transaction Step* within a *Transaction* is dependent on configuration performed by one or more preceding *Transaction Steps* in the same *Transaction*. In such cases, it may be desirable to terminate a *Transaction* if the processing of a *Transaction Step* results in an error to avoid propagating the results of that error into subsequent *Transaction Steps*.
By default, execution will continue with the next *Transaction Step* once execution of the current *Transaction Step* is completed. A decision to override this default behavior can be made independently for each *Transaction Step* within a *Transaction* by supplying an *Error Mode* value:
- If the value ***Continue*** is chosen, then the default behavior will be used and hence any errors that occur during the execution of the current *Transaction Step* will NOT terminate execution of subsequent *Transaction Steps* in the same *Transaction*. Execution will thus always continue with the next *Transaction Step* once execution of the current *Transaction Step* is completed.
- If the value ***Stop*** is chosen, then the default behavior will be overridden and hence any errors that occur during the execution of the current *Transaction Step* will terminate execution of subsequent *Transaction Steps* in the same *Transaction*. Execution will continue with the next *Transaction Step* only if execution of the current *Transaction Step* completes with NO errors.


**Detail Information:** 

- Key = "stepErrorMode" 

- Type = string 

- Choices = ***Stop*** , ***Continue*** 


## Analytics Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device.


**Detail Information:** 

- Key = "analyticsStep" 

- Type = bundle 


### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Analytics Client on a Zebra Android device is turned on (enabled) or turned off (disabled).
The Analytics Client is turned on (enabled) by default on all Zebra Android devices:
- If the value ***Off*** is chosen, then the Analytics Client will be turned off (disabled), and hence it will not collect any machine data during the operation of the device and will not deliver any machine data regardless of whether connectivity is available.
- If the value ***On*** is chosen, then the Analytics Client will be turned on (enabled), and hence it will automatically collect machine data during the operation of the device and deliver it, when connectivity is available, to the Zebra Analytics Cloud Server.
On some Zebra Android devices, the ability for an Administrator to use an EMM to turn off (disable) the Analytics Client may not be supported.


**Detail Information:** 

- Key = "analyticsState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


### User Control of State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the the Device User will be allowed to control whether the Analytics Client on a Zebra Android device is turned on (enabled) or turned off (disabled).
The Analytics Client is turned on (enabled) by default on all Zebra Android devices:
- If the value ***Off*** is chosen, then the Device User will not be allowed to change whether the Analytics Client is turned off (disabled) or on (enabled), and hence whether it will collect or deliver any machine data during the operation of the device.
- If the value ***On*** is chosen, then the Device User will be allowed to change whether the Analytics Client is turned off (disabled) or on (enabled), and hence whether it will collect or deliver any machine data during the operation of the device.


**Detail Information:** 

- Key = "analyticsUserControlState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.2.


## Audio Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the audio settings on a Zebra Android device.


**Detail Information:** 

- Key = "audioStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Play AC Detect Sound


**Description:** 

This Managed Configuration allows an Administrator using an EMM to determine whether a notification sound will be played when the device is connected to AC power.
- If the value ***Off*** is chosen, then no sound will be played when AC power is connected.
- If the value ***On*** is chosen, then a chime will play when AC power is connected.


**Detail Information:** 

- Key = "audioPlayACConnectChime" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


### Mute/Vibrate


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the mute and vibrate behavior of a Zebra Android device.
- If the value ***Mute without Vibrate*** is chosen, then the volume will be muted (made silent) and the device will NOT vibrate, permitting neither audible nor tactile alerts.
- If the value ***Mute with Vibrate*** is chosen, then the volume will be muted (made silent) and the device will vibrate, permitting tactile but NOT audible alerts.
- If the value ***Unmute without Vibrate*** is chosen, then the volume will be unmuted (made audible) and the device will NOT vibrate, permitting audible but not tactile alerts.


**Detail Information:** 

- Key = "audioStepMuteVibrate" 

- Type = string 

- Choices = ***Mute without Vibrate*** , ***Mute with Vibrate*** , ***Unmute without Vibrate*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Replication Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the audio replication behavior of of a Zebra Android device.
- If the value ***Replicate headset audio on built-in speaker*** is chosen, then audio routed to the headset will also be routed to the built-in speaker. This might be desirable in a situation where the Device User may walk away from a vehicle mounted device and leave his headset in the vehicle while performing some task nearby. If an audible alert is also routed to the built-in speaker, the Device User might still hear it.
- If the value ***Do not replicate headset audio on built-in speaker*** is chosen, then audio routed to the headset will also be routed to the built-in speaker. This might be desirable in a situation where the device is being used in an area where routing audio to the built-in speaker could be disruptive to others in the area.


**Detail Information:** 

- Key = "audioReplicationAction" 

- Type = string 

- Choices = ***Replicate headset audio on built-in speaker*** , ***Do not replicate headset audio on built-in speaker*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.2.


## Auto Trigger Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether and how automatic triggering will occur on a Zebra Android device.
Automatic triggering allows a Device User to initiate trigger-activated functions simply by bringing an object within proximity of the device sensor as opposed to requiring the Device User to manually initiate such functions.


**Detail Information:** 

- Key = "autoTriggerStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether and how automatic triggering should occur on a Zebra Android device.
- If the value ***Off*** is chosen, then automatic triggering will never occur and the Device User will be required to manually initiate trigger-activated functions.
- If the value ***Auto On*** is chosen, then automatic triggering may occur automatically if the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.
- If the value ***Always On*** is chosen, then automatic triggering can always occur automatically , whether or not the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.


**Detail Information:** 

- Key = "autoTriggerState" 

- Type = string 

- Choices = ***Off*** , ***Auto On*** , ***Always On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Range


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the range at which automatic triggering will detect the presence of an object and initiate automatic triggering.
- If the value ***Near*** is chosen, then automatic triggering will occur only when an object is brought within near proximity to the device sensor. This may be desirable if the device is being worn in a holster and hence it is convenient to bring objects very close to the device sensor.
- If the value ***Far*** is chosen, then automatic triggering will occur when an object is brought within less near proximity to the device sensor. This may be desirable if the device is located in a stand or holder and hence it is less convenient to have to bring objects very close to the device sensor.


**Detail Information:** 

- Key = "autoTriggerRange" 

- Type = string 

- Choices = ***Near*** , ***Far*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


## Blacklist Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which built-in System Applications can/cannot be used on a Zebra Android device.


**Detail Information:** 

- Key = "blacklistStep" 

- Type = bundle 


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to enable or disable a single built-in System Application on a Zebra Android device.
All built-in System Applications are enabled by default on Zebra Android devices. Enabling a built-in System Application allows it to be freely launched, either by the Device User or programmatically by other Applications. Disabling a built-in System Application prevents it from being launched, either by the Device User or programmatically by other Applications.
Since a built-in System Application is built-in, you cannot uninstall it from a device, even if you do not wish it to be used. To prevent the use of a built-in System Application, you can disable it and thereby prevent its use, even though it remains installed.
- If the value ***Enable*** is chosen, then the Managed Configuration **Allow System Package Name** MUST be specified to provide the package name that identifies the built-in System Application to be enabled.
- If the value ***Disable*** is chosen, then the Managed Configuration **Disallow System Package Name** MUST be specified to provide the package name that identifies the built-in System Application to be disabled.


**Detail Information:** 

- Key = "blacklistAction" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Allow System Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a package name to identify a built-in System Application to be ***Enabled*** and should be specified if and only if the Action value ***Enable*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "blacklistActionAllowSystemPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Disallow System Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a package name to identify a built-in System Application to be ***Disabled*** and should be specified if and only if the Action value ***Disable*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "blacklistActionDisallowSystemPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


## Bluetooth Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Bluetooth settings on a Zebra Android device.


**Detail Information:** 

- Key = "bluetoothStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Discoverability


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the device is *Discoverable* via Bluetooth.
Zebra Android devices are NOT *Discoverable* via Bluetooth by default except when the Bluetooth Pairing screen of the Settings UI is active.
The value of this Managed Configuration can change this default behavior:
- If the value ***Off*** is chosen, then the default behavior will be in effect and the device will not be *Discoverable* via Bluetooth except when the Bluetooth Pairing screen of the Settings UI is active.
- If the value ***On*** is chosen, then the default behavior will be overridden and the device will be *Discoverable* via Bluetooth whenever Bluetooth is enabled (turned on).


**Detail Information:** 

- Key = "bluetoothDiscoverability" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### New Pairings


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the device will accept new Bluetooth Pairings.
Zebra Android devices will accept new Bluetooth Pairings by default.
The value of this Managed Configuration can change this default behavior:
- If the value ***Off*** is chosen, then the default behavior will be overridden and the device will not accept new Bluetooth Pairings.
- If the value ***On*** is chosen, then the default behavior will be in effect and the device will accept new Bluetooth Pairings.


**Detail Information:** 

- Key = "bluetoothNewPairings" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


### Turn On/Off Silent Pairing


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the device can silently perform Bluetooth pairings
Zebra Android devices will silently perform Bluetooth Pairings by default.
The value of this Managed Configuration can change this default behavior:
- If the value ***Off*** is chosen, then the default behavior will be overridden and the device can not silently perform Bluetooth Pairings.
- If the value ***On*** is chosen, then the default behavior will be in effect and the device can silently perform Bluetooth Pairings.
Note that even when the device CAN silently perform Bluetooth Pairings, it WILL NOT do so unless the Managed Configuration **Action** is used to configure specific silent pairing that should occur.


**Detail Information:** 

- Key = "bluetoothSilentPairingsState" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Action


**Description:** 

Configuration allows an Administrator using an EMM to perform an Action to manage a list of rules that control Bluetooth *Silent Pairing*.
Bluetooth *Silent Pairing* allows new Bluetooth Pairings to be automatically completed without Device User interaction, if permitted by defined rules. By defining the right set of rules, an Administrator can allow pairings between certain types of peripheral devices and a Zebra Android device happen automatically. By automatically is meant that if a pairing is established by an application running on a Zebra Android device, or at the request of a peripheral device, then that pairing can complete without Device User approval or interaction.
Since the list of rules is empty by default on Zebra Android devices, Bluetooth *Silent Pairing* is disabled by default, hence all new Bluetooth Pairings will occur manually and thus will require Device User interaction to complete . Once one or more rules are added, new pairings to selected peripheral devices identified by these rules will be allowed to occur automatically while all new other new pairings will continue to occur manually.
- If the value ***Add*** is chosen, then:
  - The Managed Configuration **Add Rule Name** MUST be specified to provide the name of the new rule to be added.
  - One or both of the Managed Configurations **Add Rule Device Class** or **Add Rule Device Upper Address Part** MUST be specified to provide the criteria that the new rule will use to determine which new Bluetooth Pairings will be allowed.
- If the value ***Remove*** is chosen, then at least one of the following additional Managed Configurations MUST also be specified to provide the information that will be used to determine which rule or rules, which have matching information, will be removed:
  - **Remove Rule Name**
  - **Remove Rule Device Class**
  - **Remove Rule Device Upper Address Part**


**Detail Information:** 

- Key = "bluetoothAction" 

- Type = string 

- Choices = ***AddRule*** , ***RemoveRule*** , ***RemoveAllRules*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Add Rule Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a name for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "bluetoothActionAddRuleName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Add Rule Device Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Device Class* for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Action**.
When a *Device Class* is specified for a rule, Bluetooth *Silent Pairing* will automatically complete new Bluetooth Pairings for Bluetooth devices that have the specified *Device Class*.


**Detail Information:** 

- Key = "bluetoothActionAddRuleDeviceClass" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Add Rule Device Upper Address Part


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Device Upper Address Part* for a new rule to be added to the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Action**.
When a *Device Upper Address Part* is specified for a rule, Bluetooth *Silent Pairing* will automatically complete new Bluetooth Pairings for Bluetooth devices that have the specified *Device Upper Address Part* in the upper part of their *Bluetooth Address*.


**Detail Information:** 

- Key = "bluetoothActionAddRuleUpperAddressPart" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Remove Rule Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Action**.
Any existing rule that has the specified name will be removed.


**Detail Information:** 

- Key = "bluetoothActionRemoveRuleName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Remove Rule Device Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Device Class* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Action**.
Any existing rule or rules that have the specified *Device Class* will be removed.


**Detail Information:** 

- Key = "bluetoothActionRemoveRuleDeviceClass" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Remove Rule Device Upper Address Part


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Device Upper Address Part* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Silent Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Action**.
Any existing rule or rules that have the specified *Device Upper Address Part* will be removed.


**Detail Information:** 

- Key = "bluetoothActionRemoveRuleUpperAddressPart" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


## Bug Reporting Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Bug Reporting on a Zebra Android device.


**Detail Information:** 

- Key = "bugreportStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Extensions State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Standard Android or Zebra Extended Bug Reporting should be used for generation of Bug Reports from a Zebra Android device.
- If the value ***Off*** is chosen, then Standard Android Bug Reporting will be used, with no Zebra Extensions or Enhancements.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting. Additional Managed Configurations would then be used, if needed, to configure the desired behavior and options of Zebra Extended Bug Reporting.


**Detail Information:** 

- Key = "bugreportBugReportProfile" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Intent Enable


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Zebra Extended Bug Reporting should allow a Bug Report to be initiated by an application by sending a broadcast intent with an action value of *com.symbol.mxmf.intent.START_FOR_BUG_REPORT*. This is meaningful only when Zebra Extended Bug Reporting is enabled.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting, if enabled, will not initiate a Bug Report when the defined intent is received.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, if enabled, will initiate a Bug Report when the defined intent is received.


**Detail Information:** 

- Key = "bugreportEnableIntent" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Screenshot Enable


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Zebra Extended Bug Reporting should be allowed to capture screenshots and attach them to Bug Reports.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting, if enabled, will not capture Bug Reports nor attach them to Bug Reports.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, if enabled, will capture Bug Reports and attach them to Bug Reports.


**Detail Information:** 

- Key = "bugreportEnableScreenshot" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Show In Power Key Menu


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should display an option to initiate a Bug Report in the menu which appears after long-pressing the power key on the device.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting will NOT add an option to the menu.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, will add an option to the menu.


**Detail Information:** 

- Key = "bugreportEnableBRInPwrMenu" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### ANR Error Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Application Not Responding (ANR) errors and take action when they are detected.
- If the value ***Do not capture*** is chosen, then Zebra Extended Bug Reporting will NOT watch for the occurrence of ANR errors, and hence will take no action if they occur.
- If the value ***Capture bug report*** is chosen, then Zebra Extended Bug Reporting will watch for the occurrence of ANR errors, and will automatically initiate a Bug Report each time it detects that one has occurred.
- If the value ***Capture logcat log*** is chosen, then Zebra Extended Bug Reporting will watch for the occurrence of ANR errors, and will automatically initiate a Logcat capture each time it detects that one has occurred.


**Detail Information:** 

- Key = "bugreportANRErrAction" 

- Type = string 

- Choices = ***Do not capture*** , ***Capture bug report*** , ***Capture logcat log*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


### Unexpected Error Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Unexpected Application Errors (UAEs) and take action when they are detected.
- If the value ***Do not capture*** is chosen, then Zebra Extended Bug Reporting will NOT watch for the occurrence of UAEs, and hence will take no action if they occur.
- If the value ***Capture bug report*** is chosen, then Zebra Extended Bug Reporting will watch for the occurrence of UAEs, and will automatically initiate a Bug Report each time it detects that one has occurred.
- If the value ***Capture logcat log*** is chosen, then Zebra Extended Bug Reporting will watch for the occurrence of UAEs, and will automatically initiate a Logcat capture each time it detects that one has occurred.


**Detail Information:** 

- Key = "bugreportUnexpectedErrAction" 

- Type = string 

- Choices = ***Do not capture*** , ***Capture bug report*** , ***Capture logcat log*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


### Send to Cloud Detail


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports will be automatically emailed and, if so, the details of the email that should be sent.


**Detail Information:** 

- Key = "bugreportCloudDetails" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports to the Zebra Cloud Server.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting will NOT send copies of generated Bug Reports to the Zebra Cloud Server.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, if enabled, will send copies of all generated Bug Reports to the Zebra Cloud Server.


**Detail Information:** 

- Key = "bugreportCloudEnable" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Time to Live


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which will cause the sending Bug Reports to the Zebra Cloud Server to automatically cease.
- If the value ***Never*** is chosen, then when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Send to Cloud Detail**, Bug Reports will continue to be sent to the Zebra Cloud Server until the configuration is explicitly changed again.
- When any other value is chosen, then at the time it is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Send to Cloud Detail**, Zebra Extended Bug Reporting will start a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting will cease sending Bug Reports to the Zebra Cloud Server, until the configuration is explicitly changed again.


**Detail Information:** 

- Key = "bugreportCloudTTL" 

- Type = string 

- Choices = ***Never Expire*** , ***1 Day*** , ***1 Week*** , ***2 Weeks*** , ***1 Month*** , ***3 Months*** , ***6 Months*** , ***1 Year*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Store in Device Detail


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports will be stored in the Zebra device and, if so, where in the device they will be stored.


**Detail Information:** 

- Key = "bugreportStorageDetails" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting will NOT store copies of generated Bug Reports in the device.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, if enabled, will store copies of generated Bug Reports in the device.


**Detail Information:** 

- Key = "bugreportStorageEnable" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### File Path


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the path where the device Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device, and should be specified only if the value ***On*** is chosen for Managed Configuration **State**.
Note that either fixed or removable storage are supported, but the specified path must be valid at the time Bug Report is generated. If no path is specified, bug reports are stored in /storage/sdcard0/BugReports/, which will always be a valid path for storage of Bug Reports on all Zebra Android devices.


**Detail Information:** 

- Key = "bugreportBugReportFilePath" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Time to Live


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which will cause the storing of Bug Reports in the device to automatically cease.
- If the value ***Never*** is chosen, then when Zebra Extended Bug Reporting is configured to store Bug Reports in the device, using Managed Configurations in the group **Store in Device Detail**, Bug Reports will continue to be stored in the device until the configuration is explicitly changed again.
- When any other value is chosen, then at the time it is configured to store Bug Reports in the device, using Managed Configurations in the group **Store in Device Detail**, Zebra Extended Bug Reporting will start a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting will cease storing Bug Reports in the device, until the configuration is explicitly changed again.


**Detail Information:** 

- Key = "bugreportStorageTTL" 

- Type = string 

- Choices = ***Never Expire*** , ***1 Day*** , ***1 Week*** , ***2 Weeks*** , ***1 Month*** , ***3 Months*** , ***6 Months*** , ***1 Year*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Send Via Email Detail


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports will be automatically emailed and, if so, the details of the email that should be sent.


**Detail Information:** 

- Key = "bugreportEmailDetails" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports via email.
- If the value ***Off*** is chosen, then Zebra Extended Bug Reporting will NOT send copies of generated Bug Reports via email.
- If the value ***On*** is chosen, then Zebra Extended Bug Reporting, if enabled, will send copies of generated Bug Reports via email. Additional Managed Configurations within the same group would then need to be specified to configure the details of the email to be sent.


**Detail Information:** 

- Key = "bugreportEmailEnable" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### SMTP Host


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the address or host name of the SMTP (email) Server via which emails will be sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **State**.
Note that the Administrator must have access to an email account on the selected SMTP Server and must specify details of that account via additional Managed Configurations within the same group to enable Zebra Extended Bug Reporting to send emails via that SMTP Server. In addition, the Administrator must have access to a valid email account to use as the destination of the emails, which is NOT required to be on the same SMTP Server, and must specify details of the email address of that account via an additional Managed Configuration within the same group, to enable Zebra Extended Bug Reporting to send the emails to that destination.


**Detail Information:** 

- Key = "bugreportEmailSMTPHost" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### SMTP Port


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the TCP port number of the SMTP (email) Server via which emails will be sent to deliver generated Bug Reports, and should be specified if only if the Managed Configuration **SMTP Host** is specified.


**Detail Information:** 

- Key = "bugreportEmailSMTPPort" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Sender ID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the ID of the email account that will be used as the source (from address) of emails that will be sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **State** and a valid SMTP (email) Server is specified via the Managed Configuration **SMTP Host**
Note that the Administrator must have access to a valid email account on the configured SMTP (email) Server and must specify additional information via other Managed Configurations within the same group, such as **Sender Password** to enable Zebra Extended Bug Reporting to successfully send the emails using that account via that server.


**Detail Information:** 

- Key = "bugreportEmailSendersID" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Sender Password


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the password of the email account that will be used as the source (from address) of emails that will be sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **State**, and a valid SMTP (email) Server is specified via the Managed Configuration **SMTP Host**, and a valid email address is specified via the Managed Configuration **Sender ID**.


**Detail Information:** 

- Key = "bugreportEmailSendersPassword" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Send To Address


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the email address of the email account that will be used as the destination (to address) of emails that will be sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **State**.


**Detail Information:** 

- Key = "bugreportEmailSendTo" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Time to Live


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which will cause the sending of Bug Reports via email to automatically cease.
- If the value ***Never*** is chosen, then when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Send Via Email Detail**, Bug Reports will continue to be sent via email until the configuration is explicitly changed again.
- When any other value is chosen, then at the time it is configured to send Bug Reports via email, using Managed Configurations in the group **Send Via Email Detail**, Zebra Extended Bug Reporting will start a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting will cease sending Bug Reports via email, until the configuration is explicitly changed again.


**Detail Information:** 

- Key = "bugreportEmailTTL" 

- Type = string 

- Choices = ***Never Expire*** , ***1 Day*** , ***1 Week*** , ***2 Weeks*** , ***1 Month*** , ***3 Months*** , ***6 Months*** , ***1 Year*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Dialog Elements


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to customize the dialog that will be presented to the Device User to collect information that will be included in generated Bug Reports.


**Detail Information:** 

- Key = "bugreportDialogElements" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### Element Detail


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single dialog element to be included in the dialog that will be presented to the Device User to collect information that will be included in generated Bug Reports.


**Detail Information:** 

- Key = "bugreportDialogElement" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


##### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of a single dialog element being included in the dialog that will be presented to the Device User to collect information that will be included in generated Bug Reports.
- If the value ***ErrorNameTextBox*** is chosen, then a text box will be added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered. The additional Managed Configuration **Error Name Text Box Text** MUST also be specified to provide a text to be pre-populated into the text box.
- If the value ***Label*** is chosen, then a text label will be added to the dialog presented to the Device User. The additional Managed Configuration **Label Text** MUST also be specified to provide the text to be populated into the label.
- If the value ***TextBox*** is chosen, then a text box will be added to the dialog presented to the Device User in which generic text can be entered. The additional Managed Configuration **Text Box Text** MUST also be specified to provide the text to be pre-populated into the text box. The specified text will to provide guidance to the Device User about the expected value and will disappear when the user begins typing into the text box.
- If the value ***VoiceRecordButton*** is chosen, then a voice record button will be added to the dialog presented to the Device User. Clicking this button will allow the Device User to record a verbal explanation of the bug to be attached to the generated Bug Report. No additional Managed Configurations need to be specified.


**Detail Information:** 

- Key = "bugreportDialogElementType" 

- Type = string 

- Choices = ***ErrorNameTextBox*** , ***Label*** , ***TextBox*** , ***VoiceRecordButton*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


##### Error Name Text Box Text


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the text to be pre-populated into a text box that will be added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered and should be specified if and only if the value ***Error Name Text Box*** is chosen for Managed Configuration **Type**.


**Detail Information:** 

- Key = "bugreportDialogElementTypeErrorNameTextBoxText" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


##### Label Text


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the text of a label that will be added to the dialog presented to the Device User and should be specified if and only if the value ***Label*** is chosen for Managed Configuration **Type**.


**Detail Information:** 

- Key = "bugreportDialogElementTypeLabelText" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


##### Text Box Text


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the text that be pre-populated into a text box added to the dialog presented to the Device User into which generic text can be entered and should be specified if and only if the value ***TextBox*** is chosen for Managed Configuration **Type**. The specified text will to provide guidance to the Device User about the expected value and will disappear when the user begins typing into the text box.


**Detail Information:** 

- Key = "bugreportDialogElementTypeTextBoxText" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Dialog Time Out


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the amount of inactivity time (time in milliseconds with no Device User activity), after which the dialog presented to the Device User will automatically be dismissed, causing the Bug Report to be completed as if the Device User had explicitly clicked the "Submit" button.


**Detail Information:** 

- Key = "bugreportDialogTimeout" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


## Camera Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which camera(s) or other image capture devices can be used to take pictures on a Zebra Android device.


**Detail Information:** 

- Key = "cameraStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Use Of Back Camera


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Rear Facing Camera, if present on a Zebra Android device, can be used to take pictures.
- If the value ***Off*** is chosen, then no applications or services running on the device will be allowed to take pictures using the Rear Facing Camera.
- If the value ***On*** is chosen, then any applications or services running on the device will be allowed to take pictures using the Rear Facing Camera.


**Detail Information:** 

- Key = "cameraUseOfBack" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Use Of Front Camera


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Front Facing (selfie) Camera, if present on a Zebra Android device, can be used to take pictures.
- If the value ***Off*** is chosen, then no applications or services running on the device will be allowed to take pictures using the Front Facing (selfie) Camera.
- If the value ***On*** is chosen, then any applications or services running on the device will be allowed to take pictures using the Front Facing (selfie) Camera.


**Detail Information:** 

- Key = "cameraUseOfFront" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Use Of Imager


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Imager (special-purpose image capture device), if present on a Zebra Android device, can be used to take pictures.
- If the value ***Off*** is chosen, then no applications or services running on the device will be allowed to take pictures using the Imager (special-purpose image capture device) Camera.
- If the value ***On*** is chosen, then any applications or services running on the device will be allowed to take pictures using the Imager (special-purpose image capture device) Camera.


**Detail Information:** 

- Key = "cameraUseOfImager" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


## Clock Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the operation and state of the clock on a Zebra Android device.


**Detail Information:** 

- Key = "clockStep" 

- Type = bundle 


### Time Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to choose whether time and date configuration will be performed manually, using other Managed Configurations in this group, or automatically, by connecting to a Network Time Protocol (NTP) Server.


**Detail Information:** 

- Key = "clockTimeMode" 

- Type = string 

- Choices = ***Manual*** , ***Auto*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Manual Date


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the date on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Time Mode**.


**Detail Information:** 

- Key = "clockManualDate" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Manual Time


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the time on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Time Mode**.


**Detail Information:** 

- Key = "clockManualTime" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Auto NTP Server Address


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the address of the Network Time Protocol (NTP) Server to be used to perform automatic date and time configuration on a Zebra Android device and should be specified if and only if the value ***Automatic*** is chosen for the Managed Configuration **Time Mode**.


**Detail Information:** 

- Key = "clockAutoNtpServer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Auto NTP Sync Interval


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the interval at which automatic date and time configuration will be performed on a Zebra Android device and should be specified if and only if the value ***Automatic*** is chosen for the Managed Configuration **Time Mode**.


**Detail Information:** 

- Key = "clockAutoNtpSyncInterval" 

- Type = string 

- Choices = ***30 minutes*** , ***60 minutes*** , ***6 hours*** , ***24 hours*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Time Zone Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to choose whether time zone configuration will be performed manually, using another Managed Configuration in this group, or automatically, by connecting to a Network Identity and Time Zone (NITZ) source.


**Detail Information:** 

- Key = "clockTimeZoneMode" 

- Type = string 

- Choices = ***Manual*** , ***Auto*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.0.


### Zone


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the time zone on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Time Zone Mode**.


**Detail Information:** 

- Key = "clockManualTimeZone" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Time Format


**Description:** 

This Managed Configuration allows an Administrator using an EMM to choose whether the format in which time will be displayed on the device will be in ***12*** hour (AM/PM) or ***24*** hour (military) format.


**Detail Information:** 

- Key = "clockTimeFormat" 

- Type = string 

- Choices = ***12*** , ***24*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.0.


## DHCP Option Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Dynamic Host Configuration Protocol (DHCP) Client on a Zebra Android device.
The DHCP Client on the device sends a DHCP Request to a DHCP Server and receives back a DHCP Acknowledgment. A DHCP Request sent by a device can contain information about the device or the DHCP Client, and can contain requests for additional information from the DHCP Server. A DHCP Acknowledgment sent by the DHCP Server contains the IP Address assigned to the device by the DHCP Server along with other related information and any additional information requested by the device in the DHCP Request.
DHCP Options are variable-length strings that are identified by DHCP Options Numbers that can be included in a DHCP Request or a DHCP Acknowledgment to convey information between a DHCP Client and a DHCP Server. From the point of view of the device where the DHCP Client is running, a DHCP Option can allow the DHCP Client to *Send* information to the DHCP Server or can allow the DHCP Client to *Request* the DHCP Server to return information to the DHCP Client.


**Detail Information:** 

- Key = "dhcpStep" 

- Type = bundle 


### Request Boot File Name (Option 67)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Boot File Name* and return it using *DHCP Option 67* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestBootFileName" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request Broadcast Address (Option 28)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Broadcast Address* and return it using *DHCP Option 28* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestBroadcastAddress" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request NTP Server (Option 42)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *NTP Server* and return it using *DHCP Option 42* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestNtpServer" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request TFTP Server Address (Option 66)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Address* and return it using *DHCP Option 66* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestTftpServerAddress" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request Vendor Encapsulated Options (Option 43)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Vendor Encapsulated Options* and return whatever is acquired using *DHCP Option 43* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestVendorEncapsulated" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.5.


### Request Domain Search List (Option 119)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Domain Search List* and return it using *DHCP Option 119* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestDomainSearchList" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request TFTP Server Names (Option 150)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Name(s)* and return it using *DHCP Option 150* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestTftpServerNames" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Request Vendor Specific Option#1 (Option 186)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *First Vendor Specific Option* and return it using *DHCP Option 186* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestVendorSpecific1" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.5.


### Request Vendor Specific Option#2 (Option 188)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Second Vendor Specific Option* and return it using *DHCP Option 188* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestVendorSpecific2" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.5.


### Request Vendor Specific Option#3 (Option 230)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Third Vendor Specific Option* and return it using *DHCP Option 230* along with the IP Address.


**Detail Information:** 

- Key = "dhcpRequestVendorSpecific3" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Send Client Identifier State (Option 61)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device will send a *Client Identifier* to the DHCP Server using *DHCP Option 61* when requesting an IP Address.
- If the value ***Off*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***On*** is chosen, then the additional Managed Configuration **Send Client Identifier State (Option 61)** MUST be specified to provide the value of the *Client Identifier* to be sent.


**Detail Information:** 

- Key = "dhcpSendClientIdentifierState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Send Client Identifier Value (Option 61)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Client Identifier* that the DHCP Client on a Zebra Android device will send to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **Send Client Identifier State (Option 61)**.


**Detail Information:** 

- Key = "dhcpSendClientIdentifierValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Send Host Name State (Option 12)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device will send a *Host Name* to the DHCP Server using *DHCP Option 12* when requesting an IP Address.
- If the value ***Off*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***On*** is chosen, then the additional Managed Configuration **Send Host Name Value (Option 12)** MUST be specified to provide the value of the *Host Name* to be sent.


**Detail Information:** 

- Key = "dhcpSendHostNameState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Send Host Name Value (Option 12)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Host Name* that the DHCP Client on a Zebra Android device will send to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **Send Host Name State (Option 12)**.


**Detail Information:** 

- Key = "dhcpSendHostNameValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Send User Class State (Option 77)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device will send a *User Class* to the DHCP Server using *DHCP Option 77* when requesting an IP Address.
- If the value ***Off*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***On*** is chosen, then the additional Managed Configuration **Send User Class Value (Option 77)** MUST be specified to provide the value of the *User Class* to be sent.


**Detail Information:** 

- Key = "dhcpSendUserClassState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Send User Class Value (Option 77)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *User Class* that the DHCP Client on a Zebra Android device will send to the DHCP Server using *DHCP Option 77* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **Send User Class State (Option 77)**.


**Detail Information:** 

- Key = "dhcpSendUserClassValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.4.


### Send Vendor Class State (Option 60)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device will send a *Vendor Class* to the DHCP Server using *DHCP Option 60* when requesting an IP Address.
- If the value ***Off*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***On*** is chosen, then the additional Managed Configuration **Send Vendor Class Value (Option 60)** MUST be specified to provide the value of the *Vendor Class* to be sent.


**Detail Information:** 

- Key = "dhcpSendVendorClassState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.5.


### Send Vendor Class Value (Option 60)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Vendor Class* that the DHCP Client on a Zebra Android device will send to the DHCP Server using *DHCP Option 60* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **Send Vendor Class State (Option 60)**.


**Detail Information:** 

- Key = "dhcpSendVendorClassValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.5.


### Send FQDN State (Option 81)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device will send a *Fully Qualified Domain Name (FQDN)* to the DHCP Server using *DHCP Option 81* when requesting an IP Address.
- If the value ***Off*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***On*** is chosen, then the additional Managed Configurations **Send FQDN Value (Option 81)** and **Send FQDN Flag (Option 81)** MUST be specified to provide the value of the *FQDN value* and the associated flags to be sent.


**Detail Information:** 

- Key = "dhcpSendFqdnState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Send FQDN Value (Option 81)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Fully Qualified Domain Name (FQDN)* that will be sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified if and only if the value ***On*** is chosen for the Managed Configuration **Send Vendor Class Value (Option 60)**. The additional Managed Configuration **Send FQDN Flag (Option 81)** MUST also be specified to provide the flags to be sent along with the *FQDN value*.


**Detail Information:** 

- Key = "dhcpSendFqdnValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Send FQDN Flag (Option 81)


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the flags to be sent along with the *Fully Qualified Domain Name (FQDN)* that will be sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified if and only if the value ***On*** is chosen for the Managed Configuration **Send Vendor Class Value (Option 60)** and should be specified if and only if the value Managed Configuration **Send FQDN Value (Option 81)** is specified.


**Detail Information:** 

- Key = "dhcpSendFqdnFlag" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Request Custom Option Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should request from DHCP Server and return along with the IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Request Custom Option State**.


**Detail Information:** 

- Key = "dhcpRequestCustomOptionNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Request Custom Option State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire a custom DHCP option and return it along with the IP Address.
- If the value ***Off*** is chosen, then no custom DHCP Option will be requested and no additional Managed Configuration should be specified.
- If the value ***On*** is chosen, then a custom DHCP Option will be requested and the additional Managed Configuration **Request Custom Option Number** MUST be specified to provide the custom option number to be requested.


**Detail Information:** 

- Key = "dhcpRequestCustomOptionState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Send Custom Option Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide a the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Send Custom Option State**.


**Detail Information:** 

- Key = "dhcpSendCustomOptionNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Send Custom Option State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server send a custom DHCP option when requesting an IP Address.
- If the value ***Off*** is chosen, then no custom DHCP Option will be sent and no additional Managed Configurations need to be specified.
- If the value ***On*** is chosen, then a custom DHCP Option will be sent and the additional Managed Configuration **Send Custom Option Number** MUST be specified to provide the custom option number to be sent and the additional Managed Configuration **Send Custom Option Value** MUST be specified to provide the custom option value to be sent.


**Detail Information:** 

- Key = "dhcpSendCustomOptionState" 

- Type = string 

- Choices = ***On*** , ***Off*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Send Custom Option Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the option value for a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Send Custom Option State** and if the Managed Configuration **Send Custom Option Number** is specified.


**Detail Information:** 

- Key = "dhcpSendCustomOptionValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


## DataWedge Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure DataWedge settings on a Zebra Android device.


**Detail Information:** 

- Key = "dataWedgeStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Database File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the device path and file name of a DataWedge Database file (full or partial) to replace or be merged to modify the current configuration of DataWedge.


**Detail Information:** 

- Key = "dataWedgeDatabaseFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Automatic Database Import


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether DataWedge Database Files deployed to the DataWedge autoimport folder on the device will automatically trigger importing of the file.


**Detail Information:** 

- Key = "dataWedgeAutoImport" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Manual Configuration


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether Device Users will be allowed to manually alter the configuration of DataWedge from the DataWedge configuration UI.API.


**Detail Information:** 

- Key = "dataWedgeManualConfiguration" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Programmatic Import


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether whether applications will be allowed to programmatically import DataWedge Configuration Files using the DataWedge Intent API.


**Detail Information:** 

- Key = "dataWedgeApImport" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


## Device Administration Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to:
- Control which applications and services are allowed to submit XML for processing by the Zebra MX Management System on a Zebra Android device
- Submit XML for processing by the Zebra MX Management System
- Reserve (and unreserve) application User IDs
- Control which applications can override the global setting for background data


**Detail Information:** 

- Key = "devadminStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control access to or utilize the Zebra MX Management System on a Zebra Android device.
- If the value ***AllowSubmitXml*** is chosen, then a single application or service is allowed to submit XML for processing by the Zebra MX Management System. The additional Managed Configuration **Allow Submit XML Package Name** MUST be specified to supply the Android Package Name that identifies the application or service is to be allowed.
- If the value ***DisallowSubmitXml*** is chosen, then a single application service is disallowed from submitting XML for processing by the Zebra MX Management System. The additional Managed Configuration **Disallow Submit XML Package Name** MUST be specified to supply the Android Package Name that identifies the application or service is to be disallowed.
- If the value ***SubmitXml*** is chosen, then the additional Managed Configuration **Submit XML** MUST be specified to supply the XML string that will be submitted for processing by the .Zebra MX Management System.
- If the value ***ReserveUID*** is chosen, then the following additional Managed Configurations MUST be specified
  - The Managed Configuration **Reserve User ID Package Name** MUST be specified to identify the particular package to which the User ID is reserved.
  - The Managed Configuration **Reserve User ID Package Signature** MUST be specified to assure that the package to which the User ID is reserved is the right one.
- If the value ***UnreserveUID*** is chosen, then the following additional Managed Configurations MUST be specified
  - The Managed Configuration **Unreserve User ID Package Name** MUST be specified to identify the particular package to which the User ID is reserved.


**Detail Information:** 

- Key = "devadminAction" 

- Type = string 

- Choices = ***AllowSubmitXml*** , ***DisallowSubmitXml*** , ***SubmitXml*** , ***ReserveUID*** , ***UnreserveUID*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Allow Submit XML Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name that identifies the application or service is to be allowed and should be specified if and only if the value ***AllowSubmitXml*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionAllowSubmitXmlPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Disallow Submit XML Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name that identifies the application or service is to be disallowed and should be specified if and only if the value ***DisallowSubmitXml*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionDisallowSubmitXmlPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Submit XML


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify an XML string to be submitted for processing by the .Zebra MX Management System, and should be specified if an only if the value ***SubmitXml*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionSubmitXml" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.1.


### Reserve User ID Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the package name of the application needing a reserved UID., and should be specified if an only if the value ***Reserve User ID*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionReserveUIDPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Reserve User ID Package Signature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the signature of the application needing a reserved UID., and should be specified if an only if the value ***Reserve User ID*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionReserveUIDPackageSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Unreserve User ID Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of the application whose user ID can be released (unreserved), and should be specified if an only if the value ***Unreserve UID*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "devadminActionUnreserveUIDPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


## Device Central Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Device Central behavior on a Zebra Android device.


**Detail Information:** 

- Key = "deviceCentralStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Bluetooth On/Off Control


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to use the Device Central UI to control Bluetooth Power.
- If the value ***Disallow*** is chosen, then Device Central will NOT provide UI that allows the Device User to control the Bluetooth power state.
- If the value ***Allow*** is chosen, then Device Central will provide UI that allows the Device User to control the Bluetooth power state.


**Detail Information:** 

- Key = "deviceCentralBluetoothOnOffControl" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Bluetooth Pairing Control


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Device Central system should allow multiple pairings to the same Device Class.
- If the value ***Single Pairing Per Device Class*** is chosen, then Device Central system will only allow one pairing at a time for each Bluetooth Device Class (e.g. one headset and one printer).
- If the value ***Multiple Pairings Per Device Class*** is chosen, then Device Central system will allow multiple pairings at a time for each Bluetooth Device Class (e.g. multiple headsets and/or multiple printers).


**Detail Information:** 

- Key = "deviceCentralBluetoothPairingControl" 

- Type = string 

- Choices = ***Single Pairing Per Device Class*** , ***Multiple Pairings Per Device Class*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Firmware Update Button


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to use the Device Central UI to initiate a Firmware Update.
- If the value ***Disallow*** is chosen, then Device Central will NOT provide UI that allows the Device User to initiate a Firmware Update.
- If the value ***Allow*** is chosen, then Device Central will provide UI that allows the Device User to initiate a Firmware Update.


**Detail Information:** 

- Key = "deviceCentralFirmwareUpdateButton" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


## Display Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Display Screen settings on a Zebra Android device.


**Detail Information:** 

- Key = "displayStep" 

- Type = bundle 


### Timeout


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the amount of inactivity, in seconds, after which the device will timeout and automatically turn the Display Screen off.
A given device may not support all options that are allowed to be specified using this Managed Configuration. In the event that the value specified is not supported on a given device, then the smallest larger value that is supported will be used or, if no larger value is supported, then the largest smaller value that is supported will be used.


**Detail Information:** 

- Key = "displayTimeout" 

- Type = string 

- Choices = ***15 seconds*** , ***30 seconds*** , ***1 minute*** , ***2 minutes*** , ***5 minutes*** , ***10 minutes*** , ***30 minutes*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


### Blanking Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Display Blanking Mode*, which determines whether the Display will automatically Blank (display nothing) on a Zebra Android device.
When a Device User is operating a vehicle with a vehicle-mounted device, it is often advisable, for safety or regulatory reasons, to prevent the Device User from interacting with the device or being distracted by the Display of the device, while the vehicle is in motion. *Display Blanking Mode* provides the ability to configure the device such that the Display Screen will automatically be Blanked (display nothing) when an electrical signal (such as one attached to the accelerator) is detected that indicates that the vehicle is in motion.
At present, *Display Blanking Mode* is supported ONLY on the Zebra VC80x vehicle-mounted Android device.
- If the value ***Never Blank*** is chosen, then *Display Blanking Mode* will be turned off and hence automatic Display Blanking will never occur.
- If the value ***Blank When Triggered by Signal*** is chosen, then *Display Blanking Mode* will be turned on and hence the Display will be automatically Blanked and all of the following Managed Configurations MUST also be specified:
  - **Signal** - to specify the signal that will be used to activate automatic Display Blanking.
  - **Polarity** - to specify the polarity of the signal specified by the Managed Configuration **Signal** that will be used to activate automatic Blanking.
  - **Debounce Delay** - to specify the time that will be used to debounce the signal specified by the Managed Configuration **Signal**.


**Detail Information:** 

- Key = "displayBlankingMode" 

- Type = string 

- Choices = ***Never Blank*** , ***Blank When Triggered by Signal*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Stay Awake


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Display will *Stay Awake* (prevent automatic time out that turns the Display Screen off) when the device is connected to external power.
When a Device User is operating a vehicle with a vehicle-mounted device, the device may be continuously receiving power from the vehicle power supply, rather than running off its own internal battery. The Display Screen timeout, configured via the Managed Configuration **Timeout**, which is generally used to increase battery life, may add little value in such situations. It may therefore be desirable to configure the device to *Stay Awake* and thus prevent it from timing out and turning the Display Screen off, so long as the device is connected to external power.
- If the value ***Off*** is chosen, then the Display will NOT *Stay Awake* and hence the device will time out and automatically turn the Display Screen off, when the Display Screen timeout, configured using the Managed Configuration **Timeout** expires, even if the device is connected to external power.
- If the value ***On*** is chosen, then the Display will *Stay Awake* and hence the device will not time out and will not automatically turn the Display Screen off, so long as the device is connected to external power, even if the Display Screen timeout, configured using the Managed Configuration **Timeout** expires.


**Detail Information:** 

- Key = "displayStayAwake" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.2.


### Signal


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select the Signal that will be used to trigger automatic Display Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Input 1*** is chosen, then on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 1 will be used to trigger automatic Display Blanking.
- If the value ***Input 2*** is chosen, then on the Zebra VC80x vehicle-mounted Android device the Clear To Send (CTS) input signal on Serial Port 2 will be used to trigger automatic Display Blanking.
A common configuration to support *Display Blanking Mode* would be to connect the Request to Send (RTS) output signal of the selected Serial Port to the Clear To Send (CTS) input signal on the same serial port, via a switch, such as one activated by the vehicle accelerator. When the switch is activated, the output RTS output signal would be fed back into the CTS input signal and detected to trigger automatic Display Blanking.


**Detail Information:** 

- Key = "displayBlankingModeSignal" 

- Type = string 

- Choices = ***Input 1*** , ***Input 2*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Polarity


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select the Polarity of the Signal that will be used to trigger automatic Display Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Blanking Mode** to turn on *Display Blanking Mode*.
- If the value ***Blank screen when signal goes inactive (OFF)*** is chosen, then the automatic Display Blanking will occur when the specified signal is detected as going inactive (OFF). This choice would be used in specialized configurations where the signal to be used to trigger automatic Display Blanking has reverse polarity.
- If the value ***Blank screen when signal goes active (ON)*** is chosen, then , then the automatic Display Blanking will occur when the specified signal is detected as going active (ON). This is the most common choice for the common configuration of connecting RTS and CTS via a switch.


**Detail Information:** 

- Key = "displayBlankingModeSignalPolarity" 

- Type = string 

- Choices = ***Blank screen when signal goes inactive (OFF)*** , ***Blank screen when signal goes active (ON)*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Debounce Delay


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select the Debounce Delay that will be used for the Signal that will be used to trigger automatic Display Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Blanking Mode** to turn on *Display Blanking Mode*.
The value specified should be in milliseconds and will be used as a delay following a change in signal state for changing the state of Display Blanking. This is useful to avoid spurious or repetitive changes in Display Blanking state as a result of bounce or chatter on the signal used to trigger automatic Display Blanking. The value specified should be in the range of 250 milliseconds (one quarter of a second) to 32767 milliseconds (more than 32 seconds), which should be adequate to handle most situations.


**Detail Information:** 

- Key = "displayBlankingModeSignalDebounceDelay" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Set Display Size


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the system display size


**Detail Information:** 

- Key = "setDisplaySize" 

- Type = string 

- Choices = ***Small*** , ***Default*** , ***Large*** , ***Larger*** , ***Largest*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Set Font Size


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the system font size


**Detail Information:** 

- Key = "setFontSize" 

- Type = string 

- Choices = ***Small*** , ***Default*** , ***Large*** , ***Largest*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Turn On/Off Landscape Auto-Rotate For Workstation Cradle


**Description:** 

This Managed Configuration allows an Administrator using an EMM to control whether or not the display will auto-rotate when the device is placed in a workstation cradle and display mirroring is used.


**Detail Information:** 

- Key = "setMirrorAutorotate" 

- Type = string 

- Choices = ***on*** , ***off*** 


**Support Information:** 

- This Managed Configuration is supported on Operating System(s): Pie.


- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


## Enrollment


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify an Enrolllment Action to be performed as part of this OemConfig Step.


**Detail Information:** 

- Key = "enrollmentStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Action


**Description:** 

Configuration allows an Administrator using an EMM to perform an Action to specify an Enrollment Action to be performed.
- If the value ***Claim Device*** is chosen, then the additional Managed Configuration **Claim Device Token** MUST also be specified to provide the *Device Claim Token" required to identify the Customer Account under which Ownership of the device will be Claimed.


**Detail Information:** 

- Key = "enrollmentAction" 

- Type = string 

- Choices = ***Claim Device*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Claim Device Token


**Description:** 

Configuration allows an Administrator using an EMM to specify the Device Claim Token obtained from Zebra for a Zebra Customer Account and that can be used to Claim Ownership of a device for that Customer.


**Detail Information:** 

- Key = "enrollmentActionClaimDeviceToken" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


## Enterprise Keyboard Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device.


**Detail Information:** 

- Key = "ekbStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Auto Capitalization


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have automatic capitalization turned on (enabled) or turned off (disabled) for the first letter of each sentence.
- If the value ***Off*** is chosen, then automatic capitalization will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then automatic capitalization will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbAutoCaps" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Auto Correction


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have automatic correction of misspelled words turned on (enabled) or turned off (disabled), wherein the space and punctuation keys initiate automatic correction of misspelled words.
- If the value ***Off*** is chosen, then automatic correction of misspelled words will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then automatic correction of misspelled words will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbAutoCorrection" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Block Offensive Words


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have automatic blocking of offensive words turned on (enabled) or turned off (disabled).
- If the value ***Off*** is chosen, then automatic offensive word blocking will be turned off (disabled).
- If the value ***On*** is chosen, then automatic offensive word blocking will be turned on (enabled).


**Detail Information:** 

- Key = "ekbBlockOffensiveWords" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Double Space Period


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have automatic sentence ending turned on (enabled) or turned off (disabled) wherein a double tap on the space key causes the entry of a period followed by two spaces.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbDoubleSpacePeriod" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Flick for Alternate Chars


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show alternate characters when a flick gesture is performed.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbFlickForAlternateChars" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### Key Long Press Delay


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the length of time (in milliseconds) that a key within the Enterprise Keyboard on a Zebra Android device need to be held pressed to be detected as a long press.


**Detail Information:** 

- Key = "ekbKeyLongPressDelay" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Language Support


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the languages presented to the user through the Enterprise Keyboard on a Zebra Android device.


**Detail Information:** 

- Key = "ekbLanguageSupport" 

- Type = string 

- Choices = ***English(UK)*** , ***English(US)*** , ***French*** , ***German*** , ***Italian*** , ***Spanish*** , ***Russian*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Navigation Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the navigation mode the Enterprise Keyboard on a Zebra Android device will use to provide its user experience.
- If the value ***Tab-based (new)*** is chosen, then the Enterprise Keyboard will use the new user experience wherein different tabs can be used to select the desired keyboard.
- If the value ***Key-based (legacy)*** is chosen, then the Enterprise Keyboard will use the legacy user experience wherein keys can be used to select the desired keyboard.


**Detail Information:** 

- Key = "ekbNavigationMode" 

- Type = string 

- Choices = ***Tab-based (new)*** , ***Key-based (legacy)*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Numeric Layout Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the numeric layout mode the Enterprise Keyboard on a Zebra Android device will use when it determines that a numeric keyboard should be displayed.
- If the value ***Telephone Mode*** is chosen, then the Enterprise Keyboard will display a numeric keyboard in telephone mode (e.g. 123, 456, 789).
- If the value ***Calculator Mode*** is chosen, then the Enterprise Keyboard will display a numeric keyboard in calculator mode (e.g. 789, 456, 123).


**Detail Information:** 

- Key = "ekbNumericLayoutMode" 

- Type = string 

- Choices = ***Telephone Mode*** , ***Calculator Mode*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### Show Alphanumeric Tab


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show the alphanumeric tab to allow selection of the alphanumeric keyboard.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowAlphaNumericTab" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Show Numeric Tab


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show the numeric tab to allow selection of the numeric keyboard.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowNumericTab" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Show Scan Tab


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show the scan tab to allow control of barcode scanning.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowScanTab" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Show Symbol Tab


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show the symbol tab to allow selection of the special symbols keyboard.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowSymbolTab" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Show Voice Input Key


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will show a key to invoke voice input (if supported).
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowVoiceInputKey" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Preferred Tab


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the preferred tab the Enterprise Keyboard on a Zebra Android device will select by default when textual data is being entered.
- If the value ***Numeric*** is chosen, then the Enterprise Keyboard will select the Numeric tab by default when textual data is being entered.
- If the value ***Alphanumeric*** is chosen, then the Enterprise Keyboard will show the Alphanumeric tab by default when textual data is being entered.
- If the value ***Symbol*** is chosen, then the Enterprise Keyboard will show the Symbol tab by default when textual data is being entered.
- If the value ***Scan*** is chosen, then the Enterprise Keyboard will show the Scan tab by default when textual data is being entered.


**Detail Information:** 

- Key = "ekbSelectPreferredTab" 

- Type = string 

- Choices = ***Numeric*** , ***Alphanumeric*** , ***Symbol*** , ***Scan*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Suggest Contact Names


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device showing contact name suggestions while typing based on past actions will be turned on (enabled) or turned off (disabled).
- If the value ***Off*** is chosen, then contact name suggestions will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then contact name suggestions will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowContactNamesSuggestions" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Suggest Misspelling Corrections


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device showing suggestions for corrections of misspelled words while typing will be turned on (enabled) or turned off (disabled).
- If the value ***Off*** is chosen, then correction suggestions will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then correction suggestions will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbShowCorrectionSuggestions" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Popup on Keypress


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have key popup on each keypress turned on (enabled) or turned off (disabled) wherein a visible indication that thekey was pressed occurs.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbPopupOnKeypress" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Sound on Keypress


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have sound on each keypress turned on (enabled) or turned off (disabled) wherein an audible indication that the key was pressed occurs.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbSoundOnKeypress" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the volume mode that will be used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress.
- If the value ***System Default Volume*** is chosen, then the System Default Volume for keypress sounds will be used.
- If the value ***Specified Volume*** is chosen, then a specified volume will be used and the Managed Configuration **Volume** MUST also be specified to supply that volume.


**Detail Information:** 

- Key = "ekbSoundOnKeypressVolumeMode" 

- Type = string 

- Choices = ***System Default Volume*** , ***Specified Volume*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Volume


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the volume (from 0 to 100) that will be used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress, and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Sound on Keypress** and the value ***System Default Volume*** is specified for the Managed Configuration **Mode**.


**Detail Information:** 

- Key = "ekbSoundOnKeypressVolume" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Vibrate on Keypress


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device will have vibration on each keypress turned on (enabled) or turned off (disabled) wherein a tactile indication that the key was pressed occurs.
- If the value ***Off*** is chosen, then this feature will be turned off (disabled), and hence it will not be available for use in entering data using the Enterprise Keyboard.
- If the value ***On*** is chosen, then this feature will be turned on (enabled), and hence it will be available for use in entering data using the Enterprise Keyboard.


**Detail Information:** 

- Key = "ekbVibrateOnKeypress" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the duration mode that will be used by the Enterprise Keyboard on a Zebra Android device when vibrate occurs on each keypress.
- If the value ***System Default Duration*** is chosen, then the System Default Duration for keypress vibrate will be used.
- If the value ***Specified Duration*** is chosen, then a specified duration will be used and the Managed Configuration **Duration** MUST also be specified to supply that duration.


**Detail Information:** 

- Key = "ekbVibrateOnKeypressDurationMode" 

- Type = string 

- Choices = ***System Default Duration*** , ***Specified Duration*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Duration


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the duration (from 0 to 100 milliseconds) that will be used by the Enterprise Keyboard on a Zebra Android device when a vibrate occurs on each keypress, and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Vibrate on Keypress** and the value ***System Default Duration*** is specified for the Managed Configuration **Mode**.


**Detail Information:** 

- Key = "ekbVibrateOnKeypressDuration" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Alpha P1


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Alpha P1 Key (located on the Alpha keyboard at Row 1, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapAlphaP1" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Numeric P1


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Numeric P1 Key (located on the Numeric keyboard at Row 1, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapNumericP1" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Numeric P2


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Numeric P2 Key (located on the Numeric keyboard at Row 2, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapNumericP2" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Numeric P3


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Numeric P3 Key (located on the Numeric keyboard at Row 3, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapNumericP3" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Numeric P4


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Numeric P4 Key (located on the Numeric keyboard at Row 4, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapNumericP4" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Remap Symbol P1


**Description:** 

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device will perform when the Symbol P1 Key (located on the Symbol keyboard at Row 4, Column 1) is pressed.
Possible values can be:
- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. Allowable values can be determined from the Android documentation: https://developer.android.com/reference/android/view/KeyEvent.
- The value ***EMOJI*** cause the remapped key to switch to the EMOJI keyboard.


**Detail Information:** 

- Key = "ekbRemapSymbolP1" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


## Enterprise NFC Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Enterprise NFC settings on a Zebra Android device.


**Detail Information:** 

- Key = "nfcStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Reset to Defaults


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to reset all the Enterprise NFC settings to their factory default values on a Zebra Android device.


**Detail Information:** 

- Key = "nfcResetToDefaults" 

- Type = string 

- Choices = ***Do Not Reset*** , ***Reset*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type A Tags


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether Enterprise NFC should read NFC Type A Tags.
- If the value ***Do Not Read*** is chosen, then Enterprise NFC will NOT attempt to read NFC Type A Tags. This could increase the speed of reading other tag types in cases where Type A Tags are not used.
- If the value ***Read*** is chosen, then Enterprise NFC will attempt to read NFC Type A Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.


**Detail Information:** 

- Key = "nfcReadTypeATags" 

- Type = string 

- Choices = ***Do Not Read*** , ***Read*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type B Tags


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether Enterprise NFC should read NFC Type BTags.
- If the value ***Do Not Read*** is chosen, then Enterprise NFC will NOT attempt to read NFC Type B Tags. This could increase the speed of reading other tag types in cases where Type B Tags are not used.
- If the value ***Read*** is chosen, then Enterprise NFC will attempt to read NFC Type B Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.


**Detail Information:** 

- Key = "nfcReadTypeBTags" 

- Type = string 

- Choices = ***Do Not Read*** , ***Read*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type F Tags


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether Enterprise NFC should read NFC Type F Tags.
- If the value ***Do Not Read*** is chosen, then Enterprise NFC will NOT attempt to read NFC Type F Tags. This could increase the speed of reading other tag types in cases where Type F Tags are not used.
- If the value ***Read*** is chosen, then Enterprise NFC will attempt to read NFC Type F Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.


**Detail Information:** 

- Key = "nfcReadTypeFTags" 

- Type = string 

- Choices = ***Do Not Read*** , ***Read*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type V Tags


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether Enterprise NFC should read NFC Type V Tags.
- If the value ***Do Not Read*** is chosen, then Enterprise NFC will NOT attempt to read NFC Type V Tags. This could increase the speed of reading other tag types in cases where Type V Tags are not used.
- If the value ***Read*** is chosen, then Enterprise NFC will attempt to read NFC Type V Tags. This might decrease the speed of reading tags unless reading of other tag types is turned off.


**Detail Information:** 

- Key = "nfcReadTypeVTags" 

- Type = string 

- Choices = ***Do Not Read*** , ***Read*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Use NFC Data Exchange Format (NDEF)


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether Enterprise NFC should attempt to use NFC Data Exchange Format (NDEF) when reading tags.
- If the value ***Do Not Use*** is chosen, then Enterprise NFC will NOT attempt tp read NDEF formatted tags. This could increase the speed of reading non-NDEF tags by not spending unnecessary time trying to interpret tag data according to NDEF formatting rules.
- If the value ***Use*** is chosen, then Enterprise NFC will attempt to read NDEF formatted tags. This may decrease speed somewhat, compared to reading unformatted tags, but increases flexibility by allowing applications to receive tag data interpreted according to NDEF formatting rules.


**Detail Information:** 

- Key = "nfcUseNDEF" 

- Type = string 

- Choices = ***Do Not Use*** , ***Use*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Polling Mode


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the polling mode that the Enterprise NFC should use.
- If the value ***Hybrid*** is chosen, then Enterprise NFC will poll in a manner designed to strike a reasonable balance between polling speed and battery life.
- If the value ***Standard*** is chosen, then then Enterprise NFC will poll in a manner designed to maximize polling speed. This may increase battery drain but will reduce tag detection time.
- If the value ***Low Power*** is chosen, then Enterprise NFC will poll in a manner designed to minimize impact on battery life. This may increase the overall tag detection time, but will reduce battery drain.


**Detail Information:** 

- Key = "nfcPollingMode" 

- Type = string 

- Choices = ***Hybrid*** , ***Standard*** , ***Low Power*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### CPU Boost


**Description:** 

:broken_heart: **CONTENT-TBD**


**Detail Information:** 

- Key = "nfcCpuBoost" 

- Type = string 

- Choices = ***Do Not Boost*** , ***Boost*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type A Tag Baud Rate


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Baud Rate that Enterprise NFC should use to communicate to Type A Tags.
If the value ***106 kbps*** is chosen, then Enterprise NFC will always communicate to Type A Tags using a Baud Rate of 106 kbps.
If the value ***212 kbps*** is chosen, then Enterprise NFC will communicate to Type A Tags using a Baud Rate of 106 kbps or 212 kbps, depending on the Baud Rate supported by the tag.
If the value ***424 kbps*** is chosen, then Enterprise NFC will communicate to Type A Tags using a Baud Rate of 106 kbps, 212 kbps, or 424 kbps, depending on the Baud Rate supported by the tag.
If the value ***Any*** is chosen, then Enterprise NFC will communicate to Type A Tags using any available (automatically selected) Baud Rate supported by the tag.


**Detail Information:** 

- Key = "nfcTypeABaudRate" 

- Type = string 

- Choices = ***106 kbps*** , ***212 kbps*** , ***424 kbps*** , ***Any*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Type B Tag Baud Rate


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Baud Rate that Enterprise NFC should use to communicate to Type B Tags.
- If the value ***106 kbps*** is chosen, then Enterprise NFC will always communicate to Type B Tags using a Baud Rate of 106 kbps.
- If the value ***212 kbps*** is chosen, then Enterprise NFC will communicate to Type B Tags using a Baud Rate of 106 kbps or 212 kbps, depending on the Baud Rate supported by the tag.
- If the value ***424 kbps*** is chosen, then Enterprise NFC will communicate to Type B Tags using a Baud Rate of 106 kbps, 212 kbps, or 424 kbps, depending on the Baud Rate supported by the tag.
- If the value ***Any*** is chosen, then Enterprise NFC will communicate to Type B Tags using any available (automatically selected) Baud Rate supported by the tag.


**Detail Information:** 

- Key = "nfcTypeBBaudRate" 

- Type = string 

- Choices = ***106 kbps*** , ***212 kbps*** , ***424 kbps*** , ***Any*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Peer to Peer Mode


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether the Enterprise NFC should use *Peer-to-Peer Mode*. This is generally used when two NFC enabled devices want to communicate with each other to exchange data.
- If the value ***Do Not Use*** is chosen, then Enterprise NFC will NOT use *Peer-to-Peer Mode* and hence will operate only in *Read/Write Mode*, unless it is also configured to operated in *Card Emulation Mode* by using the Managed Configuration **Card Emulation Mode**.
- If the value ***Use*** is chosen, then Enterprise NFC will use *Peer-to-Peer Mode* and hence will operate in both *Peer-to-Peer Mode* and *Read/Write Mode*, and and optionally also in *Card Emulation Mode*, if configured using the Managed Configuration **Card Emulation Mode**.


**Detail Information:** 

- Key = "nfcPeerToPeerMode" 

- Type = string 

- Choices = ***Do Not Use*** , ***Use*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Card Emulation Mode


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether the Enterprise NFC should use *Card Emulation Mode*. This is generally used when an NFC enabled device wants to emulate a *Smart Card*.
- If the value ***Do Not Use*** is chosen, then Enterprise NFC will NOT use *Card Emulation Mode* and hence will operate only in *Read/Write Mode*, unless it is also configured to operated in *Peer-to-Peer Mode* by using the Managed Configuration **Peer to Peer Mode**.
- If the value ***Use*** is chosen, then Enterprise NFC will use *Card Emulation Mode* and hence will operate in both *Card Emulation Mode* and *Read/Write Mode* and optionally also in *Peer-to-Peer Mode*, if configured using the Managed Configuration **Peer to Peer Mode**.


**Detail Information:** 

- Key = "nfcCardEmulationMode" 

- Type = string 

- Choices = ***Do Not Use*** , ***Use*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Use on Lock Screen


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether the Enterprise NFC should be allowed to be used from the Lock Screen on a Zebra Android device.
- If the value ***Disallow*** is chosen, then Enterprise NFC will NOT allow NFC operations to be performed when the device is at the lock screen.
- If the value ***Allow*** is chosen, then Enterprise NFC will allow NFC operations to be performed when the device is at the lock screen.


**Detail Information:** 

- Key = "nfcUseOnLockScreen" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


## Ethernet Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the Ethernet Adapter on a Zebra Android device.


**Detail Information:** 

- Key = "ethernetStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Power


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Power State of the Ethernet Adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetPower" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Control by User


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Ethernet Power control by the Device User will be allowed or not.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetPowerControlByUser" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Use Proxy Server


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Proxy Server should be used to access the Internet from the network accessed via the Ethernet Adapter.
When specifying that a Proxy Server is to be used, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetUseProxyServer" 

- Type = string 

- Choices = ***Use a Proxy Server*** , ***Do NOT Use a Proxy Server*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Proxy Server


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Proxy Server used to access the Internet from the network accessed via the Ethernet Adapter.
While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetProxyServer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Port


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Port that will be used to reach the Proxy Server to access the Internet from the network accessed via the Ethernet Adapter.
While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetProxyServerPort" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Bypass List


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Proxy Server Bypass List which specifies addresses that should bypass the Proxy Server used to access the Internet from the network accessed via the Ethernet Adapter.
While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Port**, and **Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetProxyServerBypassList" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### IP Address Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure how an IP Address will be assigned to the Ethernet adapter.
- If the value ***Dynamic (DHCP)*** is chosen, then an IP Address for the Ethernet adapter will be automatically acquired by the DHCP Client from the DHCP Server.
- If the value ***Static (Manual)*** is chosen, then an IP Address for the Ethernet adapter will be assigned based on the values contained in the Managed Configurations **IP Address**, **Gateway Address**, **Network Mask**, **Primary DNS**, and **Secondary DNS**, which MUST also be specified to supply the required values.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetIpAddrType" 

- Type = string 

- Choices = ***Dynamic (DHCP)*** , ***Static (Manual)*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### IP Address


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the IP Address to be assigned to the Ethernet adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetIpAddress" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Gateway Address


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the Gateway Address to be assigned to the Ethernet adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetGatewayAddress" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Network Mask


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the Network Mask to be assigned to the Ethernet adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetNetMask" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Primary DNS


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the Primary DNS Server Address to be assigned to the Ethernet adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetDNS1" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Secondary DNS


**Description:** 

This Managed Configuration allows an Administrator using an EMM to manually configure the Secondary DNS Server Address to be assigned to the Ethernet adapter.
A given device may or may not support an Ethernet Adapter. An attempt to configure the Ethernet Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "ethernetDNS2" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


## Firmware Over The Air Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure how Firmware Over The Air (FOTA) operations are performed and and to explicitly initiate such operations on a Zebra Android device.


**Detail Information:** 

- Key = "fotaStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Device User Control Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to control the Mode of the LifeGuard Over The Air Client via the in-device Client UI.


**Detail Information:** 

- Key = "fotaUserControlMode" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.1.


### Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the mode used to perform Firmware Over The Air (FOTA) operations on a Zebra Android device.
- When the Mode value ***Manual*** is chosen, then Firmware Over The Air (FOTA) operations will be performed in *Manual Mode* only when the Managed Configuration **Mode Manual Action** is specified and one or more of the additional Managed Configurations **Enterprise Reset SUW Bypass**, **OS Upgrade Suppress Reboot**, **OS Update/Upgrade/Downgrade File**, **Verify Manifest File** should be specified.
- When the Mode value ***Automatic*** is chosen, then Firmware Over The Air (FOTA) operations will be performed in *Automatic Mode* and hence no additional Managed Configurations should be specified.


**Detail Information:** 

- Key = "fotaMode" 

- Type = string 

- Choices = ***Manual*** , ***Automatic*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.1.


### Mode Manual Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to initiate an Action in *Manual Mode* to explicitly perform a Firmware Over The Air (FOTA) operation on a Zebra Android device and should be specified only if the value ***Manual*** is specified for the Managed Configuration **Mode**.
- If the value ***Enterprise Reset*** is chosen, then the additional Managed Configuration **Enterprise Reset SUW Bypass** MAY be specified to control whether the Setup Wizard (SUW) will be bypassed on GMS devices following the Enterprise Reset.
- If the value ***Factory Reset*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***Full Device Wipe*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***OS Update*** is chosen, then the additional Managed Configuration **OS Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation.
Note that the Action value ***OS Update*** can be used to perform either an Upgrade or Downgrade operation on devices with Android versions < 8.0 but can only be used to perform an Upgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do a Downgrade, then the Downgrade will NOT occur on devices with Android versions >= 8.0.
- If the value ***Verify Manifest*** is chosen, then the additional Managed Configuration **Verify Manifest File** MUST be specified to provide the path and file name of the Manifest file (which must already be in the device file system at the specified location with the specified name) to be used to perform the verification.
- If the value ***OS Upgrade*** is chosen, then the additional Managed Configuration **OS Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation. Also, the Managed Configuration **OS Upgrade Suppress Reboot** MAY be specified to determine whether a reboot should automatically be performed following an A/B upgrade.
Note that the Action value ***OS Upgrade*** can only be used to perform an Upgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do a Downgrade, then the Downgrade will NOT occur.
- If the value ***OS Downgrade*** is chosen, then the additional Managed Configuration **OS Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location with the specified name) to be used to perform the operation.
Note that the Action value ***OS Downgrade*** can only be used to perform a Downgrade operation on devices with Android versions >= 8.0. Furthermore, if the provided ZIP file attempts to do an Upgrade, then the Upgrade will NOT occur.


**Detail Information:** 

- Key = "fotaAction" 

- Type = string 

- Choices = ***Enterprise Reset*** , ***Factory Reset*** , ***Full Device Wipe*** , ***OS Update*** , ***Verify Manifest*** , ***OS Upgrade*** , ***OS Downgrade*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Enterprise Reset SUW Bypass


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether the Setup Wizard (SUW) will be bypassed on GMS devices when performing an Enterprise Reset, and should be specified if and only if the Action value ***Enterprise Reset*** is chosen for the Managed Configuration **Mode Manual Action**.


**Detail Information:** 

- Key = "fotaActionEnterpriseResetSuwBypass" 

- Type = string 

- Choices = ***Bypass*** , ***Do NOT Bypass*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### OS Upgrade Suppress Reboot


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether the automatic reboot that would normally be performed following the successful completion of an A/B Upgrade should be suppressed, and should be specified if and only if the Action value ***OS Upgrade*** is chosen for the Managed Configuration **Mode Manual Action**. Note that if the automatic reboot is suppressed, then the reboot will still be required to activate the new OS following the A/B Upgrade, and the later performance of that reboot, at a suitable time, will become the responsibility of the EMM choosing to suppress the automatic reboot.


**Detail Information:** 

- Key = "fotaActionOsUpgradeSuppressReboot" 

- Type = string 

- Choices = ***Suppress*** , ***Do NOT Suppress*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### OS Update/Upgrade/Downgrade File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the path and file name of an OS Update or Patch image file, which must already exist at the specified location in the device file system, to be used to update a Zebra Android device and should be specified if and only if one of the Action values ***OS Update***, ***OS Upgrade***, or ***OS Downgrade*** is chosen for the Managed Configuration **Mode Manual Action**.


**Detail Information:** 

- Key = "fotaActionOsUpdateFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Verify Manifest File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the path and file name of a Manifest file, which must already exist at the specified location in the device file system, to be used to verify support on a Zebra Android device and should be specified if and only if the Action value ***Verify Manifest*** is chosen for the Managed Configuration **Mode Manual Action**.


**Detail Information:** 

- Key = "fotaActionVerifyManifestFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


## GMS Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Google Mobile Services (GMS) settings on a Zebra Android device.


**Detail Information:** 

- Key = "gmsStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### GMS Feature Set


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the amount of functionality of Google Mobile Services (GMS), will be enabled for use.
- If the value ***All - Full Set of GMS Features*** is chosen, then the the entire set of Google Mobile Services (GMS), will be enabled for use. Note that if Google Mobile Services are allowed to be used, then may collect and send data to Google.
- If the value ***Restricted - Fixed Minimal Set of GMS Features*** is chosen, then a limited (fixed) subset of Google Mobile Services (GMS), will be enabled for use. The subset will automatically be chosen to ensure that basic device functionality is not impaired, that all enabled Google Mobile Services operate usefully, and that no enabled Google Mobile Services send any data to Google.


**Detail Information:** 

- Key = "gmsFeatureSet" 

- Type = string 

- Choices = ***All - Full Set of GMS Features*** , ***Restricted - Fixed Minimal Set of GMS Features*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


## GPRS Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the General Packet Radio Service (GPRS) subsystem on a Zebra Android device by controlling the configurations of GPRS Access Point Name (APNs).


**Detail Information:** 

- Key = "gprsStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.3.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an action to manage the GPRS APNs on a Zebra Android device.
The value of this Managed Configuration specifies one of the following actions:
- If the value ***AddApn*** is chosen, then a new APN will be added, or an existing APN will be overwritten with a new APN. The additional Managed Configuration **Add APN Name** MUST also be specified to provide the name of the new APN to be added or the name of the existing APN to be replaced. In addition, some or all of the following Managed Configurations MUST also be specified to provide the APN definition:
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
- If the value ***RemoveApn*** is chosen, then an existing APN will be removed. The additional Managed Configuration **Remove APN Name** MUST also be specified to provide the name of the APN to be removed.
- If the value ***RemoveAllApns*** is chosen, then all existing APNs will be removed. No additional Managed Configuration need to be specified.


**Detail Information:** 

- Key = "gprsAction" 

- Type = string 

- Choices = ***AddApn*** , ***RemoveApn*** , ***RemoveAllApns*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.1.


### Add APN Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the name of an APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "gprsActionAddApnName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN Replace If Existing


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure what happens when an APN already exists with the APN name being added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
- If the value ***Replace Existing*** is chosen, then if an APN with the name as specified in the Managed Configuration **Add APN Name** already exists, then it will be replaced by the definition of the APN being added.
- If the value ***Keep Existing*** is chosen, then if an APN with the name as specified in the Managed Configuration **Add APN Name** already exists, then it will NOT be replaced. The existing APN will be preserved and the new APN will NOT be added.


**Detail Information:** 

- Key = "gprsActionAddApnReplaceIfExisting" 

- Type = string 

- Choices = ***Replace Existing*** , ***Keep Existing*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN Make Default


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a new APN being added should become the new default APN and should be specified only if the value ***AddApn*** is specified forthe Managed Configuration **Action**.
- If the value ***Yes*** is chosen, then the new APN being added will become the new default APN and will be preferred over other APNs when establishing a cellular data connection.
- If the value ***No*** is chosen, then the new APN will not become the new default APN and whatever APN was previously the default will remain the default.


**Detail Information:** 

- Key = "gprsActionAddApnMakeDefault" 

- Type = string 

- Choices = ***Yes*** , ***No*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN Access Point


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a value that uniquely identifies an APN on the network and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
APN Identifiers are allocated by cellular carriers to identify the networks that can be reached via various APNs. When acquiring a cellular data plan from a carrier, an APN Identifier will be provided, typically along with other information that qualifies or controls access to the network it identifies.


**Detail Information:** 

- Key = "gprsActionAddApnAccessPoint" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN User Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a user name that can be used to authenticate to an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
A network accessed via a given APN Identifier may or may not require authentication. If authentication is required, then a user name is generally always required and a password MAY also be required.


**Detail Information:** 

- Key = "gprsActionAddApnUserName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN Password


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a password that can be used to authenticate to an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
A network accessed via a given APN Identifier may or may not require authentication. If authentication is required, then a user name is generally always required and a password MAY also be required.


**Detail Information:** 

- Key = "gprsActionAddApnPassword" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Add APN Port


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the port number of an HTTP proxy to use for all traffic over the network accessed via an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
If a Proxy is required, then a Port is also generally always required.


**Detail Information:** 

- Key = "gprsActionAddApnPort" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN Proxy


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the address or name of an HTTP proxy to use for all traffic over the network accessed via an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
If a Proxy is required, then a Port is also generally always required.


**Detail Information:** 

- Key = "gprsActionAddApnProxy" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN MMS Port


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the port number of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed via an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
If an MMS Proxy is required, then an MMS Port is also generally always required.


**Detail Information:** 

- Key = "gprsActionAddApnMmsPort" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN MMS Proxy


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the address or name of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed via an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
If an MMS Proxy is required, then an MMS Port is also generally always required.


**Detail Information:** 

- Key = "gprsActionAddApnMmsProxy" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN Server


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a WAP Gateway Server address that should be used for an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
WAP Gateways are rarely, if ever, used on or supported by modern cellular carrier networks.


**Detail Information:** 

- Key = "gprsActionAddApnServer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN MMSC


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Multimedia Messaging Service Center (MMSC) address required to route MMS traffic over the network accessed via an APN and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "gprsActionAddApnMmsc" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Type of APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
The value to specify for Type should be obtained from the cellular carrier whose network is to be accessed via the APN.


**Detail Information:** 

- Key = "gprsActionAddApnType" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN MCC


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Mobile Country Code (MCC) of the APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
The MCC generally match the SIM card being used or the APN will not be usable.


**Detail Information:** 

- Key = "gprsActionAddApnMcc" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add APN MNC


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Mobile Network Code (MNC) of the APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
The MNC generally match the SIM card being used or the APN will not be usable.


**Detail Information:** 

- Key = "gprsActionAddApnMnc" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.1.


### Add Authentication Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Type of Authentication to be used for APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
- If the value ***None*** is chosen, then No Authentication Protocol will be used to authenticate for the APN.
- If the value ***PAP*** is chosen, then the Password Authentication Protocol (PAP) will be used to authenticate for the APN.
- If the value ***CHAP*** is chosen, then the Challenge Handshake Authentication Protocol (CHAP) will be used to authenticate for the APN.


**Detail Information:** 

- Key = "gprsActionAddApnAuthenticationType" 

- Type = string 

- Choices = ***None*** , ***PAP*** , ***CHAP*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.3.


### Add MVNO Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the MVNO (Mobile Virtual Network Operator) Type to be used for APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action**.
- If the value ***None*** is chosen, then No MVNO will be used to configured for the APN.
- If the value ***SPN*** is chosen, then the MVNO will be specified via an SPN (Service Provider Name) value for the APN, which must be specified via the additional Managed Configuration **Add MVNO Match Data**.
- If the value ***IMSI*** is chosen, then the MVNO will be specified via an IMSI (International Mobile Subscriber Identity) value for the APN, which must be specified via the additional Managed Configuration **Add MVNO Match Data**.
- If the value ***GID*** is chosen, then the MVNO will be specified via an GID (Group Identifier) value for the APN, which must be specified via the additional Managed Configuration **Add MVNO Match Data**.
- If the value ***ICCID*** is chosen, then the MVNO will be specified via an GID (Integrated Circuit Card ID) value for the APN, which must be specified via the additional Managed Configuration **Add MVNO Match Data**.


**Detail Information:** 

- Key = "gprsActionAddApnMvnoType" 

- Type = string 

- Choices = ***None*** , ***SPN*** , ***IMSI*** , ***GID*** , ***ICCID*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.4.


### Add MVNO Match Data


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the MVNO (Mobile Virtual Network Operator) Match Data to be used for APN to be added and should be specified only if the value ***AddApn*** is specified for the Managed Configuration **Action** and if a value other than ***None*** is specified for the Managed Configuration **Add MVNO Type**.
The exact value to be specified depends on the MVNO Type specified. Consult your MVNO carrier for information on the MVNO Type and MVNO Match Data value to be used.


**Detail Information:** 

- Key = "gprsActionAddApnMvnoMatchData" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.4.


### Remove APN Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the name of an APN to be removed and should be specified only if the value ***RemoveApn*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "gprsActionRemoveApnName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.1.


## General UI Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure General User Interface (UI) aspects of a Zebra Android device.
This Managed Configuration group allows an Administrator using an EMM to:
- Configure the *Locale* to be used on the device.


**Detail Information:** 

- Key = "uiStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.1.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform a miscellaneous UI action on a Zebra Android device.
The value of this Managed Configuration specifies one of the following actions:
- If the Action value ***Clear Clipboard*** is chosen, then any data currently in the clipboard of the Zebra Android device will be discarded, This will cause the data to no longer be available to paste.
- If the Action value ***Clear Recently Used Apps List*** is chosen, then the list of previously used (launched) applications will be cleared. This can be used to prevent the device user from accessing previously used applications or control their behavior or configuration from the list presented when the Recent button is pressed.
- If the Action value ***Clear Application Cache*** is chosen, then the cache of a specified application will be cleared. The most common use of this would be to delete cached information, such as login credentials or state, and thereby return the application to its default behavior. The use of this Action value requires that the additional Managed Configuration **Clear Application Data Package** be specified to identify the application whose cache is to be cleared.
- If the Action value ***Turn On All GMS Applications*** is chosen, then all GMS applications that are considered "safe" to disable will be enabled.
- If the Action value ***Turn Off All GMS Applications*** is chosen, then all GMS applications that are considered "safe" to disable will be disabled.
Note: Since it is possible to turn GMS Applications on or off individually, using the values ***Turn On All GMS Applications*** and ***Turn Off All GMS Applications*** will guarantee only that all GMS Applications are On or Off ***immediately after*** the requested Action is completed. Subsequent Actions could result in any mixture of GMS Applications being turned On or Off. The behavior of the system or any GMS applications under such conditions is not guaranteed.


**Detail Information:** 

- Key = "uiAction" 

- Type = string 

- Choices = ***Clear Clipboard*** , ***Clear Recently Used Apps List*** , ***Clear Application Cache*** , ***Turn On All GMS Applications*** , ***Turn Off All GMS Applications*** , ***Clear Application User Data*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.2.


### Clear Application Data Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a package name for which the cache should be cleared with performing a Clear Application Cache Action.
The value of this Managed Configuration should be specified if an only if the Action value ***Clear Application Cache*** is chosen for the Managed Configuration **Action** to specify the package name of the application for which the cache should be cleared.


**Detail Information:** 

- Key = "uiActionClearApplicationCachePackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


###  Clear Application Data Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a package name for which all user data should be cleared when performing a Clear Application User Data Action.
The value of this Managed Configuration should be specified if an only if the Action value ***Clear Application User Data*** is chosen for the Managed Configuration **Action** to specify the package name of the application for which the user data should be cleared.


**Detail Information:** 

- Key = "uiActionClearApplicationUserDataPackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


### Allow Device User Control of Do Not Disturb Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be presented with the option to control the state of Do Not Disturb Mode from the Menu presented when the power key is held down on a Zebra Android device.


**Detail Information:** 

- Key = "uiUserControlDoNotDisturbMode" 

- Type = string 

- Choices = ***Hide*** , ***Show*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### App Info Icon on Long Press on Recent App Header


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Show*** is chosen, then an App Info Icon will be shown on Long Press on Recent App Header
- If the value ***Hide*** is chosen, then an App Info Icon will NOT be shown on Long Press on Recent App Header


**Detail Information:** 

- Key = "uiAppInfoOnLongPressRecentAppHeader" 

- Type = string 

- Choices = ***Show*** , ***Hide*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.2.


### Auto Correct


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User prompted for corrections to potential mistakes made during entry of data on a Zebra Android device.
- If the value ***Off*** is chosen, then the Device User will NOT be prompted to correct potential mistakes during data entry.
- If the value ***On*** is chosen, then the Device User will be prompted to correct potential mistakes during data entry.


**Detail Information:** 

- Key = "uiAutoCorrect" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Battery Charging LED


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the charging system be allowed to display the battery charging state using the charging LED when a Zebra Android device is in operating mode.
- If the value ***Disable*** is chosen, then the charging system will be prevented from using the charging LED to display the battery charging state, which may reduce distractions in environments where many devices are charging.
- If the value ***Enable*** is chosen, then the charging system will be allowed to use the charging LED to display the battery charging state, which may make it easier to distinguish a fully charged device from a partially charged device.


**Detail Information:** 

- Key = "uiBatteryChargingLED" 

- Type = string 

- Choices = ***Disable*** , ***Enable*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Battery Swap UI Popup


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold.
- If the value ***Disable*** is chosen, then the Device User will NOT automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold.
- If the value ***Enable*** is chosen, then the Device User will automatically be presented with the Battery Swap UI when the device battery level drops below a fixed threshold, perhaps helping to avoid emergency shutdown and potential loss of data as a result.


**Detail Information:** 

- Key = "uiBatterySwapPopup" 

- Type = string 

- Choices = ***Disable*** , ***Enable*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Display of Navigation Bar


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the on-screen Navigation Bar will be displayed and hence whether it will take up screen real estate and can be used to navigate the device UI.
- If the value ***Disable*** is chosen, then the on-screen Navigation Bar will NOT be displayed and hence whether it will NOT take up any screen real estate, and hence cannot be used to navigate the device UI.
- If the value ***Enable*** is chosen, then the on-screen Navigation Bar will be displayed and hence whether it will take up any screen real estate, and hence be used to navigate the device UI.


**Detail Information:** 

- Key = "uiDisplayNavigationBar" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### Launcher Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the package name of the default launcher application. This would typically be used when installing an new launcher (home screen) application as a replacement for the default Android launcher.


**Detail Information:** 

- Key = "uiLauncherPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Locale


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Locale* to be used on a Zebra Android device.
A *Locale* is typically specified by selecting a *Language* (e.g. English) and optionally a *Region* (e.g. the United States).
This Managed Configuration uses values which combine a *Language* and optionally a *Region* into a single identifier.
- When only a *Language* is to be specified, the identifier will be the name of the *Language* (e.g. CHINA).
- When both a *Language* and a *Region* are to be specified, the identifier will be the name of the *Region* followed by the name of the *Language*, separated by an underscore (e.g. CANADA_FRENCH).


**Detail Information:** 

- Key = "uiLocale" 

- Type = string 

- Choices = ***CANADA*** , ***CANADA_FRENCH*** , ***CHINA*** , ***CHINESE*** , ***ENGLISH*** , ***FRANCE*** , ***FRENCH*** , ***GERMAN*** , ***GERMANY*** , ***ITALIAN*** , ***ITALY*** , ***JAPAN*** , ***JAPANESE*** , ***KOREA*** , ***KOREAN*** , ***PRC*** , ***SIMPLIFIED_CHINESE*** , ***TAIWAN*** , ***TRADITIONAL_CHINESE*** , ***UK*** , ***US*** , ***SPANISH*** , ***US_SPANISH*** , ***BRAZIL_PORTUGUESE*** , ***PORTUGUESE*** , ***AUSTRALIA_ENGLISH*** , ***INDIA_ENGLISH*** , ***SWEDEN_SWEDISH*** , ***NORWAY_NORWEGIAN-BOKMÃ…L*** , ***FINLAND_FINISH*** , ***DENMARK_DANISH*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


### Long Press on Home Key to Launch Google Assistant


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Allow*** is chosen, then a Long Press on the Home Key will Launch the Google Assistant.
- If the value ***Disallow*** is chosen, then a Long Press on the Home Key will NOT Launch the Google Assistant.


**Detail Information:** 

- Key = "uiLongPressHomeLaunchesGoogleAssistant" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.2.


### Network Notification Popup


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Network Notification Popup will be presented to inform the Device User that their network may be monitored.
- If the value ***Disable*** is chosen, then the Network Notification Popup will NOT be presented, and hence the Device User will NOT be notified that their network may be monitored, even if circumstances warrant such notification.
- If the value ***Enable*** is chosen, then the Network Notification Popup may be presented, and hence the Device User may be notified that their network may be monitored, if circumstances warrant such notification.


**Detail Information:** 

- Key = "uiNetworkNotificationPopup" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### On-Screen Power Button


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the *On Screen Power Button* feature will be turned ON or OFF. the *On Screen Power Button* feature allows a button to be displayed which allows the Device User to turn the device off, similar to the operation of the physical power button (if any) and can be used to improve the user experience in cases where a physical power button is not present or is not convenient to use, such as when the Device User is wearing gloves.
- If the value ***Off*** is chosen, then the *On Screen Power Button* feature will be turned OFF and hence the on-screen power button will NOT be displayed.
- If the value ***On*** is chosen, then the *On Screen Power Button* feature will be turned ON and hence the on-screen power button WILL be displayed.


**Detail Information:** 

- Key = "uiOnScreenPowerButton" 

- Type = string 

- Choices = ***Disable*** , ***Enable*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Pull Down Notification Bar


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Pull Down the Notification Bar to interact with notifications in the Notifications Panel.
- If the value ***Disable*** is chosen, then the Device User will NOT be allowed to Pull Down the Notification Bar, and hence will not be allowed to interact with notifications in the Notifications Panel.
- If the value ***Enable*** is chosen, then the Device User will be allowed to Pull Down the Notification Bar, and hence will be allowed to interact with notifications in the Notifications Panel.


**Detail Information:** 

- Key = "uiPullDownNotificationBar" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


### Show Airplane Mode in Power Key Menu


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be presented with the option to control the state of Airplane Mode from the Menu presented when the power key is held down on a Zebra Android device.


**Detail Information:** 

- Key = "uiShowAirplaneModeInPwrKeyMenu" 

- Type = string 

- Choices = ***Hide*** , ***Show*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Show Pairing Popup


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a New Pairing Popup will be presented when an unpaired peripheral device attempts to establish a new Bluetooth pairing with a Zebra Android device.
- This option has no effect on existing pairings.
- This option does not prevent new pairings that are initiated from the device to the peripheral.
- This option does not prevent new pairings from being established based on configured Silent Pairing rules.


**Detail Information:** 

- Key = "uiPairingPopup" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Show Passwords


**Description:** 

This Managed Configuration allows an Administrator using an EMM to determine whether passwords should be shown (displayed) when entered on the device or hidden (masked).
- If the value ***Off*** is chosen, then passwords will globally be hidden (masked) whenever they are being entered on the device.
- If the value ***On*** is chosen, then passwords will globally be shown (displayed) whenever they are being entered on the device.


**Detail Information:** 

- Key = "uiShowPasswords" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


### Show Virtual Keyboard when Physical Keyboard is Active


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Virtual Keyboard will be shown when the Physical Keyboard is Active.
- If the value ***Disable*** is chosen, then the Virtual Keyboard will NOT be shown if the device has a Physical Keyboard that is Active. This can help avoid the annoyance and confusing of using up screen real-estate to display an on-screen keyboard when the Device User is using a Physical Keyboard to enter data.
- If the value ***Enable*** is chosen, then the Virtual Keyboard will be shown when data entry is in progress regardless of whether the device has an Active Physical Keyboard.


**Detail Information:** 

- Key = "uiShowVirtualKeyboard" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


### Status Bar


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Android Status Bar should be displayed.
- If the value ***Hide*** is chosen, then the Android Status Bar will not be displayed, which also means that the Device User will not be allowed to interact with notifications in the Notifications Panel.
- If the value ***Enable*** is chosen, then the Android Status Bar will be displayed, which also means that the Device User might be allowed to interact with notifications in the Notifications Panel.


**Detail Information:** 

- Key = "uIStatusBar" 

- Type = string 

- Choices = ***Hide*** , ***Show*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.4.


### Use Of Clipboard


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to utilize the clipboard on a Zebra Android device to cut, copy, and paste text between applications.


**Detail Information:** 

- Key = "uiUseOfClipboard" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.2.


### Use of Date in Notification Panel to Access Clock Application


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Date in the Notification Panel can be used to invoke the Clock Application..
- If the value ***Allow*** is chosen, then clicking the Date in the Notification Panel will invoke the Clock Application.
- If the value ***Disallow*** is chosen, then clicking the Date in the Notification Panel will NOT invoke the Clock Application.


**Detail Information:** 

- Key = "uiDateInNotificationAccessClock" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.2.


### Use of Home Key


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to utilize the Home Key on a Zebra Android device to leave the current context and return to the Home/Launcher screen.
- If the value ***Off*** is chosen, then the Home key will be ignored and will cause no action if it is pressed.
- If the value ***On*** is chosen, then the Home key will be honored and will cause device to go to the Home/Launcher screen when if it is pressed.


**Detail Information:** 

- Key = "uiUseOfHomeKey" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Use of Magnification Gestures


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Use Magnification Gestures.
- If the value ***Off*** is chosen, then the Magnification Gestures will be ignored and no action will be taken if they are used by the Device User.
- If the value ***On*** is chosen, then the Magnification Gestures will be honored and appropriate action will be taken if they are used by the Device User.


**Detail Information:** 

- Key = "uiUseOfMagnificationGestures" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.0.


### Use of Recent Apps Key


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Use the Recent Apps Key to access recently launched applications.
- If the value ***Off*** is chosen, then the Recent Apps Key will be ignored, and hence the Device User will not be allowed to access recently launched applications.
- If the value ***On*** is chosen, then the Recent Apps Key will be honored, and hence the Device User will be allowed to access recently launched applications.


**Detail Information:** 

- Key = "uiUseOfRecentAppsKey" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### Use of Split Screen Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Split Screen Mode is allowed to be used on the device.
- If the value ***Off*** is chosen, then the use of Split Screen Mode will be blocked on the device.
- If the value ***On*** is chosen, then the use of Split Screen Mode will be allowed on the device.


**Detail Information:** 

- Key = "uiSplitScreenMode" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### User Control of Multi User


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Primary Device User is allowed to invoke UI to manage Multi User, including the ability to Create, Delete, and limit the actions of Secondary Users.
- If the value ***Off*** is chosen, then the Primary Device User will not be allowed to manage Secondary Users, even if the device supports multiple users.
- If the value ***On*** is chosen, then the Primary Device User will be allowed to manage Secondary Users, if the device supports multiple users.


**Detail Information:** 

- Key = "uiUserControlMultiUser" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Touch Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the operational mode of the Touch Panel in selected Zebra Android devices:
- If the value ***Stylus or Finger*** is chosen, then the Touch Panel will be configured to optimize use with a Stylus or an ungloved Finger.
- If the value ***Glove or Finger*** is chosen, then the Touch Panel will be configured to optimize use with a Gloved finger or an ungloved Finger.
- If the value ***Finger Only*** is chosen, then the Touch Panel will be configured to optimize an ungloved Finger.
- If the value ***Stylus or Glove or Finger*** is chosen, then the Touch Panel will be configured to optimize use with a Stylus, a Gloved finger, or an ungloved Finger.
- If the value ***Finger and Wet*** is chosen, then the Touch Panel will be configured to optimize use with a finger on a wet touch panel
Not all Zebra Android devices support the ability to configure the Touch Panel mode and those that do may not support every mode.
- An attempt to configure the Touch Panel mode on a device that does not support it will result in an error.
- An attempt to configure a Touch Panel mode on a device that does not support that mode will result in an error.


**Detail Information:** 

- Key = "uiTouchMode" 

- Type = string 

- Choices = ***Stylus or Finger*** , ***Glove or Finger*** , ***Finger Only*** , ***Stylus or Glove or Finger*** , ***Finger and Wet*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.0.


### Screen Protector


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the operational mode of the Touch Panel in selected Zebra Android devices:
- If selected, then the Touch Panel will be configured to optimize use with a screen Protector.
- If unselected, then the Touch Panel will be configured to optimize use without a screen Protector.
Not all Zebra Android devices support the ability to configure the Touch Panel to account for the use or a screen Protector.


**Detail Information:** 

- Key = "uiTouchScreenProtector" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


### Turn on/off the Large Key Indicator feature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the *Large Key Indicator* feature, which allows a large on-screen indicator to be displayed to indicate the state physical keypad on the device (if any) and which can assist the Device User in cases where multiple key sequences are required.
- If the value ***Off*** is chosen, then the *Large Key Indicator* feature will be turned OFF and hence the on-screen indicator will NOT be displayed.
- If the value ***On*** is chosen, then the *Large Key Indicator* feature will be turned ON and hence the on-screen indicator WILL be displayed.


**Detail Information:** 

- Key = "uiSetLKI" 

- Type = string 

- Choices = ***Turn On*** , ***Turn Off*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.0.


### Device user control of Large Key Indicator


**Description:** 

This Managed Configuration allows an Administrator using an EMM to control whether the Device User will be allowed to turn the *Large Key Indicator* feature ON or OFF.
- If the value ***Enable*** is chosen, then the Device User WILL be allowed to turn the *Large Key Indicator* feature ON or OFF.
- If the value ***Disable*** is chosen, then the Device User will NOT be allowed to turn the *Large Key Indicator* feature ON or OFF.


**Detail Information:** 

- Key = "uiUserControlLKI" 

- Type = string 

- Choices = ***Enable*** , ***Disable*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.0.


## Host Name Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to include configuration information related to the network host names.


**Detail Information:** 

- Key = "hostStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Device Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the name by which a Zebra Android device will be known on the network.


**Detail Information:** 

- Key = "hostDeviceName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


## Key Mapping Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure how the keys on the physical keyboard (if any) of the device are mapped into key and other behaviors.


**Detail Information:** 

- Key = "keymapStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an action to affect the behaviors mapped to the keys on the physical keyboard (if any) of a Zebra Android device.
The value of this Managed Configuration specifies one of the following actions:
- If the value ***Add Mapping*** is chosen, then a new mapping for a single physical key is added to the mapping tables for one or more keyboard states. The additional Managed Configuration **Add Mapping Key ID** MUST be specified to provide the physical key for which mappings are to be added or replaced. In addition, the Managed Configuration array **Add Mapping Behaviors** MUST also be specified to define the behavior(s) to be mapped to the identified physical key. If any prior mappings were applied to specify the behaviors of the identified physical key, they will all be replaced by the new specified behaviors.
- If the value ***Reset All Mappings*** is chosen, then the mapping tables are reset to their defaults. This effectively removes all mappings that have previously been added and returns the behaviors of all keys to their default out-of-box state.


**Detail Information:** 

- Key = "keymapAction" 

- Type = string 

- Choices = ***Add Mapping*** , ***Reset All Mappings*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Add Mapping Key ID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide a value that uniquely identifies a physical key on the physical keyboard of a Zebra Android device for which one or more behaviors are to be specified and should be specified only if the value ***Add Mapping*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "keymapActionAddMappingKeyId" 

- Type = string 

- Choices = ***0*** , ***1*** , ***2*** , ***3*** , ***4*** , ***5*** , ***6*** , ***7*** , ***8*** , ***9*** , ***A*** , ***B*** , ***C*** , ***D*** , ***E*** , ***F*** , ***G*** , ***H*** , ***I*** , ***J*** , ***K*** , ***L*** , ***M*** , ***N*** , ***O*** , ***P*** , ***Q*** , ***R*** , ***S*** , ***T*** , ***U*** , ***V*** , ***W*** , ***X*** , ***Y*** , ***Z*** , ***. (Period)*** , ***, (Comma)*** , **** (Star)*** , ***# (Pound)*** , ***F1*** , ***F2*** , ***F3*** , ***F4*** , ***F5*** , ***F6*** , ***F7*** , ***F8*** , ***F9*** , ***F10*** , ***F11*** , ***F12*** , ***Enter*** , ***Up*** , ***Down*** , ***Left*** , ***Right*** , ***Escape*** , ***Backspace*** , ***Space*** , ***Return*** , ***Clear*** , ***Field Exit*** , ***Alt*** , ***Control*** , ***Shift*** , ***Blue*** , ***Orange*** , ***Green Dot*** , ***Red Dot*** , ***Volume Up*** , ***Volume Down*** , ***Scan*** , ***Grip Trigger*** , ***Grip Trigger 2*** , ***Button L1*** , ***Button L2*** , ***Button R1*** , ***Button R2*** , ***Left Trigger*** , ***Right Trigger*** , ***Center Trigger*** , ***Gun Trigger*** , ***Headset Button*** , ***Back*** , ***Home*** , ***Menu*** , ***Recent*** , ***Search*** , ***Keyboard Backlight*** , ***Display Backlight*** , ***Power*** , ***P1 Button*** , ***P2 Button*** , ***P3 Button*** , ***P4 Button*** , ***Rear Button*** , ***Left External Trigger*** , ***Right External Trigger*** , ***Touch NAV_PAD*** , ***Macro 1*** , ***Macro 2*** , ***Macro 3*** , ***Macro 4*** , ***Macro 5*** , ***Macro 6*** , ***Brightness Up*** , ***Brightness Down*** , ***Keyboard*** , ***Keyboard Backlight Brightness Up*** , ***Keyboard Backlight Brightness Down*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Add Mapping Behaviors


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to specify a set of behaviors to be performed for one or more keyboard states. for a specified physical key on a Zebra Android device.


**Detail Information:** 

- Key = "keymapActionAddMappingBehaviors" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


#### Behavior


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single behavior to be performed for a specified key in pressed in a specified state on the physical keyboard of a Zebra Android device.


**Detail Information:** 

- Key = "keymapBehavior" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


##### Table Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of the table into which a specific behavior will be stored. Mapping tables are associated with keyboard states and are named based on the state key on the physical keyboard of a Zebra Android device that causes that keyboard state to be activated or deactivated.
Note that due to variations in keyboard size and layout, not all keyboard states may be supported on all Zebra Android devices or on all keyboard possible on any given Zebra Android device. Some or all of the following may values may be supported:
- If the value ***Base*** is chosen, then the Base Mapping table will be selected. The Base Mapping table defines the behavior that will be performed for a physical key when it is pressed while no special keyboard state is active.
- If the value ***Blue*** is chosen, then the Blue Mapping table will be selected. The Blue Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Blue key has been used to activate the Blue keyboard state.
- If the value ***Orange*** is chosen, then the Orange Mapping table will be selected. The Orange Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Orange key has been used to activate the Orange keyboard state.
- If the value ***Grey*** is chosen, then the Grey Mapping table will be selected. The Grey Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Grey key has been used to activate the Grey keyboard state.
- If the value ***Shift*** is chosen, then the Shift Mapping table will be selected. The Shift Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Shift key has been used to activate the Shift keyboard state.
- If the value ***Control*** is chosen, then the Control Mapping table will be selected. The Control Mapping table defines the behavior that will be performed for a physical key when it is pressed in conditions where the Control key has been used to activate the Control keyboard state.


**Detail Information:** 

- Key = "keymapBehaviorTableName" 

- Type = string 

- Choices = ***Base*** , ***Blue*** , ***Orange*** , ***Grey*** , ***Shift*** , ***Control*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of behavior that will be performed when a specified key is pressed while the keyboard state associated with the specified Mapping table is active.The following may values are supported:
- If the value ***Send Key Code*** is chosen, then the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send a specified key code. This allows for "classic keyboard remapping" where the behavior of a key is changed to be the behavior of some other key, which may or may not be present on the physical keyboard. The additional Managed Configuration **Send Key Code** MUST also be specified to provide the key code that will be sent.
- If the value ***Send Trigger*** is chosen, then the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send a trigger signal. Trigger signals may be used to initiate various activities, such as barcode scanning, RFID reading, push to talk, etc. The additional Managed Configuration **Send Trigger** MUST also be specified to select which trigger signal will be sent,
- If the value ***Launch Application*** is chosen, then the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to launch an application. The additional Managed Configuration **Launch Application Name** MUST also be specified to provide the "friendly name" of the application to be launched. Note that this is NOT the Android Package Name. To launch an application by its Android Package Name, the value ***Send Intent*** should be used.
- If the value ***Send Intent*** is chosen, then the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active will be to send and Android Intent, which might cause any number of possible results, depending on the nature of the intent configured to be sent. Some of all of the following additional Managed Configurations MUST also be specified to define the Android Intent to be sent:
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
- If the value ***Suppress*** is chosen, then NO behavior will be performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active. This is equivalent to mapping the key in that state to "do nothing".
- If the value ***Reset To Default*** is chosen, then the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active be reset back to its defaults. This will effectively remove any prior mapping of that key in that state and return the key to its standard behavior in that state.


**Detail Information:** 

- Key = "keymapBehaviorType" 

- Type = string 

- Choices = ***Send Key Code*** , ***Send Trigger*** , ***Launch Application*** , ***Send Intent*** , ***Suppress Key*** , ***Reset To Default*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Send Key Code


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the key code that will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Type**.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendKeyCode" 

- Type = string 

- Choices = ***0*** , ***1*** , ***2*** , ***3*** , ***4*** , ***5*** , ***6*** , ***7*** , ***8*** , ***9*** , ***+ (Plus)*** , ***- (Minus)*** , ***= (Equals)*** , ***( (Left Bracket)*** , ***) (Right Bracket)*** , ***` (Grave)*** , ***/ (Slash)*** , *** (Backslash)*** , ***; (Semicolon)*** , ***' (Apostrophe)*** , ***, (Comma)*** , ***. (Period)*** , **** (Star)*** , ***# (Pound)*** , ***@ (At)*** , ***A*** , ***B*** , ***C*** , ***D*** , ***E*** , ***F*** , ***G*** , ***H*** , ***I*** , ***J*** , ***K*** , ***L*** , ***M*** , ***N*** , ***O*** , ***P*** , ***Q*** , ***R*** , ***S*** , ***T*** , ***U*** , ***V*** , ***W*** , ***X*** , ***Y*** , ***Z*** , ***Enter*** , ***Tab*** , ***Space*** , ***Escape*** , ***Delete*** , ***F1*** , ***F2*** , ***F3*** , ***F4*** , ***F5*** , ***F6*** , ***F7*** , ***F8*** , ***F9*** , ***F10*** , ***F11*** , ***F12*** , ***NUMPAD 0*** , ***NUMPAD 1*** , ***NUMPAD 2*** , ***NUMPAD 3*** , ***NUMPAD 4*** , ***NUMPAD 5*** , ***NUMPAD 6*** , ***NUMPAD 7*** , ***NUMPAD 8*** , ***NUMPAD 9*** , ***NUMPAD / (NUMPAD Divide)*** , ***NUMPAD * (NUMPAD Multiply)*** , ***NUMPAD - (NUMPAD Subtract)*** , ***NUMPAD + (NUMPAD Add)*** , ***NUMPAD . (NUMPAD Period)*** , ***NUMPAD , (NUMPAD Comma)*** , ***NUMPAD Enter*** , ***NUMPAD = (NUMPAD Equals)*** , ***NUMPAD { (NUMPAD Left Parenthesis)*** , ***NUMPAD } (NUMPAD Right Parenthesis)*** , ***DPAD Up*** , ***DPAD Down*** , ***DPAD Left*** , ***DPAD Right*** , ***DPAD Center*** , ***Move Home*** , ***Move End*** , ***Page Up*** , ***Page Down*** , ***Insert*** , ***Forward Delete*** , ***Clear*** , ***Lamp*** , ***Do Nothing*** , ***Blue*** , ***Orange*** , ***Grey*** , ***Diamond*** , ***Alt*** , ***Control*** , ***Shift*** , ***Keyboard*** , ***Touch Calibrate*** , ***Scan*** , ***Search Key*** , ***None*** , ***KeyLight*** , ***Keylight Up*** , ***Keylight Down*** , ***Left Shift*** , ***Right Shift*** , ***Left Alt*** , ***Right Alt*** , ***Left Control*** , ***Right Control*** , ***Meta Left*** , ***Meta Right*** , ***Caps Lock*** , ***Num Lock*** , ***Scroll Lock*** , ***SysRq*** , ***Break*** , ***Function*** , ***Back*** , ***Forward*** , ***Home*** , ***Menu*** , ***Settings*** , ***Application Switch*** , ***Calculator*** , ***Explorer*** , ***Envelope*** , ***Bookmark*** , ***Music*** , ***Call*** , ***End Call*** , ***Microphone Mute*** , ***Camera*** , ***Search*** , ***Contacts*** , ***Calendar*** , ***Volume Up*** , ***Volume Down*** , ***Volume Mute*** , ***Brightness Up*** , ***Brightness Down*** , ***Power*** , ***Sleep*** , ***Wakeup*** , ***Headset*** , ***Push-to-talk*** , ***Camera Focus*** , ***Media Play/Pause*** , ***Media Stop*** , ***Media Next*** , ***Media Previous*** , ***Media Rewind*** , ***Media Fast-Forward*** , ***Media Play*** , ***Media Pause*** , ***Media Close*** , ***Media Eject*** , ***Media Record*** , ***Button L1*** , ***Button R1*** , ***Button L2*** , ***Button R2*** , ***Button A*** , ***Button B*** , ***Button C*** , ***Button X*** , ***Button Y*** , ***Button Z*** , ***Left Thumb Button*** , ***Right Thumb Button*** , ***Start Button*** , ***Select Button*** , ***Mode Button*** , ***Gamepad Button 1*** , ***Gamepad Button 2*** , ***Gamepad Button 3*** , ***Gamepad Button 4*** , ***Gamepad Button 5*** , ***Gamepad Button 6*** , ***Gamepad Button 7*** , ***Gamepad Button 8*** , ***Gamepad Button 9*** , ***Gamepad Button 10*** , ***Gamepad Button 11*** , ***Gamepad Button 12*** , ***Gamepad Button 13*** , ***Gamepad Button 14*** , ***Gamepad Button 15*** , ***Gamepad Button 16*** , ***Zenkaku/Hankaku*** , ***Eisu*** , ***Muhenkan*** , ***Henkan*** , ***Katakana/Hiragana*** , ***Ro*** , ***Yen*** , ***Kana*** , ***Keyboard*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Alt


**Description:** 

This Managed Configuration allows an Administrator using an EMM to alter how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Type** and should be specified only if the Managed Configuration **Send Key Code** is specified.
- If the value ***Off*** is chosen, then when the key code is sent, it will be sent with the Alt keyboard state inactive. This will ensure that the key code is NOT interpreted as an Alt key.
- If the value ***On*** is chosen, then when the key code is sent, it will be sent with the Alt keyboard state active. This will ensure that the key code is interpreted as an Alt key.
- If this Managed Configuration is not specified, then when the key code is sent, the Alt keyboard state will not be changed. This will cause the key to be interpreted as an Alt key or not based on the existing state.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendKeyCodeAlt" 

- Type = string 

- Choices = ***On*** , ***Off*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Ctrl


**Description:** 

This Managed Configuration allows an Administrator using an EMM to alter how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Type** and should be specified only if the Managed Configuration **Send Key Code** is specified.
- If the value ***Off*** is chosen, then when the key code is sent, it will be sent with the Ctrl keyboard state inactive. This will ensure that the key code is NOT interpreted as an Ctrl key.
- If the value ***On*** is chosen, then when the key code is sent, it will be sent with the Ctrl keyboard state active. This will ensure that the key code is interpreted as an Ctrl key.
- If this Managed Configuration is not specified, then when the key code is sent, the Ctrl keyboard state will not be changed. This will cause the key to be interpreted as an Ctrl key or not based on the existing state.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendKeyCodeCtrl" 

- Type = string 

- Choices = ***On*** , ***Off*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Fn


**Description:** 

This Managed Configuration allows an Administrator using an EMM to alter how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Type** and should be specified only if the Managed Configuration **Send Key Code** is specified.
- If the value ***Off*** is chosen, then when the key code is sent, it will be sent with the Fn keyboard state inactive. This will ensure that the key code is NOT interpreted as an Fn key.
- If the value ***On*** is chosen, then when the key code is sent, it will be sent with the Fn keyboard state active. This will ensure that the key code is interpreted as an Fn key.
- If this Managed Configuration is not specified, then when the key code is sent, the Fn keyboard state will not be changed. This will cause the key to be interpreted as an Fn key or not based on the existing state.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendKeyCodeFn" 

- Type = string 

- Choices = ***On*** , ***Off*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Shift


**Description:** 

This Managed Configuration allows an Administrator using an EMM to alter how a key code will be sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Type** and should be specified only if the Managed Configuration **Send Key Code** is specified.
- If the value ***Off*** is chosen, then when the key code is sent, it will be sent with the Shift keyboard state inactive. This will ensure that the key code is NOT interpreted as an Shift key.
- If the value ***On*** is chosen, then when the key code is sent, it will be sent with the Shift keyboard state active. This will ensure that the key code is interpreted as an Shift key.
- If this Managed Configuration is not specified, then when the key code is sent, the Shift keyboard state will not be changed. This will cause the key to be interpreted as an Shift key or not based on the existing state.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendKeyCodeShift" 

- Type = string 

- Choices = ***On*** , ***Off*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Send Trigger


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the trigger signal that will be sent as the behavior for a specified key a specified state when the value ***Send Trigger*** is chosen for the Managed Configuration **Type**.
Eight trigger signals are defined, but not all may be supported on all Zebra Android devices. All Zebra Android devices generally support at least ***Trigger 1*** and generally default to using this trigger signal to activate the barcode scanner. Some Zebra Android devices may support additional trigger signals and some Zebra Android devices might be reconfigured to use ***Trigger 1*** for some purpose other than barcode scanning. To determine which trigger signals are supported on a given Zebra Android device, consult the documentation for that specific device.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendTrigger" 

- Type = string 

- Choices = ***Trigger 1*** , ***Trigger 2*** , ***Trigger 3*** , ***Trigger 4*** , ***Trigger 5*** , ***Trigger 6*** , ***Trigger 7*** , ***Trigger 8*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Send Intent


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify when an intent should be sent as the behavior for a remapped key.
- If the value ***On Key Down*** is chosen, then the intent will be sent immediately when the key is first detected as being pressed.
- If the value ***On Key Up*** is chosen, then the intent will not be sent until the key is detected as being released after being being pressed.
- If the value ***,On Both Key Up and Down*** is chosen, then the intent will be sent immediately when the key is first detected as being pressed and then again when the key is detected as being released.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntent" 

- Type = string 

- Choices = ***On Key Down*** , ***On Key Up*** , ***On Both Key Up and Down*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the method in which an Android Intent should be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Type**.
Depending on the application or service to be invoked, there is likely only one method that can be used successfully to invoke a desired behavior in that application or service. You will need to consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value will invoke the desired behavior. The possible values are:
- If the value ***StartActivity*** is chosen, then the Android Intent will be sent using the startActivity() method. This method is suitable for invoking Activities, which are components that perform user interactions. If the behavior to be invoked involves interacting with the Device User, then this method will most likely be used.
- If the value ***Broadcast*** is chosen, then the Android Intent will be sent using the sendBroadcast() method. This method is suitable for invoking Services, which are components that implement background operations. If the behavior to be invoked does not involves interacting with the Device User, then this method will most likely be used.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentType" 

- Type = string 

- Choices = ***StartActivity*** , ***Broadcast*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the action value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Type**.
An action value is NOT mandatory to specify for an Android Intent. But an action value is commonly used to identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports multiple functions, in which case the action value is commonly used to identify which function to perform when invoking that application or service. You will need to consult the documentation or developer of a given application or service to determine whether an action value is needed and, if so, which value will invoke the desired behavior.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentAction" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Category


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the category value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Type**.
A category value is NOT mandatory to specify for an Android Intent. But a category value is commonly used to help identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports many functions, in which case many action values may be used to identify those functions and it may be useful to categorize those functions. In some cases, the same action value might be supported in more than one category. You will need to consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value will invoke the desired behavior.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentCategory" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of the application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Type**.
It is not mandatory to specify the Android Package Name when sending an Android Intent, but is is often advisable.
- When an Android Package Name is specified, the intent becomes an Explicit Intent and the intent can ONLY be sent to an application or service with that Package Name and no other. This can increase security and is often used when the intent being sent requires any sensitive data. It is generally mandatory to specify the additional Managed Configuration **Class** whenever a Package Name is specified, since an Explicit Intent is always sent to an Android Component, which is identified by a Package Name and a Class within that Package.
- When no Android Package Name is specified, the intent becomes an Implicit Intent and the intent may be sent to any application or service that has registered its ability to handle that intent. This can increase flexibility and is often used when the intent being sent requires no sensitive data and when it may be desirable to dynamically control which application or service is ultimately invoked to handle that intent.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Class identifying a component within an application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Type** and should be specified if and only if the Managed Configuration **Package Name** is specified.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentClass" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Data URI


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a Uniform Resource Identifier (URI) that identifies some data, in the form of a resource on the device (e.g. a file in the device file system) or off the device (e.g. a resource available via a network) that should be utilized by the application or service invoked by the intent.
Whether the intended recipient of the intent expects a URI to be specified as part of the intent or not is up to that recipient and/or the definition of the intent that recipient is designed to consume.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentDataUri" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Flags


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify intent flags to be set for the intent to be sent.
Intent flags control how the intent is handled by Android. Some intent flags are specific to the type of component that will be invoked by the Intent (e.g. activity vs service). Whether certain intent flags are needed to produce the desired result when the intended recipient of the intent is invoked is up to that recipient and/or the definition of the intent that recipient is designed to consume. Intent flags MUST be specified as a hexadecimal value with the appropriate bits set for any flag or flags desired. Consult the Android documentation to translate intent flag names, when needed, into their appropriate hexadecimal values.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentFlags" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### MIME Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a Multipurpose Internet Mail Extensions (MIME) type to use when processing the intent data and should be specified only if the Managed Configuration **Data URI** is specified.
Normally the type would be inferred from the data itself. Setting a MIME type explicitly, by using this Managed Configuration disables automatic type detection and and forces handling according to the specified type.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentMimeType" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Extra Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of a single extra named string value to be attached to the intent to be sent.
Android allows a collection of extra named values, of various types, to be attached to an intent. This Managed Configuration enables exactly one value whose data type must be string to be specified. When a name is specified, the additional Managed Configuration **Extra Value** MUST also be specified to provide the corresponding value to be attached for the string extra identified by the specified name.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentExtraName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Extra Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the value of a single extra named string value to be attached to the intent to be sent and should be specified if and only if the Managed Configuration **Extra Name** is specified.


**Detail Information:** 

- Key = "keymapBehaviorTypeSendIntentExtraValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Launch Application Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the "friendly name" of an application to be launched when the value ***Launch Application*** is chosen for the Managed Configuration **Type**.
Note that the application "friendly name" is NOT the same as Android Package Name. The application "friendly name" is generally the name by which the application is identified in in-device UI, such as the application Title Bar and the list of application names display in the Recent Application list and the AppInfo section of the Settings UI. To launch an application based on its Android Package Name, choose the value ***Send Intent*** is chosen for the Managed Configuration **Type** instead.


**Detail Information:** 

- Key = "keymapBehaviorTypeLaunchApplicationName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


## Power Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to perform power-related actions and configure power-related settings on a Zebra Android device.


**Detail Information:** 

- Key = "powerStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Power Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control the Power to the device.
- If the value ***Sleep*** is chosen, then the device will go to Sleep (i.e. enter Suspend Mode).
- If the value ***Reboot*** is chosen, then the device will perform an OS Reboot (i.e. simple Reset).


**Detail Information:** 

- Key = "powerAction" 

- Type = string 

- Choices = ***Sleep*** , ***Reboot*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Battery Percentage Decommission Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the percentage of remaining battery capacity below which the battery will be deemed ready for decommissioning.


**Detail Information:** 

- Key = "powerBatteryThresholdPercentage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Battery Usage Decommission Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the amount of battery usage (e.g. charge/discharge cycles, coulombs in/out, etc.) that can occur beefore the battery will be deemed ready for decommissioning.


**Detail Information:** 

- Key = "powerBatteryThresholdUsage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Battery Critical Low Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the threshold battery level below which the battery is deemed to be critically low.
- The *Default Value* is ***4***, which causes the battery to be deemed critical low when the battery level dips below 4% remaining capacity.
- If the value ***0*** is chosen, then the currently configured critically low threshold will not be changed, which is functionally equivalent to not specifying this Managed Configuration.
- If a value from ***1*** through ***25*** will cause the critically low threshold will be set to the specified value.


**Detail Information:** 

- Key = "powerBatteryThresholdCriticalLow" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Battery Optimization Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control which applications are subject to battery optimization and which are exempt.
- If the value ***Add*** is chose, then one or more applications will be made subject to battery optimizations and the additional Managed Configuration **Add Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be made subject to battery optimizations.
- If the value ***Remove*** is chose, then one or more applications will be made subject to battery optimizations and the additional Managed Configuration **Remove Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be exempted from battery optimizations.


**Detail Information:** 

- Key = "powerBatteryOptimizationAction" 

- Type = string 

- Choices = ***Add*** , ***Remove*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Add Package Names


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify one or more Android Package Name(s) that identify application(s) that should be made subject to battery optimizations.
If specified, multiple package names should be separated using commas.


**Detail Information:** 

- Key = "powerBatteryOptimizationActionAddPackageNames" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Remove Package Names


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify one or more Android Package Name(s) that identify application(s) that should be exempted from battery optimizations.
If specified, multiple package names should be separated using commas.


**Detail Information:** 

- Key = "powerBatteryOptimizationActionRemovePackageNames" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.0.


### Port Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control the Output Power various Ports on the device.
- If the value ***Turn Output Power OFF*** is chosen, then the Output Power for a specified Port will be turned off.
- If the value ***Turn Output Power ON*** is chosen, then the Output Power for a specified Port will be turned on.
When this Managed Configuration is specified, the additional Managed Configuration **Port Select** MUST be specified to provide the Port for which Output Power will be controlled.


**Detail Information:** 

- Key = "powerPortAction" 

- Type = string 

- Choices = ***Turn Output Power OFF*** , ***Turn Output Power ON*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Port Select


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Port for which an Action to control the Output Power on the device will be applied, and should be specified if and only if the Managed Configuration **Port Action** is specified.
- If the value ***Serial Port 1*** is chosen, then the Output Power will be turned on or off for the first device Serial Port.
- If the value ***Serial Port 2*** is chosen, then the Output Power will be turned on or off for the second device Serial Port.
- If the value ***USB Port 2*** is chosen, then the Output Power will be turned on or off for the second device USB Port.


**Detail Information:** 

- Key = "powerPortSelect" 

- Type = string 

- Choices = ***Serial Port 1*** , ***Serial Port 2*** , ***USB Port 2*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Auto Power Control


**Description:** 

This Managed Configuration allows an Administrator using an EMM to control whether device power will be automatically controlled.
- If the value ***Off*** is chosen, then the device power will NOT be automatically controlled.
- If the value ***On***is chosen, then the device power will be automatically controlled and one or more of the following Managed Configurations should also be specified:
  - **Auto Power Off** to specify whether/how device power will automatically be turned off.
   - **Auto Power On** to specify whether/how device power will automatically be turned on.


**Detail Information:** 

- Key = "powerAutoPowerControl" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Auto Power Off


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether/how device power will be automatically turned off as part of automatic power control, and should be specified if and only if the Managed Configuration **Auto Power Control** is specified.
- If the value ***Never*** is chosen, then the device power will NOT automatically turn off when the ignition turns off.
- If the value ***When Ignition is Turned Off*** is chosen, then the device power will automatically turn off whenever the ignition turns off.


**Detail Information:** 

- Key = "powerAutoPowerOff" 

- Type = string 

- Choices = ***Never*** , ***When Ignition is Turned Off*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Timeout


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the timeout that will be in effect before device power is automatically turned off as part of automatic power control, and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Auto Power Control** is specified and the value ***When Ignition is Turned Off*** is specified for the Managed Configuration **Auto Power Off**.


**Detail Information:** 

- Key = "powerAutoPowerOffTimeout" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Auto Power On


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether/how device power will be automatically turned on as part of automatic power control, and should be specified if and only if the Managed Configuration **Auto Power Control** is specified.
The value of this Managed Configuration specifies one of the following values
- If the value ***Never*** is chosen, then the device power will NOT automatically turn on when the ignition turns on.
- If the value ***When Ignition is Turned On*** is chosen, then the device power will automatically turn on whenever the ignition turns on.


**Detail Information:** 

- Key = "powerAutoPowerOn" 

- Type = string 

- Choices = ***Never*** , ***When Ignition is Turned On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Heater Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control device heaters.
When this Managed Configuration is specified, then the Managed Configuration **Heater Select** MUST be specified to identify the Heater to be affected.
- If the value ***Enable Heater*** is chosen, then the Heater will be be turned on and off as needed based on the configured ON/OFF thresholds.
- If the value ***Disable Heater*** is chosen, then the Heater will turned off and will stay off, regardless of the configured ON/OFF thresholds.
- If the value ***Set ON/OFF Thresholds*** is chosen, then the ON/OFF thresholds that will be used when the Heater is Enabled will be configured. When this value is specified, then the following Managed Configurations MUST also be specified:
   - **On Threshold** MUST be specified to set the threshold temperature below which the Heater will automatically be turned on.
   - **Off Threshold** MUST be specified to set the threshold temperature above which the Heater will automatically be turned off.


**Detail Information:** 

- Key = "powerHeaterAction" 

- Type = string 

- Choices = ***Enable Heater*** , ***Disable Heater*** , ***Set ON/OFF Thresholds*** 


**Support Information:** 

- This Managed Configuration is supported on Operating System(s): Oreo and Pie.


- This Managed Configuration is supported on Device(s): VC80X and VC8300.


- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Heater Select


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Heater to be affected by a specified Heater Action and should be specified if and only if the Managed Configuration **Heater Action** is specified.
The value of this Managed Configuration specifies one of the following Heater values:
- If the value ***Serial I/O*** is chosen, then the Heater that warms the Serial I/O Port of the device will be selected.
- If the value ***USB I/O*** is chosen, then the Heater that warms the USB I/O Port of the device will be selected.
- If the value ***Battery*** is chosen, then the Heater that warms the Battery of the device will be selected.
- If the value ***Touch Panel*** is chosen, then the Heater that warms the Touch Panel of the device will be selected.
- If the value ***Keyboard*** is chosen, then the Heater that warms the Keyboard of the device will be selected.
- If the value ***Scanner Window*** is chosen, then the Heater that warms the Scanner Window of the device will be selected.


**Detail Information:** 

- Key = "powerHeaterSelect" 

- Type = string 

- Choices = ***Serial I/O*** , ***USB I/O*** , ***Battery*** , ***Touch Panel*** , ***Keyboard*** , ***Scanner Window*** 


**Support Information:** 

- This Managed Configuration is supported on Operating System(s): Oreo and Pie.


- This Managed Configuration is supported on Device(s): VC80X and VC8300.


- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Off Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform configure the temperature above which a specified Heater should automatically turn OFF, and should be specified if and only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Heater Action**.


**Detail Information:** 

- Key = "powerHeaterActionOffThreshold" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is supported on Operating System(s): Oreo and Pie.


- This Managed Configuration is supported on Device(s): VC80X and VC8300.


- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### On Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform configure the temperature below which a specified Heater should automatically turn ON, and should be specified if and only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Heater Action**.


**Detail Information:** 

- Key = "powerHeaterActionOnThreshold" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is supported on Operating System(s): Oreo and Pie.


- This Managed Configuration is supported on Device(s): VC80X and VC8300.


- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### Doze Mode State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform control whether Doze Mode will be globally used on the device.
- If the value ***Off*** is chosen, then the device will never enter Doze Mode for any applications.
- If the value ***On*** is chosen, then the device will will enter Doze Mode for various applications based on the normal Android rules for Doze Mode.


**Detail Information:** 

- Key = "powerDozeModeState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.2.


## RFID Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the RFID module in a Zebra Android device.


**Detail Information:** 

- Key = "rfidStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Country of Operation


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Country of Operation* in which the RFID module will be used.
It is critical that the *Country of Operation* be set at least once, since the RFID module has no default *Country of Operation* and will not operate unless/until the *Country of Operation* is explicitly set, to ensure that country-specific regulator requirements are met. In most cases, the *Country of Operation* will be set once and never changed, unless the device is physically relocated to a different country.


**Detail Information:** 

- Key = "rfidCountryOfOperation" 

- Type = string 

- Choices = ***ALBANIA*** , ***ANDORRA*** , ***ARGENTINA*** , ***AUSTRALIA*** , ***BANGLADESH*** , ***BHUTAN*** , ***BOLIVIA*** , ***BOSNIA_HERZENGOVINA*** , ***BRAZIL*** , ***CANADA*** , ***CAMBODIA*** , ***CHILE*** , ***CHINA*** , ***COLOMBIA*** , ***DOMINICAN_REPUBLIC*** , ***ECUADOR*** , ***EL_SALVADOR*** , ***UNITED_KINGDOM*** , ***GUATEMALA*** , ***GUAM*** , ***HONG_KONG*** , ***INDIA*** , ***INDONESIA*** , ***JAPAN_1W_LBT*** , ***JAPAN_250MW*** , ***LAOS_EU*** , ***LAOS_FCC*** , ***MACAU*** , ***MACEDONIA*** , ***MALAYSIA*** , ***MEXICO*** , ***MONACO*** , ***MOTENEGRO*** , ***NEW_ZEALAND_FCC*** , ***NEW_ZEALAND_EU*** , ***PAKISTAN*** , ***PANAMA*** , ***PARAGUAY*** , ***PERU*** , ***PHILIPPINES*** , ***PUERTO_RICO*** , ***RUSSIA*** , ***SAUDI_ARABIA*** , ***SINGAPORE*** , ***SOUTH_AFRICA*** , ***SOUTH_KOREA*** , ***SRI_LANKA*** , ***TAIWAN*** , ***THAILAND*** , ***TURKEY*** , ***UAE*** , ***UNITED_STATES*** , ***URUGUAY*** , ***VENEZUELA*** , ***VIETNAM*** , ***VIRGINIA_ISLAND*** , ***ETSI 302.208 compliant generic*** , ***FCC Part-16 compliant generic*** , ***ISRAEL*** , ***ALGERIA*** , ***ARMENIA*** , ***AUSTRIA*** , ***AZERBAIJAN*** , ***BAHRAIN*** , ***BELGIUM*** , ***BULGARIA*** , ***COSTA_RICA*** , ***CROATIA*** , ***CYPRUS*** , ***CZECH_REPUBLIC*** , ***DENMARK*** , ***EGYPT*** , ***ESTONIA*** , ***FINLAND*** , ***FRANCE*** , ***GEORGIA*** , ***GERMANY*** , ***GREECE*** , ***HUNGARY*** , ***ICELAND*** , ***IRELAND*** , ***ITALY*** , ***JORDAN*** , ***KAZAKHSTAN*** , ***KUWAIT*** , ***LATVIA*** , ***LITHUANIA*** , ***LUXEMBOURG*** , ***MALTA*** , ***NETHERLANDS*** , ***NORWAY*** , ***OMAN*** , ***POLAND*** , ***PORTUGAL*** , ***QATAR*** , ***ROMANIA*** , ***SERBIA*** , ***SLOVAKIA*** , ***SLOVENIA*** , ***SPAIN*** , ***SWEDEN*** , ***SWITZERLAND*** , ***TUNISIA*** , ***UKRAINE*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Channel Mask


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Channel Mask* that determines which of the *Channels* that are allowed, based on the currently selected *Country of Operation* will be used by the RFID module.
- If no *Channel Mask* is specified, then the RFID module will be free to use any or all *Channels* that are available based on the currently selected *Country of Operation*.
- If a *Channel Mask* is specified, then the specified value must consist of one or more *Channel Numbers*, separated by commas if more than one is specified, which identify the *Channels* that can be used. The RFID module will limit itself to just the *Channels* that are allowed for the currently selected *Country of Operation* AND that are in the set of *Channels* specified via this Managed Configuration.
Consult the product documentation for the Zebra Android device being used to obtain the set of allowable *Channel Numbers*.


**Detail Information:** 

- Key = "rfidCountryOfOperationChannelMask" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Channel Hopping


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether *Channel Hopping* will be performed among the *Channels* that are used by the RFID module.


**Detail Information:** 

- Key = "rfidCountryOfOperationChannelHopping" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to alter the behavior or configuration of the RFID module.
- If the value ***Update Firmware*** is chosen, then the firmware of the RFID module will be updated and the additional Managed Configuration **Update Firmware File** MUST be specified to provide the path and file name of the file, which must exist in the device file system, containing the firmware update to be applied to the RFID module.
- If the value ***Export Settings*** is chosen, then the current configuration of the RFID module will be exported and stored in a file in the device file system. This file could then be extracted from the device and used for troubleshooting potential configuration issues related to the RFID module.
- If the value ***Reset Radio*** is chosen, then the radio of the RFID module will be reset, without changing its settings. This could be used to recover from an error or other failure of the RFID module.
- If the value ***Reset Radio to Factory Defaults*** is chosen, then the configuration of the RFID module will be returned to its default out-of-box state and the radio will be reset. This could be used to recover from a serious configuration error that prevents the RFID module from functioning appropriately.
- If the value ***Update Firmware and Reset Radio to Factory Defaults*** is chosen, then the firmware of the RFID will be updated,l the configuration of the RFID module will be returned to its default out-of-box state, and the radio will be reset. This could necessary when applying a major new firmware update, that add lots of new configuration settings, to ensure that the RFID module is configured in a known and compatible state.


**Detail Information:** 

- Key = "rfidAction" 

- Type = string 

- Choices = ***Update Firmware*** , ***Export Settings*** , ***Reset Radio*** , ***Reset Radio to Factory Defaults*** , ***Update Firmware and Reset Radio to Factory Defaults*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Update Firmware File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of the file containing the firmware update to be applied and should be specified if and only if the value ***Update Firmware*** or the value ***Update Firmware and Reset Radio to Factory Defaults*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "rfidActionUpdateFirmwareFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Transmit Power Level


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *RFID Power Level* that should be used by the RFID module.
The *RFID Power Level* should be specified in tenths of dBm in the range of ***0*** to ***300***, inclusive. For example, to specify an *RFID Power Level* of ***29.5 dBm***, specify a value of ***295***.


**Detail Information:** 

- Key = "rfidTransmitPowerLevel" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Query Select


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure which RFID tags should be operated upon by the RFID module during a *Query Operation*, based on the state of the SL flag.
- If the value ***Query applies to all tags*** is chosen, then when the RFID module performs a *Query Operation*, it will consider all RFID tags that are currently visible to the RFID module.
- If the value ***Query applies to tags with SL de-asserted*** is chosen, then when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that have SL flag de-asserted (i.e tags for which the SL flag has NOT been set using the Select command).
- If the value ***Query applies to tags with SL asserted*** is chosen, then when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that have SL flag asserted (i.e tags for which the SL flag HAS been set using the Select command).


**Detail Information:** 

- Key = "rfidQuerySelect" 

- Type = string 

- Choices = ***Query applies to all tags*** , ***Query applies to tags with SL de-asserted*** , ***Query applies to tags with SL asserted*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Query Session


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure which *Session* should be used by the RFID module to access RFID tags during a *Query Operation*.
Allowable values are ***SessionS0***, ***SessionS1***, ***SessionS2***, and ***SessionS3***.
*Sessions* provide options for how to count tags. For more information on the use of *Sessions*, consult the Zebra Android device product documentation.


**Detail Information:** 

- Key = "rfidQuerySession" 

- Type = string 

- Choices = ***SessionS0*** , ***SessionS1*** , ***SessionS2*** , ***SessionS3*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Query Target


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure how the A and B flags of RFID tags should be handled by the RFID module during a *Query Operation*.
- If the value ***Inventory Target Flag A*** is chosen, then when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in State A.
- If the value ***Inventory Target Flag B*** is chosen, then when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in State B.
- If the value ***AB Flip*** is chosen, then when the RFID module performs a *Query Operation*, it will consider only those RFID tags that are currently visible to the RFID module AND that are in either State A or State B and will Flip the State from A to B or B to A for the session.


**Detail Information:** 

- Key = "rfidQueryTarget" 

- Type = string 

- Choices = ***Inventory Target Flag A*** , ***Inventory Target Flag B*** , ***AB Flip*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


## Remote Scanner Management


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to manage a *Remote Scanner* that is connected to a Zebra Android device.


**Detail Information:** 

- Key = "remotescannerStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to control a *Remote Scanner* that isconnected to a Zebra Android device.
- If the value ***Apply Configuration Package(RS6000 only)*** is chosen, then a configuration file will be used to apply new configuration to a *Remote Scanner*. The additional Managed Configuration **Config Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be configured. The additional Managed Configuration **Config File** MUST also be specified to provide the path and file name of the configuration file to be applied.
- If the value ***Update Scanner Firmware*** is chosen, then a firmware file will be used to update the firmware of a *Remote Scanner*. The additional Managed Configuration **Update Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be updated. The additional Managed Configuration **Update File** MUST also be specified to provide the path and file name of the firmware file to be applied.
- If the value ***Reset Scanner(RS6000 only)*** is chosen, then a *Remote Scanner* will be reset, allowing errors to be cleared and proper operation of a*Remote Scanner* to be restored. The additional Managed Configuration **Reset Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be reset.
- If the value ***Page Scanner(RS6000 only)*** is chosen, then a *Remote Scanner* will be paged, allowing a misplaced *Remote Scanner* to be more easily located. The additional Managed Configuration **Page Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be paged.
- If the value ***Disconnect Scanner(RS6000 only)*** is chosen, then a *Remote Scanner* will be disconnected, terminating the connection between the Zebra Android device and the *Remote Scanner* and preventing its subsequent use. The additional Managed Configuration **Disconnect Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be disconnected.
- If the value ***Unpair Scanner(RS6000 only)*** is chosen, then a *Remote Scanner* will be unpaired, terminating the pairing between the Zebra Android device and the *Remote Scanner* and preventing its reconnedtion without first repairing. The additional Managed Configuration **Unpair Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be unpaired.


**Detail Information:** 

- Key = "remotescannerAction" 

- Type = string 

- Choices = ***Apply Configuration Package(RS6000 only)*** , ***Update Scanner Firmware*** , ***Reset Scanner(RS6000 only)*** , ***Page Scanner(RS6000 only)*** , ***Disconnect Scanner(RS6000 only)*** , ***Unpair Scanner(RS6000 only)*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Config Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to which configuration should be applied and should be specified if and only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Action**. The additional Managed Configuration **Config File** MUST also be specified to provide the path and file name of the configuration file to be used.


**Detail Information:** 

- Key = "remotescannerActionConfigSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Config File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of a configuration file, which must exist at the specified location in the device file system, from which configuration should be applied to the specified *Remote Scanner* and should be specified if and only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionConfigFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Update Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* for which a firmware update should be performed and should be specified if and only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Action**. The additional Managed Configuration **Update File** MUST also be specified to provide the path and file name of the firmware file to be used.


**Detail Information:** 

- Key = "remotescannerActionUpdateSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Update File


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of a firmware file, which must exist at the specified location in the device file system, from which firmware update should be performed to the specified *Remote Scanner* and should be specified if and only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionUpdateFile" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Reset Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be reset and should be specified if and only if the value ***Reset Scanner(RS6000 only)*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionResetSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Page Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be paged and should be specified if and only if the value ***Page Scanner(RS6000 only)*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionPageSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Disconnect Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be disconnected and should be specified if and only if the value ***Disconnect Scanner(RS6000 only)*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionDisconnectSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Unpair Serial Number


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be unpaired and should be specified if and only if the value ***Unpair Scanner(RS6000 only)*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "remotescannerActionUnpairSerialNumber" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


## Security Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure security-related settings on a Zebra Android device.


**Detail Information:** 

- Key = "securityStep" 

- Type = bundle 


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to perform adjust various security features on a Zebra Android device.
- If the value ***Add Key*** is chosen, then the additional Managed Configuration **Add Key Name** MUST be specified to provide the name of the key to be added and the additional Managed Configuration **Add Key Value** MUST be specified to provide the value of the key to be added.
- If the value ***Remove Key*** is chosen, then the additional Managed Configuration **Remove Key Name** MUST be specified to provide the name of the key to be removed.
- If the value ***Remove All Keys*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.
- If the value ***Encrypt SD Card,*** is chosen, then the additional Managed Configuration **Encrypt SD Card Key Name** MUST be specified to provide the name of the key to be used to encrypt the SD card.
- If the value ***Wipe SD Card*** is chosen, then no additional Managed Configurations need to be specified to provide additional information.


**Detail Information:** 

- Key = "securityAction" 

- Type = string 

- Choices = ***Add Key*** , ***Remove Key*** , ***Remove All Keys*** , ***Encrypt SD Card*** , ***Wipe SD Card*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: Ask=TBD.


### Add Key Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be added and should be specified if and only if the Action value ***Add Key*** is chosen for the Managed Configuration **Action**.
When this Managed Configuration is specified, the additional Managed Configuration **Add Key Value** MUST also be specified to provide the value to be added for the specified key name.


**Detail Information:** 

- Key = "securityActionAddKeyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Add Key Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the value of a key to be added and should be specified if and only if the Action value ***Add Key*** is chosen for the Managed Configuration **Action**.
When this Managed Configuration is specified, the additional Managed Configuration **Add Key Name** MUST also be specified to provide the key name for which this value should be added.
A key value must be a string value containing exactly 64 hexadecimal characters ("0-9" and/or "A-F" characters) that encode a 256 bit binary value for an AES encryption key.
The key value can be generated in any manner desired as long as it is a 256 bit binary value and is represented as 64 hexadecimal characters, although in most cases, best practice would be to randomly generate keys to maximize their effectiveness in protecting data.


**Detail Information:** 

- Key = "securityActionAddKeyValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Remove Key Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be removed and should be specified if and only if the Action value ***Remove Key*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "securityActionRemoveKeyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Encrypt SD Card Key Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be used to encrypt the SD card and should be specified if and only if the Action value ***Encrypt SD Card*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "securityEncryptSDCardKeyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Instant Screen Lock on Power Key


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify what happens when the Power Key on the device is used to turn the device off, especially whether the device will be locked, requiring it to be unlocked by entering a PIN or password, if one is specified.
- If the value ***Off*** is chosen, then turning the device off using the Power Key will be handled the same as when the device times out and turns itself off automatically. In such a case, if device remains off for longer than value set using the Managed Configuration **Screen Lock Timeout**, then when it is turned back on, the device will be locked, requiring whatever unlock action is set using the Managed Configuration **Screen Lock Type**.
- If the value ***On*** is chosen, then turning the device off using the Power Key will be handled differently than when the device times out and turns itself off automatically, specifically the device will become locked "instantly" when turned off using the Power Key. In such a case, no matter how long the device remains off, when it is turned back on, the device will be locked, requiring whatever unlock action is set using the Managed Configuration **Screen Lock Type**.


**Detail Information:** 

- Key = "securityPowerKeyInstantLock" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Screen Lock Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of lock that is used to protect the device from use by unauthorized persons.
- If the value ***None*** is chosen, then no lock will be applied and the device can be used by anyone.
- If the value ***Swipe*** is chosen, then unlocking will require only a simple swipe and the device can be used by anyone.
- If the value ***PIN*** is chosen, then unlocking will require entry of a PIN (personal identification number) and the device can only be unlocked by someone knowing the correct PIN value.
- If the value ***Password*** is chosen, then unlocking will require entry of a password and the device can only be unlocked by someone knowing the correct password value.
- If the value ***Pattern*** is chosen, then unlocking will require drawing a pattern on the screen using the touch panel and the device can only be unlocked by someone knowing the correct pattern.


**Detail Information:** 

- Key = "securityScreenLockType" 

- Type = string 

- Choices = ***None*** , ***Swipe*** , ***PIN*** , ***Password*** , ***Pattern*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.0.


### Screen Lock Timeout


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify what happens when a device turns off as a result of a timeout.
- If the device stays off for at least the time specified in this Managed Configuration, then when the device is turned back on, a unlock will be required, if one was specified using the Managed Configuration **Screen Lock Type**.
- If the device stays off for less than the time specified in this Managed Configuration, then when the device is turned back on, no unlock will be required, even if one was specified using the Managed Configuration **Screen Lock Type**.


**Detail Information:** 

- Key = "securityScreenLockTimeout" 

- Type = string 

- Choices = ***Immediately after Display Timeout*** , ***5 seconds after Display Timeout*** , ***15 seconds after Display Timeout*** , ***30 seconds after Display Timeout*** , ***1 minute after Display Timeout*** , ***2 minutes after Display Timeout*** , ***5 minutes after Display Timeout*** , ***10 minutes after Display Timeout*** , ***30 minutes after Display Timeout*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


## Service Access Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which *Zebra Value-Add Services* are allowed to be used on a Zebra Android device and, optionally, by which applications. *Zebra Value-Add Services* may be of various types, and may include:
- *Privilege Escalation APIs*, typically used by special purpose applications, such as Remote Control Clients.
- *Configuration Service Providers* (CSPs), typically used by special purpose applications, such as *Enterprise Mobility Manager* (EMM) Agents.


**Detail Information:** 

- Key = "serviceAccessStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Service Binding Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to initiate an Action to allow or disallow *Bindings* to *Zebra Value-Add Service*s, such as those that expose *Privilege Escalation APIs*, typically used by special purpose applications, such as Remote Control Clients.
To utilize *Zebra Value-Add Service*s that expose APIs, an application must successfully create a *Binding* to the desired Service, after which it can make API calls via that *Binding*. Since the APIs provided by such Services enable applications that call them to perform sensitive operations, they should only be used by applications that an Administrator explicitly trusts to use them safely.
By default, all *Zebra Value-Add Service*s that expose APIs are configured to reject all *Bindings*. This ensures that the APIs exposed by such a Service cannot be used at all, unless the Administrator explicitly chooses to allow use of specific Services via this Managed Configuration.
Note that allowing *Bindings* to a *Zebra Value-Add Service* enables ALL applications to successfully initiate a *Binding* to that Service but does NOT enable ANY application to actually call the APIs exposed by that Service. To allow selected applications to call APIs on a Service for which *Bindings* are allowed, use the Managed Configuration **Service Caller Action**.
- If the value ***Allow*** is chosen, then *Bindings* to a specifically identified Service will be enabled, potentially allowing the APIs of that Service to be called. The additional Managed Configuration **Allow Service Identifier** MUST be specified to identify the *Zebra Value-Add Service* to which *Bindings* should be allowed.
- If the value ***Disallow*** is chosen, then *Bindings* to a specifically identified Service will be disabled, preventing the APIs of that Service from being called. This is the default state for all *Zebra Value-Add Service*s that provide APIs. The additional Managed Configuration **Disallow Service Identifier** MUST be specified to identify the *Zebra Value-Add Service* to which *Bindings* should be disallowed.
Note that every *Zebra Value-Add Service* that exposes APIs will be identified by a unique *Service Identifier*, which must be used by Administrators to identify the Service when controlling access to that Service. Consult the documentation for a given *Zebra Value-Add Service* to determine its *Service Identifier* that you will need to identify that Service when controlling access to it.


**Detail Information:** 

- Key = "serviceBindingAction" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Allow Service Identifier


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Service Identifier* of a *Zebra Value-Add Service* and should be specified if and only if the value ***Allow*** is chosen for the Managed Configuration **Allow Service Identifier**, to identify the specific *Zebra Value-Add Service* to which *Bindings* should be allowed.


**Detail Information:** 

- Key = "serviceBindingActionAllowServiceIdentifer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Disallow Service Identifier


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Service Identifier* of a *Zebra Value-Add Service* and should be specified if and only if the value ***Disallow*** is chosen for the Managed Configuration **Disallow Service Identifier**, to identify the specific *Zebra Value-Add Service* to which *Bindings* should be disallowed.


**Detail Information:** 

- Key = "serviceBindingActionDisallowServiceIdentifer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Service Caller Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to initiate an Action to allow or disallow a specific application to call APIs exposed by a *Zebra Value-Add Service*, via a successfully established *Binding*.
Note that the default state for all *Zebra Value-Add Services* is for ALL applications to be disallowed from calling the APIs exposed by that Service. This ensures that no applications can call the potentially sensitive APIs exposed by a Service unless the Administrator explicitly chooses to allow it using this Managed Configuration.
Note also that since a *Binding* to a Service is required to call any APIs exposed by that Service, *Bindings* to a *Zebra Value-Add Service* MUST be allowed in addition to allowing specific applications to call the Service. *Bindings* to a *Zebra Value-Add Service* can be allowed using the Managed Configuration **Service Binding Action**.
- If the value ***Allow*** is chosen, then a specifically identified application will be allowed to call APIs to a specifically identified Service. The additional Managed Configuration **Allow Service Identifier** MUST be specified to identify the *Zebra Value-Add Service* to which API calls should be allowed and the additional Managed Configurations **Allow Caller Package** and **Allow Caller Signature** MUST be specified to identify the application to be allowed to make API calls to the identified Service.
- If the value ***Disallow*** is chosen, then a specifically identified application will be disallowed from calling APIs to a specifically identified Service. This is the default state for every *Zebra Value-Add Service* and for every potential calling application. The additional Managed Configuration **Disallow Service Identifier** MUST be specified to identify the *Zebra Value-Add Service* to which API calls should be disallowed and the additional Managed Configurations **Disallow Caller Package** and **Disallow Caller Signature** MUST be specified to identify the application to be disallowed from making API calls to the identified Service.


**Detail Information:** 

- Key = "serviceCallerAction" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Allow Service Identifier


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Service Identifier* of a *Zebra Value-Add Service* and should be specified if and only if the value ***Allow*** is chosen for the Managed Configuration **Service Caller Action**, to identify the specific *Zebra Value-Add Service* to which API calls should be allowed.


**Detail Information:** 

- Key = "serviceCallerActionAllowServiceIdentifer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Allow Caller Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Package Name* of an application that should be allowed to call APIs exposed by a *Zebra Value-Add Service* and should be specified if and only if the value ***Allow*** is chosen for the Managed Configuration **Service Caller Action**, to identify the specific application that should be allowed to make calls to the Service identified by a specified *Service Identifier*.


**Detail Information:** 

- Key = "serviceCallerActionAllowCallerPackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Allow Caller Signature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Application Signature* of an application that should be allowed to call APIs exposed by a *Zebra Value-Add Service* and should be specified if and only if the value ***Allow*** is chosen for the Managed Configuration **Service Caller Action**, to provide the Signature of a specified application that should be allowed to make calls to the Service identified by a specified *Service Identifier*.
Note that the use of a Signature is MANDATORY and ensures that the application being allowed to make API calls to the specified Service is genuine and has not been spoofed. This prevents anyone from creating an impostor application with the same *Android Package Name*, but signed differently and then trying to make calls to the APIs of the Service as if they were the genuine application.


**Detail Information:** 

- Key = "serviceCallerActionAllowCallerSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Disallow Service Identifier


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Service Identifier* of a *Zebra Value-Add Service* and should be specified if and only if the value ***Disallow*** is chosen for the Managed Configuration **Service Caller Action**, to identify the specific *Zebra Value-Add Service* to which API calls should be disallowed.


**Detail Information:** 

- Key = "serviceCallerActionDisallowServiceIdentifer" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Disallow Caller Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Package Name* of an application that should be disallowed from calling APIs exposed by a *Zebra Value-Add Service* and should be specified if and only if the value ***Disallow*** is chosen for the Managed Configuration **Service Caller Action**, to identify the specific application that should be disallowed from making calls to the Service identified by a specified *Service Identifier*.


**Detail Information:** 

- Key = "serviceCallerActionDisallowCallerPackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Disallow Caller Signature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Application Signature* of an application that should be disallowed from calling APIs exposed by a *Zebra Value-Add Service* and should be specified if and only if the value ***Disallow*** is chosen for the Managed Configuration **Service Caller Action**, to provide the Signature of a specified application that should be disallowed from making calls to the Service identified by a specified *Service Identifier*.


**Detail Information:** 

- Key = "serviceCallerActionDisallowCallerSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Use CSP Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to initiate an Action to declared a CSP to be *Protected* or *Unprotected* and/or to make an application *Approved* or *Unapproved* to use a CSP that has been declared as *Protected*.
Note that the default state for all CSPs is *Unprotected*. This means that ALL CSPs can used by ALL applications. This ensures backward compatibility wherein any applications designed to use any CSPs will continue to be allowed to do so unless they are specifically prevented by the Administrator using this Managed Configuration.
To limit access to a CSP, the CSP must first be declared to be *Protected* using this Managed Configuration. Once a CSP has been declared to be *Protected*, no applications will be allowed to use that CSP until they have been explicitly been *Approved* to use that CSP using this Managed Configuration.
- If the value ***Protect*** is chosen, then a specifically identified CSP will be declared to be *Protected* and hence will be limited to use by specifically *Approved* applications. One of the additional Managed Configurations **Protect CSP Name** or **Custom** MUST be specified to identify the CSP to be declared *Protected*. The additional Managed Configuration **Protect CSP Auto Approve** MAY be used to automatically make the application that is declaring the CSP to be *Protected* to be *Approved* to use that CSP.
- If the value ***Unprotect*** is chosen, then a specifically identified CSP will be declared to be *Unprotected* and hence will no longer be limited to use by specifically *Approved* applications. One of the additional Managed Configurations **Unprotect CSP Name** or **Custom** MUST be specified to identify the CSP to be declared *Unprotected*. The additional Managed Configuration **Unprotect CSP Auto Unapprove** MAY be used to automatically make the application that is declaring the CSP to be *Unprotected* to be *Unapproved* from using that CSP.
- If the value ***Approve*** is chosen, then a specifically identified application will be *Approved* to use a specifically identified *Protected* CSP. One of the additional Managed Configurations **Approve CSP Name** or **Custom** MUST be specified to identify the CSP for which access is to be *Approved*. The additional Managed Configurations **Approve Caller Package** and **Approve Caller Signature** MUST be used to identify the specific application that will be *Approved* to use the specified CSP.
- If the value ***Unapprove*** is chosen, then a specifically identified application will *Unapproved* from using a specifically identified *Protected* CSP. One of the additional Managed Configurations **Unapprove CSP Name** or **Custom** MUST be specified to identify the CSP for which access is to be *Unapproved*. The additional Managed Configurations **Unapprove Caller Package** and **Unapprove Caller Signature** MUST be used to identify the specific application that will be *Unapproved* from using the specified CSP.


**Detail Information:** 

- Key = "serviceCspAction" 

- Type = string 

- Choices = ***Protect*** , ***Unprotect*** , ***Approve*** , ***Unapprove*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Protect CSP Auto Approve


**Description:** 

This Managed Configuration allows an Administrator using an EMM to automatically make the application that is declaring a CSP to be *Protected* (which would be OemConfig itself) to be *Approved* to use that CSP and should be specified if and only if the value ***Protect*** is chosen for the Managed Configuration **Use CSP Action** to declare a CSP as *Protected*. This is a convenience to eliminate the need to separately make OemConfig *Approved* to allow it to use a CSP that it has been used to declare as *Protected*.
- If the value ***True*** is chosen, then the effect will be the same as if a separate invocation of the Managed Configuration **Use CSP Action** with the value ***Approve*** was used to make the same application (OemConfig) that is being used to declare the CSP as *Protected* be *Approved* to use that CSP. In most cases, it makes sense for OemConfig to be *Approved* to use any CSP that it has declared to be *Protected*.
- If the value ***False*** is chosen, then the effect will be the same as if NO separate invocation of the Managed Configuration **Use CSP Action** with the value ***Approve*** was used to make the same application (OemConfig) that is being used to declare the CSP as *Protected* be *Approved* to use that CSP. This should be used with caution since if OemConfig is *Unapproved* from using any CSP that has been declared to be *Protected*, then any Managed Configurations sent to OemConfig that rely on that CSP will fail.


**Detail Information:** 

- Key = "serviceCspActionProtectAutoApprove" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Protect CSP Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a standard CSP that will be declared as *Protected* and should be specified if and only if the value ***Protect*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided as a convenience wherein all standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. The Managed Configuration **Custom** could alternately be used in cases where typing in the CSP name is preferable.


**Detail Information:** 

- Key = "serviceCspActionProtectCspName" 

- Type = string 

- Choices = ***AccessMgr*** , ***AnalyticsMgr*** , ***AppGalleryMgr*** , ***AppMgr*** , ***AudioMgr*** , ***AudioVolUIMgr*** , ***AutoTriggerMgr*** , ***Batch*** , ***BatteryMgr*** , ***BluetoothMgr*** , ***BrowserMgr*** , ***BugReportMgr*** , ***CameraMgr*** , ***CellularMgr*** , ***CertMgr*** , ***Clock*** , ***ComponentMgr*** , ***ConditionMgr*** , ***DevAdmin*** , ***DeviceCentralMgr*** , ***DisplayMgr*** , ***EncryptMgr*** , ***EnterpriseKeyboard*** , ***EthernetMgr*** , ***FileMgr*** , ***GmsMgr*** , ***GooglePlayMgr*** , ***GprsMgr*** , ***HostsMgr*** , ***Intent*** , ***KeyMappingMgr*** , ***LicenseMgr*** , ***LifeGuardOTAManager*** , ***NfcMgr*** , ***PersistMgr*** , ***PersonalDictionary*** , ***PowerKeyMgr*** , ***PowerMgr*** , ***RemoteScannerMgr*** , ***RfidMgr*** , ***ScanModeMgr*** , ***SdCardMgr*** , ***SettingsMgr*** , ***Stats*** , ***StatusMgr*** , ***ThreatMgr*** , ***TouchMgr*** , ***UiMgr*** , ***UsbMgr*** , ***Wi-Fi*** , ***WirelessMgr*** , ***WorryFreeWiFiMgr*** , ***XmlMgr*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a CSP that will be declared as *Protected* and should be specified if and only if the value ***Protect*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided for cases where a CSP that needs to be declared as *Protected* is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. While this Managed Configuration CAN be used for standard CSP names, it would generally be preferable to use the Managed Configuration **Protect CSP Name** instead, since picking a name from a list is less error-prone than typing the name.


**Detail Information:** 

- Key = "serviceCspActionProtectCspNameCustom" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Unprotect CSP Auto Unapprove


**Description:** 

This Managed Configuration allows an Administrator using an EMM to automatically make the application that is declaring a CSP to be *Unprotected* (which would be OemConfig itself) to be *Unapproved* to use that CSP and should be specified if and only if the value ***Unprotect*** is chosen for the Managed Configuration **Use CSP Action** to declare a CSP as *Unprotected*.
This is a convenience to eliminate the need to separately make OemConfig *Unapproved* to remove it from the list of applications that are *Approved* to use a CSP that it has been used to declare as *Unprotected*. Strictly speaking, this is not mandatory, since once a CSP has been declared as *Unprotected* the list of applications that are *Approved* to use that CSP is no longer relevant. But since the list of applications that are *Approved* to use a CSP is preserved across declaring a CSP as *Unprotected* and then later declaring that CSP as *Protected*, it is good practice to clean-up the list to avoid unexpected behavior in the future.
- If the value ***True*** is chosen, then the effect will be the same as if a separate invocation of the Managed Configuration **Use CSP Action** with the value ***Unapprove*** was used to make the same application (OemConfig) that is being used to declare the CSP as *Unprotected* be *Unapproved* to use that CSP. This will NOT result in OemConfig being unable to use the CSP since declaring the CSP as *Unprotected* explicitly allows ALL applications to use that CSP.
- If the value ***False*** is chosen, then the effect will be the same as if NO separate invocation of the Managed Configuration **Use CSP Action** with the value ***Unapprove*** was used to make the same application (OemConfig) that is being used to declare the CSP as *Unprotected* be *Unapproved* to use that CSP. This would effectively clean-up the list and could avoid unexpected behavior in the future, should the CSP later be *Protected* again.


**Detail Information:** 

- Key = "serviceCspActionUnprotectAutoUnapprove" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Unprotect CSP Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a standard CSP that will be declared as *Unprotected* and should be specified if and only if the value ***Unprotect*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided as a convenience wherein all standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. The Managed Configuration **Custom** could alternately be used in cases where typing in the CSP name is preferable.


**Detail Information:** 

- Key = "serviceCspActionUnprotectCspName" 

- Type = string 

- Choices = ***AccessMgr*** , ***AnalyticsMgr*** , ***AppGalleryMgr*** , ***AppMgr*** , ***AudioMgr*** , ***AudioVolUIMgr*** , ***AutoTriggerMgr*** , ***Batch*** , ***BatteryMgr*** , ***BluetoothMgr*** , ***BrowserMgr*** , ***BugReportMgr*** , ***CameraMgr*** , ***CellularMgr*** , ***CertMgr*** , ***Clock*** , ***ComponentMgr*** , ***ConditionMgr*** , ***DevAdmin*** , ***DeviceCentralMgr*** , ***DisplayMgr*** , ***EncryptMgr*** , ***EnterpriseKeyboard*** , ***EthernetMgr*** , ***FileMgr*** , ***GmsMgr*** , ***GooglePlayMgr*** , ***GprsMgr*** , ***HostsMgr*** , ***Intent*** , ***KeyMappingMgr*** , ***LicenseMgr*** , ***LifeGuardOTAManager*** , ***NfcMgr*** , ***PersistMgr*** , ***PersonalDictionary*** , ***PowerKeyMgr*** , ***PowerMgr*** , ***RemoteScannerMgr*** , ***RfidMgr*** , ***ScanModeMgr*** , ***SdCardMgr*** , ***SettingsMgr*** , ***Stats*** , ***StatusMgr*** , ***ThreatMgr*** , ***TouchMgr*** , ***UiMgr*** , ***UsbMgr*** , ***Wi-Fi*** , ***WirelessMgr*** , ***WorryFreeWiFiMgr*** , ***XmlMgr*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a CSP that will be declared as *Unprotected* and should be specified if and only if the value ***Unprotect*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided for cases where a CSP that needs to be declared as *Unprotected* is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. While this Managed Configuration CAN be used for standard CSP names, it would generally be preferable to use the Managed Configuration **Unprotect CSP Name** instead, since picking a name from a list is less error-prone than typing the name.


**Detail Information:** 

- Key = "serviceCspActionUnprotectCspNameCustom" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Approve CSP Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a standard CSP that will be *Approved* for an application and should be specified if and only if the value ***Approve*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided as a convenience wherein all standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. The Managed Configuration **Custom** could alternately be used in cases where typing in the CSP name is preferable.


**Detail Information:** 

- Key = "serviceCspActionApproveCspName" 

- Type = string 

- Choices = ***AccessMgr*** , ***AnalyticsMgr*** , ***AppGalleryMgr*** , ***AppMgr*** , ***AudioMgr*** , ***AudioVolUIMgr*** , ***AutoTriggerMgr*** , ***Batch*** , ***BatteryMgr*** , ***BluetoothMgr*** , ***BrowserMgr*** , ***BugReportMgr*** , ***CameraMgr*** , ***CellularMgr*** , ***CertMgr*** , ***Clock*** , ***ComponentMgr*** , ***ConditionMgr*** , ***DevAdmin*** , ***DeviceCentralMgr*** , ***DisplayMgr*** , ***EncryptMgr*** , ***EnterpriseKeyboard*** , ***EthernetMgr*** , ***FileMgr*** , ***GmsMgr*** , ***GooglePlayMgr*** , ***GprsMgr*** , ***HostsMgr*** , ***Intent*** , ***KeyMappingMgr*** , ***LicenseMgr*** , ***LifeGuardOTAManager*** , ***NfcMgr*** , ***PersistMgr*** , ***PersonalDictionary*** , ***PowerKeyMgr*** , ***PowerMgr*** , ***RemoteScannerMgr*** , ***RfidMgr*** , ***ScanModeMgr*** , ***SdCardMgr*** , ***SettingsMgr*** , ***Stats*** , ***StatusMgr*** , ***ThreatMgr*** , ***TouchMgr*** , ***UiMgr*** , ***UsbMgr*** , ***Wi-Fi*** , ***WirelessMgr*** , ***WorryFreeWiFiMgr*** , ***XmlMgr*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a CSP that will be *Approved* to use a CSP and should be specified if and only if the value ***Approve*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided for cases where a CSP that needs to be *Approved* for an application is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. While this Managed Configuration CAN be used for standard CSP names, it would generally be preferable to use the Managed Configuration **Approve CSP Name** instead, since picking a name from a list is less error-prone than typing the name.


**Detail Information:** 

- Key = "serviceCspActionApproveCspNameCustom" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Approve Caller Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Package Name* of an application that should be *Approved* to use a CSP and should be specified if and only if the value ***Approve*** is chosen for the Managed Configuration **Use CSP Action**, to identify the specific application that should be *Approved* to use the CSP.


**Detail Information:** 

- Key = "serviceCspActionApproveCallerPackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Approve Caller Signature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Application Signature* of an application that should be *Approved* to use a CSP and should be specified if and only if the value ***Approve*** is chosen for the Managed Configuration **Use CSP Action**, to provide the Signature of the specific application that should be *Approved* to use the CSP.


**Detail Information:** 

- Key = "serviceCspActionApproveCallerSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Unapprove CSP Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a standard CSP that will be *Unapproved* for an application and should be specified if and only if the value ***Unapprove*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided as a convenience wherein all standard CSP names are listed and can be picked from the list instead of having to enter them manually. This can help to avoid errors that could occur from mis-typing a CSP name. The Managed Configuration **Custom** could alternately be used in cases where typing in the CSP name is preferable.


**Detail Information:** 

- Key = "serviceCspActionUnapproveCspName" 

- Type = string 

- Choices = ***AccessMgr*** , ***AnalyticsMgr*** , ***AppGalleryMgr*** , ***AppMgr*** , ***AudioMgr*** , ***AudioVolUIMgr*** , ***AutoTriggerMgr*** , ***Batch*** , ***BatteryMgr*** , ***BluetoothMgr*** , ***BrowserMgr*** , ***BugReportMgr*** , ***CameraMgr*** , ***CellularMgr*** , ***CertMgr*** , ***Clock*** , ***ComponentMgr*** , ***ConditionMgr*** , ***DevAdmin*** , ***DeviceCentralMgr*** , ***DisplayMgr*** , ***EncryptMgr*** , ***EnterpriseKeyboard*** , ***EthernetMgr*** , ***FileMgr*** , ***GmsMgr*** , ***GooglePlayMgr*** , ***GprsMgr*** , ***HostsMgr*** , ***Intent*** , ***KeyMappingMgr*** , ***LicenseMgr*** , ***LifeGuardOTAManager*** , ***NfcMgr*** , ***PersistMgr*** , ***PersonalDictionary*** , ***PowerKeyMgr*** , ***PowerMgr*** , ***RemoteScannerMgr*** , ***RfidMgr*** , ***ScanModeMgr*** , ***SdCardMgr*** , ***SettingsMgr*** , ***Stats*** , ***StatusMgr*** , ***ThreatMgr*** , ***TouchMgr*** , ***UiMgr*** , ***UsbMgr*** , ***Wi-Fi*** , ***WirelessMgr*** , ***WorryFreeWiFiMgr*** , ***XmlMgr*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a CSP that will be *Unapproved* for an application and should be specified if and only if the value ***Unapprove*** is chosen for the Managed Configuration **Use CSP Action**.
This Managed Configuration is provided for cases where a CSP that *Unapproved* for an application is not in the list of standard CSP names, such as when the CSP is a Plug-In CSP. While this Managed Configuration CAN be used for standard CSP names, it would generally be preferable to use the Managed Configuration **Unapprove CSP Name** instead, since picking a name from a list is less error-prone than typing the name.


**Detail Information:** 

- Key = "serviceCspActionUnapproveCspNameCustom" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Unapprove Caller Package


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Package Name* of an application that should be *Unapproved* from using a CSP and should be specified if and only if the value ***Unapprove*** is chosen for the Managed Configuration **Use CSP Action**, to identify the specific application that should be *Unapproved* from using the CSP.


**Detail Information:** 

- Key = "serviceCspActionUnapproveCallerPackage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Unapprove Caller Signature


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android *Application Signature* of an application that should be *Unapproved* from using a CSP and should be specified if and only if the value ***Unapprove*** is chosen for the Managed Configuration **Use CSP Action**, to provide the Signature of the specific application that should be *Unapproved* from using the CSP.


**Detail Information:** 

- Key = "serviceCspActionUnapproveCallerSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


## Settings UI Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the behavior of the Settings UI on a Zebra Android device, especially which features of the Settings UI will the Device User will be allowed to access.


**Detail Information:** 

- Key = "settingsStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Allow Device User Access Quick Settings


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to access the Android Quick Settings Panel UI.
- If the value ***Off*** is chosen, then any attempt by the Device User to enter the Quick Settings Panel will be ignored.
- If the value ***On*** is chosen, then attempts by the Device User to enter the Quick Settings Panel will be honored and the Quick Settings Panel UI will be presented on request.


**Detail Information:** 

- Key = "settingsUserAccessToQuickSettings" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.2.


### Allow Device User Control Airplane Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change the state of Airplane Mode.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the state of Airplane Mode will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the state of Airplane Mode will be honored.


**Detail Information:** 

- Key = "settingsUserControlOfAirplaneMode" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Allow Device User Control App Notifications


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to configure which application notifications will be generated.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the configuration of application notifications will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the configuration of application notifications will be honored.


**Detail Information:** 

- Key = "settingsUserControlAppNotifications" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.2.


### Allow Device User Control Apps


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to enter the AppInfo section of the Settings UI where applications can be controlled.
- If the value ***Off*** is chosen, then any attempt by the Device User to enter the AppInfo section of the Settings UI will be ignored.
- If the value ***On*** is chosen, then attempts by the Device User to enter the AppInfo section of the Settings will be honored.


**Detail Information:** 

- Key = "settingsUserControlApps" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.2.


### Allow Device User Control Background Data


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change the usage of Background WWAN data.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the usage of Background WWAN data will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the usage of Background WWAN data will be honored.


**Detail Information:** 

- Key = "settingsUserControlOfBackgroundData" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Allow Device User Control Ethernet


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change the state of the Ethernet adapter.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the state of Ethernet adapter will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the state of Ethernet adapter will be honored.


**Detail Information:** 

- Key = "settingsUserControlOfEthernet" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Allow Device User Control Instant Lock


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change whether or not pressing the Power key causes the device to lock instantly.
- If the value ***Off*** is chosen, then any attempt by the Device User to change whether or not pressing the Power key causes the device to lock instantly will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change whether or not pressing the Power key causes the device to lock instantly will be honored.


**Detail Information:** 

- Key = "settingsUserControlInstantLock" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Allow Device User Control USB


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change the state of USB.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the state of USB will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the state of USB will be honored.


**Detail Information:** 

- Key = "settingsUserControlOfUsb" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.2.


### Allow Device User Control Unknown Sources


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change whether applications can be installed from Unknown Sources.
- If the value ***Off*** is chosen, then any attempt by the Device User to change whether applications can be installed from Unknown Sources.
- If the value ***On*** is chosen, then attempts by the Device User to change whether applications can be installed from Unknown Sources.


**Detail Information:** 

- Key = "settingsUserControlUnknownSources" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Allow Device User Control WLAN


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to change the configuration of the WLAN adapter.
- If the value ***Off*** is chosen, then any attempt by the Device User to change the configuration of the WLAN adapter will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to change the configuration of the WLAN adapter will be honored.


**Detail Information:** 

- Key = "settingsUserControlWlan" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Allow Device User to Initiate an Enterprise Reset


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be allowed to perform an Enterprise Reset from the Settings UI.
- If the value ***Off*** is chosen, then any attempt by the Device User to perform an Enterprise Reset from the Settings UI will be blocked.
- If the value ***On*** is chosen, then attempts by the Device User to perform an Enterprise Reset from the Settings UI will be honored.


**Detail Information:** 

- Key = "settingsUserInitiateEnterpriseReset" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.2.


### Show Quick Settings Icon


**Description:** 

This Managed Configuration allows an Administrator using an EMM to control whether the Device User will be allowed to invoke the Settings UI using an icon on the Quick Settings Panel.
- If the value ***Off*** is chosen, then any attempt by the use of the icon to invoke the Settings UI will be blocked.
- If the value ***On*** is chosen, then the use of the icon to invoke the Settings UI will be allowed.


**Detail Information:** 

- Key = "settingsShowQuickSettingsIcon" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


### Use Reduced Version


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Full or Reduced version of the Settings UI will be used.
- If the value ***Off*** is chosen, then when the Device User launches the Settings UI, the Full version,with support for all settings, will be used.
- If the value ***On*** is chosen, then when the Device User launches the Settings UI, the Reduced version, with support for only a few settings, will be used.


**Detail Information:** 

- Key = "settingsUseReducedVersion" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Use of Notification Settings Icon


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***Off*** is chosen, then the Device User will be blocked from using the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***On*** is chosen, then the Device User will be allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.


**Detail Information:** 

- Key = "settingsUseOfNotificationSettingsIcon" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 5.1.


### Use of Settings Slide Out Drawer


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.
- If the value ***Off*** is chosen, then the Device User will be blocked from using the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.
- If the value ***On*** is chosen, then the Device User will be allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI


**Detail Information:** 

- Key = "settingsUseOfSlideOutDrawer" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Use of Tethering and Portable Hotspot


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.
- If the value ***Off*** is chosen, then the Device User will be blocked from using the Settings UI to configure and utilize Tethering and Portable Hotspot mode.
- If the value ***On*** is chosen, then the Device User will be allowed to use the Settings UI to configure and utilize Tethering and Portable Hotspot mode.


**Detail Information:** 

- Key = "settingsUseOfTetheringAndPortableHotspot" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


## Threat Management Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which threats to a Zebra Android device will be monitored and which countermeasures will be taken when threats are detected.


**Detail Information:** 

- Key = "threatStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to configure whether a given threat will be monitored.
- If the value ***Detect*** is chosen, then a specific threat will be configured to be monitored and, if that threat is detected, a countermeasure will be taken to mitigate that threat. The additional Managed Configuration **Detect Threat Type** MUST be specified to provide the threat that will be monitored. In addition, the Managed Configuration array **Detect Countermeasures** MUST be specified to provide the set of countermeasures that will be performed if the specified threat is detected.
- If the value ***Ignore*** is chosen, then a specific threat will be configured to not be monitored and hence will never be detected. The additional Managed Configuration **Ignore Threat Type** MUST be specified to provide the threat that will be ignored.


**Detail Information:** 

- Key = "threatAction" 

- Type = string 

- Choices = ***Detect*** , ***Ignore*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: Ask=TBD.


### Detect Threat Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of threat that will be monitored when the value ***Detect*** is chosen for the Managed Configuration**Action**.
- If the value ***Max Password Attempts*** is chosen, then the Threat Management System will be configured to monitor password entry attempts and the threat will be considered to be detected if the maximum number of unsuccessful password entry attempts are made without an intervening successful password entry.
- If the value ***MDM Client Removal*** is chosen, then the Threat Management System will be configured to monitor the device and detect if a specific Android Package Name is ever uninstalled from the device. The additional Managed Configuration **Action Detect Threat Type MDM Client Removal Package Name** MUST be specified to provide the Package Name that will be monitored. While this is typically used to detect the removal of the MDM Client, which would render a managed device unmanaged, it could be used to detect the removal of any one Android Package if detection of the removal of an MDM Agent is not required.
- If the value ***Externally Detected*** is chosen, then the Threat Management System will be configured to listen for indication from an application on the device that can itself provide a way of detecting an signaling any threat not otherwise known to the Threat Management System. The Threat Management System will consider the threat to have been detected whenever it is signaled by the external application.
- If the value ***Exchange Active Sync Command*** is chosen, then the Threat Management System will be configured to handle a threat detected and signaled by a connection to an Exchange Active Sync Server via an Exchange Active Sync Client on the device.
- If the value ***Device is Rooted*** is chosen, then the Threat Management System will be configured to monitor the device to see if it has been rooted. Root detection mechanism seek to identify common exploits that could grant an escalated privileges to an untrusted application that might use them to compromise the security or privacy of the device.


**Detail Information:** 

- Key = "threatActionDetectThreatType" 

- Type = string 

- Choices = ***Max Password Attempts*** , ***MDM Client Removal*** , ***Externally Detected*** , ***Exchange Active Sync Command*** , ***Device is Rooted*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: Ask=TBD.


### Detect Countermeasures


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to defined the set of countermeasures that should be applied to mitigate a detected threat.


**Detail Information:** 

- Key = "threatActionDetectCountermeasures" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### Countermeasure


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single countermeasure to be performed to mitigate a detected threat.


**Detail Information:** 

- Key = "threatCountermeasure" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


##### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of a single countermeasure that will be performed to mitigate a detected threat.
- If the value ***FormatSdcard*** is chosen, then the countermeasure to format the removable SD card will be performed when the associated threat is detected.
- If the value ***FactoryReset*** is chosen, then the countermeasure to Factory Reset the device will be performed when the associated threat is detected.
- If the value ***WipeSecureStorageKeys*** is chosen, then the countermeasure to Wipe all encryption keys, deployed via that Managed Configuration group **Security Configuration** will be performed when the associated threat is detected.
- If the value ***LockDevice*** is chosen, then the countermeasure to lock the device, requiring it to be unlocked by the Device User, will be performed when the associated threat is detected.
- If the value ***UninstallApplication*** is chosen, then the countermeasure to Uninstall an application will be performed when the associated threat is detected. The additional Managed Configuration **Uninstall Package Name** MUST be specified to provide the Android Package Name of the application that will be uninstalled.
- If the value ***UnsolicitedAlert*** is chosen, then the countermeasure to send an unsolicited alert via an Android Intent will be performed when the associated threat is detected. The additional Managed Configurations **Unsolicited Alert Package Name**, **Unsolicited Alert Class**, and **Unsolicited Alert Message** MUST be specified to provide the information needed to deliver the alert.


**Detail Information:** 

- Key = "threatCountermeasureType" 

- Type = string 

- Choices = ***FormatSdcard*** , ***FactoryReset*** , ***WipeSecureStorageKeys*** , ***LockDevice*** , ***UninstallApplication*** , ***UnsolicitedAlert*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


##### Uninstall Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of an application that will be uninstalled as a countermeasure to mitigate a threat when the value ***UninstallApplication*** is chosen for the Managed Configuration **Type**.


**Detail Information:** 

- Key = "threatCountermeasureUninstallPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


##### Unsolicited Alert Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of an application that will be sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Type**.


**Detail Information:** 

- Key = "threatCountermeasureUnsolicitedAlertPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


##### Unsolicited Alert Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Class Name of component within an application that will be sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Type**.


**Detail Information:** 

- Key = "threatCountermeasureUnsolicitedAlertClass" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


##### Unsolicited Alert Message


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the string text message that will be sent to a component of an application via an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Type**.


**Detail Information:** 

- Key = "threatCountermeasureUnsolicitedAlertMessage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Action Detect Threat Type MDM Client Removal Package Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of the MDM Agent that will be monitored to detect a threat when the value ***MDM Client Removal*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "threatMdmClientPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Ignore Threat Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of threat that will NOT be monitored, and hence cannot be detected, when the value ***Ignore*** is chosen for the Managed Configuration**Action**.
- If the value ***Max Password Attempts*** is chosen, then the Threat Management System will be configured to NOT monitor password entry attempts and hence will never detect the threat of exceeding the maximum number of unsuccessful password entry attempts.
- If the value ***MDM Client Removal*** is chosen, then the Threat Management System will be configured to NOT monitor the device and detect if a specific Android Package Name is ever uninstalled from the device, and hence will never detect the threat of removal of the MDM Client..
- If the value ***Externally Detected*** is chosen, then the Threat Management System will be configured to NOT listen for indication from an application on the device that can signal a threat and hence no external threats will ever be detected.
- If the value ***Exchange Active Sync Command*** is chosen, then the Threat Management System will be configured NOT to handle a threat detected and signaled by a connection to an Exchange Active Sync Server via an Exchange Active Sync Client on the device and hence such threats will never be detected.
- If the value ***Device is Rooted*** is chosen, then the Threat Management System will be configured to NOT monitor the device to see if it has been rooted and hence the threat of the device being rooted will never be detected.


**Detail Information:** 

- Key = "threatActionIgnoreThreatType" 

- Type = string 

- Choices = ***Max Password Attempts*** , ***MDM Client Removal*** , ***Externally Detected*** , ***Exchange Active Sync Command*** , ***Device is Rooted*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: Ask=TBD.


### Periodic Scan


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Threat Management System should perform background polling to increase the accuracy and timeliness of detection of Rooted Device threat.
- If the value ***Off*** is chosen, then the Threat Management System will NOT perform background polling. This may increase performance and improve battery life somewhat, but will reduce the ability to detect the Rooted Device threat and or result in a delay in detection of that threat.
- If the value ***On*** is chosen, then the Threat Management System will perform background polling. This may reduce performance and degrade battery life somewhat, but will increase the ability to detect the Rooted Device threat and accelerate detection of that threat. The additional Managed Configurations **Interval**, **Additional Folders**, and **List** MAY be used to adjust the nature of the background polling, allowing trade-offs to be made in the balance pf thoroughness vs. the impact to performance and battery life. This value should generally be chosen if and only if detection of the ***Device is Rooted*** threat has been enabled, since it would have little value otherwise.


**Detail Information:** 

- Key = "threatPeriodicScan" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### Interval


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the interval between polls when the value ***On*** is chosen for the Managed Configuration **Periodic Scan**.
The interval is specified in seconds between polls.
- Choosing a lower value can increase the aggressiveness of detection of rooted devices, which can reduce the time required to successfully detect that a device has been rooted, but can also reduce the impact of polling on performance and battery life.
- Choose a higher value can reduce the aggressiveness of detection of rooted devices, which can increase the time required to successfully detect that a device has been rooted, but can also decrease the impact of polling on performance and battery life.


**Detail Information:** 

- Key = "threatPeriodicScanInterval" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### Additional Folders


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether additional folders will be polled when the value ***On*** is chosen for the Managed Configuration **Periodic Scan**.
When background polling to detect device rooting is performed, the Threat Management System will always scan certain key folders that are considered common or likely locations where changes might occur that could signal that device has been rooted. In some cases, rooting might occur through changes made to other folders.
- If the value ***Off*** is chosen, then the Threat Management System will only scan the default folders.
- If the value ***On*** is chosen, then the Threat Management System will scan the default folders plus additional folders. The additional Managed Configuration **List** MUST also be specified to identify the list of additional folders to be scanned.


**Detail Information:** 

- Key = "threatPeriodicScanAdditionalFolders" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### List


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure list of additional folders that will be polled when the value ***On*** is chosen for the Managed Configuration **Periodic Scan** and the value ***On*** is chosen for the Managed Configuration **Additional Folders**.


**Detail Information:** 

- Key = "threatPeriodicScanAdditionalFoldersList" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.1.


### Send Externally Detected Threat Message


**Description:** 

This Managed Configuration allows an application to signal the fact that it has detected the occurrence of an externally detected threat. This would generally be relevant only if the ***Externally Detected*** threat has been configured to be detected, since any signaling of an externally detected threat would otherwise be ignored.
Managed Configurations can only be applied by an application that is the Device Owner or by an application to which the Device Owner has explicitly delegated the ability to apply Managed Configurations. If the ***Externally Detected*** threat has been configured to be detected, then any application that i allowed to apply Managed Configurations could watch for anything it considered a threat and use this Managed Configuration to signal the occurrence of that threat. On receiving the signal Threat Management perform whatever countermeasures were configured to mitigate that threat.


**Detail Information:** 

- Key = "threatSendExternallyDetectedMessage" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


## Volume UI Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the UI behavior of the Zebra Volume Control on a Zebra Android device.


**Detail Information:** 

- Key = "volumeuiStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: ASK=TBD.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to alter the UI behavior of the *Zebra Volume Control* on a Zebra Android device.
The *Zebra Volume Control* provides a configurable UI that allows the Device Users to adjust the volume of one or more *Audio Streams* on a Zebra Android device. The UI behavior of the *Zebra Volume Control* is configured by defining one or more *Audio UI Profiles* and controlling which *Audio UI Profile* is active. Each *Audio UI Profile* defines which *Audio Streams* can be configured and adjusts the experience of the Device User when adjusting the volumes of those *Audio Streams*. The *Zebra Volume Control* also has a *Factory Preset Audio UI Profile* that can be used to return the behavior of the *Zebra Volume Control* to it default out-of-box state.
- If the value ***Add Profile*** is chosen, then a new *Audio UI Profile* is added to the list of *Audio UI Profiles*. The additional Managed Configurations **Add Profile Name** and **Add Profile Streams** MUST also be specified to define the *Audio UI Profile* being added.
- If the value ***Remove Profile*** is chosen, then an existing *Audio UI Profile* is removed from the list of *Audio UI Profiles*. The additional Managed Configuration **Remove Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be removed.
- If the value ***Set Current Profile*** is chosen, then an existing *Audio UI Profile* is set to be the active *Audio UI Profile*. The additional Managed Configuration **Set Current Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be made the new active *Audio UI Profile*.
- If the value ***Apply Current Profile*** is chosen, then the currently active *Audio UI Profile* is applied to the current device *Volume Settings*. If the current device *Volume Settings* are outside the range of *Volume Settings* defined for the currently active *Audio UI Profile* the current device *Volume Settings* will be adjusted as needed to bring them within the range of *Volume Settings* defined for the currently active *Audio UI Profile*.
- If the value ***Set Factory Preset*** is chosen, then the *Factory Preset Audio UI Profile* is made the active *Audio UI Profile*, causing the behavior of the *Zebra Volume Control* to return to its default out-of-box state.


**Detail Information:** 

- Key = "volumeuiAction" 

- Type = string 

- Choices = ***Add Profile*** , ***Remove Profile*** , ***Set Current Profile*** , ***Apply Current Profile*** , ***Set Factory Preset*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Add Profile Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the name of a new *Audio UI Profile* to be added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action**.
- If an *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* will replace the existing *Audio UI Profile* with that name.
- If no *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* will be added with that name.


**Detail Information:** 

- Key = "volumeuiActionAddProfileName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Add Profile Streams


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to define a set of *Audio Streams* that will be included as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "volumeuiActionAddProfileStreams" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### Stream


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to define a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action**, as part of the Managed Configuration array **Stream**.


**Detail Information:** 

- Key = "volumeuiStream" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


##### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the type of a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and MUST be specified within each instance of the group **Stream** within the Managed Configuration array **Add Profile Streams**. Some or all of the additional Managed Configurations **Label**, **Icon**, **Visible**, and **Modes** should also be specified to define the characteristics of the new *Audio Stream* of the specified type that will be added.
- If the value ***Music*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for playback of Music and other Media.
- If the value ***Ring*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for ringtones.
- If the value ***Notification*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for notifications.
- If the value ***System*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for system sounds.
- If the value ***Alarm*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for alarms.
- If the value ***VoiceCall*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for voice calls.
- If the value ***VVS*** is chosen, then the *Audio Stream* to be added to the new *Audio UI Profile* will define the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for Decode Beep Vertical Volume Scale (VVS).


**Detail Information:** 

- Key = "volumeuiStreamType" 

- Type = string 

- Choices = ***Music*** , ***Ring*** , ***Notification*** , ***System*** , ***Alarm*** , ***VoiceCall*** , ***VVS*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Label


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the text label to be displayed for a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Stream** within the Managed Configuration array **Add Profile Streams**.
The text label might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the text label to something more description of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.
If no text label is specified for an *Audio Stream*, then the *Factory Preset* default text label will be used.


**Detail Information:** 

- Key = "volumeuiStreamLabel" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Icon


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the icon to be displayed for a single *Audio Stream* that will be included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Stream** within the Managed Configuration array **Add Profile Streams**.
The icon might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the icon to something more representative of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.
If an icon is specified, then the value specified must be the full path and file name of a PNG format icon file that must already be present in the device file system. An icon size of 48x48 pixels is recommended.
If no icon is specified for an *Audio Stream*, then the *Factory Preset* default icon will be used.


**Detail Information:** 

- Key = "volumeuiStreamIcon" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Visible


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether a single *Audio Stream* will be visible to the Device User within the *Zebra Volume Control* when it is included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Stream** within the Managed Configuration array **Add Profile Streams**.
If an *Audio Stream* is made not visible for an *Audio UI Profile*, then the *Zebra Volume Control* will not present ANY UI to the Device User to control the volume of that *Audio Stream*. The result is basically identical to not including the *Audio Stream* in the *Audio UI Profile*. This might be used when temporarily disabling an *Audio Stream* to avoid the need to remove and then add back in the entire definition of that *Audio Stream*.


**Detail Information:** 

- Key = "volumeuiStreamVisible" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Modes


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in one or more modes as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** and as part of an instance of the group **Stream** within the Managed Configuration array **Add Profile Streams**.


**Detail Information:** 

- Key = "volumeuiStreamModes" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


###### Mode


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** within the Managed Configuration array **Modes** as an instance of the Managed Configuration group **Stream** within the Managed Configuration array **Add Profile Streams**.
For each *Audio Mode* defined for an *Audio Stream*, the additional Managed Configuration **Type** MUST be specified to provide which *Audio Mode* will be defined. The additional Managed Configurations **Minimum**, **Maximum**, and **Preset** MUST also be specified to define the lower, upper, and default (preset) volume levels for that *Audio Mode* within that *Audio Stream*.


**Detail Information:** 

- Key = "volumeuiMode" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


###### *Minimum*


**Description:** 

This Managed Configuration allows an Administrator using an EMM to define the minimum volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** within the Managed Configuration array **Modes** as an instance of the Managed Configuration group **Stream** within the Managed Configuration array **Add Profile Streams**.
The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.
The additional Managed Configurations **Maximum** and **Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.
The value specified for of this Managed Configuration must be less than or equal to the value specified for the Managed Configuration **Maximum** and less than or equal to the value specified for the Managed Configuration **Preset**.


**Detail Information:** 

- Key = "volumeuiModeMin" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


###### *Maximum*


**Description:** 

This Managed Configuration allows an Administrator using an EMM to define the maximum volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** within the Managed Configuration array **Modes** as an instance of the Managed Configuration group **Stream** within the Managed Configuration array **Add Profile Streams**.
The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.
The additional Managed Configurations **Minimum** and **Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.
The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Minimum** and greater than or equal to the value specified for the Managed Configuration **Preset**.


**Detail Information:** 

- Key = "volumeuiModeMax" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


###### *Preset*


**Description:** 

This Managed Configuration allows an Administrator using an EMM to define the preset volume level that the UI will allow the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** within the Managed Configuration array **Modes** as an instance of the Managed Configuration group **Stream** within the Managed Configuration array **Add Profile Streams**.
The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.
The additional Managed Configurations **Minimum** and **Maximum** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.
The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Minimum** and less than or equal to the value specified for the Managed Configuration **Maximum**.


**Detail Information:** 

- Key = "volumeuiModePreset" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


###### *Type*


**Description:** 

This Managed Configuration allows an Administrator using an EMM to define the type of behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified if and only if the value ***Add Profile*** is chosen for the Managed Configuration **Action** within the Managed Configuration array **Modes** as an instance of the Managed Configuration group **Stream** within the Managed Configuration array **Add Profile Streams**.
If the value ***Speaker*** is chosen, then the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to the built-in device speaker.
If the value ***Receiver*** is chosen, then the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to receiver mode.
If the value ***WiredHeadset*** is chosen, then the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to a wired audio headset.
If the value ***BluetoothHeadset*** is chosen, then the *Audio Mode* will be configured for the *Audio Stream* under conditions where the *Audio Stream* is being routed to a wireless Bluetooth audio headset.


**Detail Information:** 

- Key = "volumeuiModeType" 

- Type = string 

- Choices = ***Speaker*** , ***Receiver*** , ***WiredHeadset*** , ***BluetoothHeadset*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Remove Profile Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the name of an existing *Audio UI Profile* to be removed and should be specified if and only if the value ***Remove Profile*** is chosen for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "volumeuiActionRemoveProfileName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Set Current Profile Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the name of an existing *Audio UI Profile* to be made the current active *Audio UI Profile*and should be specified if and only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Action**. The additional Managed Configuration **Set Current Profile Adjust Volume** MUST be specified to control whether the current device *Volume Settings* will be adjusted to ensure that they fall within the range of *Volume Settings* defined by the *Audio UI Profile*.


**Detail Information:** 

- Key = "volumeuiActionSetCurrentProfileName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Set Current Profile Adjust Volume


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the current device *Volume Settings* will be adjusted to ensure that they fall within the range of *Volume Settings* defined by an *Audio UI Profile* being made the new current *Audio UI Profile* to be made the current active *Audio UI Profile*and should be specified if and only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Action** and the Managed Configuration **Set Current Profile Name** is specified.


**Detail Information:** 

- Key = "volumeuiActionSetCurrentProfileAdjustVolume" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


## Wakeup Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Wakeups on a Zebra Android device.


**Detail Information:** 

- Key = "wakeupStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Disable Wakeup Source


**Description:** 

This Managed Configuration allows an Administrator using an EMM to disable an individual wake source
- The value will be the specific wake source to be disabled.
- If custom is selected, the key name must be entered in the custom field


**Detail Information:** 

- Key = "disablewakeupSource" 

- Type = string 

- Choices = ***Left Trigger*** , ***Right Trigger*** , ***Rear Button/Gun Trigger*** , ***Scan Button*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


### Enable Custom Wakeup Source


**Description:** 

This Managed Configuration allows an Administrator using an EMM to identify a custom wake source which is one that isn't in the list of predefined wake sources
- The value will be the specific wake source to be disabled.


**Detail Information:** 

- Key = "enablecustomwakeupSource" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


### Enable Wakeup Source


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enable an individual wake source
- The value will be the specific wake source to be enabled.
- If custom is selected, the key name must be entered in the custom field


**Detail Information:** 

- Key = "enablewakeupSource" 

- Type = string 

- Choices = ***Left Trigger*** , ***Right Trigger*** , ***Rear Button/Gun Trigger*** , ***Scan Button*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


### Select Wakeup Source Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select the new hardware wake up types or the legacy software wake up types


**Detail Information:** 

- Key = "selectwakeupsourceType" 

- Type = string 

- Choices = ***New (Hardware)*** , ***Legacy (Software/Keycode)*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.2.


### Wakeup Sources


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether all controllable Wakeup Sources should be turned on or off.
- If the value ***Off*** is chosen, then all wakeup sources that can be turned on or off will be turned off, causing the physical events corresponding to those wakeup sources to be ignored and hence NOT to cause the device to wakeup from a suspend state.
- If the value ***On*** is chosen, then all wakeup sources that can be turned on or off will be turned on, causing the physical events corresponding to those wakeup sources to be honored and hence to cause the device to wakeup from a suspend state.


**Detail Information:** 

- Key = "wakeupSources" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


## Whitelist Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which applications can be installed and run on a Zebra Android device.


**Detail Information:** 

- Key = "whitelistStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Whitelisting Mode, which determines how the applications that can be installed and run on a Zebra Android device will be controlled.
- If the value ***Package Name Only*** is chosen, then when configuring which applications can be installed and run, only the Android Package Name will be used to identify the allowed applications.
- If the value ***Package Name and Signature*** is chosen, then when configuring which applications can be installed and run, both the Android Package Name and the Package Signature will be used to identify the allowed applications.
Using the value ***Package Name and Signature*** provides significantly better security than using ***Package Name Only*** since it provides much stronger protection against spoofing. If ***Package Name Only*** is used, then any APK whose Android Package Name matches one of the allowed Package Names will be allowed to be installed and run. Since any APK can be assigned any Package Name, the potential for a rogue application circumventing the protections of Whitelisting is relatively high. If ***Package Name and Signature*** is used, then the Signature of an application must match an allowed Signature in addition to the Package Name matching and allowed Package Name. Since a rogue APK cannot be signed with a given Signature without possessing the corresponding Private Key, the chances of successfully spoofing are greatly reduced, and effectively eliminated if Private Keys are properly controlled.


**Detail Information:** 

- Key = "whitelistMode" 

- Type = string 

- Choices = ***Package Name Only*** , ***Package Name and Signature*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Action


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to perform an action to alter the Whitelisting configuration of a Zebra Android device.
- If the value ***Allow*** is chosen, then a single application will be allowed to be installed and run. The additional Managed Configuration **Allow Package Name** MUST be specified to provide the Android Package Name of the application that will be allowed. In addition, if the value ***Package Name and Signature*** is chosen for the Managed Configuration **Mode**, then the additional Managed Configuration **Allow Signature** MUST also be specified to provide the Signature to be allowed.
- If the value ***Disallow*** is chosen, then a single application will be prevented from being installed and run. The additional Managed Configuration **Disallow Package Name** MUST be specified to provide the Android Package Name of the application that will be disallowed.


**Detail Information:** 

- Key = "whitelistAction" 

- Type = string 

- Choices = ***Allow*** , ***Disallow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Allow Package Name


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Action**.
If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Mode**, then the additional Managed Configuration **Allow Signature** MUST also be specified to provide the Signature to be allowed.


**Detail Information:** 

- Key = "whitelistActionAddPackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Allow Signature


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Action** and should be specified if and only if the Managed Configuration **Allow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Mode**.


**Detail Information:** 

- Key = "whitelistActionAddSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Disallow Signature


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Action** and should be specified if and only if the Managed Configuration **Disallow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Mode**.


**Detail Information:** 

- Key = "whitelistActionDeleteSignature" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


### Disallow Package Name


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Action**.
If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Mode**, then the additional Managed Configuration **Disallow Signature** MUST also be specified to provide the Signature to be allowed.


**Detail Information:** 

- Key = "whitelistActionDeletePackageName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Whitelisting State, which determines whether the set of applications that can be installed and run on a Zebra Android device will be controlled.
- If the value ***Off*** is chosen, then Whitelisting will not be used and no restrictions will be placed on which applications can be installed and run.
- If the value ***On*** is chosen, then Whitelisting will be used and additional Managed Configurations should be specified to configure how the set of applications will be controlled and which applications will be allowed to be installed and run.


**Detail Information:** 

- Key = "whitelistState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


## Wireless General Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure General Wireless settings on a Zebra Android device.


**Detail Information:** 

- Key = "wirelessStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


### Antenna Selection


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure which of multiple antennas should be used for wireless communications.
- If the value ***Internal*** is chosen, then the internal built-in antenna will be used.
- If the value ***External*** is chosen, then an externally connected antenna will be used.


**Detail Information:** 

- Key = "wirelessAntennaSelection" 

- Type = string 

- Choices = ***Internal*** , ***External*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 7.1.


### GPS Power State


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure whether the GPS radio state should be On or Off.
- If the value ***Off*** is chosen, then the GPS radio state will be turned off, preventing GPS-based location detection from being performed.
- If the value ***On*** is chosen, then the GPS radio state will be turned on, allowing GPS-based location detection to be performed, given satellite availability.


**Detail Information:** 

- Key = "wirelessGpsPowerState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.3.


## Wireless LAN Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure global settings that affect the overall Wireless Local Area Network (WLAN) operation on a Zebra Android device.
- This Managed Configuration group does NOT allow an Administrator using an EMM to add, delete, modify, or control WLAN Profiles that affect the operation of a Zebra Android device on a specific WLAN Networks.
- To manage WLAN Profiles related to specific WLAN Networks, an EMM Administrator should consult the documentation for the specific EMM being used.
- Changes made to global settings using the Managed Configuration group MAY impact the WLAN operation of a Zebra Android device, but generally would impact ALL WLAN Networks.


**Detail Information:** 

- Key = "wlanStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: Ask=TBD.


### Auto Wakeup


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether W-Fi (not the device) should *Wake Up* (turn on) automatically when the presence of a previously connected network is detected.
- If the value ***Off*** is chosen, then automatic *Wake Up* will be turned OFF, preventing the device from detecting the presence of a previously connected network and automatically waking up to connect to it.
- If the value ***On*** is chosen, then automatic *Wake Up* will be turned ON, allowing the device to periodically scan for and detect the presence of a previously connected network and automatically wake up to connect to it.


**Detail Information:** 

- Key = "wlanAutoWakeup" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


### Bands


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the frequency *Bands* that on which the WLAN subsystem will operate on a Zebra Android device.
This Managed Configuration supports the following values:
- If the value ***2.4GHz*** is chosen, then only the 2.4 Gigahertz (Ghz) *Band* (used by 802.11b and 802.11g) will be used.
- If the value ***5.0GHz*** is chosen, then only the 5.0 Gigahertz (Ghz) *Band* (used by 802.11a) will be used.
- If the value ***Auto*** is chosen, then the *Band* to be used will be determined automatically.


**Detail Information:** 

- Key = "wlanBands" 

- Type = string 

- Choices = ***2.4GHz*** , ***5.0GHz*** , ***Auto*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Channels


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the channels over which the WLAN subsystem will operate on a Zebra Android device.
The format of the value entered must be 64 characters or less and can specify one or more channels by separating values by commas and/or specifying ranges of values by separating the lower and upper range values with a dash (-). Some examples:
- 1,2,3
- 3,6,7-9,11-13
The actual channel that can specified depend on the value chosen for the Managed Configuration **Bands**.
- If the value ***2.4GHz*** was specified for the Managed Configuration **Bands**, then channels must be selected that are in the 2.4 Ghz band.
- If the value ***5.0GHz*** was specified for the Managed Configuration **Bands**, then channels must be selected that are in the 5.0 Ghz band.
- If the value ***Auto*** was specified for the Managed Configuration **Bands**, then channels may be selected that are in either band.
Note that individual countries may apply their own regulations regarding the channels that are allowable. Therefore, depending on the value chosen for the Managed Configuration **Country**, not all channel values that could be specified for a given band may be allowable.


**Detail Information:** 

- Key = "wlanChannels" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


### Country


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Country* in which the WLAN subsystem will operate on a Zebra Android device.
This Managed Configuration supports the following values:
- If the value ***Auto (Use 802.11d)*** is chosen, then the *Country* to be used will be determined automatically.
- When any other value is chosen, then the specified *Country* will be used.


**Detail Information:** 

- Key = "wlanCountry" 

- Type = string 

- Choices = ***Auto (Use 802.11d)*** , ***Algeria*** , ***Anguilla*** , ***Argentina*** , ***Australia*** , ***Austria*** , ***Bahamas*** , ***Bahrain*** , ***Barbados*** , ***Belarus*** , ***Belgium*** , ***Bermuda*** , ***Bolivia*** , ***Bonaire*** , ***Bosnia and Herzegovina*** , ***Brazil*** , ***Bulgaria*** , ***Canada*** , ***Cayman Islands*** , ***Chile*** , ***China*** , ***Christmas Island*** , ***Columbia*** , ***Costa Rica*** , ***Croatia*** , ***Curacao*** , ***Cyprus*** , ***Czech Republic*** , ***Denmark*** , ***Dominican Republic*** , ***Ecuador*** , ***Egypt*** , ***El Salvador*** , ***Estonia*** , ***Falkland Islands(Malvinas)*** , ***Finland*** , ***France*** , ***French Guiana*** , ***Germany*** , ***Greece*** , ***Guadelope*** , ***Guam*** , ***Guatemala*** , ***Guyana*** , ***Haiti*** , ***Honduras*** , ***HongKong*** , ***Hungary*** , ***Iceland*** , ***India*** , ***Indonesia*** , ***Ireland*** , ***Israel*** , ***Italy*** , ***Jamaica*** , ***Japan*** , ***Jordan*** , ***Kazakhstan*** , ***Kenya*** , ***Korea Republic*** , ***Kuwait*** , ***Latvia*** , ***Lebanon*** , ***Liechtenstein*** , ***Lithuania*** , ***Luxembourg*** , ***Macedonia*** , ***Malaysia*** , ***Malta*** , ***Martinique*** , ***Mexico*** , ***Montenegro*** , ***Morocco*** , ***Netherlands*** , ***Netherlands*** , ***NewZeaLand*** , ***Nicaragua*** , ***Nigeria*** , ***Niue*** , ***Norfolk Islands*** , ***Northern Marina Islands*** , ***Norway*** , ***Oman*** , ***Pakistan*** , ***Panama*** , ***Paraguay*** , ***Peru*** , ***Philippines*** , ***Poland*** , ***Portugal*** , ***Puerto Rico*** , ***Qatar*** , ***Romania*** , ***Russian Federation*** , ***St. Maarten*** , ***Saudi Arabia*** , ***Serbia*** , ***Singapore*** , ***Slovakia*** , ***Slovenia*** , ***South Africa*** , ***Spain*** , ***Sri Lanka*** , ***Sweden*** , ***Switzerland*** , ***Taiwan*** , ***Thailand*** , ***Trinidad and Tobago*** , ***Tunisia*** , ***Turkey*** , ***Ukraine*** , ***United Arab Emirates*** , ***United Kingdom*** , ***U.S.A.*** , ***Uruguay*** , ***Venezuela*** , ***Vietnam*** , ***Virgin Islands(British)*** , ***Virgin Islands(US)*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.1.


### Hotspot State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the state of the *Hotspot Mode* of the WLAN adapter on a Zebra Android device.
- If the value ***Off*** is chosen, then the *Hotspot Mode* will be turned OFF, preventing the device from sharing its Internet connection as a WLAN Hotspot. Any other existing configuration related to *Hotspot Mode* will not be affected, allowing *Hotspot Mode* to be configured and tested, then turned OFF and back ON without having to reconfigure it.
- If the value ***On*** is chosen, then the *Hotspot Mode* will be turned ON, allowing the device to share its Internet connection as a WLAN Hotspot, subject to appropriate configuration related to *Hotspot Mode*.


**Detail Information:** 

- Key = "wlanHotSpotState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Verbose Logging


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the *Verbose Logging* feature of the WLAN adapter should be turned ON or OFF on a Zebra Android device.
- If the value ***Off*** is chosen, then the *Verbose Logging* will be turned OFF, preventing the device from logging additional information for debugging or troubleshooting WLAN issues.
- If the value ***On*** is chosen, then the *Verbose Logging* will be turned ON, allowing the device to log additional information for debugging or troubleshooting WLAN issues.


**Detail Information:** 

- Key = "wlanVerboseLogging" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Hotspot Options


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure all settings related to *Hotspot Mode* of the WLAN adapter on a Zebra Android device except the state of *Hotspot Mode*, which is configured using Managed Configuration **Hotspot State**.
All the settings is this group can be configured independently of the state of *Hotspot Mode*, thus allowing *Hotspot Mode* to be configured before it is turned ON and allowing the configuration of *Hotspot Mode* to be established and maintained across multiple changes to the state of *Hotspot Mode*.


**Detail Information:** 

- Key = "wlanHotSpotOptions" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### SSID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Service Set Identifier (SSID) that will identify the network supported in *Hotspot Mode* of the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanHotSpotSSID" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### Band


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Frequency Band* in which *Hotspot Mode* of the WLAN adapter will operate on a Zebra Android device.
- If the value ***2.4GHz*** is chosen, then the *Hotspot Mode* of the WLAN adapter will operate solely in the 2.4 Gigahertz (GHz) *Frequency Band* and hence only devices capable of operating in that *Frequency Band* will be capable of sharing the Internet connection of the Zebra Android device via *Hotspot Mode*.
- If the value ***5GHz*** is chosen, then the *Hotspot Mode* of the WLAN adapter will operate solely in the 5.0 Gigahertz (GHz) *Frequency Band* and hence only devices capable of operating in that *Frequency Band* will be capable of sharing the Internet connection of the Zebra Android device via *Hotspot Mode*.


**Detail Information:** 

- Key = "wlanHotSpotBand" 

- Type = string 

- Choices = ***2.4GHz*** , ***5Ghz*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### Band 2.4GHz Channel


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the single 2.4 HGHz Channel in which *Hotspot Mode* of the WLAN adapter will operate on a Zebra Android device and should be specified if and only if the value ***2.4GHz*** is specified for the Managed Configuration **Band**.


**Detail Information:** 

- Key = "wlanHotSpot24GHzChannel" 

- Type = string 

- Choices = ***1*** , ***2*** , ***3*** , ***4*** , ***5*** , ***6*** , ***7*** , ***8*** , ***9*** , ***10*** , ***11*** , ***12*** , ***13*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### 5GHz Channel


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the single 5.0 HGHz Channel in which *Hotspot Mode* of the WLAN adapter will operate on a Zebra Android device and should be specified if and only if the value ***5GHz*** is specified for the Managed Configuration **Band**.


**Detail Information:** 

- Key = "wlanHotSpotBand5GhzChannel" 

- Type = string 

- Choices = ***36*** , ***40*** , ***44*** , ***48*** , ***52*** , ***56*** , ***60*** , ***64*** , ***100*** , ***104*** , ***108*** , ***112*** , ***116*** , ***120*** , ***124*** , ***128*** , ***132*** , ***136*** , ***140*** , ***149*** , ***153*** , ***157*** , ***161*** , ***165*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### Security Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Security Mode* to be used to secure the *Hotspot Mode* of the WLAN adapter will operate on a Zebra Android device.
- If the value ***Open*** is chosen, then the WLAN adapter will apply no security for *Hotspot Mode*, thus providing no control over which devices can connect and share the Internet connection of the Zebra Android device via *Hotspot Mode*.
- If the value ***WPA2/PSK*** is chosen, then the WLAN adapter will apply Wi-Fi Protected Access Version 2 (WPA2) Pre-shared Key (PSK) security for *Hotspot Mode*, thus providing some control over which devices can connect and share the Internet connection of the Zebra Android device via *Hotspot Mode*. The additional Managed Configuration **Security Passphrase** MUST be specified to provide the PSK passphrase that will be used to secure the network.


**Detail Information:** 

- Key = "wlanHotSpotSecurityMode" 

- Type = string 

- Choices = ***Open*** , ***WPA2/PSK*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


#### Security Passphrase


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the PSK passphrase that will be used to secure the *Hotspot Mode* network implemented by the WLAN adapter on a Zebra Android device, and should be specified if and only if the value ***WPA2/PSK*** is specified for the Managed Configuration **Security Mode**.


**Detail Information:** 

- Key = "wlanHotSpotSecurityPassphrase" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### Omnitrail


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Omnitrail settings for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanOmnitrail" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


#### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Omnitrail feature of the WLAN adapter is turned On or Off for a Zebra Android device.


**Detail Information:** 

- Key = "wlanOmnitrailState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Interval


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the interval at which the Omnitrail feature of the WLAN adapter should emit a locational beacon on a Zebra Android device.
The value provided should be in milliseconds (ms) and should have a value in the range of 200 ms (0.2 seconds) to 5000 ms (5 seconds).


**Detail Information:** 

- Key = "wlanOmnitrailInterval" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.0.


#### Options


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to specify one or more Omnitrail options to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanOmnitrailOptions" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


##### Option Pair


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanOmnitrailOptionPair" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


###### Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select a standard name that identifies a single Omnitrail optOmnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the selected name.


**Detail Information:** 

- Key = "wlanOmnitrailOptionName" 

- Type = string 

- Choices = ***OmniTrailChannel*** , ***OmniTrailSubtype*** , ***OmniTrailPriority*** , ***OmniTrailFlag*** , ***OmniTrailType*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


###### Name Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the specified name.


**Detail Information:** 

- Key = "wlanOmnitrailOptionCustomName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


###### Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device and should be specified if and only if either the Managed Configuration **Name** or the Managed Configuration **Name Custom** is also specified to provide the name needed identity the Omnitrail option to be set.


**Detail Information:** 

- Key = "wlanOmnitrailOptionValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Standard


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select an omnittrail datarate standard to be used by the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Datarate** MUST also be specified to provide the actual datarate to be used.
- If the value ***abg*** is chosen, then the Omnitrail datarate standard will be set for 802.11a, 802.11b, and 802,11g.
- If the value ***11n*** is chosen, then the Omnitrail datarate standard will be set for 802.11n.
- If the value ***11ac*** is chosen, then the Omnitrail datarate standard will be set for 802.11a and 802,11c.


**Detail Information:** 

- Key = "wlanOmnitrailDatarateStandard" 

- Type = string 

- Choices = ***abg*** , ***11n*** , ***11ac*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


#### Datarate


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select an omnittrail datarate to be used by the WLAN adapter on a Zebra Android device and should be specified if and only if the Managed Configuration **Standard** is also specified to identify the datarate standard,which will restrict the datarates that can be specified.
- If the value ***abg*** was chosen for the Managed Configuration **Standard**, then the following datarates can be selected.
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
- If the value ***11n*** was chosen for the Managed Configuration **Standard**, then the following datarates can be selected.
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
- If the value ***11ac*** was chosen for the Managed Configuration **Standard**, then the following datarates can be selected.
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

- Key = "wlanOmnitrailDatarate" 

- Type = string 

- Choices = ***1*** , ***2*** , ***5.5*** , ***6*** , ***9*** , ***11*** , ***12*** , ***18*** , ***24*** , ***36*** , ***48*** , ***54*** , ***MCS0*** , ***MCS1*** , ***MCS2*** , ***MCS3*** , ***MCS4*** , ***MCS5*** , ***MCS6*** , ***MCS7*** , ***MCS8*** , ***MCS9*** , ***MCS10*** , ***MCS11*** , ***MCS12*** , ***MCS13*** , ***MCS14*** , ***MCS15*** , ***MCS0_1*** , ***MCS1_1*** , ***MCS2_1*** , ***MCS3_1*** , ***MCS4_1*** , ***MCS5_1*** , ***MCS6_1*** , ***MCS7_1*** , ***MCS8_1*** , ***MCS9_1*** , ***MCS0_2*** , ***MCS1_2*** , ***MCS2_2*** , ***MCS3_2*** , ***MCS4_2*** , ***MCS5_2*** , ***MCS6_2*** , ***MCS7_2*** , ***MCS8_2*** , ***MCS9_2*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Advanced Options


**Description:** 

This Managed Configuration array allows an Administrator using an EMM to specify one or more advanced options to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanAdvancedOptions" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.1.


#### Option Pair


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanAdvancedOptionPair" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.1.


##### Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to select a standard name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the advanced option identified by the selected name.


**Detail Information:** 

- Key = "wlanAdvancedOptionName" 

- Type = string 

- Choices = ***AutoTimeConfig*** , ***HFSR*** , ***CCKM*** , ***FT*** , ***FTRIC*** , ***OKC*** , ***PMKID*** , ***PreAuth*** , ***PowerSave*** , ***WLANPowerSave*** , ***AdvancedLogging*** , ***FIPS*** , ***EnableRestrictedSettingsUI*** , ***802.11K*** , ***802.11w*** , ***802.11ac*** , ***802.11n*** , ***802.11v*** , ***BandPreference*** , ***FTOverTheDS*** , ***AggregatedFT*** , ***ScanAssist*** , ***CHD*** , ***SubNetRoam*** , ***WANCountry*** , ***PasswordProtectEncryption*** , ***MACRandomization*** , ***CallAdmissionControl*** , ***EnableAmpdu*** , ***GratuitousARP*** , ***ChannelBondingMode2g*** , ***WLANExtendedConfig*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.1.


##### Custom Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the advanced option identified by the specified name.


**Detail Information:** 

- Key = "wlanAdvancedOptionCustomName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.1.


##### Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device and should be specified if and only if either the Managed Configuration **Name** or the Managed Configuration **Custom Name** is also specified to provide the name needed identity the advanced option to be set.


**Detail Information:** 

- Key = "wlanAdvancedOptionValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.1.


### Diagnostics Options


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify one or more *Diagnostic Options* to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanDiagnosticsOptions" 

- Type = bundle_array 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


#### Option Pair


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device.


**Detail Information:** 

- Key = "wlanDiagnosticsOptionPair" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enter a standard name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name.


**Detail Information:** 

- Key = "wlanDiagnosticsOptionName" 

- Type = string 

- Choices = ***FusionAdvancedLogging*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Name Custom


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name.


**Detail Information:** 

- Key = "wlanDiagnosticsOptionCustomName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


##### Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to enter a value to be assigned to a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Name** or the Managed Configuration **Name Custom** MUST be specified to provide the name that identifies the *Diagnostic Option* to be set.


**Detail Information:** 

- Key = "wlanDiagnosticsOptionValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### Network Notification


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User will be notified about, and allowed to connect to, new WLANs that are detected.
- If the value ***Off*** is chosen, then the Device User will NOT be notified about, nor allowed to connect to, new WLANs that are detected.
- If the value ***On*** is chosen, then the Device User will be notified about, and allowed to connect to, new WLANs that are detected.


**Detail Information:** 

- Key = "wlanNetworkNotification" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.1.


## Wireless WAN Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Wireless Wide Area Network (WWAN) settings on a Zebra Android device.


**Detail Information:** 

- Key = "wwanStep" 

- Type = bundle 


### Power


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Power State of the WWAN Adapter.
A given device may or may not support a WWAN Adapter. An attempt to configure the WWAN Adapter on a device that does not have one will result in an error.


**Detail Information:** 

- Key = "wwanPower" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


### Background Data


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether WWAN data can be used by applications that are in the *Background*.
- If the value ***Disallow*** is chosen, then the use of WWAN data by applications that are in the *Background* will be prevented.
- If the value ***Allow*** is chosen, then the use of WWAN data by applications that are in the *Background* will be allowed.


**Detail Information:** 

- Key = "wwanBackgroundData" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 4.3.


### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Power State* of the WWAN adapter.
- If the value ***Off*** is chosen, then the power to the WWAN adapter will be turned OFF, preventing all communications via the WWAN adapter and reducing battery drain.
- If the value ***On*** is chosen, then the power to the WWAN adapter will be turned ON, potentially allowing communications via the WWAN adapter and increasing battery drain.


**Detail Information:** 

- Key = "wwanDataState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### SIM Card Slot


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure SIM card slot that will be used by the WWAN adapter.
A given device may or may not support a WWAN Adapter. An attempt to configure the WWAN Adapter on a device that does not have one will result in an error. A given device may have a limited number of SIM card slots. An attempt to configure the WWAN Adapter to use an unsupported SIM card slot will result in an error. A given device may support a given SIM car slot, but that SIM car slot may not contain a SIM card. An attempt to configure the WWAN Adapter to use a supported but unpopulated SIM card slot will result in an error.
- If the value ***Slot 1*** is chosen, then the WWAN adapter will attempt to use the SIM card slot designated as Slot 1.
- If the value ***Slot 2*** is chosen, then the WWAN adapter will attempt to use the SIM card slot designated as Slot 2.
- If the value ***Slot 3*** is chosen, then the WWAN adapter will attempt to use the SIM card slot designated as Slot 3.
- If the value ***Slot 4*** is chosen, then the WWAN adapter will attempt to use the SIM card slot designated as Slot 4.


**Detail Information:** 

- Key = "wwanSimCardSlot" 

- Type = string 

- Choices = ***Slot 1*** , ***Slot 2*** , ***Slot 3*** , ***Slot 4*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.2.


### Data Limit State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a limit should be imposed on the amount of WWAN data used, such as to cap telecom expenses.
- If the value ***Enable and set default limit*** is chosen, then a default limit will be imposed on the amount of WWAN data that can be used.
- If the value ***Enable and set custom limit*** is chosen, then a custom limit will be imposed on the amount of WWAN data that can be used and the additional Managed Configuration **Custom Limit** MUST be provided to specify the desired custom limit.
- If the value ***Disable*** is chosen, then no limit will be imposed on the amount of WWAN data that can be used.


**Detail Information:** 

- Key = "wwanDataLimitState" 

- Type = string 

- Choices = ***Enable and set default limit*** , ***Enable and set custom limit*** , ***Disable*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Custom Limit


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a custom limit that should be imposed on the amount of WWAN data used, such as to cap telecom expenses, and should be specified if and only if the value ***Enable and set custom limit*** is chosen for the Managed Configuration **Data Limit State**.
The custom limit should be an integer value specifying the maximum amount of WWAN data that can be used, in megabytes (MB).


**Detail Information:** 

- Key = "wwanDataLimitStateCustomLimit" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### Data Warning Threshold


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a threshold such that if the amount of WWAN data that has been used exceeds that threshold then a warning will be generated to the Device User.
The threshold should be an integer value specifying the threshold amount of WWAN data, in megabytes (MB).


**Detail Information:** 

- Key = "wwanDataWarningThreshold" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is supported from: MX 6.3.


### User Control of Background Data


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter.
- If the value ***Disallow*** is chosen, then the Device User will be blocked from using the Settings UI to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to ensure that the Administrator settings related to usage of background data cannot be overridden by the Device User.
- If the value ***Allow*** is chosen, then the Device User will be allowed to use the Settings UI to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to enable the Device User to override settings related to usage of background data that were set by the Administrator.


**Detail Information:** 

- Key = "wwanUserControlBackgroundData" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 4.4.


### User Control of Data Limit


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change limits on how much data can be communicated using the WWAN adapter.
- If the value ***Disallow*** is chosen, then the Device User will be blocked from using the Settings UI to change limits on how much data can be communicated using the WWAN adapter. This can be used to ensure that the Administrator settings related to data limits cannot be overridden by the Device User.
- If the value ***Allow*** is chosen, then the Device User will be allowed to use the Settings UI to change limits on how much data can be communicated using the WWAN adapter. This can be used to enable the Device User to override settings related to data limits that were set by the Administrator.


**Detail Information:** 

- Key = "wwanUserControlDataLimit" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### User Control of Power


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change the *Power State* of the WWAN adapter.
- If the value ***Disallow*** is chosen, then the Device User will be blocked from using the Settings UI to change the *Power State* of the WWAN adapter. This can be used to ensure that the Administrator settings related the *Power State* of the WWAN adapter cannot be overridden by the Device User.
- If the value ***Allow*** is chosen, then the Device User will be allowed to use the Settings UI to change the *Power State* of the WWAN adapter. This can be used to enable the Device User to override the *Power State* of the WWAN adapter that was set by the Administrator.


**Detail Information:** 

- Key = "wwanUserControlPower" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.3.


### User Control of Sim Socket


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to select which SIM slot will be used by the WWAN adapter.
- If the value ***Disallow*** is chosen, then the Device User will be blocked from using the Settings UI to select which SIM slot will be used by the WWAN adapter. This can be used to ensure that the Administrator settings related to SIM slot selection cannot be overridden by the Device User.
- If the value ***Allow*** is chosen, then the Device User will be allowed to use the Settings UI to select which SIM slot will be used by the WWAN adapter. This can be used to enable the Device User to override theSIM slot selection that was set by the Administrator.


**Detail Information:** 

- Key = "wwanUserControlSimSocket" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 6.2.


### Public Land Mobile Network Lock


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the WWAN adapter should be locked to a single Public Land Mobile Network Lock (PLMN).
- If the value ***Off*** is chosen, then the WWAN adapter will NOT be locked to a single Public Land Mobile Network Lock (PLMN) and will be free to connect to any PLMN that is compatible with the SIM card being used.
- If the value ***On*** is chosen, then the WWAN adapter will be locked to a single Public Land Mobile Network Lock (PLMN) and will only be able to connect to that PLMN. The additional Managed Configuration **Value** MUST be specified to provide the value that identifies the PLMN to which the WWAN adapter should be locked.


**Detail Information:** 

- Key = "wwanPlmnLock" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the value that identifies the Public Land Mobile Network Lock (PLMN) to which the WWAN adapter should be locked and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Public Land Mobile Network Lock**. to a single Public Land Mobile Network Lock (PLMN).
The value provided to identify a PLMN must specify both the Mobile Country Code (MCC) and the Mobile Network Code (MNC). Since all MCC values are three digits and MNC values can be 2 or 3 digits, the value provided must be of the format XXXYY or XXXYYY, where XXX is the three digit MCC value and YY or YYY is the 2 or 3 digit MNC value.


**Detail Information:** 

- Key = "wwanPlmnLockValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### User Control of Public Land Mobile Network Lock


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN).
- If the value ***Disallow*** is chosen, then the Device User will be blocked from using the Settings UI to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to ensure that the Administrator settings related to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) cannot be overridden by the Device User.
- If the value ***Allow*** is chosen, then the Device User will be allowed to use the Settings UI to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to enable the Device User to override any locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) that was set by the Administrator.


**Detail Information:** 

- Key = "wwanUserControlPlmnLock" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Dual SIM Dual Standby Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether the WWAN adapter should handle multiple SIM card(s) in Dual SIM Dual Standby (DSDS) Mode.
- If the value ***Off*** is chosen, then the WWAN adapter will be configured to handle multiple SIM card(s) in Single SIM Mode, which means that only one SIM at a time will be usable for all carrier services. To use a different SIM, the current SIM will need to be switched and ALL carrier services will switch to the new SIM.
- If the value ***On*** is chosen, then the WWAN adapter will be configured to handle multiple SIM card(s) in Dual SIM Dual Standby Mode, which means that two SIM cards, if present, can be used at the same time, but only one SIM can be chosen for each carrier service. For example, one SIM might be used for voice calls and text messages while the other SIM might be used for data. This can be beneficial if the carriers associated with those SIMs have different performance, pricing, coverage, etc. for various carrier services.


**Detail Information:** 

- Key = "wwanDualSimDualStandby" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.1.


### Device Administrator Advanced Features


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Device Administrator (DA) Advanced Features as part of Wireless WAN configuration.


**Detail Information:** 

- Key = "wwanDaAdvancedFeatures" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Lock Action to be performed.
- If the value ***Lock*** is chosen, then the additional Managed Configurations **Lock Type**, **Lock Unlock Code**, **Lock Unlock Retry Count**, and **Lock Network List** MUST be specified to provide the detail information required to perform the Lock. The additional Managed Configuration **Lock ICCID** MUST also be specified if and only if the value ***ICCID Lock*** is chosen for the Managed Configuration **Lock Type**.
- If the value ***Unlock*** is chosen, then the additional Managed Configuration **Lock Type** MUST be specified to identify the type of prior Lock to be Unlocked AND the additional Managed Configuration **Lock Unlock Code** MUST be specified to provide the same *Unlock Code* provided when the Lock was performed.


**Detail Information:** 

- Key = "wwanDaLockAction" 

- Type = string 

- Choices = ***Lock*** , ***Unlock*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Lock Type to be used for a Lock Action to be performed.


**Detail Information:** 

- Key = "wwanDaLockActionLockType" 

- Type = string 

- Choices = ***Network Lock*** , ***ICCID Lock*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Unlock Code


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a string value to use as the Unlock Code for a Lock Action. The same value will need to be provided to perform a subsequent Unlock Action.


**Detail Information:** 

- Key = "wwanDaLockActionLockUnlockCode" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Unlock Retry Count


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the integer Retry Count, from 1-99, for a Lock Action, indicating the maximum number of times a subsequent Unlock Action can be attempted unsuccessfully before disallowing Unlock.


**Detail Information:** 

- Key = "wwanDaLockActionLockUnlockRetryCount" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Network List


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Network List, as one or more MCC or MNC values, identifying the network(s) to which a device should be Locked. To provide multiple values, separate with commas (e.g. 1,310410,31012).


**Detail Information:** 

- Key = "wwanDaLockActionLockNetworkList" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock ICCID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the ICCID, also known as the SIM Card identifier, identifying the ICCID/SIM Card to which a device should be Locked.


**Detail Information:** 

- Key = "wwanDaLockActionLockIccid" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Unlock Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the the Unlock Type to be used for a Unlock Action to be performed. This should match the Lock Type of the prior Lock Action to be reversed.


**Detail Information:** 

- Key = "wwanDaLockActionUnlockType" 

- Type = string 

- Choices = ***Network Unlock*** , ***ICCID Unlock*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Unlock Unlock Code


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a string value to use as the Unlock Code for an Unlock Action. This must be the same value previously specified for the Lock Action to be reversed.


**Detail Information:** 

- Key = "wwanDaLockActionUnlockUnlockCode" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Mobile Network Operator Advanced Features


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Mobile Network Operator (MNO) Advanced Features as part of Wireless WAN configuration.


**Detail Information:** 

- Key = "wwanMnoAdvancedFeatures" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Lock Action to be performed.
- If the value ***Lock*** is chosen, then the additional Managed Configurations **Lock Activation ID**, **Lock Control Key**, **Lock Network List**, and **Lock Unlock Retry Count** MUST be specified to provide the detail information required to perform the Lock.
- If the value ***Unlock*** is chosen, then the additional Managed Configuration **Unlock Unlock Code** MUST be specified to provide the device-specific *Unlock Code* provided by the MNO that Locked the device and that is required to reverse the Lock.


**Detail Information:** 

- Key = "wwanMnoLockAction" 

- Type = string 

- Choices = ***Lock*** , ***Unlock*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Activation ID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Activation ID that will grant the MNO the permission to perform a Lock Action. The Activation ID must be acquired by an MNO from Zebra and typically will be tied to a set of pre-defined device identities and will enable an MNO to Lock those devices but no others.


**Detail Information:** 

- Key = "wwanMnoLockActionLockActivationId" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Control Key


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Control Key that will later be used to create Unlock Codes for devices Locked using that Control Key. An MNO can later use a tool provided by Zebra to produce individual one-time-use Unlock Codes that can be used to Unlock individual devices that were previously Locked by that MNO using that Control Key.


**Detail Information:** 

- Key = "wwanMnoLockActionLockControlKey" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Unlock Retry Count


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the integer Retry Count, from 1-99, for a Lock Action, indicating the maximum number of times a subsequent Unlock Action can be attempted unsuccessfully before disallowing Unlock.


**Detail Information:** 

- Key = "wwanMnoLockActionLockUnlockRetryCount" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Lock Network List


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Network List, as one or more MCC or MNC values, identifying the network(s) to which a device should be Locked. To provide multiple values, separate with commas (e.g. 1,310410,31012).


**Detail Information:** 

- Key = "wwanMnoLockActionLockNetworkList" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Unlock Unlock Code


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify a string value to use as the Unlock Code for an Unlock Action. This must be a device-specific value provided by the MNO that originally performed the Lock Action to be reversed.


**Detail Information:** 

- Key = "wwanMnoLockActionUnlockUnlockCode" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


### Service Technician Advanced Features


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Service Technician Advanced Features as part of Wireless WAN configuration.


**Detail Information:** 

- Key = "wwanSvcAdvancedFeatures" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Activation ID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the Activation ID that will grant the Service Technician the permission to perform a Service operation. The Activation ID must be acquired by a Service Technician from Zebra.


**Detail Information:** 

- Key = "wwanSvcActivationId" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Export Lock Info


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether the current MNO Lock Information will be Exported and stored to a file on the SD Card of the device.


**Detail Information:** 

- Key = "wwanSvcExport" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Wipe Lock Info


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether the current MNO Lock Information will be Wiped, thus forcing the device to return to an Unlocked state.


**Detail Information:** 

- Key = "wwanSvcWipe" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


#### Import Lock Info


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether MNO Lock Information will be Imported from a file stored on the SD Card of the device and used to Lock a device based on information previously Exported from the same or a different device.


**Detail Information:** 

- Key = "wwanSvcImport" 

- Type = boolean 


**Support Information:** 

- This Managed Configuration is supported from: MX 9.2.


## Worry Free WiFi Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure the Worry Free WiFi features in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: ASK=TBD.


### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the state of the Worry Free WiFi features in a Zebra Android device.
- If the value ***Off*** is chosen, then all Worry Free WiFi features will be turned off (disabled).
- If the value ***On*** is chosen, then all Worry Free WiFi features will be turned off (enabled), but may or may not be usable, depending on configuration performed using additional Managed Configurations.


**Detail Information:** 

- Key = "wfWiFiState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Global Settings


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Global Settings that control Worry Free WiFi behavior in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiGlobalSettings" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### Existing Password


**Description:** 

This Managed Configuration allows an Administrator using an EMM to supply the Existing Password as required to change the Password that controls Device User access to in-device UI for configuring Worry Free WiFi features in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiExistingPassword" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Password Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Password Value that controls Device User access to in-device UI for configuring Worry Free WiFi features in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiPassword" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### Worry Free WiFi Configuration - Global Settings Temporary Password Allow


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify whether a Temporary Password feature will be Allowed or Disallowed.
- If the value ***Disallow*** is chosen, then the Temporary Password feature will NOT be Allowed and no other Managed Configurations should be specified.
- If the value ***Allow*** is chosen, then the Temporary Password feature WILL be Allowed and the additional Managed Configurations **Worry Free WiFi Configuration - Global Settings Temporary Password Duration** and **Worry Free WiFi Configuration - Global Settings Temporary Password Duration**% MUST be specified to provide the Temporary Password Value and the Duration for which the Temporary Password Feature may be used.


**Detail Information:** 

- Key = "wfWiFiTemporaryPasswordState" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


#### Worry Free WiFi Configuration - Global Settings Temporary Password Duration


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a duration in hours after which a Temporary Password expires and must be replaced with a new one.


**Detail Information:** 

- Key = "wfWiFiTemporaryPasswordDuration" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


#### Temporary Password Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure a Temporary Password that can be shared with a Device User to provide temporary and limited access to configure Worry Free WiFi to collect packets and encrypt those packets without having to share the full administrative password (which provides full access and never expires).


**Detail Information:** 

- Key = "wfWiFiTemporaryPassword" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.3.


#### Device User Control


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Device User can access in-device UI for configuring Worry Free WiFi features in a Zebra Android device.
- If the value ***Disallow*** is chosen, then the Device User will NOT be allowed to access in-device UI for configuring Worry Free WiFi features, even if they can enter the Password configured using the Managed Configuration **Password Value**.
- If the value ***Allow*** is chosen, then the Device User will be allowed to access in-device UI for configuring Worry Free WiFi features, if they can enter the Password configured using the Managed Configuration **Password Value**.


**Detail Information:** 

- Key = "wfWiFiDeviceUserControl" 

- Type = string 

- Choices = ***Disallow*** , ***Allow*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Analysis Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Analysis Type* that will be used by the Worry Free WiFi features in a Zebra Android device.
- If the value ***Roam*** is chosen, then Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to roaming.
- If the value ***Voice*** is chosen, then Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to voice communications.
- If the value ***Connection*** is chosen, then Worry Free WiFi will perform analysis designed to troubleshoot and optimize WiFi operations related to establishing connections.


**Detail Information:** 

- Key = "wfWiFiAnalysisType" 

- Type = string 

- Choices = ***Roam*** , ***Voice*** , ***Connection*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action related to the Worry Free WiFi features in a Zebra Android device.
- If the value ***Start*** is chosen, then a Worry Free WiFi *Analysis Session* will be started, terminating any Worry Free WiFi *Analysis Session* that was previously in progress. Some or all of the following additional Managed Configurations some may also need to be specified:
  - **Start Server Analytics** to specify whether Server Analytics should be performed for the *Analysis Session*.
  - **Start Activity Mode** to specify the Activity Mode for the *Analysis Session*.
  - **Start Analysis SSID** to specify the network for the *Analysis Session*.
  - **Start Session Name** to specify the name for the *Analysis Session*.
  - **Start Logger Report Level** to specify the Logger Report Level for the *Analysis Session*.
  - **Start Ping Type** to specify the Ping Type for the *Analysis Session*.
  - **Start Remote Gateway Type** to specify the Remote Gateway Type for the *Analysis Session*.
  - **Custom Server Address** to specify the Custom Server Address for the *Analysis Session*.
  - **Start SD Card Storage** to specify how SD Card Storage will be used for the *Analysis Session*.
- If the value ***Stop*** is chosen, then any Worry Free WiFi *Analysis Session* that is in progress will be terminated.
- If the value ***Clear*** is chosen, then any data accumulated from a Worry Free WiFi *Analysis Session* will be discarded.
- If the value ***Export*** is chosen, then the current Worry Free WiFi configuration will be exported and stored in a file in the device file system.


**Detail Information:** 

- Key = "wfWiFiAction" 

- Type = string 

- Choices = ***Start*** , ***Stop*** , ***Clear*** , ***Export*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Server Analytics


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether or not Server Analytics should be performed during an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Turn Off*** is chosen, then Server Analytics will NOT be performed during the *Analysis Session* that is started.
- If the value ***Turn On*** is chosen, then Server Analytics will be performed during the *Analysis Session* that is started.


**Detail Information:** 

- Key = "wfWiFiActionStartServerAnalytics" 

- Type = string 

- Choices = ***Turn Off*** , ***Turn On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Activity Mode


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Activity Mode for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Foreground*** is chosen, then Analysis will be performed as a foreground task during the *Analysis Session* that is started.
- If the value ***Background*** is chosen, then Analysis will be performed as a background task during the *Analysis Session* that is started.


**Detail Information:** 

- Key = "wfWiFiActionStartActivityMode" 

- Type = string 

- Choices = ***Foreground*** , ***Background*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Analysis SSID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the network that will be used for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
Note that if this Managed Configuration is used to start an *Analysis Session* for a network other than the currently configured network, the currently disconnected network will be disconnected so the specified network can be connected for use by the *Analysis Session*.


**Detail Information:** 

- Key = "wfWiFiActionStartAnalysisSSID" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Session Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the name of an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
The name assigned to an *Analysis Session* can help to analyze exported data by identifying the *Analysis Session* during which the data was collected.


**Detail Information:** 

- Key = "wfWiFiActionStartSessionName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Logger Report Level


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Logger Report Level for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Info*** is chosen, then all available data will be logged, including data that is informational as well as data related to warnings or errors that are detected.
- If the value ***Warning*** is chosen, then only data that is related to warnings or errors that are detected will be logged.
- If the value ***Error*** is chosen, then only data that is related to errors that are detected will be logged.


**Detail Information:** 

- Key = "wfWiFiActionStartLoggerReportLevel" 

- Type = string 

- Choices = ***Info*** , ***Warning*** , ***Error*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Ping Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Ping Type for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***No Data*** is chosen, then Pings sent during the *Analysis Session* that is started will include no data.
- If the value ***Data Ping*** is chosen, then Pings sent during the *Analysis Session* that is started will include data.


**Detail Information:** 

- Key = "wfWiFiActionStartPingType" 

- Type = string 

- Choices = ***No Data*** , ***Data Ping*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start Remote Gateway Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Type of Remote Gateway for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Default*** is chosen, then the Default Remote Gateway will be used.
- If the value ***Custom*** is chosen, then a custom Remote Gateway will be used and the additional Managed Configuration **Custom Server Address** MUST also be specified to supply the desired custom Gateway Server Address.


**Detail Information:** 

- Key = "wfWiFiActionStartRemoteGatewayType" 

- Type = string 

- Choices = ***Default*** , ***Custom*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Custom Server Address


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the Custom Remote Gateway Server Address for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action** and if the value ***Custom*** is specified for the Managed Configuration **Start Remote Gateway Type**.


**Detail Information:** 

- Key = "wfWiFiActionStartRemoteGatewayTypeCustomServerAddress" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Start SD Card Storage


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure SD Card Storage is used for an *Analysis Session* started for the Worry Free WiFi feature and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Only Live Data*** is chosen, then only the most recent data from the new *Analysis Session* will be stored in the SD Card and will replace any prior *Analysis Session* data stored.
- If the value ***Delete old Ping and Packet Data*** is chosen, then old Ping and Packet Data will be deleted and replaced by any new Ping and Packet Data for the new *Analysis Session*.
- If the value ***Delete old Sessions*** is chosen, then any data generated by any prior *Analysis Sessions* will be deleted and replace by the data from the new*Analysis Session*.


**Detail Information:** 

- Key = "wfWiFiActionStartSdCardStorage" 

- Type = string 

- Choices = ***Only Live Data*** , ***Delete old Ping and Packet Data*** , ***Delete old Sessions*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


### Packet Capture


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Settings that control the operation of Packet Capture by the Worry Free WiFi feature in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiPacketCapture" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### State


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure whether Packet Capture will be performed by the Worry Free WiFi feature in a Zebra Android device.
- If the value ***Off*** is chosen, the Packet Capture will NOT be performed. This can significantly decrease the load on the device and decrease battery drain, but will provide less data that can be used for troubleshooting.
- If the value ***On*** is chosen, the Packet Capture will NOT be performed. This can significantly increase the load on the device and increase battery drain, but will provide additional data that can be used for troubleshooting.


**Detail Information:** 

- Key = "wfWiFiPacketCaptureState" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### On File Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the file name of the file into which Packet Capture data will be stored by the Worry Free WiFi feature in a Zebra Android device and should be specified if and only if the value ***On*** is specified for the Managed Configuration **State**.


**Detail Information:** 

- Key = "wfWiFiPacketCaptureStateOnFileName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### On Max File Size


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the maximum size of the file into which Packet Capture data (in megabytes) will be stored by the Worry Free WiFi feature in a Zebra Android device and should be specified if and only if the value ***On*** is specified for the Managed Configuration **State**.


**Detail Information:** 

- Key = "wfWiFiPacketCaptureStateOnMaxFileSize" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### On Max Storage Size


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the maximum amount of Packet Capture data (in megabytes) that will be stored by the Worry Free WiFi feature in a Zebra Android device and should be specified if and only if the value ***On*** is specified for the Managed Configuration **State**.


**Detail Information:** 

- Key = "wfWiFiPacketCaptureStateOnMaxStorageSize" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 8.3.


#### Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Package Capture Type* that will be control the type of Packets that will be captured by the Worry Free WiFi features in a Zebra Android device when the Managed Configuration **State** is used to enable Packet Capture.
- If the value ***Management*** is chosen, then Worry Free WiFi will only capture *Management Packets*.
- If the value ***All*** is chosen, then Worry Free WiFi will capture ALL Packets, including Packets that might contain sensitive data.


**Detail Information:** 

- Key = "wfWiFiPacketCaptureType" 

- Type = string 

- Choices = ***Management Only*** , ***All*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


### Coverage View


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to configure Settings that control the operation of Coverage View by the Worry Free WiFi feature in a Zebra Android device.


**Detail Information:** 

- Key = "wfWiFiCoverageView" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Scan Feature Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to configure the *Scan Feature Type* that will be control the type of Scanning that will be performed by Worry Free WiFi as part of *Coverage View* in a Zebra Android device.
- If the value ***Coverage View*** is chosen, then Worry Free WiFi will perform full scanning as required to support *Coverage View*.
- If the value ***Scan*** is chosen, then Worry Free WiFi will perform more limited scanning.


**Detail Information:** 

- Key = "wfWiFiScanFeatureType" 

- Type = string 

- Choices = ***Coverage View*** , ***Scan*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action related to Coverage View.
- If the value ***Start*** is chosen, then a Worry Free WiFi *Analysis Session* will be started, terminating any Worry Free WiFi *Analysis Session* that was previously in progress. Some or all of the following additional Managed Configurations some may also need to be specified:
  - **Start Scan Interval** to specify the Scan Interval to use for *Coverage View*.
  - **Start SSID** to specify the SSID to use for *Coverage View*.
  - **Start Auto Reachability Test** to specify whether an Auto Reachability Test should be performed as part of *Coverage View*.
  - **Start Auto Reachability Test** to specify whether Server Analytics should be performed as part of *Coverage View*.
  - **Start Session Name** to specify the Session Name to use for *Coverage View*.
  - **Start Session Name** to specify whether SD Card Storage will be used for *Coverage View*.
- If the value ***Stop*** is chosen, then any Worry Free WiFi *Analysis Session* that is in progress will be terminated.
- If the value ***Clear*** is chosen, then any data accumulated from a Worry Free WiFi *Analysis Session* will be discarded.
- If the value ***Export*** is chosen, then the current Worry Free WiFi configuration will be exported and stored in a file in the device file system.


**Detail Information:** 

- Key = "wfWiFiCoverageViewAction" 

- Type = string 

- Choices = ***Start*** , ***Stop*** , ***Clear*** , ***Export*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Start SSID


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the SSID that identifies the network to be used for Coverage View.


**Detail Information:** 

- Key = "wfWiFiCoverageViewActionStartSsid" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Start Scan Interval


**Description:** 

This Managed Configuration allows an Administrator using an EMM to specify the *Scan Interval* to be used for Coverage View.


**Detail Information:** 

- Key = "wfWiFiCoverageViewActionStartScanInterval" 

- Type = integer 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Start Auto Reachability Test


**Description:** 

This Managed Configuration allows an Administrator using an EMM to congfigure whether an Auto Reachability Test should be performed as part of Coverage View.
- If the value ***Off*** is chosen, then Worry Free WiFi will NOT perform an Auto Reachability Test as part of Coverage View each time a Roam occurs.
- If the value ***On*** is chosen, then Worry Free WiFi will perform an Auto Reachability Test as part of Coverage View each time a Roam occurs.


**Detail Information:** 

- Key = "wfWiFiCoverageViewActionStartAutoReachabilityTest" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Start Server Analytics


**Description:** 

This Managed Configuration allows an Administrator using an EMM to congfigure whether Server Analytics should be performed by Worry Free WiFi as part of Coverage View and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.
- If the value ***Off*** is chosen, then Worry Free WiFi will NOT perform Server Analytics as part of Coverage View.
- If the value ***On*** is chosen, then Worry Free WiFi will perform Server Analytics as part of Coverage View.


**Detail Information:** 

- Key = "wfWiFiCoverageViewActionStartServerAnalytics" 

- Type = string 

- Choices = ***Off*** , ***On*** 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


#### Start Session Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to congfigure *Session Name* that should be used by Worry Free WiFi as part of Coverage View and should be specified only if the value ***Start*** is specified for the Managed Configuration **Action**.


**Detail Information:** 

- Key = "wfWiFiCoverageViewActionStartSessionName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is NOT supported on Device(s): TC20 and TC25.


- This Managed Configuration is supported from: MX 9.1.


## Zebra Licensing Configuration


**Description:** 

This Managed Configuration group allows an Administrator using an EMM to manage Zebra-issues licenses on a Zebra Android device.


**Detail Information:** 

- Key = "zebraLicenseStep" 

- Type = bundle 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### License Action


**Description:** 

This Managed Configuration allows an Administrator using an EMM to perform an Action to manage Zebra-issued licenses on a Zebra Android device.
- If the value ***Activate License*** is chosen, then a license will be activated, making it usable on the device. Some or all of the additional Managed Configurations **Activate License Method**, **From Server AID Value**, **From Server Standard Class**, **From Server Custom Class**, **From Server Custom URL**, **From Server Custom Friendly Name**, **From Local File Path and Name**, and **From Local File Source Server Class** MUST be specified to define the license to be activated and how that license should be activated.
- If the value ***Return License*** is chosen, then a previously activated license will be returned, allowing it to be re-allocated for use on another Zebra Android device. The additional Managed Configurations **Return License Server Type**, **Friendly Name**, and **Return License AID Value** MUST be specified to define the license to be returned and how that license should be returned.
- If the value ***Return All Licenses*** is chosen, then all licenses previously activated from a given *License Server* will be returned, allowing them to be re-allocated for use on other Zebra Android devices. The additional Managed Configurations **Return All Licenses Server Type** and **Friendly Name** MUST be specified to define how the licenses were acquired and therefore to identify which licenses should be returned and how they should be returned.
- If the value ***Refresh License*** is chosen, then a previously activated license will be refreshed, updating anything that may have changed, such as its expiration date, capabilities, etc. The additional Managed Configuration **Refresh License AID Value** MUST be specified to provide the license to be refreshed.
- If the value ***Delete Server*** is chosen, then a previously defined *Custom Server*, along with all licenses allocated via that *Custom Server*, will be deleted. The additional Managed Configuration **Delete Server Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* to be deleted.


**Detail Information:** 

- Key = "zebraLicenseAction" 

- Type = string 

- Choices = ***Activate License*** , ***Return License*** , ***Return All Licenses*** , ***Refresh License*** , ***Delete Server*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### Activate License Method


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the method that should be used to activate a Zebra-issued license a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action**.
- If the value ***From Server Standard*** is chosen, then the license will be activated from a Standard Server and the additional Managed Configuration **From Server Standard Class** MUST be specified to provide the class of Standard Server via which the license will be activated and the additional Managed Configuration **From Server AID Value** MUST be specified identify the license to be activated.
- If the value ***From Server Custom*** is chose, then the license will be activated from a Custom Server and the additional Managed Configuration **From Server Custom Class** MUST be specified to provide the class of Custom Server via which the license will be activated and the additional Managed Configuration **From Server AID Value** MUST be specified identify the license to be activated. In addition, the Managed Configuration **From Server Custom URL** MAY need to be specified, depending on the value chosen for the Managed Configuration **From Server Custom Class**.
- If the value ***From Local File*** is chosen, then the license will be activated from a license file stored in the device file system and the additional Managed Configurations **From Local File Path and Name** and **From Local File Source Server Class** MUST be specified to provide the license file and the class of Server from which the license file was acquired.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethod" 

- Type = string 

- Choices = ***From Server Standard*** , ***From Server Custom*** , ***From Local File*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Server AID Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) that identifies a Zebra-issued license to be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action**.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromServerAidValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Server Standard Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Class of Standard Server via which a Zebra-issued license will be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Server Standard*** is chosen for the Managed Configuration **Activate License Method**.
- If the value ***Production Cloud Direct*** is chosen, then the license will be activated by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet. The Production Server should be used when deploying licenses to devices for production use.
- If the value ***Test Cloud Direct*** is chosen, then the license will be activated by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet. The Test Server should be used when tested the deployment of licenses to devices to avoid consuming actual production licenses.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromServerStandardClass" 

- Type = string 

- Choices = ***Production Cloud Direct*** , ***Test Cloud Direct*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Server Custom Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Class of Custom Server via which a Zebra-issued license will be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Activate License Method**.
- If the value ***Production Cloud Proxy*** is chosen, then the license will be activated by communicating to a Production *Zebra License Server* at a fixed known location on the Internet via a *Local Proxy Server*. The additional Managed Configuration **From Server Custom URL** MUST be specified to provide the *Local Proxy Server* to be used.
- If the value ***Test Cloud Proxy*** is chosen, then the license will be activated by communicating to a Test *Zebra License Server* at a fixed known location on the Internet via a *Local Proxy Server*. The additional Managed Configuration **From Server Custom URL** MUST be specified to provide the *Local Proxy Server* to be used.
- If the value ***Local Direct*** is chosen, then the license will be activated by communicating to a *Local License Server*. The additional Managed Configuration **From Server Custom URL** MUST be specified to provide the *Local License Server* to be used.
- If the value ***Other*** is chosen, then the license will be activated by communicating to some other Server. The additional Managed Configuration **From Server Custom URL** MUST be specified to provide the Server to be used.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromServerCustomClass" 

- Type = string 

- Choices = ***Production Cloud Proxy*** , ***Test Cloud Proxy*** , ***Local Direct*** , ***Other*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Server Custom URL


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the URL of a Custom Server via which a Zebra-issued license will be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Activate License Method**.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromServerCustomUrl" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Server Custom Friendly Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide a *Friendly Name* for a Custom Server via which a Zebra-issued license will be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Activate License Method**.
A *Friendly Name* is kept for each Custom Server used to acquire licenses and is used when later operating on such licenses to identify the Custom Server via which a license was acquired and hence via which it must be refreshed, returned, etc. The *Friendly Name* is also used to identify a Custom Server to be deleted.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromServerCustomFriendlyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Local File Path and Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the local path and file name of a license file in the device file system from a which a Zebra-issued license will be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Activate License Method**. The Managed Configuration **From Local File Source Server Class** MUST also be specified to identify the class of Server from which the license file was acquired, which could impact how it is processed.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromLocalFilePathAndName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### From Local File Source Server Class


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the class of Server from which the license file to be activated was acquired and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Activate License Method** and the Managed Configuration **From Local File Path and Name** is specified.


**Detail Information:** 

- Key = "zebraLicenseActionActivateLicenseMethodFromLocalFileSourceServerClass" 

- Type = string 

- Choices = ***Production Cloud*** , ***Test Cloud*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### Return License Server Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Type of Standard Server via which a Zebra-issued license was activated on a Zebra Android device and therefore via which it should be returned, and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **License Action**.
- If the value ***Production Cloud Direct*** is chosen, then the license will be assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and the license will be returned by communicating directly to the same server in the same way.
- If the value ***Test Cloud Direct*** is chosen, then the license will be assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and the license will be returned by communicating directly to the same server in the same way.
- If the value ***Server Friendly Name*** is chosen, then the license will be assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* via which the license was acquired and hence via which it should be returned.


**Detail Information:** 

- Key = "zebraLicenseActionReturnLicenseServerType" 

- Type = string 

- Choices = ***Production Cloud Direct*** , ***Test Cloud Direct*** , ***Server Friendly Name*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Friendly Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* via which a Zebra-issued license was activated on a Zebra Android device and therefore via which it should be returned, and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Return License Server Type**.


**Detail Information:** 

- Key = "zebraLicenseActionReturnLicenseServerTypeFriendlyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Return License AID Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) that identifies a Zebra-issued license to be returned on a Zebra Android device and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **License Action**.


**Detail Information:** 

- Key = "zebraLicenseActionReturnLicenseAidValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Return All Licenses Server Type


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Type of Standard Server via which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore via which they should be returned, and should be specified if and only if the value ***Return All License*** is chosen for the Managed Configuration **License Action**.
- If the value ***Production Cloud Direct*** is chosen, then the licenses will be assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and all such licenses will be returned by communicating directly to the same server in the same way.
- If the value ***Test Cloud Direct*** is chosen, then the licenses will be assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and all such licenses will be returned by communicating directly to the same server in the same way.
- If the value ***Server Friendly Name*** is chosen, then the licenses will be assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* via which the licenses were acquired and hence via which all such licenses should be returned.


**Detail Information:** 

- Key = "zebraLicenseActionReturnAllLicensesServerType" 

- Type = string 

- Choices = ***Production Cloud Direct*** , ***Test Cloud Direct*** , ***Server Friendly Name*** 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Friendly Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* via which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore via which they should be returned, and should be specified if and only if the value ***Return All Licenses*** is chosen for the Managed Configuration **License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Return All Licenses Server Type**.


**Detail Information:** 

- Key = "zebraLicenseActionReturnAllLicensesServerTypeFriendlyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.


### Refresh License AID Value


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) that identifies a Zebra-issued license to be refreshed on a Zebra Android device and should be specified if and only if the value ***Refresh License*** is chosen for the Managed Configuration **License Action**.


**Detail Information:** 

- Key = "zebraLicenseActionRefreshLicenseAidValue" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 7.1.


### Delete Server Friendly Name


**Description:** 

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* to be deleted, and should be specified if and only if the value ***Delete Server*** is chosen for the Managed Configuration **License Action**.


**Detail Information:** 

- Key = "zebraLicenseActionDeleteServerFriendlyName" 

- Type = string 


**Support Information:** 

- This Managed Configuration is supported from: MX 8.1.