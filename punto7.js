function Palindromo(palabra) {
    palabra = palabra.toLowerCase().replace(/\s/g, '');
    return palabra === palabra.split('').reverse().join('');
}

console.log(Palindromo("reconocer")); 
console.log(Palindromo("oso")); 
console.log(Palindromo("casa")); 
console.log(Palindromo("anilina"));
console.log(Palindromo("salas"));
console.log(Palindromo("somos"));
console.log(Palindromo("socio")); 

