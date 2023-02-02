String.prototype.toJadenCase = function() {
  return this
    .split(" ")
    .map(i => i.replace(i[0], i[0].toUpperCase()))
    .join(" ");
};

/*function toJadenCase(str) {
  // Your code here
  let newStr = str.split(" ");

  let i = 0;
  str=''

  while(i < newStr.length) {
    newStr[i][0].toUpperCase(); 
    str+= newStr[i] + " ";
    i++;
  }
  return str;
}


console.log(toJadenCase("Meu nome é Thais"))*/
