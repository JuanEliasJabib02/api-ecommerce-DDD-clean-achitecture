import { HealthStatus } from "../../../domain/model/health-status";
import { HealthRepository } from "../../../domain/repository/health-repository";
import { CheckHealthUseCase } from "./check-health";
import { HealthCheckError } from "./errors/health-check-error";

describe("CheckHealthUseCase", () => {


  test("should return the health status ok", async () => {
    // Arrange
    const expected: HealthStatus = {
      status: "ok",
      message: "Is good the api",
      uptime: process.uptime()
    }
    const mockHealthRepository: HealthRepository = {
      getHealthStatus: jest.fn().mockResolvedValue(expected),
    };

    /* System under test */
    const sut = new CheckHealthUseCase({ healthRepository: mockHealthRepository })
    // Act
    const result = await sut.execute()
    // Assert
    expect(result).toEqual(expect.objectContaining(expected))
  });

  test("should handle error status", async () => {
    //Arrange
    const errorMessage = "Error retrieving health status";

    const expected = {
      status: "error",
      message: errorMessage,
      uptime: process.uptime(),
    };

    const mockHealthRepository: HealthRepository = {
      getHealthStatus: jest.fn().mockResolvedValue(expected),
    };

    /* System under test */
    const sut = new CheckHealthUseCase({ healthRepository: mockHealthRepository })
    //Act

    const result = await sut.execute()

    //Assert
    expect(result).toEqual(expect.objectContaining(expected));

  });

  test("should handle unexpected errors from the health repository", async () => {
    //Arrange

    const errorMessage = 'Unexpected error occurred';

    const expected = new HealthCheckError(errorMessage)

    const mockHealthRepository: HealthRepository = {
      getHealthStatus: jest.fn().mockRejectedValue(expected),
    };

    /* System under test */
    const sut = new CheckHealthUseCase({ healthRepository: mockHealthRepository });

    // Act and Assert
    await expect(sut.execute()).rejects.toThrowError(expected);

  });
});
