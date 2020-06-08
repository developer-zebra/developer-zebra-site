---
title: Secure NFC Programmer’s
layout: guide.html
product: EMDK For Android
productversion: '7.6'
---

##Introduction
The EMDK for Android provides developers with a comprehensive set of tools to easily create Secure NFC application for use with the Zebra Technologies Corporation mobility device.

 >NOTE: Your application should leverage the [android NFC APIs](http://developer.android.com/reference/android/nfc/package-summary.html) to read standard NFC tags. The EMDK Secure NFC API allows you to securely communicate with the tags such as  MifareDesfire, MifarePlus SL3 using the Secure Access Module (SAM).
 
 >`At this time only MifarePlus 4K memory contactless Security level 3 cards are not supported, only 2k cards are supported.`

##SecureNfcManager Usage

The APIs provided by this class are used to determine the type of SAM available in the mobile device, get the instance of the SAM object, to know the type of the tag detected by the device and to get the instance of the tag type object.

>NOTE: To use SecureNfcManager APIs, a SAM (Secure Access Module) must be inserted into SIM Slot 1 in the device

###Android Manifest Changes
**Request NFC Access**

		:::xml
		<uses-permission android:name="android.permission.NFC" />

**Set minimum AndroidSDK version**

		:::xml
		<uses-sdk android:minSdkVersion="10"/>

**Add uses-feature element so that your application shows up in Google Play only for devices that have NFC hardware**

		:::xml
		<uses-feature android:name="android.hardware.nfc" />


**Register NFC Intent Actions**

		:::xml
		<intent-filter>
        	<action android:name="android.nfc.action.NDEF_DISCOVERED" />
        </intent-filter>

        <intent-filter>
           	 <action android:name="android.nfc.action.TAG_DISCOVERED" />
        </intent-filter>

        <intent-filter>
           	 <action android:name="android.nfc.action.TECH_DISCOVERED" />
        </intent-filter>



###Example usage

**Determine the type of SAM available on device and get the instance of MifareSam object**


		:::java
		SecureNfcManager secureNfcMgr = (SecureNfcManager) emdkManager.getInstance(FEATURE_TYPE.SECURENFC);

		if (secureNfcMgr != null) {
			try {
				samType - secureNfcMgr.getAvailableSam();
				if (samType.equals(SamType.MIFARE)) {
					MifarSam mifareSam = (MifareSam) secureNfcMgr.getSamInstance (samType);
				}
			} catch (SecureNfcException e) {
				e.printStackTrace();
			}
		}



**Determine the type of tag detected by the device and get the instance MifareDesfire & MifarePlusSl3**

		:::java
		public void onNewIntent(Intent intent) {
		if (NfcAdapter.ACTION_NDEF_DISCOVERED.equals(intent.getAction())
		|| NfcAdapter.ACTION_TAG_DISCOVERED.equals(intent.getAction ())
		|| NfcAdapter.ACTION_TECH_DISCOVERED.equals(intent.getAction ())) {
			Tag lTag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
			if (lTag != null) {
				TagTechType tagType;
				try {
					tagType = secureNfcMgr.getTagTechType(lTag);
					if (tagType.equals(TagTechType.MIFARE_DESFIRE)) {
						MifareDesfire mMifareDesfire = (MifareDesfire)  secureNfcMgr.getTagTechInstance(tagType);
					}
					else if(tagType.equals(TagTechType.MIFARE_PLUS_SL3)) {
						MifarePlusSL3 mMifarePlusSl3 = (MifarePlusSL3)   secureNfcMgr.getTagTechInstance(tagType);
					}

				} catch(SecureNfcException e) {
					e.printStackTrace ();
			}

##MifareSam API Usage

The APIs provided by this class are used to establish a secure connection with SAM, to do SAM to Host authentication, and to get the SAM information such as (manufacturer Id, type, version , memory size ,compliant protocol ,UID, batch number and production date(MM/DD/YYYY) ).

**Host to SAM Authentication**

Host to Sam authentication is **mandatory** before using any of the tag APIs i.e., MifareDesfire or MifarePlus APIs. Failing to authenticate will restrict read/write operations to/from files. Successful authentication will persist until the device is rebooted. It is recommended to close the MifareSam as soon as the authentication is done.

###Example Usage

**Establish the secure connection from SAM to host**

		:::java
		samMode = mifareSam.connect();

		SamKey = new SamKey();
		samKey.keyNum = 0x00;
		samKey.keyVer = 0x00;

		mifareSam.authenticateSam(authKey, samKey, null);
		mifareSam.close();


##MifareDesfire API Usage

The APIs provided by this class are used to:

* Enable a connection with the tag
* Authenticate the applications on the tag
* Get tag information such as manufacturer Id, type, version , memory size ,compliant protocol ,UID, batch no and production details (month and year)
* Get the file settings of the files created on the tag
* Get key settings of the keys stored on the tag
* Read/write the data from/to the standard file
* Read/write record file (linear and cyclic record)
* Read/write credit/debit integer value from the value file
* Retrieve the application Ids and file Ids created on the tag
* Determine the free memory available on the tag and etc.



###Enabling and authenticating with Desfire APIs

The enable API is used to establish a connection with the tag. Without which other operations cannot be performed. The application on the tag on which I/O operations are to be performed, needs to be authenticated using the authenticate API. The tag is enabled until the connection is disabled or until a tag lost exception has occurred. On tag lost, the connection has to enabled again by the application user. Authentication API must not be called from the main application thread since it is blocking operation.

###Performing the I/O operation on the tag

>NOTE: To perform any I/O operation on the tag , it has to be preceded with the authentication and must not be called from the main application thread.

**SamKey** - SamKey is the key which is stored on the MifareSam using the NXP Pegoda reader and are used for authentication purposes.

**Commit Transaction** - The transaction has to committed to validate all previous write access’ on Backup data files, Value files, and Record files within one application.

This API should be used only after executing below APIs:

* writeData() for Backup file
* credit() or debit() for Value file
* writeRecord() for Record file
* resetRecord() for Record file.

**Abort Transaction**

Abort transaction is used to invalidate all previous write access’ on Backup data files, Value files, and Record files within one application.

This API should be used only after executing below APIs:

* writeData() for Backup file
* credit() or debit() for Value file
* writeRecord() for Record file
* resetRecord() for Record file.


**Reset Record**

Resets cyclic or linear record file to empty state. Preceding authentication, with key specified for Read&Write access is required. The transaction  has to be committed after reset call without which the changes will get invalidated.

###Example Usage

Authentication must occur before performing credit operation on the Value File. After calling credit(), commitTransaction() has to be called to validate all previous write access’ on value files, within one application

		:::java
		SamKey lSamKeyForReadWrite = new SamKey();
		lSamKeyForReadWrite.keyNum = 0x05;   //Samkey on MifareSam
		lSamKeyForReadWrite.keyVer = 0x00;  
		mifareDesfire.enable(lTag);

		mifareDesfire.selectApplication( application_Id);

		// Authenticating with Read&Write access key. If we authenticate
		// once with read&write access key this authentication
		// is valid for all the subsequent operations unless exception
		// has occurred or disable() call.

		mifareDesfire.authenticate(AuthenticateType.NATIVE,
				MifareTagConstants.CARD_KEY_FOR_READ_WRITE,
				lSamKeyForReadWrite, null);

		mifareDesfire.credit(CreditType.STANDARD,Value_File_Id,communication_type,valueTobeCredited);

		mifareDesfire.commitTransaction();


Authentication must occur before performing write operation on the Record file. CommitTransaction() has to be called after the writeRecord() to validate all previous write access’ on record files, within one application**

		:::java
		SamKey lSamKeyForReadWrite = new SamKey();
				lSamKeyForReadWrite.keyNum = 0x05;   //Samkey on MifareSam
			lSamKeyForReadWrite.keyVer = 0x00;  
		mifareDesfire.selectApplication( application_Id);

		// Authenticating with Read&Write access key. If we authenticate
						// once with read&write access key this authentication
						// is valid for all the subsequent operations unless exception
		// has occurred or disable() call.

						mifareDesfire.authenticate(AuthenticateType.NATIVE,
								MifareTagConstants.CARD_KEY_FOR_READ_WRITE,
								lSamKeyForReadWrite, null);

		mifareDesfire.writeRecord(RECORD_FILE_ID, CommunicationType,0, RECORD_SIZE,dataToBeWritten);

		mifareDesfire.commitTransaction();


##MifarePlusSL3 API Usage

The APIs provided by this class is used to enable the connection with the tag ,authenticate the sectors before performing any read/write operation, read/write the data from/to the data block, and also the API to increment/decrement the  integer value from the value block.

### API operations

* **Enabling the tag** - The enable API is used to establish the connection with the tag without which other operations cannot be performed.

* **First authentication** - The first authentication is used to authenticate the sectors before performing any read/write operation.

* **Following authentication** - This authentication should be performed after successful first authentication. Following authentication helps to save the protocol time. It is also possible to use only  firstAuthentication always.

* **Reset authentication** - Resets authentication status of the card. After execution of this method card will not be in an authenticated state. Hence host must authenticate the card by calling firstAuthentication before further communication.

* **WriteValue** - This converts the data block to the value block by writing the given value to the specified block.

* **ReadValue** - This  is used to read the value from the specified value block.

* **Transfer** - This is used to transfer the contents from the transfer buffer to the specific value block.

* **Restore** - This is used to transfer the contents from the specific value block to the transfer buffer.


###Example Usage

>NOTE: Authentication is **mandatory** before performing the following API operations.

**Increment operation on the Value block** - transfer() must be called after the increment() to transfer the contents from the transfer buffer to the specific value block.

		:::java
		try {
				SamKey lSamKeyForValue = new SamKey();//Samkey on the MifareSAM
				lSamKeyForValue.keyNum = 0x10;
				lSamKeyForValue.keyVer = 0x00;
				mifarePlusSl3.firstAuthentication(KEY_A_VALUE_BLOCK, lSamKeyForValue, null, null);
				mifarePlusSl3.increment(true, VALUE_BLOCK_NO, value);
				mifarePlusSl3.transfer(true, VALUE_BLOCK_NO);
				int value= mifarePlusSl3.readValue(false, true, true, VALUE_BLOCK_NO);

			} catch (MifarePlusSL3Exception e) {
			   e.printStackTrace();
		 	}


**Write value operation on the Value block**

		:::java
		try {
					SamKey lSamKeyForValue = new SamKey();//Samkey on the MifareSAM
				 	lSamKeyForValue.keyNum = 0x10;
				 	lSamKeyForValue.keyVer = 0x00;
					mifarePlusSl3.firstAuthentication(KEY_A_VALUE_BLOCK, lSamKeyForValue, null, null);
					mifarePlusSl3.writeValue(false, true, VALUE_BLOCK_NO, 50);
					int  value= mifarePlusSl3.readValue(false, true, true, VALUE_BLOCK_NO);
				} catch (MifarePlusSL3Exception e) {
					e.printStackTrace();
		 	  }


**Read data operation on the data block**

			:::java
			try {
					SamKey lSamKeyForDataBlock = new SamKey(); //Samkey on the MifareSAM
					lSamKeyForDataBlock.keyNum = 0x12;
					lSamKeyForDataBlock.keyVer = 0x00;
					// all the 3 blocks are on the same sector
					mifarePlusSl3.firstAuthentication(MifareTagConstants.KEY_A_DATA_BLOCK, lSamKeyForDataBlock,
							null, null);

					mifarePlusSl3.writeBlock(true, true, MifareTagConstants.DATA_BLOCK_1,
									dataToBeWritten.getBytes());

					} catch (final MifarePlusSL3Exception e) {
						e.printStackTrace();
				  }


**IncrementTransfer operation on the Value block**

		:::java
			try {
				  SamKey lSamKeyForValue = new SamKey(); //Samkey on the MifareSAM
					lSamKeyForValue.keyNum = 0x10;
			 	  lSamKeyForValue.keyVer = 0x00;
					mifarePlusSl3.firstAuthentication(KEY_A_VALUE_BLOCK,
			 		lSamKeyForValue, null, null);

					mifarePlusSl3.incrementTransfer(true, VALUE_BLOCK_NO, VALUE_BLOCK_NO,
							value);

			    } catch (MifarePlusSL3Exception e) {
			   e.printStackTrace();
		 	  }


















