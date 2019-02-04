function localDoc(argument) {
	// body...
	let xhttp = new XMLHttpRequest()
	xhttp.onreadyStatechange = function(){
		if (this.readystate == 4 && this.status == 200){
			document.getElementById("demo").innerHTML = this.responseText
		}
	}
};
xhttp.open("GET", "http://jsonplaceholder.typicode.com/todos", true);
xhttp.onreload= function(){
	let jsonData = JSON.parse(xhttp.responseText);
	console.log(jsonData[0].userId, id, title, completed)
}