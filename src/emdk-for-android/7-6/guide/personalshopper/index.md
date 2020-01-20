---
title: "Personal Shopper Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---

##Introduction
The EMDK for Android provides developers with a set of tools to easily create Personal shopper applications for use with the MC18 enterprise mobility device


>NOTE: Personal Shopper feature type added in this release is only applicable for the MC18 personal shopper Android KK device. At present the smart cradle interfaces and Diagnostic interface are supported for this feature.


##Examples

The following code snippets illustrate the typical usage of the Personal Shopper feature type to use the smart cradle interfaces and Diagnostic Interface on MC18 device

**Get access to EMDKManager class to access different features supported**

    :::java
    EMDKManager emdkManager = EMDKManager.getEMDKManager(getApplicationContext(), this);



**Create an instance of the personal shopper feature class**

    :::java
    PersonalShopper  personalShopper = (PersonalShopper)this.emdkManager.getInstance(FEATURE_TYPE.PERSONALSHOPPER);

    if(personalShopper == null)
    {
    	//This feature is not supported on the device in use.
    }

**For smart cradle interactions, use the ‘cradle’ member variable of the personalShopper object**

    :::java
    //enable the cradle first before starting to use.
    try {
           personalShopper.cradle.enable();
    } catch (CradleException e) {
           e.printStackTrace();
    }


##CradleInfo

**To fetch the cradle information like firmware version, part number, serial number, HW id etc**

    :::java
    try{
           CradleInfo cradleInfo =  personalShopper.cradle.getCradleInfo();
    }catch(CradleException e){
           e.printStackTrace();
    }

##Unlock
**To unlock the cradle for a specific duration with LED blinks**

>NOTE: To unlock without flashing, keep the onDuration as 0.

    :::java
    try {
           CradleLedFlashInfo ledFlashInfo = new CradleLedFlashInfo(onDuration, offDuration, smoothEnable);
           CradleResults result = personalShopper.cradle.unlock(unlockDuration, ledFlashInfo);

           if(result == CradleResults.SUCCESS){
                 // Successfully unlocked the device
           }
           else{
    	   // Failure in unlocking
           }
    }catch (CradleException e) {
           e.printStackTrace();
    }

##Flash LEDs
**To flash the cradle leds**

>NOTE: To stop the flashing before the flashCount, call the flashLED again with onDuration as 0

    :::java
    try {
           CradleLedFlashInfo ledFlashInfo = new CradleLedFlashInfo(onDuration, offDuration, smoothEnable);
           CradleResults result = personalShopper.cradle.flashLed(flashCount, ledFlashInfo);

           if(result == CradleResults.SUCCESS){
                 // Successfully flashed the leds
           }
           else{
    	   // Failure in flashing LEDs
           }
    }catch (CradleException e) {
           e.printStackTrace();
    }


##Cradle Config
**To fetch the charge rate**

    :::java
    try {
           boolean fastChargeState = personalShopper.cradle.config.getFastChargingState();

           if(fastChargeState == true){
                 // Fast charge enabled
           }
           else{
    	   // Fast charge disabled
           }
    }catch (CradleException e) {
           e.printStackTrace();
    }


**To set the charge rate**

    :::java
    try {
           boolean fastChargeEnable = true; //true to enable, false to disable.
           personalShopper.cradle.config.setFastChargingState(fastChargeEnable);
    }catch (CradleException e) {
           e.printStackTrace();
    }


**To fetch cradle location information – row,wall,column**

    :::java
    try {
           CradleLocation location = personalShopper.cradle.config.getLocation();

           if(location!=null){
                 // location.row, location.column, location.wall successfully read.
           }
           else{
    	   // failure in reading location information.
           }
    }catch (CradleException e) {
           e.printStackTrace();
    }


**To set the location information**

    :::java
    try {
           CradleLocation location = personalShopper.cradle.config.new CradleLocation(wall,row,col);
           personalShopper.cradle.config.setLocation(location);

    }catch (CradleException e) {
           e.printStackTrace();
    }



**Disable the cradle after the use so that other applications can use the cradle methods**

    :::java
    try {
    personalShopper.cradle.disable();
    } catch (CradleException e) {
    	e.printStackTrace();
    }


##Diagnostic
**To get Diagnostic interface, use the ‘diagnostic’ member variable of the personalShopper object**

To get Diagnostic Parameters like Battery state of health, State of charge , Time to Empty , Manufacturing Date, Required Charging time , Charging elapsed time ,Days since battery replaced and time since last reboot.

    :::java
    try {
    DiagnosticParamId diagnosticparamID = new DiagnosticParamId();
    DiagnosticData diagnosticData = personalShopper.diagnostic.getDiagnosticData(diagnosticparamID.ALL,
    new  DiagnosticConfig(AvgCurrent,shoppingtrip));

    }catch (DiagnosticException e) {
           e.printStackTrace();
    }


















