//未完成

function numberToChinese (num) {
  //判断数字合法
  if ( num > 99999 || num < 0 ) {
    return 'num error'
  }
  
  //单字中文转数字方法
  function numberToZh (numx) {
    if ( numx === 0) {
      return ''
    }
    let originNum = [0,1,2,3,4,5,6,7,8,9]
    let chineseNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    return chineseNum[originNum.indexOf(numx)]
  }
  
  let num1 = parseInt(num%100000/10000)  || ''
  let num2 = parseInt(num%10000/1000)    || ''
  let num3 = parseInt(num%1000/100)      || ''
  let num4 = parseInt(num%100/10)        || ''
  let num5 = parseInt(num%10/1)          || ''
  
  let zhNumber = ''
  
  zhNumber += numberToZh(num1) + '万' || ''
  zhNumber += numberToZh(num2) + '千' || ''
  zhNumber += numberToZh(num3) + '百' || ''
  zhNumber += numberToZh(num4) + '十' || ''
  zhNumber += numberToZh(num5) + ''   || ''
  
/*   for ( let i=0; i<) {
    
  }
  
  if ( num1 !== 0 ) {
    zhNumber += numberToZh(num1)
  } */
  
  return zhNumber
  
}

//numberToChinese(20876)