var Feedback = require("nativescript-feedback").Feedback;
var feedback = new Feedback();

describe("show", function () {
  it("exists", function () {
    expect(feedback.show).toBeDefined();
  });

  it("returns a promise", function () {
    expect(feedback.show()).toEqual(jasmine.any(Promise));
  });

  it("expects options to be passed in", function (done) {
    feedback.show().then(
        function () {
          fail("Should not have worked");
        },
        function () {
          expect().toBe();
          done();
        }
    )
  });

  it("works with a title only", function (done) {
    feedback.show({
      title: "works with a title only"
    }).then(
        function () {
          expect().toBe();
          done();
        },
        function () {
          fail("Should have worked");
        }
    )
  });
});

describe("hide", function () {
  it("exists", function () {
    expect(feedback.hide).toBeDefined();
  });

  it("returns a promise", function () {
    expect(feedback.hide()).toEqual(jasmine.any(Promise));
  });

  it("doesn't crash when nothing is being shown", function (done) {
    feedback.hide().then(
        function () {
          // if the former didn't hide nothing (lol), then this one shouldn't crash
          feedback.hide().then(
              function () {
                expect().toBe();
                done();
              },
              function () {
                fail("Should have worked 2");
              }
          );
        },
        function () {
          fail("Should have worked 1");
        }
    )
  });
});

describe("success", function () {
  it("exists", function () {
    expect(feedback.success).toBeDefined();
  });

  it("works with a title only", function (done) {
    feedback.success({
      title: "success"
    }).then(
        function () {
          expect().toBe();
          done();
        },
        function () {
          fail("Should have worked");
        }
    )
  });
});

describe("warning", function () {
  it("exists", function () {
    expect(feedback.warning).toBeDefined();
  });

  it("works with a title only", function (done) {
    feedback.warning({
      title: "warning"
    }).then(
        function () {
          expect().toBe();
          done();
        },
        function () {
          fail("Should have worked");
        }
    )
  });
});

describe("info", function () {
  it("exists", function () {
    expect(feedback.info).toBeDefined();
  });

  it("works with a title only", function (done) {
    feedback.info({
      title: "info"
    }).then(
        function () {
          expect().toBe();
          done();
        },
        function () {
          fail("Should have worked");
        }
    )
  });
});

describe("error", function () {
  it("exists", function () {
    expect(feedback.error).toBeDefined();
  });

  it("works with a title only", function (done) {
    feedback.error({
      title: "error"
    }).then(
        function () {
          expect().toBe();
          done();
        },
        function () {
          fail("Should have worked");
        }
    )
  });
});