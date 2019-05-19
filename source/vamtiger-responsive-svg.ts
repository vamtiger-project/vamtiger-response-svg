import constructor, { name } from './element';

const { VamtigerBrowserMethod } = window;
const { defineCustomElement } = VamtigerBrowserMethod;

defineCustomElement({
    name,
    constructor
});