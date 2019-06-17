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
const get_template_1 = require("./get-template");
const element_1 = require("./element");
const { VamtigerBrowserMethod } = window;
const { getElement, getData } = VamtigerBrowserMethod;
const { nothing } = types_1.StringConstant;
const eventParams = {
    bubbles: true
};
function default_1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { svg: svgUrl, jsonLd: jsonLdUrl } = dataset;
        const { jsonLd: currentJsonLd, json } = (jsonLdUrl && (yield getData({ jsonLd: jsonLdUrl })) || { jsonLd: [], json: {} });
        const [jsonLd] = currentJsonLd;
        const { '@context': context, '@type': type, name, description, author, datePublished, contentUrl } = jsonLd || {};
        ;
        const itemtype = context && type && [
            context,
            type
        ].join(types_1.StringConstant.slash);
        const { template } = json || { template: '' };
        const svg = jsonLdUrl && template && (yield getElement({
            name: jsonLdUrl,
            template,
            selector: types_1.Selector.svg
        }))
            ||
                svgUrl && (yield getElement({
                    name: svgUrl,
                    url: svgUrl,
                    selector: types_1.Selector.svg
                }));
        const svgLoadedEvent = new CustomEvent(types_1.EventName.svgLoaded, eventParams);
        const figure = get_template_1.default({
            selector: types_1.Selector.figure
        });
        const caption = get_template_1.default({
            selector: types_1.Selector.figcaption
        });
        const attributes = {
            itemscope: '',
            itemtype: itemtype || types_1.StringConstant.imageObject
        };
        const attributeKeys = Object.keys(attributes);
        const elements = [
            figure,
            caption
        ];
        const captionElements = yield Promise.all([
            name && {
                selector: types_1.Selector.span,
                properties: {
                    innerHTML: name
                },
                attributes: {
                    itemprop: 'name'
                }
            },
            description && {
                selector: types_1.Selector.span,
                properties: {
                    innerHTML: description
                },
                attributes: {
                    itemprop: 'description'
                }
            },
            datePublished && {
                selector: types_1.Selector.span,
                properties: {
                    innerHTML: datePublished
                },
                attributes: {
                    itemprop: 'datePublished'
                }
            },
            contentUrl && {
                selector: types_1.Selector.a,
                properties: {
                    innerHTML: `${name}: ${description}`
                },
                attributes: {
                    itemprop: 'contentUrl',
                    href: contentUrl
                }
            }
        ].map(templateParams => templateParams && get_template_1.default(templateParams)));
        if (figure && caption && svg) {
            figure.slot = element_1.name;
            figure.appendChild(svg);
            captionElements.forEach(currentElement => currentElement && caption.appendChild(currentElement));
            element.dataset.svgLoaded = nothing;
            attributeKeys.forEach(key => element.setAttribute(key, attributes[key]));
            elements.forEach(currentElement => currentElement && element.appendChild(currentElement));
            element.dispatchEvent(svgLoadedEvent);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=load-svg.js.map