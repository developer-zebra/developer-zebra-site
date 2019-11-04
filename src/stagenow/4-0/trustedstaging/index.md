---
title: Trusted Staging
layout: guide.html
product: StageNow
productversion: '4.0'
---

## Overview

**StageNow 4.0 (and higher) supports Trusted Staging**, which can protect devices with MX 9.2 and higher from unauthorized staging. Trusted devices are created from a security certificate. Once a certificate is used to create a trusted device, the device can be staged only from barcodes created using the same security certificate.

#### Requirements: 

* StageNow 4.0 (or higher) installed
* Zebra device(s) with MX 9.2 or higher
* Self-signed security certificate

#### Process Snapshot:

1. Create a Trusted Certificate (`.pfx`) file 
2. Import the Trusted Certificate into StageNow
3. Deploy the Trusted Certificate to device(s)<br> 
 This activates Trusted Staging on those devices<br>
 `NOTE:` Such devices no longer accept Untrusted Profiles
4. Create Trusted Profile(s) for use on Trusted Device(s)

-----

