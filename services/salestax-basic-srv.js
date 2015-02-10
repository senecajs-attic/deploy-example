
require('seneca')()
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .listen()
