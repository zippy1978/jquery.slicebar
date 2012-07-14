/*!
 * jQuery Slicebar - Slicebar plugin
 * Copyright(c) 2012 Gilles Grousset <gi.grousset@rgmail.com>
 *
 * http://github.com/zippy1978/jquery.slicebar
 */

(function( $ ) {
  $.fn.slicebar = function(options) {
  
     // Default options
    var settings = $.extend( {
      'max'         : 100,
      'slices' : [{ value : 20, color : 'red', style: 'plain', label : 'Slice 1'}, { value : 40, color : 'orange', style: 'plain', label : 'Slice 2'}, { value : 40, color : 'blue', style: 'plain', label : 'Slice 3'}]
    }, options);

    return this.each(function() {        

      var $this = $(this),
             data = $this.data('tooltip'),
             tooltip = $('<div />', {
               text : $this.attr('title')
             });
         
         // If the plugin hasn't been initialized yet
         if ( ! data ) {
         
           // Generate lables and bar containers
           $(this).addClass('slicebar');
           var labels = $('<div class="labels"/>'); 
           var bar = $('<div class="bar"/>');

           // Generate each slice and label
           $.each(settings.slices, function() {
            
                // Compute %
                var width = (this.value / settings.max) * 100;
                
                // Slice
                var sliceClass = 'slice';
                if (this.style == 'empty') {
                    sliceClass = 'empty';
                }
                var slice = $('<span class="' + sliceClass + '" style="width :' + width+ '%"></span>');
                
                if (this.style != 'empty') {
                    slice.css('background-color', this.color);
                }
                
                // Gradient is supported if xcolor plugin is loaded
                if($.xcolor && this.style == 'gradient') {
                    var lighterColor = $.xcolor.opacity(this.color, 'white', 0.5); //$.xcolor.webround(this.color);
                    slice.css('background-image', '-webkit-gradient(linear, left top, left bottom, from(' + lighterColor + '), to(' + this.color + '))');
                    slice.css('background-image', 'linear-gradient(top, ' + lighterColor + ', ' + this.color + ')');
                    slice.css('background-image', '-webkit-linear-gradient(top, ' + lighterColor + ', ' + this.color + ')');
                    slice.css('background-image', '-moz-linear-gradient(top, ' + lighterColor + ', ' + this.color + ')');
                    slice.css('background-image', '-ms-linear-gradient(top, ' + lighterColor +', ' + this.color + ')');
                    slice.css('background-image', '-o-linear-gradient(top, ' + lighterColor +', ' + this.color + ')');
                }

                bar.append(slice);
                
                // Label
                labels.append('<span style="width :' + width+ '%">' + this.label + '</span>');
              });
           
           // Append to element
           $(this).append(labels).append(bar);
           
           // Store options
           $(this).data('options', settings);

         }

    });

  };
})( jQuery );

