var agent_id = localStorage.getItem('agent_id');

let logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click', function (e) {
    try {
        $.ajax({
            url: "http://192.168.137.129:5000/logout/" + agent_id,
            type: "POST",
            dataType: "json",
            success: function (data) {
                localStorage.clear();
                window.location.href = "../index.html"
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }
    catch (e) {
        console.log(e);
    }
});
if (localStorage.getItem('agent_id') != "") {

    $(document).ready(function () {
        var a_id = localStorage.getItem('agent_id');

        $.ajax({
            url: 'http://192.168.137.129:5000/agent/dashboard/' + a_id,
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
                // $.each(data, function (index, item) {
                //     $('#departmentname').val(item.department);

                // });
                $("#open_tickets_count").text(data['open_token']);
                $("#live_tickets_count").text(data['live_token']);
                $("#closed_tickets_count").text(data['close_token']);
                $("#hold_tickets_count").text(data['hold_token']);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    })

    $.ajax({
        url: "http://192.168.137.129:5000/get_agent_info/" + agent_id,
        type: "GET",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $(".agent_name").text(data[0]['agent_name']);
            $("#agent_role").text(data[0]['role']);
            $("#agent_username").text(data[0]['username']);
            $("#agent_id").text(data[0]['agent_id']);
            $("#agent_mob").text(data[0]['mobile_number']);
            $("#agent_status").text(data[0]['status']);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
$('#open').click(function () {
    localStorage.setItem('token_type', 'open');
    window.location.href = `chat.html`;                //redirect
})
$('#close').click(function () {
    localStorage.setItem('token_type', 'close');
    window.location.href = `chat.html`;
})
$('#live').click(function () {
    localStorage.setItem('token_type', 'live');
    window.location.href = `chat.html`;
})
$('#on_hold').click(function () {
    localStorage.setItem('token_type', 'onhold');
    window.location.href = `chat.html`;
})