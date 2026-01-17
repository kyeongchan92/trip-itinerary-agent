// ====================
// Navigation & Tabs
// ====================

// Day Tab Switching
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));

        // Add active to clicked tab
        tab.classList.add('active');
        const day = tab.dataset.day;
        document.querySelector(`.day-content[data-day="${day}"]`).classList.add('active');
    });
});

// Timeline Item Click - Pan to Location
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const lat = parseFloat(item.dataset.lat);
        const lng = parseFloat(item.dataset.lng);
        if (lat && lng) {
            map.setView([lat, lng], 15);

            // Find and open corresponding marker popup
            markers.forEach(m => {
                if (Math.abs(m.lat - lat) < 0.001 && Math.abs(m.lng - lng) < 0.001) {
                    m.marker.openPopup();
                }
            });
        }
    });
});

// ====================
// Mobile Page Navigation
// ====================
const isMobile = () => window.innerWidth <= 768;

function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.remove('active');
    });
    const activeNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Reinitialize map if switching to schedule page
    if (pageId === 'schedule') {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
}

// Nav item click handlers
document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.addEventListener('click', () => {
        const pageId = navItem.dataset.page;
        switchPage(pageId);
    });
});

// Initialize: show first page on mobile
function initMobilePages() {
    if (isMobile()) {
        document.querySelectorAll('.page').forEach((p, i) => {
            if (i === 0) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });
    } else {
        // On desktop, show all pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.add('active');
        });
    }
}

// Handle resize - only resize map, don't reset page
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Initialize on load
initMobilePages();

// ====================
// Places Page Tabs (맛집/명소)
// ====================
document.querySelectorAll('.place-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;

        // Update tab buttons
        document.querySelectorAll('.place-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update tab content
        document.querySelectorAll('.place-tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});
