let age = 10
function calcAge (n) {
  //计算 第n个人 几岁  第二个人比前一个人 大 2岁
  //递归
  //第一个人 10岁
  
  if ( n < 2 ) {
    return 'n error'
  }
  

  age += 2
  
  
  if ( (n-1) === 1 ) {
    return age
  }
  
  return  calcAge(n-1)
}
