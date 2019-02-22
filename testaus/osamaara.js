function osamaara(a, b) {
//console.log(a);
//console.log(b);

if(a === undefined || a === null){
    throw new Error('ei parametria');
}

let jakaminen = Number(a)+Number(b);
if(Number.isNaN(jakaminen)){
    throw new Error('ei lukuja');
}

if(a ==0){
    throw new Error('nollalla jakaminen ei onnistu');
}

if(b ==0){
    throw new Error('nollalla jakaminen ei onnistu');
}

if(a ==0 || b==0){
    throw new Error('nollalla jakaminen ei onnistu');
}

    if(a / b) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = osamaara;