var util = require('util')
var seen = {}
module.exports = {
  timeout:2222,
  log:{map:[{level:'debug+',handler:function(){
    var d = arguments[9] || {}
    if( 'act' == arguments[3] && 
        ( ('IN' == arguments[6] && ('api' == d.role || (d.role||'').match(/^salestax/ ) ) ) || 
          seen[arguments[7]]
        ) )
    {
      console.log( [arguments[6],
                    arguments[7].substring(0,4),
                    util.inspect(arguments[9])].join('\t') )
      seen[arguments[7]] = !seen[arguments[7]]
    }
  }}]}
}
