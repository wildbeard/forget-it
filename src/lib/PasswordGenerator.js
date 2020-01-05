/* eslint-disable no-console */
const characters = {
    letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

/**
 * Generates a randon number between 0 - max.
 * Uses the Crypto object if available or defaults
 * to Math.Random.
 * 
 * @param {int} max The biggest random number
 * 
 * @returns {int}
 */
const rand = function(max) {
    const rnJesus = window.crypto || window.msCrypto;
    let number = 0;
    if ( rnJesus !== undefined ) {
        /*
            See https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
            for more info.
        */
        number = rnJesus.getRandomValues(new Uint32Array(1))[0] / 4294967296;
    } else {
        number = Math.random();
    }
    return Math.floor(number * max);
}

/**
 * Combines and returns available charactersets
 * if selected.
 * 
 * @param {Object} options
 * 
 * @returns {string}
 */
const buildAvailable = function(options) {

    let available = '';

    for ( const prop in options ) {
        const selected = options[prop];
        if ( selected ) {
            available += characters[prop];
        }
    }

    // Shuffle for "extra randomness"
    available = available.split('')
        .sort(function() {
            return rand(available.length) - rand(available.length);
        })
        .join('');

    return available;
}

/**
 * Generates a password given a length and set of options.
 * 
 * @param {int} length Length of the password
 * @param {Object} options Which charactersets to use
 * 
 * @returns {string}
 */
const generatePassword = function(length = 16, options) {

    const available = buildAvailable(options);
    let password = '';

    for ( let i = 0; i < length; i++ ) {
        const randVal = rand(available.length);
        let newChar = available.charAt(randVal);
        if ( password[i - 1] === newChar ) {
           newChar = available.charAt(rand(available.length)) 
        }
        password += newChar;
    }

    return password;

}

export { generatePassword };
