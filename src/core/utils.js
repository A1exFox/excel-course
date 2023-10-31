// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') return '';
  const firstChar = string.charAt(0).toUpperCase();
  const stringRest = string.slice(1);
  const resultString = firstChar + stringRest;
  return resultString;
}
