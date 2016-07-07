---
title: SamDiverseParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


SAM diversification parameters

##Constructors

###SamDiverseParams



##Public Fields

###tdeaEncRounds

DES or 2K3DES encryption rounds false: 1 round true: 2 rounds

**Type:**

boolean

###diverseMode

Key diversification mode to be used false: AV1 true: AV2

**Type:**

boolean

###diverseInput

Diversification input data Data length: 8 bytes (3DES) or 16 bytes (AES)
 for SAM AV1 or SAM AV2 in AV1 compatibility mode 1-15 bytes (3DES) or
 1-31 bytes (AES) for SAM AV2 in AV2 mode

**Type:**

byte

