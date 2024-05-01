const ordenar = (array) => {
    return array.sort((a, b) => a - b);
  };
  
  
  const numeros = [6, 3, 2, 1, 5];
  const numerosOrdenados = ordenar(numeros);
  console.log(numerosOrdenados); 
  