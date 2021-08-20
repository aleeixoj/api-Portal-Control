<?php

	include "conn2.inc";

	$sql3 = "SELECT DISTINCT `subgrupo` FROM `colaboradores` where ddtregistro = (select max(ddtregistro) from planejamento.colaboradores) and 
	subgrupo not in('') and situacao = 'EM PRODUCAO' Order By subgrupo asc";
	$result3 = $conn2->query($sql3);
		if ($result3->num_rows > 0) {
			foreach (($result3) as $row3){
				$t = $row3['subgrupo'];
				echo "<p>$t</p>"; 
			}
		}else{
	}
?>