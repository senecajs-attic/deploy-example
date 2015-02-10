"use strict";

var APP_PORT = process.env.APP_PORT || 3000

var seneca = require('seneca')()
      .use('./api.js')
      .client()

var app = require('express')()
      .use( seneca.export('web') )
      .listen( APP_PORT )

