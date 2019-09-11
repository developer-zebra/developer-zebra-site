# Updating Link-OS SDKs

* All:
	* Update version # show in /link-os/index.md
* Android
	* Copy everything except styles.css and zebra.png from new SDK android/[version]/documentation to /link-os/latest/android/content
* Android BTLE
	* Copy everything except styles.css and zebra.png from new SDK android_btle/[version]/documentation to /link-os/latest/android_btle/content
* iOS
	* Copy only search folder and *.html from new SDK ios/[version]/doc/html to /link-os/latest/ios/content
* PC
	* Copy everything except styles.css and zebra.png from new SDK pc/[version]/documentation to /link-os/latest/android/content
* WebService
	* Copy everything except styles.css and zebra.png from new SDK Webservices/[version]/documentation to /link-os/latest/android/content
* Xamarin
	* Copy only search folder and *.html from new SDK Xamarin/[version]/doc/html to /link-os/latest/ios/content

* Then build source like usual "node build"
* Push build/link-os to stage and production