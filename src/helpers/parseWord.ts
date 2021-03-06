import { capitalCase as originalCaptalCase } from "change-case";

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
export function capitalCase(word: string | string[], lang: string = "en"): string {
  if(typeof word === "string") return capitalCaseSingleWord(word);
  if(word.length <= 0) return "";
  if(lang === "en") return combineEnWords(word.map(capitalCaseSingleWord));
  if(lang === "zh") return combineZhWords(word);
  throw Error("not supported language");
}

export function softLineBreakForDateString(date: string|string[], separator="/"): string{
  const wbrElem = "<wbr>";
  if(typeof date === "string"){
    return date.split(separator).join(wbrElem + separator);
  }
  return date.join(wbrElem + separator);
}