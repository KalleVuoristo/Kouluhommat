const kolmio = require('./kolmio');

test('syötteet ei numeromaisia merkkijonoja "testi1"+"testi2", heittää poikkeuksen', () => {
    expect(() => {kolmio("testi1","testi2")}).toThrow('ei lukuja');
    
});

test('Laskee kolmion pinta-alan', () => {
    expect(kolmio(5,5)).toBe(true);
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {kolmio(4,-1)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {kolmio(-2,4)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});

test('yritetään jakaa nollalla, pyydetään jokin luku', () => {
    expect(() => {kolmio(-10,-1)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});