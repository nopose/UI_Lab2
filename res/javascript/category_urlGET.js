function readURL() {
  var queryStr = window.location.search; // will give you ?sndReq=234

  if (queryStr.includes('?')) {
    var paramPairs = queryStr.substr(1).split('&');

    var params = 0;
    for (var i = 0; i < paramPairs.length; i++) {
      var parts = paramPairs[i].split('=');
      params = parts[1];
    }

    writeBooks(0, params);
  }
}
