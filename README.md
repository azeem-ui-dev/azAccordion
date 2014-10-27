# azAccordion #

azAccordion is a jQuery plugin to build an accordion. View [ DEMO ](https://cdn.rawgit.com/azeem-ui-dev/azAccordion/master/index.html).

### Features ###

1. Supports dl, ul and div structure for accordion. See below for furthur instructions on HTML structure.
2. Classes are automatically assigned through jQuery. Only need to link azAccordion_styles.css and modify it accordingly.
3. Icons such as +/- to depict expand/collapse state can be included.
4. Includes various initial state and behaviour options.
5. Tested and works fine in Firefox v22, Chrome v28, Opera v12, Safari v5, IE9, IE8 and IE7.

### Config Options ###

1. initState -  closeAll (default) / openAll / openOne
   Defines what the initial state of accordion should be. If all the accordion panels should remain closed or open or if any one of the panel should be open.

2. behaviour - retainOthers (default) / collapseOthers
   Defines if previously opened panel should close when a new title is clicked.

3. showHideIcon - no (default) / yes
   Defines if an icon to depict expand/collapse state is to be included. If yes then image url need to be included for classes '.acc_image' and '.acc_active .acc_image'.   

4. activePanel - 0 (default)
   Defines panel number that needs to be open when initState is openOne. Starts with 0.

5. speed - 300 (default)
   Defines speed of slide transition in milliseconds.
   
### Usage ###

1. Structure your accordion with either lists or divs as shown in index.html file.

2. Include jquery.min.js, jquery.azAccordion.js and azAccordion_styles.css
   ```
   <link rel="stylesheet" type="text/css" href="azAccordion_styles.css" />
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
   <script type="text/javascript" src="../jquery.azAccordion.js"></script>
   ```
   
3. Include jQuery script to run on document ready which will configure the accordion
    ```
    <script type="text/javascript">
       $(function(){
         $('#dl').azAccordion();
         $('#div').azAccordion({initState: 'openOne', activePanel: 2, behaviour: 'collapseOthers', showHideIcon: 'yes', speed: 800});
       });
    </script>	
	```

### NOTES ###

1. Styles don't get applied when JS is disabled, because classes are assigned by the plugin. 
2. Supports only slide transition.
3. The anchor tag for accordion titles can be wrapped with appropriate heading tag if required.
4. Expand/Collapse icon is included as background image and not in the DOM.
5. Combination of initState:'openAll' and behaviour:'collapseOthers' does not make sense but is still available.    