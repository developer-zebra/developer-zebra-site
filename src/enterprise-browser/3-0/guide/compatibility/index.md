---
title: API Compatibility Matrix
productversion: '3.0'
product: Enterprise Browser
layout: ebmatrix.html
---

#### How to Customize the Matrix
**To create a list of APIs available to an app**, select the **API Type** from the drop-down menu. Optionally, select the operating system and/or the rendering engine currently running on the target or that is being considered as a migration target to see the APIs that support those options. 

**API Type** displays APIs of the selected platform<br>
**Operating System** displays APIs supported by the selected OS<br>
**Engines** displays rendering engines supported by the APIs and OS currently selected 

-----

<div>
	<B>API Type:</B>
	<select id="sel_api_type" onChange="listAPI();">
		<option value="all">All</option>
		<option value="ebapi">Enterprise Browser APIs</option>
		<option value="pb3xapi">PocketBrowser 3.x APIs</option>
		<option value="re2xapi">RhoElements 2.x APIs</option>
	</select>
	<B>Operating System:</B>
	<select id="sel_platform_type" onChange="listAPI();">
		<option value="all">All</option>
		<option value="plat_android">Android</option>
		<option value="plat_wmce">Windows Mobile/CE</option>
	</select>
	<B>Engine:</B>
	<select id="sel_engine_type" onChange="listAPI();">
		<option value="all">All</option>
		<option value="eng_android">Android Stock Webkit</option>
		<option value="eng_ie_wmce">Internet Explorer</option>
		<option value="eng_webkit_wmce">Windows Mobile/CE Webkit</option>
	</select>
	<br><br><table id='tableapilist'></table>
</div>
<style>
		table, th, td {
			border: 1px solid black;
		    border-collapse: collapse;
		}
		th {
		    height: 70px;
		    background-color: #eeeeee;
		    color: black;
		    text-align: center;
		}
		td {
			height: 60px;
			text-align: center;
		}
		table{
			width: 50%
		}
		tr:hover {
			background-color: #eeeeee
		}
</style>
<script type="text/javascript">
		var matrix=[
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/re2x/apd'>APD	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Application'>Application	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/audiocapture'>AudioCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/barcode'>Barcode	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/battery'>Battery	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/camera'>Camera	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/cardreader'>CardReader	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Database'>Database	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/device'>Device	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Ekb'>EnterpriseKeyboard	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/EzNFC'>EzNFC	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/File'>File	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Intent'>Intent	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/keycapture'>KeyCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/keystate'>KeyState	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Log'>Log	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/mediaplayer'>MediaPlayer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/NativeMenubar'>NativeMenubar	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/NativeTabbar'>NativeTabbar	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/NativeToolbar'>NativeToolbar	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Network'>Network	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Notification'>Notification	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/printing'>Printer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/printingzebra'>PrinterZebra	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/remotenotification'>RemoteNotification	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/screenorientation'>ScreenOrientation	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/sensor'>Sensor	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/settingsButton'>SettingsButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/signalindicators'>SignalIndicators	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/signature'>Signature	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Sip'>SIP	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/smartcradle'>SmartCradle	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/system'>System	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/Timer'>Timer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"EnterpriseBrowser API",	"apiname":"<a target='_blank' href='../../api/webview'>Webview	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/addressbar'>AddressBar	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/airbeam'>Airbeam	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/alarm'>Alarm	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/apd'>APD	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/application'>Application	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/AudioCapture'>AudioCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/backbutton'>BackButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/backlight'>Backlight	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/battery'>Battery	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/bottomcommandarea'>BottomCommandArea	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/ButtonBar'>ButtonBar	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/cardreader'>CardReader	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/comm'>Comm	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/toc_decoders'>Decoders	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/device'>Device	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/EMMLProfile'>EMML Profile	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/FileTransfer'>FileTransfer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/forwardbutton'>ForwardButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/generic'>Generic	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/Gesture'>Gesture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/gobutton'>GoButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/History'>History	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/HomeButton'>HomeButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/hourglass'>Hourglass	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/imager'>Imager	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/keycapture'>KeyCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/Keylight'>KeyLight	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/keystate'>KeyState	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/mediaPlayer'>MediaPlayer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/memory'>Memory	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/minimizebutton'>MinimizeButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/network'>Network	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/notification'>Notification	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/odax'>ODAX	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/poweron'>PowerOn	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/push'>Push	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/quitbutton'>Quit Button	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/RawSensor'>RawSensor	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/reboot'>Reboot	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/registry'>Registry	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/reloadbutton'>Reload Button	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/rfid'>RFID	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/RSM'>RSM	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/scanner'>Scanner	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/screenorientation'>ScreenOrientation	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/signal'>Signal	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/SignatureCapture'>SignatureCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/sip'>SIP	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/sipbutton'>SIPButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/stopbutton'>StopButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/stylus'>Stylus	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/systemTime'>SystemTime	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/timer'>Timer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/topcommandarea'>TopCommandArea	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/VideoCapture'>VideoCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/volume'>Volume	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/wake'>Wake	</a>","platform_wmce":"",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/zoom'>Zoom	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"RhoElements 2.X API",	"apiname":"<a target='_blank' href='../../api/re2x/zoomTextButton'>ZoomTextButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/addressbar'>AddressBar	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/toc_airbeam'>Airbeam Smart	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/alarm'>Alarm	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/toc_apd'>APD	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/application'>Application	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/backbutton'>BackButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/backlight'>Backlight	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/battery'>Battery	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/bottomcommandarea'>BottomCommandArea	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/cardreader'>CardReader	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/comm'>Comm	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/decoders'>Decoders	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/device'>Device	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/emmlprofile'>EMMLProfile	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/filetransfer'>FileTransfer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/forwardbutton'>ForwardButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/toc_generic'>Generic	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/gesture'>Gesture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/gobutton'>GoButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/historyback'>HistoryBack	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/homebutton'>HomeButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/hourglass'>Hourglass	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/imager'>Imager	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/keycapture'>KeyCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/keylight'>KeyLight	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/keystate'>KeyState	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/toc_microflash'>Microflash ActiveX Object	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/minimizebutton'>MinimizeButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/notification'>Notification	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/toc_odax'>ODAX	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/poweron'>PowerOn	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/push'>Push	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/quitbutton'>QuitButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/reboot'>Reboot	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/registry'>Registry	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/reloadbutton'>ReloadButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/rsm'>RSM	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/scanner'>Scanner	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/screenorientation'>ScreenOrientation	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/signal'>Signal	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/signaturecapture'>SignatureCapture	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/sip'>SIP	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/sipbutton'>SIPButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/sntp'>SNTP	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/stopbutton'>StopButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/stylus'>Stylus	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/textsize'>TextSize	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/timer'>Timer	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/topcommandarea'>TopCommandArea	</a>","platform_wmce":"WM/CE",	"platform_android":"",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":""	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/volume'>Volume	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	},
			{	"apitype":"PocketBrowser 3.X API",	"apiname":"<a target='_blank' href='../../api/pb3x/zoomtextbutton'>ZoomTextButton	</a>","platform_wmce":"WM/CE",	"platform_android":"Android",	"engine_ie_wmce":"Internet Explorer",	"engine_webkit_wmce":"WM/CE Webkit",	"engine_android":"Android Stock Webkit"	}
		];
		var select_apitype="all";
		var select_platform_type="all";
		var select_engine_type="all";

	    function getPlatformData(index){
	    	var returnData = "";
	    	var is_platform_wmce = false;
	    	if(matrix[index].platform_wmce != ""){
	    		returnData = matrix[index].platform_wmce;
	    		is_platform_wmce = true;
	    	}
	    		
	    	if(matrix[index].platform_android != ""){
	    		if(is_platform_wmce == true)
	    			returnData += "<br>" + matrix[index].platform_android;
	    		else
	    			returnData += matrix[index].platform_android;
	    	}
	    	return returnData;	    		
	    }

	    function getEngineData(index){
	    	var returnData = "";
	    	var is_engine_ie_wmce = false;
	    	var is_engine_webkit_wmce = false;

	    	if(matrix[index].engine_ie_wmce != ""){
	    		returnData = matrix[index].engine_ie_wmce;
	    		is_engine_ie_wmce = true;
	    	}
	    		
	    	if(matrix[index].engine_webkit_wmce != ""){
	    		if(is_engine_ie_wmce == true)
	    			returnData += "<br>" + matrix[index].engine_webkit_wmce;
	    		else
	    			returnData += matrix[index].engine_webkit_wmce;
	    		is_engine_webkit_wmce = true;
	    	}

	    	if(matrix[index].engine_android != ""){
	    		if((is_engine_ie_wmce == true) || (is_engine_webkit_wmce == true))
	    			returnData += "<br>" + matrix[index].engine_android;
	    		else
	    			returnData += matrix[index].engine_android;
	    	}

	    	return returnData;
	    }

	    function getAPIType(argument){
	    	if(argument == "all")
	    		return "all";
	    	else if(argument == "ebapi")
	    		return "EnterpriseBrowser API";
	    	else if(argument == "re2xapi")
	    		return "RhoElements 2.X API";
	    	else if(argument == "pb3xapi")
	    		return "PocketBrowser 3.X API";
	    }

	    function getPlatformType(argument){
	    	if(argument == "all")
	    		return "all";
	    	else if(argument == "plat_wmce")
	    		return "WM/CE";
	    	else if(argument == "plat_android")
	    		return "Android";
	    }

	    function getEngineType(argument){
	    	if(argument == "all")
	    		return "all";
	    	else if(argument == "eng_ie_wmce")
	    		return "Internet Explorer";
	    	else if(argument == "eng_webkit_wmce")
	    		return "WM/CE Webkit";
	    	else if(argument == "eng_android")
	    		return "Android Stock Webkit";
	    }

	    function listAPI(){
	    	var opt_api_type_value = document.getElementById('sel_api_type').value;
	    	var opt_platform_type_value = document.getElementById('sel_platform_type').value;
	    	var opt_engine_type_value = document.getElementById('sel_engine_type').value;

	    	select_apitype = getAPIType(opt_api_type_value);
			select_platform_type = getPlatformType(opt_platform_type_value);
			select_engine_type = getEngineType(opt_engine_type_value);

			if( (select_apitype=="all") && (select_platform_type=="all") && (select_engine_type=="all") ){
	    		var tableData = document.getElementById('tableapilist');
	    		tableData.innerHTML = "<tr><th>API Type</th><th>API Name</th><th>Operating System(s)</th><th>Supported Web Views</th></tr>";
	    		for(var index = 0 ; index < matrix.length ; index++){
	    			var platformData = getPlatformData(index);
	    			var engineData = getEngineData(index);
	    			tableData.innerHTML += "<tr><td>" + matrix[index].apitype + "</td><td>" + matrix[index].apiname + "</td><td>" + platformData + "</td><td>" + engineData + "</td></tr>";
	    		}
	    	}
	    	else
	    	{	    	
		    	var tableData = document.getElementById('tableapilist');
	    		tableData.innerHTML = "<tr><th>API Type</th><th>API Name</th><th>Operating System(s)</th><th>Supported Web Views</th></tr>";

	    		for(var index = 0 ; index < matrix.length ; index++){
	    			var check_apitype = (((select_apitype == matrix[index].apitype) || (select_apitype=="all")) ? true : false);
	    			var check_platform_type = (((((select_platform_type == matrix[index].platform_wmce) || (select_platform_type == matrix[index].platform_android)) ? true : false ) || (select_platform_type=="all") ) ? true : false);
	    			var check_engine_type = (((select_engine_type == matrix[index].engine_ie_wmce) || (select_engine_type == matrix[index].engine_webkit_wmce) || (select_engine_type == matrix[index].engine_android) || (select_engine_type=="all")) ? true : false);
	    			
	    			if((check_apitype==true) && (check_platform_type==true) && (check_engine_type==true)){
		    			var platformData = getPlatformData(index);
		    			var engineData = getEngineData(index);
		    			tableData.innerHTML += "<tr><td>" + matrix[index].apitype + "</td><td>" + matrix[index].apiname + "</td><td>" + platformData + "</td><td>" + engineData + "</td></tr>";
		    		}
	    		}
	    	}

	    }

	    function listAllAPI()
	    {
	    	if( (select_apitype=="all") && (select_platform_type=="all") && (select_engine_type=="all") ){
	    		var tableData = document.getElementById('tableapilist');
	    		tableData.innerHTML = "<tr><th>API Type</th><th>API Name</th><th>Operating System(s)</th><th>Supported Web Views</th></tr>";
	    		for(var index = 0 ; index < matrix.length ; index++){
	    			var platformData = getPlatformData(index);
	    			var engineData = getEngineData(index);
	    			tableData.innerHTML += "<tr><td>" + matrix[index].apitype + "</td><td>" + matrix[index].apiname + "</td><td>" + platformData + "</td><td>" + engineData + "</td></tr>";
	    		}
	    	}
	    }
        window.onload = function(){listAllAPI();};
</script>
