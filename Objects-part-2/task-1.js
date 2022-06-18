Object.defineProperty(Object.prototype, "mergeDeepRight", {
    value: (source) => {      
        const keys = Object.getOwnPropertyNames(source);
        for (let key of keys) {
            if (typeof source[key] === "object" && !Array.isArray(source[key]) && this.hasOwnProperty(key)) {
                this[key].mergeDeepRight(source[key]);
            } else if (Array.isArray(source[key]) && Array.isArray(this.hasOwnProperty(key))) {
                this[key] = this[key].concat(source[key]);
            } else {
                this[key] = source[key];
            }
        }
    },
    enumerable: false,
});

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});

console.log(data);