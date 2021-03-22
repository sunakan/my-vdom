import { isEventAttr } from "./utils";

const setAttrs = (target, attrs) => {
  for (const attr in attrs) {
    if (isEventAttr(attr)) {
      // slice(2)は"on"という2文字を取り除いてる(onclick => click)
      target.addEventListener(attr.slice(2), attrs[attr]);
    } else {
      // idやclass、type等の属性を付与
      target.setAttribute(attr, attrs[attr]);
    }
  }
};

// Object.entries
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function renderElement({tagName, attrs, children}) {
  const $el = document.createElement(tagName);

  setAttrs($el, attrs);

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
