

const languageDiv = document.querySelector('.languageDiv');
const link = document.querySelectorAll('.button');
// const servicii = document.querySelector('.servicii');
const preturi = document.querySelector('.preturi');
const echipa = document.querySelector('.echipa');
const contact = document.querySelector('.contact');
const evenimente = document.querySelector('.evenimente');

link.forEach(e => {
e.addEventListener('click', () => {
	languageDiv.querySelector('.active').classList.remove('active');
	e.classList.add('active');

	const attr = e.getAttribute('language');

	// servicii.textContent = data[attr].servicii;
	evenimente.textContent = data[attr].evenimente;
	preturi.textContent = data[attr].preturi;
	echipa.textContent = data[attr].echipa;
	contact.textContent = data[attr].contact;
});
});




let data = {
	"romanian": 
	{
	// "servicii": "Servicii",
	"evenimente": "Evenimente",
    "preturi": "Preturi",
    "echipa": "Echipa",
    "contact": "Contact"
	},





	"hungarian": 
	{
    // "servicii": "Szolgáltatások",
	"evenimente": "Események",
    "preturi": "Árak",
    "echipa": "Csapat",
    "contact": "Kapcsolatba lépni"
    },
    
	
}






//navbar appear on scroll up

// let lastScrollTop; // This Varibale will store the top position

// navbar = document.querySelector('.nav-div'); // Get The NavBar

// window.addEventListener('scroll',function(){
//  //on every scroll this funtion will be called
  
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   //This line will get the location on scroll
  
//   if(scrollTop > lastScrollTop){ //if it will be greater than the previous
//     navbar.style.top='-80px';
//     //set the value to the negetive of height of navbar 
//   }
  
//   else{
//     navbar.style.top='0';
//   }
  
//   lastScrollTop = scrollTop; //New Position Stored
// });




//photo gallery

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column-gallery");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-gallery");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-gallery");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-gallery");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-gallery");
    current[0].className = current[0].className.replace(" active-gallery", "");
    this.className += " active-gallery";
  });
}