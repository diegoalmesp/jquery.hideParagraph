/*
 * @name: hideParagraph plugin
 * @autor: Diego Almirón
 * @email: diegoalmesp@gmail.com
 *
 * A simple jQuery Plugin for animations on large paragraphs, you have to set
 * the icon or image to display and the clases to move it when animating
 */

// Old browsers Support
if(typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function P() {};
        P.prototype = obj;
        return new P();
    };
}

(function($, window, document, undefined) {

    var Paragraph = {

        /*
         * Init Method
         */
        init: function(options, elem) {
            var $elem = $(elem),
                self = this;
            self.options = $.extend( {}, $.fn.hideParagraph.options, options );

            $elem.each(function() {

                if ($elem.children().text().length > self.options.paragLength) {
                    var $this = $(this),
                        arrowDiv = self.options.arrow,
                        arrowDiv = $(arrowDiv).addClass(self.options.arrowDownClass),
                        paragHeight = $this.height();

                    $this.height(self.options.paragFixed).css('overflow', 'hidden');
                    $this.next().prepend(arrowDiv);
                    
                    $this.on('mouseenter', function() {
                        self.showup($this, paragHeight, self);
                    });
                }
            });
        },

        /*
         * On Mouse Enter Method
         */
        showup: function(obj, paragHeight, self) {
            var self = this;

            obj.stop().animate({
                height: paragHeight
            }, self.options.speed, 'linear', function() {
                if(self.options.arrowDownClass !== null && self.options.arrowUpClass !== null) {
                    obj.next().find('.'+self.options.arrowDownClass).removeClass(self.options.arrowDownClass).addClass(self.options.arrowUpClass);
                }
                self.hideup(obj, self);
            });
        },

        /*
         * On Mouse Leave Method
         */
        hideup: function(obj, self) {
            obj.on('mouseleave', function() {
                obj.stop().animate({
                    height: self.options.paragFixed
                }, self.options.speed, 'linear', function() {
                    if(self.options.arrowDownClass !== null && self.options.arrowUpClass !== null) {
                        obj.next().find('.'+self.options.arrowUpClass).removeClass(self.options.arrowUpClass).addClass(self.options.arrowDownClass);
                    }
                });
            });
        },
    };

    $.fn.hideParagraph = function(options) {
        return this.each(function() {
            var paragraph = Object.create(Paragraph);
            paragraph.init(options, this);
        });
    }

    $.fn.hideParagraph.options = {
        // speed of animation
        speed: 300,

        // the structure of the arrow
        arrow: '<i class="fa"></i>',

        // the class of the arrow down
        arrowDownClass: null, // without the dot '.'

        // the class of the arrow up
        arrowUpClass: null, // without the dot '.'

        // the length of the paragraph to be edited
        paragLength: 400,

        // the fixed paragraph height
        paragFixed: 100
    };

})(jQuery, window, document, undefined);