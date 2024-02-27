function slugify(title) {
  const splitText = title.toLowerCase().split(' ');
  const joinText = splitText.join('-');

  return joinText;
}