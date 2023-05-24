/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NoddeList} $elements Nodelist
 * @param {String} $elements Event type string
 * @param {Function} $elements Callback function
 * 
 */

window.addEventOnElements = ($elements, everType, callback) => {
    for(const $element of $elements){
        $element.addEventListener(everType, callback);
    }
}