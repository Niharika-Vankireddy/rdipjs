function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x == "") {
	  alert("please fill this field username");
	  return false;
	}
  }
  function validateForm() {
	var x = document.forms["myForm"]["email"].value;
	if (x == "") {
	  alert("please fill this field email");
	  return false;
	}
  }
  function validateForm() {
	var x = document.forms["myForm"]["phone"].value;
	if (x == "") {
	  alert("please fill this field email");
	  return false;
	}
  }
  function Validateemail(email) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
	{
	  return (true)
	}
	  alert("You have entered an invalid email address!")
	  return (false)
  }
function TestFunction()
{
//Here we are getting the value from the textbox on browser
var InputStr = document.getElementById('tbox').value; //here we are calling checkingPalindrome() function and passing a string into it
var resStr = checkingPalindrome(InputStr);
alert('The input string "'+InputStr+'" is "'+resStr+'"'); // This will allow a //rectangular box to be popped up on the screen to display result
}
function checkingPalindrome(InputStr)
{
var origString;
InputStr = InputStr.toLowerCase();
origString= InputStr;
InputStr = InputStr.split(''); 
InputStr = InputStr.reverse(); 
InputStr = InputStr.join(''); 
var revString = InputStr;
if(origString == revString){
return 'palindrome true';
}
else
{
return 'not palindrome false';
}
}

