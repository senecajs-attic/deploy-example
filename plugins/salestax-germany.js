"use strict";


module.exports = function salestax( options ) {

  var rate = 1.19

  this.add('role:salestax,cmd:calculate,country:de',function(args,done){

    if( 'food' == args.category ) {
      rate = 1.07
    }

    var total = args.net * rate
    done( null, { total:total, tag:args.tag })
  })

}
