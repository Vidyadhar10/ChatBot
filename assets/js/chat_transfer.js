$.ajax({
    url: "http://192.168.137.129:5000/chat_transfer/agent_list",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        var $select = $('#transfer_ticket_dropdown');
        for (let i of data) {
            $select.append($('<option>', {
                value: 'option1',
                text: 'Option 1'
            }));
            console.log("hi");
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});