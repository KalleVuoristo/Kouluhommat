const kolmio = require('./kolmio');

test('syötteet ei numeromaisia merkkijonoja "kanta"+"korkeus", heittää poikkeuksen', () => {
    expect(() => {kolmio("kanta","korkeus")}).toThrow('ei lukuja, anna kolmion kanta ja korkeus');
    
});

test('Laskee kolmion pinta-alan', () => {
    expect(kolmio(25,5)).toBe(kolmio);
});

test('yritetään jakaa negatiivisella luvulla, pyydetään jokin positiivinen luku', () => {
    expect(() => {kolmio(4,-13)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});

test('yritetään jakaa negatiivisella luvulla, pyydetään jokin positiivinen luku', () => {
    expect(() => {kolmio(-4,4)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});

test('yritetään jakaa negatiivisillä luvuilla, pyydetään jotkut positiiviset luvut', () => {
    expect(() => {kolmio(-10,-1)}).toThrow('negatiivisella luvulla jakaminen ei onnistu');
    
});