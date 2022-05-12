const buttonForm = document.querySelector('.buttonForm');
console.log(buttonForm);

const form = document.querySelector('form');
console.log(form);

const buttonenvoyer = document.querySelector('.buttonenvoyer');
console.log(buttonenvoyer);

buttonForm.addEventListener("click", function(){
    form.style.display="block";
});

buttonenvoyer.addEventListener("click", function(){
    form.style.display="none";
});

const resum = document.querySelector('.resum');
console.log(resum);

const resum1 = document.querySelector('.presum');
console.log(resum1);

resum.addEventListener("click", function(){
    resum1.style.display = "block";
});

/*******carousel*********/
let carousel = document.querySelector(".carousel");
let currdeg  = 0;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let d = "";

next.addEventListener("click", function() {
    d = "n";
    rotate();
})

prev.addEventListener("click", function() {
    d = "p";
    rotate();
})

function rotate(e){
  if(d=="n"){
    currdeg = currdeg - 60;
  }
  if(d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.style.transform = "rotateY("+currdeg+"deg)";
}




