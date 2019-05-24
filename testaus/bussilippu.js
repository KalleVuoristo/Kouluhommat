function bussilippu(a) {
  
    let lippu = Number(a);
    if(Number.isNaN(lippu)){
        throw new Error('Anna ikä numerona');
    }
    
    if(a<7) {
    return 0;
    } else if (a>7 && a<16){
    return 1;
    }
    else if (a>=16 && a<=25){
    return 1.5;
    }
    else if (a>25 && a<=65){
    return 3;
    }
    else if (a>65){
    return 1.50;
    } else {
        return 3;
    }

}
module.exports = bussilippu;
