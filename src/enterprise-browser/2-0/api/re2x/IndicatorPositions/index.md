---
title: Meaning of Indicator Layout
productversion: '1.8'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

The Battery and Signal Meta tags use the 'Layout' parameters to specify the layout of the indicator icon.  The examples below illustrate all possible values of layout parameter.

For more information on how to use the <a href="../battery">Battery</a> indicator and the <a href="../signal">Signal</a> indicator please refer to the appropriate help file section.

##Layout:Left
The following example shows the battery indicator:
	function doBatteryLayoutLeft()
	{
		battery.layout = left';
		battery.color = '#000000';
		battery.visibility = 'visible';
	}
<img src="/images/indicators/battery_left.PNG">

The following example shows the wireless signal indicator:
	function doSignalLayoutLeft()
	{
		signal.layout = 'left';
		signal.color = '#FF0000';
		signal.visibility = 'visible';
	}
<img src="/images/indicators/signal_left.PNG">

##Layout:Right
The following example shows the battery indicator:
	function doBatteryLayoutRight()
	{
		battery.layout = 'right';
		battery.color = '#000000';
		battery.visibility = 'visible';
	}
<img src="/images/indicators/battery_right.PNG">

The following example shows the wireless signal indicator:
	function doSignalLayoutRight()
	{
		signal.layout = 'right';
		signal.color = '#FF0000';
		signal.visibility = 'visible';
	}
<img src="/images/indicators/signal_right.PNG">

##Layout:Up
The following example shows the battery indicator:
	function doBatteryLayoutTop()
	{
		battery.layout = 'up';
		battery.color = '#000000';
		battery.visibility = 'visible';
	}
<img src="/images/indicators/battery_top.PNG">

The following example shows the wireless signal indicator:
	function doSignalLayoutTop()
	{
		signal.layout = 'up';
		signal.color = '#FF0000';
		signal.visibility = 'visible';
	}
<img src="/images/indicators/signal_top.PNG">
	
##Layout:Down
The following example shows the battery indicator:
	function doBatteryLayoutBottom()
	{
		battery.layout = 'down';
		battery.color = '#000000';
		battery.visibility = 'visible';
	}
<img src="/images/indicators/battery_bottom.PNG">

The following example shows the wireless signal indicator:
	function doSignalLayoutBottom()
	{
		signal.layout = 'down';
		signal.color = '#FF0000';
		signal.visibility = 'visible';
	}
<img src="/images/indicators/signal_bottom.PNG">
	



