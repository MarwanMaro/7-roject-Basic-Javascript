// Get All Element

const buttonEl = document.querySelector(".btn");
const divEl = document.querySelector(".mydiv");
const colors = ["blue" , "green", "black" ,"red" , "silver"];
var i = 0;
// Event
buttonEl.onclick = function(){
    // logic
    divEl.style.backgroundColor = colors[i];
    i++;

    if(i == 5){
        i = 0 
    }
}