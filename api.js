"use strict";


module.exports = function api( options ) {

  this.add('role:api,path:ping',function(args,done){
    done(null,{pong:Date.now(),version:2})
  })

  this.add('role:api,path:salestax',function(args,done){
    this.act('role:salestax,cmd:calculate',{
      net:args.net,
      tag:args.tag,
      country:args.country,
      category:args.category,
    },done)
  })

  this.act('role:web',{use:{
    prefix: '/api',
    pin:    'role:api,path:*',
    map: {
      ping:     true,
      salestax: true,
    }
  }})
}
