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
