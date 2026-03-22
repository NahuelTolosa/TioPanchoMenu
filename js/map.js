// Agregar mapa
const mapContainer = document.createElement('div');

mapContainer.innerHTML = `
    <section class="location-section">
        <h2 class="category-title">📍 Ubicanos</h2>
        <div class="map-wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.483328762852!2d-57.55224692328185!3d-38.01251024542434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dd000b433e4d%3A0x38baee3fef55f536!2sT%C3%ADo%20Pancho!5e0!3m2!1ses-419!2sar!4v1774154971810!5m2!1ses-419!2sar" 
                width="100%" 
                height="450" 
                style="border:0;"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>
`

menuContainer.appendChild(mapContainer);