var tiempo;  
var costoMinuto;
var precioLlamada;
         
tiempo=prompt("Ingrese la cantidad de minutos : ","");
costoMinuto=prompt("Ingrese el costo por minuto : ","");
precioLlamada= (parseInt(tiempo) * parseInt(costoMinuto));

window.alert("El precio de llamada es : " + precioLlamada);
	