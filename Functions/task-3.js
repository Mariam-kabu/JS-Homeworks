function genericFunction(func) {
    try{
        func();
    }catch(e){
        console.log(e.message);
    }
}
function sayHello(){
    console.log('hello');
}
function addOne(){
    const a = 2;
    a++;
    console.log(a)
}

genericFunction(sayHello);
genericFunction(addOne);