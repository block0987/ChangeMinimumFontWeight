// ==UserScript==
// @name Change Minimum Font Weight
// @description  Overrides the minimum font weight value.
// @version      1.0
// @author       @block0987
// @match       *://*/*
// ==/UserScript==

const applyStylesToTextElements = () => {
    const elements = document.querySelectorAll("*:not(style, script, canvas, img, video, svg, [class*=image], [class*=img])");
    for (let i = 0; i < elements.length; i++) {
        const fontWeight = getComputedStyle(elements[i]).fontWeight;
        const fontSize = getComputedStyle(elements[i]).fontSize;
        // Set font-weight value
        if (fontSize >= 14 && fontWeight < 500) elements[i].style.fontWeight = 500;
        else if (fontWeight < 500) elements[i].style.fontWeight = 400;
    }
}

applyStylesToTextElements();
setInterval(applyStylesToTextElements, 1500);