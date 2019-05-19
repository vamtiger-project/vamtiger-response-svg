import * as VamtigerBrowserMethodTypes from 'vamtiger-browser-method/build/types';
import { requestIdleCallback } from 'requestidlecallback';
import VamtigerResponsiveSvg from './element';

export enum StringConstant {
    nothing = '',
    slash = '/',
    imageObject = 'http://schema.org/ImageObject'
}

export enum Selector {
    style = 'style',
    svg = 'svg',
    slot = 'slot',
    figure = 'figure',
    figcaption = 'figcaption',
    span = 'span',
    a = 'a'
}

export enum EventName {
    svgLoaded = 'svgLoaded'
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
    itemprop?: string;
    href?: string;
}

export interface IProperties {
    innerHTML?: string;
}

export interface ILoadSvg {
    element: VamtigerResponsiveSvg;
}

export interface IDataset extends DOMStringMap {
    svg?: string;
    jsonLd?: string;
}

export interface IJosnLdImageObject {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    author: {
        '@type': string;
        givenName: string;
        familyName: string;
        email: string;
    };
    datePublished: string;
    contentUrl: string;
}

export interface IData {
    jsonLd: IJosnLdImageObject[],
    json: {
        template: string
    }
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.svg ? SVGElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends Selector.figure | Selector.figcaption ? HTMLElement :
    P['selector'] extends Selector.span ? HTMLSpanElement :
    P['selector'] extends Selector.a ? HTMLAnchorElement :
    null;