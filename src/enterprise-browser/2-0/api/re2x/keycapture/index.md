---
title: KeyCapture Module
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---
## Overview
The KeyCapture module can intercept or override hardware keys, and is typically used to assign certain application functions to physical keys or other hardware buttons.


<table class="re-table"><tr><th class="tableHeading">keyCapture (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="KeyCapture" content="[parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="KeyCapture" content="KeyEvent:url('[jsFunction | url]')"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="KeyCapture" content="TriggerEvent:url('[jsFunction | url]')"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">KeyCapture JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'keyCapture'</b> will exist on the current page and can be used to interact directly with the keyCapture.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set keyCapture parameters via JavaScript use the following syntax: keycapture.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>keyCapture</b>.dispatch = 'value';
</td></tr><tr><td class="clsSyntaxCells clsOddRow">                     
To Set keyCapture return events via JavaScript use the following syntax: keycapture.event = JavaScript Function;
<P />e.g. <b>keyCapture</b>.keyEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsEvenRow">                            
To set multiple EMML parameters / events on a single line use the following syntax: keycapture.setEMML("[Your EMML Tags]");
<P />
e.g. <b>keyCapture</b>.setEMML("dispatch:<i>value</i>;keyEvent:url('JavaScript:doFunction(%json)')");                           
</td></tr></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>dispatch:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">'True' or 'False'</td><td class="clsSyntaxCells clsOddRow">After a key has been intercepted this parameter will determine whether or not it will still be received by the visual components.  For example if you have focus in a text box and are intercepting keys set this to 'False' to avoid having the keys appear in the box.</td><td class="clsSyntaxCells clsOddRow">False</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>keyValue:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Hex virtual key value, or 'All'</td><td class="clsSyntaxCells clsEvenRow">Specifies the key to be captured, e.g. 0x09 is Tab, 0x0D is return.  Set this parameter to 'All' to capture all keys.  The value of the received key is passed as a return value to the KeyEvent, this can be used to find the value of a specific key.  See the remarks section for a list of keys which can not be captured.</td><td class="clsSyntaxCells clsEvenRow">N/A</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>remap:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Hex virtual key value</td><td class="clsSyntaxCells clsOddRow">After a key has been captured it will be remapped and the new key and sent to RhoElements.  This parameter must be set after the KeyValue parameter specifying which key is being remapped.  Note this parameter is incompatible with KeyValue:all or Dispatch:True, otherwise this would result in two keys being received.  Also note the parameter is incompatible with the KeyEvent as the two are mutually exclusive.</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>accelerateKey:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">'None', 'All' and 'Norm'</td><td class="clsSyntaxCells clsEvenRow">'All' enables all accelerator keys for the browser to handle.  'None' disables all the accelerator keys and 'Norm' uses the default RhoElements settings for Accelerator Keys.  See Remarks</td><td class="clsSyntaxCells clsEvenRow">Norm</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>homeKeyValue:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Hex virtual key value, or 'Disabled'</td><td class="clsSyntaxCells clsOddRow">Specifies a key which, when pressed, will navigate to the start page as defined in the RhoElements configuration.  Set to 'Disabled' to prevent this behaviour.</td><td class="clsSyntaxCells clsOddRow">Disabled</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table> 

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###keyEvent
After a KeyValue parameter has been used to specify which key to capture and whether or not to dispatch it, setting a KeyEvent will associate that key with the event to call when that key is pressed. The KeyEvent must be set after the KeyValue parameter and optionally the Dispatch parameter and to capture multiple keys you should repeat this process. The same event handler can be used to process multiple keys. Note that this event is not compatible with the Remap parameter as the two are mutually exclusive. To unregister for key events use the syntax url(''), an example is provided below.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>keyValue</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The internal representation of the key expressed in decimal, e.g. 13 is the return key</td></tr></table>
<br />
###triggerEvent
The TriggerEvent is invoked whenever a device hardware trigger is pressed or released. Note the registration for TriggerEvent will fail if the trigger is currently in use.
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>triggerFlag</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">The combination of the triggers pressed and the state of the triggers.  Older devices may report duplicate values for different triggers on the device due to a platform issue, this has been resolved in newer devices.</td></tr></table>



##Multi Instance
When multiple RhoElememts applications are running the following considerations should be made: Only the application with Focus will have the ability to intercept or override keys.


##Remarks


###Keys which can not be captured
It is not possible to capture the following types of keys, although on some device configurations pressing the SHIFT key twice generates CAPS LOCK which can be captured with a key value of 16:

<pre>

*  Keyboard modifiers such as SHIFT, ALT, ORANGE button, BLUE button etc.
*  Device Keys such as the screen backlight or keyboard backlight
*  Hot keys such as phone keys or 'soft' buttons, those whose 
   function changes based on the running application.
*  The Home key on the ET1 device.
*  On Android keypad devices, the ESC key behaves like a back button. User need to ensure to set the dispatch value to false or else the application will go into background and it will not perform the user defined action.
</pre>


###Device Lockdown on ET1
Because the Home key cannot be captured on the ET1 it is possible for users to return to the system home page by pressing it. If you need to prevent this then please consult the Enterprise Tablet documentation for other device lockdown options.


###Capturing Function
If you have enabled the function key in the configuration settings and that function key has some special behaviour in the Operating system the key will not be capturable unless you also set the 'InterceptAllKeys' option. An example of special behaviour is the F6 and F7 keys on the MC75a (non QWERTY) which control the volume up and volume down. Although 'InterceptAllKeys' will allow you to capture Function keys it will also disable the special Function key behaviour. Which buttons map to which function keys will differ from device to device, some devices such as the MC9500 have dedicated, labelled function keys whereas other devices such as the MC75a do not label the fact that their volume / red phone / green phone keys all behave as function keys internally.


###VC70 Hardware Keys
The VC70 has a hardware keys (P1, P2, P3 and P4 as well as a brightness button) which are not capturable by the KeyCapture module. Additionally the default Operating system behaviour (like volumeup/down) of hardware keys can not be blocked when RhoElements is running in fullscreen mode.


###ES400 Application Keys
The ES400 has a hardware messaging key with an envelope icon on it that does not function like a standard Applicaiton Key. To disable this key go to 'Settings' on the device, then 'Personal', then 'KeyRemap' and remap it to a key not in use. Also note that the 'Sym' key on the ES400 is not capturable.


###F5 Key
In Internet Explorer the F5 key is used to refresh the current page. It is not recommended to rely on this functionality on Windows Mobile and it is not supported


###Accelerator Keys
The following keys will be affected by the 'AccelerateKeys' tag, see the Key Capture Overview for a more detailed explanation of Accelerator Keys. Accelerator Keys are only applicable when RhoElements is run with the Internet Explorer engine on a Windows CE device.

<pre>

Key           Code    Usual Behaviour               Special behaviour in Internet Explorer

Left Arrow    0x25    Cursor left                   Scroll window left
Right Arrow   0x27    Cursor right                  Scroll window right
Up Arrow      0x26    Cursor up                     Scroll window up
Down Arrow    0x28    Cursor down                   Scroll window down
Backspace     0x08    Delete previous character.    Navigate to previous page
Enter         0x0D    Cursor line feed              Submit form
Tab           0x09    Advance to next control       Advance to next control             
                </pre>


###Remapping a key to itself
If a key is remapped to itself then RhoElements will appear to hang because if that key is pressed it will generate another press of the same key, and so on forever. The same will happen if for instance key 1 is remapped to key 2, which in turn is remapped to key 1.


###Special characters
On some devices certain keys containing special characters trigger two separate key events. This happens because such characters are translated by the platform into the combination of a Shift and a Base Key. Characters behaving in such way are $, %, &amp;, ", (, ), !, :, ?, #, _, @.


###Different keyboard layouts on Windows and Android
Due to the different SIP layout on Windows and Android, the following keys will return different codes: #, *, @, =, _ and .


###Device Specific Exceptions
Certain devices may map their function keys to apparently normal keys, for example the VC6090 maps the '{' key to F12 and the '}' key to F14. In order to capture those two keys it is necessary to enable F12 and F14 in the Configuration Settings. You may also find on some devices special keys like 'OK' return the same code as a function key, depending on your keyboard layout.


###Use of Key Capture module on Localized Operating Systems
Users of the key capture module with Chinese, Korean and Japanese operating systems should bear the following in mind: Internally the KeyCapture module stores key representations as VK codes, therefore the key event will always return VK_PROCESSKEY (229) and keys can not be individually specified. The JavaScript standard document.onkeyup can be used as an indication of which key has been pressed.

###Mapping Proprietary Keycodes 
A small group of Zebra devices running Windows Mobile (such as those listed below) return proprietary keycode values inconsistent with those of other devices, and are incompatible with Windows. To address this issue, apps made with Enterprise Browser 1.5 or higher can remap those proprietary keycodes to Microsoft standard codes. See the [Mapping Proprietary Function Keycodes](../../../guide/keycapture/#mappingproprietaryfunctionkeycodes). 

* Workabout Pro 4 WEH Device
* Omnii XT15 WEH Device

##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.  AccelerateKey is only supported on Windows CE devices using the Internet Explorer engine</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Partially Transient - any changes made by changing parameters will be lost when navigating to a new page with the exception of: AccelerateKey and HomeKeyValue; these will persist when navigating to a new page.</td></tr></table>


##HTML/JavaScript Examples

The following example displays an alert when any key is pressed:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:False; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')">
    
The following example intercepts the return key and displays an alert:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('Return Key Pressed');')">
    
The following example intercepts the tab key and replaces it by the return key:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:0x09; Remap:0x0D">
    
The following example displays an alert when any key is pressed but still allows that key to received by the browser component:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s');')">
    
The following example will not allow the return key to reach the browser but any other key will do so and display an alert:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript://ignore this');')">
    <META HTTP-Equiv="KeyCapture" Content="KeyValue:All; Dispatch:True; KeyEvent:url('JavaScript:alert('Key Pressed: %s, key will be received by Browser.');')">
    
The following example shows how a previously mapped key (in this case the return key) can be unmapped using JavaScript. Note that specifying KeyValue:All and later unmapping a specific key will not unmap the key, follow the example above to achieve that effect:

    <META HTTP-Equiv="KeyCapture" Content="KeyValue:0x0D; Dispatch:False; KeyEvent:url('JavaScript:alert('return pressed');')">
    <script language=javascript>
    function fnUnregisterReturnKey()
    {
       //  Call this function to unmap the return key and allow it to reach the browser.
       keyCapture.keyValue = 0x0D;
       keyCapture.keyEvent = url('');
    }
    </script>
    
The following example disables all Accelerator Keys:

    <META HTTP-Equiv="KeyCapture" Content="AccelerateKey:None">
    
The following example will navigate to the RhoElements start page when return is pressed:

    <META HTTP-Equiv="KeyCapture" Content="HomeKeyValue:0x0D">
    
The following example will call a JavaScript function when the trigger is pressed or released:

    <META HTTP-Equiv="KeyCapture" Content="TriggerEvent:url('JavaScript:alert('Trigger Event: %s');')">
    

