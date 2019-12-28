---
title: Dynamic Staging
layout: guide.html
product: StageNow
productversion: '4.1'
---

## Overview

**StageNow 4.1 (and higher) supports Dynamic Staging**, which allows certain compatible data-entry fields in a StageNow Profile to be populated with values from a file when staging barcodes (or `.bin` files) are generated. This permits the Staging Administrator to create a **single Profile that can configure devices differently** depending on variations of how and/or where the devices are to be used. 

**Dynamic Staging simplifies staging based on...** 

* Locale
* Language 
* Input method
* Wi-Fi setting
* User credentials  
* Other customer variations

### Requirements

* StageNow 4.1 (or later) installed
* Knowledge of which fields to populate dynamically and their corresponding variable names
* A `.csv` file containing variable names and matching data for all dynamic fields&#42;

&#42; The `.csv` file is required to *generate* the staging barcodes, but does not have to be present when setting up a Dynamic Profile. After a Profile with one or more dynamic fields is created, StageNow can generate a `.csv` template file that the administrator can populate with the required data. 

### Usage Scenarios

Zebra expects Dynamic Staging to be used in two primary ways: 

* **Export Variables from a Database -** Companies that maintain user data (locale, network settings, etc.) in databases or spreadsheets can export the relevant data to a `.csv` file and use the file to generate staging Profiles accordingly. **When a StageNow Profile is created for pre-existing variables, the <u>variable names entered in the Profile must exactly match those of the database</u>**.

* **Generate Variables "On the Fly" -** For companies that DO NOT maintain user databases, variable names can be made up as the Dynamic Profile is being created. Once the Profile is finished, StageNow can generate a `.csv` template file that contains all the newly created variables that the administrator can then populate with the required data. 

Both is these usage scenarios are fully supported by StageNow and documented below. 

-----

## Export Database Variables

Companies that maintain user data (locale, network settings, etc.) in databases or spreadsheets can export the relevant data to a `.csv` file and use the file to generate staging Profiles accordingly. 


### Notes
* When a StageNow Profile is created for pre-existing variables, **the <u>variable names entered in the Profile must exactly match those of the database</u>**.
* Other stuff
* More other stuffy McNotes stuffs

-----

## Create Variables On-the-fly

If user databases are not maintained or being used, variable names can be created as the Dynamic Profile is being set up. Once the Profile is finished, **Zebra recommends using StageNow to generate a** `.csv` **template** file that contains all the newly created variables exactly as they appear in the profile. The administrator then has only to populate the file with the required data. 

### Notes
* Each row in the `.csv` file represents one set of Dynamic Profile data.
* Other stuff
* More other stuffy McNotes stuffs


WORKFLOW

Use case- Allan: 

In general, the concept is to produce a staging profile that does different things on different devices. 

In its first iteration, dynamic parts are rendered static when barcodes or .bin files are created. 

One staging profile produces multiple barcode sheets or .bin files. 

Workflow: real-world example
IP address

many stores, in diff countries, diff languages, variables specify locales, input method 
ROW- languages

Wi-Fi ESSIDs, pass-phrases, user name, password (etc) locale, WPPSK (usually the same) 

Probably one per store?

STEPS 
1. Decide to have a dynamic profile
2. Determine what has to vary  in each profile
3. Use the "Create a template" feature (Zebra-recommended) 
4. Enter the required variables. it can be done as one master or separate CSVs for different stores.  

ONE FILE
all values, generate once
but has extra barcode sheets that might not be needed every time

One store, 10 department. on profile for each. 
one row per store
each profile references different subsets of the same file
might not have been created from a template

If customer has an access or SQL database with store info. 
output selected sets as csv files
might require referring to the file from within SN 

WORKFLOW 1- without a database of variables

WORKFLOW 2- with a database of variables


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

