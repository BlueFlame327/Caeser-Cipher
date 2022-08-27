
const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const rot = 5;
const aCode = 65;
// var en = document.getElementById("encrypt");
// var de = document.getElementById("decrypt");
var output = document.getElementById("out");

function encrypt() {
  var inp = document.getElementById("cipher").value;
  console.log("Encrypting")
  lets = changeKeysE()
  var txt = ""
  for (i = 0; i < inp.length; i++) {
    txt += lets[inp.at(i)]
  }
  output.innerHTML = txt
}

function decrypt() {
  var inp = document.getElementById("cipher").value;
  console.log("Encrypting")
  lets = changeKeysD()
  var txt = ""
  for (i = 0; i < inp.length; i++) {
    txt += lets[inp.at(i)]
  }
  output.innerHTML = txt
}

function changeKeysE() {
  const keychanges = {}
  var convert = ""
  for (i = 0; i < alph.length; i++) {
    var letter = alph.at(i)
    try {
      convert = alph.at(i - rot)
    } catch {
      convert = alph.at(i + alph.length - rot)
    } finally {
      keychanges[letter] = convert
    }
  }
  return keychanges
}

function changeKeysD() {
  const keychanges = {}
  var convert = ""
  for (i = 0; i < alph.length; i++) {
    var letter = alph.at(i)
    convert = alph.at((i + rot) % alph.length)
    keychanges[letter] = convert
  }
  return keychanges
}
