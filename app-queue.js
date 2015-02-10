"use strict";

var APP_PORT = process.env.APP_PORT || 3000

var seneca = require('seneca')()
      .use('beanstalk-transport')
      .use('./api.js')
      .client({type:'beanstalk',pin:'role:salestax,cmd:*'})

var app = require('express')()
      .use( seneca.export('web') )
      .listen( APP_PORT )

