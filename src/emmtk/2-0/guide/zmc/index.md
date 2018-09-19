---
title: Zebra Managed Configurations
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## Overview

This guide describes features available for configuring Zebra Android devices using Managed Configurations, a generic Android app extension mechanism. Formerly known as “Application Restrictions,” this mechanism was originally conceived as a means of exposing restrictions on Android device applications that could be imposed from outside, such as by an EMM. For example, the Chrome web browser exposed the ability show or hide the address bar and to store passwords.

The Android community over time recognized that applications might expose more than just restrictions, and the name was changed to Managed Configurations. Zebra recognized that through use of a specially dezigned app, the Managed Configuration mechanism could be used to manage the device itself. This application, called Zebra OemConfig, has been reviewed and approved by Google and several key EMM Vendors, and is now the Google-recommended approach for use by OEMs to publish extended functionality, and for use by EMMs to leverage that extended functionality.

See the [OemConfig Integration Guide](../oemdev) for more information.  

-----

## Transaction and Schema Level

This section describes Managed Configurations that are used internally by an EMM to manage transactions that apply configurations defined by an Administrator to a Zebra Android device and/or to obtain information about the Schema that defines available configuration options. 

### Schema Package Name

Allows an EMM solution or other tool consuming the OemConfig Schema to determine the Package Name of the Package that implements that Schema.

* The Zebra Schema is published by the OemConfig package. Therefore, if the Schema is obtained from that package through the Android system, the package name of that package is already known.
* If the Schema for OemConfig is obtained in some other way, such as by download or direct import, this Managed Configuration can be used as a confirmation mechanism and/or to determine the package to which Managed Configurations created using this Schema should be sent.

### Schema Contract Version

Allows an EMM solution or other tool consuming the OemConfig Schema to determine the Contract Version being used by that Schema. The Contract Version is expressed in the form _&lt;major&gt;.&lt;minor&gt;_ (i.e. "1.5"). 

* The value of _&lt;major&gt;_ changes when there is significant change in the Managed Configurations supported by OemConfig, such as when a change of Android version enables major new functionality.
* The value of _&lt;minor&gt;_ changes when there is some less significant change in the Managed Configurations supported by OemConfig, such as when one or a few additional Managed Configurations are added.
* Neither value changes if modifications to the Schema do not affect the Managed Configurations supported by OemConfig, such as for cosmetic changes.
* See the Managed Configuration **Schema UI Revision** for more information about cosmetic changes that do not affect the Contract Version.

### Schema UI Revision

Allows an EMM solution or other tool consuming the OemConfig Schema to determine the UI Revision of the Schema being used.

The UI Revision is expressed in the form of a simple integer value (i.e. "3"). 
* The value changes when there are changes to the Schema do not affect the Managed Configurations supported by OemConfig, but affect only the UI that might be generated based on that Schema.
* Examples of cosmetic changes that might be indicated using this Managed Configuration include changes in the _Title_ or _Description_ of Managed Configurations or changes to the textual values displayed for a pull-down list of choices.
* See the Managed Configuration **Schema Contract Version** for more information about changes that affect the Contract Version.

### Schema Variant

Allows an EMM solution or other tool consuming the OemConfig Schema to determine the Variant of that Schema being used.

The Schema Variant is expressed in the form of an identifying string and could have a variety of possible values. 
* By definition, all Schemas that have the same values for the Managed Configurations **Schema Package Name** and **Schema Contract Version** should be considered to implement subsets of the Master Schema associated by those two values.
* The Master Schema can be identified by a Schema Variant value of ***Master***.
* All other Schema Variant values indicates various subsets of that Master Schema and those values is generally chosen to identify the class of Zebra Android devices that implement that subset of Managed Configurations, for example:
    * The Schema Variant value ***Value Tier N*** might indicate the subset of Managed Configurations supported on Value Tier Zebra Android devices running Android Nougat.
    * The Schema Variant value ***Premium N-V1*** might indicate the subset of Managed Configurations supported on Premium Zebra Android devices running Android Nougat and that implement the V1 feature set.

### Transaction ID

Allows an EMM to specify a Transaction ID that identifies a collection of configurations that can be performed by submitting a collection of Managed Configurations in a Bundle to OemConfig for processing on a Zebra Android device.

OemConfig uses the Transaction ID value specified in this Managed Configuration to differentiate transactions submitted over time.
* OemConfig processes Managed Configurations in a Bundle submitted to OemConfig if the Transaction ID is set to a different value than the value previously set.
* The Transaction ID used can be any string value convenient for the EMM to use to identify the transaction.
* It is expected that a suitably different Transaction ID value is created by the EMM each time a new collection of Managed Configurations is created in accordance with the OemConfig Schema.
* While a Transaction ID value does not need to be unique, it should be different from any prior value recently used.
* When creating and storing collections of Managed Configurations for long term use, it is generally considered **best practice** to create truly unique values, such as by generating a GUID.
* If the EMM requests notification of the completion of a transaction, the Transaction ID is attached to the Transaction Result Intent to identify the transaction.

### Transaction Result Intent Type

Allows an EMM to request OemConfig to send a notification of the completion of a transaction by sending a Transaction Result Intent when it has finished processing the transaction.

If sending a Transaction Result Intent is desired, this Managed Configuration MUST be set to indicate the type of intent to be sent.
* ***startActivity***- an EMM Activity is notified of the completion of the transaction by sending an intent using the Android method _Context.startActivity()_.
    * It is generally considered **best practice** to specify values for one or more of the Managed Configurations **Transaction Result Intent Action**, **Transaction Result Intent Component**, or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to ensure that the intent is sent to the right Activity and/or to help differentiate the intent from others that might be sent to that Activity.
* ***startService***- an EMM Service is notified of the completion of the transaction by sending an intent using the Android method _Context.startService()_.
    * It is generally considered **best practice** to specify values for one or more of the Managed Configurations **Transaction Result Intent Action**, **Transaction Result Intent Component**, or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to ensure that the intent is sent to the right Service and/or to help differentiate the intent from others that might be sent to that Service.
* ***sendBroadcast***- an EMM is notified of the completion of the transaction by sending an intent using the Android method _Context.sendBroadcast()_.
    * It is generally considered **best practice** to specify values for one or more of the Managed Configurations **Transaction Result Intent Action** or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to help differentiate the intent from others that might be sent to the same receiver.

The Transaction ID value specified in the Managed Configuration **Transaction ID** is attached to the Transaction Result Intent to identify the transaction for which the notification is being sent.

### Transaction Result Intent Action

Allows an EMM to request that OemConfig specify an Intent Action when sending a Transaction Result Intent when it has finished processing of the transaction and should generally be specified only if the Managed Configuration **Transaction Result Intent Type** is also specified.

While specifying an Intent Action is not required when sending a Transaction Result Intent, it is generally considered **good practice** to do so to help the receiver of the intent differentiate it from other intents it might receive. 

### Transaction Result Intent Component

Allows an EMM to request that OemConfig specify a Component when sending a Transaction Result Intent when it has finished processing of the transaction and should generally be specified only if the Managed Configuration **Transaction Result Intent Type** is also specified.


While specifying a Component is not required when sending a Transaction Result Intent, it is generally considered **good practice** to do so since it can help ensure that the intent is sent to the right receiver.

**NOTE**: Since broadcast intents are sent globally, they cannot be directed to a specific receiver. As a result, a Component should be specified only when the value chosen for the Managed Configuration **Transaction Result Intent Type** is ***startActivity*** or ***startService***.

### Transaction Result Intent Extra Name

Allows an EMM to request that OemConfig attach a String Extra whose, Extra Name is specified, to the Transaction Result Intent when it has finished processing of the transaction.

Specifying a String Extra is optional when sending a Transaction Result Intent, although it might be useful to do so since it can help ensure that the receiver of the intent can differentiate it from other intents that it might receive.

* When an Extra Name is specified using this Managed Configuration, it is required that an Extra Value also be specified using the Managed Configuration ***Transaction Result Intent Extra Value***.

### Transaction Result Intent Extra Value

Allows an EMM to request that OemConfig attach a String Extra, whose Extra Value is specified, to the Transaction Result Intent when it has finished processing of the transaction.

Specifying a String Extra is optional when sending a Transaction Result Intent, although it might be useful to do so since it can help ensure that the receiver of the intent can differentiate it from other intents that it might receive.

* When an Extra Value is specified using this Managed Configuration, it is required that an Extra Name also be specified using the Managed Configuration ***Transaction Result Intent Extra Name***. 

### Transaction Steps

Allows an EMM to enable an Administrator to defined a sequence of steps that perform configuration of various configurations and to organize those steps into a single transaction performed on a Zebra Android device.

Any number of transaction steps can be included within a transaction and the individual transactions steps is executed in the order they appear within this Managed Configuration. 

#### Transaction Step

Allows an EMM to enable an Administrator to specify a single transaction step that defines one or more configurations performed on a Zebra Android device as part of a transaction.

Multiple configurations of different types can optionally be defined as part of a single transaction step, but an Administrator CANNOT control the order or execution of such configurations within a given step.

* The system executes multiple configurations within the same step in an order designed to maximize the chance that all configurations can be successfully executed.

* If an Administrator needs to tightly control the order of relative execution of various configurations, they should be included into different transaction steps so their order can be controlled by ordering those steps within the transaction.

The following section **Transaction Step Level** describes the Managed Configurations that are available for an Administrator to use to define the configurations that can be perform as a part of a transaction step. 

-----

## Transaction Step Level

This section describes Managed Configurations that allow an Administrator using an EMM to define the configuration performed as part of a step within a transaction, to describe the step, and to define how errors that occur during the step is handled. 

### Transaction Step Explanation
Used to specify optional explanatory text that describes the purpose or intended behavior of a transaction step.

Since a transaction might include multiple steps and each transaction step could include one or more configurations, describing the step can be invaluable when later reviewing the configuration defined by a transaction and/or when editing a transaction, especially when reordering the steps within a transaction. 

### Transaction Step Error Mode
Used to define how errors that occur during the execution of a transaction step should be handled.

Since a transaction might include multiple steps and each transaction step could include one or more configurations, there might be cases where steps within a transaction are dependent on steps earlier in the same transaction. In such cases, it might be desirable to terminate a transaction if the processing of a step results in an error to avoid propagating the results of that error into subsequent steps.

By default, execution continues with the next transaction step once execution of the current step is completed.

A decision to override this default behavior can be made independently for each step within a transaction by supplying an Error Mode value:

* An Error Mode value of ***Continue*** indicates that any errors that occur during the execution of the current transaction step should NOT terminate execution of subsequent steps in the same transaction. Execution thus always continues with the next transaction step once execution of the current step is completed.

* An Error Mode value of ***Stop*** indicates that any errors that occur during the execution of the current transaction step should terminate execution of subsequent steps in the same transaction. Execution continues with the next transaction step only if execution of the current step completes with NO errors. 

-----

## Analytics Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device. 

### State
Used to configure whether the Analytics Client on a Zebra Android device is turned on (enabled) or turned off (disabled).

The Analytics Client is turned on (enabled) by default on all Zebra Android devices:

* ***Off***- the Analytics Client is turned off (disabled), and does not collect machine data during the operation of the device and does NOT deliver machine data regardless of whether connectivity is available.

* ***On***- the Analytics Client is turned on (enabled), and automatically collects machine data during the operation of the device and delivers it when (connectivity is available) to the Zebra Analytics Cloud Server.

**Note**: The ability for an Administrator to use an EMM to turn off (disable) the Analytics Client is not supported on some devices.

### User Control of State
Used to configure whether the Device User is allowed to control the state (enabled/disabled) of the Analytics Client on a Zebra Android device.

The Analytics Client is turned on (enabled) by default on all Zebra Android devices.

* ***Off***- the Device User prevented from changing the state (enabled/disabled) of the Analytics Client and whether it collects and/or delivers machine data during the operation of the device.

* ***On***- the Device User is allowed to change the state (enabled/disabled) of the Analytics Client and whether it collects and/or delivers machine data during the operation of the device.

-----

## Audio Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the audio settings on a Zebra Android device. 

### Mute/Vibrate
Used to configure the mute and vibrate behavior of a Zebra Android device.

* ***Mute without Vibrate***- the volume is muted (made silent) and the device does NOT vibrate, permitting neither audible nor tactile alerts.

* ***Mute with Vibrate***- the volume is muted (made silent) and the device vibrates, permitting both audible and tactile alerts.

* ***Unmute without Vibrate***- the volume is unmuted (made audible) and the device does NOT vibrate, permitting audible but not tactile alerts. 

### Replication Action
Used to configure the audio replication behavior of of a Zebra Android device.

* ***Replicate headset audio on built-in speaker***- audio routed to the headset also is routed to the built-in speaker. This might be desirable in a situation where the Device User might walk away from a vehicle mounted device and leave the headset in the vehicle while performing some task nearby. If an audible alert is also routed to the built-in speaker, the Device User might still hear it.

* ***Do not replicate headset audio on built-in speaker***- audio routed to the headset also is routed to the built-in speaker. This might be desirable in a situation where the device is being used in an area where routing audio to the built-in speaker could be disruptive to others in the area. 

-----

## Auto Trigger Configuration

This Managed Configuration group allows an Administrator using an EMM to configure whether and how automatic triggering occurs on a Zebra Android device.

Automatic triggering allows a Device User to initiate trigger-activated functions simply by bringing an object within proximity of the device sensor as opposed to requiring the Device User to manually initiate such functions. 

### State
Used to configure whether and how automatic triggering should occur on a Zebra Android device.

* ***Off***- automatic triggering never occurs and the Device User is required to manually initiate trigger-activated functions.

* ***Auto On***- automatic triggering might occur automatically if the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.

* ***Always On***- automatic triggering can always occur automatically , whether or not the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor. 

### Range
Used to configure the range at which automatic triggering detects the presence of an object and initiate automatic triggering.

* ***Near***- automatic triggering occurs only when an object is brought within near proximity to the device sensor. This might be desirable if the device is being worn in a holster and it's convenient to bring objects close to the device sensor.

* ***Far***- automatic triggering occurs when an object is brought within less near proximity to the device sensor. This might be desirable if the device is located in a stand or holder and it's less convenient to bring objects close to the device sensor. 

-----

## Blacklist Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which built-in System Applications can/cannot be used on a Zebra Android device. 

### Action
Used to perform an Action to enable or disable a single built-in System Application on a Zebra Android device.

All built-in System Applications are enabled by default on Zebra Android devices.
Enabling a built-in System Application allows it to be freely launched, either by the Device User or programmatically by other Applications. Disabling a built-in System Application prevents it from being launched, either by the Device User or programmatically by other Applications.

Since a built-in System Application is built-in, it cannot be uninstalled from a device, even if its use is not desired.
To prevent the use of a built-in System Application, it can be disabled and its use prevented while remaining installed.

The value of this Managed Configuration specifies an Action value of ***Enable*** or ***Disable***.
Depending on the Action value chosen, one of the following Managed Configurations also must be specified to provide the package name of the built-in System Application being enabled or disabled.

* ***Enable***- the Managed Configuration **Blacklist Configuration - Action Allow System Package** must be used to specify the package name that identifies the built-in System Application being enabled.

* ***Disable***- the Managed Configuration **Blacklist Configuration - Action Disallow System Package** must be used to specify the package name that identifies the built-in System Application being disabled.

### Allow System Package Name
Used to specify a package name to identify a built-in System Application being ***Enabled*** and should be specified only if the Action value ***Enable*** is chosen for the Managed Configuration **Blacklist Configuration - Action**.

### Disallow System Package Name
Used to specify a package name to identify a built-in System Application being ***Disabled*** and should be specified only if the Action value ***Disable*** is chosen for the Managed Configuration **Blacklist Configuration - Action**. 

-----

## Bluetooth Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Bluetooth settings on a Zebra Android device.


### Discoverability
Used to configure whether the device is *Discoverable* via Bluetooth.

Zebra Android devices are NOT *Discoverable* via Bluetooth by default except when the Bluetooth Pairing screen of the Settings UI is active.

The value of this Managed Configuration can change this default behavior:

* ***Off***- the default behavior is in effect and the device is NOT *Discoverable* via Bluetooth except when the Bluetooth Pairing screen of the Settings UI is active.

* ***On***- the default behavior is overridden and the device is *Discoverable* via Bluetooth whenever Bluetooth is enabled (turned on).

### New Pairings
Used to configure whether the device accepts new Bluetooth Pairings.

Zebra Android devices accepts new Bluetooth Pairings by default.

The value of this Managed Configuration can change this default behavior:

* ***Off***- the default behavior is overridden and the device does NOT accept new Bluetooth Pairings.

* ***On***- the default behavior is in effect and the device accepts new Bluetooth Pairings. 

### Turn On/Off Silent Pairing
Used to configure whether the device can silently perform Bluetooth pairings

Zebra Android devices performs Bluetooth Pairings silently by default.

The value of this Managed Configuration can change this default behavior:

* ***Off***- the default behavior is overridden and the device can not silently perform Bluetooth Pairings.

* ***On***- the default behavior is in effect and the device can silently perform Bluetooth Pairings.

Note that even when the device CAN silently perform Bluetooth Pairings, it DOES NOT do so unless the Managed Configuration **Bluetooth Configuration - Action** is used to configure the specific silent pairing permitted to occur.

### Action
Used to perform an Action to manage a list of rules that control Bluetooth *Auto-Pairing*.

Bluetooth *Auto-Pairing* allows new Bluetooth Pairings to be automatically completed without Device User interaction, if permitted by defined rules.
Since the list of rules is empty by default on Zebra Android devices, Bluetooth *Auto-Pairing* is disabled by default, and Device User interaction is required to complete any new Bluetooth Pairings.

The value of this Managed Configuration specifies an Action value of ***Add*** or ***Remove***, thus allowing the list of rules to be managed.
Depending on the Action value chosen, one of the following Managed Configurations must also be specified:

* ***Add*** is chosen:

    - The Managed Configuration **Bluetooth Configuration - Action Add Rule Name** MUST be used to specify the name of the new rule being added.

    - At least ONE of the Managed Configurations **Bluetooth Configuration - Action Add Rule Device Class** or **Bluetooth Configuration - Action Add Rule Device Upper Address Part** MUST be used to specify the criteria that the new rule uses to determine which new Bluetooth Pairings is allowed.

* ***Remove***- at least ONE of the Managed Configurations **Bluetooth Configuration - Action Remove Rule Name**, **Bluetooth Configuration - Action Remove Rule Device Class**, or **Bluetooth Configuration - Action Remove Rule Device Upper Address Part** MUST be used to specify the information used to determine which rule or rules (with matching information) are removed. 

### Action Add Rule Name
Used to specify a name for a new rule to add to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**. 

### Action Add Rule Device Class
Used to specify the *Device Class* for a new rule to add to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

When a *Device Class* is specified for a rule, Bluetooth *Auto-Pairing* automatically completes new Bluetooth Pairings for Bluetooth devices that have the specified *Device Class*. 

### Action Add Rule Device Upper Address Part
Used to specify the *Device Upper Address Part* for a new rule to add to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

When a *Device Upper Address Part* is specified for a rule, Bluetooth *Auto-Pairing* automatically completes new Bluetooth Pairings for Bluetooth devices that have the specified *Device Upper Address Part* in the upper part of their *Bluetooth Address*. 

### Action Remove Rule Name
Used to specify the name of an existing rule being removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule that has the specified name is removed. 

### Action Remove Rule Device Class
Used to specify the *Device Class* of an existing rule being removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule or rules that have the specified *Device Class* is removed. 

### Action Remove Rule Device Upper Address Part
Used to specify the *Device Upper Address Part* of an existing rule being removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule or rules that have the specified *Device Upper Address Part* is removed. 

-----

## Bug Reporting Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Bug Reporting on a Zebra Android device. 

### Extensions State
Used to configure whether the Standard Android or Zebra Extended Bug Reporting should be used for generation of Bug Reports from a Zebra Android device.

* ***Off***- Standard Android Bug Reporting is used, with no Zebra Extensions or Enhancements.

* ***On***- Zebra Extended Bug Reporting. Additional Managed Configurations would then be used, if needed, to configure the desired behavior and options of Zebra Extended Bug Reporting. 

### Intent Enable
Used to configure whether the Zebra Extended Bug Reporting should allow a Bug Report to be initiated by an application by sending a broadcast intent with an action value of *com.symbol.mxmf.intent.START_FOR_BUG_REPORT*. This is meaningful only when Zebra Extended Bug Reporting is enabled.

* ***Off***- Zebra Extended Bug Reporting, if enabled, does NOT initiate a Bug Report when the defined intent is received.

* ***On***- Zebra Extended Bug Reporting, if enabled, initiates a Bug Report when the defined intent is received. 

### Screenshot Enable
Used to configure whether the Zebra Extended Bug Reporting should be allowed to capture screenshots and attach them to Bug Reports.

* ***Off***- Zebra Extended Bug Reporting, if enabled, does NOT capture Bug Reports nor attach them to Bug Reports.

* ***On***- Zebra Extended Bug Reporting, if enabled, captures Bug Reports and attaches them to Bug Reports. 

### Show In Power Key Menu
Used to configure whether Zebra Extended Bug Reporting should display an option to initiate a Bug Report in the menu which appears after long-pressing the power key on the device.

* ***Off***- Zebra Extended Bug Reporting does NOT add an option to the menu.

* ***On***- Zebra Extended Bug Reporting adds an option to the menu. 

### ANR Error Action
Used to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Application Not Responding (ANR) errors and take action when they are detected.

* ***Do not capture***- Zebra Extended Bug Reporting does NOT watch for the occurrence of ANR errors and takes no action if they occur.

* ***Capture bug report***- Zebra Extended Bug Reporting watches for the occurrence of ANR errors, and automatically initiates a Bug Report each time it detects that one has occurred.

* ***Capture logcat log***- Zebra Extended Bug Reporting watches for the occurrence of ANR errors, an automatically initiates a Logcat capture each time it detects that one has occurred.

### Unexpected Error Action
Used to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Unexpected Application Errors (UAEs) and take action when they are detected.

* ***Do not capture***- Zebra Extended Bug Reporting does NOT watch for the occurrence of UAEs and takes no action if they occur.

* ***Capture bug report***- Zebra Extended Bug Reporting watches for the occurrence of UAEs, and automatically initiates a Bug Report each time it detects that one has occurred.

* ***Capture logcat log***- Zebra Extended Bug Reporting watches for the occurrence of UAEs, and automatically initiates a Logcat capture each time it detects that one has occurred. 

### Send to Cloud Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is sent to the Zebra Cloud Server.

### Send to Cloud Detail State
Used to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports to the Zebra Cloud Server.

* ***Off***- Zebra Extended Bug Reporting does NOT send copies of generated Bug Reports to the Zebra Cloud Server.

* ***On***- Zebra Extended Bug Reporting (if enabled) sends copies of all generated Bug Reports to the Zebra Cloud Server. 

### Cloud Time to Live
Used to configure a timeout value, the expiration of which causes the sending of Bug Reports to the Zebra Cloud Server to automatically cease.

* ***Never***- when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send to Cloud Detail**, Bug Reports continues to be sent to the Zebra Cloud Server until the configuration is explicitly changed again.
* ***Any other value***- at the time it is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send to Cloud Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases sending Bug Reports to the Zebra Cloud Server until the configuration is explicitly changed again. 

### Store in Device Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is stored in the Zebra device and, if so, where in the device they is stored. 

### Store In Device Detail State
Used to configure whether Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device.

* ***Off***- Zebra Extended Bug Reporting does NOT store copies of generated Bug Reports in the device.

* ***On***- Zebra Extended Bug Reporting (if enabled) stores copies of generated Bug Reports in the device. 

### Store in Device Detail File Path
Used to configure the path where the device Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Store In Device Detail State**.

Note that either fixed or removable storage are supported, but the specified path must be valid at the time Bug Report is generated. If no path is specified, bug reports are stored in /storage/sdcard0/BugReports/, always a valid path for storage of Bug Reports on all Zebra Android devices. 

### Storage Time to Live
Used to configure a timeout value, the expiration of which causes the storing of Bug Reports in the device to automatically cease.

* ***Never***- when Zebra Extended Bug Reporting is configured to store Bug Reports in the device, using Managed Configurations in the group **Bug Reporting Configuration - Store in Device Detail**, Bug Reports continues being stored in the device until the configuration is explicitly changed again.

* ***Any other value***- at the time it is configured to store Bug Reports in the device, using Managed Configurations in the group **Bug Reporting Configuration - Store in Device Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases storing Bug Reports in the device until the configuration is explicitly changed again. 

### Send Via Email Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is automatically emailed and, if so, the details of the email that should be sent. 

### Send Via Email Detail State
Used to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports through email.

* ***Off***- Zebra Extended Bug Reporting does NOT send copies of generated Bug Reports through email.

* ***On***- Zebra Extended Bug Reporting (if enabled) sends copies of generated Bug Reports through email. Additional Managed Configurations within the same group must then be specified to configure the details of the email to be sent. 

### Send Via Email Detail SMTP Host
Used to configure the address or host name of the SMTP (email) Server through which emails is sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**.

Note that the Administrator must have access to an email account on the selected SMTP Server and must specify details of that account through additional Managed Configurations within the same group to enable Zebra Extended Bug Reporting to send emails through that SMTP Server. In addition, the Administrator must have access to a valid email account to use as the destination of the emails, which is NOT required on the same SMTP Server, and must specify details of the email address of that account through an additional Managed Configuration within the same group, to enable Zebra Extended Bug Reporting to send the emails to that destination.

### Send Via Email Detail SMTP Port
Used to configure the TCP port number of the SMTP (email) Server through which emails is sent to deliver generated Bug Reports, and should be specified if only if the Managed Configuration **Bug Reporting Configuration - Send Via Email Detail SMTP Host** is specified. 

### Send Via Email Detail Sender ID
Used to configure the ID of the email account used as the source (from address) of emails sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State** and a valid SMTP (email) Server is specified through the Managed Configuration **Bug Reporting Configuration - Send Via Email SMTP Host**

Note that the Administrator must have access to a valid email account on the configured SMTP (email) Server and must specify additional information through other Managed Configurations within the same group, such as **Bug Reporting Configuration - Send Via Email Detail Sender Password** to enable Zebra Extended Bug Reporting to successfully send the emails using that account through that server. 

### Send Via Email Detail Sender Password
Used to configure the password of the email account used as the source (from address) of emails sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**, and a valid SMTP (email) Server is specified using the Managed Configuration **Bug Reporting Configuration - Send Via Email SMTP Host**, and a valid email address is specified using the Managed Configuration **Bug Reporting Configuration - Send Via Email Sender ID**.

### Send Via Email Detail Send To Address
Used to configure the email address of the email account used as the destination (to address) of emails sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**. 

### Email Time to Live
Used to configure a timeout value, the expiration of which causes the sending of Bug Reports through email to automatically cease.

* ***Never***- when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send Via Email Detail**, Bug Reports continues to be sent through email until the configuration is explicitly changed again.

* ***Any other value***- at the time it is configured to send Bug Reports through email, using Managed Configurations in the group **Bug Reporting Configuration - Send Via Email Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases sending Bug Reports through email until the configuration is explicitly changed again. 

### Dialog Elements

This Managed Configuration array allows an Administrator using an EMM to customize the dialog presented to the Device User to collect information included in generated Bug Reports. 

### Dialog Element Detail

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single dialog element to be included in the dialog presented to the Device User to collect information included in generated Bug Reports. 

### Dialog Element Detail Type
Used to specify the type of a single dialog element being included in the dialog presented to the Device User to collect information included in generated Bug Reports.

Depending on the Type value chosen, one or more additional Managed Configurations might also must be specified:

* ***ErrorNameTextBox***- a text box is added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Error Name Text Box Text** must also be specified to provide a text to be pre-populated into the text box.

* ***Label***- a text label is added to the dialog presented to the Device User. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Label Text** must also be specified to provide the text to be populated into the label.

* ***TextBox***- a text box is added to the dialog presented to the Device User in which generic text can be entered. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Text Box Text** must also be specified to provide the text to be pre-populated into the text box. The specified text provides guidance to the Device User about the expected value and disappears when the user begins typing into the text box.

* ***VoiceRecordButton***- a voice record button is added to the dialog presented to the Device User. Clicking this button allows the Device User to record a verbal explanation of the bug to be attached to the generated Bug Report. No additional Managed Configurations are required.

### Dialog Element Detail Type Error Name Text Box Text
Used to specify the text to be pre-populated into a text box added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered and should be specified only if the value ***Error Name Text Box*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. 

### Dialog Element Detail Type Label Text
Used to specify the text of a label added to the dialog presented to the Device User and should be specified only if the value ***Label*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. 

### Dialog Element Detail Type Text Box Text
Used to specify the text that be pre-populated into a text box added to the dialog presented to the Device User into which generic text can be entered and should be specified only if the value ***TextBox*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. The specified text provides guidance to the Device User about the expected value and disappears when the user begins typing into the text box. 

### Dialog Time Out
Used to specify the amount of inactivity time (time in milliseconds with no Device User activity), after which the dialog presented to the Device User is automatically dismissed, causing the Bug Report to be completed as if the Device User had explicitly clicked the "Submit" button.

-----

## Camera Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which camera(s) or other image capture devices are allowed to be used to take pictures on a Zebra Android device. 

### Use Of Back Camera
Used to configure whether the Rear Facing Camera, if present on a Zebra Android device, can be used to take pictures.

* ***Off***- no applications or services running on the device is allowed to take pictures using the Rear Facing Camera.

* ***On***- any applications or services running on the device is allowed to take pictures using the Rear Facing Camera. 

### Use Of Front Camera
Used to configure whether the Front Facing ("selfie") Camera, if present on a Zebra Android device, can be used to take pictures.

* ***Off***- no applications or services running on the device is allowed to take pictures using the Front Facing Camera.

* ***On***- any applications or services running on the device is allowed to take pictures using the Front Facing Camera. 

### Use Of Imager
Used to configure whether the Imager (special-purpose image capture device), if present on a Zebra Android device, can be used to take pictures.

* ***Off***- no applications or services running on the device is allowed to take pictures using the Imager (special-purpose image capture device) Camera.

* ***On***- any applications or services running on the device is allowed to take pictures using the Imager (special-purpose image capture device) Camera. 

-----

## Clock Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation and state of the clock on a Zebra Android device. 

### Time Mode
Used to choose whether time and date configuration is performed manually, using other Managed Configurations in this group, or automatically, by connecting to a NTP (Network Time Protocol) server. 

### Manual Date
Used to manually configure the date on a Zebra Android device and should be specified only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Manual Time
Used to manually configure the time on a Zebra Android device and should be specified only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Auto NTP Server Address
Used to configure the address of the NTP (Network Time Protocol) server to be used to perform automatic data and time configuration on a Zebra Android device and should be specified only if the value ***Automatic*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Auto NTP Sync Interval
Used to configure the interval at which automatic date and time configuration is performed on a Zebra Android device and should be specified only if the value ***Automatic*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Time Zone Mode
Used to choose whether time zone configuration is performed manually, using another Managed Configuration in this group, or automatically, by connecting to a NITZ (Network Identity and Time Zone) source. 

### Manual Time Zone
Used to manually configure the time zone on a Zebra Android device and should be specified only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Zone Mode**. 

### Time Format
Used to choose whether the format in which time is displayed on the device is in ***12*** hour (AM/PM) or ***24*** hour (military) format. 

-----

## DHCP Option Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Dynamic Host Configuration Protocol (DHCP) Client on a Zebra Android device.

The DHCP Client on the device sends a DHCP Request to a DHCP Server and receives back a DHCP Acknowledgment. A DHCP Request sent by a device can contain information about the device or the DHCP Client, and can contain requests for additional information from the DHCP Server. A DHCP Acknowledgment sent by the DHCP Server contains the IP Address assigned to the device by the DHCP Server along with other related information and any additional information requested by the device in the DHCP Request.

DHCP Options are variable-length strings that are identified by DHCP Options Numbers that can be included in a DHCP Request or a DHCP Acknowledgment to convey information between a DHCP Client and a DHCP Server. From the point of view of the device where the DHCP Client is running, a DHCP Option can allow the DHCP Client to *Send* information to the DHCP Server or can allow the DHCP Client to *Request* the DHCP Server to return information to the DHCP Client. 

### Request Boot File Name (Option 67)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Boot File Name* and return it using *DHCP Option 67* along with the IP Address. 

### Request Broadcast Address (Option 28)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Broadcast Address* and return it using *DHCP Option 28* along with the IP Address. 

### Request NTP Server (Option 42)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *NTP Server* and return it using *DHCP Option 42* along with the IP Address. 

### Request TFTP Server Address (Option 66)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Address* and return it using *DHCP Option 66* along with the IP Address. 

### Request Vendor Encapsulated Options (Option 43)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Vendor Encapsulated Options* and return whatever is acquired using *DHCP Option 43* along with the IP Address. 

### Request Domain Search List (Option 119)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Domain Search List* and return it using *DHCP Option 119* along with the IP Address. 

### Request TFTP Server Names (Option 150)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Name(s)* and return it using *DHCP Option 150* along with the IP Address. 

### Request Vendor Specific Option#1 (Option 186)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *First Vendor Specific Option* and return it using *DHCP Option 186* along with the IP Address. 

### Request Vendor Specific Option#2 (Option 188)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Second Vendor Specific Option* and return it using *DHCP Option 188* along with the IP Address. 

### Request Vendor Specific Option#3 (Option 230)
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Third Vendor Specific Option* and return it using *DHCP Option 230* along with the IP Address. 

### Send Client Identifier State (Option 61)
Used to configure whether the DHCP Client on a Zebra Android device sends a *Client Identifier* to the DHCP Server using *DHCP Option 61* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Off***- no additional Managed Configurations should be specified to provide additional information.

* ***On***- the additional Managed Configuration **DHCP Configuration - Send Option 61 Client Identifier Value** MUST be specified to provide the value of the *Client Identifier* to be sent.

### Send Client Identifier Value (Option 61)
Used to specify the *Client Identifier* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 61 Client Identifier State**. 

### Send Host Name State (Option 12)
Used to configure whether the DHCP Client on a Zebra Android device sends a *Host Name* to the DHCP Server using *DHCP Option 12* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Off***- no additional Managed Configurations should be specified to provide additional information.

* ***On***- the additional Managed Configuration **DHCP Configuration - Send Option 12 Host Name Value** MUST be specified to provide the value of the *Host Name* to be sent.

### Send Host Name Value (Option 12)
Used to specify the *Host Name* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified only the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 12 Host Name State**. 

### Send User Class State (Option 77)
Used to configure whether the DHCP Client on a Zebra Android device sends a *User Class* to the DHCP Server using *DHCP Option 77* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Off***- no additional Managed Configurations should be specified to provide additional information.

* ***On***- the additional Managed Configuration **DHCP Configuration - Send Option 77 User Class Value** MUST be specified to provide the value of the *User Class* to be sent. 

### Send User Class Value (Option 77)
Used to specify the *User Class* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 77* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 77 User Class State**. 

### Send Vendor Class State (Option 60)
Used to configure whether the DHCP Client on a Zebra Android device sends a *Vendor Class* to the DHCP Server using *DHCP Option 60* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Off***- no additional Managed Configurations should be specified to provide additional information.

* ***On***- the additional Managed Configuration **DHCP Configuration - Send Option 60 Vendor Class Value** MUST be specified to provide the value of the *Vendor Class* to be sent. 

### Send Vendor Class Value (Option 60)
Used to specify the *Vendor Class* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 60* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 60 Vendor Class State**. 

### Send FQDN State (Option 81)
Used to configure whether the DHCP Client on a Zebra Android device sends a *Fully Qualified Domain Name (FQDN)* to the DHCP Server using *DHCP Option 81* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Off***- no additional Managed Configurations should be specified to provide additional information.

* ***On***- the additional Managed Configurations **DHCP Configuration - Send FQDN Value (Option 81)** and **DHCP Configuration - Send FQDN Flag (Option 81)** MUST be specified to provide the value of the *FQDN value* and the associated flags to be sent. 

### Send FQDN Value (Option 81)
Used to specify the *Fully Qualified Domain Name (FQDN)* sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Vendor Class Value (Option 60)**. The additional Managed Configuration **DHCP Configuration - Send FQDN Flag (Option 81)** MUST also be specified to provide the flags to be sent along with the *FQDN value*. 

### Send FQDN Flag (Option 81)
Used to specify the flags to be sent along with the *Fully Qualified Domain Name (FQDN)* sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Vendor Class Value (Option 60)** and should be specified only if the value Managed Configuration **DHCP Configuration - Send FQDN Value (Option 81)** is specified. 

### Request Custom Option Number
Used to provide the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should request from DHCP Server and return along with the IP Address and should be specified only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Request Custom Option State**. 

### Request Custom Option State
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire a custom DHCP option and return it along with the IP Address.

* ***Off***- no custom DHCP Option is requested and no additional Managed Configuration should be specified.

* ***On***- a custom DHCP Option is requested and the additional Managed Configuration **DHCP Configuration - Request Custom Option Number** MUST be specified to provide the custom option number to be requested.

### Send Custom Option Number
Used to provide a the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Send Custom Option State**. 

### Send Custom Option State
Used to configure the DHCP Client on a Zebra Android device to request that the DHCP Server send a custom DHCP option when requesting an IP Address.

* ***Off***- no custom DHCP Option is sent and no additional Managed Configurations should be specified.

* ***On***- a custom DHCP Option is sent and the additional Managed Configuration **DHCP Configuration - Send Custom Option Number** MUST be specified to provide the custom option number to be sent and the additional Managed Configuration **DHCP Configuration - Send Custom Option Value** MUST be specified to provide the custom option value to be sent. 

### Send Custom Option Value
Used to provide the option value for a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Send Custom Option State** and if the Managed Configuration **DHCP Configuration - Send Custom Option Number** is specified. 

-----

## Device Administration Configuration

This Managed Configuration group allows an Administrator using an EMM to control which applications and services are allowed to submit XML for processing by the Zebra MX Management System on a Zebra Android device. 

### Action
Used to perform an Action to control access to or use the Zebra MX Management System on a Zebra Android device. The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***AllowSubmitXml***- a single application or service is allowed to submit XML for processing by the Zebra MX Management System. The additional Managed Configuration **Device Administration Configuration - Action Allow Submit XML Package Name** must be specified to supply the Android Package Name that identifies the application or service is to be allowed.

* ***DisallowSubmitXml***- a single application service is disallowed from submitting XML for processing by the Zebra MX Management System. The additional Managed Configuration **Device Administration Configuration - Action Disallow Submit XML Package Name** must be specified to supply the Android Package Name that identifies the application or service is to be disallowed.

* ***SubmitXml***- the additional Managed Configuration **Device Administration Configuration - Action Action Submit XML** must be specified to supply the XML string submitted for processing by the .Zebra MX Management System.


### Action Allow Submit XML Package Name
Used to specify the Android Package Name that identifies the application or service is to be allowed and should be specified only if the value ***AllowSubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

### Action Disallow Submit XML Package Name
Used to specify the Android Package Name that identifies the application or service is to be disallowed and should be specified only if the value ***DisallowSubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

### Action Submit XML
Used to specify an XML string to be submitted for processing by the .Zebra MX Management System, and should be specified if an only if the value ***SubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

-----

## Device Central Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Device Central behavior on a Zebra Android device. 

-----

## Bluetooth Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Bluetooth behavior on a Zebra Android device. 

### Bluetooth On/Off Control
Used to configure whether the Device User should be allowed to use the Device Central UI to control Bluetooth Power.

* ***Disallow***- Device Central does NOT provide a UI that allows the Device User to control the Bluetooth power state.

* ***Allow***- Device Central provides a UI that allows the Device User to control the Bluetooth power state.

### Bluetooth Pairing Control
Used to configure whether Device Central system should allow multiple pairings to the same Device Class.

* ***Single Pairing Per Device Class***- Device Central system allows only one pairing at a time for each Bluetooth Device Class (i.e. one headset and one printer).

* ***Multiple Pairings Per Device Class***- Device Central system allows multiple pairings at a time for each Bluetooth Device Class (i.e. multiple headsets and/or multiple printers). 

### Firmware Update Button
Used to configure whether the Device User should be allowed to use the Device Central UI to initiate a Firmware Update.

* ***Disallow***- Device Central does NOT provide UI that allows the Device User to initiate a Firmware Update.

* ***Allow***- Device Central provides a UI that allows the Device User to initiate a Firmware Update. 

-----

## Display Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Display Screen settings on a Zebra Android device.

### Timeout
Used to configure the amount of inactivity, in seconds, after which the device display screen is turned off.

**NOTE**: A given device might not support all options allowed to be specified using this Managed Configuration. If a specified value is not supported on a specific device, the smallest larger supported value is used. If no larger value is supported, the largest smaller supported value is used.

### Blanking Mode
Used to configure the Display Blanking Mode, which determines whether the Display automatically Blanks (displays nothing).

* ***Never Blank***- the Display is never automatically Blanked.

* ***Blank When Triggered by Signal***- the Display is automatically Blanked and the following Managed Configurations must be used:

    - **Display Configuration - Blanking Signal** - to specify the signal used to activate automatic Blanking

    - **Display Configuration - Blanking Signal Polarity** - to specify the polarity of the signal specified by the Managed Configuration **Display Configuration - Blanking Signal** used to activate automatic Blanking

    - **Display Configuration - Blanking Signal Debounce Delay** - to specify the time used to debounce the signal specified by the Managed Configuration **Display Configuration - Blanking Signal** before using it to activate automatic Blanking

### Stay Awake
Used to configure whether the Display stays awake (prevent automatic time out and turn off) when the device is connected to external power.

* ***Off***- the Display does NOT stay awake and the Display automatically turns off even when the device is connected to external power.

* ***On***- the Display stays awake and does not automatically time out and turn off when the device is connected to external power.

### Blanking Mode Signal
Used to select the Signal used to trigger automatic Display Blanking and should be specified only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

### Blanking Mode Signal Polarity
Used to select the Polarity of the Signal used to trigger automatic Display Blanking and should be specified only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

### Blanking Mode Signal Debounce Delay
Used to select the Debounce Delay used for the Signal used to trigger automatic Display Blanking and should be specified only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

-----

## Enterprise Keyboard Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device. 

### Auto Capitalization
Used to configure whether the Enterprise Keyboard on a Zebra Android device has automatic capitalization turned on (enabled) or turned off (disabled) for the first letter of each sentence.

* ***Off***- automatic capitalization is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

* ***On***- automatic capitalization is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Auto Correction
Used to configure whether the Enterprise Keyboard on a Zebra Android device has automatic correction of misspelled words turned on (enabled) or turned off (disabled), wherein the space and punctuation keys initiate automatic correction of misspelled words.

* ***Off***- automatic correction of misspelled words is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

* ***On***- automatic correction of misspelled words is turned on (enabled) is available for use when entering data using the Enterprise Keyboard.

### Block Offensive Words
Used to configure whether the Enterprise Keyboard on a Zebra Android device has automatic blocking of offensive words turned on (enabled) or turned off (disabled).

* ***Off***- automatic offensive word blocking is turned off (disabled).

* ***On***- automatic offensive word blocking is turned on (enabled).

### Double Space Period
Used to configure whether the Enterprise Keyboard on a Zebra Android device has automatic sentence ending turned on (enabled) or turned off (disabled), causing a double-tap on the space key to cause the entry of a period followed by two spaces.

* ***Off***- this feature is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Flick for Alternate Chars
Used to configure whether the Enterprise Keyboard on a Zebra Android device shows alternate characters when a flick gesture is performed.

* ***Off***- this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Key Long Press Delay
Used to configure the length of time (in milliseconds) that a key within the Enterprise Keyboard on a Zebra Android device must be held pressed to be detected as a long press.

### Navigation Mode
Used to configure the navigation mode used by the Enterprise Keyboard on a Zebra Android device to provide its user experience.

* ***Tab-based (new)***- the Zebra Enterprise Keyboard uses the new user experience wherein different tabs are used to select the desired keyboard.

* ***Key-based (legacy)***- Enterprise Keyboard uses keys to select the desired keyboard layout.

### Numeric Layout Mode
Used to configure the numeric layout mode of the Enterprise Keyboard on a Zebra Android device used when it determines that a numeric keyboard should be displayed.

* ***Telephone Mode***- Enterprise Keyboard displays a numeric keyboard in telephone mode (i.e. 123, 456, 789).

* ***Calculator Mode***- Enterprise Keyboard displays a numeric keyboard in calculator mode (i.e. 789, 456, 123).

### Show Alphanumeric Tab
Used to configure whether the Zebra Enterprise Keyboard on a Zebra Android device shows the alphanumeric tab to allow selection of the alphanumeric keyboard.

* ***Off***- this feature is turned off (disabled) and is not available for entering data using Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using Enterprise Keyboard.

### Show Numeric Tab
Used to configure whether the Enterprise Keyboard on a Zebra Android device shows the numeric tab to allow selection of the numeric keyboard.

* ***Off***- this feature is turned off (disabled) and is available for entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Show Scan Tab
Used to configure whether the Enterprise Keyboard on a Zebra Android device shows the scan tab to allow control of barcode scanning.

* ***Off***- this feature is turned off (disabled) and is not be available for entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Show Symbol Tab
Used to configure whether the Enterprise Keyboard on a Zebra Android device shows the symbol tab to allow selection of the special symbols keyboard.

* ***Off***- this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) is available for entering data using the Enterprise Keyboard.

### Show Voice Input Key
Used to configure whether the Enterprise Keyboard on a Zebra Android device shows a key to invoke voice input (if supported).

* ***Off***- this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Preferred Tab
Used to configure the preferred tab selects by default by Enterprise Keyboard on a Zebra Android device when textual data is being entered.

* ***Numeric***- Enterprise Keyboard selects the Numeric tab by default when textual data is being entered.

* ***Alphanumeric***- Enterprise Keyboard shows the Alphanumeric tab by default when textual data is being entered.

* ***Symbol***- Enterprise Keyboard shows the Symbol tab by default when textual data is being entered.

* ***Scan***- Enterprise Keyboard shows the Scan tab by default when textual data is being entered.

### Suggest Contact Names
Used to configure whether the Enterprise Keyboard on a Zebra Android device showing contact name suggestions while typing based on past actions is turned on (enabled) or turned off (disabled).

* ***Off***- contact name suggestions is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

* ***On***- contact name suggestions is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Suggest Misspelling Corrections
Used to configure whether the Enterprise Keyboard on a Zebra Android device showing suggestions for corrections of misspelled words while typing is turned on (enabled) or turned off (disabled).

* ***Off***- correction suggestions is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

* ***On***- correction suggestions is turned on (enabled) and is available for entering data using the Enterprise Keyboard.

### Pop-up on Keypress
Used to configure whether the Enterprise Keyboard on a Zebra Android device has key pop-up on each keypress turned on (enabled) or turned off (disabled) wherein a visible indication that the key was pressed occurs.

* ***Off***- this feature is turned off (disabled), preventing Enterprise Keyboard from showing key pop-ups.

* ***On***- this feature is turned on (enabled), allowing Enterprise Keyboard to show key pop-ups in each keypress. 

### Sound on Keypress
Used to configure whether the Enterprise Keyboard on a Zebra Android device has sound on each keypress turned on (enabled) or turned off (disabled) wherein an audible indication that the key was pressed occurs.

* ***Off***- this feature is turned off (disabled), preventing Enterprise Keyboard from playing a sound on each keypress.

* ***On***- this feature is turned on (enabled), enabling Enterprise Keyboard to play a sound on each keypress.

### Sound on Keypress Volume Mode
Used to configure the volume mode used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress.

* ***System Default Volume***- the System Default Volume for keypress sounds is used.

* ***Specified Volume***- a specified volume is used and the Managed Configuration **ekbSoundOnKeypressVolume** MUST also be specified to supply that volume.

### Sound on Keypress Volume
Used to configure the volume (from 0&ndash;100) used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress. This should be specified only if the value ***On*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Sound on Keypress** and the value ***System Default Volume*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Sound on Keypress Volume Mode**.

### Vibrate on Keypress
Used to configure whether the Enterprise Keyboard on a Zebra Android device has vibration on each keypress turned on (enabled) or turned off (disabled) wherein a tactile indication that the key was pressed occurs.

* ***Off***- this feature is turned off (disabled) and keypresses do not cause vibration when using the Enterprise Keyboard.

* ***On***- this feature is turned on (enabled) and keypresses cause vibration when using the Enterprise Keyboard.

### Vibrate on Keypress Duration Mode
Used to configure the duration mode used by the Enterprise Keyboard on a Zebra Android device when vibrate occurs on each keypress.

* ***System Default Duration***- the System Default Duration for keypress vibrate is used.

* ***Specified Duration***- a specified duration is used and the Managed Configuration **ekbVibrateOnKeypressDuration** MUST also be specified to supply that duration.

### Vibrate on Keypress Duration
Used to configure the duration (from 0&ndash;100ms) used by the Enterprise Keyboard on a Zebra Android device when a vibrate occurs on each keypress, and should be specified only if the value ***On*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Vibrate on Keypress** and the value ***System Default Duration*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Vibrate on Keypress Duration Mode**.

### Remap Alpha P1
Used to remap the behavior the Enterprise Keyboard on a Zebra Android as it pertains to the Alpha P1 Key (located on the Alpha keyboard at Row 1, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

### Remap Numeric P1
Used to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P1 Key (located on the Numeric keyboard at Row 1, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

### Remap Numeric P2
Used to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P2 Key (located on the Numeric keyboard at Row 2, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

### Remap Numeric P3
Used to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P3 Key (located on the Numeric keyboard at Row 3, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

### Remap Numeric P4
Used to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P4 Key (located on the Numeric keyboard at Row 4, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

### Remap Symbol P1
Used to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Symbol P1 Key (located on the Symbol keyboard at Row 4, Column 1).

**Possible values**:

* A single character value (i.e. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.
* A hexadecimal value in the format ***uXXXXXX*** (i.e. "***u000001***") causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).
* The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.

-----

## Ethernet Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the Ethernet adapter on a Zebra Android device. 

### Power
Used to configure the Power State of the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### Use Proxy Server
Used to configure whether a Proxy Server should be used to access the Internet from the network accessed through the Ethernet adapter.

When specifying that a Proxy Server is to be used, it is generally considered **best practice** to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error. 

### Proxy Server
Used to configure the Proxy Server used to access the Internet from the network accessed through the Ethernet adapter.

While it is not required, it is generally considered **best practice** to specify all three Managed Configurations settings: **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List**, whenever Ethernet Proxy Server configuration is performed to help ensure that all three values are properly synchronized.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error. 

### Proxy Server Port
Used to configure the Port used to reach the Proxy Server to access the Internet from the network accessed through the Ethernet adapter.

While it is not required, it is generally considered **best practice** to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error. 

### Proxy Server Bypass List
Used to configure the Proxy Server Bypass List which specifies addresses that should bypass the Proxy Server used to access the Internet from the network accessed through the Ethernet adapter.

While it is not required, it is generally considered **best practice** to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error. 

### IP Address Type
Used to configure how an IP Address is assigned to the Ethernet adapter.

* ***Dynamic (DHCP)***- an IP Address for the Ethernet adapter is automatically acquired by the DHCP Client from the DHCP Server.

* ***Static (Manual)***- an IP Address for the Ethernet adapter is assigned based on the values contained in the Managed Configurations **Ethernet Configuration - IP Address**, **Ethernet Configuration - Gateway Address**, **Ethernet Configuration - Network Mask**, **Ethernet Configuration - Primary DNS**, and **Ethernet Configuration - Secondary DNS**, which MUST also be specified to supply the required values.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### IP Address
Used to manually configure the IP Address to be assigned to the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### Gateway Address
Used to manually configure the Gateway Address to be assigned to the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### Network Mask
Used to manually configure the Network Mask to be assigned to the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### Primary DNS
Used to manually configure the Primary DNS Server Address to be assigned to the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

### Secondary DNS
Used to manually configure the Secondary DNS Server Address to be assigned to the Ethernet adapter.

**NOTE**: Attempts to configure the Ethernet adapter on a device that does not have one results in an error.

-----

## Firmware Over The Air Configuration

This Managed Configuration group allows an Administrator using an EMM to configure how Firmware Over The Air (FOTA) operations are performed and execute such operations on a Zebra Android device. 

### Device User Control Mode
Used to configure whether the Device User should be allowed to control the Mode of the Firmware Over The Air (FOTA) Client through the in-device FOTA Client UI.

### Mode
Used to configure the mode used to perform Firmware Over The Air (FOTA) operations on a Zebra Android device.

* ***Manual***- some or all of the the following Managed Configurations might need to be specified: 
* **Mode Manual Action**
* **Mode Manual Action Enterprise Reset SUW Bypass**
* **Mode Manual Action OS Upgrade Suppress Reboot**
* **Mode Manual Action OS Update/Upgrade/Downgrade File**
* **Mode Manual Action Verify Manifest File**

* ***Automatic***- no additional Managed Configurations must be specified. 

### Mode Manual Action
Used to perform an Action to perform Firmware Over The Air (FOTA) operations on a Zebra Android device.

The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Enterprise Reset***- the additional Managed Configuration **Firmware Over The Air Configuration - Action File - Enterprise Reset SUW Bypass** MIGHT be specified to control whether the Setup Wizard (SUW) is bypassed on GMS devices following the Enterprise Reset.

* ***Factory Reset***- no additional Managed Configurations should be specified to provide additional information.

* ***Full Device Wipe***- no additional Managed Configurations should be specified to provide additional information.

* ***OS Update***- the additional Managed Configuration **Firmware Over The Air Configuration - Action OS Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation.

Note that the Action value ***OS Update*** can be used to perform either an Upgrade or Downgrade operation on devices with Android versions older than 8.0, but can only be used to perform an Upgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade does NOT occur on devices with Android version 8.0 or later.

* ***Verify Manifest***- the additional Managed Configuration **Firmware Over The Air Configuration - Action Verify Manifest File** MUST be specified to provide the path and file name of the Manifest file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the verification.

* ***OS Upgrade***- the additional Managed Configuration **Firmware Over The Air Configuration - Action Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation. Also, the Managed Configuration **Firmware Over The Air Configuration - Action Upgrade Suppress Reboot** MIGHT be specified to determine whether a reboot should automatically be performed following an A/B upgrade.

Note that the Action value ***OS Upgrade*** can only be used to perform an Upgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade does NOT occur.

* ***OS Downgrade***- the additional Managed Configuration **Firmware Over The Air Configuration - Action Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation.

Note that the Action value ***OS Downgrade*** can only be used to perform a Downgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do an Upgrade, the Upgrade DOES NOT occur.

### Mode Manual Action Enterprise Reset SUW Bypass
Used to specify whether the Setup Wizard (SUW) is bypassed on GMS devices when performing an Enterprise Reset, and should be specified only if the Action value ***Enterprise Reset*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

### Mode Manual Action OS Upgrade Suppress Reboot
Used to specify whether the automatic reboot that would normally be performed following the successful completion of an A/B Upgrade should be suppressed, and should be specified only if the Action value ***OS Upgrade*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. Note that if the automatic reboot is suppressed, reboot might still be required to activate the new OS following the A/B Upgrade. Performance of that reboot at a suitable time becomes the responsibility of the EMM choosing to suppress it. 

### Mode Manual Action OS Update/Upgrade/Downgrade File
Used to specify the path and file name of an OS Update or Patch image file, which must already exist at the specified location in the device file system, to be used to update a Zebra Android device and should be specified only if one of the Action values ***OS Update***, ***OS Upgrade***, or ***OS Downgrade*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

### Mode Manual Action Verify Manifest File
Used to specify the path and file name of a Manifest file, which must already exist at the specified location in the device file system, to be used to verify support on a Zebra Android device and should be specified only if the Action value ***Verify Manifest*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

-----

## GPRS Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the General Packet Radio Service (GPRS) subsystem on a Zebra Android device by controlling GPRS Access Point Name (APN) configurations. 

### Action
Used to perform an action to manage the GPRS APN(s) on a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

* ***AddApn***- adds a new APN or overwrites an existing APN of the same name.<br> 
Related Managed Configuration(s) that might be required for this Action: 
 * **Action Add APN Name** <u>required</u> to specify the name of the new APN to be added or of the existing APN to be replaced. 
 * **Add APN Replace If Existing**
 * **Add APN Make Default**
 * **Add APN Access Point**
 * **Add APN User Name**
 * **Add APN Password**
 * **Add APN Port**
 * **Add APN Proxy**
 * **Add APN MMS Port**
 * **Add APN MMS Proxy**
 * **Add APN Server**
 * **Add APN MMSC**
 * **Add APN Type**
 * **Add APN MCC**
 * **Add APN MNC**

* ***RemoveApn***- removes the APN specified in the Managed Configuration **Action Remove APN Name**. 

* ***RemoveAllApns***- removes all existing APNs on the device. 

### Action Add APN Name
Used to provide the name of an APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

### Action Add APN Replace If Existing
Used to configure what happens when an APN already exists with the APN name being added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

* ***Replace Existing***- if an APN with the name as specified in the Managed Configuration **GPRS Configuration - Action Add APN Name** already exists, it is replaced by the APN definition being added.

* ***Keep Existing***- if an APN with the name as specified in the Managed Configuration **GPRS Configuration - Action Add APN Name** already exists, it IS NOT replaced. The existing APN is preserved and the new APN IS NOT added.

### Action Add APN Make Default
Used to configure whether a new APN being added should become the new default APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

* ***Yes***- the new APN being added becomes the new default APN and is preferred over other APNs when establishing a cellular data connection.

* ***No***- the new APN does NOT become the new default APN and whatever APN was previously the default remains the default. 

### Action Add APN Access Point
Used to specify a value that uniquely identifies an APN on the network when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

APN Identifiers are allocated by cellular carriers to identify the networks that can be reached through various APNs. When acquiring a cellular data plan from a carrier, an APN Identifier is provided, typically along with other information that qualifies or controls access to the network it identifies. 

### Action Add APN User Name
Used to specify a user name that can be used to authenticate to an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

**NOTE**: A network accessed through a given APN Identifier might or might not require authentication. If authentication is required, a user name is generally required and a password MIGHT also be required. 

### Action Add APN Password
Used to specify a password that can be used to authenticate to an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

**NOTE**: A network accessed through a given APN Identifier might or might not require authentication. If authentication is required, a user name is generally required and a password MIGHT also be required. 

### Action Add APN Port
Used to specify the port number of an HTTP proxy to use for all traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If a Proxy is required, a Port is also generally always required.

### Action Add APN Proxy
Used to specify the address or name of an HTTP proxy to use for all traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If a Proxy is required, a Port is also generally always required.

### Action Add APN MMS Port
Used to specify the port number of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If an MMS Proxy is required, an MMS Port is also generally always required. 

### Action Add APN MMS Proxy
Used to specify the address or name of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If an MMS Proxy is required, an MMS Port is also generally always required. 

### Action Add APN Server
Used to specify a WAP Gateway Server address that should be used for an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

WAP Gateways are rarely, if ever, used on or supported by modern cellular carrier networks. 

### Action Add APN MMSC
Used to specify the Multimedia Messaging Service Center (MMSC) address required to route MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

### Action Add APN Type
Used to specify the Type of APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The value to specify for Type should be obtained from the cellular carrier whose network is to be accessed through the APN. 

### Action Add APN MCC
Used to specify the Mobile Country Code (MCC) of the APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The MCC generally matches the SIM card being used or the APN is usable. 

### Action Add APN MNC
Used to specify the Mobile Network Code (MNC) of the APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The MNC generally matches the SIM card being used or the APN is not usable. 

### Action Remove APN Name
Used to provide the name of an APN to remove when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***RemoveApn***. 

-----

## General UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure General User Interface (UI) aspects of a Zebra Android device.

This Managed Configuration group allows an Administrator using an EMM to:

* Configure the *Locale* to be used on the device. 

### Action
Used to perform a miscellaneous UI action on a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

* ***Clear Clipboard***- any data currently in the clipboard of the Zebra Android device is discarded.

* ***Clear Recently Used Apps List***- the list of previously used (launched) applications is cleared. This can be used to prevent the device user from accessing previously used applications or control their behavior or configuration from the list presented when the Recent button is pressed.

* ***Clear Application Cache***- the cache of a specified application is cleared. The most common use of this is to delete cached information, such as login credentials or state, and thereby return the application to its default behavior. The use of this Action value requires that the additional Managed Configuration **General UI Configuration - Action Clear Application Cache Package** be specified 
to identify the application whose cache is to be cleared.

* ***Turn On All GMS Applications***- all GMS applications that are considered "safe" to disable is enabled.

* ***Turn Off All GMS Applications***- all GMS applications that are considered "safe" to disable is disabled.

Note: - Since it is possible to turn GMS Applications on or off individually, using the values ***Turn On All GMS Applications*** and ***Turn Off All GMS Applications*** guarantees only that all GMS Applications are On or Off ***immediately after*** the requested Action is completed. Subsequent Actions could result in any mixture of GMS Applications being turned On or Off. The behavior of the system or any GMS applications under such conditions is not guaranteed.

### Action Clear Application Cache Package
Used to specify a package name for which the cache should be cleared with performing a Clear Application Cache Action.

The value of this Managed Configuration should be specified if an only if the Action value ***Clear Application Cache*** is chosen for the Managed Configuration **General UI Configuration - Action** to specify the package name of the application for which the cache should be cleared.

### Allow Device User Control of Do Not Disturb Mode
Used to configure whether the Device User is presented with the option to control the state of Do Not Disturb Mode from the Menu presented when the power key is held down on a Zebra Android device.

### Auto Correct
Used to configure whether the Device User prompted for corrections to potential mistakes made during entry of data on a Zebra Android device.

* ***Off***- the Device User IS NOT prompted to correct potential mistakes during data entry.

* ***On***- the Device User is prompted to correct potential mistakes during data entry.

### Battery Charging LED
Used to configure whether the charging system be allowed to display the battery charging state using the charging LED when a Zebra Android device is in operating mode.

* ***Disable***- the charging system is prevented from using the charging LED to display the battery charging state, which might reduce distractions in environments where many devices are charging.

* ***Enable***- the charging system is allowed to use the charging LED to display the battery charging state, which might make it easier to distinguish a fully charged device from a partially charged device. 

### Battery Swap UI Popup
Used to configure whether the Device User is automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold.

* ***Disable***- the Device User IS NOT automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold.

* ***Enable***- the Device User is automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold, perhaps helping to avoid emergency shutdown and potential loss of data as a result. 

### Display of Navigation Bar
Used to configure whether the on-screen Navigation Bar is displayed, uses screen real estate and can be used to navigate the device UI.

* ***Disable***- the on-screen Navigation Bar is NOT displayed, does NOT occupy screen real estate, and cannot be used to navigate the device UI.

* ***Enable***- the on-screen Navigation Bar is displayed takes up screen real estate, and can be used to navigate the device UI. 

### Launcher Package Name
Used to configure the package name of the default launcher application. This would typically be used when installing an new launcher (home screen) application as a replacement for the default Android launcher.

### Locale
Used to configure the *Locale* to be used on a Zebra Android device. A *Locale* is typically specified by selecting a *Language* (i.e. English) and optionally a *Region* (i.e. the United States). This Managed Configuration uses values that combine a *Language* and optionally a *Region* into a single identifier.

**Notes**: 
* When only a *Language* is specified, the identifier is the name of the *Language* (i.e. CHINA).

* When a *Language* and a *Region* are both specified, the identifier is the name of the *Region* followed by the name of the *Language*, separated by an underscore (i.e. CANADA_FRENCH).

### Network Notification Pop-up
Used to configure whether the Network Notification Pop-up is presented to inform the Device User that their network might be monitored.

* ***Disable***- the Network Notification pop-up is NOT presented and the Device User is NOT notified that the network might be monitored, even if circumstances warrant such notification.

* ***Enable***- the Network Notification pop-up might be presented and the Device User notified that the network might be monitored if circumstances warrant such notification. 

### Pull Down Notification Bar
Used to configure whether the Device User is allowed to Pull Down the Notification Bar to interact with notifications in the Notifications Panel.

* ***Disable***- the Device User is NOT allowed to Pull Down the Notification Bar and is prevented from interacting with notifications in the Notifications Panel.

* ***Enable***- the Device User is allowed to Pull Down the Notification Bar and interact with notifications in the Notifications Panel. 

### Show Airplane Mode in Power-Off Menu
Used to configure whether the Device User is presented with the option to control the state of Airplane Mode from the Menu presented when the power key is held down on a Zebra Android device.

### Show Pairing Pop-up
Used to configure whether a New Pairing Pop-up is presented when an unpaired peripheral device attempts to establish a new Bluetooth pairing with a Zebra Android device.

* This option has no effect on existing pairings.
* This option does not prevent new pairings that are initiated from the device to the peripheral.
* This option does not prevent new pairings from being established based on configured Silent Pairing rules.

### Show Virtual Keyboard when Physical Keyboard is Active
Used to configure whether the Virtual Keyboard is shown when the Physical Keyboard is Active.

* ***Disable***- the Virtual Keyboard is NOT shown if the device has an active physical keyboard. This avoids the appearance of an on-screen keyboard when the Device User is using a physical keyboard to enter data.

* ***Enable***- the Virtual Keyboard is shown when data entry is in progress regardless of whether the device has an active physical keyboard.

### Touch Mode
Used to configure the operational mode of the Touch Panel in selected Zebra Android devices:

* ***Stylus or Finger***- the Touch Panel is configured to optimize for use with a Stylus or a bare finger.

* ***Glove or Finger***- the Touch Panel is configured to optimize for use with a gloved finger or a bare finger.

* ***Finger Only***- the Touch Panel is configured to optimize for use with a bare finger.

* ***Stylus or Glove or finger***- the Touch Panel is configured to optimize for use with a stylus, gloved finger or bare finger.

Not all Zebra Android devices support the ability to configure the Touch Panel mode and those that do might not support every mode. Attempts to configure a Touch Panel mode on a device that does not support that mode results in an error.

### Use Of Clipboard
Used to configure whether the Device User is allowed to utilize the clipboard on a Zebra Android device to cut, copy, and paste text between applications.

### Use of Home Key
Used to configure whether the Device User is allowed to utilize the Home Key on a Zebra Android device to leave the current context and return to the Home/Launcher screen.

* ***Off***- the Home key is ignored and causes no action if it is pressed.

* ***On***- the Home key is honored and causes the device to go to the Home/Launcher screen when if it is pressed. 

### Use of Magnification Gestures
Used to configure whether the Device User is allowed to Use Magnification Gestures.

* ***Off***- the Magnification Gestures are ignored and no action is taken if they are used by the Device User.

* ***On***- the Magnification Gestures are honored and appropriate action is taken if they are used by the Device User. 

### Use of Recent Apps Key
Used to configure whether the Device User is allowed to Use the Recent Apps Key to access recently launched applications.

* ***Off***- the Recent Apps Key is ignored and the Device User is NOT allowed to access recently launched applications using that method.

* ***On***- the Recent Apps Key is functional, allowing the Device User access recently launched applications. 

### Use of Split Screen Mode
Used to configure whether Split Screen Mode is allowed to be used on the device.

* ***Off***- the use of Split Screen Mode is blocked on the device.

* ***On***- the use of Split Screen Mode is allowed on the device. 

### User Control of Multi User
Used to configure whether Primary Device User is allowed to invoke UI to manage Multi User, including the ability to Create, Delete, and limit the actions of Secondary Users.

* ***Off***- the Primary Device User is NOT allowed to manage Secondary Users, even if the device supports multiple users.

* ***On***- the Primary Device User is allowed to manage Secondary Users on devices that support multiple users. 

-----

## Host Name Configuration

This Managed Configuration group allows an Administrator using an EMM to include configuration information related to the network host names. 

### Device Name
Used to specify the name by which the device is known on the network. 

-----

## Key Mapping Configuration

This Managed Configuration group allows an Administrator using an EMM to configure how the keys on the physical keyboard of the device (if any) are mapped into alternate key functions or other behaviors. 

### Action
Used to perform an action to affect the behaviors mapped to the keys on the physical keyboard (if any) of a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

* ***Add Mapping***- a new mapping for a single physical key is added to the mapping tables for one or more keyboard states. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Key ID** MUST be specified to identify the physical key for which mappings are to be added or replaced. In addition, the Managed Configuration array **Key Mapping Configuration - Action Add Mapping Behaviors** MUST also be specified to define the behavior(s) to be mapped to the identified physical key. If prior mappings are applied to specify the behaviors of the identified physical key, all are replaced by the new specified behaviors.

* ***Reset All Mappings***- the mapping tables are reset to their defaults. This effectively removes all mappings that have previously been added and returns the behaviors of all keys to their default out-of-box state. 

### Action Add Mapping Key ID
Used to provide a value that uniquely identifies a physical key on the physical keyboard of a Zebra Android device for which one or more behaviors are to be specified when the value chosen for the Managed Configuration **Key Mapping Configuration - Action** is ***Add Mapping***. 

### Action Add Mapping Behaviors

This Managed Configuration array allows an Administrator using an EMM to specify a set of behaviors to be performed for one or more keyboard states. for a specified physical key on a Zebra Android device. 

### Action Add Mapping Behavior

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single behavior to be performed for a specified key in pressed in a specified state on the physical keyboard of a Zebra Android device. 

### Action Add Mapping Behavior Table Name
Used to specify the name of the table into which a specific behavior is stored. Mapping tables are associated with keyboard states and are named based on the state key on the physical keyboard of a Zebra Android device that causes that keyboard state to be activated or deactivated.

Note that due to variations in keyboard size and layout, not all keyboard states are supported on all Zebra Android devices or on all keyboards possible on any given Zebra Android device. Some or all of the following values might be supported:

* ***Base***- the Base Mapping table is selected. The Base Mapping table defines the behavior performed for a physical key when it is pressed while no special keyboard state is active.

* ***Blue***- the Blue Mapping table is selected. The Blue Mapping table defines the behavior performed for a physical key when it is pressed in conditions where the Blue key has been used to activate the Blue keyboard state.

* ***Orange***- the Orange Mapping table is selected. The Orange Mapping table defines the behavior performed for a physical key when it is pressed in conditions where the Orange key has been used to activate the Orange keyboard state.

* ***Grey***- the Grey Mapping table is selected. The Grey Mapping table defines the behavior performed for a physical key when it is pressed in conditions where the Grey key has been used to activate the Grey keyboard state.

* ***Shift***- the Shift Mapping table is selected. The Shift Mapping table defines the behavior performed for a physical key when it is pressed in conditions where the Shift key has been used to activate the Shift keyboard state.

* ***Control***- the Control Mapping table is selected. The Control Mapping table defines the behavior performed for a physical key when it is pressed in conditions where the Control key has been used to activate the Control keyboard state.

### Action Add Mapping Behavior Type
Used to specify the type of behavior performed when a specified key is pressed while the keyboard state associated with the specified Mapping table is active. The following values are supported:

* ***Send Key Code***- the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send a specified key code. This allows for "classic keyboard remapping" where the behavior of a key is changed to be the behavior of some other key, which might or might not be present on the physical keyboard. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** MUST also be specified to provide the key code sent.

* ***Send Trigger***- the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send a trigger signal. Trigger signals might be used to initiate various activities, such as barcode scanning, RFID reading, push to talk, etc. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Trigger** MUST also be specified to select which trigger signal is sent.

* ***Launch Application***- the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to launch an application. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Launch Application Name** MUST also be specified to provide the "friendly name" of the application to be launched. Note that this is NOT the Android Package Name. To launch an application by its Android Package Name, the value ***Send Intent*** should be used.

* ***Send Intent***- the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send and Android Intent, which might cause any number of possible results, depending on the nature of the intent configured to be sent. Some of all of the following additional Managed Configurations MUST also be specified to define the Android Intent to be sent: **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Type**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Action**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Category**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Package Name**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Class**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Data URI**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Flags**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent MIME Type**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Name**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Value**.

Sending an Android Intent provides a very flexible way to specify the behavior to be performed for a key by invoking an application or service. As such, there are many options that control the nature of the intent sent. Zebra recommends fully understanding the nature of the Android Intent to be sent before attempting to configure it as a key behavior. In many cases, the application or service to be invoked defines the nature of the intent it wishes to receive, and that definition can be used to drive the configuration.

* ***Suppress***- NO behavior is performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active. This is equivalent to mapping the key in that state to "do nothing".

* ***Reset To Default***- the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active be reset back to its defaults. This effectively removes any prior mapping of that key in that state and return the key to its standard behavior in that state. 

### Action Add Mapping Behavior Type Send Key Code
Used to specify the key code sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**. 

### Action Add Mapping Behavior Type Send Key Code Alt
Used to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

* ***Off***- when the key code is sent, it is sent with the ALT keyboard state inactive. This ensures that the key code is NOT interpreted as an ALT key.

* ***On***- when the key code is sent, it is sent with the ALT keyboard state active, ensuring that the key code is interpreted as an ALT key.

**Note**: If this Managed Configuration is not specified, when the key code is sent, the ALT keyboard state is not changed. This causes the key to be interpreted as an ALT key or not based on the existing state. 

### Action Add Mapping Behavior Type Send Key Code CTRL 
Used to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

* ***Off*** - when the key code is sent, it is sent with the CTRL keyboard state inactive. This ensures that the key code is NOT interpreted as an CTRL key.

* ***On*** - when the key code is sent, it is sent with the CTRL keyboard state active. This ensures that the key code is interpreted as a CTRL key.

**Note**: If this Managed Configuration is not specified, when the key code is sent, the CTRL keyboard state is not changed. This causes the key to be interpreted as a CRTL key or not based on the existing state. 

### Action Add Mapping Behavior Type Send Key Code Fn
Used to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

* ***Off***- when the key code is sent, it is sent with the FN keyboard state inactive. This ensures that the key code is NOT interpreted as an FN key.

* ***On***- when the key code is sent, it is sent with the FN keyboard state active. This ensures that the key code is interpreted as an FN key.

**Note**: If this Managed Configuration is not specified, when the key code is sent, the FN keyboard state is not changed. This causes the key to be interpreted as an FN key or not based on the existing state. 

### Action Add Mapping Behavior Type Send Key Code Shift
Used to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

* ***Off***- when the key code is sent, it is sent with the Shift keyboard state inactive. This ensures that the key code is NOT interpreted as an Shift key.

* ***On***- when the key code is sent, it is sent with the Shift keyboard state active. This ensures that the key code is interpreted as an Shift key.

**Note**: If this Managed Configuration is not specified, when the key code is sent, the Shift keyboard state is not changed. This causes the key to be interpreted as a Shift key or not based on the existing state. 

### Action Add Mapping Behavior Type Send Trigger
Used to specify the trigger signal sent as the behavior for a specified key a specified state when the value ***Send Trigger*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Eight trigger signals are defined, but not all might be supported on all Zebra Android devices. All Zebra Android devices generally support at least ***Trigger 1*** and generally default to using this trigger signal to activate the barcode scanner. Some Zebra Android devices might support additional trigger signals and some Zebra Android devices might be reconfigured to use ***Trigger 1*** for some purpose other than barcode scanning. To determine which trigger signals are supported on a given Zebra Android device, consult the documentation for that specific device. 

### Action Add Mapping Behavior Type Send Intent
Used to specify when an intent should be sent as the behavior for a remapped key.

* ***On Key Down***- the intent is sent immediately when the key is first detected as being pressed.

* ***On Key Up***- the intent is not sent until the key is detected as being released after being being pressed.

* ***,On Both Key Up and Down***- the intent is sent immediately when the key is first detected as being pressed and again when the key is detected as being released.

### Action Add Mapping Behavior Type Send Intent Type
Used to specify the method in which an Android Intent should be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Depending on the application or service to be invoked, there is likely only one method that can be used successfully to invoke a desired behavior in that application or service. Consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value invokes the desired behavior. The possible values are:

* ***StartActivity***- the Android Intent is sent using the startActivity() method. This method is suitable for invoking Activities, which are components that perform user interactions. If the behavior to be invoked involves interacting with the Device User, this method is most likely used.

* ***Broadcast***- the Android Intent is sent using the sendBroadcast() method. This method is suitable for invoking Services, which are components that implement background operations. If the behavior to be invoked does not involves interacting with the Device User, this method is most likely be used. 

### Action Add Mapping Behavior Type Send Intent Action
Used to specify the action value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

An action value is NOT required to specify for an Android Intent. But an action value is commonly used to identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports multiple functions, in which case the action value is commonly used to identify which function to perform when invoking that application or service. Consult the documentation or developer of a given application or service to determine whether an action value is needed and, if so, which value invokes the desired behavior. 

### Action Add Mapping Behavior Type Send Intent Category
Used to specify the category value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

A category value is NOT required to specify for an Android Intent. But a category value is commonly used to help identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports many functions, in which case many action values might be used to identify those functions and it might be useful to categorize those functions. In some cases, the same action value might be supported in more than one category. Consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value invokes the desired behavior. 

### Action Add Mapping Behavior Type Send Intent Package Name
Used to specify the Android Package Name of the application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

It is not required to specify the Android Package Name when sending an Android Intent, but is is often advisable.

**Notes**: 
* When an Android Package Name is specified, the intent becomes an Explicit Intent and the intent can ONLY be sent to an application or service with that Package Name and no other. This can increase security and is often used when the intent being sent requires any sensitive data. It is generally required to specify the additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Class** whenever a Package Name is specified, since an Explicit Intent is always sent to an Android Component, which is identified by a Package Name and a Class within that Package.
* When no Android Package Name is specified, the intent becomes an Implicit Intent and the intent might be sent to any application or service that has registered its ability to handle that intent. This can increase flexibility, and is often used when the intent being sent requires no sensitive data, and when it might be desirable to dynamically control which application or service is ultimately invoked to handle that intent.

### Action Add Mapping Behavior Type Send Intent Class
Used to specify the Class identifying a component within an application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Package Name** is specified. 

### Action Add Mapping Behavior Type Send Intent Data URI
Used to specify a Uniform Resource Identifier (URI) that identifies some data, in the form of a resource on the device (i.e. a file in the device file system) or off the device (i.e. a resource available through a network) that should be utilized by the application or service invoked by the intent.

Whether the intended recipient of the intent expects a URI to be specified as part of the intent or not is up to that recipient and/or the definition of the intent that recipient is designed to consume. 

### Action Add Mapping Behavior Type Send Intent Flags
Used to specify intent flags to be set for the intent to be sent. 

Intent flags control how the intent is handled by Android. Some intent flags are specific to the type of component invoked by the Intent (i.e. activity vs. service).
Whether certain intent flags are needed to produce the desired result when the intended recipient of the intent is invoked is up to that recipient and/or the definition of the intent that recipient is designed to consume.
Intent flags must be specified as a hexadecimal value with the appropriate bits set for any flag or flags desired.
Consult the Android documentation to translate intent flag names, when needed, into their appropriate hexadecimal values.

### Action Add Mapping Behavior Type Send Intent MIME Type
Used to specify a Multipurpose Internet Mail Extensions (MIME) type to use when processing the intent data and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Data URI** is specified.

Normally the type is inferred from the data itself. Setting a MIME type explicitly, by using this Managed Configuration disables automatic type detection and and forces handling according to the specified type. 

### Action Add Mapping Behavior Type Send Intent Extra Name
Used to specify the name of a single extra named string value to be attached to the intent to be sent.

Android allows a collection of extra named values, of various types, to be attached to an intent. This Managed Configuration enables exactly one value whose data type must be string to be specified. When a name is specified, the additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Value** MUST also be specified to provide the corresponding value to be attached for the string extra identified by the specified name. 

### Action Add Mapping Behavior Type Send Intent Extra Value
Used to specify the value of a single extra named string value to be attached to the intent to be sent and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Name** is specified. 

### Action Add Mapping Behavior Type Launch Application Name
Used to specify the "friendly name" of an application to be launched when the value ***Launch Application*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Note that the application "friendly name" is NOT the same as Android Package Name. The application "friendly name" is generally the name by which the application is identified in in-device UI, such as the application Title Bar and the list of application names display in the Recent Application list and the AppInfo section of the Settings Menu. To launch an application based on its Android Package Name, choose the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** instead.

-----

## Power Configuration

This Managed Configuration group allows an Administrator using an EMM to perform power-related actions and configure power-related settings on a Zebra Android device. 

### Power Action
Used to perform an Action to control the Power to the device.

The value of this Managed Configuration specifies one of the following Action values

* ***Sleep*** causes the device to enter go to Sleep (i.e. enter Suspend Mode).

* ***Reboot*** causes the device to perform an OS Reboot (i.e. simple Reset).

### Battery Percentage Decommission Threshold
Used to configure the percentage of remaining battery capacity below which the battery is deemed ready for decommissioning. 

### Battery Usage Decommission Threshold
Used to configure the amount of battery usage (i.e. charge/discharge cycles, coulombs in/out, etc.) that can occur before the battery is deemed ready for decommissioning. 

### Battery Optimization Action
Used to perform an Action to control which applications are subject to battery optimization and which are exempt.

* ***Add*** is chose, one or more applications is made subject to battery optimizations and the additional Managed Configuration **Power Configuration - Battery Optimization Action Add Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be made subject to battery optimizations.

* ***Remove*** is chose, one or more applications is made subject to battery optimizations and the additional Managed Configuration **Power Configuration - Battery Optimization Action Remove Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be exempted from battery optimizations.

### Battery Optimization Action Add Package Names
Used to specify one or more Android Package Name(s) that identify application(s) that should be made subject to battery optimizations.

If specified, multiple package names should be separated using commas. 

### Battery Optimization Action Remove Package Names
Used to specify one or more Android Package Name(s) that identify application(s) that should be exempted from battery optimizations.

If specified, multiple package names should be separated using commas. 

### Port Action
Used to perform an Action to control the Output Power various Ports on the device.

The value of this Managed Configuration specifies one of the following Action values

* ***Turn Output Power OFF*** causes the Output Power for a specified Port to be turned off.

* ***Turn Output Power ON*** causes the Output Power for a specified Port to be turned on.

When this Managed Configuration is specified, the additional Managed Configuration **Power Configuration - Port Select** must also be specified to identify the Port for which Output Power is controlled.

### Port Select
Used to specify the Port for which an Action to control the Output Power on the device is applied, and should be specified only if the Managed Configuration **Power Configuration - Port Action** is specified.

The value of this Managed Configuration specifies one of the following Action values

* ***Serial Port 1*** selects the First device Serial Port as the Port for which the Output Power is turned on or off.

* ***Serial Port 2*** selects the Second device Serial Port as the Port for which the Output Power is turned on or off.

* ***USB Port 2*** selects the Second device USB Port as the Port for which the Output Power is turned on or off.

### Auto Power Control
Used to control whether device power is automatically controlled.

The value of this Managed Configuration specifies one of the following values

* ***Off*** causes the device power to NOT be automatically controlled.

* ***On*** causes device power to be automatically controlled and one or more of the following Managed Configurations also should be specified:

    - **Power Configuration - Auto Power Off** to specify whether/how device power is automatically turned off.

    - **Power Configuration - Auto Power On** to specify whether/how device power is automatically turned on.

### Auto Power Off
Used to configure whether/how device power is automatically turned off as part of automatic power control, and should be specified only if the Managed Configuration **Power Configuration - Auto Power Control** is specified.

The value of this Managed Configuration specifies one of the following values

* ***Never*** causes the device power to never automatically turn off when the ignition turns off.

* ***When Ignition is Turned Off*** causes the device power to automatically turn off whenever the ignition turns off.

### Auto Power Off Timeout
Used to configure the timeout in effect before device power is automatically turned off as part of automatic power control, and should be specified only if the value ***On*** is specified for the Managed Configuration **Power Configuration - Auto Power Control** is specified and the value ***When Ignition is Turned Off*** is specified for the Managed Configuration **Power Configuration - Auto Power Off**.

### Auto Power On
Used to configure whether/how device power is automatically turned on as part of automatic power control, and should be specified only if the Managed Configuration **Power Configuration - Auto Power Control** is specified.

The value of this Managed Configuration specifies one of the following values

* ***Never*** causes the device power to never automatically turn on when the ignition turns on.

* ***When Ignition is Turned On*** causes the device power to automatically turn on whenever the ignition turns on.

### Heater Action
Used to perform an Action to control device heaters.

When this Managed Configuration is specified, the Managed Configuration **Power Configuration - Heater Select** must be specified to identify the Heater to be affected.

The value of this Managed Configuration specifies one of the following Action values:

* ***Enable Heater*** causes the Heater to be turned on and off as needed based on the configured ON/OFF thresholds.

* ***Disable Heater*** causes the Heater to be turned off and stay off, regardless of the configured ON/OFF thresholds.

* ***Set ON/OFF Thresholds*** configures the ON/OFF thresholds used when the Heater is Enabled. When this value is specified, the following Managed Configurations must also be specified:

    - **Power Configuration - Heater On Threshold** must be specified to set the threshold temperature below which the Heater is automatically turned on.

    - **Power Configuration - Heater Off Threshold** must be specified to set the threshold temperature above which the Heater is automatically turned off.

### Heater Select
Used to specify the Heater to be affected by a specified Heater Action and should be specified only if the Managed Configuration **Power Configuration - Heater Action** is specified.

The value of this Managed Configuration specifies one of the following Heater values:

* ***Serial I/O*** selects the Heater that warms the Serial I/O Port of the device.

* ***USB I/O*** selects the Heater that warms the USB I/O Port of the device.

* ***Battery*** selects the Heater that warms the Battery of the device.

* ***Touch Panel*** selects the Heater that warms the Touch of the device.

### Heater Action Off Threshold
Used to perform configure the temperature above which a specified Heater should automatically turn OFF, and should be specified only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Power Configuration - Heater Action**.

### Heater Action On Threshold
Used to perform configure the temperature below which a specified Heater should automatically turn ON, and should be specified only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Power Configuration - Heater Action**.

### Doze Mode State
Used to perform control whether Doze Mode is globally used on the device.

* ***Off***- the device never enters Doze Mode for any application.

* ***On***- the device enters Doze Mode for various applications based on the normal Android rules for Doze Mode.

-----

## RFID Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the RFID module in a Zebra Android device. 

### Country of Operation
Used to specify the *Country of Operation* in which the RFID module is used.

It is critical that the *Country of Operation* be set at least once, since the RFID module has no default *Country of Operation* and does NOT operate unless/until the *Country of Operation* is explicitly set, to ensure that country-specific regulator requirements are met.
In most cases, the *Country of Operation* is set once and never changed, unless the device is physically relocated to a different country. 

### Country of Operation Channel Mask
Used to specify the *Channel Mask* that determines which of the *Channels* that are allowed, based on the currently selected *Country of Operation* is used by the RFID module.

**Notes**: 
* If no *Channel Mask* is specified, the RFID module is free to use any or all *Channels* that are available based on the currently selected *Country of Operation*.

* If a *Channel Mask* is specified, the specified value must consist of one or more *Channel Numbers*, separated by commas if more than one is specified, which identify the *Channels* that can be used. The RFID module limits itself to just the *Channels* that are allowed for the currently selected *Country of Operation* AND that are in the set of *Channels* specified through this Managed Configuration.

To obtain the set of allowable *Channel Numbers*, please refer to the product documentation that accompanied the Zebra Android device(s) being configured

### Country of Operation Channel Hopping
Used to configure whether *Channel Hopping* is performed among the *Channels* that are used by the RFID module. 

### Action
Used to perform an Action to alter the behavior or configuration of the RFID module.

* ***Update Firmware***- the firmware of the RFID module is updated and the additional Managed Configuration **RFID Configuration - Action Update Firmware File** MUST be specified to supply the path and file name of the file, which must exist in the device file system, containing the firmware update to be applied to the RFID module.

* ***Export Settings***- the current configuration of the RFID module is exported and stored in a file in the device file system. This file could then be extracted from the device and used for troubleshooting potential configuration issues related to the RFID module.

* ***Reset Radio***- the radio of the RFID module is reset, without changing its settings. This could be used to recover from an error or other failure of the RFID module.

* ***Reset Radio to Factory Defaults***- the configuration of the RFID module is returned to its default out-of-box state and the radio is reset. This could be used to recover from a serious configuration error that prevents the RFID module from functioning appropriately.

* ***Update Firmware and Reset Radio to Factory Defaults***- the firmware of the RFID is updated,l the configuration of the RFID module is returned to its default out-of-box state, and the radio is reset. This could necessary when applying a major new firmware update, that add lots of new configuration settings, to ensure that the RFID module is configured in a known and compatible state. 

### Action Update Firmware File
Used to provide the path and file name of the file containing the firmware update to be applied and should be specified only if the value ***Update Firmware*** or the value ***Update Firmware and Reset Radio to Factory Defaults*** is chosen for the Managed Configuration **RFID Configuration - Action**. 

### Transmit Power Level
Used to configure the *RFID Power Level* that should be used by the RFID module.

The *RFID Power Level* should be specified in tenths of dBm in the range of ***0*** to ***300***, inclusive.
For example, to specify an *RFID Power Level* of ***29.5 dBm***, specify a value of ***295***. 

### Query Select
Used to configure which RFID tags should be operated upon by the RFID module during a *Query Operation*, based on the state of the SL flag.

* ***Query applies to all tags***- when the RFID module performs a *Query Operation*, it considers all RFID tags that are currently visible to the RFID module.

* ***Query applies to tags with SL de-asserted***- when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that have SL flag de-asserted (i.e. tags for which the SL flag has NOT been set using the Select command).

* ***Query applies to tags with SL asserted***- when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that have SL flag asserted (i.e. tags for which the SL flag HAS been set using the Select command).

### Query Session
Used to configure which *Session* should be used by the RFID module to access RFID tags during a *Query Operation*.

Allowable values are ***SessionS0***, ***SessionS1***, ***SessionS2***, and ***SessionS3***.

*Sessions* provide options for how to count tags. For more information on the use of *Sessions*, consult the Zebra Android device product documentation. 

### Query Target
Used to configure how the A and B flags of RFID tags should be handled by the RFID module during a *Query Operation*.

* ***Inventory Target Flag A***- when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that are in State A.

* ***Inventory Target Flag B***- when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that are in State B.

* ***AB Flip***- when the RFID module performs a *Query Operation*, it considers only those RFID tags currently visible to the RFID module AND that are in either State A or State B and Flips the State from A to B or B to A for the session. 

-----

## Remote Scanner Management

This Managed Configuration group allows an Administrator using an EMM to manage a *Remote Scanner* connected to a Zebra Android device. 

### Action
Used to perform an Action to control a *Remote Scanner* connected to a Zebra Android device.

* ***Apply Configuration Package(RS6000 only)***- a configuration file is used to apply new configuration to a *Remote Scanner*. The additional Managed Configuration **Remote Scanner Management - Action Config Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be configured. The additional Managed Configuration **Remote Scanner Management - Action Config File** MUST also be specified to provide the path and file name of the configuration file to be applied.

* ***Update Scanner Firmware***- a firmware file is used to update the firmware of a *Remote Scanner*. The additional Managed Configuration **Remote Scanner Management - Action Update Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be updated. The additional Managed Configuration **Remote Scanner Management - Action Update File** MUST also be specified to provide the path and file name of the firmware file to be applied.

* ***Reset Scanner(RS6000 only)***- a *Remote Scanner* is reset, allowing errors to be cleared and proper operation of a*Remote Scanner* to be restored. The additional Managed Configuration **Remote Scanner Management - Action Reset Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be reset. 

* ***Page Scanner(RS6000 only)***- a *Remote Scanner* is paged, allowing a misplaced *Remote Scanner* to be more easily located. The additional Managed Configuration **Remote Scanner Management - Action Page Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be paged. 

* ***Disconnect Scanner(RS6000 only)***- a *Remote Scanner* is disconnected, terminating the connection between the Zebra Android device and the *Remote Scanner* and preventing its subsequent use. The additional Managed Configuration **Remote Scanner Management - Action Disconnect Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be disconnected.

* ***Unpair Scanner(RS6000 only)***- a *Remote Scanner* is unpaired, terminating the pairing between the Zebra Android device and the *Remote Scanner* and preventing its reconnection without first repairing. The additional Managed Configuration **Remote Scanner Management - Action Unpair Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be unpaired. 

### Action Config Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* to which configuration should be applied and should be specified only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. The additional Managed Configuration **Remote Scanner Management - Action Config File** MUST also be specified to provide the path and file name of the configuration file to be used. 

### Action Config File
Used to provide the path and file name of a configuration file, which must exist at the specified location in the device file system, from which configuration should be applied to the specified *Remote Scanner* and should be specified only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Action Update Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* for which a firmware update should be performed and should be specified only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Remote Scanner Management - Action**. The additional Managed Configuration **Remote Scanner Management - Action Update File** MUST also be specified to provide the path and file name of the firmware file to be used. 

### Action Update File
Used to provide the path and file name of a firmware file, which must exist at the specified location in the device file system, from which firmware update should be performed to the specified *Remote Scanner* and should be specified only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Action Reset Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* to be reset and should be specified only if the value ***Reset Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Action Page Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* to be paged and should be specified only if the value ***Page Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Action Disconnect Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* to be disconnected and should be specified only if the value ***Disconnect Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Action Unpair Serial Number
Used to specify the *Serial Number* that identifies a *Remote Scanner* to be unpaired and should be specified only if the value ***Unpair Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

-----

## Security Configuration

This Managed Configuration group allows an Administrator using an EMM to configure security-related settings on a Zebra Android device. 

### Action
Used to perform an Action to perform adjust various security features on a Zebra Android device.

The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

* ***Add Key***- the additional Managed Configuration **Security Configuration - Action Add Key Name** MUST be specified to provide the name of the key to be added and the additional Managed Configuration **Security Configuration - Action Add Key Value** MUST be specified to provide the value of the key to be added.

* ***Remove Key***- the additional Managed Configuration **Security Configuration - Action Remove Key Name** MUST be specified to provide the name of the key to be removed.

* ***Remove All Keys***- no additional Managed Configurations should be specified to provide additional information.

* ***Encrypt SD Card***- the additional Managed Configuration **Security Configuration - Encrypt SD Card Key Name** MUST be specified to provide the name of the key to be used to encrypt the SD card.

* ***Wipe SD Card***- no additional Managed Configurations should be specified to provide additional information.

### Action Add Key Name
Used to specify the name of a key to be added and should be specified only if the Action value ***Add Key*** is chosen for the Managed Configuration **Security Configuration - Action**.

When this Managed Configuration is specified, the additional Managed Configuration **Security Configuration - Action Add Key Value** must also be specified to provide the value to be added for the specified key name.

### Action Add Key Value
Used to specify the value of a key to be added and should be specified only if the Action value ***Add Key*** is chosen for the Managed Configuration **Security Configuration - Action**.

When this Managed Configuration is specified, the additional Managed Configuration **Security Configuration - Action Add Key Name** must also be specified to provide the key name for which this value should be added.

A key value must be a string value containing exactly 64 hexadecimal characters ("0-9" and/or "A-F" characters) that encode a 256 bit binary value for an AES encryption key.

The key value can be generated in any manner desired as long as it is a 256-bit binary value and is represented as 64 hexadecimal characters, although in most cases, **best practice** is to randomly generate keys to maximize their effectiveness in protecting data.

### Action Remove Key Name
Used to specify the name of a key to be removed and should be specified only if the Action value ***Remove Key*** is chosen for the Managed Configuration **Security Configuration - Action**.

### Encrypt SD Card Key Name
Used to specify the name of a key to be used to encrypt the SD card and should be specified only if the Action value ***Encrypt SD Card*** is chosen for the Managed Configuration **Security Configuration - Action**.

### Instant Screen Lock on Power Key
Used to specify what happens when the Power Key on the device is used to turn the device off, especially whether the device is locked, requiring it to be unlocked by entering a PIN or password, if one is specified.

* ***Off***- turning the device off using the Power Key is handled the same as when the device times out and turns itself off automatically. In such a case, if device remains off for longer than value set using the Managed Configuration **Security Configuration - Screen Lock Timeout**, when it is turned back on, the device is locked, requiring whatever unlock action is set using the Managed Configuration **Security Configuration - Screen Lock Type**.

* ***On***- turning the device off using the Power Key is handled differently than when the device times out and turns itself off automatically, specifically the device becomes locked "instantly" when turned off using the Power Key. In such a case, no matter how long the device remains off, when it is turned back on, the device is locked, requiring whatever unlock action is set using the Managed Configuration **Security Configuration - Screen Lock Type**.

### Screen Lock Type
Used to specify the type of lock used to protect the device from use by unauthorized persons.

* ***None***- no lock is applied and the device can be used by anyone.

* ***Swipe***- unlocking requires only a simple swipe and the device can be used by anyone.

* ***PIN***- unlocking requires entry of a PIN (personal identification number) and the device can only be unlocked by someone knowing the correct PIN value.

* ***Password***- unlocking requires entry of a password and the device can only be unlocked by someone knowing the correct password value.

* ***Pattern***- unlocking requires drawing a pattern on the screen using the touch panel and the device can only be unlocked by someone knowing the correct pattern.

### Screen Lock Timeout
Used to specify what happens when a device turns off as a result of a timeout.

**Notes**:
* If the device stays off for at least the time specified in this Managed Configuration, an unlock is required when the device is turned back on if specified using the Managed Configuration **Security Configuration - Screen Lock Type**.
* If the device stays off for less time than specified in this Managed Configuration, no unlock is required when the device is turned back on, even if one was specified using the Managed Configuration **Security Configuration - Screen Lock Type**.

-----

## Settings UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the behavior of the Settings Menu on a Zebra Android device, especially which features of the Settings Menu the Device User is allowed to access. 

### Allow Device User Access Quick Settings
Used to configure whether the Device User is allowed to access the Android Quick Settings Panel UI.

* ***Off***- any attempt by the Device User to enter the Quick Settings Panel is ignored.

* ***On***- attempts by the Device User to enter the Quick Settings Panel is honored and the Quick Settings Panel UI is presented on request.

### Allow Device User Control Airplane Mode
Used to configure whether the Device User is allowed to change the state of Airplane Mode.

* ***Off***- any attempt by the Device User to change the state of Airplane Mode is blocked.

* ***On***- attempts by the Device User to change the state of Airplane Mode is honored. 

### Allow Device User Control App Notifications
Used to configure whether the Device User is allowed to configure which application notifications is generated.

* ***Off***- any attempt by the Device User to change the configuration of application notifications is blocked.

* ***On***- attempts by the Device User to change the configuration of application notifications is honored. 

### Allow Device User Control Apps
Used to configure whether the Device User is allowed to enter the AppInfo section of the Settings Menu where applications can be controlled.
 
* ***Off***- any attempt by the Device User to enter the AppInfo section of the Settings Menu is ignored.

* ***On***- attempts by the Device User to enter the AppInfo section of the Settings is honored. 

### Allow Device User Control Background Data
Used to configure whether the Device User is allowed to change the usage of Background WWAN data.

* ***Off***- any attempt by the Device User to change the usage of Background WWAN data is blocked.

* ***On***- attempts by the Device User to change the usage of Background WWAN data is honored. 

### Allow Device User Control Ethernet
Used to configure whether the Device User is allowed to change the state of the Ethernet adapter.

* ***Off***- any attempt by the Device User to change the state of Ethernet adapter is blocked.

* ***On***- attempts by the Device User to change the state of Ethernet adapter is honored. 

### Allow Device User Control Instant Lock
Used to configure whether the Device User is allowed to change whether or not pressing the Power key causes the device to lock instantly.

* ***Off***- any attempt by the Device User to change whether or not pressing the Power key causes the device to lock instantly is blocked.

* ***On***- attempts by the Device User to change whether or not pressing the Power key causes the device to lock instantly is honored. 

### Allow Device User Control USB
Used to configure whether the Device User is allowed to change the state of USB.

* ***Off***- any attempt by the Device User to change the state of USB is blocked.

* ***On***- attempts by the Device User to change the state of USB is honored. 

### Allow Device User Control Unknown Sources
Used to configure whether the Device User is allowed to change whether applications can be installed from Unknown Sources.

* ***Off***- any attempt by the Device User to change whether applications can be installed from Unknown Sources.

* ***On***- attempts by the Device User to change whether applications can be installed from Unknown Sources. 

### Allow Device User Control WLAN
Used to configure whether the Device User is allowed to change the configuration of the WLAN adapter.

* ***Off***- any attempt by the Device User to change the configuration of the WLAN adapter is blocked.

* ***On***- attempts by the Device User to change the configuration of the WLAN adapter is honored. 

### Allow Device User to Initiate an Enterprise Reset
Used to configure whether the Device User is allowed to perform an Enterprise Reset from the Settings Menu.

* ***Off***- any attempt by the Device User to perform an Enterprise Reset from the Settings Menu is blocked.

* ***On***- attempts by the Device User to perform an Enterprise Reset from the Settings Menu is honored. 

### Use Reduced Version
Used to configure whether the Full or Reduced version of the Settings Menu is used.

* ***Off***- when the Device User launches the Settings Menu, the Full version,with support for all settings, is used.

* ***On***- when the Device User launches the Settings Menu, the Reduced version, with support for only a few settings, is used. 

### Use of Notification Settings Icon
Used to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.

* ***Off***- the Device User is blocked from using the Settings Icon on the Notification Panel to launch the Settings UI.

* ***On***- the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI. 

### Use of Settings Slide Out Drawer
Used to configure whether the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.

* ***Off***- the Device User is blocked from using the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.

* ***On***- the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI 

### Use of Tethering and Portable Hotspot
Used to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.

* ***Off***- the Device User is blocked from using the Settings UI to configure and utilize Tethering and Portable Hotspot mode.

* ***On***- the Device User is allowed to use the Settings UI to configure and utilize Tethering and Portable Hotspot mode. 

-----

## Threat Management Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which threats to a Zebra Android device is monitored and which countermeasures is taken when threats are detected. 

### Action
Used to perform an Action to configure whether a given threat is monitored.

* ***Detect***- a specific threat is configured to be monitored and, if that threat is detected, a countermeasure is taken to mitigate that threat. The additional Managed Configuration **Threat Management - Action Detect Threat Type** MUST be specified to identify the monitored threat. In addition, the Managed Configuration array **Threat Management - Action Detect Countermeasures** MUST be specified to select the set of countermeasures performed if the specified threat is detected.

* ***Ignore***- a specific threat is configured not to be monitored and is never detected. The additional Managed Configuration **Threat Management - Action Ignore Threat Type** MUST be specified to identify the ignored threat. 

### Action Detect Threat Type
Used to specify the type of monitored threat when the value ***Detect*** is chosen for the Managed Configuration**Threat Management - Action**.

* ***Max Password Attempts***- the Threat Management System is configured to monitor password entry attempts and the threat is considered to be detected if the maximum number of unsuccessful password entry attempts are made without an intervening successful password entry.

* ***MDM Client Removal***- the Threat Management System is configured to monitor the device and detect if a specific Android Package Name is ever uninstalled from the device. The additional Managed Configuration **Threat Management - Action Detect Threat Type MDM Client Removal Package Name** MUST be specified to identify the monitored Package Name. While this is typically used to detect the removal of the MDM Client, which would render a managed device unmanaged, it could be used to detect the removal of any one Android Package if detection of the removal of an MDM Agent is not required.

* ***Externally Detected***- the Threat Management System is configured to listen for indication from an application on the device that can itself provide a way of detecting an signaling any threat not otherwise known to the Threat Management System. The Threat Management System considers the threat to have been detected whenever it is signaled by the external application.

* ***Exchange Active Sync Command***- the Threat Management System is configured to handle a threat detected and signaled by a connection to an Exchange Active Sync Server through an Exchange Active Sync Client on the device.

* ***Device is Rooted***- the Threat Management System is configured to monitor the device to see if it has been rooted. Root detection mechanism seek to identify common exploits that could grant an escalated privileges to an untrusted application that might use them to compromise the security or privacy of the device. 

### Action Detect Countermeasures

This Managed Configuration array allows an Administrator using an EMM to defined the set of countermeasures that should be applied to mitigate a detected threat. 

### Action Detect Countermeasure

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single countermeasure to be performed to mitigate a detected threat. 

### Action Detect Countermeasure Type
Used to specify the type of a single countermeasure performed to mitigate a detected threat.

* ***FormatSdcard***- the countermeasure to format the removable SD card is performed when the associated threat is detected.

* ***FactoryReset***- the countermeasure to Factory Reset the device is performed when the associated threat is detected.

* ***WipeSecureStorageKeys***- the countermeasure to Wipe all encryption keys, deployed using that Managed Configuration group **Security Configuration** is performed when the associated threat is detected.

* ***LockDevice***- the countermeasure to lock the device, requiring it to be unlocked by the Device User, is performed when the associated threat is detected.

* ***UninstallApplication***- the countermeasure to Uninstall an application is performed when the associated threat is detected. The additional Managed Configuration **Threat Management - Action Detect Countermeasure Uninstall Package Name** MUST be specified to provide the Android Package Name of the application uninstalled.

* ***UnsolicitedAlert***- the countermeasure to send an unsolicited alert through an Android Intent is performed when the associated threat is detected. The additional Managed Configurations **Threat Management - Action Detect Countermeasure Unsolicited Alert Package Name**, **Threat Management - Action Detect Countermeasure Unsolicited Alert Class**, and **Threat Management - Action Detect Countermeasure Unsolicited Alert Message** MUST be specified to provide the information needed to deliver the alert.

### Action Detect Countermeasure Uninstall Package Name
Used to specify the Android Package Name of an application uninstalled as a countermeasure to mitigate a threat when the value ***UninstallApplication*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

### Action Detect Countermeasure Unsolicited Alert Package Name
Used to specify the Android Package Name of an application sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

### Action Detect Countermeasure Unsolicited Alert Class
Used to specify the Class Name of component within an application sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

### Action Detect Countermeasure Unsolicited Alert Message
Used to specify the string text message sent to a component of an application through an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

### Action Detect Threat Type MDM Client Removal Package Name
Used to specify the Android Package Name of the MDM Agent monitored to detect a threat when the value ***MDM Client Removal*** is chosen for the Managed Configuration **Threat Management - Action**. 

### Action Ignore Threat Type
Used to specify the type of threat NOT monitored and that cannot be detected when the value ***Ignore*** is chosen for the Managed Configuration **Threat Management - Action**.

* ***Max Password Attempts***- the Threat Management System is configured NOT to monitor password entry attempts and never detects the threat of exceeding the maximum number of unsuccessful password entry attempts.

* ***MDM Client Removal***- the Threat Management System is configured NOT to monitor the device or detect whether a specific Android Package Name is ever uninstalled from the device, and never detects the threat of removal of the MDM Client.

* ***Externally Detected***- the Threat Management System is configured NOT to listen for indication from an application on the device that can signal a threat and **external threats are NEVER detected**.

* ***Exchange Active Sync Command***- the Threat Management System is configured NOT to handle a threat detected and signaled by a connection to an Exchange Active Sync Server through an Exchange Active Sync Client on the device and **such threats are NOT detected**.

* ***Device is Rooted***- the Threat Management System is configured NOT to monitor the device to see if it has been rooted and **the threat of the device being rooted are NEVER detected**. 

### Periodic Scan
Used to configure whether the Threat Management System should perform background polling to increase the accuracy and timeliness of detection of Rooted Device threat.

* ***Off***- the Threat Management System does NOT perform background polling. This might increase performance and improve battery life somewhat, but also reduces the ability to detect the Rooted Device threat and/or result in a delay in detection of that threat.

* ***On***- the Threat Management System performs background polling. This might reduce performance and degrade battery life somewhat, but also increases the ability to detect the Rooted Device threat and accelerate detection of that threat. The additional Managed Configurations **Threat Management - Periodic Scan Interval**, **Threat Management - Periodic Scan Additional Folders**, and **Threat Management - Periodic Scan Additional Folders List** can be used to adjust the nature of the background polling, allowing trade-offs to be made in the balance of thoroughness vs. the impact to performance and battery life. This value should generally be chosen only if detection of the ***Device is Rooted*** threat has been enabled, since it would have little value otherwise. 

### Periodic Scan Interval
Used to configure the interval between polls when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan**. The interval is specified in seconds between polls.

**Notes**:
* Choosing a lower value can increase the aggressiveness of detection of rooted devices, which can reduce the time required to successfully detect that a device has been rooted, but also can reduce the impact of polling on application performance and battery life. 
* Choosing a higher value can reduce the aggressiveness of detection of rooted devices, which can increase the time required to successfully detect that a device has been rooted, but also can decrease the impact of polling on application performance and battery life. 

### Periodic Scan Additional Folders
Used to configure whether additional folders is polled when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan**.

When background polling to detect device rooting is performed, the Threat Management System always scans certain key folders considered common or likely locations where changes might occur that could signal that the device has been rooted. In some cases, rooting might occur through changes made to other folders.

* ***Off***- the Threat Management System scans only the default folders.

* ***On***- the Threat Management System scans the default folders plus additional folders. The additional Managed Configuration **Threat Management - Periodic Scan Additional Folders List** also MUST be specified to identify the list of additional folders to be scanned.

### Periodic Scan Additional Folders List
Used to configure a list of additional folders polled when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan** and the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan Additional Folders**.

### Send Externally Detected Threat Message

Allows an application to signal the fact that it has detected the occurrence of an externally detected threat. This is generally relevant only if the ***Externally Detected*** threat is configured to be detected, since any signaling of an externally detected threat is otherwise ignored.

Managed Configurations can be applied only by a Device-Owner application or by an application to which the Device Owner has explicitly delegated the ability to apply Managed Configurations. If the ***Externally Detected*** threat has been configured to be detected, any application allowed to apply Managed Configurations could watch for anything it considered a threat and use this Managed Configuration to signal the occurrence of that threat. On receiving the signal, Threat Management performs whatever countermeasures were configured to mitigate that threat. 

-----

## Volume UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the UI behavior of the Zebra Volume Control on a Zebra Android device. 

### Action
Used to perform an Action to alter the UI behavior of the *Zebra Volume Control* on a Zebra Android device.

The *Zebra Volume Control* provides a configurable UI that allows Device Users to adjust the volume of one or more *Audio Streams* on a Zebra Android device. The UI behavior of the *Zebra Volume Control* is configured by defining one or more *Audio UI Profiles* and controlling which is active. Each *Audio UI Profile* defines which *Audio Streams* can be configured, and adjusts the experience of the Device User when adjusting the volumes of those *Audio Streams*. The *Zebra Volume Control* also has a *Factory Preset Audio UI Profile* that can be used to return the behavior of the *Zebra Volume Control* to its out-of-box state.

* ***Add Profile***- a new *Audio UI Profile* is added to the list of *Audio UI Profiles*. The additional Managed Configurations **Volume UI Configuration - Action Add Profile Name** and **Volume UI Configuration - Action Add Profile Streams** MUST also be specified to define the *Audio UI Profile* being added.

* ***Remove Profile***- an existing *Audio UI Profile* is removed from the list of *Audio UI Profiles*. The additional Managed Configuration **Volume UI Configuration - Action Remove Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be removed.

* ***Set Current Profile***- an existing *Audio UI Profile* is set to be the active *Audio UI Profile*. The additional Managed Configuration **Volume UI Configuration - Action Set Current Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be made the new active *Audio UI Profile*.

* ***Apply Current Profile***- the currently active *Audio UI Profile* is applied to the current device *Volume Settings*. If the current device *Volume Settings* are outside the range of *Volume Settings* defined for the currently active *Audio UI Profile*, the current device *Volume Settings* is adjusted as needed to bring them within the range of *Volume Settings* defined for the currently active *Audio UI Profile*.

* ***Set Factory Preset***- the *Factory Preset Audio UI Profile* is made the active *Audio UI Profile*, causing the behavior of the *Zebra Volume Control* to return to its default out-of-box state. 

### Action Add Profile Name
Used to provide the name of a new *Audio UI Profile* to be added and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 

**Notes**:
* If an *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* replaces the existing *Audio UI Profile* with that name.
* If no *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* is added with that name. 

### Action Add Profile Streams

This Managed Configuration array allows an Administrator using an EMM to define a set of *Audio Streams* included as part of a new *Audio UI Profile* being added, and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 

## Action Add Profile Stream

This Managed Configuration group allows an Administrator using an EMM to define a single *Audio Stream* included as part of a new *Audio UI Profile* being added, and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**, as part of the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream**. 

### Action Add Profile Stream Type
Used to specify the type of a single *Audio Stream* included as part of a new *Audio UI Profile* being added, and MUST be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**. Some or all of the additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Label**, **Volume UI Configuration - Action Add Profile Stream Icon**, **Volume UI Configuration - Action Add Profile Stream Visible**, and **Volume UI Configuration - Action Add Profile Stream Modes** should also be specified to define the characteristics of the new *Audio Stream* of the specified type added.

* ***Music***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for playback of music and other media.

* ***Ring***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for ringtones.

* ***Notification***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for notifications.

* ***System***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for system sounds.

* ***Alarm***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for alarms.

* ***VoiceCall***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for voice calls.

* ***VVS***- the *Audio Stream* to add to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for Decode Beep Vertical Volume Scale (VVS). 

### Action Add Profile Stream Label
Used to specify the text label displayed for a single *Audio Stream* included as part of a new *Audio UI Profile*, and might be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The text label might be changed for an *Audio Stream* because it is used for some purpose(s) other than those identified by the default text label. Changing the text label to something more description of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.

If no text label is specified for an *Audio Stream*, the *Factory Preset* default text label is used.

### Action Add Profile Stream Icon
Used to specify the icon for display on a single *Audio Stream* included as part of a new *Audio UI Profile* and is specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The icon might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the icon to something more representative of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.

If an icon is specified, the value specified must be the full path and file name of a PNG format icon file that must already be present in the device file system. Zebra recommends an icon size of 48x48 pixels.

If no icon is specified for an *Audio Stream*, the *Factory Preset* default icon is used.

### Action Add Profile Stream Visible
Used to specify whether a single *Audio Stream* is visible to the Device User within the *Zebra Volume Control* when it is included as part of a new *Audio UI Profile* and is specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

If an *Audio Stream* is made invisible for an *Audio UI Profile*, the *Zebra Volume Control* is not present on ANY UI for the Device User to control the volume of that *Audio Stream*. The result is functionally equivalent to omitting the *Audio Stream* from the *Audio UI Profile*. This can be useful as a means to temporarily disable an *Audio Stream* that avoids the need to remove and restore its entire definition. 

### Action Add Profile Stream Modes

This Managed Configuration array allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in one or more modes as part of a new *Audio UI Profile* being added, and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** and as part of an instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**. 

### Action Add Profile Stream Mode

This Managed Configuration group allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile*. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

For each *Audio Mode* defined for an *Audio Stream*, the additional Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Type** MUST be specified to identify which *Audio Mode* is defined. The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum**, **Volume UI Configuration - Action Add Profile Stream Mode Maximum**, and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST also be specified to define the lower, upper, and default (preset) volume levels for that *Audio Mode* within that *Audio Stream*. 

### Action Add Profile Stream Mode Minimum
Used to define the minimum volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile*. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Maximum** and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for this Managed Configuration must be less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Maximum** and less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Preset**. 

### Action Add Profile Stream Mode Maximum
Used to define the maximum volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added, and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Preset**. 

### Action Add Profile Stream Mode Preset
Used to define the preset volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile*. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and **Volume UI Configuration - Action Add Profile Stream Mode Maximum** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Maximum**. 

### Action Add Profile Stream Mode Type
Used to define the type of behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile*. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

If the value ***Speaker***- the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to the built-in device speaker.

If the value ***Receiver***- the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to receiver mode.

If the value ***WiredHeadset***- the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to a wired audio headset.

If the value ***BluetoothHeadset***- the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to a wireless Bluetooth audio headset.

### Action Remove Profile Name
Used to provide the name of an existing *Audio UI Profile* to be removed and should be specified only if the value ***Remove Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 

### Action Set Current Profile Name
Used to provide the name of an existing *Audio UI Profile* to be made the current active *Audio UI Profile*and should be specified only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. The additional Managed Configuration **Volume UI Configuration - Action Set Current Profile Adjust Volume** MUST be specified to control whether the current device *Volume Settings* is adjusted to ensure that they fall within the range of *Volume Settings* defined by the *Audio UI Profile*. 

### Action Set Current Profile Adjust Volume
Used to configure the current device *Volume Settings* is adjusted to ensure that they fall within the range of *Volume Settings* defined by an *Audio UI Profile* being made the new current *Audio UI Profile* to be made the current active *Audio UI Profile*. This should be specified only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** and the Managed Configuration **Volume UI Configuration - Action Set Current Profile Name** is specified. 

-----

## Wakeup Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wake-ups on a Zebra Android device. 

### Wake-up Sources
Used to configure whether all controllable Wake-up Sources should be turned on or off.

* ***Off***- all wake-up sources that can be turned on or off are turned off, causing the physical events corresponding to those wake-up sources to be ignored, preventing them from causing the device to wake up from a suspend state.

* ***On***- all wake-up sources that can be turned on or off are turned on, causing the physical events corresponding to those wakeup sources to be honored, causing the device to wake up from a suspend state.

-----

## Whitelist Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which applications can be installed and run on a Zebra Android device. 

### Mode
Used to configure the Whitelisting Mode, which determines how the applications that can be installed and run on a Zebra Android device is controlled.

 -***Package Name Only***- allows only the app package name to control which applications can be installed and run.

 -***Package Name and Signature***- requires the app package name *and* the signature to control which applications can be installed and run. 

Using the value ***Package Name and Signature*** provides significantly better security than using ***Package Name Only*** since it provides much stronger protection against spoofing. If ***Package Name Only*** is used, any .apk file with a Android Package Name matching one of the allowed Package Names is allowed to be installed and run. Since any .apk file can be assigned any Package Name, the potential for a rogue application circumventing the protections of Whitelisting is relatively high. If ***Package Name and Signature*** is used, the Signature of an application must match an allowed Signature in addition to the Package Name matching and allowed Package Name. Since a rogue .apk file cannot be signed with a given Signature without possessing the corresponding Private Key, the chances of successfully spoofing are greatly reduced, and effectively eliminated if Private Keys are properly controlled.

### Action

This Managed Configuration group allows an Administrator using an EMM to perform an action to alter the Whitelisting configuration of a Zebra Android device.

* ***Allow***- a single application is allowed to be installed and run. The additional Managed Configuration **Whitelist Configuration - Action Allow Package Name** MUST be specified to supply the Android Package Name of the allowed application. In addition, if the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Allow Signature** MUST also be specified to provide the Signature to be allowed.

* ***Disallow***- the specified application is prevented from being installed and run. The additional Managed Configuration **Whitelist Configuration - Action Disallow Package Name** MUST be specified to supply the Android Package Name of the disallowed application.

### Action Allow Package Name

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Whitelist Configuration - Action**. 

If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Allow Signature** MUST also be specified to provide the Signature to be allowed. 

### Action Allow Signature

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Whitelist Configuration - Action** and should be specified only if the Managed Configuration **Whitelist Configuration - Action Allow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**. 

### Action Disallow Signature

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Whitelist Configuration - Action** and should be specified only if the Managed Configuration **Whitelist Configuration - Action Disallow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**. 

### Action Disallow Package Name

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Whitelist Configuration - Action**. 

If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Disallow Signature** MUST also be specified to provide the Signature to be allowed. 

### State
Used to configure the Whitelisting State, which determines whether the set of applications that can be installed and run on a Zebra Android device is controlled.

* ***Off***- Whitelisting is not used and no restrictions are placed on which applications can be installed and run.

* ***On***- Whitelisting is used and additional Managed Configurations can be specified to configure how the set of applications is controlled and which applications can be installed and run. 

-----

## Wireless General Configuration

This Managed Configuration group allows an Administrator using an EMM to configure General Wireless settings on a Zebra Android device. 

### Antenna Selection

This Managed Configuration group allows an Administrator using an EMM to configure which of multiple antennas should be used for wireless communications.

* ***Internal***- the internal built-in antenna is used.

* ***External***- an externally connected antenna is used.

### GPS Power State

This Managed Configuration group allows an Administrator using an EMM to configure whether the GPS radio state should be On or Off.

* ***Off***- the GPS radio is turned off, preventing GPS-based location detection.

* ***On***- the GPS radio is turned on, allowing GPS-based location detection, given satellite availability.

-----

## Wireless LAN Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wireless Local Area Network (WLAN) settings on a Zebra Android device. This Managed Configuration group allows an Administrator using an EMM to:

* Configure the frequency *Bands* on which the WLAN operates.
* Configure the specific *Country* in which the WLAN operates OR configures the *Country* to be determined automatically. 

### Bands
Used to configure the frequency *Bands* on which the WLAN subsystem operates on a Zebra Android device.

This Managed Configuration supports the following values:

* ***2.4GHz***- only the 2.4GHz *Band* (used by 802.11b and 802.11g) is used.
* ***5.0GHz***- only the 5.0GHz *Band* (used by 802.11a) is used.
* ***Auto***- the *Band* to be used is determined automatically. 

### Channels
Used to configure the channels over which the WLAN subsystem operates on a Zebra Android device.

The format of the value entered must be 64 characters or less and can specify one or more channels by separating values by commas and/or specifying ranges of values by separating the lower and upper range values with a dash (-). Some examples:
* 1,2,3
* 3,6,7-9,11-13

The actual channel that can specified depend on the value chosen for the Managed Configuration **Wireless LAN Configuration - Bands**.

* ***2.4GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels in the 2.4GHz band must be selected.

* ***5.0GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels in the 5.0GHz band must be selected.

* ***Auto*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels selected in either band are used.

Note that individual countries can apply their own regulations regarding allowable channels. Depending on the value chosen for the Managed Configuration **Wireless LAN Configuration - Country**, it is possible that some or all of the channel values specified for a given band are disallowed.

### Country
Used to configure the *Country* in which the WLAN subsystem operate on a Zebra Android device.

This Managed Configuration supports the following values:

* ***Auto (Use 802.11d)***- the *Country* to be used is determined automatically.

* ***Any other value***- the specified *Country* is used. 

### Hotspot State
Used to configure the state of the *Hotspot Mode* of the WLAN adapter on a Zebra Android device.

* ***Off***- prevents the device from sharing its Internet connection as a WLAN Hotspot. Existing *Hotspot Mode* configuration settings are not affected, allowing *Hotspot Mode* to be configured and tested, then turned OFF and back ON without reconfiguration.

* ***On***- the device can share its Internet connection as a WLAN Hotspot, subject to appropriate configuration settings related to *Hotspot Mode*. 

### Hotspot Options

This Managed Configuration group allows an Administrator using an EMM to configure all settings related to *Hotspot Mode* of the WLAN adapter on a Zebra Android device except the state of *Hotspot Mode*, which is configured using Managed Configuration **Wireless LAN Configuration - Hotspot State**.

All the settings is this group can be configured independently of the state of *Hotspot Mode*, thus allowing *Hotspot Mode* to be configured before it is turned ON and allowing the configuration of *Hotspot Mode* to be established and maintained across multiple changes to the state of *Hotspot Mode*. 

### Hotspot SSID
Used to configure the Service Set Identifier (SSID) that identifies the network supported in *Hotspot Mode* of the WLAN adapter on a Zebra Android device. 

### Hotspot Band
Used to configure the *Frequency Band* in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device.

* ***2.4GHz***- the *Hotspot Mode* of the WLAN adapter operates solely in the 2.4GHz *Frequency Band*, and only devices capable of operating in that *Frequency Band* are capable of sharing the Internet connection of the Zebra Android device using *Hotspot Mode*.

* ***5GHz***- the *Hotspot Mode* of the WLAN adapter operates solely in the 5.0GHz *Frequency Band*, and only devices capable of operating in that *Frequency Band* are capable of sharing the Internet connection of the Zebra Android device using *Hotspot Mode*.

### Hotspot Band 2.4GHz Channel
Used to configure the single 2.4 HGHz Channel in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device and should be specified only if the value ***2.4GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Band**.

### Hotspot Band 5GHz Channel
Used to configure the single 5.0GHz Channel in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device and should be specified only if the value ***5GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Band**.

### Hotspot Security Mode
Used to configure the *Security Mode* to be used to secure the *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device.

* ***Open***- the WLAN adapter applies no security for *Hotspot Mode*, thus providing no control over which devices can connect and share the Internet connection of the Zebra Android device using *Hotspot Mode*.

* ***WPA2/PSK***- the WLAN adapter applies Wi-Fi Protected Access Version 2 (WPA2) Pre-shared Key (PSK) security for *Hotspot Mode*, providing some control over which devices can connect and share the Internet connection of the Zebra Android device using *Hotspot Mode*. The additional Managed Configuration **Wireless LAN Configuration - Hotspot Security Passphrase** MUST be specified to provide the PSK pass-phrase used to secure the network. 

### Hotspot Security Passphrase
Used to provide the PSK passphrase used to secure the *Hotspot Mode* network implemented by the WLAN adapter on a Zebra Android device, and should be specified only if the value ***WPA2/PSK*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Security Mode**. 

### Omnitrail

This Managed Configuration group allows an Administrator using an EMM to configure Omnitrail settings for the WLAN adapter on a Zebra Android device. 

### Omnitrail State
Used to configure whether the Omnitrail feature of the WLAN adapter is turned On or Off for a Zebra Android device. 

### Omnitrail Interval
Used to configure the interval at which the Omnitrail feature of the WLAN adapter should emit a locational beacon on a Zebra Android device.

The value provided should be in milliseconds (ms) and should have a value in the range of 200 ms (0.2 seconds) to 5000 ms (5 seconds). 

### Omnitrail Options

This Managed Configuration array allows an Administrator using an EMM to specify one or more Omnitrail options to be configured for the WLAN adapter on a Zebra Android device. 

### Omnitrail Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. 

### Omnitrail Option Name
Used to select a standard name that identifies a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Option Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the selected name. 

### Omnitrail Option Name Custom
Used to enter a custom name that identifies a Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Option Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the specified name. 

### Omnitrail Option Value
Used to specify a value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device and should be specified only if either the Managed Configuration **Wireless LAN Configuration - Omnitrail Option Name** or the Managed Configuration **Wireless LAN Configuration - Omnitrail Option Custom Name** is also specified to provide the name needed identity the Omnitrail option to be set. 

### Omnitrail Data rate Standard
Used to select an Omnitrail data rate standard to be used by the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate** MUST also be specified to provide the actual data rate to be used.

* ***abg***- sets the Omnitrail data rate for 802.11a, 802.11b, and 802.11g.

* ***11n***- sets the Omnitrail data rate for 802.11n.

* ***11ac***- sets the Omnitrail data rate for 802.11a and 802.11c.

### Omnitrail Data rate
Used to select an Omnitrail data rate to be used by the WLAN adapter on a Zebra Android device and should be specified only if the Managed Configuration **Wireless LAN Configuration - Omnitrail data rate Standard** is also specified to identify the data rate standard, which restricts the data rates that can be specified.

* ***abg*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

* ***11n*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

* ***11ac*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

### Advanced Options

This Managed Configuration array allows an Administrator using an EMM to specify one or more advanced options to be configured for the WLAN adapter on a Zebra Android device. 

### Advanced Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device. 

### Advanced Option Name
Used to select a standard name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Advanced Option Value** MUST also be specified to provide the value to be set for the advanced option identified by the selected name.


### Advanced Option Custom Name
Used to enter a custom name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Advanced Option Value** MUST also be specified to provide the value to be set for the advanced option identified by the specified name. 

### Advanced Option Value
Used to specify a value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device and should be specified only if either the Managed Configuration **Wireless LAN Configuration - Advanced Option Name** or the Managed Configuration **Wireless LAN Configuration - Advanced Option Custom Name** is also specified to provide the name needed identity the advanced option to be set. 

### Diagnostics Options

This Managed Configuration group allows an Administrator using an EMM to specify one or more *Diagnostic Options* to be configured for the WLAN adapter on a Zebra Android device. 

### Diagnostics Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. 

### Diagnostic Option Name
Used to enter a standard name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name. 

### Diagnostic Option Name Custom
Used to enter a custom name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name. 

### Diagnostic Option Value
Used to enter a value to be assigned to a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Name** or the Managed Configuration **Wireless LAN Configuration - Diagnostic Option Name Custom** MUST be specified to provide the name that identifies the *Diagnostic Option* to be set. 

### Network Notification
Used to configure whether the Device User is notified about, and allowed to connect to, new WLANs that are detected.

* ***Off***- the Device User is NOT notified about, nor allowed to connect to, new WLANs that are detected.

* ***On***- the Device User is notified about, and allowed to connect to, new WLANs that are detected. 

-----

## Wireless WAN Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wireless Wide Area Network (WWAN) settings on a Zebra Android device.

### Power
Used to configure the Power State of the WWAN adapter.

**NOTE**: Attempts to configure the WWAN adapter on a device that does not have one results in an error. 

### Background Data
Used to configure whether WWAN data can be used by applications that are in the *Background*.

* ***Disallow***- the use of WWAN data by applications that are in the *Background* is prevented.

* ***Allow***- the use of WWAN data by applications that are in the *Background* is allowed.

### State
Used to configure the *Power State* of the WWAN adapter.

* ***Off***- the power to the WWAN adapter is turned OFF, preventing all communications through the WWAN adapter and reducing battery drain.

* ***On***- the power to the WWAN adapter is turned ON, potentially allowing communications through the WWAN adapter and increasing battery drain.

### SIM Card Slot
Used to configure SIM card slot used by the WWAN adapter.

**NOTES**: 
* Attempts to configure the WWAN adapter on a device that does not have one results in an error. 
* Attempts to configure the WWAN adapter to use an unsupported SIM card slot results in an error.
* Attempts to configure the WWAN adapter to use a supported but unpopulated SIM card slot results in an error.

* ***Slot 1***- the WWAN adapter attempts to use the SIM card slot designated as Slot 1.

* ***Slot 2***- the WWAN adapter attempts to use the SIM card slot designated as Slot 2.

* ***Slot 3***- the WWAN adapter attempts to use the SIM card slot designated as Slot 3.

* ***Slot 4***- the WWAN adapter attempts to use the SIM card slot designated as Slot 4.

### Data Limit State
Used to configure whether a limit should be imposed on the amount of WWAN data used, such as to cap telecom expenses.

* ***Enable and set default limit***- a default limit is imposed on the amount of WWAN data that can be used.

* ***Enable and set custom limit***- a custom limit is imposed on the amount of WWAN data that can be used and the additional Managed Configuration *Wireless WAN Configuration - Data Limit State Custom Limit* MUST be provided to specify the desired custom limit.

* ***Disable***- no limit is imposed on the amount of WWAN data that can be used.

### Data Limit State Custom Limit
Used to configure a custom limit that should be imposed on the amount of WWAN data used, such as to cap telecom expenses, and should be specified only if the value ***Enable and set custom limit*** is chosen for the Managed Configuration *Wireless WAN Configuration - Data Limit State*.

The custom limit should be an integer value specifying the maximum amount of WWAN data that can be used, in megabytes (MB).

### Data Warning Threshold
Used to configure a threshold such that if the amount of WWAN data used exceeds that threshold, a warning is displayed to the Device User.

The threshold should be an integer value specifying the threshold amount of WWAN data, in megabytes (MB).

### User Control of Background Data
Used to configure whether a Device User is allowed to use the in-device Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter.

* ***Disallow***- the Device User is blocked from using the Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to ensure that the Administrator settings related to usage of background data cannot be overridden by the Device User.

* ***Allow***- the Device User is allowed to use the Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to enable the Device User to override settings related to usage of background data that were set by the Administrator. 

### User Control of Data Limit
Used to configure whether a Device User is allowed to use the in-device Settings Menu to change limits on how much data can be communicated using the WWAN adapter.

* ***Disallow***- the Device User is blocked from using the Settings Menu to change limits on how much data can be communicated using the WWAN adapter. This can be used to ensure that the Administrator settings related to data limits cannot be overridden by the Device User.

* ***Allow***- the Device User is allowed to use the Settings Menu to change limits on how much data can be communicated using the WWAN adapter. This can be used to enable the Device User to override settings related to data limits that were set by the Administrator.

### User Control of Power
Used to configure whether a Device User is allowed to use the in-device Settings Menu to change the *Power State* of the WWAN adapter.

* ***Disallow***- the Device User is blocked from using the Settings Menu to change the *Power State* of the WWAN adapter. This can be used to ensure that the Administrator settings related the *Power State* of the WWAN adapter cannot be overridden by the Device User.

* ***Allow***- the Device User is allowed to use the Settings Menu to change the *Power State* of the WWAN adapter. This can be used to enable the Device User to override the *Power State* of the WWAN adapter that was set by the Administrator. 

### User Control of Sim Socket
Used to configure whether a Device User is allowed to use the in-device Settings Menu to select which SIM slot is used by the WWAN adapter.

* ***Disallow***- the Device User is blocked from using the Settings Menu to select which SIM slot is used by the WWAN adapter. This can be used to ensure that the Administrator settings related to SIM slot selection cannot be overridden by the Device User.

* ***Allow***- the Device User is allowed to use the Settings Menu to select which SIM slot is used by the WWAN adapter. This can be used to enable the Device User to override theSIM slot selection that was set by the Administrator.

### Public Land Mobile Network Lock
Used to configure whether the WWAN adapter should be locked to a single Public Land Mobile Network Lock (PLMN).

* ***Off***- the WWAN adapter is NOT locked to a single Public Land Mobile Network Lock (PLMN) and is free to connect to any PLMN compatible with the SIM card being used.

* ***On***- the WWAN adapter is locked to a single Public Land Mobile Network Lock (PLMN) and is permitted to connect only to the specified PLMN. The additional Managed Configuration **Wireless WAN Configuration - Public Land Mobile Network Lock Value** MUST be specified to provide the value that identifies the PLMN to which the WWAN adapter should be locked.

### Public Land Mobile Network Lock Value
Used to provide the value that identifies the Public Land Mobile Network Lock (PLMN) to which the WWAN adapter should be locked and should be specified only if the value ***On*** is specified for the Managed Configuration **Wireless WAN Configuration - Public Land Mobile Network Lock**.
to a single Public Land Mobile Network Lock (PLMN).

The value provided to identify a PLMN must specify both the Mobile Country Code (MCC) and the Mobile Network Code (MNC). Since all MCC values are three digits and MNC values can be 2 or 3 digits, the value provided must be of the format XXXYY or XXXYYY, where XXX is the three digit MCC value and YY or YYY is the 2 or 3 digit MNC value. 

### User Control of Public Land Mobile Network Lock
Used to configure whether a Device User is allowed to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN).

* ***Disallow***- the Device User is blocked from using the Settings Menu to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to ensure that the Administrator settings related to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) cannot be overridden by the Device User.

* ***Allow***- the Device User is allowed to use the Settings Menu to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to enable the Device User to override any locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) that was set by the Administrator. 

### Dual SIM Dual Standby Mode
Used to configure whether the WWAN adapter should handle multiple SIM card(s) in Dual SIM Dual Standby (DSDS) Mode.

* **Off**- the WWAN adapter is configured to handle multiple SIM card(s) in Single SIM Mode, which means that only one SIM at a time is usable for all carrier services. To use a different SIM, the current SIM must be switched and ALL carrier services switched to the new SIM.

* **On**- the WWAN adapter is configured to handle multiple SIM card(s) in Dual SIM Dual Standby Mode, under which two SIM cards, if present, can be used at the same time, but only one SIM can be chosen for each carrier service. For example, one SIM might be selected for voice calls and text messages while the other is for data. This can be beneficial if the carriers associated with those SIMs have different performance, pricing, coverage, etc. for various carrier services. 

-----

## Zebra Licensing Configuration

This Managed Configuration group allows an Administrator using an EMM to manage Zebra-issues licenses on a Zebra Android device. 

### License Action
Used to perform an Action to manage Zebra-issued licenses on a Zebra Android device.

* ***Activate License***- a license is activated, making it usable on the device. Some or all of the additional Managed Configurations **Zebra Licensing Configuration - License Action Activate License Method**, **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value**, **Zebra Licensing Configuration - License Action Activate License Method From Server Standard Class**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Friendly Name**, **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name**, and **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST be specified to define the license to be activated and how that license should be activated.

* ***Return License***- a previously activated license is returned, allowing it to be re-allocated for use on another Zebra Android device. The additional Managed Configurations **Zebra Licensing Configuration - License Action Return License Server Type**, **Zebra Licensing Configuration - License Action Return License Server Type Friendly Name**, and **Zebra Licensing Configuration - License Action Return License AID Value** MUST be specified to define the license to be returned and how that license should be returned.

* ***Return All Licenses***- all licenses previously activated from a given *License Server* is returned, allowing them to be re-allocated for use on other Zebra Android devices. The additional Managed Configurations **Zebra Licensing Configuration - License Action Return All Licenses Server Type** and **Zebra Licensing Configuration - License Action Return All Licenses Server Type Friendly Name** MUST be specified to define how the licenses were acquired and therefore to identify which licenses should be returned and how they should be returned.

* ***Refresh License***- a previously activated license is refreshed, updating anything that might have changed, such as its expiration date, capabilities, etc. The additional Managed Configuration **Zebra Licensing Configuration - License Action Refresh License AID Value** MUST be specified to identify the license to be refreshed.

* ***Delete Server***- a previously defined *Custom Server*, along with all licenses allocated through that *Custom Server*, is deleted. The additional Managed Configuration **Zebra Licensing Configuration - License Action Delete Server Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* to be deleted. 

### License Action Activate License Method
Used to provide the method that should be used to activate a Zebra-issued license a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

* ***From Server Standard***- the license is activated from a Standard Server and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Standard Class** MUST be specified to identify the class of Standard Server through which the license is activated and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value** MUST be specified identify the license to be activated.

* ***From Server Custom*** is chose, the license is activated from a Custom Server and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class** MUST be specified to identify the class of Custom Server through which the license is activated and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value** MUST be specified identify the license to be activated. In addition, the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MIGHT need to be specified, depending on the value chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class**.

* ***From Local File***- the license is activated from a license file stored in the device file system and the additional Managed Configurations **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name** and **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST be specified to identify the license file and the class of Server from which the license file was acquired. 

### License Action Activate License Method From Server AID Value
Used to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### License Action Activate License Method From Server Standard Class
Used to provide the Class of Standard Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Standard*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

* ***Production Cloud Direct***- the license is activated by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet. The Production Server should be used when deploying licenses to devices for production use.

* ***Test Cloud Direct***- the license is activated by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet. The Test Server should be used when tested the deployment of licenses to devices to avoid consuming actual production licenses.

### License Action Activate License Method From Server Custom Class
Used to provide the Class of Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

* ***Production Cloud Proxy***- the license is activated by communicating to a Production *Zebra License Server* at a fixed known location on the Internet through a *Local Proxy Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local Proxy Server* to be used.

* ***Test Cloud Proxy***- the license is activated by communicating to a Test *Zebra License Server* at a fixed known location on the Internet through a *Local Proxy Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local Proxy Server* to be used.

* ***Local Direct***- the license is activated by communicating to a *Local License Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local License Server* to be used.

* ***Other***- the license is activated by communicating to some other Server. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the Server to be used. 

### License Action Activate License Method From Server Custom URL
Used to provide the URL of a Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**. 

### License Action Activate License Method From Server Custom Friendly Name
Used to provide a *Friendly Name* for a Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

A *Friendly Name* is kept for each Custom Server used to acquire licenses and is used when later operating on such licenses to identify the Custom Server through which a license was acquired and through which it must be refreshed, returned, etc. The *Friendly Name* also is used to identify a Custom Server to be deleted. 

### License Action Activate License Method From Local File Path and Name
Used to provide the local path and file name of a license file in the device file system from which a Zebra-issued license is activated on a Zebra Android device and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**. The Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST also be specified to identify the class of Server from which the license file was acquired, which could impact how it is processed. 

### License Action Activate License Method From Local File Source Server Class
Used to provide the class of Server from which the license file to be activated was acquired and should be specified only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method** and the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name** is specified. 

### License Action Return License Server Type
Used to provide the Type of Standard Server through which a Zebra-issued license was activated on a Zebra Android device and therefore through which it should be returned, and should be specified only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

* ***Production Cloud Direct***- the license is assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and the license is returned by communicating directly to the same server in the same way.

* ***Test Cloud Direct***- the license is assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and the license is returned by communicating directly to the same server in the same way.

* ***Server Friendly Name***- the license is assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Return License Server Type Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* through which the license was acquired and through which it should be returned. 

### License Action Return License Server Type Friendly Name
Used to provide the *Friendly Name* that identifies the *Custom Server* through which a Zebra-issued license was activated on a Zebra Android device and therefore through which it should be returned, and should be specified only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Return License Server Type**. 

### License Action Return License AID Value
Used to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be returned on a Zebra Android device and should be specified only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### License Action Return All Licenses Server Type
Used to provide the Type of Standard Server through which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore through which they should be returned, and should be specified only if the value ***Return All License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

* ***Production Cloud Direct***- the licenses is assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and all such licenses is returned by communicating directly to the same server in the same way.

* ***Test Cloud Direct***- the licenses is assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and all such licenses is returned by communicating directly to the same server in the same way.

* ***Server Friendly Name***- the licenses is assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Return All Licenses Server Type Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* through which the licenses were acquired and through which all such licenses should be returned. 

### License Action Return All Licenses Server Type Friendly Name
Used to provide the *Friendly Name* that identifies the *Custom Server* through which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore through which they should be returned, and should be specified only if the value ***Return All Licenses*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Return All Licenses Server Type**. 

### License Action Refresh License AID Value
Used to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be refreshed on a Zebra Android device and should be specified only if the value ***Refresh License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### License Action Delete Server Friendly Name
Used to provide the *Friendly Name* that identifies the *Custom Server* to be deleted, and should be specified only if the value ***Delete Server*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

-----

## See Also

* **[About EMM Toolkit](../about)** | General information
* **[FAQ](../faq)** | Frequently asked questions about EMM Toolkit 
* **[EMMTK Glossary](../glossary)** | Defines terms used in the EMM Toolkit
* **[AEDO Porting Guide](../port)** | EMM agent porting options 
* **[Persistence Best Practices](../persistence)** | Zebra-recommended processes for EMMs
* **[Staging Service APIs](../api)** | Interfacing with StageNow from an EMM console
* **[Build a DDUI from the Zebra OemConfig Schema (.pdf)](../../downloads/Zebra_EMMTK_Building_DDUI_from_OemConfig_Schema_091418.pdf)** | Breakdown of DDUI creation with Zebra OemConfig
* **[DA-to-DO Agent Porting Guide (.pdf)](../../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf)** | Detailed porting information and guidance

