---
title: Certificates
productversion: '1.5'
product: Enterprise Browser
layout: guide.html
---
##Overview
This guide explains how certificates are used on Zebra devices running Android and Windows Mobile/CE, and how to create them and specify their whereabouts on the device so that Enterprise Browser can find them when needed.  

## Windows Mobile and CE
Apps made with Enterprise Browser 1.5 and higher for Windows Mobile/CE with Webkit must use the [ClientCertPath setting](../configreference/#clientcertpath) to specify the path to client certificate files. The `<CaFile>` parameter no longer applies, but this guide can still be useful for creating the certificate(s). 

**When using apps made with Enterprise Browser versions prior to 1.5 for Windows Mobile/CE with Webkit, any required certificates beyond the pre-loaded ones must be specified using the `<CaFile>` configuration setting in the `Config.xml` file**. 

The CaFile points to a file containing the certificate data, and the certificate(s) specified are treated by webkit as trusted authorities.

For example, to use certificates in the file `mycert.pem`, copy the file to the device and make an entry made in the `Config.xml` corresponding to the file's location on the device using the syntax below: 

	:::xml
	<CaFile Value=”\\mycert.pem”>

> **Note**: This applies only to HTTPS requests made by Webkit.

## Android
Enterprise Browser HTTPS requests on Android can be done one of in two ways:

* Using system browser navigation with WebView component:
	* The system browser uses built-in system-trusted storage for root CAs. 
	* Root certificates should be installed from the system menu, and will be used by any application that uses a WebView UI component (such as a browser).
	* Reference navigation in EB also will use this method. 
	* EB currently supports only server SSL authentication for WebView.
	* Browser-based client authentication, which was introduced in Android 5, will be implemented in a future release.
* Certificate formats:
	* There are several certificate formats available, and any format that represents the certificate as encoded text is accepted. These typically have the extension `.crt` or `.pem`. 
	* **Certificate files must contain the certificate data between "BEGIN" and "END" lines**.
	* Certificates in the .der format are not supported and should be converted, e.g. using OpenSSL as shown below.

## OpenSSL
Tools such as [OpenSSL](https://www.openssl.org/docs/faq.html) can be useful for creating and working with certificates, and most of of its capabilities are accessible through [CLI commands](https://www.sslshopper.com/article-most-common-openssl-commands.html). Some typical usages are shown below. Before proceeding, [download OpenSSL](https://www.openssl.org/source/) and install it. 

### Generate a self-signed certificate
To create a self-signed certificate, a private key must exist to encrypt to the certificate. If an existing private key can be used, skip to Step 2. To generate a new key, begin with Step 1. 

**&#49;. To generate a basic key with no passphrase**:

        :::term
        openssl genrsa -out privkey.pem

**&#50;. Next, use the key file generated in Step 1 to create a self-signed certificate**:

        :::term
        openssl req -new -x509 -key privkey.pem -out capturableacert.pem -days 365

&#51;. A series of questions appears. Leave all fields blank (by pressing ENTER) _except_ for **the "Common Name" field-- this should contain the domain name that will serve the certificate**. 

&#52;. **Add the private key file to the web server** according to the server's documentation. 

&#53;. **Add the certificate file to the web client** as described above.

### Inspect a certificate
**To decode the contents of a certificate**:

				::term
				openssl x509 -in cacert.pem -text -noout

* The Common Name is shown as "Subject: CN=" 
* The signing authority is shown as Issuer: CN=, which will be the same as Subject for a self-signed certificate.

### Convert certificate format
**To convert a `.der` format certificate to .`pem` format**:

	:::term
	openssl x509 -inform der -in cacert.der -out cacert.pem

