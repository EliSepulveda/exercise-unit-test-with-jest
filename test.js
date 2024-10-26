
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('Conversion from dollar to yen (1 USD = 152.28 YEN)', () => {
    expect(fromDollarToYen(1)).toBe(152.28);
});

test('Conversion from dollar to yen (5 USD = 152.28 YEN)', () => {
    expect(fromDollarToYen(5)).toBe(761.4);
});

test('Conversion from dollar to yen (0 USD = 0 YEN)', () => {
    expect(fromDollarToYen(0)).toBe(0);
});

// ############ Test for Euro to Dollar
test('Conversion from Euro to Dollar (1 EUR = 1.08 USD)', () => {
    expect(fromEuroToDollar(1)).toBe(1.08);
});

test('Conversion from Euro to Dollar (5 EUR = 5.4 USD)', () => {
    expect(fromEuroToDollar(5)).toBe(5.4);
});

test('Conversion from Euro to Dollar (0 EUR = 0 USD)', () => {
    expect(fromEuroToDollar(0)).toBe(0);
});


// ############ Test for Yen to Pound
test('Conversion from Yen to Pound (1 Yen = 0.01 GBP)', () => {
    expect(fromYenToPound(1)).toBe(0.01);
});

test('Conversion from Yen to Pound (5 Yen = 0.05 GBP)', () => {
    expect(fromYenToPound(5)).toBe(0.05);
});

test('Conversion from Yen to Pound (0 Yen = 0 GBP)', () => {
    expect(fromYenToPound(0)).toBe(0);
});