/*
 * Given a string, split the string into two substrings at every possible point.
 * The rightmost substring is a suffix. The beginning of the string is the prefix.
 * Determine the lengths of the common prefix between each suffix and the original string.
 * Sum and return the lengths of the common prefixes. Return an array where each element i is the sum for string i.
 */

export const commonPrefixLength = (originalStr, suffix) => {
  let length = 0;
  for (let i = 0; i < Math.min(originalStr.length, suffix.length); i++) {
    if (originalStr[i] !== suffix[i]) {
      break;
    }
    length++;
  }
  return length;
}

export const commonPrefix = (strs) => {
  return strs.map(str => {
    let totalLength = 0;
    for (let i = 0; i < str.length; i++) {
      const suffix = str.slice(i);
      totalLength += commonPrefixLength(str, suffix);
    }
    return totalLength;
  });
}
