export function getAlt(text: string): string {
  const splitted = text.split(".");
  return splitted[0];
}
