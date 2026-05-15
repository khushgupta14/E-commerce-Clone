# 🛒 E-Commerce Front-End Clone

A front-end e-commerce application built from scratch using **HTML5**,
**CSS3**, and **Vanilla JavaScript** — showcasing DOM manipulation,
dynamic rendering, and real-world UI patterns without any framework.

---

## 🌐 Live Demo

> 🔗 **[View Live Demo]()**

---

## ✨ Features

### 🗂️ Dynamic UI Rendering
Categories and product cards are generated entirely from JavaScript arrays — no hardcoded HTML. This keeps the code clean, scalable, and DRY.

### 🛒 Shopping Cart Sidebar
A slide-in cart sidebar with a dark overlay lets users view, manage, and remove items. It shows live item counts and total price.

### ➕ Add to Cart & Quantity Controls
An "Add to Cart" button transforms into inline +/− controls once clicked, staying in sync between the shop and cart sidebar.

### 💾 localStorage Persistence
The cart and dark mode preference are saved to `localStorage` — everything persists across page refreshes and tab closes.

### 🌙 Dark Mode Toggle
A Sun/Moon icon toggles light and dark themes via CSS root variables, with the preference saved to `localStorage`.

### 📄 Category Product Pages
Clicking a category dynamically renders a filtered product listing, with a "← Back to Categories" button to return to the main grid.

### 🖼️ Hero Image Carousel
The banner auto-rotates every 4 seconds. Manual arrow buttons also work and reset the auto-play timer on click.

### 📜 Smooth Scrolling & Back to Top
All page navigation uses smooth scrolling for a polished feel.

### 📱 Responsive Design
The shop grid scales from 4 → 2 → 1 columns on smaller screens.

---

## 📁 Project Structure

```
ecommerce-clone/
│
├── index.html                  # Main HTML structure
├── style.css                   # Styling, CSS variables, dark mode
├── script.js                   # All JavaScript logic
│
├── box1_image.jpg              # Category thumbnails
├── box2_image.jpg
├── box3_image.jpg
├── box4_image.jpg
├── box5_image.jpg
├── box6_image.jpg
├── box7_image.jpg
├── box8_image.jpg
│
├── hero_image.jpg              # Hero carousel images
├── hero1.jpg
├── hero2.jpg
├── hero3.jpg
│
└── box/                        # Product images
    ├── box1/                   # Clothes (8 products)
    │   ├── box1_image1.png
    │   ├── box1_image2.png
    │   ├── box1_image3.png
    │   ├── box1_image4.png
    │   ├── box1_image5.png
    │   ├── box1_image6.png
    │   ├── box1_image7.png
    │   └── box1_image8.png
    ├── box2/                   # Health & Personal Care
    ├── box3/                   # Furniture
    ├── box4/                   # Electronics
    ├── box5/                   # Beauty
    ├── box6/                   # Pet Care
    ├── box7/                   # Toys
    └── box8/                   # Fashion Trends
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Flexbox, CSS variables, transitions, responsive design |
| Vanilla JavaScript (ES6+) | DOM manipulation, event delegation, array methods |
| Font Awesome 7 | Icons (cart, location, search, etc.) |
| localStorage API | Cart persistence & dark mode memory |

---

## 🚀 How to Run

1. Clone or download the repository:

```bash
git clone 
```

2. Make sure all image files are in the correct folders (see structure above).
3. Open `index.html` in any modern browser — no build step or server required!

---

## 🙏 Acknowledgments

A big thank you to **[Shraddha Khapra (Apna College)](https://www.youtube.com/@ApnaCollegeOfficial)**
for the HTML & CSS foundation that started this project. 💛

---

## ⭐ Show Some Love

If you liked this project, drop a ⭐ on GitHub — it keeps me motivated to build more! 🚀