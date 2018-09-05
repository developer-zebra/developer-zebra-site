---
title: OemConfig Development Guide
layout: guide.html
product: EMM Toolkit
productversion: '2.0'
---

## `DRAFT`
**_Information subject to change without notice_**. 

-----

## Overview

This guide is intended to allow EMM solution providers to enable their products to support OemConfig, a Google-recommended approach developed by Zebra Technologies that configures Zebra devices using Android Managed Configurations. When performing administrative tasks on devices, Managed Configurations are used when no Android Enterprise API is available. Both are based on publicly available specifications developed by Google and the Android community. 

Zebra partners wishing to follow the processes defined in this guide must [register with Google](https://developers.google.com/android/work/play/emm-api/) as an EMM solution provider. This unlocks API-level access to the Google Play store, where the schemas for all Android apps are stored. An app's schema defines functions available for interrogation and/or configuration using Managed Configurations, and key to OemConfig usage. 

#### OemConfig Process:

1. EMM Server acquires OemConfig schema from Google Play store or [other locations]() 
2. Using schema data, EMM Server presents UI with device functions available for configuration 
3. Administrator interacts with UI, selecting desired configuration actions
4. Actions are saved as a Managed Configuration object (Google recommends JSON format)
5. EMM Server packages and transports MC objects to device agent
6. Agent converts MC objects to Android in-memory bundle(s)
7. Agent calls `DevicePolicyManager.SetApplicationRestrictions` and passes bundle(s) to `com.zebra.oemconfig` for action

### Sample Files

To aid EMM developers, Zebra provides two fully working tools as examples of effective implementations of this process to copy or compare with their own solutions. With the exception of the schema, which describes functions specific to Zebra devices, the sample solutions are based entirely on Google's public specifications, and contain no Zebra-proprietary logic. In theory, tools built from these samples would be effective on any device that conforms to the Google specifications. 

#### Zebra Solutions

`McTool.jar` - A Java app that presents a data-driven user interface from the contents of a schema.

`Schema.json` - The Zebra-specific function definitions; source for data-driven configuration UI.

`BundleTools.java` - Java source code that converts JSON Managed Configuration objects into bundles. 

> NOTE: Zebra provides no warranty or support for these sample files. 

<!--

MISSION: 
Provide a DD UI that consumes Zebra schema, stores its MC somehow and delivers them to the device. 

Sample code is one enabler for EMMs to do some work. 

Actual sample: BundleTools (JSON-to-bundle code)
Another Example: one's a document (schema) and the other is a tool (McTool)


In the past, EMM solution providers might or might not have been an device administrator, but iot was creating XML and submitting it to MX. A Zebra-proprietary world. Now, EMMs shoudl be device Owner and APIs are defined and standardized for Android by Google. 

You can still use MX through O, discon. in P. This guide is not for that (see migration guide). 

At this point, EMM vendors should be deciding how they will migrate to DO and MC, even if they're not plannning to support Zebra but for other vendor's devices. 

Server needs to create MCs - sample is here. 
Server has to delvier MCs to the agent., that's for you to decice. but we can make suggestions for Google's chosen JSON format.

agent has to convert to JSON to a bundle, which is an Android in-memnory object and therefore cannot be sent over the air. 

agent recieves MC as JSON (or whatever), converts to bundle and sends to std API devicepolicy.setapplicationrestrictions. 


WHAT WE CAN OFFER

McTool consumes our scema and presents DD UI
- interesting because it shows how to do EVERYTHING thru a DD UI
- If you're building your oebn DD UI, it should be able to consume our schema
- gives you an example of how it COULD be done
- we can provide the .jar file
- feed it our schema (JSON or pair of XML files), it presents a DD UI
- After you put in all your MCs and hit save, it saves them as a JSON file
- The format we use is the one defined by Google, which provides its own device delivery pathway if you're using Google as the EMM agent (in essence) (GMS devices only)
- EMM would go to playstore for schema for com.zebra.oemconfig and present a DDUI the same way ours does
- Could be used internally by vendor to see how we did it. They can emulate or do something else
- If they want to submit their MCs to OemConfig, we have code for converting their JSONs to a bundle


the only downside is bug fixes (solved by putting it on github). 

Two-tool Solution
Some vendors might not wish to implement ALL possible functions. Solutions from such vendors can use StageNow to create profiles for features not configurable from their oewn console, export the profiles using the "Export for MDM" option, pass the profiles to their console-> agent-> which feeds it to MX, get response and display it on the console. A pass-through solution. 

As long as your code conforms to Google's definition of how to encode MCs as JSON, this code will convert that code to a bundle suitable for calling devicepolicymanager.setapplicationrestrictions and passing it to OemConfig. 

Why NOT to use JSON
MCs are a std feature of AE. Any app dev publishing an app to PS can say they have MCs. 

If they haven't yet selected an encoding scheme, there's no good reason NOT to choose JSON. And if they've chosen JSON, this sample can show them how to convert to bundles and submit to OC. 

IF POSTING SAMPLES ON GITHUB, add disclaimer

1. McTool 
2. Bundle conversion code
3. Tut-DO, device owner app that reads JSON, converts to bundles and submits thru Android 

Share 1 and 2. 
DO NOT SHARE 3. 

McTool as an example DD UI (to compare with their own) and as a way to produce JSON files and compare them with JSONs their server is producing. Use this as a double-check for those two things. 

Allan leans against giving McTool source code. "there's quite a lot of code and what are the support implications?"


Give them mctool.jar and the released schema at the time

The PlayStore will always have the latest schema (you can only have one there), but it's also the one that contains all the functions that every Zebra device can do. So there's a real possibility that if a vendor takes that one, they'll eventually end up trying to implement features that aren't supported on the target device. 

An EMM also can get the schema from the device, but if they're managing 10,000 devices, they'll have 10,000 schemas. 

HOW TO GET THE SCHEMA FROM PLAYSTORE
- Register with Google as a bonafide EMM
- Get API key, which allows them to call Google EMM APIs, one of which is to browse PlayStore and pull app packages, which an EMM can use to deliver those packages to devices
- Part of that is to get the schema for any app I can get the package for
- In theory, you could crack open the .apk and get the schema, but nobody wants to do that


Get McTool and schema here (to be posted on GitHub):
https://zebra.sharepoint.com/sites/converge/emc-android-platform-architect-review-board/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2Fconverge%2Femc-android-platform-architect-review-board%2FShared%20Documents%2FAFW%20Summitt%2FEMMTK&FolderCTID=0x0120003BE153D20C1D7A46B871096BD8DCCC6C&View=%7B84DDE955-0D89-4F6B-9520-5D6F33223009%7D


----------------

 NOTES FROM THE OLD STORY
 

Document the schema content and usage
Approaches for encoding Managed Configurations for delivery from EMM Server to EMM Agent
Document the schema management
Recommendations for implementing Data-Driven UI for OemConfig schema
OEM CONFIG DOCS:

primary audience is NOT EMM vendor
primary audience is administrator using EMM solution
schema controls data-driven UI, titles, prompts, help text, pull-down lists, etc
schema doesn't allows detailed instructions-- online docs do

-->
-----

## About Zebra Schema

The Zebra schema is fully compliant with the depth and complexities of the Android schema design. It contains multiple layers of nested bundles, and is far richer than other schemas.

GREAT THING: 
specific example UI that meets implications for a schema
bundle array within another bundle
Key diff's in schema you'll see in oemconfig and here's what they mean to you 
**maybe a <u>screenshot</u> of McTool showing how a part of the schema is displayed**


- Differences in Schema from others
- Nested Bundles

Oemconfig and schema is in every O device (except some of the earliest) including Hawkeye, **all** N devices have it. 

-----

<!-- Global edits to this document: 

will be-> is
will not-> does not
hence-> 
then-> (case-by-case)
may-> might or can
will also be-> also is
will-> (case-by-case)
If the value-> 
** is chosen, then-> -**
This Managed Configuration allows-> Allows
Zebra Android device-> device
-->

## Transaction and Schema Level

This section describes Managed Configurations that are used internally by an EMM to manage transactions that apply configurations defined by an Administrator to a Zebra Android device and/or to obtain information about the Schema that defines available configuration options. 

### Schema Package Name

This Managed Configuration allows an EMM or other tool that is consuming the OemConfig Schema to determine the Package Name of the Package that implements that Schema.
- Since the Schema is published by the OemConfig package, if the Schema is obtained from that package by an EMM or tool through the Android system, the package name of that package is already known.
- But if the Schema for OemConfig is obtained by an EMM or tool some other way, such as by directly importing a Schema file, this Managed Configuration can be used as a confirmation and/or to determine the package to which Managed Configurations created using this Schema should be sent.


### Schema Contract Version

This Managed Configuration allows an EMM or other tool that is consuming the OemConfig Schema to determine the Contract Version of that Schema that is being used.

The Contract Version is expressed in the form _&lt;major&gt;.&lt;minor&gt;_ (e.g. 1.5). 
- The value of _&lt;major&gt;_ changes when there is significant change in the Managed Configurations supported by OemConfig, such as when a change of Android version enables major new functionality.
- The value of _&lt;minor&gt;_ changes when there is some less significant change in the Managed Configurations supported by OemConfig, such as when one or a few additional Managed Configurations are added.
- Neither value value changes if changes to the Schema do not affect the Managed Configurations supported by OemConfig, such as when changes are purely cosmetic.
- See the Managed Configuration **Schema UI Revision** for more information about cosmetic changes that do not affect the Contract Version.



### Schema UI Revision

This Managed Configuration allows an EMM or other tool that is consuming the OemConfig Schema to determine the UI Revision of that Schema that is being used.

The UI Revision is expressed in the form of a simple integer value (e.g. 3). 
- The value changes when there are changes to the Schema do not affect the Managed Configurations supported by OemConfig, but only affect the UI that may be generated based on that Schema.
- Examples of cosmetic changes that might be indicated using this Managed Configuration include changes in the _Title_ or _Description_ of Managed Configuration or changes to the textual values displayed for a pull-down list of choices.
- See the Managed Configuration **Schema Contract Version** for more information about changes that affect the Contract Version.


### Schema Variant

This Managed Configuration allows an EMM or other tool that is consuming the OemConfig Schema to determine the Variant of that Schema that is being used.

The Schema Variant is expressed in the form of an identifying string and could have a variety of possible values. 
- By definition, all Schemas that have the same values for the Managed Configurations **Schema Package Name** and **Schema Contract Version** should be considered to implement subsets of the Master Schema associated by those two values.
- The Master Schema can be identified by a Schema Variant value of ***Master***.
- All other Schema Variant values indicates various subsets of that Master Schema and those values is generally chosen to identify the class of Zebra Android devices that implement that subset of Managed Configurations, for example:
    - The Schema Variant value ***Value Tier N*** might indicate the subset of Managed Configurations supported on Value Tier Zebra Android devices running Android Nougat.
    - The Schema Variant value ***Premium N-V1*** might indicate the subset of Managed Configurations supported on Premium Zebra Android devices running Android Nougat and that implement the V1 feature set.


### Transaction ID

This Managed Configuration allows an EMM to specify a Transaction ID that identifies a collection of configurations that can be performed by submitting a collection of Managed Configurations in a Bundle to OemConfig for processing on a Zebra Android device.

OemConfig uses the Transaction ID value specified in this Managed Configuration to differentiate transactions submitted over time.
- OemConfig processes Managed Configurations in a Bundle submitted to OemConfig if the Transaction ID is set to a different value than the value previously set.
- The Transaction ID used can be any string value that is convenient for the EMM to use to identify the transaction.
- It is expected that a suitably different Transaction ID value is created by the EMM each time a new collection of Managed Configurations is created in accordance with the OemConfig Schema.
- While a Transaction ID value does not need to be truly unique, it should be different from any prior value recently used.
- When creating and storing collections of Managed Configurations for long term use, it would be best practice to create truly unique values, such as by generating a GUID.
- If the EMM requests notification of the completion of a transaction, the Transaction ID is attached to the Transaction Result Intent to identify the transaction.


### Transaction Result Intent Type

This Managed Configuration allows an EMM to request OemConfig to send a notification of the completion of a transaction by sending a Transaction Result Intent when it has finished processing the transaction.

If sending a Transaction Result Intent is desired, this Managed Configuration MUST be set to indicate the type of intent to be sent.
- If the value ***startActivity*** is chosen, an EMM Activity is notified of the completion of the transaction by sending an intent using the Android method _Context.startActivity()_.
    - It is generally a best practice to specify values for one or more of the Managed Configurations **Transaction Result Intent Action**, **Transaction Result Intent Component**, or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to ensure that the intent is sent to the right Activity and/or to help differentiate the intent from others that might be sent to that Activity.
- If the value ***startService*** is chosen, an EMM Service is notified of the completion of the transaction by sending an intent using the Android method _Context.startService()_.
    - It is generally a best practice to specify values for one or more of the Managed Configurations **Transaction Result Intent Action**, **Transaction Result Intent Component**, or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to ensure that the intent is sent to the right Service and/or to help differentiate the intent from others that might be sent to that Service.
- If the value ***sendBroadcast*** is chosen, an EMM is notified of the completion of the transaction by sending an intent using the Android method _Context.sendBroadcast()_.
    - It is generally a best practice to specify values for one or more of the Managed Configurations **Transaction Result Intent Action** or **Transaction Result Intent Extra Name** and **Transaction Result Intent Extra Value** to help differentiate the intent from others that might be sent to the same receiver.

The Transaction ID value specified in the Managed Configuration **Transaction ID** is attached to the Transaction Result Intent to identify the transaction for which the notification is being sent.


### Transaction Result Intent Action

This Managed Configuration allows an EMM to request that OemConfig specify an Intent Action when sending a Transaction Result Intent when it has finished processing of the transaction and should generally be specified only if the Managed Configuration **Transaction Result Intent Type** is also specified.

Which specifying an Intent Action is not mandatory when sending a Transaction Result Intent, it is generally a good practice to do so to help the receive of the intent differentiate it from other intents it might receive. 

### Transaction Result Intent Component

This Managed Configuration allows an EMM to request that OemConfig specify a Component when sending a Transaction Result Intent when it has finished processing of the transaction and should generally be specified only if the Managed Configuration **Transaction Result Intent Type** is also specified.

While specifying a Component is not mandatory when sending a Transaction Result Intent, it is generally a good practice to do so since it can help ensure that the intent is sent to the right receiver.
- Since broadcast intents are sent globally, they cannot be directed to a specific receiver. As a result, a Component should only be specified when the value chosen for the Managed Configuration **Transaction Result Intent Type** is ***startActivity*** or ***startService***.



### Transaction Result Intent Extra Name

This Managed Configuration allows an EMM to request that OemConfig attach a String Extra whose, Extra Name is specified, to the Transaction Result Intent when it has finished processing of the transaction.

Specifying a String Extra is optional when sending a Transaction Result Intent, although it might be useful to do so since it can help ensure that the receiver of the intent can differentiate it from other intents that it might receive.
- When an Extra Name is specified using this Managed Configuration, it is mandatory that an Extra Value also be specified using the Managed Configuration ***Transaction Result Intent Extra Value***.


### Transaction Result Intent Extra Value

This Managed Configuration allows an EMM to request that OemConfig attach a String Extra, whose Extra Value is specified, to the Transaction Result Intent when it has finished processing of the transaction.

Specifying a String Extra is optional when sending a Transaction Result Intent, although it might be useful to do so since it can help ensure that the receiver of the intent can differentiate it from other intents that it might receive.
- When an Extra Value is specified using this Managed Configuration, it is mandatory that an Extra Name also be specified using the Managed Configuration ***Transaction Result Intent Extra Name***. 

### Transaction Steps

This Managed Configuration allows an EMM to enable an Administrator to defined a sequence of steps that perform configuration of various configurations and to organize those steps into a single transaction to be performed on a Zebra Android device.

Any number of transaction steps can be included within a transaction and the individual transactions steps is executed in the order they appear within this Managed Configuration. 

#### Transaction Step

This Managed Configuration allows an EMM to enable an Administrator to specify a single transaction step that defines one or more configurations to be performed on a Zebra Android device as part of a transaction.

Multiple configurations of different types can optionally be defined as part of a single transaction step, but an Administrator CANNOT control the order or execution of such configurations within a given step.

- The system executes multiple configurations within the same step in an order designed to maximize the chance that all configurations can be successfully executed.

- If an Administrator needs to tightly control the order of relative execution of various configurations, they should be included into different transaction steps so their order can be controlled by ordering those steps within the transaction.

The following section **Transaction Step Level** describes the Managed Configurations that are available for an Administrator to use to define the configurations that can be perform as a part of a transaction step. 

# Transaction Step Level

This section describes Managed Configurations that allow an Administrator using an EMM to define the configuration to be performed as part of a step within a transaction, to describe the step, and to define how errors that occur during the step is handled. 

## Transaction Step Explanation

This Managed Configuration allows an Administrator using an EMM to specify optional explanatory text that describes the purpose or intended behavior of a transaction step.

Since a transaction might include multiple steps and each transaction step could include one or more configurations, describing the step can be invaluable when later reviewing the configuration defined by a transaction and/or when editing a transaction, especially when reordering the steps within a transaction. 

## Transaction Step Error Mode

This Managed Configuration allows an Administrator using an EMM to define how errors that occur during the execution of a transaction step should be handled.

Since a transaction might include multiple steps and each transaction step could include one or more configurations, there might be cases where steps within a transaction are dependent on steps earlier in the same transaction. In such cases, it might be desirable to terminate a transaction if the processing of a step results in an error to avoid propagating the results of that error into subsequent steps.

By default, execution continues with the next transaction step once execution of the current step is completed.

A decision to override this default behavior can be made independently for each step within a transaction by supplying an Error Mode value:

- An Error Mode value of ***Continue*** indicates that any errors that occur during the execution of the current transaction step should NOT terminate execution of subsequent steps in the same transaction. Execution thus always continues with the next transaction step once execution of the current step is completed.

- An Error Mode value of ***Stop*** indicates that any errors that occur during the execution of the current transaction step should terminate execution of subsequent steps in the same transaction. Execution continues with the next transaction step only if execution of the current step completes with NO errors. 

## Analytics Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device. 

### Analytics Configuration - State

This Managed Configuration allows an Administrator using an EMM to configure whether the Analytics Client on a Zebra Android device is turned on (enabled) or turned off (disabled).

The Analytics Client is turned on (enabled) by default on all Zebra Android devices:

- When a value of ***Off*** is chosen, the Analytics Client is turned off (disabled), and does not collect machine data during the operation of the device and does NOT deliver machine data regardless of whether connectivity is available.

- When a value of ***On*** is chosen, the Analytics Client is turned on (enabled), and automatically collects machine data during the operation of the device and delivers it when (connectivity is available) to the Zebra Analytics Cloud Server.

**Note**: The ability for an Administrator to use an EMM to turn off (disable) the Analytics Client is not supported on some devices.


### Analytics Configuration - User Control of State

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to control the state (enabled/disabled) of the Analytics Client on a Zebra Android device.

The Analytics Client is turned on (enabled) by default on all Zebra Android devices.

- When a value of ***Off*** is chosen, the Device User prevented from changing the state (enabled/disabled) of the Analytics Client and whether it collects and/or delivers machine data during the operation of the device.

- When a value of ***On*** is chosen, the Device User is allowed to change the state (enabled/disabled) of the Analytics Client and whether it collects and/or delivers machine data during the operation of the device.


## Audio Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the audio settings on a Zebra Android device. 

### Audio Configuration - Mute/Vibrate

This Managed Configuration allows an Administrator using an EMM to configure the mute and vibrate behavior of a Zebra Android device.

- If the value ***Mute without Vibrate*** is chosen, the volume is muted (made silent) and the device does NOT vibrate, permitting neither audible nor tactile alerts.

- If the value ***Mute with Vibrate*** is chosen, the volume is muted (made silent) and the device vibrates, permitting both audible and tactile alerts.

- If the value ***Unmute without Vibrate*** is chosen, the volume is unmuted (made audible) and the device does NOT vibrate, permitting audible but not tactile alerts. 

### Audio Configuration - Replication Action

This Managed Configuration allows an Administrator using an EMM to configure the audio replication behavior of of a Zebra Android device.

- If the value ***Replicate headset audio on built-in speaker*** is chosen, audio routed to the headset also is routed to the built-in speaker. This might be desirable in a situation where the Device User might walk away from a vehicle mounted device and leave the headset in the vehicle while performing some task nearby. If an audible alert is also routed to the built-in speaker, the Device User might still hear it.

- If the value ***Do not replicate headset audio on built-in speaker*** is chosen, audio routed to the headset also is routed to the built-in speaker. This might be desirable in a situation where the device is being used in an area where routing audio to the built-in speaker could be disruptive to others in the area. 

## Auto Trigger Configuration

This Managed Configuration group allows an Administrator using an EMM to configure whether and how automatic triggering occurs on a Zebra Android device.

Automatic triggering allows a Device User to initiate trigger-activated functions simply by bringing an object within proximity of the device sensor as opposed to requiring the Device User to manually initiate such functions. 

### Auto Trigger Configuration - State

This Managed Configuration allows an Administrator using an EMM to configure whether and how automatic triggering should occur on a Zebra Android device.

- If the value ***Off*** is chosen, automatic triggering never occurs and the Device User is required to manually initiate trigger-activated functions.

- If the value ***Auto On*** is chosen, automatic triggering might occur automatically if the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor.

- If the value ***Always On*** is chosen, automatic triggering can always occur automatically , whether or not the device is placed into a suitable holster, holder, or stand allowing the Device User to initiate trigger-activated functions simply by bringing an object within proximity to the device sensor. 

### Auto Trigger Configuration - Range

This Managed Configuration allows an Administrator using an EMM to configure the range at which automatic triggering detects the presence of an object and initiate automatic triggering.

- If the value ***Near*** is chosen, automatic triggering occurs only when an object is brought within near proximity to the device sensor. This might be desirable if the device is being worn in a holster and it's convenient to bring objects close to the device sensor.

- If the value ***Far*** is chosen, automatic triggering occurs when an object is brought within less near proximity to the device sensor. This might be desirable if the device is located in a stand or holder and it's less convenient to bring objects close to the device sensor. 

## Blacklist Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which built-in System Applications can/cannot be used on a Zebra Android device. 

### Blacklist Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to enable or disable a single built-in System Application on a Zebra Android device.

All built-in System Applications are enabled by default on Zebra Android devices.
Enabling a built-in System Application allows it to be freely launched, either by the Device User or programmatically by other Applications.
Disabling a built-in System Application prevents it from being launched, either by the Device User or programmatically by other Applications.

Since a built-in System Application is built-in, you cannot uninstall it from a device, even if you do not wish it to be used.
To prevent the use of a built-in System Application, you can disable it and thereby prevent its use, even though it remains installed.

The value of this Managed Configuration specifies an Action value of ***Enable*** or ***Disable***.
Depending on the Action value chosen, one of the following Managed Configurations must also be specified to provide the package name of the built-in System Application that is to be enabled or disabled.

- When the Action value ***Enable*** is chosen, the Managed Configuration **Blacklist Configuration - Action Allow System Package** must be used to specify the package name that identifies the built-in System Application to be enabled.

- When the Action value ***Disable*** is chosen, the Managed Configuration **Blacklist Configuration - Action Disallow System Package** must be used to specify the package name that identifies the built-in System Application to be disabled.


### Blacklist Configuration - Action Allow System Package Name

This Managed Configuration allows an Administrator using an EMM to specify a package name to identify a built-in System Application to be ***Enabled*** and should be specified if and only if the Action value ***Enable*** is chosen for the Managed Configuration **Blacklist Configuration - Action**.


### Blacklist Configuration - Action Disallow System Package Name

This Managed Configuration allows an Administrator using an EMM to specify a package name to identify a built-in System Application to be ***Disabled*** and should be specified if and only if the Action value ***Disable*** is chosen for the Managed Configuration **Blacklist Configuration - Action**. 

## Bluetooth Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Bluetooth settings on a Zebra Android device.


### Bluetooth Configuration - Discoverability

This Managed Configuration allows an Administrator using an EMM to configure whether the device is *Discoverable* via Bluetooth.

Zebra Android devices are NOT *Discoverable* via Bluetooth by default except when the Bluetooth Pairing screen of the Settings UI is active.

The value of this Managed Configuration can change this default behavior:

- When the value ***Off*** is chosen, the default behavior is in effect and the device is NOT *Discoverable* via Bluetooth except when the Bluetooth Pairing screen of the Settings UI is active.

- When the value ***On*** is chosen, the default behavior is overridden and the device is *Discoverable* via Bluetooth whenever Bluetooth is enabled (turned on).




### Bluetooth Configuration - New Pairings

This Managed Configuration allows an Administrator using an EMM to configure whether the device accepts new Bluetooth Pairings.

Zebra Android devices accepts new Bluetooth Pairings by default.

The value of this Managed Configuration can change this default behavior:

- When the value ***Off*** is chosen, the default behavior is overridden and the device does NOT accept new Bluetooth Pairings.

- When the value ***On*** is chosen, the default behavior is in effect and the device accepts new Bluetooth Pairings. 

### Bluetooth Configuration - Turn On/Off Silent Pairing

This Managed Configuration allows an Administrator using an EMM to configure whether the device can silently perform Bluetooth pairings

Zebra Android devices performs Bluetooth Pairings silently by default.

The value of this Managed Configuration can change this default behavior:

- When the value ***Off*** is chosen, the default behavior is overridden and the device can not silently perform Bluetooth Pairings.

- When the value ***On*** is chosen, the default behavior is in effect and the device can silently perform Bluetooth Pairings.

Note that even when the device CAN silently perform Bluetooth Pairings, it DOES NOT do so unless the Managed Configuration **Bluetooth Configuration - Action** is used to configure specific silent pairing that should occur.


### Bluetooth Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to manage a list of rules that control Bluetooth *Auto-Pairing*.

Bluetooth *Auto-Pairing* allows new Bluetooth Pairings to be automatically completed without Device User interaction, if permitted by defined rules.
Since the list of rules is empty by default on Zebra Android devices, Bluetooth *Auto-Pairing* is disabled by default, and Device User interaction is required to complete any new Bluetooth Pairings.

The value of this Managed Configuration specifies an Action value of ***Add*** or ***Remove***, thus allowing the list of rules to be managed.
Depending on the Action value chosen, one of the following Managed Configurations must also be specified:

- When the Action value ***Add*** is chosen:

    - The Managed Configuration **Bluetooth Configuration - Action Add Rule Name** MUST be used to specify the name of the new rule to be added.

    - At least ONE of the Managed Configurations **Bluetooth Configuration - Action Add Rule Device Class** or **Bluetooth Configuration - Action Add Rule Device Upper Address Part** MUST be used to specify the criteria that the new rule uses to determine which new Bluetooth Pairings is allowed.

- When the Action value ***Remove*** is chosen, at least ONE of the Managed Configurations **Bluetooth Configuration - Action Remove Rule Name**, **Bluetooth Configuration - Action Remove Rule Device Class**, or **Bluetooth Configuration - Action Remove Rule Device Upper Address Part** MUST be used to specify the information that is used to determine which rule or rules, which have matching information, is removed. 

### Bluetooth Configuration - Action Add Rule Name

This Managed Configuration allows an Administrator using an EMM to specify a name for a new rule to be added to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**. 

### Bluetooth Configuration - Action Add Rule Device Class

This Managed Configuration allows an Administrator using an EMM to specify the *Device Class* for a new rule to be added to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

When a *Device Class* is specified for a rule, Bluetooth *Auto-Pairing* automatically completes new Bluetooth Pairings for Bluetooth devices that have the specified *Device Class*. 

### Bluetooth Configuration - Action Add Rule Device Upper Address Part

This Managed Configuration allows an Administrator using an EMM to specify the *Device Upper Address Part* for a new rule to be added to the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Add*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

When a *Device Upper Address Part* is specified for a rule, Bluetooth *Auto-Pairing* automatically completes new Bluetooth Pairings for Bluetooth devices that have the specified *Device Upper Address Part* in the upper part of their *Bluetooth Address*. 

### Bluetooth Configuration - Action Remove Rule Name

This Managed Configuration allows an Administrator using an EMM to specify the name of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule that has the specified name is removed. 

### Bluetooth Configuration - Action Remove Rule Device Class

This Managed Configuration allows an Administrator using an EMM to specify the *Device Class* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule or rules that have the specified *Device Class* is removed. 

### Bluetooth Configuration - Action Remove Rule Device Upper Address Part

This Managed Configuration allows an Administrator using an EMM to specify the *Device Upper Address Part* of an existing rule to be removed from the list of rules that control the operation of Bluetooth *Auto-Pairing* and should be specified if and only if the Action value ***Remove*** is chosen for the Managed Configuration **Bluetooth Configuration - Action**.

Any existing rule or rules that have the specified *Device Upper Address Part* is removed. 

## Bug Reporting Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Bug Reporting on a Zebra Android device. 

### Bug Reporting Configuration - Extensions State

This Managed Configuration allows an Administrator using an EMM to configure whether the Standard Android or Zebra Extended Bug Reporting should be used for generation of Bug Reports from a Zebra Android device.

- When the value ***Off*** is chosen, Standard Android Bug Reporting is used, with no Zebra Extensions or Enhancements.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting. Additional Managed Configurations would then be used, if needed, to configure the desired behavior and options of Zebra Extended Bug Reporting. 

### Bug Reporting Configuration - Intent Enable

This Managed Configuration allows an Administrator using an EMM to configure whether the Zebra Extended Bug Reporting should allow a Bug Report to be initiated by an application by sending a broadcast intent with an action value of *com.symbol.mxmf.intent.START_FOR_BUG_REPORT*. This is meaningful only when Zebra Extended Bug Reporting is enabled.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting, if enabled, does NOT initiate a Bug Report when the defined intent is received.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting, if enabled, initiates a Bug Report when the defined intent is received. 

### Bug Reporting Configuration - Screenshot Enable

This Managed Configuration allows an Administrator using an EMM to configure whether the Zebra Extended Bug Reporting should be allowed to capture screenshots and attach them to Bug Reports.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting, if enabled, does NOT capture Bug Reports nor attach them to Bug Reports.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting, if enabled, captures Bug Reports and attaches them to Bug Reports. 


### Bug Reporting Configuration - Show In Power Key Menu

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should display an option to initiate a Bug Report in the menu which appears after long-pressing the power key on the device.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting does NOT add an option to the menu.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting adds an option to the menu. 

### Bug Reporting Configuration - ANR Error Action

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Application Not Responding (ANR) errors and take action when they are detected.

- When the value ***Do not capture*** is chosen, Zebra Extended Bug Reporting does NOT watch for the occurrence of ANR errors and takes no action if they occur.

- When the value ***Capture bug report*** is chosen, Zebra Extended Bug Reporting watches for the occurrence of ANR errors, and automatically initiates a Bug Report each time it detects that one has occurred.

- When the value ***Capture logcat log*** is chosen, Zebra Extended Bug Reporting watches for the occurrence of ANR errors, an automatically initiates a Logcat capture each time it detects that one has occurred.


### Bug Reporting Configuration - Unexpected Error Action

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should watch for the occurrence of Unexpected Application Errors (UAEs) and take action when they are detected.

- When the value ***Do not capture*** is chosen, Zebra Extended Bug Reporting does NOT watch for the occurrence of UAEs and takes no action if they occur.

- When the value ***Capture bug report*** is chosen, Zebra Extended Bug Reporting watches for the occurrence of UAEs, and automatically initiates a Bug Report each time it detects that one has occurred.

- When the value ***Capture logcat log*** is chosen, Zebra Extended Bug Reporting watches for the occurrence of UAEs, and automatically initiates a Logcat capture each time it detects that one has occurred. 

### Bug Reporting Configuration - Send to Cloud Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is sent to the Zebra Cloud Server.


#### Bug Reporting Configuration - Send to Cloud Detail State

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports to the Zebra Cloud Server.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting does NOT send copies of generated Bug Reports to the Zebra Cloud Server.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting (if enabled) sends copies of all generated Bug Reports to the Zebra Cloud Server. 

#### Bug Reporting Configuration - Cloud Time to Live

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which causes the sending of Bug Reports to the Zebra Cloud Server to automatically cease.

- When the value ***Never*** is chosen, when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send to Cloud Detail**, Bug Reports continues to be sent to the Zebra Cloud Server until the configuration is explicitly changed again.

- When any other value is chosen, at the time it is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send to Cloud Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases sending Bug Reports to the Zebra Cloud Server until the configuration is explicitly changed again. 

### Bug Reporting Configuration - Store in Device Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is stored in the Zebra device and, if so, where in the device they is stored. 

#### Bug Reporting Configuration - Store In Device Detail State

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting does NOT store copies of generated Bug Reports in the device.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting (if enabled) stores copies of generated Bug Reports in the device. 

#### Bug Reporting Configuration - Store in Device Detail File Path

This Managed Configuration allows an Administrator using an EMM to configure the path where the device Zebra Extended Bug Reporting should automatically store copies of generated Bug Reports in the device, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Store In Device Detail State**.

Note that either fixed or removable storage are supported, but the specified path must be valid at the time Bug Report is generated. If no path is specified, bug reports are stored in /storage/sdcard0/BugReports/, always a valid path for storage of Bug Reports on all Zebra Android devices. 

#### Bug Reporting Configuration - Storage Time to Live

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which causes the storing of Bug Reports in the device to automatically cease.

- When the value ***Never*** is chosen, when Zebra Extended Bug Reporting is configured to store Bug Reports in the device, using Managed Configurations in the group **Bug Reporting Configuration - Store in Device Detail**, Bug Reports continues to be stored in the device until the configuration is explicitly changed again.

- When any other value is chosen, at the time it is configured to store Bug Reports in the device, using Managed Configurations in the group **Bug Reporting Configuration - Store in Device Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases storing Bug Reports in the device until the configuration is explicitly changed again. 

### Bug Reporting Configuration - Send Via Email Detail

This Managed Configuration group allows an Administrator using an EMM to configure whether copies of generated Bug Reports is automatically emailed and, if so, the details of the email that should be sent. 

#### Bug Reporting Configuration - Send Via Email Detail State

This Managed Configuration allows an Administrator using an EMM to configure whether Zebra Extended Bug Reporting should automatically send copies of generated Bug Reports through email.

- When the value ***Off*** is chosen, Zebra Extended Bug Reporting does NOT send copies of generated Bug Reports through email.

- When the value ***On*** is chosen, Zebra Extended Bug Reporting (if enabled) sends copies of generated Bug Reports through email. Additional Managed Configurations within the same group must then be specified to configure the details of the email to be sent. 

#### Bug Reporting Configuration - Send Via Email Detail SMTP Host

This Managed Configuration allows an Administrator using an EMM to configure the address or host name of the SMTP (email) Server through which emails is sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**.

Note that the Administrator must have access to an email account on the selected SMTP Server and must specify details of that account through additional Managed Configurations within the same group to enable Zebra Extended Bug Reporting to send emails through that SMTP Server. In addition, the Administrator must have access to a valid email account to use as the destination of the emails, which is NOT required to be on the same SMTP Server, and must specify details of the email address of that account through an additional Managed Configuration within the same group, to enable Zebra Extended Bug Reporting to send the emails to that destination.


#### Bug Reporting Configuration - Send Via Email Detail SMTP Port

This Managed Configuration allows an Administrator using an EMM to configure the TCP port number of the SMTP (email) Server through which emails is sent to deliver generated Bug Reports, and should be specified if only if the Managed Configuration **Bug Reporting Configuration - Send Via Email Detail SMTP Host** is specified. 

#### Bug Reporting Configuration - Send Via Email Detail Sender ID

This Managed Configuration allows an Administrator using an EMM to configure the ID of the email account that is used as the source (from address) of emails that is sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State** and a valid SMTP (email) Server is specified through the Managed Configuration **Bug Reporting Configuration - Send Via Email SMTP Host**

Note that the Administrator must have access to a valid email account on the configured SMTP (email) Server and must specify additional information through other Managed Configurations within the same group, such as **Bug Reporting Configuration - Send Via Email Detail Sender Password** to enable Zebra Extended Bug Reporting to successfully send the emails using that account through that server. 

#### Bug Reporting Configuration - Send Via Email Detail Sender Password

This Managed Configuration allows an Administrator using an EMM to configure the password of the email account that is used as the source (from address) of emails that is sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**, and a valid SMTP (email) Server is specified using the Managed Configuration **Bug Reporting Configuration - Send Via Email SMTP Host**, and a valid email address is specified using the Managed Configuration **Bug Reporting Configuration - Send Via Email Sender ID**.
 

#### Bug Reporting Configuration - Send Via Email Detail Send To Address

This Managed Configuration allows an Administrator using an EMM to configure the email address of the email account that is used as the destination (to address) of emails that is sent to deliver generated Bug Reports, and should be specified only if the value ***On*** is chosen for Managed Configuration **Bug Reporting Configuration - Send Via Email Detail State**. 

#### Bug Reporting Configuration - Email Time to Live

This Managed Configuration allows an Administrator using an EMM to configure a timeout value, the expiration of which causes the sending of Bug Reports through email to automatically cease.

- When the value ***Never*** is chosen, when Zebra Extended Bug Reporting is configured to send Bug Reports to the Zebra Cloud Server, using Managed Configurations in the group **Bug Reporting Configuration - Send Via Email Detail**, Bug Reports continues to be sent through email until the configuration is explicitly changed again.

- When any other value is chosen, at the time it is configured to send Bug Reports through email, using Managed Configurations in the group **Bug Reporting Configuration - Send Via Email Detail**, Zebra Extended Bug Reporting starts a timer from the specified timeout value. When the timer expires, Zebra Extended Bug Reporting ceases sending Bug Reports through email until the configuration is explicitly changed again. 

### Bug Reporting Configuration - Dialog Elements

This Managed Configuration array allows an Administrator using an EMM to customize the dialog that is presented to the Device User to collect information that is included in generated Bug Reports. 

#### Bug Reporting Configuration - Dialog Element Detail

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single dialog element to be included in the dialog that is presented to the Device User to collect information that is included in generated Bug Reports. 

##### Bug Reporting Configuration - Dialog Element Detail Type

This Managed Configuration allows an Administrator using an EMM to specify the type of a single dialog element being included in the dialog that is presented to the Device User to collect information that is included in generated Bug Reports.

Depending on the Type value chosen, one or more additional Managed Configurations might also need to be specified:

- When the Action value ***ErrorNameTextBox*** is chosen, a text box is added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Error Name Text Box Text** must also be specified to provide a text to be pre-populated into the text box.

- When the Action value ***Label*** is chosen, a text label is added to the dialog presented to the Device User. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Label Text** must also be specified to provide the text to be populated into the label.

- When the Action value ***TextBox*** is chosen, a text box is added to the dialog presented to the Device User in which generic text can be entered. The additional Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type Text Box Text** must also be specified to provide the text to be pre-populated into the text box. The specified text provides guidance to the Device User about the expected value and disappears when the user begins typing into the text box.

- When the Action value ***VoiceRecordButton*** is chosen, a voice record button is added to the dialog presented to the Device User. Clicking this button allows the Device User to record a verbal explanation of the bug to be attached to the generated Bug Report. No additional Managed Configurations are required.



##### Bug Reporting Configuration - Dialog Element Detail Type Error Name Text Box Text

This Managed Configuration allows an Administrator using an EMM to specify the text to be pre-populated into a text box that is added to the dialog presented to the Device User in which the name to be assigned to the Bug Report being generated can be entered and should be specified if and only if the value ***Error Name Text Box*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. 

##### Bug Reporting Configuration - Dialog Element Detail Type Label Text

This Managed Configuration allows an Administrator using an EMM to specify the text of a label that is added to the dialog presented to the Device User and should be specified if and only if the value ***Label*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. 

##### Bug Reporting Configuration - Dialog Element Detail Type Text Box Text

This Managed Configuration allows an Administrator using an EMM to specify the text that be pre-populated into a text box added to the dialog presented to the Device User into which generic text can be entered and should be specified if and only if the value ***TextBox*** is chosen for Managed Configuration **Bug Reporting Configuration - Dialog Element Detail Type**. The specified text provides guidance to the Device User about the expected value and disappears when the user begins typing into the text box. 

### Bug Reporting Configuration - Dialog Time Out

This Managed Configuration allows an Administrator using an EMM to specify the amount of inactivity time (time in milliseconds with no Device User activity), after which the dialog presented to the Device User is automatically dismissed, causing the Bug Report to be completed as if the Device User had explicitly clicked the "Submit" button.


## Camera Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which camera(s) or other image capture devices are allowed to be used to take pictures on a Zebra Android device. 

### Camera Configuration - Use Of Back Camera

This Managed Configuration allows an Administrator using an EMM to configure whether the Rear Facing Camera, if present on a Zebra Android device, can be used to take pictures.

- When the value ***Off*** is chosen, no applications or services running on the device is allowed to take pictures using the Rear Facing Camera.

- When the value ***On*** is chosen, any applications or services running on the device is allowed to take pictures using the Rear Facing Camera. 

### Camera Configuration - Use Of Front Camera

This Managed Configuration allows an Administrator using an EMM to configure whether the Front Facing (selfie) Camera, if present on a Zebra Android device, can be used to take pictures.

- When the value ***Off*** is chosen, no applications or services running on the device is allowed to take pictures using the Front Facing (selfie) Camera.

- When the value ***On*** is chosen, any applications or services running on the device is allowed to take pictures using the Front Facing (selfie) Camera. 

### Camera Configuration - Use Of Imager

This Managed Configuration allows an Administrator using an EMM to configure whether the Imager (special-purpose image capture device), if present on a Zebra Android device, can be used to take pictures.

- When the value ***Off*** is chosen, no applications or services running on the device is allowed to take pictures using the Imager (special-purpose image capture device) Camera.

- When the value ***On*** is chosen, any applications or services running on the device is allowed to take pictures using the Imager (special-purpose image capture device) Camera. 

## Clock Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation and state of the clock on a Zebra Android device. 

### Clock Configuration - Time Mode

This Managed Configuration allows an Administrator using an EMM to choose whether time and date configuration is performed manually, using other Managed Configurations in this group, or automatically, by connecting to a NTP (Network Time Protocol) server. 

### Clock Configuration - Manual Date

This Managed Configuration allows an Administrator using an EMM to manually configure the date on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Clock Configuration - Manual Time

This Managed Configuration allows an Administrator using an EMM to manually configure the time on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Clock Configuration - Auto NTP Server Address

This Managed Configuration allows an Administrator using an EMM to configure the address of the NTP (Network Time Protocol) server to be used to perform automatic data and time configuration on a Zebra Android device and should be specified if and only if the value ***Automatic*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Clock Configuration - Auto NTP Sync Interval

This Managed Configuration allows an Administrator using an EMM to configure the interval at which automatic date and time configuration is performed on a Zebra Android device and should be specified if and only if the value ***Automatic*** is chosen for the Managed Configuration **Clock Configuration - Time Mode**. 

### Clock Configuration - Time Zone Mode

This Managed Configuration allows an Administrator using an EMM to choose whether time zone configuration is performed manually, using another Managed Configuration in this group, or automatically, by connecting to a NITZ (Network Identity and Time Zone) source. 

### Clock Configuration - Manual Time Zone

This Managed Configuration allows an Administrator using an EMM to manually configure the time zone on a Zebra Android device and should be specified if and only if the value ***Manual*** is chosen for the Managed Configuration **Clock Configuration - Time Zone Mode**. 

### Clock Configuration - Time Format

This Managed Configuration allows an Administrator using an EMM to choose whether the format in which time is displayed on the device is in ***12*** hour (AM/PM) or ***24*** hour (military) format. 

## DHCP Option Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Dynamic Host Configuration Protocol (DHCP) Client on a Zebra Android device.

The DHCP Client on the device sends a DHCP Request to a DHCP Server and receives back a DHCP Acknowledgment. A DHCP Request sent by a device can contain information about the device or the DHCP Client, and can contain requests for additional information from the DHCP Server. A DHCP Acknowledgment sent by the DHCP Server contains the IP Address assigned to the device by the DHCP Server along with other related information and any additional information requested by the device in the DHCP Request.

DHCP Options are variable-length strings that are identified by DHCP Options Numbers that can be included in a DHCP Request or a DHCP Acknowledgment to convey information between a DHCP Client and a DHCP Server. From the point of view of the device where the DHCP Client is running, a DHCP Option can allow the DHCP Client to *Send* information to the DHCP Server or can allow the DHCP Client to *Request* the DHCP Server to return information to the DHCP Client. 

### DHCP Configuration - Request Boot File Name (Option 67)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Boot File Name* and return it using *DHCP Option 67* along with the IP Address. 

### DHCP Configuration - Request Broadcast Address (Option 28)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Broadcast Address* and return it using *DHCP Option 28* along with the IP Address. 

### DHCP Configuration - Request NTP Server (Option 42)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *NTP Server* and return it using *DHCP Option 42* along with the IP Address. 

### DHCP Configuration - Request TFTP Server Address (Option 66)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Address* and return it using *DHCP Option 66* along with the IP Address. 

### DHCP Configuration - Request Vendor Encapsulated Options (Option 43)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Vendor Encapsulated Options* and return whatever is acquired using *DHCP Option 43* along with the IP Address. 

### DHCP Configuration - Request Domain Search List (Option 119)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Domain Search List* and return it using *DHCP Option 119* along with the IP Address. 

### DHCP Configuration - Request TFTP Server Names (Option 150)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *TFTP Server Name(s)* and return it using *DHCP Option 150* along with the IP Address. 

### DHCP Configuration - Request Vendor Specific Option#1 (Option 186)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *First Vendor Specific Option* and return it using *DHCP Option 186* along with the IP Address. 

### DHCP Configuration - Request Vendor Specific Option#2 (Option 188)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Second Vendor Specific Option* and return it using *DHCP Option 188* along with the IP Address. 

### DHCP Configuration - Request Vendor Specific Option#3 (Option 230)

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire the *Third Vendor Specific Option* and return it using *DHCP Option 230* along with the IP Address. 

### DHCP Configuration - Send Client Identifier State (Option 61)

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device sends a *Client Identifier* to the DHCP Server using *DHCP Option 61* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the value ***Off*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the value ***On*** is chosen, the additional Managed Configuration **DHCP Configuration - Send Option 61 Client Identifier Value** MUST be specified to provide the value of the *Client Identifier* to be sent.


### DHCP Configuration - Send Client Identifier Value (Option 61)

This Managed Configuration allows an Administrator using an EMM to specify the *Client Identifier* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified if and only the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 61 Client Identifier State**. 

### DHCP Configuration - Send Host Name State (Option 12)

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device sends a *Host Name* to the DHCP Server using *DHCP Option 12* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the value ***Off*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the value ***On*** is chosen, the additional Managed Configuration **DHCP Configuration - Send Option 12 Host Name Value** MUST be specified to provide the value of the *Host Name* to be sent.


### DHCP Configuration - Send Host Name Value (Option 12)

This Managed Configuration allows an Administrator using an EMM to specify the *Host Name* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 12* when requesting an IP Address and should be specified only the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 12 Host Name State**. 

### DHCP Configuration - Send User Class State (Option 77)

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device sends a *User Class* to the DHCP Server using *DHCP Option 77* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the value ***Off*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the value ***On*** is chosen, the additional Managed Configuration **DHCP Configuration - Send Option 77 User Class Value** MUST be specified to provide the value of the *User Class* to be sent. 

### DHCP Configuration - Send User Class Value (Option 77)

This Managed Configuration allows an Administrator using an EMM to specify the *User Class* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 77* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 77 User Class State**. 

### DHCP Configuration - Send Vendor Class State (Option 60)

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device sends a *Vendor Class* to the DHCP Server using *DHCP Option 60* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the value ***Off*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the value ***On*** is chosen, the additional Managed Configuration **DHCP Configuration - Send Option 60 Vendor Class Value** MUST be specified to provide the value of the *Vendor Class* to be sent. 

### DHCP Configuration - Send Vendor Class Value (Option 60)

This Managed Configuration allows an Administrator using an EMM to specify the *Vendor Class* that the DHCP Client on a Zebra Android device sends to the DHCP Server using *DHCP Option 60* when requesting an IP Address and should be specified only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Option 60 Vendor Class State**. 

### DHCP Configuration - Send FQDN State (Option 81)

This Managed Configuration allows an Administrator using an EMM to configure whether the DHCP Client on a Zebra Android device sends a *Fully Qualified Domain Name (FQDN)* to the DHCP Server using *DHCP Option 81* when requesting an IP Address.

Depending on the value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the value ***Off*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the value ***On*** is chosen, the additional Managed Configurations **DHCP Configuration - Send FQDN Value (Option 81)** and **DHCP Configuration - Send FQDN Flag (Option 81)** MUST be specified to provide the value of the *FQDN value* and the associated flags to be sent. 

### DHCP Configuration - Send FQDN Value (Option 81)

This Managed Configuration allows an Administrator using an EMM to specify the *Fully Qualified Domain Name (FQDN)* that is sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified if and only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Vendor Class Value (Option 60)**. The additional Managed Configuration **DHCP Configuration - Send FQDN Flag (Option 81)** MUST also be specified to provide the flags to be sent along with the *FQDN value*. 

### DHCP Configuration - Send FQDN Flag (Option 81)

This Managed Configuration allows an Administrator using an EMM to specify the flags to be sent along with the *Fully Qualified Domain Name (FQDN)* that is sent to the DHCP Server using *DHCP Option 81* when requesting an IP Address and should be specified if and only if the value ***On*** is chosen for the Managed Configuration **DHCP Configuration - Send Vendor Class Value (Option 60)** and should be specified if and only if the value Managed Configuration **DHCP Configuration - Send FQDN Value (Option 81)** is specified. 

### DHCP Configuration - Request Custom Option Number

This Managed Configuration allows an Administrator using an EMM to provide the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should request from DHCP Server and return along with the IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Request Custom Option State**. 

### DHCP Configuration - Request Custom Option State

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server acquire a custom DHCP option and return it along with the IP Address.

- If the value ***Off*** is chosen, no custom DHCP Option is requested and no additional Managed Configuration should be specified.

- If the value ***On*** is chosen, a custom DHCP Option is requested and the additional Managed Configuration **DHCP Configuration - Request Custom Option Number** MUST be specified to provide the custom option number to be requested.




### DHCP Configuration - Send Custom Option Number

This Managed Configuration allows an Administrator using an EMM to provide a the option number of a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Send Custom Option State**. 

### DHCP Configuration - Send Custom Option State

This Managed Configuration allows an Administrator using an EMM to configure the DHCP Client on a Zebra Android device to request that the DHCP Server send a custom DHCP option when requesting an IP Address.

- If the value ***Off*** is chosen, no custom DHCP Option is sent and no additional Managed Configurations should be specified.

- If the value ***On*** is chosen, a custom DHCP Option is sent and the additional Managed Configuration **DHCP Configuration - Send Custom Option Number** MUST be specified to provide the custom option number to be sent and the additional Managed Configuration **DHCP Configuration - Send Custom Option Value** MUST be specified to provide the custom option value to be sent. 

### DHCP Configuration - Send Custom Option Value

This Managed Configuration allows an Administrator using an EMM to provide the option value for a custom DHCP Option that the DHCP Client on a Zebra Android device should send when requesting an IP Address and should be specified if and only if the value ***On*** is specified for the Managed Configuration **DHCP Configuration - Send Custom Option State** and if the Managed Configuration **DHCP Configuration - Send Custom Option Number** is specified. 

## Device Administration Configuration

This Managed Configuration group allows an Administrator using an EMM to:

- Control which applications and services are allowed to submit XML for processing by the Zebra MX Management System on a Zebra Android device

- Submit XML for processing by the Zebra MX Management System 

### Device Administration Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control access to or utilize the .Zebra MX Management System on a Zebra Android device.

The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the Action value ***AllowSubmitXml*** is chosen, a single application or service is allowed to submit XML for processing by the Zebra MX Management System. The additional Managed Configuration **Device Administration Configuration - Action Allow Submit XML Package Name** must be specified to supply the Android Package Name that identifies the application or service is to be allowed.

- When the Action value ***DisallowSubmitXml*** is chosen, a single application service is disallowed from submitting XML for processing by the Zebra MX Management System. The additional Managed Configuration **Device Administration Configuration - Action Disallow Submit XML Package Name** must be specified to supply the Android Package Name that identifies the application or service is to be disallowed.

- When the Action value ***SubmitXml*** is chosen, the additional Managed Configuration **Device Administration Configuration - Action Action Submit XML** must be specified to supply the XML string that is submitted for processing by the .Zebra MX Management System.


### Device Administration Configuration - Action Allow Submit XML Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name that identifies the application or service is to be allowed and should be specified if and only if the value ***AllowSubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

### Device Administration Configuration - Action Disallow Submit XML Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name that identifies the application or service is to be disallowed and should be specified if and only if the value ***DisallowSubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

### Device Administration Configuration - Action Submit XML

This Managed Configuration allows an Administrator using an EMM to specify an XML string to be submitted for processing by the .Zebra MX Management System, and should be specified if an only if the value ***SubmitXml*** is chosen for the Managed Configuration **Device Administration Configuration - Action**. 

## Device Central Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Device Central behavior on a Zebra Android device. 

### Device Central Configuration - Bluetooth On/Off Control

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to use the Device Central UI to control Bluetooth Power.

- If the value ***Disallow*** is chosen, Device Central does NOT provide a UI that allows the Device User to control the Bluetooth power state.

- If the value ***Allow*** is chosen, Device Central provides a UI that allows the Device User to control the Bluetooth power state.


### Device Central Configuration - Bluetooth Pairing Control

This Managed Configuration allows an Administrator using an EMM to configure whether Device Central system should allow multiple pairings to the same Device Class.

- If the value ***Single Pairing Per Device Class*** is chosen, Device Central system allows only one pairing at a time for each Bluetooth Device Class (e.g. one headset and one printer).

- If the value ***Multiple Pairings Per Device Class*** is chosen, Device Central system allows multiple pairings at a time for each Bluetooth Device Class (e.g. multiple headsets and/or multiple printers). 

### Device Central Configuration - Firmware Update Button

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to use the Device Central UI to initiate a Firmware Update.

- If the value ***Disallow*** is chosen, Device Central does NOT provide UI that allows the Device User to initiate a Firmware Update.

- If the value ***Allow*** is chosen, Device Central provides a UI that allows the Device User to initiate a Firmware Update. 

## Display Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Display Screen settings on a Zebra Android device.


### Display Configuration - Timeout

This Managed Configuration allows an Administrator using an EMM to configure the amount of inactivity, in seconds, after which the device display screen is turned off.

A given device might not support all options allowed to be specified using this Managed Configuration. In the event that the value specified is not supported on a given device, the smallest larger value that is supported is used. If no larger value is supported, the largest smaller supported value is used.


### Display Configuration - Blanking Mode

This Managed Configuration allows an Administrator using an EMM to configure the Dislplay Blanking Mode, which determines whether the Display automatically Blanks (displays nothing).

- When a value of ***Never Blank*** is chosen, the Display is never automatically Blanked.

- When a value of ***Blank When Triggered by Signal*** is chosen, the Display is automatically Blanked and the following Managed Configurations must be used:

    - **Display Configuration - Blanking Signal** - to specify the signal that is used to activate automatic Blanking

    - **Display Configuration - Blanking Signal Polarity** - to specify the polarity of the signal specified by the Managed Configuration **Display Configuration - Blanking Signal** that is used to activate automatic Blanking

    - **Display Configuration - Blanking Signal Debounce Delay** - to specify the time that is used to debounce the signal specified by the Managed Configuration **Display Configuration - Blanking Signal** before using it to activate automatic Blanking


### Display Configuration - Stay Awake

This Managed Configuration allows an Administrator using an EMM to configure whether the Display stays awake (prevent automatic time out and turn off) when the device is connected to external power.

- When a value of ***Off*** is chosen, the Display does NOT stay awake and the Display automatically turns off even when the device is connected to external power.

- When a value of ***On*** is chosen, the Display stays awake and does not automatically time out and turn off when the device is connected to external power.



### Display Configuration - Blanking Mode Signal

This Managed Configuration allows an Administrator using an EMM to select the Signal that is used to trigger automatic Display Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

### Display Configuration - Blanking Mode Signal Polarity

This Managed Configuration allows an Administrator using an EMM to select the Polarity of the Signal that is used to trigger automatic Dislplay Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

### Display Configuration - Blanking Mode Signal Debounce Delay

This Managed Configuration allows an Administrator using an EMM to select the Debounce Delay that is used for the Signal that is used to trigger automatic Dislplay Blanking and should be specified if and only if the value ***Blank When Triggered by Signal*** is chosen for the Managed Configuration **Display Configuration - Blanking Mode**. 

## Enterprise Keyboard Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the Analytics Client in a Zebra Android device. 

### Enterprise Keyboard Configuration - Auto Capitalization

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has automatic capitalization turned on (enabled) or turned off (disabled) for the first letter of each sentence.

- When a value of ***Off*** is chosen, automatic capitalization is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, automatic capitalization is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Auto Correction

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has automatic correction of misspelled words turned on (enabled) or turned off (disabled), wherein the space and punctuation keys initiate automatic correction of misspelled words.

- When a value of ***Off*** is chosen, automatic correction of misspelled words is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, automatic correction of misspelled words is turned on (enabled) is available for use when entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Block Offensive Words

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has automatic blocking of offensive words turned on (enabled) or turned off (disabled).

- When a value of ***Off*** is chosen, automatic offensive word blocking is turned off (disabled).

- When a value of ***On*** is chosen, automatic offensive word blocking is turned on (enabled).



### Enterprise Keyboard Configuration - Double Space Period

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has automatic sentence ending turned on (enabled) or turned off (disabled), causing a double-tap on the space key to cause the entry of a period followed by two spaces.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Flick for Alternate Chars

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device shows alternate characters when a flick gesture is performed.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Key Long Press Delay

This Managed Configuration allows an Administrator using an EMM to configure the length of time (in milliseconds) that a key within the Enterprise Keyboard on a Zebra Android device need to be held pressed to be detected as a long press.


### Enterprise Keyboard Configuration - Navigation Mode

This Managed Configuration allows an Administrator using an EMM to configure the navigation mode used by the Enterprise Keyboard on a Zebra Android device to provide its user experience.

- When a value of ***Tab-based (new)*** is chosen, the Zebra Enterprise Keyboard uses the new user experience wherein different tabs are used to select the desired keyboard.

- When a value of ***Key-based (legacy)*** is chosen, Enterprise Keyboard uses keys to select the desired keyboard layout.



### Enterprise Keyboard Configuration - Numeric Layout Mode

This Managed Configuration allows an Administrator using an EMM to configure the numeric layout mode of the Enterprise Keyboard on a Zebra Android device used when it determines that a numeric keyboard should be displayed.

- When a value of ***Telephone Mode*** is chosen, Enterprise Keyboard displays a numeric keyboard in telephone mode (e.g. 123, 456, 789).

- When a value of ***Calculator Mode*** is chosen, Enterprise Keyboard displays a numeric keyboard in calculator mode (e.g. 789, 456, 123).



### Enterprise Keyboard Configuration - Show Alphanumeric Tab

This Managed Configuration allows an Administrator using an EMM to configure whether the Zebra Enterprise Keyboard on a Zebra Android device shows the alphanumeric tab to allow selection of the alphanumeric keyboard.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not available for entering data using Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using Enterprise Keyboard.



### Enterprise Keyboard Configuration - Show Numeric Tab

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device shows the numeric tab to allow selection of the numeric keyboard.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Show Scan Tab

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device shows the scan tab to allow control of barcode scanning.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not be available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Show Symbol Tab

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device shows the symbol tab to allow selection of the special symbols keyboard.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Show Voice Input Key

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device shows a key to invoke voice input (if supported).

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Preferred Tab

This Managed Configuration allows an Administrator using an EMM to configure the preferred tab selects by default by Enterprise Keyboard on a Zebra Android device when textual data is being entered.

- If the value ***Numeric*** is chosen, Enterprise Keyboard selects the Numeric tab by default when textual data is being entered.

- If the value ***Alphanumeric*** is chosen, Enterprise Keyboard shows the Alphanumeric tab by default when textual data is being entered.

- If the value ***Symbol*** is chosen, Enterprise Keyboard shows the Symbol tab by default when textual data is being entered.

- If the value ***Scan*** is chosen, Enterprise Keyboard shows the Scan tab by default when textual data is being entered.




### Enterprise Keyboard Configuration - Suggest Contact Names

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device showing contact name suggestions while typing based on past actions is turned on (enabled) or turned off (disabled).

- When a value of ***Off*** is chosen, contact name suggestions is turned off (disabled) and is not available for entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, contact name suggestions is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Suggest Misspelling Corrections

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device showing suggestions for corrections of misspelled words while typing is turned on (enabled) or turned off (disabled).

- When a value of ***Off*** is chosen, correction suggestions is turned off (disabled) and is not available for use in entering data using the Enterprise Keyboard.

- When a value of ***On*** is chosen, correction suggestions is turned on (enabled) and is available for entering data using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Pop-up on Keypress

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has key pop-up on each keypress turned on (enabled) or turned off (disabled) wherein a visible indication that the key was pressed occurs.

- When a value of ***Off*** is chosen, this feature is turned off (disabled), preventing Enterprise Keyboard from showing key pop-ups.

- When a value of ***On*** is chosen, this feature is turned on (enabled), allowing Enterprise Keyboard to show key pop-ups in each keypress. 



### Enterprise Keyboard Configuration - Sound on Keypress

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has sound on each keypress turned on (enabled) or turned off (disabled) wherein an audible indication that the key was pressed occurs.

- When a value of ***Off*** is chosen, this feature is turned off (disabled), preventing Enterprise Keyboard from playing a sound on each keypress.

- When a value of ***On*** is chosen, this feature is turned on (enabled), enabling Enterprise Keyboard to play a sound on each keypress.



### Enterprise Keyboard Configuration - Sound on Keypress Volume Mode

This Managed Configuration allows an Administrator using an EMM to configure the volume mode used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress.

- When a value of ***System Default Volume*** is chosen, the System Default Volume for keypress sounds is used.

- When a value of ***Specified Volume*** is chosen, a specified volume is used and the Managed Configuration **ekbSoundOnKeypressVolume** MUST also be specified to supply that volume.



### Enterprise Keyboard Configuration - Sound on Keypress Volume

This Managed Configuration allows an Administrator using an EMM to configure the volume (from 0 to 100) used by the Enterprise Keyboard on a Zebra Android device when sound occurs on each keypress. This should be specified only if the value ***On*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Sound on Keypress** and the value ***System Default Volume*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Sound on Keypress Volume Mode**.


### Enterprise Keyboard Configuration - Vibrate on Keypress

This Managed Configuration allows an Administrator using an EMM to configure whether the Enterprise Keyboard on a Zebra Android device has vibration on each keypress turned on (enabled) or turned off (disabled) wherein a tactile indication that the key was pressed occurs.

- When a value of ***Off*** is chosen, this feature is turned off (disabled) and keypresses do not cause vibration when using the Enterprise Keyboard.

- When a value of ***On*** is chosen, this feature is turned on (enabled) and keypresses cause vibration when using the Enterprise Keyboard.



### Enterprise Keyboard Configuration - Vibrate on Keypress Duration Mode

This Managed Configuration allows an Administrator using an EMM to configure the duration mode that is used by the Enterprise Keyboard on a Zebra Android device when vibrate occurs on each keypress.

- When a value of ***System Default Duration*** is chosen, the System Default Duration for keypress vibrate is used.

- When a value of ***Specified Duration*** is chosen, a specified duration is used and the Managed Configuration **ekbVibrarteOnKeypressDuration** MUST also be specified to supply that duration.



### Enterprise Keyboard Configuration - Vibrate on Keypress Duration

This Managed Configuration allows an Administrator using an EMM to configure the duration (from 0 to 100 milliseconds) that is used by the Enterprise Keyboard on a Zebra Android device when a vibrate occurs on each keypress, and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Vibrate on Keypress** and the value ***System Default Duration*** is specified for the Managed Configuration **Enterprise Keyboard Configuration - Vibrate on Keypress Duration Mode**.


### Enterprise Keyboard Configuration - Remap Alpha P1

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android as it pertains to the Alpha P1 Key (located on the Alpha keyboard at Row 1, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.





### Enterprise Keyboard Configuration - Remap Numeric P1

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P1 Key (located on the Numeric keyboard at Row 1, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.



### Enterprise Keyboard Configuration - Remap Numeric P2

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P2 Key (located on the Numeric keyboard at Row 2, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.





### Enterprise Keyboard Configuration - Remap Numeric P3

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P3 Key (located on the Numeric keyboard at Row 3, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.





### Enterprise Keyboard Configuration - Remap Numeric P4

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Numeric P4 Key (located on the Numeric keyboard at Row 4, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.





### Enterprise Keyboard Configuration - Remap Symbol P1

This Managed Configuration allows an Administrator using an EMM to remap the behavior the Enterprise Keyboard on a Zebra Android device as it pertains to the Symbol P1 Key (located on the Symbol keyboard at Row 4, Column 1).

Possible values can be:

- A single character value (e.g. the letter "A" or the symbol "@") causes that character value to be sent as the behavior for the remapped key.

- A hexadecimal value in the format ***uXXXXXX*** (e.g. ***u000001***) causes the specified key code to be sent as the behavior for the remapped key. [Allowable values](https://developer.android.com/reference/android/view/KeyEvent).

- The value ***EMOJI*** causes the remapped key to switch to the EMOJI keyboard.





## Ethernet Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the Ethernet adapter on a Zebra Android device. 

### Ethernet Configuration - Power

This Managed Configuration allows an Administrator using an EMM to configure the Power State of the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - Use Proxy Server

This Managed Configuration allows an Administrator using an EMM to configure whether a Proxy Server should be used to access the Internet from the network accessed through the Ethernet adapter.

When specifying that a Proxy Server is to be used, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error. 

### Ethernet Configuration - Proxy Server

This Managed Configuration allows an Administrator using an EMM to configure the Proxy Server used to access the Internet from the network accessed through the Ethernet adapter.

While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error. 

### Ethernet Configuration - Proxy Server Port

This Managed Configuration allows an Administrator using an EMM to configure the Port that is used to reach the Proxy Server to access the Internet from the network accessed through the Ethernet adapter.

While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error. 

### Ethernet Configuration - Proxy Server Bypass List

This Managed Configuration allows an Administrator using an EMM to configure the Proxy Server Bypass List which specifies addresses that should bypass the Proxy Server used to access the Internet from the network accessed through the Ethernet adapter.

While it is not mandatory, it is generally best practice to specify all three Managed Configurations **Proxy Server**, **Proxy Server Port**, and **Proxy Server Bypass List** whenever Ethernet Proxy Server configuration is performed to help ensure that all three three values are properly synchronized.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error. 

### Ethernet Configuration - IP Address Type

This Managed Configuration allows an Administrator using an EMM to configure how an IP Address is assigned to the Ethernet adapter.

- When the value ***Dynamic (DHCP)*** is chosen, an IP Address for the Ethernet adapter is automatically acquired by the DHCP Client from the DHCP Server.

- When the value ***Static (Manual)*** is chosen, an IP Address for the Ethernet adapter is assigned based on the values contained in the Managed Configurations **Ethernet Configuration - IP Address**, **Ethernet Configuration - Gateway Address**, **Ethernet Configuration - Network Mask**, **Ethernet Configuration - Primary DNS**, and **Ethernet Configuration - Secondary DNS**, which MUST also be specified to supply the required values.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - IP Address

This Managed Configuration allows an Administrator using an EMM to manually configure the IP Address to be assigned to the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - Gateway Address

This Managed Configuration allows an Administrator using an EMM to manually configure the Gateway Address to be assigned to the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - Network Mask

This Managed Configuration allows an Administrator using an EMM to manually configure the Network Mask to be assigned to the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - Primary DNS

This Managed Configuration allows an Administrator using an EMM to manually configure the Primary DNS Server Address to be assigned to the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



### Ethernet Configuration - Secondary DNS

This Managed Configuration allows an Administrator using an EMM to manually configure the Secondary DNS Server Address to be assigned to the Ethernet adapter.

A given device might or might not support an Ethernet adapter. An attempt to configure the Ethernet adapter on a device that does not have one results in an error.



## Firmware Over The Air Configuration

This Managed Configuration group allows an Administrator using an EMM to configure how Firmware Over The Air (FOTA) operations are performed and execute such operations on a Zebra Android device. 

### Firmware Over The Air Configuration - Device User Control Mode

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User should be allowed to control the Mode of the Firmware Over The Air (FOTA) Client through the in-device FOTA Client UI.


### Firmware Over The Air Configuration - Mode

This Managed Configuration allows an Administrator using an EMM to configure the mode used to perform Firmware Over The Air (FOTA) operations on a Zebra Android device.

- When the Mode value ***Manual*** is chosen, some or all of the additional Managed Configurations **Firmware Over The Air Configuration - Mode Manual Action**, **Firmware Over The Air Configuration - Mode Manual Action Enterprise Reset SUW Bypass**, **Firmware Over The Air Configuration - Mode Manual Action OS Upgrade Suppress Reboot**, **Firmware Over The Air Configuration - Mode Manual Action OS Update/Upgrade/Downgrade File**, and **Firmware Over The Air Configuration - Mode Manual Action Verify Manifest File** might need to be specified.

- When the Mode value ***Automatic*** is chosen, no additional Managed Configurations need to be specified. 

### Firmware Over The Air Configuration - Mode Manual Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to perform Firmware Over The Air (FOTA) operations on a Zebra Android device.

The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MIGHT also be required to provide additional information:

- When the Action value ***Enterprise Reset*** is chosen, the additional Managed Configuration **Firmware Over The Air Configuration - Action File - Enterprise Reset SUW Bypass** MIGHT be specified to control whether the Setup Wizard (SUW) is bypassed on GMS devices following the Enterprise Reset.

- When the Action value ***Factory Reset*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the Action value ***Full Device Wipe*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the Action value ***OS Update*** is chosen, the additional Managed Configuration **Firmware Over The Air Configuration - Action OS Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation.

Note that the Action value ***OS Update*** can be used to perform either an Upgrade or Downgrade operation on devices with Android versions older than 8.0, but can only be used to perform an Upgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade does NOT occur on devices with Android version 8.0 or later.

- When the Action value ***Verify Manifest*** is chosen, the additional Managed Configuration **Firmware Over The Air Configuration - Action Verify Manifest File** MUST be specified to provide the path and file name of the Manifest file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the verification.

- When the Action value ***OS Upgrade*** is chosen, the additional Managed Configuration **Firmware Over The Air Configuration - Action Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation. Also, the Managed Configuration **Firmware Over The Air Configuration - Action Upgrade Suppress Reboot** MIGHT be specified to determine whether a reboot should automatically be performed following an A/B upgrade.

Note that the Action value ***OS Upgrade*** can only be used to perform an Upgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do a Downgrade, the Downgrade does NOT occur.

- When the Action value ***OS Downgrade*** is chosen, the additional Managed Configuration **Firmware Over The Air Configuration - Action Update/Upgrade/Downgrade File** MUST be specified to provide the path and file name of the image file (which must already be in the device file system at the specified location and when the specified name) to be used to perform the operation.

Note that the Action value ***OS Downgrade*** can only be used to perform a Downgrade operation on devices with Android 8.0 and later. Furthermore, if the provided ZIP file attempts to do an Upgrade, the Upgrade DOES NOT occur.


### Firmware Over The Air Configuration - Mode Manual Action Enterprise Reset SUW Bypass

This Managed Configuration allows an Administrator using an EMM to specify whether the Setup Wizard (SUW) is bypassed on GMS devices when performing an Enterprise Reset, and should be specified if and only if the Action value ***Enterprise Reset*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

### Firmware Over The Air Configuration - Mode Manual Action OS Upgrade Suppress Reboot

This Managed Configuration allows an Administrator using an EMM to specify whether the automatic reboot that would normally be performed following the successful completion of an A/B Upgrade should be suppressed, and should be specified if and only if the Action value ***OS Upgrade*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. Note that if the automatic reboot is suppressed, reboot might still be required to activate the new OS following the A/B Upgrade. Performance of that reboot at a suitable time becomes the responsibility of the EMM choosing to suppress it. 

### Firmware Over The Air Configuration - Mode Manual Action OS Update/Upgrade/Downgrade File

This Managed Configuration allows an Administrator using an EMM to specify the path and file name of an OS Update or Patch image file, which must already exist at the specified location in the device file system, to be used to update a Zebra Android device and should be specified if and only if one of the Action values ***OS Update***, ***OS Upgrade***, or ***OS Downgrade*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

### Firmware Over The Air Configuration - Mode Manual Action Verify Manifest File

This Managed Configuration allows an Administrator using an EMM to specify the path and file name of a Manifest file, which must already exist at the specified location in the device file system, to be used to verify support on a Zebra Android device and should be specified if and only if the Action value ***Verify Manifest*** is chosen for the Managed Configuration **Firmware Over The Air Configuration - Action**. 

## GPRS Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the operation of the General Packet Radio Service (GPRS) subsystem on a Zebra Android device by controlling the configurations of GPRS Access Point Name (APNs). 

### GPRS Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an action to manage the GPRS APNs on a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

- When the Action value ***AddApn*** is chosen, a new APN is added, or an existing APN is overwritten with a new APN. The additional Managed Configuration **GPRS Configuration - Action Add APN Name** MUST also be specified to provide the name of the new APN to be added or the name of the existing APN to be replaced. In addition, some or all of the following Managed Configurations MUST also be specified to provide the APNn definition: **GPRS Configuration - Action Add APN Replace If Existing**,**GPRS Configuration - Action Add APN Make Default**,**GPRS Configuration - Action Add APN Access Point**,**GPRS Configuration - Action Add APN User Name**,**GPRS Configuration - Action Add APN Password**,**GPRS Configuration - Action Add APN Port**,**GPRS Configuration - Action Add APN Proxy**,**GPRS Configuration - Action Add APN MMS Port**,**GPRS Configuration - Action Add APN MMS Proxy**,**GPRS Configuration - Action Add APN Server**,**GPRS Configuration - Action Add APN MMSC**,**GPRS Configuration - Action Add APN Type**,**GPRS Configuration - Action Add APN MCC**,**GPRS Configuration - Action Add APN MNC**.

- When the Action value ***RemoveApn*** is chosen, an existing APN is removed. The additional Managed Configuration **GPRS Configuration - Action Remove APN Name** MUST also be specified to provide the name of the APN to be removed.

- When the Action value ***RemoveAllApns*** is chosen, all existing APNs is removed. No additional Managed Configuration need to be specified. 

### GPRS Configuration - Action Add APN Name

This Managed Configuration allows an Administrator using an EMM to provide the name of an APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

### GPRS Configuration - Action Add APN Replace If Existing

This Managed Configuration allows an Administrator using an EMM to configure what happens when an APN already exists with the APN name being added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

- If the value ***Replace Existing*** is chosen, if an APN with the name as specified in the Managed Configuration **GPRS Configuration - Action Add APN Name** already exists, it is replaced by the definition of the APN being added.

- If the value ***Keep Existing*** is chosen, if an APN with the name as specified in the Managed Configuration **GPRS Configuration - Action Add APN Name** already exists, it IS NOT replaced. The existing APN is preserved and the new APN IS NOT added.


### GPRS Configuration - Action Add APN Make Default

This Managed Configuration allows an Administrator using an EMM to configure whether a new APN being added should become the new default APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

- If the value ***Yes*** is chosen, the new APN being added becomes the new default APN and is preferred over other APNs when establishing a cellular data connection.

- If the value ***No*** is chosen, the new APN does NOT become the new default APN and whatever APN was previously the default remains the default. 

### GPRS Configuration - Action Add APN Access Point

This Managed Configuration allows an Administrator using an EMM to specify a value that uniquely identifies an APN on the network when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

APN Identifiers are allocated by cellular carriers to identify the networks that can be reached through various APNs. When acquiring a cellular data plan from a carrier, an APN Identifier is provided, typically along with other information that qualifies or controls access to the network it identifies. 

### GPRS Configuration - Action Add APN User Name

This Managed Configuration allows an Administrator using an EMM to specify a user name that can be used to authenticate to an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

A network accessed through a given APN Identifier might or might not require authentication. If authentication is required, a user name is generally always required and a password MIGHT also be required. 

### GPRS Configuration - Action Add APN Password

This Managed Configuration allows an Administrator using an EMM to specify a password that can be used to authenticate to an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

A network accessed through a given APN Identifier might or might not require authentication. If authentication is required, a user name is generally always required and a password MIGHT also be required. 

### GPRS Configuration - Action Add APN Port

This Managed Configuration allows an Administrator using an EMM to specify the port number of an HTTP proxy to use for all traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If a Proxy is required, a Port is also generally always required.


### GPRS Configuration - Action Add APN Proxy

This Managed Configuration allows an Administrator using an EMM to specify the address or name of an HTTP proxy to use for all traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If a Proxy is required, a Port is also generally always required.


### GPRS Configuration - Action Add APN MMS Port

This Managed Configuration allows an Administrator using an EMM to specify the port number of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If an MMS Proxy is required, an MMS Port is also generally always required. 

### GPRS Configuration - Action Add APN MMS Proxy

This Managed Configuration allows an Administrator using an EMM to specify the address or name of an HTTP proxy to use ONLY for (Multimedia Messaging Service) MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

If an MMS Proxy is required, an MMS Port is also generally always required. 

### GPRS Configuration - Action Add APN Server

This Managed Configuration allows an Administrator using an EMM to specify a WAP Gateway Server address that should be used for an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

WAP Gateways are rarely, if ever, used on or supported by modern cellular carrier networks. 

### GPRS Configuration - Action Add APN MMSC

This Managed Configuration allows an Administrator using an EMM to specify the Multimedia Messaging Service Center (MMSC) address required to route MMS traffic over the network accessed through an APN when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***. 

### GPRS Configuration - Action Add APN Type

This Managed Configuration allows an Administrator using an EMM to specify the Type of APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The value to specify for Type should be obtained from the cellular carrier whose network is to be accessed through the APN. 

### GPRS Configuration - Action Add APN MCC

This Managed Configuration allows an Administrator using an EMM to specify the Mobile Country Code (MCC) of the APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The MCC generally matches the SIM card being used or the APN is usable. 

### GPRS Configuration - Action Add APN MNC

This Managed Configuration allows an Administrator using an EMM to specify the Mobile Network Code (MNC) of the APN to be added when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***AddApn***.

The MNC generally matches the SIM card being used or the APN is not usable. 

### GPRS Configuration - Action Remove APN Name

This Managed Configuration allows an Administrator using an EMM to provide the name of an APN to remove when the value chosen for the Managed Configuration **GPRS Configuration - Action** is ***RemoveApn***. 

## General UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure General User Interface (UI) aspects of a Zebra Android device.

This Managed Configuration group allows an Administrator using an EMM to:

- Configure the *Locale* to be used on the device. 

### General UI Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform a miscellaneous UI action on a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

- If the Action value ***Clear Clipboard*** is chosen, any data currently in the clipboard of the Zebra Android device is discarded.

- If the Action value ***Clear Recently Used Apps List*** is chosen, the list of previously used (launched) applications is cleared. This can be used to prevent the device user from accessing previously used applications or control their behavior or configuration from the list presented when the Recent button is pressed.

- If the Action value ***Clear Application Cache*** is chosen, the cache of a specified application is cleared. The most common use of this would be to delete cached information, such as login credentials or state, and thereby return the application to its default behavior. The use of this Action value requires that the additional Managed Configuration **General UI Configuration - Action Clear Application Cache Package** be specified 
to identify the application whose cache is to be cleared.

- If the Action value ***Turn On All GMS Applications*** is chosen, all GMS applications that are considered "safe" to disable is enabled.

- If the Action value ***Turn Off All GMS Applications*** is chosen, all GMS applications that are considered "safe" to disable is disabled.

Note: - Since it is possible to turn GMS Applications on or off individually, using the values ***Turn On All GMS Applications*** and ***Turn Off All GMS Applications*** guarantees only that all GMS Applications are On or Off ***immediately after*** the requested Action is completed. Subsequent Actions could result in any mixture of GMS Applications being turned On or Off. The behavior of the system or any GMS applications under such conditions is not guaranteed.





### General UI Configuration - Action Clear Application Cache Package

This Managed Configuration allows an Administrator using an EMM to specify a package name for which the cache should be cleared with performing a Clear Application Cache Action.

The value of this Managed Configuration should be specified if an only if the Action value ***Clear Application Cache*** is chosen for the Managed Configuration **General UI Configuration - Action** to specify the package name of the application for which the cache should be cleared.




### General UI Configuration - Allow Device User Control of Do Not Disturb Mode

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is presented with the option to control the state of Do Not Disturb Mode from the Menu presented when the power key is held down on a Zebra Android device.



### General UI Configuration - Auto Correct

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User prompted for corrections to potential mistakes made during entry of data on a Zebra Android device.

- If the value ***Off*** is chosen, the Device User IS NOT prompted to correct potential mistakes during data entry.

- If the value ***On*** is chosen, the Device User is prompted to correct potential mistakes during data entry.



### General UI Configuration - Battery Charging LED

This Managed Configuration allows an Administrator using an EMM to configure whether the charging system be allowed to display the battery charging state using the charging LED when a Zebra Android device is in operating mode.

- If the value ***Disable*** is chosen, the charging system is prevented from using the charging LED to display the battery charging state, which might reduce distractions in environments where many devices are charging.

- If the value ***Enable*** is chosen, the charging system is allowed to use the charging LED to display the battery charging state, which might make it easier to distinguish a fully charged device from a partially charged device. 

### General UI Configuration - Battery Swap UI Popup

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold.

- If the value ***Disable*** is chosen, the Device User IS NOT automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold.

- If the value ***Enable*** is chosen, the Device User is automatically presented with the Battery Swap UI when the device battery level drops below a fixed threshold, perhaps helping to avoid emergency shutdown and potential loss of data as a result. 

### General UI Configuration - Display of Navigation Bar

This Managed Configuration allows an Administrator using an EMM to configure whether the on-screen Navigation Bar is displayed, uses screen real estate and can be used to navigate the device UI.

- If the value ***Disable*** is chosen, the on-screen Navigation Bar is NOT displayed, does NOT occupy screen real estate, and cannot be used to navigate the device UI.

- If the value ***Enable*** is chosen, the on-screen Navigation Bar is displayed takes up screen real estate, and can be used to navigate the device UI. 

### General UI Configuration - Launcher Package Name

This Managed Configuration allows an Administrator using an EMM to configure the package name of the default launcher application.
- This would typically be used when installing an new launcher (home screen) application as a replacement for the default Android launcher.



### General UI Configuration - Locale

This Managed Configuration allows an Administrator using an EMM to configure the *Locale* to be used on a Zebra Android device.

A *Locale* is typically specified by selecting a *Language* (e.g. English) and optionally a *Region* (e.g. the United States).

This Managed Configuration uses values which combine a *Language* and optionally a *Region* into a single identifier.

- When only a *Language* is to be specified, the identifier is the name of the *Language* (e.g. CHINA).

- When both a *Language* and a *Region* are to be specified, the identifier is the name of the *Region* followed by the name of the *Language*, separated by an underscore (e.g. CANADA_FRENCH).


### General UI Configuration - Network Notification Popup

This Managed Configuration allows an Administrator using an EMM to configure whether the Network Notification Popup is presented to inform the Device User that their network might be monitored.

- If the value ***Disable*** is chosen, the Network Notification pop-up is NOT presented and the Device User is NOT notified that the network might be monitored, even if circumstances warrant such notification.

- If the value ***Enable*** is chosen, the Network Notification pop-up might be presented and the Device User notified that the network might be monitored if circumstances warrant such notification. 

### General UI Configuration - Pull Down Notification Bar

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Pull Down the Notification Bar to interact with notifications in the Notifications Panel.

- If the value ***Disable*** is chosen, the Device User is NOT allowed to Pull Down the Notification Bar and is prevented from interacting with notifications in the Notifications Panel.

- If the value ***Enable*** is chosen, the Device User is allowed to Pull Down the Notification Bar and interact with notifications in the Notifications Panel. 

### General UI Configuration - Show Airplane Mode in Power-Off Menu

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is presented with the option to control the state of Airplane Mode from the Menu presented when the power key is held down on a Zebra Android device.



### General UI Configuration - Show Pairing Popup

This Managed Configuration allows an Administrator using an EMM to configure whether a New Pairing Popup is presented when an unpaired peripheral device attempts to establish a new Bluetooth pairing with a Zebra Android device.

- This option has no effect on existing pairings.
- This option does not prevent new pairings that are initiated from the device to the peripheral.
- This option does not prevent new pairings from being established based on configured Silent Pairing rules.


### General UI Configuration - Show Virtual Keyboard when Physical Keyboard is Active

This Managed Configuration allows an Administrator using an EMM to configure whether the Virtual Keyboard is shown when the Physical Keyboard is Active.

- If the value ***Disable*** is chosen, the Virtual Keyboard is NOT shown if the device has an active physical keyboard. This avoids the appearance of an on-screen keyboard when the Device User is using a physical keyboard to enter data.

- If the value ***Enable*** is chosen, the Virtual Keyboard is shown when data entry is in progress regardless of whether the device has an active physical keyboard.


### General UI Configuration - Touch Mode

This Managed Configuration allows an Administrator using an EMM to configure the operational mode of the Touch Panel in selected Zebra Android devices:

- If the value ***Stylus or Finger*** is chosen, the Touch Panel is configured to optimize use with a Stylus or an ungloved Finger.

- If the value ***Glove or Finger*** is chosen, the Touch Panel is configured to optimize use with a Gloved finger or an ungloved Finger.

- If the value ***Finger Only*** is chosen, the Touch Panel is configured to optimize an ungloved Finger.

- If the value ***Stylus or Glove or Finger*** is chosen, the Touch Panel is configured to optimize use with a Stylus, a Gloved finger, or an ungloved Finger.

Not all Zebra Android devices support the ability to configure the Touch Panel mode and those that do might not support every mode.

- An attempt to configure the Touch Panel mode on a device that does not support it results in an error.

- An attempt to configure a Touch Panel mode on a device that does not support that mode results in an error.



### General UI Configuration - Use Of Clipboard

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to utilize the clipboard on a Zebra Android device to cut, copy, and paste text between applications.



### General UI Configuration - Use of Home Key

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to utilize the Home Key on a Zebra Android device to leave the current context and return to the Home/Launcher screen.

- If the value ***Off*** is chosen, the Home key is ignored and causes no action if it is pressed.

- If the value ***On*** is chosen, the Home key is honored and causes the device to go to the Home/Launcher screen when if it is pressed. 

### General UI Configuration - Use of Magnification Gestures

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Use Magnification Gestures.

- If the value ***Off*** is chosen, the Magnification Gestures are ignored and no action is taken if they are used by the Device User.

- If the value ***On*** is chosen, the Magnification Gestures are honored and appropriate action is taken if they are used by the Device User. 

### General UI Configuration - Use of Recent Apps Key

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to Use the Recent Apps Key to access recently launched applications.

- If the value ***Off*** is chosen, the Recent Apps Key is ignored and the Device User is NOT allowed to access recently launched applications using that method.

- If the value ***On*** is chosen, the Recent Apps Key is functional, allowing the Device User access recently launched applications. 

### General UI Configuration - Use of Split Screen Mode

This Managed Configuration allows an Administrator using an EMM to configure whether Split Screen Mode is allowed to be used on the device.

- If the value ***Off*** is chosen, the use of Split Screen Mode is blocked on the device.

- If the value ***On*** is chosen, the use of Split Screen Mode is allowed on the device. 

### General UI Configuration - User Control of Multi User

This Managed Configuration allows an Administrator using an EMM to configure whether Primary Device User is allowed to invoke UI to manage Multi User, including the ability to Create, Delete, and limit the actions of Secondary Users.

- If the value ***Off*** is chosen, the Primary Device User is NOT allowed to manage Secondary Users, even if the device supports multiple users.

- If the value ***On*** is chosen, the Primary Device User is allowed to manage Secondary Users on devices that support multiple users. 

## Host Name Configuration

This Managed Configuration group allows an Administrator using an EMM to include configuration information related to the network host names. 

### Host Name Configuration - Device Name

This Managed Configuration allows an Administrator using an EMM to specify the name by which the device is known on the network. 

## Key Mapping Configuration

This Managed Configuration group allows an Administrator using an EMM to configure how the keys on the physical keyboard of the device (if any) are mapped into alternate key functions or other behaviors. 

### Key Mapping Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an action to affect the behaviors mapped to the keys on the physical keyboard (if any) of a Zebra Android device.

The value of this Managed Configuration specifies one of the following actions:

- When the Action value ***Add Mapping*** is chosen, a new mapping for a single physical key is added to the mapping tables for one or more keyboard states. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Key ID** MUST be specified to identify the physical key for which mappings are to be added or replaced. In addition, the Managed Configuration array **Key Mapping Configuration - Action Add Mapping Behaviors** MUST also be specified to define the behavior(s) to be mapped to the identified physical key. If prior mappings are applied to specify the behaviors of the identified physical key, all are replaced by the new specified behaviors.

- When the Action value ***Reset All Mappings*** is chosen, the mapping tables are reset to their defaults. This effectively removes all mappings that have previously been added and returns the behaviors of all keys to their default out-of-box state. 

### Key Mapping Configuration - Action Add Mapping Key ID

This Managed Configuration allows an Administrator using an EMM to provide a value that uniquely identifies a physical key on the physical keyboard of a Zebra Android device for which one or more behaviors are to be specified when the value chosen for the Managed Configuration **Key Mapping Configuration - Action** is ***Add Mapping***. 

### Key Mapping Configuration - Action Add Mapping Behaviors

This Managed Configuration array allows an Administrator using an EMM to specify a set of behaviors to be performed for one or more keyboard states. for a specified physical key on a Zebra Android device. 

#### Key Mapping Configuration - Action Add Mapping Behavior

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single behavior to be performed for a specified key in pressed in a specified state on the physical keyboard of a Zebra Android device. 

##### Key Mapping Configuration - Action Add Mapping Behavior Table Name

This Managed Configuration allows an Administrator using an EMM to specify the name of the table into which a specific behavior is stored. Mapping tables are associated with keyboard states and are named based on the state key on the physical keyboard of a Zebra Android device that causes that keyboard state to be activated or deactivated.

Note that due to variations in keyboard size and layout, not all keyboard states are supported on all Zebra Android devices or on all keyboards possible on any given Zebra Android device. Some or all of the following values might be supported:

- If the value ***Base*** is chosen, the Base Mapping table is selected. The Base Mapping table defines the behavior that is performed for a physical key when it is pressed while no special keyboard state is active.

- If the value ***Blue*** is chosen, the Blue Mapping table is selected. The Blue Mapping table defines the behavior that is performed for a physical key when it is pressed in conditions where the Blue key has been used to activate the Blue keyboard state.

- If the value ***Orange*** is chosen, the Orange Mapping table is selected. The Orange Mapping table defines the behavior that is performed for a physical key when it is pressed in conditions where the Orange key has been used to activate the Orange keyboard state.

- If the value ***Grey*** is chosen, the Grey Mapping table is selected. The Grey Mapping table defines the behavior that is performed for a physical key when it is pressed in conditions where the Grey key has been used to activate the Grey keyboard state.

- If the value ***Shift*** is chosen, the Shift Mapping table is selected. The Shift Mapping table defines the behavior that is performed for a physical key when it is pressed in conditions where the Shift key has been used to activate the Shift keyboard state.

- If the value ***Control*** is chosen, the Control Mapping table is selected. The Control Mapping table defines the behavior that is performed for a physical key when it is pressed in conditions where the Control key has been used to activate the Control keyboard state.


##### Key Mapping Configuration - Action Add Mapping Behavior Type

This Managed Configuration allows an Administrator using an EMM to specify the type of behavior that is performed when a specified key is pressed while the keyboard state associated with the specified Mapping table is active. The following values are supported:

- If the value ***Send Key Code*** is chosen, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send a specified key code. This allows for "classic keyboard remapping" where the behavior of a key is changed to be the behavior of some other key, which might or might not be present on the physical keyboard. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** MUST also be specified to provide the key code that is sent.

- If the value ***Send Trigger*** is chosen, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send a trigger signal. Trigger signals might be used to initiate various activities, such as barcode scanning, RFID reading, push to talk, etc. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Trigger** MUST also be specified to select which trigger signal is sent,

- If the value ***Launch Application*** is chosen, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to launch an application. The additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Launch Application Name** MUST also be specified to provide the "friendly name" of the application to be launched. Note that this is NOT the Android Package Name. To launch an application by its Android Package Name, the value ***Send Intent*** should be used.

- If the value ***Send Intent*** is chosen, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active is to send and Android Intent, which might cause any number of possible results, depending on the nature of the intent configured to be sent. Some of all of the following additional Managed Configurations MUST also be specified to define the Android Intent to be sent: **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Type**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Action**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Category**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Package Name**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Class**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Data URI**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Flags**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent MIME Type**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Name**, **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Value**.

Sending an Android Intent provides a very flexible way to specify the behavior to be performed for a key by invoking an application or service. As such, there are many options that control the nature of the intent that is sent. It is generally recommended to fully understand the nature of the Android Intent to be sent before attempting to configure it as a key behavior. In many cases, the application or service to be invoked defines the nature of the intent is wishes to received and that definition can be used to drive the configuration.

- If the value ***Suppress*** is chosen, NO behavior is performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active. This is equivalent to mapping the key in that state to "do nothing".

- If the value ***Reset To Default*** is chosen, the behavior performed when the specified key is pressed while the keyboard state associated with the specified Mapping table is active be reset back to its defaults. This effectively removes any prior mapping of that key in that state and return the key to its standard behavior in that state. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code

This Managed Configuration allows an Administrator using an EMM to specify the key code that is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code Alt

This Managed Configuration allows an Administrator using an EMM to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

- If the value ***Off*** is chosen, when the key code is sent, it is sent with the Alt keyboard state inactive. This ensures that the key code is NOT interpreted as an ALT key.

- If the value ***On*** is chosen, when the key code is sent, it is sent with the Alt keyboard state active, ensuring that the key code is interpreted as an Alt key.

- If this Managed Configuration is not specified, when the key code is sent, the Alt keyboard state is not changed. This causes the key to be interpreted as an Alt key or not based on the existing state. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code Ctrl

This Managed Configuration allows an Administrator using an EMM to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

- If the value ***Off*** is chosen, when the key code is sent, it is sent with the Ctrl keyboard state inactive. This ensures that the key code is NOT interpreted as an Ctrl key.

- If the value ***On*** is chosen, when the key code is sent, it is sent with the CTRL keyboard state active. This ensures that the key code is interpreted as a CTRL key.

- If this Managed Configuration is not specified, when the key code is sent, the Ctrl keyboard state is not changed. This causes the key to be interpreted as a CRTL key or not based on the existing state. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code Fn

This Managed Configuration allows an Administrator using an EMM to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

- If the value ***Off*** is chosen, when the key code is sent, it is sent with the Fn keyboard state inactive. This ensures that the key code is NOT interpreted as an Fn key.

- If the value ***On*** is chosen, when the key code is sent, it is sent with the Fn keyboard state active. This ensures that the key code is interpreted as an Fn key.

- If this Managed Configuration is not specified, when the key code is sent, the Fn keyboard state is not changed. This causes the key to be interpreted as an FN key or not based on the existing state. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code Shift

This Managed Configuration allows an Administrator using an EMM to alter how a key code is sent as the behavior for a specified key a specified state when the value ***Send Key Code*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Key Code** is specified.

- If the value ***Off*** is chosen, when the key code is sent, it is sent with the Shift keyboard state inactive. This ensures that the key code is NOT interpreted as an Shift key.

- If the value ***On*** is chosen, when the key code is sent, it is sent with the Shift keyboard state active. This ensures that the key code is interpreted as an Shift key.

- If this Managed Configuration is not specified, when the key code is sent, the Shift keyboard state is not changed. This causes the key to be interpreted as a Shift key or not based on the existing state. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Trigger

This Managed Configuration allows an Administrator using an EMM to specify the trigger signal that is sent as the behavior for a specified key a specified state when the value ***Send Trigger*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Eight trigger signals are defined, but not all might be supported on all Zebra Android devices. All Zebra Android devices generally support at least ***Trigger 1*** and generally default to using this trigger signal to activate the barcode scanner. Some Zebra Android devices might support additional trigger signals and some Zebra Android devices might be reconfigured to use ***Trigger 1*** for some purpose other than barcode scanning. To determine which trigger signals are supported on a given Zebra Android device, consult the documentation for that specific device. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent

This Managed Configuration allows an Administrator using an EMM to specify when an intent should be sent as the behavior for a remapped key.

- If the value ***On Key Down*** is chosen, the intent is sent immediately when the key is first detected as being pressed.

- If the value ***On Key Up*** is chosen, the intent is not sent until the key is detected as being released after being being pressed.

- If the value ***,On Both Key Up and Down*** is chosen, the intent is sent immediately when the key is first detected as being pressed and again when the key is detected as being released.


##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Type

This Managed Configuration allows an Administrator using an EMM to specify the method in which an Android Intent should be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Depending on the application or service to be invoked, there is likely only one method that can be used successfully to invoke a desired behavior in that application or service. Consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value invokes the desired behavior. The possible values are:

- If the value ***StartActivity*** is chosen, the Android Intent is sent using the startActivity() method. This method is suitable for invoking Activities, which are components that perform user interactions. If the behavior to be invoked involves interacting with the Device User, this method is most likely used.

- If the value ***Broadcast*** is chosen, the Android Intent is sent using the sendBroadcast() method. This method is suitable for invoking Services, which are components that implement background operations. If the behavior to be invoked does not involves interacting with the Device User, this method is most likely be used. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Action

This Managed Configuration allows an Administrator using an EMM to specify the action value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

An action value is NOT mandatory to specify for an Android Intent. But an action value is commonly used to identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports multiple functions, in which case the action value is commonly used to identify which function to perform when invoking that application or service. Consult the documentation or developer of a given application or service to determine whether an action value is needed and, if so, which value invokes the desired behavior. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Category

This Managed Configuration allows an Administrator using an EMM to specify the category value of an Android Intent to be sent to invoke an application or service when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

A category value is NOT mandatory to specify for an Android Intent. But a category value is commonly used to help identify the purpose of an Android Intent. This can be especially when the application or service to be invoked supports many functions, in which case many action values might be used to identify those functions and it might be useful to categorize those functions. In some cases, the same action value might be supported in more than one category. Consult the documentation or developer of a given application or service to determine whether a category value is needed and, if so, which value invokes the desired behavior. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of the application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

It is not mandatory to specify the Android Package Name when sending an Android Intent, but is is often advisable.

- When an Android Package Name is specified, the intent becomes an Explicit Intent and the intent can ONLY be sent to an application or service with that Package Name and no other. This can increase security and is often used when the intent being sent requires any sensitive data. It is generally mandatory to specify the additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Class** whenever a Package Name is specified, since an Explicit Intent is always sent to an Android Component, which is identified by a Package Name and a Class within that Package.

- When no Android Package Name is specified, the intent becomes an Implicit Intent and the intent might be sent to any application or service that has registered its ability to handle that intent. This can increase flexibility and is often used when the intent being sent requires no sensitive data and when it might be desirable to dynamically control which application or service is ultimately invoked to handle that intent.


##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Class

This Managed Configuration allows an Administrator using an EMM to specify the Class identifying a component within an application or service to invoke when the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** and should be specified if and only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Package Name** is specified. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Data URI

This Managed Configuration allows an Administrator using an EMM to specify a Uniform Resource Identifier (URI) that identifies some data, in the form of a resource on the device (e.g. a file in the device file system) or off the device (e.g. a resource available through a network) that should be utilized by the application or service invoked by the intent.

Whether the intended recipient of the intent expects a URI to be specified as part of the intent or not is up to that recipient and/or the definition of the intent that recipient is designed to consume. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Flags

This Managed Configuration allows an Administrator using an EMM to specify intent flags to be set for the intent to be sent. 

Intent flags control how the intent is handled by Android. Some intent flags are specific to the type of component that is invoked by the Intent (e.g. activity vs service).
Whether certain intent flags are needed to produce the desired result when the intended recipient of the intent is invoked is up to that recipient and/or the definition of the intent that recipient is designed to consume.
Intent flags must be specified as a hexadecimal value with the appropriate bits set for any flag or flags desired.
Consult the Android documentation to translate intent flag names, when needed, into their appropriate hexadecimal values.



##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent MIME Type

This Managed Configuration allows an Administrator using an EMM to specify a Multipurpose Internet Mail Extensions (MIME) type to use when processing the intent data and should be specified only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Data URI** is specified.

Normally the type would be inferred from the data itself. Setting a MIME type explicitly, by using this Managed Configuration disables automatic type detection and and forces handling according to the specified type. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Name

This Managed Configuration allows an Administrator using an EMM to specify the name of a single extra named string value to be attached to the intent to be sent.

Android allows a collection of extra named values, of various types, to be attached to an intent. This Managed Configuration enables exactly one value whose data type must be string to be specified. When a name is specified, the additional Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Value** MUST also be specified to provide the corresponding value to be attached for the string extra identified by the specified name. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Value

This Managed Configuration allows an Administrator using an EMM to specify the value of a single extra named string value to be attached to the intent to be sent and should be specified if and only if the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type Send Intent Extra Name** is specified. 

##### Key Mapping Configuration - Action Add Mapping Behavior Type Launch Application Name

This Managed Configuration allows an Administrator using an EMM to specify the "friendly name" of an application to be launched when the value ***Launch Application*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type**.

Note that the application "friendly name" is NOT the same as Android Package Name. The application "friendly name" is generally the name by which the application is identified in in-device UI, such as the application Title Bar and the list of application names display in the Recent Application list and the AppInfo section of the Settings Menu. To launch an application based on its Android Package Name, choose the value ***Send Intent*** is chosen for the Managed Configuration **Key Mapping Configuration - Action Add Mapping Behavior Type** instead.


## Power Configuration

This Managed Configuration group allows an Administrator using an EMM to perform power-related actions and configure power-related settings on a Zebra Android device. 

### Power Configuration - Power Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control the Power to the device.

The value of this Managed Configuration specifies one of the following Action values

- ***Sleep*** causes the device to enter go to Sleep (i.e. enter Suspend Mode).

- ***Reboot*** causes the device to perform an OS Reboot (i.e. simple Reset).



### Power Configuration - Battery Percentage Decommission Threshold

This Managed Configuration allows an Administrator using an EMM to configure the percentage of remaining battery capacity below which the battery is deemed ready for decommissioning. 

### Power Configuration - Battery Usage Decommission Threshold

This Managed Configuration allows an Administrator using an EMM to configure the amount of battery usage (e.g. charge/discharge cycles, coulombs in/out, etc.) that can occur beefore the battery is deemed ready for decommissioning. 

### Power Configuration - Battery Optimization Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control which applications are subject to battery optimization and which are exempt.

- If the value ***Add*** is chose, one or more applications is made subject to battery optimizations and the additional Managed Configuration **Power Configuration - Battery Optimization Action Add Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be made subject to battery optimizations.

- If the value ***Remove*** is chose, one or more applications is made subject to battery optimizations and the additional Managed Configuration **Power Configuration - Battery Optimization Action Remove Package Names** MUST be specified to provide the Android Package Name(s) of the application(s) to be exempted from battery optimizations.


### Power Configuration - Battery Optimization Action Add Package Names

This Managed Configuration allows an Administrator using an EMM to specify one or more Android Package Name(s) that identify application(s) that should be made subject to battery optimizations.

If specified, multiple package names should be separated using commas. 

### Power Configuration - Battery Optimization Action Remove Package Names

This Managed Configuration allows an Administrator using an EMM to specify one or more Android Package Name(s) that identify application(s) that should be exempted from battery optimizations.

If specified, multiple package names should be separated using commas. 

### Power Configuration - Port Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control the Output Power various Ports on the device.

The value of this Managed Configuration specifies one of the following Action values

- ***Turn Output Power OFF*** causes the Output Power for a specified Port to be turned off.

- ***Turn Output Power ON*** causes the Output Power for a specified Port to be turned on.

When this Managed Configuration is specified, the additional Managed Configuration **Power Configuration - Port Select** must also be specified to identify the Port for which Output Power is controlled.



### Power Configuration - Port Select

This Managed Configuration allows an Administrator using an EMM to specify the Port for which an Action to control the Output Power on the device is applied, and should be specified if and only if the Managed Configuration **Power Configuration - Port Action** is specified.

The value of this Managed Configuration specifies one of the following Action values

- ***Serial Port 1*** selects the First device Serial Port as the Port for which the Output Power is turned on or off.

- ***Serial Port 2*** selects the Second device Serial Port as the Port for which the Output Power is turned on or off.

- ***USB Port 2*** selects the Second device USB Port as the Port for which the Output Power is turned on or off.




### Power Configuration - Auto Power Control

This Managed Configuration allows an Administrator using an EMM to control whether device power is automatically controlled.

The value of this Managed Configuration specifies one of the following values

- ***Off*** causes the device power to NOT be automatically controlled.

- ***On*** causes device power to be automatically controlled and one or more of the following Managed Configurations also should be specified:

   - **Power Configuration - Auto Power Off** to specify whether/how device power is automatically turned off.

    - **Power Configuration - Auto Power On** to specify whether/how device power is automatically turned on.



### Power Configuration - Auto Power Off

This Managed Configuration allows an Administrator using an EMM to configure whether/how device power is automatically turned off as part of automatic power control, and should be specified if and only if the Managed Configuration **Power Configuration - Auto Power Control** is specified.

The value of this Managed Configuration specifies one of the following values

- ***Never*** causes the device power to never automatically turn off when the ignition turns off.

- ***When Ignition is Turned Off*** causes the device power to automatically turn off whenever the ignition turns off.



### Power Configuration - Auto Power Off Timeout

This Managed Configuration allows an Administrator using an EMM to configure the timeout that is in effect before device power is automatically turned off as part of automatic power control, and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Power Configuration - Auto Power Control** is specified and the value ***When Ignition is Turned Off*** is specified for the Managed Configuration **Power Configuration - Auto Power Off**.



### Power Configuration - Auto Power On

This Managed Configuration allows an Administrator using an EMM to configure whether/how device power is automatically turned on as part of automatic power control, and should be specified if and only if the Managed Configuration **Power Configuration - Auto Power Control** is specified.

The value of this Managed Configuration specifies one of the following values

- ***Never*** causes the device power to never automatically turn on when the ignition turns on.

- ***When Ignition is Turned On*** causes the device power to automatically turn on whenever the ignition turns on.



### Power Configuration - Heater Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control device heaters.

When this Managed Configuration is specified, the Managed Configuration **Power Configuration - Heater Select** must be specified to identify the Heater to be affected.

The value of this Managed Configuration specifies one of the following Action values:

- ***Enable Heater*** causes the Heater to be turned on and off as needed based on the configured ON/OFF thresholds.

- ***Disable Heater*** causes the Heater to be turned off and stay off, regardless of the configured ON/OFF thresholds.

- ***Set ON/OFF Thresholds*** configures the ON/OFF thresholds that is used when the Heater is Enabled. When this value is specified, the following Managed Configurations must also be specified:

    - **Power Configuration - Heater On Threshold** must be specified to set the threshold temperature below which the Heater is automatically turned on.

    - **Power Configuration - Heater Off Threshold** must be specified to set the threshold temperature above which the Heater is automatically turned off.




### Power Configuration - Heater Select

This Managed Configuration allows an Administrator using an EMM to specify the Heater to be affected by a specified Heater Action and should be specified if and only if the Managed Configuration **Power Configuration - Heater Action** is specified.

The value of this Managed Configuration specifies one of the following Heater values:

- ***Serial I/O*** selects the Heater that warms the Serial I/O Port of the device.

- ***USB I/O*** selects the Heater that warms the USB I/O Port of the device.

- ***Battery*** selects the Heater that warms the Battery of the device.

- ***Touch Panel*** selects the Heater that warms the Touch of the device.



### Power Configuration - Heater Action Off Threshold

This Managed Configuration allows an Administrator using an EMM to perform configure the temperature above which a specified Heater should automatically turn OFF, and should be specified if and only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Power Configuration - Heater Action**.



### Power Configuration - Heater Action On Threshold

This Managed Configuration allows an Administrator using an EMM to perform configure the temperature below which a specified Heater should automatically turn ON, and should be specified if and only if the value below which the specified Heater should automatically turn on is specified for the Managed Configuration **Power Configuration - Heater Action**.



### Power Configuration - Doze Mode State

This Managed Configuration allows an Administrator using an EMM to perform control whether Doze Mode is globally used on the device.

- When the value ***Off*** is chosen, the device never enters Doze Mode for any application.

- When the value ***On*** is chosen, the device enters Doze Mode for various applications based on the normal Android rules for Doze Mode.



## RFID Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the RFID module in a Zebra Android device. 

### RFID Configuration - Country of Operation

This Managed Configuration allows an Administrator using an EMM to specify the *Country of Operation* in which the RFID module is used.

It is critical that the *Country of Operation* be set at least once, since the RFID module has no default *Country of Operation* and does NOT operate unless/until the *Country of Operation* is explicitly set, to ensure that country-specific regulator requirements are met.
In most cases, the *Country of Operation* is set once and never changed, unless the device is physically relocated to a different country. 

### RFID Configuration - Country of Operation Channel Mask

This Managed Configuration allows an Administrator using an EMM to specify the *Channel Mask* that determines which of the *Channels* that are allowed, based on the currently selected *Country of Operation* is used by the RFID module.

- If no *Channel Mask* is specified, the RFID module is free to use any or all *Channels* that are available based on the currently selected *Country of Operation*.

- If a *Channel Mask* is specified, the specified value must consist of one or more *Channel Numbers*, separated by commas if more than one is specified, which identify the *Channels* that can be used. The RFID module limits itself to just the *Channels* that are allowed for the currently selected *Country of Operation* AND that are in the set of *Channels* specified through this Managed Configuration.

Consult the product documentation for the Zebra Android device being used to obtain the set of allowable *Channel Numbers*.


### RFID Configuration - Country of Operation Channel Hopping

This Managed Configuration allows an Administrator using an EMM to configure whether *Channel Hopping* is performed among the *Channels* that are used by the RFID module. 

### RFID Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to alter the behavior or configuration of the RFID module.

- If the value ***Update Firmware*** is chosen, the firmware of the RFID module is updated and the additional Managed Configuration **RFID Configuration - Action Update Firmware File** MUST be specified to supply the path and file name of the file, which must exist in the device file system, containing the firmware update to be applied to the RFID module.

- If the value ***Export Settings*** is chosen, the current configuration of the RFID module is exported and stored in a file in the device file system. This file could then be extracted from the device and used for troubleshooting potential configuration issues related to the RFID module.

- If the value ***Reset Radio*** is chosen, the radio of the RFID module is reset, without changing its settings. This could be used to recover from an error or other failure of the RFID module.

- If the value ***Reset Radio to Factory Defaults*** is chosen, the configuration of the RFID module is returned to its default out-of-box state and the radio is reset. This could be used to recover from a serious configuration error that prevents the RFID module from functioning appropriately.

- If the value ***Update Firmware and Reset Radio to Factory Defaults*** is chosen, the firmware of the RFID is updated,l the configuration of the RFID module is returned to its default out-of-box state, and the radio is reset. This could necessary when applying a major new firmware update, that add lots of new configuration settings, to ensure that the RFID module is configured in a known and compatible state. 

### RFID Configuration - Action Update Firmware File

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of the file containing the firmware update to be applied and should be specified if and only if the value ***Update Firmware*** or the value ***Update Firmware and Reset Radio to Factory Defaults*** is chosen for the Managed Configuration **RFID Configuration - Action**. 

### RFID Configuration - Transmit Power Level

This Managed Configuration allows an Administrator using an EMM to configure the *RFID Power Level* that should be used by the RFID module.

The *RFID Power Level* should be specified in tenths of dBm in the range of ***0*** to ***300***, inclusive.
For example, to specify an *RFID Power Level* of ***29.5 dBm***, specify a value of ***295***. 

### RFID Configuration - Query Select

This Managed Configuration allows an Administrator using an EMM to configure which RFID tags should be operated upon by the RFID module during a *Query Operation*, based on the state of the SL flag.

- If the value ***Query applies to all tags*** is chosen, when the RFID module performs a *Query Operation*, it considers all RFID tags that are currently visible to the RFID module.

- If the value ***Query applies to tags with SL de-asserted*** is chosen, when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that have SL flag de-asserted (i.e tags for which the SL flag has NOT been set using the Select command).

- If the value ***Query applies to tags with SL asserted*** is chosen, when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that have SL flag asserted (i.e tags for which the SL flag HAS been set using the Select command).


### RFID Configuration - Query Session

This Managed Configuration allows an Administrator using an EMM to configure which *Session* should be used by the RFID module to access RFID tags during a *Query Operation*.

Allowable values are ***SessionS0***, ***SessionS1***, ***SessionS2***, and ***SessionS3***.

*Sessions* provide options for how to count tags. For more information on the use of *Sessions*, consult the Zebra Android device product documentation. 

### RFID Configuration - Query Target

This Managed Configuration allows an Administrator using an EMM to configure how the A and B flags of RFID tags should be handled by the RFID module during a *Query Operation*.

- If the value ***Inventory Target Flag A*** is chosen, when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that are in State A.

- If the value ***Inventory Target Flag B*** is chosen, when the RFID module performs a *Query Operation*, it considers only those RFID tags that are currently visible to the RFID module AND that are in State B.

- If the value ***AB Flip*** is chosen, when the RFID module performs a *Query Operation*, it considers only those RFID tags currently visible to the RFID module AND that are in either State A or State B and Flips the State from A to B or B to A for the session. 

## Remote Scanner Management

This Managed Configuration group allows an Administrator using an EMM to manage a *Remote Scanner* that is connected to a Zebra Android device. 

### Remote Scanner Management - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to control a *Remote Scanner* that is connected to a Zebra Android device.

- If the value ***Apply Configuration Package(RS6000 only)*** is chosen, a configuration file is used to apply new configuration to a *Remote Scanner*. The additional Managed Configuration **Remote Scanner Management - Action Config Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be configured. The additional Managed Configuration **Remote Scanner Management - Action Config File** MUST also be specified to provide the path and file name of the configuration file to be applied.

- If the value ***Update Scanner Firmware*** is chosen, a firmware file is used to update the firmware of a *Remote Scanner*. The additional Managed Configuration **Remote Scanner Management - Action Update Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be updated. The additional Managed Configuration **Remote Scanner Management - Action Update File** MUST also be specified to provide the path and file name of the firmware file to be applied.

- If the value ***Reset Scanner(RS6000 only)*** is chosen, a *Remote Scanner* is reset, allowing errors to be cleared and proper operation of a*Remote Scanner* to be restored. The additional Managed Configuration **Remote Scanner Management - Action Reset Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be reset. 

- If the value ***Page Scanner(RS6000 only)*** is chosen, a *Remote Scanner* is paged, allowing a misplaced *Remote Scanner* to be more easily located. The additional Managed Configuration **Remote Scanner Management - Action Page Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be paged. 

- If the value ***Disconnect Scanner(RS6000 only)*** is chosen, a *Remote Scanner* is disconnected, terminating the connection between the Zebra Android device and the *Remote Scanner* and preventing its subsequent use. The additional Managed Configuration **Remote Scanner Management - Action Disconnect Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be disconnected.

- If the value ***Unpair Scanner(RS6000 only)*** is chosen, a *Remote Scanner* is unpaired, terminating the pairing between the Zebra Android device and the *Remote Scanner* and preventing its reconnedtion without first repairing. The additional Managed Configuration **Remote Scanner Management - Action Unpair Serial Number** MUST be specified to provide the *Serial Number* that identifies the *Remote Scanner* to be unpaired. 

### Remote Scanner Management - Action Config Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to which configuration should be applied and should be specified if and only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. The additional Managed Configuration **Remote Scanner Management - Action Config File** MUST also be specified to provide the path and file name of the configuration file to be used. 

### Remote Scanner Management - Action Config File

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of a configuration file, which must exist at the specified location in the device file system, from which configuration should be applied to the specified *Remote Scanner* and should be specified if and only if the value ***Apply Configuration Package(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Remote Scanner Management - Action Update Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* for which a firmware update should be performed and should be specified if and only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Remote Scanner Management - Action**. The additional Managed Configuration **Remote Scanner Management - Action Update File** MUST also be specified to provide the path and file name of the firmware file to be used. 

### Remote Scanner Management - Action Update File

This Managed Configuration allows an Administrator using an EMM to provide the path and file name of a firmware file, which must exist at the specified location in the device file system, from which firmware update should be performed to the specified *Remote Scanner* and should be specified if and only if the value ***Update Scanner Firmware*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Remote Scanner Management - Action Reset Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be reset and should be specified if and only if the value ***Reset Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Remote Scanner Management - Action Page Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be paged and should be specified if and only if the value ***Page Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Remote Scanner Management - Action Disconnect Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be disconnected and should be specified if and only if the value ***Disconnect Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

### Remote Scanner Management - Action Unpair Serial Number

This Managed Configuration allows an Administrator using an EMM to specify the *Serial Number* that identifies a *Remote Scanner* to be unpaired and should be specified if and only if the value ***Unpair Scanner(RS6000 only)*** is specified for the Managed Configuration **Remote Scanner Management - Action**. 

## Security Configuration

This Managed Configuration group allows an Administrator using an EMM to configure security-related settings on a Zebra Android device. 

### Security Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to perform adjust various security features on a Zebra Android device.

The value of this Managed Configuration specifies an Action value and depending on the Action value chosen, one or more additional Managed Configurations MAY also be required to provide additional information:

- When the Action value ***Add Key*** is chosen, the additional Managed Configuration **Security Configuration - Action Add Key Name** MUST be specified to provide the name of the key to be added and the additional Managed Configuration **Security Configuration - Action Add Key Value** MUST be specified to provide the value of the key to be added.

- When the Action value ***Remove Key*** is chosen, the additional Managed Configuration **Security Configuration - Action Remove Key Name** MUST be specified to provide the name of the key to be removed.

- When the Action value ***Remove All Keys*** is chosen, no additional Managed Configurations should be specified to provide additional information.

- When the Action value ***Encrypt SD Card,*** is chosen, the additional Managed Configuration **Security Configuration - Encrypt SD Card Key Name** MUST be specified to provide the name of the key to be used to encrypt the SD card.

- When the Action value ***Wipe SD Card*** is chosen, no additional Managed Configurations should be specified to provide additional information.


### Security Configuration - Action Add Key Name

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be added and should be specified if and only if the Action value ***Add Key*** is chosen for the Managed Configuration **Security Configuration - Action**.

When this Managed Configuration is specified, the additional Managed Configuration **Security Configuration - Action Add Key Value** must also be specified to provide the value to be added for the specified key name.



### Security Configuration - Action Add Key Value

This Managed Configuration allows an Administrator using an EMM to specify the value of a key to be added and should be specified if and only if the Action value ***Add Key*** is chosen for the Managed Configuration **Security Configuration - Action**.

When this Managed Configuration is specified, the additional Managed Configuration **Security Configuration - Action Add Key Name** must also be specified to provide the key name for which this value should be added.

A key value must be a string value containing exactly 64 hexadecimal characters ("0-9" and/or "A-F" characters) that encode a 256 bit binary value for an AES encryption key.

The key value can be generated in any manner desired as long as it is a 256 bit binary value and is represented as 64 hexadecimal characters, although in most cases, best practice would be to randomly generate keys to maximize their effectiveness in protecting data.


### Security Configuration - Action Remove Key Name

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be removed and should be specified if and only if the Action value ***Remove Key*** is chosen for the Managed Configuration **Security Configuration - Action**.



### Security Configuration - Encrypt SD Card Key Name

This Managed Configuration allows an Administrator using an EMM to specify the name of a key to be used to encrypt the SD card and should be specified if and only if the Action value ***Encrypt SD Card*** is chosen for the Managed Configuration **Security Configuration - Action**.


### Security Configuration - Instant Screen Lock on Power Key

This Managed Configuration allows an Administrator using an EMM to specify what happens when the Power Key on the device is used to turn the device off, especially whether the device is locked, requiring it to be unlocked by entering a PIN or password, if one is specified.

- When the value ***Off*** is chosen, turning the device off using the Power Key is handled the same as when the device times out and turns itself off automatically. In such a case, if device remains off for longer than value set using the Managed Configuration **Security Configuration - Screen Lock Timeout**, when it is turned back on, the device is locked, requiring whatever unlock action is set using the Managed Configuration **Security Configuration - Screen Lock Type**.

- When the value ***On*** is chosen, turning the device off using the Power Key is handled differently than when the device times out and turns itself off automatically, specifically the device becomes locked "instantly" when turned off using the Power Key. In such a case, no matter how long the device remains off, when it is turned back on, the device is locked, requiring whatever unlock action is set using the Managed Configuration **Security Configuration - Screen Lock Type**.



### Security Configuration - Screen Lock Type

This Managed Configuration allows an Administrator using an EMM to specify the type of lock that is used to protect the device from use by unauthorized persons.

- When a value of ***None*** is chosen, no lock is applied and the device can be used by anyone.

- When a value of ***Swipe*** is chosen, unlocking requires only a simple swipe and the device can be used by anyone.

- When a value of ***PIN*** is chosen, unlocking requires entry of a PIN (personal identification number) and the device can only be unlocked by someone knowing the correct PIN value.

- When a value of ***Password*** is chosen, unlocking requires entry of a password and the device can only be unlocked by someone knowing the correct password value.

- When a value of ***Pattern*** is chosen, unlocking requires drawing a pattern on the screen using the touch panel and the device can only be unlocked by someone knowing the correct pattern.



### Security Configuration - Screen Lock Timeout

This Managed Configuration allows an Administrator using an EMM to specify what happens when a device turns off as a result of a timeout.

- If the device stays off for at least the time specified in this Managed Configuration, when the device is turned back on, a unlock is required, if one was specified using the Managed Configuration **Security Configuration - Screen Lock Type**.

- If the device stays off for less than the time specified in this Managed Configuration, when the device is turned back on, no unlock is required, even if one was specified using the Managed Configuration **Security Configuration - Screen Lock Type**.


## Settings UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the behavior of the Settings Menu on a Zebra Android device, especially which features of the Settings Menu the Device User is allowed to access. 

### Settings UI Configuration - Allow Device User Access Quick Settings

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to access the Android Quick Settings Panel UI.

- If the value ***Off*** is chosen, any attempt by the Device User to enter the Quick Settings Panel is ignored.

- If the value ***On*** is chosen, attempts by the Device User to enter the Quick Settings Panel is honored and the Quick Settings Panel UI is presented on request.


### Settings UI Configuration - Allow Device User Control Airplane Mode

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change the state of Airplane Mode.

- If the value ***Off*** is chosen, any attempt by the Device User to change the state of Airplane Mode is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the state of Airplane Mode is honored. 

### Settings UI Configuration - Allow Device User Control App Notifications

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to configure which application notifications is generated.

- If the value ***Off*** is chosen, any attempt by the Device User to change the configuration of application notifications is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the configuration of application notifications is honored. 

### Settings UI Configuration - Allow Device User Control Apps

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to enter the AppInfo section of the Settings Menu where applications can be controlled.
 
- If the value ***Off*** is chosen, any attempt by the Device User to enter the AppInfo section of the Settings Menu is ignored.

- If the value ***On*** is chosen, attempts by the Device User to enter the AppInfo section of the Settings is honored. 

### Settings UI Configuration - Allow Device User Control Background Data

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change the usage of Background WWAN data.

- If the value ***Off*** is chosen, any attempt by the Device User to change the usage of Background WWAN data is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the usage of Background WWAN data is honored. 

### Settings UI Configuration - Allow Device User Control Ethernet

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change the state of the Ethernet adapter.

- If the value ***Off*** is chosen, any attempt by the Device User to change the state of Ethernet adapter is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the state of Ethernet adapter is honored. 

### Settings UI Configuration - Allow Device User Control Instant Lock

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change whether or not pressing the Power key causes the device to lock instantly.

- If the value ***Off*** is chosen, any attempt by the Device User to change whether or not pressing the Power key causes the device to lock instantly is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change whether or not pressing the Power key causes the device to lock instantly is honored. 

### Settings UI Configuration - Allow Device User Control USB

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change the state of USB.

- If the value ***Off*** is chosen, any attempt by the Device User to change the state of USB is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the state of USB is honored. 

### Settings UI Configuration - Allow Device User Control Unknown Sources

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change whether applications can be installed from Unknown Sources.

- If the value ***Off*** is chosen, any attempt by the Device User to change whether applications can be installed from Unknown Sources.

- If the value ***On*** is chosen, attempts by the Device User to change whether applications can be installed from Unknown Sources. 

### Settings UI Configuration - Allow Device User Control WLAN

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to change the configuration of the WLAN adapter.

- If the value ***Off*** is chosen, any attempt by the Device User to change the configuration of the WLAN adapter is blocked.

- If the value ***On*** is chosen, attempts by the Device User to change the configuration of the WLAN adapter is honored. 

### Settings UI Configuration - Allow Device User to Initiate an Enterprise Reset

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to perform an Enterprise Reset from the Settings Menu.

- If the value ***Off*** is chosen, any attempt by the Device User to perform an Enterprise Reset from the Settings Menu is blocked.

- If the value ***On*** is chosen, attempts by the Device User to perform an Enterprise Reset from the Settings Menu is honored. 

### Settings UI Configuration - Use Reduced Version

This Managed Configuration allows an Administrator using an EMM to configure whether the Full or Reduced version of the Settings Menu is used.

- If the value ***Off*** is chosen, when the Device User launches the Settings Menu, the Full version,with support for all settings, is used.

- If the value ***On*** is chosen, when the Device User launches the Settings Menu, the Reduced version, with support for only a few settings, is used. 

### Settings UI Configuration - Use of Notification Settings Icon

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.

- If the value ***Off*** is chosen, the Device User is blocked from using the Settings Icon on the Notification Panel to launch the Settings UI.

- If the value ***On*** is chosen, the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI. 

### Settings UI Configuration - Use of Settings Slide Out Drawer

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.

- If the value ***Off*** is chosen, the Device User is blocked from using the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI.

- If the value ***On*** is chosen, the Device User is allowed to use the Slide Out Drawer in Settings UI to rapidly switch laterally to other parts of the Settings UI 

### Settings UI Configuration - Use of Tethering and Portable Hotspot

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is allowed to use the Settings Icon on the Notification Panel to launch the Settings UI.

- If the value ***Off*** is chosen, the Device User is blocked from using the Settings UI to configure and utilize Tethering and Portable Hotspot mode.

- If the value ***On*** is chosen, the Device User is allowed to use the Settings UI to configure and utilize Tethering and Portable Hotspot mode. 

## Threat Management Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which threats to a Zebra Android device is monitored and which countermeasures is taken when threats are detected. 

### Threat Management - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to configure whether a given threat is monitored.

- When the Action value ***Detect*** is chosen, a specific threat is configured to be monitored and, if that threat is detected, a countermeasure is taken to mitigate that threat. The additional Managed Configuration **Threat Management - Action Detect Threat Type** MUST be specified to identify the threat that is monitored. In addition, the Managed Configuration array **Threat Management - Action Detect Countermeasures** MUST be specified to select the set of countermeasures that is performed if the specified threat is detected.

- When the Action value ***Ignore*** is chosen, a specific threat is configured not to be monitored and is never detected. The additional Managed Configuration **Threat Management - Action Ignore Threat Type** MUST be specified to identify the threat that is ignored. 

### Threat Management - Action Detect Threat Type

This Managed Configuration allows an Administrator using an EMM to specify the type of threat that is monitored when the value ***Detect*** is chosen for the Managed Configuration**Threat Management - Action**.

- If the value ***Max Password Attempts*** is chosen, the Threat Management System is configured to monitor password entry attempts and the threat is considered to be detected if the maximum number of unsuccessful password entry attempts are made without an intervening successful password entry.

- If the value ***MDM Client Removal*** is chosen, the Threat Management System is configured to monitor the device and detect if a specific Android Package Name is ever uninstalled from the device. The additional Managed Configuration **Threat Management - Action Detect Threat Type MDM Client Removal Package Name** MUST be specified to identify the Package Name that is monitored. While this is typically used to detect the removal of the MDM Client, which would render a managed device unmanaged, it could be used to detect the removal of any one Android Package if detection of the removal of an MDM Agent is not required.

- If the value ***Externally Detected*** is chosen, the Threat Management System is configured to listen for indication from an application on the device that can itself provide a way of detecting an signaling any threat not otherwise known to the Threat Management System. The Threat Management System considers the threat to have been detected whenever it is signaled by the external application.

- If the value ***Exchange Active Sync Command*** is chosen, the Threat Management System is configured to handle a threat detected and signaled by a connection to an Exchange Active Sync Server through an Exchange Active Sync Client on the device.

- If the value ***Device is Rooted*** is chosen, the Threat Management System is configured to monitor the device to see if it has been rooted. Root detection mechanism seek to identify common exploits that could grant an escalated privileges to an untrusted application that might use them to compromise the security or privacy of the device. 

### Threat Management - Action Detect Countermeasures

This Managed Configuration array allows an Administrator using an EMM to defined the set of countermeasures that should be applied to mitigate a detected threat. 

#### Threat Management - Action Detect Countermeasure

This Managed Configuration group allows an Administrator using an EMM to specify the details of a single countermeasure to be performed to mitigate a detected threat. 

##### Threat Management - Action Detect Countermeasure Type

This Managed Configuration allows an Administrator using an EMM to specify the type of a single countermeasure that is performed to mitigate a detected threat.

- When the value ***FormatSdcard*** is chosen, the countermeasure to format the removable SD card is performed when the associated threat is detected.

- When the value ***FactoryReset*** is chosen, the countermeasure to Factory Reset the device is performed when the associated threat is detected.

- When the value ***WipeSecureStorageKeys*** is chosen, the countermeasure to Wipe all encryption keys, deployed using that Managed Configuration group **Security Configuration** is performed when the associated threat is detected.

- When the value ***LockDevice*** is chosen, the countermeasure to lock the device, requiring it to be unlocked by the Device User, is performed when the associated threat is detected.

- When the value ***UninstallApplication*** is chosen, the countermeasure to Uninstall an application is performed when the associated threat is detected. The additional Managed Configuration **Threat Management - Action Detect Countermeasure Uninstall Package Name** MUST be specified to provide the Android Package Name of the application that is uninstalled.

- When the value ***UnsolicitedAlert*** is chosen, the countermeasure to send an unsolicited alert through an Android Intent is performed when the associated threat is detected. The additional Managed Configurations **Threat Management - Action Detect Countermeasure Unsolicited Alert Package Name**, **Threat Management - Action Detect Countermeasure Unsolicited Alert Class**, and **Threat Management - Action Detect Countermeasure Unsolicited Alert Message** MUST be specified to provide the information needed to deliver the alert.


##### Threat Management - Action Detect Countermeasure Uninstall Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of an application that is uninstalled as a countermeasure to mitigate a threat when the value ***UninstallApplication*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

##### Threat Management - Action Detect Countermeasure Unsolicited Alert Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of an application that is sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

##### Threat Management - Action Detect Countermeasure Unsolicited Alert Class

This Managed Configuration allows an Administrator using an EMM to specify the Class Name of component within an application that is sent an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

##### Threat Management - Action Detect Countermeasure Unsolicited Alert Message

This Managed Configuration allows an Administrator using an EMM to specify the string text message that is sent to a component of an application through an unsolicited alert to notify it that a threat has been detected as a countermeasure to mitigate a threat when the value ***UnsolicitedAlert*** is chosen for the Managed Configuration **Threat Management - Action Detect Countermeasure Type**. 

### Threat Management - Action Detect Threat Type MDM Client Removal Package Name

This Managed Configuration allows an Administrator using an EMM to specify the Android Package Name of the MDM Agent that is monitored to detect a threat when the value ***MDM Client Removal*** is chosen for the Managed Configuration **Threat Management - Action**. 

### Threat Management - Action Ignore Threat Type

This Managed Configuration allows an Administrator using an EMM to specify the type of threat that is NOT monitored and cannot be detected when the value ***Ignore*** is chosen for the Managed Configuration **Threat Management - Action**.

- If the value ***Max Password Attempts*** is chosen, the Threat Management System is configured NOT to monitor password entry attempts and never detects the threat of exceeding the maximum number of unsuccessful password entry attempts.

- If the value ***MDM Client Removal*** is chosen, the Threat Management System is configured NOT to monitor the device or detect whether a specific Android Package Name is ever uninstalled from the device, and never detects the threat of removal of the MDM Client.

- If the value ***Externally Detected*** is chosen, the Threat Management System is configured NOT to listen for indication from an application on the device that can signal a threat and **external threats are NEVER detected**.

- If the value ***Exchange Active Sync Command*** is chosen, the Threat Management System is configured NOT to handle a threat detected and signaled by a connection to an Exchange Active Sync Server through an Exchange Active Sync Client on the device and **such threats are NOT detected**.

- If the value ***Device is Rooted*** is chosen, the Threat Management System is configured NOT to monitor the device to see if it has been rooted and **the threat of the device being rooted are NEVER detected**. 

### Threat Management - Periodic Scan

This Managed Configuration allows an Administrator using an EMM to configure whether the Threat Management System should perform background polling to increase the accuracy and timeliness of detection of Rooted Device threat.

- When the value ***Off*** is chosen, the Threat Management System does NOT perform background polling. This might increase performance and improve battery life somewhat, but also reduces the ability to detect the Rooted Device threat and/or result in a delay in detection of that threat.

- When the Action value ***On*** is chosen, the Threat Management System performs background polling. This might reduce performance and degrade battery life somewhat, but also increases the ability to detect the Rooted Device threat and accelerate detection of that threat. The additional Managed Configurations **Threat Management - Periodic Scan Interval**, **Threat Management - Periodic Scan Additional Folders**, and **Threat Management - Periodic Scan Additional Folders List** can be used to adjust the nature of the background polling, allowing trade-offs to be made in the balance of thoroughness vs. the impact to performance and battery life. This value should generally be chosen only if detection of the ***Device is Rooted*** threat has been enabled, since it would have little value otherwise. 

### Threat Management - Periodic Scan Interval

This Managed Configuration allows an Administrator using an EMM to configure the interval between polls when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan**.

The interval is specified in seconds between polls.

- Choosing a lower value can increase the aggressiveness of detection of rooted devices, which can reduce the time required to successfully detect that a device has been rooted, but also can reduce the impact of polling on performance and battery life. 

- Choosing a higher value can reduce the aggressiveness of detection of rooted devices, which can increase the time required to successfully detect that a device has been rooted, but also can decrease the impact of polling on performance and battery life. 

### Threat Management - Periodic Scan Additional Folders

This Managed Configuration allows an Administrator using an EMM to configure whether additional folders is polled when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan**.

When background polling to detect device rooting is performed, the Threat Management System always scans certain key folders considered common or likely locations where changes might occur that could signal that the device has been rooted. In some cases, rooting might occur through changes made to other folders.

- If the value ***Off*** is chosen, the Threat Management System scans only the default folders.

- If the value ***On*** is chosen, the Threat Management System scans the default folders plus additional folders. The additional Managed Configuration **Threat Management - Periodic Scan Additional Folders List** also MUST be specified to identify the list of additional folders to be scanned.
- If the value ***Off*** is chosen, the Threat Management System scans only the default folders.



### Threat Management - Periodic Scan Additional Folders List

This Managed Configuration allows an Administrator using an EMM to configure a list of additional folders polled when the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan** and the value ***On*** is chosen for the Managed Configuration **Threat Management - Periodic Scan Additional Folders**.


### Threat Management - Send Externally Detected Threat Message

This Managed Configuration allows an application to signal the fact that it has detected the occurrence of an externally detected threat. This is generally relevant only if the ***Externally Detected*** threat is configured to be detected, since any signaling of an externally detected threat is otherwise ignored.

Managed Configurations can be applied only by an application that is the Device Owner or by an application to which the Device Owner has explicitly delegated the ability to apply Managed Configurations. If the ***Externally Detected*** threat has been configured to be detected, any application that is allowed to apply Managed Configurations could watch for anything it considered a threat and use this Managed Configuration to signal the occurrence of that threat. On receiving the signal, Threat Management performs whatever countermeasures were configured to mitigate that threat. 

## Volume UI Configuration

This Managed Configuration group allows an Administrator using an EMM to configure the UI behavior of the Zebra Volume Control on a Zebra Android device. 

### Volume UI Configuration - Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to alter the UI behavior of the *Zebra Volume Control* on a Zebra Android device.

The *Zebra Volume Control* provides a configurable UI that allows Device Users to adjust the volume of one or more *Audio Streams* on a Zebra Android device. The UI behavior of the *Zebra Volume Control* is configured by defining one or more *Audio UI Profiles* and controlling which is active. Each *Audio UI Profile* defines which *Audio Streams* can be configured, and adjusts the experience of the Device User when adjusting the volumes of those *Audio Streams*. The *Zebra Volume Control* also has a *Factory Preset Audio UI Profile* that can be used to return the behavior of the *Zebra Volume Control* to its out-of-box state.

- When the Action value ***Add Profile*** is chosen, a new *Audio UI Profile* is added to the list of *Audio UI Profiles*. The additional Managed Configurations **Volume UI Configuration - Action Add Profile Name** and **Volume UI Configuration - Action Add Profile Streams** MUST also be specified to define the *Audio UI Profile* being added.

- When the Action value ***Remove Profile*** is chosen, an existing *Audio UI Profile* is removed from the list of *Audio UI Profiles*. The additional Managed Configuration **Volume UI Configuration - Action Remove Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be removed.

- When the Action value ***Set Current Profile*** is chosen, an existing *Audio UI Profile* is set to be the active *Audio UI Profile*. The additional Managed Configuration **Volume UI Configuration - Action Set Current Profile Name** MUST also be specified to provide the name that identifies the *Audio UI Profile* to be made the new active *Audio UI Profile*.

- When the Action value ***Apply Current Profile*** is chosen, the currently active *Audio UI Profile* is applied to the current device *Volume Settings*. If the current device *Volume Settings* are outside the range of *Volume Settings* defined for the currently active *Audio UI Profile*, the current device *Volume Settings* is adjusted as needed to bring them within the range of *Volume Settings* defined for the currently active *Audio UI Profile*.

- When the Action value ***Set Factory Preset*** is chosen, the *Factory Preset Audio UI Profile* is made the active *Audio UI Profile*, causing the behavior of the *Zebra Volume Control* to return to its default out-of-box state. 

### Volume UI Configuration - Action Add Profile Name

This Managed Configuration allows an Administrator using an EMM to provide the name of a new *Audio UI Profile* to be added and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 

- If an *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* replaces the existing *Audio UI Profile* with that name.

- If no *Audio UI Profile* with the specified name already exists, the new *Audio UI Profile* is added with that name. 

### Volume UI Configuration - Action Add Profile Streams

This Managed Configuration array allows an Administrator using an EMM to define a set of *Audio Streams* included as part of a new *Audio UI Profile* being added, and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 


#### Volume UI Configuration - Action Add Profile Stream

This Managed Configuration group allows an Administrator using an EMM to define a single *Audio Stream* included as part of a new *Audio UI Profile* being added and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**, as part of the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream**. 

##### Volume UI Configuration - Action Add Profile Stream Type

This Managed Configuration allows an Administrator using an EMM to specify the type of a single *Audio Stream* included as part of a new *Audio UI Profile* being added and MUST be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**. Some or all of the additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Label**, **Volume UI Configuration - Action Add Profile Stream Icon**, **Volume UI Configuration - Action Add Profile Stream Visible**, and **Volume UI Configuration - Action Add Profile Stream Modes** should also be specified to define the characteristics of the new *Audio Stream* of the specified type that is added.

- If the value ***Music*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for playback of music and other media.

- If the value ***Ring*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for ringtones.

- If the value ***Notification*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for notifications.

- If the value ***System*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for system sounds.

- If the value ***Alarm*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for alarms.

- If the value ***VoiceCall*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for voice calls.

- If the value ***VVS*** is chosen, the *Audio Stream* being added to the new *Audio UI Profile* defines the behavior of the Zebra Volume Control with respect to the *Audio Stream* used for Decode Beep Vertical Volume Scale (VVS). 

##### Volume UI Configuration - Action Add Profile Stream Label

This Managed Configuration allows an Administrator using an EMM to specify the text label to be displayed for a single *Audio Stream* included as part of a new *Audio UI Profile* being added, and might be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The text label might be changed for an *Audio Stream* because it is used for some purpose(s) other than those identified by the default text label. Changing the text label to something more description of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.

If no text label is specified for an *Audio Stream*, the *Factory Preset* default text label is used.


##### Volume UI Configuration - Action Add Profile Stream Icon

This Managed Configuration allows an Administrator using an EMM to specify the icon to be displayed for a single *Audio Stream* that is included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The icon might be changed for an *Audio Stream* because it is used for some purpose(s) other than the one identified by the default text label. Changing the icon to something more representative of the actual purpose(s) for which the *Audio Stream* is used can make the Zebra Volume Control behavior more intuitive for the Device User.

If an icon is specified, the value specified must be the full path and file name of a PNG format icon file that must already be present in the device file system. Zebra recommends an icon size of 48x48 pixels.

If no icon is specified for an *Audio Stream*, the *Factory Preset* default icon is used.


##### Volume UI Configuration - Action Add Profile Stream Visible

This Managed Configuration allows an Administrator using an EMM to specify whether a single *Audio Stream* is visible to the Device User within the *Zebra Volume Control* when it is included as part of a new *Audio UI Profile* being added and may be specified within each instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

If an *Audio Stream* is made invisible for an *Audio UI Profile*, the *Zebra Volume Control* is not present on ANY UI for the Device User to control the volume of that *Audio Stream*. The result is functionally equivalent to omitting the *Audio Stream* from the *Audio UI Profile*. This can be useful as a means to temporarily disable an *Audio Stream* that avoids the need to remove and restore its entire definition. 

##### Volume UI Configuration - Action Add Profile Stream Modes

This Managed Configuration array allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in one or more modes as part of a new *Audio UI Profile* being added and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** and as part of an instance of the group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**. 

###### Volume UI Configuration - Action Add Profile Stream Mode

This Managed Configuration group allows an Administrator using an EMM to define the behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

For each *Audio Mode* defined for an *Audio Stream*, the additional Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Type** MUST be specified to identify which *Audio Mode* is defined. The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum**, **Volume UI Configuration - Action Add Profile Stream Mode Maximum**, and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST also be specified to define the lower, upper, and default (preset) volume levels for that *Audio Mode* within that *Audio Stream*. 

###### Volume UI Configuration - Action Add Profile Stream Mode Minimum

This Managed Configuration allows an Administrator using an EMM to define the minimum volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Maximum** and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for this Managed Configuration must be less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Maximum** and less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Preset**. 

###### Volume UI Configuration - Action Add Profile Stream Mode Maximum

This Managed Configuration allows an Administrator using an EMM to define the maximum volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added and should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and **Volume UI Configuration - Action Add Profile Stream Mode Preset** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Preset**. 

###### Volume UI Configuration - Action Add Profile Stream Mode Preset

This Managed Configuration allows an Administrator using an EMM to define the preset volume level that the UI allows the Device User to select for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

The value must be an integer that is greater than 0 and less than 256, with 1 being the lowest possible volume level and 255 being the highest possible volume level.

The additional Managed Configurations **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and **Volume UI Configuration - Action Add Profile Stream Mode Maximum** MUST be specified to define the complete behavior of a single *Audio Mode* within a single *Audio Stream*.

The value specified for of this Managed Configuration must be greater than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Minimum** and less than or equal to the value specified for the Managed Configuration **Volume UI Configuration - Action Add Profile Stream Mode Maximum**. 

###### Volume UI Configuration - Action Add Profile Stream Mode Type

This Managed Configuration allows an Administrator using an EMM to define the type of behavior of the UI for a single *Audio Stream* in a single *Audio Mode* as part of a new *Audio UI Profile* being added. This should be specified only if the value ***Add Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Stream Modes** as an instance of the Managed Configuration group **Volume UI Configuration - Action Add Profile Stream** within the Managed Configuration array **Volume UI Configuration - Action Add Profile Streams**.

If the value ***Speaker*** is chosen, the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to the built-in device speaker.

If the value ***Receiver*** is chosen, the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to receiver mode.

If the value ***WiredHeadset*** is chosen, the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to a wired audio headset.

If the value ***BluetoothHeadset*** is chosen, the *Audio Mode* is configured for the *Audio Stream* for conditions under which the *Audio Stream* is routed to a wireless Bluetooth audio headset.



### Volume UI Configuration - Action Remove Profile Name

This Managed Configuration allows an Administrator using an EMM to provide the name of an existing *Audio UI Profile* to be removed and should be specified only if the value ***Remove Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. 

### Volume UI Configuration - Action Set Current Profile Name

This Managed Configuration allows an Administrator using an EMM to provide the name of an existing *Audio UI Profile* to be made the current active *Audio UI Profile*and should be specified only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action**. The additional Managed Configuration **Volume UI Configuration - Action Set Current Profile Adjust Volume** MUST be specified to control whether the current device *Volume Settings* is adjusted to ensure that they fall within the range of *Volume Settings* defined by the *Audio UI Profile*. 

### Volume UI Configuration - Action Set Current Profile Adjust Volume

This Managed Configuration allows an Administrator using an EMM to configure the current device *Volume Settings* is adjusted to ensure that they fall within the range of *Volume Settings* defined by an *Audio UI Profile* being made the new current *Audio UI Profile* to be made the current active *Audio UI Profile*. This should be specified only if the value ***Set Current Profile*** is chosen for the Managed Configuration **Volume UI Configuration - Action** and the Managed Configuration **Volume UI Configuration - Action Set Current Profile Name** is specified. 

## Wakeup Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wake-ups on a Zebra Android device. 

### Wakeup Configuration - Wake-up Sources

This Managed Configuration allows an Administrator using an EMM to configure whether all controllable Wake-up Sources should be turned on or off.

- If the value ***Off*** is chosen, all wake-up sources that can be turned on or off are turned off, causing the physical events corresponding to those wake-up sources to be ignored, preventing them from causing the device to wake up from a suspend state.

- If the value ***On*** is chosen, all wake-up sources that can be turned on or off are turned on, causing the physical events corresponding to those wakeup sources to be honored, causing the device to wake up from a suspend state.



## Whitelist Configuration

This Managed Configuration group allows an Administrator using an EMM to configure which applications can be installed and run on a Zebra Android device. 

### Whitelist Configuration - Mode

This Managed Configuration allows an Administrator using an EMM to configure the Whitelisting Mode, which determines how the applications that can be installed and run on a Zebra Android device is controlled.

 - If the value ***Package Name Only*** is chosen, allows only the app package name to control which applications can be installed and run.

 - If the value ***Package Name and Signature*** is chosen, requires the app package name *and* the signature to control which applications can be installed and run. 

Using the value ***Package Name and Signature*** provides significantly better security than using ***Package Name Only*** since it provides much stronger protection against spoofing. If ***Package Name Only*** is used, any APK with a Android Package Name matching one of the allowed Package Names is allowed to be installed and run. Since any APK can be assigned any Package Name, the potential for a rogue application circumventing the protections of Whitelisting is relatively high. If ***Package Name and Signature*** is used, the Signature of an application must match an allowed Signature in addition to the Package Name matching and allowed Package Name. Since a rogue APK cannot be signed with a given Signature without possessing the corresponding Private Key, the chances of successfully spoofing are greatly reduced, and effectively eliminated if Private Keys are properly controlled.


### Whitelist Configuration - Action

This Managed Configuration group allows an Administrator using an EMM to perform an action to alter the Whitelisting configuration of a Zebra Android device.

- If the value ***Allow*** is chosen, a single application is allowed to be installed and run. The additional Managed Configuration **Whitelist Configuration - Action Allow Package Name** MUST be specified to supply the Android Package Name of the application that is allowed. In addition, if the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Allow Signature** MUST also be specified to provide the Signature to be allowed.

- If the value ***Disallow*** is chosen, the specified application is prevented from being installed and run. The additional Managed Configuration **Whitelist Configuration - Action Disallow Package Name** MUST be specified to supply the Android Package Name of the application that is disallowed.


### Whitelist Configuration - Action Allow Package Name

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Whitelist Configuration - Action**. 

If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Allow Signature** MUST also be specified to provide the Signature to be allowed. 

### Whitelist Configuration - Action Allow Signature

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be allowed when the value ***Allow*** is chosen for the Managed Configuration **Whitelist Configuration - Action** and should be specified only if the Managed Configuration **Whitelist Configuration - Action Allow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**. 

### Whitelist Configuration - Action Disallow Signature

This Managed Configuration group allows an Administrator using an EMM to provide the Package Signature of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Whitelist Configuration - Action** and should be specified only if the Managed Configuration **Whitelist Configuration - Action Disallow Package Name** is specified and the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**. 

### Whitelist Configuration - Action Disallow Package Name

This Managed Configuration group allows an Administrator using an EMM to provide the Android Package Name of an application to be disallowed when the value ***Disallow*** is chosen for the Managed Configuration **Whitelist Configuration - Action**. 

If the value ***Package Name and Signature*** is chosen for the Managed Configuration **Whitelist Configuration - Mode**, the additional Managed Configuration **Whitelist Configuration - Action Disallow Signature** MUST also be specified to provide the Signature to be allowed. 

### Whitelist Configuration - State

This Managed Configuration allows an Administrator using an EMM to configure the Whitelisting State, which determines whether the set of applications that can be installed and run on a Zebra Android device is controlled.

 - If the value ***Off*** is chosen, Whitelisting is not used and no restrictions are placed on which applications can be installed and run.

 - If the value ***On*** is chosen, Whitelisting is used and additional Managed Configurations can be specified to configure how the set of applications is controlled and which applications can be installed and run. 

## Wireless General Configuration

This Managed Configuration group allows an Administrator using an EMM to configure General Wireless settings on a Zebra Android device. 

### Wireless General Configuration - Antenna Selection

This Managed Configuration group allows an Administrator using an EMM to configure which of multiple antennas should be used for wireless communications.

- If the value ***Internal*** is chosen, the internal built-in antenna is used.

- If the value ***External*** is chosen, an externally connected antenna is used.



### Wireless General Configuration - GPS Power State

This Managed Configuration group allows an Administrator using an EMM to configure whether the GPS radio state should be On or Off.

- If the value ***Off*** is chosen, the GPS radio is turned off, preventing GPS-based location detection.

- If the value ***On*** is chosen, the GPS radio is turned on, allowing GPS-based location detection, given satellite availability.


## Wireless LAN Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wireless Local Area Network (WLAN) settings on a Zebra Android device.

This Managed Configuration group allows an Administrator using an EMM to:

- Configure the frequency *Bands* on which the WLAN operates.

- Configure the specific *Country* in which the WLAN operates OR configures the *Country* to be determined automatically. 

### Wireless LAN Configuration - Bands

This Managed Configuration allows an Administrator using an EMM to configure the frequency *Bands* on which the WLAN subsystem operates on a Zebra Android device.

This Managed Configuration supports the following values:

- If a value of ***2.4GHz*** is chosen, only the 2.4 Gigahertz (Ghz) *Band* (used by 802.11b and 802.11g) is used.

- If a value of ***5.0GHz*** is chosen, only the 5.0 Gigahertz (Ghz) *Band* (used by 802.11a) is used.

- If a value of ***Auto*** is chosen, the *Band* to be used is determined automatically. 

### Wireless LAN Configuration - Channels

This Managed Configuration allows an Administrator using an EMM to configure the channels over which the WLAN subsystem operates on a Zebra Android device.

The format of the value entered must be 64 characters or less and can specify one or more channels by separating values by commas and/or specifying ranges of values by separating the lower and upper range values with a dash (-). Some examples:
- 1,2,3
- 3,6,7-9,11-13

The actual channel that can specified depend on the value chosen for the Managed Configuration **Wireless LAN Configuration - Bands**.

- If the value ***2.4GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels in the 2.4 Ghz band must be selected.

- If the value ***5.0GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels in the 5.0 Ghz band must be selected.

- If the value ***Auto*** is specified for the Managed Configuration **Wireless LAN Configuration - Bands**, channels selected in either band are used.

Note that individual countries can apply their own regulations regarding allowable channels. Depending on the value chosen for the Managed Configuration **Wireless LAN Configuration - Country**, it is possible that some or all of the channel values specified for a given band are disallowed.


### Wireless LAN Configuration - Country

This Managed Configuration allows an Administrator using an EMM to configure the *Country* in which the WLAN subsystem operate on a Zebra Android device.

This Managed Configuration supports the following values:

- When a value of ***Auto (Use 802.11d)*** is chosen, the *Country* to be used is determined automatically.

- When any other value is chosen, the specified *Country* is used. 

### Wireless LAN Configuration - Hotspot State

This Managed Configuration allows an Administrator using an EMM to configure the state of the *Hotspot Mode* of the WLAN adapter on a Zebra Android device.

- If the value ***Off*** is chosen, prevents the device from sharing its Internet connection as a WLAN Hotspot. Existing *Hotspot Mode* configuration settings are not affected, allowing *Hotspot Mode* to be configured and tested, then turned OFF and back ON without reconfiguration.

- If the value ***On*** is chosen, the device can share its Internet connection as a WLAN Hotspot, subject to appropriate configuration settings related to *Hotspot Mode*. 

### Wireless LAN Configuration - Hotspot Options

This Managed Configuration group allows an Administrator using an EMM to configure all settings related to *Hotspot Mode* of the WLAN adapter on a Zebra Android device except the state of *Hotspot Mode*, which is configured using Managed Configuration **Wireless LAN Configuration - Hotspot State**.

All the settings is this group can be configured independently of the state of *Hotspot Mode*, thus allowing *Hotspot Mode* to be configured before it is turned ON and allowing the configuration of *Hotspot Mode* to be established and maintained across multiple changes to the state of *Hotspot Mode*. 

#### Wireless LAN Configuration - Hotspot SSID

This Managed Configuration allows an Administrator using an EMM to configure the Service Set Identifier (SSID) that identifies the network supported in *Hotspot Mode* of the WLAN adapter on a Zebra Android device. 

#### Wireless LAN Configuration - Hotspot Band

This Managed Configuration allows an Administrator using an EMM to configure the *Frequency Band* in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device.

- If the value ***2.4GHz*** is chosen, the *Hotspot Mode* of the WLAN adapter operates solely in the 2.4 Gigahertz (GHz) *Frequency Band*, and only devices capable of operating in that *Frequency Band* are capable of sharing the Internet connection of the Zebra Android device using *Hotspot Mode*.

- If the value ***5GHz*** is chosen, the *Hotspot Mode* of the WLAN adapter operates solely in the 5.0GHz *Frequency Band*, and only devices capable of operating in that *Frequency Band* are capable of sharing the Internet connection of the Zebra Android device using *Hotspot Mode*.


#### Wireless LAN Configuration - Hotspot Band 2.4GHz Channel

This Managed Configuration allows an Administrator using an EMM to configure the single 2.4 HGHz Channel in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device and should be specified if and only if the value ***2.4GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Band**.



#### Wireless LAN Configuration - Hotspot Band 5GHz Channel

This Managed Configuration allows an Administrator using an EMM to configure the single 5.0GHz Channel in which *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device and should be specified if and only if the value ***5GHz*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Band**.


#### Wireless LAN Configuration - Hotspot Security Mode

This Managed Configuration allows an Administrator using an EMM to configure the *Security Mode* to be used to secure the *Hotspot Mode* of the WLAN adapter operates on a Zebra Android device.

- If the value ***Open*** is chosen, the WLAN adapter applies no security for *Hotspot Mode*, thus providing no control over which devices can connect and share the Internet connection of the Zebra Android device using *Hotspot Mode*.

- If the value ***WPA2/PSK*** is chosen, the WLAN adapter applies Wi-Fi Protected Access Version 2 (WPA2) Pre-shared Key (PSK) security for *Hotspot Mode*, providing some control over which devices can connect and share the Internet connection of the Zebra Android device using *Hotspot Mode*. The additional Managed Configuration **Wireless LAN Configuration - Hotspot Security Passphrase** MUST be specified to provide the PSK pass-phrase used to secure the network. 

#### Wireless LAN Configuration - Hotspot Security Passphrase

This Managed Configuration allows an Administrator using an EMM to provide the PSK passphrase that is used to secure the *Hotspot Mode* network implemented by the WLAN adapter on a Zebra Android device, and should be specified if and only if the value ***WPA2/PSK*** is specified for the Managed Configuration **Wireless LAN Configuration - Hotspot Security Mode**. 

### Wireless LAN Configuration - Omnitrail

This Managed Configuration group allows an Administrator using an EMM to configure Omnitrail settings for the WLAN adapter on a Zebra Android device. 

#### Wireless LAN Configuration - Omnitrail State

This Managed Configuration allows an Administrator using an EMM to configure whether the Omnitrail feature of the WLAN adapter is turned On or Off for a Zebra Android device. 

#### Wireless LAN Configuration - Omnitrail Interval

This Managed Configuration allows an Administrator using an EMM to configure the interval at which the Omnitrail feature of the WLAN adapter should emit a locational beacon on a Zebra Android device.

The value provided should be in milliseconds (ms) and should have a value in the range of 200 ms (0.2 seconds) to 5000 ms (5 seconds). 

#### Wireless LAN Configuration - Omnitrail Options

This Managed Configuration array allows an Administrator using an EMM to specify one or more Omnitrail options to be configured for the WLAN adapter on a Zebra Android device. 

##### Wireless LAN Configuration - Omnitrail Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. 

###### Wireless LAN Configuration - Omnitrail Option Name

This Managed Configuration allows an Administrator using an EMM to select a standard name that identifies a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Option Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the selected name. 

###### Wireless LAN Configuration - Omnitrail Option Name Custom

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a Omnitrail option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Option Value** MUST also be specified to provide the value to be set for the Omnitrail option identified by the specified name. 

###### Wireless LAN Configuration - Omnitrail Option Value

This Managed Configuration allows an Administrator using an EMM to specify a value for a single Omnitrail option to be configured for the WLAN adapter on a Zebra Android device and should be specified if and only if either the Managed Configuration **Wireless LAN Configuration - Omnitrail Option Name** or the Managed Configuration **Wireless LAN Configuration - Omnitrail Option Custom Name** is also specified to provide the name needed identity the Omnitrail option to be set. 

#### Wireless LAN Configuration - Omnitrail Data rate Standard

This Managed Configuration allows an Administrator using an EMM to select an Omnitrail data rate standard to be used by the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate** MUST also be specified to provide the actual data rate to be used.

- If the value ***abg*** is chosen, the Omnitrail data rate standard is set for 802.11a, 802.11b, and 802,11g.

- If the value ***11n*** is chosen, the Omnitrail data rate standard is set for 802.11n.

- If the value ***11ac*** is chosen, the Omnitrail data rate standard is set for 802.11a and 802,11c.



#### Wireless LAN Configuration - Omnitrail Data rate

This Managed Configuration allows an Administrator using an EMM to select an Omnitrail data rate to be used by the WLAN adapter on a Zebra Android device and should be specified if and only if the Managed Configuration **Wireless LAN Configuration - Omnitrail data rate Standard** is also specified to identify the data rate standard, which restricts the data rates that can be specified.

- If the value ***abg*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

- If the value ***11n*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

- If the value ***11ac*** is chosen for the Managed Configuration **Wireless LAN Configuration - Omnitrail Data rate Standard**, the following data rates are selectable:

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

### Wireless LAN Configuration - Advanced Options

This Managed Configuration array allows an Administrator using an EMM to specify one or more advanced options to be configured for the WLAN adapter on a Zebra Android device. 

#### Wireless LAN Configuration - Advanced Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device. 

##### Wireless LAN Configuration - Advanced Option Name

This Managed Configuration allows an Administrator using an EMM to select a standard name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Advanced Option Value** MUST also be specified to provide the value to be set for the advanced option identified by the selected name.


##### Wireless LAN Configuration - Advanced Option Custom Name

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a single advanced option to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Advanced Option Value** MUST also be specified to provide the value to be set for the advanced option identified by the specified name. 

##### Wireless LAN Configuration - Advanced Option Value

This Managed Configuration allows an Administrator using an EMM to specify a value for a single advanced option to be configured for the WLAN adapter on a Zebra Android device and should be specified if and only if either the Managed Configuration **Wireless LAN Configuration - Advanced Option Name** or the Managed Configuration **Wireless LAN Configuration - Advanced Option Custom Name** is also specified to provide the name needed identity the advanced option to be set. 

### Wireless LAN Configuration - Diagnostics Options

This Managed Configuration group allows an Administrator using an EMM to specify one or more *Diagnostic Options* to be configured for the WLAN adapter on a Zebra Android device. 

#### Wireless LAN Configuration - Diagnostics Option Pair

This Managed Configuration group allows an Administrator using an EMM to specify a name and value for a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. 

##### Wireless LAN Configuration - Diagnostic Option Name

This Managed Configuration allows an Administrator using an EMM to enter a standard name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name. 


##### Wireless LAN Configuration - Diagnostic Option Name Custom

This Managed Configuration allows an Administrator using an EMM to enter a custom name that identifies a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Value** MUST also be specified to provide the value to be set for the *Diagnostic Option* identified by the specified name. 

##### Wireless LAN Configuration - Diagnostic Option Value

This Managed Configuration allows an Administrator using an EMM to enter a value to be assigned to a single *Diagnostic Option* to be configured for the WLAN adapter on a Zebra Android device. The additional Managed Configuration **Wireless LAN Configuration - Diagnostic Option Name** or the Managed Configuration **Wireless LAN Configuration - Diagnostic Option Name Custom** MUST be specified to provide the name that identifies the *Diagnostic Option* to be set. 

### Wireless LAN Configuration - Network Notification

This Managed Configuration allows an Administrator using an EMM to configure whether the Device User is notified about, and allowed to connect to, new WLANs that are detected.

- If the value ***Off*** is chosen, the Device User is NOT notified about, nor allowed to connect to, new WLANs that are detected.

- If the value ***On*** is chosen, the Device User is notified about, and allowed to connect to, new WLANs that are detected. 

## Wireless WAN Configuration

This Managed Configuration group allows an Administrator using an EMM to configure Wireless Wide Area Network (WWAN) settings on a Zebra Android device.


### Wireless WAN Configuration - Power

This Managed Configuration allows an Administrator using an EMM to configure the Power State of the WWAN adapter.

A given device may or may not support a WWAN adapter. An attempt to configure the WWAN adapter on a device that does not have one results in an error. 

### Wireless WAN Configuration - Background Data

This Managed Configuration allows an Administrator using an EMM to configure whether WWAN data can be used by applications that are in the *Background*.

- When a value of ***Disallow*** is chosen, the use of WWAN data by applications that are in the *Background* is prevented.

- When a value of ***Allow*** is chosen, the use of WWAN data by applications that are in the *Background* is allowed.


### Wireless WAN Configuration - State

This Managed Configuration allows an Administrator using an EMM to configure the *Power State* of the WWAN adapter.

- If the value ***Off*** is chosen, the power to the WWAN adapter is turned OFF, preventing all communications through the WWAN adapter and reducing battery drain.

- If the value ***On*** is chosen, the power to the WWAN adapter is turned ON, potentially allowing communications through the WWAN adapter and increasing battery drain.


### Wireless WAN Configuration - SIM Card Slot

This Managed Configuration allows an Administrator using an EMM to configure SIM card slot that is used by the WWAN adapter.

A given device may or may not support a WWAN adapter. An attempt to configure the WWAN adapter on a device that does not have one results in an error. 
A given device may have a limited number of SIM card slots. An attempt to configure the WWAN adapter to use an unsupported SIM card slot results in an error.
A given device may support a given SIM car slot, but that SIM car slot may not contain a SIM card. An attempt to configure the WWAN adapter to use a supported but unpopulated SIM card slot results in an error.

- When a value of ***Slot 1*** is chosen, the WWAN adapter attempts to use the SIM card slot designated as Slot 1.

- When a value of ***Slot 2*** is chosen, the WWAN adapter attempts to use the SIM card slot designated as Slot 2.

- When a value of ***Slot 3*** is chosen, the WWAN adapter attempts to use the SIM card slot designated as Slot 3.

- When a value of ***Slot 4*** is chosen, the WWAN adapter attempts to use the SIM card slot designated as Slot 4.



### Wireless WAN Configuration - Data Limit State

This Managed Configuration allows an Administrator using an EMM to configure whether a limit should be imposed on the amount of WWAN data used, such as to cap telecom expenses.

- When a value of ***Enable and set default limit*** is chosen, a default limit is imposed on the amount of WWAN data that can be used.

- When a value of ***Enable and set custom limit*** is chosen, a custom limit is imposed on the amount of WWAN data that can be used and the additional Managed Configuration *Wireless WAN Configuration - Data Limit State Custom Limit* MUST be provided to specify the desired custom limit.

- When a value of ***Disable*** is chosen, no limit is imposed on the amount of WWAN data that can be used.






### Wireless WAN Configuration - Data Limit State Custom Limit

This Managed Configuration allows an Administrator using an EMM to configure a custom limit that should be imposed on the amount of WWAN data used, such as to cap telecom expenses, and should be specified if and only if the value ***Enable and set custom limit*** is chosen for the Managed Configuration *Wireless WAN Configuration - Data Limit State*.

The custom limit should be an integer value specifying the maximum amount of WWAN data that can be used, in megabytes (MB).


### Wireless WAN Configuration - Data Warning Threshold

This Managed Configuration allows an Administrator using an EMM to configure a threshold such that if the amount of WWAN data used exceeds that threshold, a warning is displayed to the Device User.

The threshold should be an integer value specifying the threshold amount of WWAN data, in megabytes (MB).


### Wireless WAN Configuration - User Control of Background Data

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter.

- If the value ***Disallow*** is chosen,  the Device User is blocked from using the Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to ensure that the Administrator settings related to usage of background data cannot be overridden by the Device User.

- If the value ***Allow*** is chosen,  the Device User is allowed to use the Settings Menu to change whether applications running in the background are allowed to communicate using the WWAN adapter. This can be used to enable the Device User to override settings related to usage of background data that were set by the Administrator. 

### Wireless WAN Configuration - User Control of Data Limit

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change limits on how much data can be communicated using the WWAN adapter.

- If the value ***Disallow*** is chosen,  the Device User is blocked from using the Settings Menu to change limits on how much data can be communicated using the WWAN adapter. This can be used to ensure that the Administrator settings related to data limits cannot be overridden by the Device User.

- If the value ***Allow*** is chosen,  the Device User is allowed to use the Settings Menu to change limits on how much data can be communicated using the WWAN adapter. This can be used to enable the Device User to override settings related to data limits that were set by the Administrator.


### Wireless WAN Configuration - User Control of Power

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to change the *Power State* of the WWAN adapter.

- If the value ***Disallow*** is chosen,  the Device User is blocked from using the Settings Menu to change the *Power State* of the WWAN adapter. This can be used to ensure that the Administrator settings related the *Power State* of the WWAN adapter cannot be overridden by the Device User.

- If the value ***Allow*** is chosen,  the Device User is allowed to use the Settings Menu to change the *Power State* of the WWAN adapter. This can be used to enable the Device User to override the *Power State* of the WWAN adapter that was set by the Administrator. 

### Wireless WAN Configuration - User Control of Sim Socket

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to use the in-device Settings Menu to select which SIM slot is used by the WWAN adapter.

- If the value ***Disallow*** is chosen, the Device User is blocked from using the Settings Menu to select which SIM slot is used by the WWAN adapter. This can be used to ensure that the Administrator settings related to SIM slot selection cannot be overridden by the Device User.

- If the value ***Allow*** is chosen, the Device User is allowed to use the Settings Menu to select which SIM slot is used by the WWAN adapter. This can be used to enable the Device User to override theSIM slot selection that was set by the Administrator.


### Wireless WAN Configuration - Public Land Mobile Network Lock

This Managed Configuration allows an Administrator using an EMM to configure whether the WWAN adapter should be locked to a single Public Land Mobile Network Lock (PLMN).

- If the value ***Off*** is chosen, the WWAN adapter is NOT locked to a single Public Land Mobile Network Lock (PLMN) and is free to connect to any PLMN that is compatible with the SIM card being used.

- If the value ***On*** is chosen, the WWAN adapter is locked to a single Public Land Mobile Network Lock (PLMN) and is permitted to connect only to the specified PLMN. The additional Managed Configuration **Wireless WAN Configuration - Public Land Mobile Network Lock Value** MUST be specified to provide the value that identifies the PLMN to which the WWAN adapter should be locked.


### Wireless WAN Configuration - Public Land Mobile Network Lock Value

This Managed Configuration allows an Administrator using an EMM to provide the value that identifies the Public Land Mobile Network Lock (PLMN) to which the WWAN adapter should be locked and should be specified if and only if the value ***On*** is specified for the Managed Configuration **Wireless WAN Configuration - Public Land Mobile Network Lock**.
to a single Public Land Mobile Network Lock (PLMN).

The value provided to identify a PLMN must specify both the Mobile Country Code (MCC) and the Mobile Network Code (MNC). Since all MCC values are three digits and MNC values can be 2 or 3 digits, the value provided must be of the format XXXYY or XXXYYY, where XXX is the three digit MCC value and YY or YYY is the 2 or 3 digit MNC value. 

### Wireless WAN Configuration - User Control of Public Land Mobile Network Lock

This Managed Configuration allows an Administrator using an EMM to configure whether a Device User is allowed to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN).

- If the value ***Disallow*** is chosen, the Device User is blocked from using the Settings Menu to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to ensure that the Administrator settings related to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) cannot be overridden by the Device User.

- If the value ***Allow*** is chosen, the Device User is allowed to use the Settings Menu to control locking of the WWAN adapter to a single Public Land Mobile Network (PLMN). This can be used to enable the Device User to override any locking of the WWAN adapter to a single Public Land Mobile Network (PLMN) that was set by the Administrator. 

### Wireless WAN Configuration - Dual SIM Dual Standby Mode

This Managed Configuration allows an Administrator using an EMM to configure whether the WWAN adapter should handle multiple SIM card(s) in Dual SIM Dual Standby (DSDS) Mode.

- If the value **Off** is chosen, the WWAN adapter is configured to handle multiple SIM card(s) in Single SIM Mode, which means that only one SIM at a time is usable for all carrier services. To use a different SIM, the current SIM must be switched and ALL carrier services switched to the new SIM.

- If the value **On** is chosen, the WWAN adapter is configured to handle multiple SIM card(s) in Dual SIM Dual Standby Mode, under which two SIM cards, if present, can be used at the same time, but only one SIM can be chosen for each carrier service. For example, one SIM might be selected for voice calls and text messages while the other is for data. This can be beneficial if the carriers associated with those SIMs have different performance, pricing, coverage, etc. for various carrier services. 

## Zebra Licensing Configuration

This Managed Configuration group allows an Administrator using an EMM to manage Zebra-issues licenses on a Zebra Android device. 

### Zebra Licensing Configuration - License Action

This Managed Configuration allows an Administrator using an EMM to perform an Action to manage Zebra-issued licenses on a Zebra Android device.

- If the value ***Activate License*** is chosen, a license is activated, making it usable on the device. Some or all of the additional Managed Configurations **Zebra Licensing Configuration - License Action Activate License Method**, **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value**, **Zebra Licensing Configuration - License Action Activate License Method From Server Standard Class**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL**, **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Friendly Name**, **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name**, and **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST be specified to define the license to be activated and how that license should be activated.

- If the value ***Return License*** is chosen, a previously activated license is returned, allowing it to be re-allocated for use on another Zebra Android device. The additional Managed Configurations **Zebra Licensing Configuration - License Action Return License Server Type**, **Zebra Licensing Configuration - License Action Return License Server Type Friendly Name**, and **Zebra Licensing Configuration - License Action Return License AID Value** MUST be specified to define the license to be returned and how that license should be returned.

- If the value ***Return All Licenses*** is chosen, all licenses previously activated from a given *License Server* is returned, allowing them to be re-allocated for use on other Zebra Android devices. The additional Managed Configurations **Zebra Licensing Configuration - License Action Return All Licenses Server Type** and **Zebra Licensing Configuration - License Action Return All Licenses Server Type Friendly Name** MUST be specified to define how the licenses were acquired and therefore to identify which licenses should be returned and how they should be returned.

- If the value ***Refresh License*** is chosen, a previously activated license is refreshed, updating anything that may have changed, such as its expiration date, capabilities, etc. The additional Managed Configuration **Zebra Licensing Configuration - License Action Refresh License AID Value** MUST be specified to identify the license to be refreshed.

- If the value ***Delete Server*** is chosen, a previously defined *Custom Server*, along with all licenses allocated through that *Custom Server*, is deleted. The additional Managed Configuration **Zebra Licensing Configuration - License Action Delete Server Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* to be deleted. 

### Zebra Licensing Configuration - License Action Activate License Method

This Managed Configuration allows an Administrator using an EMM to provide the method that should be used to activate a Zebra-issued license a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

- If the value ***From Server Standard*** is chosen, the license is activated from a Standard Server and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Standard Class** MUST be specified to identify the class of Standard Server through which the license is activated and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value** MUST be specified identify the license to be activated.

- If the value ***From Server Custom*** is chose, the license is activated from a Custom Server and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class** MUST be specified to identify the class of Custom Server through which the license is activated and the additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server AID Value** MUST be specified identify the license to be activated. In addition, the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MAY need to be specified, depending on the value chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class**.

- If the value ***From Local File*** is chosen, the license is activated from a license file stored in the device file system and the additional Managed Configurations **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name** and **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST be specified to identify the license file and the class of Server from which the license file was acquired. 

### Zebra Licensing Configuration - License Action Activate License Method From Server AID Value

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### Zebra Licensing Configuration - License Action Activate License Method From Server Standard Class

This Managed Configuration allows an Administrator using an EMM to provide the Class of Standard Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Standard*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

- If the value ***Production Cloud Direct*** is chosen, the license is activated by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet. The Production Server should be used when deploying licenses to devices for production use.

- If the value ***Test Cloud Direct*** is chosen, the license is activated by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet. The Test Server should be used when tested the deployment of licenses to devices to avoid consuming actual production licenses.


### Zebra Licensing Configuration - License Action Activate License Method From Server Custom Class

This Managed Configuration allows an Administrator using an EMM to provide the Class of Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

- If the value ***Production Cloud Proxy*** is chosen, the license is activated by communicating to a Production *Zebra License Server* at a fixed known location on the Internet through a *Local Proxy Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local Proxy Server* to be used.

- If the value ***Test Cloud Proxy*** is chosen, the license is activated by communicating to a Test *Zebra License Server* at a fixed known location on the Internet through a *Local Proxy Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local Proxy Server* to be used.

- If the value ***Local Direct*** is chosen, the license is activated by communicating to a *Local License Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the *Local License Server* to be used.

- If the value ***Other*** is chosen, the license is activated by communicating to some other Server. The additional Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL** MUST be specified to identify the Server to be used. 

### Zebra Licensing Configuration - License Action Activate License Method From Server Custom URL

This Managed Configuration allows an Administrator using an EMM to provide the URL of a Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**. 

### Zebra Licensing Configuration - License Action Activate License Method From Server Custom Friendly Name

This Managed Configuration allows an Administrator using an EMM to provide a *Friendly Name* for a Custom Server through which a Zebra-issued license is activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Server Custom*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**.

A *Friendly Name* is kept for each Custom Server used to acquire licenses and is used when later operating on such licenses to identify the Custom Server through which a license was acquired and through which it must be refreshed, returned, etc. The *Friendly Name* also is used to identify a Custom Server to be deleted. 

### Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name

This Managed Configuration allows an Administrator using an EMM to provide the local path and file name of a license file in the device file system from a which a Zebra-issued license is activated on a Zebra Android device and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method**. The Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class** MUST also be specified to identify the class of Server from which the license file was acquired, which could impact how it is processed. 

### Zebra Licensing Configuration - License Action Activate License Method From Local File Source Server Class

This Managed Configuration allows an Administrator using an EMM to provide the class of Server from which the license file to be activated was acquired and should be specified if and only if the value ***Activate License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***From Local File*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method** and the Managed Configuration **Zebra Licensing Configuration - License Action Activate License Method From Local File Path and Name** is specified. 

### Zebra Licensing Configuration - License Action Return License Server Type

This Managed Configuration allows an Administrator using an EMM to provide the Type of Standard Server through which a Zebra-issued license was activated on a Zebra Android device and therefore through which it should be returned, and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

- If the value ***Production Cloud Direct*** is chosen, the license is assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and the license is returned by communicating directly to the same server in the same way.

- If the value ***Test Cloud Direct*** is chosen, the license is assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and the license is returned by communicating directly to the same server in the same way.

- If the value ***Server Friendly Name*** is chosen, the license is assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Return License Server Type Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* through which the license was acquired and through which it should be returned. 

### Zebra Licensing Configuration - License Action Return License Server Type Friendly Name

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* through which a Zebra-issued license was activated on a Zebra Android device and therefore through which it should be returned, and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Return License Server Type**. 

### Zebra Licensing Configuration - License Action Return License AID Value

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be returned on a Zebra Android device and should be specified if and only if the value ***Return License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### Zebra Licensing Configuration - License Action Return All Licenses Server Type

This Managed Configuration allows an Administrator using an EMM to provide the Type of Standard Server through which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore through which they should be returned, and should be specified if and only if the value ***Return All License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**.

- If the value ***Production Cloud Direct*** is chosen, the licenses is assumed to have been activated by by communicating directly to a Production *Zebra License Server* at a fixed known location on the Internet and all such licenses is returned by communicating directly to the same server in the same way.

- If the value ***Test Cloud Direct*** is chosen, the licenses is assumed to have been activated by by communicating directly to a Test *Zebra License Server* at a fixed known location on the Internet and all such licenses is returned by communicating directly to the same server in the same way.

- If the value ***Server Friendly Name*** is chosen, the licenses is assumed to have been activated by by communicating to a *Custom Server*. The additional Managed Configuration **Zebra Licensing Configuration - License Action Return All Licenses Server Type Friendly Name** MUST be specified to provide the *Friendly Name* that identifies the *Custom Server* through which the licenses were acquired and through which all such licenses should be returned. 

### Zebra Licensing Configuration - License Action Return All Licenses Server Type Friendly Name

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* through which a set of Zebra-issued licenses was activated on a Zebra Android device and therefore through which they should be returned, and should be specified if and only if the value ***Return All Licenses*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action** and the value ***Server Friendly Name*** was chosen for the Managed Configuration **Zebra Licensing Configuration - License Action Return All Licenses Server Type**. 

### Zebra Licensing Configuration - License Action Refresh License AID Value

This Managed Configuration allows an Administrator using an EMM to provide the Activation Identifier (AID) the identifies a Zebra-issued license to be refreshed on a Zebra Android device and should be specified if and only if the value ***Refresh License*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 

### Zebra Licensing Configuration - License Action Delete Server Friendly Name

This Managed Configuration allows an Administrator using an EMM to provide the *Friendly Name* that identifies the *Custom Server* to be deleted, and should be specified if and only if the value ***Delete Server*** is chosen for the Managed Configuration **Zebra Licensing Configuration - License Action**. 