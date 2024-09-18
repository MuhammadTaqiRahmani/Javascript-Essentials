function area(){
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let area = length * width;

    if(isNaN(length) || isNaN(width)){
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
    else{
        document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    }

};


