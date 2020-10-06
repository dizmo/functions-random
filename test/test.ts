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
    it("should return by default a non-empty string", () => {
        expect(String.random().length > 0).to.eq(true);
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
    it("should return a 16-byte string (default)", () => {
        expect(random().length <= 32).to.eq(true);
    });
});

describe("random", () => {
    it("should return a 0-byte string", () => {
        expect(random(0).length == 0).to.eq(true);
    });
    it("should return a 1-byte string", () => {
        expect(random(1).length == 2).to.eq(true);
    });
    it("should return a 2-byte string", () => {
        expect(random(2).length == 4).to.eq(true);
    });
    it("should return a 3-byte string", () => {
        expect(random(3).length == 6).to.eq(true);
    });
    it("should return a 4-byte string", () => {
        expect(random(4).length == 8).to.eq(true);
    });
    it("should return a 8-byte string", () => {
        expect(random(8).length == 16).to.eq(true);
    });
    it("should return a 16-byte string", () => {
        expect(random(16).length == 32).to.eq(true);
    });
});

describe("random", () => {
    it("should accept `ascii` encoding", () => {
        expect(random(16, 'ascii').length > 0).to.eq(true);
    });
    it("should accept `base64` encoding", () => {
        expect(random(16, 'base64').length > 0).to.eq(true);
    });
    it("should accept `hex` encoding", () => {
        expect(random(16, 'hex').length > 0).to.eq(true);
    });
    it("should accept `latin1` encoding", () => {
        expect(random(16, 'latin1').length > 0).to.eq(true);
    });
    it("should accept `ucs2` encoding", () => {
        expect(random(16, 'ucs2').length > 0).to.eq(true);
    });
});
