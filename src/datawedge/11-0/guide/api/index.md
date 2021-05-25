---
title: DataWedge APIs
description:
layout: list-apis.html
product: "DataWedge"
productversion: "11.0"
automenu:
  items:
    - title: Other Resources
      items:
        - title: Getting Started
          url: ../gettingstarted
        - title: Using Intents
          url: ../output/intent
        - title: Using DataWedge APIs
          url: overview
        - title: Using Intent Result Codes
          url: resultinfo
        - title: DataWedge API Benefits & Usage (article)
          url: https://developer.zebra.com/community/home/blog/2017/06/27/datawedge-apis-benefits-challenges
        - title: DataWedge Intent Demo App
          url: tutorials
        - title: Application Development Guide
          url: ../programmers-guides/articles
        - title: Control Access to DataWedge Intent APIs
          url: ../programmers-guides/secure-intent-apis
---

DataWedge APIs operate primarily through Android intents, specific commands that can be used by other applications to control data capture without the need to directly access the DataWedge UI. DataWedge API use can be [controlled to only allow approved apps to configure DataWedge](../programmers-guides/secure-intent-apis).

<p>Refer to <a href="../programmers-guides/articles">DataWedge resources for application development</a> for guidance on use of common DataWedge APIs.
</p>

DataWedge APIs are categorized into 4 types:

- **Configuration APIs -** related to actions taken on configurations
- **Notification APIs -** related to retrieving status for scanner, profile, or configuration
- **Query API -** retrieve information or enumerate scanners
- **Runtime APIs -** related to functionality that can be changed at runtime
  <br><br>

<b style="font-size:16px">Configuration APIs:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./cloneprofile">Clone Profile</a>** - Create a copy of an existing DataWedge Profile including all settings.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./createprofile">Create Profile</a>** - Create a new Profile without setting configurations.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./deleteprofile">Delete Profile</a>** - Delete an existing Profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./importconfig">Import Config</a>** - Import a Profile and/or Config file, which can contain multiple Profiles.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./renameprofile">Rename Profile</a>** - Rename an existing Profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./restoreconfig">Restore Config</a></td>** - Reset all user-configured settings and restore DataWedge to the factory-default settings.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setconfig">Set Config</a>** - Create, update or replace a Profile and its settings.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setdisabledapplist">Set Disabled App List</a>** - Add, remove or update an app/activity from the list which prevents the use of DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setignoredisabledprofiles">Set Ignore Disabled Profiles</a>** - Prevent switching to a Profile that is disabled, including Profile0.<br />
<br>

<b style="font-size:16px">Notification APIs:</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./registerfornotification">Register/Unregister for Notifications</a>** enables apps to register or unregister to receive notifications of status changes related to:<br />

- Profile switching
- Scanner status
- Configuration
  <br><br>

<b style="font-size:16px">Query APIs:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./enumeratescanners">Enumerate Scanners</a>** - Generate an index of scanners available on the device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getactiveprofile">Get Active Profile</a>** - Get the name of the profile currently in use by DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getconfig">Get Config</a>** - Gets the `PARAM_LIST` settings in the specified Profile, returned as a set of value pairs or a Plug-in config bundle. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getdatawedgestatus">Get DataWedge Status</a>** - Return the DataWedge status, enabled or disabled.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getdisabledapplist">Get Disabled App List</a>** - Return a list of apps and activities that are blocked from using DataWedge.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getignoredisabledprofiles">Get Ignore Disabled Profiles</a>** - Return the status of the "Ignore Disabled Profiles" parameter. If true, DataWedge cannot switch to any profile that is not enabled.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getprofileslist">Get Profiles List</a>** - Return the list of DataWedge profiles.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getscannerstatus">Get Scanner Status</a>** - Return the status of the scanner currently selected as the default.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./getversioninfo">Get Version Info</a>** - Return the current version of DataWedge and Scanner Framework/Decoder library installed on the device.<br />
<br>

<b style="font-size:16px">Runtime APIs:</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./enabledatawedge">Enable/Disable DataWedge</a>** - Enable/disable DataWedge on the device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./scannerinputplugin">Enable/Disable Scanner Input Plug-in</a>** - Enable/Disable the Scanner Input Plug-in in use by the current active profile, which effectively disables scanning.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./enumeratetriggers">Enumerate Triggers</a>** - Retrieve supported trigger list of a device.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./notify">Notify (Bluetooth Scanner Notifications)</a>** - Play notification sound(s) and/or display a colored LED after a scan from a connected Bluetooth scanner with RSM (Remote Scanner Management).<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./resetdefaultprofile">Reset Default Profile</a>** - Reset the default profile to Profile0, the built-in profile used with unassociated apps.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setdefaultprofile">Set Default Profile</a>** - Set the specified profile as the default profile.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./setreportingoptions">Set Reporting Options</a>** - Configure reporting options from importing databases and profiles.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./softrfidtrigger">Soft RFID Trigger</a>** - Start, stop or toggle a software RFID trigger. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./softscantrigger">Soft Scan Trigger</a>** - Start, stop or toggle a software scanning trigger. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchscanner">Switch Scanner</a>** - Switch to a specific scanner at runtime to enable an optimal scanning device for the app, requirement or situation. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchscannerparams">Switch Scanner Params</a>** - Temporarily update the settings of the active profile during runtime by passing one or more barcode, scanner and/or reader parameters as intent extras.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<a href="./switchtoprofile">Switch to Profile</a>** - Change the app association to the specified profile.
<br><br>
