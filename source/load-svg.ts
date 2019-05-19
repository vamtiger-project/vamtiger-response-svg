import {
    ILoadSvg,
    IDataset,
    IData,
    Selector,
    StringConstant,
    EventName
} from './types';
import { name } from './element';

const { VamtigerBrowserMethod } = window;
const { getElement, getData } = VamtigerBrowserMethod;
const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};

export default async function ({ element }: ILoadSvg) {
    const dataset = element.dataset as IDataset;
    const { svg: svgUrl, jsonLd: jsonLdUrl } = dataset;
    const { jsonLd, json } = (jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [], json: {}}) as IData;
    const { template } = json || { template: ''};
    const svg = jsonLdUrl && template && await getElement({
            name: jsonLdUrl,
            template,
            selector: Selector.svg
        })
        ||
        svgUrl && await getElement({
            name: svgUrl,
            url: svgUrl,
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
