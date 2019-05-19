import {
    ILoadSvg,
    IDataset,
    IData,
    IJosnLdImageObject,
    Selector,
    StringConstant,
    EventName
} from './types';
import getTemplate from './get-template';
import { name as slotName } from './element';

const { VamtigerBrowserMethod } = window;
const { getElement, getData } = VamtigerBrowserMethod;
const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};

export default async function ({ element }: ILoadSvg) {
    const dataset = element.dataset as IDataset;
    const { svg: svgUrl, jsonLd: jsonLdUrl } = dataset;
    const { jsonLd: currentJsonLd, json } = (jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [], json: {}}) as IData;
    const [ jsonLd ] = currentJsonLd;
    const {
        '@context': context,
        '@type': type,
        name,
        description,
        author,
        datePublished,
        contentUrl
    } = jsonLd || {} as IJosnLdImageObject;  ;
    const itemtype = context && type && [
        context,
        type
    ].join(StringConstant.slash);
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
    const figure = getTemplate({
        selector: Selector.figure
    });
    const caption = getTemplate({
        selector: Selector.figcaption
    });
    const attributes = {
        itemscope: '',
        itemtype: itemtype || StringConstant.imageObject
    };
    const attributeKeys = Object.keys(attributes) as (keyof typeof attributes)[];
    const elements = [
        figure,
        caption
    ];
    const captionElements = await Promise.all([
        name && {
            selector: Selector.span,
            properties: {
                innerHTML: name
            },
            attributes: {
                itemprop: 'name'
            }
        },
        description && {
            selector: Selector.span,
            properties: {
                innerHTML: description
            },
            attributes: {
                itemprop: 'description'
            }
        },
        datePublished && {
            selector: Selector.span,
            properties: {
                innerHTML: datePublished
            },
            attributes: {
                itemprop: 'datePublished'
            }
        },
        contentUrl && {
            selector: Selector.a,
            properties: {
                innerHTML: `${name}: ${description}`
            },
            attributes: {
                itemprop: 'contentUrl',
                href: contentUrl
            }
        }
    ].map(templateParams => templateParams && getTemplate(templateParams)));

    if (figure && caption && svg) {
        figure.slot = slotName;

        figure.appendChild(svg);

        captionElements.forEach(currentElement => currentElement && caption.appendChild(currentElement));

        element.dataset.svgLoaded = nothing;

        attributeKeys.forEach(key => element.setAttribute(key, attributes[key]));

        elements.forEach(currentElement => currentElement && element.appendChild(currentElement));

        element.dispatchEvent(svgLoadedEvent);
    }
}
