// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let MaxSquare = prompt('What number do you want the Square Series for?')
  let count = 1
  let series = 'Series for ' + MaxSquare + ' is: '

  while (count <= MaxSquare ){
    series = series + count * count 
    series = series + ', '
    // alert(count * count)
    count = count + 1
  }
  alert(series)
}