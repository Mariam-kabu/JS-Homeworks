const mix = (...functions) => {
    for (f of functions)
        if (typeof f !== 'function') throw new TypeError ('Every param Should be a function');
    const answer = functions.reduce((ans, callback) => callback(ans), undefined);
    return answer;
}
const output = mix(() => {
    return 0;
}, (prev) => {
    return prev + 8;
}, (prev) => {
    return prev * 5;
});

console.log(output);