// Lista de productos
let productos = [
    {
        codigo: "P001",
        nombre: "Laptop HP",
        precio: 12500,
        existencia: 15
    },
    {
        codigo: "P002",
        nombre: "Mouse Logitech",
        precio: 350,
        existencia: 20
    },
    {
        codigo: "P003",
        nombre: "Teclado Mecánico",
        precio: 850,
        existencia: 10
    }
];

// Función para mostrar la información del producto
function mostrarProducto(producto) {
    console.log("===== INFORMACIÓN DEL PRODUCTO =====");
    console.log("Código: " + producto.codigo);
    console.log("Nombre: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
    console.log("Existencia: " + producto.existencia);
}

// Función para buscar productos por código
function buscarProducto(codigo) {
    let productoEncontrado = productos.find(
        producto => producto.codigo === codigo
    );

    if (productoEncontrado) {
        console.log("Producto encontrado:");
        mostrarProducto(productoEncontrado);
    } else {
        console.log("No se encontró ningún producto con el código: " + codigo);
    }
}

// Mostrar todos los productos
productos.forEach(producto => mostrarProducto(producto));

// Buscar un producto
buscarProducto("P002");
