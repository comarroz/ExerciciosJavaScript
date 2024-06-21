    function ponderar() {

        var nota1;
        var nota2;
        var nota3;

        var peso1;
        var peso2;
        var peso3;
        var media;

        //Coletar dados 

        nota1= parseInt(document.getElementById("nota1").value);
        nota2= parseInt(document.getElementById("nota2").value);
        nota3= parseInt(document.getElementById("nota3").value);

        peso1= parseInt(document.getElementById("peso1").value);
        peso2= parseInt(document.getElementById("peso2").value);
        peso3= parseInt(document.getElementById("peso3").value);


        //realizar a conta 

        media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

        document.getElementById("resultado").innerHTML = media;
    }