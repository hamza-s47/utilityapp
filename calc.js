function c(val) {
    document.getElementById("screen").value=val;
}
function math(val) {
    document.getElementById("screen").value+=val;
}
function backspace() {
}
function e() { 
try { 
    c(eval(document.getElementById("screen").value)) 
} 
catch(e) {
    c('Error') 
} 
};

function backspace() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}