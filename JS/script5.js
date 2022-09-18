let genero = prompt("Usted es hombre o mujer")
let edad = prompt("Introduce tu edad");


if (genero == "hombre" && edad >= 18) {
    alert("Puedes entrar, eres mayor de edad.");
} else if (genero == "hombre" && edad < 18) {
    alert("No puedes entrar, eres menor de edad.");
}

if (genero == "mujer" && edad >= 20) {
    alert("Puedes entrar, eres mayor de edad.");
} else if (genero == "mujer" && edad < 20) {
    alert("No puedes entrar, eres menor de edad.");
}