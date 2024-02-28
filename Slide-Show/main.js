

let myImage = document.getElementById("slideshow");
let images = ['img/car1.jpg','img/car2.jpg','img/car3.jpg','img/car4.jpg','img/car5.jpg','img/car6.jpg'];
let i = 0;


function slideshow(){
   
    myImage.setAttribute('src', images[i]);

if(i == images.length -1){
    i = 0;
}else{
    i++;
}

  

    setTimeout(function(){
        slideshow();
    },2000)
}

slideshow();

