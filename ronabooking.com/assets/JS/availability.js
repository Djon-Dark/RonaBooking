function setAvailability (disabledatesArray,minDate) {
    // flatpickr("#am-datepicker", {
    //     mode: "range",
    //     minDate: minDate,//"today",
    //     // maxDate: "12/31/2020",
    //     altFormat: "m/d/Y",
    //     dateFormat: "m/d/Y",
    //     inline: true,
    //     showMonths:4,
    //     "locale": {
    //         "firstDayOfWeek": 1
    //     },
    //     disable: disabledatesArray
    //     // "disable": [
    //     //     function(date) {
    //     //         // return true to disable
    //     //         $.ajax({
    //     //             url: "http::\\\\ronabooking.local/availability?id="+objectId+"&",
    //     //             xhrFields: {
    //     //                 withCredentials: true
    //     //             }
    //     //         });
    //     //         return (date.getDay() === 0 || date.getDay() === 6);
    //     //
    //     //     }
    //     // ],
    // });
}

// function checkAnaibled(date, disableDates) {
//
// }

// function dateObjToISOString(date) {
//     return date.getFullYear() + '-' +
//         ('0'+ (date.getMonth()+1)).slice(-2) + '-' +
//         ('0'+ date.getDate()).slice(-2);
// }
//
// $(document).ready(function() {
//
//     $(function () {
//         var disabledDatesArray = ["2019-11-18", "2019-11-19", "2019-11-20"]
//         var selectedFirst;
//         var selectedSecond;
//
//         $("#calendar").datepicker({
//             dateFormat: 'yy-mm-dd',
//             numberOfMonths: 4,
//             onSelect: dateRange,
//             beforeShowDay: function (dateObj) {
//                 var clickable = true;
//                 var dateISO = dateObjToISOString(dateObj);
//                 if (disabledDatesArray.includes(dateISO) == true) {
//                     return [!clickable, "your-css-class-name-for-booked-day"]
//                 }
//
//                 // Display first selected date
//                 if (selectedFirst != null && selectedSecond == null) {
//                     if (dateObjToISOString(new Date(selectedFirst)) == dateISO) {
//                         return [clickable, "selected-range"];
//                     }
//                 }
//
//                 // If both dates are selected display range
//                 if (selectedFirst != null && selectedSecond != null) {
//                     if (dateObj >= new Date(selectedFirst).setHours(0, 0, 0) &&
//                         dateObj <= new Date(selectedSecond).setHours(0, 0, 0)) {
//                         return [clickable, "selected-range"]
//                     }
//                 }
//
//                 return [clickable, ""]
//             }
//         });
//
//         var date1;
//
//         function dateRange(input) {
//             // Select first date
//             if (date1 == null) {
//                 date1 = input;
//                 selectedFirst = input;
//                 selectedSecond = null;
//                 // $("#calendar").datepicker("setDate", input);
//             } else {
//                 // Select second date
//                 if (date1 != input) {
//                     if (new Date(input) < new Date(date1)) {
//                         // Swap dates
//                         selectedFirst = input;
//                         selectedSecond = date1;
//                     } else {
//                         selectedSecond = input;
//                     }
//                     date1 = null;
//                 }
//             }
//         }
//
//     });
//
//     function dateObjToISOString(date) {
//         return date.getFullYear() + '-' +
//             ('0'+ (date.getMonth()+1)).slice(-2) + '-' +
//             ('0'+ date.getDate()).slice(-2);
//     }
// });






