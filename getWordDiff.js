const word1 = 'cat';
const word2 = 'dog';

/**
 * Calculates the number of letter differences between two words.
 * @param word1 The first word
 * @param word2 The second word
 * @return The number of differing letters in the two words.
 */

let diff = 0;
for (n = 0; n < word1.length; n++) {
    if (word1.charAt(n) != word2.charAt(n)) {
        diff++;
    }
}

console.log("words '" + word1 + " and '" + word2 + "' have " + diff + " char differences");
return diff;