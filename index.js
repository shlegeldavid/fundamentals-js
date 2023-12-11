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

export const reverseWords = (str) => str.split(' ').reverse().join(' ');
   
export const wordsCount = (str) => {
    let result = 0;
    for (let i)
}


