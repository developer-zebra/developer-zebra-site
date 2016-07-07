---
title: SimulScanData
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The SimulScanData object gives scanning result
 
 

**Example Usage:**
	
	:::java	
	public void onSimulScanData(SimulScanData simulscanData) {
	Date timestamp = new Date(simulscanData.getTimestamp());
	List<SimulScanElement> simulscanDataElements = simulscanData.getElements();
	List<SimulScanRegion> simulscanDataRegions = new ArrayList<SimulScanRegion>();
	for (SimulScanElement curElement : simulscanDataElements)
	{
	if (curElement instanceof SimulScanRegion) {
	Log.d(TAG, ((SimulScanRegion) curElement).getName());
	} else if (curElement instanceof SimulScanGroup) {
	List<SimulScanRegion> regionsInGroup = ((SimulScanGroup)curElement).getRegions();
	for (SimulScanRegion curRegion : regionsInGroup){
	Log.d(TAG, "Group:"+ ((SimulScanGroup)curElement).getName() +"Region:"+ ((SimulScanRegion) curRegion).getName());
	}
	}
	}


##Constructors

###SimulScanData



##Public interfaces

java.io.Serializable

##Public Methods

### getTimestamp

**public String getTimestamp()**

Returns the time at which the data was captured.
 The time format is "YYYY-MM-DD HH:MM:SS.nnnnnnnnn"

**Returns:**

java.lang.String

### getTemplate

**public SimulScanTemplate getTemplate()**

Returns the scanned template.

**Returns:**

com.symbol.emdk.simulscan.SimulScanTemplate - Returns SimulScanTemplate template object

### getElements

**public List getElements()**

Returns a list of scanned elements.

**Returns:**

java.util.List - Returns a List object of SimulScanElement objects





