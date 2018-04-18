document.addEventListener('DOMContentLoaded', ()=> {

// document.getElementsByClassName('colors hat')[0].addEventListener('change', (event)=> {console.warn(event.target.value);})

let selectedCombo = {
  hatColor: 'none',
  shirtColor: 'none',
  beltColor: 'none',
  pantsColor: 'none',
  shoesColor: 'none'
}

window.selectedCombo = selectedCombo

const hat = document.getElementsByClassName('colors hatColor')[0]
const shirt = document.getElementsByClassName('colors shirtColor')[0]
const belt = document.getElementsByClassName('colors beltColor')[0]
const pants = document.getElementsByClassName('colors pantsColor')[0]
const shoes = document.getElementsByClassName('colors shoesColor')[0]

const selectionArr = [hat, shirt, belt, pants, shoes]

const changeProp = function(apparel){
// Dynamically change value of class' this.color to select prop value
// Also change asset color on page
  apparel.addEventListener('change',
  (event)=> {
    selectedCombo[event.target.classList[1]] = event.target.value;
    console.warn(selectedCombo);
  })
}

selectionArr.map(apparel => changeProp(apparel))

const apparelCombo = function(combo){
// Grab all values and delete all "selected: null"
  Object.keys(selectedCombo).map(apparel => {
    if (selectedCombo[apparel] === 'none') {
      delete selectedCombo[apparel]
    }
  })
  return selectedCombo
}

window.apparelCombo = apparelCombo;

const ensembleBreak = function(apparel_combo){
// Check for belt, watch, shoes. If any selected, make sure same color all
// True means rule is broken
  return true
}

const tooManyNonMono = function(apparel_combo){
  // Ensure max non-monochrome <= 2
  // True means rule is broken
  return true
}

const onesies = function(apparel_combo){
  // Ensure no onesies
  // True means rule is broken
  return true
}

const throwResponse = function(apparelCombo){
  let errors = []
  if (ensembleBreak(apparelCombo)) {
    errors.push('Ensemble Pieces(belt, shoes, watch) must be the same color')
  }
  if (tooManyNonMono(apparelCombo)) {
    errors.push('Too many non-monochromatic colors')
  }
  if (onsies(apparelCombo)) {
    errors.push('Must have at least one different color(no onesies!)')
  }

  return errors
}

var modal = document.getElementById('style-modal');
var btn = document.getElementById("style-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

})
