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
const chai_1 = require("chai");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
const url = 'vamtiger-responsive-svg.js.json.js';
const selector = `script[src="${url}"], script[data-name="${url}"]`;
exports.default = () => describe('vamtiger-responsive-svg', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadScript({
                src: url
            });
        });
    });
    it('load script', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const script = document.head.querySelector(selector);
            chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
        });
    });
});
//# sourceMappingURL=load-script.js.map