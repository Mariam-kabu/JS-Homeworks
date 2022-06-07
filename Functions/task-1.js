function getDivisors(num) {
    if (typeof num !== 'number') {
        throw new Error ('parameter type is not a Number');
    } else if (num === 0) {
        throw new Error ('parameter can\'t be a 0')
    } else {
        let arr = [1];
        for (let i=2; i<=num; i++) {
            if (num%i===0) {
                arr.push(i);
            }
        }
        console.log(arr);
    }
}

try {
    getDivisors(12);
    getDivisors("Content");
    getDivisors(0);
}catch(err) {
    console.log(err.name + ': ' + err.message);
}