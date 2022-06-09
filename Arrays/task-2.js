function reverse (arr) {
    if (typeof arr === 'undefined' || !Array.isArray(arr)) {
        throw new TypeError ('Parameter required and has to be only array');
    } else if (arr.length === 0) {
        throw new Error ('The array shouldn\'t be empty')
    } else {
        for (let i=arr.length-1; i>=0; i--){
            console.log(arr[i]);
        }
    }
}

try {
    const arr = [3,2,1];
    reverse(arr);
} catch (err) {
    console.log(err.name + ': ' + err.message);
}