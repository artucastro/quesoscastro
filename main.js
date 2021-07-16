/*
alert("Al apretar ACEPTAR le haremos una serie de preguntas")

let nombre = prompt("Ingrese su nombre");
console.log(nombre);

let apellido = prompt("Ingrese su apellido");
console.log(apellido);

let edad = parseInt(prompt("Ingrese su edad"));
console.log(edad);

let pregQuesos1 = prompt("A usted le gustan los quesos?");
console.log(pregQuesos1);

let reseña = prompt("Por favor deje aca de donde nos conocio!");
console.log(reseña);

localStorage.setItem(nombre, apellido, edad, pregQuesos1, reseña)

alert("Muchas gracias por visitarnos " + nombre + "" + apellido + "! Que disfrute");

console.table(nombre, apellido, edad, pregQuesos1, reseña);
*/
/*
let footCont = document.createElement("h1")
footCont.innerHTML = "<h1> Contact Us </h1>"
document.body.appendChild(footCont)
$('h1').addClass('footerInd');

let footTel = document.createElement("h2")
footTel.innerHTML = "<h2> Telefono: (+54) 9 11 7402 1169 </h2>"
document.body.appendChild(footTel)
$('h2').addClass('footerInd');

let footMail = document.createElement("h3")
footMail.innerHTML = "<h2> Correo Electronico: quesoscastro@gmail.com </h2>"
document.body.appendChild(footMail)
$('h3').addClass('footerInd');
*/


let et = document.getElementById('telE')
et.addEventListener('click', ()=>{
    Swal.fire('Número de Telefono: (+54) 9 11 2206 5297')
})


let eg = document.getElementById('gmailE')
eg.addEventListener('click', ()=>{
    Swal.fire('Correo Electronico: quesoscastro@gmail.com')
})


let ef = document.getElementById('faceE')
ef.addEventListener('click', ()=>{
    Swal.fire('FaceBook: quesoscastro')
})


let ei = document.getElementById('igE')
ei.addEventListener('click', ()=>{
    Swal.fire('Instagram: quesos.castro')
})


let ew = document.getElementById('wppE')
ew.addEventListener('click', ()=>{
    Swal.fire('Número de WhatsApp: 11 5008 1732')
})

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
  
        }
  });

