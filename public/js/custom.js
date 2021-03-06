$(document).on("click", ".useredit", function (e) {
    bootbox.alert("Hello world!", function () {
        console.log("Alert Callback");
    });
});

$(document).ready(function () {
    $(".myModalButton").click(function () {
        modelID = $(this).attr("data-target")
        $("#" + modelID).modal();
    });
});

$(function(){
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('.nav-tabs a').click(function (e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });
});


// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(36.912348, 30.639193);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container-8"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Antalya"
    });
}

google.maps.event.addDomListener(window, 'load', regular_map);