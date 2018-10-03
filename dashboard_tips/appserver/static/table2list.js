require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/dataview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, DataView) {
	
	var templateString = "\
<%\
for(var i=0, l=results.length; i<l; i++) { \
	var line=results[i]; %> \
	<table id='list-view-template' class='table table-bordered'><tbody> \
	\
	<% for(var key in line) {\
		var attrName = key;\
		var attrValue = line[key];\
		%> \
		<tr>\
			<td width='100px' style='text-align: right'><%= attrName %>:</td>\
			<td><%= attrValue %></td>\
		</tr>\
	<% } %> \
    \
	</tbody></table> \
<% }%> \
";
	
	var dtview = new DataView({
		id: "dtview",
		managerid: "map_search",
		template: templateString,
		el: $("#list-view")
	}).render();

});
