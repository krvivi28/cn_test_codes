const Solution = require(".");
const fs=require("fs");
describe("Solution", () => {
  beforeEach(() => {
    // Clear the content of the note.txt file before each test
    fs.writeFileSync("note.txt", "old data");
  });

  test("should update the file and read the updated data", (done) => {
    const consoleLogSpy = jest.spyOn(console, "log");

    Solution();

    expect(consoleLogSpy).toHaveBeenCalledWith("old data new data");

    done();
  });
});
