const contarPalabras = function(cadena) {
    cadena = cadena.trim();
    
    
    const palabras = cadena.split(/\s+/);
    
    
    return palabras.length;
  };
  
  const texto = "Pablito clavo un clavito";
  const cantidadPalabras = contarPalabras(texto);
  console.log("Cantidad de palabras:", cantidadPalabras); 