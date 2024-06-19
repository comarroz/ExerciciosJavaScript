function idade(){

var idade;

//Coletar Dados
 
idade= parseInt(document.getElementById("idade").value);

//Realizar a Conta




if( idade >= 18) {
    idade = "Você é maior de idade !"
} else if (idade  <= 17 ){
    idade = "Você é menor de idade !"
} else {
  idade = "Erro! DIGITE UM NÚMERO VÁLIDO!!!"
}


document.getElementById("resultado").innerHTML = idade;

}