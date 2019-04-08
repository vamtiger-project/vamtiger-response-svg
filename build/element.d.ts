import { ObservedAttribute } from './types';
export declare const name = "vamtiger-responsive-svg";
export default class VamtigerResponsiveSvg extends HTMLElement {
    constructor();
    static readonly observedAttributes: never[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
