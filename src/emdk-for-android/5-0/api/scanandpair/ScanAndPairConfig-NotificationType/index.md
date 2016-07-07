---
title: ScanAndPairConfig.NotificationType
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This enum is used by the ScanAndPair APIs to set the notification type. 
 The notifications can be provided to the user to indicate the progress of the
 different scanning states. This enum provides notification related
 information during scanning process.The beep sequence is explained in the
 below table
 <TABLE>
 
 <TR ALIGN="LEFT">
 <TH COLSPAN="3">
 <H3><BR>
 Beeping Sequence</H3></TH>
 </TR>
  <TR>
 <TH>Notification Stages</TH>
 <TH>Beeper Sequence</TH>
 <TH>Remarks</TH>
  </TR>
 <TR ALIGN="CENTER">
 <TD>Scanner Ready</TD>
 <TD>Two short beeps of the same frequency</TD>
 <TD>If the ScanInfo.TriggerType is set to MANUAL, this notification <BR>
 indicates when to press the trigger.</TD>
 </TR>
 <TR ALIGN="CENTER">
 <TD>Pair Success</TD>
 <TD>Four short beeps of the same frequency</TD>
 <TD>Indicates that pairing has succeeded.</TD>
 </TR>
 <TR ALIGN="CENTER">
 <TD>Unpair success</TD>
 <TD>Four short beeps of the same frequency</TD>
 <TD>Indicates that unpairing has succeeded.</TD>
 </TR>
 <TR ALIGN="CENTER">
 <TD>Scan Failed</TD>
 <TD>Six beeps of alternating frequencies</TD>
 <TD>Indicates scanning has failed.</TD>
 </TR>
 <TR ALIGN="CENTER">
 <TD>Discovery failed</TD>
 <TD>Six beeps of alternating frequencies</TD>
 <TD>Indicates that the Bluetooth device could not be found.</TD>
 </TR>
 <TR ALIGN="CENTER">
 <TD>UnPair failed</TD>
 <TD>Six beeps of alternating frequencies</TD>
 <TD>Indicates that unpairing has failed</TD>
 </TR>
 </TABLE>

**Values:**

* **BEEPER** -Beeper notification. Raises pre-defined beep sequences. This will give the user 
 an audible alert when specific operations are performed.

* **NONE** -Disable notification. Do not raise notification for any type of operations.





