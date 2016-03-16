---
title: MifareSam.AdditionalAuthData.AV1Mode
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

Data specific to the AV1 Sam Mode. **Future use only, its not
 supported now**

##Constructors

###AV1Mode



##Public Fields

###useLogicalChannelForCMacCalculation

useLogicalChannelForCMacCalculation - False: Do not use logical
 channel for CMAC calculation. True: Use logical channel for CMAC
 calculation. **This is not supported, hence application should
 pass false**

**Type:**

boolean

###useSecretKeyForCrypto

useSecretKeyForCrypto - False: Generate session key by
 authentication. True: Use secret key for crypto. **This is not
 supported, hence application should pass false.**

**Type:**

boolean

###samDiverseParams

samDiverseParams Diversification parameters for current key.If
 diversification is not required by current key then this
 parameter should be NULL. **This is not supported, hence
 application should pass null.**

**Type:**

com.symbol.emdk.securenfc.SamDiverseParams










