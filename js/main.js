let toggleNavStatus = false;

let toggleNav = function(){
	let getNav = document.querySelector(".nav");

	if (toggleNavStatus === false){
		getNav.style.overflow = "visible";

		toggleNavStatus = true; 
		} 

	else if (toggleNavStatus === true){
		getNav.style.overflow = "hidden";

		toggleNavStatus = false;
	}
}

function  addClass() {
	let element = document.getElementsByClassName("navigation")
	for (let i = 0; i < element.length; i++) {
		element[i].addEventListener("click", function() {
			let current = document.getElementsByClassName("active")
			if (current.length == 1) {
				current[0].className = current[0].className.replace(" active", "")
			}
			this.className += " active"
		})
	}
}

addClass()

