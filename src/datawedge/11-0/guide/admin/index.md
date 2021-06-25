---
title: Deployment
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## Overview

DataWedge configurations can be deployed to devices either manually or via mass deployment. There are 2 methods for secure mass deployment: StageNow or EMM (Enterprise Management Mobility).

### Prerequisites

Generate DataWedge configuration file(s) as follows:
1. Configure DataWedge as desired on a device.
2. [Create a DataWedge profile](../createprofile), specifying how to acquire, process, and output data.
3. To distribute DataWedge configurations including multiple profiles and settings, [export the config file](../settings/#exportaconfig) (`datawedge.db`).
4. To distribute a single DataWedge profile, [export the profile](../settings/#exportaprofile) (`dwprofile_[profilename].db`, where [profilename] is the name of the profile).

---

## Deployment Methods

After fulfilling the prerequisites to generate the DataWedge configuration file(s), select one of the following methods of deployment.

### Manual Deployment

To deploy the DataWedge configuration file manually:
1. Copy the DataWedge configuration file to the target device, e.g. the SD card folder.
2. [Import the file](../settings/#deployment) by browsing to the folder location and selecting the file.

### Mass Deployment

There are 2 methods for mass deployment of the DataWedge configuration file:
* **Using StageNow -** follow the steps below to create a StageNow profile and generate the barcode to scan and deploy the configuration:
    1. **Host the DataWedge configuration file** on an FTP or HTTP server.
    2. Create a [StageNow](/stagenow) profile to:<br>
        A. Select **one** of the following:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a) **Copy the configuration file from the host server to the device to auto import:** Using [File Manager CSP](/mx/filemgr), specify the source file path, the path of the configuration file on the host server. Specify the target file path, using the [Auto Import](../settings/#autoimport) feature: `/enterprise/device/settings/datawedge/autoimport`.<br> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) **Copy the configuration file from a specific location accessible by DataWedge:** Using [File Manager CSP](/mx/filemgr), specify the source file path, the path of the configuration file on the host server. Using [DataWedge Manager CSP](/mx/datawedgemgr), [import the configuration file from a specified path](#importconfigurationfilefromspecifiedpath). <br>
        B. **Generate the staging barcode.**
    3. **Scan the generated barcode** using StageNow client on the device to copy the configuration file and deploy it to the device.
* **Using EMM - select one of the following methods:**
    * Push the **DataWedge configuration file to the [auto import](../settings/#autoimport) file path `/enterprise/device/settings/datawedge/autoimport` on the device to automatically import the configuration.
    * Use [StageNow](/stagenow) with [DataWedge Manager CSP](#datawedgemanagercsp) to export for EMM:
        1. Copy the DataWedge configuration file to a specific folder on the device using EMM. If using the [Auto Import](../settings/#autoimport) feature, copy the file to the auto import file path: `/enterprise/device/settings/datawedge/autoimport`.
        2. Create a StageNow profile specifying the location of the file using [DataWedge Manager CSP](#datawedgemanagercsp). Export the .XML for EMM.
        3. Push the .XML generated to devices using EMM.
    * Use [Zebra Managed Configurations](/oemconfig/mc/#datawedgeconfiguration-1) through [Zebra OEMConfig](/oemconfig).
    * Use [DataWedge Managed Configurations](#managedconfigurations).

<!-- 
1. **Manual File Copy -** Perform one of the following:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. <b>[Export/Import DataWedge Files](../settings/#deployment) -</b> Manually export the DataWedge configuration file(s), copy the file(s) to another device, then import the file(s) onto that device.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. <b>[Auto Import](../settings/#autoimport) -</b> Export the DataWedge configuration file(s) and copy it to the auto import folder: `/enterprise/device/settings/datawedge/autoimport`. DataWedge then automatically imports the configuration file(s).<br>
2. **StageNow -** [Export the DataWedge configuration file(s)](../settings/#deployment), then use [StageNow](/stagenow) with [DataWedge Manager CSP](#datawedgemanagercsp) to [import the file(s) from a specified path](#importconfigurationfilefromspecifiedpath), or [auto import the file(s)](#enabledisableautoimportofconfigurationfile). Optionally, auto import can be disabled to prevent unauthorized changes. 
3. **EMM -** [Export the DataWedge configuration file(s)](../settings/#deployment), then securely deploy them via an EMM (Enterprise Mobility Management) using one of the following methods:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Push [DataWedge configuration files](../settings/#deployment) to devices.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Use [StageNow](/stagenow) with [DataWedge Manager CSP](#datawedgemanagercsp) to export the .XML for EMM.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Use [Zebra Managed Configurations](/oemconfig/mc/#datawedgeconfiguration-1) through [Zebra OEMConfig](/oemconfig).<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. Use [DataWedge Managed Configurations](#managedconfigurations).-->
**Note:** 
* [Zebra Managed Configurations](/oemconfig/mc/#datawedgeconfiguration-1) provides a single interface to configure Zebra Android device hardware and software. [DataWedge Managed Configurations](#managedconfigurations) are Managed Configurations specific for DataWedge and is a subset of **Zebra Managed Configurations**. 
* [DataWedge Managed Configurations](#managedconfigurations) is based on Android's Managed Configurations architecture introduced in Android 11. Prior to Android 11, these configurations are supported in [DataWedge Manager CSP](/mx/datawedgemgr). Moving forward, Zebra recommends administrators to transition to Managed Configurations, which will replace DataWedge Manager CSP.

For more information on [DataWedge Manager CSP](#datawedgemanagercsp) and [Managed Configurations](#managedconfigurations), see the sections that follow.

---

## DataWedge Manager CSP

**DataWedge Manager CSP** (Configuration Service Provider) securely enables mass configuration deployment with the underlying [MX](/mx/overview) framework, an XML-based communications platform that serves as a common interface for managing capabilities and behaviors of Zebra Android devices. The CSP is an MX plug-in that can set or query a particular configuration, allowing DataWedge to receive and process XML files. This lets device administrators utilize [StageNow](/stagenow) to create profiles specific to configuring DataWedge and deploy through StageNow or an EMM. Features that can be configured include:

- Control access to intent APIs
- Enable/Disable DataWedge UI
- Enable/Disable configuration file import via intent API
- Enable/Disable auto import of configuration file
- Import configuration file from specified path
- Import NextGen SimulScan Templates
<br>

See [DataWedge Manager CSP](/mx/datawedgemgr/) for more information.
<br>

**Note:** When StageNow profiles are used to configure DataWedge Manager CSP, profiles created with MX 10.1 can result to a failure in some devices running DataWedge 8.1 and 8.2. Instead, select MX 10.0 when creating the StageNow profile with DataWedge Manager CSP. This is resolved with DataWedge 8.2.62 or higher. Until DataWedge is updated to 8.2.62, features specific to DataWedge Manager CSP with MX 10.1 may not be functional.

### Version History

- **DataWedge 8.1 -** New Control Access to Intent APIs
- **DataWedge 8.0 -** New Import NextGen SimulScan Templates
- **DataWedge 7.5 -** DataWedge Manager CSP support introduced, requires at minimum MX v9.2 and StageNow v3.5.

---

### Control Access to Intent APIs

Controls whether DataWedge APIs are accessible from all apps or only whitelisted apps. Affected DataWedge APIs are categorized to four groups: Configuration, Notification, Query, and Runtime. Refer to the [programmers guide](../programmers-guides/secure-intent-apis) for more details.<br>
**Note:** Supported only on devices with DataWedge 8.1 or later.<br>

#### Configuration APIs

Intent APIs related to retrieving, setting or removing DataWedge configuration (e.g. SetConfig, GetConfig, etc.). <br>
**Parm Name:** Configuration APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

#### Notification APIs

Intent APIs related to retrieving status for the DataWedge scanner, profile or configuration (e.g. Scanner Status, Configuration Change, etc.).<br>
**Parm Name:** Notification APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

#### Query APIs

Intent APIs related to retrieving DataWedge information or enumerating scanners (e.g. Enumerate Scanners, Get Active Profile, etc.). <br>
**Parm Name:** Query APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

#### Runtime APIs

Intent APIs related to DataWedge runtime configuration changes (e.g. Switch To Profile, Switch Scanner Params, etc.). <br>
**Parm Name:** Runtime APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

---

### Enable/Disable DataWedge UI

Controls whether the DataWedge user interface is accessible to the device user, determining the ability to change DataWedge configuration settings on the device. If disabled, DWDemo profile settings can still be modified for demonstration purposes.

---

### Enable/Disable configuration file import via intent API

Controls whether configuration files can be imported by apps via DataWedge [Import Config](../api/importconfig) intent API.

---

### Enable/Disable auto import of configuration file

Controls whether DataWedge configuration files are [auto-imported](../settings#autoimport) when located in the `/enterprise/device/settings/datawedge/autoimport` folder on the device.

---

### Import configuration file from specified path

Specifies the full path and file name to import the configuration file (`datawedge.db`) or profile (by default, `dwprofile_<profilename>.db`). Can be used instead of the default Auto-Import (`/enterprise/device/settings/datawedge/autoimport`) folder. The file name must adhere to the existing DataWedge file naming convention:

- Config file is always named `datawedge.db`
- Profile naming convention: `dwprofile_<profilename>.db`<br>

With the introduction of scoped storage restriction on Android 11 devices, EMM (Enterprise Mobile Management) systems cannot copy files to DataWedge folders on internal or external storage (e.g. `/storage/emulated/x/Android/data/com.symbol.datawedge/file`, where "x" is a digit). Instead, Zebra recommends to use either of the following folders by updating the file paths in the deployment configuration (such as OEMConfig, Managed Configurations or StageNow configuration): `/enterprise/device/settings/datawedge` or `/data/temp/public` 

---

### Import NextGen SimulScan templates

Import NextGen SimulScan Templates for document capture by using [StageNow](/stagenow). After importing the template, it populates [Document Selection](../input/barcode/#documentselectiondocumentcapture) under NextGen SimulScan Configuration. Contact your local Zebra Sales Representative for assistance in creating the template. Refer to [NextGen SimulScan Template](/mx/datawedgemgr/#simulscan-template-action) in DataWedge Manager CSP for more information.

Steps to deploy and import a Document Capture/NextGen SimulScan template to a device:

1. Contact your local Zebra sales representative for assistance to create a Document Capture/NextGen SimulScan template. <!-- Generate the template as an .XML file with [Template Builder](../templatebuilder). -->
2. Copy the .XML file to the device (e.g. /sdcard).
3. On a host system, open StageNow to create a profile.<br>
   a. Click on **Create New Profile**.<br>
   b. Select **MX 10.0** or higher and select **Xpert Mode**. Click **Create**.<br>
   d. Enter a profile name. Click **Start**.<br>
   e. Select **DataWedgeMgr** and click on **+**. DataWedgeMgr is added to the list on the right. Click **Add**. <br>
   f. For **NextGen SimulScan template**, select **Add/Replace a template**. For **Template file**, enter the file path where the template is located (e.g. /sdcard/template.xml). Click **Continue**.<br>
   g. Click **Complete Profile**.<br>
4. Select the desired deployment method:
   - **StageNow** - Generate the barcode. Open StageNow on the device and scan the barcode.
   - **EMM** - Click on **Export for MDM** to export the .XML file to deploy via EMM.

<!--
Video demonstrating how to deploy and import a Document Capture/NextGen SimulScan template to a device using StageNow:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yrtEHadshGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->
<!-- <p>See <a href="../admin">Mass Deployment</a> for more information.</p>
-->

---

## Managed Configurations

Managed Configurations are specifications developed by Google and the Android community to remotely configure installed applications, apply application restrictions and deploy these configurations through an EMM (Enterprise Mobility Management). This enables DataWedge administrators to remotely specify settings and enforce policies, such as:
* **Securely mass deploy** the same data capture configurations for DataWedge across all devices.
* **Lock the DataWedge configuration** to prevent unexpected changes.
* **Restrict access to DataWedge APIs** by limiting access only to approved applications.

A schema defines the DataWedge features available for consumption by the EMM, providing the information necessary to present to the EMM's corresponding data-driven UI. (The UI layout may vary depending on the EMM.) This mechanism integrates DataWedge remote configuration within the EMM for seamless operation. Through this UI, the administrator can select the desired Managed Configurations. 

---

### Requirements

Requirements for use of Managed Configurations with DataWedge:
* Zebra device with Android 11 or higher
* DataWedge schema, included with DataWedge built-in on Zebra Android devices
* An EMM for device deployment

---

### Use Managed Configurations via EMM

The process to setup an EMM console to use Managed Configurations varies depending on the EMM in use. The general steps follow:

1. Point EMM console to the DataWedge schema based on the package name `com.symbol.datawedge` to display the data-driven UI.
2. Create or update Managed Configurations described in the schema.
3. Push the updated Managed Configurations to the device to be consumed by DataWedge.

---

### App Restrictions

DataWedge restrictions are divided into 3 separate categories listed below with the corresponding bundle names:

1. **Secure DataWedge Configuration -** Controls access to DataWedge UI to prevent unexpected configuration changes. Use [Configuration Security](#configurationsecurity) bundle.
2. **Control access to DataWedge intent APIs -** Restricts application use of different types of DataWedge intent APIs. Use [Intent API Access Control](#intentapiaccesscontrol) bundle.
3. **Secure mass deployment -** Securely mass deploy DataWedge configuration files across all devices in an organization. Use [Configuration Settings](#configurationsettings) bundle.

<!--
DataWedge restrictions are categorized into 3 different configuration bundles:

1. **Configuration Security -** This bundle contains restrictions which control the security of DataWedge configurations.
2. **Intent API Access Control -** This bundle contains restrictions which control access to DataWedge intent APIs.
3. **Configuration Settings -** This bundle contains configuration options related to mass deployment of configuration files and NextGen SimulScan template.
-->
### App Restriction Options

The following sections provide the options available for each of the configuration bundles.

#### Configuration Security

Configuration Security controls the ability to lock the DataWedge configuration on the device once the configuration is deployed preventing undesired configuration changes by device users.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Value</th>
    <th>Display Name</th>
    <th>Description</th>
  </tr>

  <tr>
    <td rowspan="2">Automatic database import</td>
    <td style="text-align:center">0</td>
	<td>Off</td>
    <td>Turn off auto import feature. This helps prevent undesired DataWedge configuration updates after the final configuration is deployed. </td>
  </tr>
  
  <tr>
    <td style="text-align:center">1</td>
    <td>On</td>
    <td>Turn on auto import feature. This automatically imports the DataWedge configuration file when present. </td>
  </tr>

<tr>
    <td rowspan="2">Manual configuration</td>
    <td style="text-align:center">1</td>
	<td>Allow</td>
    <td>Allow DataWedge UI to be launched and manually configured.</td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Disallow</td>
    <td>Disallow DataWedge UI from being launched, preventing users from manually changing the DataWedge configuration. </td>
  </tr>

  <tr>
    <td rowspan="2">Programmatic import </td>
    <td style="text-align:center">1</td>
	<td>Allow</td>
    <td>Allow applications to import a configuration database file (profile or full configuration) by calling the DataWedge intent API.</td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Disallow</td>
    <td>Disallow applications to import a configuration database file (profile or full configuration) by calling the DataWedge intent API. </td>
  </tr>
  
</table>

#### Intent API Access Control

Intent API Access Control allows access to DataWedge intent APIs only to approved applications, preventing undesired retrieval of configuration or changes in configuration.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Value</th>
    <th>Display Name</th>
    <th>Description</th>
  </tr>

  <tr>
    <td rowspan="2">Configuration APIs</td>
    <td style="text-align:center">1</td>
	<td>Uncontrolled (default) - Allow use by all applications</td>
    <td>Allow any application to access DataWedge Configuration intent API.  </td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Controlled - Allow use only by AllowListed applications</td>
    <td>Allow only applications listed in the AllowList to access DataWedge Configuration intent API. </td>
  </tr>

<tr>
    <td rowspan="2">Notification APIs</td>
    <td style="text-align:center">1</td>
	<td>Uncontrolled (default) - Allow use by all applications</td>
    <td>Allow any application to access DataWedge Notification intent APIs. </td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Controlled - Allow use only by AllowListed applications</td>
    <td>Allow only whitelisted applications to access DataWedge Notification intent APIs. </td>
  </tr>

  <tr>
    <td rowspan="2">Query APIs </td>
    <td style="text-align:center">1</td>
	<td>Uncontrolled (default) - Allow use by all applications</td>
    <td>Allow any application to access DataWedge Query intent APIs. </td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Controlled - Allow use only by AllowListed applications</td>
    <td>Allow only whitelisted applications to access DataWedge Query intent APIs. </td>
  </tr>

  <tr>
    <td rowspan="2">Runtime APIs </td>
    <td style="text-align:center">1</td>
	<td>Uncontrolled (default) - Allow use by all applications</td>
    <td>Allow any application to access DataWedge Runtime Intent APIs.  </td>
  </tr>
  
  <tr>
    <td style="text-align:center">2</td>
    <td>Controlled - Allow use only by AllowListed applications</td>
    <td>Allow only whitelisted applications to access DataWedge Runtime Intent APIs. </td>
  </tr>
  
</table>

See [DataWedge APIs](../api) for more information.

#### Configuration Settings

Configuration Settings sets the file path for files, such as configuration or template file, for mass deployment through the EMM.

<table class="facelift" align="center" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Restriction Name</th>
    <th>Value</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>Configuration File</td>
    <td>File path of the configuration file</td>
	<td>String from 0–255 characters containing file path and name of configuration file on the device.<br><br>DataWedge supports importing config files (datawedge.db) and profiles (dwprofile_profilename.db) to devices delivered through an EMM. The configuration file must be copied to the DataWedge sandbox folder or download folder on the device before sending the managed configuration. </td>
  </tr>
  
  <tr>
    <td>NG SimulScan Template file</td>
    <td>File path of the template file</td>
    <td>String from 0–255 characters containing file path and file name of template file on the device.<br><br>Template files (.xml file) can be copied to a folder through an EMM before sending the managed configuration. </td>
  </tr>
  
</table>

---

**Related Guides**:

- **[DataWedge Manager CSP](/mx/datawedgemgr) -** describes DataWedge Manager CSP usage
- **[MX Management System](/mx) -** explains MXMS framework
- **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins
- **[Control Access to DataWedge APIs](../programmers-guides/secure-intent-apis) -** explains how to control access to DataWedge intent APIs to prevent unauthorized use
- **[DataWedge profile](../createprofile) -** discusses DataWedge profile architecture
    - [Profile Overview](../overview)
    - [Profiles/Plug-Ins listing](../profiles)
