let chai = require("chai");
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;
var romanizer = require("./romanizer.js");

describe("check exception", () => {
  it("chai is working ", () => {
    (1).should.equal(1);
  });
});

describe("Romaizer output", () => {
  it("1 should equal I", () => {
    let romannum = romanizer(1);
    romannum.should.equal("I");
  });
});
