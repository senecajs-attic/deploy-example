
require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/splitter.js')
  .listen({type:'beanstalk',pin:'role:salestax,cmd:*'})
  .client({type:'beanstalk',pin:'role:salestax-current'})
  .client({type:'beanstalk',pin:'role:salestax-update'})
