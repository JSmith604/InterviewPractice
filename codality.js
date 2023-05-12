function solution(S) {
  // Implement your solution here
  let lastASeen = 0
  for(let i = 0; i < S.length; i++) {
      if (S[i] === 'a') {
          if (i < lastASeen) {
              return false;
          }
          lastASeen = i;
      }
  }
  return true;
}