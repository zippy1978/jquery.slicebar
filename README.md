Slicebar is a jQuery plugin that makes creation of 'multiple value progress bar' easy.
See it in action [here](http://dl.dropbox.com/u/26978903/slicebar/index.html).

## Basic use

Call .slicebar() on any div selector to enable the slicebar. When no data are provided, default one are used.

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $('#slicebar1').slicebar();
   });
</script>
```
## Providing data

Use options to provide a data model to the slicebar. max allows you to set the bar max value, then slices can be defined.

A slice can have the following properties :

* value : the value of the slice.
* label : the label of the slice.
* color : the color of the slice.
* style : the style of the slice, can be : plain (plain color), gradient (gradient color, [xcolor](https://github.com/infusion/jQuery-xcolor) plugin must be loaded) or empty (empty slice)

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
      $('#slicebar2').slicebar({
        max : 100,
        slices : [
            {
                value: 20,
                label : 'Green plain slice',
                color : 'green',
                style : 'plain'
            },
             {
                value: 20,
                label : 'Emtpy',
                style : 'empty'
            },
            {
                value: 40,
                label : 'Orange gradient slice',
                color : 'orange',
                style : 'gradient'
            }
        ]
    });
   });
</script>
```

## Styling

Styles are defined in the provided jquery.slicebar.css stylsheet. It if fairly easy to override them. Styles are :

* .slicebar : container style.
* .slicebar .bar : bar style.
* .slicebar .bar .slice : common slice style.
* .slicebar .labels : labels style.