---
title: RxLogger Settings
layout: guide.html
product: RxLogger
productversion: '6.0'
---

## Overview
RxLogger settings are configured through the RxLogger user interface or by pushing a configuration file to the device. All settings are stored in a single `.json` file that can be exported and mass-deployed to devices across an enterprise. 

### Settings Data Types 

* **Integer -** used to store numerical data such as the number of files to store. Allowable integers range from 0 - 2,147,483,647 (max int). For fields such as file size that do not allow a value of 0, a 1 is substituted at runtime. For integer fields, the UI accepts only numerical input.  

* **String -** used to store text such as file names and storage paths. The UI accepts any alphanumeric input and symbols as permitted by the file system. 

* **Boolean -** used to store true/false information such as to enable/disable a module; represented in the UI as a checkbox.

* **List -** used to select one value from a list of pre-assigned values; represented in the UI as a group of radio buttons. 

<!-- -->
-----

### Settings GUI

**To configure Settings through the GUI**: 

1. **Tap the Settings button** to display a list of configurable modules currently loaded by `diagdaemon`: 
<img alt="" style="height:350px" src="rxlogger_running.png"/>
<br>
2. **Tap the module to be edited** to display a list of its parameters: 
<img alt="" style="height:350px" src="rxlogger_settings_screen.png"/>
<br>
3. **Edit settings as required**. Tap the BACK key when done. 
<img alt="" style="height:350px" src="rxlogger_module_settings.png"/>
<br>
4. **Repeat Steps 2 and 3** until all modules are edited as desired. 
5. On the modules listing screen, **tap "SAVE" to preserve all changes**.  
<img alt="" style="height:350px" src="rxlogger_settings_save.png"/>
<br>

See the [Modules page](../modules) for settings information. 

<!-- -->
----

### Settings File

All RxLogger settings are stored in a file on the device, permitting remote configuration and mass deployment of settings files using an enterprise mobile management (EMM) system. **Warning**: The RxLogger configuration file is human-readable, but should not be edited by hand as doing so can lead to unpredictable behavior. 

**Zebra recommends modifying RxLogger settings only through the RxLogger UI**.

* **File name -** `config.json`

* **Location -** `/<internal_storage>/RxLogger` 

* **With external SD Card**: 
`/storage/sdcard1/RxLogger`

* **With no external SD Card**: 
`/storage/sdcard0/RxLogger`

When a new settings file is pushed to the device, RxLogger restarts all affected modules and applies the new settings immediately. 

>**Important**: Zebra recommends modifying RxLogger settings only through the RxLogger UI. 

<!-- -->
-----

## Related Links
* [RxLogger Modules](../modules) - Explains data collection module parameters and settings
* [Intent APIs](../apis) - Used to start and stop RxLogger and back up all data  
