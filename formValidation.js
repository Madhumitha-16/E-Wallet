function validateForm(){
   var name=document.myform.name.value;
   if(name==null || name==""){
       alert("Please enter your name");
       console.log("not filled");
       return false;
   }

   var email=document.myform.email.value;
   if(email==null || email==""){
    alert("Please enter your mail ID");
    return false;
}

var pwd=document.myform.pwd.value;
if(pwd==null || pwd==""){
 alert("Please enter your password");
 return false;
}else if(pwd.length < 4 ){
    alert("Password should be atleast 6 characters");
}

var cpwd=document.myform.cpwd.value;

if(pwd!=cpwd){
    alert("Password doesnot match");
    return false;
}


   
}

