const buttonForm = document.querySelector('.buttonForm');
console.log(buttonForm);

const form = document.querySelector('form');
console.log(form);

const buttonenvoyer = document.querySelector('.buttonenvoyer');
console.log(buttonenvoyer);

buttonForm.addEventListener("click", function(){
    form.style.display="block";
})

buttonenvoyer.addEventListener("click", function(){
    form.style.display="none";
})
const resum = document.querySelector('.resum');
console.log(resum);

const resum1 = document.querySelector('.presum');
console.log(resum1);

resum.addEventListener("click", function(){
    resum1.style.display = "block";
});