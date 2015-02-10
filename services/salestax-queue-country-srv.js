
require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .use('../plugins/salestax-germany.js')
  .listen({type:'beanstalk',pin:'role:salestax,cmd:*'})
