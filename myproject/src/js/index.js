import h from "./vdom/createElement";
import { render } from './vdom/render';

const view = h("p", {
  attrs: {},
  children: ["仮想DOMスタート"],
});

const $app = render(view);
const el = document.getElementById('app');
el.appendChild($app)
