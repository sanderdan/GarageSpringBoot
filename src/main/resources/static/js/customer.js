$(document).ready(function () {
    getAll();
    $('#customer_form').submit(function (event) {
        $('#submit_eMessage').empty();
        event.preventDefault();
        var customer = {};
        $(this).serializeArray().map(function (x) {
            customer[x.name] = x.value;
        });
        var result;
        $.ajax({
            type: 'POST',
            url: "/customer/create/",
            data: JSON.stringify(customer),
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

    $('#checkSSN').click(function () {
        checkSSN();
    });



});

//To show stuff as a <table>
function getAll() {
    $.getJSON("/customer/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            (function (i) {
                var id = data[i].customer_id;
                tr = $('<tr/>');
                tr.append("<td>" + data[i].customer_id + "</td>");
                tr.append("<td>" + data[i].first_name + "</td>");
                tr.append("<td>" + data[i].last_name + "</td>");
                tr.append("<td>" + data[i].mail + "</td>");
                tr.append("<td>" + data[i].phone + "</td>");
                tr.append("<td>" + data[i].street + "</td>");
                tr.append("<td>" + data[i].city + "</td>");
                tr.append("<td>" + data[i].zip + "</td>");
                tr.append("<td>" + data[i].gender + "</td>");
                tr.append("<td>" + data[i].ssn + "</td>");
                tr.append('<button id="' + data[i].customer_id + '">X</button>')
                        .click(function () {
                            removeCustomer(id);
                        });

                $('table').append(tr);
            }(i));
        }
    });
}


function checkSSN() {
    $('#eMessage').empty();
    $.ajax({
        url: "/customer/ssn/" + $('#ssn').val(),
        type: 'GET',
        dataType: 'json',
        data: ($('#ssn').val()),
        contentType: 'application/json',
        mimeType: 'application/json',
        success: function (data) {
            $('#first_name').val(data.first_name);
            $('#last_name').val(data.last_name);
            $('#mail').val(data.mail);
            $('#phone').val(data.phone);
            $('#street').val(data.street);
            $('#zip').val(data.zip);
            $('#city').val(data.city);
            $('#gender').val(data.gender);
        },
        error: function (data, status, er) {
            $('#eMessage').append(status);
        }
    });
}

function removeCustomer(id) {
    var customer_id = id;
    $.ajax({
        type: 'POST',
        url: "/customer/remove/" + customer_id,
        data: JSON.stringify(customer_id),
        datatype: 'json',
        contentType: 'application/json',
        async: false,
        success: function (data) {
            result = data;
            alert("customer was removed");
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
