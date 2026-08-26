document.addEventListener("DOMContentLoaded", function() {
    const bestSellersData = [
        {
            image: "image/iced latte.webp",
            title: "Iced Coffee Latte",
            description: "Perpaduan espresso dan susu segar yang creamy"
        },
        {
            image: "image/caramel macchiato.webp", 
            title: "Caramel Macchiato",
            description: "Manisnya saus karamel berpadu sempurna dengan espresso"
        },
        {
            image: "image/capucino.webp", 
            title: "Cappucino",
            description: "Kombinasi espresso dan susu yang pas di lidah mayoritas pelanggan"
        }
    ];

    let currentIndex = 0;

    const productImg = document.querySelector('.product-img');
    const productTitle = document.querySelector('.product-info h3');
    const productDesc = document.querySelector('.product-info p');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const card = document.querySelector('.slider-card');

    if (card) {
        card.style.transition = 'opacity 0.2s ease-in-out';
    }

    function updateSlider(index) {
        if (!productImg) return;
        
        card.style.opacity = 0;
        
        setTimeout(() => {
            productImg.src = bestSellersData[index].image;
            productTitle.textContent = bestSellersData[index].title;
            productDesc.textContent = bestSellersData[index].description;
            
            card.style.opacity = 1;
        }, 150);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % bestSellersData.length;
            updateSlider(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + bestSellersData.length) % bestSellersData.length;
            updateSlider(currentIndex);
        });
    } else {
        console.error("Tombol prevBtn atau nextBtn tidak ditemukan di HTML!");
    }

    // --- FITUR ZOOM IN GAMBAR (MODAL) ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imgModalExpanded');
    const closeModal = document.querySelector('.close-modal');

    if (productImg) {
        productImg.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Mengambil sumber gambar yang sedang aktif di slider
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});

