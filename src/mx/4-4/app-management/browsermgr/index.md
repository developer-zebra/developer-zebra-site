---
title: Browser Manager
description: The Browser Manager allows you to configure browser settings like the default home page.
---

## About BrowserMgr

### Overview

Many Zebra Android devices include a default Web Browser that contains modifications to the stock Android Open Source Project (AOSP) Web Browser source code. The key changes enable configurability of selected settings, and the BrowserMgr is used to configure those settings.

### Main Functionality

* Set the Default Home Page
* Turn the Remember Passwords Option On/Off 
* Turn the Save Form Data Option On/Off 

##Parameter Notes
###Set Default Home Page
Pivotal parm: No

Parm name: SetDefaultHomepage

Description: 

>This parm allows you to set the Default Home Page URI of the Default Android Web Browser. Each time the Default Android Web Browser is opened without an explicitly requested URI, it will use to the URI to the Default Home Page URI. To produce successful results, a full, valid URI to a desired web page should be supplied, such as "www.google.com". This could be used to launch a specific web-based application or to direct users to an internal company web site or portal as a starting point for browsing. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause no change to the current Default Home Page.

Parm value input rules: 

* String with a minimum size of 0 characters and a maximum size of 2000 characters

###Turn On/Off Remember Passwords
Pivotal parm: No

Parm name: SetRememberPasswords

Description: 

>This parm will allow you to turn the Remember Passwords Option of the Default Android Web Browser On or Off.

>Turning the Remember Passwords Option On can make browsing more convenient by eliminating the need for the device user to enter the same password later. Turning the Remember Passwords Option Off is generally more secure, especially on a device that might be shared, since it would prevent an unauthorized user from logging in using a password that was previously entered by an authorized user.

>**Note:** This feature has been depreciated from KitKat onwards. This is available on Jelly Bean devices.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether the Remember Passwords Option is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will turn the Remember Passwords Option On, which will cause the user to be prompted, following password entry, as to whether or not they would like to save the password.</td>
  </tr>
  <tr>
    <td>Turn off</td>
    <td>"2"</td>
	<td>This value will turn the Remember Passwords Option Off, which will prevent any saving of passwords.</td>
  </tr>
</table>
</div>	

###Turn On/Off Save Form Data
Pivotal parm: No

Parm name: SetSaveFormData

Description: 

>This parm will allow you to turn the Save Form Data Option of the Default Android Web Browser On or Off.

>Turning the Save Form Data Option On can make browsing more convenient by eliminating the need for the device user to re-enter the same information into the same form later. Turning the Save Form Data Option Off is generally more secure, especially on a device that might be shared, since it would prevent an unauthorized user viewing or re-entering sensitive information that was previously entered by an authorized user.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to whether or the Save Form Data Option is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will turn the Save Form Data Option On, which will give the device user the option to save form data so it can be automatically re-entered into the same form later.</td>
  </tr>
  <tr>
    <td>Turn off</td>
    <td>"2"</td>
	<td>This value will turn the Save Form Data Option Off, which prevent any saving of form data.</td>
  </tr>
</table>
</div>	


## Queries

### Get All Browser Settings

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type = "BrowserMgr"/>
    </wap-provisioningdoc>


#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
            <parm name="SetRememberPasswords" value="1"/>
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>


### Get Default Homepage Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetDefaultHomepage"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Remember Password Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetRememberPasswords"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetRememberPasswords" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Save Form Data Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetSaveFormData"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

