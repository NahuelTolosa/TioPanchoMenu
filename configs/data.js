const messages = {
    header: {
        title: "Tío Pancho",
        subtitle: "¡El mejor sabor de la ciudad!"
    },
    // Categorías que aparecerán en el menú superior
    categories: [
        { id: "tioPancho", name: "🌭 Tío Pancho" },
        { id: "superPancho", name: "🌭 Súper Pancho" },
        { id: "panchito", name: "🌭 Panchito" },
        { id: "hamburguesas", name: "🍔 Hamburguesas" },
        { id: "pizzas", name: "🍕 Pizzas" },
        { id: "bebidas", name: "🥤 Bebidas" }
    ],

    // Productos separados por categoría
    menu: {
        tioPancho: [
            { 
                img: "img/tio_pancho.png", 
                name: "Tío Pancho Clásico", 
                price: "$15.000", 
                desc: "¡Nuestra leyenda de 70 cm! Una experiencia gigante para compartir, con lluvia de papas pay y tus aderezos favoritos." 
            },
            { 
                img: "img/tio_pancho_pizza.png", 
                name: "Tío Pancho a la Pizza", 
                price: "$17.000", 
                desc: "70 cm de puro sabor gratinados con abundante muzzarella, salsa de tomate artesanal y un toque de orégano." 
            },
            { 
                img: "img/tio_pancho_bondiola.png", 
                name: "Tío Pancho a la Bondiola", 
                price: "$17.000", 
                desc: "70 cm de placer con bondiola desmechada. ¡Una combinación irresistible!" 
            },
        ],
        superPancho: [
            { 
                img: "img/super_pancho.png", 
                name: "Súper Pancho Clásico", 
                price: "$4.000", 
                desc: "El Súper pancho que ya conocés: salchicha premium con lluvia de papas y aderezos a elección." 
            },
            { 
                img: "img/super_pancho_pizza.png", 
                name: "Súper Pancho a la Pizza", 
                price: "$6.000", 
                desc: "Súper salchicha gratinada con muzzarella fundida, salsa de tomate y el toque justo de orégano." 
            },
            { 
                img: "img/super_pancho_bondiola.png", 
                name: "Súper Pancho a la Bondiola", 
                price: "$6.000", 
                desc: "Súper pancho coronado con una generosa porción de nuestra bondiola desmechada artesanal." 
            },
        ],
        panchito: [
            { 
                img: "img/panchito.png", 
                name: "Panchito Clásico", 
                price: "$2.500", 
                desc: "El tamaño ideal para los más chicos o para darte ese último gusto. Tierno, clásico y con papas." 
            }
        ],
        hamburguesas: [
            { 
                img: "img/tio_hamburguesa.png", 
                name: "Burger", 
                price: "$8.000", 
                desc: "Medallón de carne vacuna, una montaña de queso cheddar fundido, vegetales y aderezos." 
            }
        ],
        pizzas: [
            { 
                img: "img/tio_pizza.png", 
                name: "Muzzarella", 
                price: "$10.000", 
                desc: "Clásica pizza a la piedra, con muzzarella y orégano." 
            }
        ],
        bebidas: [
            { 
                img: "img/tio_bebida.png", 
                name: "Línea Coca-Cola 500ml", 
                price: "$1.200", 
                desc: "Variedad de sabores. Consultar disponibilidad al momento del pedido." 
            }
        ]
    },
    footer: {
        title: "Tío Pancho - Menú Digital",
        address: "📍 Alvarado 2045, Mar del Plata"
    }
};