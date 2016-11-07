module.exports = lpad;
function lpad (string, length, char) {
  string = String(string);
  var i = -1;
  if (!char && char !== 0) char = ' ';
  length = length - string.length;
  while (++i < length) {
    string = char + string;
  }
  return string;
}
