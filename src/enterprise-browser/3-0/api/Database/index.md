---
title: Database
productversion: '3.0'
product: Enterprise Browser
layout: guide.html
---

> **The Database API requires EB 3.0.6.0 (or later)**. 

## Overview
Database is low-level API to access a local SQLite database.

## Enabling the API
There are two methods of enabling the Database API:

* Include all ebapi modules
* Include only the required API modules

For either of these methods, include files from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer where Enterprise Browser is installed.

### Include all JS API modules
To include all JS APIs, copy the `ebapi-modules.js` file to a location accessible by the app's files and include a reference to the JavaScript file in the app's HTML. For instance, to include the modules file in the app's `index.html`, copy the file to the same directory as that `index.html` and add the following line to the HTML's **HEAD** section:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> This will define the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required will need to have the required .js file(s) included in this fashion.

### Include only the required modules

To include individual APIs, you must first include the `ebapi.js` in your HTML, and then the additional required API file(s). For instance, to use the Database API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.database.js"></script>

> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.database.js`, which is the Database API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.        

-----

##Methods

### <span class="label label-inverse"> Destructor</span> close()
Closes the database. The database will not be accessible until it is opened again.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method is a destructor and can only be accessed via the object that was created by the `new` constructor. 
	* <code>myObj.close()</code>


### commitTransaction()
Commit database transaction. Saves all updates to the database from the start of the transaction.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.commitTransaction()</code>

### destroyTable(<span class="text-info">STRING</span> tableName)
Destroys a database table.

####Parameters
<ul><li>tableName : <span class='text-info'>STRING</span><p>Table name to destroy. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.destroyTable(<span class="text-info">STRING</span> tableName)</code>

### destroyTables(<span class="text-info">HASH</span> propertyMap)
Destroy a list of database tables.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span><p> </p></li><ul><li>include : <span class='text-info'>ARRAY</span><p>Include tables. </p></li><li>exclude : <span class='text-info'>ARRAY</span><p>Exclude tables. </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.destroyTables(<span class="text-info">HASH</span> propertyMap)</code>

### executeBatchSql(<span class="text-info">STRING</span> sqlStmt)
Execute a series of sql statements included in the sqlStmt string parameter.

####Parameters
<ul><li>sqlStmt : <span class='text-info'>STRING</span><p>The SQL statement. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.executeBatchSql(<span class="text-info">STRING</span> sqlStmt)</code>

### executeSql(<span class="text-info">STRING</span> sqlStmt, <span class="text-info">ARRAY</span> args)
Execute the sql statement specified in the method's parameters.

####Parameters
<ul><li>sqlStmt : <span class='text-info'>STRING</span><p>The SQL statement. </p></li><li>args : <span class='text-info'>ARRAY</span> <span class='label label-info'>Optional</span><p>Array of the sql expressions. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul></ul>

####Returns
Synchronous Return:

* ARRAY : Array of Hashes. Each Hash item represents record from Database.

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.executeSql(<span class="text-info">STRING</span> sqlStmt, <span class="text-info">ARRAY</span> args)</code>

### <span class="label label-inverse"> Constructor</span>  new EB.Database(<span class="text-info">STRING</span> dbPath, <span class="text-info">STRING</span> dbPartition)
This method is a constructor for this class. Instead of saying `EB.Database.initialize(dbPath,dbPartition)` you would use `new EB.Database(dbPath,dbPartition)`. ex: `var db = new EB.Database(EB.Application.databaseFilePath('test'), 'test');` Make sure you issue a `.close()` when you are finished using the database. If the database file does not exist it will be created using a default SQL schema. Do not use predefined partition names: app, user, local. Do not open the same database file in different partitions. Do not use the same partition for different database files. Do not open the same file twice.

####Parameters
<ul><li>dbPath : <span class='text-info'>STRING</span><p>The path to the database. Databases stored at the path provided by Application.databaseFilePath. </p></li><li>dbPartition : <span class='text-info'>STRING</span><p>The database partition. Used as a file name for database and when connecting to RhoConnect server. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Class Method: This method is a constructor and can only be accessed via the `new` construct. 
	* <code>var myObj = new EB.Database(<span class="text-info">STRING</span> dbPath, <span class="text-info">STRING</span> dbPartition)</code>


### isTableExist(<span class="text-info">STRING</span> tableName)
Will return true or false if the specified table exists in the current database.

####Parameters
<ul><li>tableName : <span class='text-info'>STRING</span><p>The name of the table. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>BOOLEAN</span></p><ul></ul>

####Returns
Synchronous Return:

* BOOLEAN

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.isTableExist(<span class="text-info">STRING</span> tableName)</code>

### rollbackTransaction()
Rollback database transaction. This will cancel any pending actions to the database that were executed since the last Start and before a commit.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.rollbackTransaction()</code>

### startTransaction()
Start database transaction. All operations will not be the saved to the database until a commit is executed.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile
* Windows CE

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.startTransaction()</code>

