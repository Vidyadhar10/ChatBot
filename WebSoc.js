// WEB SOCKET CODE STARTS HERE


// var agent_id = "<? php echo $_SESSION['agent_id'] ?>";
var ws = null;
var socket = null;


function resetVariables(current_token, agent_id) {
    // var current_token = localStorage.getItem('CurrentToken');
    // close existing sockets (if they exist)
    if (ws) {
        ws.close();
    }
    if (socket) {
        socket.close();
    }



    ws = new WebSocket(`ws://192.168.43.155:5000/chat/${current_token}/a_${agent_id}`);
    alert(`ws://192.168.43.155:5000/chat/${current_token}/a_1`);


    ws.onmessage = function (event) {
        var msg = event.data.split('message:')[1].split('~')[0].trim();
        var msgFrom = event.data.match(/user #(.*)_/)[1].trim();
        var msgTokenNo = event.data.split('~')[1].split('at')[0].trim();
        var msgTime = event.data.slice(-15, -9);
        if (msgTokenNo == current_token) {
            if (msgFrom == 'u') {
                $.ajax({
                    url: 'sent-msg.html',
                    success: function (html) {
                        var modifiedHtml = html.replace('[TypedMessage]', msg).replace('[msgTime]', msgTime);
                        $('#ChatList').append(modifiedHtml);
                        var chatBody = document.getElementById('ChatBoxNew');
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                })
            } else {
                $.ajax({
                    url: 'recieved-msg.html',
                    success: function (html) {
                        var modifiedHtml = html.replace('[Received Msg]', msg).replace('[msgTime]', msgTime);
                        $('#ChatList').append(modifiedHtml);
                        var chatBody = document.getElementById('ChatBoxNew');
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                })
            }
        }

    };


    $('#SendButton').click(function () {
        var inputValue = $('#UserInputBox').val();
        if (inputValue.trim() != "") {
            $('#UserInputBox').focus();
            ws.send(inputValue);
        }
        $('#UserInputBox').val('');
        event.preventDefault();
    });



    // socket = new WebSocket(`ws://192.168.43.155:5000/chat/${current_token}/a_1`);
    // alert(`ws://192.168.43.155:5000/chat/${current_token}/a_1`);

    // socket.onclose = function (event) {
    //     if (event.wasClean) {
    //         alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    //     } else {
    //         alert('[close] Connection died');
    //     }
    // };

    // socket.onerror = function (error) {
    //     alert(`[error]`);
    // };
}