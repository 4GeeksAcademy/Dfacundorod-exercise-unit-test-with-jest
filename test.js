const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test('adds 14 + 9 yo equal', ()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})


describe('test for fromEuroToDollar', ()=>{
    //numero decimal
    test("One euro should be 1.07 dollars", ()=> {
        const { fromEuroToDollar } = require('./app.js');
        const dollars = fromEuroToDollar(3.5);
        const expected = 3.5 * 1.07;
        expect(fromEuroToDollar(3.5)).toBe(3.745); 
    })
    //posible 0
    test('0 euro should be 0 dollars', ()=>{
        expect(fromEuroToDollar(0)).toBe(0);
    })
    //numero grande
    test('10000 euro should be 10700 dollars', ()=>{
        expect(fromEuroToDollar(10000)).toBe(10700);
    })
});

describe('test for fromDollarToYen', ()=>{
    test('One dollar should be 14626 yen', ()=>{
        const {fromDollarToYen} = require('./app.js');
        const yen = fromDollarToYen(1);
        const expected = (1/1.07)*156.5;
        expect(fromDollarToYen(1)).toBeCloseTo(146.26);
    })
    test('0 dollar should be 0 yen', ()=>{
        expect(fromDollarToYen(0)).toBe(0);
    })
    test('8.5 dollar should be 1243.22 yen', ()=>{
        expect(fromDollarToYen(8.5)).toBeCloseTo(1243.22);
    })
    test('10000 dollar should be 1462616.82 yen',()=>{
        expect(fromDollarToYen(10000)).toBeCloseTo(1462616.82);
    })
})

describe('test for fromYenToPound', ()=>{
    test('One pound should be 0.0055', ()=>{
        const {fromYenToPound} = require('./app.js');
        const pound = fromYenToPound(1);
        const expected = (1/156.5)*0.87;
        expect(fromYenToPound(1)).toBeCloseTo(0.0055);
    })
    test('0 yen should be 0 pound',()=>{
        expect(fromYenToPound(0)).toBe(0);
    })
    test('9.5 yen should be 0.0528 pound', ()=>{
        expect(fromYenToPound(9.5)).toBeCloseTo(0.0528);
    })
    test('10000 yen should be 55.5910 pound', ()=>{
        expect(fromYenToPound(10000)).toBeCloseTo(55.5910)
    })
})
