---
title: SerialComm Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '6.8'
---

## Overview

The `SerialCommManager` is the primary object used communicate with remote devices using serial or USB ports of the mobile device.

### Get SerialCommManager

An EMDK app must be opened before getting the `SerialCommManager` object and must release the `SerialCommManager` before quitting.

To get the `SerialCommManager`:

    :::java
    serialCommManager = (SerialCommManager) this.emdkManager.getInstance(FEATURE_TYPE.SERIALCOMM_EX);
    //
    // FEATURE_TYPE.SERIALCOMM method is deprecated - use FEATURE_TYPE.SERIALCOMM_EX instead
    //


If serial communication is not supported in a device, a `getInstance()` call will return null. Before making any calls that use `SerialCommManager`, check to whether it is null: 

    :::java
    if (serialCommManager != null) {
        //..
    }

-----

### Enumerate SerialComm/Port

An app can get `SerialComm` by enumerating the `SerialPortInfo`. 

First use the `SerialCommManager.getSupportedPorts()` first and pass one of the received `SerialPortInfo` objects to `SerialCommManager.getPort(SerialPortInfo portInfo)`: 

    :::java
    List<SerialPortInfo> serialPorts = serialCommManager.getSupportedPorts();
    serialComm = serialCommManager.getPort(serialPorts.get(0));

-----

### Use SerialComm/Port

To use a SerialComm port, the port must first be enabled and opened in a session with the hardware. Zebra also recommends disabling the port when communications are concluded.

#### Writing Data

    :::java
    String writeData = "Text to write";
    int bytesWritten = serialComm.write(writeData.getBytes(), writeData.getBytes().length);

The `SerialComm.Write()` method writes a specified number of bytes from the buffer to the open communication channel. This method returns the numbers bytes written. An exception will be thrown in the event of any errors (see notes below). 

**Notes**: 

* **Can write no more than 4096 bytes at a time. -** Attempts to pass more will result in an error.
* **Synchronous method -** could potentially block the application's main thread depending on the time it takes to send the data to the remote device. 

#### Reading Data

    :::java
    byte[] readBuffer = serialComm.read(10000); //Timeout after 10 seconds

The `SerialComm.Read()` method reads the available data and returns it immediately. If no data is available, it waits until a timeout occurs and returns null if no data is available. An exception will be thrown in the event of any errors (see notes below).

**Notes**:

* **App must handshake with remote-device client -** to avoid the data loss.
* **Can receive no more than 4096 bytes at a time. -** All data will be lost if read buffer is greater than 4096 bytes when data arrives from remote-device client.
* **Synchronous method -** could potentially block the application's main thread depending on the read timeout, leading to an "application not responding" state. The application should call this method on a separate thread to avoid ANR problems.

-----

### Get/Set Config

#### Get config

Get the current configuration settings of the `SerialComm` channel: 

    :::java 
    SerialCommConfig config = serialComm.getConfig();

If modifications are made to the returned `SerialCommConfig` object, the `SerialComm.setConfig(SerialCommConfig)` must be called for changes to take effect.

The `SerialComm` object must be enabled before calling `getConfig()` and `setConfig()` methods.

#### Set Config
 
Set the `SerialComm` settings for the currently selected port: 

    :::java
    SerialCommConfig config = serialComm.getConfig();
    config.baudRate = 9600;
    config.dataBit = SerialCommConfig.DataBits.EIGHT;
    config.parity = SerialCommConfig.ParityBits.EVEN;
    config.stopBit = SerialCommConfig.StopBits.ONE;
    serialComm.setConfig(config);

If the given value is not supported or invalid, an exception will be thrown with an error code and failure description. The `SerialComm` object must be enabled before calling `getConfig()` and `setConfig()` methods.

-----

### Signal State

* Supported on EMDK 6.1.0 and higher
* Not supported on all BSPs

#### Get Signal State

Use this method to query the signal status of DTR, DCD, DSR, RI, RTS and CTS: 

    :::java
    boolean signalState = serialComm.getSignalState(SerialComm.ControlSignal.DTR);

#### Set Signal State


This method allows the application to set the status of control signal. 

    :::java
    boolean signalState = serialComm.getSignalState(SerialComm.ControlSignal.DTR);
    serialComm.setSignalState(SerialComm.ControlSignal.DTR, signalState);

**Supports setting of RTS and DTR only**. Attempts to set other signaling states will return a "read only" error message.

-----

## Sample Code

    :::java
    public class MainActivity extends Activity implements EMDKListener {
        SerialComm serialComm;
        SerialCommManager serialCommManager;
        EMDKManager emdkManager;
        private String TAG = MainActivity.class.getSimpleName();
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
        }
        @Override
        public void onOpened(EMDKManager emdkManager) {
            this.emdkManager = emdkManager;
            Log.d(TAG, "EMDK Opened and ready to use.");
            serialCommManager = (SerialCommManager) this.emdkManager.getInstance(FEATURE_TYPE.SERIALCOMM_EX);
            try {
                //...
                List<SerialPortInfo> serialPorts = serialCommManager.getSupportedPorts();
                serialComm = serialCommManager.getPort(serialPorts.get(0));
                //...
                serialComm.enable();
                //...
                String writeData = "Text to write";
                int bytesWritten = serialComm.write(writeData.getBytes(), writeData.getBytes().length);
                //...
                serialComm.disable();
                //...
                emdkManager.release(FEATURE_TYPE.SERIALCOMM_EX);
            }
            catch (Exception ex)
            {
                
            }
        }
        @Override
        public void onDestroy() {
            if(this.emdkManager != null) {
                this.emdkManager.release();
                this.emdkManager = null;
            }
            super.onDestroy();
        }
        @Override
        public void onClosed() {
            if(this.emdkManager != null) {
                this.emdkManager.release();
            }
            Log.d(TAG, "EMDK closed");
        }
    }
