---
title: ScannerConfig.ScanParameters
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The ScanParams class provides access to scanning parameters that are available for all decoders. NOTE: When calling enable() after disable(), all the latest configuration parameter values (Config.DecoderParams, Config.ScannerParams, Config.ReaderParams and Config.InterfaceParams) will be set automatically.

**Type** - Java.Lang.Object

##Properties

###AudioStreamType
The audio stream type refers to type of streaming on which the scan beep should be played. The decodeAudioFeedbackUri specified must be available for the audio streaming type specified.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+AudioStreamType
###CodeIdType
A Code ID character identifies the code type of a scanned bar code. This is useful when the reader is decoding more than one code type. Select a code ID character to insert between the prefix and the decoded symbol. Use enum ScannerConfig.CodeIdType.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+CodeIdType
###DecodeAudioFeedbackMode
Controls the audio feedback mode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+DecodeAudioFeedbackMode
###DecodeAudioFeedbackUri
Select an audio tone to sound upon a good decode. The valid audio files from the RingTone manager can be used for audio feedback.The audio tones stored as Application's private data (i.e. cache, asset) should not be specified for this field (decodeAudioFeedbackUri in ScanParams) to avoid access violation. Therefore any audio tones meant for this purpose must be stored under shared public directories (Music/ , Ringtones/) or shared 'external storage'.

**Type** - System.String
###DecodeHapticFeedback
Enable the device to vibrate upon a good decode.

**Type** - System.Boolean
###DecodeLEDFeedback
Decoding LED Notification.

**Type** - System.Boolean
###DecodeLEDFeedbackMode
Controls the LED feedback mode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig+DecodeLEDFeedbackMode
###DecodeLEDTime
Decode LED ON duration upon successful decode in milliseconds. This value can be from 0ms to 1000ms with a step of 25ms

**Type** - System.Int32
###DecodeScreenNotification

        

**Type** - System.Boolean
###DecodeScreenNotificationTime

        

**Type** - System.Int32
###DecodeScreenTranslucencyLevel

        

**Type** - System.Int32
