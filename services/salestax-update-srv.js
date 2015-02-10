
require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .use('../plugins/salestax-germany.js')
  .add('role:salestax-update',function(args,done){
    this.act('role:salestax',args,done)
  })
  .listen({type:'beanstalk',pin:'role:salestax-update'})
