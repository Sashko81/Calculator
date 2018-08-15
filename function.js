function Plus() {
    var num1, num2;
    num1=document.getElementById("n1").value;
    num1=parseInt(num1);
    num2=document.getElementById("n2").value;
    num2=parseInt(num2);
    result=num1+num2;
    document.getElementById("out").innerHTML=result;
}
function Minus() {
    var num1, num2
    num1=document.getElementById("n1").value;
    num1=parseInt(num1);
    num2=document.getElementById("n2").value;
    num2=parseInt(num2);
    result=num1-num2;
    document.getElementById("out").innerHTML=result;
}
function Multiply() {
    var num1, num2
    num1=document.getElementById("n1").value;
    num1=parseInt(num1);
    num2=document.getElementById("n2").value;
    num2=parseInt(num2);
    result=num1*num2;
    document.getElementById("out").innerHTML=result;
}
function Divide() {
    var num1, num2
    num1=document.getElementById("n1").value;
    num1=parseInt(num1);
    num2=document.getElementById("n2").value;
    num2=parseInt(num2);
    result=num1/num2;

    document.getElementById("out").innerHTML=result;
}