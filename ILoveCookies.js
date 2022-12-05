$.getJSON("https://api.ipify.org?format=json", function(data) {
    $("#ip").html(data.ip);
})

(function(){
    "use strict";
    
    window.addEventListener("load", init);
    
    function init(){
        let clear = document.getElementById("reset")
        clear.addEventListener("click", clear, false);
    }

    function clear() {
        window.localStorage.clear();
        localStorage.count = 1;
    }

    function savedIP(){
        let ip = document.getElementById("ip");
        let str;

        if(!localStorage.count){
            localStorage.count = 1
        }else{
            localStorage.count + 1
        }
        window.localStorage.setItem(localStorage.count, ip);

        for(let i = 1; i < localStorage.count; i++){
            str += window.localStorage.getItem(i) + "\n";
        }
        document.getElementById("saved").innerHTML=str;
    }
})

