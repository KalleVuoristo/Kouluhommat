const ika = require('./ikatesti');

test('suorittaa iän tarkistuksen, tulos 18', () => {
    expect(ika(18)).toBe(true);
});

test('syöte numeromainen merkkijono, tulos 18', () => {
    expect(ika("18")).toBeTruthy;

});

test('syöte ei numeromainen merkkijono "kahdeksantoista", heittää poikkeuksen', () => {
    expect(() => {ika("kahdensantoista")}).toThrow('ei ollut luku');
    
});

test('ei anneta yhtään parametriä, pyydetään parametri', () => {
    expect(() => {ika()}).toThrow('ei parametria');
    
});