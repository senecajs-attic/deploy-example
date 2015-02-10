"use strict";


module.exports = function salestax( options ) {

  var rate = 1 + (options.rate || 0)

  this.add('role:salestax,cmd:calculate',function(args,done){
    var total = args.net * rate
    done( null, { total:total, tag:args.tag })
  })

}
