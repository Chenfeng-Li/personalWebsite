window.onscroll=keepheader;

function keepheader(){
	var header=document.getElementById('header');
	var sticky = header.offsetTop;
	if(window.pageYOffset>sticky+10){
		header.classList.add("sticky");
		document.getElementById('h1').style.display='none';
	}else{
		header.classList.remove("sticky");
		document.getElementById('h1').style.display='block';
	}
}


var countNavclick=0
function clicknav(){
	countNavclick++;
	if(countNavclick%2==1){
		document.getElementById('navList').style.display="block";
		document.getElementById('mobileNavBar').style.cssText = "display:block;background:#02c4b1;box-shadow: 5px 5px 5px #aaaaaa;";
	}else{
		document.getElementById('navList').style.display="none";
		document.getElementById('mobileNavBar').style.cssText = "display:none;background:none;box-shadow: none";
	}
}

function consistentSize(){
	if (window.innerWidth>=700){
		document.getElementById('navList').style.display="block";
		document.getElementById('mobileNavBar').style.cssText = "background:none;box-shadow: none";
	}
	else{
		document.getElementById('navList').style.display="none";
		document.getElementById('mobileNavBar').style.cssText = "background:none;box-shadow: none";
	}
}

window.onresize = consistentSize;
