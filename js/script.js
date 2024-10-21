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


var countNavclick=0;
function clicknav(){
	countNavclick++;
	if(countNavclick%2==1){
		document.getElementById('navList').style.display="block";
		document.getElementById('mobileNavBar').style.cssText = "display:block;background:#005f96;box-shadow: 1vw 1vw 1vw #aaaaaa;";
	}else{
		document.getElementById('navList').style.display="none";
		document.getElementById('mobileNavBar').style.cssText = "display:none;background:none;box-shadow: none";
	}
}


function view(id,cls=false){
	if(!cls){
		document.getElementById(id+'detail').style.display='block';
		document.getElementById('hide'+id).style.display='inline';
		document.getElementById('show'+id).style.display='none';
	}else{
		document.getElementById('hide_cert').style.display='block';
		document.getElementById('show_cert').style.display='none';
		var toView = document.getElementsByClassName(id);
		for(var i=0; i<toView.length;i++){
			toView[i].style.display="table-row";
		}
		toView[toView.length - 1].classList.add("last_shown_tr");
		document.getElementById('last_shown').classList.remove("last_shown_tr");
	}
}
			
function hide(id, cls=false){
	if(cls==false){
		document.getElementById(id+'detail').style.display='none';
		document.getElementById('hide'+id).style.display='none';
		document.getElementById('show'+id).style.display='inline';
	}else{
		document.getElementById('hide_cert').style.display='none';
		document.getElementById('show_cert').style.display='block';
		var toHide = document.getElementsByClassName(id);
		for(var i=0; i<toHide.length;i++){
			toHide[i].style.display="none";
		}
		toHide[toHide.length - 1].classList.remove("last_shown_tr");
		document.getElementById('last_shown').classList.add("last_shown_tr");
		
	}
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


var isoriginal=true;
function changeresume(){
	if(isoriginal){
		document.getElementById("resumehref").href='file/ChenfengResume.pdf';
		document.getElementById("original").style.display='none';
		document.getElementById("alternative").style.display='block';
		document.getElementById("buttontext").innerHTML="View the original version resume by clicking <button onclick='changeresume()'>this button</button>.";
	}
	else{
		document.getElementById("resumehref").href='file/ChenfengLiResume.pdf';
		document.getElementById("original").style.display='block';
		document.getElementById("alternative").style.display='none';
		document.getElementById("buttontext").innerHTML="View the alternative version resume by clicking <button onclick='changeresume()'>this button</button>.";
	}
	isoriginal = !isoriginal
}


window.onresize = consistentSize;

