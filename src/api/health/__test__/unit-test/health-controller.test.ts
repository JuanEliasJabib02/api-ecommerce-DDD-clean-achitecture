
describe("healthController", () => {
  test("should return a 200 status and healthStatus Object in the ok case", async () => {

    const expectedHealthStatus = {
      status: "ok",
      message: "app runinng good",
      uptime: process.uptime(),
    };
  })


})