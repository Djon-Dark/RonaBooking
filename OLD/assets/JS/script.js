$(document).ready(function() {
    var today = new Date();
    var lastVal = today;
    var tomorrow = new Date();
    var $dateInput = $('#datepicker');
    tomorrow.setDate(tomorrow.getDate() + 1);

    var any = $("#any").html();
    var holidayHouse = $("#holidayHouse").html();
    var apartment = $("#apartment").html();
    var villa = $("#villa").html();
    var allDestinations = $("#allDestinations").html();
    var kvarner = $("#kvarner").html();
    var islands = $("#islands").html();
    var dalmatia = $("#dalmatia").html();
    var istria = $("#istria").html();
    var numberGuests = $("#numberGuests").html();

    var translationForAdults = $("#translationForAdults").html();
    var translationForKids = $("#translationForKids").html();
    var translationForPets = $("#translationForPets").html();

    //Reset final total guests amount $("#card-input-options").
     resetTotalGuest();
    // Second calendar
    $("#datepicker02").datepicker({
        minDate: tomorrow,
        dateFormat: 'dd.mm.yy',
        firstDay: 1
    });
    // First calendar
    $("#datepicker").datepicker({
        minDate: today,
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        onSelect: function(dateText,d){
            if(dateText !== lastVal){
                $dateInput.trigger("change");
                lastVal = dateText;
            }
        },
        onClose: function(dateText,inst){
            if(dateText !== lastVal){
                $dateInput.trigger("change");
                lastVal = dateText;
            }
        }
    }).on('changeDate apply.daterangepicker change keyup paste', function(ev){
        var untill = new Date(convertDate($('#datepicker').val()));
        var newDateString = changeDay(untill,1);
        $('#datepicker02').val(newDateString);
        $("#datepicker02").datepicker('setDate', newDateString);
        $("#datepicker02").datepicker( 'option', 'minDate',newDateString);
    });

    // Card Apartment mockup
    $("#am-datepicker-card").datepicker({
        minDate: today,
        dateFormat: 'dd.mm.yy',
        firstDay: 1
    });
    // Card Apartment mockup
    $("#am-datepicker-card02").datepicker({
        minDate: tomorrow,
        dateFormat: 'dd.mm.yy',
        firstDay: 1
    });


    $.datepicker.setDefaults( $.datepicker.regional[LANGUAGE] );

    ////////////////////////////////////////////////////////////////
    // Heart toogle
    $(".icon-heart, .am-icon-heart").click(function () {
        $(this).find("i").toggleClass("far fa-heart fas fa-heart");
    })

    ////////////////////////////////////////////////////////////////
    // Card Contact with book now
    $(".am-card-contact-close").click(function () {
        $(".am-card-contact").hide();
        $(".am-card-request").hide();
    });
    $(".btn_contact_send").click(function () {
        $(".am-card-contact").hide();
    });
    // Open contact card
    $(".button-message").click(function () {
        $(".am-card-contact").show();
    });

    ////////////////////////////////////////////////////////////////
    // Navigation pop up
    // Sign in
    $(".nav-sign-in").click(function () {
        $(".nav-popup-sign-in").toggle();
        console.log("ops");
    });
    // Sign up
    $(".nav-sign-up").click(function () {
        $(".nav-popup-sign-up").toggle();
    });
    // Partner Sign up
    $(".nav-partner-sign-up").click(function () {
        $(".nav-popup-partner-sign-up").toggle();
    });
    // Pop up - Card - Apartment Mockup
    $("#card-input-options").click(function () {
        $(".am-card-pop-up").toggle();
    });
    $(".am-card-button").click(function () {
        $(".am-card-pop-up").hide();
    });
    $(document).mouseup(function (e) {
        var popupSignIn = $(".nav-popup-sign-in");
        var popupSignUp = $(".nav-popup-sign-up");
        var popupPartnerSignUp = $(".nav-popup-partner-sign-up");
        var popupCardApartmentMockup = $(".am-card-pop-up");

        if (!popupSignIn.is(e.target) && popupSignIn.has(e.target).length === 0) {
            popupSignIn.hide();
        }
        if (!popupSignUp.is(e.target) && popupSignUp.has(e.target).length === 0) {
            popupSignUp.hide();
        }
        if (!popupPartnerSignUp.is(e.target) && popupPartnerSignUp.has(e.target).length === 0) {
            popupPartnerSignUp.hide();
        }
        // Card - Pop up - Apartment Mockup
        if (!popupCardApartmentMockup.is(e.target) && popupCardApartmentMockup.has(e.target).length === 0) {
            popupCardApartmentMockup.hide();
        }
    });
    // Advanced
    $(".advanced-nav-link").click(function () {
        $(".nav-popup-advanced").slideToggle(500);

        $("i", this).toggleClass("fas fa-caret-up fas fa-caret-down");
    });
    // Filters
    $(".filters-nav-link").click(function () {
        $(".nav-popup-advanced").slideToggle(500);

        $("i", this).toggleClass("fas fa-caret-up fas fa-caret-down");
    });
    // Filters
    $(".advanced-filters-link").click(function () {
        $(".nav-popup-advanced").slideToggle(500);
        $("i", this).toggleClass("fas fa-caret-up fas fa-caret-down");
    });

    $(".menu").on("click", function () {
        $(this).toggleClass("active");
    })
    $("nav a").on("click", function () {
        $(".menu").removeClass("active");
    })

    ////////////////////////////////////////////////////////////////
    // Map - arrow right
    $(".sa-arrow-right").click(function () {
        // Cards apartment & map
        $(".sa-cards-apartment-box").toggleClass("more-flex");
        $(".sa-map-box").toggleClass("less-flex");

        $("i", this).toggleClass("fas fa-chevron-left fas fa-chevron-right");

        // Add class footer for search apartment
        $(".apartment-footer-box").toggleClass("width-95");
        $(".sa-p-card-apartment").toggleClass("sa-col-lg-4-active");
        $(".sa-p-card-apartment").toggleClass("sa-col-extra-lg-3-active");
        $(".sa-p-card-apartment").toggleClass("sa-col-md-6-active");

        // Advamced
        $("#advancedColumn01").toggleClass("more-flex");
        $("#advancedColumn02").toggleClass("less-flex");
    })
    ////////////////////////////////////////////////////////////////
    // Count -------------------------------------------------------
    // Adults - Minus
    var count_adults = ($("#adults").val()>=0)?$("#adults").val():0;
    // $(".advancedCount-adults").text(count_adults);
    $(".advancedMinus-adults").click(function () {
        if (count_adults > 1) {
            count_adults--;
            $("#adults").val(count_adults);
            if (count_adults == 1) {
                $(".advancedMinus-adults").addClass("color-dark-blue-lagoon");
                $(".advancedMinus-adults").css("pointer-events", "none");
                $(".advancedPlus-adults").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-adults").css("pointer-events", "auto");
            } else {
                $(".advancedPlus-adults").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-adults").css("pointer-events", "auto");
            }
            $(".advancedCount-adults").text(count_adults);
            $("#rent-input-adults").val(count_adults);
            $("#adults").val(count_adults);
        }
    });
    if (canSleepMax=='undefined') {
        var canSleepMax = $("#can_sleep_max").html();
    }
    // Adults - Plus
    $(".advancedPlus-adults").click(function () {
        if (count_adults < canSleepMax) {
            count_adults++;
            $("#adults").val(count_adults);
            if (count_adults == canSleepMax) {
                $(".advancedPlus-adults").addClass("color-dark-blue-lagoon");
                $(".advancedPlus-adults").css("pointer-events", "none");
                $(".advancedMinus-adults").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-adults").css("pointer-events", "auto");
            } else {
                $(".advancedMinus-adults").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-adults").css("pointer-events", "auto");
            }
            $(".advancedCount-adults").text(count_adults);
            $("#rent-input-adults").val(count_adults);
            $("#adults").val(count_adults);
        }
    });
    // Children - Minus
    var count_children = ($("#children").val()>=0)?$("#children").val():0;
    $(".advancedCount-children").text(count_children);
    $(".advancedMinus-children").click(function () {
        if (count_children > 0) {
            count_children--;
            $("#children").val(count_children);
            if (count_children == 0) {
                $(".advancedMinus-children").addClass("color-dark-blue-lagoon");
                $(".advancedMinus-children").css("pointer-events", "none");
                $(".advancedPlus-children").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-children").css("pointer-events", "auto");
            } else {
                $(".advancedPlus-children").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-children").css("pointer-events", "auto");
            }
            $(".advancedCount-children").text(count_children);
            $("#rent-input-children").val(count_children);
            $("#children").val(count_children);
        }
    });
    // Children - Plus
    $(".advancedPlus-children").click(function () {
        if (count_children < 5) {
            count_children++;
            $("#children").val(count_children);
            if (count_children == 5) {
                $(".advancedPlus-children").addClass("color-dark-blue-lagoon");
                $(".advancedPlus-children").css("pointer-events", "none");
                $(".advancedMinus-children").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-children").css("pointer-events", "auto");
            } else {
                $(".advancedMinus-children").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-children").css("pointer-events", "auto");
            }
            $(".advancedCount-children").text(count_children);
            $("#rent-input-children").val(count_children);
            $("#children").val(count_children);
        }
    });
    // Pets - Minus
    var count_pets = ($("#pets").val()>=0)?$("#pets").val():0;
    $(".advancedCount-pets").text(count_pets);
    $(".advancedMinus-pets").click(function () {
        if (count_pets > 0) {
            count_pets--;
            $("#pets").val(count_pets);
            if (count_pets == 0) {
                $(".advancedMinus-pets").css("pointer-events", "none");
                $(".advancedMinus-pets").addClass("color-dark-blue-lagoon");
                $(".advancedPlus-pets").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-pets").css("pointer-events", "auto");
            } else {
                $(".advancedMinus-pets").css("pointer-events", "auto");
                $(".advancedPlus-pets").css("pointer-events", "auto");
                $(".advancedPlus-pets").removeClass("color-dark-blue-lagoon");
            }
            $(".advancedCount-pets").text(count_pets);
            $("#rent-input-pets").val(count_pets);
            $("#pets").val(count_pets);
        }
    });
    // Pets - Plus
    $(".advancedPlus-pets").click(function () {
        if (count_pets < 5) {
            count_pets++;
            $("#pets").val(count_pets);
            if (count_pets == 5) {
                $(".advancedPlus-pets").addClass("color-dark-blue-lagoon");
                $(".advancedPlus-pets").css("pointer-events", "none");
                $(".advancedMinus-pets").css("pointer-events", "auto");
                $(".advancedMinus-pets").removeClass("color-dark-blue-lagoon");
            } else {
                $(".advancedMinus-pets").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-pets").css("pointer-events", "auto");
                $(".advancedPlus-pets").css("pointer-events", "auto");
            }
            $(".advancedCount-pets").text(count_pets);
            $("#rent-input-pets").val(count_pets);
            $("#pets").val(count_pets);
        }
    })

    // Rating - Minus
    var count_rating = ($("#classcification_star").val()>=1)?$("#classcification_star").val():1;
    $(".advancedMinus-rating").click(function () {
        if (count_rating > 1) {
            count_rating--;
            $("#classification_star").val(count_rating);
            if (count_rating == 1) {
                $(".advancedMinus-rating").css("pointer-events", "none");
                $(".advancedMinus-rating").addClass("color-dark-blue-lagoon");
                $(".advancedPlus-rating").css("pointer-events", "auto");
            } else {
                $(".advancedPlus-rating").removeClass("color-dark-blue-lagoon");
                $(".advancedMinus-rating").css("pointer-events", "auto");
                $(".advancedPlus-rating").css("pointer-events", "auto");
            }
            $(".advancedCount-rating").text(count_rating);
            $("#rent-input-classification_star").val(count_rating);
            $("#classification_star").val(count_rating);
        }
    });
    // Rating - Plus
    $(".advancedPlus-rating").click(function () {
        if (count_rating < 5) {
            count_rating++;
            $("#classification_star").val(count_rating);
            if (count_rating == 5) {
                $(".advancedPlus-rating").css("pointer-events", "none");
                $(".advancedMinus-rating").css("pointer-events", "auto");
                $(".advancedMinus-rating").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-rating").addClass("color-dark-blue-lagoon");
            } else {
                $(".advancedMinus-rating").removeClass("color-dark-blue-lagoon");
                $(".advancedPlus-rating").css("pointer-events", "auto");
                $(".advancedMinus-rating").css("pointer-events", "auto");
            }
            $(".advancedCount-rating").text(count_rating);
            $("#rent-input-classification_star").val(count_rating);
            $("#classification_star").val(count_rating);
        }
    });
    ///Date change/////
    function changeDay(date, diff){
        var newDate = new Date(date.getUTCFullYear(),date.getMonth(),date.getDate()+diff,date.getHours(),date.getMinutes(),date.getSeconds());
        // var newDateString =   newDate.getFullYear() + '-' +
        //     ('0'+ (newDate.getMonth()+1)).slice(-2) + '-' +
        //     ('0'+ newDate.getDate()).slice(-2);
        // var newDateString = ('0'+ (newDate.getMonth()+1)).slice(-2) + '' +
        var newDateString = ('0'+ newDate.getDate()).slice(-2) + '.' +
            // ('0'+ newDate.getDate()).slice(-2) + '/' +newDate.getFullYear();
            ('0'+ (newDate.getMonth()+1)).slice(-2) + '.' +newDate.getFullYear();
        return newDateString;
    }
    ////////////////////////////////////////////////////////////////
    // Count - Card - Apartment-Mockup -----------------------------
    var card_count_adults = ($("#adults").val()>=0)?$("#adults").val():0;
    var card_count_kids = ($("#children").val()>=0)?$("#children").val():0;
    var card_count_pets =  ($("#pets").val()>=0)?$("#pets").val():0;

    var translationForAdults = $("#translationForAdults").html();
    var translationForKids = $("#translationForKids").html();
    var translationForPets = $("#translationForPets").html();

    //Reset final total guests amount $("#card-input-options").
    function resetTotalGuest() {
        var card_count_adults = ($("#adults").val()>=0)?$("#adults").val():0;
        var card_count_kids = ($("#children").val()>=0)?$("#children").val():0;
        var card_count_pets =  ($("#pets").val()>=0)?$("#pets").val():0;
        var text = ((card_count_adults > 0) ? card_count_adults + translationForAdults  : "") +
            ((card_count_kids > 0) ? ", " + card_count_kids + " "+ translationForKids  : "") +
            ((card_count_pets > 0) ? ", " + card_count_pets + " "+ translationForPets  : "");
        $("#card-input-options").val(text);
        if ($(".apartment-data-box-persons").length) $(".apartment-data-box-persons").text(text);
        if ($("#total_guests").length) $("#total_guests").val(text);
        if ($("#card-input-options").length) $("#card-input-options").val(text);
    }


    // Adults - Minus
    // var card_count_adults = ($("#input-adults").val()>=1)?$("#input-adults").val():1;
    $(".am-card-adults-minus").click(function () {
        if (card_count_adults > 1) {
            card_count_adults--;
            $("#adults").val(card_count_adults);
            if (card_count_adults == 1) {
                $(".am-card-adults-minus").css("pointer-events", "none");
                $(".am-card-adults-minus").addClass("color-bg-silver");
                $(".am-card-adults-plus").css("pointer-events", "auto");
            } else {
                $(".am-card-adults-plus").removeClass("color-bg-silver");
                $(".am-card-adults-minus").css("pointer-events", "auto");
                $(".am-card-adults-plus").css("pointer-events", "auto");
            }
            $(".am-card-adults-count").text(card_count_adults);
            $("#adults").val(card_count_adults);
            resetTotalGuest();
        }
    });
    if (canSleepMax=='undefined') {
        var canSleepMax = $("#can_sleep_max").html();
    }
    // Adults - Plus
    $(".am-card-adults-plus").click(function () {
        if (card_count_adults < canSleepMax) {
            card_count_adults++;
            $("#adults").val(card_count_adults);
            if (card_count_adults == canSleepMax) {
                $(".am-card-adults-plus").css("pointer-events", "none");
                $(".am-card-adults-minus").css("pointer-events", "auto");
                $(".am-card-adults-minus").removeClass("color-bg-silver");
                $(".am-card-adults-plus").addClass("color-bg-silver");
            } else {
                $(".am-card-adults-minus").removeClass("color-bg-silver");
                $(".am-card-adults-plus").css("pointer-events", "auto");
                $(".am-card-adults-minus").css("pointer-events", "auto");

            }
            $(".am-card-adults-count").text(card_count_adults);
            $("#adults").val(card_count_adults);
            resetTotalGuest();
        }
    });
    // Kids - Minus
    // var card_count_kids = ($("#input-children").val()>=0)?$("#input-children").val():0;
    $(".am-card-kids-minus").click(function () {
        if (card_count_kids > 0) {
            card_count_kids--;
            $("#children").val(card_count_kids);
            if (card_count_kids == 0) {
                $(".am-card-kids-minus").css("pointer-events", "none");
                $(".am-card-kids-minus").addClass("color-bg-silver");
                $(".am-card-kids-plus").css("pointer-events", "auto");
            } else {
                $(".am-card-kids-plus").removeClass("color-bg-silver");
                $(".am-card-kids-minus").css("pointer-events", "auto");
                $(".am-card-kids-plus").css("pointer-events", "auto");
            }
            $(".am-card-kids-count").text(card_count_kids);
            $("#children").val(card_count_kids);
            resetTotalGuest();
        }
    });
    // Kids - Plus
    $(".am-card-kids-plus").click(function () {
        if (card_count_kids < 5) {
            card_count_kids++;
            $("#children").val(card_count_kids);
            if (card_count_kids == 5) {
                $(".am-card-kids-plus").css("pointer-events", "none");
                $(".am-card-kids-minus").css("pointer-events", "auto");
                $(".am-card-kids-minus").removeClass("color-bg-silver");
                $(".am-card-kids-plus").addClass("color-bg-silver");
            } else {
                $(".am-card-kids-minus").removeClass("color-bg-silver");
                $(".am-card-kids-plus").css("pointer-events", "auto");
                $(".am-card-kids-minus").css("pointer-events", "auto");

            }
            $(".am-card-kids-count").text(card_count_kids);
            $("#children").val(card_count_kids);
            resetTotalGuest();
        }
    });
    // Pets - Minus
    // var card_count_pets =  ($("#input-pets").val()>=0)?$("#input-pets").val():0;
    $(".am-card-pets-minus").click(function () {
        if (card_count_pets > 0) {
            card_count_pets--;
            $("#pets").val(card_count_pets);
            if (card_count_pets == 0) {
                $(".am-card-pets-minus").css("pointer-events", "none");
                $(".am-card-pets-minus").addClass("color-bg-silver");
                $(".am-card-pets-plus").css("pointer-events", "auto");
            } else {
                $(".am-card-pets-plus").removeClass("color-bg-silver");
                $(".am-card-pets-minus").css("pointer-events", "auto");
                $(".am-card-pets-plus").css("pointer-events", "auto");
            }
            $(".am-card-pets-count").text(card_count_pets);
            $("#pets").val(card_count_pets);
            resetTotalGuest();
        }
    });
    // Pets - Plus
    $(".am-card-pets-plus").click(function () {
        if (card_count_pets < 5) {
            card_count_pets++;
            $("#pets").val(card_count_pets);
            if (card_count_pets == 5) {
                $(".am-card-pets-plus").css("pointer-events", "none");
                $(".am-card-pets-minus").css("pointer-events", "auto");
                $(".am-card-pets-minus").removeClass("color-bg-silver");
                $(".am-card-pets-plus").addClass("color-bg-silver");
            } else {
                $(".am-card-pets-minus").removeClass("color-bg-silver");
                $(".am-card-pets-plus").css("pointer-events", "auto");
                $(".am-card-pets-minus").css("pointer-events", "auto");
            }
            $(".am-card-pets-count").text(card_count_pets);
            $("#pets").val(card_count_pets);
            resetTotalGuest();
        }
    });

    ////////////////////////////////////////////////////////////////
    // Type -------------------------------------------------------
    ////////////////////////////////////////////////////////////////
    // Type -------------------------------------------------------
    $(".select-of-location").click(function () {
        $(".button-destination").text(allDestinations);
        $("#location").val("All Destinations");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location01").click(function () {
        $(".button-destination").text(kvarner);
        $("#location").val("Kvarner");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location02").click(function () {
        $(".button-destination").text(istria);
        $("#location").val("Istria");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location03").click(function () {
        $(".button-destination").text(dalmatia);
        $("#location").val("Dalmatia");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location04").click(function () {
        $(".button-destination").text(islands);
        $("#location").val("Islands");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location05").click(function () {
        $(".button-destination").text(dalmatiaSouth);
        $("#location").val("Dalmatia");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location06").click(function () {
        $(".button-destination").text(dalmatiaNorth);
        $("#location").val("Dalmatia");
        $(".button-destination").css("color", "black");
    });
    $(".select-of-location07").click(function () {
        $(".button-destination").text(dalmatiaCentral);
        $("#location").val("Dalmatia");
        $(".button-destination").css("color", "black");
    });
    // $(".select-of-location05").click(function () {
    //     $(".button-destination").text("Krk");
    //     $("#location").val("Krk");
    //     $(".button-destination").css("color", "black");
    // });

    // Type -------------------------------------------------------
    $(".select-of-type01").click(function () {
        $(".button-type").text(any);
        $("#property-type").val("");
        $(".button-type").css("color", "black");
    });
    $(".select-of-type02").click(function () {
        $(".button-type").text(apartment);
        $("#property-type").val("2");
        $(".button-type").css("color", "black");
    });
    $(".select-of-type03").click(function () {
        $(".button-type").text(villa);
        $("#property-type").val("18");
        $(".button-type").css("color", "black");
    });
    $(".select-of-type04").click(function () {
        $(".button-type").text(holidayHouse);
        $("#property-type").val("39");
        $(".button-type").css("color", "black");
    });

    // Guests -------------------------------------------------------
    $(".select-of-guest00").click(function () {
        $(".button-guests").text(numberGuests);
        $("#number-of-guest").val("");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest01").click(function () {
        $(".button-guests").text("1");
        $("#number-of-guest").val("1");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest02").click(function () {
        $(".button-guests").text("2");
        $("#number-of-guest").val("2");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest03").click(function () {
        $(".button-guests").text("3");
        $("#number-of-guest").val("3");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest04").click(function () {
        $(".button-guests").text("4");
        $("#number-of-guest").val("4");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest05").click(function () {
        $(".button-guests").text("5");
        $("#number-of-guest").val("5");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest06").click(function () {
        $(".button-guests").text("6");
        $("#number-of-guest").val("6");
        $(".button-guests").css("color", "black");
    });
    $(".select-of-guest07").click(function () {
        $(".button-guests").text("7");
        $("#number-of-guest").val("7");
        $(".button-guests").css("color", "black");
    });

        // Search Apartment
        //////////////////////////////////////////////////////////////////////////
        // Footer Language - Add active class to the language button (highlight it)
        var header = document.getElementById("btns-lang");
        var btns = header.getElementsByClassName("lang");
        // for (var i = 0; i < btns.length; i++) {
        //     btns[i].addEventListener("click", function () {
        //         var language = document.getElementsByClassName("lang-active");
        //         language[0].className = language[0].className.replace(" lang-active", "");
        //         this.className += " lang-active";
        //     });
        // }
        // Footer Language - Add active class to the language button (highlight it)
        var header02 = document.getElementById("btns-cur");
        if (header02) {
        var btns02 = header02.getElementsByClassName("currency");
        if (btns02)
        for (var i = 0; i < btns02.length; i++) {
            btns02[i].addEventListener("click", function () {
                if (document.getElementsByClassName("cur-active")) {
                    var currency = document.getElementsByClassName("cur-active");
                    currency[0].className = currency[0].className.replace(" cur-active", "");
                    this.className += " cur-active";
                }
            });
        }
        }

        /////////////////Sorting////////////////////
    // var SortingArray = ["Lowest price first","Highest price first","Lowest raring first","Highest rating first"];
    var SortingArray = ["Lowest price first","Highest price first","Lowest stars first","Highest stars first"];
    var currentSort = $("#rent-input-sorting").val();
    $(".advanced-item-box02-arrow-left").click(function () {
        if (currentSort==0) currentSort=SortingArray.length;
        else  currentSort--;
        $(".advanced-item-box02-sort-price").text(SortingArray[currentSort]);
        $("#rent-input-sorting").val(currentSort);
    });
    $(".advanced-item-box02-arrow-right").click(function () {
        if (currentSort==SortingArray.length) currentSort=0;
        else  currentSort++;
        $(".advanced-item-box02-sort-price").text(SortingArray[currentSort]);
        $("#rent-input-sorting").val(currentSort);
    });

    ////////////Cancellation policy/////////////////
    $("#cancellation_policy_id").on('change',function() {
        console.log($("#cancellation_policy_id").val())
    });

    $("#payment_policy_id").on('change',function() {
        console.log($("#payment_policy_id").val())
    });


        // Checkbox + color active orange with advanced
        $("input[type=checkbox]").on('click', function () {
            $(this).parent().toggleClass("color-orange");
        });
        // Search apartment - Fix map for mobile
        $(".sa-map-mobile-close").click(function () {
            $(".sa-map-box").hide();
            $(".sa-map-mobile-close").hide();
        });
        $(".map-fix-button").click(function () {
            $(".sa-map-box").show();
            $(".sa-map-mobile-close").show();
        });
    var checkbox_checked_array = new Map();
// Checkbox check/close
    $(".apartment-checkbox-item-close-icon").click(function (event) {
        var elementId = (event.target.localName == "div" )? event.target.id : event.target.parentElement.id;
        var id = elementId.slice("check-out-".length, elementId.length);
        var checkbox_translateX_01 = (event.target.localName == "div" )?$(event.target.parentElement.parentElement): $(event.target.parentElement.parentElement.parentElement);
        var checkbox_text_01 = (event.target.localName == "div" )?$(event.target.parentElement.parentElement).prev():$(event.target.parentElement.parentElement.parentElement).prev();
        if (checkbox_checked_array.hasOwnProperty(id))  {
            if( checkbox_checked_array[id]==0) {
                return false;
            }
            // else {
            //     checkbox_checked_array[id] = 0;
            //     recalculatePriceForCheck(id, checkbox_checked_array[id], $("#price-"+id).text());
            // }
        }
        // else {
            checkbox_checked_array[id] = 0;
            recalculatePriceForCheck(id, checkbox_checked_array[id], $("#price-"+id).text());
        // }
        $(checkbox_translateX_01).removeClass("translateX-active");
        $(checkbox_text_01).children().each(function() {$(this).removeClass("text-white")});
    });

    $(".apartment-checkbox-item-check").click(function (event) {
        var elementId = (event.target.localName == "div" )? event.target.id : event.target.parentElement.id;
        var id = elementId.slice("check-in-".length, elementId.length);
        var checkbox_translateX_01 = (event.target.localName == "div" )?$(event.target.parentElement):$(event.target.parentElement.parentElement);
        var checkbox_text_01 = (event.target.localName == "div" )? $(event.target.parentElement).prev():$(event.target.parentElement.parentElement).prev();
        if (checkbox_checked_array.hasOwnProperty(id))  {
            if( checkbox_checked_array[id]==1){
                return false;
            }
            else checkbox_checked_array[id]=1;
        }
        else checkbox_checked_array[id]=1;
        recalculatePriceForCheck(id, checkbox_checked_array[id], $("#price-"+id).text());
        $(checkbox_translateX_01).addClass("translateX-active");
        $(checkbox_text_01).children().each(function() {$(this).addClass("text-white")});

    });
// Checkbox counter
//     var checkbox_counter_array = new Map();
    var checkbox_maxCounter = 10;

    $(".apartment-checkbox-item-counter-arrow-up").click(function (event) {
        var elementId = event.target.id;
        var id = elementId.slice("arrow-up-".length, elementId.length);

        var maximumAmount =  Number($("#max-count-"+id).text());

        if (!checkbox_counter_array.hasOwnProperty(id))
            checkbox_counter_array[id]=0;

        var element = $(event.target.parentElement).next();
        var checkbox_text_02 = $(event.target.parentElement.parentElement.parentElement).prev().children();
        var checkbox_translateX_02 = $(event.target.parentElement.parentElement.parentElement).next();
        var icon_checkbox_up = $(event.target);
        var icon_checkbox_down = $(event.target.parentElement).next().next().children();
        if (checkbox_counter_array[id] <= maximumAmount) {
            checkbox_counter_array[id]++;
            recalculatePrice(id,checkbox_counter_array[id],checkbox_counter_array[id]-1);
            $(checkbox_translateX_02).addClass("translateX-active");
            $(checkbox_text_02).addClass("text-white");
            // $(".apartment-checkbox-item-counter-label").text(checkbox_counter);
            element.text(checkbox_counter_array[id]);
            $(icon_checkbox_down).css("opacity", "1");
            if(checkbox_counter_array[id] == maximumAmount) {
                $(icon_checkbox_up).css("opacity", ".5");
            }
        }
    });
    $(".apartment-checkbox-item-counter-arrow-down").click(function (event) {
        var elementId = event.target.id;
        var id = elementId.slice("arrow-down-".length, elementId.length);

        var amountOnElement = $("#"+id).text();

        if (!checkbox_counter_array.hasOwnProperty(id))
            checkbox_counter_array[id]=0;
        if (checkbox_counter_array[id] > 0) {
            var element = $(event.target.parentElement).prev();
            var checkbox_text_02 = $(event.target.parentElement.parentElement.parentElement).prev().children();
            var checkbox_translateX_02 = $(event.target.parentElement.parentElement.parentElement).next();
            var icon_checkbox_down = $(event.target);
            var icon_checkbox_up = $(event.target.parentElement).prev().prev().children();
            checkbox_counter_array[id]--;

            recalculatePrice(id,checkbox_counter_array[id], checkbox_counter_array[id]+1);

            $("#"+id).text(checkbox_counter_array[id]);

            $(icon_checkbox_up).css("opacity", "1");
            if(checkbox_counter_array[id] == 0) {
                $(icon_checkbox_down).css("opacity", ".5");
                $(checkbox_translateX_02).removeClass("translateX-active");
                $(checkbox_text_02).removeClass("text-white");
            }
        }

    });

     function recalculatePrice(id, counter, counterBefore) {
         let elementPrice = Number($("#price-per-one-"+id).text());
         let totalAmenityPrice = Number($("#price-total-"+id).text());

         // if (counter==0) { let savingPrice = Number($("#price-"+id).text()); }
        var oldPrice = (counterBefore==0)? 0 : Number($("#price-"+id).text()) * counterBefore;
        // $("#price-"+id).empty();
        var newPrice = counter * elementPrice;
        var diff = newPrice - oldPrice ;

         var additionalServicesPrice = Number($("#additional_amenities_price").val());
         $("#additional_amenities_price").val(additionalServicesPrice + Number(diff));

         var priceSumFull = Number($("#price_sum_full").val());
         $("#price_sum_full").val(priceSumFull + Number(diff));

         $("#price-total-"+id).empty();
         $("#price-total-"+id).text(newPrice);

        var totalPrice = Number($("#total-price-span-box").text());
        $("#total-price-span-box").empty();
         var newPrice = Number(totalPrice) + Number(diff);
        $("#total-price-span-box").text(newPrice);
        $("#amount-"+id).val(counter);
    }

    function recalculatePriceForCheck(id, counter, price ) {
        var diff = ( counter >0 ) ? price : (-1)*price;
        var priceSumFull = Number($("#price_sum_full").val());
        $("#price_sum_full").val(priceSumFull+Number(diff));
        var additionalServicesPrice = Number($("#additional_amenities_price").val());
        $("#additional_amenities_price").val(additionalServicesPrice+Number(diff));
        var totalPrice= Number($("#total-price-span-box").text());
        $("#total-price-span-box").empty();
        var newPrice = Number(totalPrice) + Number(diff);
        $("#total-price-span-box").text(newPrice);
        $("#amount-"+id).val(counter);
    }

    // datepicker.setDefaults( datepicker.regional.hr );

    $.datepicker.setDefaults( $.datepicker.regional[LANGUAGE] );


     ////////////Search location input change//////////
    function setFinalValue() {
        switch ($("#location-autocomplete").val()) {
            case allDestinations:
                $("#location").val("All Destinations");
                break;
            case kvarner:
                $("#location").val("Kvarner");
                break;
            case istria:
                $("#location").val("Istria");
                break;
            case dalmatia:
                $("#location").val("Dalmatia");
                break;
            case allDestinations:
                $("#location").val("All Destinations");
                break;
            case islands:
                $("#location").val("Islands");
                break;
            default:
                $("#location").val($("#location-autocomplete").val());
                break;
        }
    }



});


///Date change/////
function changeDay(date, diff){
    var newDate = new Date(date.getUTCFullYear(),date.getMonth(),date.getDate()+diff,date.getHours(),date.getMinutes(),date.getSeconds());
    // var newDateString =   newDate.getFullYear() + '-' +
    //     ('0'+ (newDate.getMonth()+1)).slice(-2) + '-' +
    //     ('0'+ newDate.getDate()).slice(-2);
    var newDateString =  ('0'+ newDate.getDate()).slice(-2) + '.' +
        ('0'+ (newDate.getMonth()+1)).slice(-2) + '.' +
        newDate.getFullYear();
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


$("#datepicker").change(function() {
    var untill = new Date(convertDate($('#datepicker').val()));
    var newDateString = changeDay(untill,1);
    $('#datepicker02').val(newDateString);
    $("#am-datepicker-card-to").datepicker('setDate', newDateString);
    $("#am-datepicker-card-to").datepicker( 'option', 'minDate',newDateString);
});

function editBookingOffer($offerId) {
    var form = $('#edit-booking-detail');
    var request = $.ajax({
        url: "/site/edit?id"+$offerId,
        method: "POST",
        cache: false,
        data: form.serializeArray(),
        dataType: "jsonp",
        success: function( data ) {
                console.log('ok edit');
                return false;
        },
        error: function( jqXHR, textStatus ) {
            console.log('not ok  edit');
            return false;
        }
    });
}

function submitWsPay(){
    $("#pay").submit();
}

function submitIbanPayment(offerId){
    var form = $('#mobilerentform');
    var request = $.ajax({
        url: "/site/booking-create?id="+offerId,
        method: "POST",
        cache: false,
        data: form.serializeArray(),
        dataType: "jsonp",
        success: function( data ) {
            console.log('ok create');
            return false;
        },
        error: function( jqXHR, textStatus ) {
            console.log('not ok  create');
            return false;
        }
    });
}

// Update 3.11.2020

// Select dropdown
function init_dropdown_select(id) {
    var dropdown_container = document.getElementById(id);
    var dropdown_list = dropdown_container.getElementsByClassName("dropdown-menu")[0];
    var dropdown_selected = dropdown_container.getElementsByClassName("btn")[0];
    for (let i = 0; i < dropdown_list.children.length; i++) {
        dropdown_list.children[i].onclick  = function(e) {
            dropdown_selected.innerHTML = e.currentTarget.innerHTML;
        }
    }
};

// End - Update 3.11.2020

// Update 5.11.2020

// Counter cricle minus/plus
function counter(id, value) {
    var id = document.getElementById(id);
    var minus = id.children[0];
    var plus = id.children[2];
    var services_value = id.children[1];
    if(value == 0) {
        var counter = 0;
        minus.addEventListener("click", function(){
            if(counter > value) {
                counter--;
                services_value.innerText = counter;
                if(counter === 0){
                    minus.classList.add("disable");
                }
                return;
            }
        });
        plus.addEventListener("click", function(){
            counter++;
            services_value.innerText = counter;
            minus.classList.remove("disable");
            return;
        });
    } else {
        var counter = 1;
        minus.addEventListener("click", function(){
            if(counter > value) {
                counter--;
                services_value.innerText = counter;
                if(counter === 1){
                    minus.classList.add("disable");
                }
                return;
            }
        });
        plus.addEventListener("click", function(){
            counter++;
            services_value.innerText = counter;
            minus.classList.remove("disable");
            return;
        });
    }
}

function validate_signIn() {
    var email = document.getElementById("signIn-email");
    var password = document.getElementById("signIn-password");
    emailValue = email.value;
    passowrdValue = password.value;

    if(emailValue == "") {
        email.style.borderBottom = "1px solid red";
        document.getElementById("signIn_email_required").style.display = "block";
    } else {
        email.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signIn_email_required").style.display = "none";
    }

    if(passowrdValue == "") {
        password.style.borderBottom = "1px solid red";
        document.getElementById("signIn_pass_required").style.display = "block";
    } else {
        password.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signIn_pass_required").style.display = "none";
    }

    if(emailValue == "" || passowrdValue == "") {
        return false;
    }
    else {
        return true;
    }
}

function validate_signUp() {
    var email = document.getElementById("signUp_email");
    var fullName = document.getElementById("signUp_fullName");
    var password = document.getElementById("signUp_password");
    var confirm_password = document.getElementById("signUp_confirm_password");

    emailValue = email.value;
    fullNameValue = fullName.value;
    passwordValue = password.value;
    confirm_passwordValue = confirm_password.value;

    if(emailValue == "") {
        email.style.borderBottom = "1px solid red";
        document.getElementById("signUp_email_required").style.display = "block";
    } else {
        email.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signUp_email_required").style.display = "none";
    }

    if(fullNameValue == "") {
        fullName.style.borderBottom = "1px solid red";
        document.getElementById("signUp_fullName_required").style.display = "block";
    } else {
        fullName.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signUp_fullName_required").style.display = "none";
    }

    if(passwordValue == "") {
        password.style.borderBottom = "1px solid red";
        document.getElementById("signUp_pass_required").style.display = "block";
    } else {
        password.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signUp_pass_required").style.display = "none";
    }

    if(confirm_passwordValue == "") {
        confirm_password.style.borderBottom = "1px solid red";
        document.getElementById("signUp_confirm_pass_required").style.display = "block";
    } else {
        confirm_password.style.borderBottom = "1px solid rgba(255,255,255,.5)";
        document.getElementById("signUp_confirm_pass_required").style.display = "none";
    }

    if(emailValue == "" || fullNameValue == "" || passwordValue == "" || confirm_passwordValue == "") {
        return false;
    } else {
        return true;
    }
}

function validate_partner_signUp() {
    var email = document.getElementById("partner_email");
    var fullName = document.getElementById("partner_fullName");
    var password = document.getElementById("partner_password");
    var confirm_password = document.getElementById("partner_confirm_password");
    var company = document.getElementById("partner_company");
    var corporate_ID = document.getElementById("partner_corporate_ID");

    emailValue = email.value;
    fullNameValue = fullName.value;
    passwordValue = password.value;
    confirm_passwordValue = confirm_password.value;
    companyValue = company.value;
    corporate_IDValue = corporate_ID.value;

    if(emailValue == "") {
        email.style.borderBottom = "1px solid red";
        document.getElementById("partner_email_required").style.display = "block";
    } else {
        email.style.borderBottom = "1px solid silver";
        document.getElementById("partner_email_required").style.display = "none";
    }

    if(fullNameValue == "") {
        fullName.style.borderBottom = "1px solid red";
        document.getElementById("partner_fullName_required").style.display = "block";
    } else {
        fullName.style.borderBottom = "1px solid silver";
        document.getElementById("partner_fullName_required").style.display = "none";
    }

    if(passwordValue == "") {
        password.style.borderBottom = "1px solid red";
        document.getElementById("partner_pass_required").style.display = "block";
    } else {
        password.style.borderBottom = "1px solid silver";
        document.getElementById("partner_pass_required").style.display = "none";
    }

    if(confirm_passwordValue == "") {
        confirm_password.style.borderBottom = "1px solid red";
        document.getElementById("partner_confirm_pass_required").style.display = "block";
    } else {
        confirm_password.style.borderBottom = "1px solid silver";
        document.getElementById("partner_confirm_pass_required").style.display = "none";
    }

    if(companyValue == "") {
        company.style.borderBottom = "1px solid red";
        document.getElementById("partner_company_required").style.display = "block";
    } else {
        company.style.borderBottom = "1px solid silver";
        document.getElementById("partner_company_required").style.display = "none";
    }

    if(corporate_IDValue == "") {
        corporate_ID.style.borderBottom = "1px solid red";
        document.getElementById("partner_corporate_ID_required").style.display = "block";
    } else {
        corporate_ID.style.borderBottom = "1px solid silver";
        document.getElementById("partner_corporate_ID_required").style.display = "none";
    }

    if(emailValue == "" || fullNameValue == "" || passwordValue == "" || confirm_passwordValue == "" || companyValue == "" || corporate_IDValue == "") {
        return false;
    } else {
        return true;
    }

}

// End Update 5.11.2020





