function product(x,y){
    debugger;
    return x*y;
}
function operation(){
    let x = parseInt(document.getElementById("input1").value);
    let y = parseInt(document.getElementById("input2").value);

    if (!isNaN(x) && !isNaN(y)){
        document.getElementById('result').innerText = product(x,y);

    }
    else{
        document.getElementById('result').innerText = "Please enter a valid number";
    }
}