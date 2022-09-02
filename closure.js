// Lexical Scoping in Js
// Lexical scope is the ability for a function scope to access variables from the parent scope.
function init(){
    var name = "shakir";
    function sayhello(){
        console.log(name);
    }
    sayhello()
}

init()

// closure in Js 
function init(){
    var name = "shakir";
    console.log("I am init");
    return function sayhello(){
        console.log(name);
    }
}

var value = init()
value()

function doAddition(x){
    return function(y){
        return x + y;
    }
}
const add5 = doAddition(3)

console.log(add5(3));


console.log(doAddition(5)(5));// This Concept is called as currying















