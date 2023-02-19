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
};

function decode(expr) {
    let result = ''
    for (let i = 0; i < expr.length / 10; i++) {
        let str = expr.slice(i * 10, (i * 10) + 10);
        if (str === '**********') {
            result += ' '
        } else {
            let letter = ''
            for (let j = 0; j < str.length / 2; j++) {
                let sign = str.slice(j * 2, (j * 2) + 2);
                letter += sign === '10' ? '.' : sign === '11' ? '-' : '';
            }
            result += MORSE_TABLE[letter];
        }
    }
    return result
}

module.exports = {
    decode
}