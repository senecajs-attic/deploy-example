var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/salestax-basic.js',{rate:0.2})
  .use('../plugins/salestax-germany.js')
  .listen({
    type: 'beanstalk',
    pin:  'role:salestax,cmd:*',
    host: SRV_HOST
  })
