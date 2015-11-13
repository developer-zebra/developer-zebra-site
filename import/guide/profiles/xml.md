# XML Manager Profile Feature Reference

## Overview

The XML Manager feature allows you to specify various XML processing modes to be used.  

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Specify the XML processing mode to use
 * Execute all to end
 * Execute until error, then stop
 * Try until error, then Skip to Catch
 * Catch error, Execute remainder


## XML Processing Mode
Specify the XML processing mode to use

* Execute all to end
* Execute until error, then stop
* Try until error, then Skip to Catch
* Catch error, Execute remainder

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=XmlMgr&os=All&embed=true"></iframe> 


