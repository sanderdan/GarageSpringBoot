$(document).ready(function () {
    getAll();
    $('#vehicle_form').submit(function (event) {
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
                alert("Vehicle info added");
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
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
                var id = data[i].id;
                tr = $('<tr/>');
                tr.append("<td>" + data[i].id + "</td>");
                tr.append("<td>" + data[i].licensePlate + "</td>");
                tr.append("<td>" + data[i].manufacturer + "</td>");
                tr.append("<td>" + data[i].model + "</td>");
                tr.append("<td>" + data[i].model_year + "</td>");
                tr.append("<td>" + data[i].fuel + "</td>");
                tr.append("<td>" + data[i].odometer + "</td>");
                tr.append('<button id="' + data[i].id + '">X</button>')
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
            $('#eMessage').append("Car doesn´t exist, please submit vehicle below");
        }
    });
}


function removeVehicle(id) {
    var r = confirm("Are you sure you want to remove Vehicle " + id + "?");
    if (r == true) {
        $.ajax({
            type: 'POST',
            url: "/vehicle/remove/" + id,
            data: JSON.stringify(id),
            datatype: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                result = data;
                console.log("Vehicle " + id + " was removed");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                $('#submit_eMessage').append(errorThrown);
            }
        });
        window.location.reload();
    } else {
        console.log("Vehicle " + id + " wasn't removed");
    }
}