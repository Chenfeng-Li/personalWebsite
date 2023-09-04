


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

function resizePDF(object){
	console.log(object.contentWindow.document.documentElement.scrollHeight);
	object.style.height=object.contentWindow.document.documentElement.scrollHeight + 'px';
}
