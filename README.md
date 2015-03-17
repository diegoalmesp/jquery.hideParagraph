#hideParagraph jQuery Plugin#

**hideParagraph** is a simple animated jquery plugin hide a portion of a big paragraph. Is built in a way that will search for every p tag inside a div, and if the length is < to something, it will hide a portion, and unhide on mouseover

##Version##
0.1.0

##Install##
Just download the **hide-paragraph.js** file or you can do it through npm too:

    npm install hideParagraph

##Usage##
    $('.your-div-container-of-paragraph').hideParagraph({
        speed: 300, // optional
        arrow: '<i class="fa chevron-style"></i>',
        arrowDownClass: 'fa-chevron-down', // optional
        arrowUpClass: 'fa-chevron-up', // optional
        paragLength: 300, // optional
        paragFixed: 106 // optional
    });

##Required libraries##
jQuery - [http://jquerycom](http://jquerycom)

##License##
MIT License