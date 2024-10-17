const URL_API = 'http://localhost:3000';
async function fetchProducts() {
    try {
        const response = await fetch(URL_API + "/product");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
async function renderProducts() {
    const products = await fetchProducts();
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
                        <div class="space-x-2 flex text-sm">
                        `;
        product.size.forEach(size => {
            popularProductHTML +=
                `
                <label>
                    <input class="sr-only peer" name="size2" type="radio" value="${size}" checked />
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        ${size}
                    </div>
                </label>`;
        });
        popularProductHTML +=
            `
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
        </div>`;
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
    </div>`;
    });
    newDateProduct.innerHTML = newDateProductHTML;
}
document.addEventListener('DOMContentLoaded', renderProducts);
async function fetchLoaiSP() {
    try {
        const response = await fetch(URL_API + "/loaiSP");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
}
async function renderLoaiSP() {
    const loaiSP = await fetchLoaiSP();
    const loai_SP_List = document.getElementById('loaiSP_list');
    if (!loai_SP_List)
        return;
    let loaiSPHTML = '';
    loaiSP.forEach(loai => {
        loaiSPHTML += `
           
               
                    <li><a href="#" class="text-gray-700 hover:text-blue-500 font-semibold font-bold">${loai.name}</a></li>
             
           
        `;
    });
    loai_SP_List.innerHTML = loaiSPHTML;
}
window.onload = () => {
    renderProducts();
    renderLoaiSP();
};
