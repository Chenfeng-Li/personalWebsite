window.onscroll=keepheader;

function keepheader(){
	var header=document.getElementById('header');
	var sticky = header.offsetTop;
	if(window.pageYOffset>sticky+10){
		header.classList.add("sticky");

	}else{
		header.classList.remove("sticky");

	}

	if(countNavclick%2==1){
		countNavclick++;
		document.getElementById('navList').style.display="none";
		document.getElementById('mobileNavBar').style.cssText = "display:none;background:none;box-shadow: none";
	}
}


var countNavclick=0
function clicknav(){
	countNavclick++;
	if(countNavclick%2==1){
		document.getElementById('navList').style.display="block";
		document.getElementById('mobileNavBar').style.cssText = "display:block;background:#02c4b1;box-shadow: 1vw 1vw 1vw #aaaaaa;";
	}else{
		document.getElementById('navList').style.display="none";
		document.getElementById('mobileNavBar').style.cssText = "display:none;background:none;box-shadow: none";
	}
}


function view(id){
	document.getElementById(id+'detail').style.display='block';
	document.getElementById('hide'+id).style.display='inline';
	document.getElementById('show'+id).style.display='none';
}
function hide(id){
	document.getElementById(id+'detail').style.display='none';
	document.getElementById('hide'+id).style.display='none';
	document.getElementById('show'+id).style.display='inline';
}

function consistentSize(){
	if (window.innerWidth>=700){
		document.getElementById('navList').style.display="flex";
	}
	else{
		document.getElementById('navList').style.display="none";
	}
	document.getElementById('mobileNavBar').style.cssText = "background:none;box-shadow: none";
    if(countNavclick%2==1){
    	countNavclick++;
    }
}

window.onresize = consistentSize;

