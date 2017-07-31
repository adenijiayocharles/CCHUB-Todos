var textBox = document.getElementById("submit");
textBox.addEventListener("click", function(){
	var text = document.getElementById("list");
	var textValue = text.value;

	if(textValue === "" || textValue === " "){
		alert("Text can not be empty");
		return false;
	}else{
		var listNode = document.createElement("li");
		var textNode = document.createTextNode(textValue);
		listNode.appendChild(textNode);
		listNode.classList = "li-class";
		listNode.setAttribute("onclick","removeTodo(this);");

		var ulTextNode = document.getElementById("todo");
		ulTextNode.appendChild(listNode);
		document.getElementById("instruction").style.display = 'block';
		text.value = "";		
	}
});

function removeTodo(arg){
	arg.style.display = 'none';
}