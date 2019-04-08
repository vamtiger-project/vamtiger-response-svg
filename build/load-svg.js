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
const get_element_from_url_1 = require("../node_modules/vamtiger-browser-method/source/get-element-from-url");
const types_1 = require("./types");
const element_1 = require("./element");
function default_1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { svg: url } = dataset;
        const svg = url && (yield get_element_from_url_1.default({
            name: url,
            url,
            selector: types_1.Selector.svg
        }));
        if (svg) {
            svg.slot = element_1.name;
            element.appendChild(svg);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=load-svg.js.map