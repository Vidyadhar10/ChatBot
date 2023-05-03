<?php
session_start();

if (isset($_POST['agent_id'])) {
    $_SESSION['agent_id'] = $_POST['agent_id'];
    $response = array('message' => 'Agent ID stored in session');
    echo json_encode($response);
}
if (isset($_POST['token_type'])) {
    $_SESSION['token_type'] = $_POST['token_type'];
    $response = array('message' => 'Token type stored in session');
    echo json_encode($response);
}
if (isset($_POST['CurrentToken'])) {
    $_SESSION['CurrentToken'] = $_POST['CurrentToken'];
    $response = array('message' => 'current Token id stored in session');
    echo json_encode($response);
}
?>