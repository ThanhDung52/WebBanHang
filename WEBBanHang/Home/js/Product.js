const products = [
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://leeandtee.vn/uploads/images/tin-tuc-tong-hop/mau-thoi-trang-hoan-thien-anh-vintage-1.jpg",
        size: ["XL", "L", "M", "S"],
        hot: 0,
        luotXem: 100,
        ngay: "2023-09-27"
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://images2.thanhnien.vn/528068263637045248/2023/10/24/valeria-ao-len-2-16981148825261281515998.jpg",
        size: ["L", "M"],
        hot: 0,
        luotXem: 100,
        ngay: "2024-02-16"
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://c.pxhere.com/photos/e8/13/attractive_beautiful_beauty_blond_hair_eyes_face_fashion_female-1561889.jpg!d",
        size: ["XXL", "XL", "L"],
        hot: 0,
        luotXem: 100,
        ngay: "2024-05-16"
    },
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://images.pexels.com/photos/28345626/pexels-photo-28345626/free-photo-of-nhi-p-nh-v-redor-c-a-th-gi-i.jpeg?auto=compress&cs=tinysrgb&w=600g",
        size: ["XL", "L", "M", "S"],
        hot: 0,
        luotXem: 300,
        ngay: "2023-09-27"
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://images.pexels.com/photos/28345695/pexels-photo-28345695/free-photo-of-nhi-p-nh-v-redor-c-a-th-gi-i.jpeg?auto=compress&cs=tinysrgb&w=600",
        size: ["L", "M"],
        hot: 1,
        luotXem: 1000,
        ngay: "2024-02-16"
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://images.pexels.com/photos/28345762/pexels-photo-28345762/free-photo-of-nhi-p-nh-v-redor-c-a-th-gi-i.jpeg?auto=compress&cs=tinysrgb&w=600",
        size: ["XXL", "XL", "L"],
        hot: 0,
        luotXem: 100,
        ngay: "2024-05-16"
    },
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2021/08/31/11/59/androgynous-6588615_640.jpg",
        size: ["XL", "L", "M", "S"],
        hot: 0,
        luotXem: 1001,
        ngay: "2023-09-27"
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614_640.jpg",
        size: ["L", "M"],
        hot: 1,
        luotXem: 1002,
        ngay: "2024-02-16"
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg",
        size: ["XXL", "XL", "L"],
        hot: 0,
        luotXem: 1004,
        ngay: "2024-05-16"
    },
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_640.jpg",
        size: ["XL", "L", "M", "S"],
        hot: 0,
        luotXem: 1003,
        ngay: "2023-09-27"
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://images2.thanhnien.vn/528068263637045248/2023/10/24/valeria-ao-len-2-16981148825261281515998.jpg",
        size: ["L", "M"],
        hot: 1,
        luotXem: 100,
        ngay: "2024-02-16"
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_640.jpg",
        size: ["XXL", "XL", "L"],
        hot: 1,
        luotXem: 100,
        ngay: "2024-05-16"
    },
    {
        name: "Áo Thun",
        price: "100",
        description: "Áo Thun chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2022/08/23/04/12/vietnamese-woman-7404948_640.jpg",
        size: ["XL", "L", "M", "S"],
        hot: 0,
        luotXem: 100,
        ngay: "2023-09-27"
    },
    {
        name: "Áo Len",
        price: "110",
        description: "Áo len chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2015/04/10/17/09/woman-716592_640.jpg",
        size: ["L", "M"],
        hot: 1,
        luotXem: 100,
        ngay: "2024-02-16"
    },
    {
        name: "Quần short",
        price: "250",
        description: "Quần short chất lượng cao",
        image: "https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828786_640.jpg",
        size: ["XXL", "XL", "L"],
        hot: 0,
        luotXem: 100,
        ngay: "2024-05-16"
    },
];
function renderProducts(products) {
    console.log('Rendering products:', products);
    const productList = document.getElementById('product-list');
    const popularProductList = document.getElementById('popular-product-list');
    const popularHotList = document.getElementById('hot-product-list');
    const newDateProduct = document.getElementById('newDate_product');
    if (!productList || !popularProductList || !popularHotList || !newDateProduct)
        return;
    let productHTML = '';
    let popularProductHTML = '';
    let popularHotProductHTML = '';
    let newDateProductHTML = '';
    products.slice(0, 4).forEach(product => {
        productHTML += `
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
            
        </div>
                    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div class="space-x-2 flex text-sm">`;
        product.size.forEach(size => {
            productHTML += `
                <label>
                    <input class="sr-only peer" name="size2" type="radio" value="${size}" checked />
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        ${size}
                    </div>
                </label>`;
        });
        productHTML += `
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
        `;
    });
    productList.innerHTML = productHTML;
    const popularProducts = products.sort(function (a, b) {
        let d1 = a.luotXem;
        let d2 = b.luotXem;
        if (d1 < d2)
            return 1;
        if (d1 > d2)
            return -1;
        else
            return 0;
    });
    popularProducts.slice(0, 4).forEach(product => {
        popularProductHTML += `
            <div class="flex font-sans bg-white rounded-lg shadow-lg p-4">
                <div class="flex-none w-48 relative">
                    <img src="${product.image}" alt="${product.name}" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
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
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            Số lượt xem:
                             ${product.luotXem}
                        </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div class="space-x-2 flex text-sm">`;
        product.size.forEach(size => {
            popularProductHTML += `
                <label>
                    <input class="sr-only peer" name="size2" type="radio" value="${size}" checked />
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        ${size}
                    </div>
                </label>`;
        });
        popularProductHTML += `
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
        `;
    });
    popularProductList.innerHTML = popularProductHTML;
    const popularHotProduct = products.filter(function (sp) {
        if (sp.hot == 1)
            return true;
        else
            return false;
    });
    popularHotProduct.slice(0, 4).forEach(product => {
        popularHotProductHTML += `
         <div class="flex justify-center">
            <div class="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 w-full max-w-sm mx-2">
                <div class="flex-none w-full relative overflow-hidden rounded-lg">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-60  object-cover" loading="lazy" />
                </div>
                
            </div>
        </div>
    `;
    });
    popularHotList.innerHTML = popularHotProductHTML;
    const newDate_product = products.sort(function (a, b) {
        let d1 = new Date(a.ngay);
        let d2 = new Date(b.ngay);
        if (d1 < d2)
            return 1;
        else if (d2 < d1)
            return -1;
        else
            return 0;
    });
    newDate_product.slice(0, 2).forEach(product => {
        newDateProductHTML += `
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
    
</div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div class="space-x-2 flex text-sm">`;
        product.size.forEach(size => {
            newDateProductHTML += `
        <label>
            <input class="sr-only peer" name="size2" type="radio" value="${size}" checked />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                ${size}
            </div>
        </label>`;
        });
        newDateProductHTML += `
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
`;
    });
    newDateProduct.innerHTML = newDateProductHTML;
}
const loai_SP = [
    { id: 1, name: "Áo thun nam", thutu: 1, anhien: 1 },
    { id: 2, name: "Áo sơ mi nữ", thutu: 2, anhien: 1 },
    { id: 3, name: "Quần jean nam", thutu: 3, anhien: 1 },
    { id: 4, name: "Váy dạ hội", thutu: 4, anhien: 0 },
    { id: 5, name: "Áo khoác nữ", thutu: 5, anhien: 1 },
    { id: 6, name: "Quần short nam", thutu: 6, anhien: 0 },
    { id: 7, name: "Áo dài truyền thống", thutu: 7, anhien: 1 }
];
function renderLoaiSP(loai_SP) {
    console.log("redering loaiSP", loai_SP);
    const loai_SP_List = document.getElementById('loaiSP_list');
    if (!loai_SP_List)
        return;
    let loaiSPHTML = '';
    loai_SP.forEach(loai => {
        loaiSPHTML += `
           
               
                    <li><a href="#" class="text-gray-700 hover:text-blue-500 font-semibold font-bold">${loai.name}</a></li>
             
           
        `;
    });
    loai_SP_List.innerHTML = loaiSPHTML;
}
window.onload = () => {
    renderProducts(products);
    renderLoaiSP(loai_SP);
};

