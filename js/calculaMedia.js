<meta charset="utf-8">

<script>
	
	function pulaPulalinha() {

		document.write("<br>");
		document.write("<br>");
	}

	function mostra(frase) {

		document.write(frase);
		pulaPulalinha();
	}

	var totalFamiliares = parseInt(prompt("Qual a quantidade de familiares?"));

	var totalIdades = 0;
	

	for(var numero = 1; numero <= totalFamiliares; numero++) {

		var idade = parseInt(prompt("Informe a idade do familiar:"));

		totalIdades = totalIdades + idade;
	}

	var mediaDasIdades = Math.round(totalIdades / totalFamiliares);

	mostra("A média das idades dos familiares é de " + mediaDasIdades);

</script>