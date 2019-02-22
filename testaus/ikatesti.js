function ika(a) {
    
    
    if(a === undefined || a === null){
        throw new Error('ei parametria');
    }
    
    let ikaa = Number(a);
    if(Number.isNaN(ikaa)){
        throw new Error('ei ollut luku');
    }

  
if(a>=18) {
    return true;
}
else {
    return false;
}


}
module.exports = ika;