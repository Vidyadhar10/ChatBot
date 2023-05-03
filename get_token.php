<?php
// In get_token.php
session_start();
echo json_encode(array('CurrentToken' => $_SESSION['CurrentToken']));

?>