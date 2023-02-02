// Setup
function compareEquality(a, b) {
  if (typeof(a) == typeof(b)) //Another possibility instead of typeof put '==='
  { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
