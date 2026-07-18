// Minimal script for the country page: fill year, last modified and compute a simple windchill
(function(){
  function safe(id){return document.getElementById(id);}
  var y = new Date().getFullYear(); if(safe('year')) safe('year').textContent = y;
  if(safe('lastModified')) safe('lastModified').textContent = document.lastModified || '';
  var temp = 18; var wind = 12; // values shown in HTML
  // simple windchill formula approximation (Celsius)
  var wc = Math.round(13.12 + 0.6215*temp - 11.37*Math.pow(wind,0.16) + 0.3965*temp*Math.pow(wind,0.16));
  if(safe('windchill')) safe('windchill').textContent = wc + '°C';
})();
