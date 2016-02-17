---
title: PassThruApduProcessor.ProtocolType
type: api
---


Communication protocol between a SAM and tag.
 The protocolType is added for future use only.
 This parameter does not have effect on protocol used by device to communicate with SAM. 
 TDA8029 smart card reader uses either T=0 or T=1 depending on protocol supported by the connected SAM. 
 User can provide it as either SC_PROTOCOL_T0 or SC_PROTOCOL_T1.Communication protocol (i.e. T=0 or T=1) 
 between TDA8029 (Smart card reader chip) and SAM is always decided by TDA8029 as per protocol supported 
 by the connected SAM. Thus if SAM supports only T=0 protocol then TDA8029 will set communication mode as T=0, 
 else if SAM supports only T=1 protocol then TDA8029 will set communication mode as T=1.

**Values:**

* **T0** -T-0 byte-oriented half duplex transmission protocol

* **T1** -T-1 block-oriented half duplex transmission protocol

