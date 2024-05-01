const filtrarNumerosPares = function(array) {
    
    const numerosPares = array.filter(function(numero) {
      return numero % 2 === 0; 
    });
    
    return numerosPares;
  };
  
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = filtrarNumerosPares(numeros);
  console.log("Números pares de la lista:", numerosPares);
  