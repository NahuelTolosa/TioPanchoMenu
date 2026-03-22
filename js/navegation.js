// Armar navegación
const navContainer = document.getElementById('nav-container');

const arrowLeft = document.createElement('div');
arrowLeft.className = 'nav-arrow';
arrowLeft.innerHTML = `
    <span> < </span>
`
navContainer.appendChild(arrowLeft);

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

const arrowRight = document.createElement('div');
arrowRight.className = 'nav-arrow';
arrowRight.innerHTML = `
    <span> > </span>
`
navContainer.appendChild(arrowRight);