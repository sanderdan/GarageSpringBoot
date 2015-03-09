$(document).ready(function () {
    getAll();
    $('#vehicle_form').submit(function (event) {
        $('#submit_eMessage').empty();
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
                $('#submit_eMessage').append(errorThrown);
            }
        });
    });

    $('#checkLicensePlate').click(function () {
        checkLicensePlate();
    });
});

function getAll() {
    $.getJSON("/vehicle/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            (function (i) {
                var id = data[i].vehicle_id;
                tr = $('<tr/>');
                tr.append("<td>" + data[i].vehicle_id + "</td>");
                tr.append("<td>" + data[i].licensePlate + "</td>");
                tr.append("<td>" + data[i].manufacturer + "</td>");
                tr.append("<td>" + data[i].model + "</td>");
                tr.append("<td>" + data[i].model_year + "</td>");
                tr.append("<td>" + data[i].fuel + "</td>");
                tr.append("<td>" + data[i].odometer + "</td>");
                tr.append('<button id="' + data[i].customer_id + '">X</button>')
                        .click(function () {
                            removeVehicle(id);
                        });
                $('table').append(tr);
            }(i));
        }
    });
}


function checkLicensePlate() {
    $('#eMessage').empty();
    $.ajax({
        url: "/vehicle/licensePlate/" + $('#licensePlate').val(),
        type: 'GET',
        dataType: 'json',
        data: ($('#licensePlate').val()),
        contentType: 'application/json',
        mimeType: 'application/json',
        success: function (data) {
            $('#manufacturer').val(data.manufacturer);
            $('#model').val(data.model);
            $('#model_year').val(data.model_year);
            $('#fuel').val(data.fuel);
            $('#odometer').val(data.odometer);
        },
        error: function (data, status, er) {
            $('#eMessage').append(status);
        }
    });
}


function removeVehicle(id) {
    var vehicle_id = id;
    $.ajax({
        type: 'POST',
        url: "/vehicle/remove/" + vehicle_id,
        data: JSON.stringify(vehicle_id),
        datatype: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            result = data;
            alert("vehicle was removed");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            $('#submit_eMessage').append(errorThrown);
        }
    });
    alert(id);
}

