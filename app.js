

const languageDiv = document.querySelector('.languageDiv');
const link = document.querySelectorAll('.button');
// const servicii = document.querySelector('.servicii');
const preturi = document.querySelector('.preturi');
const echipa = document.querySelector('.echipa');
const contact = document.querySelector('.contact');
const evenimente = document.querySelector('.evenimente');
const evenimente2 = document.querySelector('.evenimente2');
const evenimente_context = document.querySelector('.evenimente-context');
const galerie = document.querySelector('.galerie')
const arata_toate = document.querySelector('.arata-toate')
const baza_tenis = document.querySelector('.baza-tenis')
const turnee = document.querySelector('.turnee')
const tabere = document.querySelector('.tabere')
const citat = document.querySelector('.citat')
const preturi_informative = document.querySelector('.preturi-informative')
const inchiriere_teren = document.querySelector('.inchiriere-teren')
const fara_antrenor = document.querySelector('.fara-antrenor')
const ora1 = document.querySelector('.ora1')
const ora2 = document.querySelector('.ora2')
const ora3 = document.querySelector('.ora3')
const ora_individuala = document.querySelector('.ora-individuala')
const cu_antrenor1 = document.querySelector('.cu-antrenor1')
const cu_antrenor2 = document.querySelector('.cu-antrenor2')
const cu_grupa = document.querySelector('.cu-grupa')
const antrenori = document.querySelector('.antrenori')



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
	evenimente2.textContent = data[attr].evenimente2;
  evenimente_context.textContent = data[attr].evenimente_context;
  galerie.textContent = data[attr].galerie;
  arata_toate.textContent = data[attr].arata_toate;
  baza_tenis.textContent = data[attr].baza_tenis;
  turnee.textContent = data[attr].turnee;
  tabere.textContent = data[attr].tabere;
  citat.textContent = data[attr].citat;
  preturi_informative.textContent = data[attr].preturi_informative;
  inchiriere_teren.textContent = data[attr].inchiriere_teren;
  fara_antrenor.textContent = data[attr].fara_antrenor;
  ora1.textContent = data[attr].ora1;
  ora2.textContent = data[attr].ora2;
  ora3.textContent = data[attr].ora3;
  ora_individuala.textContent = data[attr].ora_individuala;
  cu_antrenor1.textContent = data[attr].cu_antrenor1;
  cu_antrenor2.textContent = data[attr].cu_antrenor2;
  cu_grupa.textContent = data[attr].cu_grupa;
  antrenori.textContent = data[attr].antrenori;
});
});




let data = {
	"romanian": 
	{
	// "servicii": "Servicii",
	"evenimente": "Evenimente",
    "preturi": "Preturi",
    "echipa": "Echipa",
    "contact": "Contact",
    "evenimente2" : "Evenimente",
    "evenimente_context" : 'Din pacate nu exista evenimente in aceasta perioada',
    'galerie' : 'Galerie Foto',
    'arata_toate' : 'Arata toate',
    'baza_tenis' : 'Baza de tenis',
    'turnee' : 'Turnee',
    'tabere' : 'Tabere',
    'citat' : 'Nu poti castiga toate meciurile, dar poti incerca !',
    'preturi_informative' : 'Preturi Informative',
    'inchiriere_teren' : 'Inchiriere teren',
    'fara_antrenor' : 'Fara antrenor',
    'ora1' : '/ora',
    'ora2' : '/ora',
    'ora3' : '/ora',
    'ora_individuala' : 'Ora individuala',
    'cu_antrenor1' : 'Cu antrenor',
    'cu_antrenor2' : 'Cu antrenor',
    'cu_grupa' : 'Ora cu grupa',
    'antrenori' : 'Antrenori',
	},





	"hungarian": 
	{
    // "servicii": "Szolgáltatások",
	"evenimente": "Események",
    "preturi": "Árak",
    "echipa": "Csapat",
    "contact": "Kapcsolatba lépni",
    "evenimente2" : "Események",
    "evenimente_context": 'Sajnos ebben az időszakban nincs rendezvény',
    'galerie' : 'Képgaléria',
    'arata_toate' : 'Mutasd az összeset',
    'baza_tenis' : 'Tenisz alap',
    'turnee' : 'Versenyek',
    'tabere' : 'Táborok',
    'citat' : 'Nem lehet minden meccset megnyerni, de próbálkozni igen !',
    'preturi_informative' : 'Tájékoztató árak',
    'inchiriere_teren' : 'Kiadó földterület',
    'fara_antrenor' : 'Nincs edző',
    'ora1' : '/óra',
    'ora2' : '/óra',
    'ora3' : '/óra',
    'ora_individuala' : 'Egyéni idő',
    'cu_antrenor1' : 'Edzővel',
    'cu_antrenor2' : 'Edzővel',
    'cu_grupa' : 'Csoportos idő',
    'antrenori' : 'Edzők',


    

    },
    
	
}



//navbar 
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 




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