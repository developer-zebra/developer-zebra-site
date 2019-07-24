---
title: TokenizedData
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
TokenizedData class provides access to tokenized scan data.

**Type** - Java.Lang.Object

##Methods
###GetTokensByKey

**public virtual System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.TokenizedData.Token> GetTokensByKey (string p0);**

Returns the tokens for the given token key. If data has multiple values, it returns all the tokens.

**Parameters:**

System.String **p0**  -  The Parameters to use to retrieve the data. TokenizedData.Keys can be used.

**Returns** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.TokenizedData+Token>

##Properties

###Tokens
Returns all the tokens with it's data.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Barcode.TokenizedData+Token>
