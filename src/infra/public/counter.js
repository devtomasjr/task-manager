var iTimedCount = 0;

function timedCount() {
  onmessage = function(e) {
    iTimedCount = e.data;
  }
  iTimedCount = iTimedCount + 1;
  postMessage(iTimedCount);
  setTimeout("timedCount()",1000);
}

timedCount();