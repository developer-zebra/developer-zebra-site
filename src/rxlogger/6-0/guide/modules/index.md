---
title: RxLogger Modules
layout: guide.html
product: RxLogger
productversion: '6.0'
---

## Overview

RxLogger data collection modules control the logging of individual components of an Android system. Modules can be enabled or disabled and their parameters can be modified as needed. Of the 10 included modules, seven are enabled by default:

<br><br>

**Enabled by default**:
* [ANR](#anrmodule)
* [Kernel](#kernelmodule)
* [Logcat](#logcatmodule)
* [Ramoops](#ramoopsmodule)
* [Resource](#resourcemodule)
* [Snapshot](#snapshotmodule)
* [Tombstone](#tombstonemodule)

<br>
<p><b>Disabled by default</b>: </p>

* [LTS](#ltsmodule)
* [Qxdm](#qxdmmodule)
* [Tcpdump](#tcpdumpmodule)

<br>
<p><b>Tap the "About" button</b> for a list of active RxLogger modules: 
<img alt="" style="height:350px" src="rxlogger_about_screen.png"/>

<b>Tap the Settings button</b> to edit module settings: 
<img alt="" style="height:350px" src="rxlogger_running.png"/></p>

<br>
<p>See also:</p>

   * [How to edit and save module settings](../settings/#settingsgui)
   * [About the Settings file](../settings/#settingsfile)

<!-- -->
-----

## ANR Module
Controls collection of data from Android's "application not responding" (ANR) events. Event data is copied directly from the Android system and saved in a file called `trace.txt` or some variant thereof. For example, the ANR event for a post-loaded app would be similar to `trace-<app_package_name>.txt`. 

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name                                  </p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables collection of ANR files</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/anr/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for ANR files</p>
  </td>
 </tr>
</table>

-----

## Kernel Module

The Kernel module captures `kmsg` data from the Android system and outputs it to a series of numbered files (i.e. `KLog0.txt`, `KLog1.txt`, `KLog2.txt`) with 0 being the newest. 

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables collection of Kernel Logs</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Kernel Logs</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Kernel Log filename</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>KLog</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save Kernel Logs with</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Kernel Log File size (MB)</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>10</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each Kernel Log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.5pt'>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Kernel Log Interval (sec)</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which Kernel Logs will be dumped into the collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Kernel Log file count</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of Kernel Log files to keep at any one time</p>
  </td>
 </tr>
</table>

-----

## Logcat Module

Captures data from Android's internal logging mechanism, sometimes known as logcat buffers. The Logcat module captures any or all of the logcat buffers: 

* System
* Event
* Radio
* Main
* Crash

Module options allow data from any or all enabled buffers to be stored in separate files or in a single combined file. Output is stored in a series of numbered text files (i.e. `Main0.txt`, `Main1.txt`, `Main2.txt`) with 0 being the newest.

**Reference material**:
* [Android logging and filtering](http://developer.android.com/tools/debugging/debugging-log.html)

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:47.05pt;border-collapse:collapse;border:none'>
 <tr>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables collection of Logcat Logs</p>
  </td>
 </tr>
 <tr>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Logcat Logs</p>
  </td>
 </tr>
 <tr>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable main logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the main buffer</p>
  </td>
 </tr>
 <tr>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which main buffer logs will be dumped into the collecting
  file</p>
  </td>
 </tr>
 <tr style='height:1.5pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.5pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save main buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of main buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each main buffer log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Main log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the main buffer.</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable event logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the event buffer</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which event buffer logs will be dumped into the
  collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save event buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of event buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each event buffer log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Event log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the event buffer.</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable radio logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the radio buffer</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which radio buffer logs will be dumped into the
  collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save radio buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of radio buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each radio buffer log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Radio log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the radio buffer.</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable system logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the system buffer</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which system buffer logs will be dumped into the
  collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save system buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of system buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each system buffer log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the system buffer.</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable crash logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the crash buffer</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which crash buffer logs will be dumped into the
  collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save crash buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of crash buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each crash buffer log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Crash log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the crash buffer.</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable combined logcat</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the collection of the combined logcat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable main buffer</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the addition of the main buffer into the combined
  locat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable event buffer</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the addition of the event buffer into the combined
  locat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable radio buffer</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the addition of the radio buffer into the combined
  locat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable system buffer</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the addition of the system buffer into the combined
  locat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable crash buffer</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable or disable the addition of the crash buffer into the combined
  locat file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined log interval (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>30</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which combined buffer logs will be dumped into the
  collecting file</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined log filename</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name to save combined buffer logs with</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined log file count</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of crash buffer log files to keep at any one time</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined log file size (MB)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>10</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each combined buffer log file before rotating in
  Megabytes</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=217 valign=top style='width:162.55pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Combined log filter (sec)</p>
  </td>
  <td width=167 valign=top style='width:125.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=177 valign=top style='width:132.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&nbsp;</p>
  </td>
 </tr>
 <tr style='height:1.0pt'>
  <td width=561 colspan=3 valign=top style='width:420.45pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt;
  height:1.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom logcat filter to run on the combined buffer.</p>
  </td>
 </tr>
</table>

-----

## LTS Module

The Long Term Storage (LTS) module gathers log files generated by other active modules and stores them together for device health and behavior analysis over a period of time. Module output files are compressed with gzip and stored in the specified path, which is appended as shown below. Multiple stores in a single hour (noted in military time) are numbered from 00-99. 

**Storage Path**:
`/<device_model>/<BSP_build_number>/<device_serial_number>/<YYMMDD>/<HHxx>/`

**Example**: 
`TC51/91-01-21-NN-00/16885225D0029/170621/2100/`

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables LTS collection</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;SDcard&gt;/RxLoggerLTS/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for LTS files</p>
  </td>
 </tr>
</table>

-----

## Qxdm Module

The Qxdm Module captures Qualcomm Modem Logs from the device, which are read using a Qualcomm utility. This module also accepts a user-defined configuration file generated by Qualcomm tools and stored in the `<RxLogger_Path>/qxdm/cfg/Custom_filter.cfg` folder. 

**Warning**: Output from this module consumes all available storage space if the log size parameter is left unspecified. **Zebra recommends specifying a log size in accordance with available storage**.

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables Qxdm collection</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/qxdm/logs/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Qxdm files</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Qxdm Log Size (MB)</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>100</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size that each individual Qxdm log will be</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Qxdm test sets to keep</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>3</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Number of test sets to keep (One test set is a start and stop)</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Choose Log Filter</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>List</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>234G – Index 0</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Selects the log filter that Qxdm needs to process with</p>
  </td>
 </tr>
 <tr>
  <td width=185 valign=top style='width:138.4pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Path for User Defined Filter</p>
  </td>
  <td width=185 valign=top style='width:138.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=192 valign=top style='width:143.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Custom_filter.cfg</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The file name if using a user-defined config file</p>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/qxdm/cfg/Custom_filter.cfg</p>
  </td>
 </tr>
</table>


-----

## Ramoops Module

Captures the last kmsg from the device, writing it to persistent memory immediately prior to a system crash. Ramoops outputs text files generated by the system at boot or after a kernel panic. These files contain raw kmsg data from the boot immediately prior to the crash. More [about Ramoops](https://www.kernel.org/doc/html/v4.12/admin-guide/ramoops.html). 

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables Ramoops collection</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/ramoops/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Ramoops files</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Base filename</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>ramoops</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name of stored ramoops file</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Ramoops file count</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of ramoops log files to keep at any one time</p>
  </td>
 </tr>
</table>

-----

## Resource Module

Captures device information and system statistics at specified intervals to determine the health and behavior of device resources over a period of time. Outputs collected metrics as a series of comma separated values stored in files with a `.csv` extension. 

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables Resource collection</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Resource files</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Resource log Interval (sec)</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>60</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which Resource will collect information and dump into its
  file</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Resource Log file size (MB)</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>10</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The size of each Resource Log file before rotating in Megabytes</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Resource Log file count</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of Resource files to keep at any one time</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Power</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of Battery statistics</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>System Resource</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of System Resource information</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Network</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of Network status</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Bluetooth</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of Bluetooth information</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Light</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of ambient light level</p>
  </td>
 </tr>
</table>

-----

## Snapshot Module

Captures device information and system statistics at each "moment in time" to determine the health and behavior of device resources over a specified period. Outputs a single text file containing collected metrics for selected parameters for each specified interval. Though similar to the Resource module in function, Snapshot captures more precise data, including threads and dumpsys details along with a device fingerprint header for each file. Snapshot creates one text file per data collection set containing with the output of all enabled data selections. 


<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables Snapshot collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/snapshots/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for Snapshot files</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log filename</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>snapshot</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name of stored ramoops file</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log Interval (sec)</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>1800</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The rate at which Snapshot will collect information and dump into its
  file</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Snapshot file count</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>50</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The maximum number of Snapshot files to keep at any one time</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Top</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “top” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>CPU Info</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys cpuinfo” command for
  data collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Memory Info</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys meminfo -a” command
  for data collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Battery Info</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys batterystats” command
  for data collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Wake Locks</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the sys/fs wake_lock
  information</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Time in State</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the sys/fs cpufreq for each
  core</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Processes</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “ps -p” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Threads</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “ps -t -p -P” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Properties</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “getprop” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Interfaces</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “netcfg” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>IP Routing Table</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the collection of the net route for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Connectivity</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys connectivity” command
  for data collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Wifi</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys wifi” command for
  data collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>File systems</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “df” command for data
  collection</p>
  </td>
 </tr>
 <tr>
  <td width=182 valign=top style='width:136.85pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Usage Stats</p>
  </td>
  <td width=182 valign=top style='width:136.45pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=197 valign=top style='width:147.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables the running of the “dumpsys usagestats” command
  for data collection</p>
  </td>
 </tr>
</table>

-----

## Tcpdump Module

Captures packet data for all device network connections and outputs a binary file that can be read with Wireshark and other standards-based network analysis tools.


<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>false</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables tcpdump collection</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/tcpdump/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for tcpdump files</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Base filename</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>capture.pcap</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The base file name of stored tcpdump file</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>tcpdump file size (MB)</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>5</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The max file size used before rotating tcpdump files</p>
  </td>
 </tr>
 <tr>
  <td width=187 valign=top style='width:140.2pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>tcpdump file count</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Integer</p>
  </td>
  <td width=187 valign=top style='width:140.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>2</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The max number of tcpdump files to keep</p>
  </td>
 </tr>
</table>

-----

## Tombstone Module 

Collects the Android native crash logs from the device, which contain stack traces and other details about the crashed process. Tombstone files are output in sequence starting with `tombstone_00`through `tombstone_09` and starting again with `tombstone_00`. Use timestamps to determine the most recent files. 

[More info](https://source.android.com/devices/tech/debug/#debuggerd)

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='margin-left:.65in;border-collapse:collapse;border:none'>
 <tr>
  <td width=186 valign=top style='width:139.25pt;border:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Name</p>
  </td>
  <td width=186 valign=top style='width:139.3pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Type</p>
  </td>
  <td width=190 valign=top style='width:142.15pt;border:solid windowtext 1.0pt;
  border-left:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Default</p>
  </td>
 </tr>
 <tr>
  <td width=186 valign=top style='width:139.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enable Module</p>
  </td>
  <td width=186 valign=top style='width:139.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Boolean</p>
  </td>
  <td width=190 valign=top style='width:142.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>true</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;background:#AEAAAA;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Enables or disables tombstone collection</p>
  </td>
 </tr>
 <tr>
  <td width=186 valign=top style='width:139.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Log path</p>
  </td>
  <td width=186 valign=top style='width:139.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>String</p>
  </td>
  <td width=190 valign=top style='width:142.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>&lt;RxLogger_Path&gt;/tombstone/</p>
  </td>
 </tr>
 <tr>
  <td width=561 colspan=3 valign=top style='width:420.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:1.45pt 5.75pt 1.45pt 5.75pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>The storage path for tombstone files</p>
  </td>
 </tr>
</table>

<!-- [^top](../modules) -->
-----

## Related Links
* [RxLogger Settings](../settings) - How to configure data collection module parameters
* [Intent APIs](../apis) - Used to start and stop RxLogger and back up all data  
