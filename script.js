document.addEventListener('DOMContentLoaded', () => {

    // ================= 0. LANGUAGE TRANSLATION DATA =================
    const translations = {
        hi: {
            nav_home: "होम",
            nav_categories: "श्रेणियाँ",
            nav_products: "उत्पाद",
            nav_track: "ऑर्डर ट्रैक करें",
            nav_about: "हमारे बारे में",
            nav_contact: "संपर्क करें",
            nav_login: "लॉगिन",
            hero_title: 'शुद्ध प्राकृतिक <span>मिट्टी के बर्तन</span>',
            hero_desc: "पारंपरिक और स्वास्थ्यवर्धक मिट्टी से बने बर्तन, जो आपके जीवन को प्राकृतिक और स्वस्थ बनाते हैं।",
            hero_btn: "खरीदारी शुरू करें",
            cat_title: "लोकप्रिय श्रेणियाँ",
            cat_subtitle: "अपनी जरूरत के हिसाब से सही बर्तन चुनें",
            cat_1: "रसोई के बर्तन",
            cat_2: "पेयजल और मटके",
            cat_3: "डिनर सेट और प्लेट्स",
            prod_title: "हमारे उत्पाद",
            prod_subtitle: "प्राकृतिक और शुद्ध मिट्टी से बने बर्तन",
            filter_all: "सभी (All)",
            filter_kitchen: "रसोई के बर्तन",
            filter_water: "पेयजल और मटके",
            filter_dining: "डिनर सेट",
            p1_title: "हांडी",
            p1_desc: "प्राकृतिक मिट्टी से बनी सुंदर हांडी, खाना बनाने और स्वाद बढ़ाने के लिए उपयुक्त।",
            p2_title: "जग थर्मस",
            p2_desc: "पानी को कुदरती ठंडा और सेहतमंद रखने के लिए मिट्टी का विशेष जग।",
            p3_title: "सुराही",
            p3_desc: "पारंपरिक कुम्हार कला से बनी सुंदर सुराही, प्राकृतिक रूप से ठंडे पानी के लिए।",
            p4_title: "मिट्टी की प्लेट",
            p4_desc: "शुद्ध और पारंपरिक भोजन अनुभव के लिए हैंडमेड मिट्टी की प्लेट्स।",
            add_cart: "🛒 कार्ट में जोड़ें",
            no_results: "आपकी खोज के अनुसार कोई उत्पाद नहीं मिला!",
            about_title: "हमारे बारे में",
            about_p1: "हम पारंपरिक कुम्हार कला को आधुनिक जीवनशैली से जोड़ने का काम करते हैं। हमारे सभी बर्तन पूरी तरह से शुद्ध और प्राकृतिक मिट्टी से हाथों द्वारा बनाए जाते हैं।",
            about_p2: "प्लास्टिक और केमिकल वाले बर्तनों से दूर, प्रकृति की ओर एक स्वस्थ कदम बढ़ाएं।",
            contact_title: "हमसे संपर्क करें",
            contact_subtitle: "कोई सवाल या सुझाव हो तो हमें संदेश भेजें",
            send_msg: "संदेश भेजें",
            cart_heading: "आपकी कार्ट",
            empty_cart: "आपकी कार्ट अभी खाली है!",
            enter_addr: "डिलीवरी पता दर्ज करें:",
            choose_pay: "भुगतान का तरीका चुनें (Payment Method):",
            pay_cod: "कैश ऑन डिलीवरी (COD)",
            pay_online: "ऑनलाइन पेमेंट (UPI / QR Code)",
            qr_instruction: "नीचे दिए गए QR कोड को किसी भी UPI App (GPay/PhonePe/Paytm) से स्कैन करके भुगतान करें:",
            total_amount: "कुल राशि (Total):",
            confirm_order: "ऑर्ड‍र कन्फर्म करें",
            wa_order: "WhatsApp पर ऑर्डर करें",
            track_modal_title: "अपना ऑर्डर ट्रैक करें",
            track_btn: "ट्रैक करें",
            step_placed: "ऑर्डर हुआ",
            step_shipped: "शिप हो गया",
            step_delivered: "डिलीवर हुआ",
            signup_tab: "साइनअप",
            login_submit: "लॉगिन करें",
            signup_submit: "खाता बनाएं (Sign Up)",
            footer_tagline: "प्राकृतिक जीवनशैली की ओर एक कदम",
            search_placeholder: "खोजें (जैसे: हांडी, सुराही)..."
        },
        en: {
            nav_home: "Home",
            nav_categories: "Categories",
            nav_products: "Products",
            nav_track: "Track Order",
            nav_about: "About Us",
            nav_contact: "Contact Us",
            nav_login: "Login",
            hero_title: 'Pure Natural <span>Earthen Cookware</span>',
            hero_desc: "Traditional and healthy clay cookware that brings natural health to your kitchen.",
            hero_btn: "Shop Now",
            cat_title: "Popular Categories",
            cat_subtitle: "Choose the right pottery according to your needs",
            cat_1: "Kitchen Cookware",
            cat_2: "Water Pots & Jugs",
            cat_3: "Dinner Sets & Plates",
            prod_title: "Our Products",
            prod_subtitle: "Pure handcrafted clay products",
            filter_all: "All Products",
            filter_kitchen: "Cookware",
            filter_water: "Water Pots",
            filter_dining: "Dinner Sets",
            p1_title: "Clay Handi",
            p1_desc: "Beautiful clay handi designed for cooking delicious, flavorful food.",
            p2_title: "Clay Jug Thermos",
            p2_desc: "Special clay jug to keep water naturally cool and healthy.",
            p3_title: "Traditional Surahi",
            p3_desc: "Elegant handcrafted Surahi for naturally cooled drinking water.",
            p4_title: "Clay Dinner Plate",
            p4_desc: "Handmade clay plates for a pure and traditional dining experience.",
            add_cart: "🛒 Add to Cart",
            no_results: "No products found matching your search!",
            about_title: "About Us",
            about_p1: "We connect traditional pottery craftsmanship with modern lifestyle. All our products are 100% pure and handmade.",
            about_p2: "Step away from plastic and chemicals, move closer to nature.",
            contact_title: "Contact Us",
            contact_subtitle: "Have a question? Send us a message",
            send_msg: "Send Message",
            cart_heading: "Your Cart",
            empty_cart: "Your cart is currently empty!",
            enter_addr: "Enter Delivery Address:",
            choose_pay: "Select Payment Method:",
            pay_cod: "Cash on Delivery (COD)",
            pay_online: "Online Payment (UPI / QR)",
            qr_instruction: "Scan QR code below using any UPI App (GPay/PhonePe/Paytm) to pay:",
            total_amount: "Total Amount:",
            confirm_order: "Confirm Order",
            wa_order: "Order via WhatsApp",
            track_modal_title: "Track Your Order",
            track_btn: "Track",
            step_placed: "Placed",
            step_shipped: "Shipped",
            step_delivered: "Delivered",
            signup_tab: "Sign Up",
            login_submit: "Log In",
            signup_submit: "Create Account",
            footer_tagline: "A step towards a natural lifestyle",
            search_placeholder: "Search (e.g. Handi, Surahi)..."
        }
    };

    const langSelect = document.getElementById('language-select');
    let currentLang = localStorage.getItem('matiKalaLang') || 'hi';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('matiKalaLang', lang);
        if (langSelect) langSelect.value = lang;

        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });

        const searchInp = document.getElementById('search-input');
        if (searchInp && translations[lang].search_placeholder) {
            searchInp.placeholder = translations[lang].search_placeholder;
        }
    }

    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }

    applyLanguage(currentLang);


    // ================= 1. LOCAL STORAGE & CART SETUP =================
    let cart = JSON.parse(localStorage.getItem('matiKalaCart')) || [];
    let orders = JSON.parse(localStorage.getItem('matiKalaOrders')) || [];

    function saveCart() {
        localStorage.setItem('matiKalaCart', JSON.stringify(cart));
    }

    function saveOrders() {
        localStorage.setItem('matiKalaOrders', JSON.stringify(orders));
    }


    // ================= 2. DARK / LIGHT THEME TOGGLE =================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('matiKalaTheme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            themeToggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('matiKalaTheme', isDark ? 'dark' : 'light');
        });
    }


    // ================= 3. MOBILE MENU TOGGLE =================
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const allNavAnchors = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');

            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    allNavAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuBtn?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });


    // ================= 4. REALTIME SEARCH FILTER =================
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.products .product-card');
    const noResultsMsg = document.getElementById('no-search-results');

    if (searchBtn && searchBox) {
        searchBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
                searchBox.classList.toggle('active');
                if (searchBox.classList.contains('active')) {
                    searchInput.focus();
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && !searchBox.contains(e.target)) {
                searchBox.classList.remove('active');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let hasResults = false;

            productCards.forEach(card => {
                const title = card.querySelector('.product-title').innerText.toLowerCase();
                const desc = card.querySelector('.description').innerText.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.classList.remove('hide');
                    hasResults = true;
                } else {
                    card.classList.add('hide');
                }
            });

            if (noResultsMsg) {
                noResultsMsg.style.display = hasResults ? 'none' : 'block';
            }
        });
    }


    // ================= 5. CATEGORY FILTER LOGIC =================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    function filterProducts(category) {
        if (searchInput) searchInput.value = '';
        if (noResultsMsg) noResultsMsg.style.display = 'none';

        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterProducts(button.getAttribute('data-filter'));
        });
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const selectedCategory = card.getAttribute('data-category');
            if (selectedCategory) {
                filterProducts(selectedCategory);
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // ================= 6. CART DRAWER & TOAST NOTIFICATION =================
    const cartIconBtn = document.getElementById('cart-icon-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    
    const cartCountSpan = document.getElementById('cart-count');
    const drawerCartCountSpan = document.getElementById('drawer-cart-count');
    const cartBody = document.getElementById('cart-body');
    const cartTotalPrice = document.getElementById('cart-total-price');

    const toastNotification = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-msg');

    function openCart() {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    }

    function closeCart() {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }

    if (cartIconBtn) cartIconBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    function showToast(message) {
        if (toastNotification && toastMsg) {
            toastMsg.innerText = message;
            toastNotification.classList.add('show');
            setTimeout(() => {
                toastNotification.classList.remove('show');
            }, 2500);
        }
    }

    function addToCart(id, title, price, imgSrc) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, title, price, imgSrc, quantity: 1 });
        }

        saveCart();
        updateCartUI();
        showToast(currentLang === 'hi' ? `${title} कार्ट में जोड़ा गया!` : `${title} added to cart!`);
    }

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('add-to-cart-btn') && !e.target.id.includes('modal')) {
            e.stopPropagation();
            const card = e.target.closest('.product-card');
            const id = card.getAttribute('data-id');
            const title = card.querySelector('.product-title').innerText;
            const priceText = card.querySelector('.price').innerText;
            const price = parseInt(priceText.replace('₹', '').replace(',', ''));
            const imgSrc = card.querySelector('.product-image img').src;

            addToCart(id, title, price, imgSrc);
        }
    });

    function updateCartUI() {
        const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartCountSpan) cartCountSpan.innerText = totalCount;
        if (drawerCartCountSpan) drawerCartCountSpan.innerText = totalCount;

        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        if (cartTotalPrice) cartTotalPrice.innerText = `₹${totalPrice.toLocaleString('en-IN')}`;

        // QR Code Image Dynamic Update (UPI String)
        const upiQrImg = document.getElementById('upi-qr-img');
        if (upiQrImg && totalPrice > 0) {
            const upiId = "9876543210@upi";
            const upiName = "MatiKala";
            const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=${upiId}&pn=${upiName}&am=${totalPrice}&cu=INR`)}`;
            upiQrImg.src = qrApi;
        }

        if (cart.length === 0) {
            cartBody.innerHTML = `<p class="empty-cart-msg">${translations[currentLang].empty_cart}</p>`;
        } else {
            cartBody.innerHTML = '';
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <img src="${item.imgSrc}" alt="${item.title}">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p>₹${item.price} x ${item.quantity}</p>
                        <div class="qty-btn-box">
                            <button class="qty-btn minus-btn" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">&times;</button>
                `;
                cartBody.appendChild(itemDiv);
            });

            addCartItemEventListeners();
        }
    }

    function addCartItemEventListeners() {
        document.querySelectorAll('.qty-btn.plus-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity += 1;
                    saveCart();
                    updateCartUI();
                }
            });
        });

        document.querySelectorAll('.qty-btn.minus-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity -= 1;
                    if (item.quantity <= 0) {
                        cart = cart.filter(i => i.id !== id);
                    }
                    saveCart();
                    updateCartUI();
                }
            });
        });

        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                cart = cart.filter(i => i.id !== id);
                saveCart();
                updateCartUI();
            });
        });
    }

    updateCartUI();


    // ================= 7. ONLINE PAYMENT TOGGLE =================
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const upiQrBox = document.getElementById('upi-qr-box');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'ONLINE') {
                upiQrBox.style.display = 'block';
            } else {
                upiQrBox.style.display = 'none';
            }
        });
    });


    // ================= 8. PLACE ORDER & ORDER TRACKING LOGIC =================
    const placeOrderBtn = document.getElementById('place-order-btn');

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert(currentLang === 'hi' ? 'आपकी कार्ट खाली है!' : 'Your cart is empty!');
                return;
            }

            const name = document.getElementById('cust-name').value.trim();
            const phone = document.getElementById('cust-phone').value.trim();
            const address = document.getElementById('cust-address').value.trim();
            const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const txnId = document.getElementById('transaction-id').value.trim();

            if (!name || !phone || !address) {
                alert(currentLang === 'hi' ? 'कृपया अपना नाम, मोबाइल नंबर और पूरा पता दर्ज करें!' : 'Please enter your name, mobile number and address!');
                return;
            }

            if (payMethod === 'ONLINE' && !txnId) {
                alert(currentLang === 'hi' ? 'कृपया Payment UTR / Transaction ID दर्ज करें!' : 'Please enter Payment UTR / Transaction ID!');
                return;
            }

            const orderId = "MK" + Math.floor(10000 + Math.random() * 90000);
            const orderDate = new Date().toLocaleDateString(currentLang === 'hi' ? 'hi-IN' : 'en-US');
            const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const itemsText = cart.map(i => `${i.title} (x${i.quantity})`).join(', ');

            const newOrder = {
                orderId,
                date: orderDate,
                name,
                phone,
                address,
                itemsText,
                totalPrice,
                payMethod: payMethod === 'COD' ? 'Cash on Delivery' : `Online (Txn ID: ${txnId})`,
                status: 'placed'
            };

            orders.push(newOrder);
            saveOrders();

            cart = [];
            saveCart();
            updateCartUI();
            closeCart();

            alert(currentLang === 'hi' 
                ? `🎉 बधाई हो! आपका ऑर्डर सफलतापूर्वक दर्ज हो गया है।\n\nऑर्डर ID: ${orderId}`
                : `🎉 Congratulations! Your order has been placed.\n\nOrder ID: ${orderId}`);
        });
    }

    // TRACK ORDER MODAL LOGIC
    const trackNavBtn = document.getElementById('track-order-nav-btn');
    const trackModal = document.getElementById('track-modal');
    const closeTrackBtn = document.getElementById('close-track-btn');
    const searchOrderBtn = document.getElementById('search-order-btn');
    const trackResultBox = document.getElementById('track-result-box');

    if (trackNavBtn) {
        trackNavBtn.addEventListener('click', () => {
            trackModal.classList.add('active');
        });
    }

    if (closeTrackBtn) {
        closeTrackBtn.addEventListener('click', () => {
            trackModal.classList.remove('active');
        });
    }

    if (searchOrderBtn) {
        searchOrderBtn.addEventListener('click', () => {
            const searchId = document.getElementById('track-order-id-input').value.trim().toUpperCase();
            if (!searchId) {
                alert(currentLang === 'hi' ? 'कृपया अपनी ऑर्डर ID दर्ज करें!' : 'Please enter Order ID!');
                return;
            }

            const foundOrder = orders.find(o => o.orderId === searchId);

            if (foundOrder) {
                trackResultBox.style.display = 'block';
                document.getElementById('track-res-id').innerText = `Order ID: ${foundOrder.orderId}`;
                document.getElementById('track-res-date').innerText = `Date: ${foundOrder.date}`;
                document.getElementById('track-res-items').innerHTML = `<strong>Items:</strong> ${foundOrder.itemsText}`;
                document.getElementById('track-res-total').innerHTML = `<strong>Total:</strong> ₹${foundOrder.totalPrice}`;
                document.getElementById('track-res-payment').innerHTML = `<strong>Payment:</strong> ${foundOrder.payMethod}`;

                document.getElementById('step-placed').classList.add('active');
                if (foundOrder.status === 'shipped' || foundOrder.status === 'delivered') {
                    document.getElementById('step-shipped').classList.add('active');
                } else {
                    document.getElementById('step-shipped').classList.remove('active');
                }

                if (foundOrder.status === 'delivered') {
                    document.getElementById('step-delivered').classList.add('active');
                } else {
                    document.getElementById('step-delivered').classList.remove('active');
                }

            } else {
                alert(currentLang === 'hi' ? 'कोई ऑर्डर नहीं मिला!' : 'No order found!');
                trackResultBox.style.display = 'none';
            }
        });
    }


    // ================= 9. PRODUCT QUICK VIEW MODAL =================
    const quickviewModal = document.getElementById('quickview-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalOldPrice = document.getElementById('modal-old-price');
    const modalDesc = document.getElementById('modal-desc');
    const modalStars = document.getElementById('modal-stars');
    const modalAddBtn = document.getElementById('modal-add-btn');

    let currentModalProduct = null;

    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) return;

            const id = card.getAttribute('data-id');
            const title = card.querySelector('.product-title').innerText;
            const price = card.querySelector('.price').innerText;
            const oldPrice = card.querySelector('.old-price').innerText;
            const desc = card.querySelector('.description').innerText;
            const imgSrc = card.querySelector('.product-image img').src;
            const starsHTML = card.querySelector('.star-rating').innerHTML;

            currentModalProduct = {
                id,
                title,
                price: parseInt(price.replace('₹', '').replace(',', '')),
                imgSrc
            };

            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;
            modalOldPrice.innerText = oldPrice;
            modalDesc.innerText = desc;
            if (modalStars) modalStars.innerHTML = starsHTML;

            quickviewModal.classList.add('active');
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', () => quickviewModal.classList.remove('active'));
    if (quickviewModal) {
        quickviewModal.addEventListener('click', (e) => {
            if (e.target === quickviewModal) quickviewModal.classList.remove('active');
        });
    }

    if (modalAddBtn) {
        modalAddBtn.addEventListener('click', () => {
            if (currentModalProduct) {
                addToCart(currentModalProduct.id, currentModalProduct.title, currentModalProduct.price, currentModalProduct.imgSrc);
                quickviewModal.classList.remove('active');
            }
        });
    }


    // ================= 10. LOGIN & SIGNUP MODAL LOGIC =================
    const loginBtn = document.querySelector('.login');
    const loginModal = document.getElementById('login-modal');
    const closeLoginBtn = document.getElementById('close-login-btn');

    const tabLoginBtn = document.getElementById('tab-login-btn');
    const tabSignupBtn = document.getElementById('tab-signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
        });
    }

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) loginModal.classList.remove('active');
        });
    }

    if (tabLoginBtn && tabSignupBtn) {
        tabLoginBtn.addEventListener('click', () => {
            loginForm.style.display = 'flex';
            signupForm.style.display = 'none';
            tabLoginBtn.style.color = 'var(--primary-color)';
            tabLoginBtn.style.borderBottom = '2px solid var(--primary-color)';
            tabSignupBtn.style.color = 'var(--text-muted)';
            tabSignupBtn.style.borderBottom = 'none';
        });

        tabSignupBtn.addEventListener('click', () => {
            signupForm.style.display = 'flex';
            loginForm.style.display = 'none';
            tabSignupBtn.style.color = 'var(--accent-color)';
            tabSignupBtn.style.borderBottom = '2px solid var(--accent-color)';
            tabLoginBtn.style.color = 'var(--text-muted)';
            tabLoginBtn.style.borderBottom = 'none';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast(currentLang === 'hi' ? 'लॉगिन सफल रहा!' : 'Login successful!');
            loginModal.classList.remove('active');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast(currentLang === 'hi' ? 'खाता बन गया!' : 'Account created!');
            loginModal.classList.remove('active');
        });
    }


    // ================= 11. WHATSAPP ORDER =================
    const whatsappOrderBtn = document.getElementById('whatsapp-order-btn');
    const myPhoneNumber = "919876543210"; 

    if (whatsappOrderBtn) {
        whatsappOrderBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert(currentLang === 'hi' ? 'आपकी कार्ट खाली है!' : 'Your cart is empty!');
                return;
            }

            const name = document.getElementById('cust-name').value.trim();
            const phone = document.getElementById('cust-phone').value.trim();
            const address = document.getElementById('cust-address').value.trim();
            const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const txnId = document.getElementById('transaction-id').value.trim();

            if (!name || !phone || !address) {
                alert(currentLang === 'hi' ? 'कृपया अपना नाम, मोबाइल नंबर और पूरा पता दर्ज करें!' : 'Please enter your name, mobile number and address!');
                return;
            }

            let message = `*Order Details (MatiKala)*\n\n`;
            message += `👤 *Name:* ${name}\n`;
            message += `📞 *Phone:* ${phone}\n`;
            message += `📍 *Address:* ${address}\n`;
            message += `💳 *Payment Method:* ${payMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}\n`;

            if (payMethod === 'ONLINE' && txnId) {
                message += `🔢 *UTR / Txn ID:* ${txnId}\n`;
            }

            message += `\n📦 *Items:*\n`;

            let grandTotal = 0;

            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                grandTotal += itemTotal;
                message += `${index + 1}. ${item.title} x ${item.quantity} = ₹${itemTotal}\n`;
            });

            message += `\n💰 *Total Amount: ₹${grandTotal}*`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

});