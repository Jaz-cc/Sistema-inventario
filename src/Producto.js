
// Programa para representar un producto

// Datos del producto
let producto = {
    codigo: "P001",
    nombre: "Laptop HP",
    precio: 12500.00,
    existencia: 15
};

// Función para mostrar la información del producto
function mostrarProducto() {
    console.log("===== INFORMACIÓN DEL PRODUCTO =====");
    console.log("Código del producto: " + producto.codigo);
    console.log("Nombre del producto: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
    console.log("Existencia en inventario: " + producto.existencia);
}

// Llamada a la función
mostrarProducto();
