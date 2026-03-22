// ==========================================
// INTERRUPTOR DEL MODAL (ON/OFF)
// Cambia esto a false para apagar los modales
// ==========================================
const MODAL_ACTIVADO = true; 

// Elementos del Modal
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModalIcon = document.getElementById('close-modal');
// const modalCloseBtn = document.getElementById('modal-close-btn');

// Función para abrir modal
const abrirModal = (item) => {
    if (!MODAL_ACTIVADO) return;
    modalImg.src = item.img;
    modalImg.style.display = 'block'; // Por si se ocultó por error antes
    modalTitle.textContent = item.name;
    modalDesc.textContent = item.desc;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo
}

// Función para cerrar modal
const cerrarModal = (item) => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Devuelve el scroll
}

// Eventos para cerrar el modal
closeModalIcon.addEventListener('click', cerrarModal);
// modalCloseBtn.addEventListener('click', cerrarModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal(); // Cierra si haces clic afuera de la caja blanca
});