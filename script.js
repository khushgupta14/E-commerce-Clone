const categories = [
    { name: "Clothes", image: "box1_image.jpg" },
    { name: "Health and Personal Care", image: "box2_image.jpg" },
    { name: "Furniture", image: "box3_image.jpg" },
    { name: "Electronics", image: "box4_image.jpg" },
    { name: "Beauty Pics", image: "box5_image.jpg" },
    { name: "Pet Care", image: "box6_image.jpg" },
    { name: "Toys", image: "box7_image.jpg" },
    { name: "Discover Fashion Trends", image: "box8_image.jpg" }
];

const inventory = [
    // Clothes
    { name: "Cotton T-Shirt", category: "Clothes", price: 499, image: "box/box1/box1_image1.png" },
    { name: "Denim Jeans", category: "Clothes", price: 1299, image: "box/box1/box1_image2.png" },
    { name: "Winter Jacket", category: "Clothes", price: 3499, image: "box/box1/box1_image3.png" },
    { name: "Running Sneakers", category: "Clothes", price: 2199, image: "box/box1/box1_image4.png" },
    { name: "Formal Shirt", category: "Clothes", price: 899, image: "box/box1/box1_image5.png" },
    { name: "Cargo Pants", category: "Clothes", price: 1100, image: "box/box1/box1_image6.png" },
    { name: "Woolen Sweater", category: "Clothes", price: 1500, image: "box/box1/box1_image7.png" },
    { name: "Graphic Hoodie", category: "Clothes", price: 1250, image: "box/box1/box1_image8.png" },
    
    // Health and Personal Care
    { name: "Electric Toothbrush", category: "Health and Personal Care", price: 1500, image: "box/box2/box2_image1.png" },
    { name: "Skincare Lotion", category: "Health and Personal Care", price: 450, image: "box/box2/box2_image2.png" },
    { name: "Shampoo 500ml", category: "Health and Personal Care", price: 350, image: "box/box2/box2_image3.png" },
    { name: "Vitamin C Tablets", category: "Health and Personal Care", price: 600, image: "box/box2/box2_image4.png" },
    { name: "Shaving Kit", category: "Health and Personal Care", price: 800, image: "box/box2/box2_image5.png" },
    { name: "Hair Dryer", category: "Health and Personal Care", price: 1200, image: "box/box2/box2_image6.png" },
    { name: "Deep Tissue Massage Gun", category: "Health and Personal Care", price: 2500, image: "box/box2/box2_image7.png" },
    { name: "Whey Protein 1kg", category: "Health and Personal Care", price: 2200, image: "box/box2/box2_image8.png" },
    
    // Furniture
    { name: "Office Chair", category: "Furniture", price: 4500, image: "box/box3/box3_image1.png" },
    { name: "Wooden Desk", category: "Furniture", price: 8500, image: "box/box3/box3_image2.png" },
    { name: "Bookshelf", category: "Furniture", price: 2500, image: "box/box3/box3_image3.png" },
    { name: "Coffee Table", category: "Furniture", price: 3200, image: "box/box3/box3_image4.png" },
    { name: "Sofa Set", category: "Furniture", price: 25000, image: "box/box3/box3_image5.png" },
    { name: "TV Entertainment Unit", category: "Furniture", price: 7500, image: "box/box3/box3_image6.png" },
    { name: "Dining Table Set", category: "Furniture", price: 15000, image: "box/box3/box3_image7.png" },
    { name: "Queen Size Bed Frame", category: "Furniture", price: 18000, image: "box/box3/box3_image8.png" },

    // Electronics 
    { name: "Samsung Galaxy S24", category: "Electronics", price: 85000, image: "box/box4/box4_image1.png" },
    { name: "Sony Headphones", category: "Electronics", price: 12000, image: "box/box4/box4_image2.png" },
    { name: "Apple iPad Air", category: "Electronics", price: 55000, image: "box/box4/box4_image3.png" },
    { name: "Smart Watch", category: "Electronics", price: 3500, image: "box/box4/box4_image4.png" },
    { name: "Gaming Mouse", category: "Electronics", price: 1500, image: "box/box4/box4_image5.png" },
    { name: "Mechanical Keyboard", category: "Electronics", price: 4500, image: "box/box4/box4_image6.png" },
    { name: "4K IPS Monitor", category: "Electronics", price: 22000, image: "box/box4/box4_image7.png" },
    { name: "Bluetooth Speaker", category: "Electronics", price: 2500, image: "box/box4/box4_image8.png" },
    
    // Beauty Pics
    { name: "Lipstick Set", category: "Beauty Pics", price: 999, image: "box/box5/box5_image1.png" },
    { name: "Makeup Brush Kit", category: "Beauty Pics", price: 1200, image: "box/box5/box5_image2.png" },
    { name: "Eyeshadow Palette", category: "Beauty Pics", price: 1500, image: "box/box5/box5_image3.png" },
    { name: "Foundation", category: "Beauty Pics", price: 850, image: "box/box5/box5_image4.png" },
    { name: "Nail Polish Collection", category: "Beauty Pics", price: 500, image: "box/box5/box5_image5.png" },
    { name: "Luxury Perfume 100ml", category: "Beauty Pics", price: 2500, image: "box/box5/box5_image6.png" },
    { name: "Volumizing Mascara", category: "Beauty Pics", price: 650, image: "box/box5/box5_image7.png" },
    { name: "Hydrating Cleanser", category: "Beauty Pics", price: 400, image: "box/box5/box5_image8.png" },

    // Pet Care
    { name: "Dog Food 5kg", category: "Pet Care", price: 1200, image: "box/box6/box6_image1.png" },
    { name: "Cat Litter", category: "Pet Care", price: 600, image: "box/box6/box6_image2.png" },
    { name: "Cozy Pet Bed", category: "Pet Care", price: 1500, image: "box/box6/box6_image3.png" },
    { name: "Chew Toys Assortment", category: "Pet Care", price: 300, image: "box/box6/box6_image4.png" },
    { name: "Grooming Brush", category: "Pet Care", price: 400, image: "box/box6/box6_image5.png" },
    { name: "Oatmeal Pet Shampoo", category: "Pet Care", price: 350, image: "box/box6/box6_image6.png" },
    { name: "Auto Water Dispenser", category: "Pet Care", price: 1800, image: "box/box6/box6_image7.png" },
    { name: "Leash and Collar Set", category: "Pet Care", price: 550, image: "box/box6/box6_image8.png" },

    // Toys
    { name: "Lego Building Set", category: "Toys", price: 2500, image: "box/box7/box7_image1.png" },
    { name: "Remote Control Car", category: "Toys", price: 1500, image: "box/box7/box7_image2.png" },
    { name: "1000 Piece Puzzle", category: "Toys", price: 500, image: "box/box7/box7_image3.png" },
    { name: "Superhero Action Figure", category: "Toys", price: 800, image: "box/box7/box7_image4.png" },
    { name: "Strategy Board Game", category: "Toys", price: 1200, image: "box/box7/box7_image5.png" },
    { name: "Giant Teddy Bear", category: "Toys", price: 600, image: "box/box7/box7_image6.png" },
    { name: "Modeling Clay Set", category: "Toys", price: 400, image: "box/box7/box7_image7.png" },
    { name: "Wooden Train Set", category: "Toys", price: 1800, image: "box/box7/box7_image8.png" },

    // Fashion Trends
    { name: "Designer Sunglasses", category: "Discover Fashion Trends", price: 1500, image: "box/box8/box8_image1.png" },
    { name: "Leather Handbag", category: "Discover Fashion Trends", price: 3500, image: "box/box8/box8_image2.png" },
    { name: "Silver Pendant Necklace", category: "Discover Fashion Trends", price: 2200, image: "box/box8/box8_image3.png" },
    { name: "Printed Silk Scarf", category: "Discover Fashion Trends", price: 800, image: "box/box8/box8_image4.png" },
    { name: "Classic Wrist Watch", category: "Discover Fashion Trends", price: 4500, image: "box/box8/box8_image5.png" },
    { name: "Vintage Fedora Hat", category: "Discover Fashion Trends", price: 900, image: "box/box8/box8_image6.png" },
    { name: "Gold Plated Hoop Earrings", category: "Discover Fashion Trends", price: 450, image: "box/box8/box8_image7.png" },
    { name: "Everyday Canvas Tote", category: "Discover Fashion Trends", price: 600, image: "box/box8/box8_image8.png" }
];

let cartCount = 0;
const shopSection = document.getElementById("shop-section");
const cartDisplay = document.getElementById("cart-count");
const backToTopBtn = document.querySelector(".foot-panel1");
const darkModeBtn = document.querySelector(".nav-dark-mode");
const body = document.body;

let cartArray = JSON.parse(localStorage.getItem("aCart")) || [];

const navCartBtn = document.querySelector(".nav-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalPrice = document.getElementById("cart-total-price");

function renderCategories() {
    let htmlContent = ""; 

    categories.forEach((cat) => {
        htmlContent += `
            <div class="box category-box" data-category="${cat.name}">
                <div class="box-content">
                    <h2>${cat.name}</h2>
                    <div class="box-image category-image" style="background-image: url('${cat.image}');"></div>  
                    <span class="category-shop-now">Shop now</span>
                </div>
            </div>
        `;
    });

    shopSection.innerHTML = htmlContent; 
}

function renderProducts(categoryName) {
    let htmlContent = `
        <div class="browsing-header-container">
            <h2 class="browsing-title">${categoryName}</h2>
            <button class="back-to-categories-btn">← Back to Categories</button>
        </div>
    `;
    const items = inventory.filter(item => item.category === categoryName);

    items.forEach((item) => {
        const inCartItem = cartArray.find(cartObj => cartObj.name === item.name);
        
        // Inline styles for display are kept because they handle the dynamic switching between "Add to Cart" button and the quantity controls.
        const showAddBtn = inCartItem ? 'none' : 'block';
        const showQtyControls = inCartItem ? 'flex' : 'none';
        const qty = inCartItem ? inCartItem.quantity : 0;

        htmlContent += `
            <div class="box">
                <div class="box-content">
                    <h2 class="product-title">${item.name}</h2>
                    <div class="box-image product-image" style="background-image: url('${item.image}');"></div>      
                    <div class="product-price-row">
                        <p class="product-price">₹${item.price.toLocaleString('en-IN')}</p>
                        
                        <div class="product-actions">
                            <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}" style="display: ${showAddBtn};">Add to Cart</button>
                            
                            <div class="qty-controls" data-name="${item.name}" style="display: ${showQtyControls};">
                                <button class="shop-decrease-btn" data-name="${item.name}">-</button>
                                <span class="shop-item-qty" data-name="${item.name}">${qty}</span>
                                <button class="shop-increase-btn" data-name="${item.name}">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    shopSection.innerHTML = htmlContent;
}

renderCategories();

function updateCartUI() {
    cartItemsContainer.innerHTML = ""; 
    let totalPrice = 0;
    let totalItems = 0; 
    
    if (cartArray.length === 0) {
        cartItemsContainer.innerHTML = "<p class='cart-empty'>Your cart is empty.</p>";
    } else {
        cartArray.forEach((item) => {
            totalPrice += (item.price * item.quantity); 
            totalItems += item.quantity; 

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" class="cart-item-img">
                    <div class="cart-item-details">
                        <p class="cart-item-title">${item.name}</p>
                        <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
                        
                        <div class="cart-qty-row">
                            <button class="decrease-btn cart-qty-btn" data-name="${item.name}">-</button>
                            <p class="cart-qty-text">Qty: ${item.quantity}</p>               
                            <button class="increase-btn cart-qty-btn" data-name="${item.name}">+</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    cartTotalPrice.innerText = `₹${totalPrice.toLocaleString('en-IN')}`;
    cartDisplay.innerText = totalItems; 
    localStorage.setItem("aCart", JSON.stringify(cartArray));
}

cartItemsContainer.addEventListener("click", (event) => {
    // It takes the exact element you clicked and searches upwards through its HTML parents to find and return the nearest element with either the "decrease-btn" or "increase-btn" class.
    const btn = event.target.closest(".decrease-btn, .increase-btn");
    if (!btn) return; 

    const itemName = btn.getAttribute("data-name");
    const itemIndex = cartArray.findIndex(item => item.name === itemName);
    if (itemIndex === -1) return; 

    if (btn.classList.contains("decrease-btn")) {
        if (cartArray[itemIndex].quantity > 1) {
            cartArray[itemIndex].quantity -= 1;
        } else {
            cartArray.splice(itemIndex, 1);
        }
    } else {
        cartArray[itemIndex].quantity += 1;
    }

    updateCartUI();
    syncShopButton(itemName);
});

function syncShopButton(itemName) {
    const addBtn = document.querySelector(`.add-to-cart-btn[data-name="${itemName}"]`);
    const qtyControls = document.querySelector(`.qty-controls[data-name="${itemName}"]`);
    const qtySpan = document.querySelector(`.shop-item-qty[data-name="${itemName}"]`);
    
    if (!addBtn || !qtyControls || !qtySpan) return; // Stop if any element is not on the page

    const cartItem = cartArray.find(item => item.name === itemName);
    
    addBtn.style.display = cartItem ? "none" : "block";
    qtyControls.style.display = cartItem ? "flex" : "none";
    if (cartItem) qtySpan.innerText = cartItem.quantity;
}

navCartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("open");
});

function closeCart() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("open");
}
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

shopSection.addEventListener("click", (event) => {
    const categoryBox = event.target.closest(".category-box");
    if (categoryBox) {
        event.preventDefault(); 
        const clickedCategory = categoryBox.getAttribute("data-category");
        renderProducts(clickedCategory);
        document.querySelector(".hero-section").style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
        return; 
    }
    
    const backBtn = event.target.closest(".back-to-categories-btn");
    if (backBtn) {
        renderCategories();
        document.querySelector(".hero-section").style.display = "flex";
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const cartBtn = event.target.closest(".add-to-cart-btn");
    if (cartBtn) {
        const itemName = cartBtn.getAttribute("data-name");
        const itemPrice = parseInt(cartBtn.getAttribute("data-price"));
        const itemImage = cartBtn.getAttribute("data-image");

        const existingItem = cartArray.find(item => item.name === itemName);

        if (!existingItem) {
            cartArray.push({ name: itemName, price: itemPrice, image: itemImage, quantity: 1 });
        }
        
        updateCartUI();
        syncShopButton(itemName);
        return;
    }

    const decreaseBtn = event.target.closest(".shop-decrease-btn");
    const increaseBtn = event.target.closest(".shop-increase-btn");

    if (decreaseBtn) {
        const itemName = decreaseBtn.getAttribute("data-name");
        const itemIndex = cartArray.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            if (cartArray[itemIndex].quantity > 1) {
                cartArray[itemIndex].quantity -= 1;
            } else {
                cartArray.splice(itemIndex, 1); 
            }
            updateCartUI();
            syncShopButton(itemName);
        }
    }

    if (increaseBtn) {
        const itemName = increaseBtn.getAttribute("data-name");
        const item = cartArray.find(item => item.name === itemName);
        if (item) {
            item.quantity += 1;
            updateCartUI();
            syncShopButton(itemName);
        }
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// HERO CAROUSEL LOGIC
const heroSection = document.querySelector(".hero-section");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const heroImages = ["url('hero_image.jpg')", "url('hero1.jpg')","url('hero2.jpg')","url('hero3.jpg')" ];
let currentHeroIndex = 0;

function changeHeroImage(direction) {
    if (direction === "next") {
        currentHeroIndex++;
        if (currentHeroIndex >= heroImages.length) currentHeroIndex = 0; 
    } else if (direction === "prev") {
        currentHeroIndex--;
        if (currentHeroIndex < 0) currentHeroIndex = heroImages.length - 1; 
    }
    heroSection.style.backgroundImage = heroImages[currentHeroIndex];
}

rightArrow.addEventListener("click", () => { changeHeroImage("next"); resetAutoPlay(); });
leftArrow.addEventListener("click", () => { changeHeroImage("prev"); resetAutoPlay(); });

let autoPlayTimer = setInterval(() => { changeHeroImage("next"); }, 4000);
function resetAutoPlay() {
    clearInterval(autoPlayTimer); // stops the current timer
    autoPlayTimer = setInterval(() => { changeHeroImage("next"); }, 4000);
}

// DARK MODE LOGIC 
const sunIconCode = "&#x1F31E;"; 
const moonIconCode = "&#127769;";

// On page load, check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkModeBtn.innerHTML = sunIconCode; 
} else {
    darkModeBtn.innerHTML = moonIconCode;
}

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark"); 
        darkModeBtn.innerHTML = sunIconCode;   
    } else {
        localStorage.setItem("theme", "light"); 
        darkModeBtn.innerHTML = moonIconCode;   
    }
});

updateCartUI(); // sync cart with any existing data from localStorage on page load