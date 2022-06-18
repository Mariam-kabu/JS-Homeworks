const mix = (...functions) => functions.reduce((ans, callback) => callback(ans), undefined);

const answer = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
})

console.log(answer);