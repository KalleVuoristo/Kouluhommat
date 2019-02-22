const osamaara = require('./osamaara');

test('suorittaa numeroiden jakamisen ja tarkistaa onko oikein, tulos 2', () => {
    expect(osamaara(4,2)).toBe(true);
});

test('syötteet numeromaisia merkkijonoja "4"+"2", tulos 2', () => {
    expect(osamaara("4","2")).toBe(true);

});

test('syötteet ei numeromaisia merkkijonoja "testi1"+"testi2", heittää poikkeuksen', () => {
    expect(() => {osamaara("testi1","testi2")}).toThrow('ei lukuja');
    
});

test('ei anneta yhtään parametriä, pyydetään parametri', () => {
    expect(() => {osamaara()}).toThrow('ei parametria');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {osamaara(4,0)}).toThrow('nollalla jakaminen ei onnistu');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {osamaara(0,4)}).toThrow('nollalla jakaminen ei onnistu');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {osamaara(0,0)}).toThrow('nollalla jakaminen ei onnistu');
    
});