---
title: MifareDesfire.AppKeySettings
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---




##Public Fields

###numOfKey

Number of keys stored in application for cryptography 0-14 keys can
 be stored

**Type:**

byte

###isoCompliantFileIDs

Allow ISO/IEC 7816-4 file IDs (2 byte long) within application
 False:Not allowed True: Allowed

**Type:**

boolean

###cryptoMethod

Cryptography method of whole application CRYPTO_DES_2K3DES (0x00)
 CRYPTO_3K3DES (0x01) CRYPTO_AES (0x02)

**Type:**

byte


