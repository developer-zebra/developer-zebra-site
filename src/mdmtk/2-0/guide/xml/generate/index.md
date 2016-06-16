# XML Generation

## Overall Approach
As discussed in the MX Management System Overview document, the XML format is used to submit requests to the MXMS to apply settings or to retrieve information. It also uses this same format when sending back responses to the client making the request. The XML needs to be structured in a standardized format. In order to help understand this format, we have included a DSD tool with this toolkit to be used to generate sample XML. Typically you would require that some values be changed dynamically on the device by your client application. So you would therefore manipulate the values of specific parameter attributes within your code based on the specific template you have generated. 

A typical approach to XML generation may include:

* Use the DSD tool to generate several XML templates for the features you wish to include in your client
* Include these templates either in your device client or server code depending on your scheme for setting values
* Edit the values inside specific parameter attributes accordingly (typically parameters with text values)
* Submit the XML from your client application that has been enabled for MXMS communication

## DSD Files

DSD Files are XML documents that define the schema a CSP uses to configure settings on a device. Each CSP has a matching DSD document. Each version of the MXMS includes a set of CSPs that include a specific feature set. When generating XML for a CSP, be sure to consider the version of the MXMS that you are working with. The DSDs included with the MDM Toolkit can be found in the `MX` folder. Within the `MX` folder, there will be versions of MXMS along with a `DSD` subfolder. 

![img](images/xml-gen/dsdfiles.jpg)


### DSD-Driven Programmatic XML Generation

A powerful and extensible, but fairly complex, method for creating conformant XML is to drive generation of XML directly from a DSD. This method is most valuable for an MDM Server that is likely to possess the requisite processing resources. This method could be used to support cases where the MDM Server wishes to present its own Data-Driven UI to allow an MDM Administrator to enable the creation of XML that is conformant to a selected DSD. It also could be used to support cases where the MDM Server needs to programmatically generate XML and wants to drive this from the DSD to avoid the need to change the code if a DSD is added or modified. This method requires that the DSD be parsed and interpreted by the MDM Server code. Since the processing of DSDs can be quite complex, use of this technique is not currently supported by the EMDK for MDMs. Future versions of the EMDK for MDMs may support this method by supplying code libraries that can be called directly from MDM Servers.

### XML Templates

A simple and quite useful method for creating conformant XML is to use XML Templates and Parm Value Substitution. An XML Template is XML that is "hand generated" using a tool that can present a Data-Driven UI based on a DSD. An XML Template may address the needs of a particular use case by making specific decisions about the values of specific Pivotal Parms. A single CSP may require many XML Templates if the CSP can be used to satisfy many different use cases. An MDM that wants to use a CSP needs to understand the use cases that CSP can support and which of them are of value to be leveraged by that MDM. For each use case that a CSP supports and that an MDM wishes to leverage, a suitable XML Template will likely need to be generated.

#### XML Templates and Parm Substitution

When an MDM uses XML Templates, a given use case is likely to involve one or more Non-Pivotal Parms. 

A Non-Pivotal Parm is simply a parm where the value selected or entered has no impact on subsequent SGCs or parms. When an XML Template is "hand generated" for a given Use Case using a tool, it will often be necessary to enter "valid" values for one or more Non-Pivotal Parms. Since the XML Template is intended to be generic for a given Use Case, any valid "placeholder" values can be entered for Non-Pivotal Parms. When an XML Template is used to implement its associated Use Case, Parm Value Substitution can be used to replace the "placeholder" values of Non-Pivotal Parms with the actual values required to customize that XML Template to produce the proper result. It is an important aspect of the XML used by MXMS that a given parm can only appear ONCE within a given TLC since this can make it much easier to locate and perform replacement of the values of "placeholder" values of Non-Pivotal Parms within an XML Template.

#### Management Functions and XML Templates

XML Templates and Parm Value Substitution can be quite useful when XML will be created by the MDM Server or the MSP Agent. This can be accomplished via a process such as:

* Determine the list of management functions that need to be supported by the MDM
* Determine which use case of which CSP can be used to implement each identified management function
* Generate an XML Template for each required use case 
* Embed the XML Template for each required use case into the code of the MDM Server or MDM Agent, as appropriate, and associate it logically with the associated management function

To perform a given management function:

1. Obtain the parameter data required to perform that management function.
2. Select the XML Template associated with that management function.
3. Use Parm Value Substitution to customize the XML Template with the parameter data to generate XML to perform the desired management function.
4. If the MDM Server is generating the XML, deliver the generated XML to the MSP Agent for submission to the MXMS. If the MSP Agent is generating the XML, submit the generated XML to the MXMS.



## Using the DSD Tool

The DSD tool, `DsdTool.jar`, is used for generating XML configuration files and templates. It is located in the `DSD To XML` folder of the MDM Toolkit

![img](images/xml-gen/dsdtoolfolder.jpg)

###Prerequisites

* Java JVM Installed
* DsdTool.jar
* DSD Files

## Generating XML

###Creating a Set XML

1. Start the jar file `DsdTool.jar` located in the folder `DSD To XML`. You will be presented with the following menu screen.

	![img](images/xml-gen/mainmenu.PNG)
	
2. Click the "Create Set XML" button if you would like to create a new XML which will be used to set a feature on the device. 
3. You will then be presented with a file select dialog. Select the DSD file for the corresponding CSP you wish to configure and click "Open". For this example we will be using "Clock.dsd". 

	![img](images/xml-gen/dsd-selection.PNG)
	
4. Set the values you wish to configure via MX. For this example we will be setting Date, Time, and Time Zone.  

	![img](images/xml-gen/set-parms.PNG)
	
5. When complete, click the button "Save Set XML". 
6. Select a location to save your XML configuration file on your computer, give it a name, and select "Open".
	
	![img](images/xml-gen/save-screen.PNG)
	
7. You can now open the file with a text or XML editor to view the generated XML. For example:

    	:::xml
		<wap-provisioningdoc>
			<characteristic type="Clock" version="4.2" >
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-5"/>
				<parm name="Date" value="2014-12-03"/>
				<parm name="Time" value="11:00:00"/>
			</characteristic>
		</wap-provisioningdoc>

>**Note:** Notice the relationship with the `parm` attributes and associated `value`. 

###Creating a Query XML
1. Start the jar file "DsdTool.jar" located in the folder "DSD To XML". You will be presented with the following menu screen.

	![img](images/xml-gen/mainmenu.PNG)
	
2. Click the "Create Query XML" button if you would like to create a new XML which will be used to receive the status of a feature on the device. 
3. You will then be presented with a file select dialog. Select the DSD file for the corresponding CSP you wish to query and click "Open". For this example we will be using "SettingsMgr.dsd". 

	![img](images/xml-gen/dsd-selection-query.PNG)
	
4. Select the values you wish to query via MX. For this example we will be querying the ability to invoke an enterprise reset and the ability to turn Wi-Fi on/off.  

	![img](images/xml-gen/set-query.PNG)
	
5. When complete, click the button "Save Query XML". 
6. Select a location to save your XML configuration file on your computer, give it a name, and select "Open".
	
	![img](images/xml-gen/save-screen-query.PNG)
	
7. You can now open the file with a text or XML editor to view the generated XML. For example:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="SettingsMgr">
				<parm-query name="InvokeEnterpriseReset"/>
				<parm-query name="WifiSettingsUI"/>
			</characteristic>
		</wap-provisioningdoc>


### About CSP XML Parms 

In order to make sure your XML is well structured and follows the MXMS definition. It is recommended that the XML be constructed using the DSD tool. The XML structure contains a possible tree of `characteristic` and `parm` attributes along with their values. Each CSP will generate a different XML tree based on how the CSP has grouped features together. By comparing the XML generated to the values you choose within the DSD tool will give you a way to identify the values that you may need to change dynamically. Typically the values that the MDM client will change will be the free form text fields. It is not recommended that other types of characteristics are changed dynamically.

>**Note:** Notice in the example below we are using the DSD tool to generate a Wi-Fi profile to add a new Wi-Fi network. In the tool we put in placeholder text that we can replace with our MDM client code before submitting the XML to the MXMS.

![img](images/xml-gen/xmlgenrelationship.jpg)

###Additional DSD Tool Menu Options

Most likely, you will need to generate multiple sets of XML segments associated with each task that the MDM client wishes to expose. To accomplish this, you will need to load DSD files separately. You can select another DSD at any time by clicking the "Main Menu" button. This will send you back to the main menu screen, where you can choose to generate another XML. 

At any time while configuring the MXMS parm values, you can reset the parm values to their default values by clicking "Reset".

To quit the application, click the "Quit" button. 

![img](images/xml-gen/dsdtool-buttons.PNG)

>**Note:** All of the options described in this section will cause the current settings to be lost. 


## Modifying Values

Once the XML template has been generated, it is very likely your MDM client will want to modify some of the values dynamically. As you get familiar with different CSPs, you will see that when some options are selected, another group of options are presented. Some of the fields of the newly presented options may be required in order for it to be successfully processed. Generating the corresponding XML within your MDM client code would be quite complex and prone to error. Therefore, it is recommended that the DSD tool be used to generate each of these "decision points" to develop a very modular approach to XML submission. Then the values that need to be changed dynamically would simply reside in the text fields that are shown in the DSD tool. This value would then simply be replaced in the XML in the MDM client application.

For example, let's say we needed to install and uninstall a series of applications as well as change the default launcher for the device. We would launch the DSD tool and develop a few Request XML Documents to do the following actions:

* Install Application
* Uninstall Application
* Set Default Launcher

The **Install Application** Request XML Document in this example would be:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Install"/>
			<parm name="APK" value="/storage/sdcard1/placeholder-install.apk"/>
		</characteristic>
	</wap-provisioningdoc>

The MDM client would use this Request XML Document for each application it wishes to install and replace the `APK` parm's value `/storage/sdcard1/placeholder.apk` each time with the 'real' value.

The **Uninstall Application** Request XML Document in this example would be:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Uninstall"/>
			<parm name="Package" value="com.mycompany.placeholder"/>
		</characteristic>
	</wap-provisioningdoc>

Notice that this XML looks very similar to the previous one, but the `Action` parm has changed to `Uninstall`. This in turn, has also changed the parm to `Package` as opposed to `APK` that was used in the install XML above. Instead of trying to develop this XML within the MDM client code, we would just have a corresponding Request XML Document generated by the DSD tool for our 'uninstall' action and then replace the `Package` parm's value from `com.mycompany.placeholder` to the actual package that we wish to remove.

Our **Default launcher** Request XML Document looks very similar to the Uninstall one we just discussed:

	:::xml
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="SetDefaultLauncher"/>
			<parm name="Package" value="com.mycompany.placeholder-launcher"/>
		</characteristic>
	</wap-provisioningdoc>

Notice just the `Action` parm's value has changed.

## Multiple Characteristics

You can combine multiple settings together inside on `wap-provisioningdoc` by including multiple `characteristic` XML that was generated individually. These settings will be applied in the order they are represented in the file. Further handling can be controlled by the [XML Manager](../guide/csp/xml) that can control behavior of error handling.  

For example we will set the date and time as two separate instructions as well as add a new WiFi network:

    :::xml
    <wap-provisioningdoc>
	    <characteristic type="Clock" version="4.2">
		    <parm name="AutoTime" value="false">
			<parm name="Date" value="2013-11-19">
        </characteristic>
        <characteristic type="Clock" version="4.2">
		    <parm name="AutoTime" value="false">
			<parm name="Time" value="10:10:10">
        </characteristic>
		<characteristic type="Wi-Fi" version="2.7" >
			<parm name="UseRegulatory" value="0"/>
			<parm name="UseAdvancedOptions" value="0"/>
			<parm name="NetworkAction" value="Add"/>
			<characteristic type="network-profile">
				<parm name="SSID" value="PLACEHODLER-SSID"/>
				<parm name="SecurityMode" value="2"/>
				<parm name="WPAMode" value="1"/>
				<parm name="Authentication" value="1"/>
				<characteristic type="auth-details">
					<parm name="OptionalServerCertificate" value=""/>
					<parm name="MandatoryClientCertificate" value=""/>
				</characteristic>
				<parm name="UseDHCP" value="1"/>
				<parm name="UseProxy" value="0"/>
			</characteristic>
		</characteristic>

    </wap-provisioningdoc>