function sayHello(){
    return `Hello, `
}
let name = `JavaScript!`
function greeting(sayHello, name){
    return sayHello()+name
}
console.log(greeting(sayHello, name) );



