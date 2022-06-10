function rotate(array, number, string) {
    if (!Array.isArray(array) || typeof array === 'undefined') {
        throw new Error ('The first parameter is required and it has to be only an array');
    } else if (typeof number !== 'number' || typeof number === 'undefined') {
        throw new Error ('The second parameter is required and it has to be a number');
    } else if (typeof string === 'undefined' || string === 'right') {
        for (let i=0; i<number; i++) {
            let last = array[array.length-1];
            for (let j=array.length-1; j>=0; j--) {
                array[j] = array[j-1];
            }
            array[0]= last;
        }
    } else if (string === 'left') {
        for (i=0; i<number; i++) {
            let first = array[0];
            for (j=0; j<array.length-1; j++) {
                array[j] = array[j+1];
            }
            array[array.length-1] = first;
        }
    } else {
        throw new Error ('The third parameter isn\'t valid')
    }
    console.log(array);
}

try {
    const arr = [1,2,3];
    rotate(arr, 1, 'left');
    rotate(arr, 1);
    rotate(arr, 2);
} catch(err) {
    console.log(err.name + ': ' + err.message);
}