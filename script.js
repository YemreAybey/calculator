let result = document.getElementById("text");
let buttons = document.querySelectorAll(".number");
let decBtn= document.getElementById(".");

//When hit show on display as text
buttons.forEach((button)=> {button.addEventListener("click", ()=>{

	(result.value+=button.id); 
	if(button.id=="."){button.disabled=true; }
	if(button.id=="+" || button.id=="-" || button.id=="/" || button.id=="*"){decBtn.disabled=false;}

	})})


const clear = ()=>{
	let resultArea=result.value.split("");
	resultArea.pop();
	result.value=resultArea.join("");
	if(!result.value.includes("."))
	{decBtn.disabled=false;}
}

let cButton =document.getElementById("C");
cButton.addEventListener("click", clear);

let AcButton = document.getElementById("AC");
AcButton.addEventListener("click", ()=>{result.value="";
	decBtn.disabled=false;
	});

let eqButton = document.getElementById("equal");
const calculate= () => {

	try {eval(result.value);} // If users enter crazy input show them a message
	catch (e){if (e instanceof Error){result.value="Only Math Please!";} return;}

	result.value= eval(result.value);
	if (result.value.length >=12) {result.value=(+result.value).toFixed(10);}
	if (result.value=="Infinity" || result.value=="undefined"){result.value= "Slow down :D";}
	if(!result.value.includes("."))
	{decBtn.disabled=false;}
	}


eqButton.addEventListener("click", calculate);
