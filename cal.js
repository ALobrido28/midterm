let d = document.getElementById('display');

function appendNum(e){
	let n = e.innerHTML;
	d.value += parseInt(n);
}
function optr(e){
	let n1;
	let op = e.innerHTML;

	switch(op){
		case "add":
			n1= d.value;
			break;
		case "subtract":
			n1= d.value;
			break;
		case "multiply":
			n1 = d.value;
			break;
		case "divide":
			n1 = d.value;
			break;
		case "Backspace":
			d.value = 0;
			break;
		case "equals":
			if(op == "+"){
				d.value = x1 + parseInt(d.value);
			} else if(op == "-"){
				d.value = x1 - parseInt(d.value);
			}

	}
}

