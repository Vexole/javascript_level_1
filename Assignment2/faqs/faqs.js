"use strict";
var $ = function (id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function () {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // get the list of h2 elements
    var h2Elements = faqs.getElementsByTagName("h2");
    /*
        loop through all h2 elements and remove the attribute for h2 and div which is not clicked
        or lies inside the clicked element
     */
    for (var i = 0; i < h2Elements.length; i++) {
        // check if the current element in loop is not equal to the clicked element
        if (this !== h2Elements[i]) {
            // remove the class attribute from the current element in the loop
            h2Elements[i].removeAttribute('class');
            /*
                get the next sibling of the current element in the loop and remove the class 
                attribute from the current element in the loop
            */
            h2Elements[i].nextElementSibling.removeAttribute('class');
        }
    }

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};

window.onload = function () {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
};
