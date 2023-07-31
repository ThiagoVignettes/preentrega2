const carrito = [];

function mostrarProductos() {
    const productosDisponibles = [
        { id: 1, nombre: "New Body de Beaute", precio: 2500 },
        { id: 2, nombre: "Locion tonica reequilibrante", precio: 3000 },
        { id: 3, nombre: "Microesferas con vitamina C", precio: 5500 },
        { id: 4, nombre: "Multidefensa esencial de Beaute", precio: 9000 },
        { id: 5, nombre: "Gel de limpieza extrasuave", precio: 5500 },
        { id: 6, nombre: "Locion astrigente seborreguladora", precio: 2500 }
    ];

    let mensaje = "Productos disponibles:\n";
    productosDisponibles.forEach(producto => {
        mensaje += "ID: " + producto.id + ", Producto: " + producto.nombre + ", Precio: $" + producto.precio + "\n";
    });

    const seleccion = prompt(mensaje + "\nIngrese el ID del producto que desea agregar al carrito (o 'ESC' para salir):").toUpperCase();

    if (seleccion === 'ESC') {
        if (carrito.length === 0) {
            alert("No ha seleccionado ningún producto aún.");
            mostrarProductos();
        } else {
            mostrarProductosSeleccionados();
        }
    } else {
        const productoSeleccionado = productosDisponibles.find(producto => producto.id === parseInt(seleccion));
        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            mostrarProductos();
        } else {
            alert("ID de producto inválido. Por favor, ingrese un ID válido.");
            mostrarProductos();
        }
    }
}

function mostrarProductosSeleccionados() {
    let mensaje = "Productos seleccionados:\n";
    carrito.forEach(producto => {
        mensaje += "Producto: " + producto.nombre + ", Precio: $" + producto.precio + "\n";
    });

    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });

    const costoEnvio = 1500;
    const totalSinEnvio = total;
    const totalConEnvio = total + costoEnvio;

    let mensajeTotal = '';
    const respuestaDescuento = prompt("Productos seleccionados:\n" + carrito.map(producto => "Producto: " + producto.nombre + ", Precio: $" + producto.precio).join("\n") + "\n\nTotal sin envío: $" + totalSinEnvio + "\nTotal con envío: $" + totalConEnvio + "\n\n¿usted abonara en efectivo? en caso de que asi sea recibira un descuento del 50% (Responda 'SI' o 'NO')").toUpperCase();
    
    if (respuestaDescuento === 'SI') {
        total /= 2; 

        mensajeTotal = "Productos seleccionados:\n" + carrito.map(producto => "Producto: " + producto.nombre + ", Precio: $" + producto.precio).join("\n") + "\n\nTotal con envío (con descuento): $" + (total + costoEnvio) + "\nTotal sin envío (con descuento): $" + total;
    } else {
        mensajeTotal = "Productos seleccionados:\n" + carrito.map(producto => "Producto: " + producto.nombre + ", Precio: $" + producto.precio).join("\n") + "\n\nTotal con envío (sin descuento): $" + totalConEnvio + "\nTotal sin envío (sin descuento): $" + totalSinEnvio;
    }

    alert(mensajeTotal);
}

mostrarProductos();



