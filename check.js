var add=0;

function captcha() {
	// body...
	var captcha = document.getElementById('captcha');
	const a = Math.ceil(Math.random()*9);
	const b = Math.ceil(Math.random()*9);
	captcha.innerHTML=a+" + "+b +"=";
	add=a+b;

}
function check() {
	// body...
	var Mobile = document.getElementById('Mobile');
	var Password = document.getElementById('p1');
	var Confirm_password = document.getElementById('p2');
	var Fname = document.getElementById('Fname');
	//var State = document.querySelectorAll('select');
	
	var answer = document.getElementById('answer');
	var count=0;
	
 
	// const a = Math.ceil(Math.random()*2);
	// const b = Math.ceil(Math.random()*2);
	// document.getElementById('captcha').innerHTML= a+ " + "+ b
	
	//check first name 
	if (Fname.value == "") {
		console.log('plz fill the first name');
		alert('plz fill the first name');
		count++;
	}
	else{
		console.log('Hi ' + Fname.value);
	}
	//check password and confirm password
	if ((Password.value != Confirm_password.value)||(Password.value =="" ||Confirm_password.value=="")) {
		console.log('Password and Confirm_password is not matching');
		alert('Password and Confirm_password is not matching')
		count++;
	}
	else{
		console.log('matched both Password');
	}
	// check mobile number
	let number = Mobile.value;
	if (number>=999999999 && number<=9999999999) {
		console.log('correct Mobile number');
	}
	else{
		console.log('incorrect Mobile number');
		alert('incorrect Mobile number')
		count++;
	}
	//captcha verification
	if(answer.value!=add){
		console.log('invalid captcha');
		count++;
		alert("invalid captcha")
	}

	if(count>0){
		return false;
	}



}