class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
};

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
        if (this.year < 2018) throw new Error;
    }
    getFullName() {
        return super.getFullName();

    }
    getCourse() {
        let presentYear = new Date().getFullYear();
        return presentYear - this.year;
    }
};

let student = new Student("John", "Smith", 2018);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());