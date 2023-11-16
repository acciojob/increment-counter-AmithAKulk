//your JS code here. If required.
let start =0;
document.getElementById('counter').innerText=start;

const increment = function () {
	alert(start);
	start++;
	document.getElementById('counter').innerText=start;	
}

document.querySelector('button').addEventListener('click',()=>{
increment()
})