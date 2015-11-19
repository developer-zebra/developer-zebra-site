---
title: Audio Manager
description: The AudioVolUIMgr allows you to add, delete, and replace Audio Profiles and to select the current Audio Profile that will be in effect on the device.
---

## About AudioVolUIMgr

### Overview
Many Zebra Android devices contains a Zebra Audio Volume Control UI (ZVC) that allows a device user to adjust the volumes of various Audio Streams in the device. An Audio Stream is a channel via which audio can generated and physically output (e.g. to a speaker, headset, etc.). The number of Audio Streams that can be supported by an Android device is generally fixed. But the number of possible purposes for which audio could be generated is theoretically unlimited. As a result, a particular Audio Stream might be used for a purpose other than that for which that Audio Stream is normally used in Android or a given Audio Stream might need to be used for multiple purposes.

The standard Android Audio Volume Control UI identifies each Audio Stream that can be controlled in a fixed manner that is predefined for each Audio Stream. Such identification might or might not accurately reflect the actual purposes for which a given Audio Stream is being used. This can produce a less than optimal user experience since the device user might change the volume of an Audio Stream without realizing what it might affect.

The ZVC allows configuration of the manner in which Audio Streams are identified to the device user, thus allowing the user experience to be customized. The ZVC also provides even more control over the user experience by allowing configuration of the minimum, maximum, and preset values for a given Audio Stream. For example, the minimum volume for an Audio Stream could be set greater than zero to prevent a device user from turning it off completely and potentially missing important audio notifications that are performed on that Audio Stream.

The ZVC also provides support for Audio Profiles which define different scenarios or use cases in which one or more Audio Streams can be used. Each Audio Profile can configure the behavior of ZVC for some or all of the available Audio Streams. By selecting a defined Audio Profile, the configuration of ZVC for multiple Audio Streams can be configured in a single operation. For example, there might be one Audio Profile for working in a quiet office and another for working in a noisy warehouse.

The AudioVolUIMgr Feature Type allows you to add, delete, and replace Audio Profiles and to select the current Audio Profile that will be in effect on the device. It also allows you to modify the "Factory Preset" Audio Profile, which cannot be deleted. The AudioVolUIMgr Feature Type also allows you to directly control the Mute and Vibrate states of the device, which are independent of all Audio Streams and Audio Profiles.

The ZVC can be invoked by a device user by pressing the physical volume control buttons on a device (when available) or by selecting the Sound->Volumes screen from the Android System Settings Menu. The UI presented by the ZVC when it is invoked by the device user will be determined based on the most recent configuration applied to ZVC using the AudioVolUIMgr Feature Type, in particular the set of defined Audio Profiles and the currently selected Audio Profile. The following Audio Streams are supported:

* STREAM_MUSIC - The Android audio stream typically used for music playback.
* STREAM_RING - The Android audio stream typically used for the incoming call notification.
* STREAM_NOTIFICATION - The Android audio stream typically used for other notifications.
* STREAM_SYSTEM - The Android audio stream for typically used by system sounds.
* STREAM_ALARM - The Android audio stream typically used for alarms.
* STREAM_VOICE_CALL - The Android audio stream typically used for phone calls.
* Decode Beep Virtual Volume Scale - This is a special stream used on Zebra devices to produce an audible notification for barcode scanning.

An Audio Profile can be defined to configure the following settings for any or all of the above Audio Streams:

* Label - The text label. This will be displayed by the ZVC to visually identify the Audio Stream to the device user.
* Icon - The graphical icon. This will be displayed by the ZVC to visually identify the Audio Stream to the device user.
* Visibility - This will control whether the ZVC will allow the device user to view and modify the volume settings for the Audio Stream. For example, this could be used to prevent a device user from making any changes to the volume of the Audio Stream used for incoming call notification.

An Audio Profile can also configure the volume levels for each of four audio modes: Speaker, Receiver, Wired headset, and Bluetooth headset. The specified modes are determined based on the physical output path to which an Audio Stream is directed. For each mode, the following volume levels can be specified.

* Minimum volume level - This will cause the ZVC to prevent a device user from changing the volume of the Audio Stream to a value that is below the specified value. For example, this could be used to prevent the user from setting the Audio Stream used for notifications too low in noisy environments.
* Maximum volume level - This will cause the ZVC to prevent a device user from changing the volume of the Audio Stream to a value that is above the specified value. For example, this could be used to prevent the user from setting the Audio Stream used for music playback too high in quiet environments.
* Preset volume level - This will cause the ZVC to set the volume of the Audio Stream to the specified value when this Audio Profile becomes selected as the current Audio Profile.

>**Note:** The ZVC is only available on selected Zebra Android devices running the Kit Kat version of Android, as listed in the Feature Compatibility table.  Since the AudioVolUIMgr Feature Type configures the ZVC, it is only supported on Zebra Android devices that include the ZVC.

### Main Functionality
* Create a new Audio Profile
* Delete a created Audio Profile
* Set an Audio Profile to be the current Audio Profile
* Set the Factory Preset Audio Profile to be the current Audio Profile
* Change the volume levels to be the Preset volume levels of the current Audio Profile
* Directly control the global Mute and Vibrate states of the device

##Parameter Notes
###Mute/Vibrate State
Pivotal parm: No

Parm name: MuteVibrateState

Description: 

>Select whether to mute the device, set the device to vibrate, or unmute the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will make no changes to the Mute and Vibrate states of the device.</td>
  </tr>
  <tr>
    <td>Mute - Turn off audible sounds</td>
    <td>"1"</td>
	<td>This value will cause the global Mute state of the device to be enabled, thus silencing the output of all Audio Streams.</td>
  </tr>
  <tr>
    <td>Vibrate - Turn off audible sounds and turn on vibrate</td>
    <td>"2"</td>
	<td>This value will cause the global Mute and Vibrate states of the device to be enabled, thus silencing the output of all Audio Streams and enabling haptic feedback (vibrate).</td>
  </tr>
  <tr>
    <td>UnMute - Turn on audible sounds</td>
    <td>"3"</td>
	<td>This value will cause the global Mute and Vibrate states of the device to be disabled, thus re-enabling the output of all Audio Streams and disabling haptic feedback (vibrate).</td>
  </tr>
</table>
</div>	

###Current Active Profile Action
Pivotal parm: Yes

Description: 

>This parm is used to set a previously-created Audio Profile or the Factory Preset Audio Profile to be the current Audio Profile. It can also be used to force the volumes of all Audio Streams back to the Preset volumes specified for the current Audio Profile.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to the currently selected Audio Profile or the volume levels of any Audio Streams.</td>
  </tr>
  <tr>
    <td>Set an Audio UI Profile as the current Profile</td>
    <td>"1"</td>
	<td>This value will cause a previously-created named Audio Profile to be made the new current Audio Profile.</td>
  </tr>
  <tr>
    <td>Adjust to the Preset volume level of the current Profile</td>
    <td>"2"</td>
	<td>This value will cause no change to the currently selected Audio Profile but will cause the volume levels of all Audio Streams to be reset to the Preset volume levels configured for the current Audio Profile.</td>
  </tr>
  <tr>
    <td>Set the FactoryPreset Profile as the current Profile</td>
    <td>"3"</td>
	<td><p>This value will cause the Factory Preset Audio Profile to be made the new current Audio Profile.</p><p><b>Note:</b> Since the configuration of the Factory Preset Audio Profile may have been modified, this may not always result in "Factory Defined" settings.</p></td>
  </tr>
</table>
</div>	

####Name of the Current Audio UI Profile
Settable if: The Current Active Profile Action is "Set an Audio UI Profile as the current Profile"

Pivotal parm: No

Parm name: CurrentProfileName

Description: 

>This parm specifies the name of the previously-created Audio Profile that will be set as the new current Audio Profile. If the specified name does not match the name of a currently defined Audio Profile, then an error will be returned in the Result XML document.

Parm value input rules: 

* String that has a minimum size of 1 character and a maximum size of 255 characters

####Adjust current audio volume
Settable if: The Current Active Profile Action is "Set an Audio UI Profile as the current Profile"

Pivotal parm: No

Parm name: SetCurrentProfileOption

Description: 

>This parm specifies whether the current volume levels of all Audio Streams affected by the Audio Profile should be set to the Preset volume levels of that Audio Profile.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not adjust the volume level</td>
    <td>"1"</td>
	<td><p>This value will cause the Preset volume levels specified for all Audio Streams in the new current Audio Profile to be ignored.</p><p>If the current volume level of an Audio Stream is less than the minimum, then it will be changed to the minimum and if the current volume level of an Audio Stream is greater than the minimum, then it will be changed to the maximum.  Otherwise, the current volume level of an Audio Stream will be unchanged.</p></td>
  </tr>
  <tr>
    <td>Adjust the volume level</td>
    <td>"2"</td>
	<td><p>This value will cause the Preset volume levels specified for all Audio Streams in the new Audio Profile to be made the new current volumes for those Audio Streams.</p><p>This option ensures that a specific set of volumes will be in effect after setting a new current Audio Profile. This should be used with caution since it could have a noticeable impact on current or future audio output.</p></td>
  </tr>
</table>
</div>	

###Audio UI Profile Action
Pivotal parm: Yes

Description: 

>This parm allows you to Create a new Audio Profile, Modify a previously created Audio Profile, Modify the Factory Present Audio Profile, or Delete a previously-created Audio Profile.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to the set of defined Audio Profiles or the Factory Preset Audio Profile.</td>
  </tr>
  <tr>
    <td>Add an Audio UI Profile</td>
    <td>"1"</td>
	<td><p>This value will cause a new Audio Profile to be created, a previously created Audio Profile to be modified, or the Factory Preset Audio Profile to be modified.</p><p><b>Note:</b> If an Audio Profile with the specified name exists in the device, then it will be replaced by the new definition.</p></td>
  </tr>
  <tr>
    <td>Remove an Audio UI Profile</td>
    <td>"2"</td>
	<td><p>This value will cause a previously-created Audio Profile to be deleted.</p><p><b>Note:</b> If no Audio Profile with the specified name exists in the device, then an error will be returned in the Result XML document.</p>
</td>
  </tr>
</table>
</div>	

####Name of the Audio UI Profile
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile" or "Remove an Audio UI Profile"

Pivotal parm: No

Parm name: ProfileName

Description: 

>This parm specifies the name of the Audio Profile that will be Created, Modified, or Deleted. This name must be the same name supplied for the parm CurrentProfileName when setting an Audio Profile to be the new current Audio Profile.

>**Note:** This value cannot be "FactoryPreset" since this is a reserved name for the FactoryPreset Profile that is built into the device.

Parm value input rules: 

* String that has a minimum size of 1 character and a maximum size of 255 characters

####UI Label of STREAM_MUSIC
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used for music playback. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_MUSIC 
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used for music playback. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_MUSIC
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used for music playback. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for music playback when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for music playback to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for music playback when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for music playback to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for music playback when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for music playback to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_MUSIC_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for music playback when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the music volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for music playback to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_RING
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used for the incoming call notification. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_RING
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used for the incoming call notification. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_RING
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used for the typically used for the incoming call notification. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for the incoming call notification when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for the incoming call notification to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for the incoming call notification when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for the incoming call notification to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for the incoming call notification when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for the incoming call notification to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_RING_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for the incoming call notification when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the ring tone volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for the incoming call notification to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_NOTIFICATION
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used for other notifications. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_NOTIFICATION
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: 

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used for other notifications. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_NOTIFICATION
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used for other notifications. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for other notifications when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for other notifications to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for other notifications when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for other notifications to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for other notifications when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for other notifications to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_NOTIFICATION_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for other notifications when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the notification volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for other notifications to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_SYSTEM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used by system sounds. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_SYSTEM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used by system sounds. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_SYSTEM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used by system sounds. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used by system sounds when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used by system sounds to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used by system sounds when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used by system sounds to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used by system sounds when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used by system sounds to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_SYSTEM_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used by system sounds when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used by system sounds to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_ALARM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used for alarms. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_ALARM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used for alarms. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_ALARM
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used for alarms. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for alarms when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the alarm volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for alarms to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for alarms when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the alarm volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for alarms to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for alarms when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for alarms to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_ALARM_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for alarms when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the system volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for alarms to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.
 
Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of STREAM_VOICECALL
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the Audio Stream that is typically used for phone calls. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of STREAM_VOICECALL
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the Audio Stream that is typically used for phone calls. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_VOICECALL
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the Audio Stream that is typically used for phone calls. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for phone calls when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for phone calls to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for phone calls when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for phone calls to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for phone calls when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for phone calls to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VOICECALL_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the Audio Stream that is typically used for phone calls when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the voice call volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the Audio Stream that is typically used for phone calls to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####UI Label of Decode Beep Virtual Volume Scale
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Label

Description: 

>This parm allows you to set a customized label that the ZVC will display to visually identify the decode beep virtual volume stream. 

>**Note:** If the value of this parm is empty (a length of 0), then no customized label will be specified for the Audio Stream. This will cause ZVC to display not label the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####UI Icon of Decode Beep Virtual Volume Scale
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Icon

Description: 

>This parm allows you to set a customized icon that the ZVC will display to visually identify the decode beep virtual volume stream. If specified, the value must be the full path and file name of an icon file in PNG format that resides in the device file system. An icon size of 48x48 pixels is recommended. 

>**Note:** If the value of this parm is empty (a length of 0), or if the value provided does not reference an icon file, then no customized icon will be specified for the Audio Stream. This will cause ZVC to display the default icon defined for the Audio Stream.

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters

####Control Parameters of STREAM_VVS
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_Ctrl

Description: 

>This parm allows you to control whether the ZVC allow the device user to view and modify the volume settings for the decode beep virtual volume stream. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to this Audio Stream's visibility. 

Parm value input rules: 

* String that has a minimum size of 0 character and a maximum size of 255 characters
* The value that is entered must be either "1", which will make the stream visible, or "0", which will make the Audio Stream hidden.

####Minimum, Maximum and Preset Volume Level for Speaker Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_SPK_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in speaker mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Receiver Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_RCVR_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in receiver mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Wired Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_WHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in wired headset mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

####Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode
Settable if: The Audio UI Profile Action is "Add an Audio UI Profile"

Pivotal parm: No

Parm name: STREAM_VVS_BTHS_LEVEL

Description: 

>This will set the minimum, maximum, and preset volume levels for the decode beep virtual stream when the device is in bluetooth headset mode mode. The user will not be able to lower or raise the volume outside of the minimum/maximum range that is set. If the decode beep virtual volume level was outside of this range at the time that this range is set, then the volume of this stream will be equal to the minimum or maximum level depending on whether it was below or above this volume range.

>The preset volume level is a third volume level that must be greater than or equal to the minimum volume level and less than or equal to the maximum volume level. If the preset volume is outside of the minimum/maximum range, then this value will be be equal to the minimum or maximum level depending on whether it was below or above this volume range. This will be used by the SetCurrentProfileOption feature to adjust the volume of the decode beep virtual stream to this set level. 

>Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the volume levels.

Parm value input rules: 

* String that contains the minimum, maximum, and preset volumes in this order and separated by commas. For example, "1,5,3"
* The volume levels must be positive integers that are less than 256.

##Example XML

###Add a New Audio Profile

	:::XML
	<wap-provisioningdoc>
		<characteristic type="AudioVolUIMgr" version="4.4" >
			<parm name="UIProfileAction" value="1"/>
			<characteristic type="UIProfile">
				<parm name="ProfileName" value="Test2"/>
				<characteristic type="UIProfile-streamconfig">
					<parm name="STREAM_MUSIC_Label" value="MUSIC"/>
					<parm name="STREAM_MUSIC_Icon" value="/internal/xmltest/in/Speaker.png"/>
					<parm name="STREAM_MUSIC_Ctrl" value="1"/>
					<parm name="STREAM_MUSIC_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_MUSIC_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_MUSIC_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_MUSIC_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_RING_Label" value="RING"/>
					<parm name="STREAM_RING_Icon" value="/internal/xmltest/in/Ring.png"/>
					<parm name="STREAM_RING_Ctrl" value="1"/>
					<parm name="STREAM_RING_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_RING_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_RING_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_RING_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_NOTIFICATION_Label" value="NOTIFY"/>
					<parm name="STREAM_NOTIFICATION_Icon" value="/internal/xmltest/in/Notify.png"/>
					<parm name="STREAM_NOTIFICATION_Ctrl" value="1"/>
					<parm name="STREAM_NOTIFICATION_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_NOTIFICATION_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_NOTIFICATION_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_NOTIFICATION_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_SYSTEM_Label" value="SYSTEM"/>
					<parm name="STREAM_SYSTEM_Icon" value="/internal/xmltest/in/System.png"/>
					<parm name="STREAM_SYSTEM_Ctrl" value="1"/>
					<parm name="STREAM_SYSTEM_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_SYSTEM_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_SYSTEM_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_SYSTEM_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_ALARM_Label" value="ALARM"/>
					<parm name="STREAM_ALARM_Icon" value="/internal/xmltest/in/ALARM.png"/>
					<parm name="STREAM_ALARM_Ctrl" value="1"/>
					<parm name="STREAM_ALARM_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_ALARM_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_ALARM_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_ALARM_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_VOICECALL_Label" value="PHONE"/>
					<parm name="STREAM_VOICECALL_Icon" value="/internal/xmltest/in/Phone.png"/>
					<parm name="STREAM_VOICECALL_Ctrl" value="1"/>
					<parm name="STREAM_VOICECALL_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_VOICECALL_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_VOICECALL_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_VOICECALL_BTHS_LEVEL" value="4,11,8"/>
					<parm name="STREAM_VVS_Label" value="SCAN"/>
					<parm name="STREAM_VVS_Icon" value="/internal/xmltest/in/ScanGun.png"/>
					<parm name="STREAM_VVS_Ctrl" value="1"/>
					<parm name="STREAM_VVS_SPK_LEVEL" value="1,14,8"/>
					<parm name="STREAM_VVS_RCVR_LEVEL" value="2,13,8"/>
					<parm name="STREAM_VVS_WHS_LEVEL" value="3,12,8"/>
					<parm name="STREAM_VVS_BTHS_LEVEL" value="4,11,8"/>
				</characteristic>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AudioVolUIMgr&os=JB&embed=true"></iframe> 