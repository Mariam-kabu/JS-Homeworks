class Validator {
    isEmail(string) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!mailformat.test(string);
    }
    isDomain(string) {
        let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        
        return !!pattern.test(string);
    }
    isDate(string) {
        // code block doesn't contain Regexp, cause i think Date.parse() method is simpler <33
        let validDate =  Date.parse(string);
        return !isNaN(validDate);
    }
    isPhone(string) {
        let validNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,6}|[-\s\.]?[0-9]{2,6}$/im;
        return !!validNumber.test(string);
    }
};

let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'));