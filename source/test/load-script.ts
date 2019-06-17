import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
const url = 'vamtiger-responsive-svg.js.json.js';
const selector = `script[src="${url}"], script[data-name="${url}"]`;

export default () => describe('vamtiger-responsive-svg', function () {
    before(async function () {
        await loadScript({
            src: url
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector(selector);

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});