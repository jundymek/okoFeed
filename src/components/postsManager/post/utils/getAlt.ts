export function getAlt(text: string): string {
  const splitted = text.split(".");
  if (splitted[0].length > 125) {
    return splitted[0].slice(0, 125);
  }
  return splitted[0];
}
