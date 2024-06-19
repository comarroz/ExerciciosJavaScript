function comparacao(){


    var num;

  //Coletar Dados
 
  num = parseInt(document.getElementById("num").value);

  //Realizar a Conta

  if(num <0) {
      num = "O número digitado é negativo !"
  } else if(num > 0){
      num = "O número digitado é positivo !"
  } else{
    num = "O número digitado é ZERO!"
}

    document.getElementById("resultado").innerHTML = num;


}