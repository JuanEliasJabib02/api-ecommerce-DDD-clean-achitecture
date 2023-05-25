import { SignupUseCase } from "./signup-use-case"

import { UserEntity, userRole, userStatus } from "../../../domain/user-entity";

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

describe("TDD sign-use-case", () => {
  test("signupUseCase should return a created user", async () => {
    //Arrange
    const expected = mockUser
    /* script under test */
    const sut = new SignupUseCase()
    //act
    const result = await sut.execute()
    //assert
    expect(result).toStrictEqual(expected)
  })
})