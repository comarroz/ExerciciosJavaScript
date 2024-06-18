function IMC(){
 
    var peso;//Declarar Variavel
    var altura;
    var res;
 
    //Coletar Dados
 
    peso = parseInt(document.getElementById("peso").value);
    altura = parseInt(document.getElementById("altura").value);
 
    //Realizar a Conta

    res = ("Seu IMC calculado é " + peso / (altura * altura));
    
    
    document.getElementById("resultado").innerHTML = res;
}