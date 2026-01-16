// 1
let code1;
// 2
code1 = 7 + 3;
// console.log(code1);

// 3
let code2 = 140 / 2 - 30;
// console.log(code2);

// 4 Create another variable named code3 with a value of 39.
//    The 39 should be calculated using at least one remainder operator.
let code3 = 79 % 40;
// console.log(code3);

// 5 Initialize a variable named message to have the value
//    "The vault has been secured. The combination is:.
let message = "The vault has been secured. The combination is:";

//. or is this supposed to be:
let messageAlternative = `"The vault has been secured. The combination is:`;

// 6 Initialize a variable named codeA to have the value "10-40-39".
//    This value must be calculated by concatenating the variables code1,
//    code2, and code3.
let codeA = code1 + "-" + code2 + "-" + code3;

// 7 Initialize a variable named codeB to have the value "10-40-39".
//    The value must be a single template literal that uses the variables
//    code1, code2, and code3.
let codeB = `${code1}-${code2}-${code3}`;

// 8 Use console.log to print message, codeA, and codeB to the browser console.
console.log(message);
console.log(codeA);
console.log(codeB);
console.log("or is it supposed to be:");
console.log(messageAlternative);
console.log(codeA);
console.log(codeB);
console.log(
  "I'm wondering if there's a typo in the instructions. There's a double quote at the start but not at the beginning. It seems like it's a trick question."
);
console.log(
  "Ahhh... it looks okay in Canvas but where I'm seeing the unbalanced quote is in the ReadMe on github."
);
