import { SignupUseCase } from "./signup-use-case"

describe("TDD sign-use-case", () => {
  test("signupUseCase should return a created user", async () => {
    //Arrange
    const expected = "user"

    /* script under test */
    const sut = new SignupUseCase()
    //act
    const result = await sut.execute()
    console.log(result)
    //assert
    expect(result).toBe(expected)
  })
})