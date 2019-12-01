var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 6000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	document.getElementById("bolinha1").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha2").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha3").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha4").style.backgroundColor =  "#ffffff";
	document.getElementsByClassName("bolinha")[slideItem ].style.backgroundColor = "#ff1200";
	
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;	
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	document.getElementById("bolinha1").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha2").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha3").style.backgroundColor =  "#ffffff";
	document.getElementById("bolinha4").style.backgroundColor =  "#ffffff";
	document.getElementsByClassName("bolinha")[slideItem ].style.backgroundColor = "#ff1200";
	
	
	
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}