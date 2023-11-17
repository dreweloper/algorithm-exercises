//TODO: Devuelve el número total de vocales en la cadena dada.

const vowelCount = (str) => {

    if (typeof str !== 'string') return `${str} is not a valid string.`;

    let count = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {

        const index = vowels.findIndex(vowel => vowel === str.toLowerCase()[i]);

        if (index !== -1) count += 1;

    };

    return count;

};

module.exports = vowelCount;