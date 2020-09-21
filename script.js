
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function myProgress(){
	document.getElementById("bar1").style.maxWidth = "75%";
	document.getElementById("bar1").style.animation = "progress 1.5s ease-in-out forwards ";
	document.getElementById("bar2").style.maxWidth = "80%";
	document.getElementById("bar2").style.animation = "progress 1.5s ease-in-out forwards ";
	document.getElementById("bar3").style.maxWidth = "75%";
    document.getElementById("bar3").style.animation = "progress 1.5s ease-in-out forwards ";	
    document.getElementById("bar4").style.maxWidth = "70%";
    document.getElementById("bar4").style.animation = "progress 1.5s ease-in-out forwards ";
    document.getElementById("bar5").style.maxWidth = "65%";
    document.getElementById("bar5").style.animation = "progress 1.5s ease-in-out forwards ";
    document.getElementById("bar6").style.maxWidth = "60%";
	document.getElementById("bar6").style.animation = "progress 1.5s ease-in-out forwards ";
}

