---
title: Enterprise Keyboard Customization
layout: guide.html
product: Enterprise Keyboard
productversion: '1.0'
---

## Overview

Enterprise Keyboard builds on the stock Android keyboard to provide a more effective means of inputting data into Zebra devices. The Zebra keyboard permits quick switching between languages, can to scan directly from the keyboard to collect data, and can set keys to perform specific tasks. It also implements finger-flicks for typing long-press characters and swiping to switch key layouts. 

Enterprise Keyboard uses Android's Personal dictionary feature for spelling suggestions and corrections, giving it the ability to store industry-specific terms to help improve speed and accuracy of keyboard input. <!--Terms can saved and mass-deployed using Zebra's Mobility Extensions (MX) and [StageNow](/stagenow/2-2/about/) tools. -->

## Customizing Keyboard Settings

Enterprise Keyboard Settings are accessed through the Android Settings panel: 

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. <b>Tap the "Language and input" control</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Tap the Enterprise Keyboard Settings button</b>:
<img alt="" style="height:350px" src="ekb_settings_button.png"/>
<br>

&#53;. <b>Tap the setting(s) to be changed</b>:
<img alt="" style="height:350px" src="ekb_settings_panel.png"/>

------

### Languages
By default, Enterprise Keyboard uses the language selected in the "Language and input" part of the Android Settings panel: 

<img alt="" style="height:350px" src="android_lang.png"/>

#####Switch from system-selected language to one provided with Enterprise Keyboard: 

&#49;. <b>Tap on "Languages"</b> in the Enterprise Keyboard Preferences panel: 
<img alt="" style="height:350px" src="ekb_settings_panel.png"/>
This version of Enterprise Keyboard includes the following languages: 

* English (UK)
* English (US) 
* French
* Italian
* German
* Spanish
* Russian

&#50;. <b>Uncheck "Use system language" checkbox</b>: 
<img alt="" style="height:350px" src="pref_language.png"/>
<br>

With the "Use system language" preference unchecked, language packs become available for selection. 

&#51;. <b>Tap one or more languages</b> to select them: 
<img alt="" style="height:350px" src="pref_language_2.png"/>
<br>

<!--
Selected languages will appear in the language  menu in the Enterprise Keyboard: 
<img alt="" style="height:350px" src="sample_2.png"/>
<br>
-->

------

### Preferences
The Preferences section controls keypress feedback and other aids to productivity. Default settings are shown here:  

<img alt="" style="height:350px" src="ekb_prefs.png"/>
<br>

##### Set preferences as desired: 

* <b>Auto-capitalization</b> automatically capitalizes the first word of each sentence following a period. 

* <b>Double-space period</b> automatically inserts a period and space when double-tapping the spacebar. 

* <b>Vibration on keypress</b> sets the device to vibrate when a key is pressed. Duration is configurable in [Advanced settings](#advanced). 

* <b>Sound on keypress</b> plays a sound when a key is pressed. Volume is configurable in [Advanced settings](#advanced).

<!--
* <b>Popup on keypress</b> displays a pop-up of the key being pressed. A delay can be added in [Advanced settings](#advanced).
-->
* <b>Show scan tab</b> displays a tab for switching to the scanner for collecting barcode data. Scanning in Enterprise Keyboard requires [the DataWedge service](#datawedge) to be enabled on the device. 

* <b>Voice input key</b> option will appear on GMS-enabled devices only. When checked, will display a key for allowing Enterprise Keyboard to accept spoken input using the mic. 

------

### Text Correction
Text Correction controls automatic corrections to typed text based the predefined parameters explained below. In addition, the Personal dictionary feature allows a list of custom or industry-specific terms to be stored and presented as spelling suggestions along with those of the selected language(s).

<img alt="" style="height:350px" src="pref_text_2.png"/>
<br>

##### Set preferences as desired: 

<b>Block offensive words</b> prevents display of spelling suggestions that might be deemed offensive or insensitive as determined by external standards of decency.

<b>Auto-correction</b> automatically replaces misspelled words with those found in the Add-on and Personal dictionaries (see below). Replacements are executed by pressing the spacebar. 

<b>Show correction suggestions</b> displays suggested words while typing but does not replace them when the spacebar is pressed unless Auto-correction is also enabled.

<b>Personalized suggestions</b> learns from communications and typed data to improve suggestions.

<b>Suggest Contact names</b> automatically displays contacts from the contact list when typing names. 

<b>Next-word suggestions</b> looks at the word prior to the one being typed and displays words that might come next. This is sometimes referred to as "predictive text."

#### Personal dictionary
The Personal dictionary can be used to store terms specific to a particular industry to help improve the speed and accuracy of keyboard input. For example, if configured for a medical device, the acronym "gerd" could be added as a shortcut and replaced with "gastroesophageal reflux disease" whenever it was typed.

<img alt="" style="height:350px" src="pref_text_1.png"/>
<br>

<b>Notes</b>:

* Terms must be added to the Personal dictionary one at a time. 
* There is no set limit on the length of terms and phrases that can be entered into the Personal dictionary.
* When displayed, longer terms and phrases might be injected with an ellipsis (...) in the suggestion bar. 
* Spelling suggestions do not appear with all field types.  
* For mass deployment, the Personal dictionary must be populated beforehand using Zebra's [StageNow](/stagenow/2-2/about/) tool. 

#####Add a term to the Personal dictionary: 

&#49;. <b>Tap "Personal dictionary"</b> in the Text correction Preference panel: 
<img alt="" style="height:350px" src="personal_dic.png"/>
<br>

&#50;. <b>Tap the language</b> with which to associate the personal term(s). Select "For all languages" to display Personal dictionary terms with every language pack:  
<img alt="" style="height:350px" src="pref_dic.png"/>
<br>

&#51;. <b>Tap the plus sign (+)</b> to define a new word or phrase: 
<img alt="" style="height:350px" src="pref_dic_add.png"/>
<br>

&#51;. <b>Enter the word or phrase</b> (and shortcut, if desired), then <b>tap the gear icon to save</b>. 
<img alt="" style="height:350px" src="enter_term_gerd.png"/>
<br>

&#52;. <b>Repeat Steps 3 and 4</b> until all terms are added. <b> Words and/or phrases must be added one at a time</b>. After each term is added, the terms list is displayed: 
<img alt="" style="height:350px" src="term_list_gerd.png"/>
<br>

When a shortcut is typed as input, its associated term will appear in a list of spelling corrections: 
<img alt="" style="height:350px" src="autocorrected_gerd.png"/>
Press the spacebar to accept the highlighted word (which in this case is "Gerd") or tap the desired word or phrase to insert it. 
<br>

**Note**: To maximize screen space for apps, the spelling Suggestion Bar shares space with the keypad Navigation Tab bar. The nav bar fades out temporarily when suggestions are available.

#####Edit or delete a term: 

&#49;. Bring up the terms list and <b>tap the term</b>  to be edited:
<img alt="" style="height:350px" src="term_list_gerd.png"/>
<br>

&#50;. <b>Edit the term</b> or tap the trashcan icon to delete: 
<img alt="" style="height:350px" src="enter_term_gerd.png"/>
<br>

#### Add-on dictionaries
Add-on dictionaries contain predefined word corrections and suggested words for each language installed on the device. <!--As Enterprise Keyboard is used, it stores new words and patterns of frequently used words and phrases so that its word suggestions can improve over time.Those words and patterns are appended to the Add-on dictionaries according to language in use by the keyboard at the time the pattern was identified. -->From this panel, user actions are limited to viewing the list of installed Add-on dictionaries and deleting/reinstalling them. No further actions are permitted. 

<img alt="" style="height:350px" src="pref_dic_addon_1.png"/>
<!--
<img alt="" style="height:350px" src="pref_dic_addon_2.png"/>

<img alt="" style="height:350px" src="pref_dic_addon_3.png"/>
-->
------

### Advanced 
The Advanced panel allows the setting of keypress feedback parameters for feedback types that are enabled in the Preferences panel. The image below shows sound feedback disabled (by default):  
<img alt="" style="height:350px" src="pref_advanced.png"/>
<br>

Tap on a setting to bring up a panel for adjusting that setting: 
<!--
<b>Key Popup dismiss delay</b> controls whether to delay when dismissing the key popup. 
<img alt="" style="height:150px" src="adv_popup.png"/>
<br>-->

<b>Keypress vibration duration</b> sets the length of time (from 0 to 100ms) the device will vibrate to indicate that a key was pressed (default = 0ms). 
<img alt="" style="height:150px" src="adv_vibrate.png"/>
<br>

<b>Keypress sound volume</b> controls the loudness (from 0 to 100) of the sound that coincides with a keypress (default = System setting). 
<img alt="" style="height:150px" src="adv_sound.png"/>
<br>

<b>Key long press delay</b> sets the time (from 100 to 700ms) a key must be held down before being considered a long-press (default = 300ms).
<img alt="" style="height:150px" src="adv_longpress.png"/>
<br>

------

### Remapping Keys
Enterprise Keyboard designates five keys as user-programmable: one in the alpha-key layout and four in the numerical layout. The Remapping panel shows the current character and Unicode mappings for each key. The images below show default settings, including the Alpha P1 key mapped to display the EMOJI panel. 

One key can be remapped in the alpha-key layout: 
<img alt="" style="height:150px" src="keyboard_alone.png"/>

Four keys can be remapped in the numerical layout: 
<img alt="" style="height:150px" src="keyboard_numerical.png"/>

Remapping panel shows current settings of remappable keys: 
<img alt="" style="height:350px" src="pref_remap.png"/>
<br>

#####Remap a key: 

&#49;. Bring up the Remapping panel and <b>tap on the key to be remapped</b>:
<img alt="" style="height:350px" src="remap.png"/>
<br>

&#50;. <b>Specify a Unicode value or type an alternative character</b> to associate with that key:  
<img alt="" style="height:350px" src="remap_keypad.png"/>
<br>

&#51;. <b>Tap "OK"</b> to store the setting. Changes take effect immediately. 

------

## DataWedge
The scan tab in Enterprise Keyboard uses scanning services provided by [DataWedge](/datawedge/5-0/guide/about), Zebra's data acquisition and delivery tool that's included on every Zebra device. <b>DataWedge must be enabled on the device for the Scan tab to be operational</b>. 

<img alt="" style="height:350px" src="scan_tab.png"/>
<br>

**To enable DataWedge on a device** (or confirm that it's enabled): 

&#49;. On the device, locate and <b>tap the DataWedge icon</b>: 
<img alt="" style="height:350px" src="datawedge_home_screen.png"/>
<br>

&#50;. From the DataWedge Profiles screen, tap the "hamburger" menu (see arrow), then <b>Tap "Settings"</b> on the menu: 
<img alt="" style="height:350px" src="datawedge_settings.png"/>
<br>

&#51;. The DataWedge Settings panel appears. Confirm that the <b>"DataWedge enabled"</b> box is checked. 
<img alt="" style="height:350px" src="datawedge_enabled.png"/>
<br>

**Important**: See the [Scanner Control](#scannercontrol) section, below. 

For more information about scanning with Enterprise Keyboard, see [Enterprise Keyboard Setup](../setup). 

Also refer to the [DataWedge User Guide](../../../../) for complete documentation.

------

## Tab-key Navigation
The Tab key is designed to move the cursor or UI focus from one text field or UI component to the next. On apps that are unaware of this context, the Enterprise Keyboard Tab key might input spaces instead of moving the cursor. For HTML apps, Zebra recommends using the Tab key to navigate from field to field. For help with native-app navigation, please refer to Android developer docs for information about [Android Tab-key navigation](https://developer.android.com/training/keyboard-input/navigation.html).

------

## Scanner Control
It's important to note that **control of a device's barcode scanning hardware is exclusive**. When an application that uses the scanner is active (such as one made with EMDK that uses the Barcode API), DataWedge (and hence the Enterprise Keyboard scan tab) will not operate. Likewise, when an app such as Enterprise Keyboard controls the scanning hardware, other apps are prevented from doing so. It is therefore important to understand how to take control of a device's scanner hardware and if necessary, release it to other apps when scanning is complete. For more information, see the section on [Disabling DataWedge](../../../../datawedge/6-0/guide/setup/#disabledatawedge) in the [DataWedge User Guide](../../../../datawedge). 

