var numberOfLegendButtons = document.querySelectorAll('.legend').length

for (var i = 0; i < numberOfLegendButtons; i++) {
  document.querySelectorAll('.legend')[i].addEventListener('click', function () {
    var buttons = this.classList[0];
    buttonAnimation(buttons);
    playSound(buttons);
  })
}

document.addEventListener('keydown', function (e) {
  playSound(e.key)
  console.log(e)
})

function playSound(key) {
  buttonAnimation(key)
  console.log(key)
  switch (key) {
    case 'm':
      var ml = new Audio('music/ml.mp3')
      ml.play()
      break
    case 'n':
      var nana = new Audio('music/nana.mp3')
      nana.play()
      break
    case 'o':
      var odette = new Audio('music/odette.mp3')
      odette.play()
      break
    case 'l':
      var lancelot = new Audio('music/lancelot.mp3')
      lancelot.play()
      break
    case 'e':
      var eudora = new Audio('music/eudora.mp3')
      eudora.play()
      break
    case 'v':
      var valir = new Audio('music/valir.mp3')
      valir.play()
      break
    case 'y':
      var lesley = new Audio('music/lesley.mp3')
      lesley.play()
      break
    case 'a':
      var miya = new Audio('music/miya.mp3')
      miya.play()
      break
    case 'g':
      var gusion = new Audio('music/gusion.mp3')
      gusion.play()
      break
    default:
      console.log(buttons)
      break
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey)
  activeButton.classList.add('pressed')
  setTimeout(function () {
    activeButton.classList.remove('pressed')
  }, 1000)
}
