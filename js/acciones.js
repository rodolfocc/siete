// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function() {
$('#disp table td').eq(3).text(device.model);
$('#disp table td').eq(5).text(device.cordova);
$('#disp table td').eq(7).text(device.platform);
$('#disp table td').eq(9).text(device.version);
$('#disp table td').eq(11).text(device.uuid);
  document.addEvenListener("pause",function(){
      escribehistoria('la app se paus�');
 },false);//pause
document.addEvenListener("resume",function(){
      escribehistoria('la app se reinicio');
},false);//resume
  document.addEvenListener("online",function(){
      escribehistoria('la app se conecto a la red');
},false);//se conecto
document.addEvenListener("offline",function(){
      escribehistoria('la app se desconecto a la red');
},false);//se desconecto

},false);//ready device

});//document

function escribehistoria(accion) {
$('#eHistoria').append('<li>'+accion+'</li>');
}


