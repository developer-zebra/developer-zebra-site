---
title: Module META Tag
productversion: '2.0'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---


<b>
The Module META Tag is an action tag used to manage the applications running on your device.
</b>

##Syntax

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Module (META Tag) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="AppInstance" content="NewInstance:123"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="AppInstance-NewInstance" contents="123"&gt;</p></td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">Module JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'Module'</b> will exist on the current page and can be used to interact directly with the Module.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke Module methods via JavaScript use the following syntax: module.method();
<P />e.g. <b>Module</b>.newInstance();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set Module parameters via JavaScript use the following syntax: module.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>Module</b>.iD = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set Module return events via JavaScript use the following syntax: module.event = JavaScript Function;
<P />e.g. <b>Module</b>.enumApplications = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: module.setEMML("[Your EMML Tags]");
<P />
e.g. <b>Module</b>.setEMML("iD:<i>value</i>;enumApplications:url('JavaScript:doFunction(%json)');newInstance");							
</td></tr></table>


##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>newInstance</b></td><td class="clsSyntaxCells clsOddRow">Creates a new running application.  Before creating a new application instance you must first set (at a minimum) a unique identifier for it, via AppInstance-ID.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>closeCurrent</b></td><td class="clsSyntaxCells clsEvenRow">Closes the current application.  The application being shown after this application is closed will depend on a number of factors including if there are other applications running and the last visible application.</td><td class="clsSyntaxCells clsEvenRow">
N/A
</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>enumerate</b></td><td class="clsSyntaxCells clsOddRow">Cause an EnumApplications event to be fired detailing the applications running on the device, see the EnumApplications return values for more information.</td><td class="clsSyntaxCells clsOddRow">
N/A
</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>

##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>iD:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive integer.</td><td class="clsSyntaxCells clsOddRow">
                    ID which will be assigned to the next newly created application via AppInstance-NewInstance
                </td><td class="clsSyntaxCells clsOddRow">No Default parameter defined, failing to specify an ID will cause AppInstance-NewInstance to have no effect.</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>location:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">URL</td><td class="clsSyntaxCells clsEvenRow">
                    The next newly created application (via AppInstance-NewInstance) will have its start page set at the specified URL
                </td><td class="clsSyntaxCells clsEvenRow">The Internet Explorer home page.</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>icon:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Path to Icon Resource</td><td class="clsSyntaxCells clsOddRow">
                    Specifies the location of the icon (.gif / .jpg) to be used for the next newly created application via AppInstance-NewInstance.  This icon will be used in the application switcher screen and the application launch screen.
                </td><td class="clsSyntaxCells clsOddRow">A default icon.</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>close:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">ID of the application to Close.</td><td class="clsSyntaxCells clsEvenRow">
                    Closes the application with the specified ID.  No action will be taken if there is no application with the specified ID.
                </td><td class="clsSyntaxCells clsEvenRow">No Default parameter defined, failing to specify an ID will have no effect.</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>switch:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">One of the following: ID, if you know the ID of the application to Switch to;
                HOME, which switches to the application launcher; LOCK, which locks the device and UNLOCK which unlocks the device if called from the Lock application.</td><td class="clsSyntaxCells clsOddRow">
                    Switches to the application with the specified ID or pre-defined application.  No action will be taken if there is no application with the specified ID.
                </td><td class="clsSyntaxCells clsOddRow">No Default parameter defined, failing to specify an Application will have no effect.</td></tr></table>
<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a JavaScript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or JavaScript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###enumApplications

<table class="facelift" style="width:100%" border="1" padding="5px"> <col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>applicationArray</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">2 dimensional array of data relating to each application running on the device.  See the Remarks section for the format of this array.</td></tr></table>





##Remarks


###EnumApplications Array Format
The ApplicationArray attribute returned from EnumApplications will enumerate each Application running on the device in a 2D array, associating each application's name with its attributes as follows: ApplicationName, ApplicationID, LocationOfIcon e.g. "LockScreen", -1, "LockScreen.gif" "AppSwitcher", -2, "AppSwitcher.gif" "AppLauncher", -3, "AppLauncher.gif" "PickingApp", 1, "file://\icons\pickApp.gif" "MedicalApp", 2, "file://\icons\medicalApp.gif"




##Requirements

<table class="facelift" style="width:100%" border="1" padding="5px"> <tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">N/A or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">Windows CE, Windows Mobile, Windows Mobile SE</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">This tag is page specific and is actioned immediately.</td></tr></table>


##HTML/JavaScript Examples

The following example outputs the running applications:

	<META HTTP-Equiv="AppInstance" Content="EnumApplications:url('JavaScript:fnEnumApplications(%s);')">
	<DIV ID="message"></DIV>
	<script>
	    var bPickingAppRunning = False;
	    function fnEnumApplications(applicationArray)
	    {
	        var applicationInfo = "Running Applications: " + applicationArray.length + "<BR>ID  --  Name<BR>" 
	        for (i=0; i < applicationArray.length; i++)
	        {
	            applicationInfo = applicationInfo + applicationArray[i][0] + ' -- ' + applicationArray[i][1] + ' -- ' + applicationArray[i][2] + '<BR>';
	            if (applicationArray[i][0] == "PickingApp")
	                bPickingAppRunning = True;
	        }
	        message.innerHTML = applicationInfo;
	    }
	    function fnInvoke()
	    {
	        appInstance.enumerate();
	    }
	</script>
	<a href='JavaScript:fnInvoke()'>Display Running Applications</a>
	
The following example builds on the last to create a new application (a picking system), setting the default page and bringing it to the foreground.

	<script>
	    function launchPickingApp()
	    {
	        if (!bPickingAppRunning)
	        {
	            appInstance.id = 1;
	            appInstance.location = url('file://\PickSystem\index.html');
	            appInstance.icon = url('file://\icons\pickApp.gif');
	            appInstance.newInstance();
	        }
	        appInstance.switch = 1;
	    }
	</script>
	
The following example closes the current application and brings up the application switcher:

	<META HTTP-Equiv="AppInstance" Content="CloseCurrent">
	<META HTTP-Equiv="AppSwitcher" Content="Visibility:Visible">
	
The following example brings up the lock screen if no key is pressed for 30 seconds

	<HTML>
	   <HEAD>
	      <META HTTP-Equiv="Timer-Interval" Content="30000">
	      <META HTTP-Equiv="Timer-Event" Content="javascript:fnTimer('%s')">
	      <META HTTP-Equiv="OnAllKeysDispatch" Content="resetTimer()">
	   </HEAD>
	   <BODY">
	        <SCRIPT LANGUAGE="javascript">
	           function fnTimer(time)
	           {
	              Generic.InvokeMetaFunction('AppInstance', 'Switch:LOCK');
	           }
	           function resetTimer()
	           {
	              Generic.InvokeMetaFunction('Timer', 'KillTimer');
	              Generic.InvokeMetaFunction('Timer-Interval', '30000');
	           }
	        </SCRIPT>
	    </BODY>
	</HTML>
	
	 
	





