---
title: Software Development for Printing FAQ
layout: guide.html
product: Printing FAQ
productversion: Version 1.0
---

## Contents
* [Purpose](#purpose)
* [Who Should Use This](#whpshouldusethis)
* [How This Document is Organized](#howthisdocumentisorganized)

**Common Issues**

1. [App Is Crashing](#crashing)
2. [Printer Not Printing Properly](#notPrint)
3. [It Takes a Long Time To Print](#timeToPrint)

## Purpose
The Zebra ISV technical team has been working with developers for several years.  Part of the group’s charter is to provide developer support and testing services.  We created this document based on common issues we see regularly.  You can avoid many of these issues by following the Best Practices for Printing.  We wish to provide developers with guidance on: 

* Common performance and stability mistakes that we have seen many times.
* How to create the best user experience for their customers.
* How to best utilize Zebra value added features

Many issues can be aleviated by following the Zebra Printing [Best Practices].

[Top^](#top)

## Who Should Use This
There are several primary audiences for this document.
1. Software developers writing code to print to or manage Zebra printers.
2. Test Engineers looking for the best methods to test applications that involve Zebra printers.
3. User Experience Engineers looking for advice in providing better UX when printing is involved.
4. Zebra Partners who are looking to have their software validated by Zebra. 

[Top^](#top)

## How This Document Is Organized 
Each section starts with a common question and follows with common things to try to fix it as well as reasons for the issues.  It also includes code samples and links to further documentation for fixes.  
 
The code samples in this document are in Java for Android, assuming the use of the Link-OS Multiplatform SDK and working with ZPL page description language.  You can implement these fixes in nearly any programming language for nearly any OS, with any Zebra printer, any page description language, with or without the SDK.  The SDK makes it easier.  The sample code herein is meant to be an example and may need to adjusted to fit your use case.  More examples of implementing Best Practices can be found on the Zebra [Github] repo.  If you have implementation questions, ask at the Zebra [Developer Portal]. 

[Top^](#top)

<!-- 
To draw a rule, use five hyphens 
-->

------

## 1. What do I do if...
### **My app crashed while communicating to the printer?** 

##### If you think the app is crashing because you are communicating to the printer:
* If the device is unable to communicate because it is out of range or the printer is off, it will throw an exception. Make sure all communication to the printer is in try/catch statements. 
    
        
        :::java

        public void print()
         {
             new Thread(new Runnable() {
                public void run() {
                    Looper.prepare();
                    _print();
                    Looper.loop();
                    Looper.myLooper().quit();
                }
            }).start();
         }
         private void _print()
         {    
             // Instantiate connection for ZPL TCP port at given address
             Connection printerConnection = new TcpConnection(theIpAddress, TcpConnection.DEFAULT_ZPL_TCP_PORT);
        
          try {
             // Open the connection - physical connection is established here.
             printerConnection.open();
    
             // Set settings, check status, print, etc.
         } catch (ConnectionException e) {
             // Handle communications error here.
             e.printStackTrace();
         } finally {
             // Close the connection to release resources.
             printerConnection.close();
         }
     }


* Verify you have the proper permissions to communicate *(see documentation)*
* Communicating to the printer can sometimes take time, sometimes seconds.  Handle it as a long running task. Always communicate to the printer on a thread other than the UI. *(see code above)*
##### If you are concerned the print jobs were not printed:
* If you want to verify if the print jobs were sent and printed, there are two options.  Used in combination, they can help you in mission critical print applications:
    1. Check print status during printing 

        
        :::java

        // Check during / after printing
        private boolean postPrintCheckPrinterStatus(Connection connection)
        {
            ZebraPrinter printer = ZebraPrinterFactory.getInstance(PrinterLanguage.ZPL, connection);
            PrinterStatus printerStatus = printer.getCurrentStatus();
            
            // loop while printing until print is complete or there is an error
            while ((printerStatus.numberOfFormatsInReceiveBuffer > 0) && (printerStatus.isReadyToPrint))
            {
	            printerStatus = printer.getCurrentStatus();
            }
            if (printerStatus.isReadyToPrint) {
                 System.out.println("Ready To Print");
                 return true;
             } else if (printerStatus.isPaused) {
                 System.out.println("Cannot Print because the printer is paused.");
             } else if (printerStatus.isHeadOpen) {
                 System.out.println("Cannot Print because the printer head is open.");
             } else if (printerStatus.isPaperOut) {
                 System.out.println("Cannot Print because the paper is out.");
             } else {
                 System.out.println("Cannot Print.");
             }
            return false;
        }
        


2. Keep track of the odometer in the printer to check labels printed.

             
            :::java
             // Set settings, check status, print, etc.
             if (setPrintLanguage(statusConnection) && checkPrinterStatus(statusConnection))
             {
                 int labelCount = Integer.parseInt(SGD.GET("odometer.total_label_count", statusConnection));
                 // Send Print Job (1 label)
                 String zplData = "^XA^FO20,20^A0N,25,25^FDThis is a ZPL test.^FS^XZ";
                 printerConnection.write(zplData.getBytes());
             
                 if (postPrintCheckPrinterStatus(statusConnection))
                 {
	                 int newLabelCount = Integer.parseInt(SGD.GET("odometer.total_label_count", statusConnection));
	                 if (newLabelCount == labelCount + 1)
	                 {
		                 System.out.println("Print Successful.");
	                 }
                 }
                 //else reprint?
             }


[Top^](#top)

------

## 2. What do I do if...
### **My printer doesn't print or doesn't print what I want it to?** 

* The printer may not be in a good state to print.  Check and display the printer status.


        
        :::java
        // check prior to printing
        private boolean checkPrinterStatus(Connection connection)
            {
                ZebraPrinter printer = ZebraPrinterFactory.getInstance(PrinterLanguage.ZPL, connection);
                PrinterStatus printerStatus = printer.getCurrentStatus();
                 if (printerStatus.isReadyToPrint) {
                     System.out.println("Ready To Print");
                     return true;
                 } else if (printerStatus.isPaused) {
                     System.out.println("Cannot Print because the printer is paused.");
                 } else if (printerStatus.isHeadOpen) {
                     System.out.println("Cannot Print because the printer head is open.");
                 } else if (printerStatus.isPaperOut) {
                     System.out.println("Cannot Print because the paper is out.");
                 } else {
                     System.out.println("Cannot Print.");
                 }
                return false;
            }


* Verify the page description language is set to what you want it to be.

       
        :::java
        private boolean setPrintLanguage(Connection connection)
        {
            //  Set the print language in the printer
            // Can also use the SGD class
            String setLanguage = "! U1 setvar \"device.languages\" \"zpl\"\r\n\r\n! U1 getvar \"device.languages\"\r\n\r\n";
            byte[] response = connection.sendAndWaitForResponse(setLanguage.getBytes(), 500, 500);
            String s = new String(response, "UTF-8");
            if (!s.contains("zpl"))
            {
                System.out.println("Not a ZPL printer.");
                return false;
            }
            return true;
        }



* Verify you have the proper permissions in your app to communicate *(see documentation)*

* Verify your ZPL is correct 
	* Preview with the printer web page *(see [this article](https://developer.zebra.com/community/technologies/printers/label-printers/blog/2017/01/31/printer-web-page) for details)*
	* Design your label with Label Design tools such as [ZebraDesigner ](https://www.zebra.com/us/en/products/software/barcode-printers/zebralink/zebra-designer.html).
* Calibrate the printer *(ZPL command [^JC](https://www.zebra.com/content/dam/zebra/manuals/en-us/software/zpl-zbi2-pm-en.pdf#page=223), or see your specific printer [User Guide](https://www.zebra.com/us/en/support-downloads/printers.html))*
* Verify the darkness, label size and other settings are correct *(see [Setup Utility])*

[Top^](#top)

------

## 3. What do I do if...
### **It takes a long time to print?** 

* The slowest part of printing is often the data transmittal speed.  To optimize this, reduce the amount of data being sent to the printer by:
 * Use a page description language
 * Avoiding the use of graphics and making sure necessary graphics are small
 * Use templates or stored formats *(See code on [Github](https://github.com/Zebra/LinkOS-Android-Samples/tree/ZSDK_DevDemos_Combined/ZSDK_DevDemos_Combined/app/src/main/java/com/zebra/android/devdemo/storedformat))*

* Use the status channel to check status and settings

    :::java
    Connection btStatusConnection = new BluetoothStatusConnection(theBtMacAddress);
    // or
    Connection nwStatusConnection = new TcpStatusConnection(theIpAddress, TcpStatusConnection.DEFAULT_STATUS_TCP_PORT);



* Set the print speed to fastest that doesn't compromise print quality
* If you are printing multiple jobs in short amount of time, don't close the connection after each print. Use a timer to decide when to close the connection.

[Top^](#top)

#### Markdown Key 
hyperlink - [anchor text](http://url.com)
* *italic* - single asterisk
* _italic_ - underscore
* **bold** - double asterisks    
* bulleted list - asterisk space, text of item(s)
* ![img](/path/to/image.png) - embedded image


[Developer Portal:](https://developer.zebra.com/print)
[Github:](https://github.com/Zebra)
[Android Techdocs:](http://techdocs.zebra.com/link-os/latest/android/)
[Android Github:](https://github.com/Zebra/LinkOS-Android-Samples/)
[ZPL Programming Guide:](https://www.zebra.com/content/dam/zebra/manuals/en-us/software/zpl-zbi2-pm-en.pdf)
[validation:](https://developer.zebra.com/resources/statics/40533/Validation_sm.jpg?a=1507214127764) "Zebra Validation"
[Setup Utility:](https://www.zebra.com/us/en/products/software/barcode-printers/zebralink/zebra-setup-utility.html)
[Best Practices:](#)
