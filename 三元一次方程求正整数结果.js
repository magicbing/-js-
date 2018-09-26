// 5X + 3Y + Z/3 = 100 x，y，z都是正整数，求一共有多少种可能？
/*
15X + 9Y + Z = 300

*/

function getN(x, y, z, sigma) {

  let n = 0

  for ( let i=1; i<(sigma/x+1); i++ ) {
    for ( let j=1; j<(sigma/y+1); j++ ) {
      for ( let k=1; k<(sigma/z+1); k++ ) {
        if ( x*i + y*j + z*k === sigma ) {
          console.log(i + ',' +  j + ',' + k)
          n = n + 1
        }
      }
    }
  }

  return n
}