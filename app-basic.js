"use strict";

var APP_PORT = process.env.APP_PORT || 3000
var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

var seneca = require('seneca')()
      .use('./api.js')
      .client({host:SRV_HOST})

var app = require('express')()
      .use( seneca.export('web') )
      .listen( APP_PORT )

