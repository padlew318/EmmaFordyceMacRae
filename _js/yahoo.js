/*
code taken from page and added to external js file
*/
    var $D  =  YAHOO.util.Dom;
        var $E  =  YAHOO.util.Event;
        var $A  =  YAHOO.util.Anim;
        var $M  =  YAHOO.util.Motion;
        var $EA =  YAHOO.util.Easing;
        var $DD =  YAHOO.util.DD;
        var $C  =  YAHOO.util.Connect;
        var $   =  $D.get;
        YAHOO.namespace ("Smb.Asteroids.Logger");
        YAHOO.Smb.Asteroids.Logger = {
               Log : function(e) {
                       if (typeof console !== 'undefined') {
                               console.log(e);
                       }
               }
        }
        var $LOG = YAHOO.Smb.Asteroids.Logger.Log;