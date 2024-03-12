export default function cleanSet(theSet, startString) {
  // checking if the beginning of string is not empty and is a string
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  // empty string created to store resukt
  let result = '';
  // iterating through the set and slices the string from the startString length and appends '-'
  theSet.forEach((item) => {
    if (item && item.startsWith(startString)) result += `${item.slice(startString.length)}-`;
  });
  // returning the result but first removing the last '-' appended
  return result.slice(0, result.length - 1);
}
