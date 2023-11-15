`use strict`

function getElementWidth(content, padding, border) {
    return `${content + (padding*2)+ (border*2)}`
}

console.log(getElementWidth("50px", "8px", "4px"));


