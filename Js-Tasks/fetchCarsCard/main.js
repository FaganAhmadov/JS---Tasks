// https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/turboaz.json
const Allcards = document.getElementById('cards')
const paginations = document.getElementById('pageNumbers')
const brandSelect = document.getElementById('brandSelect')
const modelSelect = document.getElementById('modelSelect')
const banTypeSelect = document.getElementById('banType')
const citySelect = document.getElementById('citySelect')
const yearSelect = document.getElementById('yearSelect')
let start = 0
let end = 12
let globalData = []





async function getData() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/turboaz.json')
        const { cars } = await res.json()
        globalData = cars
        renderCars()
        genetatePagination()
        fillSelect(globalData, 'brand', brandSelect)
        fillSelect(globalData, 'model', modelSelect)
        fillSelect(globalData, 'banType', banTypeSelect)
        fillSelect(globalData, 'year', yearSelect)
        fillSelect(globalData, 'city', citySelect)

    } catch (error) {
        console.log(error);
    }
}

function renderCars() {
    Allcards.innerHTML = ''
    globalData.slice(start, end).forEach(item => {
        Allcards.innerHTML += `
    <div class="w-[280px] rounded-2xl overflow-hidden border bg-white shadow hover:shadow-lg transition">
        <!-- Şəkil -->
        <div class="relative">
            <img src="${item.images}" class="h-52 w-full object-cover" />
            <!-- Year -->
            <span class="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs text-white">
                ${item.year}
            </span>
            <!-- Icons -->
            <div class="absolute right-3 top-3 flex flex-col gap-2">
                ${item.credit ? `
                <div class="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow text-sm">
                    💳
                </div>` : ''}
                ${item.barter ? `
                <div class="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow text-sm">
                    🔄
                </div>` : ''}
            </div>
        </div>
        <!-- Alt hissə -->
        <div class="p-4 space-y-3">
            <!-- Title + Price -->
            <div class="flex justify-between items-start gap-2">
                <div>
                    <h3 class="font-semibold text-gray-900 text-sm">
                        ${item.brand} ${item.model}
                    </h3>
                    <p class="text-xs text-gray-500">
                        ${item.banType} • ${item.city}
                    </p>
                </div>
                <span class="text-green-600 font-bold text-sm whitespace-nowrap">
                    ${item.price} ${item.currency}
                </span>
            </div>
            <!-- Info -->
            <div class="flex justify-between text-xs text-gray-600">
                <div class="bg-gray-50 px-2 py-1 rounded-md">
                    🚗 ${item.odometer} km
                </div>
                <div class="bg-gray-50 px-2 py-1 rounded-md">
                    ⚙️ ${item.engine} L
                </div>
            </div>
            <!-- Button -->
            <button class="w-full bg-black text-white text-xs py-2 rounded-lg hover:bg-gray-800 transition">
                Ətraflı bax
            </button>
        </div>
    </div>
            `
    });
}

function genetatePagination() {
    let totalPages = Math.ceil(globalData.length / 12)
    for (let i = 1; i <= totalPages; i++) {
        paginations.innerHTML += `<button onclick='getPagination(${i})' class="cursor-pointer page-btn px-3 py-1 border rounded-lg bg-black text-white">${i}</button>`
    }
}

function getPagination(page) {
    start = (page - 1) * 12
    end = page * 12
    renderCars()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function fillSelect(data, key, selectElem) {
    let uniqeValue = [...new Set(data.map(item => item[key]))]
    uniqeValue.forEach(item => selectElem.innerHTML += `<option value='${item}'>${item}</option>`)
}

getData()