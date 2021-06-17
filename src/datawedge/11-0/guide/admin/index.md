---
title: Mass Deployment
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## Overview

DataWedge configuration can be deployed through the following distinct methods:

1. **Manual File Copy -** After DataWedge is configured as desired on a device, [export the DataWedge configuration file(s)](../settings/#massdeployment) and manually copy them to other devices. 
2. **StageNow -** A Zebra staging tool to create profiles for configuring Zebra devices. There are 2 methods of deployment with the use of [DataWedge Manager CSP](#datawedgemanagercsp):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Scan a staging barcode or tap on an NFC tag.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Export to an EMM (Enterprise Mobility Management).
3. **EMM -** Deployment via an EMM can be performed using one of the following methods:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Push [DataWedge configuration files](../settings/#massdeployment) to devices.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Use StageNow with [DataWedge Manager CSP](#datawedgemanagercsp) to export a profile to an EMM.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Use [Zebra Managed Configurations](/oemconfig/mc/#datawedgeconfiguration-1) through [Zebra OEMConfig](/oemconfig).<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. Use [DataWedge Managed Configurations](#managedconfigurations).

**Zebra Managed Configurations** provides a single interface to configure Zebra Android device hardware and software. 
**DataWedge Managed Configurations** are Managed Configurations specific for DataWedge and is a subset of **Zebra Managed Configurations**. 

<!--
1. **[DataWedge Files](#datawedgefiles) -** After DataWedge is set up and configured as desired on a device, settings can be saved to a file and distributed to other devices either manually or by using an EMM (Enterprise Mobility Management) system.
2. **[Managed Configurations](#managedconfigurations) -** Use Android's Managed Configurations framework to remotely configure and deploy DataWedge configurations through an EMM.
3. **StageNow or EMM with [DataWedge Manager CSP](#datawedgemanagercsp) -** Securely mass deploy DataWedge configuration with the underlying MX framework using StageNow or an EMM.
-->
More information on DataWedge Manager CSP and Managed Configurations is provided in the following sections.

**Note:** DataWedge Managed Configurations is based on Android's Managed Configurations architecture introduced in Android 11. Prior to Android 11, these configurations are supported in [DataWedge Manager CSP](/mx/datawedgemgr). Moving forward, Zebra recommends administrators to transition to Managed Configurations, which will replace DataWedge Manager CSP.

<!--
---

## File Distribution

After configuring DataWedge on a device, the settings and profiles can be exported to files, then distributed to other devices either manually or using an EMM. Instructions to deploy DataWedge profile and config files are located in the [Mass Deployment](https://techdocs.zebra.com/datawedge/8-2/guide/settings/#massdeployment) section.
-->

---

## DataWedge Manager CSP

**DataWedge Manager** CSP (Configuration Service Provider) securely enables mass configuration deployment with the underlying [MX](/mx/overview) framework, an XML-based communications platform that serves as a common interface for managing capabilities and behaviors of Zebra Android devices. The CSP is an MX plug-in that can set or query a particular configuration, allowing DataWedge to receive and process XML files. This lets device administrators utilize [StageNow](/stagenow) to create profiles specific to configuring DataWedge and deploy through StageNow or an EMM. Features that can be configured include:

- Control access to intent APIs
- Enable/Disable DataWedge UI
- Enable/Disable configuration file import via intent API
- Enable/Disable auto import of configuration file
- Import configuration file from specified path
- Import NextGen SimulScan Templates
<br>

See [DataWedge Manager](/mx/datawedgemgr/) for more information.
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
<!-- <p>See <a href="../settings#massdeployment">Mass Deployment</a> for more information.</p>
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

1. Point EMM console to DataWedge schema to display data-driven UI.
2. Create _Transaction(s)_ using Managed Configurations described in schema.
3. Push _Transaction(s)_ to device(s) for consumption by DataWedge.


---

### Use Managed Configurations Programmatically

Instructions to use Managed Configurations through your app:
1. **Declare the Managed Configurations schema in your manifest.** To define your app's Managed Configuration options, place the following element within your manifest's `<application>` element:

        <meta-data 
            android:name="android.content.APP_RESTRICTIONS" 
            android:resource="@xml/app_restrictions" />

2. **Define Managed Configurations schema.** Create a file named `app_restrictions.xml` in your app's `res/xml` directory. The structure of that file is described in the reference for [Restrictions Manager](https://developer.android.com/reference/android/content/RestrictionsManager). The file has a single top-level `<restrictions>` element, which contains one `<restriction>` child element for every configuration option in the
app. 
       
        <?xml version="1.0" encoding="utf-8"?>
        
        <restrictions xmlns:android="http://schemas.android.com/apk/res/android">
        <restriction
        android:key="dataWedgeStep"
        android:title="@string/dataWedgeStep_title"
        android:restrictionType="bundle"
        android:description="@string/dataWedgeStep_description" >
        <restriction
        android:key="dataWedgeManualConfiguration"
        android:title="@string/dataWedgeManualConfiguration_title"
        android:restrictionType="choice"
        android:entries="@array/dataWedgeManualConfiguration_entries"
        android:entryValues="@array/dataWedgeManualConfiguration_values"
        android:description="@string/dataWedgeManualConfiguration_description"
        />
        <restriction
        ...
        />
        </restriction>
        </restrictions>
Configure app restrictions using Managed Configurations as described in the schema. See [App Restrictions](#apprestrictions) section that follows, which describes the available options.
3. Other instructions,...
4. **Push a policy that deploys the created Managed Configurations to the device(s).**

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





---

**Related Guides**:

- **[DataWedge Manager CSP](/mx/datawedgemgr) -** describes DataWedge Manager CSP usage
- **[MX Management System](/mx) -** explains MXMS framework
- **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins
- **[Control Access to DataWedge APIs](../programmers-guides/secure-intent-apis) -** explains how to control access to DataWedge intent APIs to prevent unauthorized use
- **[DataWedge profile](../createprofile) -** discusses DataWedge profile architecture
    - [Profile Overview](../overview)
    - [Profiles/Plug-Ins listing](../profiles)
