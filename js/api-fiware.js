var baseURL = "http://200.17.141.87:1026/";

function get(ngsiv2 = 'v2/entities') {
    var ret = $.get(baseURL + ngsiv2, function (date) {//Success
        return date;
    })
        .fail(function () {//error
            return null;
        });

    showQuery(baseURL + ngsiv2, ret);

    return ret;
}

function post(dataSend) {
    var ret = $.ajax({
        url: baseURL + 'v2/entities/',
        type: "POST",
        data: dataSend,
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            return data;
        }
    });

    showQuery(baseURL + 'v2/entities/', ret);

    return ret;
}

function showQuery(url, response) {
    response.always(function (date) {
        var strDate = '';

        $(date).each(function () {
            strDate = strDate + JSON.stringify(this) + '<br><br>';
        });

        $('#show-query .modal-title').html(
            'URL: ' + url
        );
        $('#show-query .modal-body').html(
            strDate
        );

        $('#show-query').modal({
            show: true
        });
    });
}