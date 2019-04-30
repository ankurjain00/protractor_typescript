import {Config} from "protractor";

export let config:Config = {
    directConnect:true,
    specs: ['testspec.js'],
    jasmineNodeOpts: {
        showColors: true,
    },

};