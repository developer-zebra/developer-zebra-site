---
title: BatteryData
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


This class holds the API status and battery level.

##Public Methods

### getValue

**public int getValue()**

Returns the battery level retrieved by the battery related API. 
 "-1" will be returned in case of failure to get the battery level.
 	The battery value/level returned by PD40-100 device refers to:
  0 - Low power and battery level is almost 0%. The commands can't be executed with the level, charge the payment device.
  1 - The battery icon display 1 grid. The battery level in percentage between 1-25.
  2 - The battery icon display 1 grid. The battery level in percentage between 25-50.
  3 - The battery icon display 1 grid. The battery level in percentage between 50-75.
  4 - The battery icon display 1 grid. The battery level in percentage between 75-100.
  5 - The battery is charging state, the indicating lamp is red.
  6 - The battery is fully charged (100%), the indicating lamp is green.

**Returns:**

int









