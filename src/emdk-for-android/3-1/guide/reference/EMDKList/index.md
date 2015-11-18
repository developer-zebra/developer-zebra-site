---
title: EMDK For Android API List
---

## Core and ProfileManager APIs
The following APIs are to be used to process EMDK features and profiles using the [Profile Manager](/emdk-for-android/3-1/guide/profiles/usingwizard) as well as getting information about the EMDK.

###EMDKBase
* [EMDKBase](/emdk-for-android/3-1/api/EMDKBase)

###EMDKManager
* [EMDKManager](/emdk-for-android/3-1/api/EMDKManager)
* [EMDKManager.EMDKListener](/emdk-for-android/3-1/api/EMDKManager-EMDKListener)

###EMDKResults
* [EMDKResults](/emdk-for-android/3-1/api/EMDKResults)

###ProfileConfig
* [ProfileConfig](/emdk-for-android/3-1/api/ProfileConfig)
* [ProfileConfig.ActivitySelection](/emdk-for-android/3-1/api/ProfileConfig-ActivitySelection)
* [ProfileConfig.ActivitySelection.ActivityElement](/emdk-for-android/3-1/api/ProfileConfig-ActivitySelection-ActivityElement)
* [ProfileConfig.DataCapture](/emdk-for-android/3-1/api/ProfileConfig-DataCapture)
* [ProfileConfig.DataCapture.Barcode](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode)
* [ProfileConfig.DataCapture.Barcode.Decoders](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-Decoders)
* [ProfileConfig.DataCapture.Barcode.DecoderParams](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Codabar](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Codabar)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Code11](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Code11)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Code128](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Code128)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Code39](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Code39)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Code93](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Code93)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Composite_AB](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Composite_AB)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Discrete_2of5](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Discrete_2of5)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Interleaved_2of5](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Interleaved_2of5)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.Matrix_2of5](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-Matrix_2of5)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.MSI](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-MSI)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.UK_Postal](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-UK_Postal)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.UPCA](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-UPCA)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE0](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-UPCE0)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE1](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-UPCE1)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.USPlanet](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-USPlanet)
* [ProfileConfig.DataCapture.Barcode.DecoderParams.USPostnet](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-DecoderParams-USPostnet)
* [ProfileConfig.DataCapture.Barcode.ReaderParams](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-ReaderParams)
* [ProfileConfig.DataCapture.Barcode.ScanParams](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-ScanParams)
* [ProfileConfig.DataCapture.Barcode.UpcEanParams](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-Barcode-UpcEanParams)
* [ProfileConfig.DataCapture.MSR](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-MSR)
* [ProfileConfig.DataCapture.DataDelivery](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-DataDelivery)
* [ProfileConfig.DataCapture.DataDelivery.BasicDataFormatting](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-DataDelivery-BasicDataFormatting)
* [ProfileConfig.DataCapture.DataDelivery.Intent](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-DataDelivery-Intent)
* [ProfileConfig.DataCapture.DataDelivery.Keystroke](/emdk-for-android/3-1/api/ProfileConfig-DataCapture-DataDelivery-Keystroke)

###ProfileManager
* [ProfileManager](/emdk-for-android/3-1/api/ProfileManager)
* [ProfileManager.DataListener](/emdk-for-android/3-1/api/ProfileManager-DataListener)
* [ProfileManager.ResultData](/emdk-for-android/3-1/api/ProfileManager-ResultData)

###VersionManager
* [VersionManager](/emdk-for-android/3-1/api/VersionManager)



## Barcode APIs
The following APIs are used when you wish to handle all barcode scanning entirely in Java. These API's work independently of any [Data Capture profiles.](/emdk-for-android/3-1/guide/profiles/profilebarcode)

###BarcodeManager
* [BarcodeManager](/emdk-for-android/3-1/api/BarcodeManager)
* [BarcodeManager.ScannerConnectionListener](/emdk-for-android/3-1/api/BarcodeManager-ScannerConnectionListener)
* [BarcodeManager.ScannerConnectionListener.ConnectionStatus](/emdk-for-android/3-1/api/BarcodeManager-ScannerConnectionListener-ConnectionStatus)

<!--
###Collection
* [Collection.ScanData](/emdk-for-android/3-1/api/Collection-ScanData)
-->

###InterfaceConfig
* [InterfaceConfig](/emdk-for-android/3-1/api/InterfaceConfig)

###ScanDataCollection
* [ScanDataCollection](/emdk-for-android/3-1/api/ScanDataCollection)


###Scanner
* [Scanner](/emdk-for-android/3-1/api/Scanner)
* [Scanner.DataListener](/emdk-for-android/3-1/api/Scanner-DataListener)
* [Scanner.StatusListener](/emdk-for-android/3-1/api/Scanner-StatusListener)

###ScannerResults
* [ScannerResults](/emdk-for-android/3-1/api/ScannerResults)

###ScannerConfig
* [ScannerConfig](/emdk-for-android/3-1/api/ScannerConfig)
* [ScannerConfig.DecoderParams](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams)
* [ScannerConfig.DecoderParams.AustralianPostal](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-AustralianPostal)
* [ScannerConfig.DecoderParams.Aztec](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Aztec)
* [ScannerConfig.DecoderParams.BaseDecoder](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-BaseDecoder)
* [ScannerConfig.DecoderParams.CanadianPostal](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-CanadianPostal)
* [ScannerConfig.DecoderParams.Chinese2of5](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Chinese2of5)
* [ScannerConfig.DecoderParams.CodaBar](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-CodaBar)
* [ScannerConfig.DecoderParams.Code11](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Code11)
* [ScannerConfig.DecoderParams.Code128](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Code128)
* [ScannerConfig.DecoderParams.Code39](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Code39)
* [ScannerConfig.DecoderParams.Code93](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Code93)
* [ScannerConfig.DecoderParams.CompositeAB](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-CompositeAB)
* [ScannerConfig.DecoderParams.CompositeC](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-CompositeC)
* [ScannerConfig.DecoderParams.D2of5](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-D2of5)
* [ScannerConfig.DecoderParams.DataMatrix](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-DataMatrix)
* [ScannerConfig.DecoderParams.DutchPostal](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-DutchPostal)
* [ScannerConfig.DecoderParams.Ean13](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Ean13)
* [ScannerConfig.DecoderParams.Ean8](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Ean8)
* [ScannerConfig.DecoderParams.Gs1Databar](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Gs1Databar)
* [ScannerConfig.DecoderParams.Gs1DatabarExp](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Gs1DatabarExp)
* [ScannerConfig.DecoderParams.Gs1DatabarLim](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Gs1DatabarLim)
* [ScannerConfig.DecoderParams.HanXin](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-HanXin)
* [ScannerConfig.DecoderParams.I2of5](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-I2of5)
* [ScannerConfig.DecoderParams.JapanesePostal](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-JapanesePostal)
* [ScannerConfig.DecoderParams.Korean3of5](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Korean3of5)
* [ScannerConfig.DecoderParams.MailMark](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-MailMark)
* [ScannerConfig.DecoderParams.Matrix2of5](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Matrix2of5)
* [ScannerConfig.DecoderParams.MaxiCode](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-MaxiCode)
* [ScannerConfig.DecoderParams.MicroPdf](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-MicroPdf)
* [ScannerConfig.DecoderParams.MicroQr](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-MicroQr)
* [ScannerConfig.DecoderParams.Msi](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Msi)
* [ScannerConfig.DecoderParams.Pdf417](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Pdf417)
* [ScannerConfig.DecoderParams.QrCode](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-QrCode)
* [ScannerConfig.DecoderParams.Signature](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Signature)
* [ScannerConfig.DecoderParams.Tlc39](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Tlc39)
* [ScannerConfig.DecoderParams.TriOptic39](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-TriOptic39)
* [ScannerConfig.DecoderParams.UkPostal](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-UkPostal)
* [ScannerConfig.DecoderParams.UpcEanParams](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-UpcEanParams)
* [ScannerConfig.DecoderParams.Upca](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Upca)
* [ScannerConfig.DecoderParams.Upce0](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Upce0)
* [ScannerConfig.DecoderParams.Upce1](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Upce1)
* [ScannerConfig.DecoderParams.Us4State](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Us4State)
* [ScannerConfig.DecoderParams.Us4StateFics](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-Us4StateFics)
* [ScannerConfig.DecoderParams.UsPlanet](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-UsPlanet)
* [ScannerConfig.DecoderParams.UsPostNet](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-UsPostNet)
* [ScannerConfig.DecoderParams.WebCode](/emdk-for-android/3-1/api/ScannerConfig-DecoderParams-WebCode)
* [ScannerConfig.ReaderParams](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams)
* [ScannerConfig.ReaderParams.ReaderSpecific](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams-ReaderSpecific)
* [ScannerConfig.ReaderParams.ReaderSpecific.CameraSpecific](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams-ReaderSpecific-CameraSpecific)
* [ScannerConfig.ReaderParams.ReaderSpecific.ContinuousRead](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams-ReaderSpecific-ContinuousRead)
* [ScannerConfig.ReaderParams.ReaderSpecific.ImagerSpecific](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams-ReaderSpecific-ImagerSpecific)
* [ScannerConfig.ReaderParams.ReaderSpecific.LaserSpecific](/emdk-for-android/3-1/api/ScannerConfig-ReaderParams-ReaderSpecific-LaserSpecific)
* [ScannerConfig.ScanParams](/emdk-for-android/3-1/api/ScannerConfig-ScanParams)

###ScannerException
* [ScannerException](/emdk-for-android/3-1/api/ScannerException)

###ScannerInfo
* [ScannerInfo](/emdk-for-android/3-1/api/ScannerInfo)

###StatusData
* [StatusData](/emdk-for-android/3-1/api/StatusData)



## ScanAndPair APIs
The ScanAndPair API provides simple methods to scan a Bluetooth barcode (Bluetooth name or address) of a remote device and pair/unpair with the Bluetooth device.

###ScanAndPairManager
* [ScanAndPairManager](/emdk-for-android/3-1/api/ScanAndPairManager)
* [ScanAndPairManager.StatusListener](/emdk-for-android/3-1/api/ScanAndPairManager-StatusListener)

###ScanAndPairConfig
* [ScanAndPairConfig](/emdk-for-android/3-1/api/ScanAndPairConfig)
* [ScanAndPairConfig.BluetoothInfo](/emdk-for-android/3-1/api/ScanAndPairConfig-BluetoothInfo)
* [ScanAndPairConfig.ScanInfo](/emdk-for-android/3-1/api/ScanAndPairConfig-ScanInfo)

###ScanAndPairException
* [ScanAndPairException](/emdk-for-android/3-1/api/ScanAndPairException)

###ScanAndPairResults
* [ScanAndPairResults](/emdk-for-android/3-1/api/ScanAndPairResults)

###StatusData
* [StatusData](/emdk-for-android/3-1/api/StatusData)



## SimulScan APIs
SimulScan is an end-to-end data capture solution for extracting critical data from documents. A differentiating data capture value-add, it involves capturing fields of interest in a given document and converting it into data that an end-user application can use immediately at the point of transaction. SimulScan customers benefit from:

* Productivity gain by decoding multiple bar codes read with a single trigger pull
* Automated data entry with character recognition [OCR]
* Simplified workflow exceptions with checked mark recognition [OMR] and Signature presence detection.

Customers can interactively capture documents and obtain meaningful data present in the document.  Barcodes are identified and decoded; strings are recognized from fields containing text; images are refined from fields containing pictures and so forth. Based on a "template", an image of the entire document is processed by various engines to extract the relevant data.

###SimulScanManager
* [SimulScanManager](/emdk-for-android/3-1/api/SimulScanManager)

###SimulScanResults
* [SimulScanResults](/emdk-for-android/3-1/api/SimulScanResults)

###SimulScanConfig
* [SimulScanConfig](/emdk-for-android/3-1/api/SimulScanConfig)


###SimulScanData
* [SimulScanData](/emdk-for-android/3-1/api/SimulScanData)


###SimulScanElement
* [SimulScanElement](/emdk-for-android/3-1/api/SimulScanElement)


###SimulScanException
* [SimulScanException](/emdk-for-android/3-1/api/SimulScanException)


###SimulScanGroup
* [SimulScanGroup](/emdk-for-android/3-1/api/SimulScanGroup)


###SimulScanMultiTemplate
* [SimulScanMultiTemplate](/emdk-for-android/3-1/api/SimulScanMultiTemplate)


###SimulScanReader
* [SimulScanReader](/emdk-for-android/3-1/api/SimulScanReader)
* [SimulScanReader.DataListerner](/emdk-for-android/3-1/api/SimulScanReader-DataListerner)
* [SimulScanReader.StatusListerner](/emdk-for-android/3-1/api/SimulScanReader-StatusListerner)


###SimulScanReaderInfo
* [SimulScanReaderInfo](/emdk-for-android/3-1/api/SimulScanReaderInfo)


###SimulScanRegion
* [SimulScanRegion](/emdk-for-android/3-1/api/SimulScanRegion)

###RegionType
* [RegionType](/emdk-for-android/3-1/api/RegionType)

###SimulScanStatusData
* [SimulScanStatusData](/emdk-for-android/3-1/api/SimulScanStatusData)
* [SimulScanStatusData.ExtendedInfo](/emdk-for-android/3-1/api/SimulScanStatusData-ExtendedInfo)


###SimulScanTemplate
* [SimulScanTemplate](/emdk-for-android/3-1/api/SimulScanTemplate)


###SimulScanTemplateElement
* [SimulScanTemplateElement](/emdk-for-android/3-1/api/SimulScanTemplateElement)


###SimulScanTemplateGroup
* [SimulScanTemplateGroup](/emdk-for-android/3-1/api/SimulScanTemplateGroup)


###SimulScanTemplateRegion
* [SimulScanTemplateRegion](/emdk-for-android/3-1/api/SimulScanTemplateRegion)

## Personal Shopper APIs
The following API's are used to control the MC18(Personal Shopper) Cradle. Enabling your
application to perform tasks such as unlocking the cradle to allow the MC18 to be removed.


###PersonalShopper
* [PersonalShopper](/emdk-for-android/3-1/api/PersonalShopper)

###Cradle
* [Cradle](/emdk-for-android/3-1/api/Cradle)

###CradleConfig
* [CradleConfig](/emdk-for-android/3-1/api/CradleConfig)
* [CradleConfig.CradleLocation](/emdk-for-android/3-1/api/CradleConfig-CradleLocation)

###CradleException
* [CradleException](/emdk-for-android/3-1/api/CradleException)

###CradleInfo
* [CradleInfo](/emdk-for-android/3-1/api/CradleInfo)

###CradleLedFlashInfo
* [CradleLedFlashInfo](/emdk-for-android/3-1/api/CradleLedFlashInfo)

###CradleResults
* [CradleResults](/emdk-for-android/3-1/api/CradleResults)

###Diagnostic
* [Diagnostic](/emdk-for-android/3-1/api/Diagnostic)

###DiagnosticConfig
* [DiagnosticConfig](/emdk-for-android/3-1/api/DiagnosticConfig)

###DiagnosticData
* [DiagnosticData](/emdk-for-android/3-1/api/DiagnosticData)

###DiagnosticException
* [DiagnosticException](/emdk-for-android/3-1/api/DiagnosticException)

###DiagnosticResults
* [DiagnosticResults](/emdk-for-android/3-1/api/DiagnosticResults)


## Secure NFC APIs

###SecureNfcManager
* [SecureNfcManager](/emdk-for-android/3-1/api/SecureNfcManager)
* [SecureNfcResults](/emdk-for-android/3-1/api/SecureNfcResults)
* [SecureNfcException](/emdk-for-android/3-1/api/SecureNfcException)


###MifareDesfire
* [MifareDesfire](/emdk-for-android/3-1/api/MifareDesfire)
* [MifareDesfire.AppKeySettings](/emdk-for-android/3-1/api/MifareDesfire-AppKeySettings)
* [MifareDesfire.CardVersionInfo-HardwareInfo](/emdk-for-android/3-1/api/MifareDesfire-CardVersionInfo-HardwareInfo)
* [MifareDesfire.CardVersionInfo-ManufacturerInfo](/emdk-for-android/3-1/api/MifareDesfire-CardVersionInfo-ManufacturerInfo)
* [MifareDesfire.CardVersionInfo-SoftwareInfo](/emdk-for-android/3-1/api/MifareDesfire-CardVersionInfo-SoftwareInfo)
* [MifareDesfire.CardVersionInfo](/emdk-for-android/3-1/api/MifareDesfire-CardVersionInfo)
* [MifareDesfire.DFNames](/emdk-for-android/3-1/api/MifareDesfire-DFNames)
* [MifareDesfire.FileAccessRights](/emdk-for-android/3-1/api/MifareDesfire-FileAccessRights)
* [MifareDesfire.FileSettings](/emdk-for-android/3-1/api/MifareDesfire-FileSettings)
* [MifareDesfire.FileTypeSpecificSettings](/emdk-for-android/3-1/api/MifareDesfire-FileTypeSpecificSettings)
* [MifareDesfire.KeySettings](/emdk-for-android/3-1/api/MifareDesfire-KeySettings)
* [MifareDesfire.MasterKeySettingsType](/emdk-for-android/3-1/api/MifareDesfire-MasterKeySettingsType)
* [MifareDesfire.RecordFileSettings](/emdk-for-android/3-1/api/MifareDesfire-RecordFileSettings)
* [MifareDesfire.ValueFileSettings](/emdk-for-android/3-1/api/MifareDesfire-ValueFileSettings)
* [MifareDesfireExpection](/emdk-for-android/3-1/api/MifareDesfireExpection)
* [MifareDesfireResults](/emdk-for-android/3-1/api/MifareDesfireResults)

###MifarePlusSL3
* [MifarePlusSL3](/emdk-for-android/3-1/api/MifarePlusSL3)
* [MifarePlusSL3Exception](/emdk-for-android/3-1/api/MifarePlusSL3Exception)
* [MifarePlusSL3Results](/emdk-for-android/3-1/api/MifarePlusSL3Results)

###MifareSam
* [MifareSam](/emdk-for-android/3-1/api/MifareSam)
* [MifareSam.AdditionalAuthData-AV1Mode](/emdk-for-android/3-1/api/MifareSam-AdditionalAuthData-AV1Mode)
* [MifareSam.AdditionalAuthData-AV2Mode](/emdk-for-android/3-1/api/MifareSam-AdditionalAuthData-AV2Mode)
* [MifareSam.AdditionalAuthData](/emdk-for-android/3-1/api/MifareSam-AdditionalAuthData)
* [MifareSam.SamInfo-HardwareInfo](/emdk-for-android/3-1/api/MifareSam-SamInfo-HardwareInfo)
* [MifareSam.SamInfo-ManufacturerInfo](/emdk-for-android/3-1/api/MifareSam-SamInfo-ManufacturerInfo)
* [MifareSam.SamInfo-SoftwareInfo](/emdk-for-android/3-1/api/MifareSam-SamInfo-SoftwareInfo)
* [MifareSam.SamInfo](/emdk-for-android/3-1/api/MifareSam-SamInfo)
* [MifareSamException](/emdk-for-android/3-1/api/MifareSamException)
* [MifareSamResults](/emdk-for-android/3-1/api/MifareSamResults)

###PassThruApdu
* [PassThruApduResults](/emdk-for-android/3-1/api/PassThruApduResults)
* [PassThruApduProcessor](/emdk-for-android/3-1/api/PassThruApduProcessor)
* [PassThruApduException](/emdk-for-android/3-1/api/PassThruApduException)


###SamBase
* [SamBase](/emdk-for-android/3-1/api/SamBase)

###SamDiverseParams
* [SamDiverseParams](/emdk-for-android/3-1/api/SamDiverseParams)

###SamKey
* [SamKey](/emdk-for-android/3-1/api/SamKey)

###TagTechBase
* [TagTechBase](/emdk-for-android/3-1/api/TagTechBase)

