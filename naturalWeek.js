// 获取年之间所有的自然周
function naturalWeek( year ) {
  var weeks = {}
  var eachWeek = []
  var index = 1
  var yearStart = new Date( year.toString() + '/1/1' ).valueOf()
  var yearEnd = new Date( (Number(year)+1).toString() + '/1/1' ).valueOf() - 1
  for ( var i=yearStart; i<yearEnd; i+=86400000 ) {
    var date = new Date(i).toLocaleDateString()
    var day = new Date(i).getDay()
    eachWeek.push( date )
    weeks[index] = eachWeek
    if ( day === 0 ) {
      index += 1
      eachWeek = []
    }
  }
  return weeks
}