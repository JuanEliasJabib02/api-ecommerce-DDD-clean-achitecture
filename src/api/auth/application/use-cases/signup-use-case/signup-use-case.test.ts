import { SignupUseCase } from "./signup-use-case"
import { UserEntity, userRole, userStatus } from "../../../domain/user-entity";
import { AuthRepository } from "../../../domain/auth-repository";



describe("TDD sign-use-case", () => {
  test("signupUseCase should return a created user", async () => {

    //Arrange
    const mockData: UserEntity = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      role: userRole.USER,
      status: userStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const expected: UserEntity = mockData
    const mockAuthRepository: AuthRepository = {
      signup: jest.fn().mockResolvedValue(expected),
    };
    /* script under test */
    const sut = new SignupUseCase({ authRepository: mockAuthRepository });
    //act
    const result = await sut.execute(mockData)
    //assert
    expect(result).toStrictEqual(expected)
  })
})