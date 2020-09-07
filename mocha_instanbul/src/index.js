function test(a, b) {
  if (b <= 0) {
    return 'divider could not be zero';
  }
  console.log('test');
  result = a / b;
  if (result < 0.5) {
    return 'too low';
  } else {
    return 'ok';
  }
}

module.exports = {
  test
};
