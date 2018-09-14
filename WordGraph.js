
class WordGraph {

    wordList = [];

    setWordList(wordList) {
        this.wordList = wordList;
    }

    /**
     * Gets all the words that can be reached from a given word by changing one letter.
     * @param word The starting word.
     * @return A List of all words that can be reached from the starting word
     */
    getNextWords(word) {
        let nextWords = [];

        wordList.forEach(currWord => {
            if (this.getWordDiff(word, currWord) == 1) {
                nextWords.push(currWord);
            }
        });

        console.log("next words of " + word + ' are ' + nextWords);
        return nextWords;
    }

    /**
     * Calculates the number of letter differences between two words.
     * @param word1 The first word
     * @param word2 The second word
     * @return The number of differing letters in the two words.
     */
    getWordDiff(word1, word2) {
        let diff = 0;
        for (let n = 0; n < word1.length; n++) {
            if (word1.charAt(n) != word2.charAt(n)) {
                diff++;
            }
        }

        //console.log("words '" + word1 + " and '" + word2 + "' have " + diff + " char differences");
        return diff;
    }

}
module.exports = WordGraph;