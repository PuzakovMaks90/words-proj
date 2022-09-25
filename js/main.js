/*
let text = 'Сегодня пион целый день, ромашка, звучат, пион тревоги ромашка';

console.log(text);

while (text.includes('ромашка', 'пион')) {
    text = text.replace ('ромашка', '*******');
    text = text.replace ('пион', '****');
}

console.log(text);
*/


/*
let text = 'Сегодня пион целый день, ромашка, звучат, пион тревоги ромашка';
console.log(text);

let newText = 'Сегодня пион целый день, ромашка, звучат, пион тревоги ромашка';
console.log(badWordFilter(newText));

function badWordFilter() {
    while (newText.includes ('ромашка', 'пион')) {
        newText = newText.replace('ромашка', '*******');
        newText = newText.replace('пион', '****');
    }
    
    return newText;
}
*/


let text = 'Сегодня пион целый день, ромашка, звучат, пион тревоги ромашка';
console.log(text);

let newText = 'Сегодня пион целый день, ромашка, звучат, пион тревоги ромашка';
console.log(badWordFilter(newText));

function badWordFilter(badWord1, badWord2) {
    if (badWord1.includes('ромашка')) {
        while (newText.includes('ромашка')) {
            newText = newText.replace('ромашка', '*******');
        }
    } else if (badWord2.includes('пион')) {
        while (newText.include('пион')) {
            newText = newText.replace('пион', '****');
        }
    }

    return newText;
}