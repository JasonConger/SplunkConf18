require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!',
	'/static/app/mte_visualizations/js/lib/jquery.cloud9carousel.js'
], function(_, $, mvc, Carousel) {

    

    var showcase = $("#showcase");
	
	showcase.Cloud9Carousel( {
        yOrigin: 42,
        yRadius: 40,
        itemClass: "dashboard-cell",
		autoPlay: 1,
        bringToFront: true,
        onLoaded: function() {
          showcase.css( 'visibility', 'visible' )
          showcase.css( 'display', 'none' )
          showcase.fadeIn( 1500 )
        }
      } )

});