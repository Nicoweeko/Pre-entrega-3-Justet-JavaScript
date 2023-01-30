const shopContent = document.getElementById ("shopContent");
const verCarrito = document.getElementById ("verCarrito");
const modalContainer = document.getElementById ("modal-container");



let carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement ("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} USD </p>
    `;
    shopContent.append (content);

    let comprar = document.createElement ("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append (comprar); 

//// Escuchador de evento ///

    comprar.addEventListener ("click", () =>{
        carrito.push ({
            id: product.id,
            img: product.imng,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log (carrito);
        serverLocal ();
    });  
});



const serverLocal = () =>{
    localStorage.setItem ("carrito", JSON.stringify (carrito));
};

