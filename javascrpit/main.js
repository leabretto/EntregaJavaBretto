
const mensaje = "Ingrese el modelo de zapatillas de su gusto:\n" +
    "modeloa\n" +
    "modelob\n" +
    "modeloc"



function consultaPrecios() {
    let consulta = prompt(mensaje).toLowerCase().trim()
    if (consulta !== "modeloa" && consulta !== "modelob" && consulta !== "modeloc") {
        alert("Debe ingresar un código válido.")
    } 
    else {
        switch (consulta) {
            case "modeloa":
                alert("El modelo A cuesta $5400.")
                break;
            case "modelob":
                alert("El modelo B cuesta $3200.")
                break;
            case "modeloc":
                alert("El modelo C cuesta $4300.")
                break;
            default:
                alert("Ese modelo no existe.")
                break;
        }
        comprarProducto()
    }
}

function comprarProducto(){
    let pregunta = confirm("¿Desea comprar este producto?")
    if(pregunta) {
        alert("Gracias por comprar este producto.")
    }
    else {
        alert("Puede consultar otros precios.")
    }
}

    let continuar = true

    while (continuar) {
        consultaPrecios()
        continuar = confirm("¿Deseas conocer otro precio?")
    }





