var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


//Quando o usuário clicar no campo senha, mostre a caixa de mensagem
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

//Quando o usuário clicar no campo senha, mostre a caixa de mensagem
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// Quando o usuário começa a digitar algo dentro do campo de senha
myInput.onkeyup = function () {
  // Validar letras minúsculas
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validar letras maiúsculas
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Valida Numeros
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Valida Comprimento
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}



//Validação de preenchimento
function clicou(){
  let fname = document.getElementById("fname").value;
  if(fname.trim().length == 0){
    alert("Campo Nome precisa ser preenchido");
    document.getElementById("fname").style.borderColor = "red";
    
  }else if(fname.trim().length >= 1){
    document.getElementById("fname").style.borderColor = "green";
  }

//email

  let email = document.getElementById("email").value;
  if(email.trim().length == 0){
    document.getElementById("email").style.borderColor = "red";
    
  }else if(email.trim().length >= 1){
    document.getElementById("email").style.borderColor = "green";
  }


  //Endereço

  let adr = document.getElementById("adr").value;
  if(adr.trim().length == 0){
    document.getElementById("adr").style.borderColor = "red";
    
  }else if(adr.trim().length >= 1){
    document.getElementById("adr").style.borderColor = "green";
  }


//Cidade
  let city = document.getElementById("city").value;
  if(city.trim().length == 0){
    document.getElementById("city").style.borderColor = "red";
    
  }else if(city.trim().length >= 1){
    document.getElementById("city").style.borderColor = "green";
  }

//Estado
  let state = document.getElementById("state").value;
  if(state.trim().length == 0){
    document.getElementById("state").style.borderColor = "red";
    
  }else if(state.trim().length >= 1){
    document.getElementById("state").style.borderColor = "green";
  }


  //CEP

  let zip = document.getElementById("zip").value;
  if(zip.trim().length == 0){
    document.getElementById("zip").style.borderColor = "red";
    
  }else if(state.trim().length >= 1){
    document.getElementById("zip").style.borderColor = "green";
  }

}

