 let em = document.getElementById("e");
let ps = document.getElementById("p");
let sem= localStorage.getItem("email");
let sps= localStorage.getItem("password");
 function login(){
  
   if(em.value && ps.value){
    if(em.value==sem && ps.value==sps){
        window.location.href="admin.html"
      }else{
       
         alert("incorrect data")
      }
   }else{
    alert("fill data")
   
   }
 }
export{em,ps,login}

 

