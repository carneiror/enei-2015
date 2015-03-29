$( document ).ready(function() {
    var i;

    $('#test').on('click', function () {
        for (i = 0; i < 10000; i++) {
            $("body").append("<div id='myDiv'></div>");

            // window['thisLeak' + i] = $("#myDiv");

            var thisLeak = $("#myDiv");

            $("body").empty();
        }
    });

});