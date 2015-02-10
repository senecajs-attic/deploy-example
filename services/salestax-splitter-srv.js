var SRV_HOST = process.env.SRV_HOST || '127.0.0.1'

require('seneca')()
  .use('beanstalk-transport')
  .use('../plugins/splitter.js')

  .listen({
    type: 'beanstalk',
    pin:  'role:salestax,cmd:*',
    host: SRV_HOST
  })

  .client({
    type: 'beanstalk',
    pin:  'role:salestax-current',
    host: SRV_HOST
  })

  .client({
    type: 'beanstalk',
    pin:  'role:salestax-update',
    host: SRV_HOST
  })
