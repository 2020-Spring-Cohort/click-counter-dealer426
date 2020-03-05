document.writeln('Lets Click Some Cookies!');

const getHello = function(greeting) {
        return greeting;
}

const getHelloConsole = function(myString) {
    var greeting = new Object();
    greeting.name = myString;
    return console.log(greeting.name);
}

var btn = document.createElement("BUTTON");   
btn.innerHTML = "Click Me to Count Cookies";                   
document.body.appendChild(btn);

const returnClickCount = function()
{
    return count++;
} 