const hiraganaAudio = {
  // Basic vowels
  a: () => import("@/assets/audio/hiragana/a.mp3"),
  i: () => import("@/assets/audio/hiragana/i.mp3"),
  u: () => import("@/assets/audio/hiragana/u.mp3"),
  e: () => import("@/assets/audio/hiragana/e.mp3"),
  o: () => import("@/assets/audio/hiragana/o.mp3"),

  // K-row
  ka: () => import("@/assets/audio/hiragana/ka.mp3"),
  ki: () => import("@/assets/audio/hiragana/ki.mp3"),
  ku: () => import("@/assets/audio/hiragana/ku.mp3"),
  ke: () => import("@/assets/audio/hiragana/ke.mp3"),
  ko: () => import("@/assets/audio/hiragana/ko.mp3"),

  // S-row
  sa: () => import("@/assets/audio/hiragana/sa.mp3"),
  shi: () => import("@/assets/audio/hiragana/shi.mp3"),
  su: () => import("@/assets/audio/hiragana/su.mp3"),
  se: () => import("@/assets/audio/hiragana/se.mp3"),
  so: () => import("@/assets/audio/hiragana/so.mp3"),

  // T-row
  ta: () => import("@/assets/audio/hiragana/ta.mp3"),
  chi: () => import("@/assets/audio/hiragana/chi.mp3"),
  tsu: () => import("@/assets/audio/hiragana/tsu.mp3"),
  te: () => import("@/assets/audio/hiragana/te.mp3"),
  to: () => import("@/assets/audio/hiragana/to.mp3"),

  // N-row
  na: () => import("@/assets/audio/hiragana/na.mp3"),
  ni: () => import("@/assets/audio/hiragana/ni.mp3"),
  nu: () => import("@/assets/audio/hiragana/nu.mp3"),
  ne: () => import("@/assets/audio/hiragana/ne.mp3"),
  no: () => import("@/assets/audio/hiragana/no.mp3"),

  // H-row
  ha: () => import("@/assets/audio/hiragana/ha.mp3"),
  hi: () => import("@/assets/audio/hiragana/hi.mp3"),
  fu: () => import("@/assets/audio/hiragana/fu.mp3"),
  he: () => import("@/assets/audio/hiragana/he.mp3"),
  ho: () => import("@/assets/audio/hiragana/ho.mp3"),

  // M-row
  ma: () => import("@/assets/audio/hiragana/ma.mp3"),
  mi: () => import("@/assets/audio/hiragana/mi.mp3"),
  mu: () => import("@/assets/audio/hiragana/mu.mp3"),
  me: () => import("@/assets/audio/hiragana/me.mp3"),
  mo: () => import("@/assets/audio/hiragana/mo.mp3"),

  // Y-row
  ya: () => import("@/assets/audio/hiragana/ya.mp3"),
  yu: () => import("@/assets/audio/hiragana/yu.mp3"),
  yo: () => import("@/assets/audio/hiragana/yo.mp3"),

  // R-row
  ra: () => import("@/assets/audio/hiragana/ra.mp3"),
  ri: () => import("@/assets/audio/hiragana/ri.mp3"),
  ru: () => import("@/assets/audio/hiragana/ru.mp3"),
  re: () => import("@/assets/audio/hiragana/re.mp3"),
  ro: () => import("@/assets/audio/hiragana/ro.mp3"),

  // W-row
  wa: () => import("@/assets/audio/hiragana/wa.mp3"),
  wo: () => import("@/assets/audio/hiragana/o.mp3"),

  // N
  n: () => import("@/assets/audio/hiragana/n.mp3"),
};

export default async function getAudioPath(character) {
  try {
    const module = await hiraganaAudio[character]();
    return module.default;
  } catch (error) {
    console.error("Audio not found for:", character, error);
    return null;
  }
}
