const kolmio = require('./kolmio');

test('syötteet ei numeromaisia merkkijonoja "kanta"+"korkeus", heittää poikkeuksen', () => {
    expect(() => {kolmio("kanta","korkeus")}).toThrow('ei lukuja, anna kolmion kanta ja korkeus');
    
});

test('Laskee kolmion pinta-alan', () => {
    expect(kolmio(2,2)).toBe(2);
});

test('Yritetään jakaa negatiivisella luvulla, pyydetään jokin positiivinen luku', () => {
    expect(() => {kolmio(4,-13)}).toThrow('Negatiivisella luvulla ei onnistu. Anna positiivinen luku');
    
});

test('Yritetään negatiivisella luvulla, pyydetään jokin positiivinen luku', () => {
    expect(() => {kolmio(-4,4)}).toThrow('Negatiivisella luvulla ei onnistu. Anna positiivinen luku');
    
});

