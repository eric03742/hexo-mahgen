/* global hexo */
'use strict';

const { Mahgen } = require('mahgen');

/**
 *
 * @param args{string[]}
 * @return Promise<string>
 */
function handler(args) {
    if(args === null || args === undefined || args.length <= 0) {
        return null;
    }

    const seq = args[0];
    return Mahgen.render(seq).then(src => {
        return `<img src="${src}" alt="${seq}">`;
    }).catch(err => {
        return "";
    });
}

hexo.extend.tag.register('mahgen', handler, {
    async: true
});