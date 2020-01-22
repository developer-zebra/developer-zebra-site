---
title: EMDK For Xamarin API List
layout: guide.html
product: EMDK For Xamarin
productversion: '6.0'
---

## Core and ProfileManager APIs
The following APIs are to be used to process EMDK features and profiles using the [Profile Manager](/emdk-for-xamarin/5-0/guide/profilemanager/about) as well as getting information about the EMDK.

###EMDKBase

* [EMDKBase](/emdk-for-xamarin/5-0/api/EMDKBase)


###EMDKManager

* [EMDKManager](/emdk-for-xamarin/5-0/api/EMDKManager)
* [EMDKManager_FEATURE_TYPE](/emdk-for-xamarin/5-0/api/EMDKManager_FEATURE_TYPE)
* [EMDKManager_IEMDKListener](/emdk-for-xamarin/5-0/api/EMDKManager_IEMDKListener)
* [EMDKManager_OpenedEventArgs](/emdk-for-xamarin/5-0/api/EMDKManager_OpenedEventArgs)


###EMDKResults

* [EMDKResults](/emdk-for-xamarin/5-0/api/EMDKResults)
* [EMDKResults_EXTENDED_STATUS_CODE](/emdk-for-xamarin/5-0/api/EMDKResults_EXTENDED_STATUS_CODE)
* [EMDKResults_STATUS_CODE](/emdk-for-xamarin/5-0/api/EMDKResults_STATUS_CODE)


###ProfileManager

* [ProfileManager](/emdk-for-xamarin/5-0/api/ProfileManager)
* [ProfileManager_DataEventArgs](/emdk-for-xamarin/5-0/api/ProfileManager_DataEventArgs)
* [ProfileManager_IDataListener](/emdk-for-xamarin/5-0/api/ProfileManager_IDataListener)
* [ProfileManager_PROFILE_FLAG](/emdk-for-xamarin/5-0/api/ProfileManager_PROFILE_FLAG)
* [ProfileManager_ResultData](/emdk-for-xamarin/5-0/api/ProfileManager_ResultData)


###VersionManager

* [VersionManager](/emdk-for-xamarin/5-0/api/VersionManager)
* [VersionManager_VERSION_TYPE](/emdk-for-xamarin/5-0/api/VersionManager_VERSION_TYPE)


## Barcode APIs
The following APIs are used when you wish to handle all barcode scanning entirely in Java. These API's work independently of any [Data Capture profiles.](/emdk-for-xamarin/5-0/mx/data-capture)


###BarcodeManager

* [BarcodeManager](/emdk-for-xamarin/5-0/api/BarcodeManager)
* [BarcodeManager_ConnectionState](/emdk-for-xamarin/5-0/api/BarcodeManager_ConnectionState)
* [BarcodeManager_DeviceIdentifier](/emdk-for-xamarin/5-0/api/BarcodeManager_DeviceIdentifier)
* [BarcodeManager_IScannerConnectionListener](/emdk-for-xamarin/5-0/api/BarcodeManager_IScannerConnectionListener)
* [BarcodeManager_ScannerConnectionEventArgs](/emdk-for-xamarin/5-0/api/BarcodeManager_ScannerConnectionEventArgs)


###InterfaceConfig

* [InterfaceConfig](/emdk-for-xamarin/5-0/api/InterfaceConfig)


###ScanDataCollection

* [ScanDataCollection](/emdk-for-xamarin/5-0/api/ScanDataCollection)
* [ScanDataCollection_LabelType](/emdk-for-xamarin/5-0/api/ScanDataCollection_LabelType)
* [ScanDataCollection_ScanData](/emdk-for-xamarin/5-0/api/ScanDataCollection_ScanData)


###Scanner

* [Scanner](/emdk-for-xamarin/5-0/api/Scanner)
* [Scanner_DataEventArgs](/emdk-for-xamarin/5-0/api/Scanner_DataEventArgs)
* [Scanner_IDataListener](/emdk-for-xamarin/5-0/api/Scanner_IDataListener)
* [Scanner_IStatusListener](/emdk-for-xamarin/5-0/api/Scanner_IStatusListener)
* [Scanner_StatusEventArgs](/emdk-for-xamarin/5-0/api/Scanner_StatusEventArgs)
* [Scanner_TriggerTypes](/emdk-for-xamarin/5-0/api/Scanner_TriggerTypes)


###ScannerConfig

* [ScannerConfig](/emdk-for-xamarin/5-0/api/ScannerConfig)
* [ScannerConfig_AudioStreamType](/emdk-for-xamarin/5-0/api/ScannerConfig_AudioStreamType)
* [ScannerConfig_BooklandFormat](/emdk-for-xamarin/5-0/api/ScannerConfig_BooklandFormat)
* [ScannerConfig_CheckDigit](/emdk-for-xamarin/5-0/api/ScannerConfig_CheckDigit)
* [ScannerConfig_CheckDigitScheme](/emdk-for-xamarin/5-0/api/ScannerConfig_CheckDigitScheme)
* [ScannerConfig_CheckDigitType](/emdk-for-xamarin/5-0/api/ScannerConfig_CheckDigitType)
* [ScannerConfig_CodeIdType](/emdk-for-xamarin/5-0/api/ScannerConfig_CodeIdType)
* [ScannerConfig_CouponReport](/emdk-for-xamarin/5-0/api/ScannerConfig_CouponReport)
* [ScannerConfig_DecoderParameters_AustralianPostalDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_AustralianPostalDecoder)
* [ScannerConfig_DecoderParameters_AztecDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_AztecDecoder)
* [ScannerConfig_DecoderParameters_BaseDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_BaseDecoder)
* [ScannerConfig_DecoderParameters_CanadianPostalDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_CanadianPostalDecoder)
* [ScannerConfig_DecoderParameters_Chinese2of5Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Chinese2of5Decoder)
* [ScannerConfig_DecoderParameters_CodaBarDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_CodaBarDecoder)
* [ScannerConfig_DecoderParameters_Code11Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Code11Decoder)
* [ScannerConfig_DecoderParameters_Code128Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Code128Decoder)
* [ScannerConfig_DecoderParameters_Code39Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Code39Decoder)
* [ScannerConfig_DecoderParameters_Code93Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Code93Decoder)
* [ScannerConfig_DecoderParameters_CompositeABDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_CompositeABDecoder)
* [ScannerConfig_DecoderParameters_CompositeCDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_CompositeCDecoder)
* [ScannerConfig_DecoderParameters_D2of5Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_D2of5Decoder)
* [ScannerConfig_DecoderParameters_DataMatrixDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_DataMatrixDecoder)
* [ScannerConfig_DecoderParameters_DutchPostalDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_DutchPostalDecoder)
* [ScannerConfig_DecoderParameters_Ean13Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Ean13Decoder)
* [ScannerConfig_DecoderParameters_Ean8Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Ean8Decoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Gs1DatabarDecoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarExpDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Gs1DatabarExpDecoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarLimDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Gs1DatabarLimDecoder)
* [ScannerConfig_DecoderParameters_HanXinDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_HanXinDecoder)
* [ScannerConfig_DecoderParameters_I2of5Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_I2of5Decoder)
* [ScannerConfig_DecoderParameters_JapanesePostalDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_JapanesePostalDecoder)
* [ScannerConfig_DecoderParameters_Korean3of5Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Korean3of5Decoder)
* [ScannerConfig_DecoderParameters_MailMarkDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MailMarkDecoder)
* [ScannerConfig_DecoderParameters_Matrix2of5Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Matrix2of5Decoder)
* [ScannerConfig_DecoderParameters_MaxiCodeDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MaxiCodeDecoder)
* [ScannerConfig_DecoderParameters_MicroPdf](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MicroPdf)
* [ScannerConfig_DecoderParameters_MicroPdfDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MicroPdfDecoder)
* [ScannerConfig_DecoderParameters_MicroQr](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MicroQr)
* [ScannerConfig_DecoderParameters_MicroQrDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MicroQrDecoder)
* [ScannerConfig_DecoderParameters_MsiDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_MsiDecoder)
* [ScannerConfig_DecoderParameters_Pdf417Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Pdf417Decoder)
* [ScannerConfig_DecoderParameters_QrCodeDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_QrCodeDecoder)
* [ScannerConfig_DecoderParameters_SignatureDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_SignatureDecoder)
* [ScannerConfig_DecoderParameters_Tlc39Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Tlc39Decoder)
* [ScannerConfig_DecoderParameters_TriOptic39Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_TriOptic39Decoder)
* [ScannerConfig_DecoderParameters_UkPostalDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_UkPostalDecoder)
* [ScannerConfig_DecoderParameters_UpcaDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_UpcaDecoder)
* [ScannerConfig_DecoderParameters_Upce0Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Upce0Decoder)
* [ScannerConfig_DecoderParameters_Upce1Decoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Upce1Decoder)
* [ScannerConfig_DecoderParameters_UpcEanParameters](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_UpcEanParameters)
* [ScannerConfig_DecoderParameters_Us4StateDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Us4StateDecoder)
* [ScannerConfig_DecoderParameters_Us4StateFicsDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_Us4StateFicsDecoder)
* [ScannerConfig_DecoderParameters_UsPlanetDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_UsPlanetDecoder)
* [ScannerConfig_DecoderParameters_UsPostNetDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_UsPostNetDecoder)
* [ScannerConfig_DecoderParameters_WebCodeDecoder](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters_WebCodeDecoder)
* [ScannerConfig_DecoderParameters](/emdk-for-xamarin/5-0/api/ScannerConfig_DecoderParameters)
* [ScannerConfig_HanXinInverse](/emdk-for-xamarin/5-0/api/ScannerConfig_HanXinInverse)
* [ScannerConfig_IlluminationMode](/emdk-for-xamarin/5-0/api/ScannerConfig_IlluminationMode)
* [ScannerConfig_InterfaceParams](/emdk-for-xamarin/5-0/api/ScannerConfig_InterfaceParams)
* [ScannerConfig_Inverse1DMode](/emdk-for-xamarin/5-0/api/ScannerConfig_Inverse1DMode)
* [ScannerConfig_Isbt128ConcatMode](/emdk-for-xamarin/5-0/api/ScannerConfig_Isbt128ConcatMode)
* [ScannerConfig_Isbt128ContactMode](/emdk-for-xamarin/5-0/api/ScannerConfig_Isbt128ContactMode)
* [ScannerConfig_LcdMode](/emdk-for-xamarin/5-0/api/ScannerConfig_LcdMode)
* [ScannerConfig_LinearSecurityLevel](/emdk-for-xamarin/5-0/api/ScannerConfig_LinearSecurityLevel)
* [ScannerConfig_PickList](/emdk-for-xamarin/5-0/api/ScannerConfig_PickList)
* [ScannerConfig_PowerMode](/emdk-for-xamarin/5-0/api/ScannerConfig_PowerMode)
* [ScannerConfig_Preamble](/emdk-for-xamarin/5-0/api/ScannerConfig_Preamble)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_CameraSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters_ReaderSpecifics_CameraSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_ContinuousRead](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters_ReaderSpecifics_ContinuousRead)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_ImagerSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters_ReaderSpecifics_ImagerSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_LaserSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters_ReaderSpecifics_LaserSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters_ReaderSpecifics)
* [ScannerConfig_ReaderParameters](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParameters)
* [ScannerConfig_ReaderParams_ReaderSpecifics_CameraSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams_ReaderSpecifics_CameraSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics_ContinuousRead](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams_ReaderSpecifics_ContinuousRead)
* [ScannerConfig_ReaderParams_ReaderSpecifics_ImagerSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams_ReaderSpecifics_ImagerSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics_LaserSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams_ReaderSpecifics_LaserSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams_ReaderSpecifics)
* [ScannerConfig_ReaderParams](/emdk-for-xamarin/5-0/api/ScannerConfig_ReaderParams)
* [ScannerConfig_ScanParameters](/emdk-for-xamarin/5-0/api/ScannerConfig_ScanParameters)
* [ScannerConfig_SecurityLevel](/emdk-for-xamarin/5-0/api/ScannerConfig_SecurityLevel)
* [ScannerConfig_SkipOnUnSupported](/emdk-for-xamarin/5-0/api/ScannerConfig_SkipOnUnSupported)
* [ScannerConfig_SupplementalMode](/emdk-for-xamarin/5-0/api/ScannerConfig_SupplementalMode)
* [ScannerConfig_UccLinkMode](/emdk-for-xamarin/5-0/api/ScannerConfig_UccLinkMode)
* [ScannerConfig_VerifyCheckDigit](/emdk-for-xamarin/5-0/api/ScannerConfig_VerifyCheckDigit)
* [ScannerConfig_ViewFinderMode](/emdk-for-xamarin/5-0/api/ScannerConfig_ViewFinderMode)


###ScannerException

* [ScannerException](/emdk-for-xamarin/5-0/api/ScannerException)


###ScannerInfo

* [ScannerInfo](/emdk-for-xamarin/5-0/api/ScannerInfo)
* [ScannerInfo_ConnectionType](/emdk-for-xamarin/5-0/api/ScannerInfo_ConnectionType)
* [ScannerInfo_DecoderType](/emdk-for-xamarin/5-0/api/ScannerInfo_DecoderType)
* [ScannerInfo_DeviceType](/emdk-for-xamarin/5-0/api/ScannerInfo_DeviceType)


###ScannerResults

* [ScannerResults](/emdk-for-xamarin/5-0/api/ScannerResults)


###StatusData

* [StatusData](/emdk-for-xamarin/5-0/api/StatusData)
* [StatusData_ScannerStates](/emdk-for-xamarin/5-0/api/StatusData_ScannerStates)





















