function suma(){
    var x1, x2, resultado;
    x1=document.getElementById("num1").value;
    x2=document.getElementById("num2").value;
    resultado=parseInt(x1)+parseInt(x2);
    document.getElementById("resultado").innerHTML=resultado;
}
function resta(){
    x1=document.getElementById("num1").value;
    x2=document.getElementById("num2").value;
    resultado=parseInt(x1)-parseInt(x2);
    document.getElementById("resultado").innerHTML=resultado;
}
function multi(){
    var x1, x2, resultado;
    x1=document.getElementById("num1").value;
    x2=document.getElementById("num2").value;
    resultado=parseInt(x1)*parseInt(x2);
    document.getElementById("resultado").innerHTML=resultado;
}
function divi(){
    var x1, x2, resultado;
    x1=document.getElementById("num1").value;
    x2=document.getElementById("num2").value;
    resultado=parseInt(x1)/parseInt(x2);
    document.getElementById("resultado").innerHTML=resultado;
}