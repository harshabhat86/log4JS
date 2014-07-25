/*
 * 
 @author Harsha Bhat @harshabhat86
 Inspired by @mrdoob 's Logger.js.
 Due credits to him. Here's the link to his repo incase you are interested.
 https://github.com/mrdoob/logger.js
 
 Just want to make it a little more useful.
 
 Plans :
 1) Include different log formats and colors for them.
 2) Make log availability more easy and magical (dont know what that means)
 3) Try n make it async! (yes, in js)
 4) Option to save the log to a file (Export it real quick).
 
 */

var Log4js = function () {

	this.domElement = document.createElement( 'div' );
    
    if(document.getElementById("Log4js")){
        this.domElement.id = "Log4js"; // Yes, InitCap!
    } else {
        console.warn("Cannot Use Log4js as an element with ID 'Log4js' already exists.");
        return;
    }
    
	this.domElement.style.fontFamily = 'Helvetica, Arial, sans-serif';
	this.domElement.style.textAlign = 'left';
	this.domElement.style.fontSize = '10px';
	this.domElement.style.padding = '2px 0px 3px 0px';
    this.domElement.style.position = 'fixed';
//    this.domElement.style.right = '20em';
//    this.domElement.style.top = '20em';
//    

	this.log = function ( msg, expand ) {

		this.domElement.appendChild( document.createTextNode( msg ) );
		this.domElement.appendChild( document.createElement( 'br' ) );

		if ( expand && msg instanceof Object ) {

			for ( var param in msg ) {

				this.domElement.appendChild( document.createTextNode( '- ' + param + ': ' + msg[ param ] ) );
				this.domElement.appendChild( document.createElement( 'br' ) );

			}

		}

	};
    
    /*
    Error is marked in RED... Should it stop execution? No according to me, because I dont know if the user wants that
    */
    this.error = function ( msg, expand ) {
        err = document.createElement('span');
        err.style.color = 'RED';
        err.appendChild(document.createTextNode( msg ));
		this.domElement.appendChild( err );
		this.domElement.appendChild( document.createElement( 'br' ) );

		if ( expand && msg instanceof Object ) {

			for ( var param in msg ) {
                err.appendChild(document.createTextNode( '- ' + param + ': ' + msg[ param ] ) );
                err.appendChild( document.createElement( 'br' ) );
				
			}
            this.domElement.appendChild( err);

		}

	};
    
     /*
    Warning is marked in Orange... 
    */
    this.warning = function ( msg, expand ) {
        err = document.createElement('span');
        err.style.color = 'rgb(239, 147, 24)';
        err.appendChild(document.createTextNode( msg ));
		this.domElement.appendChild( err );
		this.domElement.appendChild( document.createElement( 'br' ) );

		if ( expand && msg instanceof Object ) {

			for ( var param in msg ) {
                err.appendChild(document.createTextNode( '- ' + param + ': ' + msg[ param ] ) );
                err.appendChild( document.createElement( 'br' ) );
				
			}
            this.domElement.appendChild( err);

		}

	};
    
      /*
    message is marked in green... 
    */
    this.message = function ( msg, expand ) {
        err = document.createElement('span');
        err.style.color = 'green';
        err.appendChild(document.createTextNode( msg ));
		this.domElement.appendChild( err );
		this.domElement.appendChild( document.createElement( 'br' ) );

		if ( expand && msg instanceof Object ) {

			for ( var param in msg ) {
                err.appendChild(document.createTextNode( '- ' + param + ': ' + msg[ param ] ) );
                err.appendChild( document.createElement( 'br' ) );
				
			}
            this.domElement.appendChild( err);

		}

	};
    

	this.clear = function () {

		while ( this.domElement.childNodes.length > 0 ) {

			this.domElement.removeChild( this.domElement.childNodes[ 0 ] );

		}

	};

};
