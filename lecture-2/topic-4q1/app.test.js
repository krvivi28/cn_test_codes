const axios = require("axios");
const Solution = require(".");
describe("msg", () => {
  it("msg", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    const axiosSpy = jest
      .spyOn(axios, "get")
      .mockReturnValueOnce({ data: { name: "coding_ninjas" } });
    await Solution();
    expect(consoleSpy).toHaveBeenCalledWith({
      name: "coding_ninjas",
    });
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    axiosSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
