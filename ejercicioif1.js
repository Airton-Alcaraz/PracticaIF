const USUARIO_NOMRE_REGISTRADO = "pepe";
const USUARIO_CONTRASEÑA_REGISTRADA = "asd123";
const USUARIO_NOMBRE_REGISTRADO1 = "paula";
const USUARIO_CONTRASEÑA_REGISTRADA1 = "polita";


let usuarioNombreIngresado = prompt("Ingrese su nombre de usuario");
let usuarioContraseniaIngresado = prompt("Ingrese su contraseña");

if ((usuarioNombreIngresado == USUARIO_NOMRE_REGISTRADO) && (usuarioContraseniaIngresado == USUARIO_CONTRASEÑA_REGISTRADA)) {
    document.write("Bienvenido a tu cuenta weon :D")
} else if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO1) && (usuarioContraseniaIngresado == USUARIO_CONTRASEÑA_REGISTRADA1)) {
    document.write("Bienvenido/a a tu cuenta")

} else document.write("Usuario y/o contraseña incorrecto")
