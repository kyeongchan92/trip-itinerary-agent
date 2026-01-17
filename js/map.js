// ====================
// Map Initialization
// ====================

// Initialize Map
const map = L.map('map').setView([22.6273, 120.3014], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom Icon Function
function createIcon(type) {
    const colors = {
        airport: '#10b981',
        attraction: '#667eea',
        food: '#f59e0b',
        night: '#ec4899',
        hotel: '#3b82f6'
    };

    const icons = {
        airport: '✈️',
        attraction: '📍',
        food: '🍜',
        night: '🌙',
        hotel: '🏨'
    };

    const size = type === 'airport' ? 36 : 28;

    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background: ${colors[type]}; color: white; border-radius: 50%; width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center; font-size: ${type === 'airport' ? '16px' : '12px'}; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
            ${icons[type]}
        </div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size/2]
    });
}

// Add Markers
const markers = [];

// Airport marker (special)
locations.airport.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createIcon('airport') })
        .addTo(map)
        .bindPopup(`<div class="popup-content" style="text-align:center;"><h3 style="color:#10b981;">${loc.name}</h3><p>${loc.desc}</p></div>`);
    markers.push({ marker, ...loc });
});

locations.attractions.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createIcon('attraction') })
        .addTo(map)
        .bindPopup(`<div class="popup-content"><h3>${loc.name}</h3><p>${loc.desc}</p></div>`);
    markers.push({ marker, ...loc });
});

locations.food.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createIcon('food') })
        .addTo(map)
        .bindPopup(`<div class="popup-content food"><h3>${loc.name}</h3><p>${loc.desc}</p></div>`);
    markers.push({ marker, ...loc });
});

locations.night.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createIcon('night') })
        .addTo(map)
        .bindPopup(`<div class="popup-content"><h3>${loc.name}</h3><p>${loc.desc}</p></div>`);
    markers.push({ marker, ...loc });
});

locations.hotel.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: createIcon('hotel') })
        .addTo(map)
        .bindPopup(`<div class="popup-content"><h3>${loc.name}</h3><p>${loc.desc}</p></div>`);
    markers.push({ marker, ...loc });
});
