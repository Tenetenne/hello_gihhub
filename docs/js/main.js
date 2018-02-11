(function(){
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click', function(){
    if (isStarted === true){
      return;
    }
    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = ' ';
    result.textContent = '0.000';
    result.className = 'standby';
  });

  stop.addEventListener('click', function(){
    var elapsedTime;
    var diff;
    if (isStarted === false){
      return;
    }
    isStarted = false;
    elapsedTime = (Date.now() - startTime) /1000;
    // elapsedTime = 4.89;
    result.textContent  = elapsedTime.toFixed(3);
    this.className = 'pushed';
    start.className = ' ';
    result.className =' ';
    diff = elapsedTime - 5.0;
    if (diff > -0.1 && diff < 0.1){    // Math.abs(diff) < 1.0
        result.className = 'perfect';
    } else if (diff > -1.0 && diff < 1.0){    // Math.abs(diff) < 1.0
        result.className = 'good';
    }
  });
})();
