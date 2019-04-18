function osamaara(a, b) {
//console.log(a);
//console.log(b);


if(b ==0){
    throw new Error('nollalla jakaminen ei onnistu');
}

if(a === undefined || a === null){
    throw new Error('ei parametria, anna jokin parametri');
}

let jakaminen = Number(a)/Number(b);
if(Number.isNaN(jakaminen)){
    throw new Error('ei lukuja');
}

    if(a / b) {
        return osamaara;
    }
    else {
        return false;
    }
}
module.exports = osamaara;