import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-responsive-svg', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-responsive-svg.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-responsive-svg.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});