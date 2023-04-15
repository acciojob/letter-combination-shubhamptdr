function letterCombinations(input_digit) {
  
  const mapping = {
    '2': 'abc', 
    '3': 'def', 
    '4': 'ghi', 
    '5': 'jkl',
    '6': 'mno', 
    '7': 'pqrs', 
    '8': 'tuv', 
    '9': 'wxyz'
  };
  const output = [];
  function backtrack(combination, remainingDigits) {
    if (!remainingDigits) {
      output.push(combination);
    } else {
      const letters = mapping[remainingDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, remainingDigits.slice(1));
      }
    }
  }
  backtrack('', input_digit);
  return output;
}

module.exports = letterCombinations;
