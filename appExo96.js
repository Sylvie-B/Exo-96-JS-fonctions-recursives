
function incr(a) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML += a.toString();
    document.body.appendChild(newDiv);
    if(a < 10){
        a += 2;
        incr(a);
    }
}

incr(0);
incr(1);