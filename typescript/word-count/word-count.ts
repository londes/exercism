export function count(words: String): Map<string, number> {

  const wordsMap = new Map()

  words.toLowerCase().trim().split(/\s+/).forEach((word) => {
    wordsMap.set(word, 1 + (wordsMap.get(word) || 0))
  });
  return wordsMap
}
