const bussilippu = require('./bussilippu');

test('syötteet ei numeromaisia merkkijonoja "testi1", heittää poikkeuksen', () => {
    expect(() => {bussilippu("testi")}).toThrow('Anna ikä numerona');
});

test('suorittaa iän tarkistuksen, bussilipun hinta ilmainen', () => {
    expect(bussilippu(5)).toBe(0);
});

test('suorittaa iän tarkistuksen, bussilipun hinta 1 euro', () => {
    expect(bussilippu(16)).toBe(1);
});

test('suorittaa iän tarkistuksen, bussilipun hinta 1,5 euroa', () => {
    expect(bussilippu(25)).toBe(1.5);
});

test('suorittaa iän tarkistuksen, bussilipun hinta 3 euroa', () => {
    expect(bussilippu(65)).toBe(3);
});

test('suorittaa iän tarkistuksen, bussilipun hinta 1,5 euroa', () => {
    expect(bussilippu(69)).toBe(1.5);
});

