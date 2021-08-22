const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' ',
};

function decode(expr) {
let regex = RegExp('.{' + 10 + '}', 'g')
let splitArray = expr.match(regex)
let morseArray = []
let decodeArray = []
let i = 0
  splitArray.forEach(element => {
    element = element.replace(/00/gi, '')
    element = element.replace(/10/gi, '.')
    element = element.replace(/11/gi, '-')
    element = element.replace('**********', ' ')
	  morseArray[i] = element
	  i++
  })

for (const key in morseArray) {
    decodeArray += MORSE_TABLE[morseArray[key]]
  }

  return decodeArray
}

module.exports = {
  decode
}