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
const path_1 = require("path");
const chai_1 = require("chai");
const vamtiger_copy_file_1 = require("vamtiger-copy-file");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const buildFolder = path_1.resolve(__dirname, '..');
const testHtmlSource = path_1.resolve(__dirname, '../../source/test/html/test.html');
const testHtmlDestination = path_1.resolve(__dirname, '../index.html');
const testHtmlTemplateSource = path_1.resolve(__dirname, '../../source/test/html/template.svg');
const testHtmlTemplateDestination = path_1.resolve(__dirname, '../template.svg');
const testCssSource = path_1.resolve(__dirname, '../../source/test/html/test.css');
const testCssDestination = path_1.resolve(__dirname, '../test.css');
describe('Generate', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                vamtiger_copy_file_1.default({
                    source: testHtmlSource,
                    destination: testHtmlDestination
                }),
                vamtiger_copy_file_1.default({
                    source: testCssSource,
                    destination: testCssDestination
                }),
                vamtiger_copy_file_1.default({
                    source: testHtmlTemplateSource,
                    destination: testHtmlTemplateDestination
                })
            ]);
        });
    });
    it('Test Preview', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const folderContent = yield vamtiger_get_directory_content_1.default(buildFolder)
                .then(result => new Set(result));
            chai_1.expect(folderContent.has(path_1.basename(testHtmlDestination))).to.be.true;
        });
    });
});
//# sourceMappingURL=generate.js.map