// Armar navegación
const navContainer = document.getElementById('nav-container');
messages.categories.forEach((category, index) => {
    const btn = document.createElement('a');
    btn.href = `#${category.id}`;
    btn.className = index === 0 ? 'category-btn active' : 'category-btn';
    btn.textContent = category.name;
    
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
    navContainer.appendChild(btn);
});