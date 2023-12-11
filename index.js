export const concatStrings = (firstString, secondString) => {
    return (firstString + secondString);
}

export const isString = (str) => {
    if (typeof str === 'string') {
        return true;
    } else {
        return false;
    }
}

export const identifySign = (number) => {
    if (number === 0) {
        return 'Ноль';
    } else if (number > 0) {
        return 'Положительное число';
    } else {
        return 'Отрицательное число';
    }
}

export const reverseWords = (str) => {
    let strWordArrays = str.split(' ');
    let reverseWord = [];
    for (let i = (strWordArrays) - 1; i > 0; i--) {
        reverseWord.push(strWordArrays[i]);
    }
    console.log(reverseWord.join(' '));
}

export const wordsCount = (str) => {

}


