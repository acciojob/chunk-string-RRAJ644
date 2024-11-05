function stringChop(str, size) {
  // Ensure size is a valid number and handle non-positive size
  size = parseInt(size);
  if (isNaN(size) || size <= 0) {
    return [];
  }

  let ans = [];

  for (let i = 0; i < str.length; i += size) {
    const chunk = str.slice(i, i + size);
    ans.push(chunk);
  }

  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
