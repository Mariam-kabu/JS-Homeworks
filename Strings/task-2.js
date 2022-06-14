function reverseCase(sentence) {
    if (typeof sentence !== "string") throw new TypeError;
    let modified = sentence.replace(/([a-z]+)|([A-Z]+)/g, function(match, char) {
        return char ? match.toUpperCase() : match.toLowerCase();
    });
    console.log(modified);
}

reverseCase('Hello theRe');
reverseCase('BIG LETTERS');
reverseCase('');