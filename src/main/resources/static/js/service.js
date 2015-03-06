$(document).ready(function () {
    getAllVehicles();
    getAllCustomers();
    getAllMechanics();
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

function getAllVehicles() {
    $.getJSON("/vehicle/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            option.append(data[i].license_plate + " " + data[i].model);
            $('#vehicle_info').append(option);
        }
    });
}

function getAllCustomers() {
    $.getJSON("/customer/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            option.append(data[i].ssn + " " + data[i].first_name);
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

