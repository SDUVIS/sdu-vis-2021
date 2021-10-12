import { capitalCase as originalCaptalCase } from "change-case";

type Lang = "en" | "zh";

export function combineEnWords(words: string[]): string {
  return words.join(" ");
}

export function combineZhWords(words: string[]): string {
  return words.join("");
}

export function capitalCaseSingleWord(word: string): string {
  return originalCaptalCase(word) || word;
}

export function isEnglishWord(word: string): boolean {
  if(word.length === 0) return true;
  const regex = /^[a-zA-Z\s`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/;
  return regex.test(word);
}

/**
 * For English words
 * @param word 
 * @returns 
 */
export function capitalCase(word: string | string[], lang: Lang = "en"): string {
  if(typeof word === "string") return capitalCaseSingleWord(word);
  if(word.length <= 0) return "";
  if(lang === "en") return combineEnWords(word.map(capitalCaseSingleWord));
  if(lang === "zh") return combineZhWords(word);
  throw Error("not supported language");
}