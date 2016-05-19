---
title: ProfileConfig.DataCapture.DataDelivery.Intent
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


Holds Intent configuration settings.
 
 

**Example Usage:**
	
	:::java	
	Intent intent = profileConfig.Intent;


##Public Fields

###output_enabled

Gets and Sets intent ENABLED_STATE configuration enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE).
 
 

**Example Usage:**
	
	:::java	
	intent.output_enabled = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###action

Gets and Sets the intent action.
 
 

**Example Usage:**
	
	:::java	
	String action = intent.action;


**Type:**

java.lang.String

###category

Gets and Sets the intent category.
 
 

**Example Usage:**
	
	:::java	
	String category = intent.category;


**Type:**

java.lang.String

###delivery

Gets and Sets intent INTENT_DELIVERY configuration enum [ ProfileConfig.INTENT_DELIVERY](../ProfileConfig-INTENT_DELIVERY).
 
 

**Example Usage:**
	
	:::java	
	intent.delivery = INTENT_DELIVERY.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.INTENT_DELIVERY

###basicDataFormatting

Gets and Sets intent INTENT_DELIVERY configuration object [ ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting](../ProfileConfig-DataCapture-DataDelivery-BasicDataFormatting).
 
 

**Example Usage:**
	
	:::java	
	intent.BasicDataFormatting.bdf_enabled = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting

