let a = 0
let b = 0
let h = 0
let result = (a + b) / 2 * h

document.getElementById('button').addEventListener('click', area)

function area () {
  a = document.getElementById('a').value
 a = parseInt(a)
  b = document.getElementById('b').value
 b = parseInt(b)
  h = document.getElementById('h').value
 h = parseInt(h)
  result = (a + b)/2 *h

alert(result)
}
