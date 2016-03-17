---
title: PassThruApduResults
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


APDU Service errors

**Values:**

* **SUCCESS** -Success

* **FAILURE** -Failed

* **INIT_FAILURE** -The SAM is not initialized properly.

* **INVALID_OBJECT** -Invalid Object

* **INVALID_VALUE** -Invalid input parameter

* **NFC_DISABLED** -NFC is disabled on the device. Try enabling the NFC before using the
 secure NFC API.

* **FRAMING_ERROR** -Error in the frame.

* **BAD_NAD** -Bad NAD error

* **CARD_DEACTIVATED** -The smart card is deactivated.

* **CARD_MUTED** -The smart card is muted during the T=1 exchange.

* **PROCESSING_CHAIN_ABORTED** -The smart card processing chain aborted during transmission and
 reception.

* **CMD_FRAME_LOST** -Atleast one command frame is lost while processing the APDU.

* **NOT_ENABLED** -The connection to SAM is not established.

* **SAM_NOT_AVAILABLE** -SAM not present in the device. Try inserting SAM before using the Secure
 NFC API.

* **LENGTH_TOO_SHORT** -The length is too short occurs when actual length of data received from
 SAM is less than expected length.

* **NEGATIVE_LENGTH** -The negative length error occurs when actual length is less than zero.

* **CARD_MEMORY_OVERFLOW** -The memory overflow from the smart card.

* **TX_PARITY_ERROR** -The hardware parity error during the transmission of data.

* **RX_PARITY_ERROR** -The hardware parity error during the reception of the data.

* **RESYNC** -Resyncing is required.

* **SERIAL_LRC_ERR** -Serial LRC error

* **TIME_OUT** -The hardware timed out after the waiting time.

* **TOO_SHORT_APDU** -The hardware error due to APDU length is short

* **UART_BUFFER_OVERFLOW** -UART buffer overflow

* **VOLTAGE_DROP** -Voltage supply dropped.

* **INVALID_APDU** -The APDU command is invalid or wrong

* **PROC_BYTE_ERR** -The Hardware procedure byte error

* **TEMP_ALARAM** -The temperature is out of range.

* **EMDK_NOT_OPENED** -EMDK is not opened.

* **UNDEFINED** -Error code not defined.









