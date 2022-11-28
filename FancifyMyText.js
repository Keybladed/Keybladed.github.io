function enlargeText(){
    var txt = document.getElementById("textInput");
    txt.style.fontSize = "24pt";
}

function normalText(){
    var txt = document.getElementById("textInput");
    txt.style.fontSize = "10pt";
}

function fancify(){
    var txt = document.getElementById("textInput");
    var fancy = document.getElementById("fancy").checked;
    if(fancy){
        txt.style.fontWeight = "bold";
        txt.style.color = "blue";
        txt.style.textDecoration = "underline";
    }else{
        txt.style.fontWeight = "normal";
        txt.style.color = "black";
        txt.style.textDecoration = "none";
    }
}

function moo(){
    var txt = document.getElementById("textInput");
    var split = txt.value.split(".");
    txt.value = split.join("-Moo.");
}