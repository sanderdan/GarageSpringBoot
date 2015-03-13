$(document).ready(function () {
    getAll();
    getAllMechanics();
    window.mechanics = {};

    $('#mechanic_form').submit(function (event) {
        event.preventDefault();
        var mechanic = {};
        $(this).serializeArray().map(function (x) {
            mechanic[x.name] = x.value;
        });
        mechanic.id = $('#mechanic').val();
        var result;
        $.ajax({
            type: 'POST',
            url: "/mechanic/create/",
            data: JSON.stringify(mechanic),
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
            }
        });
    });
    $('#checkMechanic').click(function () {
        checkMechanic();
    });
});

//To show stuff as a <table>
function getAll() {
    $.getJSON("/mechanic/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            (function (i) {
                var id = data[i].id;
                tr = $('<tr/>');
                tr.append("<td>" + data[i].id + "</td>");
                tr.append("<td>" + data[i].first_name + "</td>");
                tr.append("<td>" + data[i].last_name + "</td>");
                tr.append('<button id="' + data[i].id + '">X</button>')
                        .click(function () {
                            removeMechanic(id);
                        });
                $('table').append(tr);
            }(i));
        }
    });
}

function getAllMechanics() {
    $.getJSON("/mechanic/all", function (data) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = $('<option/>');
            option.append(data[i].id + " " + data[i].first_name);
            option.val(data[i].id);
            $('#mechanic').append(option);
            window.mechanics[data[i].id] = data[i];
        }
    });
}

function removeMechanic(id) {
    var r = confirm("Are you sure you want to remove mechanic number " + id + "?");
    if (r == true) {
        $.ajax({
            type: 'POST',
            url: "/mechanic/remove/" + id,
            data: JSON.stringify(id),
            datatype: 'json',
            contentType: 'application/json',
            async: false,
            success: function (data) {
                result = data;
                console.log("Mechanic number " + id + " was removed");
                window.location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    } else {
        console.log("Mechanic number " + id + " wasn't removed");
    }
}

function checkMechanic() {
    $('#eMessage').empty();
    $.ajax({
        url: "/mechanic/" + $('#mechanic').val(),
        type: 'GET',
        dataType: 'json',
        data: ($('#mechanic').val()),
        contentType: 'application/json',
        mimeType: 'application/json',
        success: function (data) {
            $('#first_name').val(data.first_name);
            $('#last_name').val(data.last_name);
        },
        error: function (data, status, er) {
            $('#eMessage').append("Mechanic doesn´t exist, please submit mechanic below");
        }
    });
}