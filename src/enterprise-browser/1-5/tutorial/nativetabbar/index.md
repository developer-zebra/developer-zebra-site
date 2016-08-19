elow is a EB application which has a startpage configured as nativetabbar.html. On EB launch, this start page creates three tabs where tab0 should be configured as the page used for tab creation (in this case nativetabbar.html). Once tab is created one can switch between tabs using EB.NativeTabbar.switchTab(nTabIndex). It means each tab page should have a link/button to switch between tabs.

Thee sample app below, called `nativetabbar.html`, creates three tabs: "tab0" is the current view (the startpage itself), and tab1 and tab2 are the real tabs shown to user. The app creates the three tabs on launch, and immediately sets is view to mytab2.html.


	:::html
	<html>
	    <head>
		<title>STARTPage</title>
	        <script type="text/javascript" charset="utf-8" src="ebapi-modules.js">     
	        </script>
	        <script type="text/javascript">	

		function create_tabbar() {
			EB.NativeTabbar.create(
						[
						{'label':'MainPage', 'action':'http://192.168.1.5:80/xampp/ebtest/nativetabbar.html', 'useCurrentViewForTab':true},
						{
							label: "abc",
							reload: false,
							action:   
	                                            "http://192.168.1.5:80/xampp/ebtest/mytab2.html"
						
						},
						{
							label: "abcd",
							reload: false,
							action: "http://192.168.1.5:80/xampp/ebtest/mytab3.html"
						
						}
						],
					
						{createOnInit: "true"} ,tabbar_callback   
					);
				}

				function tabbar_callback(params) 
				{
				//alert(params)
				}
				
	   			var alreadyloaded = false;
				function loadEvent(){
					if(alreadyloaded == false)
					{
						alreadyloaded = true;
					       create_tabbar();
	                                       EB.NativeTabbar.switchTab(1);	//this will give a feel to user that his start page is tab1 page contents.(mytab2.html in this case)				
					}				
	            }
				 function removetabbar()
	        {
	        	EB.NativeTabbar.remove();
	        }

	            window.addEventListener('DOMContentLoaded', loadEvent);
	        </script>
	    </head>

	    <body onload="Javascript:loadEvent()" onunload="removetabbar()">	
	    <button onclick="EB.Application.quit()">Quit</button>
	    </body>
	</html>

