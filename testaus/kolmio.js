function kolmio(a,b) {
   
    let pintaala = Number(a)*Number(b);
    if(Number.isNaN(pintaala)){
        throw new Error('ei lukuja');
    }

  
if(a <=-1){
    throw new Error('negatiivisella luvulla jakaminen ei onnistu');
}

if(b <=-1){
    throw new Error('negatiivisella luvulla jakaminen ei onnistu');
}

if(a <=-1 || b<=-1){
    throw new Error('negatiivisella luvulla jakaminen ei onnistu');
}


    if(a * b) {
        return true;
    }
    else {
        return false;
    }


}
module.exports = kolmio;