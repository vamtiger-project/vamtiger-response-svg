import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

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