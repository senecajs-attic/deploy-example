
var seneca = require('seneca')()

seneca.add({role:'salestax',cmd:'calculate'},function(args,done){
  var total = args.net * 1.20
  done( null, { total:total, tag:args.tag })
})

seneca.act({
  role: 'salestax',
  cmd:  'calculate',
  net:  100
})



