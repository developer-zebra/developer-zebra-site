---
title:  Enabling the EMDK in Eclipse with ADT
---
## Overview

This tutorial helps you enabling the EMDK API in your project created in Eclipse with ADT, so that you can access it in your application. This is going to be a common step for all the tutorials that use [EMDK for Android](https://developer.motorolasolutions.com/community/android/emdk) API. 

## Enabling the EMDK 
1. Select the project.
  
2. Select "File -> Properties" or right click on the project and select "Properties".
  
    ![img](../../images/setup/image011.jpg)
   
    ![img](../../images/setup/image013.jpg)
   
3. Click "Android" from the left pane.
  
    ![img](../../images/setup/image037.jpg)
 
4. Select the "EMDK" target name from the list of Project Build Targets for the API version you require.  
    ![img](../../images/setup/image039.jpg)  

    >Note:  
    >If an "EMDK..." target name is not on the list of Build Targets, please confirm you have installed Android API 16 SDK Platform.

5. Click "Apply" and "OK".  
    >Note:  
    >The EMDK library will be added to the project.  
    
    ![img](../../images/setup/image041.jpg) 

    >Note:
    >If you are using Java 1.7 as the compiler, you may see this error
    
    ![img](../../images/setup/compiler_error.jpg) 

    > To correct this, you will need to change the compiler to use 1.6
    
    > * Click on the Java Compiler
    > * Click Enable project specific settings
    > * Select 1.6 for Compiler compliance level
    
    ![img](../../images/setup/image101.jpg)
