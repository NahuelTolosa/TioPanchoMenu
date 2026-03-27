const messages = {
    header: {
        title: "Tío Pancho",
        subtitle: "¡El mejor sabor de la ciudad!"
    },
    // Categorías que aparecerán en el menú superior
    categories: [
        { id: "combos", name: "🍽️ Combos" },
        { id: "tioPancho", name: "🌭 Tío Pancho" },
        { id: "superPancho", name: "🌭 Súper Pancho" },
        { id: "panchito", name: "🌭 Panchito" },
        { id: "hamburguesas", name: "🍔 Hamburguesas" },
        { id: "pizzas", name: "🍕 Pizzas" },
        { id: "bebidas", name: "🥤 Bebidas" }
    ],

    // Productos separados por categoría
    menu: {
        combos: [
            { 
                img: "img/combo1.png", 
                realImg: "img/combo1_real.jpg",
                name: "Combo 1: Tío Pancho para compartir", 
                price: "$20.000", 
                desc: "El gigante de la casa (70 cm) ideal para disfrutar entre varios. Incluye bebida grande a elección: Coca-Cola (2 Lts) o Cerveza (1 Lt). (Hacelo a la pizza o a la bondiola por $2.000 más c/u)" 
            },
            { 
                img: "img/combo2.png", 
                realImg: "img/combo2_real.jpg",
                name: "Combo 2: Súper Sánguche de Bondiola para dos", 
                price: "$15.000", 
                desc: "Una locura para compartir: 1 espectacular sánguche de bondiola desmechada (40 cm) con muzzarella y una Coca-Cola (1 Lt)." 
            },
            { 
                img: "img/combo3.png", 
                realImg: "img/combo3_real.jpg",
                name: "Combo 3: Súper Panchos para dos", 
                price: "$19.000", 
                desc: "La dupla perfecta: 2 súper panchos acompañados de 2 porciones de papas fritas crujientes y una Coca-Cola (1 Lt). (Hacelos a la pizza o a la bondiola por $2.000 más c/u)"
            },
            { 
                img: "img/combo4.png", 
                realImg: "img/combo4_real.jpg",
                name: "Combo 4: Súper Pancho Individual", 
                price: "$10.000", 
                desc: "Para darte un gusto: 1 súper pancho clásico con nuestra porción de papas fritas y una Coca-Cola (500 ml). (Hacelo a la pizza o a la bondiola por $2.000 más)" 
            },
            { 
                img: "img/combo5.png", 
                realImg: "img/combo5_real.jpg",
                name: "Combo 5: Hamburguesa Individual", 
                price: "$12.000", 
                desc: "Un clásico que no falla: 1 hamburguesa con su porción de papas fritas y una Coca-Cola (500 ml)." 
            },
            { 
                img: "img/combo6.png", 
                realImg: "img/combo6_real.jpg",
                name: "Combo 6: Bondiola Individual", 
                price: "$12.000", 
                desc: "El favorito: 1 espectacular sánguche de bondiola desmechada y muzzarella, acompañado de papas fritas y una Coca-Cola (500 ml)." 
            }
        ],
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
                price: "$3.000", 
                desc: "Variedad de sabores. Consultar disponibilidad al momento del pedido." 
            }
        ]
    },
    footer: {
        title: "Tío Pancho - Menú Digital",
        address: "📍 Alvarado 2045, Mar del Plata"
    }
};
