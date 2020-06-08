---
title: SerialComm Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '8.0'
---

## Overview

The `serialCommManager` is the primary object created by the `SerialCommManager` class. It is used to communicate with remote devices through a serial or USB port on the mobile device.

-----

### Get SerialCommManager

An EMDK app must be opened before getting the `serialCommManager` object and must release the `SerialCommManager` class before quitting.

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

### Get SerialComm/Port

An app can get a `SerialComm` port object by enumerating the `SerialPortInfo`. 

First use the `SerialCommManager.getSupportedPorts()` first and pass one of the received `SerialPortInfo` objects to `SerialCommManager.getPort(SerialPortInfo portInfo)`: 

    :::java
    List<SerialPortInfo> serialPorts = serialCommManager.getSupportedPorts();
    serialComm = serialCommManager.getPort(serialPorts.get(0));

**Support Notes**: 

* **TC70/TC75** devices enumerate only one port. 
* **VC80X** devices enumerate two or more ports.

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

**Note**: TC70/TC75 devices running Lollipop and Marshmallow do not support `getConfig` or `setConfig` functions. 

#### Get Config

Get the current configuration settings of the `SerialComm` channel: 

    :::java 
    SerialCommConfig config = serialComm.getConfig();

If modifications are made to the returned `SerialCommConfig` object, the `SerialComm.setConfig(SerialCommConfig)` must be called for changes to take effect.

The `SerialComm` object must be enabled before calling `getConfig()` and `setConfig()` methods.

#### Set Config
 
Set the `SerialComm` settings for the currently selected port: 

    :::java
    //Get the supported configuration for the serial port:
    SerialCommConfig config = serialComm.getConfig(); 
    config.baudRate = SerialCommConfig.BaudRates.BR_9600; //Set baud rate
    config.dataBit = SerialCommConfig.DataBits.EIGHT; //Set dataBit
    config.parity = SerialCommConfig.ParityBits.EVEN; //Set parity
    config.stopBit = SerialCommConfig.StopBits.ONE; //Set stopBit
    config.flowControlMode = SerialCommConfig.FlowControlMode.RTS_CTS; //Set flow control
    serialComm.setConfig(config); // Save the configuration for the port


If the given value is not supported or is invalid, an exception will be thrown with an error code and failure description. The `SerialComm` object must be enabled before calling `getConfig()` and `setConfig()` methods.

-----

### Signal State

**Note: Some BSPs do not support this function**. 

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

The code below demonstrates how to get the `SerialCommManager` object, enumerate, get, configure and write to a serial port, and to disable it when the app is finished using it.  

        :::java
    public class MainActivity extends Activity implements EMDKListener {
        SerialComm serialComm;
        SerialCommManager serialCommManager;
        EMDKManager emdkManager;
        private String TAG = MainActivity.class.getSimpleName();
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            //
            // Get the EMDK manager:
            EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this); 
        }
        @Override
        public void onOpened(EMDKManager emdkManager) {
            this.emdkManager = emdkManager;
            Log.d(TAG, "EMDK Opened and ready to use.");
            //
            // Get the serialCommManager instance:
            serialCommManager = (SerialCommManager) this.emdkManager.getInstance(FEATURE_TYPE.SERIALCOMM_EX); 
            try {
                //...
                // Note: For most devices, this method (below) will return only one port.
                // On the VC80, this could return two or more ports.
                //
                // Get the list of supported ports on the device. 
                List<SerialPortInfo> serialPorts = serialCommManager.getSupportedPorts();
                //
                // Get the serialComm/port object by passing a SerialPortInfo object:
                serialComm = serialCommManager.getPort(serialPorts.get(0)); 
                //...
                //
                // Enable the serial port:
                serialComm.enable(); 
                //
                // Get the supported configuration for the serial port:
                SerialCommConfig config = serialComm.getConfig(); 
                config.baudRate = SerialCommConfig.BaudRates.BR_9600; // Set baud rate
                config.dataBit = SerialCommConfig.DataBits.EIGHT; // Set dataBit
                config.parity = SerialCommConfig.ParityBits.EVEN; // Set parity
                config.stopBit = SerialCommConfig.StopBits.ONE; // Set stopBit
                config.flowControlMode = SerialCommConfig.FlowControlMode.RTS_CTS; // Set flow control
                serialComm.setConfig(config); // Set the configuration for the port
                
                //...
                String writeData = "Text to write";
                //
                // Write the data in writeData object to serial port:
                int bytesWritten = serialComm.write(writeData.getBytes(), writeData.getBytes().length); 
                //...
                //
                // Disable the serial port after using:
                serialComm.disable(); 
                //...
                //
                // Release the serialCommManager after using:
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
     