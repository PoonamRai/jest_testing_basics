const functions = require("./functions");

test("adds 1 + 2 to equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

test("User fetched name should be Leane", () => {
  expect.assertions(1); //it verifies that certain number of assetions are called in this case it is 1. if we leave this the test still pass.
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  }); //if we omit return statement the test will basically complete before our axios call.
});
