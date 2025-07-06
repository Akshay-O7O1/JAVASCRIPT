var x = 10;
var y = 20;

var add = x + y;
var sub = y - x;
var mul = x * y;
var div = y / x;
var mod = x % y;

var postI = x++;
var preI = ++x;
var postD = y--;
var preD = --y;

document.write("This is Addition Operator + " + add + "<br>");
document.write("This is Subtraction Operator - " + sub + "<br>");
document.write("This is Multiplication Operator * " + mul + "<br>");
document.write("This is Division Operator / " + div + "<br>");
document.write("This is Modulus Operator % " + mod + "<br>");

document.write("This is Post Increment Operator (x++) = " + postI + "<br>");
document.write("This is Pre Increment Operator (++x) = " + preI + "<br>");
document.write("This is Post Decrement Operator (y--) = " + postD + "<br>");
document.write("This is Pre Decrement Operator (--y) = " + preD + "<br>");