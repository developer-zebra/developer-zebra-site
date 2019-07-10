---
title: DataWedge Profiles
description: DataWedge functionality is based on Profiles. Each Profile contains options for determining how the data is acquired (input), processed (data formatting) and delivered to the app (output). A single Profile can be associated with one or more activities or apps.  However, an activity or app can be associated only to a single Profile. In addition to the core functionality with Input, Processing, and Output, optional Profile specific configuration settings are categorized under Utilities, which can be associated with apps or controlled at runtime. Details about functionality and usage of each of the Input, Processing, Output and Utilities options can be found in the links below. By default, Profile0 is provided as a generic Profile that can take effect for foreground apps that have not yet been associated to any Profiles. This provides the ability to quickly acquire data prior to taking action on setting any configurations. For more information about how Profiles work, see the Architecture Overview page.
layout: list-apis.html
product: DataWedge
productversion: '7.4'
automenu:
  items:
    - title: About Profiles
      items:
        - title: Architecture Overview
          url: ../overview
        - title: Managing Profiles
          url: ../createprofile
    - title: Input
      items:
        - title: Barcode
          url: ../input/barcode
        - title: Mag-stripe Reader (MSR) 
          url: ../input/msr
        - title: Radio-frequency Identification (RFID) 
          url: ../input/rfid
        - title: Serial/USB Port
          url: ../input/serial
        - title: SimulScan
          url: ../input/simulscan
        - title: Voice
          url: ../input/voice
    - title: Processing
      items:
        - title: Advanced Data Formatting (ADF)
          url: ../process/adf
        - title: Basic Data Formatting (BDF) 
          url: ../process/bdf
    - title: Output
      items:
        - title: Intent
          url: ../output/intent
        - title: Internet Protocol (IP)
          url: ../output/ip
        - title: Keystroke
          url: ../output/keystroke

    - title: Utilities
      items:
        - title: Data Capture Plus (DCP)
          url: ../input/dcp

---
