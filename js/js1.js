var flag = true;
function show_menu(){
	var menu1 = document.getElementById("menu1"); 
	if (flag){
		menu1.style.display = "block";
		flag = !flag;
	}
	else{
		menu1.style.display = "none";
		flag = !flag;
	}
}

function show_menu1(){
	var menu1 = document.getElementById("menu1"); 
	flag = true;
	menu1.style.display = "none";
}