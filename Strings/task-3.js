function searchWord(sentence, find) {
    if (typeof sentence !== "string" || typeof find !== "string") throw new TypeError;
    let frequency = sentence.split(find).length - 1;
    console.log("'"+find+"'"+" was found "+frequency+" times.");
}

searchWord("The quick brown fox", "fox");
searchWord("aa, bb, cc, dd, aa", "aa");
searchWord("sunshine", "sun");