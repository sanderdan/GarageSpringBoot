$(document).ready(function () {
    $('#stats_form').submit(function (event) {
        getStatistics();
        return false;
    });
});

function getStatistics() {
    var fromDate = $('#from_year').val() + "-" + $('#from_month').val() + "-01 04:00.0";
    var toDate = $('#to_year').val() + "-" + $('#to_month').val() + "-01 04:00.0";
    $.ajax({
        url: "/service/stats/" + fromDate + "/" + toDate,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        mimeType: 'application/json',
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
                    $('#viewStats').append(tr);
                }(i));
            }
        },
        error: function (data, status, er) {
            console.log(data);
            console.log(status);
            console.log(er);
        }
    });

}