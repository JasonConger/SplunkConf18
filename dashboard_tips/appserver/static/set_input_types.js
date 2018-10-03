require(["jquery", "splunkjs/mvc/simplexml/ready!"], function($) {
	
	$("[id^=numbers_only]")
		.find("input")
		.attr('type','number')

		
	$("[id^=numbers_0_100_step10]")
		.find("input")
		.attr('type','number')
		.attr('min','0')
		.attr('max','100')
		.attr('step','10')
		
	$("[id^=date]")
		.find("input")
		.attr('type','date')
		
	$("[id^=date_restrictions]")
		.find("input")
		.attr('type','date')
		.attr('min','2018-08-02')
		
	$("[id^=range]")
		.find("input")
		.attr('type','range')
		.attr('min','0')
		.attr('max','10')

});

