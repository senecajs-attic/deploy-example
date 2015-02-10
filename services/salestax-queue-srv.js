
require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .listen({type:'beanstalk',pin:'role:salestax,cmd:*'})
