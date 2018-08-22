"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../lib/index");
require("mocha");
describe("String.random", function () {
    it("should exist", function () {
        chai_1.expect(String.random).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(String.random).to.be.a("function");
    });
});
describe("String.random", function () {
    it("should return a string", function () {
        chai_1.expect(String.random()).to.be.a("string");
    });
    it("should return a default empty string", function () {
        chai_1.expect(String.random()).to.equal("");
    });
});
describe("random", function () {
    it("should exist", function () {
        chai_1.expect(index_1.random).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(index_1.random).to.be.a("function");
    });
});
describe("random", function () {
    it("should return a string", function () {
        chai_1.expect(index_1.random()).to.be.a("string");
    });
    it("should return a default empty string", function () {
        chai_1.expect(index_1.random()).to.equal("");
    });
});
describe("random", function () {
    it("should err on a-1-length string", function () {
        chai_1.expect(function () {
            return index_1.random(-1);
        }).to.throw("length < 0");
    });
    it("should return a 0-length string", function () {
        chai_1.expect(index_1.random(0).length <= 0).to.eq(true);
    });
    it("should return a 1-length string", function () {
        chai_1.expect(index_1.random(1).length <= 1).to.eq(true);
    });
    it("should return a 2-length string", function () {
        chai_1.expect(index_1.random(2).length <= 2).to.eq(true);
    });
    it("should return a 3-length string", function () {
        chai_1.expect(index_1.random(3).length <= 3).to.eq(true);
    });
    it("should return a 4-length string", function () {
        chai_1.expect(index_1.random(4).length <= 4).to.eq(true);
    });
    it("should return a 8-length string", function () {
        chai_1.expect(index_1.random(8).length <= 8).to.eq(true);
    });
    it("should err on a 9-length string", function () {
        chai_1.expect(function () {
            return index_1.random(9);
        }).to.throw("length > 8");
    });
});
describe("random", function () {
    it("should err on a 0-range string", function () {
        chai_1.expect(function () {
            return index_1.random(8, 0);
        }).to.throw("range < 2");
    });
    it("should err on a 1-range string", function () {
        chai_1.expect(function () {
            return index_1.random(8, 1);
        }).to.throw("range < 2");
    });
    it("should return a 2-range string", function () {
        chai_1.expect(index_1.random(8, 2).length <= 8).to.eq(true);
    });
    it("should return a 3-range string", function () {
        chai_1.expect(index_1.random(8, 3).length <= 8).to.eq(true);
    });
    it("should return a 4-range string", function () {
        chai_1.expect(index_1.random(8, 4).length <= 8).to.eq(true);
    });
    it("should return a 8-range string", function () {
        chai_1.expect(index_1.random(8, 8).length <= 8).to.eq(true);
    });
    it("should return a 16-range string", function () {
        chai_1.expect(index_1.random(8, 16).length <= 8).to.eq(true);
    });
    it("should return a 32-range string", function () {
        chai_1.expect(index_1.random(8, 32).length <= 8).to.eq(true);
    });
    it("should return a 36-range string", function () {
        chai_1.expect(index_1.random(8, 36).length <= 8).to.eq(true);
    });
    it("should err on a 37-range string", function () {
        chai_1.expect(function () {
            return index_1.random(8, 37);
        }).to.throw("range > 36");
    });
});
describe("random", function () {
    it("should return a random string of 1 bit", function () {
        chai_1.expect(index_1.random(1, 2)).to.be.a("string");
        chai_1.expect(index_1.random(1, 2)).to.be.oneOf(["0", "1"]);
        chai_1.expect(index_1.random(1, 2)).to.be.oneOf(["0", "1"]);
    });
    it("should return a random string of 2 bits", function () {
        chai_1.expect(index_1.random(2, 2)).to.be.a("string");
        chai_1.expect(index_1.random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        chai_1.expect(index_1.random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        chai_1.expect(index_1.random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
        chai_1.expect(index_1.random(2, 2)).to.be.oneOf(["00", "01", "10", "11"]);
    });
});
//# sourceMappingURL=test.js.map