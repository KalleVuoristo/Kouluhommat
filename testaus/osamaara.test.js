const osamaara = require('./osamaara');

test('suorittaa numeroiden jakamisen ja tarkistaa onko oikein, tulos 2', () => {
    expect(osamaara(22,2)).toBe(osamaara);
});

test('syötteet numeromaisia merkkijonoja "6"+"3", tulos 2', () => {
    expect(osamaara("6","3")).toBe(osamaara);

});

test('syötteet ei numeromaisia merkkijonoja "jakolaskuneka"+"jakolaskuntoka", heittää poikkeuksen', () => {
    expect(() => {osamaara("jakolaskuneka","jakolaskuntoka")}).toThrow('ei lukuja');
    
});

test('ei anneta yhtään parametriä, pyydetään parametri', () => {
    expect(() => {osamaara()}).toThrow('ei parametria, anna jokin parametri');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {osamaara(4,0)}).toThrow('nollalla jakaminen ei onnistu');
    
});
