import { HealthStatus } from "../../domain/model/health-status";
import { HealthRepository } from "../../domain/repository/health-repository";
import { CheckHealthUseCase } from "../../application/usecases/check-health/check-health-usecase";
import { HealthCheckError } from "../../application/usecases/check-health/errors/health-check-error";

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

    let result;
    try {
      result = await sut.execute()
    } catch (error) {
      result = error
    }

    // Act and Assert
    expect(result).toEqual(expected);

  });

  test("should handle null or undefined health status", async () => {
    // Arrange
    const message = 'Invalid health status.';
    const mockHealthRepository: HealthRepository = {
      getHealthStatus: jest.fn().mockResolvedValue(null),
    };

    /* System under test */
    const sut = new CheckHealthUseCase({ healthRepository: mockHealthRepository });

    let result;
    try {
      result = await sut.execute();
    } catch (error) {
      result = error;
    }


    // Act and Assert
    expect(result).toHaveProperty('message', message);

  });

});
