<?php
$servername = "localhost";
	$username = "planatc";
		$password = "plcontrol";
			$dbname = "planejamento";
			$conn2 = new mysqli($servername, $username, $password, $dbname);
			if ($conn2->connect_error) {
				die("A Conexão Falhou: " . $conn2->connect_error);
				}
			date_default_timezone_set('America/Sao_Paulo');
			
?>