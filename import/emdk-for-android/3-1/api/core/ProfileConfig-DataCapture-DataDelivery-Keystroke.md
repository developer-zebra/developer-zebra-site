#ProfileConfig.DataCapture.DataDelivery.Keystroke

Holds Keystroke configuration settings.
 
 

**Example Usage:**
	
	:::java	
	Keystroke keystroke = profileConfig.dataCapture.dataDelivery.keystroke;


##Public Fields

###ime_output_enabled

Gets and Sets keystroke ENABLED_STATE configuration enum  ProfileConfig.ENABLED_STATE.
 
 

**Example Usage:**
	
	:::java	
	keystroke.ime_output_enabled = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###keystroke_action_char

Gets and Sets keystroke ACTION_KEY_CHAR configuration enum  ProfileConfig.ACTION_KEY_CHAR.
 
 

**Example Usage:**
	
	:::java	
	keystroke.keystroke_action_char = ACTION_KEY_CHAR.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ACTION_KEY_CHAR

###basicDataFormatting

Gets and Sets keystroke basic data formatting configuration object  ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting.
 
 

**Example Usage:**
	
	:::java	
	keystroke.BasicDataFormatting.bdf_enabled = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting

