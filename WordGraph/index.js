const Queue = require('./Queue.js');

class WordGraph {

    constructor(wordList) {
        this.wordList = wordList || [];
    }

    /**
   * Constructs a path from a start word to an end word, using predecessor data from a breadth-first search.
   * @param previous A Map from words to their predecessor in the shortest path
   * @param fromWord The starting word in the path.
   * @param toWord The ending word in the path.
   * @return a List of words in the path given the precedessor data, or null if no path can be constructed.
   */
  getPath(previous, fromWord, toWord) {
    if (!previous[toWord]) {
      return null;
    }

    let path = [];
    let  word = toWord;
    while (word !== fromWord) {
      path.push(word);
      word = previous[word];
    }

    return path.reverse();
  }

    /**
     * Finds the shortest path between two words using a breadth-first search of the graph.
     * and building the graph on the fly.
     *
     * @param fromWord The starting word
     * @param toWord The ending word
     * @return a List of words in the shortest path, or null if no path could be found
     */
    findShortestPath(fromWord, toWord) {
        //HashMap
        let previous = {};

        let queue = new Queue();
        queue.addToTail(fromWord);

        let word = null;
        while (!queue.isEmpty()) {
            word = queue.removeTail();

            if (word !== toWord) {
                
                const nextWords = this.getNextWords(word);

                nextWords.forEach(nextWord => {
                    if (!previous[nextWord]) {
                        previous[nextWord] = word;
                        queue.addToTail(nextWord);
                    }
                });
            }
        }

        return this.getPath(previous, fromWord, toWord);
    }

    /**
     * Gets all the words that can be reached from a given word by changing one letter.
     * @param word The starting word.
     * @return A List of all words that can be reached from the starting word
     */
    getNextWords(word) {
        let nextWords = [];

        this.wordList.forEach(currWord => {
            if (this.getWordDiff(word, currWord) == 1) {
                nextWords.push(currWord);
            }
        });

        //console.log("next words of " + word + ' are ' + nextWords);
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
