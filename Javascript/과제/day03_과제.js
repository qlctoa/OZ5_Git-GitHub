const cryptoList = document.getElementById('cryptoList');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const cryptoTable = document.getElementById('cryptoTable');
const allTab = document.getElementById('allTab');
const favoritesTab = document.getElementById('favoritesTab');

let allCryptoData = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentTab = 'all'; // 'all' 또는 'favorites'

// API에서 데이터를 불러오는 함수
async function fetchCryptoData() {
    try {
        const response = await fetch('https://api4.binance.com/api/v3/ticker/24hr');
        if (!response.ok) {
            throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        
        // USDT 마켓 데이터만 필터링하고 현재가가 0인 항목 제외
        allCryptoData = data.filter(item => item.symbol.endsWith('USDT') && parseFloat(item.lastPrice) !== 0);
        
        filterAndRender();
        loading.classList.add('hidden');
        cryptoTable.classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
        loading.textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
    }
}

// 탭 및 검색어에 따라 데이터를 필터링하고 렌더링하는 함수
function filterAndRender() {
    const searchTerm = searchInput.value.toUpperCase();
    let filteredData = allCryptoData.filter(item => item.symbol.includes(searchTerm));

    if (currentTab === 'favorites') {
        filteredData = filteredData.filter(item => favorites.includes(item.symbol));
    }

    renderData(filteredData);
}

// 데이터를 화면에 렌더링하는 함수
function renderData(data) {
    cryptoList.innerHTML = '';
    
    if (data.length === 0) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td colspan="6" class="empty-message">
                표시할 암호화폐가 없습니다.
            </td>
        `;

        cryptoList.appendChild(row);
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        
        const priceChange = parseFloat(item.priceChangePercent);
        const changeClass = priceChange >= 0 ? 'up' : 'down';
        const sign = priceChange >= 0 ? '+' : '';
        const isFavorite = favorites.includes(item.symbol);

        row.innerHTML = `
            <td>
                <button class="fav-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${item.symbol}')">
                    ${isFavorite ? '★' : '☆'}
                </button>
            </td>
            <td class="symbol">${item.symbol}</td>
            <td class="${changeClass}">${parseFloat(item.lastPrice).toLocaleString()}</td>
            <td class="${changeClass}">${sign}${priceChange.toFixed(2)}%</td>
            <td>${parseFloat(item.highPrice).toLocaleString()}</td>
            <td>${parseFloat(item.lowPrice).toLocaleString()}</td>
            <td>${Number(item.quoteVolume).toLocaleString()}</td>
        `;
        
        cryptoList.appendChild(row);
    });
}

// 관심항목 토글 함수
window.toggleFavorite = function(symbol) {
    const index = favorites.indexOf(symbol);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(symbol);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    filterAndRender();
};

// 검색 기능 구현
searchInput.addEventListener('input', () => {
    filterAndRender();
});

// 탭 전환 기능 구현
allTab.addEventListener('click', () => {
    currentTab = 'all';
    allTab.classList.add('active');
    favoritesTab.classList.remove('active');
    filterAndRender();
});

favoritesTab.addEventListener('click', () => {
    currentTab = 'favorites';
    favoritesTab.classList.add('active');
    allTab.classList.remove('active');
    filterAndRender();
});

// 초기 데이터 로드
fetchCryptoData();

//필터
let currentFilter = "all";
let isVolumeSort = false;

const allFilter = document.getElementById("allFilter");
const upFilter = document.getElementById("upFilter");
const downFilter = document.getElementById("downFilter");
const volumeSortBtn = document.getElementById("volumeSortBtn");
const refreshBtn = document.getElementById("refreshBtn");

function filterAndRender() {
    const searchTerm = searchInput.value.toUpperCase();
    let filteredData = allCryptoData.filter(item => item.symbol.includes(searchTerm));

    if (currentTab === "favorites") {
        filteredData = filteredData.filter(item => favorites.includes(item.symbol));
    }

    if (currentFilter === "up") {
        filteredData = filteredData.filter(item => Number(item.priceChangePercent) > 0);
    }

    if (currentFilter === "down") {
        filteredData = filteredData.filter(item => Number(item.priceChangePercent) < 0);
    }

    if (isVolumeSort) {
        filteredData.sort((a, b) => Number(b.quoteVolume) - Number(a.quoteVolume));
    }

    renderData(filteredData);
}

allFilter.addEventListener("click", () => {
    currentFilter = "all";
    setActiveFilterButton(allFilter);
    filterAndRender();
});

upFilter.addEventListener("click", () => {
    currentFilter = "up";
    setActiveFilterButton(upFilter);
    filterAndRender();
});

downFilter.addEventListener("click", () => {
    currentFilter = "down";
    setActiveFilterButton(downFilter);
    filterAndRender();
});

volumeSortBtn.addEventListener("click", () => {
    isVolumeSort = !isVolumeSort;
    volumeSortBtn.classList.toggle("active");
    filterAndRender();
});

refreshBtn.addEventListener("click", () => {
    fetchCryptoData();
});


function setActiveFilterButton(activeButton) {
    allFilter.classList.remove("active");
    upFilter.classList.remove("active");
    downFilter.classList.remove("active");

    activeButton.classList.add("active");
}

// 1초마다 데이터 갱신
setInterval(fetchCryptoData, 1000);