const array = [1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]];

function concatRecursively(items) {
  const flattened = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...concatRecursively(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}
console.log(concatRecursively(array));

/*
1. concatRecursively([1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]])
2. concatRecursively([[2, 2]) -> [1. 1, 2, 2] + ...[3, 4, 5, 0, 2]
3. concatRecursively([[3, [4, 5, [0]], 3], 2]) -> [3, 4, 5, 0, 2]
4. concatRecursively([3, [4, 5, [0]], 3]) -> [3] + ...{4, 5, 0, 3]
5. concatRecursively([4, 5, [0]]) -> [4, 5] + ...[0]
6. concatRecursively([0]) -> [0]
*/
