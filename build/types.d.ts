import VamtigerResponsiveSvg from './element';
export declare enum StringConstant {
    nothing = ""
}
export declare enum Selector {
    style = "style",
    svg = "svg",
    slot = "slot"
}
export declare enum ObservedAttributes {
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    name?: string;
}
export interface IProperties {
    innerHTML?: string;
}
export interface ILoadSvg {
    element: VamtigerResponsiveSvg;
}
export interface IDataset extends DOMStringMap {
    svg: string;
}
export declare type AttributesKey = keyof IAttributes;
export declare type ObservedAttribute = keyof typeof ObservedAttributes;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.style ? HTMLStyleElement : P['selector'] extends Selector.svg ? SVGElement : P['selector'] extends Selector.slot ? HTMLSlotElement : null;
