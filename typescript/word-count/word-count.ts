export function count(words: String) {

  const wordsDict: { [key: string]: number } = {}

  words.toLowerCase().split(' ').forEach((word) => {
    if (!(word in wordsDict)) {
      wordsDict[word] = 1;
    } else {
      wordsDict[word] += 1;
    }
  });
  console.log(wordsDict)
  const wordsMap = new Map(Object.entries(wordsDict))
  return wordsMap
}
