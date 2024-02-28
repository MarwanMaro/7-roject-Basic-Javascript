// Get All Element
const inputEle = document.getElementById("input");
const buttonEle = document.getElementById("btn");
const msgEl = document.getElementById("msg");



//Event
buttonEle.onclick = function(){
    // get value from input
    const inputValue = inputEle.value;
    console.log(inputValue);

   if(inputValue != ""){
     // input Value p
     msgEl.innerHTML = inputValue;

     // empty input value
     inputEle.value = ""
   }
}



