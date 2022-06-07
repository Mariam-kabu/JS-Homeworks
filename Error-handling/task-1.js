try {
    const value = 100;
    const nearLimit = 90;
    const limit = 100;
    if (value > nearLimit && value <= limit) {
        throw new Error ('The value is grater then nearlimit');
    }else if (value > limit) {
        throw new Error ('The value is over limit');
    }   
} catch (err) {
    if (err.message === 'The value is over limit') {
        throw err;
    } else {
        console.log(err.message);
    }
}