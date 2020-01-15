---
title: Camera
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
---
## Overview
The Camera API provides access to the device camera(s). Use this API to give users the ability to take a photo via one of the cameras and return it to the application. Photos can either be stored on the device as an image file or returned as a DataURI object for storage and/or display. Optionally, image files also can be transfered to online storage using the Network API.

## Enabling the API

There are two methods of enabling the Camera API:

* Include all 'ebapi' modules
* Include only the required API modules

Both methods are explained below. 

Either way, the included files will be found in: 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`,
a directory on the computer that contains the Enterprise Browser installation.

### Include all API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include the JavaScript modules file in the app. For instance, to include the modules file in the app's `index.html`, copy the file to the same directory as the `index.html` and add the following line to the HEAD section of the `index.html` file:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> This will define the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required will need to have the required .js file(s) included in this fashion.

### Include only the required modules
To include individual APIs, first include a reference to the `ebapi.js` in the HTML, and then the additional required API file(s). For instance, to use the Camera API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.camera.js"></script>

> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.camera.js`, which is the Camera API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.



##Methods



### capture()
Capture the image and save it to a file.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the image was successfully captured. The returned string will be one of 'ok' or 'error'. </p></li><li>imageUri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI, If the specified 'outputFormat' was 'imagePath' then this field will have the image path on the device. User can use image path to transfer image over http. </p></li><li>imageHeight : <span class='text-info'>INTEGER</span><p>The actual height of the image that was captured, this may differ from the requested height as the Camera will only support a finite resolutions. </p></li><li>imageWidth : <span class='text-info'>INTEGER</span><p>The actual width of the image that was captured, this may differ from the requested width as the Camera will only support a finite resolutions. </p></li><li>imageFormat : <span class='text-info'>STRING</span><p>The format in which the image was captured, either 'png' or 'jpg'. </p></li><li>message : <span class='text-info'>STRING</span><p>If the returned status is 'error' then this field will contain more information on the error. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.capture()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.capture()</code> 


### choosePicture(<span class="text-info">HASH</span> propertyMap)
Choose a picture from the album.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure an image, for example to specify the image size or color mode. In WM/CE,Android devices user can only specify the outputFormat in the property bag. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#properties'>property section</a> for applicable properties. Not providing properties to this function will use the Camera's default properties, or those previously set on the Camera instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the image was successfully chosen from the gallery. The returned string will be one of 'ok', 'cancel' or 'error'. </p></li><li>imageUri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI, If the specified 'outputFormat' was 'imagePath' then this field will have the image path on the device. User can use image path to transfer image over http. Platforms:
Android, WM, CE </p></li><li>imageHeight : <span class='text-info'>INTEGER</span><p>The height of the image. </p></li><li>imageWidth : <span class='text-info'>INTEGER</span><p>The width of the image. </p></li><li>imageFormat : <span class='text-info'>STRING</span><p>The format of the image, either 'png' or 'jpg'. </p></li><li>message : <span class='text-info'>STRING</span><p>If the returned status is 'error' then this field will contain more information on the error. To maintain backward compatibility WM and Android platforms provides message for cancel status as well. </p></li><li>image_uri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI, If the specified 'outputFormat' was 'imagePath' then this field will have the image path on the device. User can use image path to transfer image over http. Platforms:
Android, WM, CE </p></li><li>image_height : <span class='text-info'>INTEGER</span><p>It is recommended to use imageHeight in preference to this parameter. </p></li><li>image_width : <span class='text-info'>INTEGER</span><p>It is recommended to use imageWidth in preference to this parameter. </p></li><li>image_format : <span class='text-info'>STRING</span><p>It is recommended to use imageFormat in preference to this parameter. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.choosePicture(<span class="text-info">HASH</span> propertyMap)</code> 


### copyImageToDeviceGallery(<span class="text-info">STRING</span> pathToImage)
Save an image to the device gallery.

####Parameters
<ul><li>pathToImage : <span class='text-info'>STRING</span><p>The real path to the image that is to be saved in the device gallery. You need to use the RhoApplication method `expandDatabaseBlobFilePath` to have the real path, such as `Rho::RhoApplication::expandDatabaseBlobFilePath(img.image_uri)`. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.copyImageToDeviceGallery(<span class="text-info">STRING</span> pathToImage)</code> 


### enumerate()
Returns the cameras present on your device, allowing you to access your device's front or back camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li>cameraArray : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* ARRAY : Array of objects.<ul><li>cameraArray : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.enumerate()</code> 


### getAllProperties()
This method will return all of object/value pairs for the propertyNames of the API class.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of all available properties<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getAllProperties()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getAllProperties()</code> 


### getCameraByType(<span class="text-info">STRING</span> cameraType)
Returns the camera of requested type if that camera exist - else return nil.

####Parameters
<ul><li>cameraType : <span class='text-info'>STRING</span><p>CameraType: 'back' or 'front' in the case of Android and 'color' or 'imager' in the case of WM, CE devices </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Camera with requested type or nil if not requested type does not exist. Refer example section for more details.

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.getCameraByType(<span class="text-info">STRING</span> cameraType)</code> 


### getDefault()
This method will return an object that represents the default instance of the API Class. For example Camera.getDefault will return a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.getDefault()</code> 


### getProperties(<span class="text-info">ARRAY</span> arrayofNames)
This method will return a set of object/value pairs for the list of the propertyName that is passed in. The propertyNames must be a valid property of the API class.

####Parameters
<ul><li>arrayofNames : <span class='text-info'>ARRAY</span><p>List of properties I want to know about </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of properties I want to know about<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code> 


### getProperty(<span class="text-info">STRING</span> propertyName)
This method will return the value of the propertyName that is passed in. The propertyName must be a valid property of the API class.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The property to return info about. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING : The property to return info about.

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperty(<span class="text-info">STRING</span> propertyName)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getProperty(<span class="text-info">STRING</span> propertyName)</code> 


### hidePreview()
Hides the preview opened by using showPreview.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.hidePreview()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.hidePreview()</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Camera</span> defaultInstance)
This method allows you to set the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.setDefault(<span class="text-info">SELF_INSTANCE: EB.Camera</span> defaultInstance)</code> 


### setProperties(<span class="text-info">HASH</span> propertyMap)
This method will set the values of a list of properties for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span><p>Map of properties I want to set </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperties(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.setProperties(<span class="text-info">HASH</span> propertyMap)</code> 


### setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)
This method will set the value of a property for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The one property name that I want to set </p></li><li>propertyValue : <span class='text-info'>STRING</span><p>The one property value that I want to set </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code> 


### showPreview(<span class="text-info">HASH</span> propertyMap)
Shows the preview in user configurable viewer window.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure the camera. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#properties'>property section</a> for applicable properties. Not providing properties to this function will use the Camera's default properties, or those previously set on the Camera instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.showPreview(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.showPreview(<span class="text-info">HASH</span> propertyMap)</code> 


### takePicture(<span class="text-info">HASH</span> propertyMap)
Start the camera application to take a picture. The user can capture the displayed image by interacting with the resident camera app. In Windows, this method always shows the preview in full screen and user can use the native button to capture the image. Refer examples mentioned below when outputFormat is set to [_**image**_](#dispalyinganimageusingimageuri) or [_**dataUri**_](#dispalyinganimageusingdatauri). 
> Note: To display an image, it is recommended that you use the full path to the image instead of a relative path. To do this, you can use the `expandDatabaseBlobFilePath` method of the [Application module](../application) as such:

##### JavaScript
    :::js
    Rho.RhoApplication.expandDatabaseBlobFilePath(x.image_uri)
                

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure the camera, for example to specify the flashMode or compressionFormat. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#properties'>property section</a> for applicable properties. Not providing properties to this function will use the Camera's default properties, or those previously set on the Camera instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the image was successfully captured. The returned string will be one of 'ok', 'cancel' or 'error'. Platforms:
Android, WM, CE </p></li><li>imageUri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI, If the specified 'outputFormat' was 'imagePath' then this field will have the image path on the device. User can use image path to transfer image over http. Platforms:
Android, WM, CE </p></li><li>imageHeight : <span class='text-info'>INTEGER</span><p>The actual height of the image that was captured, this may differ from the requested height as the Camera will only support a finite resolutions. Platforms:
Android, WM, CE </p></li><li>imageWidth : <span class='text-info'>INTEGER</span><p>The actual width of the image that was captured, this may differ from the requested width as the Camera will only support a finite resolutions. Platforms:
Android, WM, CE </p></li><li>imageFormat : <span class='text-info'>STRING</span><p>The format in which the image was captured, either 'png' or 'jpg'. Platforms:
Android, WM, CE </p></li><li>message : <span class='text-info'>STRING</span><p>If the returned status is 'error' then this field will contain more information on the error. To maintain backward compatibility WM and Android platforms provides message for cancel status as well. Platforms:
Android, WM, CE </p></li><li>image_uri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI, If the specified 'outputFormat' was 'imagePath' then this field will have the image path on the device. User can use image path to transfer image over http. Platforms:
Android, WM, CE </p></li><li>image_height : <span class='text-info'>INTEGER</span><p>It is recommended to use imageHeight in preference to this parameter. Platforms:
Android, WM, CE </p></li><li>image_width : <span class='text-info'>INTEGER</span><p>It is recommended to use imageWidth in preference to this parameter. Platforms:
Android, WM, CE </p></li><li>image_format : <span class='text-info'>STRING</span><p>It is recommended to use imageFormat in preference to this parameter. Platforms:
Android, WM, CE </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.takePicture(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.takePicture(<span class="text-info">HASH</span> propertyMap)</code> 


##Properties



###aimMode

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the aim behaviour when taking a picture. Applicable only for imager module.
                This Property shall accept/return one among the values mentioned in constant section which starts with AIM_...
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.aimMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.aimMode</code> 



####Platforms

* Windows Mobile
* Windows CE

###<span class="text-info">cameraType</span>

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
<span class='label label-info'>Replaces:camera_type</span> This property is device specific. The value for this property can be either 'back' or 'front' in the case of Android devices.In the case of windows it could be either 'imager' or 'color'. WM/CE devices will use 'color'as default and if color camera not available the default value will be 'imager'. Android devices will use 'back'as default and if back camera not available the default value will be 'front'.
                This Property shall return one among the values mentioned in constant section which starts with CAMERA_TYPE_...
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.cameraType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.cameraType</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###captureSound

####Type
<span class='text-info'>STRING</span> 
####Description
Path to a sound file resident on the device which will be played when the image is captured.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.captureSound</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.captureSound</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###<span class="text-info">colorModel</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:color_model</span> Where supported by the hardware this property can be used to select whether to capture a color or a grayscale image.
                This Property shall accept/return one among the values mentioned in constant section which starts with COLOR_MODEL_...
                
####Params
<p><strong>Default:</strong> rgb</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.colorModel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.colorModel</code> 



####Platforms

* Android

###<span class="text-info">compressionFormat</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:format</span> The format of the captured image in subsequent calls to takePicture(). On WM/CE devices, only '.jpeg' or '.jpg' format is supported. This property will accept/return one among the values mentioned under [constant section](#constants) which starts with COMPRESSION_FORMAT_...
                
####Params
<p><strong>Default:</strong> jpg</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compressionFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.compressionFormat</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###<span class="text-info">desiredHeight</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:desired_height</span> Camera hardware is limited to taking photos in a finite number of resolutions, eg 2048x1536, 640x480 etc. Specifying a desiredHeight will request to take the photo with the specified height but if it is not supported by the hardware then the closest match will be selected. The callback received when a photo is taken contains the actual resolution of the captured photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.desiredHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.desiredHeight</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###<span class="text-info">desiredWidth</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:desired_width</span> Camera hardware is limited to taking photos in a finite number of resolutions, eg 2048x1536, 640x480 etc. Specifying a desiredWidth will request to take the photo with the specified width but if it is not supported by the hardware then the closest match will be selected. The callback received when a photo is taken contains the actual resolution of the captured photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.desiredWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.desiredWidth</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###fileName

####Type
<span class='text-info'>STRING</span> 
####Description
The image file path without file extension to store captured image in subsequent calls to takePicture() or capture(). Default filename will be IMG_timestamp and will be saved under root directory. The filename extension will be added automatically according to compressionFormat property value.
     
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.fileName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.fileName</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###<span class="text-info">flashMode</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:flash_mode</span> Specifies the flash behavior when taking a picture.
                This Property shall accept/return one among the values mentioned in constant section which starts with FLASH_...
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.flashMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.flashMode</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###maxHeight

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
The maximum height of images which can be captured. This is measured in pixels. On WM/CE devices this is applicable only for color camera. Imager does not support this property.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.maxHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.maxHeight</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###maxWidth

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
The maximum width of images which can be captured. This is measured in pixels. On WM/CE devices this is applicable only for color camera. Imager does not support this property.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.maxWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.maxWidth</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###outputFormat

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the way to return the captured image to the application.
                This Property shall accept/return one among the values mentioned in constant section which starts with OUTPUT_FORMAT_...
                
####Params
<p><strong>Default:</strong> imagePath</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.outputFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.outputFormat</code> 



####Platforms

* Android
* Windows Mobile
* Windows CE

###previewHeight

####Type
<span class='text-info'>INTEGER</span> 
####Description
In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewHeight</code> 



####Platforms

* Windows Mobile
* Windows CE

###<span class="text-info">previewLeft</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:left</span> In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewLeft</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewLeft</code> 



####Platforms

* Windows Mobile
* Windows CE

###<span class="text-info">previewTop</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:top</span> In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewTop</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewTop</code> 



####Platforms

* Windows Mobile
* Windows CE

###previewWidth

####Type
<span class='text-info'>INTEGER</span> 
####Description
In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewWidth</code> 



####Platforms

* Windows Mobile
* Windows CE

###<span class="text-info">saveToDeviceGallery</span>

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
<span class='label label-info'>Replaces:save_to_shared_gallery</span> If true, the picture you take will be added to the device photo gallery.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.saveToDeviceGallery</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.saveToDeviceGallery</code> 



####Platforms

* Android

###supportedSizeList

####Type
<span class='text-info'>ARRAY</span> <span class='label label-warning'>Read Only</span>
####Description
List of resolutions (width and height in pixels) supported by the camera. On WM/CE devices this feature is supported only by color camera and it is not supported by imager. Refer example section for more details.
####Params
<li><i>Object</i> : <span class='text-info'>HASH</span><p> </p></li><ul><li>width : <span class='text-info'>INTEGER</span><p> </p></li><li>height : <span class='text-info'>INTEGER</span><p> </p></li></ul>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.supportedSizeList</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.supportedSizeList</code> 


####Platforms

* Android
* Windows Mobile
* Windows CE

###useSystemViewfinder

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Setting the value of this property to "true", shall open the System ViewFinder with its properties. None of the Rho camera properties shall be applicable.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.useSystemViewfinder</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.useSystemViewfinder</code> 



####Platforms

* Android

##Constants


* CAMERA_TYPE_BACKBack camera. This is not supported in WM/CE devices.
* CAMERA_TYPE_FRONTFront camera. This is not supported in WM/CE devices.
* CAMERA_TYPE_IMAGERCamera is an imager. This is supported only in WM/CE devices.
* CAMERA_TYPE_COLORCamera is color camera. This is supported only in WM/CE devices.
* COMPRESSION_FORMAT_JPGJPG compression.
* COMPRESSION_FORMAT_PNGPNG compression.
* OUTPUT_FORMAT_IMAGEThis shall provide the image uri. This can be used to display image directly on the page. An example is shown in the example section
* OUTPUT_FORMAT_DATAURIThis is a base 64 encoding of the image and can be used to easily embed the image on the page or store the image in a database.
* OUTPUT_FORMAT_IMAGE_PATHIf this value used for setting the outputFormat property, the takePicture or capture API will return imageUri as the path to the saved image in the device. User can use this image path to transfer the file to an http server if required. An example is given to demonstrate, transferring a file to http server.This property is not applicable for Android and windows phone 8.
* COLOR_MODEL_RGBA colour image is captured.
* COLOR_MODEL_GRAYSCALEA grayscale image is captured.
* FLASH_ONFlash will be used.
* FLASH_OFFFlash will not be used.
* FLASH_AUTOFlash will be used if lighting conditions deem it necessary. This is not supported in WM/CE devices.
* FLASH_RED_EYEFlash with red eye reduction is used. This is supported only in Android devices.
* FLASH_TORCHThe flash is turned on in torch mode. This is supported only in Android devices.
* AIM_ONSwitches the imager's aim to ON 
* AIM_OFFSwitches the imager's aim to OFF 

##Remarks



###SD Card Access
SD Card access is enabled by default; grants of additional access will be ignored. The following extensions are able to write to the SD card by default.

###Camera Preview
Despite a user-selected full screen mode, preview rendering size will be overridden by the driver on some WM/CE devices.

###DataUri
DataUri output is dependent on availability of virtual space. DataUri may fail, be unresponsive, cause reboot, degraded performance or fail to load in certain devices. In such cases, image path is recommended.

###ImageUri
Image Uri display is dependent on browser capability.

###colorModel as Grayscale in Android
Grayscale is not supported on Android devices.

###Invalid/Null values for properties in Android and iOS
Only valid and non-empty values for properties are supported in Android and iOS.

###Camera in Suspend mode
All WM and CE7 devices automatically turn off both color and imager cameras when the device is suspended. User must restart the camera to resume. Whereas CE5 (eg: MC9000) and CE6 (eg: MC31) devices retain the preview on resuming from suspend state.

###Image saving after taking picture
In some devices, an image will be saved in landscape mode even if captured in portrait mode. This behavior is determined by the device's default settings.

###WM/CE devices lacking support
Due to platform limitations, the ES400, MC65 and MC67 do not support the color camera.

###takePicture resolution issue on low-memory devices with WM
Due to platform limitations, the ES400, MC65 and MC67 do not support a color camera. The imager on the MC55 with WM does not support the Fullscreen window (eg: takePicture). Parameters such as previewLeft, previewWidth, previewTop and previewHeight are supported by the device to set up a user-defined viewer window.

###takePicture resolution issue on low-memory devices with WM
Processor limitations of some devices may cause a low-resolution image captures to appear as a small preview with a black background when transitioning back to the application.

###Android KitKat gallery displays black image
For images captured with the camera using a Rho app, the image might initially appear black. Refresh the view to correct the problem.

###Android preview
High-resolution settings are not recommended for low-memory devices. Image previews on tablet devices might appear stretched or shrunken.

###Devices lacking support
The Camera API is not supported from Enterprise Browser apps on the following Zebra Technologies devices:

* Workabout Pro 4
* Omnii XT15
* VH10 

##Examples

###Take picture with default camera
Take an image with as little code as possible, using all default values.
<pre><code>:::javascript
function take_picture_with_default_camera() {
  // Capture an image from the default camera on the device, using the default image settings
  EB.Camera.takePicture({}, picture_taken_callback);
}

function picture_taken_callback(params) {
  // Did we receive an image?
  if (params["status"]=="ok") {
    // Assuming we have an <img id="#captured_image"> tag, we will be able to see the image that was just captured
    $("#captured_image").attr("src", EB.Application.expandDatabaseBlobFilePath(params["imageUri"]));
  }
}                           
</code></pre>

###Dispalying an image using image uri
This example demonstrate how user can dispaly an image using image uri. The callback will return an image uri when ‘image' is set as the outputFormat. 

<pre><code>:::javascript
//enumerate the available cameras on the device
var camArray = EB.Camera.enumerate();

//below is the camera call back fired after takePicture is called
var camera_callbackFunc = function(cbData){ 

  //uri will have relative path info only
  //user has to form the absolute local server path as shown below
  uri = 'http://localhost:'+EB.System.localServerPort + cbData.imageUri;
  //set the image uri to the image element
  document.getElementById('imageUri').src = uri ;
  
};
 
//below is the test function which is used for capturing an image with outputFormat set as image
function Test_image_uri()
{ 
  //invoke takePicture API with outputFormat as image and set the callback method
  camArray[0].takePicture({'outputFormat': 'image'}, camera_callbackFunc);
}
</code></pre>

###Dispalying an image using data uri
This example demonstrate how user can dispaly an image using data uri. The callback will return a data uri when 'dataUri' is set as the outputFormat.
<pre><code>:::javascript
//enumerate the available cameras on the device
var camArray = EB.Camera.enumerate();

 //below is the camera call back fired after takePicture is called
var camera_callbackFunc = function(cbData){ 
  //set the image uri to the image element
  document.getElementById('imageUri').src = cbData.imageUri ;  
};
 
 //below is the test function which is used for capturing an image with outputFormat set as dataUri
function Test_image_uri()
{ 
  //invoke takePicture API with outputFormat as dataUri and set the callback method
  camArray[0].takePicture({'outputFormat': 'dataUri'}, camera_callbackFunc);
}
</code></pre>

###Choose which camera to use when taking images
On devices with more than one camera, you can select which camera to use for taking pictures.
<pre><code>:::javascript
&lt;div id="camera_list"&gt;
&lt;/div&gt;

var cameras = [];

function choose_camera() {
  // get all available cameras
  cameras = EB.Camera.enumerate();

  // build an HTML list
  var cameraList = "&lt;ul&gt;";

  for (var cameraIndex = 0 ; cameraIndex &lt; cameras.length; cameraIndex++) {
    var camera = cameras[cameraIndex];
    // Create a link for each camera with an onclick handler
    cameraList = cameraList + '&lt;li&gt;&lt;a href="#" class="take_picture_with_selected_camera" onclick="take_picture_with_camera('+cameraIndex+')"&gt;' + camera.cameraType + '&lt;/a&gt;&lt;/li&gt;';
  }

  cameraList = cameraList+"&lt;/ul&gt;";

  // make camera list visible to the user
  $("#camera_list").html(cameraList);
}

function take_picture_with_camera(cameraIndex) {
  var camera = cameras[cameraIndex];
  camera.takePicture({}, picture_taken_callback);
}                 
</code></pre>

###Saving a picture to the device's gallery
Apart from taking new pictures, you can also save images to the built-in gallery. In the following examples, the picture we are adding to the gallery is one that was just taken with the camera, but you can add any other image you can access by filename.
<pre><code>:::javascript
function take_picture_and_save_it_to_gallery() {
  EB.Camera.choosePicture({}, picture_taken_callback_save_to_gallery);
}

function picture_taken_callback_save_to_gallery(params) {
  if (params["status"]=="ok") {
    EB.Camera.copyImageToDeviceGallery(EB.Application.expandDatabaseBlobFilePath(params["imageUri"]));

    alert("Image saved to gallery");
  }
}      
</code></pre>

###Control image properties
You can tweak multiple options to get an image exactly as you need it.
<pre><code>:::javascript
function control_image_properties() {
  // Instead of accepting the defaults, let's set some properties to our liking

  // We will ask for a PNG file...
  EB.Camera.compressionFormat = "png";

  // ...a particular image size...
  EB.Camera.desiredWidth = 1024;
  EB.Camera.desiredHeight = 768;

  // ...and force the flash to be used
  EB.Camera.flashMode = "on";

  // Now, take the picture
  EB.Camera.takePicture({}, picture_taken_callback);
}

function picture_taken_callback(params) {
  // Did we receive an image?
  if (params["status"]=="ok") {
    // show it in our &lt;img id="captured_image"&lt; tag
    $("#captured_image").attr("src", EB.Application.expandDatabaseBlobFilePath(params["imageUri"]));
  }

}  
</code></pre>

###Determine camera capabilities
You can get all available camera properties in a single call.
<pre><code>:::javascript
function determine_camera_capabilities() {
  var capabilitiesList = "&lt;ul&gt;";

  // Get all capabilities of the camera...
  var capabilities = EB.Camera.getAllProperties();

  // ... compose a nicely formatted list with their names and values ...
  for (var capability in capabilities) {
    capabilitiesList+="&lt;li&gt;"+capability+": "+capabilities[capability]+"&lt;/li&gt;";
  }

  capabilitiesList += "&lt;/ul&gt;";

  // ... and show it
  $("#camera_capabilities").html(capabilitiesList);
}                
</code></pre>

###Select picture from device gallery
Apart from taking new pictures, the Camera API also lets you access existing images on the device’s gallery.
<pre><code>:::javascript
function select_picture_from_gallery() {
  EB.Camera.choose_picture({}, picture_taken_callback);
}

function picture_taken_callback(params) {
  // Did we receive an image?
  if (params["status"]=="ok") {
    // Show it in an &lt;img&gt; tag
    $("#captured_image").attr("src", EB.Application.expandDatabaseBlobFilePath(params["imageUri"]));
  }
}     
</code></pre>

###Getting a camera instance by cameraType
Camera API also lets you access camera instance by cameraType.
<pre><code>:::javascript
//get the instance by cameraType and takePicture using that instance
function get_color_camera_instance() {
  var camInst = EB.Camera.getCameraByType('color');
  camInst.takePicture({'outputFormat':'image'}, my_callback);
}
</code></pre>

###Getting the list of resolutions supported by the camera
Camera resolution is hardware specific. Camera API supports getting the supported resolutions of a camera instance.
<pre><code>:::javascript
function getsupporteSizeList()
{
	var instArray = EB.Camera.enumerate();
	var reslnArray = instArray[0].supportedSizeList;
	alert(reslnArray[0].width);
	alert(reslnArray[0].height);
	alert(reslnArray[1].width);
	alert(reslnArray[1].height);
}
</code></pre>

###Transfering an image to HTTP server
This example demonstrate how user can transfer an image to http server. This will be useful when application is running on a remote server.
<pre><code>:::javascript
//enumerate the available cameras on the device
var camArray = EB.Camera.enumerate();

//below is the callback fired by network api after image upload to the server is completed
var upload_file_callback = function (args){
        status = args['status'];
        //a status ok indicates image transferred successfully
        alert(status);
       }

//below is the camera call back fired after takePicture is called
var camera_callbackFunc = function(cbData){ 
  alert(cbData.imageUri); 
  //set the upload file properties; Refer network module for more details
  var uploadfileProps = {
           url: 'http://10.233.82.51:8081/upload_image_file',
          //authType: "basic",
          //authUser: "admin",
          //authPassword: "password",
          filename: cbData.imageUri,
          body: "uploading file",
          fileContentType: "image/jpeg"
        };
   
   //below is the network module API used for uploading images when camera fire the callback
   EB.Network.uploadFile(uploadfileProps, upload_file_callback);      
 };
 
 //below is the test function which is used for capturing an image with outputFormat set as imagePath
function Test_image_transfer1()
{ 
  //invoke takePicture API with outputFormat as imagePath and set the callback method
  camArray[0].takePicture({'fileName' : '/Application/Test/myImagename', 'outputFormat': 'imagePath'}, camera_callbackFunc);
}
 //below is the test function which is used for choosing a picture from device with outputFormat set as imagePath
function Test_image_transfer2()
{ 
  //invoke choosePicture API with outputFormat as imagePath and set the callback method
  EB.Camera.choosePicture({'outputFormat': 'image'}, camera_callbackFunc);
}
</code></pre>
