// Armar las tarjetas del menú
const menuContainer = document.getElementById('menu-container');

messages.categories.forEach(category => {
    const title = document.createElement('h2');
    title.id = category.id;
    title.className = 'category-title';
    title.textContent = category.name;
    menuContainer.appendChild(title);

    const items = messages.menu[category.id];
    if (items) {
        items.forEach(item => {
            const card = document.createElement('div');
            const isCategoryDrink = category.id == "bebidas"
            // Si el modal está activado, le ponemos la clase "clickable" para que salga la manito
            if(isCategoryDrink){
                card.className = 'menu-card';
            }else{
                card.className = MODAL_ACTIVADO ? 'menu-card clickable' : 'menu-card';
            }
            
            // Generar el HTML de la tarjeta
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="card-img" onerror="this.style.display='none'">
                <div class="card-content">
                    <div>
                        <div class="item-header">
                            <h3 class="item-name">${item.name}</h3>
                            <span class="item-price">${item.price}</span>
                        </div>
                        <p class="item-desc">${item.desc}</p>
                    </div>
                    ${ !isCategoryDrink ? ( MODAL_ACTIVADO ? '<span class="tap-to-view">👆 Tocar para ver</span>' : '' ) : ('') }
                </div>
            `;

            // Si el modal está activado, le agregamos el evento clic
            if (MODAL_ACTIVADO && !isCategoryDrink) {
                card.addEventListener('click', () => abrirModal(item));
            }

            menuContainer.appendChild(card);
        });
    }
});