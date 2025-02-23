function uniqueLinear(words) {
  const seen = {}; // 1 * O(1) = O(1)
  const unique = []; // 1 * O(1) = O(1)
  for (
    let i = 0; // 1 * O(1) = O(1)
    i < words.length; // n * O(1) = O(n)
    i++ // n * O(1) = O(n)
  ) {
    const word = words[i]; // n * O(1) = O(n)
    if (!seen[word]) {
      // n * O(1) = O(n)
      seen[word] = true; // n * O(1) = O(n)
      unique[unique.length] = word; // n * O(1) = O(n)
    }
  }
  return unique; // 1 * O(1) = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * O(1) = O(1)
  for (
    let i = 0; // 1 * O(1) = O(1)
    i < words.length; // n * O(1) = O(n)
    i++ // n * O(1) = O(n)
  ) {
    const word = words[i]; // n * O(1) = O(n)
    let isUnique = true; // n * O(1) = O(n)
    for (
      let c = 0; // n * O(n) = O(n^2)
      c < i; // n * O(n) = O(n^2)
      c++ // n * O(n) = O(n^2)
    ) {
      const comparing = words[c]; // n * O(n) = O(n^2)
      if (comparing === word) {
        // n * O(n) = O(n^2)
        isUnique = false; // n * O(n) = O(n^2)
      }
    }
    if (isUnique) {
      // n * O(1) = O(n)
      unique[unique.length] = word; // n * O(1) = O(n)
    }
  }
  return unique; // 1 * O(1) = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
