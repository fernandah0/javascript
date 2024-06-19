
		function ordenarArray(arr) {
		   
			if (arr.length !== 2) {
				throw new Error("O arranjo deve conter exatamente dois números.");
			}
		   
			if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
				throw new Error("Ambos os elementos do arranjo devem ser números.");
			}
		 
			if (arr[0] > arr[1]) {
			   
				let temp = arr[0];
				arr[0] = arr[1];
				arr[1] = temp;
			}
			return arr;
		}

        function exibirResultado() {
		
            
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
			
            // Ordena os números
            let arrOrdenado = ordenarArray([num1, num2]);
            
			//resultadoo
            let resultadoElement = document.getElementById("resultado");
            resultadoElement.innerText = "Números ordenados: " + arrOrdenado.join(", ");
            resultadoElement.style.display = 'block';  // Torna o resultado visível
        }
   