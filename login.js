 let em = document.getElementById("e");
let ps = document.getElementById("p");
let sem= localStorage.getItem("email");
let sps= localStorage.getItem("password");
 function login(){
  
  if(em.value!=sem && ps.value!=sps){
    alert("incorrect data")
  }else{
    window.location.href="admin.html"
     
  }
 }
export{em,ps,login}

 

