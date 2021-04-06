
var autodata = document.getElementById("select-modelo");
var optionsauto = [ 'Mobi', 'Uno', 'Argo','Platio Adventure','Fiat 500L' ];
optionsauto.forEach(function(element,key) {
    autodata[key] = new Option(element,key);
});

var versiondata = document.getElementById("select-version");
var optionver = [ 'version 1', 'version 2', 'version 3','version 4','version 5' ];
optionver.forEach(function(element,key) {
    versiondata[key] = new Option(element,key);
});


var edodata = document.getElementById("select-edo");
var optionedo = [ 'Aguascalientes', 'Baja California','Baja California Sur', 'Campeche','Chiapas','Chihuahua','Coahuila','Colima','Ciudad de México','Durango','Estado de México','Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora' ,'Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'];
optionedo.forEach(function(element,key) {
    edodata[key] = new Option(element,key);
});


var distriuidordata = document.getElementById("select-distribuidor");
var optiondistrbidor = [ 'Distribuidor 1', 'Distribuidor 2', 'Distribuidor 3','Distribuidor 4','Distribuidor 5' ];
optiondistrbidor.forEach(function(element,key) {
    distriuidordata[key] = new Option(element,key);
});

var plazosdata = document.getElementById("select-pago-plazo");
var optionplazos = [ '72 MESES', '60 MESES', '48 MESES','36 MESES','24 MESES' ,'18 MESES','12 MESES'];
optionplazos.forEach(function(element,key) {
    plazosdata[key] = new Option(element,key);
});