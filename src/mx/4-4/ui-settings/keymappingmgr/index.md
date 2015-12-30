---
title: KeyMapping Manager
description: The KeyMappingMgr allows an app to modify the behavior of a given key when pressed.
---

## About KeyMappingMgr

### Overview
The KeyMappingMgr allows an app to modify the behavior of a given key when pressed.

Key Mapping is a capability offered by Zebra Android devices that allows you to define the Key Behavior associated with a given Key when that Key is pressed in a given Key State. The Current Key State consists of one or more Key State Modifiers that may have been applied as the result of previous presses of Modifier Keys. For example, a device with a Blue Key may set/clear the Blue Key State Modifier in the Current Key State each time the Blue Key is pressed. Some devices may support having multiple Key State Modifiers set in the Current Key State and other may not.

The Key Behavior desired for a particular Key when it is pressed in a particular Key State can be defined by a Key Mapping in the Key Mapping Table. There are Key Mapping Tables associated with specific Key State Modifier that can be set within the Current Key State. A Key Mapping for a Key that is defined in a given Key Mapping Table will only be used when the Key is pressed while the associated Key Modifier associated with that Key Mapping Table is set in the Current Key State. For example, when a Key is pressed while the Blue Key State Modifier is set in the Current Key State, the Blue Key Mapping Table would be searched to find a Key Mapping for that pressed Key.

Every device has a series of Default Key Mappings that are pre-installed into the Key Mapping Tables supported by that device. These Default Key Mappings define the default Key Behaviors for that device. To change the Default Key Behaviors for a device, you can add new Key Mappings, called Override Key Mappings, to one or more Key Mapping Tables. When a Mapping Table contains a Default Key Mapping and an Override Key Mapping for the same Key, the Override Key Mapping is used. If you want to revert a device back to its Default Key Behaviors, you can remove the Override Key Mappings and thereby restore use of the Default Key Mappings. Default Key Mappings cannot be modified or removed, only overridden.

Key processing begins by checking the Current Key State at the time the Key was pressed. If multiple Key State Modifiers are set in the Current Key State, then the Key Mapping Tables associated with those Key State Modifiers are searched in a fixed priority order based on their associated Key State Modifiers. If a Key Mapping for the pressed Key is found at any time during searching, then searching will stop and the found Key Mapping will be used to determine the Key Behavior that will be performed for the pressed Key.

If all Key Mapping Tables associated with Key State Modifiers are searched without finding a Key Mapping for the pressed Key, then the Base Key State Key Mapping Table is searched. If no Key Mapping can for the pressed Key can be found during searching, then the default Android Key Behavior will be performed for the pressed Key, but this will seldom be the case, since most devices will have Default Key Mappings for all Keys defined in the Base Key State Mapping Table.

Not all devices will support all Key State Modifiers and hence not all devices will support all Key Mapping Tables. Some devices may support multiple Key State Modifiers and each device will support the Key Mapping Tables associated with all the Key State Modifiers that it supports. All devices support at least the Base Key State Key Mapping Table, even if they support no other Key Mapping Tables. The following Key State Modifiers and associated Key Mapping Tables may be supported by various devices. The Key Mapping Tables will be searched (when supported on a given device) in the order listed below, based on the Key State Modifiers that are set in the Current Key State:

1. Blue Key State Modifier and Blue Key Mapping Table

	This Key Mapping Table is searched when the Blue Key State Modifier is set in the Current Key State at the time a Key is pressed. If a Key Mapping for the pressed Key is found, then that Key Mapping is used to determine the Key Behavior to be performed for the pressed Key. If no Key Mapping for the pressed Key is found, then searching continues with another Key Mapping Table.
	
2. Orange Key State Modifier and Orange Key Mapping Table

	This Key Mapping Table is searched when the Orange Key State Modifier is set in the Current Key State at the time a Key is pressed. If a Key Mapping for the pressed Key is found, then that Key Mapping is used to determine the Key Behavior to be performed for the pressed Key. If no Key Mapping for the pressed Key is found, then searching continues with another Key Mapping Table.
	
3. Grey Key State Modifier and Grey Key Mapping Table

	This Key Mapping Table is searched when the Grey Key State Modifier is set in the Current Key State at the time a Key is pressed. If a Key Mapping for the pressed Key is found, then that Key Mapping is used to determine the Key Behavior to be performed for the pressed Key. If no Key Mapping for the pressed Key is found, then searching continues with another Key Mapping Table.

4. Control Key State Modifier and Control Key Mapping Table

	This Key Mapping Table is searched when the Control Key State Modifier is set in the Current Key State at the time a Key is pressed. If a Key Mapping for the pressed Key is found, then that Key Mapping is used to determine the Key Behavior to be performed for the pressed Key. If no Key Mapping for the pressed Key is found, then searching continues with another Key Mapping Table.

5. Shift Key State Modifier and Shift Key Mapping Table

	This Key Mapping Table is searched when the Shift Key State Modifier is set in the Current Key State at the time a Key is pressed. If a Key Mapping for the pressed Key is found, then that Key Mapping is used to determine the Key Behavior to be performed for the pressed Key. If no Key Mapping for the pressed Key is found, then searching continues with another Key Mapping Table.

6. Base Key State Key Mapping Table
	
	The Base Key State Key Mapping Table is searched if no Key State Modifiers are set in the Current Key State (i.e. default Key State) at the time a Key is pressed. This Key Mapping is also searched if all Key Mapping Tables were searched based on the Key State Modifiers that were set in the Current Key State and no Key Mapping for the pressed Key was found (i.e. fall through). If the Base Key State Key Mapping Table is searched and no Key Mapping for the pressed Key is found, then the standard Android Key Action for the pressed Key will be performed.

Each Key Mapping in each Key Mapping Table defines a specific Key Behavior to be performed for a pressed Key when that Key Mapping Table is determined to be the most applicable one for that Key press. Every Key Mapping requires a specific Key to be identified. A Key is identified in Key Mapping Using a Key Identifier. Key Identifiers are constructed generally according to the following rules:

* Text Labeled Key

	For a Key that is physically labeled with a text legend, the label is used to identify the Key. For example, a Key that is physically labeled with the letter "A" would be identified by that letter. In some cases, a Key might be physically labeled with an abbreviated text legend. For example, a Key that is physically labeled "BKSP" would be identified by the text description "BACKSPACE".

* Graphically Labeled Key

	For a Key that is physically labeled with a picture or icon or other graphical legend, a textual description of that graphical legend is used to identify the Key. For example, a Key that is physically labeled with an icon of a house, would be identified by the text description "HOME".
	
* Color Labeled Key

	For a Key that is physically labeled with a color, a textual description of that color is used to identify the Key. For example, a Key that is physically colored blue would be identified by the text description "BLUE".
	
* Unlabeled Key

	For a Key that is not physically labeled in a unique manner, a textual description may be used to identify the Key. For example, the second of two Keys that are used as a triggers that are physically located on the left side of the device would be identified by the text description "LEFT_TRIGGER_2".

>**Note:** Different devices have different numbers and combinations of physical Keys. Not all devices will have Keys that need to be identified using all of the above rules.

Each Key Mapping specifies a single Key Behavior that should be performed for a single Key identified by a specified Key Identifier. The Key Behaviors that can be defined include the following:

* Send key-code

	This Key Behavior indicates that the Key pressed should produce a standard Android Key Action, but necessarily the standard Android Key Action for that actual Key that was pressed. You can select any Key Code you want and the standard Android Key Action for that Key Code will be performed. You can also optionally specify the Key State in which standard Android Key Action for the Key Code will be performed.

	This Key Behavior provides quite a lot of flexibility to define what standard Android Key Action you want to perform, since you can define that any Key, when pressed in any Key State, should perform any standard Android Key Action. For example, you could define that the "A" Key, when pressed in the "Shift" Key State will produce the standard Android Key Action normally performed by the "2" Key when pressed in the "Unshifted" Key State.
	
* Send trigger

	This Key Behavior indicates that the Key pressed should produce the effect of a physical trigger switch. Most devices have one or more "Trigger" Keys for which this is the Default Key Behavior. Such Keys are most often used to initiate Barcode Scanning, but can be used for anything, if the right configuration is applied.

	A fixed set of eight (8) Triggers are supported and these are designated as Trigger 1 through Trigger 8. Triggers are most commonly used to provide a low-latency notification so that high priority events can be initiated. Various System applications on a device may register to be notified when various Triggers are sent. For example, the Scanning Subsystem on most devices uses Trigger 1 to initiate Barcode Scanning.

	Normal (non-System) applications cannot perform registration for Triggers and hence cannot utilize the "Sent trigger" Key Behavior to invoke their application functionality. Such applications should use the "Launch application or "Send Intent" Key Behaviors instead. But using the KeyMappingMgr, a non-System application can determine what Key(s), pressed in what Key State(s) will produce Triggers for which System applications are registered.
	
* Launch application

	This Key Behavior indicates that the Key pressed should launch an application of a specific name as if that application was launched by a device user via its main launcher icon. The same result could be achieved using the "Send Intent" Key Behavior, if the right information about the Intent required to launch the application was known. The "Launch application" Key Behavior makes launching an application much easier, but only if you want to launch its main activity. If you want to launch some other activity of an application, or pass custom data to the application to tell it what to do, then use the "Send Intent" Key Behavior instead.
	
* Send Intent

	This Key Behavior indicates that the Key pressed should send an Intent, which could be sent to an application using startActivity or sendBroadcast. Supporting both types of Intents provides flexibility so you can launch a variety of applications. In addition, you can configure various parameters for constructing the Intent to match it to the needs of an application, including attaching an extra data value to communicate information about the desired action the application should perform.

	Since Intents are extremely flexible, an existing application might require an Intent that cannot be described via the rather simplistic capabilities inside the KeyMappingMgr. While it may be possible to meet the needs of some existing applications, the "Send Intent" Key Behavior is really designed to send Intents that are specifically designed and added to applications for this purpose.
	
* Suppress key

	This Key Behavior indicates that the Key pressed should be completely ignored and should produce no result. In essence, this results in essentially identical results as if the Key was never pressed.
	
* Reset to default

	This Key Behavior indicates that the Default Key Mapping (if any) for a Key in a specified Key Mapping Table should be restored. This is done by removing any Override Key Mapping for the Key from the specified Key Mapping Table. If there is no Override Key Mapping for the Key in the specified Key Mapping Table, then no change is made.

### Main Functionality

* Default all key mappings
* Remap a key

##Parameter Notes
###Action
Pivotal parm: Yes

Description: 

>This parm allows you to select whether to return Key Mapping to the default state or to add/modify Override Key Mappings for a Key to one or more Key Mapping Tables.

>**Note:** If you want to configure a device whose prior state is not known, it may be advisable to begin by returning Key Mapping to the default state. In that way, subsequent added Override Key Mappings will be starting from a known state and therefore are more likely to achieve the result desired. Alternately, if the Intent is to define a set of Key Mappings that are required by a specific application, it may be desirable to start from the current state, whatever it may be, and alter it by adding or modifying selected Override Key Mappings without otherwise altering the state of Key Mapping for the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Remap a key</td>
    <td>"1"</td>
	<td>This value will allow you to add or modify Override Key Mappings for a single Key for one or more Key Mapping Tables. Each Override Key Mapping that is added or modified will alter the Behavior of exactly one Key, in one or more Key States.</td>
  </tr>
  <tr>
    <td>Default all key mappings</td>
    <td>"2"</td>
	<td>This value cause all of the Override Key Mappings to be removed from all Key Mapping Tables. This will result in all Key Mapping being set back to the default for the device since it will leave only the Default Key Mappings, which cannot be removed and which will no longer be overridden.</td>
  </tr>
</table>
</div>	

####Choose a key to modify
Settable if: The Action value is "Remap a key"

Pivotal parm: Yes

Description: 

>This parm allows you to identify the Key for which Override Key Mapping will be added or modified. To add or modify Override Mappings for a Key, you must specify a parm value that contains a Key Identifier that is listed in the following table.

>**Note:** Not all devices physically support Keys that correspond to every Key Identifier listed in the table. If an attempt is made to add an Override Mapping to a Key Mapping Table for a Key that is not supported on a device, then an error will be returned in the Result XML. Consult the documentation for a specific device for information on the Keys supported on that device. Alternately, you can query the KeyMappingMgr to acquire a list of all Key Identifiers that are supported on that device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value (Key Identifier)</th>
		<th>Comments</th>
	</tr>
  <tr>
    <td>None</td>
    <td>""</td>
	<td>This value indicates that no Key Mapping will be added or removed for any Key from any Key Mapping Table.</td>
  </tr>
  <tr>
    <td>0</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>3</td>
    <td>"3"</td>
	<td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>"4"</td>
	<td></td>
  </tr>
  <tr>
    <td>5</td>
    <td>"5"</td>
	<td></td>
  </tr>
  <tr>
    <td>6</td>
    <td>"6"</td>
	<td></td>
  </tr>
  <tr>
    <td>7</td>
    <td>"7"</td>
	<td></td> 
  </tr>
  <tr>
    <td>8</td>
    <td>"8"</td>
	<td></td> 
  </tr>
  <tr>
    <td>9</td>
    <td>"9"</td>
	<td></td>
  </tr>
  <tr>
    <td>A</td>
    <td>"A"</td>
	<td></td>
  </tr>
  <tr>
    <td>B</td>
    <td>"B"</td>
	<td></td>
  </tr>
  <tr>
    <td>C</td>
    <td>"C"</td>
	<td></td>
  </tr>
  <tr>
    <td>D</td>
    <td>"D"</td>
	<td></td>
  </tr>
  <tr>
    <td>E</td>
    <td>"E"</td>
	<td></td>
  </tr>
  <tr>
    <td>F</td>
    <td>"F"</td>
	<td></td>
  </tr>
  <tr>
    <td>G</td>
    <td>"G"</td>
	<td></td>
  </tr>
  <tr>
    <td>H</td>
    <td>"H"</td>
	<td></td>
  </tr>
  <tr>
    <td>I</td>
    <td>"I"</td>
	<td></td>
  </tr>
  <tr>
    <td>J</td>
    <td>"J"</td>
	<td></td>
  </tr>
  <tr>
    <td>K</td>
    <td>"K"</td>
	<td></td>
  </tr>
  <tr>
    <td>L</td>
    <td>"L"</td>
	<td></td>
  </tr>
  <tr>
    <td>M</td>
    <td>"M"</td>
	<td></td>
  </tr>
  <tr>
    <td>N</td>
    <td>"N"</td>
	<td></td>
  </tr>
  <tr>
    <td>O</td>
    <td>"O"</td>
	<td></td>
  </tr>
  <tr>
    <td>P</td>
    <td>"P"</td>
	<td></td>
  </tr>
  <tr>
    <td>Q</td>
    <td>"Q"</td>
	<td></td>
  </tr>
  <tr>
    <td>R</td>
    <td>"R"</td>
	<td></td>
  </tr>
  <tr>
    <td>S</td>
    <td>"S"</td>
	<td></td>
  </tr>
  <tr>
    <td>T</td>
    <td>"T"</td>
	<td></td>
  </tr>
  <tr>
    <td>U</td>
    <td>"U"</td>
	<td></td>
  </tr>
  <tr>
    <td>V</td>
    <td>"V"</td>
	<td></td>
  </tr>
  <tr>
    <td>W</td>
    <td>"W"</td>
	<td></td>
  </tr>
  <tr>
    <td>X.</td>
    <td>"X"</td>
	<td></td>
  </tr>
  <tr>
    <td>Y</td>
    <td>"Y"</td>
	<td></td>
  </tr>
  <tr>
    <td>Z</td>
    <td>"Z"</td>
	<td></td>
  </tr>
  <tr>
    <td>F1</td>
    <td>"F1"</td>
	<td></td>
  </tr>
  <tr>
    <td>F2</td>
    <td>"F2"</td>
	<td></td>
  </tr>
  <tr>
    <td>F3</td>
    <td>"F3"</td>
	<td></td>
  </tr>
  <tr>
    <td>F4</td>
    <td>"F4"</td>
	<td></td>
  </tr>
  <tr>
    <td>F5</td>
    <td>"F5"</td>
	<td></td>
  </tr>
  <tr>
    <td>F6</td>
    <td>"F6"</td>
	<td></td>
  </tr>
  <tr>
    <td>F7</td>
    <td>"F7"</td>
	<td></td>
  </tr>
  <tr>
    <td>F8</td>
    <td>"F8"</td>
	<td></td>
  </tr>
  <tr>
    <td>F9</td>
    <td>"F9"</td>
	<td></td>
  </tr>
  <tr>
    <td>F10</td>
    <td>"F10"</td>
	<td></td>
  </tr>
  <tr>
    <td>F11</td>
    <td>"F11"</td>
	<td></td>
  </tr>
  <tr>
    <td>F12</td>
    <td>"F12"</td>
	<td></td>
  </tr>
  <tr>
    <td>Enter</td>
    <td>"ENTER"</td>
	<td></td>
  </tr>
  <tr>
    <td>Up</td>
    <td>"UP"</td>
	<td></td>
  </tr>
  <tr>
    <td>Down</td>
    <td>"DOWN"</td>
	<td></td>
  </tr>
  <tr>
    <td>Left</td>
    <td>"LEFT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Right</td>
    <td>"RIGHT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Escape</td>
    <td>"ESC"</td>
	<td></td>
  </tr>
  <tr>
    <td>Backspace</td>
    <td>"BACKSPACE"</td>
	<td></td>
  </tr>
  <tr>
    <td>Period</td>
    <td>"DOT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Star</td>
    <td>"Star"</td>
	<td></td>
  </tr>
  <tr>
    <td>Pound</td>
    <td>"POUND"</td>
	<td></td>
  </tr>
  <tr>
    <td>Space</td>
    <td>"SPACE"</td>
	<td></td>
  </tr>
  <tr>
    <td>Return</td>
    <td>"RETURN"</td>
	<td></td>
  </tr>
  <tr>
    <td>Clear</td>
    <td>"CLR"</td>
	<td></td>
  </tr>
  <tr>
    <td>Field Exit</td>
    <td>"FIELD_EXIT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Alt</td>
    <td>"ALT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Control</td>
    <td>"CTRL"</td>
	<td></td>
  </tr>
  <tr>
    <td>Shift</td>
    <td>"SHIFT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Blue</td>
    <td>"BLUE"</td>
	<td></td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>"ORANGE"</td>
	<td></td>
  </tr>
  <tr>
    <td>Green Dot</td>
    <td>"GREEN"</td>
	<td></td>
  </tr>
  <tr>
    <td>Red Dot</td>
    <td>"RED"</td>
	<td></td>
  </tr>
  <tr>
    <td>Volume Up</td>
    <td>"VOLUMEUP"</td>
	<td></td>
  </tr>
  <tr>
    <td>Volume Down</td>
    <td>"VOLUMEDOWN"</td>
	<td></td>
  </tr>
  <tr>
    <td>Scan</td>
    <td>"SCAN"</td>
	<td></td>
  </tr>
  <tr>
    <td>Grip Trigger</td>
    <td>"GRIP_TRIGGER"</td>
	<td></td>
  </tr>
  <tr>
    <td>Button L1</td>
    <td>"LEFT_TRIGGER_1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Button L2</td>
    <td>"LEFT_TRIGGER_2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Button R1</td>
    <td>"RIGHT_TRIGGER_1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Button R2</td>
    <td>"RIGHT_TRIGGER_2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Headset Button</td>
    <td>"HEADSET_HOOK"</td>
	<td></td>
  </tr>
  <tr>
    <td>Back</td>
    <td>"BACK"</td>
	<td></td>
  </tr>
  <tr>
    <td>Home</td>
    <td>"HOME"</td>
	<td></td>
  </tr>
  <tr>
    <td>Menu</td>
    <td>"MENU"</td>
	<td></td>
  </tr>
  <tr>
    <td>Recent</td>
    <td>"RECENT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Search</td>
    <td>"SEARCH"</td>
	<td></td>
  </tr>
  <tr>
    <td>Keyboard Backlight</td>
    <td>"KEYLIGHT"</td>
	<td></td>
  </tr>
  <tr>
    <td>Display Backlight</td>
    <td>"LAMP"</td>
	<td></td>
  </tr>
  <tr>
    <td>Power</td>
    <td>"POWER"</td>
	<td></td>
</table>
</div>	

###Key Behavior Parms

####Key behavior
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm allows you to select the Key Behavior that should be defined in the Base Key State Mapping Table for the Key Mapping for a specified Key.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Base Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Base Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Base Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Base Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Base Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Base Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Base Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

####Key behavior in Blue mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm is the same as the parm "Key behavior" except that instead of defining the Key Behavior for the Base Key State Mapping Table, it defines the Key Behavior for the Blue Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Blue Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Blue Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Blue Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Blue Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Blue Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Blue Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Blue Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

####Key behavior in Orange mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm is the same as the parm "Key behavior" except that instead of defining the Key Behavior for the Base Key State Mapping Table, it defines the Key Behavior for the Orange Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Orange Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Orange Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Orange Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Orange Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Orange Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Orange Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Orange Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

####Key behavior in Grey mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm is the same as the parm "Key behavior" except that instead of defining the Key Behavior for the Base Key State Mapping Table, it defines the Key Behavior for the Grey Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Grey Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Grey Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Grey Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Grey Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Grey Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Grey Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Grey Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

####Key behavior in Shift mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm is the same as the parm "Key behavior" except that instead of defining the Key Behavior for the Base Key State Mapping Table, it defines the Key Behavior for the Shift Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Shift Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Shift Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Shift Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Shift Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Shift Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Shift Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Shift Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

####Key behavior in Control mode
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" 

Pivotal parm: Yes

Description: 

>This parm is the same as the parm "Key behavior" except that instead of defining the Key Behavior for the Base Key State Mapping Table, it defines the Key Behavior for the Control Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>No change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Key Behavior of the specified Key in the Control Key State Mapping Table.</td>
  </tr>
  <tr>
    <td>Send key-code</td>
    <td>"2"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Control Key State Mapping Table to be changed such that the Key acts like a different specified Key.</td>
  </tr>
  <tr>
    <td>Send trigger</td>
    <td>"1"</td>
	<td>This value will cause the Key Behavior for the specified Key in the Control Key State Mapping Table to be changed such that the Key will act as a one of the pre-defined Triggers and hence will cause whatever applications are registered for the selected Trigger to be notified.</td>
  </tr>
  <tr>
    <td>Launch application</td>
    <td>"4"</td>
	<td>This value will cause the Key Behavior for the Key in the Control Key State Mapping Table to be changed such that the Key will launch a specified application.</td>
  </tr>
  <tr>
    <td>Send intent</td>
    <td>"3"</td>
	<td>This value will cause the Key Behavior for the Key in the Control Key State Mapping Table to be changed such that the Key will send an Intent with specified attributes.</td>
  </tr>
  <tr>
    <td>Suppress key</td>
    <td>"5"</td>
	<td>This value will cause the Key Behavior for the Key in the Control Key State Mapping Table to be changed such that the Key will be ignored and to act as if the Key was never pressed.</td>
  </tr> 
  <tr>
  <td>Reset to default</td>
    <td>"7"</td>
	<td>This value will cause the Key Behavior for the Key in the Control Key State Mapping Table to be changed such that the Default Key Behavior is restored.</td>
  </tr>
</table>
</div>	

###Key-code Parms

These parms allow you to specify which Key Code will be sent as the Key Behavior for the specified Key in various Key State Mapping Tables. All of these parms use the same values shown in the table of values provided for the Base Key State Mapping Table.

>**Note:** All these parms also allow you to control the Key State(s) in which the Key Code will be sent. The parms used to control that are covered later in the Advanced Sections.

####Key-code
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseKeyCode
* For Blue Key State Table: BlueKeyCode
* For Orange Key State Table: OrangeKeyCode
* For Grey Key State Table: GreyKeyCode
* For Shift Key State Table: ShiftKeyCode
* For Control Key State Table: ControlKeyCode

Description: 

>This value allows you to specify which Key Code will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The value must be selected from the following table.

>**Note:** If an attempt is made to specify a Key Behavior for a Key Mapping Table that is not supported on a given device, then an error will be returned in the Result XML. Consult the documentation for a specific device for information on the Key Mapping Tables supported on that device. Alternately, you can query the KeyMappingMgr to acquire a list of all Key Mapping Tables that are supported on that device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
	<!--	<th>Description</th> -->
	</tr>
  <tr>
    <td>0</td>
    <td>"7"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>1</td>
    <td>"8"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>2</td>
    <td>"9"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>3</td>
    <td>"10"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>4</td>
    <td>"11"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>5</td>
    <td>"12"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>6</td>
    <td>"13"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>7</td>
    <td>"14"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>8</td>
    <td>"15"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>9</td>
    <td>"16"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>A</td>
    <td>"29"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>B</td>
    <td>"30"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>C</td>
    <td>"31"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>D</td>
    <td>"32"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>E</td>
    <td>"33"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F</td>
    <td>"34"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>G</td>
    <td>"35"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>H</td>
    <td>"36"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>I</td>
    <td>"37"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>J</td>
    <td>"38"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>K</td>
    <td>"39"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>L</td>
    <td>"40"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>M</td>
    <td>"41"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>N</td>
    <td>"42"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>O</td>
    <td>"43"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>P</td>
    <td>"44"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Q</td>
    <td>"45"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>R</td>
    <td>"46"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>S</td>
    <td>"47"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>T</td>
    <td>"48"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>U</td>
    <td>"49"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>V</td>
    <td>"50"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>W</td>
    <td>"51"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>X.</td>
    <td>"52"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Y</td>
    <td>"53"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Z</td>
    <td>"54"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Enter</td>
    <td>"66"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Tab</td>
    <td>"61"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Space</td>
    <td>"62"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Escape</td>
    <td>"111"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Delete</td>
    <td>"67"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F1</td>
    <td>"131"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F2</td>
    <td>"132"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F3</td>
    <td>"133"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F4</td>
    <td>"134"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F5</td>
    <td>"135"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F6</td>
    <td>"136"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F7</td>
    <td>"137"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F8</td>
    <td>"138"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F9</td>
    <td>"139"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F10</td>
    <td>"140"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F11</td>
    <td>"141"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>F12</td>
    <td>"142"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 0</td>
    <td>"144"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 1</td>
    <td>"145"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 2</td>
    <td>"146"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 3</td>
    <td>"147"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 4</td>
    <td>148""</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 5</td>
    <td>"149"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 6</td>
    <td>"150"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 7</td>
    <td>"151"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 8</td>
    <td>"152"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD 9</td>
    <td>"153"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Divide</td>
    <td>"154"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Multiply</td>
    <td>"155"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Subtract</td>
    <td>"156"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Add</td>
    <td>"157"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Period</td>
    <td>"158"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Comma</td>
    <td>"159"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Enter</td>
    <td>"160"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Equals</td>
    <td>"161"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Left Parenthesis</td>
    <td>"162"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>NUMPAD Right Parenthesis</td>
    <td>"163"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Up</td>
    <td>"19"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Down</td>
    <td>"20"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Left</td>
    <td>"21"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Right</td>
    <td>"22"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>DPAD Center</td>
    <td>"23"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Move Home</td>
    <td>"122"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Move End</td>
    <td>"123"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Page Up</td>
    <td>"92"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Page Down</td>
    <td>"93"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Insert</td>
    <td>"124"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Forward Delete</td>
    <td>"112"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Clear</td>
    <td>"28"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Blue</td>
    <td>"10027"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Orange</td>
    <td>"10028"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Grey</td>
    <td>"10029"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Alt</td>
    <td>"10030"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Control</td>
    <td>"10031"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Shift</td>
    <td>"10032"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Shift</td>
    <td>"59"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Shift</td>
    <td>"60"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Alt</td>
    <td>"57"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Alt</td>
    <td>"58"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Control</td>
    <td>"113"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Control</td>
    <td>"114"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Meta Left</td>
    <td>"117"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Meta Right</td>
    <td>"118"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Caps Lock</td>
    <td>"115"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Num Lock</td>
    <td>"143"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Scroll Lock</td>
    <td>"116"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>SysRq</td>
    <td>"120"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Break</td>
    <td>"121"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Function</td>
    <td>"119"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Plus</td>
    <td>"81"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Minus</td>
    <td>"69"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Equals</td>
    <td>"70"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Bracket</td>
    <td>"71"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Bracket</td>
    <td>"72"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Grave</td>
    <td>"68"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Slash</td>
    <td>"76"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Backslash</td>
    <td>"73"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Semicolon</td>
    <td>"74"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Apostrophe</td>
    <td>"75"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Comma</td>
    <td>"55"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Period</td>
    <td>"56"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Star</td>
    <td>"17"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Pound</td>
    <td>"18"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>At</td>
    <td>"77"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Back</td>
    <td>"4"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Forward</td>
    <td>"125"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Home</td>
    <td>"3"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Menu</td>
    <td>"82"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Settings</td>
    <td>"176"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Application Switch</td>
    <td>"187"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Calculator</td>
    <td>"210"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Explorer</td>
    <td>"64"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Envelope</td>
    <td>"65"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Bookmark</td>
    <td>"174"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Music</td>
    <td>"209"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Call</td>
    <td>"5"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>End Call</td>
    <td>"6"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Microphone Mute</td>
    <td>"91"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Camera</td>
    <td>"27"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Search</td>
    <td>"84"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Contacts</td>
    <td>"207"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Calendar</td>
    <td>"208"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Up</td>
    <td>"24"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Down</td>
    <td>"25"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Volume Mute</td>
    <td>"164"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Brightness Up</td>
    <td>"221"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Brightness Down</td>
    <td>"220"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Power</td>
    <td>"26"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Sleep</td>
    <td>"223"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Wakeup</td>
    <td>"224"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Headset</td>
    <td>"79"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Push-to-talk</td>
    <td>"228"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Camera Focus</td>
    <td>"80"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Play/Pause</td>
    <td>"85"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Stop</td>
    <td>"86"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Next</td>
    <td>"87"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Previous</td>
    <td>"88"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Rewind</td>
    <td>"89"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Fast-Forward</td>
    <td>"90"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Play</td>
    <td>"126"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Pause</td>
    <td>"127"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Close</td>
    <td>"128"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Eject</td>
    <td>"129"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Media Record</td>
    <td>"130"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L1</td>
    <td>"102"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R1</td>
    <td>"103"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button L2"</td>
    <td>"104"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button R2</td>
    <td>"105"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button A</td>
    <td>"96"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button B</td>
    <td>"97"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button C</td>
    <td>"98"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button X</td>
    <td>"99"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button Y</td>
    <td>"100"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Button Z</td>
    <td>"101"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Left Thumb Button</td>
    <td>"106"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Right Thumb Button</td>
    <td>"107"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Start Button</td>
    <td>"108"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Select Button</td>
    <td>"109"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Mode Button</td>
    <td>"110"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 1</td>
    <td>"188"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 2</td>
    <td>"189"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 3</td>
    <td>"190"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 4</td>
    <td>"191"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 5</td>
    <td>"192"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 6</td>
    <td>"193"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 7</td>
    <td>"194"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 8</td>
    <td>"195"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 9</td>
    <td>"196"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 10</td>
    <td>"197"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 11</td>
    <td>"198"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 12</td>
    <td>"199"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 13</td>
    <td>"200"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 14</td>
    <td>"201"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 15</td>
    <td>"202"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Gamepad Button 16</td>
    <td>"203"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Zenkaku/Hankaku</td>
    <td>"211"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Eisu</td>
    <td>"212"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Muhenkan</td>
    <td>"213"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Henkan</td>
    <td>"214"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Katakana/Hiragana</td>
    <td>"215"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Yen</td>
    <td>"216"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Ro</td>
    <td>"217"</td>
	<!-- <td></td> -->
  </tr>
  <tr>
    <td>Kana</td>
    <td>"218"</td>
	<!-- <td></td> -->
  </tr>
</table>
</div>	

###Advanced Sections

The Advanced Sections allow you to specify Key State Modifiers that will be set into the Current Key State when a Key Code is sent as the Key Behavior for the specified Key in various Key State Mapping Tables.

**Note:** Setting one or more Key States allows you a great deal of flexibility in remapping Keys. For example, suppose you had a device with no Shift Key and you wanted to have a Key combination to send an Asterisk (\*). Since the Asterisk(\*) is typically obtained by pressing the "8" Key in Shifted mode, you could define a Key Mapping in the Blue Key State Mapping Table that send the Key Code for the "2" Key with the Shift Key State Modifier set.

####Advanced
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior for the Mapping Table is "Send key-code"

Pivotal parm: Yes

Description: 

>Each Key State Mapping Table has its own Advanced Section via which you can specify Key State Modifiers that will be set into the Current Key State when a Key Code is sent as the Key Behavior for the specified Key in that Key State Mapping Table.

>This parm allows you to choose whether or not to use the Advanced section for a Key Mapping Table. All Advanced parms use the same values shown in the following table of values.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value indicates that Advanced section will be specified.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"2"</td>
	<td>This value (or the absence of this parm from the XML) indicates that the Advanced section will not be specified.</td>
  </tr>
</table>
</div>	

#####**SHIFT state**
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseKeyCodeShiftState
* For Blue Key State Table: BlueKeyCodeShiftState
* For Orange Key State Table: OrangeKeyCodeShiftState
* For Grey Key State Table: GreyKeyCodeShiftState
* For Shift Key State Table: ShiftKeyCodeShiftState
* For Control Key State Table: ControlKeyCodeShiftState

Description: 

>These parms allow you to control the Shift Key State Modifier when the Key Code is sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. If an attempt is made to set a Key State Modifier that is not supported on a given device, then no error will be returned in the Result XML. When the Key Code is sent, the specified Key State Modifier will be set into the Current Key State, but since the Key State Modifier is not supported by the device, and hence has no associated Key Mapping Table, there will be no noticeable effect produced by setting that Key State Modifier.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause the Shift Key State Modifier to be left unchanged, thus making it the same as when the Key was pressed.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the Shift Key State Modifier, thus forcing the Key Code sent to be interpreted as Shifted.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will clear the Shift Key State Modifier, thus forcing the Key Code sent to be interpreted as non-Shifted.</td>
  </tr>
</table>
</div>

#####**ALT state**
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseKeyCodeAltState
* For Blue Key State Table: BlueKeyCodeAltState
* For Orange Key State Table: OrangeKeyCodeAltState
* For Grey Key State Table: GreyKeyCodeAltState
* For Shift Key State Table: ShiftKeyCodeAltState
* For Control Key State Table: ControlKeyCodeAltState

Description: 

>These parms allow you to control the ALT Key State Modifier when the Key Code is sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. If an attempt is made to set a Key State Modifier that is not supported on a given device, then no error will be returned in the Result XML. When the Key Code is sent, the specified Key State Modifier will be set into the Current Key State, but since the Key State Modifier is not supported by the device, and hence has no associated Key Mapping Table, there will be no noticeable effect produced by setting that Key State Modifier.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause the ALT Key State Modifier to be left unchanged, thus making it the same as when the Key was pressed.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the ALT Key State Modifier, thus forcing the Key Code sent to be interpreted as ALT.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will clear the Shift Key State Modifier, thus forcing the Key Code sent to be interpreted as non-ALT.</td>
  </tr>
</table>
</div>

#####**CTRL state**
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseKeyCodeCtrlState
* For Blue Key State Table: BlueKeyCodeCtrlState
* For Orange Key State Table: OrangeKeyCodeCtrlState
* For Grey Key State Table: GreyKeyCodeCtrlState
* For Shift Key State Table: ShiftKeyCodeCtrlState
* For Control Key State Table: ControlKeyCodeCtrlState

Description: 

>These parms allow you to control the Control Key State Modifier when the Key Code is sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. If an attempt is made to set a Key State Modifier that is not supported on a given device, then no error will be returned in the Result XML. When the Key Code is sent, the specified Key State Modifier will be set into the Current Key State, but since the Key State Modifier is not supported by the device, and hence has no associated Key Mapping Table, there will be no noticeable effect produced by setting that Key State Modifier.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause the Control Key State Modifier to be left unchanged, thus making it the same as when the Key was pressed.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the Control Key State Modifier, thus forcing the Key Code sent to be interpreted as Control.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will clear the Shift Key State Modifier, thus forcing the Key Code sent to be interpreted as non-Control.</td>
  </tr>
</table>
</div>

#####**FN state**
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send key-code" *AND* Advanced is "True"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseKeyCodeFnState
* For Blue Key State Table: BlueKeyCodeFnState
* For Orange Key State Table: OrangeKeyCodeFnState
* For Grey Key State Table: GreyKeyCodeFnState
* For Shift Key State Table: ShiftKeyCodeFnState
* For Control Key State Table: ControlKeyCodeFnState

Description: 

>These parms allow you to control the Function Key State Modifier when the Key Code is sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. If an attempt is made to set a Key State Modifier that is not supported on a given device, then no error will be returned in the Result XML. When the Key Code is sent, the specified Key State Modifier will be set into the Current Key State, but since the Key State Modifier is not supported by the device, and hence has no associated Key Mapping Table, there will be no noticeable effect produced by setting that Key State Modifier.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Use existing state</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause the Function Key State Modifier to be left unchanged, thus making it the same as when the Key was pressed.</td>
  </tr>
  <tr>
    <td>Force ON</td>
    <td>"1"</td>
	<td>This value will set the Control Key State Modifier, thus forcing the Key Code sent to be interpreted as Function.</td>
  </tr>
  <tr>
    <td>Force OFF</td>
    <td>"2"</td>
	<td>This value will clear the Shift Key State Modifier, thus forcing the Key Code sent to be interpreted as non-Function.</td>
  </tr>
</table>
</div>

###Trigger Parms

These parms allow you to specify which Triggers will be performed as the Key Behavior for the specified Key in various Key State Mapping Tables.

####Trigger
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior for the corresponding Key Table is "Send trigger"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseTrigger
* For Blue Key State Table: BlueTrigger
* For Orange Key State Table: OrangeTrigger
* For Grey Key State Table: GreyTrigger
* For Shift Key State Table: ShiftTrigger
* For Control Key State Table: ControlTrigger

Description: 

>This value allows you to specify which Trigger will be performed as the Key Behavior for the specified Key in the specified Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Trigger 1</td>
    <td>"10016"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> The Trigger designated as Trigger 1 is commonly used by the data acquisition subsystem on devices to initiate Barcode Scanning.</p></td>
  </tr>
  <tr>
    <td>Trigger 2</td>
    <td>"10017"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger. Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>Trigger 3</td>
    <td>"10018"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger. Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>Trigger 4</td>
    <td>"10019"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger. Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>Trigger 5</td>
    <td>"10020"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger. Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>Trigger 6</td>
    <td>"10021"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger. Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>Trigger 7</td>
    <td>"10022"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger.  Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
  <tr>
    <td>10023</td>
    <td>"Trigger 8"</td>
	<td><p>This value indicates that the designated Trigger will be sent as the Key Behavior for the specified Key in the specified Key Mapping Table.</p><p><b>Note:</b> There is currently no standard usage for this Trigger.  Please consult the documentation for a specific device to determine what, if any, standard System applications may register for notification of this Trigger.</p></td>
  </tr>
</table>
</div>	

###Intent Parms

These parms allow you to specify the attributes of an Intent that will be sent as the Key Behavior for the specified Key in various Key State Mapping Tables.

####Send Intent
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseSendIntent
* For Blue Key State Table: BlueSendIntent
* For Orange Key State Table: OrangeSendIntent
* For Grey Key State Table: GreySendIntent
* For Shift Key State Table: ShiftSendIntent
* For Control Key State Table: ControlSendIntent

Description: 

>This parm allows you to specify the conditions under which an Intent will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>On key down</td>
    <td>"1"</td>
	<td>This value indicates that the specified Intent should be sent only when the Key transitions from unpressed to pressed.</td>
  </tr>
  <tr>
    <td>On key up</td>
    <td>"2"</td>
	<td>This value indicates that the specified Intent should be sent only when the Key transitions from pressed to unpressed.</td>
  </tr>
  <tr>
    <td>On both key down and up</td>
    <td>"3"</td>
	<td>This value indicates that the specified Intent should be sent both when the Key transitions from unpressed to pressed and from pressed to unpressed.</td>
  </tr>
</table>
</div>	

####Intent type
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: Yes

Description: 

>This parm allows you to specify how the Intent should be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Start activity</td>
    <td>"1"</td>
	<td>This value indicates that the Intent should be sent using Start Activity. This should be used when you want to launch an Activity within an application (to present some UI).</td>
  </tr>
  <tr>
    <td>Broadcast</td>
    <td>"2"</td>
	<td>This value indicates that the Intent should be sent using Send Broadcast. This should be used when you want to notify one or more applications (anyone that registers a suitable Broadcast Receiver) and that may invoke an Activity (to present some UI) or a Service (to perform some background processing).</td>
  </tr>
</table>
</div>	

####Action
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentAction
* For Blue Key State Table: BlueIntentAction
* For Orange Key State Table: OrangeIntentAction
* For Grey Key State Table: GreyIntentAction
* For Shift Key State Table: ShiftIntentAction
* For Control Key State Table: ControlIntentAction

Description: 

>This parm allows you to specify the Action Name attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The Action Name attribute of an Intent generally tells the receiver of the Intent what to do. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid Action Name for the Intent

####Category
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentCategory
* For Blue Key State Table: BlueIntentCategory
* For Orange Key State Table: OrangeIntentCategory
* For Grey Key State Table: GreyIntentCategory
* For Shift Key State Table: ShiftIntentCategory
* For Control Key State Table: ControlIntentCategory

Description: 

>This parm allows you to specify the Category attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The Category attribute of an Intent generally tells the system what types of receivers to send the Intent to. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid category for the Intent

####Package
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent" *AND* the Intent Type is "Start activity"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentPackage
* For Blue Key State Table: BlueIntentPackage
* For Orange Key State Table: OrangeIntentPackage
* For Grey Key State Table: GreyIntentPackage
* For Shift Key State Table: ShiftIntentPackage
* For Control Key State Table: ControlIntentPackage

Description: 

>This parm allows you to specify the Package Name attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The Package Name attribute of an Intent generally tells the system exactly which application to send the Intent to. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid Package Name

####Class
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent" *AND* the Intent Type is "Start activity"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentClass
* For Blue Key State Table: BlueIntentClass
* For Orange Key State Table: OrangeIntentClass
* For Grey Key State Table: GreyIntentClass
* For Shift Key State Table: ShiftIntentClass
* For Control Key State Table: ControlIntentClass

Description: 

>This parm allows you to specify the Class Name attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The Class Name attribute of an Intent generally tells the system exactly which class within an application to send the Intent to. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid Class Name

####Data URI
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentUri
* For Blue Key State Table: BlueIntentUri
* For Orange Key State Table: OrangeIntentUri
* For Grey Key State Table: GreyIntentUri
* For Shift Key State Table: ShiftIntentUri
* For Control Key State Table: ControlIntentUri

Description: 

>This parm allows you to specify the Data URI attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The Data URI attribute of an Intent generally provides a reference to the data (if any) that should be processed by the application to which the Intent is sent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid URI value

####MIME type
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentMimeType
* For Blue Key State Table: BlueIntentMimeType
* For Orange Key State Table: OrangeIntentMimeType
* For Grey Key State Table: GreyIntentMimeType
* For Shift Key State Table: ShiftIntentMimeType
* For Control Key State Table: ControlIntentMimeType

Description: 

>This parm allows you to specify the MIME Type attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. The MIME Type attribute of an Intent generally provides information about the type of data referenced by the Data URI attribute (if any) that helps qualify the action that should be taken by the application to which the Intent is sent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent. Whether a value for this attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid MIME type value

####Extra parameter name
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentStringExtraName
* For Blue Key State Table: BlueIntentStringExtraName
* For Orange Key State Table: OrangeIntentStringExtraName
* For Grey Key State Table: GreyIntentStringExtraName
* For Shift Key State Table: ShiftIntentStringExtraName
* For Control Key State Table: ControlIntentStringExtraName

Description: 

>This parm allows you to specify the Name of an Extra Data attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. An Extra Data attribute of an Intent generally provides auxiliary information that helps qualify the action that should be taken on the data by the application to which the Intent is sent. An Extra Data attribute must be specified using both an Extra Name and an Extra Value since both are required to add an Extra Data attribute to an Intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no Extra Data attribute to be set in the Intent. Whether an Extra Data attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid extra value name

####Extra parameter value
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentStringExtraValue
* For Blue Key State Table: BlueIntentStringExtraValue
* For Orange Key State Table: OrangeIntentStringExtraValue
* For Grey Key State Table: GreyIntentStringExtraValue
* For Shift Key State Table: ShiftIntentStringExtraValue
* For Control Key State Table: ControlIntentStringExtraValue

Description: 

>This parm allows you to specify the Value of an Extra Data attribute for the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. An Extra Data attribute of an Intent generally provides auxiliary information that helps qualify the action that should be taken on the data by the application to which the Intent is sent. An Extra Data attribute must be specified using both an Extra Name and an Extra Value since both are required to add an Extra Data attribute to an Intent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no Extra Data attribute to be set in the Intent. Whether an Extra Data attribute for a given Intent is required or not will depend on the Intent being sent and the requirements of the application(s) to which the Intent may be sent.

Parm value input rules: 

* String containing a valid extra value

####Add key event?
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentAddKeyState
* For Blue Key State Table: BlueIntentAddKeyState
* For Orange Key State Table: OrangeIntentAddKeyState
* For Grey Key State Table: GreyIntentAddKeyState
* For Shift Key State Table: ShiftIntentAddKeyState
* For Control Key State Table: ControlIntentAddKeyState

Description: 

>This parm allows you to choose whether the key event should be added to the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"0"</td>
	<td>This value causes Key Event that occurred when the Key was pressed or released to be attached to the Intent. This would generally be valuable only when an application was written specifically to receive such an Intent since it would require the application to understand and interpret the data format used to encode a Key Event.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"1"</td>
	<td>This value causes Key Event that occurred when the Key was pressed or released to not be attached to the Intent.</td>
  </tr>
</table>
</div>	

####Include additional flags
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Send intent"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseIntentIncludeFlags
* For Blue Key State Table: BlueIntentIncludeFlags
* For Orange Key State Table: OrangeIntentIncludeFlags
* For Grey Key State Table: GreyIntentIncludeFlags
* For Shift Key State Table: ShiftIntentIncludeFlags
* For Control Key State Table: ControlIntentIncludeFlags

Description: 

>This parm allows you to specify the Intent Flags that should be included in the Intent that will be sent as the Key Behavior for the specified Key in the specified Key State Mapping Table. Intent Flags specify information about how an Intent should be processed by the Android system and/or by the application to which the Intent is sent. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no value for this attribute to be set in the Intent.

Parm value input rules: 

* String containing a valid flag
	* The list of valid flags would be the Constant Values, which can be found on this page: http://developer.android.com/reference/android/content/Intent.html
	* For example, the value for the FLAG_ACTIVITY_NEW_TASK flag would be "0x10000000"
	* Also, if more than one flag should be used, the flags will need to be OR'ed together. For example, if you want to use the FLAG_ACTIVITY_NEW_TASK and FLAG_ACTIVITY_SINGLE_TOP flags, their values ("0x10000000" and "0x20000000") would be OR'ed together to produce the value "0x30000000", which would be used as the parm value.

###Application Launch

These parms allow you to specify the Application Name to launch as the Key Behavior for the specified Key in various Key State Mapping Tables.

####Application name
Settable if: The Action value is "Remap a key" *AND* Choose a key to modify is not "None" *AND* the Key Behavior is "Launch application"

Pivotal parm: No

Parm name:

* For Base Key State Table: BaseLaunchActivityName
* For Blue Key State Table: BlueLaunchActivityName
* For Orange Key State Table: OrangeLaunchActivityName
* For Grey Key State Table: GreyLaunchActivityName
* For Shift Key State Table: ShiftLaunchActivityName
* For Control Key State Table: ControlLaunchActivityName

Description: 

>This parm allows you to specify the Application Name of the application whose main Activity should be launched as the Key Behavior for the specified Key in various Key State Mapping Tables. The Application Name of an application is separate from the Package Name, although the two could be set the same by the application developer. More commonly, the Application Name is a human readable name that may be displayed on the application title bar and on the App Info section of the System Settings Menu. Using the Application Name to launch an application is generally simpler and friendlier that using the Package Name and Class Name, as would be required when using a more general Intent to launch an application.

Parm value input rules: 

* String containing a valid Application Name

	
## Example XML

###Key Swap Example

The first feature of the following Request XML document is used to first reset the keys to their defaults. The following features are used to swap the 7 and 9 keys on the keyboard.

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4" >
			<parm name="Action" value="2"/>
		</characteristic>
		<characteristic type="KeyMappingMgr" version="4.4" >
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
				<parm name="KeyIdentifier" value="7"/>
				<characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="16"/>
				</characteristic>
			</characteristic>
		</characteristic>
		<characteristic type="KeyMappingMgr" version="4.4" >
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
				<parm name="KeyIdentifier" value="9"/>
				<characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="14"/>
				</characteristic>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<parm name="Action" value="2"/>
		</characteristic>
		<characteristic type="KeyMappingMgr" version="4.4">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
				<parm name="KeyIdentifier" value="7"/>
				<characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="16"/>
				</characteristic>
			</characteristic>
		</characteristic>
		<characteristic type="KeyMappingMgr" version="4.4">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
				<parm name="KeyIdentifier" value="9"/>
				<characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="14"/>
				</characteristic>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Reset Keys To Default

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4" >
			<parm name="Action" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<parm name="Action" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

## Queries

###Version Query

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<parm-query name="Version"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<parm name="Version" value="4.4.0"/>
		</characteristic>
	</wap-provisioningdoc>

### Query the Available Keys

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryAvailableKeys"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic type="QueryAvailableKeys">
				<parm name="KeyIdentifier" value="0"/>
				<parm name="KeyIdentifier" value="1"/>
				<parm name="KeyIdentifier" value="2"/>
				<parm name="KeyIdentifier" value="3"/>
				<parm name="KeyIdentifier" value="4"/>
				<parm name="KeyIdentifier" value="5"/>
				<parm name="KeyIdentifier" value="6"/>
				<parm name="KeyIdentifier" value="7"/>
				<parm name="KeyIdentifier" value="8"/>
				<parm name="KeyIdentifier" value="9"/>
				<parm name="KeyIdentifier" value="A"/>
				<parm name="KeyIdentifier" value="B"/>
				<parm name="KeyIdentifier" value="C"/>
				<parm name="KeyIdentifier" value="D"/>
				<parm name="KeyIdentifier" value="E"/>
				<parm name="KeyIdentifier" value="F"/>
				<parm name="KeyIdentifier" value="G"/>
				<parm name="KeyIdentifier" value="H"/>
				<parm name="KeyIdentifier" value="I"/>
				<parm name="KeyIdentifier" value="J"/>
				<parm name="KeyIdentifier" value="K"/>
				<parm name="KeyIdentifier" value="L"/>
				<parm name="KeyIdentifier" value="M"/>
				<parm name="KeyIdentifier" value="N"/>
				<parm name="KeyIdentifier" value="O"/>
				<parm name="KeyIdentifier" value="P"/>
				<parm name="KeyIdentifier" value="Q"/>
				<parm name="KeyIdentifier" value="R"/>
				<parm name="KeyIdentifier" value="S"/>
				<parm name="KeyIdentifier" value="T"/>
				<parm name="KeyIdentifier" value="U"/>
				<parm name="KeyIdentifier" value="V"/>
				<parm name="KeyIdentifier" value="W"/>
				<parm name="KeyIdentifier" value="X"/>
				<parm name="KeyIdentifier" value="Y"/>
				<parm name="KeyIdentifier" value="Z"/>
				<parm name="KeyIdentifier" value="UP"/>
				<parm name="KeyIdentifier" value="DOT"/>
				<parm name="KeyIdentifier" value="ESC"/>
				<parm name="KeyIdentifier" value="RED"/>
				<parm name="KeyIdentifier" value="BLUE"/>
				<parm name="KeyIdentifier" value="CTRL"/>
				<parm name="KeyIdentifier" value="DOWN"/>
				<parm name="KeyIdentifier" value="LEFT"/>
				<parm name="KeyIdentifier" value="SCAN"/>
				<parm name="KeyIdentifier" value="STAR"/>
				<parm name="KeyIdentifier" value="ENTER"/>
				<parm name="KeyIdentifier" value="GREEN"/>
				<parm name="KeyIdentifier" value="RIGHT"/>
				<parm name="KeyIdentifier" value="SHIFT"/>
				<parm name="KeyIdentifier" value="SPACE"/>
				<parm name="KeyIdentifier" value="GRIP_TRIGGER"/>
				<parm name="KeyIdentifier" value="BACKSPACE"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

###Query the Available Tables

Input

	:::XML
	<wap-provisioningdoc>
	<characteristic type="KeyMappingMgr">
		<characteristic-query type="QueryAvailableTables"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic type="QueryAvailableTables">
				<parm name="TableIdentifier" value="blue"/>
				<parm name="TableIdentifier" value="base"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Query the Default Key Identifier

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryDefaultKeyMapping">
				<parm name="QueryDefaultKeyIdentifier" value="0"/>
			</characteristic-query>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic type="QueryDefaultKeyMapping">
				<characteristic type="KeyMappingMgr">
					<parm name="Action" value="1"/>
					<characteristic type="KeyMapping">
						<parm name="KeyIdentifier" value="0"/>
						<characteristic type="BlueTable">
							<parm name="BlueBehavior" value="2"/>
							<parm name="BlueKeyCode" value="140"/>
						</characteristic>
						<characteristic type="BaseTable">
							<parm name="BaseBehavior" value="2"/>
							<parm name="BaseKeyCode" value="7"/>
						</characteristic>
					</characteristic>
				</characteristic>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Query the Changed Key Identifier

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryChangedKeyMapping">
				<parm name="QueryChangedKeyIdentifier" value="0"/>
			</characteristic-query>
		</characteristic>
	</wap-provisioningdoc>

Error Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic-error type="QueryChangedKeyMapping" desc="No key mappings available"/>
		</characteristic>
	</wap-provisioningdoc>

### Query the Current Key Identifier

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryCurrentKeyMapping">
				<parm name="QueryCurrentKeyIdentifier" value="0"/>
			</characteristic-query>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic type="QueryCurrentKeyMapping">
				<characteristic type="KeyMappingMgr">
					<parm name="Action" value="1"/>
					<characteristic type="KeyMapping">
						<parm name="KeyIdentifier" value="0"/>
						<characteristic type="BlueTable">
							<parm name="BlueBehavior" value="2"/>
							<parm name="BlueKeyCode" value="140"/>
						</characteristic>
						<characteristic type="BaseTable">
							<parm name="BaseBehavior" value="2"/>
							<parm name="BaseKeyCode" value="7"/>
						</characteristic>
					</characteristic>
				</characteristic>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Query the Default Key Mappings

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryDefaultKeyMappings"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic type="QueryDefaultKeyMappings">
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="0"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="140"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="7"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="1"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="131"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="8"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="2"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="132"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="9"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="3"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="133"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="10"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="4"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="134"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="11"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="5"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="135"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="12"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="6"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="136"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="13"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="7"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="137"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="14"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="8"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="138"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="15"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="9"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="139"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="16"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="A"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="55"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="29"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="B"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="56"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="30"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="C"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="75"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="31"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="D"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="221"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="32"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="E"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="71"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="33"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="F"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="72"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="34"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="G"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="73"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="35"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="H"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="24"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="36"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="I"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="220"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="37"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="J"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="68"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="38"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="K"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="39"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="L"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="76"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="40"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="M"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="25"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="41"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="N"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="69"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="42"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="O"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="43"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="P"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="44"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="Q"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="45"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="R"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="74"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="46"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="S"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="157"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="47"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="T"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="156"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="48"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="U"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="155"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="49"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="V"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="154"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="50"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="W"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="161"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="51"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="X"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="10025"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="52"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="Y"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="53"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="Z"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="10024"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="54"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="UP"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="19"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="DOT"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="56"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="ESC"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="111"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="RED"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="104"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="BLUE"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="10027"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="CTRL"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="10030"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="10031"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="DOWN"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="20"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="LEFT"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="21"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="SCAN"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="103"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="STAR"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="141"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="17"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="ENTER"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="66"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="GREEN"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="102"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="RIGHT"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="22"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="SHIFT"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="10032"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="SPACE"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="2"/>
					<parm name="BlueKeyCode" value="61"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="62"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="GRIP_TRIGGER"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="103"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			  <characteristic type="KeyMappingMgr">
				<parm name="Action" value="1"/>
				<characteristic type="KeyMapping">
				  <parm name="KeyIdentifier" value="BACKSPACE"/>
				  <characteristic type="BlueTable">
					<parm name="BlueBehavior" value="6"/>
				  </characteristic>
				  <characteristic type="BaseTable">
					<parm name="BaseBehavior" value="2"/>
					<parm name="BaseKeyCode" value="67"/>
				  </characteristic>
				</characteristic>
			  </characteristic>
			</characteristic>
		  </characteristic>
		</wap-provisioningdoc>

### Query Changed Key Mappings

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryChangedKeyMappings"/>
		</characteristic>
	</wap-provisioningdoc>

Error Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr" version="4.4">
			<characteristic-error type="QueryChangedKeyMappings" desc="No key mappings available"/>
		</characteristic>
	</wap-provisioningdoc>

### Query Current Key Mappings

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="KeyMappingMgr">
			<characteristic-query type="QueryCurrentKeyMappings"/>
		</characteristic>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
	  <characteristic type="KeyMappingMgr" version="4.4">
		<characteristic type="QueryDefaultKeyMappings">
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="0"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="140"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="7"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="1"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="131"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="8"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="2"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="132"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="9"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="3"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="133"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="10"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="4"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="134"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="11"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="5"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="135"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="12"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="6"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="136"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="13"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="7"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="137"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="14"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="8"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="138"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="15"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="9"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="139"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="16"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="A"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="55"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="29"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="B"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="56"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="30"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="C"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="75"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="31"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="D"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="221"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="32"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="E"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="71"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="33"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="F"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="72"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="34"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="G"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="73"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="35"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="H"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="24"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="36"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="I"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="220"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="37"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="J"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="68"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="38"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="K"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="39"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="L"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="76"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="40"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="M"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="25"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="41"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="N"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="69"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="42"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="O"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="43"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="P"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="44"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="Q"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="45"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="R"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="74"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="46"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="S"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="157"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="47"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="T"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="156"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="48"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="U"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="155"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="49"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="V"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="154"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="50"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="W"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="161"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="51"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="X"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="10025"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="52"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="Y"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="53"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="Z"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="10024"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="54"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="UP"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="19"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="DOT"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="56"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="ESC"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="111"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="RED"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="104"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="BLUE"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="10027"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="CTRL"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="10030"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="10031"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="DOWN"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="20"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="LEFT"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="21"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="SCAN"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="103"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="STAR"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="141"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="17"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="ENTER"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="66"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="GREEN"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="102"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="RIGHT"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="22"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="SHIFT"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="10032"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="SPACE"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="2"/>
				<parm name="BlueKeyCode" value="61"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="62"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="GRIP_TRIGGER"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="103"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		  <characteristic type="KeyMappingMgr">
			<parm name="Action" value="1"/>
			<characteristic type="KeyMapping">
			  <parm name="KeyIdentifier" value="BACKSPACE"/>
			  <characteristic type="BlueTable">
				<parm name="BlueBehavior" value="6"/>
			  </characteristic>
			  <characteristic type="BaseTable">
				<parm name="BaseBehavior" value="2"/>
				<parm name="BaseKeyCode" value="67"/>
			  </characteristic>
			</characteristic>
		  </characteristic>
		</characteristic>
	  </characteristic>
	</wap-provisioningdoc>

