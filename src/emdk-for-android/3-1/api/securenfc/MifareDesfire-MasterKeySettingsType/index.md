---
title: MifareDesfire.MasterKeySettingsType
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Master key setting type

##Public Fields

###masterKeyChangeable

Allow changing master key false: Not Changeable (frozen)
 true:Changeable

**Type:**

boolean

###freeDirList

Free directory list without master key access false: Require card or
 application master key authentication true: Do not require card or
 application master key authentication

**Type:**

boolean

###freeCreateDelete

Master key not required for create/delete false: Require card master
 key authentication true: Do not require card master key
 authentication

**Type:**

boolean

###configChangeable

Configuration changeable. false: not changeable (frozen) true:
 changeable

**Type:**

boolean

###changeKeyAccessRights

Access rights for changing application keys (ChangeKey command) 00:
 Master key authentication required 0x01-0x0D: Authentication with
 specified key is required 0x0E: Authentication with same key no. is
 required 0x0F: All keys within this application are frozen

**Type:**

byte













