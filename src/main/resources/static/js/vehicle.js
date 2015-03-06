$(document).ready(function () {
    getAll();
    $('#vehicle_form').submit(function (event) {
        $('#submit_eMessage').empty();
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
                $('#submit_eMessage').append(errorThrown);
            }
        });
    });
    
    $('#checkLicensePlate').click(function(){
        checkLicensePlate();
    });
});

function getAll() {
    $.getJSON("/vehicle/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].vehicle_id + "</td>");
            tr.append("<td>" + data[i].license_plate + "</td>");
            tr.append("<td>" + data[i].manufacturer + "</td>");
            tr.append("<td>" + data[i].model + "</td>");
            tr.append("<td>" + data[i].model_year + "</td>");
            tr.append("<td>" + data[i].fuel + "</td>");
            tr.append("<td>" + data[i].odometer + "</td>");
            $('table').append(tr);
        }
    });
}


function checkLicensePlate() {
    $('#eMessage').empty();
    $.ajax({    
        url: "/vehicle/licensePlate/"+$('#license_plate').val(),
        type: 'GET',
        dataType: 'json',
        data: ($('#license_plate').val()),
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

