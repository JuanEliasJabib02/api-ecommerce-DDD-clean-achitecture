import { SignupUseCase } from "./signup-use-case"
import { UserEntity, userRole, userStatus } from "../../../domain/user-entity";
import { AuthRepository } from "../../../domain/auth-repository";
import { UserAlreadyExistError } from "./errors/error-user-already-exist";

/* 
TODO
1-keep developing the signup case 

do the tests cases in tdd

Error Handling - User Already Exists:
Error Handling - Invalid Input: 
Error Handling - Database Failure:


 */


describe("TDD sign-use-case", () => {
  test("signupUseCase should return a created user", async () => {

    //Arrange
    const mockUser: UserEntity = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      role: userRole.USER,
      status: userStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const expected: UserEntity = mockUser
    const mockAuthRepository: AuthRepository = {
      signup: jest.fn().mockResolvedValue(expected),
      findByEmail: jest.fn().mockResolvedValue(null),
    };
    /* script under test */
    const sut = new SignupUseCase({ authRepository: mockAuthRepository });
    //act
    const result = await sut.execute(mockUser)

    //assert
    expect(result).toStrictEqual(expected)
  })

  test("signupUseCase should throw an error if user already exist", async () => {

    //Arrange
    const mockUser: UserEntity = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      role: userRole.USER,
      status: userStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const expectedError: UserAlreadyExistError = new UserAlreadyExistError()
    const mockAuthRepository: AuthRepository = {
      signup: jest.fn().mockResolvedValue(mockUser),
      findByEmail: jest.fn().mockResolvedValue(expectedError),
    };
    /* script under test */
    const sut = new SignupUseCase({ authRepository: mockAuthRepository });
    //act

    const result = await sut.execute(mockUser)

    //assert
    expect(result).toThrowError(expectedError);


  })


})


