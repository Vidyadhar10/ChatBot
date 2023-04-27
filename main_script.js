
// Login Page Script Starts here 

function LoginToHome() {
    const id = $('#Agent_ID').val();
    const username = $('#Agent_username').val();
    const password = $('#Agent_password').val();

    console.log(username);
    $.ajax({
        url: `http://192.168.137.129:5000/login/${id}?username=${username}&password=${password}`,
        // type: "POST",
        method: 'post',
        dataType: "json",
        success: function (data) {
            console.log(data);

            localStorage.setItem('agent_id', data.agent_id);

            let tokenRecieved = data.token;
            $.ajax({
                url: `http://192.168.137.129:5000/protected/${tokenRecieved}`,
                method: 'GET',
                dataType: 'json',
                success: function (data2) {
                    console.log(data2);
                    window.location.href = 'index.html';
                },

            })

        },

    })
}

//Login page script ends here

//Dashboard Script START

let logoutBtn = document.querySelector('#logout');
if (logoutBtn) {
    let agent_id = localStorage.getItem('agent_id');

    logoutBtn.addEventListener('click', function (e) {
        try {
            $.ajax({
                url: `http://192.168.137.129:5000/logout/${agent_id}`,
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
        }
        catch (e) {
            console.log(e);
        }
    });
}


// let a_id = localStorage.getItem('agent_id');
// var ajaxRequests = []; // create an array to store the AJAX requests


// ajaxRequests.push($.ajax({
//     url: `http://192.168.137.129:5000/get_agent_info/${a_id}`,
//     method: 'GET',
//     dataType: "json",
//     success: function (data) {
//         // console.log(data);
//         $(".agent_name").text(data[0]['agent_name']);
//         $("#agent_role").text(data[0]['role']);
//         $("#agent_username").text(data[0]['username']);
//         $("#agent_id").text(data[0]['agent_id']);
//         $("#agent_mob").text(data[0]['mobile_number']);
//         $("#agent_status").text(data[0]['status']);
//         localStorage.removeItem('token_type');

//     },
//     complete: function () {
//         // close the connection
//         ajaxRequests.pop().abort();
//     }
// }));
