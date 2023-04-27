// WEB SOCKET CODE STARTS HERE

var Token_id = localStorage.getItem('Token_Generated');
var u_id = localStorage.getItem('User_ID');
var ws = new WebSocket(`ws://192.168.137.129:5000/chat/0010027/a_1`);
// var ws = new WebSocket(`ws://192.168.137.129:5000/chat/00100228/u_1`);


ws.onmessage = function (event) {
    var msg = event.data.match(/message:(.*)at/)[1].trim();
    var msgFrom = event.data.match(/user #(.*)_/)[1].trim();
    if (msgFrom == 'u') {
        $.ajax({
            url: 'sent-msg.html',
            success: function (html) {
                var modifiedHtml = html.replace('[TypedMessage]', msg);
                $('#ChatList').append(modifiedHtml);
            }
        })
    } else {
        $.ajax({
            url: 'recieved-msg.html',
            success: function (html) {
                var modifiedHtml = html.replace('[Received Msg]', msg);
                $('#ChatList').append(modifiedHtml);
            }
        })
    }

};


function sendMessage(event) {
    var inputValue = $('#UserInputBox').val();
    if (inputValue.trim() != '') {
        ws.send(inputValue);
    }
    $('#UserInputBox').val('');
    event.preventDefault();
}


let socket = new WebSocket(`ws://192.168.137.129:5000/chat/0010027/a_1`);

// // socket.onopen = function (e) {
// //     alert("[open] Connection established");
// //     alert("Sending to server");
// //     socket.send("My name is John");
// // };

socket.onmessage = function (event) {
    // alert(`[message] Data received from server: ${event.data}`);
};

// socket.onclose = function (event) {
//     if (event.wasClean) {
//         alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//     } else {
//         // e.g. server process killed or network down
//         // event.code is usually 1006 in this case
//         alert('[close] Connection died');
//     }
// };

// socket.onerror = function (error) {
//     alert(`[error]`);
// };

