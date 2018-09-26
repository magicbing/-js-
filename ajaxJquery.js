let $ = {}

$.ajax = function ( params ) {
  let type = params.type.toUpperCase() || 'GET'
  let url = params.url
  let async = params.async
  let data = params.data || ''
  function $params(obj) {
    var str = [];
    for (var p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  }
  if ( typeof data === "object" ) {
    data = $params(params.data)
  }

  let success = params.success
  let error = params.error

  // console.log(type)
  // console.log(url)
  // console.log(async)
  // console.log(data)
  // console.log(success)
  // console.log(error)

  let xhr = new XMLHttpRequest();
  if ( type === 'GET' ) {
    //get

    xhr.open('get', url + data, async);
    xhr.send();
    console.log(1)
    xhr.onreadystatechange = function () {
      if (xhr.readyState==4 &&xhr.status==200) {
  　　　　success
    　} else {
        if( error ){
          error()
        }
      }
    }
  } else if ( type === 'POST' ) {
    //post
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.open('post', url, async);
    xhr.send( data );
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        success
      } else {
        if( error ){
          error()
        }
      }
    }
  }
}