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
                name: "Tio Pancho", 
                price: "$15.000", 
                desc: "El mas grande de la ciudad! Pancho de 70 centimetros con aderezos y papas." 
            },
            { 
                img: "img/tio_pancho.png", 
                name: "Tio Pancho a la Pizza", 
                price: "$17.000", 
                desc: "Pancho de 70 centimetros con salsa de tomate, muzzarella y oregano." 
            },
            { 
                img: "img/tio_pancho.png", 
                name: "Tio Pancho a la Bondiola", 
                price: "$17.000", 
                desc: "Pancho de 70 centimetros con bondiola desmechada." 
            },
        ],
        hamburguesas: [
            { 
                img: "img/tio_hamburguesa.png", 
                name: "Doble Cheddar", 
                price: "$8.000", 
                desc: "Medallón de carne, lechuga, tomate, huevo y aderezos a eleccion." 
            }
        ],
        pizzas: [
            { 
                img: "img/tio_pizza.png", 
                name: "Muzzarella", 
                price: "$10.000", 
                desc: "Pizza a la piedra con salsa de tomate, queso muzzarella y orégano." 
            }
        ],
        bebidas: [
            { 
                img: "img/tio_bebida.png", 
                name: "Línea Coca-Cola 500ml", 
                price: "$1200", 
                desc: "Consultar disponibilidad." 
            }
        ]
    },
    footer: {
        title: "Tío Pancho - Menú Digital",
        address: "📍 Alvarado 2045, Mar del Plata"
    }
};