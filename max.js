var Dang_ky = document.getElementById("Dang_ky")
var Dang_nhap = document.getElementById("Dang_nhap")

var div_1 = document.getElementById("div_1")
var div_2 = document.getElementById("div_2")


Dang_ky.addEventListener("click",function(){
  if(div_1.style.display == "none"){
    div_1.style.display = "block"
  }else{
    div_1.style.display = "none"
  }

  if(div_2.style.display == "block"){
    div_2.style.display = "none"
  }else{
    div_2.style.display = "block"
  }
})

Dang_nhap.addEventListener("click",function(){
  if(div_1.style.display == "block"){
    div_1.style.display = "none"
  }else{
    div_1.style.display = "block"
  }

  if(div_2.style.display == "none"){
    div_2.style.display = "block"
  }else{
    div_2.style.display = "none"
  }
})