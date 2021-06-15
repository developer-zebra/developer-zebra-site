---
title: Managed Configurations
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## Overview

Managed Configurations are specifications developed by Google and the Android community to remotely configure installed applications, apply application restrictions and deploy these configurations through an EMM (Enterprise Mobility Management). This enables DataWedge administrators to remotely specify settings and enforce policies, such as:
* **Securely mass deploy** the same data capture configurations for DataWedge across all devices.
* **Lock the DataWedge configuration** to prevent unexpected changes.
* **Restrict access to DataWedge APIs** by limiting access only to approved applications.

A schema defines the DataWedge features available for consumption by the EMM, providing the information necessary to present to the EMM's corresponding data-driven UI. This mechanism integrates DataWedge remote configuration within the EMM for seamless operation and allows Zebra to release a new schema as soon as new features are available for use. DataWedge and the Zebra schema are available from the Google Play Store and must be used together to leverage DataWedge with its managed configurations to perform data capture.

<!-- 
DataWedge Managed Configurations allow administrators to remotely manage Zebra Android mobile devices by configuring settings, adding restrictions and enforcing policies, such as:

- Mass deployment of the same DataWedge configurations across all devices in an organization
- Prevent user access of DataWedge UI to avoid unexpected DataWedge configuration changes
- Restrict application use of the following types of [DataWedge intent APIs](../api):
  - Configuration
  - Notification
  - Query
  - Runtime
-->
DataWedge Managed Configuration is based on Android's Managed Configuration architecture introduced in Android 11. Prior to Android 11, these configurations are supported in [DataWedge Manager CSP](/mx/datawedgemgr). Moving forward, Zebra recommends administrators to transition to Managed Configuration, which will replace DataWedge Manager CSP.

---

## Requirements

Requirements for use of Managed Configurations with DataWedge:
* Zebra device with Android 11 or higher
* DataWedge schema, included with built-in DataWedge app on Zebra Android devices
* An EMM for device deployment

---

## Use Managed Configurations

This section provides general instructions to use Managed Configurations through an EMM. The EMM typically uses the Managed Configuration schema to generate a UI console for administrators to remotely configure DataWedge. The UI layout may vary depending on the EMM. Through this UI, the administrator can select the desired Managed Configurations. 

General instructions to use Managed Configurations:
1. **Declare the Managed Configuration in the your manifest.** To define your app's Managed Configuration options, place the following element within your manifest's `<application>` element:

        <meta-data 
            android:name="android.content.APP_RESTRICTIONS" 
            android:resource="@xml/app_restrictions" />

2. **Define Managed Configuration file.** Create a file named `app_restrictions.xml` in your app's `res/xml` directory. The structure of that file is described in the reference for [Restrictions Manager](https://developer.android.com/reference/android/content/RestrictionsManager). The file has a single top-level `<restrictions>` element, which contains one `<restriction>` child element for every configuration option the
app has.
This automatically retrieves the corresponding schema for the app and makes the app available for deployment to the device(s) through the EMM.
2. **Configure app restrictions using Managed Configurations** as described in the schema. See [App Restrictions](#apprestrictions) section that follows, which describes the available options.
3. **Push a policy that deploys the created Managed Configurations to the device(s).**

---

## App Restrictions

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
## App Restriction Options

The following sections provide the options available for each of the configuration bundles.

### Configuration Security

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

### Intent API Access Control

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

### Configuration Settings

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

Related Guides:

- [DataWedge intent APIs](../api)
- [DataWedge profile](../createprofile)
- [Profile Overview](../overview)
- [Profiles/Plug-Ins listing](../profiles)
