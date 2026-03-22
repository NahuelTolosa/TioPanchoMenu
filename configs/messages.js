const messages = {
    header: {
        title: "Tío Pancho",
        subtitle: "¡El mejor sabor de la ciudad!"
    },
    // Categorías que aparecerán en el menú superior
    categories: [
        { id: "panchos", name: "🌭 Panchos" },
        { id: "hamburguesas", name: "🍔 Hamburguesas" },
        { id: "pizzas", name: "🍕 Pizzas" },
        { id: "bebidas", name: "🥤 Bebidas" }
    ],

    // Productos separados por categoría
    menu: {
        panchos: [
            { 
                img: "img/tio_pancho.png", 
                name: "Pancho Clásico", 
                price: "$1500", 
                desc: "Salchicha de Viena, pan artesanal, aderezos tradicionales y lluvia de papas." 
            },
            { 
                img: "img/tio_pancho.png", 
                name: "Super Pancho", 
                price: "$2200", 
                desc: "Salchicha alemana, panceta crocante, queso cheddar fundido y verdeo." 
            }
        ],
        hamburguesas: [
            { 
                img: "img/tio_hamburguesa.png", 
                name: "Doble Cheddar", 
                price: "$4500", 
                desc: "Doble medallón de carne 120g, doble queso cheddar, cebolla caramelizada y salsa secreta." 
            }
        ],
        pizzas: [
            { 
                img: "img/tio_pizza.png", 
                name: "Muzzarella", 
                price: "$5000", 
                desc: "Salsa de tomate casera, abundante queso muzzarella, orégano y aceitunas." 
            }
        ],
        bebidas: [
            { 
                img: "img/tio_bebida.png", 
                name: "Línea Coca-Cola 500ml", 
                price: "$1200", 
                desc: "Coca-Cola, Sprite, Fanta (Regular o Zero)." 
            }
        ]
    },
    footer: {
        title: "Tío Pancho - Menú Digital",
        address: "📍 Tu Dirección 123, Ciudad",
        phone: "📱 Whatsapp: +54 9 11 1234-5678"
    }
};