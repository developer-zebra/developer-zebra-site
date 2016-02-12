---
title:  Audio Volume UI Manager Profile Feature Reference
---

## Overview

The Audio Manager feature allows you to manage enhanced audio volume control configurations

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../../../api/core/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../usingwizard) for more information.

## Main Functionality

* Mute/Vibrate State
* Current Active Profile 
* Audio UI Profile Action

## Mute/Vibrate State

Select whether to mute the device or set the device to vibrate

* **Mute** - Turn off audible sounds
* **Vibrate** - Turn off audible sounds and turn on vibrate
* **UnMute** - Turn on audible sounds and turn off Vibrate

## Current Active Profile Action

Specify the Current Profile action to perform

* **Set an Audio UI Profile as the current** 
	* Name of the Current Audio UI Profile - Specify the name of the profile you wish to switch to.
	* Adjust current audio volume 
		* Do not adjust the volume level - do not make audio volume setting take effect immediately 
		* Adjust the volume level - make audio volume setting take effect immediately

* **Adjust to the Preset volume level of the current Profile**

* **Set the FactoryPreset Profile as the current Profile**


## Audio UI Profile Action

### Add an Audio UI Profile 
Modify the following settings to customize your new Audio UI Profile. You do **not** need to provide values for all fields. Only fill in values you wish to modify.

* **Name of the Audio UI Profile** - Provide a name to identify this profile
* **UI Label of STREAM_MUSIC** - Provide the UI label for the music stream
* **UI Icon of STREAM_MUSIC** - Provide the URL to the icon image for the music stream
* **Control Parameters of STREAM_MUSIC** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for music stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for music stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for music stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for music stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of STREAM_RING** - Provide the UI label for the ring stream
* **UI Icon of STREAM_RING** - Provide the URL to the icon image for the ring stream
* **Control Parameters of STREAM_RING** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for ring stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for ring stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for ring stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for ring stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of STREAM_NOTIFICATION** - Provide the UI label for the NOTIFICATION stream
* **UI Icon of STREAM_NOTIFICATION** - Provide the URL to the icon image for the NOTIFICATION stream
* **Control Parameters of STREAM_NOTIFICATION** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for NOTIFICATION stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for NOTIFICATION stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for NOTIFICATION stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for NOTIFICATION stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of STREAM_SYSTEM** - Provide the UI label for the SYSTEM stream
* **UI Icon of STREAM_SYSTEM** - Provide the URL to the icon image for the SYSTEM stream
* **Control Parameters of STREAM_SYSTEM** - Specify whether the stream is visible (1) or not (0) to the user	
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for SYSTEM stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for SYSTEM stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for SYSTEM stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for SYSTEM stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of STREAM_ALARM** - Provide the UI label for the ALARM stream
* **UI Icon of STREAM_ALARM** - Provide the URL to the icon image for the ALARM stream
* **Control Parameters of STREAM_ALARM** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for ALARM stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for ALARM stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for ALARM stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for ALARM stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of STREAM_VOICECALL** - Provide the UI label for the VOICECALL stream
* **UI Icon of STREAM_VOICECALL** - Provide the URL to the icon image for the VOICECALL stream	
* **Control Parameters of STREAM_VOICECALL** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for VOICECALL stream in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for VOICECALL stream in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for VOICECALL stream in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for VOICECALL stream in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **UI Label of Decode Beep Virtual Volume Scale** - Provide the UI label for Decode Beep Virtual Volume Scale
* **UI Icon of Decode Beep Virtual Volume Scale** - Provide the URL to the icon image for Decode Beep Virtual Volume Scale
* **Control Parameters of STREAM_VVS** - Specify whether the stream is visible (1) or not (0) to the user
* **Minimum, Maximum and Preset Volume Level for Speaker Mode** - Specify the volume levels for Decode Beep Virtual Volume Scale in speaker mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Receiver Mode** - Specify the volume levels for Decode Beep Virtual Volume Scale in receiver mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Wired Headset Mode** - Specify the volume levels for Decode Beep Virtual Volume Scale in Wired Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)
* **Minimum, Maximum and Preset Volume Level for Bluetooth Headset Mode** - Specify the volume levels for Decode Beep Virtual Volume Scale in Bluetooth Headset mode (in the order of &quot;min, max, preset&quot; separated by comma and as positive integers less than 256, e.g. &quot;10, 1, 5&quot;)

### Remove an Audio UI Profile
* **Name of the Audio UI Profile** - Provide a the name of the profile you wish to remove

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AudioMgr&os=All&embed=true"></iframe> 









