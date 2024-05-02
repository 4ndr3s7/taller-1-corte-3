function tabla() {
    var tabla = "";
    for (var i = 1; i <= 10; i++) {
        tabla += " 4 x " + i + " = " + (4 * i );
    }
    return tabla;
}

console.log(tabla());
