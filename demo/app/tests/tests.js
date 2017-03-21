var Feedback = require("nativescript-feedback").Feedback;
var feedback = new Feedback();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(feedback.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(feedback.functionname()).toEqual(jasmine.any(Promise));
  });
});