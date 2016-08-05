---
title: Enterprise Browser Licensing
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
---
##Overview 

Enterprise Browser is free to download and use for evaluation purposes, but deployment requires a license issued by Zebra Technologies for each device being used. Enterprise Browser licensing is per-device; each license permits one device to run an unlimited number of Enterprise Browser applications on that device.This guide explains the steps required to obtain a license to deploy Enterprise Browser for commercial use and and how to apply that license to devices.

###1. Contact a Reseller 
[Visit Zebra's Enterprise Browser Product Page](https://www.zebra.com/us/en/products/software/mobile-computers/mobile-app-utilities/enterprise-browser.html) and select one of the contact methids for Zebra Technologies or a local Zebra Technologies reseller. 

Or select one the following Zebra resources: 

* **[Find a Zebra Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner.html) -** form for submitting an inquiry via the web

* **[How to Select a Channel Partner](https://www.zebra.com/us/en/partners/find-a-zebra-partner/selecting-the-right-channel-partner.html) -** explains the types of partners that engage with Zebra and some of their technologies and specialties

* **[Partner Interaction Center](https://www.zebra.com/us/en/partners/partner-interaction-center.html) -** contact info for Zebra's existing global partner network

* **[Zebra Corporate Numbers and Links](https://www.zebra.com/us/en/about-zebra/contact-zebra.html) -** broken down by global region

* **[Global Marketing Contact Center](https://www.zebra.com/us/en/about-zebra/contact-zebra/marketing-contact-center.html) -** broken down by global region and country

###2. Access Licensing System
* Once a licensing agreement is purchased, an email will be sent with user credentials for the Zebra licensing system. 
* Log in for access to existing license inventory and assignments, new orders additional information.

###3. Assign a License
* **In the Licensing System, click on the Licensing tab** and select the "Assign a License" section to see a list of products for which purchased licenses are available.

* **Select the correct version for the Enterprise Browser runtime** installed on the target devices and click on the "Assign License" link to the right.

* **Enter device details into the licensing form** that appears. This corresponds with the licensing wizard that appears whenever the Enterprise Browser runtime launches.

* **Complete the form and Tap Submit**. 

* **Scan the barcodes that appear**. These contain the new license(s). Some device scanners might require that barcodes be printed first. 

###4. Applying the License
Enterprise Browser licensing is per-device; each license permits one device to run an unlimited number of Enterprise Browser applications on the device. 

**License components**:
* The company name to which the license is issued
* A hexadecimal key

Once a device is licensed, a splash screen displays the licensing company's name each time Enterprise Browser is launched. 

**License types**:
* **Device-specific license -** tied to a specific device. Once assigned, a Device-specific License will fail if an attempt is made to apply the license to a different device.

* **Deployment license -** not tied to a specific device. A Deployment License will work across an entire device deployment. This is most useful for including the license file along with other software in a mass-deployment in a device deployment or when licensing non-Zebra devices.

Both license types can be applied using either of the methods below.  

#### Apply Using the Wizard
To simplify the device-licensing process, all Zebra devices present a licensing wizard when Enterprise Browser launches. The wizard includes a "Cancel" button, which skips the licensing process temporarily to allow Enterprise Browser software and apps to be evaluated and tested. Enterprise Browser functionality is not restricted during evaluation.

**Wizard-based application methods**: 
* **Internet Licensing -** requires the order number associated with an Enterprise Browser license order and an internet connection on the device with direct (non-proxy) contact with the licensing server.

* **Manual Licensing** -** requires manually entering the company name and license number. On Zebra devices, this information also can be scanned from barcodes printed or displayed on a screen.

#### Apply Using a File
After a license is applied, a file can be downloaded from the Licensing System and used to automate device licensing as part of a mass-deployment. The methods for file-based licensing vary between Android and Windows Mobile/CE devices.

**File-based application methods**:
* **For Android via file -** This can be created locally on a computer: 
	1. Create the text file: `C:/enterprise/device/enterprisebrowser`
	2. On the first line of the file, enter the licensing company's name
	3. On the second line, enter the hexadecimal license key
	4. Deploy with the software


* **On Windows Mobile/CE via registry key -** Available from the Licensing Server after a license is issued, a registry key (`.reg`) file containing the company name and license key can be downloaded and used in mass-deployments. 

* **Specify license in `Config.xml` file**: 
The licensing company name and hexadecimal license key also can be specified in the `Config.xml` file and mass-deployed, as below:

	
	:::xml
	<Applications>
		<Application> 
		   <LicenseKeyCompany value="Deployment License Company name"/>
		   <LicenseKey value="Deployment License Number"/>
		   ...
		</Application> 
	</Applications>

	

