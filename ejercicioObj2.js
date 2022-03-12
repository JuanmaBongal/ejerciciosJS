function factura (client, elementos) {
    this.cliente = client;
    this.elementos = elementos;
    this.baseI = 0;
    this.iva = 21;
    this.fpago = "contado";
    this.total = function(){
        this.baseI = 0;
        for (let item of elementos){
            this.baseI += item.cantidad * item.precio;
        }
        return this.baseI*(1+(iva/100));
    }
}    
function cliente(nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
}
function elementos(descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
}

let cliente1 = new Cliente("Pepe", "calle sola 1", 654321987, "h12345f");
let factura1 = new facturav(cliente1,[]);
console.log(factura1.total());