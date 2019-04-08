import getElement from '../node_modules/vamtiger-browser-method/source/get-element-from-url';
import {
    ILoadSvg,
    Selector,
    IDataset
} from './types';
import { name } from './element';

export default async function ({ element }: ILoadSvg) {
    const dataset = element.dataset as IDataset;
    const { svg: url } = dataset;
    const svg = url && await getElement({
        name: url,
        url,
        selector: Selector.svg
    });

    if (svg) {
        svg.slot = name;

        element.appendChild(svg);
    }

}