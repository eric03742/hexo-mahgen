/* global hexo */
'use strict';

/**
 *
 * @param args{string[]}
 * @return string
 */
function handler(args) {
    if(args === null || args === undefined || args.length <= 0) {
        return "";
    }

    return `<mah-gen data-seq="${args[0]}"}"></mah-gen>`;
}

hexo.extend.tag.register('mahgen', handler);

hexo.extend.injector.register('body_end', '<script src="https://unpkg.com/mahgen/dist/index.umd.js">');