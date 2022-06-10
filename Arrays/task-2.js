function reverse (arr) {
    if (typeof arr === 'undefined' || !Array.isArray(arr)) {
        throw new TypeError ('Parameter required and has to be only array');
    } else if (arr.length === 0) {
        throw new Error ('The array shouldn\'t be empty')
    } else {
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }
        console.log(arr);
    }
}

try {
    const arr = [3,2,1];
    reverse(arr);
} catch (err) {
    console.log(err.name + ': ' + err.message);
}