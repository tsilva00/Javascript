// Setup
function compareEquality(a, b) {
  if (typeof(a) == typeof(b)) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
