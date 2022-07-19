export function count(words: String) {

  interface WordsDict {
    [key: string]: number;
  }

  words.split(' ').forEach((word) => {
    console.log(word)
    if (word in WordsDict) {
      WordsDict[word] = 1;
    } else {
      WordsDict[word] += 1;
    }
  });
  return WordsDict
}
