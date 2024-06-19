function IMC(){
 
    var peso;//Declarar Variavel
    var altura;
    var imc;
 
    //Coletar Dados
 
    peso = parseInt(document.getElementById("peso").value);
    altura = parseInt(document.getElementById("altura").value);
 
    //Realizar a Conta

    imc =  peso / (altura * altura);

    if (imc < 18.5) {
        imc = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
       imc = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        imc = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
       imc = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        imc = "Obesidade grau 2";
    } else {
        imc = "Obesidade grau 3";
    }
    
    
    document.getElementById("resultado").innerHTML = imc;
}