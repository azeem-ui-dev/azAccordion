/*!
 * azAccordion - v1.0.0 - 2013-08-02
 * https://github.com/azeem-ui-dev/azAccordion/
 * Copyright (c) 2013 Mohammed Azeemulla
 * Licensed MIT (https://raw.github.com/azeem-ui-dev/azAccordion/master/license.txt)
 */

/* Utility */
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}
(function($) {
    var Accordion = {
  	/* Initialize object, options, function calls and events */
        init: function(elem, options) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.azAccordion.options, options);
            self.assignClasses();
            self.setState();
            self.$elem.on('mouseenter', '.acc_title', function(){$(this).addClass('acc_hover');});
            self.$elem.on('mouseleave', '.acc_title', function(){$(this).removeClass('acc_hover');});
            self.$elem.on('click', '.acc_title', {options: self.options}, self.showDetail);
        },
		/* Assign CSS classes and show expand-collapse icon if specified */
        assignClasses: function() {
            var self = this;
            self.$elem.addClass('azAccordion');
            self.$elem.children().each(function(index){                  
                if(index%2==0) {
                    $(this).addClass('acc_title');
                }
                else {
                    $(this).addClass('acc_desc');
                }                
            });			
            if(self.$elem.is('div')) {
                self.$elem.find('.acc_title').each(function() {
                    $(this).wrap('<div class="acc_item" />');
                });
                self.$elem.find('.acc_desc').each(function() {
                    $(this).appendTo($(this).prev('.acc_item'));
                });        
            };
            if(self.options.showHideIcon == 'yes') {
                self.$elem.find('.acc_title').each(function(){$(this).prepend('<span class="acc_image"></span>');});
            }
        },
		/* Set the initial accordion state to default/specified options */
        setState: function() {
            var self = this;
            var state = self.options.initState;            
            switch(state) {
                case 'openOne':
                    self.$elem.find('.acc_desc').each(function(){$(this).hide();});   
                    self.$elem.find('.acc_desc').eq(self.options.activePanel).show();
                    self.$elem.find('.acc_title').eq(self.options.activePanel).addClass('acc_active');
                    break;
                case 'openAll':
                    self.$elem.find('.acc_desc').each(function(){$(this).show();});
                    self.$elem.find('.acc_title').each(function(){$(this).addClass('acc_active');});                 
                    break;
                case 'closeAll':
                    self.$elem.find('.acc_desc').each(function(){$(this).hide();});
                    break;
            }
        },
		/* Display content after title is clicked */
        showDetail: function(event) { 
			event.preventDefault();
            var title_ele = $(this);
			var currTitle = title_ele.prevAll('.acc_title').length;
			/* toggle clicked section */
			if(title_ele.next().is(':visible')) {
				title_ele.removeClass('acc_active');
			}
			else {
				title_ele.addClass('acc_active');
			}
			title_ele.stop(true).next()['slideToggle'](event.data.options.speed);	
            /* close other open sections except the clicked one */
			if(event.data.options.behaviour == 'collapseOthers') {
				title_ele.closest('.azAccordion').find('.acc_desc').each(function(index){
					if(index != currTitle) {
						if($(this).is(':visible')) {
							$(this).stop(true)['slideUp'](event.data.options.speed);
							$(this).prev('.acc_title').removeClass('acc_active');
						}
					}
				});
			}                         
        }
    }
    $.fn.azAccordion = function(options) {
        return this.each(function(){
            var accordion = Object.create(Accordion);
            accordion.init(this, options);
        });
    };
    $.fn.azAccordion.options = {
        initState: 'closeAll', /* openAll, closeAll, openOne */
        activePanel: 0, 
        behaviour: 'retainOthers', /* retainOthers, collapseOthers */
        showHideIcon: 'no', /* yes, no */
        speed: 300
    }
})(jQuery);
