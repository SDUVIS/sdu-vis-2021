import { isEnglishWord } from "../../helpers/parseWord"

describe('isEnglishWordTest', () => {
  test("simple", () => {
    const word = "ShandongUniversity";
    const result = true;
    expect(isEnglishWord(word)).toBe(result);
  })
  test("space inner", () => {
    const word = "Shandong University";
    const result = true;
    expect(isEnglishWord(word)).toBe(result);
  })

  test("space at two sides", () => {
    const word = " ShandongUniversity ";
    const result = true;
    expect(isEnglishWord(word)).toBe(result);
  })

  test("empty string", () => {
    const word = "";
    const result = true;
    expect(isEnglishWord(word)).toBe(result);
  })

  test("string contains only space", () => {
    const word = " ";
    const result = true;
    expect(isEnglishWord(word)).toBe(result);
  })

})

export {};