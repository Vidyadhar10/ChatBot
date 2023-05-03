<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Dashboard</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- <script src="WebSoc.js"></script> -->


    <!-- Template Main CSS File -->
    <link href="assets/css/dashboardStyle.css" rel="stylesheet">


    <!-- CDN for Sweet alert  -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />



</head>

<body onload="checkpagetype()">

    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <a href="index.php" class="logo d-flex align-items-center">
                <img src="assets/images/logo.png" alt="">
                <span class="d-none d-lg-block ml-2">Support</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div><!-- End Logo -->



        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

                <li class="nav-item dropdown pe-3">

                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <div class="d-flex">
                            <i class="bi bi-person-fill"></i>
                            <span class="d-none d-md-block dropdown-toggle ps-2 agent_name"></span>
                        </div>
                    </a><!-- End Profile Iamge Icon -->

                    <ul class="dropdown-menu  dropdown-menu-lg-start profile ">
                        <li class="dropdown-header">
                            <h6><b class="agent_name">ABC</b></h6>
                            <span id="agent_role">Web Designer</span>
                        </li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li class="d-flex">
                            <div class="m-2 p-1">
                                <p>Username :</p>
                                <p>Agent Id :</p>
                                <p>Mobile No :</p>
                                <p>Status :</p>
                            </div>
                            <div class="m-2 p-1">
                                <p id="agent_username"></p>
                                <p id="agent_id"></p>
                                <p id="agent_mob"></p>
                                <p id="agent_status"></p>
                            </div>
                        </li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li>
                            <a class="dropdown-item d-flex align-items-center" id="logout">
                                <i class="bi bi-box-arrow-right "></i><span>Sign Out</span>
                            </a>
                        </li>

                    </ul><!-- End Profile Dropdown Items -->
                </li><!-- End Profile Nav -->

            </ul>
        </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <a class="nav-link collapsed " href="index.php">
                    <i class="bi bi-grid"></i><span>Dashboard</span>
                </a>
            </li><!-- End Dashboard Nav -->


            <li class="nav-item">
                <a class="nav-link collapsed" href="faq.html">
                    <i class="bi bi-book"></i><span>FAQ</span><i class=" ms-auto"></i>
                </a>
            </li><!-- End FAQ Nav -->

        </ul>

    </aside><!-- End Sidebar-->

    <main id="main" class="main" style="padding-bottom:0; margin-top: 55px; margin-bottom: 0;">


        <!-- <div class="container m-0 p-0"> -->
        <div class="row">
            <div class="col-lg-9 col-sm-12 card" style="padding-bottom: 0px; margin-bottom:0px; ">
                <div class="chat-area">

                    <!-- chatlist starts -->
                    <div class="chatlist">
                        <div class="modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="chat-header">
                                    <div class="msg-search m-2 mb-0 ml-3">
                                        <input type="text" class="form-control" id="inlineFormInputGroup"
                                            placeholder="Search" aria-label="search">
                                    </div>


                                </div>

                                <div class="modal-body">
                                    <!-- chat-list -->
                                    <div class="chat-lists">
                                        <div class="tab-content" id="myTabContent">

                                            <!-- chat-list -->
                                            <div class="chat-list m-2 " id="chat_list">

                                            </div>
                                            <!-- chat-list -->

                                        </div>

                                    </div>
                                    <!-- chat-list -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- chatlist ends -->



                    <!-- chatbox -->
                    <div class="chatbox ">
                        <div class="modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="msg-head">
                                    <div class="row">
                                        <div class="col-lg-8 col-sm-12">
                                            <div class="d-flex align-items-center">
                                                <span class="chat-icon"><img class="img-fluid"
                                                        src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg"
                                                        alt="image title"></span>
                                                <div class="flex-shrink-0">
                                                    <img class="img-fluid"
                                                        src="https://mehedihtml.com/chatbox/assets/img/user.png"
                                                        alt="user img">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h3 id="selectedChat">--</h3>
                                                    <p id="selectedToken">--</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="modal-body" id="ChatBoxNew" style="overflow: auto;">
                                    <div class="msg-body" id="ChattingBody">
                                        <h5 class="m-5 pl-5 text-secondary" id="blankWindowMsg">Click on the chat to
                                            start the conversation
                                        </h5>
                                        <ul id="ChatList">

                                        </ul>
                                    </div>
                                </div>
                                <div class="send-box">
                                    <form action="" onsubmit="sendMessage(event)">
                                        <input type="text" id="UserInputBox" class="form-control" aria-label="message…"
                                            placeholder="Write message…">

                                        <button type="submit" id="SendButton"><i class="fa fa-paper-plane"
                                                aria-hidden="true"></i>
                                            Send</button>
                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- chatbox -->


            </div>
            <div class="col-lg-3 col-sm-12 m-0">
                <div class="card pt-2" style="border: none;">

                    <div class="row" style="font-size: 14px;">
                        <div class="col">
                            <ul style="list-style: none;">
                                <li>Token No. :</li>
                                <li>Token Status :</li>
                                <li>Created date :</li>
                                <li>Created Time :</li>
                                <li>Priority :</li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul style="list-style: none;">
                                <li id="ticketNo">--</li>
                                <li id="ticketStatus">--</li>
                                <li id="createdDate">--</li>
                                <li id="createdTime">--</li>
                                <li id="priority">--</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div class="card " style="border: none;">


                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill m-2" type="search"
                            placeholder="search for answer" id="example-search-input">
                        <span class="input-group-append ">
                            <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill m-2 "
                                type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </span>
                    </div>


                </div>
                <div class="card">
                    <div class="row">
                        <!-- <div class="col-12"> -->
                        <lable class="col align-self-center ml-2">Change Status</lable>
                        <select class="col form-control my-1 mr-3" id="status_data" disabled
                            onchange="changeStatus(this)">

                        </select>
                        <!-- </div> -->
                    </div>
                </div>
                <div class="card">

                    <div class="row">
                        <lable class="col align-self-center ml-2">Transfer ticket</lable>
                        <select class="col form-control my-1 mr-3" id="transfer_ticket_dropdown" disabled>
                            <option selected>Choose...</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->
        </div>


    </main>


    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/chart.js/chart.umd.js"></script>
    <script src="assets/vendor/echarts/echarts.min.js"></script>
    <script src="assets/vendor/quill/quill.min.js"></script>
    <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="WebSoc.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>
    <!-- <script src="assets/js/chat.js"></script> -->


    <script>

        $(document).ready(function () {
            var ajaxRequests = []; // create an array to store the AJAX requests
            //if id does'nt exist logout
            if (!(<?php echo $_SESSION['agent_id'] ?>)) {
                window.location.href = "login.php";
            } else {
                if ('<?php echo $_SESSION['token_type'] ?>') {

                    var token_type = '<?php echo $_SESSION['token_type'] ?>';
                    var agent_id = <?php echo $_SESSION['agent_id'] ?>;

                    ajaxRequests.push($.ajax({
                        url: `http://192.168.43.155:5000/${token_type}chats/${agent_id}`,
                        type: "GET",
                        dataType: "json",
                        success: function (data) {
                            for (let i of data) {
                                var username = i.user_name;
                                var token_id = i.token_id;
                                var user_id = i.user_id;
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
                                        <h3 class="username">${username}</h3>
                                        <h3 style="font-size:12px" >${token_id}</h3>
                                    </div>
                                </a>`);

                                // Add the new anchor tag to an existing element on the page
                                $('#chat_list').append($newAnchorTag);
                            }

                            var appendedScript = null;
                            $(document).on('click', '.chat_name', function () {
                                $("#blankWindowMsg").hide();
                                var getToken = $(this).find('h3:last').text();
                                var getUsername = $(this).find('h3.username').text();
                                $('#selectedChat').text(getUsername);
                                $('#selectedToken').text(getToken);
                                getUserInfo(user_id, getToken); //here user id is static
                                $('#transfer_ticket_dropdown').removeAttr('disabled');
                                $('#status_data').removeAttr('disabled');
                                // localStorage.setItem('CurrentToken', getToken);
                                $.ajax({
                                    url: 'session.php',
                                    method: 'POST',
                                    async: false,
                                    data: { CurrentToken: getToken },
                                    success: function (response) {
                                        // console.log(getToken); // handle success
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                        console.log(textStatus, errorThrown); // handle error
                                    }
                                });

                                $.ajax({
                                    url: `http://192.168.43.155:5000/chat_history/${getToken}`,
                                    type: "GET",
                                    dataType: "json",
                                    async: false,
                                    success: function (data) {
                                        // console.log(data);
                                        for (let x of data) {
                                            showChats(x.chat_by, x.message, x.timestamp.slice(11, 16));
                                        }
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                        console.log(textStatus, errorThrown);
                                    }
                                });
                                resetVariables(getToken, agent_id);
                            });
                            $.ajax({
                                url: "http://192.168.43.155:5000/chat_transfer/agent_list",
                                type: "GET",
                                dataType: "json",
                                success: function (data) {
                                    var $select = $('#transfer_ticket_dropdown');
                                    for (let i of data) {
                                        $select.append($('<option>', {
                                            value: i.agent_id,
                                            text: i.agent_name,
                                        }));
                                    }
                                    $select.on('change', function () {
                                        var new_agent_id = $(this).val();
                                        var new_agent_Name = $(this).find(':selected').text();
                                        // In your JavaScript code
                                        $.ajax({
                                            url: 'get_token.php',
                                            method: 'GET',
                                            dataType: 'json',
                                            success: function (response) {
                                                var currToken = response.CurrentToken;
                                                Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: `would you like to transfer this ticket(${currToken}) to ${new_agent_Name} ?`,
                                                    icon: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    height: "300",
                                                    width: "300",
                                                    cancelButtonText: 'No',
                                                    confirmButtonText: 'Yes, Sure !',
                                                    showClass: {
                                                        popup: 'animate__animated animate__fadeInDown'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOutUp'
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        transfer_chat(agent_id, new_agent_id, currToken);

                                                    }
                                                })
                                            },
                                            error: function (jqXHR, textStatus, errorThrown) {
                                                console.log(textStatus, errorThrown); // handle error
                                            }
                                        });
                                    });
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    console.log(textStatus, errorThrown);
                                },
                            });
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log(textStatus, errorThrown);
                        },
                        complete: function () {
                            // close the connection
                            ajaxRequests.pop().abort();
                        }
                    }))
                    var $status_data = $('#status_data');

                    switch (token_type) {
                        case 'live':
                            $status_data.empty();
                            $status_data.append($('<option>', {
                                text: 'Choose...',
                            }));
                            $status_data.append($('<option>', {
                                value: 'open',
                                text: 'Open',
                            }));
                            $status_data.append($('<option>', {
                                value: 'hold',
                                text: 'On Hold',
                            }));
                            $status_data.append($('<option>', {
                                value: 'close',
                                text: 'Close',
                            }));
                            break;
                        case 'open':
                            $status_data.empty();
                            $status_data.append($('<option>', {
                                text: 'Choose...',
                            }));
                            $status_data.append($('<option>', {
                                value: 'close',
                                text: 'Close',
                            }));
                            $status_data.append($('<option>', {
                                value: 'hold',
                                text: 'On Hold',
                            }));
                            break;
                        case 'onhold':
                            $status_data.empty();
                            $status_data.append($('<option>', {
                                text: 'Choose...',
                            }));
                            $status_data.append($('<option>', {
                                value: 'open',
                                text: 'Open',
                            }));
                            $status_data.append($('<option>', {
                                value: 'close',
                                text: 'Close',
                            }));
                            break;
                        default:
                            $status_data.empty();
                            $status_data.append($('<option>', {
                                text: 'No options',
                            }));
                            break;
                    }


                }
            }
        });

        function getUserInfo(user_id, tokenId) {

            $.ajax({
                url: `http://192.168.43.155:5000/get_user_info/${user_id}/${tokenId}`,
                type: "GET",
                dataType: "json",
                async: false,
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


        function transfer_chat(agent_id, new_agent_id, currToken) {
            $.ajax({
                url: `http://192.168.43.155:5000/transfer_token/${currToken}/${new_agent_id}/${agent_id}`,
                type: 'GET',
                async: false,
                dataType: "JSON",
                success: function (data) {
                    console.log(data);
                },
                complete: function () {
                    showUpdateSuccess('Tikcet', 'Transfered');
                    removeFromList(currToken);
                }
            })
        }

        $('.chat-icon').click(function () {
            $('.chatbox').addClass('d-none')
        })



        //ticket status change functionality
        function changeStatus(ele) {
            Swal.fire({
                title: 'Are you sure?',
                text: `would you like to change the status to ${ele.value} ?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                height: "300",
                width: "300",
                cancelButtonText: 'No',
                confirmButtonText: 'Yes, Sure !',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    let ticketid = $('#ticketNo').text();

                    if (ele.value == 'open') {
                        $.ajax({
                            url: `http://192.168.43.155:5000/update_open/${ticketid}`,
                            method: 'GET',
                            success: function (result) {
                                showUpdateSuccess('Status', 'Changed');
                                removeFromList(ticketid);
                            }
                        })
                    } else if (ele.value == 'hold') {
                        $.ajax({
                            url: `http://192.168.43.155:5000/update_On_hold/${ticketid}`,
                            method: 'GET',
                            success: function (result) {
                                showUpdateSuccess('Status', 'Changed');
                                removeFromList(ticketid);
                            }
                        })
                    } else if (ele.value == 'close') {
                        $.ajax({
                            url: `http://192.168.43.155:5000/update_close/${ticketid}`,
                            method: 'GET',
                            success: function (result) {
                                showUpdateSuccess('Status', 'Changed');
                                removeFromList(ticketid);
                            }
                        })
                    }


                }
            })


        }

        function showUpdateSuccess(subMsg, mainMsg) {
            Swal.fire(
                mainMsg,
                `${subMsg} ${mainMsg} Successfully!`,
                'success'
            )
        }

        function removeFromList(ticketToRemove) {
            $(document).ready(function () {
                // find all anchor elements within #chat_list
                $('#chat_list a').each(function () {
                    var h3Text = $(this).find('h3:last').text(); // get the text of the last h3 element inside the anchor element
                    if (h3Text === ticketToRemove) { // check if the text is "123"
                        $(this).remove(); // remove the anchor element if the text is "123"
                    }
                });
            });

        }
        function showChats(sender, msg, time) {
            $('#ChatList').empty();
            if (sender == 'user') {
                $.ajax({
                    url: 'sent-msg.html',
                    success: function (html) {
                        var modifiedHtml = html.replace('[TypedMessage]', msg).replace('[msgTime]', time);
                        $('#ChatList').append(modifiedHtml);
                        var chatBody = document.getElementById('ChatBoxNew');
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                })
            }
            if (sender == 'agent') {
                $.ajax({
                    url: 'recieved-msg.html',
                    success: function (html) {
                        var modifiedHtml = html.replace('[Received Msg]', msg).replace('[msgTime]', time);
                        $('#ChatList').append(modifiedHtml);
                        var chatBody = document.getElementById('ChatBoxNew');
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                })
            }
        }

    </script>
    <script src="main_script.js"></script>


</body>

</html>