---
title: CradleInfo
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


This class holds cradle information.

##Public Methods

### getSerialNumber

**public String getSerialNumber()**

Returns the serial number of the cradle. The empty string returned if not available.

**Returns:**

java.lang.String - Returns serial number of the Cradle (null if not available)

### getPartNumber

**public String getPartNumber()**

Returns the part number of the cradle. The empty string returned if not available.

**Returns:**

java.lang.String - Returns part number of the Cradle (null if not available)

### getDateOfManufacture

**public String getDateOfManufacture()**

Returns Date of manufacture in the format MM/DD/YY. i.e. 4/10/2014 means April 10, 2014. 
 The empty string returned if not available.

**Returns:**

java.lang.String - Returns date of manufacture of the Cradle (null if not available)

### getHardwareID

**public String getHardwareID()**

Returns the hardware ID of the cradle.

**Returns:**

java.lang.String - Returns hardware id of the Cradle (null if not available)

### getFirmwareVersion

**public String getFirmwareVersion()**

Return the firmware version of cradle.

**Returns:**

java.lang.String - Returns firmware version of the Cradle (null if not available)









