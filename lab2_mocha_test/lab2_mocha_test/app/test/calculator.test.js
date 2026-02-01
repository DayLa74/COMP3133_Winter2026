const { expect } = require('chai');
const { add, sub, mul, div } = require('../calculator');


describe('Calculator Test Cases', () => {


describe('Addition Tests', () => {
it('add(5, 2) should return 7 PASS', () => {
expect(add(5, 2)).to.equal(7);
});


it('add(5, 2) should return 8 FAIL', () => {
expect(add(5, 2)).to.not.equal(8);
});
});


describe('Subtraction Tests', () => {
it('sub(5, 2) should return 3 PASS', () => {
expect(sub(5, 2)).to.equal(3);
});


it('sub(5, 2) should return 5 FAIL', () => {
expect(sub(5, 2)).to.not.equal(5);
});
});


describe('Multiplication Tests', () => {
it('mul(5, 2) should return 10 PASS', () => {
expect(mul(5, 2)).to.equal(10);
});


it('mul(5, 2) should return 12 FAIL', () => {
expect(mul(5, 2)).to.not.equal(12);
});
});


describe('Division Tests', () => {
it('div(10, 2) should return 5 PASS', () => {
expect(div(10, 2)).to.equal(5);
});


it('div(10, 2) should return 2 FAIL', () => {
expect(div(10, 2)).to.not.equal(2);
});
});
});