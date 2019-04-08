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
const load_script_1 = require("../../node_modules/vamtiger-browser-method/source/load-script");
const chai_1 = require("chai");
exports.default = () => describe('vamtiger-responsive-svg', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield load_script_1.default({
                src: 'vamtiger-responsive-svg.js'
            });
        });
    });
    it('load script', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const script = document.head.querySelector('[src="vamtiger-responsive-svg.js"]');
            chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
        });
    });
});
//# sourceMappingURL=load-script.js.map