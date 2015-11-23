#MifareDesfire.RecordFileSettings



##Public Fields

###recordSize

Size of each record. Value: 0x00000001 - 0x00FFFFFF

**Type:**

int

###maxNumOfRecords

Maximum number of records that can be stored Value for linear record
 file: 0x00000001 - 0x00FFFFFF Value for cyclic record file:
 0x00000002 - 0x00FFFFFF For linear file: total file size = recordSize
 x maxNumOfRecords For cyclic file: total file size = (recordSize x
 maxNumOfRecords) + 1 byte

**Type:**

int

###currentNumOfRecords

Current number of records present in the file

**Type:**

int

