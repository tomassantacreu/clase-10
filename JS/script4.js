var nombreYapellido = prompt("Ingrese su nombre y apellido:");
var age = prompt("Ingrese su edad:");
var respuesta = confirm("Nombre y Apellido:" + " " + nombreYapellido + " " + "\n Edad:" + " " + age + "\n Es esto correcto?");
console.warn("Su nombre es" + " " + nombreYapellido + " " + "y su edad" + " " + age)
switch (respuesta) {
    case true: alert("Muchas Gracias");
        break;
    case false: alert("Refresque la pagina");
        break;
}
