function retorna(){

    var num1;
    var num2;
    var num3;
    var maior;

    //Coletar dados 

    num1= parseInt(document.getElementById("num1").value);
    num2= parseInt(document.getElementById("num2").value);
    num3= parseInt(document.getElementById("num3").value);


    //realizar a conta 

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2>= num1 && num2>=num3) {
        maior = num2;
    } else {
        maior = num3;
    }


    document.getElementById("resultado").innerHTML = maior;
}