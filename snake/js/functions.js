function verifyMobile() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && connection.type === 'cellular') {
      document.getElementById("divDirection").style.display = "block";
    }

    else if (navigator.userAgent.match(/Mobi/)) {
      document.getElementById("divDirection").style.display = "block";
    }
    
    else if ('screen' in window && window.screen.width < 1366) {
      document.getElementById("divDirection").style.display = "block";
    }
    else {
      document.getElementById("divDirection").style.display = "none";
    }
  }