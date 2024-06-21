function impar(){

    var num1;
    

     //Coletar dados 

     num1= parseInt(document.getElementById("num1").value);

     //realizar a conta 

     if(num1 %  2 == 0){
        num1 = "Numero Par";

     } else {
        num1 = "Numero impar";
     }

  
     document.getElementById("resultado").innerHTML = num1;

}