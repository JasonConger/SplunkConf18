require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
	'splunkjs/mvc/tableview',
	'splunkjs/mvc/chartview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView, ChartView) {


	var CustomIconRenderer = TableView.BaseCellRenderer.extend({
		canRender: function(cell) {
			return cell.field === 'Detail';
		},
		render: function($td, cell) {
			$td.html(('<i class="icon-chart-area" style="font-size:2em" />'));
		}
	});

	mvc.Components.get('tblTooltip').getVisualization(function(tableView) {
        
        // Register custom cell renderer
        tableView.table.addCellRenderer(new CustomIconRenderer());

        // Force the table to re-render
        tableView.table.render();
	});
	
	// Listen for token changes
	var tokens = mvc.Components.get("default");
	tokens.on("change:chart_sourcetype", function(model, value, options) {

		$('#modalChart').modal();

		var areaChart = new ChartView({
			id: "chart-view",
			managerid: "chart_search",
			type: "area",
			"charting.chart.nullValueMode": "connect",
			el: $("#chartDetail")
		}).render();

	});
	
	
	
});
