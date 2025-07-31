// VERVEA E-commerce Website JavaScript - Updated with Expanded Product Catalog and Bug Fixes

// Expanded Product data - 20+ products each for men and women
const products = [
    // Men's Products (22 items)
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 899,
        originalPrice: 1799,
        category: "men",
        type: "Used",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        rating: 4.5,
        reviews: 23,
        brand: "Premium Brand",
        description: "Premium cotton t-shirt. Carefully cleaned and sanitized. Perfect for everyday wear with modern fit design."
    },
    {
        id: 2,
        name: "Designer Denim Jacket",
        price: 2199,
        originalPrice: 4399,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4ui4IyeSrpDSG6AuevwruuGprNOTPS3E3Q&s",
        rating: 4.8,
        reviews: 45,
        brand: "Designer Label",
        description: "Stylish denim jacket from premium brand. Brand new with tags. Timeless style for any occasion."
    },
    {
        id: 3,
        name: "Slim Fit Jeans",
        price: 1499,
        originalPrice: 2999,
        category: "men",
        type: "Used",
        image: "https://m.media-amazon.com/images/I/81dXo1oLy+L._UY350_.jpg",
        rating: 4.3,
        reviews: 67,
        brand: "Denim Co",
        description: "Blue slim fit jeans. Professionally cleaned and restored. Perfect fit for modern styling."
    },
    {
        id: 4,
        name: "Formal White Shirt",
        price: 1299,
        originalPrice: 2599,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzh-Yg8d8dzX6nR3HaD3Az5KVR1BVNJLrRuA&s",
        rating: 4.6,
        reviews: 34,
        brand: "Formal Wear",
        description: "Crisp white dress shirt. Brand new condition. Ideal for professional settings and formal occasions."
    },
    {
        id: 5,
        name: "Casual Polo Shirt",
        price: 799,
        originalPrice: 1599,
        category: "men",
        type: "Used",
        image: "https://images-cdn.ubuy.co.in/667c0c25337a8c25680e58b3-summer-breathable-polo-shirts-men-korean.jpg",
        rating: 4.2,
        reviews: 28,
        brand: "Polo Brand",
        description: "Navy polo shirt. Thoroughly sanitized and cleaned. Classic style for smart-casual occasions."
    },
    {
        id: 6,
        name: "Leather Jacket",
        price: 3499,
        originalPrice: 6999,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        rating: 4.9,
        reviews: 56,
        brand: "Leather Co",
        description: "Black leather jacket. Brand new with original tags. Premium quality leather for lasting style."
    },
    {
        id: 7,
        name: "Khaki Chinos",
        price: 1099,
        originalPrice: 2199,
        category: "men",
        type: "Used",
        image: "https://imagescdn.peterengland.com/img/app/product/9/931687-11833861.jpg?auto=format&w=390",
        rating: 4.4,
        reviews: 41,
        brand: "Chino Style",
        description: "Beige chino pants. Dry cleaned to perfection. Versatile pants for casual and semi-formal wear."
    },
    {
        id: 8,
        name: "Graphic Hoodie",
        price: 1799,
        originalPrice: 3599,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://images-cdn.ubuy.co.in/6351c8bbbdb9027c80152b66-xyxiongmao-techware-graphic-hoodies.jpg",
        rating: 4.7,
        reviews: 52,
        brand: "Street Wear",
        description: "Trendy graphic hoodie. Brand new condition. Perfect for casual streetwear styling."
    },
    {
        id: 9,
        name: "Striped Long Sleeve",
        price: 999,
        originalPrice: 1999,
        category: "men",
        type: "Used",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx2XXLJDQAYAJMyuD7YD_P1M6jVUGigBkbA&s",
        rating: 4.1,
        reviews: 25,
        brand: "Casual Wear",
        description: "Striped long sleeve shirt. Carefully cleaned and pressed. Great for layering and casual looks."
    },
    {
        id: 10,
        name: "Bomber Jacket",
        price: 2299,
        originalPrice: 4599,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
        rating: 4.5,
        reviews: 38,
        brand: "Urban Style",
        description: "Olive bomber jacket. Brand new with tags. Modern military-inspired design for urban fashion."
    },
    {
        id: 11,
        name: "Cargo Pants",
        price: 1399,
        originalPrice: 2799,
        category: "men",
        type: "Used",
        image: "https://assets.ajio.com/medias/sys_master/root/20241013/Me9v/670b79bdf9b8ef490bb12084/-473Wx593H-700571740-black-MODEL2.jpg",
        rating: 4.3,
        reviews: 29,
        brand: "Utility Wear",
        description: "Tactical cargo pants. Professionally restored. Multiple pockets for functionality and style."
    },
    {
        id: 12,
        name: "V-Neck Sweater",
        price: 1699,
        originalPrice: 3399,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://imagescdn.louisphilippe.com/img/app/product/3/39691037-14124933.jpg?auto=format&w=390",
        rating: 4.6,
        reviews: 44,
        brand: "Knitwear",
        description: "Wool v-neck sweater. Brand new condition. Premium wool blend for comfort and warmth."
    },
    {
        id: 13,
        name: "Denim Shirt",
        price: 1199,
        originalPrice: 2399,
        category: "men",
        type: "Used",
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2284633/2018/2/19/11519031607868-Roadster-Men-Shirts-5971519031607655-1.jpg",
        rating: 4.2,
        reviews: 33,
        brand: "Denim Brand",
        description: "Light blue denim shirt. Thoroughly cleaned and pressed. Classic piece for casual styling."
    },
    {
        id: 14,
        name: "Track Pants",
        price: 899,
        originalPrice: 1799,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw84e943ef/images/hi-res/502.180391_80013_00_HR.jpg?sw=1920",
        rating: 4.4,
        reviews: 61,
        brand: "Sportswear",
        description: "Athletic track pants. Brand new with original tags. Perfect for sports and casual wear."
    },
    {
        id: 15,
        name: "Flannel Shirt",
        price: 1299,
        originalPrice: 2599,
        category: "men",
        type: "Used",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_D-130vYuHjpqCo_mLepCMccL1IUvBa0bg&s",
        rating: 4.5,
        reviews: 27,
        brand: "Flannel Co",
        description: "Red flannel shirt. Carefully restored and cleaned. Cozy and stylish for cooler weather."
    },
    {
        id: 16,
        name: "Joggers",
        price: 799,
        originalPrice: 1599,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://hips.hearstapps.com/hmg-prod/images/mhl-joggers-rhone-731-67a515b17517b.jpg?crop=0.500xw:1.00xh;0.252xw,0&resize=1200:*",
        rating: 4.3,
        reviews: 48,
        brand: "Active Wear",
        description: "Comfortable joggers. Brand new condition. Perfect for workouts and lounging."
    },
    {
        id: 17,
        name: "Blazer",
        price: 2799,
        originalPrice: 5599,
        category: "men",
        type: "Used",
        image: "https://thehouseofrare.com/cdn/shop/files/jardo-mens-blazer-dark-grey27624_a58386a6-22c2-47bc-8c93-15e4cc9dd700.jpg?v=1743585410",
        rating: 4.7,
        reviews: 35,
        brand: "Formal Wear",
        description: "Navy blazer. Professionally dry cleaned. Essential piece for business and formal occasions."
    },
    {
        id: 18,
        name: "Tank Top",
        price: 599,
        originalPrice: 1199,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://fuaark.com/cdn/shop/files/Fuaark_24.jpg?v=1734001558",
        rating: 4.1,
        reviews: 22,
        brand: "Basic Wear",
        description: "White tank top. Brand new with tags. Essential basic for layering and summer wear."
    },
    {
        id: 19,
        name: "Shorts",
        price: 799,
        originalPrice: 1599,
        category: "men",
        type: "Used",
        image: "https://m.media-amazon.com/images/I/81PMGV72EgL._UY1100_.jpg",
        rating: 4.2,
        reviews: 31,
        brand: "Summer Wear",
        description: "Casual shorts. Thoroughly cleaned and pressed. Perfect for summer and casual activities."
    },
    {
        id: 20,
        name: "Button-Up Shirt",
        price: 1399,
        originalPrice: 2799,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PJq-GREM_xUWdhgClnYZ2zHv6GnXF0hdRg&s",
        rating: 4.6,
        reviews: 42,
        brand: "Shirt Co",
        description: "Checkered button shirt. Brand new condition. Versatile piece for casual and smart-casual looks."
    },
    {
        id: 21,
        name: "Cardigan",
        price: 1899,
        originalPrice: 3799,
        category: "men",
        type: "Used",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JZuar1C9Iwr-sOiTHPR_MIIp1CamxhUw5A&s",
        rating: 4.4,
        reviews: 28,
        brand: "Knitwear",
        description: "Knit cardigan. Carefully cleaned and restored. Cozy layer piece for sophisticated styling."
    },
    {
        id: 22,
        name: "Swim Shorts",
        price: 699,
        originalPrice: 1399,
        category: "men",
        type: "New (Dead Stock)",
        image: "https://assets.ajio.com/medias/sys_master/root/20240906/W3gR/66da303c1d763220fac95eb2/-1117Wx1400H-700380717-green-MODEL.jpg",
        rating: 4.3,
        reviews: 19,
        brand: "Swimwear",
        description: "Beach shorts. Brand new with tags. Quick-dry material perfect for swimming and beach activities."
    },

    // Women's Products (22 items)
    {
        id: 23,
        name: "Floral Maxi Dress",
        price: 1899,
        originalPrice: 3799,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://www.vastranand.in/cdn/shop/files/1_bc4cce67-0c92-4034-b34b-644c1cd9ea66.jpg?v=1743074442",
        rating: 4.7,
        reviews: 65,
        brand: "Floral Design",
        description: "Beautiful floral maxi dress. Brand new with tags. Perfect for summer occasions and events."
    },
    {
        id: 24,
        name: "High-Waist Jeans",
        price: 1699,
        originalPrice: 3399,
        category: "women",
        type: "Used",
        image: "https://m.media-amazon.com/images/I/81DTZcG8VYL._UY1100_.jpg",
        rating: 4.5,
        reviews: 78,
        brand: "Denim Style",
        description: "Vintage high waist jeans. Professionally cleaned and restored. Flattering fit for all body types."
    },
    {
        id: 25,
        name: "Silk Blouse",
        price: 1299,
        originalPrice: 2599,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge0_hye4gggRZnlwZSTRSERk-94uhBXjHZA&s",
        rating: 4.8,
        reviews: 54,
        brand: "Silk Collection",
        description: "Elegant silk blouse. Brand new condition. Luxurious fabric perfect for professional and formal wear."
    },
    {
        id: 26,
        name: "Leather Skirt",
        price: 1599,
        originalPrice: 3199,
        category: "women",
        type: "Used",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqPuM2J4iZAH7rlxa5tm1jSvTXsIvidwJaw&s",
        rating: 4.4,
        reviews: 41,
        brand: "Leather Fashion",
        description: "Black leather mini skirt. Carefully cleaned and conditioned. Edgy piece for modern styling."
    },
    {
        id: 27,
        name: "Crop Top",
        price: 799,
        originalPrice: 1599,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS6D7Xwal6Clb-oHIBhvj-Hud_fKEDaiCtw&s",
        rating: 4.2,
        reviews: 37,
        brand: "Trendy Tops",
        description: "Trendy crop top. Brand new with original tags. Perfect for creating stylish layered outfits."
    },
    {
        id: 28,
        name: "Midi Skirt",
        price: 1199,
        originalPrice: 2399,
        category: "women",
        type: "Used",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25952710/2024/5/8/f736c7d3-e3e7-4861-a5ab-816ea340791a1715160466806-SASSAFRAS-Blue-Side-Slit-A-Line-Midi-Skirt-2301715160466457-1.jpg",
        rating: 4.6,
        reviews: 49,
        brand: "Skirt Collection",
        description: "Pleated midi skirt. Professionally pressed and cleaned. Versatile piece for office and casual wear."
    },
    {
        id: 29,
        name: "Cardigan Sweater",
        price: 1499,
        originalPrice: 2999,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/24/CVEumdYD_72620e7b2e914aed89cc3339325c5c3f.jpg",
        rating: 4.5,
        reviews: 62,
        brand: "Cozy Knits",
        description: "Cozy cardigan sweater. Brand new condition. Soft knit perfect for layering in any season."
    },
    {
        id: 30,
        name: "Palazzo Pants",
        price: 1099,
        originalPrice: 2199,
        category: "women",
        type: "Used",
        image: "https://assets.ajio.com/medias/sys_master/root/20230704/aV1i/64a43001a9b42d15c9342dcd/-473Wx593H-442087660-ecru-MODEL.jpg",
        rating: 4.3,
        reviews: 33,
        brand: "Flowy Fashion",
        description: "Flowy palazzo pants. Carefully cleaned and pressed. Comfortable and elegant for any occasion."
    },
    {
        id: 31,
        name: "Off-Shoulder Top",
        price: 999,
        originalPrice: 1999,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://m.media-amazon.com/images/I/819+noqHx7L._UY1100_.jpg",
        rating: 4.4,
        reviews: 45,
        brand: "Romantic Style",
        description: "Romantic off-shoulder top. Brand new with tags. Feminine design perfect for date nights and events."
    },
    {
        id: 32,
        name: "Pencil Skirt",
        price: 1299,
        originalPrice: 2599,
        category: "women",
        type: "Used",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGaoDBiLzqaGtxVa2sIhZVBCzmZeRp6PHlA&s",
        rating: 4.7,
        reviews: 56,
        brand: "Professional Wear",
        description: "Professional pencil skirt. Dry cleaned to perfection. Essential piece for business wardrobe."
    },
    {
        id: 33,
        name: "Wrap Dress",
        price: 1799,
        originalPrice: 3599,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/24/OjrJ6dyq_82e225870a4843cba207bbd5466f1194.jpg",
        rating: 4.6,
        reviews: 73,
        brand: "Dress Collection",
        description: "Versatile wrap dress. Brand new condition. Flattering silhouette suitable for various occasions."
    },
    {
        id: 34,
        name: "Denim Jacket",
        price: 1399,
        originalPrice: 2799,
        category: "women",
        type: "Used",
        image: "https://assets.ajio.com/medias/sys_master/root/20240827/UvBB/66cd55eb1d763220fa9d54de/-473Wx593H-700325944-blue-MODEL.jpg",
        rating: 4.3,
        reviews: 68,
        brand: "Denim Co",
        description: "Classic denim jacket. Thoroughly cleaned and restored. Timeless piece for layering and casual looks."
    },
    {
        id: 35,
        name: "Bodysuit",
        price: 899,
        originalPrice: 1799,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://m.media-amazon.com/images/I/71d1njXtaWL._UY1100_.jpg",
        rating: 4.2,
        reviews: 39,
        brand: "Body Wear",
        description: "Sleek bodysuit. Brand new with tags. Perfect base layer for creating sophisticated outfits."
    },
    {
        id: 36,
        name: "Wide-Leg Trousers",
        price: 1599,
        originalPrice: 3199,
        category: "women",
        type: "Used",
        image: "https://assets.ajio.com/medias/sys_master/root/20240504/57xg/6635e29905ac7d77bb3e689f/-473Wx593H-467300818-beige-MODEL.jpg",
        rating: 4.5,
        reviews: 47,
        brand: "Trouser Style",
        description: "Elegant wide leg pants. Professionally cleaned and pressed. Sophisticated choice for modern women."
    },
    {
        id: 37,
        name: "Camisole",
        price: 699,
        originalPrice: 1399,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7wwkMWWQshyx2uLS1dgmGzY-KZeDPAf9OA&s",
        rating: 4.1,
        reviews: 28,
        brand: "Delicate Wear",
        description: "Delicate camisole. Brand new condition. Perfect for layering or wearing alone in warm weather."
    },
    {
        id: 38,
        name: "A-Line Dress",
        price: 1499,
        originalPrice: 2999,
        category: "women",
        type: "Used",
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29347488/2024/5/4/4160fae6-2d8f-4673-8214-7a951b3802861714761320081AmbraeeLinenA-LineMidiDress1.jpg",
        rating: 4.6,
        reviews: 52,
        brand: "Classic Dresses",
        description: "Classic a-line dress. Carefully cleaned and pressed. Timeless silhouette flattering for all body types."
    },
    {
        id: 39,
        name: "Blazer",
        price: 2199,
        originalPrice: 4399,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://images-cdn.ubuy.co.in/67f230898127dc5b2b0ef27a-luvamia-womens-business-casual-blazer.jpg",
        rating: 4.8,
        reviews: 64,
        brand: "Power Suits",
        description: "Power blazer. Brand new with tags. Professional piece essential for business and formal occasions."
    },
    {
        id: 40,
        name: "Jeggings",
        price: 999,
        originalPrice: 1999,
        category: "women",
        type: "Used",
        image: "https://myprisma.in/cdn/shop/files/2_dc7b4f21-c7db-496c-b7e7-4314e09c03fd.jpg?v=1700742965",
        rating: 4.3,
        reviews: 71,
        brand: "Comfort Wear",
        description: "Comfortable jeggings. Thoroughly cleaned and sanitized. Perfect blend of style and comfort for everyday wear."
    },
    {
        id: 41,
        name: "Halter Top",
        price: 799,
        originalPrice: 1599,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://www.styched.in/cdn/shop/files/Halterneckbacklesstop-XS.jpg?v=1747853399",
        rating: 4.2,
        reviews: 34,
        brand: "Summer Tops",
        description: "Summer halter top. Brand new condition. Perfect for warm weather and beach vacations."
    },
    {
        id: 42,
        name: "Culottes",
        price: 1199,
        originalPrice: 2399,
        category: "women",
        type: "Used",
        image: "https://m.media-amazon.com/images/I/61DV8yL8v6L._UY1100_.jpg",
        rating: 4.4,
        reviews: 43,
        brand: "Modern Style",
        description: "Trendy culottes. Professionally cleaned and pressed. Modern silhouette perfect for contemporary styling."
    },
    {
        id: 43,
        name: "Tunic",
        price: 1099,
        originalPrice: 2199,
        category: "women",
        type: "New (Dead Stock)",
        image: "https://img.faballey.com/images/Product/RTN00067Z/d3.jpg",
        rating: 4.5,
        reviews: 38,
        brand: "Flowing Fashion",
        description: "Flowing tunic. Brand new with tags. Comfortable and stylish piece perfect for casual and semi-formal wear."
    },
    {
        id: 44,
        name: "Jumpsuit",
        price: 2299,
        originalPrice: 4599,
        category: "women",
        type: "Used",
        image: "https://imagescdn.pantaloons.com/img/app/product/1/1054203-15344163.jpg?auto=format&w=450",
        rating: 4.7,
        reviews: 59,
        brand: "One Piece",
        description: "Elegant jumpsuit. Carefully cleaned and restored. Sophisticated one-piece perfect for special occasions."
    }
];

// Application state
let currentCategory = 'all';
let cart = [];
let filteredProducts = [...products];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initCountdownTimer();
    displayFeaturedProducts();
    updateCartCount();
    
    // Initialize filter event listeners
    setTimeout(() => {
        const typeFilter = document.getElementById('typeFilter');
        const priceFilter = document.getElementById('priceFilter');
        
        if (typeFilter) {
            typeFilter.addEventListener('change', filterProducts);
        }
        if (priceFilter) {
            priceFilter.addEventListener('change', filterProducts);
        }
    }, 100);
});

// Countdown Timer
function initCountdownTimer() {
    const endDate = new Date('2025-08-15T23:59:59').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        } else {
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Navigation functions
function goHome() {
    showPage('homePage');
    currentCategory = 'all';
}

function showCategory(category) {
    currentCategory = category;
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = `Shop ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }
    
    // Reset filters when switching categories
    const typeFilter = document.getElementById('typeFilter');
    const priceFilter = document.getElementById('priceFilter');
    if (typeFilter) typeFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    
    filterProducts();
    showPage('categoryPage');
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productDetail = document.getElementById('productDetail');
    if (!productDetail) return;
    
    productDetail.innerHTML = `
        <div class="container">
            <button class="btn btn--outline" style="margin-bottom: var(--space-16);" onclick="goBack()">← Back</button>
            <div class="product-detail-content">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="product-detail-image">
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <div class="product-brand" style="margin-bottom: var(--space-16);">Brand: ${product.brand}</div>
                    <span class="product-type ${product.type.includes('Used') ? 'used' : 'new'}">${product.type}</span>
                    <div class="product-price">
                        <span class="current-price">₹${product.price}</span>
                        <span class="original-price">₹${product.originalPrice}</span>
                    </div>
                    <div class="product-rating" style="margin-bottom: var(--space-16);">
                        <span class="stars">${renderStars(product.rating)}</span>
                        <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="hero-countdown" style="margin-bottom: var(--space-16);">
                        <div class="countdown-timer" id="productCountdown">
                            <div class="time-unit">
                                <span class="time-value" id="productDays">00</span>
                                <span class="time-label">Days</span>
                            </div>
                            <div class="time-unit">
                                <span class="time-value" id="productHours">00</span>
                                <span class="time-label">Hours</span>
                            </div>
                            <div class="time-unit">
                                <span class="time-value" id="productMinutes">00</span>
                                <span class="time-label">Minutes</span>
                            </div>
                            <div class="time-unit">
                                <span class="time-value" id="productSeconds">00</span>
                                <span class="time-label">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn--primary btn--lg btn--full-width" onclick="addToCart(${product.id})">
                        Add to Cart - ₹${product.price}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Initialize product page countdown
    initProductCountdown();
    showPage('productPage');
}

function initProductCountdown() {
    const endDate = new Date('2025-08-15T23:59:59').getTime();
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('productDays');
            const hoursEl = document.getElementById('productHours');
            const minutesEl = document.getElementById('productMinutes');
            const secondsEl = document.getElementById('productSeconds');
            
            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        }
    }
    
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
    
    // Clear interval when leaving product page
    setTimeout(() => clearInterval(intervalId), 300000);
}

function goBack() {
    if (currentCategory === 'all') {
        goHome();
    } else {
        showCategory(currentCategory);
    }
}

// Product display functions
function displayFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    const featuredProducts = products.slice(0, 8); // Show first 8 products as featured
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function displayCategoryProducts() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-actions">
                <button class="action-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">🛒</button>
            </div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="product-type ${product.type.includes('Used') ? 'used' : 'new'}">${product.type}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="original-price">₹${product.originalPrice}</span>
                </div>
                <div class="product-rating">
                    <span class="stars">${renderStars(product.rating)}</span>
                    <span class="rating-text">${product.rating} (${product.reviews})</span>
                </div>
                <div class="discount-badge" style="color: var(--color-success); font-weight: var(--font-weight-semibold); font-size: var(--font-size-sm);">
                    ${discount}% OFF
                </div>
            </div>
        </div>
    `;
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '☆';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Filtering functions
function filterProducts() {
    let filtered = products.filter(product => {
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        return true;
    });
    
    // Apply type filter
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter && typeFilter.value !== 'all') {
        filtered = filtered.filter(product => product.type === typeFilter.value);
    }
    
    // Apply price filter
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter && priceFilter.value !== 'all') {
        filtered = filtered.filter(product => {
            switch (priceFilter.value) {
                case 'low':
                    return product.price < 1000;
                case 'mid':
                    return product.price >= 1000 && product.price <= 2000;
                case 'high':
                    return product.price > 2000;
                default:
                    return true;
            }
        });
    }
    
    filteredProducts = filtered;
    displayCategoryProducts();
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;
    
    const isHidden = cartModal.classList.contains('hidden');
    
    if (isHidden) {
        displayCartItems();
        cartModal.classList.remove('hidden');
    } else {
        cartModal.classList.add('hidden');
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartEmpty || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.classList.remove('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-type">${item.type}</div>
                    <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order! Total: ₹${total}\n\nYour items will be processed and shipped within 2-3 business days. You will receive a confirmation email shortly.`);
    
    // Clear cart after checkout
    cart = [];
    updateCartCount();
    toggleCart();
}

function showCartNotification() {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.textContent = 'Item added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 3000;
        font-weight: 500;
        box-shadow: var(--shadow-lg);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add keyframe animation
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    if (cartModal && event.target === cartModal) {
        toggleCart();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        if (cartModal && !cartModal.classList.contains('hidden')) {
            toggleCart();
        }
    }
});

// Global functions to ensure they're available
window.goHome = goHome;
window.showCategory = showCategory;
window.showProductDetail = showProductDetail;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.checkout = checkout;
window.filterProducts = filterProducts;
window.goBack = goBack;