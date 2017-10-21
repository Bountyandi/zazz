export default (str) => {
  const trimmed = str.split(' ').join('');
  /// TODO: Need to add validation and once entry occurrence

  return trimmed.split(',');
};
