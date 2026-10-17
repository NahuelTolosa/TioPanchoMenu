const messages = {
    header: {
        title: "Tío Pancho",
        subtitle: "El gigante que se comparte"
    },
    // Categorías que aparecerán en el menú superior
    categories: [
        { id: "combos", name: "🍽️ Combos" },
        { id: "tioPancho", name: "🌭 Tío Pancho" },
        { id: "superPancho", name: "🌭 Súper Pancho" },
        { id: "panchito", name: "🌭 Panchito" },
        { id: "sandwitch", name: "🍔 Sánguches" },
        { id: "pizzas", name: "🍕 Pizzas" },
        { id: "bebidas", name: "🥤 Bebidas" },
        { id: "otros", name: "✨ Otros" }
    ],

    // Productos separados por categoría
    menu: {
        combos: [
            { 
                img: "img/combo1.png", 
                realImg: "img/combo1.png", 
                name: "Combo 1: Tío Pancho para compartir", 
                price: "$24.000", 
                desc: "El gigante de la casa (70 cm) ideal para disfrutar entre varios. Incluye bebida grande a elección: Coca-Cola (2 Lts) o Cerveza (1 Lt). (Hacelo a la pizza o a la bondiola por $2.000 más c/u)" 
            },
            { 
                img: "img/combo2.png", 
                realImg: "img/combo2.png", 
                name: "Combo 2: Súper Sánguche de Bondiola para dos", 
                price: "$22.000", 
                desc: "Una locura para compartir: 1 espectacular sánguche de bondiola desmechada (40 cm) con muzzarella, huevos fritos y papas, más una Coca-Cola de 1,5 Lts." 
            },
            { 
                img: "img/combo3.png", 
                realImg: "img/combo3.png", 
                name: "Combo 3: Súper Panchos para dos", 
                price: "$19.000", 
                desc: "La dupla perfecta: 2 súper panchos acompañados de 2 porciones de papas fritas crujientes y una Coca-Cola (1 Lt). Podés pedirlos a la pizza o a la bondiola."
            },
            { 
                img: "img/combo4.png", 
                realImg: "img/combo4.png", 
                name: "Combo 4: Súper Pancho Individual", 
                price: "$10.000", 
                desc: "Para darte un gusto: 1 súper pancho clásico con nuestra porción de papas fritas y una Coca-Cola (500 ml). Podés pedirlo a la pizza o a la bondiola." 
            },
            { 
                img: "img/combo5.png", 
                realImg: "img/combo5.png", 
                name: "Combo 5: Hamburguesa Individual", 
                price: "$15.000", 
                desc: "Un clásico que no falla: 1 hamburguesa con su porción de papas fritas y una Coca-Cola (500 ml)." 
            },
            { 
                img: "img/combo6.png", 
                realImg: "img/combo6.png", 
                name: "Combo 6: Bondiola Individual", 
                price: "$15.000", 
                desc: "El favorito: 1 espectacular sánguche de bondiola desmechada y muzzarella, acompañado de papas fritas y una Coca-Cola (500 ml)." 
            }
        ],
        tioPancho: [
            { 
                img: "img/tio_pancho.png",
                realImg: "img/tio_pancho.png",
                name: "Tío Pancho Clásico", 
                price: "$18.000", 
                desc: "¡Nuestra leyenda de 70 cm! Una experiencia gigante para compartir, con papas fritas, jamón y queso, y tus aderezos favoritos." 
            },
            { 
                img: "img/tio_pancho_pizza.png", 
                realImg: "img/tio_pancho_pizza.png", 
                name: "Tío Pancho a la Pizza", 
                price: "$20.000", 
                desc: "70 cm de puro sabor gratinados con abundante muzzarella, salsa de tomate artesanal y un toque de orégano." 
            },
            { 
                img: "img/tio_pancho_bondiola.png", 
                realImg: "img/tio_pancho_bondiola.png", 
                name: "Tío Pancho a la Bondiola", 
                price: "$20.000", 
                desc: "70 cm de placer con bondiola desmechada. ¡Una combinación irresistible!" 
            },
        ],
        superPancho: [
            { 
                img: "img/super_pancho.png", 
                realImg: "img/super_pancho.png", 
                name: "Súper Pancho Clásico", 
                price: "$6.000", 
                desc: "El Súper pancho que ya conocés: salchicha premium con lluvia de papas y aderezos a elección." 
            },
            { 
                img: "img/super_pancho_pizza.png", 
                realImg: "img/super_pancho_pizza.png", 
                name: "Súper Pancho a la Pizza", 
                price: "$6.000", 
                desc: "Súper salchicha gratinada con muzzarella fundida, salsa de tomate y el toque justo de orégano." 
            },
            { 
                img: "img/super_pancho_bondiola.png", 
                realImg: "img/super_pancho_bondiola.png", 
                name: "Súper Pancho a la Bondiola", 
                price: "$6.000", 
                desc: "Súper pancho coronado con una generosa porción de nuestra bondiola desmechada artesanal." 
            },
        ],
        panchito: [
            { 
                img: "img/panchito.png", 
                realImg: "img/panchito.png", 
                name: "Panchito Clásico", 
                price: "$4.000", 
                desc: "El tamaño ideal para los más chicos o para darte ese último gusto. Tierno, clásico y con papas." 
            }
        ],
        sandwitch: [
            { 
                img: "img/tio_hamburguesa.png", 
                realImg: "img/tio_hamburguesa.png", 
                name: "Burger con queso", 
                price: "$8.000", 
                desc: "Medallón de carne vacuna, una montaña de queso cheddar fundido, vegetales y aderezos." 
            },
            { 
                img: "img/tio_sacramento.png", 
                realImg: "img/tio_sacramento_real.jpg",
                name: "Sacramento Primavera", 
                price: "$5.000", 
                desc: "Un sandwich 'Primavera' en nuestro pan Sacramento especial. Relleno con jamón, queso, lechuga, rodajas de tomate."
            },
            { 
                img: "img/tio_pebeton.png", 
                realImg: "img/tio_pebeton_real.jpg",
                name: "Pebetón ", 
                price: "$4.000", 
                desc: "Un sandwich en nuestro pan 'Pebete'. Relleno con jamón, queso, lechuga, rodajas de tomate."
            }
        ],
        pizzas: [
            { 
                img: "img/tio_pizza.png", 
                realImg: "img/tio_pizza.png", 
                name: "Muzzarella", 
                price: "$10.000", 
                desc: "Clásica pizza a la piedra o al molde, con muzzarella y orégano." 
            }
        ],
        bebidas: [
            { 
                img: "img/tio_bebida.png", 
                name: "Bebidas", 
                price: "$3.000", 
                desc: "Coca-Cola, Sprite o agua saborizada de 500cc. Consultar disponibilidad al momento del pedido." 
            }
        ],  
        otros: [
            { 
                img: "img/tequenos.png",  
                realImg: "img/tequenos.png",  
                name: "Tequeños", 
                price: "$10.000", 
                desc: "5 unidades, crujientes y rellenos de queso." 
            },
            { 
                img: "img/empanadas.png", 
                realImg: "img/empanadas.png", 
                name: "Empanadas", 
                price: "$2.000", 
                desc: "Precio por unidad. Consultar sabores disponibles." 
            }
        ]
    },
    footer: {
        title: "Tío Pancho - Menú Digital",
        address: "📍 Alvarado 2045, Mar del Plata",
        tagline: "Comida · Música · Karaoke",
        instagram: "Seguinos en Instagram",
        instagramUsername: "@tiopanchomdp",
        instagramLink: "https://www.instagram.com/tiopanchomdp/"
    }
};
