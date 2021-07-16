//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});
      
$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});
$(".submit").click(function(){
	return false;
})


function Guardar(mail, contraseña1, confContraseña1, nombre1, apellido1, telefono1, address1){
    this.mail = mail;
    this.con = contraseña1;
    this.cCon = confContraseña1;
    this.nomb = nombre1;
    this.ape = apellido1;
    this.tel = telefono1;
    this.address = address1;
};

const array=[];

let enviar = document.getElementById('env')
enviar.addEventListener('click', ()=>{
	//console.log('Su cuenta se a creado con exito!');
	miForm = document.getElementById('msform');

	let mail1 = document.getElementById('mail').value;
	let cont = document.getElementById('cont').value;
	let cc = document.getElementById('cCont').value;
	let name = document.getElementById('nomb').value;
	let app = document.getElementById('ape').value;
	let te = document.getElementById('tel').value;
	let add = document.getElementById('address').value;
	let usuario = new Guardar(mail1,cont ,cc ,name ,app ,te ,add );

	array.push(usuario);

	localStorage.setItem('arrayDatosUsuario' ,JSON.stringify(array));

	miForm.reset();
	Swal.fire("Su cuenta se a creado con exito!")
});
console.log(array)


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

