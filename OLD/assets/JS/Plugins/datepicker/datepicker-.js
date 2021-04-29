/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

	'use strict';
	$.datepicker.regional.de = {
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun',
			'Jul','Aug','Sep','Oct','Nov','Dec'],
		dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		dateFormat: 'dd/mm/yyyy',
		firstDay: 1,
		renderer: $.datepicker.defaultRenderer,
		prevText: 'Prev',
		prevStatus: 'Show the previous month',
		prevJumpText: '&#x3c;&#x3c;',
		prevJumpStatus: 'Show the previous year',
		nextText: 'Next',
		nextStatus: 'Show the next month',
		nextJumpText: '&#x3e;&#x3e;',
		nextJumpStatus: 'Show the next year',
		currentText: 'Current',
		currentStatus: 'Show the current month',
		todayText: 'Today',
		todayStatus: 'Show today\'s month',
		clearText: 'Clear',
		clearStatus: 'Erase the current date',
		closeText: 'Done',
		closeStatus: 'Close without change',
		yearStatus: 'Show a different year',
		monthStatus: 'Show a different month',
		weekText: 'Wk',
		weekStatus: 'Week of the year',
		dayStatus: 'Select DD, M d',
		defaultStatus: 'Select a date',
		isRTL: false
	};
datepicker.setDefaults( datepicker.regional.en );

return datepicker.regional.en;

} ) );
