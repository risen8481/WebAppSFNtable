// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var xmlraw = '<soap:Envelope xmlns:xsi="http://www.w3.org\/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
                  <soap:Body>\
                    <GetWorkPosResponse xmlns="http://localhost.com/apps">\
                      <GetWorkPosResult>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                        <GetWorkPos>\
                          <Year>2020</Year>\
                          <Month>January</Month>\
                          <Proforma>2</Proforma>\
                          <Details>detaisl</Details>\
                        </GetWorkPos>\
                      </GetWorkPosResult>\
                    </GetWorkPosResponse>\
                  </soap:Body>\
                </soap:Envelope>';


var soapParser = function (xmlraw) {

    var proformaList = [];

    var index = 0;
   // var xml = $.parseXML(xmlraw);
    $(xmlraw)
        .find('GetWorkPosResult').find('GetWorkPos')
        .each(function (index) {

            //console.log($(this).children().length);
            var proforma = {};
            for (var i = 0; i < $(this).children().length; i++) {

                var key = $(this).children()[i].tagName;
                var value = $(this).children()[i].textContent;

                //console.log(key + " -- " + value);

                proforma[key] = value;

            }

            console.log(proforma.Year);

            proformaList.push(proforma);

            console.log("proforma list length " + proformaList.length);
        });

    var resultJson = JSON.stringify(proformaList);

    alert(resultJson);

    // console.log(JSON.stringify(proformaList));

    return proformaList;

};



var table;
//var tableJSo = soapParser(xmlraw);
$(document).ready(function () {


    $.ajax(
        {
            // async: true,

            //contentType: "application/x-www-form-urlencoded; charset=utf-8",
            //dataType: "json",
            url: '/Home/GetProformasList',
            type: "POST",
            
            contentType: 'application/json; charset=utf-8',
            headers: {
                RequestVerificationToken: gettoken()
            }
        }
    ).done(function (resp) {

        var tableJSod = soapParser(resp.res);


        table = $("#proformaGrid").DataTable({

            "processing": false, // for show progress bar
            "serverSide": false, // for process server side
            "filter": true, // this is for disable filter (search box)
            "orderMulti": false, // for disable multiple column at once
            "pageLength": 10,

            "responsive": true,
            //"ajax": {
            //    "url": "/Home/GetOpinionsList",
            //    "type": "POST",
            //    "data": function (d) {
            //        d.opinionReceiverId = charId;

            //    },
            //    "datatype": "json",
            //    "headers": {
            //        RequestVerificationToken: gettoken()
            //    }
            //},
            "data": tableJSod,
            "columnDefs":
                [
                    {
                        "targets": [0],
                        "searchable": true,
                        "orderable": false,
                        "width": "15%"
                    },
                    {
                        "targets": [1],
                        "searchable": false,
                        "orderable": false
                    },
                    {
                        "targets": [2],
                        "searchable": false,
                        "orderable": false,
                        "width": "10%"
                    },
                    {
                        "targets": [3],
                        "searchable": false,
                        "orderable": false,
                        "width": "10%"
                    }
                ],

            "oLanguage": {

                "sSearch": "Szukaj",
                "sLengthMenu": "Wyświetl _MENU_ opinii na stronie",
                "sZeroRecords": "Przepraszamy - nie znaleziono żadnego rekordu",
                "sInfo": "Wyświetlana strona _PAGE_ z _PAGES_",
                "sInfoEmpty": "Nie ma dostępnych rekordów",
                "sInfoFiltered": "(przefiltrowano z _MAX_ rekordów)",
                "oPaginate": {
                    "sNext": "Następna strona",
                    "sPrevious": "Poprzednia strona"
                },
                "sProcessing": "Ładowanie danych..."
            },



            "aoColumns": [
                {
                    //"render": function (data, type, full, meta) {

                    //    return "";

                    //}
                    "mData": "YEAR", "name": "Year", "autoWidth": false
                },
                {
                    //"render": function (data, type, full, meta) {

                    //    return "";

                    //}
                    "mData": "MONTH", "name": "Month", "autoWidth": false
                },
                {

                    "mData": "PROFORMA", "name": "Proforma", "autoWidth": false
                },
                {
                    //"render": function (data, type, full, meta) {

                    //    return "";

                    //}
                    "mData": "DETAILS", "name": "Details", "autoWidth": false
                }
            ],
            //"order": [[1, 'asc']],

            "drawCallback": function (settings) {
                var info = this.api().page.info();
                var rowCount = info.recordsTotal;

                var kor = this.api().rows({ page: 'current' }).count();
                console.log(kor + " " + rowCount);

                if (rowCount <= kor) {

                    $('.dataTables_paginate').hide();
                } else {

                    $('.dataTables_paginate').show();
                }

                //var api = this.api();

                //// Output the data for the visible rows to the browser's console
                //console.log(api.rows({ page: 'current' }).data());
                //console.log(api.rows().data());
            },

            "initComplete": function (settings, json) {

            }
        });


    }).fail(function (resp) {
        alert("error");
    });



   


});




//console.log("length "+tableJSo.length);
