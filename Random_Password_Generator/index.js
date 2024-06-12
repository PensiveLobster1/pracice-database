function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols){

    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChar = '!@#$%^&*()_+';

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChar : '';
    allowedChars += includeUppercase ? uppercaseChar : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChar : '';

    if(length <= 0){
        return `The password length must be at least 1`;
    }
    if(allowedChars.length === 0){
        return `At least 1 set of characters needs to be selected.`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated Password: ${password}`);
