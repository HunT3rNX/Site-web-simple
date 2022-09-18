
window.onload = () => {
  if (window.innerWidth > 1023) {
    var x = document.getElementsByClassName("cv");
    /*console.log(x.length);*/                       /*cv devait être remplacé par printable*/
    for (var i = 0; i < x.length; i++) {             /*Mais je ne sais pas pourquoi le 2ème élément de la liste n'est pas modifié*/
      x[i].classList.remove("printable");
    }
  }
}

function goTop() {
  window.scrollTo({top: 0, behavior: 'smooth'}); /*Pour Safari uniquement car liens internes ne fonctionnent pas*/
}

function menu(src) {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("burger").src= src + "img/toggle-icon.png";
    } else {
      x.style.display = "block";
      document.getElementById("burger").src= src + "img/close-icon.png";
    }
  }

function printCv(id){
  var x = document.getElementById(id);
  x.classList.add("printable");
  window.print();
  x.classList.remove("printable");
}


function printAllCv(){
  var x = document.getElementsByClassName("cv");
  for(var i = 0; i < x.length; i++){
    x[i].classList.add("printable");
  }
  window.print();
  for(var i = 0; i < x.length; i++){
    x[i].classList.remove("printable");
  }
  
}
