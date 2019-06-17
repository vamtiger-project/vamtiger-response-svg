"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const html_1 = require("./html");
const css_1 = require("./css");
const { nothing } = types_1.StringConstant;
const template = document.createElement('template');
const stylesheet = `<style>${css_1.default}</style>`;
const templateHtml = [
    stylesheet,
    html_1.default
].join(nothing);
template.innerHTML = templateHtml;
exports.default = (params) => {
    const { selector, attributes = {}, properties = {} } = params;
    const attributesKeys = Object.keys(attributes);
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true);
    if (currentTemplate) {
        Object.assign(currentTemplate, properties);
        attributesKeys.forEach(key => attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''));
    }
    return currentTemplate;
};
//# sourceMappingURL=get-template.js.map