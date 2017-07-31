var textBox = document.getElementById("submit");
textBox.addEventListener("click", function(){
	var text = document.getElementById("list");
	var listNode = document.createElement("li");
	var textNode = document.createTextNode(text.value);
	listNode.appendChild(textNode);
	listNode.classList = "li-class";
	listNode.setAttribute("onclick","removeTodo(this);");

	var ulTextNode = document.getElementById("todo");
	ulTextNode.appendChild(listNode);
	text.value = "";
});

function removeTodo(arg){
	arg.style.display = 'none';
}