console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

function sayhello(){
	console.log("hi");
	var y=document.getElementById("name").value ;
	var message="<h1>Hello"+" "+y+"!</h1>";
	//document.getElementById("contain").textContent=message;
	document.getElementById("contain").innerHTML=message;

	if(y==="sagnic"){
		var title=document.querySelector("#title").textContent;
		title = "Hi Admin";

		document.querySelector("#title").textContent=title;	

	}

	else if(y==="animation"){
		var link=document.getElementById("name").value;
		var msg="<a href=animation.html> To Go Animation</a>";
		document.getElementById("contain").innerHTML= msg;
	}
	else if(y==="flex"){
		var link1=document.getElementById("name").value;
		var msg1="<a href =flex.html>Go To Flex</a>";
		document.getElementById("contain").innerHTML=msg1;
	}
	else if(y==="")
	{
		var message1=document.querySelector("#contain").textContent;
		var error="<h3><font color=red>Write Something !</font><h3>"

		document.querySelector("#contain").innerHTML=error;	
	}
}