"use strict";

var APP_PORT = process.env.APP_PORT || 3000
var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

var seneca = require('seneca')()
      .use('beanstalk-transport')
      .use('./api.js')
      .client({
        type: 'beanstalk',
        pin:  'role:salestax,cmd:*',
        host: SRV_HOST
      })

var app = require('express')()
      .use( seneca.export('web') )
      .listen( APP_PORT )

