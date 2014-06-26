log4JS
======

####A simple Javascript logging console for one for all... include lib, start logging####


### Usage ###

```html
<script src="Log4js.js"></script>
<script>

	var log4js = new Log4js();
	document.body.appendChild( log4js.domElement );

	log4js.log( 'A simple log' );
    log4js.error( 'Error is in RED' );
    log4js.warning( 'Warnings are in Orange' );
    log4js.message( 'Messages are in Green' );

</script>
```

##Plans :
 1) Include different log formats and colors for them.
 2) Make log availability more easy and magical (dont know what that means)
 3) Try n make it async! (yes, in js)
 4) Option to save the log to a file (Export it real quick).


##Inspiration
Inspired by @mrdoob 's Logger.js
Find it [here](https://github.com/mrdoob/logger.js).

Due credits to the author of [Logger.js](https://github.com/mrdoob/logger.js).


 
 ##License
 MIT License.
 Get more info about [MIT License](http://opensource.org/licenses/MIT)