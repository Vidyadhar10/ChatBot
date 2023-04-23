
// Login Page Script Starts here 

// Check if the search form and list elements are present on the page
const searchForm = document.querySelector('#searchForm');
const ul = document.querySelector('#ul');

if (searchForm && ul) { // Only execute the code if the elements are present

    // Add an event listener to the search form
    searchForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get the values of the form fields
        const id = searchForm.elements.id.value;
        const username = searchForm.elements.username.value;
        const password = searchForm.elements.password.value;

        // Create a new li element to display the result
        const li = document.createElement('li');

        try {
            // Send a POST request to the login endpoint
            const res = await axios.post(`http://192.168.137.129:5000/login/${id}?username=${username}&password=${password}`);
            console.log(res.data);
            const token = res.data.token;

            try {
                // Send a GET request to the protected endpoint with the token
                const tokenVerification = await axios.get(`http://192.168.137.129:5000/protected/${token}`);
                console.log(tokenVerification);

                if (tokenVerification.status === 200 && tokenVerification.data.message === 'success') {
                    // Set the agent ID in local storage
                    localStorage.setItem('agent_id', id);

                    // Redirect to the index.html page
                    window.location.href = `index.html`;
                } else {
                    li.innerText = 'Invalid token';
                    ul.appendChild(li);
                }
            } catch (err) {
                li.innerText = 'Invalid token';
                ul.appendChild(li);
            }
        } catch (err) {
            li.innerText = 'Invalid credentials';
            ul.appendChild(li);
        }
    });
}


//Login page script ends here

//Dashboard Script START

var agent_id = localStorage.getItem('agent_id');

let logoutBtn = document.querySelector('#logout');
if (logoutBtn) {

    logoutBtn.addEventListener('click', function (e) {
        try {
            $.ajax({
                url: "http://192.168.137.129:5000/logout/" + agent_id,
                type: "POST",
                dataType: "json",
                success: function (data) {
                    localStorage.clear();
                    window.location.href = "login.html"
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

// dashboard cards redirections
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


//Dashboard Script END

// Chat.html page Scripts START

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

// Chat .html page script END