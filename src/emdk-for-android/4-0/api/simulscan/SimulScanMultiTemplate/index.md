---
title: SimulScanMultiTemplate
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


The SimulScanMultiTemplate class contains an entire parsed XML template file. It may consist of many individual Template.

##Constructors

###SimulScanMultiTemplate

Create SimulScanMultiTemplate object from XML string

**Parameters:**

simulScanManager



**Type:** com.symbol.emdk.simulscan.SimulScanManager

xmlString

XML string

**Type:** java.lang.String

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs while creating SimulScanMultiTemplate

###SimulScanMultiTemplate

Create SimulScanMultiTemplate object from URI to template XML

**Parameters:**

simulScanManager



**Type:** com.symbol.emdk.simulscan.SimulScanManager

fileUri

URI to the template to be loaded

**Type:** Uri

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs while creating SimulScanMultiTemplate

##Public Methods

### getTemplateName

**public String getTemplateName()**

Returns the friendly name of the MultiTemplate object

**Returns:**

java.lang.String - String









