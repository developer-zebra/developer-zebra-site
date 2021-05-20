---
title: Enumerate Triggers
layout: guide.html
product: DataWedge
productversion: "11.0"
---

## ENUMERATE_TRIGGERS

Retrieve supported trigger list of a device. Applies only when configuring multiple scanners to retrieve the name of the trigger for use with `scanner_selection_by_identifier` from [Set_Config](../setconfig).

### Function Prototype

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.setPackage("com.symbol.datawedge");
    i.putExtra("com.symbol.datawedge.api.ENUMERATE_TRIGGERS", "");
    sendBroadcast(i);

### Parameters

**ACTION** [string]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [string]: "com.symbol.datawedge.api.ENUMERATE_TRIGGERS"

**EXTRA VALUE** [string]: empty string

### Return Values

Returns a string array of supported triggers.

**EXTRA NAME:** "com.symbol.datawedge.api.RESULT_ENUMERATE_TRIGGERS"

**EXTRA TYPE:** string[ ]

## Example Code

Sample code to send intent to enumerate triggers:

    Intent i = new Intent();
    i.setAction("com.symbol.datawedge.api.ACTION");
    i.setPackage("com.symbol.datawedge");
    i.putExtra("com.symbol.datawedge.api.ENUMERATE_TRIGGERS", "");
    sendBroadcast(i);

Sample code to retrieve the result of the array of supported triggers:

    private BroadcastReceiver broadcastReceiverTriggers = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            Bundle extras = intent.getExtras();
            if (intent.hasExtra("com.symbol.datawedge.api.RESULT_ENUMERATE_TRIGGERS")) {

                String[] triggerList = extras.
                        getStringArray("com.symbol.datawedge.api.RESULT_ENUMERATE_TRIGGERS");
                List<String> arrTriggerList = Arrays.asList(triggerList);
                String strTriggers = "Trigger List: <br>";
                for (String trigger : arrTriggerList) {
                    strTriggers += trigger + "<br>";
                }
                //Log.d(TAG, strTriggers);
            }
        }
    };

---

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial

---
