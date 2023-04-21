$.ajax({
    url: "http://192.168.137.129:5000/chat_transfer/agent_list",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);

    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});
