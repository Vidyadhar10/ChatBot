var agent_id = localStorage.getItem('agent_id');


let logoutBtn = document.querySelector('#logout');

logoutBtn.addEventListener('click', function (e) {
    $.ajax({
        url: `http://192.168.43.155:5000/logout/${agent_id}`,
        type: "POST",
        dataType: "json",
        success: function (data) {
            localStorage.clear();
            window.location.href = "login.html";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});

var getAgentInfo = $.ajax({
    url: `http://192.168.43.155:5000/get_agent_info/${agent_id}`,
    method: 'GET',
    dataType: "json",
    async: false,
    success: function (data) {
        // console.log(data);
        $(".agent_name").text(data[0]['agent_name']);
        $("#agent_role").text(data[0]['role']);
        $("#agent_username").text(data[0]['username']);
        $("#agent_id").text(data[0]['agent_id']);
        $("#agent_mob").text(data[0]['mobile_number']);
        $("#agent_status").text(data[0]['status']);
    }
});
getAgentInfo.abort();
