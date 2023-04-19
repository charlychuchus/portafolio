function suma(){
    /*parseInt; parseFloat*/
    var num1, num2, reultado;
    num1=parseInt(prompt("Escribe un numero",""));
    num2=parseInt(prompt("Escribe otro numero",""));
    reultado=num1+num2;
    alert("La suma es "+reultado);
}

function resta(){
    /*parseInt; parseFloat*/
    var num1, num2, reultado;
    num1=parseInt(prompt("Escribe un numero",""));
    num2=parseInt(prompt("Escribe otro numero",""));
    reultado=num1-num2;
    alert("La resta es "+reultado);
}

function multi(){
    /*parseInt; parseFloat*/
    var num1, num2, reultado;
    num1=parseInt(prompt("Escribe un numero",""));
    num2=parseInt(prompt("Escribe otro numero",""));
    reultado=num1*num2;
    alert("La multiplicacion es "+reultado);
}

function divi(){
    /*parseInt; parseFloat*/
    var num1, num2, reultado;
    num1=parseInt(prompt("Escribe un numero",""));
    num2=parseInt(prompt("Escribe otro numero",""));
    reultado=num1/num2;
    alert("La division es "+reultado);
}

function eval(){
    /*parseInt; parseFloat*/
    var num1;
    num1=parseInt(prompt("Escribe un numero",""));
    if(num1>=0) 
        alert("Es positivo");
    else
        alert("Es negativo");
}