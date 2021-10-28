function cantidad(letras) {
    if (letras.length>5){
        return "tiene mas de 5 letras";
    } if (letras.length==5){
        return "tiene 5 letras";
    }        else {
        return "tiene menos de 5 letras";
}
}

var contador = cantidad ('casa');
console.log (contador);