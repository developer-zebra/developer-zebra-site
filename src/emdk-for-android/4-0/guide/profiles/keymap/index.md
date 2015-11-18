---
title:  Key Mapping Manager Profile Feature Reference
---

## Overview

The Key Mapping Manager feature allows you to modify what behavior a given key will exhibit when pressed.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

## Main Functionality

* Default all key mappings
* Remap a key

## Default all key mappings
By default, all keys are mapped to a specific behavior. For instance, when the the letter "A" is pressed, a lowercase "a" will be sent. If the behavior of a key was modified via the **Remap a key** function, then **Default all key mappings** would reset all modified keys to their original behavior in all tables.

>NOTE:  When adding a custom key map, you may want to **Default all key mappings** before applying your new key map. This would insure that your key mappings are the only ones that exist after your profile is applied.

## Remap a key
The **Remap a key** function allows you to modify the behavior a key will exhibit when pressed.

### Key Tables
A **Key Table** is a list of behaviors a key will exhibit when pressed. The **Base** table is a list of behaviors a key will have when a modifier key is **not** pressed. All devices support the **Base** key table, while other key tables may only be supported on devices that have the modifier key for that key table. For instance the **Blue Table** is only supported on devices that have a blue key.  While remapping a key, you can set the behavior for that key in each table supported by the device.

>NOTE: If a profile containing a modified table that is not supported by a given device, that profile will fail when submitted.

**Modifiable key tables:**

* Base - no modifier key was pressed
* Blue - blue key was pressed before a key was pressed
* Orange - orange key was pressed before a key was pressed
* Grey - grey key was pressed before a key was pressed
* Shift - shift key was pressed before a key was pressed
* Control - control key was pressed before a key was pressed


###Send key-code

Select this behavior to modify which key-code is sent when a key is pressed. A list of possible key-codes are listed below. When modifying a key-code to be sent, you may also choose to select the state of a modifier key. For instance, if you where to modify the "A" key to send a "B" key-code, and set the **SHIFT state** to **Forced ON**, the physical Shift keys state would be disregard and a capital "B" would be sent. Enable modifier keys by clicking the **Andvanced** checkbox under send key-code.


###Send trigger
Select this behavior to allow a key to act as a trigger. You can configure the key to send one of eight trigger options.

###Launch application
Select this behavior to allow a key to start a specified Application. Just enter the name of an application as it appears in that applications title bar, or as it appears in Settings > Apps.  This options differs from **Send intent**, where you would have to supply an apps pakage name and the class name of the activity you wish to launch.

>NOTE: It is possible that multiple apps could be named the same. In that case the first app found with that name will be launched.

###Send intent
Select this behavior to allow a key to send an [Intent](http://developer.android.com/reference/android/content/Intent.html).

**Intent Options:**

* **Send Intent** - Select when the Intent should be sent.
  * On key down - When pressed
  * On key up - When released
  * On both key down and key up - Send twice, once when pressed, once when released
* **Intent type**
  * Start Activity - An Explicit Intent sent directly to one activity class
  * Broadcast - An Implicit Intent, broadcasted to all applications. Only applications that have registered a broadcast reciver for this intent will receive it.
* **Action** - Enter the action for the intent.
* **Category** - Enter the category for the intent
* **Package** - Enter the the package name for the intent - i.e. (com.mycompany)
* **Class** - Enter the class name vor the intent - i.e.  fully qualified Activity name (com.mycompany.MyActivity)
* **Data URI** - Enter the data URI for the intent. This must be a valid URI format.
* **MIME type** - Enter the MIME type for the Intent
* **Extra parameter name** - Enter an extra parameter name to be attached to the intent
* **Extra parameter value** - Enter an extra parameter string value to be attached to teh intent
* **Add key event** - Select whether the key event should be added to the intent
* **Include additional flags** - Enter flag bits in hex that should be sent


###Suppress key
Select this behavior to disable the selected key.

>NOTE:  If a key is suppressed in the **Base Table** the key can still be used in other Tables. i.e. You can still send a Capital "A" when selecting "Shift" > "A".

###Reset to default
Select this behavior to reset any custom key mapping for the selected key. After which, pressing the selected key, will send its default key.

##Modifiable Keys

* **0-9**
* **A-Z**
* **F1**
* **F2**
* **F3**
* **F4**
* **F5**
* **F6**
* **F7**
* **F8**
* **F9**
* **F10**
* **F11**
* **F12**
* **ENTER**
* **UP**
* **DOWN**
* **LEFT**
* **RIGHT**
* **ESC**
* **BACKSPACE**
* **DOT** (Period)
* **STAR**
* **POUND**
* **SPACE**
* **RETURN**
* **CLR** (Clear)
* **FIELD_EXIT**
* **ALT**
* **CTRL** (Control)
* **SHIFT**
* **BLUE**
* **ORANGE**
* **GREEN** (Green Dot)
* **RED** (Red Dot)
* **VOLUMEUP** (Volume Up)
* **VOLUMEDOWN** (Volume Down)
* **SCAN**
* **GRIP_TRIGGER**
* **LEFT_TRIGGER_1** (Button L1)
* **LEFT_TRIGGER_2** (Button L2)
* **RIGHT_TRIGGER_1** (Button R1)
* **HEADSET_HOOK** (Headset Button)
* **BACK**
* **HOME**
* **MENU**
* **SEARCH**
* **KEYLIGHT** (Keyboard Backlight)
* **LAMP** (Display Backlight)

##Key-Codes

* **0-9**
* **A-Z**
* **Enter**
* **Tab**
* **Space**
* **Escape**
* **Delete**
* **F1**
* **F2**
* **F3**
* **F4**
* **F5**
* **F6**
* **F7**
* **F8**
* **F9**
* **F10**
* **F11**
* **F12**
* **NUMPAD 0**
* **NUMPAD 1**
* **NUMPAD 2**
* **NUMPAD 3**
* **NUMPAD 4**
* **NUMPAD 5**
* **NUMPAD 6**
* **NUMPAD 7**
* **NUMPAD 8**
* **NUMPAD 9**
* **NUMPAD Divide**
* **NUMPAD Multiply**
* **NUMPAD Subtract**
* **NUMPAD Add**
* **NUMPAD Period**
* **NUMPAD Comma**
* **NUMPAD Enter**
* **NUMPAD Equals**
* **NUMPAD Left Parenthesis**
* **NUMPAD Right Parenthesis**
* **DPAD Up**
* **DPAD Down**
* **DPAD Left**
* **DPAD Right**
* **DPAD Center**
* **Move Home**
* **Move End**
* **Page Up**
* **Page Down**
* **Insert**
* **Forward Delete**
* **Blue**
* **Orange**
* **Grey**
* **Alt**
* **Control**
* **Shift**
* **Left Shift**
* **Right Shift**
* **Left Alt**
* **Right Alt**
* **Left Control**
* **Right Control**
* **Meta Left**
* **Meta Right**
* **Caps Lock**
* **Num Lock**
* **Scroll Lock**
* **SysRq**
* **Break**
* **Function**
* **Plus**
* **Minus**
* **Equals**
* **Left Bracket**
* **Right Bracket**
* **Grave**
* **Slash**
* **Backslash**
* **Semicolon**
* **Apostrophe**
* **Comma**
* **Period**
* **Star**
* **Pound**
* **At**
* **Back**
* **Forward**
* **Home**
* **Menu**
* **Calculator**
* **Explorer**
* **Envelope**
* **Bookmark**
* **Music**
* **Call**
* **Camera**
* **Search**
* **Contacts**
* **Calendar**
* **Volume Up**
* **Volume Down**
* **Volume Mute**
* **Brightness Up**
* **Brightness Down**
* **Power**
* **Sleep**
* **Wakeup**
* **Headset**
* **Push-to-talk**
* **Notification**
* **Camera Focus**
* **Media Play/Pause**
* **Media Stop**
* **Media Next**
* **Media Previous**
* **Media Rewind**
* **Media Fast-Forward**
* **Media Play**
* **Media Pause**
* **Media Close**
* **Media Eject**
* **Media Record**
* **Button L1**
* **Button R1**
* **Button L2**
* **Button R2**
* **Button A**
* **Button B**
* **Button C**
* **Button X**
* **Button Y**
* **Button Z**
* **Left Thumb Button**
* **Right Thumb Button**
* **Start Button**
* **Select Button**
* **Mode Button**
* **Gamepad Button 1**
* **Gamepad Button 2**
* **Gamepad Button 3**
* **Gamepad Button 4**
* **Gamepad Button 5**
* **Gamepad Button 6**
* **Gamepad Button 7**
* **Gamepad Button 8**
* **Gamepad Button 9**
* **Gamepad Button 10**
* **Gamepad Button 11**
* **Gamepad Button 12**
* **Gamepad Button 13**
* **Gamepad Button 14**
* **Gamepad Button 15**
* **Gamepad Button 16**
* **Zenkaku/Hankaku**
* **Eisu**
* **Muhenkan**
* **Henkan**
* **Katakana/Hiragana**
* **Yen**
* **Ro**
* **Kana**
* **Switch Charset**
* **Picture Symbols**

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=KeyMapMgr&os=All&embed=true"></iframe>

