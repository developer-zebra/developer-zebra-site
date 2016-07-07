---
title: SimulScanTemplate
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


The Template class represents the XML template passed into the SimulScanEngine. 
 All of the recognizable tags and attributes are placed into this class.

##Public interfaces

java.io.Serializable

##Public Methods

### getElements

**public List getElements()**

Returns a list of SimulScanTemplateElements that are contained in this template

**Returns:**

java.util.List - a list of SimulScanTemplateElement objects 
 			Returns true if reader is enabled.

### getHeight

**public int getHeight()**

Returns the height of the template

**Returns:**

int - int 
 			The template's height

### getWidth

**public int getWidth()**

Returns the width of the template

**Returns:**

int - int 
 			The template's width

### getId

**public int getId()**

Returns the number of the template

**Returns:**

int - int 
 			The template's number

### getName

**public String getName()**

Returns the friendly name of the template

**Returns:**

java.lang.String - String 
 			The template's name

