$(document).ready(function () {
    window.vehicles = {};
    window.customers = {};
    window.mechanics = {};
    getAll();
    getAllVehicles();
    getAllCustomers();
    getAllMechanics();

    $('#filter_form').submit(function (event) {
        var selectedVehicle = {};
        var vehicle = $('#vehicle').val();
        selectedVehicle.vehicle = window.vehicles[vehicle];
        getServiceByVehicleId(selectedVehicle.vehicle.id);
        return false;
    });

    $('#service_form').submit(function (event) {
        var year = $('#year').val();
        var month = $('#month').val();
        var day = $('#day').val();
        var hour = $('#hour').val();
        var minute = $('#minute').val();

        var datetime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":00.0";

        var status = $('#status').val();
        var description = $('#description').val();
        var customer = $('#customer').val();
        var vehicle = $('#vehicle').val();
        var mechanic = $('#mechanic').val();

        $('#submit_eMessage').empty();
        event.preventDefault();

        var service = {};
        service.id = $("#service_id").val();
        service.service_date = datetime;
        service.service_status = status;
        service.description = description;
        service.vehicle = window.vehicles[vehicle];
        service.mechanic = window.mechanics[mechanic];
        service.customer = window.customers[customer];

        console.log(service);

        var result;
        $.ajax({
            type: 'POST',
            url: "/service/create/",
            data: JSON.stringify(service),
            datatype: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                result = data;
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                $('#submit_eMessage').append(errorThrown);
            }
        });
    });
    $('#checkService').click(function () {
        checkService();
    });
});

function getAll() {
    $.getJSON("/service/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            (function (i) {
                var service_id = data[i].id;
                tr = $('<tr/>');
                tr.append("<td>" + data[i].id + "</td>");
                tr.append("<td>" + data[i].customer.first_name + " " + data[i].customer.last_name + "</td>");
                tr.append("<td>" + data[i].vehicle.licensePlate + "</td>");
                tr.append("<td>" + data[i].mechanic.first_name + "</td>");
                tr.append("<td>" + data[i].service_date + "</td>");
                tr.append("<td>" + data[i].service_status + "</td>");
                tr.append("<td>" + data[i].description + "</td>");
                tr.append('<button id="' + data[i].id + '">X</button>')
                        .click(function () {
                            removeService(service_id);
                        });
                $('#viewService').append(tr);
            }(i));
        }
    });
}

function getAllVehicles() {
    $.getJSON("/vehicle/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            if (data[i].manufacturer != '') {
                option.append(data[i].manufacturer + " - ");
            }
            if (data[i].model != '') {
                option.append(data[i].model + " - ");
            }
            option.append(data[i].licensePlate);
            option.val(data[i].id);
            $('#vehicle').append(option);
            window.vehicles[data[i].id] = data[i];
        }
    });
}

function getAllCustomers() {
    $.getJSON("/customer/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            if (data[i].first_name != '') {
                option.append(data[i].first_name + " ");
            }
            if (data[i].last_name != '') {
                option.append(data[i].last_name + " ");
            }
            option.append(" - " + data[i].ssn);
            option.val(data[i].id);
            $('#customer').append(option);
            window.customers[data[i].id] = data[i];
        }
    });
}

function getAllMechanics() {
    $.getJSON("/mechanic/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            option.append(data[i].first_name);
            option.val(data[i].id);
            $('#mechanic').append(option);
            window.mechanics[data[i].id] = data[i];
        }
    });
}

function removeService(id) {
    var r = confirm("Are you sure you want to remove service id number " + id + "?");
    if (r == true) {
        $.ajax({
            type: 'POST',
            url: "/service/remove/" + id,
            data: JSON.stringify(id),
            datatype: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                result = data;
                console.log("Service id number " + id + "was removed");
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
                $('#submit_eMessage').append(errorThrown);
            }
        });
    } else {
        console.log("Service " + id + " wasn't removed");
    }
}

function checkService() {
    $('#eMessage').empty();
    $.ajax({
        url: "/service/" + $('#service_id').val(),
        type: 'GET',
        dataType: 'json',
        data: ($('#service_id').val()),
        contentType: 'application/json',
        mimeType: 'application/json',
        success: function (data) {
            var dateTime = data.service_date;
            var finalDate = parseDate(dateTime);
            $('#year').val(finalDate.year);
            $('#month').val(finalDate.month);
            $('#day').val(finalDate.day);
            $('#hour').val(finalDate.hour);
            $('#minute').val(finalDate.minute);
            $('#vehicle').val(data.vehicle.id);
            $('#mechanic').val(data.mechanic.id);
            $('#status').val(data.service_status);
            $('#customer').val(data.customer.id);
            $('#description').val(data.description);
        },
        error: function () {
            $('#eMessage').append("No service avalible on that id");
            $('#service_id').val('');
            $('#year').val('');
            $('#month').val('');
            $('#day').val('');
            $('#hour').val('07');
            $('#minute').val('00');
            $('#vehicle').val('');
            $('#mechanic').val('');
            $('#status').val('BOOKED');
            $('#customer').val('');
            $('#description').val('');
        }
    });
}
var parseDate = function (dateTime) {
    var finalDate = {};
    var replace1 = dateTime.replace(/ /g, "-");
    var replace2 = replace1.replace(/:/g, "-");
    var replace3 = replace2.replace(/\./g, "-");
    var replaceResult = replace3.split("-", 5);

    finalDate["year"] = replaceResult[0];
    finalDate["month"] = replaceResult[1];
    finalDate["day"] = replaceResult[2];
    finalDate["hour"] = replaceResult[3];
    finalDate["minute"] = replaceResult[4];

    return finalDate;
};

function getServiceByVehicleId(selectedVehicle) {
    $("#viewService").find("tr:gt(0)").remove();
    $.ajax({
        type: 'POST',
        url: "/service/filter/" + selectedVehicle,
        data: JSON.stringify(selectedVehicle),
        datatype: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            var tr;
            for (var i = 0; i < data.length; i++) {
                (function (i) {
                    var service_id = data[i].id;
                    tr = $('<tr/>');
                    tr.append("<td>" + data[i].id + "</td>");
                    tr.append("<td>" + data[i].customer.first_name + " " + data[i].customer.last_name + "</td>");
                    tr.append("<td>" + data[i].vehicle.licensePlate + "</td>");
                    tr.append("<td>" + data[i].mechanic.first_name + "</td>");
                    tr.append("<td>" + data[i].service_date + "</td>");
                    tr.append("<td>" + data[i].service_status + "</td>");
                    tr.append("<td>" + data[i].description + "</td>");
                    tr.append('<button id="' + data[i].id + '">X</button>')
                            .click(function () {
                                removeService(service_id);
                            });
                    $('#viewService').append(tr);
                }(i));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            $('#submit_eMessage').append(errorThrown);
        }
    });
}