class DB {
    static data = new Map();

    create(param) {
        if (typeof param === 'object' && !Array.isArray(param) && param !== null && Object.keys(param).length === 4) {
            if (!param.hasOwnProperty('name') || typeof param.name !== 'string')
                throw new Error ('name property isn\'t valid');
            else if (!param.hasOwnProperty('age') || typeof param.age !== 'number')
                throw new Error ('age property isn\'t valid');
            else if (!param.hasOwnProperty('country') || typeof param.country !== 'string')
                throw new Error ('country property isn\'t valid');
            else if (!param.hasOwnProperty('salary') || typeof param.salary !== 'number')
                throw new Error ('salary property isn\'t valid');
        } else throw new TypeError ('Invalid param');
        let index = 0;
        let id = person.name.concat('-', person.country, '-') + index;
        index++;
        DB.data.set(id, param);
        return id;
    }

    read(id) {
        if (typeof id !== 'string' || id === undefined) throw new TypeError;
        else if (DB.data.keys(id) === undefined) return null;
        else {
            DB.data.get(id).ID = id;
            return DB.data.get(id);
        };
    }
    readAll(param) {
        if (param !== undefined) throw new Error;
        else {
            let users = [];
            DB.data.forEach((value, key) => {
                users.push(key, Object.entries(value));
            });
            return users;
        };
    }
    update(id, param) {
        if (id === undefined || param === undefined || DB.data.keys(id) === undefined || typeof DB.data.get(id).ID !== 'string')
            throw new Error;
        else {
            let sample = Object.entries(param);
            for(let i=0; i< sample.length; i++) {
                for (let j=0; j<sample[i].length; i++) {
                    let key = sample[i][j];
                    let value = sample[i][j+1];
                    DB.data.get(id)[key] = value;
                    return DB.data.get(id);            
                };
            }
        }
    }
    delete(id) {
        if (DB.data.keys(id) === undefined || typeof DB.data.get(id).ID !== 'string')
            throw new Error;
        else return DB.data.delete(id);
    }
};
const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll();
db.update(id, { age: 22 });
db.delete(id);