function saybye(){
	var k= document.getElementById("name").value;
	var message= "Good Bye "+ k +":(";
	document.getElementById("contain").textContent=message;


	if(k==="student"){
		var title1=document.querySelector("#title").textContent;
		title1= "Good Bye sir";
		document.querySelector("#title").textContent=title1;
	}
}