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

describe("type check", () => {
  it("romanizer returns a string", () => {
    let romannum = romanizer(1);
    expect(romannum).to.be.a("string");
  });
});

describe("Romaizer output", () => {
  it("1 should equal I", () => {
    let romannum = romanizer(1);
    romannum.should.equal("I");
  });

  it("2 should equal II", () => {
    let romannum = romanizer(2);
    romannum.should.equal("II");
  });

  it("3 should equal III", () => {
    let romannum = romanizer(3);
    romannum.should.equal("III");
  });

  it("4 should equal IV", () => {
    let romannum = romanizer(4);
    romannum.should.equal("IV");
  });

  it("5 should equal V", () => {
    let romannum = romanizer(5);
    romannum.should.equal("V");
  });

  it("6 should equal VI", () => {
    let romannum = romanizer(6);
    romannum.should.equal("VI");
  });

  it("7 should equal VII", () => {
    let romannum = romanizer(7);
    romannum.should.equal("VII");
  });

  it("9 should equal IX", () => {
    let romannum = romanizer(9);
    romannum.should.equal("IX");
  });

  it("10 should equal X", () => {
    let romannum = romanizer(10);
    romannum.should.equal("X");
  });

  it("11 should equal XI", () => {
    let romannum = romanizer(11);
    romannum.should.equal("XI");
  });

  it("30 should equal XXX", () => {
    let romannum = romanizer(30);
    romannum.should.equal("XXX");
  });

  it("100 should equal C", () => {
    let romannum = romanizer(100);
    romannum.should.equal("C");
  });

  it("5000 should too large", () => {
    let romannum = romanizer(5000);
    romannum.should.equal("Sorry, the Roman could not count this high!");
  });
});

