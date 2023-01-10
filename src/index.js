module.exports = function reverse (n) {
  const str = n.toString();
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
   	strReverse = strReverse + str[i];
  };
 
  return parseInt(strReverse);
}
