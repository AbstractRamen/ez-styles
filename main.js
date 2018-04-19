// import ensembleBreak from './javascript/style-rules'

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

let monochrome = ['black', 'white', 'grey'];
let chromatic = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

// window.selectedCombo = selectedCombo

const hat = document.getElementsByClassName('colors hatColor')[0]
const shirt = document.getElementsByClassName('colors shirtColor')[0]
const belt = document.getElementsByClassName('colors beltColor')[0]
const pants = document.getElementsByClassName('colors pantsColor')[0]
const shoes = document.getElementsByClassName('colors shoesColor')[0]
// Watch + Outer to be implemented

const selectionArr = [hat, shirt, belt, pants, shoes]

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

const ensembleBreak = function(apparelCombo){
// Check for belt, watch, shoes. If any selected, make sure same color all
// True means rule is broken

  let ensembleColors = []
  let comboArr = Object.keys(apparelCombo)

  comboArr.map(item => {
    if (item === 'beltColor' || item === 'hatColor' || item === 'shoesColor' || item === 'watchColor') {
      if (apparelCombo[item] !== 'none' && !ensembleColors.includes(apparelCombo[item])) {
        ensembleColors.push(apparelCombo[item])
      }
    }
  })

  if (ensembleColors.length > 1) {
    return true
  }
  return false
}

// window.ensembleBreak = ensembleBreak

const colorsArr = function(apparelCombo){
// Get unique colors
  const colorVals = Object.values(apparelCombo)
  const uniqColors = []

  colorVals.map(color => {
    if (uniqColors.includes(color)) {

    } else {
      uniqColors.push(color)
    }
  })

  return uniqColors
}

// window.colorsArr = colorsArr

const tooManyNonMono = function(apparelCombo){
  // Ensure max non-monochrome <= 2
  // True means rule is broken
  let colorVals = Object.values(apparelCombo)
  let count = 0;
  let dummyArr = []

  colorVals.map(color => {
    if (chromatic.includes(color)) {
      count++
    }
  })

  if (count > 2) {
    return true
  }

  return false
}

// window.tooManyNonMono = tooManyNonMono

const onesies = function(apparelCombo){
  // Ensure no onesies
  // True means rule is broken
  let uniqColors = colorsArr(apparelCombo)

  if (uniqColors.length === 1) {
    return true
  }

  return false
}

// window.onesies = onesies

const noNudity = function(apparelCombo){

  const wornObjects = Object.keys(apparelCombo)
  if (!wornObjects.includes('shirtColor') || !wornObjects.includes('pantsColor')) {
    return true
  }
  return false
}

const throwResponse = function(apparelCombo){
  let errors = []
  let answerNode = document.getElementById('answer-list')

  if (noNudity(apparelCombo) || Object.values(apparelCombo).length === 0) {
    errors.push('Unfortunately, al naturale is not in style. Please put on clothes!')
  } else {
    if (ensembleBreak(apparelCombo)) {
      errors.push('Ensemble Pieces(hat, belt, shoes, watch) must be the same color')
    }
    if (tooManyNonMono(apparelCombo)) {
      errors.push('Too many non-monochromatic colors')
    }
    if (onesies(apparelCombo)) {
      errors.push('Must have at least one different color(no onesies!)')
    }
    // if (!Object.values(apparelCombo).includes('.shoesColor')) {
    //   errors.push('No shoes, no socks, no service!')
    // }
  }

  if (errors.length === 0) {
    errors.push('Congrats! You\'re a natural dresser. Looking snazzy!')
    let soleAnswer = document.createElement("li")
    let displayAnswer = document.createTextNode('hi')
    soleAnswer.appendChild(displayAnswer)
    answerNode.appendChild(soleAnswer)
  } else {
    answerNode.innerHTML = "";
    errors.map(errorMsg => {
    let errorLi = document.createElement('li')
    let displayError = document.createTextNode(errorMsg)
    errorLi.appendChild(displayError)
    answerNode.appendChild(errorLi)
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
var checkSpan = document.getElementsByClassName("close")[1];

checkBtn.onclick = function() {
    checkModal.style.display = "block";
    console.log(selectedCombo);
    let finalSelected = getApparelCombo(selectedCombo);
    throwResponse(finalSelected)
}

checkSpan.onclick = function() {
    checkModal.style.display = "none";
}



})
