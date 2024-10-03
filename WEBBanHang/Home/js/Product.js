const products = [
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://leeandtee.vn/uploads/images/tin-tuc-tong-hop/mau-thoi-trang-hoan-thien-anh-vintage-1.jpg",
        size: ["XL", "L", "M", "S"] 
        
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://images2.thanhnien.vn/528068263637045248/2023/10/24/valeria-ao-len-2-16981148825261281515998.jpg",
        size: ["L", "M"]
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://c.pxhere.com/photos/e8/13/attractive_beautiful_beauty_blond_hair_eyes_face_fashion_female-1561889.jpg!d",
        size: ["XXL", "XL", "L"]
    },
    {
        name: "Áo sơ mi",
        price: "200",
        description: "Áo sơ mi chất lượng cao",
        image: "https://images2.thanhnien.vn/528068263637045248/2023/4/23/at16-1682228893035439297512.jpeg",
        size: ["XL", "L"]
    }
];

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = products.map(product => `
        <div class="flex font-sans bg-white rounded-lg shadow-lg p-4">
            <div class="flex-none w-48 relative">
                <img src="${product.image}" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                        ${product.name}
                    </h1>
                    <div class="text-lg font-semibold text-slate-500">
                        $${product.price}
                    </div>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        In stock
                    </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div class="space-x-2 flex text-sm">
                        ${product.size.map(size => `
                            <label>
                                <input class="sr-only peer" name="size2" type="radio" value="xs" checked />
                                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    ${size}
                                </div>
                            </label>`).join('')}
                    </div>
                </div>
                <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                        </button>
                        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Add to bag
                        </button>
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p class="text-sm text-slate-700">
                    Miễn phí vận chuyển trên tất cả các đơn đặt hàng trong Tp.HCM
                </p>
            </form>
        </div>
    `).join('');
}

// Render các sản phẩm khi trang được tải
window.onload = () => {
    renderProducts(products);
};
