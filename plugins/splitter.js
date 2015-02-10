"use strict";

var _ = require('lodash')

module.exports = function salestax( options ) {

  var log = {}

  this.add('role:salestax,cmd:calculate',function(args,done){

    var actid = args.actid$
    log[actid] = {c:{},u:{}}

    args = this.util.clean(_.clone(args))

    this.act('role:salestax-current,tag:current',args,function(err,out){
      log[actid].c = {args:args,out:out||{},err:err}
      print(actid)
      done(err,out)
    })

    this.act('role:salestax-update,tag:update',args,function(err,out){
      log[actid].u = {args:args,out:out||{},err:err}
      print(actid)
    })
  })

  function print( actid ) {
    if( log[actid] && log[actid].c.out && log[actid].u.out ) {
      console.log( 'COMPARE', 
                   actid.substring(0,4), 
                   log[actid].c.out.total == log[actid].u.out.total )
    }
  }
}
