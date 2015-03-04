

$(document).ready(function () {
    alert("hej");
    getAll();
});

//To show stuff as a <table>
function getAll() {
    $.getJSON("/customer/all", function (data) {
        var tr;
        for (var i = 0; i < data.length; i++){
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
            tr.append('<button type="button" class="btn btn-danger">X</button>');
            
            $('table').append(tr);
        }
    });
}