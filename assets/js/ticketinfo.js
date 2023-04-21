$.ajax({
    url: "http://192.168.137.129:5000/get_user_info/1/0010027",
    type: "GET",
    dataType: "json",
    success: function (data) {
        $("#ticketNo").text(data[0]['token_id']);
        $("#ticketStatus").text(data[0]['token_status']);
       let createddatetime=data[0]['ticket_created_Time'];
       let date=createddatetime.substring(0,10);
       let time=createddatetime.substring(11,)
       $("#createdDate").text(date);
       $("#createdTime").text(time);
        $("#priority").text(data[0]['priority']);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});

