---
title:  Android Threading Options:
---
# Android Threading Options:

In Android, whenever you start an application, Android system creates a new thread known as "Main" for that particular application. It is also know as UI thread because it's main purpose is to manage all UI components and dispatch events to the appropriate widgets. For Example, if you touch a specific button on the screen, application's main thread dispatches a touch event and the further action is taken on the main thread itself.


This single thread model may yield poor performance in applications that perform heavy long running operations such as network operations, database queries, device configurations etc. If the application performs such heavy operations on UI thread, the UI thread will be blocked and the user will not be able to access User Interface while these long operations are underway. Even if the user tries to interact with application's UI, the application does not respond showing ["Application Not Responding"](http://developer.android.com/training/articles/perf-anr.html) (ANR) message dialog asking user to wait.

If you want to experience how slow the application can get then create a simple Android application with a button that invokes Thread.sleep(3000) in its [onClickListener](http://developer.android.com/reference/android/view/View.OnClickListener.html). The button will be in a pressed state for 3 seconds before it gets back to normal state, which is enough evidence to call an application slow. 
  
Hence, it is recommended to run only UI components on the main thread. Any other operation should always be executed on a different background thread without blocking the UI thread and completing the operation smoothly without any interruptions such as ANR.

Android provides following threading techniques that could be used to perform time consuming operations on background thread with the coordination with UI thread to update the UI thread regularly:

* Handler
* AsyncTask

##Using Handler:

A [Handler](http://developer.android.com/reference/android/os/Handler.html) allows you to send and process [Message](http://developer.android.com/reference/android/os/Message.html) and Runnable objects associated with a thread's [MessageQueue](http://developer.android.com/reference/android/os/MessageQueue.html). Each Handler instance is associated with a single thread and that thread's message queue.

So we can create a Runnable instance, which will perform long running operations on background thread.

    :::java
    Message msg = mHandler.obtainMessage();

    Thread bgThread = new Thread(new Runnable() {
				
				@Override
				public void run() {
					//Background running operation
                    String result = myLongOperation();

                    msg.obj = result;
					if ( msg.obj != null )
                    // Send the result in message from background to UI
				    // thread for processing.
					mHandler.sendMessage(msg);
				}
	});			
	bgThread.start();

Sometimes we may want to display results of the background thread operation on User Interface. So we use Handlers to send and process the results from background to main thread as follows:

    :::java        
    private Handler mHandler = new Handler() {
 		public void handleMessage(Message msg) {
		statusTextView.setText((String) msg.obj);
	  };
	};

The `handleMessage` method receives message sent from background thread to populate on UI. As you can see the [Text View](http://developer.android.com/reference/android/widget/TextView.html) "statusTextView" retrieves that message and displays it on main thread.

The high level architecture of Handler could be depicted as:

![img](images/AndroidThreadingOptionsBlogImages/handler.png)

Each Handler instance is associated with a single thread and that thread's message queue. If you are implementing complex operations that require frequent UI updates from background thread, Handlers with threads may not be a good solution. Android provided a solution to this by introducing a new Utility class from Android 1.5, known as [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html)    

##Using AsyncTask:

The objective of AsyncTask is to take care of Thread Management for you. AsyncTask was introduced as a Utility Class in Android 1.5 that simplified performing long running operations that need to communicate with User Interface. AsyncTask is designed to be a helper class around [Thread](http://developer.android.com/reference/java/lang/Thread.html) and [Handler](http://developer.android.com/reference/android/os/Handler.html) and does not constitute a generic threading framework. 

It was also available in Android 1.0 and 1.1 with the same functionality but with a different name [UserTask](https://code.google.com/p/shelves/source/browse/trunk/Shelves/src/org/curiouscreature/android/shelves/util/UserTask.java). So the above code of Handler can be re-written using AsyncTask as follows:

    :::java
    // Class extending AsyncTask that runs operations in a background thread
    // without blocking UI thread. It returns result on UI thread once the
    // operation is completed.
    private class ConfigureProfile extends AsyncTask<String, Integer, String> {
	  // Operation to be performed on background thread
	  @Override
	  protected String doInBackground(String... params) {
		//Background running operation
        String result = myLongOperation();
		return result;
	  }

	  // Return result to the UI Thread
	  @Override
	  protected void onPostExecute(String result) {
		// Display result on UI thread
        statusTextView.setText(result);
	  }

	  // Method to implement actions before the AsynTask executes.
	  @Override
	  protected void onPreExecute() {

	  }

	  // Method to display updates of operation
	  @Override
	  protected void onProgressUpdate(Integer... progress) {

	  }
    }


You can see that AsyncTask has to be subclassed in order to use it. You have to create an instance of AsyncTask in the UI thread to call it and it can be executed only once.

    :::java
    public void onClick(View v) {
      new ConfigureProfile().execute("");    
    }

The high-level architecture for AsyncTask could be depicted as:

![img](images/AndroidThreadingOptionsBlogImages/asynctask.png)
 
AsyncTasks should ideally be used for short operations (a few seconds at the most.) If you need to keep threads running for long periods of time, it is highly recommended you use the various APIs provided by the `java.util.concurrent` pacakge such as [Executor](http://developer.android.com/reference/java/util/concurrent/Executor.html), [ThreadPoolExecutor](http://developer.android.com/reference/java/util/concurrent/ThreadPoolExecutor.html) and [FutureTask](http://developer.android.com/reference/java/util/concurrent/FutureTask.html). The [AsyncTask Documentation](http://developer.android.com/reference/android/os/AsyncTask.html) will explain you AsyncTask in a detailed way, but here is a quick overview of how it works:

* You can specify various parameters such as type, using generics, parameters, progress value and final value of the background task.
* The method [doInBackground()](http://developer.android.com/reference/android/os/AsyncTask.html#doInBackground(Params...)) executes the operation automatically on a background worker thread.
* The remaining methods such as [onPreExecute()](http://developer.android.com/reference/android/os/AsyncTask.html#onPreExecute()), [onPostExecute()](http://developer.android.com/reference/android/os/AsyncTask.html#onPostExecute(Result)), [onProgressUpdate()](http://developer.android.com/reference/android/os/AsyncTask.html#onProgressUpdate(Progress...)) are invoked on the main thread.
* The method [onPreExecute()](http://developer.android.com/reference/android/os/AsyncTask.html#onPreExecute()) is used to perform operation before the background execution starts. (Ex. Display a [Progress Dialog](http://developer.android.com/reference/android/app/ProgressDialog.html) on the main thread).
* The method [onProgressUpdate()](http://developer.android.com/reference/android/os/AsyncTask.html#onProgressUpdate(Progress...)) is used to update user regularly about the task that is running on background thread (Ex. Display a [ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) on UI thread to update user about progress of the background task.
* The method [onPostExecute()](http://developer.android.com/reference/android/os/AsyncTask.html#onPostExecute(Result)) could be used to populate results of background task on the main thread (Ex. A Text View that displays the success or Failure based on status of the background task).
* The value returned by `doInBackground()` is sent to `onPostExecute()`.
* User can call the method `publishProgress()` at anytime in `doInBackground()` to execute `onProgressUpdate()` on the main thread.
* You can cancel the task at any time, from any thread


So whatever you may use among [Handler](http://developer.android.com/reference/android/os/Handler.html) and [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html), try to follow following two standards:

1. Perform complex/Non-UI operations on background thread without blocking the main thread.
2. Always remember that Android UI Kit can only be accessed on the main thread.


## Download the Source
You can find a detailed tutorial that applies [Mx](https://developer.motorolasolutions.com/docs/DOC-1876) configurations on the devices on background thread, silently in a Non-Blocking way [here](Applying Profile Silently Tutorial Page).        
