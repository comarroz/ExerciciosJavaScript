function aprovado(){

    var nt1;
    var nt2;
    var notinha;

    //Coletar dados 

    nt1= parseInt(document.getElementById("nt1").value);
    nt2= parseInt(document.getElementById("nt2").value);

     //realizar a conta 
    
     if(nt1>= 7 && nt2>=7){
        notinha ="Aprovado em Ambas as Materias "
     } else if(nt1>=7 || nt2>=7){
        notinha = "Aprovado em uma Matéria"
     }else { notinha = "Reprovado em Ambas as Matérias "}


    document.getElementById("resultado").innerHTML = notinha;
}