function bussilippu(a) {
  
    let lippu = Number(a);
    if(Number.isNaN(lippu)){
        throw new Error('Anna ikä numerona');
    }
    
    if(a<7) {
    return 0;
    }
    if (a>7 && a<=16){
    return 1;
    }
    if (a>16 && a<=25){
    return 1.5;
    }
    if (a>25 && a<=65){
    return 3;
    }
    if (a>65){
    return 1.50;
    }
  
    


}
module.exports = bussilippu;