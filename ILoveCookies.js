(function(){
    "use strict";
    
    window.addEventListener("load", init);
    
    function init(){
        let clearbtn = document.getElementById("reset");
        clearbtn.addEventListener("click", clear, false);
        savedIP();
    }

    function clear() {
        localStorage.clear();
        localStorage.count = 0;
        savedIP();
    }
})();

const api_url = "https://api.ipify.org";

function savedIP(){
    let ip = document.getElementById("ip");
    let str = "";
    
    if(!localStorage.count){
        localStorage.count = 1;
    }else{
        localStorage.count++;
    }

    let temp = getapi(api_url);

    for(let i = 1; i < localStorage.count; i++){
        str += localStorage.getItem(i) + "<br>";
    }
    document.getElementById("saved").innerHTML = str;
}

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.text();
    console.log(data);
    localStorage.setItem(localStorage.count, data);
    return data;
}
