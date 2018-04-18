document.addEventListener('DOMContentLoaded', ()=> {

document.getElementsByClassName('colors hat-prop')[0].addEventListener('change', (event)=> {console.warn(event);})

console.log(document.getElementsByClassName('colors hat-prop'))

class Hat {
  constructor(){
    this.color = null;
    this.selected = null;
  }


}

const changeProp = function(apparel){
// Dynamically change value of class' this.color to select prop value
}

const apparelCombo = function(){
// Grab all values and delete all "selected: null"
}

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
console.log(modal);

var btn = document.getElementById("style-button");
console.log(btn);

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
