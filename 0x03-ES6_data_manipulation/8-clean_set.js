export default function cleanSet(theSet, startString) {
  const filteredSet = Array.from(theSet)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.substring(startString.length));

  return filteredSet.join('-');
}
