var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .use('../plugins/salestax-germany.js')
  .add('role:salestax-update',function(args,done){
    this.act('role:salestax',args,done)
  })
  .listen({
    type: 'beanstalk',
    pin:  'role:salestax-update',
    host: SRV_HOST
  })
