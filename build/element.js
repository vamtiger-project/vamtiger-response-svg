"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const config_1 = require("./config");
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const load_svg_1 = require("./load-svg");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
exports.name = 'vamtiger-responsive-svg';
document_index_1.default && loadScript({ name: exports.name, css: document_index_1.default })
    .catch(console.error);
class VamtigerResponsiveSvg extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const slot = get_template_1.default({
            selector: types_1.Selector.slot,
            attributes: {
                name: exports.name
            }
        });
        const elements = [
            stylesheet,
            slot
        ];
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load_svg_1.default({
                element: this
            });
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}
exports.default = VamtigerResponsiveSvg;
//# sourceMappingURL=element.js.map