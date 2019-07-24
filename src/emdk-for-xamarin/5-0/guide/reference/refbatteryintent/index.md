---
title: Battery Intent API Reference
layout: guide.html
product: EMDK For Xamarin
productversion: '4.0'
---

## Overview
The purpose of this document is to describe the functionality of the Battery Intent API Interface. Its intended audience are Android developers. 
 
## Requirements
Knowledge of Android programming and familiarity with the Android intent mechanism are assumed. 
 
* Android Versions:	
	* 4.4 and later.
* Devices:	
	* o	Symbol Android devices, such as the MC40, MC92, MC18, TC75, TC70 and TC55
 
 
## Features
On Symbol devices, extra battery information can be retrieved using the standard Android Battery Intent. Setting up to receive this information is the same as with consumer Android devices. However, the data that is returned to your application includes some extra information provided by power precision and power precision plus batteries:

<table>
<tr>
<th>Battery Type</th><th>Devices</th>
</tr>
<tr>
<td>Power Precision</td><td>MC40, MC92, TC55, TC75, TC70</td>
</tr>
</tr>
<tr>
<td>Power Precision Plus</td><td>MC18, TC8000</td>
</tr>
</tr>
<tr>
<td>Backup Battery</td><td>TC8000, MC92, MC40</td>
</tr>
</table>



##Battery Extras:
<table>
	<tr>
		<th>#</th>
		<th>Data Definitions</th>
		<th>Constant name</th>
		<th>Data type </th>
		<th>Format</th>
		<th>Power Precision Plus</th>
		<th>Power Precision</th>
		<th>Backup Battery</th>
	</tr>
	<tr>
		<td>1</td>
		<td>Battery Manufacture Date</td>
		<td>mfd</td>
		<td>String</td>
		<td>yyyy-mm-dd</td>
		<td>X</td>
		<td>X</td>
		<td> </td>
	</tr>
	<tr>
		<td>2</td>
		<td>Part Number for Battery</td>
		<td>Prefix is ’21-” or “82-”.  Sample: 21-xxxxx-01 Rev. X</td>
		<td>partnumber</td>
		<td>String</td>
		<td>Prefix-5 or 6 #s-suffix revision</td>
		<td>X</td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>3</td>
		<td>Battery Serial Number 
		This value shall match the value showing on the physical label of the battery.</td>
		<td>serialnumber</td>
		<td>String</td>
		<td>Alpha followed by 4 numbers </td>
		<td>X</td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>4</td>
		<td>Backup battery voltage</td>
		<td>bkvoltage</td>
		<td>Int</td>
		<td>Units=mV</td>
		<td> </td>
		<td> </td>
		<td>X</td>
	</tr>
	<tr>
		<td>5</td>
		<td>Rated Capacity of the Battery</td>
		<td>ratedcapacity</td>
		<td>Int</td>
		<td>Units=mAh</td>
		<td>X</td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>6</td>
		<td>Decommission status of the battery</td>
		<td>battery_decommission</td>
		<td>Int</td>
		<td>0: Battery good
		1: Decommissioned Battery
		2: Status Unknown</td>
		<td>X</td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>7</td>
		<td>Cumulative charge using Zebra charging equipment only </td>
		<td>base_cumulative_charge</td>
		<td>Int</td>
		<td>Units=mAh</td>
		<td>X</td>
		<td> </td>
		<td> </td>	
	</tr>
	<tr>
		<td>8</td>
		<td>No of charge cycles </td>
		<td>battery_usage_numb</td>
		<td>Int</td>
		<td> </td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>9</td>
		<td>Cumulative charge using ALL (Zebra or Non-Zebra) charging equipment</td>
		<td>total_cumulative_charge</td>
		<td>Int</td>
		<td>Units=mAh</td>
		<td> </td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>10</td>
		<td>Number of seconds passed since the battery was placed in a charger/terminal for the first time
		<td>seconds_since_first_use</td>
		<td>Int</td>
		<td>Units=secs</td>
		<td> </td>
		<td>X</td>
		<td> </td>
	</tr>
	<tr>
		<td>11</td>
		<td>Maximum amount of charge that could be pulled from the battery under the present discharge conditions if the battery is fully charged</td>
		<td>present_capacity</td>
		<td>Int</td>
		<td>Units=mAh</td>
		<td> </td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>12</td>
		<td>Battery health indicator in percentage (0 to 100).</td>
		<td>health_percentage</td>
		<td>Int</td>
		<td>Units=%</td>
		<td> </td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>13</td>
		<td>Remaining time until the device becomes unusable under current discharge conditions. If the returned value is 65535, then time_to_empty is considered to be unknown</td> 
		<td>time_to_empty </td>
		<td>Int</td>
		<td>Units=</td>
		<td> </td>
		<td>X</td>
		<td> </td>	
	</tr>
	<tr>
		<td>14</td>
		<td>Time until battery is fully charged under present charging conditions. If the returned value is 65535, then time_to_empty is considered to be unknown</td>
		<td>time_to_full</td>
		<td>Int</td>
		<td>Units=mins</td>
		<td> </td>
		<td>X</td>
		<td> </td>
	</tr>
	<tr>
		<td>15</td>
		<td>Amount of usable charge remaining in the battery under current discharge conditions </td>
		<td>present_charge</td>
		<td>Int</td>
		<td>Units=mAh</td>
		<td> </td>
		<td>X</td>
		<td> </td>
	</tr>
</table>
 
## Programming Interface
 
### Function Prototype
	
	:::java
	mIntent_Receiver = new Intent_Receiver();  
	mIntentFilter = new IntentFilter();  
	mIntentFilter.addAction(Intent.ACTION_BATTERY_CHANGED);  
	registerReceiver(mIntent_Receiver,mIntentFilter); 

### Parameters

Please reference the Android Battery Manager [API](http://developer.android.com/reference/android/os/BatteryManager.html). 

### Return Values

In addition to the battery information Android returns by default, which can be found [here](http://developer.android.com/reference/android/os/BatteryManager.html), Symbol devices return the following additional parameters: 

* **bkvoltage**
* **mfd**
* **serialnumber** 
* **partnumber**
* **ratedcapacity**
* **cycle**
* **battery_decommission** 
* **battery_usage_numb**   


#### Additional MC40 Extras 
* **base_cumulative_charge**  

#### Additional MC18 Extras
* **health_percentage** 
* **present_capacity** 
* **base_cumulative_charge**        
* **total_cumulative_charge**       
* **present_charge**      
* **time_to_empty**        
* **time_to_full**     
* **seconds_since_first_use **      




#### Example

	:::java
	public void onReceive(Context context, Intent intent) {      
		if (BATTERY_STATE_CHANGED_INTENT.equals(intent.getAction())) {          

			int bkvoltage = intent.getExtras().getInt("bkvoltage");  
			String mfd = intent.getExtras().getString("mfd");  
			String serialnumber = intent.getExtras().getString("serialnumber");  
			String partnumber = intent.getExtras().getString("partnumber");   
			int ratedcapacity = intent.getExtras().getInt("ratedcapacity");  
			int cycle = intent.getExtras().getInt("cycle");  
		     
		}  
	} 














