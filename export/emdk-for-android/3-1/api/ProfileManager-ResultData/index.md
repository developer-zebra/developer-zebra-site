---
title: ProfileManager.ResultData
---
#ProfileManager.ResultData

This class provides the Status detail of processProfileAsync method.

##Public Methods

### getResult

**public EMDKResults getResult()**

Class for holding status of processProfileAsync method.

**Returns:**

com.symbol.emdk.EMDKResults

### getProfileName

**public String getProfileName()**

Returns the profile name sent in processProfileAsync method.

**Returns:**

java.lang.String

### getProfileFlag

**public PROFILE_FLAG getProfileFlag()**

Returns the profile flag sent in processProfileAsync method.

**Returns:**

com.symbol.emdk.ProfileManager.PROFILE_FLAG

### getProfileString

**public String getProfileString()**

Returns the profile data as string requested in the processProfileAsync method.

**Returns:**

java.lang.String

### getProfileDocument

**public Document getProfileDocument()**

Returns the profile data as DOM document requested in the processProfileAsync method.

**Returns:**

org.w3c.dom.Document

### getProfileConfig

**public ProfileConfig getProfileConfig()**

Returns the profile data as ProfileConfig object.

**Returns:**

com.symbol.emdk.ProfileConfig

