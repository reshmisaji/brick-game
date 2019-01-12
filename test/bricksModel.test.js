describe("isInsideRightEnd", function() {
  it("should return 'true' when given any value less than 860", function() {
    chai.assert.deepEqual(isInsideRightEnd(5), true);
  });
  it("should return 'false' when given any value greater than 860", function() {
    chai.assert.deepEqual(isInsideRightEnd(870), false);
  });
});

describe("isInsideLeftEnd", function() {
  it("should return 'true' when given any value greater than 0", function() {
    chai.assert.deepEqual(isInsideLeftEnd(1), true);
  });
  it("should return 'false' when given any value less than zero", function() {
    chai.assert.deepEqual(isInsideLeftEnd(-1), false);
  });
});

describe("add", function() {
  it("should return 3 when given 2 and 1", function() {
    chai.assert.deepEqual(add(1, 2), 3);
  });
});

describe("subtract", function() {
  it("should return 3 when given 5 and 2", function() {
    chai.assert.deepEqual(subtract(5, 2), 3);
  });
});
