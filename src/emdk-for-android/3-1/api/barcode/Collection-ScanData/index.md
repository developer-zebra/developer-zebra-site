---
title: Collection.ScanData
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

The ScanData object gives information on the barcode data scanned. 

**Example Usage:**

	:::java
	ArrayList<ScanData> scanDataList = scanDataCollection.getScanData();
     for(ScanData scanData :scanDataList) { 
      String data = scanData.getData(); 
      LABEL_TYPE labelType = scanData.getLabelType(); 
      String timeStamp = scanData.getTimeStamp(); 
     }

**Version:**

3.0

##Public Methods
###getData()
Returns the scanned barcode data.

**Returns:**

java.lang.String - Returns barcode data

###getLabelType()
Returns label type of the scanned data.

**Returns:**

com.symbol.emdk.barcode.[ScanDataCollection.LabelType](ScanDataCollection#ScanDataCollection.LabelType) - Returns LabelType

###getTimeStamp()
Returns the time at which the barcode was scanned. The time format is "yyyy-MM-dd HH:mm:ss.nnnnnnnnn"

**Returns:**

java.lang.String - Returns time stamp string









