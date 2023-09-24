var character = prompt("Enter the number or integer")
if (character.toString().charCodeAt(0) >= 65 && character.toString().charCodeAt(0) <= 90) {
    document.write("your given character is uppercase alphabat letter")
}
else if (character.toString().charCodeAt(0) >= 97 && character.toString().charCodeAt(0) <= 122) {
    document.write("your given character is lower case alphabat letter")
}
else {
    document.write("your given character is number")
}
var num1 = prompt("Enter first number")
var num2 = prompt("Enter second number")
var res = num1+num2
if (num1 = num2) {
    document.write("both number are equal"+ "<h1>res</h1>")
}
else {
    document.write("<h1>res</h1>")
}