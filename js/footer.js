// Elementos del DOM generales
document.getElementById('footer-title').textContent = messages.footer.title;
document.getElementById('footer-address').textContent = messages.footer.address;
document.getElementById('footer-instagram').innerHTML = `
    <a href="${messages.footer.instagramLink}" target="_blank" rel="noopener noreferrer">
        <div class="footer-instagram-container" class="footer-instagram-container">

            <div class="footer-instagram-text-container-wrapper">
                <div class="footer-instagram-icon-container">
                    <img width="20" height="20" src="img/insta-icon.svg" alt="Instagram" class="footer-instagram-icon">
                </div>
                <div class="footer-instagram-text-container">
                    <span class="footer-instagram-text">${messages.footer.instagram}</span>
                </div>
            </div>

            <div class="footer-instagram-username-container">
                <span class="footer-instagram-text">${messages.footer.instagramUsername} <span class="footer-instagram-text-arrow">↗</span></span>
            </div>
            </div>
        </div>
    </a>
`;