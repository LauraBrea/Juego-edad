/*
JUEGO
1-elige un numero del 1 al 10
2-multiplica ese numero por 2
3-sumale 5
4-multiplicalo por 50
5-si ya ha sido tu cumpleaños este año sumale 1771 y si todavia no lo fue simale 1770
6-restale el año de tu nacimiento (4 cifras)
7-resultado de 3 cifras, las ultimas 2 son tu edad
*/

let entrada =prompt ("Hola! Cómo te llamas?");
    alert ("Bienvenido/a " + entrada + " !");

let pregunta = prompt ("Voy a adivinar tu edad! Si quieres jugar ingresa: Si");

if((pregunta =="Si") || (pregunta =="si") || (pregunta =="SI")){
    alert ("Bien, juguemos! Vas a necesitar una calculadora.");

    let multi2 = 2;
    let suma5 = 5;
    let multi50 = 50;

    let pasoUno = prompt("Elige un número del 1 al 10 e ingresa el valor:");
        console.log ("Número elegido " +pasoUno);

    if (pasoUno <= 10) {

        let pasoDos = prompt("(Número elegido: " + pasoUno + ") - Multiplica ese número por 2 e ingresa el valor:");
        let resultado1 = parseInt(pasoUno) * multi2; 
            console.log ("Valor: " + resultado1);

        let pasoTres = prompt("(Resultado anterior: " + pasoDos + ") - Súmale 5 e ingresa el valor:");
        let resultado2 = resultado1 + suma5; 
            console.log ("Valor: " + resultado2);

        let pasoCuatro = prompt("(Resultado anterior: " + pasoTres + ") - Multiplícalo por 50 e ingresa el valor:");
        let resultado3 = resultado2 * multi50;
            console.log ("Valor: " + resultado3);

        let pasoCinco = prompt("(Resultado anterior: " + pasoCuatro + ") - Si ya ha sido tu cumpleaños este año súmale 1771 y si todavia no lo fue súmale 1770 e ingresa el valor:");
        let resultado4 = resultado3 + parseInt(pasoCinco) - resultado3;
            console.log ("Valor: " + resultado4);

        let pasoSeis = prompt("(Resultado anterior: " + pasoCinco + ") - Réstale el año de tu nacimiento (4 cifras) e ingresa el valor:");
        let resultado5 = resultado4 - parseInt(pasoSeis);

        let multi100= 100;

        let resultado6 = parseInt(pasoUno) * multi100;
        let resultado7 = parseInt(pasoSeis) - resultado6;

        alert ("HAS NACIDO EN " + resultado5+ " Y TU EDAD ES DE " + resultado7 + " AÑOS!"); 

    }else {
        alert ("Debes ingresar un valor igual o menor a 10. Presiona F5 y volvamos a intentarlo.")
    }

} else {
    alert ("No estás convencido? Juguemos en otro momento! O presiona F5 y volvamos a intentarlo.");
} 
