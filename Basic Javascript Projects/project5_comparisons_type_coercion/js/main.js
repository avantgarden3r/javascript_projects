document.write(typeof "Word");

document.write("10" + 5);

function not_a_number() {
    document.getElementById("test").innerHTML=1/0;
}

function true_func() {
    document.getElementById("test_2").innerHTML=isNaN('Hello World');
}

function false_func() {
    document.getElementById("test_3").innerHTML=isNaN('82673');
}

document.write(4E422);

document.write(-5E365);

document.write(10>3);

console.log(3+4);

console.log(4>8);

document.write(4==4);

document.write(6==4);

a=4;
b=4;
document.write(a===b);

c=3;
d="drink";
document.write(c===d);

e="5";
f=5;
document.write(e===f);

g="cake";
h="pie";
document.write(g===h);

document.write(6>2 && 7>4);

document.write(6<2 && 7>4);

document.write(4>5 || 8>3);

document.write(9<2 || 8<4);

function not_op() {
    document.getElementById("not").innerHTML=!(6>9);
    document.getElementById("correct").innerHTML=!(6<9);
}