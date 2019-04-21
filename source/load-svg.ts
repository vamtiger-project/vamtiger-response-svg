import getElement from '../node_modules/vamtiger-browser-method/source/get-element-from-url';
import {
    ILoadSvg,
    Selector,
    IDataset,
    StringConstant,
    EventName
} from './types';
import { name } from './element';

const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};

export default async function ({ element }: ILoadSvg) {
    const dataset = element.dataset as IDataset;
    const { svg: url } = dataset;
    const svg = url && await getElement({
        name: url,
        url,
        selector: Selector.svg
    });
    const svgLoadedEvent = new CustomEvent(
        EventName.svgLoaded,
        eventParams
    );


    if (svg) {
        svg.slot = name;

        element.appendChild(svg);

        element.dataset.svgLoaded = nothing;

        element.dispatchEvent(svgLoadedEvent);
    }
}
