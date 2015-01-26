function query( element ) {
  return document.querySelector( element );
}
var setText = function setText(node, text) {
  return node.textContent = text;
};
var hide = function hide( element ) {
  return element.style.display = 'none';
};

export {query, setText, hide};
