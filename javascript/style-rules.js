export const monochrome = ['black', 'white', 'grey'];
export const chromatic = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown'];

export const ensembleBreak = function(apparelCombo){
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

export const tooManyNonMono = function(apparelCombo){
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

export const onesies = function(apparelCombo){
  // Ensure no onesies
  // True means rule is broken
  let uniqColors = colorsArr(apparelCombo)

  if (uniqColors.length === 1) {
    return true
  }

  return false
}

export const colorsArr = function(apparelCombo){
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

export const noNudity = function(apparelCombo){

  const wornObjects = Object.keys(apparelCombo)
  if (!wornObjects.includes('shirtColor') || !wornObjects.includes('pantsColor')) {
    return true
  }
  return false
}
