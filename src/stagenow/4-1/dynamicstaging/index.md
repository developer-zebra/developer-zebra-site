---
title: Dynamic Staging
layout: guide.html
product: StageNow
productversion: '4.1'
---

## Overview

**StageNow 4.1 (and higher) supports Dynamic Staging**, which allows some data-entry fields in a profile to be populated with values from a file. This permits the creation of 

FROM POLARION:

Background:

Currently, StageNow supports Barcode and NFC Staging Modalities, but all Staging Profiles are inherently Static, which means that all values must be entered at the time the Staging Profile is created and remain fixed unless/until the Staging Profile is manually edited.
If an Administrator wishes to produce multiple variations of a Staging Profile, he must manually create a copy of the Staging Profile and edit it with the required changes and must repeat that process for each variation required.
This is error-prone and time-consuming and creates a mass of Staging Profiles to manage.
There is a strong request from the field to be able to perform Staging using multiple variations of a single Staging Profile in a more efficient manner.

Assumptions:

This may be the first increment of a larger Dynamic Staging Feature set and hence should be defined and implemented as generically possible so that it can serve as the base for future expansion.
Customers would prefer a simple and standard way to provide Data Sets to be used when generating variations for a Staging Profile (e.g. specify a .CSV file).
Customers may desire a way to manage and organize multiple Data Sets for use with the same or different Staging Profiles (e.g. a library of imported .CSV files).
Customers will likely need a way to organize and manage the multiple Barcode Sheets Sets or collections of NFC tag binaries generated via Dynamic Staging (e.g. name generated files based on variant values).
Customers may desire a way to visually differentiate Static and Dynamic Staging Profiles.
Customers may desire a way to visually differentiate Barcode Sheets Sets or NFC Instructions Sheets when generating variations for a Staging Profile.
Customers may desire a way to customize the Staging Operator instructions produced on the Barcode Sheets or NFC Instruction Sheets when generating variations for a Staging Profile.

Expectations:

The Staging Administrator can optionally choose to include a Variable anywhere the wish within any text-entry field presented within a Staging Profile.
Each Staging Profile can have as many or as few variables as the Staging Administrator wishes to use and can name variables any way he wishes.
A single text-entry field could contain mixtures of static data and variables in any combination.
Any Staging Profile containing at least one variable is a Dynamic Staging Profile and all other Staging Profiles are Static.
When the Staging Administrator or Staging Operator generates using a Dynamic Staging Profile, he will be required to supply a Data Set providing at least one or more values for every variable.
The Staging Administrator will be able to easily manage Dynamic Staging Profiles, Data Sets, and the Barcode Sheets, NFC Binary Files, Audio Files, etc. generated from them.


-----

OLD

can protect devices with MX 9.2 and higher from unauthorized staging. Trusted devices are created from a security certificate. Once a certificate is used to create a trusted device, the device can be staged only from barcodes created using the same security certificate.

#### Requirements: 

* StageNow 4.1 (or higher) installed
* `.csv` file containing variable names and values

OLD OLD

#### Process Snapshot:

1. Create a Trusted Certificate `.pfx` file 
2. Import the Trusted Certificate into StageNow
3. Deploy the Trusted Certificate to device(s) to make them Trusted Device(s)<br> 
 `NOTES:`<br>
 • This activates Trusted Staging on target device(s)<br>
 • Such device(s) no longer accept standard ("untrusted") Profiles
4. Create Trusted Profile(s) for use on Trusted Device(s)

-----

## Create a Trusted Device


### I. Import Certificate

> ***This process requires StageNow to be running in admin mode***. 

1. From the StageNow Home screen, **click the "Trusted Certificates" button**: 
 <img alt="image" style="height:350px" src="SN4_01.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>


#### Also see: [How to create a self-signed certificate](https://techdocs.zebra.com/enterprise-browser/latest/guide/certificates/)

-----

### II. Deploy Certificate to Device(s)

1. From the Home screen, **click the Create new Profile button**: 
  <img alt="image" style="height:450px" src="SN4_deploy01.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>


> `IMPORTANT:` All devices that scan barcodes generated this way become "Trusted Devices" and can no longer be staged with standard "untrusted" staging Profiles; <u>they can be staged ONLY with Trusted Profiles created using the same certificate as was deployed to the device(s)</u>. 

-----

### III. Create Trusted Staging Profile

**Trusted Profiles are the same as standard ("untrusted") Profiles <u>with one important exception</u>**: The final step adds a "Trusted" designation and requires selection of a security certificate. 

#### To Create a Trusted Profile:

1. From the Home screen, **click the "Create new Profile" button**. Before selecting a Wizard, **be sure that MX 9.2 (or higher) is selected from the drop-down menu**: 
  <img alt="image" style="height:450px" src="SN4_trustedProfile00.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>


**Trusted Profiles are identified in Profile lists by a green lock icon** as in the sample image below: 
  <img alt="image" style="height:450px" src="SN4_trustedProfile04.png"/>
  _Click image to enlarge; ESC to exit_.<br>
<br>

#### `IMPORTANT:` Trusted Devices can be staged ONLY with a Trusted Profile that contains the same certificate as was deployed to those devices. 

#### See the [Staging Profiles Guide](../stagingprofiles) for further details. 

-----
