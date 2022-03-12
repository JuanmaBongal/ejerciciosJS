/**
 * -Crea una clase que llamaremos Bus. Sus atributos serán:
-capacidad: número máximo de pasajeros
-pasajeros: número de pasajeros (inicialmente 0)
-conductor: objeto conductor.
-Sus métodos
-subir(pasajeros): aumenta el numero de pasajeros
-bajar(pasajaeros): disminuye el número de pasajeros
-conductor: asigna un objeto conductor.
-El ojeto conductor es de una clase (Conductor) cuyos atributos son:
-nombre: nombre del conductor
-licencia: un número que identifica al condcutor.
-Al crear el objeto se asigna también el conductor
-No pueden subir más pasajeros que los máximos admitidos y no pueden 
bajar más de los que hay.
 */
console.clear();

function bus (capacidad, conductor){
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
    conductor.bus = this;
    
    this.subir = function(subenpasajeros){
        if ((this.pasajeros+subenpasajeros) <= this.capacidad){
            this.pasajeros += subenpasajeros;
        }
    }
    this.bajar = function(bajanpasajeros){
        if ((this.pasajeros-bajanpasajeros) >= 0){
            this.pasajeros -= bajanpasajeros;
        }
    }
    this.asignarConductor = function(conductor){
        this.conductor.bus = null;
        this.conductor = conductor;
        this.conductor.bus = this;
    }
}

function conductor (nombre, licencia){
    this.nombre = nombre;
    this.licencia = licencia;
    this.bus =null;
}

let conductor1 = new conductor("pepe", "L123");
let conductor2 = new conductor("Ana", "L456");
let bus1 = new bus(25, conductor1);
let bus2 = new bus(30, conductor1);
bus1.subir (8);
bus1.bajar (4);
bus2.subir (21);
bus2.bajar (8);
bus1.asignarConductor(conductor2);
bus2.asignarConductor(conductor1);

console.log (bus1);
console.log (bus2);
