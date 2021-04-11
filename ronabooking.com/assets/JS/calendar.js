

var from;
var to;

///Date change/////
function changeDay(date, diff){
    var newDate = new Date(date.getUTCFullYear(),date.getMonth(),date.getDate()+diff,date.getHours(),date.getMinutes(),date.getSeconds());
    var newDateString =  ('0'+ newDate.getDate()).slice(-2) + '.' + ('0'+ (newDate.getMonth()+1)).slice(-2) + '.' + newDate.getFullYear();
    return newDateString;
}

/** "15.04.2020" => 2020-04-15*/
function convertDate(date){
    var dataArray = date.split('.');
    var year = dataArray[2];
    var day = dataArray[0];
    var month = dataArray[1];
    var newDateString =  (year + '/' + month + '/' + day);
    return newDateString;
}

/** "04/16/2020" => "16.04.2020"*/
function convertDateFromLocalDateString(date){
    var dataArray = date.split('.');
    var year = dataArray[2];
    var day = dataArray[0];
    var month = dataArray[1];
    var newDateString =  (year + '/' + month + '/' + day);
    return newDateString;
}


$(document).ready(function() {
    switch (LANGUAGE) {
        case 'ru':
            flatpickr.localize(flatpickr.l10ns.ru);
            break;
        case 'de':
            flatpickr.localize(flatpickr.l10ns.de);
            break;
        case 'sl':
            flatpickr.localize(flatpickr.l10ns.sl);
            break;
        case 'hr':
            flatpickr.localize(flatpickr.l10ns.hr);
            break;
        case 'it':
            flatpickr.localize(flatpickr.l10ns.it);
            break;
        case 'hu':
            flatpickr.localize(flatpickr.l10ns.hu);
            break;

    };

    var today = new Date();
    var tomorrow = new Date();
    var startDate = convertDate($("#firstDayOfCalendar").val());
    console.log(startDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    from = $("#input-from-date").val();
    to = $("#input-to-date").val();

    $("#flatpickrCalendar").flatpickr({
            mode: "range",
            minDate: startDate,
            altFormat: "d/m/Y",
            dateFormat: "d/m/Y",
            // local: "ru",
            "locale": {
                "firstDayOfWeek": 1,
                "rangeSeparator":" — "
            },
            onClose: function(selectedDates, dateStr, instance){
                var needRequest = false;
                var dateRange = dateStr;
                var positionSeparator = dateRange.indexOf(" — ");
                if (positionSeparator>0) {
                    var new_from = dateRange.substring(0, positionSeparator);
                    var new_to = dateRange.substring(positionSeparator  + (" — ").length, dateRange.length);
                    $("#input-from-date").val(new_from);
                    $("#input-to-date").val(new_to);
                    $("#rent-input-date_from").val(new_from);
                    $("#rent-input-date_to").val(new_to);
                    needRequest = ( !from.localeCompare(new_from) || !to.localeCompare(new_to));
                }
                else {
                    var new_from = dateRange.substring(0, positionSeparator);
                    from = dateStr;
                    $("#input-from-date").val(from);
                    $("#rent-input-date_from").val(from);
                    needRequest = (!from.localeCompare(new_from));
                }
                if (needRequest)
                    $('#search-form').submit();
                return false;
            }
        });


    $("#flatpickrCalendar02").flatpickr("#flatpickrCalendar02", {
        mode: "range",
        minDate: "today",
        maxDate: "31/12/2020",
        altFormat: "d/m/Y",
        dateFormat: "d/m/Y",
        "locale": {
            "firstDayOfWeek": 1,
            "rangeSeparator":" — "
        },
        onClose: function(selectedDates, dateStr, instance){
            var needRequest = false;
            var dateRange = dateStr;
            var positionSeparator = dateRange.indexOf(" — ");
            if (positionSeparator>0) {
                var new_from = dateRange.substring(0, positionSeparator);
                var new_to = dateRange.substring(positionSeparator  + (" — ").length, dateRange.length);
                $("#input-from-date").val(new_from);
                $("#input-to-date").val(new_to);
                $("#rent-input-date_from").val(new_from);
                $("#rent-input-date_to").val(new_to);
                needRequest = ( !from.localeCompare(new_from) || !to.localeCompare(new_to));
            }
            else {
                var new_from = dateRange.substring(0, positionSeparator);
                from = dateStr;
                $("#input-from-date").val(from);
                $("#rent-input-date_from").val(from);
                needRequest = (!from.localeCompare(new_from));
            }
            if (needRequest)
                $('#search-form').submit();
            return false;
        }
    });

});


function getDatesFromRange(elem) {
        var dateRange = elem.value;
        var positionSeparator = dateRange.indexOf(" — ");
        if(positionSeparator>0) {
            from = dateRange.substring(0, positionSeparator);
            to = dateRange.substring(positionSeparator  + (" — ").length, dateRange.length);
            $("#input-from-date").val(from);
            $("#input-to-date").val(to);
            $("#rent-input-date_from").val(from);
            $("#rent-input-date_to").val(to);
        }
        else {
            from = dateRange;
            $("#input-from-date").val(from);
            $("#rent-input-date_from").val(from);
        }
        return false;
}

function parseFromFlatepickr(data) {
    var positionSeparator = data.indexOf(" — ");
    from = data.substring(0,positionSeparator);
    to = data.substring(positionSeparator  + (" — ").length, positionSeparator);
}
//Collecting form data
function collectData (id, price_day, period_price_full) {

    $("#rent-input-from-date").val( $("#input-from-date").val());
    $("#rent-input-date_until").val( $("#input-to-date").val());
    $("#rent-input-adults").val( $("#adults").val());
    $("#rent-input-children").val( $("#children").val());
    $("#rent-input-pets").val( $("#pets").val());
    $("#rent-input-id").val(id);
    $("#rent-input-object_id").val(id);
    $("#rent-input-price_day").val(price_day);
    $("#rent-input-price").val(period_price_full);
    $("#rent-form-mockup-apartment").submit();
    return false;
}

function submitSearchFormForApartmentView(form,id) {
    $("#rent-input-id").val(id);
    form.submit();
    return false;
}



