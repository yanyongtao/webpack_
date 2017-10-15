window.onload=function () {
    var a = require('./a')
    var oDiv = document.getElementById('div1');
    require('./style.css');

    oDiv.innerHTML = '<h3>welcome</h3>' + a;
// document.write(a)
}