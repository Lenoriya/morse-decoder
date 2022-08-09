const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let decString = '';
    let i = 0;
    while (i < expr.length) {
        let decSymbol ='';
            for (let j = 0; j < 10; j++) {
                if (expr[i] == '0') i++;
                else if (expr[i] == '1') {
                    if (expr[i+1] == '0') decSymbol += '.';
                    else if (expr[i+1] == '1') decSymbol += '-';
                    i+=2;
                }
                else if (expr[i] == '*') {
                    decString += ' ';
                    i += 9;
                }
            }
            if (decSymbol !== '') decString += MORSE_TABLE.[decSymbol];
    }

}

module.exports = {
    decode
}