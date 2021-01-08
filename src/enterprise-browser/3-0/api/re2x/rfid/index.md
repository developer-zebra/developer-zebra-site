---
title: RFID Module
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The RFID Module provides access to functionality of the device's RFID reader, if so equipped. 

#### Device Support 

This module is supported only on the following Zebra devices: 

* **MC3190-Z and MC9190-Z** RFID readers
* **MC33xx** RFID reader
* **TC20 with RFD2000** RFID sled
* **Any Zebra Android device** connected to the Zebra RFD8500 Bluetooth RFID sled

**Note**: The RFID module is not included with the standard EB installation, and might require a separate download and installation. [See Remarks section](#remarks) for more information.

## Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> 
	<tr>
		<th class="tableHeading">rfid (Module) &lt;META&gt; Syntax</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="rfid" content="[parameter / method]"&gt;</p></td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="rfid" content="tagEvent:url('[jsFunction | url]')"&gt;</p></td>
	</tr>
</table>

<table class="facelift" style="width:100%" border="1" padding="5px"> 
<tr><th class="tableHeading">Rfid JavaScript Object Syntax:</th></tr>
<tr>
	<td class="clsSyntaxCells clsOddRow">By default the JavaScript object <b>'rfid'</b> will exist on the current page and can be used to interact directly with the RFID.
	</td>
</tr>
<tr>
	<td class="clsSyntaxCells clsEvenRow">To invoke RFID methods via JavaScript use the following syntax: rfid.method();<P/>e.g. <b>rfid</b>.enumerate();
	</td>
</tr>
<tr>
	<td class="clsSyntaxCells clsOddRow">To Set RFID parameters via JavaScript use the following syntax: rfid.parameter = 'value'; remembering to enclose your value in quotes where appropriate.<P/>e.g. <b>rfid</b>.antennaSelected = 'value';
	</td>
</tr>
<tr>
	<td class="clsSyntaxCells clsEvenRow">To set RFID return events via JavaScript, use the following syntax: rfid.event = JavaScript Function;<P />e.g. <b>rfid</b>.enumRFIDEvent = 'doFunction(%json)';<P /><!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->
	</td>
</tr>
<tr>
	<td class="clsSyntaxCells clsOddRow">To set multiple EMML parameters / events on a single line use the following syntax: rfid.setEMML("[Your EMML Tags]");<P />e.g. <b>rfid</b>.setEMML("antennaSelected:<i>value</i>;enumRFIDEvent:url('JavaScript:doFunction(%json)');enumerate");
	</td>
</tr>
</table>

## Methods

Items listed in this section indicate methods or parameters with values available for retrieval.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" />
	<tr bgcolor="#dce8ef"><th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
		<th class="tableHeading">Supported Platform(s)</th>
		<th class="tableHeading">Default Value</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>enumerate</b></td>
		<td class="clsSyntaxCells clsOddRow">Returns the number of RFID readers present on the device. Always is '1' for serial devices; could be greater for Bluetooth depending on the number of paired devices. 
		</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>connect</b></td>
		<td class="clsSyntaxCells clsEvenRow">Creates a connection to the default RFID reader; attempts to connect whenever the plug-in is loaded. <strong>On Android, works only after using the enumerate callback()</strong>.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>disconnect</b></td>
		<td class="clsSyntaxCells clsOddRow">Disconnects the current RFID connection and flushes all properties of the "RFID" module except events.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>stop</b></td>
		<td class="clsSyntaxCells clsEvenRow">Stops a softTrigger from running inventory or locateTag operation; all pending tag reports are discarded.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>performInventory</b></td>
		<td class="clsSyntaxCells clsOddRow">Performs an inventory operation on the RFID reader, which is started and stopped according to the trigger settings implemented by the app. By default, starts an inventory operation immediately. There is no default stop trigger; an explicit "stop" call must be made. Tags are reported as part of the TagData Array in the tagEvent's JSON object. When the property "invMemBank" is set (to either Reserved, EPC, TID or User) prior to calling performInventory, the corresponding memory-bank's data also is read for the tags being inventoried. For inventoried tags, additional fields can be reported as part of tagEvent JSON by setting to true properties such as enableTagCRC, enableTagPC, enableTagSeenCount, enableTagRSSI, enableTagAntennaID, etc. As long as inventory operation is running, the plug-in cannot process those meta tags that could initiate an RFID operation such as performInventory, locateTag, readTag and other Access operations. The plug-in returns an error string indicating that it is busy and can perform other RFID operations only when the inventory is stopped.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>locateTag</b></td>
		<td class="clsSyntaxCells clsEvenRow">Configures the locateTag operation, which looks for a specific Tag ID on a specific antennaID and keeps reporting tagEvents if the tag is found along with relative distance (on a scale of 0&nsash;100, 100 being the closest) to help locate the requested tag. If beepOnRead is enabled (default), the beep frequency varies in proportion to the relative distance (Geiger counter). The tagLocationing algorithms can use only one antenna to locate a tagID. Thus, antennaSelected cannot take the default value '0' but takes one of the antenna IDs supported by the device. As with performInventory, the start and stop trigger settings can autonomously invoke and stop the locateTag operation. Please note that while the properties reportUniqueTags and reportTrigger are not relevant here, the tag field settings enableTagAntennaID, enableTagRssi, etc. are applicable.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>killTag</b></td>
		<td class="clsSyntaxCells clsOddRow">Kills the currently selected tag referenced by tagID, or kills tags that match the filter criteria. Requires tagKillPassword. tagID property is ignored if useAccessFilter property is set to true. If useAccessFilter is set to true, then tagPatternA, tagPatternB and matchPattern is used to filter out tags to perform the operation. If tagID is empty and useAccessFilter is false (default value), the kill operation is attempted on all tags in the field of view.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>getRadioPowerState</b></td>
		<td class="clsSyntaxCells clsEvenRow">Returns a boolean value (1 or 0) representing the radio power state via radioPowerStateEvent.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>addPreFilter</b></td>
		<td class="clsSyntaxCells clsOddRow">Adds a pre-configured filter to the currently selected antenna. Used to sort out the subset of tags to participate in the next RFID operations. Multiple preFilters can be added, limited by the RFID reader. Each should be referenced by a unique value (which should be assigned to preFilterID property) before calling addPreFilter method.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>deletePreFilter</b></td>
		<td class="clsSyntaxCells clsEvenRow">Deletes a pre-filter of the index set by preFilterID property.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>clearPreFilters</b></td>
		<td class="clsSyntaxCells clsOddRow">Deletes ALL preFilters</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>radioPowerStateOn</b></td>
		<td class="clsSyntaxCells clsEvenRow">Sets the radio power of the RFID module on</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>radioPowerStateOff</b></td>
		<td class="clsSyntaxCells clsOddRow">Sets the radio power of the RFID module off</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagRead</b></td>
		<td class="clsSyntaxCells clsEvenRow">Reads from a tag or a set of tags (defined by Access filter) using the pre-configured read Parameters. The tag data is returned via a tagEvent. The read data is available in tagData.memoryBankData field of the JSON object passed to tagEvent handler. The tagID property is ignored if useAccessFilter property is set to true. If useAccessFilter is set to true, tagPatternA, tagPatternB and matchPattern are used to filter out tags to perform the operation. If the tagID is empty and useAccessFilter is false, the read operation is performed on all tags in field of view. <strong>The useAccessFilter property is not supported on Android</strong>.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagWrite</b></td>
		<td class="clsSyntaxCells clsOddRow">Writes data to a tag or a set of tags (defined by Access filter) using the pre-configured Write parameters. The tagID property is ignored if useAccessFilter property is set to true, and tagPatternA, tagPatternB and matchPattern are used to filter out tags to perform the operation. If the tagID is empty and useAccessFilter is false, the write operation is attempted on all the tags in field of view. <strong>The useAccessFilter property is not supported on Android</strong>.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>setTagID</b></td>
		<td class="clsSyntaxCells clsEvenRow">Writes a pre-configured new tag ID to the currently selected tag.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>setTagAccessPassword</b></td>
		<td class="clsSyntaxCells clsOddRow">Writes a pre-configured new tag access password to the currently selected tag.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>setTagKillPassword</b></td>
		<td class="clsSyntaxCells clsEvenRow">Writes a pre-configured new kill password to the currently selected tag.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>setSingulation</b></td>
		<td class="clsSyntaxCells clsOddRow">Sets the pre-configured singulation parameters on all the antenna(e). Before calling this method, either Session or TagPopulation parameters must be properly set. When state-aware singulation is desired, performStateAwareSingulation is to be set to true and the configured values for SL flag and Inventory state are matched during singulation of tags.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>getSingulation</b></td>
		<td class="clsSyntaxCells clsEvenRow">Requests the current singulation parameters (session and tag population) for the antenna(e). The result is returned in a singulationEvent. <strong>All antennae share the same singulation settings</strong>.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>getRFParams</b></td>
		<td class="clsSyntaxCells clsOddRow">Gets the current RF Mode and Transmit Power parameters for the currently selected antenna. Result is returned in rfParamsEvent. Property antennaSelected cannot take default value (0) because RF parameters are returned only for one antennaID. <strong> Android returns only the Transmit Power parameter</strong>.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagLock</b></td>
		<td class="clsSyntaxCells clsEvenRow">Locks a tag (or tags) according to the lockPrivilege and lockField, requires tagPassword. The tagID property is ignored if useAccessFilter property is set to true. If useAccessFilter is set to true, then tagPatternA, tagPatternB and matchPattern will be used to filter out tags to perform the operation. If the tagID is empty and useAccessFilter is false, the lock operation will be attempted on all the tags in field of view.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>getRFModeInfo</b></td>
		<td class="clsSyntaxCells clsOddRow">Gets the RF mode information for the given RFMode index. The result is returned in a rfModeInfoEvent.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>setRFParams</b></td>
		<td class="clsSyntaxCells clsEvenRow">Sets the RF mode and / or transmit power of a selected antenna. <strong>Android sets only the Transmit Power parameter</strong>.</td>
		<td class="tableHeading">Android/Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsEvenRow" />
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>getLastAccessResult</b></td>
		<td class="clsSyntaxCells clsOddRow">gets the result of the last access operation in the lastAccessResultEvent. The result consists of numbers of tags on which the last access operation succeeded and failed. Note that this method can give valid results only after a operationCompleteEvent is received indicating that the last operation has ended.</td>
		<td class="tableHeading">Windows Mobile/CE</td>
		<td class="clsSyntaxCells clsOddRow" />
	</tr>
</table>

## Parameters

Items in this section indicate parameters or attributes that can be configured. Values apply to all platforms (Android and Windows Mobile/CE) unless otherwise noted. 

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Possible Values</th>
		<th class="tableHeading">Description</th>
		<th class="tableHeading">Default Value</th>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>antennaSelected:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">0-N</td>
		<td class="clsSyntaxCells clsOddRow">Index of the antenna being selected for the subsequent data or configuration operations. A value of '0' (default) selects all antennae.</td>
		<td class="clsSyntaxCells clsOddRow">0(ALL)</td>
	</tr>
		<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>beepOnRead:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify whether the device should beep whenever application receives a tag.</td>
		<td class="clsSyntaxCells clsEvenRow">true</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>enableTagAccessStatus:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to enable and disable the access status field in the tag reports. Contains valid values for Read, Write, Lock and Kill operations.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>enableTagAntennaID:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">Used to enable and disable the antenna ID field in the tag reports.</td>
		<td class="clsSyntaxCells clsEvenRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>enableTagCRC:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to enable and disable the CRC field in the tag reports.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>enableTagXPC:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">Used to enable and disable the XPC field in the tag reports.</td>
		<td class="clsSyntaxCells clsEvenRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>enableTagPC:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to enable and disable the PC field in the tag reports.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>enableTagRSSI:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">Used to enable and disable the RSSI data field in tag reports.</td>
		<td class="clsSyntaxCells clsEvenRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>enableTagSeenCount:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to enable and disable the SeenCount field in tag reports.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>enableTagUTCTimeStamp:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">Used to enable and disable the UTCTimeStamp data field in tag reports.</td>
		<td class="clsSyntaxCells clsEvenRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>invMemBank:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">None, Reserved, EPC, TID, User</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify whether any memory bank is to be read during an inventory.</td>
		<td class="clsSyntaxCells clsOddRow">None</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>lockField:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">killPassword, accessPassword, EPC, TID, User</td>
		<td class="clsSyntaxCells clsEvenRow">Sets the data field to be used for tagLock operation.</td>
		<td class="clsSyntaxCells clsEvenRow">None</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>lockPrivilege:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">lock, unlock, permanentLock, permanentUnlock</td>
		<td class="clsSyntaxCells clsOddRow">sets the lock privilege to be used for tagLock operation</td>
		<td class="clsSyntaxCells clsOddRow">None</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>matchPattern:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">A_AND_B, NOTA_AND_B, NOTA_AND_NOTB, A_AND_NOTB, A</td>
		<td class="clsSyntaxCells clsEvenRow">Used to match criteria used for filtering with tag-patterns A and B.</td>
		<td class="clsSyntaxCells clsEvenRow">A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>newTagID:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">hex password</td>
		<td class="clsSyntaxCells clsOddRow">Sets a new tag ID to be assigned to the currently selected tag in the setTagID method.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagoffset:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">integer</td>
		<td class="clsSyntaxCells clsOddRow">Sets the word offset into the selected memory bank to use for the next access of the currently selected tag.</td>
		<td class="clsSyntaxCells clsOddRow">0</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>newAccessPassword:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">hex password</td>
		<td class="clsSyntaxCells clsEvenRow">Sets a new tag access password to be assigned to the currently selected tag in the setTagAccessPassword method</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>newKillPassword:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">hex password</td>
		<td class="clsSyntaxCells clsOddRow">Sets a new tag kill password to be assigned to the currently selected tag in the setTagKillPassword method.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>performStateAwareSingulation:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsEvenRow">If set to true, are singulated based on the configured inventory states/SL flags (rather than reader defaults). The subsequently added pre-filters should indicate the desired inventory state/SL flags of the matching / non-matching tags. If this property is set to false, tags are singulated based on reader defaults.</td>
		<td class="clsSyntaxCells clsEvenRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>preFilterStateAwareAction:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">INV_A_NOT_INV_B, ASRT_SL_NOT_DSRT_SL, INV_A,ASRT_SL, NOT_INV_B, NOT_DSRT_SL, INV_A2BB2A_NOT_INV_A, NEG_SL_NOT_ASRT_SL, INV_B_NOT_INV_A, DSRT_SL_NOT_ASRT_SL, INV_B, DSRT_SL, NOT_INV_A, NOT_ASRT_SL, NOT_INV_A2BB2A, NOT_NEG_SL</td>
		<td class="clsSyntaxCells clsOddRow">Sets the State-aware Action(s) for the current pre-filter's matching and/or non-matching tags. This property is considered only when performStateAwareSingulation is true. All actions indicating asserting/de-asserting SL flags are valid only when preFilterTarget is SL. All actions indicating changes to the inventoried states(i.e A/B) are valid only when preFilterTarget is INV_S0/INV_S1/INV_S2/INV_S3.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>preFilterTarget:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">SL, INV_S0, INV_S1, INV_S2, INV_S3</td>
		<td class="clsSyntaxCells clsEvenRow">Indicates which flag (i.e SL/INV_S0/INV_S1/INV_S2/INV_S3) is affected when the current state-aware pre-filter is applied. This property is considered only when performStateAwareSingulation is true.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>preFilterStateUnawareAction:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">SELECT_NOT_UNSELECT, SELECT, NOT_UNSELECT, UNSELECT, UNSELECT_NOT_SELECT, NOT_SELECT</td>
		<td class="clsSyntaxCells clsOddRow">Sets the state-unaware Action for the current pre-filter's matching and/or non-matching tags. This property is considered only when performStateAwareSingulation is false. This determines whether to select and/or deselect matching tags/non-matching tags when the current pre-filter is applied.</td>
		<td class="clsSyntaxCells clsOddRow">SELECT_NOT_UNSELECT</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>preFilterBitCount:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Number of applicable bits in the filterHexPattern</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the number of bits within the preFilterHexPattern to match in a subsequent call to addFilter().</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>preFilterBitOffset:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Offset from the start of the memory bank in bits</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the offset into the memory bank (position) applicable to a subsequent call to addFilter().</td>
		<td class="clsSyntaxCells clsOddRow">32</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>preFilterHexPattern:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Hex Pattern</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify a hex pattern to apply in a subsequent call to addFilter().</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>preFilterID:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">unsigned integer</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the ID of the filter to apply in a subsequent call to addFilter() or deleteFilter().</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>preFilterMemBank:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Reserved, EPC, TID, User</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the memory bank to apply in a subsequent call to addFilter().</td>
		<td class="clsSyntaxCells clsEvenRow">EPC</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>startPeriod:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">milliseconds</td>
		<td class="clsSyntaxCells clsOddRow">Sets the repeat period for a subsequent inventory.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>reportTrigger:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">0-N (integer)</td>
		<td class="clsSyntaxCells clsEvenRow">Controls the reporting of tags from the plug-in. Setting this property to 'N' causes the plug-in to report tags after seeing 'N' (number of) tags. A setting of '0' causes tags to be reported only at the end of inventory.</td>
		<td class="clsSyntaxCells clsEvenRow">1</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>reportUniqueTags:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to report only unique tags.</td>
		<td class="clsSyntaxCells clsOddRow">true</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>readerID:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Based on reader ID returned by enumRFIDevent callback.</td>
		<td class="clsSyntaxCells clsOddRow">Sets the ID of the reader to be called before rfid.connect. If value is not set, default value is used. <strong>Supported on Android devices only</strong>.</td>
		<td class="clsSyntaxCells clsOddRow">RFID1</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>DPOState:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to enable/disable device power optimization. <strong>Supported only on Android devices with RFD8500 Bluetooth reader</strong>.</td>
		<td class="clsSyntaxCells clsOddRow"></td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>transport:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Bluetooth, serial</td>
		<td class="clsSyntaxCells clsEvenRow">Used to select (by calling the rfid.enumerate method) the physical or wireless medium over which acquired data will travel. If not set, takes default value. <strong>Supported only on Android devices</strong>.</td>
		<td class="clsSyntaxCells clsEvenRow">serial</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>RFMode:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">One of the supported RF Modes listed in the capabilities (see enumRFIDEvent)</td>
		<td class="clsSyntaxCells clsEvenRow">Sets the RFMode of the currently selected antenna(e).</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>singulationSession:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">0-3</td>
		<td class="clsSyntaxCells clsOddRow">Sets the singulation session parameter.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>singulationTagPopulation:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">unsigned short integer</td>
		<td class="clsSyntaxCells clsEvenRow">Sets the singulation tag population parameter.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>singulationInventoryState:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">INV_A, INV_B</td>
		<td class="clsSyntaxCells clsOddRow">Indicates the inventory state [A or B] to be matched during the singulation.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>singulationSLFlag:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">SL_ASSERTED, SL_DEASSERTED</td>
		<td class="clsSyntaxCells clsEvenRow">Indicates the SL bit [asserted or deasserted] to be matched during the singulation.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>startTriggerType:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">immediate, triggerPress, triggerRelease, periodicStart</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the start triggers allowed for performInventory and tagLocate methods.</td>
		<td class="clsSyntaxCells clsOddRow">immediate</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>stopDuration:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">milliseconds</td>
		<td class="clsSyntaxCells clsEvenRow">Sets the duration of a inventory or locateTag.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>stopObservationCount:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">unsigned integer</td>
		<td class="clsSyntaxCells clsOddRow">Stops the inventory or locateTag after "n" tags are found.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>stopTriggerType:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">triggerPress, triggerRelease, duration, tagObservation. <strong>Android devices also support the "immediate" stop trigger</strong>.</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the stop-triggers allowed for performInventory and tagLocate methods.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagByteOffset:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">unsigned integer</td>
		<td class="clsSyntaxCells clsOddRow">Sets the offset into the selected memory bank to use for the next access of the currently selected tag.</td>
		<td class="clsSyntaxCells clsOddRow">0</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagID:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Tag ID in hex</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify an RFID Tag ID on which to perform further operations</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagKillPassword:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">hex kill password</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify a password to use when calling the killTag method.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagMemBank:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Reserved, EPC, TID, User</td>
		<td class="clsSyntaxCells clsEvenRow">Used to set the memory bank from which to access the currently selected tag.</td>
		<td class="clsSyntaxCells clsEvenRow">EPC</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagPassword:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">hex password</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the access password to use when accessing the currently selected tag.</td>
		<td class="clsSyntaxCells clsOddRow">00000000</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagPatternAByteOffset:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Offset (in bytes) from the start of the memory bank</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the offset into the memory bank (position).</td>
		<td class="clsSyntaxCells clsEvenRow">4</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagPatternAHexMask:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Hex Mask</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the mask for above pattern<./td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagPatternAHexPattern:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Hex Pattern</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify a hex pattern to be used for comparing memory bank data.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagPatternAMemBank:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Reserved, EPC, TID, User</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the memory bank for the tag pattern A.</td>
		<td class="clsSyntaxCells clsOddRow">EPC</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagPatternBByteOffset:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Offset from the start of the memory bank in bytes</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the offset into the memory bank (position).</td>
		<td class="clsSyntaxCells clsEvenRow">4</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagPatternBHexMask:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Hex Mask</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the mask for above pattern.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagPatternBHexPattern:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">Hex Pattern</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify a hex pattern to be used for comparing memory bank data.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagPatternBMemBank:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">Reserved, EPC, TID, User</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify the memory bank for the tag pattern B.</td>
		<td class="clsSyntaxCells clsOddRow">EPC</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>tagReadSize:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">0 (all) - N bytes</td>
		<td class="clsSyntaxCells clsEvenRow">Sets the number of bytes to read in the tagRead method. <strong> On Android, sets the number of words to read in the tagRead method</strong>.</td>
		<td class="clsSyntaxCells clsEvenRow">0 (all)</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>tagWriteData:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">hex data</td>
		<td class="clsSyntaxCells clsOddRow">Sets the data to write in the tagWrite method. <strong>On Android, the length of data should be multiple words (2 bytes)</strong>.</td>
		<td class="clsSyntaxCells clsOddRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>useSoftTrigger:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Enables programmatic start/stop of a scan, the equivalent of a hardware trigger or button. <strong>Supported only on devices running Android</strong>.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow"><b>transmitPower:[Value]</b></td>
		<td class="clsSyntaxCells clsEvenRow">power in dbm derived from min, max and step values provided in the enumRFIDevent</td>
		<td class="clsSyntaxCells clsEvenRow">Used to specify the transmit power to be used in a subsequent call to setTransmitPower.</td>
		<td class="clsSyntaxCells clsEvenRow">N/A</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsOddRow"><b>useAccessFilter:[Value]</b></td>
		<td class="clsSyntaxCells clsOddRow">true, false, 1, 0</td>
		<td class="clsSyntaxCells clsOddRow">Used to specify whether to use the access filter in tag access operations.</td>
		<td class="clsSyntaxCells clsOddRow">false</td>
	</tr>
</table>

##Events
Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

### enumRFIDEvent
Enumerates the RFID readers present on the device (normally limited to one) along with their respective capabilities. **On Android devices, return values are labeled "ID, Name and Address." Android returns only ReaderID, ReaderName and ReaderAddress properties**. 

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description ("Address" on Android)</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>numberOfDevices</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">returns total number of device enumerated (always 1)</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>readerID</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">ID assigned to reader</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>firmwareVersion</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Firmware version of the reader</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">4</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>modelName</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Model FX, MC</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">5</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>numberOfAntennas</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Antennas supported/connected by/to reader</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">6</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>numberOfPreFilters</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Total number of pre-filters available </td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">7</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>countryCode</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">region configured</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">8</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>communicationStandard</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">country/region frequency band standards</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">9</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>transmitPowerMin</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Minimum transmit power supported by reader 500dbm</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">10</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>transmitPowerMax</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Maximum transmit power supported by reader 3000dbm</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">11</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>transmitPowerStep</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Transmit power can be set in multiple of value - step</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">12</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>numberOfRFModes</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Number of supported RFModes</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">13</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>stateAwareSingulationSupported</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Indicates whether Inventory State Aware Singulation is supported by the Reader.</td>
	</tr>
</table>

### rfParamsEvent

Returns RF Parameter values Transmit Power and RF Mode of a selected antenna. **Android returns only the Transmit Power property**. 

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>transmitPower</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">radiated power in db</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>RFMode</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">RF Mode Table Index</td>
	</tr>
</table>

### rfModeInfoEvent
Returns the RF Characteristics for a particular RF Mode
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>modeIdentifier</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>divideRatio</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>bdrValue</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">4</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>modulation</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">5</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>forwardLinkModulationType</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">6</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>pieValue</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">7</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>minTariValue</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">8</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>maxTariValue</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">9</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>stepTariValue</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">10</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>spectralMaskIndicator</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Refer to EPC-Global's definition</td>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">11</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>epcHAGTCConformance</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Refer to EPC-Global's definition</td>
	</tr>
</table>

### tagEvent
Returns received RFID tag data from N tags, where N = reportTrigger. Typically methods like performInventory, tagLocate, readTag/writeTag/lockTag/killTag (performed on one or more tags) generate tagEvents with necessary data.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>TagData (tagID, PC, tagSeenCount, memoryBankData, XPC, CRC, antennaID, RSSI, accessStatus, relativeDistance, firstSeenTimeStamp)</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Tag data array with various parameter of read tag TagData[1..N].</td>
	</tr>
</table>

### radioPowerStateEvent
Returns 1 if the radio is ON and 0 if the radio is off
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>powerState</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Radio is on/off</td>
	</tr>
</table>

### statusEvent
Returns any error conditions where required
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>method</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Name of method from which error was generated.</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>errorCode</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Standard RFID API error code or plug-in specific error code. Plug-in error code description:<br/>
2000 - One of the relevant parameters is invalid or missing<br/>
2001 - Plug-in Busy<br/>
2002 - Failed to create a plug-in thread<br/>
2003 - Plug-in cannot process properties or methods unless connected<br/>
2004 - InvalidUsageException (<strong>Android only</strong>)<br/>
2005 - OperationFailureException (<strong>Android only</strong>)<br/>
1000 - Any status event (i.e.) handheld trigger event, reader disconnection event, etc.) (<strong>Android only</strong>)<br/></td>
</tr>
<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>vendorMessage</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Additional Error Info if any</td>
</tr>
</table>

### singulationEvent
Returns singulation values.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th></tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>singulationSession</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Indicates the session in which the antenna singulates.</td>
	</tr>
		<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>singulationTagPopulation</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Indicates the tag-population that the reader considers is in an antenna's field of view.</td>
	</tr>
		<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">3</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>performStateAwareSingulation</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Indicates whether the antennas perform stateAware-singulation.</td>
	</tr>
		<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">4</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>singulationSLFlag</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Indicates which SL bit(asserted or deasserted) will be matched during singulation.</td>
	</tr>
		<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">5</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>singulationInventoryState</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Indicates which inventory state [A or B] will be matched during the singulation.</td>
	</tr>
</table>

### operationCompleteEvent
Indicates the currently running operation (Inventory/Access/Locationing) is complete and there are no more tags to report.

<!-- 11/26/18- table contains no data; removed. -EC

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
</table>
-->

### lastAccessResultEvent

Returns results of the last Access operation.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" />
	<tr bgcolor="#dce8ef">
		<th class="tableHeading">ID</th>
		<th class="tableHeading">Name</th>
		<th class="tableHeading">Description</th>
	</tr>
	<tr>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>tagsSucceeded</b></td>
		<td style="text-align:left;" class="clsSyntaxCells clsOddRow">Number of tags on which the access operation succeeded.</td>
	</tr>
	<tr>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">2</td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;"><b>tagsFailed</b></td>
		<td class="clsSyntaxCells clsEvenRow" style="text-align:left;">Number of tags on which the access operation failed.</td>
	</tr>
</table>

## Remarks

1. On devices running Android, rfid.connect can be called only after the enumRFIDevent callback is received by calling rfid.enumerate. 
2. An Enterprise Browser application can connect to only one reader at one time. If a different reader is desired, the app must disconnect from the currently connected reader before connecting to a new one.
3. An RFID reader can connect to only one application at one time. If a different RFID reader app is desired, the device user must either quit the previous application, or instruct the app to disconnect from the reader.

### Installation
The RFID plug-in package for RhoElements 2.2 SP1 is not is not part of the default installation, but is available as a separate download from the Zebra Technologies Support site. 

**RFID plug-in resources**: 

* **[The RFID Plug-in for RhoElements 2.2 SP1](https://www.zebra.com/us/en/support-downloads/software/developer-tools/rfid-plugin-for-rho-elements.html)** download, available from the from Zebra support site, includes release notes, installation instructions and a sample app. 

<!--
* **[Release Notes and Installation Instructions](http://goo.gl/VtCDnO) -** for viewing or download (Word doc) 

* **[Sample RFID app](http://goo.gl/arDsF2) -** made for the RhoMobile framework
-->

### Config.xml setting
Once the plug-in is installed, modify the &lt;PreloadLegacyActiveX&gt; parameter in the app's `Config.xml` file as follows:

	:::xml
	<PreloadLegacyActiveX value="1"/>


### General
When loaded, the plug-in by default is already connected to RFID module. To disconnect, use the `disconnect()` method call on the RFID object. After successfully disconnecting, the `connect()` method can be used to make a new connection to the RFID module. For a plug-in method to be successfully invoked, all of its associated non-default properties must be set prior to making the call.

### Waiting for operationCompleteEvent
When RhoElements finishes execution of a plug-in method call, the corresponding RFID operation might not have been completed or might have just been started. Specifically, for performInventory, tagLocate, tag access operations (readTag/writeTag/lockTag/killTag) using an access-filter or performed on all tags, the corresponding method call just initiates the corresponding RFID operation. These operations generate Tag reports, and once all the reports are sent to the application, the plug-in sends a operationCompleteEvent. The `disconnect()` method also gives an operationCompleteEvent back to the application. It is important that the application register for operationCompleteEvent, and further method calls must be made only after the reception of this event.

### Handling the TagEvent
TagEvent should be assigned to a Callback that handles the tag-reports arising out of Inventory/Locationing/Read/Write/Lock/Kill operations. Every tagEvent callback should usually result in JSON TagData Array object of length equal to the reportTrigger property set. However, in the contingency that the RFID operation has ended and the plug-in hasn't accumulated reportTrigger number of tagData objects, then the pending tags are all sent to the tagEvent callback.

### Access Operation Status Codes
For an access operation performed by using an access filter or an access operation performed on all tags, the status code only indicates that the operation has been successfully started. Setting enableTagAccessStatus to true generates Tag reports with the tagID and status of the access operation on the corresponding tagID. However, for a single tag access operation, the statusEvent indicates the result of the access operation for the given tagID.

### Handling the operationCompleteEvent
When RhoElements finishes execution of a plug-in method call, the corresponding RFID operation may not have been completed, rather it may have just been started. Specifically, for performInventory, tagLocate, tag access operations (readTag/writeTag/lockTag/killTag) using access-filter or performed on all tags, the corresponding method call just initiates the corresponding RFID operation. These operations generate Tag-reports, and once all the reports are completely sent to the application, the plug-in sends a operationCompleteEvent.

### Plug-in Busy
The Plug-in can perform only one RFID protocol operation (Inventory/Read/Write/Locate/Kill) at a time. Trying to invoke a new operation when an existing one is still running, will generate a "Plug-in Busy" error. Irrespective whether stop method is called or not, the plug-in is ready to initiate a new operation only after it sends the operationCompleteEvent. Trying to start a new operation before the event is received will return a "Plugin Busy error".

### Deleting Pre-filters
Once a pre-filter is added with a particular ID, the same ID should be used to reference it when deleting it.

### Tag Locating
Tag Locating can be performed only a particular antennaID.

### Access Operations On All Visible Tags
One can perform an access operation on all tags in the field of view by setting rfid.tagID to an empty string("")

### Access Filters
Access-filter can take up to tag-patterns. By default, match pattern used is Pattern-A alone and settings for tagPattern B are not considered unless specified by the appropriate matchPattern.

## Requirements
<table class="facelift" style="width:100%" border="1" padding="5px"> 
	<tr>
		<th class="tableHeading">RhoElements Version</th>
		<td class="clsSyntaxCell clsEvenRow">2.2 SP1 - Additional Download Required or above</td>
	</tr>
	<tr>
		<th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">MC 3190Z, MC 9190Z</td>
	</tr>
	<tr>
		<th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Hardware for reading RFID Tags</td>
	</tr>
	<tr>
		<th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Not Persistent - Changes to this module will not persist when navigating to a new page.</td>
	</tr>
</table>

## Examples

The HTML/JavaScript code samples below demonstrate how to implement some of this API's basic features.  

### Start Inventory
This example starts an inventory using HTTP meta tags sent to a JavaScript "TagHandler" function. 

	:::html
	<META HTTP-Equiv="rfid" content="statusEvent:url('javascript:statusHandler(%json)')">
	<META HTTP-Equiv="rfid" content="tagEvent:url('javascript:TagHandler(%json)')">
	<META HTTP-Equiv="rfid" content="performInventory">
	<script>
		// Function to handle a tagReport containing only tagID field
		function TagHandler(tagReportJSON){
		   objGeneric.Log("TagID read:"+tagReportJSON.TagData[0].tagID,3);
		}
	</script>
<br>

### Continuous Inventory

This example runs inventory as long as trigger button is pressed. By default, the plug-in reports unique tags to tje tagEvent callback in JSON format and beeps for every unique tag encountered. By default, only one tagID is reported per the JSON tagReport. This JSON contains only the tagID field.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		objGeneric.InvokeMETAFunction("OnTrigger", "javascript:doTrigger('%s')");
		rfid.statusEvent = "statusHandler(%json)";

		function doTrigger(state){

		  if(state == 0){
			  rfid.stop();
		  }
		  else{
			  rfid.tagEvent =  "TagHandler(%json)";
			  rfid.performInventory();
		  }
		}

		// Function to handle a tagReport containing only tagID field
		function TagHandler(tagReportJSON){
		   objGeneric.Log("TagID read:"+tagReportJSON.TagData[0].tagID,3);
		}

		function statusHandler(statusJSON){
		  objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Inventory Start/Stop
This example performs inventory with start and stop triggers configured. Here all the tag-reads are reported to tagEvent callback with five reports per callback. The tagSeenCount and the UTCTtimestamp at which tag was first seen also are reported. **Note**: This code beeps only when reading unique tags.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";

		function performAdvancedInventory1(){
			rfid.tagEvent =  "TagHandlerAdvanced1(%json)";
			rfid.reportUniqueTags = false;
			rfid.reportTrigger = 5;
			rfid.enableTagSeenCount = true;
			rfid.enableTagUTCTimeStamp = true;
			rfid.startTriggerType = "triggerPress";
			rfid.stopTriggerType = "duration";
			rfid.stopDuration = 10000;// Duration in milliseconds.
			rfid.performInventory();
		}

		// Function to handle tagReports containing tagID, seenCount and firstSeenTimeStamp fields.
		function TagHandlerAdvanced1(tagReportJSON){
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID+" Seen Count: "+tagReportJSON.TagData[0].tagSeenCount+" First seen Timestamp:"+tagReportJSON.TagData[0].firstSeenTimeStamp,3);
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[1].tagID+" Seen Count: "+tagReportJSON.TagData[1].tagSeenCount+" First seen Timestamp:"+tagReportJSON.TagData[1].firstSeenTimeStamp,3);
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[2].tagID+" Seen Count: "+tagReportJSON.TagData[2].tagSeenCount+" First seen Timestamp:"+tagReportJSON.TagData[2].firstSeenTimeStamp,3);
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[3].tagID+" Seen Count: "+tagReportJSON.TagData[3].tagSeenCount+" First seen Timestamp:"+tagReportJSON.TagData[3].firstSeenTimeStamp,3);
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[4].tagID+" Seen Count: "+tagReportJSON.TagData[4].tagSeenCount+" First seen Timestamp:"+tagReportJSON.TagData[4].firstSeenTimeStamp,3);
		}

		function statusHandler(statusJSON){
		   objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Read Reserved Memory

This example performs inventory and reads the reserved memory bank of all tags inventoried. The tags are selected to match a particular pre-filter pattern (EPC starts with "9742"). The tagEvent handler extracts both tagID and memoryBankData fields. Inventory is stopped after 10 tag-reads are observed. 

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";

		function performAdvancedInventory2(){
			rfid.tagEvent =  "TagHandlerAdvanced2(%json)";
			rfid.stopTriggerType = "tagObservation";
			rfid.stopObservationCount = 10;
			rfid.preFilterID = 1;
			rfid.preFilterMemBank = "EPC";
			rfid.preFilterBitOffset = 32;
			rfid.preFilterHexPattern = "9742";
			rfid.preFilterBitCount = 16;
			rfid.addPreFilter();
			rfid.invMemBank = "Reserved";
			rfid.performInventory();
		}

		// Function to handle tagReports containing tagID, seenCount and firstSeenTimeStamp fields.
		function TagHandlerAdvanced2(tagReportJSON){
		   objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID+" Reserved MemoryBank Data: "+tagReportJSON.TagData[0].memoryBankData,1);
		}

		function statusHandler(statusJSON){
		   objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Get/Set Parameters

This example gets the capabilities of the local RFID module and configures the antenna's RF and Singulation parameters. The application should register JavaScript callbacks for the enumRFIDEvent and rfParamsEvent events.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";

		function EnumerateRFIDModule(){
		  rfid.enumRFIDEvent = "enumerateRFIDHandler(%json)";
		  objGeneric.Log("In EnumerateRFIDModule :",3);
		  rfid.enumerate();
		  ConfigureRFIDModule();
		}

		function enumerateRFIDHandler(enumRFIDJSON){
		  objGeneric.Log("Number of Devices:"+enumRFIDJSON.numberOfDevices,3);
		  objGeneric.Log("Reader ID:"+enumRFIDJSON.readerID,3);
		  objGeneric.Log("Firmware version:"+enumRFIDJSON.firmwareVersion,3);
		  objGeneric.Log("Model Name:"+enumRFIDJSON.modelName,3);
		  objGeneric.Log("Number of Antennas:"+enumRFIDJSON.numberOfAntennas,3);
		  objGeneric.Log("Number of Prefilters:"+enumRFIDJSON.numberOfPreFilters,3);
		  objGeneric.Log("Country code:"+enumRFIDJSON.countryCode,3);
		  objGeneric.Log("Communication standard:"+enumRFIDJSON.communicationStandard,3);
		  objGeneric.Log("Minimum Transmit Power:"+enumRFIDJSON.transmitPowerMin,3);
		  objGeneric.Log("Maximum Transmit Power:"+enumRFIDJSON.transmitPowerMax,3);
		  objGeneric.Log("Step Transmit Power:"+enumRFIDJSON.transmitPowerStep,3);
		  objGeneric.Log("Supported RF Modes:"+enumRFIDJSON.numberOfRFModes,3);
		  objGeneric.Log("State Aware Singulation:"+enumRFIDJSON.stateAwareSingulationSupported,3);
		}

		function ConfigureRFIDModule(){
		  rfid.singulationEvent = "getSingulationHandler(%json)";
		  rfid.rfParamsEvent = "getRFParamsHandler(%json)";

		  rfid.singulationSession  = "1";
		  rfid.singulationTagPopulation = "100";

		  rfid.RFMode = "4";             // Mode table Index
		  rfid.transmitPower = "25.20";  // Transmit Power in dbM

		  rfid.setSingulation(); // Applies on both the antennas.
		  rfid.setRFParams();

		  rfid.antennaSelected = 1;  // To verify if the settings have indeed been applied.
		  rfid.getSingulation();
		  rfid.getRFParams();
		}

		function getRFParamsHandler(RFParamsJSON){
		  objGeneric.Log("RFMode of Antenna 1:"+RFParamsJSON.RFMode,3);
		  objGeneric.Log("Transmit Power of Antenna 1:"+RFParamsJSON.transmitPower,3);
		}

		function getSingulationHandler(singulationJSON){
		  objGeneric.Log("Session of Antenna 1:"+singulationJSON.singulationSession,3);
		  objGeneric.Log("Tag Population of Antenna 1:"+singulationJSON.singulationTagPopulation,3);
		}

		function statusHandler(statusJSON){
		  objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Tag Locationing

This example performs TagLocationing operation and reports the real-time relative distance information of the tag being located.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";

		function TagLocationing(){
			rfid.tagEvent = "TagLocateHandler(%json)";
			rfid.antennaSelected = 1;
			rfid.tagID = "97427423111111111111111111111111111111111111111111111111";
			rfid.locateTag();
			setTimeout("stopRunningLocate()",10000);
		}

		function stopRunningLocate(){
			rfid.stop();

		}

		function TagLocateHandler(tagReportJSON){
			objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID+" Relative Distance: "+tagReportJSON.TagData[0].relativeDistance,1);
		}

		function statusHandler(statusJSON){
		   objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>

### Read tagID

This example performs Read operation on a particular tagID.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";

		function readSingleTag(){
			rfid.tagID = "97427423111111111111111111111111111111111111111111111111";
			rfid.tagEvent =  "TagMemBankHandler(%json)";
			rfid.tagByteOffset = 4;
			rfid.tagMemBank = "Reserved";
			rfid.tagReadSize = 4;
			rfid.tagRead();
		}

		function TagMemBankHandler(tagReportJSON){
		  objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID+" Access Password: "+tagReportJSON.TagData[0].memoryBankData,1);
		}

		function statusHandler(statusJSON){
		   objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Read tagPattern

This example performs Read operation on all tags that match a particular tagPattern (access-filter). Reads User memory bank of all tags whose EPC start with "9742".

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		rfid.statusEvent = "statusHandler(%json)";
		function testReadMultipleTags(){
		  var selectedTagPattern = "9742";
		  var hexMaskStr = "";var i =0;
		  for(i =0;i < selectedTagPattern.length;i++)
		  hexMaskStr += "F";

		  rfid.useAccessFilter = true;
		  rfid.matchPattern = "A";
		  rfid.tagPatternAMemBank = "EPC";
		  rfid.tagPatternAByteOffset = 4;
		  rfid.tagPatternAHexPattern = selectedTagPattern;
		  rfid.tagPatternAHexMask = hexMaskStr.toString();
		  hexMaskStr = "";
		  for(i=0;i < selectedTagPattern.length;i++)
		  hexMaskStr += "F";

		  rfid.tagByteOffset = 0;
		  rfid.tagMemBank = "User";
		  rfid.tagReadSize = 0;
		  rfid.tagEvent =  "TagMemBankHandler(%json)";
		  rfid.tagRead();
		}

		function TagMemBankHandler(tagReportJSON){
		  objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID+" User Memory Data: "+tagReportJSON.TagData[0].memoryBankData,1);
		}

		function statusHandler(statusJSON){
		  objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### State-aware Pre-filters

This example shows the usage of State aware pre-filters and operationCompleteEvent. This function tries to search for a tag whose EPC starts with "56780000"

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		var tagCount = 0;

		function testStateAwarePreFilter(){
		  rfid.tagEvent =  "TagHandler(%json)";
		  rfid.statusEvent = "statusHandler(%json)";
		  rfid.operationCompleteEvent = "operCompleteHandler()";

		  rfid.performStateAwareSingulation = true;

		  rfid.singulationSLFlag = "SL_ASSERTED";
		  rfid.singulationInventoryState = "INV_B";
		  rfid.setSingulation();

		  rfid.preFilterID = 0;
		  rfid.preFilterHexPattern = "0000";
		  rfid.preFilterMemBank = "EPC";
		  rfid.preFilterBitOffset = 48;
		  rfid.preFilterStateAwareAction = "INV_B_NOT_INV_A";
		  rfid.preFilterTarget = "INV_S0";
		  rfid.addPreFilter();

		  rfid.preFilterID = 1;
		  rfid.preFilterHexPattern = "5678";
		  rfid.preFilterBitOffset = 32;
		  rfid.preFilterStateAwareAction = "ASRT_SL_NOT_DSRT_SL";
		  rfid.preFilterTarget = "SL";
		  rfid.addPreFilter();

		  rfid.reportUniqueTags = false;
		  rfid.beepOnRead = true;
		  rfid.stopTriggerType = "tagObservation";
		  rfid.stopObservationCount = 10;
		  rfid.performInventory();
		}

		function operCompleteHandler(){
			alert('Operation Complete. Total tags received:'+tagCount.toString());
		}

		function TagHandler(tagReportJSON){
			tagCount += tagReportJSON.TagData.length;
			objGeneric.Log("TagID :"+tagReportJSON.TagData[0].tagID,1);

		}

		function statusHandler(statusJSON){
		  objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>
<br>

### Use getLastAccessResult

This example shows the usage of getLastAccessResult method. At the completion of a multiple tag Write operation, the latter method is called to find out how many tags the operation succeeded and failed.

	:::html
	<script>
		var objGeneric = new ActiveXObject("PocketBrowser.Generic");
		var tagCount = 0;
		function writeMultipleTags(){
		  rfid.tagEvent =  "TagAccessStatusFieldHandler(%json)";
		  rfid.statusEvent = "statusHandler(%json)";
		  rfid.operationCompleteEvent = "operCompleteHandler()";
		  rfid.lastAccessResultEvent = "lastAccessResultHandler(%json)";
		  clear();

		  var hexMaskStr = "";var i =0;
		  for(i =0;i<8;i++)
		  hexMaskStr += "F";
		  rfid.enableTagAccessStatus = true;
		  rfid.useAccessFilter = true;
		  rfid.tagPatternAMemBank = "Reserved";
		  rfid.tagPatternAByteOffset = 4;
		  rfid.tagPatternAHexPattern = "FFFFFFFF";
		  rfid.tagPatternAHexMask = hexMaskStr.toString();
		  rfid.tagByteOffset = 4;
		  rfid.tagMemBank = "EPC";
		  rfid.tagWriteData = "EEEEAAAA";
		  rfid.tagWrite();
		}

		function TagAccessStatusFieldHandler(tagReportJSON){
			objGeneric.Log("TagID:"tagReportJSON.TagData[0].tagID+" Access Status "+tagReportJSON.TagData[0].accessStatus);
		}

		function operCompleteHandler(){
			rfid.getLastAccessResult();
		}

		function lastAccessResultHandler(accessResultJSON){
			alert("Success: "+accessResultJSON.tagsSucceeded.toString()+" Failures: "+accessResultJSON.tagsFailed.toString());
		}

		function statusHandler(statusJSON){
		  objGeneric.Log("Status:"+statusJSON.method+'  '+statusJSON.errorCode,1);
		}
	</script>

