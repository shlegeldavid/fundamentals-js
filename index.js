export const concatStrings = (firstString, secondString) => (firstString + secondString);

export const isString = (str) => {
  if (typeof str === 'string') {
    return true;
  }
  return false;
};

export const identifySign = (number) => {
  if (number === 0) {
    return 'Ноль';
  } if (number > 0) {
    return 'Положительное число';
  }
  return 'Отрицательное число';
};

export const reverseWords = (str) => str.split(' ').reverse().join(' ');

export function wordsCount(str) {
  return str.split(' ').length;
}
