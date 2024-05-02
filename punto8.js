var cantidad = 5000;
const impuesto = 20;

function pagar(cantidad, impuesto) {
    var valor = cantidad*(impuesto/100);
    console.log(valor);
}
pagar(cantidad, impuesto)