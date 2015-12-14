---
title:  KeyMap
---

## About KeyMap

### Overview

The Key Mapping Manager feature allows you to modify the behavior a given key exhibits when pressed.

### Main Functionality

* Default all key mappings
* Remap a key

##Parameter Notes

### Default all key mappings
By default, all keys are mapped to a specific behavior. For instance, pressing the letter "A" sends a lowercase "a". If you modified the behavior of a key via the **Remap a key** function, then **Default all key mappings** resets all modified keys to their original behavior in all tables.

>NOTE:  When adding a custom key map, you can **Default all key mappings** before applying your new key map to ensure that the key mappings are the only ones that exist after applying the profile.

### Remap a key
The **Remap a key** function allows you to modify the behavior a key exhibits when pressed.

### Key Tables
A **Key Table** is a list of behaviors a key exhibits when pressed. The **Base** table is a list of behaviors a key has when a modifier key is **not** pressed. All devices support the **Base** key table, while other key tables may only be supported on devices that have the modifier key for that key table. For instance the **Blue Table** is only supported on devices that have a blue key.  While remapping a key, you can set the behavior for that key in each table supported by the device.

>NOTE: If a profile contains a modified table not supported by a given device, that profile fails when submitted.

**Modifiable key tables:**

* Base - no modifier key was pressed
* Blue - blue key was pressed before a key was pressed
* Orange - orange key was pressed before a key was pressed
* Grey - grey key was pressed before a key was pressed
* Shift - shift key was pressed before a key was pressed
* Control - control key was pressed before a key was pressed

###Send key-code
Select this behavior to modify which key-code is sent when a key is pressed. Following is a list of possible key-codes. When modifying a key-code to send, you may also choose to select the state of a modifier key. For instance, if you are modifying the "A" key to send a "B" key-code, and set the **SHIFT state** to **Forced ON**, the physical Shift keys state is ignored and a capital "B" is sent. Enable modifier keys by clicking the **Andvanced** checkbox under send key-code.

###Send trigger
Select this behavior to allow a key to act as a trigger. You can configure the key to send one of eight trigger options.

###Launch application
Select this behavior to allow a key to start a specified application. Enter the name of an application as it appears in that applications title bar, or as it appears in Settings > Apps.  This option differs from **Send intent**, where you must supply an apps pakage name and the class name of the activity to launch.

>NOTE: If multiple apps use the same name, the first app found with that name is launched.

###Send intent
Select this behavior to allow a key to send an [Intent](/stagenow/2-2/csp/intent).

**Intent Options:**

* **Send Intent** - Select when the Intent is sent:
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

>NOTE:  If a key is suppressed in the **Base Table** the key can still be used in other tables, e.g., you can still send a Capital "A" when selecting "Shift" > "A".

###Reset to default
Select this behavior to reset any custom key mapping for the selected key. Pressing the selected key sends its default key.

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

