//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  let lowerCasePhrase = phrase.toLowerCase();
  let punctuationlessPhrase = lowerCasePhrase.replace(/[.,\/#!$%\^&\*;:{}@=\-_`"~()]/g,"");
  let whiteSpaceHandle = punctuationlessPhrase.replace(/\s{2,}/g," ");
  let wordsList = whiteSpaceHandle.split(' ');
  let wordsDict = {};

  wordsList.forEach(word => wordsDict[word]=0);

  for (const [k,v] of Object.entries(wordsDict)){
    for (let i=0;i<wordsList.length;i++) {
      if (wordsList[i]==k){
        wordsDict[k]= wordsDict[k]+1;
      }
    }
  }
  console.log(wordsDict);

  return wordsDict;
};
//throw new Error('Remove this statement and implement this function');
// console.log(countWords("this is a test of the computer broadcasting system another test for many tests of computers"));