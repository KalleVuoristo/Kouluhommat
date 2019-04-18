function kolmio(a,b) {
   
    if(a <=-1){
        throw new Error('negatiivisella luvulla jakaminen ei onnistu');
    }
    
    if(b <=-1){
        throw new Error('negatiivisella luvulla jakaminen ei onnistu');
    }
    
    if(a <=-1 & b<=-1){
        throw new Error('negatiivisella luvulla jakaminen ei onnistu');
    }
    

    let pintaala = Number(a)*Number(b)/2;
    if(Number.isNaN(pintaala)){
        throw new Error('ei lukuja, anna kolmion kanta ja korkeus');
    }


    if(a * b / 2) {
        return kolmio;
    }
    else {
        return false;
    }


}
module.exports = kolmio;