import VamtigerResponsiveSvg from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style',
    svg = 'svg',
    slot = 'slot'
}

export enum ObservedAttributes {

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

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.svg ? SVGElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    null;