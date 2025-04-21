export const hiraganaMap = {
  // Basic vowels
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",

  // K-row
  ka: "か",
  ki: "き",
  ku: "く",
  ke: "け",
  ko: "こ",

  // S-row
  sa: "さ",
  shi: "し",
  su: "す",
  se: "せ",
  so: "そ",

  // T-row
  ta: "た",
  chi: "ち",
  tsu: "つ",
  te: "て",
  to: "と",

  // N-row
  na: "な",
  ni: "に",
  nu: "ぬ",
  ne: "ね",
  no: "の",

  // H-row
  ha: "は",
  hi: "ひ",
  fu: "ふ",
  he: "へ",
  ho: "ほ",

  // M-row
  ma: "ま",
  mi: "み",
  mu: "む",
  me: "め",
  mo: "も",

  // Y-row
  ya: "や",
  yu: "ゆ",
  yo: "よ",

  // R-row
  ra: "ら",
  ri: "り",
  ru: "る",
  re: "れ",
  ro: "ろ",

  // W-row
  wa: "わ",
  wo: "を",

  // N
  n: "ん",
};

export const katakanaMap = {
  // Basic vowels
  a: "ア",
  i: "イ",
  u: "ウ",
  e: "エ",
  o: "オ",

  // K-row
  ka: "カ",
  ki: "キ",
  ku: "ク",
  ke: "ケ",
  ko: "コ",

  // S-row
  sa: "サ",
  shi: "シ",
  su: "ス",
  se: "セ",
  so: "ソ",

  // T-row
  ta: "タ",
  chi: "チ",
  tsu: "ツ",
  te: "テ",
  to: "ト",

  // N-row
  na: "ナ",
  ni: "ニ",
  nu: "ヌ",
  ne: "ネ",
  no: "ノ",

  // H-row
  ha: "ハ",
  hi: "ヒ",
  fu: "フ",
  he: "ヘ",
  ho: "ホ",

  // M-row
  ma: "マ",
  mi: "ミ",
  mu: "ム",
  me: "メ",
  mo: "モ",

  // Y-row
  ya: "ヤ",
  yu: "ユ",
  yo: "ヨ",

  // R-row
  ra: "ラ",
  ri: "リ",
  ru: "ル",
  re: "レ",
  ro: "ロ",

  // W-row
  wa: "ワ",
  wo: "ヲ",

  // N
  n: "ン",
};

export const getJapaneseChar = (romaji, type = "hiragana") => {
  const map = type === "katakana" ? katakanaMap : hiraganaMap;
  return map[romaji] || "?";
};
