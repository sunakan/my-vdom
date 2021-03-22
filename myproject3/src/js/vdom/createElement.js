// Object.createでObject作成
// 続くassignで適用
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// そして返す
export default (tagName, {attrs = {}, children = []}) => {
  const vElement = Object.create(null);

  Object.assign(vElement, {
    tagName,
    attrs,
    children,
  });

  return vElement;
};
