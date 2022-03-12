/**
 * -Crear un script que defina un objeto llamado Producto_alimenticio.
-Este objeto debe presentar las propiedades código, nombre y precio, además 
del método imprimeDatos, el cual escribe por pantalla los valores de sus 
propiedades.
-Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los 
valores de los tres objetos instanciados
 */
console.clear()
function producto_alimenticio(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function(){
        console.log(`Còdigo: ${this.codigo} -- Nombre: ${nombre} -- Precio: ${precio}`);
    }
}

let papas = new producto_alimenticio(101, "Papa", 5);
let batata = new producto_alimenticio(102, "Batata", 3);
let zanahoria = new producto_alimenticio(103, "Zanahoria", 4);

const ListaDeProductos = [papas, batata, zanahoria];

for (let producto of ListaDeProductos){
    producto.imprimeDatos();
}