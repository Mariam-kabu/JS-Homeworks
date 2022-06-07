function f (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError ('parameter type should be an array');
    }else if (arr.length === 0) {
        throw new Error ('parameter can\'t be an empty');
    }else if (!elementCheck(arr)){
        throw new TypeError ('parameter type should be array of numbers');
    }else {
        for (i=0; i<arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
function elementCheck (x) {
    let num = true;
    for (let i=0; i<x.length; i++) {
        if (typeof x[i] !== 'number') 
            num = false;
    }
    return num;
}
try {
    f([1, 2, 3]);
    f(1, 2, 3);
    f("Content"); 
    f([]);
    f(["🧛🏼", "👨🏽‍🔧",'5', "dogs"]);
} catch (err) {
    console.log(err.name + ': ' + err.message);
}