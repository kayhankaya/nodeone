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