// Hardcodeo de contraseña
let pass = '1234';

    
// Funcion de logeo
alert('Bienvenido/a la tienda de ropa Online');

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userPass = parseInt(prompt('Ingrete tu clave numerica de 4 digitos : '));
        if (userPass == pass) {
            ingresar = true;
            break;
        } else {
            alert('Contraseña invalida, tenes ' + i + ' intentos');
        }

    }

    return ingresar;

}

// Productos
let remera = 1000;
let pantalon = 2500;
let short = 1500;
let buzo = 2250;
let campera = 3000;



if (login()) {
    let opcion = prompt('Estos productos tenemos disponibles para la compra. Elije un producto para comprar. \n 1) Remera estampada.  \n 2) Pantalon largo. \n 3) Shorts. \n 4) Buzo. \n 5) Campera. \n Si queres salir "X".')

    while (opcion != 'X' && opcion != 'x') {


        switch (opcion) {

            case '1':
                alert('Agregaste una remera que cuesta precio de lista $ ' + remera);
                opcion = remera;
                break;
                r
            case '2':
                alert('Agregaste un pantalon que cuesta precio de lista $ ' + pantalon);
                opcion = pantalon;
                break;

            case '3':
                alert('Agregaste un shorts que cuesta precio de lista $ ' + short);
                opcion = short;
                break;

            case '4':
                alert('Agregaste un buzo que cuesta precio de lista $ ' + buzo);
                opcion = buzo;
                break;

            case '5':
                alert('Agregaste una campera que cuesta precio de lista $ ' + campera);
                opcion = campera;
                break;


            default:
                alert('Elejiste una opcion invalida');
                break;


        }

        formaPago = prompt('Elije tu forma de pago : efectivo o tarjeta');
        
        if (formaPago == "efectivo") {
            alert('Tienes un descuento de %10')
            compra = opcion / 1.10;
            compraConDecimal = compra.toFixed(2); 
            alert('Tu compra es de $ ' + compraConDecimal);
            break;

        } else if (formaPago == 'tarjeta') {
            alert('Tienes un recargo de %10');
            compra = opcion * 1.10;
            compraConDecimal = compra.toFixed(2); 
            alert('Tu compra es de $ ' + compraConDecimal);
            break;
        }


    }



} else {
    alert('Ingresaste una contraseña invalida, deberas recuperarla.')
}



alert('Vuelva pronto');




