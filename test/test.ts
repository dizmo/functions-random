import { expect } from "chai";
import { random } from "../lib/index";

import "mocha";

describe("String.random", () => {
    it("should exist", () => {
        expect(String.random).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(String.random).to.be.a("function");
    });
});

describe("String.random", () => {
    it("should return a string", () => {
        expect(String.random()).to.be.a("string");
    });
    it("should return a default empty string", () => {
        expect(String.random()).to.equal("");
    });
});

describe("random", () => {
    it("should exist", () => {
        expect(random).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(random).to.be.a("function");
    });
});

describe("random", () => {
    it("should return a string", () => {
        expect(random()).to.be.a("string");
    });
    it("should return a default empty string", () => {
        expect(random()).to.equal("");
    });
});

describe("random", () => {
    it("should err on a-1-length string", () => {
        expect(() => random(-1)).to.throw("length < 0");
    });
    it("should return a 0-length string", () => {
        expect(random(0).length <= 0).to.eq(true);
    });
    it("should return a 1-length string", () => {
        expect(random(1).length <= 1).to.eq(true);
    });
    it("should return a 2-length string", () => {
        expect(random(2).length <= 2).to.eq(true);
    });
    it("should return a 3-length string", () => {
        expect(random(3).length <= 3).to.eq(true);
    });
    it("should return a 4-length string", () => {
        expect(random(4).length <= 4).to.eq(true);
    });
    it("should return a 8-length string", () => {
        expect(random(8).length <= 8).to.eq(true);
    });
    it("should err on a 9-length string", () => {
        expect(() => random(9)).to.throw("length > 8");
    });
});

describe("random", () => {
    it("should err on a 0-range string", () => {
        expect(() => random(8, 0)).to.throw("range < 2");
    });
    it("should err on a 1-range string", () => {
        expect(() => random(8, 1)).to.throw("range < 2");
    });
    it("should return a 2-range string", () => {
        expect(random(8, 2).length <= 8).to.eq(true);
    });
    it("should return a 3-range string", () => {
        expect(random(8, 3).length <= 8).to.eq(true);
    });
    it("should return a 4-range string", () => {
        expect(random(8, 4).length <= 8).to.eq(true);
    });
    it("should return a 8-range string", () => {
        expect(random(8, 8).length <= 8).to.eq(true);
    });
    it("should return a 16-range string", () => {
        expect(random(8, 16).length <= 8).to.eq(true);
    });
    it("should return a 32-range string", () => {
        expect(random(8, 32).length <= 8).to.eq(true);
    });
    it("should return a 36-range string", () => {
        expect(random(8, 36).length <= 8).to.eq(true);
    });
    it("should err on a 37-range string", () => {
        expect(() => random(8, 37)).to.throw("range > 36");
    });
});

describe("random", () => {
    it("should return a random string of 1 bit", () => {
        expect(random(1, 2)).to.be.a("string");
        expect(random(1, 2)).to.be.oneOf(["0", "1"]);
        expect(random(1, 2)).to.be.oneOf(["0", "1"]);
    });
    it("should return a random string of 2 bits", () => {
        expect(random(2, 2)).to.be.a("string");
        expect(random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        expect(random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        expect(random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        expect(random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
    });
});
