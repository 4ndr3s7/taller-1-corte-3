function circulo(radio){
    var area = Math.PI*radio*radio;
    return area;
}
 const radio = 10;
 const area = circulo(radio)
 console.log("El area del circulo es", area);