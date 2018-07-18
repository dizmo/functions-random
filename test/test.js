'use strict';
var expect = require('chai').expect;
let index = require('../dist/index.js');

describe('index', () => {
    it('should exist', () => {
        expect(index).to.exist;
    });
    it('should export a default', () => {
        expect(index.default).to.exist;
    });
});

describe('index.random', () => {
    it('should exist', () => {
        expect(index.random).to.exist;
        expect(String.random).to.exist;
    });
    it('should be a function', () => {
        expect(index.random).to.be.a('function');
        expect(String.random).to.be.a('function');
    });
});

describe('index.random', () => {
    it('should return a string', () => {
        expect(index.random()).to.be.a('string');
    });
    it('should return a default empty string', () => {
        expect(index.random()).to.equal('');
    });
});

describe('index.random', () => {
    it('should err on a-1-length string', () => {
        expect(() => index.random(-1)).to.throw('length < 0');
    });
    it('should return a 0-length string', () => {
        expect(index.random(0).length <= 0).to.be.true;
    });
    it('should return a 1-length string', () => {
        expect(index.random(1).length <= 1).to.be.true
    });
    it('should return a 2-length string', () => {
        expect(index.random(2).length <= 2).to.be.true;
    });
    it('should return a 3-length string', () => {
        expect(index.random(3).length <= 3).to.be.true;
    });
    it('should return a 4-length string', () => {
        expect(index.random(4).length <= 4).to.be.true;
    });
    it('should return a 8-length string', () => {
        expect(index.random(8).length <= 8).to.be.true;
    });
    it('should err on a 9-length string', () => {
        expect(() => index.random(9)).to.throw('length > 8');
    });
});

describe('index.random', () => {
    it('should err on a 0-range string', () => {
        expect(() => index.random(8, 0)).to.throw('range < 2');
    });
    it('should err on a 1-range string', () => {
        expect(() => index.random(8, 1)).to.throw('range < 2');
    });
    it('should return a 2-range string', () => {
        expect(index.random(8, 2).length <= 8).to.be.true;
    });
    it('should return a 3-range string', () => {
        expect(index.random(8, 3).length <= 8).to.be.true;
    });
    it('should return a 4-range string', () => {
        expect(index.random(8, 4).length <= 8).to.be.true;
    });
    it('should return a 8-range string', () => {
        expect(index.random(8, 8).length <= 8).to.be.true;
    });
    it('should return a 16-range string', () => {
        expect(index.random(8, 16).length <= 8).to.be.true;
    });
    it('should return a 32-range string', () => {
        expect(index.random(8, 32).length <= 8).to.be.true;
    });
    it('should return a 36-range string', () => {
        expect(index.random(8, 36).length <= 8).to.be.true;
    });
    it('should err on a 37-range string', () => {
        expect(() => index.random(8, 37)).to.throw('range > 36');
    });
});

describe('index.random', () => {
    it('should return a random string of 1 bit', () => {
        expect(index.random(1, 2)).to.be.a('string');
        expect(index.random(1, 2)).to.be.oneOf(['0', '1']);
        expect(index.random(1, 2)).to.be.oneOf(['0', '1']);
    });
    it('should return a random string of 2 bits', () => {
        expect(index.random(2, 2)).to.be.a('string');
        expect(index.random(2, 2)).to.be.oneOf(['00', '01', '10', '11']);
        expect(index.random(2, 2)).to.be.oneOf(['00', '01', '10', '11']);
        expect(index.random(2, 2)).to.be.oneOf(['00', '01', '10', '11']);
        expect(index.random(2, 2)).to.be.oneOf(['00', '01', '10', '11']);
    });
});
