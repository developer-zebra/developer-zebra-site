#Scanner.DataListener

An interface for notifying client applications when the scan data is
 available.
 
 

**Example Usage:**
	
	:::java	
	public class MainActivity extends Activity implements DataListener
	.. .. ..
	


##Public Methods

### onData

**public void onData(ScanDataCollection scanDataCollection)**

This is the callback method upon data availability.

**Parameters:**

`scanDataCollection` - Collection of scan data.

**Returns:**

void

