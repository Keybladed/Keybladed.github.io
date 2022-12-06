(function(){
    "use strict";
    
    window.addEventListener("load", init);
    
    function init(){
        let clearbtn = document.getElementById("reset");
        clearbtn.addEventListener("click", clear, false);
        savedIP();
    }

    var count = 1;
    function clear() {
        localStorage.clear();
        localStorage.count = 0;
        savedIP();
    }
    
    function savedIP(){
        let ip = document.getElementById("ip");
        let str = "";

        if(!localStorage.count){
            localStorage.count = 1;
        }else{
            localStorage.count++;
        }

        localStorage.setItem(localStorage.count, ip.textContent);

        for(let i = 1; i < localStorage.count; i++){
            str += localStorage.getItem(i) + "<br>";
        }
        document.getElementById("saved").innerHTML = str;
    }
})();