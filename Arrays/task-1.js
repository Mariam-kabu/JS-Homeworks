function f(array) {
    if (typeof array === 'undefined') {
        throw new TypeError ('Parameter is required');
    } else if (!Array.isArray(array)) {
        throw new TypeError ('Parameter has to be only array');
    } else if (!typeCheck(array)) {
        throw new TypeError ('Every parameter type has to be a number or an array');
    } else {
        let flatArray = [].concat(...array);
        let status = flatArray.every(function(n) { 
            return typeof n === 'number';
        });
        if (!status) f(flatArray);
        else {
            let sum = 0;
            for(let i=0; i<flatArray.length; i++) {
                sum += flatArray[i];
            }
            console.log(sum);
            //return sum;
        }
    }
}

function typeCheck(x) {
    let type = x.every(function(y) {
        return typeof y === 'number' || Array.isArray(y);
    });
    return type;
}

try {
    const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
    const arr2 = [[[[[1,2]]]]];
    const arr3 = [[[[[1,2]]],2],1];
    const arr4 = [[[[[]]]]];
    const arr5 = [[[[[],3]]]];
    f(arr);
    f(arr2);
    f(arr3);
    f(arr4);
    f(arr5);
} catch(err) {
    console.log(err.name + ': ' + err.message);
}