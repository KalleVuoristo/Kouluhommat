function kolmio(a,b) {
   
    if(a <=-0){
        throw new Error('Negatiivisellä luvulla ei onnistu. Anna positiivinen luku');
    }
    
    if(b <=-0){
        throw new Error('Negatiivisellä luvulla ei onnistu. Anna positiivinen luku');
    }
    
    
    let pintaala = Number(a)*Number(b)/2;
    if(Number.isNaN(pintaala)){
        throw new Error('ei lukuja, anna kolmion kanta ja korkeus');
    }


   return a * b / 2;



}
module.exports = kolmio;
