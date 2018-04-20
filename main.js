import {
  ensembleBreak,
  tooManyNonMono,
  onesies,
  monochrome,
  chromatic,
  colorsArr,
  noNudity
} from './javascript/style-rules'

document.addEventListener('DOMContentLoaded', ()=> {


let selectedCombo = {
  hatColor: 'none',
  outerColor: 'none',
  shirtColor: 'none',
  beltColor: 'none',
  pantsColor: 'none',
  shoesColor: 'none',
  watchColor: 'none',
}


// window.selectedCombo = selectedCombo

const hat = document.getElementsByClassName('colors hatColor')[0]
const outer = document.getElementsByClassName('colors outerColor')[0]
const shirt = document.getElementsByClassName('colors shirtColor')[0]
const belt = document.getElementsByClassName('colors beltColor')[0]
const pants = document.getElementsByClassName('colors pantsColor')[0]
const shoes = document.getElementsByClassName('colors shoesColor')[0]
const watch = document.getElementsByClassName('colors watchColor')[0]
// Watch + Outer to be implemented

const selectionArr = [hat, outer, shirt, belt, pants, shoes, watch]

const changeProp = function(apparel){
// Dynamically change value of class' this.color to select prop value
// Also change asset color on page
  apparel.addEventListener('change',
  (event)=> {
    let selectedColor = event.target.value
    selectedCombo[event.target.classList[1]] = selectedColor
    let visualAsset = document.getElementById(event.target.classList[1])
    visualAsset.classList = selectedColor
  })
}

selectionArr.map(apparel => {
  changeProp(apparel)})

const getApparelCombo = function(combo){
// Grab all values and delete all "selected: null"
  Object.keys(selectedCombo).map(apparel => {
    if (selectedCombo[apparel] === 'none') {
      delete selectedCombo[apparel]
    }
  })
  return selectedCombo
}

// window.getApparelCombo = getApparelCombo;

// window.ensembleBreak = ensembleBreak

// window.colorsArr = colorsArr

// window.tooManyNonMono = tooManyNonMono

// window.onesies = onesies

const throwResponse = function(apparelCombo){
  let errors = []
  let answerNode = document.getElementById('answer-list')

  if (noNudity(apparelCombo) || Object.values(apparelCombo).length === 0) {
    errors.push('Unfortunately, al naturale is not in style. Please put on clothes (both pants and shirt)!')
  } else {
    if (ensembleBreak(apparelCombo)) {
      errors.push('Ensemble Pieces(hat, belt, shoes, watch) must be the same color')
    }
    if (tooManyNonMono(apparelCombo)) {
      errors.push('Too many chromatic colors. Try replacing one of them with a monochromatic one.')
    }
    if (onesies(apparelCombo)) {
      errors.push('Must have at least one different color(no onesies!)')
    }
    if (!(Object.keys(apparelCombo).includes('shoesColor'))) {
      errors.push('No shoes, no socks, no service!')
    }
  }

  if (errors.length === 0) {
    answerNode.innerHTML = "";
    let soleAnswer = document.createElement("li")
    let displayAnswer = document.createTextNode('Congrats! You\'re a natural dresser. Looking snazzy!')
    soleAnswer.appendChild(displayAnswer)
    answerNode.appendChild(soleAnswer)
  } else {
    answerNode.innerHTML = "";
    errors.map(errorMsg => {
    let errorLi = document.createElement('li')
    let emptyBr = document.createElement('br')
    let displayError = document.createTextNode(errorMsg)
    errorLi.appendChild(displayError)
    answerNode.appendChild(errorLi)
    answerNode.appendChild(emptyBr)
    })
  }
}

// window.throwResponse = throwResponse

// Modal for style guide
var infoModal = document.getElementById('style-modal');
var infoBtn = document.getElementById("style-button");
var infoSpan = document.getElementsByClassName("close")[0];

infoBtn.onclick = function() {
    infoModal.style.display = "block";
}

infoSpan.onclick = function() {
    infoModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
    if (event.target == checkModal) {
        checkModal.style.display = "none";
    }
}

// Modal for answer/style check
var checkModal = document.getElementById('answer-modal');
var checkBtn = document.getElementById("check-submit");
var checkSpan = document.getElementById("close-answers");

checkBtn.onclick = function() {
    checkModal.style.display = "block";
    let finalSelected = getApparelCombo(selectedCombo);
    throwResponse(finalSelected)
}

checkSpan.onclick = function() {
    checkModal.style.display = "none";
}



})
