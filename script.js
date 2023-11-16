//your JS code here. If required.
 let x=1;
let co=document.getElementById("counter");
var counterValue = 0;
 var incrementBtn = document.getElementById('incrementBtn');
 incrementBtn.addEventListener('click', function() {
            alert(co.innerText);
      
            
	        co.innerText=++counterValue;
    
        });


// function f1(){
// 	alert(co.innerText);
// 	co.innerText=x++;
	
// }