import React from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_storybook-button__liYsO {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 1px solid transparent;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.Button-module_storybook-button--primary__SKrHG {\n  color: white;\n  background-color: #004C97;\n}\n.Button-module_storybook-button--primary--hover__VqFvO:hover{\n  color: #004C97;\n  background-color: white;\n  border:1px solid #004C97;\n}\n.Button-module_storybook-button--secondary__-KWuP {\n  color: white;\n  background-color: #3D3935;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.Button-module_storybook-button--secondary--hover__VBzEP:hover{\n  color: #3D3935;\n  background-color: white;\n  border:1px solid #3D3935;\n}\n.Button-module_storybook-button--disabled__Eghxl {\n  cursor:alias;\n  color: white;\n  background-color: #E5E5E5;\n}\n\n.Button-module_storybook-button--small__w88da {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.Button-module_storybook-button--medium__neztg {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.Button-module_storybook-button--large__B2ky6 {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n";
var style = {"storybook-button":"Button-module_storybook-button__liYsO","storybook-button--primary":"Button-module_storybook-button--primary__SKrHG","storybook-button--primary--hover":"Button-module_storybook-button--primary--hover__VqFvO","storybook-button--secondary":"Button-module_storybook-button--secondary__-KWuP","storybook-button--secondary--hover":"Button-module_storybook-button--secondary--hover__VBzEP","storybook-button--disabled":"Button-module_storybook-button--disabled__Eghxl","storybook-button--small":"Button-module_storybook-button--small__w88da","storybook-button--medium":"Button-module_storybook-button--medium__neztg","storybook-button--large":"Button-module_storybook-button--large__B2ky6"};
styleInject(css_248z);

var _excluded = ["type", "size", "label", "hover", "borderRadius"];
/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'primary' : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    label = _ref.label,
    _ref$hover = _ref.hover,
    hover = _ref$hover === void 0 ? true : _ref$hover,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? 30 : _ref$borderRadius,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement("button", Object.assign({
    type: "button",
    className: ["" + style['storybook-button'], style["storybook-button--" + size], style["storybook-button--" + type], hover && style["storybook-button--" + type + "--hover"]].join(' '),
    style: {
      borderRadius: borderRadius
    }
  }, props), label);
};

export { Button };
//# sourceMappingURL=fp-button-infosis.esm.js.map
