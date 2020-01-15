---
productversion: '2.5'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

##Overview
The RhoElements browser depends on fonts installed on your device in order to render text.  You need to configure RhoElements appropriately in order to get your desired font to display.

##Fonts on Android Devices

RhoElements running on Android devices can use any font which is built into the /system/fonts directory. It defaults to Droid Sans Fallback, which is the recommended font as it contains a full set of international characters. It is not possible to use font files from the SD card, but web fonts are supported as described below.
			
##Fonts on Windows Mobile / Windows CE Devices

The current version RhoElements will only understand TrueType fonts.  If you wish to use your own fonts which are not installed on the device you have two options:
<ol>
<LI>Locate a Truetype font file (.ttf) and copy it to the device
<LI>Use a web font
</ol>

###Specifying values in your config file</H2>
    <Configuration>
      <Applications>
        <Application>
          <General>
            <Name       VALUE="Menu"/>
            <StartPage  VALUE="file://\Program Files\RhoElements\HTML\Menu.htm" name="Menu"/>
          </General>
          <HTMLStyles>
            <FontFamily <span class="xmlParameter">VALUE</span>="Tahoma" </b>/>
          </HTMLStyles>
        </Application>
      </Applications>
    </Configuration>

You can change the default font if required, just make sure the requited .ttf file is in the device's standard font directory (\Windows\)

###The Default font

Out of the box RhoElements is configured to use the Tahoma font on RhoElements, the main reason for this is that it is available on all Zebra Windows devices.  One limitation of tahoma is that it has no italicised variant.

###Obtaining Truetype fonts

Many Truetype fonts are freely available on the internet or your company may have its own required set of fonts.  To limit the size of the RhoElements installer (and any potential licensing issues) no font files are installed along with the product.

###Using a web font

RhoElements supports Web fonts, the following example shows how to use the 'universal' font and assumes it is at the same location as the web page being rendered:

    <HTML> 
      <HEAD> 
      <TITLE> Test</TITLE> 
        <style>
          @font-face
          {
            font-family: myFirstFont;
            src: url('universltstd-boldcn-webfont.ttf')
          }
          div {font-family: myFirstFont;}
        </style>
      </HEAD> 
      <body style="padding-top:50px" > 
        <div>
          This is a test (Universal font)
        </div>
        This is another test (default font)
      </body>
    </HTML>

###Localized Font Support

Running on localized builds requires an appropriate truetype font for the language to be installed on the device, as described above obtain your desired truetype font file (.ttf) and copy it to the configurable font directory on your device (\Windows by default).  To ensure RhoElements picks up your localized font modify the configuration file accordingly.




