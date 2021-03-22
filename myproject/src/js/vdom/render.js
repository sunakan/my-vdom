// Object.entries
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function renderElement({tagName, attrs, children}) {
  const $el = document.createElement(tagName);
  // idやclass、type等の属性を付与
  for (const [k,v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
}

export function render(vNode) {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }
  return renderElement(vNode);
}
