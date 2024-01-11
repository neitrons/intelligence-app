const englishToGeorgian = {
  a: "ა",
  b: "ბ",
  g: "გ",
  d: "დ",
  e: "ე",
  v: "ვ",
  z: "ზ",
  i: "ი",
  k: "კ",
  l: "ლ",
  m: "მ",
  n: "ნ",
  o: "ო",
  p: "პ",
  r: "რ",
  s: "ს",
  t: "ტ",
  u: "უ",
  f: "ფ",
  q: "ქ",
  y: "ყ",
  c: "ც",
  w: "წ",
  x: "ხ",
  j: "ჯ",
  h: "ჰ",
  J: "ჟ",
  R: "ღ",
  T: "თ",
  S: "შ",
  W: "ჭ",
  C: "ჩ",
  Z: "ძ",
};

export function composeGeoString(string: string) {
  let newString = "";

  for (let char of string) {
    const georgianChar =
      //@ts-ignore
      englishToGeorgian[char.toLowerCase()] || englishToGeorgian[char];
    newString += georgianChar || char;
  }

  return newString;
}
