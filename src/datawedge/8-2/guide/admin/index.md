---
title: DataWedge Remote Administration
layout: guide.html
product: DataWedge
productversion: "8.2"
---

## Overview

**DataWedge Manager** CSP (Configuration Service Provider) securely enables mass configuration deployment with the underlying [MX](/mx/overview) framework, an XML-based communications platform that serves as a common interface for managing capabilities and behaviors of Zebra Android devices. The CSP is an MX plug-in that can set or query a particular configuration, allowing DataWedge to receive and process XML files. This lets device administrators utilize [StageNow](/stagenow) to create profiles specific to configuring DataWedge. Features that can be configured include:

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

## Control Access to Intent APIs

Controls whether DataWedge APIs are accessible from all apps or only whitelisted apps. Affected DataWedge APIs are categorized to four groups: Configuration, Notification, Query, and Runtime. Refer to the [programmers guide](../programmers-guides/secure-intent-apis) for more details.<br>
**Note:** Supported only on devices with DataWedge 8.1 or later.<br>

### Configuration APIs

Intent APIs related to retrieving, setting or removing DataWedge configuration (e.g. SetConfig, GetConfig, etc.). <br>
**Parm Name:** Configuration APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

### Notification APIs

Intent APIs related to retrieving status for the DataWedge scanner, profile or configuration (e.g. Scanner Status, Configuration Change, etc.).<br>
**Parm Name:** Notification APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

### Query APIs

Intent APIs related to retrieving DataWedge information or enumerating scanners (e.g. Enumerate Scanners, Get Active Profile, etc.). <br>
**Parm Name:** Query APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

### Runtime APIs

Intent APIs related to DataWedge runtime configuration changes (e.g. Switch To Profile, Switch Scanner Params, etc.). <br>
**Parm Name:** Runtime APIs<br>
**Supported values:** 1 – Uncontrolled, 2 – Controlled, 86 – Unchanged.

---

## Enable/Disable DataWedge UI

Controls whether the DataWedge user interface is accessible to the device user, determining the ability to change DataWedge configuration settings on the device. If disabled, DWDemo profile settings can still be modified for demonstration purposes.

---

## Enable/Disable configuration file import via intent API

Controls whether configuration files can be imported by apps via DataWedge [Import Config](../api/importconfig) intent API.

---

## Enable/Disable auto import of configuration file

Controls whether DataWedge configuration files are [auto-imported](../settings#autoimport) when located in the `/enterprise/device/settings/datawedge/autoimport` folder on the device.

---

## Import configuration file from specified path

Specifies the full path and file name to import the configuration file (`datawedge.db`) or profile (by default, `dwprofile_<profilename>.db`). Can be used instead of the default Auto-Import (`/enterprise/device/settings/datawedge/autoimport`) folder. The file name must adhere to the existing DataWedge file naming convention:

- Config file is always named `datawedge.db`
- Profile naming convention: `dwprofile_<profilename>.db`<br>

---

## Import NextGen SimulScan templates

Import NextGen SimulScan Templates for document capture by using [StageNow](/stagenow). After importing the template, it populates [Document Selection](../../input/barcode/#documentselectiondocumentcapturedocumentcapture) under NextGen SimulScan Configuration. Contact your local Zebra Sales Representative for assistance in creating the template. Refer to [NextGen SimulScan Template](/mx/datawedgemgr/#simulscan-template-action) in DataWedge Manager CSP for more information.

Steps to deploy and import a Document Capture/NextGen SimulScan template to a device:
1. Generate the template as an .XML file with [Template Builder](../templatebuilder).
2. Copy the .XML file to the device (e.g. /sdcard).
3. On a host system, open StageNow to create a profile.<br>
  a. Click on **Create New Profile**.<br>
  b. Select **MX 10.0** or higher and select **Xpert Mode**. Click **Create**.<br>
  d. Enter a profile name. Click **Start**.<br>
  e. Select **DataWedgeMgr** and click on **+**. DataWedgeMgr is added to the list on the right. Click **Add**. <br>
  f. For **NextGen SimulScan template**, select **Add/Replace a template**. For **Template file**, enter the file path where the template is located (e.g. /sdcard/template.xml). Click **Continue**.<br>
  g. Click **Complete Profile**.<br>
4. Select the desired deployment method:
    * **StageNow** - Generate the barcode. Open StageNow on the device and scan the barcode.
    * **EMM** - Click on **Export for MDM** to export the .XML file to deploy via EMM.  

Video demonstrating how to deploy and import a Document Capture/NextGen SimulScan template to a device using StageNow:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yrtEHadshGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <p>See <a href="../settings#massdeployment">Mass Deployment</a> for more information.</p>
-->

---

**Related Guides**:

- **[DataWedge Manager CSP](/mx/datawedgemgr) -** describes DataWedge Manager CSP usage
- **[MX Management System](/mx) -** explains MXMS framework
- **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles and Plug-ins
- **[Control Access to DataWedge APIs](../programmers-guides/secure-intent-apis) -** explains how to control access to DataWedge intent APIs to prevent unauthorized use
