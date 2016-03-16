---
title: Enterprise Keyboard Configuration
layout: guide.html
---

## Overview

Enterprise Keyboard is designed to provide Zebra customers and partners with the most productive means possible of inputting data into Zebra devices. 

numerical
language
medical
industrial
custom 

specialized terms

------

Refer to the OTHER PARTS ODF THIS GUIDE 

[Advanced Features Guide](../features) for information about Kiosk Mode, Secure Mode, Lockdown State and other special EHS features and behaviors. 


5. Enterprise Keyboard main icon created and added to the project.

3. Showing the Scan tab is now a configurable option in the CSP.

7. Added Swipe left/right to navigate between keyboard layouts.

8. Established Zebra color scheme as well as fine tuning various keyboard layouts (visual and keys presented).

9. Added Keyboard metrics for usage statistics via the Zebra Analytics engine (USER ACCESSIBLE?).

10. Addressed issues with the use of the Personal dictionary and short-cuts.

11. Scanning layout programmatically hidden/visible based on version of DCP (Data Capture Plus) installed for compatibility support.

12. Missing keyboard preferences available via the settings UI have been added to the CSP for completeness.

15. Words added to the personal dictionary with a defined shortcut now appear in the suggestions bar when the shortcut is typed.

24. Key remapping available on four keys in the numeric keyboard layout.
16. The remappable keys available in the numeric layout now set to the following defaults; P1= “/”, P2=”:”, P3=”#”, P4=”$”

17. Custom dictionary mass deployable. Not available for Voalte initial release (5-Feb-16)

19. Gesture parameters removed from keyboard settings as gesturing is not supported.

20. “Prototype” watermark included on QWERTY spacebar to indicate keyboard is not intended for production use.

22. Proper layout presented based on input field type.

23. Barcode scanning layout (tab) added. Not available for Voalte initial release (5-Feb-16)

25. “Flick” feature added to select alternate character on keyboard.

26. Long press behavior reestablished to be consistent with Google keyboard.

27. Mass deployable keyboard settings feature added. Not available for Voalte initial release (5-Feb-16)

Dictionary words are displayed when associated shortcut word is typed.

Key layouts
QWERTY
Numeric
Symbol
Phone
Emoji
Scan

Accessing alternate keys
Press
Shift-press
Long-press
Flick


Languages available today
English
UK-English
French
German
Italian
Spanish
Dutch
Russian
Selectable via long press on spacebar (language or keyboard?)
Toggle between multi-languages “world” button


Key-press feedback
Haptic on keypress (system setting)
Sound on keypress (system setting)
Visual color change on selected key
Key preview above selected key

Correction
Auto-capitalization enable/disable
Show correction suggestions –enable/disable
Personalized suggestions (learned) – enable/disable
Next word suggestion – enable/disable
Personal dictionary – add/delete words





Unique to Zebra: 
Scan key

Layout switching
Integrated tab for layout switching
Swipe left-right for layout switching
Preservation of shift-lock when switching layouts
Automatic based on field type

Provisioning: 
General preferences and settings via CSP
Personal dictionary add/delete words via CSP

Input methods
Touch
Flick
Voice (GMS-enabled devices only)
Scanner


<b>Note</b>: Following installation, the default keyboard selector can be invoked directly by long-pressing the spacebar from the Android or Zebra keyboards.
<img alt="" style="height:350px" src="choose_input.png"/>



Known Limitations
Shift lock inadvertently locks after performing a shift lock, typing one letter, switching to another layout to enter some characters; returning to the QWERTY layout and engaging the Shift lock again.  With the intent of typing only a single capitalized letter the Shift lock remains engaged.
