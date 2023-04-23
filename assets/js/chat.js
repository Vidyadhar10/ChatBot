var token_type = localStorage.getItem('token_type');
var agent_id = localStorage.getItem('agent_id');

$.ajax({
    url: `http://192.168.137.129:5000/${token_type}chats/${agent_id}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
        for (let i of data) {
            var username = i.user_name;
            var token_id = i.token_id;
            var imgUrl = "https://mehedihtml.com/chatbox/assets/img/user.png";

            // Create a new anchor tag with dynamic data
            var $newAnchorTag = $(`<a class="d-flex  align-items-center hov chat_name">
                            <div class="flex-shrink-0">
                                <img class="img-fluid"
                                    src="${imgUrl}"
                                    alt="user img">
                                <!-- <span class="active"></span> -->
                            </div>
                            <div class="flex-grow-1 m-1">
                                <h3>${username}</h3>
                                <h3 style="font-size:12px" >${token_id}</h3>
                            </div>
                        </a>`);

            // Add the new anchor tag to an existing element on the page
            $('#chat_list').append($newAnchorTag);

            $(document).on('click', '.chat_name', function () {
                var getToken = $(this).find('h3:last').text();
                getUserInfo(1, getToken);             //here user id is static
            });

        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});


function getUserInfo(user_id, tokenId) {
    $.ajax({
        url: `http://192.168.137.129:5000/get_user_info/${user_id}/${tokenId}`,
        type: "GET",
        dataType: "json",
        success: function (data) {
            $("#ticketNo").text(data[0]['token_id']);
            $("#ticketStatus").text(data[0]['token_status']);
            let createddatetime = data[0]['ticket_created_Time'];
            let date = createddatetime.substring(0, 10);
            let time = createddatetime.substring(11,)
            $("#createdDate").text(date);
            $("#createdTime").text(time);
            $("#priority").text(data[0]['priority']);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

