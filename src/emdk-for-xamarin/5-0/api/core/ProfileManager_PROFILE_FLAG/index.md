---
title: ProfileManager.PROFILE_FLAG
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
All the possible actions for ProfileManager.processProfile(String, PROFILE_FLAG, Document) and ProfileManager.processProfile(String, PROFILE_FLAG, String[])is enumerated here.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG

###Values

**public static Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG[]

##Properties

###CheckCompatibility
Validates the characteristic feature version in the existing profile if extraData is null, otherwise extra data profiles characteristic feature version. This validates only the profile version of the each feature (characteristic node version in the profile data), but not the individual fields. Calling process profile with this flag internally gets version of the different DSDs, the time required depends on numbers of characteristic features in a profile.

**Type** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG
###Get
Retrieves a profile from the EMDK internal repository.

**Type** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG
###Reset
Resets the modified profile data available on the application cache to default profile created during the application development. This flag will not set/modify any profile to any component on the device without calling the process profile with SET flag. After resetting, calling process profile with GET flag returns the reseted profile.

**Type** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG
###Set
Creates a profile with given XML data. If the profile is already created, this activates the profile if it is not bound to any activity.

**Type** - Symbol.XamarinEMDK.ProfileManager+PROFILE_FLAG
