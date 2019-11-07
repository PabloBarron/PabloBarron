function creaPiramide(){
    var sizeText = document.getElementById("userText");
    var coE = document.getElementById("error");
    var size= sizeText.value;
    var piramide = document.getElementById("pirámide");
    if(size>50 || size<0){
        sizeText.style.borderColor="red";
        coE.innerHTML="Error, tiene que estar entre 0 y 50";
        coE.style.color="red";
        piramide.innerHTML = "";
    }
    else{
        var i=1;
        var pir="";
        while(i<=size){
            var cont=1;
            for(k=0; k<i;k++){
            pir+="@";
            }
            pir+="</br>";
            i++;
        }
        coE.innerHTML="Excelente!";
        coE.style.opacity= "1";
        coE.style.color="green";
        
        piramide.innerHTML = pir;
        sizeText.style.borderColor="green";
    }
   
}
function creaRandom(){
    var numRand = Math.floor(Math.random() * (50 - 0) + 0);
    document.getElementById("userText").value = numRand;
    creaPiramide();
}
