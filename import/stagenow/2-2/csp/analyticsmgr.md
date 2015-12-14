# Analytics

## About Analytics

### Overview

The Analytics Manager setting type configures the device data to collect, and indicates where to store the collected data.

### Main Functionality

* Enable/Disable Analytics - the user could 'Opt In' for data collection or 'Opt Out' of data collection.
* Set Transport Method for the data collected. Options are Cloud which uploads data to the Cloud, and File which persists data in the device.
* Configure data sources
* Configure data collection levels for data sources

* Enable/Disable WWAN, WLAN, Battery, System Manager, and GPS metrics. 

## Parameter Notes

### Group Action
Select the Configuration Action to perform on groups.

* Configure Levels for Multiple Groups  - Select a collection level for each data group, e.g., set the CPU Usages data group to High.

* Configure Details for a Single Group - Select an interval and the metrics to collect for a group, e.g., set the System Information group to collect every 5 minutes, and to include the memory load.

### Transport Method
Select where collected data logs are stored:

* Local storage on the device

* Cloud-based analytics provider


### Data Sources

* WWAN Performance 

  * WWAN Signal Quality
  * Outgoing Call Attempts
  * WWAN Radio On Time
  * Incoming Call Duration
  * Successful Incoming Calls
  * Incoming Call Attempts
  * WWAN Error Rate
  * Custom

* WLAN Performance ◦WLAN Receive Packet Delta

  * WLAN Signal Quality
  * WLAN Transmit Package Delta
  * WLAN Receive Byte Delta
  * WLAN Transmit Byte Delta
  * WLAN Radio On Time
  * Custom

* Battery and CPU Status ◦Battery Level Delta

  * Battery Level
  * AC Charge Count
  * Display On Time
  * AC Charge Time
  * AC Charge Status
  * Custom

* System Information ◦Available (free) Storage Memory

  * Available (free) Physical Memory
  * Memory Load (% used)
  * Total (installed) Storage Memory
  * Total (installed) Physical Memory
  * Custom

* GPS Information ◦Current Altitude (in meters) from Sea Level

  * GPS Device State
  * GPS On Time Delta
  * Current Course Heading (in degrees)
  * Current Location (lat/Long)
  * Position Dilution of Precision
  * Custom

* CPU Usage ◦Process CPU Time Delta
  * Device CPU Time Delta
  * Custom


## Data Collection Levels

* None
* Low
* Medium
* High


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AnalyticsMgr&embed=true"></iframe>
