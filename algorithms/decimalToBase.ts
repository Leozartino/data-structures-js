import { Stack } from './index';

function decimalToBase(decNumber: number, base: number) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    Stack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!Stack.isEmpty()) {
    baseString += digits[Stack.pop()];
  }

  return baseString;
}

export default decimalToBase
