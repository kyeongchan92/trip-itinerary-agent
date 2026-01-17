// ====================
// Checklist - LocalStorage
// ====================
const STORAGE_KEY = 'kaohsiung_packing_checklist';

// Load saved state
function loadChecklistState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const checkedItems = JSON.parse(saved);
        checkedItems.forEach(itemId => {
            const checkbox = document.getElementById(itemId);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.closest('li').classList.add('checked');
            }
        });
    }
}

// Save state
function saveChecklistState() {
    const checkedItems = [];
    document.querySelectorAll('.packing-category input[type="checkbox"]:checked').forEach(cb => {
        checkedItems.push(cb.id);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
}

// Add event listeners to all checkboxes
document.querySelectorAll('.packing-category input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const li = e.target.closest('li');
        if (e.target.checked) {
            li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
        saveChecklistState();
    });
});

// Load state on page load
loadChecklistState();

// ====================
// Transport Click → Google Maps Directions
// ====================
document.querySelectorAll('.timeline-transport').forEach(transport => {
    transport.addEventListener('click', () => {
        // 이전 timeline-item (출발지)
        let prevItem = transport.previousElementSibling;
        while (prevItem && !prevItem.classList.contains('timeline-item')) {
            prevItem = prevItem.previousElementSibling;
        }

        // 다음 timeline-item (도착지)
        let nextItem = transport.nextElementSibling;
        while (nextItem && !nextItem.classList.contains('timeline-item')) {
            nextItem = nextItem.nextElementSibling;
        }

        if (prevItem && nextItem) {
            const originLat = prevItem.dataset.lat;
            const originLng = prevItem.dataset.lng;
            const destLat = nextItem.dataset.lat;
            const destLng = nextItem.dataset.lng;

            if (originLat && originLng && destLat && destLng) {
                const url = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${destLat},${destLng}&travelmode=transit`;
                window.open(url, '_blank');
            }
        }
    });
});
