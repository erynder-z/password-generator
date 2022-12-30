import randomBytes from 'crypto-random-string';

const LOWERCASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function generateSecurePassword(
  length,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lengthNumber = Number(length);

  if (!isFinite(lengthNumber) || lengthNumber < 0) {
    throw new TypeError(
      'Expected a `length` to be a non-negative finite number'
    );
  }

  let characters = LOWERCASE_ALPHABET;

  if (includeUppercase) {
    characters += UPPERCASE_ALPHABET;
  }
  if (includeNumbers) {
    characters += NUMBERS;
  }
  if (includeSymbols) {
    characters += SYMBOLS;
  }

  return randomBytes({ length: lengthNumber, characters });
}

export default generateSecurePassword;
