
const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const rot = 5;
const aCode = 65;
const zCode = aCode + alph.length
// var en = document.getElementById("encrypt");
// var de = document.getElementById("decrypt");
var output = document.getElementById("out");

function ed(tf) {
  var input = document.getElementById("cipher").value;
  var inp = input
  console.log("Encrypting")
  lets = changeKeys(tf)
  var txt = ""
  for (i = 0; i < inp.length; i++) {
    txt += lets[inp.at(i)]
  }
  output.innerHTML = txt
}

function changeKeys(tf) {
  const keychanges = {}
  var convert = ""
  for (i = 0; i < alph.length; i++) {
    var letter = alph.at(i)
    try {
      if (tf) {
        convert = alph.at(i - rot)
      } else {
        convert = alph.at(i + rot)
      }
    } catch {
      if (tf) {
        convert = alph.at(i + 26 - rot)
      } else {
        convert = alph.at(i - 26 + rot)
      }
    } finally {
      if (convert == undefined) {
        throw("Result is undefined")
      }
      keychanges[letter] = convert
    }
  }
  return keychanges
}
