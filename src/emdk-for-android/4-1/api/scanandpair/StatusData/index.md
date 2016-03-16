---
title: StatusData
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


This class provides the Status detail of ScanAndPair.

##Constructors

###StatusData



##Public Methods

### getState

**public ScanAndPairStates getState()**

State of the scanAndPair or scanAndUnpair method.

**Returns:**

com.symbol.emdk.scanandpair.StatusData.ScanAndPairStates - 

### getResult

**public ScanAndPairResults getResult()**

When the state is ERROR, this method can be used to find out the
 exact error information.

**Returns:**

com.symbol.emdk.scanandpair.ScanAndPairResults - ScanAndPairResults









