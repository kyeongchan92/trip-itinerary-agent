// ====================
// GPS Location & Distance
// ====================
let currentLat = null;
let currentLng = null;

// Haversine 거리 계산 (km)
function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// 카드 거리 업데이트
function updateCardDistances() {
    document.querySelectorAll('.place-card').forEach(card => {
        const lat = parseFloat(card.dataset.lat);
        const lng = parseFloat(card.dataset.lng);
        const distEl = card.querySelector('.distance');

        if (currentLat && currentLng && lat && lng) {
            const dist = getDistance(currentLat, currentLng, lat, lng);
            distEl.textContent = dist.toFixed(1) + 'km';
        }
    });
}

// 현재 위치 가져오기
document.getElementById('get-location').addEventListener('click', function() {
    const btn = this;
    const text = document.getElementById('location-text');

    btn.classList.add('loading');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 가져오는 중...';

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            currentLat = pos.coords.latitude;
            currentLng = pos.coords.longitude;
            text.textContent = `📍 ${currentLat.toFixed(4)}, ${currentLng.toFixed(4)}`;
            text.classList.add('success');
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-location-arrow"></i> 위치 갱신';
            updateCardDistances();
        },
        (err) => {
            text.textContent = '⚠️ 위치 권한이 필요합니다';
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-location-arrow"></i> 다시 시도';
        }
    );
});

// ====================
// Filter Functionality
// ====================
function filterPlaces() {
    const area = document.getElementById('filter-area').value;
    const category = document.getElementById('filter-category').value;

    document.querySelectorAll('.place-card').forEach(card => {
        const cardArea = card.dataset.area;
        const cardCategory = card.dataset.category;

        const matchArea = area === 'all' || cardArea === area;
        const matchCategory = category === 'all' || cardCategory === category;

        card.style.display = (matchArea && matchCategory) ? '' : 'none';
    });
}

document.getElementById('filter-area').addEventListener('change', filterPlaces);
document.getElementById('filter-category').addEventListener('change', filterPlaces);
