$(document).ready(function () {
    getAllVehicles();
    getAllCustomers();
    getAllMechanics();
    getAll();
    $('#submit').click(function () {
        var vehicle = $('#vehicle_info');
        var customer = $('#customer_info');
        var mechanic = $('#mechanic_info');

        // TO DO, GRAB THE OBJECT. MAYBE YOU SHOULD GET THE OBJECT BY EX. LICENSCEPLATE
        console.log(vehicle);
//        alert(getSelectedVehicle());


//        $('#submit_eMessage').empty();
//        event.preventDefault();
//        var service = {};
//        $(this).serializeArray().map(function (x) {
//            service[x.name] = x.value;
//        });
//        
//        console.log(service);
//        var result;
//        $.ajax({
//            type: 'POST',
//            url: "/service/create/",
//            data: JSON.stringify(service),
//            datatype: 'json',
//            contentType: 'application/json',
//            async: false,i].license_plate + " " + data[i].model);
//            success: function (data) {
//                result = data;
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                console.log(jqXHR);
//                console.log(textStatus);
//                console.log(errorThrown);
//                $('#submit_eMessage').append(errorThrown);
//            }
//        });

    });
});

function getAll() {
    $.getJSON("/service/all", function (data) {
                var tr;
                for (var i = 0; i < data.length; i++) {
                    (function (i) {
//                var id = data[i].service_id;
                        var customer = $.getJSON("/customer/" + data[i].customer_id);
                        console.log(customer);
                        tr = $('<tr/>');
                        tr.append("<td>" + data[i].service_id + "</td>");
                        tr.append("<td>" + customer.first_name + "</td>");
//                tr.append("<td>" + data[i].mail + "</td>");
//                tr.append("<td>" + data[i].phone + "</td>");
//                tr.append("<td>" + data[i].street + "</td>");
//                tr.append("<td>" + data[i].city + "</td>");
//                tr.append("<td>" + data[i].zip + "</td>");
//                tr.append("<td>" + data[i].gender + "</td>");
//                tr.append("<td>" + data[i].ssn + "</td>");
//                tr.append('<button id="' + data[i].customer_id + '">X</button>')
//                        .click(function () {
//                            removeCustomer(id);
//                        });

                        $('table').append(tr);
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
            $('#vehicle_info').append(option);
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
            $('#customer_info').append(option);
        }
    });
}

function getAllMechanics() {
    $.getJSON("/mechanic/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            option.append(data[i].first_name);
            $('#mechanic_info').append(option);
        }
    });
}

