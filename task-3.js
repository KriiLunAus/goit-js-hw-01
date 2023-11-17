`use strict`

function getElementWidth(content, padding, border) {

    content = Number(content.replace(/px/, ""));
    padding = Number(padding.replace(/px/, ""));
    border = Number(border.replace(/px/, ""));
    const width = Number(content) + Number(padding)*2 + Number(border)*2;
    return width;




    
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

//  return `${((content.replace(/px/, ""))) + ((padding.replace(/px/, "")*2)) + ((border.replace(/px/, "")*2))};`