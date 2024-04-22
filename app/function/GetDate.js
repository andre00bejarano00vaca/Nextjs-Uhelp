// Obtener la fecha y hora actual
function  getDateTime() { 
    var fechaActual = new Date();

// Obtener el año, mes y día
var año = fechaActual.getFullYear();
var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses se cuentan desde 0, por lo que se suma 1
var dia = fechaActual.getDate().toString().padStart(2, '0'); // Agregar 0 delante si es necesario


// Obtener la hora, los minutos, los segundos y los milisegundos
var hora = fechaActual.getHours();
var minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Agregar 0 delante si es necesario
var segundos = fechaActual.getSeconds().toString().padStart(2, '0'); // Agregar 0 delante si es necesario
var milisegundos = fechaActual.getMilliseconds().toString().padStart(3, '0'); // Agregar 0 delante si es necesario

// Mostrar los resultados
var id = `${año}${mes}${dia}${hora}${minutos}${segundos}${milisegundos}`;
    return id;
}
export default getDateTime;