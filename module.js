module.exports = lpad;
function lpad (string, length, char) {
  string = String(string);
  var i = -1;
  if (!char && char !== 0) char = ' ';
  length = length - str.length;
  while (++i < length) {
    str = char + str;
  }
  return str;
}
