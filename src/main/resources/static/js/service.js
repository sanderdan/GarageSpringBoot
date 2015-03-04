$(document).ready(function () {
    $("#service_form").submit(function (event) {
        alert("booom");
        event.preventDefault();
        var vehicle = {};
        $(this).serializeArray().map(function (x) {
            vehicle[x.name] = x.value;
        });
        var result;
        $.ajax({
            type: 'POST',
            url: "/vehicle/create/",
            data: JSON.stringify(vehicle),
            datatype: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                result = data;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
    
    $('#checkLicensePlate').click(function(){
        checkLicensePlate();
    });
});

function checkLicensePlate() {
    $.ajax({
        url: "/vehicle",
        type: 'GET',
        dataType: 'json',
        data: ($('#license_plate').val()),
        contentType: 'application/json',
        mimeType: 'application/json',
        success: function (data) {
            alert(data.id + " " + data.name);
            // get customer info and add to fields same thing with car
        },
        error: function (data, status, er) {
            alert("error: " + data + " status: " + status + " er:" + er);
        }
    });
}

