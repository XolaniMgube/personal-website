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


// Adding active class for menu links
// let addActive = (event) => {
// 	let element = document.getElementsByClassName("home");

// 	for (let i = 0; i < element.length; i++){
// 		// console.log("this is it" + [i])
// 		element[0].classList.add("active")
		
// 	}

	
// }