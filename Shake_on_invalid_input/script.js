function validateInput(){
  
      let inputfield =document.getElementById("inputfield");
      let inputValue = inputfield.value.trim();
      const errormessage =  document.getElementById("errormessage");



     if(inputValue === ""){

            inputfield.classList.add("shake");
            errormessage.style.visibility ="visible";
    

            setTimeout(function(){
                
            inputfield.classList.remove("shake");
            errormessage.style.visibility ="hidden";

            },500);
          
       }
            else{
                alert("valid Inputs");
                }
        
    }