/*
 * Starter file 
 */
(function() {
    "use strict";
  
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener("load", init);
  
    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
      let encryptB = document.querySelector("#encrypt-it");
      encryptB.addEventListener("click", shift);
      let resetB = document.querySelector("#reset");
      resetB.addEventListener("click", reset);
    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    function shift() {
      let input = document.getElementById("input-text");
      input = input.value.toLowerCase();
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] < 'a' || input[i] > 'z') {
          result += input[i];
        } else if (input[i] == 'z') {
          result += 'a';
        } else { // letter is between 'a' and 'y'
          let letter = input.charCodeAt(i);
          let resultLetter = String.fromCharCode(letter + 1);
          result += resultLetter;
        }
      }
      document.getElementById("result").innerHTML = result;
    }
  
    function reset() {
      document.getElementById("input-text").value = "";
    }

  })();

function font(){
  let input = document.getElementById("input-text");
  let bigFont = document.getElementById("bigFont").checked;
  let Lfont = document.getElementById("bigFont").value;
  let smallFont = document.getElementById("smallFont").checked;
  let Sfont = document.getElementById("smallFont").value;

  if(bigFont){
    input.style.fontSize = Lfont;
  }

  if(smallFont){
    input.style.fontSize = Sfont;
  }
}

function caps(){
  let input = document.getElementById("input-text");
  let upper = document.getElementById("all-caps").checked;

  if(upper){
    input.style.textTransform = "uppercase";
  }else{
    input.style.textTransform = "none";
  }
}