import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector,
    ObservedAttribute
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import loadSvg from './load-svg';

export const name = 'vamtiger-responsive-svg';

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerResponsiveSvg extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const slot = getTemplate({
            selector: Selector.slot,
            attributes: {
                name
            }
        });
        const elements = [
            stylesheet,
            slot
        ];

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        await loadSvg({
            element: this
        });
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}