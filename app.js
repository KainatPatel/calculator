function getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
}
function getResult(){
    var final = document.getElementById("result");
    final.value = eval(final.value);
}
function delLast(){
    var currentValue = result.value;
    result.value = currentValue.slice(0,-1) || "0";
}
function clearInput() {
    var result = document.getElementById("result");
    result.value = "";
}