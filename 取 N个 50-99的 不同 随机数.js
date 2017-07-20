//取 N个 50>= x > 99的 不同 随机数

function getRandom (n) {
  //定义50-98的数组
  let array = []
  for (let i=50; i<99; i++) {
    array.push(i)
  }
  
  let outputArray = []
  
  for (let i=0; i<n; i++) {
    //取 数组中的 随机数
    let randomNum
    randomNum = array[Math.floor( Math.random() * array.length )]
    //把 取的数 填入输出数组
    outputArray.push(randomNum)
    //把 数组取的数字 去掉
    array.splice( array.indexOf(randomNum), 1 )
    //循环N次
    
  }
  
  return outputArray
}